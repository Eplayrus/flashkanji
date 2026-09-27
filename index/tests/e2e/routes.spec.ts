import { expect, test } from "@playwright/test";

test.use({ serviceWorkers: "block" });

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("flashKanjiOnboardingCompleted.v3", "true");
  });
});

async function expectRoute(page: import("@playwright/test").Page, route: "review" | "textbooks") {
  await expect(page.locator(`#app [data-route-error]`)).toHaveCount(0);
  await expect(page.locator(`[data-route="${route}"][aria-current="page"]:visible`).first()).toBeVisible();
  await expect(page.locator("#app h1").first()).toBeVisible();
  if (route === "review") await expect(page.locator('#app [data-section="review-card"]')).toBeVisible();
  if (route === "textbooks") await expect(page.locator("#app .textbooks-page")).toBeVisible();
}

async function expectAppNotFound(page: import("@playwright/test").Page, reason: string) {
  const notFound = page.locator(`#app [data-route-error="not-found"][data-route-not-found="${reason}"]`);
  await expect(notFound).toBeVisible();
  await expect(page.locator('[data-route="home"][aria-current="page"]:visible')).toHaveCount(0);
}

async function clickAtCenter(page: import("@playwright/test").Page, locator: import("@playwright/test").Locator) {
  await locator.dispatchEvent("click");
}

async function expectScrollPreserved(page: import("@playwright/test").Page, before: number, tolerance = 4) {
  await page.waitForTimeout(900);
  const after = await page.evaluate(() => window.scrollY);
  expect(Math.abs(after - before)).toBeLessThanOrEqual(tolerance);
}

async function expectScrollTopAfterDelay(page: import("@playwright/test").Page) {
  await page.waitForTimeout(900);
  await expect.poll(async () => page.evaluate(() => window.scrollY), { timeout: 2_000 }).toBeLessThan(16);
}

async function openTextbookLesson(page: import("@playwright/test").Page, level: "N5" | "N4") {
  const upper = level.toUpperCase();
  const lower = upper.toLowerCase();
  await page.goto("./#textbooks/");
  await expect(page.locator("#app [data-route-error]")).toHaveCount(0);
  await page.locator(`a[href="#textbooks/${upper}"]`).click();
  await expect(page.locator(`#app .${lower}-course-page`)).toBeVisible({ timeout: 15_000 });
  const lessonLink = page.locator(`a.n5-lesson-tile[data-action="${lower}-open-lesson"]`).first();
  await expect(lessonLink).toBeVisible({ timeout: 15_000 });
  await lessonLink.dispatchEvent("click");
  await expect(page.locator("#app .n5-lesson-page")).toBeVisible({ timeout: 15_000 });
}

async function openTextbookLessonById(page: import("@playwright/test").Page, level: "N5" | "N4", lessonId: string) {
  const upper = level.toUpperCase();
  const lower = upper.toLowerCase();
  await page.goto("./#textbooks/");
  await expect(page.locator("#app [data-route-error]")).toHaveCount(0);
  await page.locator(`a[href="#textbooks/${upper}"]`).click();
  await expect(page.locator(`#app .${lower}-course-page`)).toBeVisible({ timeout: 15_000 });
  const lessonLink = page.locator(`a.n5-lesson-tile[data-action="${lower}-open-lesson"][data-id="${lessonId}"]`);
  await expect(lessonLink).toBeVisible({ timeout: 15_000 });
  await lessonLink.dispatchEvent("click");
  await expect(page.locator("#app .n5-lesson-page")).toBeVisible({ timeout: 15_000 });
}

test("#review renders Review and survives reload", async ({ page }) => {
  await page.goto("./#review");
  await expectRoute(page, "review");
  await page.reload();
  await expectRoute(page, "review");
});

test("#review ignores stale textbook exercise SRS entries", async ({ page }) => {
  await page.addInitScript(() => {
    const dueAt = new Date(Date.now() - 60_000).toISOString();
    localStorage.setItem("flashKanji.progress.v2", JSON.stringify({
      n2Course: {
        opened: true,
        viewedLessons: { "n2-lesson-1": dueAt },
        exerciseSrs: {
          "n2-missing-after-data-refresh": {
            level: "N2",
            lessonId: "n2-lesson-1",
            exerciseId: "n2-missing-after-data-refresh",
            state: "Learning",
            intervalDays: 0,
            srsStep: 0,
            dueAt,
            reviewCount: 1
          }
        }
      }
    }));
  });

  await page.goto("./#review");
  await expectRoute(page, "review");
  await expect(page.locator("#app [data-route-error]")).toHaveCount(0);
});

test("home → review → textbooks → review keeps route, nav and content aligned", async ({ page }) => {
  await page.goto("./#home");
  await expect(page.locator("#app")).toHaveAttribute("aria-busy", "false");
  await page.locator('.bottom-nav [data-route="review"]').click();
  await expect(page).toHaveURL(/#review$/);
  await expectRoute(page, "review");
  await page.locator('.bottom-nav [data-route="textbooks"]').click();
  await expect(page).toHaveURL(/#textbooks\/?$/);
  await expectRoute(page, "textbooks");
  await page.locator('.bottom-nav [data-route="review"]').click();
  await expectRoute(page, "review");
});

test("unknown hashes render a real SPA 404 instead of Home", async ({ page }) => {
  await page.goto("./#does-not-exist");
  await expectAppNotFound(page, "unknown-route");
  await expect(page).toHaveURL(/#does-not-exist$/);
});

test("invalid hash parameters render SPA 404 before route content", async ({ page }) => {
  await page.goto("./#textbooks/N9");
  await expectAppNotFound(page, "invalid-parameter");
  await expect(page.locator("#app .textbooks-page")).toHaveCount(0);

  await page.goto("./#kanji/a/b");
  await expectAppNotFound(page, "unknown-route");
  await expect(page.locator("#app .kanji-page")).toHaveCount(0);
});

test("known hash shape with missing entity renders entity-not-found", async ({ page }) => {
  await page.goto("./#textbooks/N5/not-real-lesson");
  await expectAppNotFound(page, "entity-not-found");

  await page.goto("./#jlpt/n1/bulk-n1-99");
  await expectAppNotFound(page, "entity-not-found");

  await page.goto("./#kanji/not-real-card");
  await expectAppNotFound(page, "entity-not-found");
});

test("textbook lesson cards wait for data and open real lessons", async ({ page }) => {
  for (const lessonId of ["n5-lesson-1", "n5-lesson-5", "n5-lesson-10"] as const) {
    await openTextbookLessonById(page, "N5", lessonId);
    await expect(page.locator("#app .n5-lesson-page")).toBeVisible({ timeout: 15_000 });
    await expect(page.locator("#app [data-route-error]")).toHaveCount(0);
    await expect(page.locator("#app .lesson-study-card")).toBeVisible();
    await expect(page.locator("#app")).toContainText(/Кандзи 1 из 8|Kanji 1 of 8|Кандзи 1\/8|Kanji 1\/8/);
    await expect(page.locator("#app")).not.toContainText(/Кандзи 0\/0|Kanji 0\/0|Урок завершён|Lesson complete/);
  }
});

test("N5 lesson still opens when the N5 kanji JSON is unavailable", async ({ page }) => {
  await page.route("**/data/jlpt/n5/kanji.json*", async (route) => {
    await route.fulfill({ status: 503, body: "temporarily unavailable" });
  });

  await openTextbookLessonById(page, "N5", "n5-lesson-5");
  await expect(page.locator("#app .n5-lesson-page")).toBeVisible({ timeout: 15_000 });
  await expect(page.locator("#app [data-route-error]")).toHaveCount(0);
  await expect(page.locator("#app")).toContainText(/Кандзи 1 из 8|Kanji 1 of 8|Кандзи 1\/8|Kanji 1\/8/);
});

test("old zero-card JLPT study session is migrated back to study after data loads", async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("flashKanji.progress.v2", JSON.stringify({
      jlptLessonStudy: {
        activeSessionKey: "N5:n5-lesson-5",
        sessions: {
          "N5:n5-lesson-5": {
            level: "N5",
            lessonId: "n5-lesson-5",
            currentIndex: 0,
            answers: {},
            phase: "test",
            startedAt: "2026-08-20T00:00:00.000Z",
            updatedAt: "2026-08-20T00:00:00.000Z",
            completedAt: null,
            testOpenedAt: "2026-08-20T00:00:00.000Z"
          }
        }
      }
    }));
  });

  await openTextbookLessonById(page, "N5", "n5-lesson-5");
  await expect(page.locator("#app .n5-lesson-page")).toBeVisible({ timeout: 15_000 });
  await expect(page.locator("#app .lesson-study-card")).toBeVisible();
  await expect(page.locator("#app")).toContainText(/Кандзи 1 из 8|Kanji 1 of 8|Кандзи 1\/8|Kanji 1\/8/);
  await expect(page.locator("#app")).not.toContainText(/Урок завершён|Lesson complete|Кандзи 0\/0|Kanji 0\/0/);
});

test("completed N5 lesson facts migrate to canonical completedLessons", async ({ page }) => {
  await page.addInitScript(() => {
    const now = "2026-08-27T00:00:00.000Z";
    const lessonKanji = ["日", "一", "国", "人", "年", "大", "十", "二"];
    const cardIds = ["n5-001", "n5-002", "n5-003", "n5-004", "n5-005", "n5-006", "n5-007", "n5-008"];
    const exercises = [
      "n5-lesson-1-meaning-0",
      "n5-lesson-1-kanji-1",
      "n5-lesson-1-reading-2",
      "n5-lesson-1-sentence-3",
      "n5-lesson-1-word-4",
      "n5-lesson-1-active-5"
    ];

    localStorage.setItem("flashKanji.hasVisited", "1");
    localStorage.setItem("flashKanji.changelog.lastSeenVersion", "2026.08.27");
    localStorage.setItem("flashKanji.progress.v2", JSON.stringify({
      settings: { language: "ru", languageManuallySelected: true },
      appOpens: 3,
      n5Course: {
        currentLessonId: "n5-lesson-1",
        studiedKanji: Object.fromEntries(lessonKanji.map((kanji) => [kanji, now])),
        exerciseResults: Object.fromEntries(exercises.map((id) => [id, { selected: "ok", correct: true, checkedAt: now }])),
        completedExercises: Object.fromEntries(exercises.map((id) => [id, now])),
        completedLessons: {}
      },
      jlptLessonStudy: {
        activeSessionKey: "N5:n5-lesson-1",
        sessions: {
          "N5:n5-lesson-1": {
            level: "N5",
            lessonId: "n5-lesson-1",
            currentIndex: 8,
            answers: Object.fromEntries(cardIds.map((id) => [id, { remembered: true, rating: "good", answeredAt: now }])),
            phase: "test",
            startedAt: now,
            updatedAt: now,
            completedAt: null,
            testOpenedAt: now
          }
        }
      }
    }));
  });

  await openTextbookLessonById(page, "N5", "n5-lesson-1");
  await expect(page.locator("#app .n5-lesson-page")).toBeVisible({ timeout: 15_000 });
  await expect(page.locator("#app")).toContainText(/Урок завершён|Lesson completed/);
  await expect(page.locator('#app button[data-action="n5-complete-lesson"]')).toBeDisabled();

  await expect.poll(async () => page.evaluate(() => {
    const progress = JSON.parse(localStorage.getItem("flashKanji.progress.v2") || "{}");
    const session = progress.jlptLessonStudy?.sessions?.["N5:n5-lesson-1"] || {};
    return {
      completed: Boolean(progress.n5Course?.completedLessons?.["n5-lesson-1"]),
      currentLessonId: progress.n5Course?.currentLessonId,
      phase: session.phase,
      completedAt: Boolean(session.completedAt)
    };
  })).toMatchObject({
    completed: true,
    currentLessonId: "n5-lesson-2",
    phase: "done",
    completedAt: true
  });

  await page.goto("./#home");
  await expect(page.locator("#app")).toContainText(/1\/10 уроков|1\/10 lessons/);
});

test("Back and Forward keep valid routes and Not Found states distinct", async ({ page }) => {
  await page.goto("./#home");
  await page.locator('.bottom-nav [data-route="textbooks"]').click();
  await expectRoute(page, "textbooks");
  await page.evaluate(() => { window.location.hash = "does-not-exist"; });
  await expectAppNotFound(page, "unknown-route");

  await page.goBack();
  await expectRoute(page, "textbooks");
  await page.goForward();
  await expectAppNotFound(page, "unknown-route");
});

test("direct invalid public pathname serves the static 404 instead of the app shell", async ({ page }) => {
  const response = await page.goto("/en/kanji/u4e0a-ue/");
  expect(response?.status()).toBe(404);
  await expect(page.locator("#app")).toHaveCount(0);
  await expect(page.locator("body")).toContainText(/404|not found|страница не найдена/i);
});

test("#review ignores stale sentence practice saved state", async ({ page }) => {
  await page.addInitScript(() => {
    const dueAt = new Date(Date.now() - 60_000).toISOString();
    localStorage.setItem("flashKanji.progress.v2", JSON.stringify({
      lessonCompletions: { "lesson-1": dueAt },
      sentencePractice: {
        activeId: "missing-sentence-after-data-refresh",
        selected: "not-an-array",
        checked: true,
        result: { wrongIndexes: "not-an-array" },
        tileKeys: "not-an-array",
        recentIds: "not-an-array",
        recentAnswers: "not-an-array",
        completed: { "missing-sentence-after-data-refresh": true }
      }
    }));
  });

  await page.goto("./#review");
  await expectRoute(page, "review");
  await expect(page.locator("#app [data-route-error]")).toHaveCount(0);
});

test("SRS answer scrolls to the top of review after each card", async ({ page }) => {
  await page.addInitScript(() => {
    const dueAt = new Date(Date.now() - 60_000).toISOString();
    const today = new Date();
    const todayKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    localStorage.setItem("flashKanji.changelog.lastSeenVersion", "2026.08.27");
    localStorage.setItem("flashKanji.hasVisited", "true");
    localStorage.setItem("flashKanji.progress.v2", JSON.stringify({
      appOpens: 2,
      achievements: {
        first_kanji: { unlockedAt: dueAt, rewardXp: 25, rewardFragments: 5 },
        first_memory: { unlockedAt: dueAt, rewardXp: 25, rewardFragments: 5 },
        first_day: { unlockedAt: dueAt, rewardXp: 20, rewardFragments: 4 }
      },
      dailyBonuses: { [todayKey]: dueAt },
      visits: {
        firstVisitDate: todayKey,
        lastVisitDate: todayKey,
        lastDailyBonusDate: todayKey,
        streak: 1,
        bestStreak: 1
      },
      cards: {
        "1": {
          state: "Review",
          intervalDays: 1,
          srsStep: 1,
          dueAt,
          lastReviewedAt: dueAt,
          lastRating: "good",
          reviewCount: 1,
          lapses: 0,
          correct: 1,
          wrong: 0,
          successRate: 1,
          history: []
        },
        "2": {
          state: "Review",
          intervalDays: 1,
          srsStep: 1,
          dueAt,
          lastReviewedAt: dueAt,
          lastRating: "good",
          reviewCount: 1,
          lapses: 0,
          correct: 1,
          wrong: 0,
          successRate: 1,
          history: []
        }
      }
    }));
  });

  await page.goto("./#review");
  await expectRoute(page, "review");
  for (let index = 0; index < 5; index += 1) {
    const closeReward = page.locator('[data-action="close-reward"]').first();
    if (!(await closeReward.isVisible({ timeout: 500 }).catch(() => false))) break;
    await closeReward.click();
  }
  await expect(page.locator(".reward-modal")).toHaveCount(0);
  for (let index = 0; index < 2; index += 1) {
    await page.locator('#app button[data-action="show-answer"]').click();
    const ratingButton = page.locator('#app button[data-action="rate"][data-rating="remember"]').first();
    await expect(ratingButton).toBeVisible();

    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    const before = await page.evaluate(() => window.scrollY);
    expect(before).toBeGreaterThan(100);

    await ratingButton.click();
    await expect.poll(async () => page.evaluate(() => window.scrollY), { timeout: 2_000 }).toBeLessThan(16);
    await expectScrollTopAfterDelay(page);
  }
});

test("#home does not invent textbook reviews from viewed lessons", async ({ page }) => {
  await page.addInitScript(() => {
    const viewedAt = new Date(Date.now() - 60_000).toISOString();
    localStorage.setItem("flashKanji.progress.v2", JSON.stringify({
      n5Course: {
        viewedLessons: { "lesson-1": viewedAt },
        exerciseSrs: {
          "lesson-1-meaning-0": {
            level: "N5",
            lessonId: "lesson-1",
            exerciseId: "lesson-1-meaning-0",
            state: "Learning",
            intervalDays: 0,
            srsStep: 0,
            dueAt: viewedAt,
            reviewCount: 0,
            history: []
          }
        }
      }
    }));
  });

  await page.goto("./#home");
  await expect(page.locator("#app [data-route-error]")).toHaveCount(0);
  await expect(page.locator("#app")).not.toContainText(/Повторить: [1-9]|Review: [1-9]|К ПОВТОРЕНИЮ\\s*[1-9]|DUE\\s*[1-9]/i);
});

test("home and review count zero when saved SRS entries are stale", async ({ page }) => {
  await page.addInitScript(() => {
    const dueAt = new Date(Date.now() - 60_000).toISOString();
    localStorage.setItem("flashKanji.hasVisited", "true");
    localStorage.setItem("flashKanji.changelog.lastSeenVersion", "2026.08.27");
    localStorage.setItem("flashKanji.progress.v2", JSON.stringify({
      settings: { language: "ru", languageManuallySelected: true },
      appOpens: 2,
      n1Course: {
        viewedLessons: { "bulk-n1-01": dueAt },
        completedLessons: {},
        exerciseResults: {},
        exerciseSrs: Object.fromEntries(Array.from({ length: 12 }, (_, index) => {
          const id = `bulk-n1-01-missing-after-refresh-${index}`;
          return [id, {
            level: "N1",
            lessonId: "bulk-n1-01",
            exerciseId: id,
            state: "Review",
            intervalDays: 1,
            srsStep: 1,
            dueAt,
            reviewCount: 1,
            answer: "ghost",
            selected: "ghost"
          }];
        }))
      }
    }));
  });

  await page.goto("./#home");
  await expect(page.locator("#app [data-route-error]")).toHaveCount(0);
  await expect(page.locator('.home-task-item[data-action="home-review"] .home-task-item-count')).toHaveText("0");
  await expect(page.locator('.home-hero-actions [data-action="home-review"]')).toHaveCount(0);

  await page.goto("./#review");
  await expectRoute(page, "review");
  await expect(page.locator("#app")).toContainText(/0 в очереди|0 in queue/i);
  await expect(page.locator("#app")).toContainText(/Повторов сейчас нет|No reviews right now/i);
});

test("home and review count only valid due cards when stale entries are mixed in", async ({ page }) => {
  await page.addInitScript(() => {
    const dueAt = new Date(Date.now() - 60_000).toISOString();
    const validCards = Object.fromEntries(["1", "2", "3", "4", "5"].map((id) => [id, {
      state: "Review",
      intervalDays: 1,
      srsStep: 1,
      dueAt,
      lastReviewedAt: dueAt,
      lastRating: "good",
      reviewCount: 1,
      lapses: 0,
      correct: 1,
      wrong: 0,
      successRate: 100,
      history: []
    }]));

    localStorage.setItem("flashKanji.hasVisited", "true");
    localStorage.setItem("flashKanji.changelog.lastSeenVersion", "2026.08.27");
    localStorage.setItem("flashKanji.progress.v2", JSON.stringify({
      settings: { language: "ru", languageManuallySelected: true },
      appOpens: 2,
      cards: validCards,
      n1Course: {
        viewedLessons: { "bulk-n1-01": dueAt },
        completedLessons: {},
        exerciseResults: {},
        exerciseSrs: Object.fromEntries(Array.from({ length: 7 }, (_, index) => {
          const id = `bulk-n1-01-stale-exercise-${index}`;
          return [id, {
            level: "N1",
            lessonId: "bulk-n1-01",
            exerciseId: id,
            state: "Review",
            intervalDays: 1,
            srsStep: 1,
            dueAt,
            reviewCount: 1,
            answer: "ghost",
            selected: "ghost"
          }];
        }))
      }
    }));
  });

  await page.goto("./#home");
  await expect(page.locator("#app [data-route-error]")).toHaveCount(0);
  await expect(page.locator('.home-task-item[data-action="home-review"] .home-task-item-count')).toHaveText("5");
  await expect(page.locator('.home-hero-actions [data-action="home-review"]')).toContainText(/Повторить: 5|Review: 5/i);

  await page.goto("./#review");
  await expectRoute(page, "review");
  await expect(page.locator("[data-review-total-due]")).toHaveAttribute("data-review-total-due", "5");
  await expect(page.locator("#app")).toContainText(/4 в очереди|4 in queue/i);
});

test("finishing the last due card updates review count to zero without reload", async ({ page }) => {
  await page.addInitScript(() => {
    const dueAt = new Date(Date.now() - 60_000).toISOString();
    localStorage.setItem("flashKanji.hasVisited", "true");
    localStorage.setItem("flashKanji.changelog.lastSeenVersion", "2026.08.27");
    localStorage.setItem("flashKanji.progress.v2", JSON.stringify({
      settings: { language: "ru", languageManuallySelected: true },
      appOpens: 2,
      cards: {
        "1": {
          state: "Review",
          intervalDays: 1,
          srsStep: 1,
          dueAt,
          lastReviewedAt: dueAt,
          lastRating: "good",
          reviewCount: 1,
          lapses: 0,
          correct: 1,
          wrong: 0,
          successRate: 100,
          history: []
        }
      }
    }));
  });

  await page.goto("./#home");
  await expect(page.locator('.home-task-item[data-action="home-review"] .home-task-item-count')).toHaveText("1");

  await page.goto("./#review");
  await expectRoute(page, "review");
  await expect(page.locator("#app")).toContainText(/1 в очереди|1 in queue/i);
  await page.locator('#app button[data-action="show-answer"]').click();
  await expect(page.locator('#app button[data-action="rate"][data-rating="remember"]')).toBeVisible();
  await page.locator('#app button[data-action="rate"][data-rating="remember"]').click();
  await expect(page.locator("#app")).toContainText(/0 в очереди|0 in queue/i);

  await page.locator('.bottom-nav [data-route="home"]').click();
  await expect(page).toHaveURL(/#home$/);
  await expect(page.locator('.home-task-item[data-action="home-review"] .home-task-item-count')).toHaveText("0");
  await expect(page.locator('.home-hero-actions [data-action="home-review"]')).toHaveCount(0);
});

test("#textbooks/N1 renders the generated full N1 course", async ({ page, request }) => {
  const [metaResponse, lessonsResponse, kanjiResponse, grammarResponse, readingResponse, listeningResponse, finalResponse] = await Promise.all([
    request.get("/data/jlpt/n1/meta.json"),
    request.get("/data/jlpt/n1/lessons.json"),
    request.get("/data/jlpt/n1/kanji.json"),
    request.get("/data/jlpt/n1/grammar.json"),
    request.get("/data/jlpt/n1/reading.json"),
    request.get("/data/jlpt/n1/listening.json"),
    request.get("/data/jlpt/n1/final-test.json")
  ]);

  for (const response of [metaResponse, lessonsResponse, kanjiResponse, grammarResponse, readingResponse, listeningResponse, finalResponse]) {
    expect(response.ok()).toBeTruthy();
  }

  const meta = await metaResponse.json();
  const lessons = await lessonsResponse.json();
  const kanji = await kanjiResponse.json();
  const grammar = await grammarResponse.json();
  const reading = await readingResponse.json();
  const listening = await listeningResponse.json();
  const finalTest = await finalResponse.json();

  expect(meta.kanjiCount).toBe(1047);
  expect(meta.lessonCount).toBe(53);
  expect(lessons.items).toHaveLength(53);
  expect(kanji.items).toHaveLength(1047);
  expect(grammar.items).toHaveLength(142);
  expect(reading.items).toHaveLength(8);
  expect(listening.items).toHaveLength(6);
  expect(finalTest.questionCount).toBe(45);

  await page.goto("./#textbooks/N1");
  await expect(page.locator("#app .n1-course-page")).toBeVisible();
  await expect(page.locator("#app [data-route-error]")).toHaveCount(0);
  await expect(page.locator("#app")).toContainText("JLPT N1");
  await expect(page.locator("#app")).toContainText("1047");
  await expect(page.locator("#app")).toContainText("53");
  await expect(page.locator('#app .n5-lesson-grid [data-action="n1-open-lesson"][data-id="bulk-n1-01"]')).toBeVisible();
  await expect(page.locator('#app .n5-lesson-grid [data-action="n1-open-lesson"][data-id="bulk-n1-53"]')).toBeVisible();
});

test("N1 lesson, kanji, grammar, reading, listening and final routes open cleanly", async ({ page }) => {
  await page.goto("./#jlpt/n1/bulk-n1-01");
  await expect(page.locator("#app .n1-course-page.n5-lesson-page")).toBeVisible();
  await expect(page.locator("#app [data-route-error]")).toHaveCount(0);
  await expect(page.locator("#app")).toContainText(/Урок 1|Lesson 1/);

  await page.goto("./#jlpt/n1/bulk-n1-53");
  await expect(page.locator("#app .n1-course-page.n5-lesson-page")).toBeVisible();
  await expect(page.locator("#app [data-route-error]")).toHaveCount(0);
  await expect(page.locator("#app")).toContainText(/Урок 53|Lesson 53/);

  await page.goto("./#jlpt/n1/kanji");
  await expect(page.locator("#app .n1-kanji-catalog .n5-kanji-card")).toHaveCount(160);
  await expect(page.locator("#app")).toContainText(/1047/);

  for (const route of ["grammar", "reading", "listening", "final"] as const) {
    await page.goto(`./#jlpt/n1/${route}`);
    await expect(page.locator("#app .n1-course-page")).toBeVisible();
    await expect(page.locator("#app [data-route-error]")).toHaveCount(0);
    await expect(page.locator("#app h1").first()).toBeVisible();
  }
});

test("N1 lesson SRS action persists user progress in localStorage", async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.removeItem("flashKanji.progress.v2");
    localStorage.setItem("flashKanjiOnboardingCompleted.v3", "true");
  });
  await page.goto("./#jlpt/n1/bulk-n1-01");
  await expect(page.locator("#app .n1-course-page.n5-lesson-page")).toBeVisible();
  const srsButton = page.locator('#app button[data-action="jlpt-lesson-answer"][data-level="N1"][data-value="remember"]').first();
  await expect(srsButton).toBeVisible();
  const cardId = await srsButton.getAttribute("data-card");
  expect(cardId).toBeTruthy();
  await srsButton.click();

  await expect.poll(async () => page.evaluate((id) => {
    const raw = localStorage.getItem("flashKanji.progress.v2");
    const progress = raw ? JSON.parse(raw) : {};
    return {
      hasCard: Boolean(id && progress.cards?.[id]),
      studiedCount: Object.keys(progress.n1Course?.studiedKanji || {}).length,
      viewedCount: Object.keys(progress.n1Course?.viewedLessons || {}).length
    };
  }, cardId)).toMatchObject({
    hasCard: true,
    studiedCount: 1,
    viewedCount: 1
  });
});

test("#review accepts saved markdown reading review progress from localStorage", async ({ page }) => {
  await page.addInitScript(() => {
    const dueAt = new Date(Date.now() - 60_000).toISOString();
    localStorage.setItem("flashKanji.progress.v2", JSON.stringify({
      viewedReadingLevels: { N5: dueAt },
      readingExercises: {
        "jlpt-md-n5-reading-01": {
          level: "N5",
          exerciseId: "jlpt-md-n5-reading-01",
          sourceId: "n5-reading-01",
          sourceKind: "markdown",
          state: "Learning",
          intervalDays: 0,
          srsStep: 0,
          dueAt,
          reviewCount: 1,
          answers: {},
          selectedIndices: [],
          selectedTiles: [],
          completed: false
        }
      }
    }));
  });

  await page.goto("./#review");
  await expectRoute(page, "review");
  await expect(page.locator("#app [data-route-error]")).toHaveCount(0);
});

for (const level of ["N5", "N4"] as const) {
  for (const value of ["remember", "forget"] as const) {
    test(`JLPT lesson ${level} ${value} button keeps scroll and advances immediately`, async ({ page }) => {
      await page.addInitScript(() => {
        localStorage.removeItem("flashKanji.progress.v2");
        localStorage.setItem("flashKanjiOnboardingCompleted.v3", "true");
        localStorage.setItem("flashKanji.progress.v2", JSON.stringify({
          unlockedJlptLevels: ["N4"]
        }));
      });

      await openTextbookLesson(page, level);

      const answerButton = page.locator(`button[data-action="jlpt-lesson-answer"][data-value="${value}"]`).first();
      await expect(answerButton).toBeVisible({ timeout: 15_000 });
      await answerButton.scrollIntoViewIfNeeded();

      const before = await page.evaluate(() => window.scrollY);
      expect(before).toBeGreaterThan(100);

      const firstCardId = await answerButton.getAttribute("data-card");
      expect(firstCardId).toBeTruthy();

      await clickAtCenter(page, answerButton);

      await expect.poll(async () => page.locator(`button[data-action="jlpt-lesson-answer"][data-value="${value}"]`).first().getAttribute("data-card"), {
        timeout: 2_000
      }).not.toBe(firstCardId);

      await expectScrollPreserved(page, before);
    });
  }
}

test("N5 textbook button exercise keeps scroll for correct and wrong answers", async ({ page, request }) => {
  await page.addInitScript(() => {
    localStorage.removeItem("flashKanji.progress.v2");
    localStorage.setItem("flashKanjiOnboardingCompleted.v3", "true");
  });

  const response = await request.get("/data/textbooks/n5/lesson-1.json");
  expect(response.ok()).toBeTruthy();
  const lesson = await response.json() as {
    exercises: Array<{
      id: string;
      type: string;
      answer: string;
      options?: Array<{
        value: string;
        label?: { ru?: string; en?: string } | string;
      }>;
    }>;
  };
  const optionLabel = (option: { value: string; label?: { ru?: string; en?: string } | string }) => {
    if (typeof option.label === "string")
      return option.label;
    return option.label?.ru || option.label?.en || option.value;
  };
  const exercise = lesson.exercises.find((item) => item.type !== "active-recall");
  if (!exercise)
    throw new Error("Expected a textbook exercise to test");
  await openTextbookLessonById(page, "N5", "n5-lesson-1");
  const card = page.locator("#app .n5-exercise-card").first();
  await expect(card).toBeVisible({ timeout: 15_000 });
  await card.scrollIntoViewIfNeeded();
  const before = await page.evaluate(() => window.scrollY);
  expect(before).toBeGreaterThan(100);

  const button = card.locator('button[data-action="n5-answer"]').first();
  await expect(button).toBeVisible();
  await button.click({ force: true });

  await expect(card.locator(".n5-feedback")).toBeVisible();
  await expectScrollPreserved(page, before);
});

test("review sentence practice keeps scroll while checking tiles", async ({ page }) => {
  const dueAt = new Date(Date.now() - 60_000).toISOString();
  const sentenceSeed = {
    lessonCompletions: { "lesson-1": dueAt, "lesson-2": dueAt },
    cards: {
      "1": {
        state: "Review",
        intervalDays: 1,
        srsStep: 1,
        dueAt,
        lastReviewedAt: dueAt,
        lastRating: "good",
        reviewCount: 1,
        lapses: 0,
        correct: 1,
        wrong: 0,
        successRate: 1,
        history: []
      },
      "5": {
        state: "Review",
        intervalDays: 1,
        srsStep: 1,
        dueAt,
        lastReviewedAt: dueAt,
        lastRating: "good",
        reviewCount: 1,
        lapses: 0,
        correct: 1,
        wrong: 0,
        successRate: 1,
        history: []
      },
      "209": {
        state: "Review",
        intervalDays: 1,
        srsStep: 1,
        dueAt,
        lastReviewedAt: dueAt,
        lastRating: "good",
        reviewCount: 1,
        lapses: 0,
        correct: 1,
        wrong: 0,
        successRate: 1,
        history: []
      },
      "272": {
        state: "Review",
        intervalDays: 1,
        srsStep: 1,
        dueAt,
        lastReviewedAt: dueAt,
        lastRating: "good",
        reviewCount: 1,
        lapses: 0,
        correct: 1,
        wrong: 0,
        successRate: 1,
        history: []
      },
      "298": {
        state: "Review",
        intervalDays: 1,
        srsStep: 1,
        dueAt,
        lastReviewedAt: dueAt,
        lastRating: "good",
        reviewCount: 1,
        lapses: 0,
        correct: 1,
        wrong: 0,
        successRate: 1,
        history: []
      }
    },
    sentencePractice: {
      activeId: "sentence-auto-001",
      selected: [],
      checked: false,
      result: null,
      tileKeys: [],
      completed: {}
    }
  };

  await page.addInitScript((payload) => {
    localStorage.setItem("flashKanjiOnboardingCompleted.v3", "true");
    localStorage.setItem("flashKanji.progress.v2", JSON.stringify(payload));
  }, sentenceSeed);

  await page.goto("./#review");
  const card = page.locator('#app .sentence-practice[data-section="sentence-practice"]');
  await expect(card).toBeVisible({ timeout: 15_000 });
  // A user first scrolls the intended control into view. Do not compare a
  // bottom-of-page snapshot with Playwright's automatic pre-click scrolling.
  const clickWithoutJump = async (button: import("@playwright/test").Locator) => {
    await button.evaluate((element) => element.scrollIntoView({ block: "center" }));
    await page.evaluate(() => new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))));
    const before = await page.evaluate(() => window.scrollY);
    expect(before).toBeGreaterThan(100);
    await button.click();
    await expectScrollPreserved(page, before);
  };

  const blanks = await card.locator('.sentence-slot').count();
  const tiles = card.locator('button[data-action="insert-sentence-tile"]');
  const tileCount = await tiles.count();
  expect(tileCount).toBeGreaterThanOrEqual(blanks);
  for (let index = 0; index < blanks; index += 1) {
    await clickWithoutJump(tiles.nth(index));
  }

  await clickWithoutJump(card.locator('button[data-action="check-sentence"]'));

  await expect(card.locator(".sentence-feedback")).toBeVisible();
});

test("a slow previous-route response cannot overwrite Review", async ({ page }) => {
  await page.route("**/data/lessons.json", async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    await route.continue();
  });

  const navigation = page.goto("./#textbooks");

  await page.waitForTimeout(100);

  await page.evaluate(() => {
    window.location.hash = "review";
  });

  await navigation;

  await expectRoute(page, "review");
});
