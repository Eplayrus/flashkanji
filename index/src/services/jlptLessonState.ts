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
      answeredExpectedCardIds,
      answeredCount,
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
