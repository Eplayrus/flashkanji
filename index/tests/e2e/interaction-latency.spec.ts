import { expect, test, type Page } from "@playwright/test";

declare global {
  interface Window {
    __flashKanjiClickFrameDelays?: number[];
  }
}

test.use({
  serviceWorkers: "block",
  viewport: { width: 1280, height: 900 },
  isMobile: false,
  hasTouch: false
});

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("flashKanjiOnboardingCompleted.v3", "true");
    localStorage.setItem("flashKanji.hasVisited", "true");
    localStorage.setItem("flashKanji.changelog.lastSeenVersion", "2026.08.27");
    window.__flashKanjiClickFrameDelays = [];
    document.addEventListener("pointerdown", () => {
      const startedAt = performance.now();
      requestAnimationFrame(() => {
        window.__flashKanjiClickFrameDelays ||= [];
        window.__flashKanjiClickFrameDelays.push(performance.now() - startedAt);
      });
    }, { capture: true });
  });
});

async function clickRouteAndMeasure(page: Page, route: string, heading: RegExp) {
  const selector = `.app-sidebar .sidebar-nav-btn[data-action="route"][data-route="${route}"]`;
  const beforeCount = await page.evaluate(() => window.__flashKanjiClickFrameDelays?.length || 0);
  const startedAt = await page.evaluate(() => performance.now());

  await page.locator(selector).scrollIntoViewIfNeeded();
  await page.locator(selector).evaluate((element) => {
    const target = element as HTMLElement;
    target.dispatchEvent(new PointerEvent("pointerdown", {
      bubbles: true,
      cancelable: true,
      pointerId: 1,
      pointerType: "mouse"
    }));
    target.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true }));
    target.dispatchEvent(new MouseEvent("mouseup", { bubbles: true, cancelable: true }));
    target.click();
  });

  await page.waitForFunction(
    (count) => (window.__flashKanjiClickFrameDelays?.length || 0) > count,
    beforeCount,
    { timeout: 1000 }
  );
  const clickFrameMs = await page.evaluate(() => window.__flashKanjiClickFrameDelays?.at(-1) || 0);

  await expect(page.locator("#app [data-route-error]")).toHaveCount(0);
  await expect(page.locator("#app h1").first()).toContainText(heading, { timeout: 5000 });
  const routeReadyMs = await page.evaluate((start) => performance.now() - start, startedAt);

  expect(clickFrameMs, `${route} should yield a paint frame quickly after click`).toBeLessThan(650);
  expect(routeReadyMs, `${route} should settle without a multi-second stall`).toBeLessThan(2500);
}

async function dispatchClickAndMeasureNextFrame(page: Page, selector: string) {
  const beforeCount = await page.evaluate(() => window.__flashKanjiClickFrameDelays?.length || 0);
  await page.locator(selector).evaluate((element) => {
    const target = element as HTMLElement;
    target.dispatchEvent(new PointerEvent("pointerdown", {
      bubbles: true,
      cancelable: true,
      pointerId: 1,
      pointerType: "mouse"
    }));
    target.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true }));
    target.dispatchEvent(new MouseEvent("mouseup", { bubbles: true, cancelable: true }));
    target.click();
  });
  await page.waitForFunction(
    (count) => (window.__flashKanjiClickFrameDelays?.length || 0) > count,
    beforeCount,
    { timeout: 1000 }
  );
  return page.evaluate(() => window.__flashKanjiClickFrameDelays?.at(-1) || 0);
}

test("sidebar route buttons keep immediate click feedback", async ({ page }) => {
  await page.goto("./#home");
  await expect(page.locator("#app")).toHaveAttribute("aria-busy", "false");
  await expect(page.locator(".app-sidebar")).toBeVisible();

  await clickRouteAndMeasure(page, "textbooks", /Учебники|Textbooks/i);
  await clickRouteAndMeasure(page, "review", /Повтор|Review/i);
  await clickRouteAndMeasure(page, "dictionary", /Словарь|Dictionary/i);
  await clickRouteAndMeasure(page, "download", /Скачать|Download/i);
  await clickRouteAndMeasure(page, "about", /О Flash Kanji|About Flash Kanji|О проекте/i);
  await clickRouteAndMeasure(page, "home", /Небольшой урок|Small lesson|Главная|Flash Kanji/i);
});

test("home route stays fast after deferred dictionary data has loaded", async ({ page }) => {
  await page.goto("./#dictionary");
  await expect(page.locator("#app")).toHaveAttribute("aria-busy", "false");
  await expect(page.locator("#app h1").first()).toContainText(/Словарь|Dictionary/i);

  await page.waitForTimeout(6500);

  await clickRouteAndMeasure(page, "home", /Небольшой урок|Small lesson|Главная|Flash Kanji/i);
});

test("review answer controls keep fast feedback without disabling selectable study text", async ({ page }) => {
  await page.addInitScript(() => {
    const dueAt = new Date(Date.now() - 60_000).toISOString();
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

  await page.goto("./#review");
  await expect(page.locator("#app")).toHaveAttribute("aria-busy", "false");
  await expect(page.locator('#app button[data-action="show-answer"]')).toBeVisible({ timeout: 15_000 });
  await page.locator('#app button[data-action="show-answer"]').click();

  const ratingButton = page.locator('#app button[data-action="rate"][data-rating="remember"]').first();
  await expect(ratingButton).toBeVisible();
  const controlStyles = await ratingButton.evaluate((element) => {
    const style = getComputedStyle(element);
    return {
      userSelect: style.userSelect,
      webkitUserSelect: style.webkitUserSelect,
      touchAction: style.touchAction
    };
  });
  expect([controlStyles.userSelect, controlStyles.webkitUserSelect]).toContain("none");
  expect(controlStyles.touchAction).toBe("manipulation");

  const studyTextStyles = await page.locator("#app .answer-section p").first().evaluate((element) => {
    const style = getComputedStyle(element);
    return {
      userSelect: style.userSelect,
      webkitUserSelect: style.webkitUserSelect
    };
  });
  expect(studyTextStyles.userSelect).not.toBe("none");
  expect(studyTextStyles.webkitUserSelect).not.toBe("none");

  await page.evaluate(() => {
    document.getSelection()?.removeAllRanges();
  });
  const clickFrameMs = await dispatchClickAndMeasureNextFrame(page, '#app button[data-action="rate"][data-rating="remember"]');
  expect(clickFrameMs, "SRS answer controls should yield a paint frame quickly after click").toBeLessThan(650);
  await expect(page.locator("#app")).toContainText(/0 в очереди|0 in queue/i);
  await expect.poll(async () => page.evaluate(() => document.getSelection()?.toString() || "")).toBe("");
});
