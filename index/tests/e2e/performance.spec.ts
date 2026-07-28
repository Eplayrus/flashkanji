import { expect, test } from "@playwright/test";

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
