import { describe, expect, it } from "vitest";
import {
  defaultKanaProgress,
  ensureKanaCourseProgress,
  kanaAnswersMatch,
  kanaReviewProgress,
  mergeKanaProgress,
  normalizeKanaAnswer,
  scoreKanaExercise,
  summarizeKanaExerciseMap
} from "../../src/features/kana-courses/kanaCourse";

const exercise = {
  id: "lesson-1-a",
  label: "Урок 1.A",
  instruction: "Запишите ромадзи.",
  items: [
    { number: "1", prompt: "あい", accepted_answers: ["ai"], solution: "ai" },
    { number: "2", prompt: "あお", accepted_answers: ["ao"], solution: "ao" },
    { number: "3", prompt: "いえ", accepted_answers: ["ie"], solution: "ie" },
    { number: "4", prompt: "うえ", accepted_answers: ["ue"], solution: "ue" },
    { number: "5", prompt: "え", accepted_answers: ["e"], solution: "e" }
  ]
};

describe("kana courses", () => {
  it("normalizes learner answers without accepting empty values", () => {
    expect(normalizeKanaAnswer(" ＡＩ  ")).toBe("ai");
    expect(kanaAnswersMatch("ＡＩ", ["ai"])).toBe(true);
    expect(kanaAnswersMatch("", [""])).toBe(false);
  });

  it("scores exercises with accepted_answers and an 80% pass threshold", () => {
    const result = scoreKanaExercise(exercise, {
      "1": "ai",
      "2": "ao",
      "3": "wrong",
      "4": "ue",
      "5": "e"
    }, new Date("2026-08-01T00:00:00.000Z"));

    expect(result.score).toBe(4);
    expect(result.total).toBe(5);
    expect(result.passed).toBe(true);
    expect(result.correct).toMatchObject({ "1": true, "3": false });
    expect(result.updatedAt).toBe("2026-08-01T00:00:00.000Z");
  });

  it("keeps hiragana and katakana progress independent", () => {
    const progress = mergeKanaProgress({
      settings: { showRomaji: false },
      courses: {
        hiragana: {
          currentRoute: "lesson-1",
          lessons: {
            "lesson-1": { exercises: { "lesson-1-a": { score: 5, total: 5, completed: true, passed: true } } }
          }
        }
      }
    });

    expect(progress.settings.showRomaji).toBe(false);
    expect(progress.courses.hiragana.currentRoute).toBe("lesson-1");
    expect(progress.courses.hiragana.lessons["lesson-1"].exercises["lesson-1-a"].score).toBe(5);
    expect(progress.courses.katakana.currentRoute).toBe("");
    expect(progress.courses.katakana.lessons).toEqual({});
  });

  it("creates stable course progress containers on demand", () => {
    const progress = defaultKanaProgress();
    const hiragana = ensureKanaCourseProgress(progress, "hiragana");
    const again = ensureKanaCourseProgress(progress, "hiragana");

    expect(again).toBe(hiragana);
    expect(hiragana.finalTest.sections).toEqual({});
    expect(progress.courses.katakana).toBeUndefined();
  });

  it("summarizes exercise maps across the whole lesson", () => {
    const summary = summarizeKanaExerciseMap([exercise], {
      "lesson-1-a": {
        answers: {},
        correct: {},
        score: 4,
        total: 5,
        completed: true,
        passed: true,
        updatedAt: "2026-08-01T00:00:00.000Z"
      }
    });

    expect(summary).toMatchObject({
      latestScore: 4,
      bestScore: 4,
      completed: true,
      passed: true
    });
  });

  it("uses the shared SRS scheduler for kana review cards", () => {
    const next = kanaReviewProgress(null, "remember", new Date("2026-08-01T00:00:00.000Z"));

    expect(next.reviewCount).toBe(1);
    expect(next.state).toBe("Learning");
    expect(next.lastRating).toBe("Good");
    expect(Date.parse(next.dueAt || "")).toBeGreaterThan(Date.parse("2026-08-01T00:00:00.000Z"));
  });
});
