import type { CardProgress, SrsRating, SrsState } from "../types";

const ratingLabels: Record<SrsRating, "Again" | "Hard" | "Good" | "Easy"> = {
  again: "Again",
  hard: "Hard",
  good: "Good",
  easy: "Easy"
};

export function createCardProgress(): CardProgress {
  return {
    state: "New",
    stage: "new",
    intervalDays: 0,
    easeFactor: 2.5,
    dueAt: null,
    nextReview: null,
    lastReviewedAt: null,
    lastReview: null,
    lastRating: null,
    reviews: 0,
    reviewCount: 0,
    lapses: 0,
    correct: 0,
    wrong: 0,
    successRate: 0,
    history: []
  };
}

export function calculateNextProgress(before: CardProgress, rating: SrsRating, reviewedAt = new Date()): CardProgress {
  const next: CardProgress = { ...before, history: [...before.history] };
  const oldState: SrsState = before.state || "New";
  let ease = before.easeFactor || 2.5;
  let intervalDays = before.intervalDays || 0;
  let nextState: SrsState = oldState;

  if (rating === "again") {
    ease = Math.max(1.3, ease - 0.2);
    intervalDays = 5 / 1440;
    nextState = "Learning";
    next.lapses += oldState === "New" ? 0 : 1;
    next.wrong += 1;
  }

  if (rating === "hard") {
    ease = Math.max(1.3, ease - 0.15);
    intervalDays = oldState === "New" || oldState === "Learning" ? 0.5 : Math.max(0.5, intervalDays * 1.2);
    nextState = intervalDays < 1 ? "Learning" : "Review";
    next.correct += 1;
  }

  if (rating === "good") {
    intervalDays = oldState === "New" || oldState === "Learning" ? 1 : Math.max(1, intervalDays * ease);
    nextState = "Review";
    next.correct += 1;
  }

  if (rating === "easy") {
    ease = Math.min(3.2, ease + 0.15);
    intervalDays = oldState === "New" || oldState === "Learning" ? 4 : Math.max(3, intervalDays * ease * 1.7);
    nextState = "Review";
    next.correct += 1;
  }

  if (next.correct >= 8 && intervalDays >= 30) nextState = "Mastered";

  next.state = nextState;
  next.stage = nextState.toLowerCase() as CardProgress["stage"];
  next.easeFactor = round(ease, 2);
  next.intervalDays = round(intervalDays, 3);
  next.dueAt = addDays(reviewedAt, intervalDays).toISOString();
  next.nextReview = next.dueAt;
  next.lastReviewedAt = reviewedAt.toISOString();
  next.lastReview = next.lastReviewedAt;
  next.lastRating = ratingLabels[rating];
  next.reviews += 1;
  next.reviewCount = next.reviews;
  next.successRate = successRate(next);
  next.history = [
    ...next.history,
    {
      at: reviewedAt.toISOString(),
      rating: ratingLabels[rating],
      from: oldState,
      to: nextState,
      intervalDays: next.intervalDays
    }
  ].slice(-120);

  return next;
}

function successRate(progress: CardProgress): number {
  const total = progress.correct + progress.wrong;
  return total ? Math.round((progress.correct / total) * 100) : 0;
}

function addDays(date: Date, days: number): Date {
  return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
}

function round(value: number, digits: number): number {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}
