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
