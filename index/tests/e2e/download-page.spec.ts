import { expect, test } from "@playwright/test";

test.use({ serviceWorkers: "block" });

test("download page is SEO-readable and links to the official APK", async ({ page, request }) => {
  await page.goto("./download/");

  await expect(page.locator("h1")).toHaveText(/Учи кандзи\s+где угодно/);
  await expect(page.locator("main")).toContainText("Учебники JLPT, SRS-повторение и практика письма");
  await expect(page.locator(".install-card")).toContainText("Как установить");

  const apkLink = page.locator("a.apk-download");
  await expect(apkLink).toHaveAttribute("href", "https://drive.google.com/uc?export=download&id=1lIwF4vLq2DNAQ_Hufkmve7-m3bLWpvua");
  await expect(apkLink).toHaveText(/Скачать APK/);

  const mirrorLink = page.locator('a[download="flash-kanji-android.apk"]');
  await expect(mirrorLink).toHaveAttribute("href", "../downloads/flash-kanji-android.apk");
  await expect(mirrorLink).toHaveText(/зеркало на flashkanji\.space/);

  const response = await request.get("./downloads/flash-kanji-android.apk");
  expect(response.status()).toBe(200);
  const body = await response.body();
  expect(body.length).toBe(793352);
  expect(body.subarray(0, 2).toString("utf8")).toBe("PK");
});

test("download page keeps the app-like desktop shell visible", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("./download/");
  await expect(page.locator(".download-hero")).toBeVisible();
  await expect(page.locator(".download-sidebar")).toBeVisible();
  await expect(page.locator(".phone-preview")).toBeVisible();

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);
});

test("home hero links to the real download page without SPA redirect", async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem("flashKanjiOnboardingCompleted.v3", "true");
  });
  await page.goto("./#home");

  const downloadLink = page.locator(".home-hero-actions .home-download-cta");
  await expect(downloadLink).toBeVisible();
  await expect(downloadLink).toHaveAttribute("href", "/download/");

  await downloadLink.click();
  await expect(page).toHaveURL(/\/download\/$/);
  await expect(page.locator("h1")).toHaveText(/Учи кандзи\s+где угодно/);
});
