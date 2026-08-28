export type JlptLessonStudyPhase = "study" | "test" | "done";

export type JlptLessonStudyStatus = "incomplete" | "study" | "test-ready" | "done";

export interface JlptLessonCardRef {
  id?: string | number | null;
}

export interface JlptLessonStudySessionLike {
  phase?: string | null;
  currentIndex?: number | null;
  answers?: Record<string, unknown> | null;
  completedAt?: string | null;
}

export interface JlptLessonStudyStateInput {
  cards?: JlptLessonCardRef[] | null;
  session?: JlptLessonStudySessionLike | null;
  confirmedCompleted?: boolean;
}

export interface JlptLessonStudyState {
  status: JlptLessonStudyStatus;
  phase: JlptLessonStudyPhase;
  total: number;
  expectedCardIds: string[];
  answeredExpectedCardIds: string[];
  answeredCount: number;
  currentIndex: number;
  currentCardId: string | null;
}

export interface JlptLessonExerciseRef {
  id?: string | number | null;
}

export interface JlptLessonExerciseResultLike {
  correct?: unknown;
}

export interface JlptLessonCompletionStateInput {
  cards?: JlptLessonCardRef[] | null;
  session?: JlptLessonStudySessionLike | null;
  confirmedCompleted?: boolean;
  exercises?: JlptLessonExerciseRef[] | null;
  exerciseResults?: Record<string, JlptLessonExerciseResultLike | unknown> | null;
  completedExercises?: Record<string, unknown> | null;
  isCardStudied?: (card: JlptLessonCardRef) => boolean;
}

export interface JlptLessonCompletionState {
  study: JlptLessonStudyState;
  cardStudyComplete: boolean;
  exerciseComplete: boolean;
  correctExerciseCount: number;
  totalExercises: number;
  complete: boolean;
  canMigrateCompletion: boolean;
}

function normalizePhase(value: string | null | undefined): JlptLessonStudyPhase {
  const phase = String(value || "").toLowerCase();
  return phase === "test" || phase === "done" ? phase : "study";
}

function uniqueCardIds(cards: JlptLessonCardRef[] | null | undefined): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const card of Array.isArray(cards) ? cards : []) {
    const id = String(card?.id ?? "").trim();
    if (!id || seen.has(id)) continue;
    seen.add(id);
    result.push(id);
  }
  return result;
}

export function resolveJlptLessonStudyState(input: JlptLessonStudyStateInput): JlptLessonStudyState {
  const expectedCardIds = uniqueCardIds(input.cards);
  const answers = input.session?.answers && typeof input.session.answers === "object"
    ? input.session.answers
    : {};
  const answeredExpectedCardIds = expectedCardIds.filter((id) => Boolean(answers[id]));
  const total = expectedCardIds.length;
  const answeredCount = answeredExpectedCardIds.length;

  if (!total) {
    return {
      status: "incomplete",
      phase: "study",
      total: 0,
      expectedCardIds,
      answeredExpectedCardIds,
      answeredCount: 0,
      currentIndex: 0,
      currentCardId: null
    };
  }

  if (input.confirmedCompleted && input.session?.completedAt) {
    return {
      status: "done",
      phase: "done",
      total,
      expectedCardIds,
      answeredExpectedCardIds: expectedCardIds,
      answeredCount: total,
      currentIndex: total,
      currentCardId: null
    };
  }

  const firstPendingIndex = expectedCardIds.findIndex((id) => !answers[id]);
  if (firstPendingIndex < 0 && answeredCount === total) {
    return {
      status: "test-ready",
      phase: "test",
      total,
      expectedCardIds,
      answeredExpectedCardIds,
      answeredCount,
      currentIndex: total,
      currentCardId: null
    };
  }

  const safeIndex = firstPendingIndex >= 0
    ? firstPendingIndex
    : Math.min(Math.max(Number(input.session?.currentIndex ?? 0) || 0, 0), total - 1);

  return {
    status: "study",
    phase: normalizePhase(input.session?.phase) === "done" ? "study" : "study",
    total,
    expectedCardIds,
    answeredExpectedCardIds,
    answeredCount,
    currentIndex: safeIndex,
    currentCardId: expectedCardIds[safeIndex] || null
  };
}

function exerciseIds(exercises: JlptLessonExerciseRef[] | null | undefined): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const exercise of Array.isArray(exercises) ? exercises : []) {
    const id = String(exercise?.id ?? "").trim();
    if (!id || seen.has(id)) continue;
    seen.add(id);
    result.push(id);
  }
  return result;
}

function isExerciseCorrect(
  exerciseId: string,
  results: Record<string, JlptLessonExerciseResultLike | unknown>,
  completedExercises: Record<string, unknown>
): boolean {
  const result = results[exerciseId];
  if (result && typeof result === "object" && Boolean((result as JlptLessonExerciseResultLike).correct)) {
    return true;
  }
  return Boolean(completedExercises[exerciseId]);
}

export function resolveJlptLessonCompletionState(input: JlptLessonCompletionStateInput): JlptLessonCompletionState {
  const study = resolveJlptLessonStudyState({
    cards: input.cards,
    session: input.session,
    confirmedCompleted: input.confirmedCompleted
  });
  const cards = Array.isArray(input.cards) ? input.cards : [];
  const cardStudyCompleteBySession = study.status === "done" || study.status === "test-ready";
  const cardStudyCompleteByLegacyProgress = study.total > 0
    && cards.length >= study.total
    && cards.every((card) => Boolean(input.isCardStudied?.(card)));
  const cardStudyComplete = cardStudyCompleteBySession || cardStudyCompleteByLegacyProgress;
  const ids = exerciseIds(input.exercises);
  const results = input.exerciseResults && typeof input.exerciseResults === "object" ? input.exerciseResults : {};
  const completedExercises = input.completedExercises && typeof input.completedExercises === "object" ? input.completedExercises : {};
  const correctExerciseCount = ids.filter((id) => isExerciseCorrect(id, results, completedExercises)).length;
  const exerciseComplete = ids.length > 0 && correctExerciseCount === ids.length;
  const complete = Boolean(input.confirmedCompleted) || (cardStudyComplete && exerciseComplete);

  return {
    study,
    cardStudyComplete,
    exerciseComplete,
    correctExerciseCount,
    totalExercises: ids.length,
    complete,
    canMigrateCompletion: !input.confirmedCompleted && cardStudyComplete && exerciseComplete
  };
}
