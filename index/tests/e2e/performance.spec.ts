import { expect, test } from "@playwright/test";
import { performanceProgress, installPerformanceProbe, measureHome } from "./helpers/performance-fixture.mjs";

test.use({ serviceWorkers: "block" });

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("flashKanjiOnboardingCompleted.v3", "true");
  });
});

test("home does not eagerly fetch heavy deferred data or Chart.js", async ({ page }) => {
  const requested: string[] = [];
  page.on("request", (request) => {
    const url = new URL(request.url());
    if (url.pathname.includes("/data/") || url.pathname.includes("/vendor/chart.umd.min.js")) {
      requested.push(url.pathname);
    }
  });

  await page.goto("./#home");
  await expect(page.locator("#app")).toHaveAttribute("aria-busy", "false");
  await page.waitForTimeout(7_600);

  const forbiddenStartupRequests = [
    "/data/vocabulary/index.json",
    "/data/sentences/index.json",
    "/data/jlpt/n2/kanji.json",
    "/data/jlpt/n3/kanji.json",
    "/vendor/chart.umd.min.js"
  ];

  for (const forbidden of forbiddenStartupRequests) {
    expect(requested.some((pathname) => pathname.endsWith(forbidden))).toBe(false);
  }
});

test("heavy data starts only when a route needs it", async ({ page }) => {
  const requested: string[] = [];
  page.on("request", (request) => {
    const url = new URL(request.url());
    if (url.pathname.includes("/data/")) {
      requested.push(url.pathname);
    }
  });

  await page.goto("./#home");
  await expect(page.locator("#app")).toHaveAttribute("aria-busy", "false");
  await page.locator('.bottom-nav [data-route="dictionary"]').click();

  await expect.poll(() => requested.some((pathname) => pathname.endsWith("/data/vocabulary/index.json"))).toBe(true);
});

test("Chart.js remains lazy until stats route", async ({ page }) => {
  const requested: string[] = [];
  page.on("request", (request) => {
    const url = new URL(request.url());
    if (url.pathname.includes("/vendor/chart.umd.min.js")) {
      requested.push(url.pathname);
    }
  });

  await page.goto("./#home");
  await expect(page.locator("#app")).toHaveAttribute("aria-busy", "false");
  expect(requested).toHaveLength(0);

  await page.goto("./#stats");
  await expect.poll(() => requested.length).toBeGreaterThan(0);
});

test("unrelated deferred JSON cannot block Dictionary -> Home", async ({ page }) => {
  await page.addInitScript(installPerformanceProbe, performanceProgress("fresh"));
  let release!: () => void;
  const gate = new Promise<void>((resolve) => { release = resolve; });
  let requested = false;
  await page.route("**/data/vocabulary/index.json", async (route) => {
    requested = true;
    await gate;
    await route.continue();
  });
  await page.goto("./#dictionary");
  await expect.poll(() => requested).toBe(true);
  try {
    const result = await measureHome(page);
    expect(result.timedOut).not.toBe(true);
    expect(result.interactiveMs).toBeLessThan(700);
    await expect(page.locator(".home-shell")).toBeVisible();
  } finally { release(); }
});

test.describe("PWA performance (real Service Worker)", () => {
  test.use({ serviceWorkers: "allow" });
  test("activation and warm SPA navigation do not refresh the databases or reset storage", async ({ page, context }) => {
    await page.addInitScript(installPerformanceProbe, performanceProgress("medium"));
    const requests: string[] = [];
    context.on("request", (request) => requests.push(request.url()));
    await page.goto("./#dictionary");
    await expect(page.locator("#app")).toHaveAttribute("aria-busy", "false");
    await page.evaluate(async () => { await navigator.serviceWorker.ready; });
    await expect.poll(() => page.evaluate(() => !!navigator.serviceWorker.controller)).toBe(true);
    await page.waitForTimeout(4500);
    // Warm Home's images too: the runtime cache is legitimately created lazily
    // on the first asset, not during Service Worker activation.
    await measureHome(page);
    const cacheNames = await page.evaluate(() => caches.keys());
    expect(cacheNames.some((name) => name.startsWith("flash-kanji-"))).toBe(true);
    requests.length = 0;
    for (const route of ["textbooks", "review", "dictionary"]) {
      await page.evaluate((hash) => { location.hash = hash; }, route);
      await page.waitForTimeout(500);
      const result = await measureHome(page);
      expect(result.timedOut).not.toBe(true);
      expect(result.interactiveMs).toBeLessThan(1200);
      expect(result.calls["storage.setItem:flashKanji.progress.v2"] || 0).toBe(0);
      expect(result.calls["storage.getItem:flashKanji.progress.v2"] || 0).toBe(0);
    }
    expect(requests.filter((url) => /\/data\/|service-worker\.js/.test(url))).toEqual([]);
    expect(await page.evaluate(() => caches.keys())).toEqual(cacheNames);
    await page.reload();
    await expect(page.locator(".home-shell")).toBeVisible();
    await expect.poll(() => page.evaluate(() => !!navigator.serviceWorker.controller)).toBe(true);
    expect(await page.evaluate(() => Object.values(JSON.parse(localStorage.getItem("flashKanji.progress.v2") || "{}").cards)
      .filter((card: any) => card.reviewCount >= 8).length)).toBeGreaterThanOrEqual(160);
  });
});
