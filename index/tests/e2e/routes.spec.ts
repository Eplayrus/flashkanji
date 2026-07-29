import { expect, test } from "@playwright/test";

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
  test(`JLPT lesson ${value} button does not move page scroll`, async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.removeItem("flashKanji.progress.v2");
      localStorage.setItem("flashKanjiOnboardingCompleted.v3", "true");
    });
    await page.goto(`./?srs-scroll=${value}#textbooks/N5`);
    await expect(page.locator("#app .textbooks-page")).toBeVisible();
    await page.locator('#app [data-action="n5-open-lesson"]').first().click();
    await expect(page.locator("#app .n5-lesson-page")).toBeVisible();
    const answerButton = page.locator(`button[data-action="jlpt-lesson-answer"][data-value="${value}"]`);
    await expect(answerButton).toBeVisible();

    await page.evaluate(() => window.scrollTo(0, 1200));
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
  await page.evaluate(() => { window.location.hash = "review"; });
  await navigation;
  await expectRoute(page, "review");
});
