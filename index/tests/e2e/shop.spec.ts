import { expect, test } from "@playwright/test";

test.use({ serviceWorkers: "block" });

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("flashKanjiOnboardingCompleted.v3", "true");
    localStorage.setItem("flashKanji.changelog.lastSeenVersion", "2026.08.20");
    localStorage.setItem("flashKanji.hasVisited", "true");
    if (!localStorage.getItem("flashKanji.progress.v2")) {
      localStorage.setItem("flashKanji.progress.v2", JSON.stringify({
        settings: { language: "ru", languageManuallySelected: true },
        moonFragments: "100",
        achievements: {
          first_fragment: { unlockedAt: "2026-01-01T00:00:00.000Z", rewardXp: 30, rewardFragments: 5 }
        },
        transactions: []
      }));
    }
    if (!localStorage.getItem("flashkanji_customization")) {
      localStorage.setItem("flashkanji_customization", JSON.stringify({
        owned: { bg_study_hub: true },
        selected: { background: "bg_study_hub", outfit: "outfit_default_assassin", theme: "theme_default_dark" },
        seen: []
      }));
    }
  });
});

test("customization shop shows catalog, charges once, and persists purchase", async ({ page }) => {
  await page.goto("./#stats");

  const shop = page.locator('[data-section="shop-panel"]');
  await expect(shop).toBeVisible();
  await shop.scrollIntoViewIfNeeded();

  const item = page.locator('[data-item-id="bg_classroom"]');
  await expect(item).toBeVisible();
  await expect(item).toContainText("Класс после занятий");
  await expect(item).toContainText("35 Moon");
  await expect(item.locator("img")).toHaveJSProperty("complete", true);

  const balanceBeforePurchase = await page.evaluate(() => {
    const progress = JSON.parse(localStorage.getItem("flashKanji.progress.v2") || "{}");
    return Number(progress.moonFragments || 0);
  });

  const buyButton = item.locator('[data-action="shop-buy"]');
  await expect(buyButton).toBeVisible();
  await buyButton.evaluate((button: HTMLButtonElement) => {
    button.click();
    button.click();
    button.click();
  });

  await expect.poll(async () => page.evaluate(() => {
    const progress = JSON.parse(localStorage.getItem("flashKanji.progress.v2") || "{}");
    const customization = JSON.parse(localStorage.getItem("flashkanji_customization") || "{}");
    return {
      balance: progress.moonFragments,
      ownedInProgress: progress.shop?.owned || [],
      ownedInCustomization: customization.owned || [],
      purchaseTransactions: (progress.transactions || []).filter((item: { reason?: string }) => item.reason === "customization:background:bg_classroom").length
    };
  })).toMatchObject({
    balance: balanceBeforePurchase - 35,
    purchaseTransactions: 1
  });

  await expect.poll(async () => page.evaluate(() => {
    const progress = JSON.parse(localStorage.getItem("flashKanji.progress.v2") || "{}");
    const customization = JSON.parse(localStorage.getItem("flashkanji_customization") || "{}");
    return {
      ownedInProgress: progress.shop?.owned?.includes("bg_classroom") ?? false,
      ownedInCustomization: customization.owned?.includes("bg_classroom") ?? false
    };
  })).toEqual({
    ownedInProgress: true,
    ownedInCustomization: true
  });

  await page.reload();
  await expect(page.locator('[data-item-id="bg_classroom"]')).toContainText(/Куплено|Выбран/);
  await expect.poll(async () => page.evaluate(() => {
    const progress = JSON.parse(localStorage.getItem("flashKanji.progress.v2") || "{}");
    return {
      balance: progress.moonFragments,
      purchaseTransactions: (progress.transactions || []).filter((item: { reason?: string }) => item.reason === "customization:background:bg_classroom").length
    };
  })).toEqual({
    balance: balanceBeforePurchase - 35,
    purchaseTransactions: 1
  });

  await page.locator('[data-item-id="bg_classroom"] [data-action="shop-select"]').click();
  await expect(page.locator('[data-item-id="bg_classroom"]')).toContainText("Выбран");
  await expect.poll(async () => page.evaluate(() => {
    const progress = JSON.parse(localStorage.getItem("flashKanji.progress.v2") || "{}");
    const customization = JSON.parse(localStorage.getItem("flashkanji_customization") || "{}");
    return {
      selectedInProgress: progress.shop?.equipped?.background,
      selectedInCustomization: customization.selected?.background
    };
  })).toEqual({
    selectedInProgress: "bg_classroom",
    selectedInCustomization: "bg_classroom"
  });

  await page.reload();
  await expect(page.locator('[data-item-id="bg_classroom"]')).toContainText("Выбран");
  await expect.poll(async () => page.evaluate(() => {
    const progress = JSON.parse(localStorage.getItem("flashKanji.progress.v2") || "{}");
    const customization = JSON.parse(localStorage.getItem("flashkanji_customization") || "{}");
    return {
      balance: progress.moonFragments,
      selectedInProgress: progress.shop?.equipped?.background,
      selectedInCustomization: customization.selected?.background,
      purchaseTransactions: (progress.transactions || []).filter((item: { reason?: string }) => item.reason === "customization:background:bg_classroom").length
    };
  })).toEqual({
    balance: balanceBeforePurchase - 35,
    selectedInProgress: "bg_classroom",
    selectedInCustomization: "bg_classroom",
    purchaseTransactions: 1
  });
});
