import { describe, expect, it } from "vitest";
import { calculateNextProgress, createReviewSession, dueReviewCards, enrollMissingCards, reconcileCardAliases, countCanonicalReviews, migrateCardProgress, type CardProgress, type ReviewCardLike } from "../../src/services/srs";

describe("canonical SRS", () => {
  it("reconciles catalog/namespace aliases without resetting either record", () => {
    const legacy = calculateNextProgress(null, "good");
    const progress: Record<string, CardProgress> = { "n5-001": legacy };
    const cards = [{ id: "1", aliases: ["n5-001", "kanji:1"] }];
    expect(reconcileCardAliases(progress, cards)).toBe(1);
    expect(progress["1"]).toEqual(legacy);
    expect(progress["n5-001"]).toBe(legacy);
    expect(reconcileCardAliases(progress, cards)).toBe(0);
    expect(countCanonicalReviews(progress, new Map([["n5-001", "1"]]))).toBe(legacy.reviewCount);
    expect(countCanonicalReviews({ "n5-001": legacy }, new Map([["n5-001", "1"]]))).toBe(legacy.reviewCount);
  });
  it("keeps 150 due items separate from a frozen 4-card + 1-exercise session", () => {
    const now = Date.parse("2026-09-24T12:00:00Z");
    const cards: ReviewCardLike[] = Array.from({ length: 150 }, (_, index) => ({
      cardId: `card:${index}`, state: "Review", dueAt: new Date(now - 150_000 + index).toISOString(), kind: index % 5 === 0 ? "exercise" : "card"
    }));
    const session = createReviewSession(cards, now);
    expect(session.totalDue).toBe(150);
    expect(session.initial).toHaveLength(5);
    expect(session.initial.filter((card) => card.kind === "exercise")).toHaveLength(1);
    expect(Object.isFrozen(session.initial)).toBe(true);
    session.complete("not-in-session");
    expect(session.remainingCount).toBe(5);
    for (const item of session.initial) {
      session.complete(item.cardId);
      session.complete(item.cardId);
    }
    expect(session.remaining).toEqual([]);
    expect(session.remainingCount).toBe(0);
    cards.push({ cardId: "newly-due", state: "Review", dueAt: new Date(now - 1).toISOString() });
    expect(session.initial).toHaveLength(5);
    const answered = new Set(session.initial.map((card) => card.cardId));
    const next = createReviewSession(cards.filter((card) => !answered.has(card.cardId)), now);
    expect(next.initial).toHaveLength(5);
    expect(next.initial.every((card) => !answered.has(card.cardId))).toBe(true);
  });

  it("excludes New, future, invalid due dates and duplicates before selecting a batch", () => {
    const now = Date.now();
    const dueAt = new Date(now - 1000).toISOString();
    const valid: ReviewCardLike = { cardId: "kana:hiragana:3042", state: "Learning", dueAt };
    const due = dueReviewCards([valid, valid, { ...valid, cardId: "new", state: "New" },
      { ...valid, cardId: "future", dueAt: new Date(now + 60_000).toISOString() },
      { ...valid, cardId: "broken", dueAt: "broken" }], now);
    expect(due.map((card) => card.cardId)).toEqual([valid.cardId]);
  });

  it("enrolls missing symbols idempotently without counting enrollment as an answer", () => {
    const now = new Date("2026-09-24T12:00:00Z");
    const existing = calculateNextProgress(null, "good", "good", now);
    const progress: Record<string, CardProgress> = { existing, materialized: migrateCardProgress(null) };
    expect(enrollMissingCards(progress, ["existing", "materialized", "new", "new"], now)).toBe(2);
    expect(progress.existing).toBe(existing);
    expect(progress.new).toMatchObject({ state: "Learning", reviewCount: 0, correct: 0, wrong: 0, history: [], dueAt: "2026-09-24T12:05:00.000Z" });
    const snapshot = JSON.stringify(progress);
    expect(enrollMissingCards(progress, ["existing", "materialized", "new"], new Date(now.getTime() + 10000))).toBe(0);
    expect(JSON.stringify(progress)).toBe(snapshot);
  });
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
