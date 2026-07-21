import { describe, expect, it } from "vitest";
import { calculateNextProgress, createReviewSession, migrateCardProgress } from "../../src/services/srs";

describe("canonical SRS", () => {
  it("migrates aliases without losing progress", () => {
    const progress = migrateCardProgress({ state: "review", nextReview: "2026-01-01T00:00:00.000Z", reviews: 7, correct: 6 });
    expect(progress).toMatchObject({ state: "Review", dueAt: "2026-01-01T00:00:00.000Z", reviewCount: 7, correct: 6 });
    expect(progress).not.toHaveProperty("nextReview");
    expect(progress).not.toHaveProperty("reviews");
  });

  it("deduplicates a session by cardId", () => {
    const dueAt = "2026-01-01T00:00:00.000Z";
    const session = createReviewSession([
      { cardId: "日", state: "Review", dueAt },
      { cardId: "日", state: "Review", dueAt }
    ], Date.parse("2026-01-02T00:00:00.000Z"));
    expect(session.initial).toHaveLength(1);
  });

  it("Again schedules a card later without growing the initial session", () => {
    const dueAt = "2026-01-01T00:00:00.000Z";
    const session = createReviewSession([{ cardId: "月", state: "Review", dueAt }], Date.parse("2026-01-02T00:00:00.000Z"));
    const next = calculateNextProgress({ cardId: "月", state: "Review", dueAt, reviewCount: 3 }, "again", "again", new Date("2026-01-02T00:00:00.000Z"));
    session.complete("月");
    expect(Date.parse(next.dueAt || "")).toBe(Date.parse("2026-01-02T00:05:00.000Z"));
    expect(session.initial).toHaveLength(1);
    expect(session.remainingCount).toBe(0);
    expect(next.reviewCount).toBe(4);
  });
});
