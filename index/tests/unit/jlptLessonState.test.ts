import { describe, expect, it } from "vitest";
import { resolveJlptLessonCompletionState, resolveJlptLessonStudyState } from "../../src/services/jlptLessonState";

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

  it("uses canonical completion as full card progress for legacy saves without answers", () => {
    expect(resolveJlptLessonStudyState({
      cards,
      session: { phase: "done", completedAt: "2026-08-27T00:00:00.000Z", answers: {} },
      confirmedCompleted: true
    })).toMatchObject({
      status: "done",
      phase: "done",
      answeredCount: 8,
      currentIndex: 8,
      currentCardId: null
    });
  });
});

describe("JLPT lesson completion state", () => {
  it("does not complete a lesson from cards-only progress", () => {
    const answers = Object.fromEntries(cards.map((card) => [card.id, { remembered: true }]));

    expect(resolveJlptLessonCompletionState({
      cards,
      session: { answers },
      exercises: [{ id: "meaning" }, { id: "reading" }],
      exerciseResults: {}
    })).toMatchObject({
      cardStudyComplete: true,
      exerciseComplete: false,
      complete: false,
      canMigrateCompletion: false
    });
  });

  it("allows migration when lesson cards and every exercise are complete", () => {
    const answers = Object.fromEntries(cards.map((card) => [card.id, { remembered: true }]));

    expect(resolveJlptLessonCompletionState({
      cards,
      session: { answers },
      exercises: [{ id: "meaning" }, { id: "reading" }],
      exerciseResults: {
        meaning: { correct: true },
        reading: { correct: true }
      }
    })).toMatchObject({
      cardStudyComplete: true,
      exerciseComplete: true,
      correctExerciseCount: 2,
      totalExercises: 2,
      complete: true,
      canMigrateCompletion: true
    });
  });

  it("supports safe legacy migration from studied cards plus completedExercises", () => {
    expect(resolveJlptLessonCompletionState({
      cards,
      session: null,
      exercises: [{ id: "meaning" }, { id: "reading" }],
      completedExercises: {
        meaning: "2026-08-27T00:00:00.000Z",
        reading: "2026-08-27T00:00:00.000Z"
      },
      isCardStudied: () => true
    })).toMatchObject({
      cardStudyComplete: true,
      exerciseComplete: true,
      complete: true,
      canMigrateCompletion: true
    });
  });

  it("keeps confirmed completed lessons done even when exercises are not rebuilt yet", () => {
    expect(resolveJlptLessonCompletionState({
      cards,
      session: {
        phase: "done",
        completedAt: "2026-08-27T00:00:00.000Z",
        answers: Object.fromEntries(cards.map((card) => [card.id, { remembered: true }]))
      },
      confirmedCompleted: true,
      exercises: []
    })).toMatchObject({
      complete: true,
      canMigrateCompletion: false,
      study: {
        status: "done",
        phase: "done"
      }
    });
  });
});
