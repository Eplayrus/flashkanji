import { describe, expect, it } from "vitest";
import { resolveJlptLessonStudyState } from "../../src/services/jlptLessonState";

const cards = Array.from({ length: 8 }, (_, index) => ({ id: `card-${index + 1}` }));

describe("JLPT lesson study state", () => {
  it("does not turn an empty card list into test or done", () => {
    expect(resolveJlptLessonStudyState({ cards: [], session: { answers: {} } })).toMatchObject({
      status: "incomplete",
      phase: "study",
      total: 0,
      answeredCount: 0,
      currentIndex: 0
    });
  });

  it("starts a real lesson in study mode with 0/8 answered", () => {
    expect(resolveJlptLessonStudyState({ cards, session: { answers: {} } })).toMatchObject({
      status: "study",
      phase: "study",
      total: 8,
      answeredCount: 0,
      currentIndex: 0,
      currentCardId: "card-1"
    });
  });

  it("keeps the first unanswered expected card active", () => {
    const answers = Object.fromEntries(cards.slice(0, 7).map((card) => [card.id, { remembered: true }]));
    expect(resolveJlptLessonStudyState({ cards, session: { answers } })).toMatchObject({
      status: "study",
      phase: "study",
      answeredCount: 7,
      currentIndex: 7,
      currentCardId: "card-8"
    });
  });

  it("opens test-ready only after every expected card is answered", () => {
    const answers = Object.fromEntries(cards.map((card) => [card.id, { remembered: true }]));
    expect(resolveJlptLessonStudyState({ cards, session: { answers } })).toMatchObject({
      status: "test-ready",
      phase: "test",
      answeredCount: 8,
      currentIndex: 8,
      currentCardId: null
    });
  });

  it("ignores unrelated answers when counting lesson progress", () => {
    expect(resolveJlptLessonStudyState({
      cards,
      session: {
        answers: {
          "old-card": { remembered: true },
          "another-lesson-card": { remembered: true }
        }
      }
    })).toMatchObject({
      status: "study",
      answeredCount: 0,
      currentCardId: "card-1"
    });
  });

  it("does not trust a completedAt flag without course completion", () => {
    expect(resolveJlptLessonStudyState({
      cards: [],
      session: { phase: "done", completedAt: "2026-08-20T00:00:00.000Z", answers: {} },
      confirmedCompleted: false
    })).toMatchObject({
      status: "incomplete",
      phase: "study"
    });
  });

  it("preserves a genuinely completed lesson", () => {
    const answers = Object.fromEntries(cards.map((card) => [card.id, { remembered: true }]));
    expect(resolveJlptLessonStudyState({
      cards,
      session: { phase: "done", completedAt: "2026-08-20T00:00:00.000Z", answers },
      confirmedCompleted: true
    })).toMatchObject({
      status: "done",
      phase: "done",
      answeredCount: 8,
      currentIndex: 8
    });
  });
});
