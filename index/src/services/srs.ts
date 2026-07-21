export type SrsState = "New" | "Learning" | "Review" | "Mastered";
export type SrsRating = "again" | "hard" | "good" | "easy" | "forgot" | "remember";

export interface CardProgress {
  state: SrsState;
  dueAt: string | null;
  reviewCount: number;
  intervalDays: number;
  easeFactor: number;
  srsStep: number;
  lapses: number;
  correct: number;
  wrong: number;
  successRate: number;
  history: Array<Record<string, unknown>>;
  [key: string]: unknown;
}

const STEPS_MINUTES = [5, 60, 12 * 60, 24 * 60, 2 * 24 * 60, 4 * 24 * 60];
const labels: Record<string, string> = { again: "Again", forgot: "Again", hard: "Hard", good: "Good", remember: "Good", easy: "Easy" };

export function migrateCardProgress(value: unknown): CardProgress {
  const raw = value && typeof value === "object" ? (value as Record<string, unknown>) : {};
  const state = normalizeState(raw.state ?? raw.stage);
  const dueAt = validIso(raw.dueAt ?? raw.nextReview);
  const reviewCount = finiteNumber(raw.reviewCount ?? raw.reviews, 0);
  const correct = finiteNumber(raw.correct, 0);
  const wrong = finiteNumber(raw.wrong, 0);
  const migrated: CardProgress = {
    ...raw,
    state,
    dueAt,
    reviewCount,
    intervalDays: finiteNumber(raw.intervalDays, 0),
    easeFactor: finiteNumber(raw.easeFactor, 2.5),
    srsStep: finiteNumber(raw.srsStep, state === "New" ? -1 : 0),
    lapses: finiteNumber(raw.lapses, 0),
    correct,
    wrong,
    successRate: finiteNumber(raw.successRate, correct + wrong ? Math.round((correct / (correct + wrong)) * 100) : 0),
    history: Array.isArray(raw.history) ? raw.history.slice(-120) as Array<Record<string, unknown>> : []
  };
  delete migrated.nextReview;
  delete migrated.reviews;
  delete migrated.stage;
  delete migrated.lastReview;
  return migrated;
}

export function calculateNextProgress(input: unknown, rating: SrsRating, displayRating: SrsRating = rating, reviewedAt = new Date()): CardProgress {
  const before = migrateCardProgress(input);
  const decision = resolveDecision(before, rating);
  const next: CardProgress = { ...before, history: [...before.history] };
  let step = before.srsStep;
  let ease = before.easeFactor;

  if (decision === "again") {
    step = 0;
    ease = Math.max(1.3, ease - 0.2);
    next.state = "Learning";
    next.wrong += 1;
    if (before.state !== "New") next.lapses += 1;
  } else if (decision === "hard") {
    step = Math.max(1, step);
    ease = Math.max(1.3, ease - 0.15);
    next.correct += 1;
  } else if (decision === "easy") {
    step = step < 0 ? 2 : step + 2;
    ease = Math.min(3.2, ease + 0.15);
    next.correct += 1;
  } else {
    step = step < 0 ? 0 : step + 1;
    next.correct += 1;
  }

  const intervalDays = intervalMinutes(step) / 1440;
  if (decision !== "again") next.state = intervalDays < 1 ? "Learning" : "Review";
  if (next.correct >= 8 && intervalDays >= 30) next.state = "Mastered";
  next.srsStep = step;
  next.easeFactor = round(ease, 2);
  next.intervalDays = round(intervalDays, 6);
  next.dueAt = new Date(reviewedAt.getTime() + intervalDays * 86_400_000).toISOString();
  next.reviewCount += 1;
  next.successRate = Math.round((next.correct / Math.max(next.correct + next.wrong, 1)) * 100);
  next.lastReviewedAt = reviewedAt.toISOString();
  next.lastRating = labels[displayRating] || labels[decision];
  next.lastDecision = labels[decision];
  next.history = [...next.history, { at: reviewedAt.toISOString(), rating: next.lastRating, decision: next.lastDecision, from: before.state, to: next.state, intervalDays, srsStep: step }].slice(-120);
  return next;
}

export interface ReviewCardLike { cardId: string; dueAt: string | null; state: SrsState; [key: string]: unknown }

export function createReviewSession(cards: ReviewCardLike[], now = Date.now()) {
  const unique = new Map<string, ReviewCardLike>();
  for (const card of cards) {
    if (!card.cardId || card.state === "New") continue;
    const due = card.dueAt ? Date.parse(card.dueAt) : Number.NaN;
    if (Number.isFinite(due) && due <= now && !unique.has(card.cardId)) unique.set(card.cardId, { ...card });
  }
  const initial = Object.freeze([...unique.values()].sort((a, b) => Date.parse(a.dueAt || "") - Date.parse(b.dueAt || "")));
  const completed = new Set<string>();
  return {
    initial,
    complete(cardId: string) { completed.add(cardId); },
    get remaining() { return initial.filter((card) => !completed.has(card.cardId)); },
    get remainingCount() { return initial.length - completed.size; }
  };
}

function resolveDecision(progress: CardProgress, rating: SrsRating): "again" | "hard" | "good" | "easy" {
  if (rating === "again" || rating === "forgot") return "again";
  if (rating !== "remember") return rating;
  if (progress.state === "New") return "good";
  if (progress.state === "Learning") return progress.successRate >= 70 || progress.correct >= 2 ? "good" : "hard";
  if (progress.successRate >= 88 && progress.correct >= 5 && progress.lapses <= 1) return "easy";
  return progress.successRate < 70 || progress.lapses > Math.max(1, Math.floor(progress.correct / 3)) ? "hard" : "good";
}

function normalizeState(value: unknown): SrsState {
  const key = String(value || "new").toLowerCase();
  if (key.includes("master")) return "Mastered";
  if (key.includes("learn")) return "Learning";
  if (key.includes("review")) return "Review";
  return "New";
}

function validIso(value: unknown): string | null {
  if (typeof value !== "string" || !Number.isFinite(Date.parse(value))) return null;
  return new Date(value).toISOString();
}

function finiteNumber(value: unknown, fallback: number): number {
  const number = Number(value);
  return Number.isFinite(number) && number >= 0 ? number : fallback;
}

function round(value: number, digits: number): number {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function intervalMinutes(step: number): number {
  if (step < STEPS_MINUTES.length) return STEPS_MINUTES[Math.max(0, step)];
  const last = STEPS_MINUTES[STEPS_MINUTES.length - 1];
  return last * 2 ** (step - (STEPS_MINUTES.length - 1));
}
