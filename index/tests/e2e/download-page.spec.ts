import { expect, test } from "@playwright/test";

test.use({ serviceWorkers: "block" });

test("download page is SEO-readable and links to the official APK", async ({ page, request }) => {
  await page.goto("./download/");

  await expect(page.locator("h1")).toHaveText("Скачать Flash Kanji для Android и установить PWA");
  await expect(page.locator("main")).toContainText("Официальная сборка Flash Kanji");
  await expect(page.locator("#faq")).toContainText("Частые вопросы");

  const apkLink = page.locator('a[download="flash-kanji-android.apk"]');
  await expect(apkLink).toHaveAttribute("href", "../downloads/flash-kanji-android.apk");
  await expect(apkLink).toHaveText(/Скачать APK для Android/);

  const response = await request.get("./downloads/flash-kanji-android.apk");
  expect(response.status()).toBe(200);
  const body = await response.body();
  expect(body.length).toBe(793352);
  expect(body.subarray(0, 2).toString("utf8")).toBe("PK");
});

test("download page stays within mobile viewport and PWA button opens manual help", async ({ page }) => {
  await page.goto("./download/");
  await expect(page.locator(".hero-card")).toBeVisible();

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);

  await page.locator("#pwaInstallButton").click();
  await expect(page.locator("#pwaStatus")).toContainText(/меню браузера|На iPhone/i);
});

test("home hero links to the real download page without SPA redirect", async ({ page }) => {
  await page.goto("./#home");

  const downloadLink = page.locator(".home-hero-actions .home-download-cta");
  await expect(downloadLink).toBeVisible();
  await expect(downloadLink).toHaveAttribute("href", "/download/");

  await downloadLink.click();
  await expect(page).toHaveURL(/\/download\/$/);
  await expect(page.locator("h1")).toHaveText("Скачать Flash Kanji для Android и установить PWA");
});
