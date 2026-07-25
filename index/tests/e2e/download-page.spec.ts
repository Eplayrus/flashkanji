import { expect, test } from "@playwright/test";

test.use({ serviceWorkers: "block" });

test("download entry is a lightweight bridge into the main app route", async ({ page, request }) => {
  const documentResponse = await request.get("./download/");
  expect(documentResponse.status()).toBe(200);
  const documentHtml = await documentResponse.text();
  expect(documentHtml).toContain("Страница скачивания встроена в основное приложение Flash Kanji");
  expect(documentHtml).toContain("#download");
  expect(documentHtml).not.toContain("download-app-shell");
  expect(documentHtml).not.toContain("download.css");

  await page.goto("./download/");
  await expect(page).toHaveURL(/\/index\.html#download$/);
  await expect(page.locator(".app-shell")).toBeVisible();
  await expect(page.locator(".download-page")).toBeVisible();
});

test("download route uses the app shell, app styles, and official APK links", async ({ page, request }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem("flashKanjiOnboardingCompleted.v3", "true");
  });
  await page.goto("./#download");

  await expect(page.locator(".download-page")).toBeVisible();
  await expect(page.locator(".bottom-nav")).toBeVisible();
  await expect(page.locator(".download-app-preview img")).toBeVisible();
  await expect(page.locator("h1")).toContainText(/Скачать Flash Kanji|Download Flash Kanji/);
  await expect(page.locator("h1")).toContainText(/и установить PWA|and install the PWA/);
  await expect(page.locator("main")).toContainText(/JLPT-учебники|JLPT textbooks/);

  const apkLink = page.locator("a.apk-download");
  await expect(apkLink).toHaveAttribute("href", "https://drive.google.com/uc?export=download&id=1lIwF4vLq2DNAQ_Hufkmve7-m3bLWpvua");
  await expect(apkLink).toHaveText(/Скачать APK|Download APK/);

  const pwaButton = page.locator('.download-page button[data-action="pwa-install"]');
  await expect(pwaButton).toBeVisible();

  const mirrorLink = page.locator('a[download="flash-kanji-android.apk"]');
  await expect(mirrorLink).toHaveAttribute("href", "downloads/flash-kanji-android.apk");

  const response = await request.get("./downloads/flash-kanji-android.apk");
  expect(response.status()).toBe(200);
  const body = await response.body();
  expect(body.length).toBe(793352);
  expect(body.subarray(0, 2).toString("utf8")).toBe("PK");
});

test("download route keeps desktop layout inside the existing shell", async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem("flashKanjiOnboardingCompleted.v3", "true");
  });
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("./#download");

  await expect(page.locator(".home-hero-card.download-hero-card")).toBeVisible();
  await expect(page.locator(".app-sidebar")).toBeVisible();
  await expect(page.locator('.sidebar-nav-btn[data-route="download"]')).toHaveClass(/is-active/);

  const layout = await page.evaluate(() => {
    const heading = document.querySelector("h1")?.getBoundingClientRect();
    const preview = document.querySelector(".download-app-preview")?.getBoundingClientRect();
    return {
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      headingWidth: heading?.width ?? 0,
      previewWidth: preview?.width ?? 0,
      gap: heading && preview ? preview.left - heading.right : null
    };
  });

  expect(layout.overflow).toBeLessThanOrEqual(1);
  expect(layout.headingWidth).toBeGreaterThan(320);
  expect(layout.previewWidth).toBeGreaterThan(220);
  expect(layout.gap).not.toBeNull();
  expect(layout.gap ?? 0).toBeGreaterThanOrEqual(8);
});

test("home hero opens the embedded download route without leaving the SPA", async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem("flashKanjiOnboardingCompleted.v3", "true");
  });
  await page.goto("./#home");

  const downloadButton = page.locator(".home-hero-actions .home-download-cta");
  await expect(downloadButton).toBeVisible();
  await expect(downloadButton).toHaveAttribute("data-route", "download");

  await downloadButton.click();
  await expect(page).toHaveURL(/#download$/);
  await expect(page.locator(".download-page")).toBeVisible();
});
