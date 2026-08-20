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

test("cold direct N5 lesson deep links wait for data and open real lessons", async ({ page }) => {
  for (const lessonId of ["n5-lesson-1", "n5-lesson-5", "n5-lesson-10"] as const) {
    await page.goto(`./#textbooks/N5/${lessonId}`);
    await expect(page.locator("#app .n5-lesson-page")).toBeVisible({ timeout: 15_000 });
    await expect(page.locator("#app [data-route-error]")).toHaveCount(0);
    await expect(page.locator("#app .lesson-study-card")).toBeVisible();
    await expect(page.locator("#app")).toContainText(/Кандзи 1 из 8|Kanji 1 of 8|Кандзи 1\/8|Kanji 1\/8/);
    await expect(page.locator("#app")).not.toContainText(/Кандзи 0\/0|Kanji 0\/0|Урок завершён|Lesson complete/);
  }
});

test("N5 required JSON failure shows retry without completing the lesson", async ({ page }) => {
  let fail = true;
  await page.route("**/data/jlpt/n5/kanji.json", async (route) => {
    if (fail) {
      await route.fulfill({ status: 503, body: "temporarily unavailable" });
      return;
    }
    await route.continue();
  });

  await page.goto("./#textbooks/N5/n5-lesson-5");
  await expect(page.locator('#app [data-course-data-error="N5"]')).toBeVisible({ timeout: 15_000 });
  await expect(page.locator("#app")).toContainText(/Не удалось загрузить карточки урока|Could not load lesson cards/);
  await expect(page.locator("#app")).not.toContainText(/Урок завершён|Lesson complete|Кандзи 0\/0|Kanji 0\/0/);

  fail = false;
  await page.locator('[data-action="retry-jlpt-course-data"][data-level="N5"]').click();
  await expect(page.locator("#app .n5-lesson-page")).toBeVisible({ timeout: 15_000 });
  await expect(page).toHaveURL(/#textbooks\/N5\/n5-lesson-5$/);
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

  await page.goto("./#textbooks/N5/n5-lesson-5");
  await expect(page.locator("#app .n5-lesson-page")).toBeVisible({ timeout: 15_000 });
  await expect(page.locator("#app .lesson-study-card")).toBeVisible();
  await expect(page.locator("#app")).toContainText(/Кандзи 1 из 8|Kanji 1 of 8|Кандзи 1\/8|Kanji 1\/8/);
  await expect(page.locator("#app")).not.toContainText(/Урок завершён|Lesson complete|Кандзи 0\/0|Kanji 0\/0/);
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
    localStorage.setItem("flashKanji.changelog.lastSeenVersion", "2026.08.20");
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

for (const value of ["remember", "forget"] as const) {
  test.skip(`JLPT lesson ${value} button does not move page scroll`, async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.removeItem("flashKanji.progress.v2");
      localStorage.setItem("flashKanjiOnboardingCompleted.v3", "true");
    });

    await page.goto(`./?srs-scroll=${value}#textbooks/N5`);

    await expect(page.locator("#app .textbooks-page")).toBeVisible();

    await page
      .locator('#app [data-action="n5-open-lesson"]')
      .first()
      .click();

    await expect(page.locator("#app .n5-lesson-page")).toBeVisible();

    const answerButton = page.locator(
      `button[data-action="jlpt-lesson-answer"][data-value="${value}"]`
    );

    await expect(answerButton).toBeVisible();

    await page.evaluate(() => {
      window.scrollTo(0, 1200);
    });

    const target = await answerButton.evaluate((button) => {
      const rect = button.getBoundingClientRect();

      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        scrollY: window.scrollY
      };
    });

    const before = target.scrollY;

    expect(before).toBeGreaterThan(0);

    await page.mouse.click(target.x, target.y);

    await page.waitForTimeout(900);

    const after = await page.evaluate(() => window.scrollY);

    expect(Math.abs(after - before)).toBeLessThanOrEqual(4);
  });
}

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