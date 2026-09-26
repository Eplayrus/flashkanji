import { expect, test, type Page } from "@playwright/test";
import { performanceProgress, installPerformanceProbe, measureHome } from "./helpers/performance-fixture.mjs";

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

for (const width of [1440, 360, 390, 412]) {
  test(`large progress: Home remains interactive across routes at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width === 1440 ? 900 : 844 });
    await page.addInitScript(installPerformanceProbe, performanceProgress("power"));
    const cdp = await page.context().newCDPSession(page);
    if (width !== 1440) await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto("./#dictionary");
    await expect(page.locator("#app")).toHaveAttribute("aria-busy", "false");
    await page.waitForTimeout(4500);
    for (const route of ["textbooks", "review", "dictionary", "textbooks/hiragana/lesson-1", "textbooks/N5/n5-lesson-1", "about"]) {
      await page.evaluate((hash) => { location.hash = hash; }, route);
      await expect(page.locator("#app h1").first()).toBeVisible();
      await page.waitForTimeout(900);
      const result = await measureHome(page);
      expect(result.timedOut, route).not.toBe(true);
      expect(result.paintMs, `${route} visual response`).toBeLessThan(width === 1440 ? 300 : 650);
      expect(result.interactiveMs, `${route} -> Home (700 cards with histories)`).toBeLessThan(width === 1440 ? 700 : 1500);
      expect(result.maxTaskMs, `${route} main-thread stall`).toBeLessThan(1000);
      expect(result.renders, `${route} render storm`).toBeLessThanOrEqual(2);
      expect(result.calls["storage.getItem:flashKanji.progress.v2"] || 0).toBe(0);
      expect(result.calls["storage.setItem:flashKanji.progress.v2"] || 0).toBe(0);
      expect(result.requests.filter((url: string) => url.includes("/data/"))).toEqual([]);
      await expect(page.locator("#app [data-route-error]")).toHaveCount(0);
    }
    expect(errors).toEqual([]);
  });
}

test("20 warm Home/Textbooks cycles do not accumulate work or document listeners", async ({ page }) => {
  await page.addInitScript(installPerformanceProbe, performanceProgress("power"));
  await page.goto("./#dictionary");
  await expect(page.locator("#app")).toHaveAttribute("aria-busy", "false");
  await page.waitForTimeout(4500);
  await measureHome(page);
  const cdp = await page.context().newCDPSession(page);
  await cdp.send("HeapProfiler.collectGarbage");
  const before = await cdp.send("Memory.getDOMCounters");
  const samples: number[] = [];
  for (let i = 0; i < 20; i++) {
    await page.evaluate(() => { location.hash = "textbooks"; });
    await expect(page.locator(".textbooks-page")).toBeVisible();
    const result = await measureHome(page);
    expect(result.timedOut).not.toBe(true);
    expect(result.interactiveMs).toBeLessThan(700);
    samples.push(result.interactiveMs);
  }
  expect(samples[19]).toBeLessThan(Math.max(200, samples[0] * 3));
  await cdp.send("HeapProfiler.collectGarbage");
  const after = await cdp.send("Memory.getDOMCounters");
  expect(after.jsEventListeners).toBeLessThanOrEqual(before.jsEventListeners + 2);
  expect(after.nodes).toBeLessThanOrEqual(before.nodes + 100);
});

test("Eva Room statistics do not sort the entire study queue for every achievement", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.addInitScript(installPerformanceProbe, performanceProgress("power"));
  const cdp = await page.context().newCDPSession(page);
  await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 });
  await page.goto("./#dictionary");
  await expect(page.locator("#app")).toHaveAttribute("aria-busy", "false");
  await page.waitForTimeout(4500);
  const result = await page.evaluate(() => new Promise<{ readyMs: number; maxTaskMs: number }>((resolve) => {
    const tasks: number[] = [];
    const start = performance.now();
    const observer = new PerformanceObserver((list) => {
      tasks.push(...list.getEntries().filter((entry) => entry.startTime >= start).map((entry) => entry.duration));
    });
    observer.observe({ type: "longtask" });
    location.hash = "eva-room";
    const check = () => {
      if (!document.querySelector(".eva-room-page")) { requestAnimationFrame(check); return; }
      const readyMs = performance.now() - start;
      setTimeout(() => { observer.disconnect(); resolve({ readyMs, maxTaskMs: Math.max(0, ...tasks) }); }, 300);
    };
    requestAnimationFrame(check);
  }));
  expect(result.readyMs).toBeLessThan(1200);
  expect(result.maxTaskMs).toBeLessThan(1000);
  await expect(page.locator(".eva-room-page")).toBeVisible();
});
