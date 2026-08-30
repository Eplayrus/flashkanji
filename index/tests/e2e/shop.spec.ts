import { expect, test } from "@playwright/test";

test.use({ serviceWorkers: "block" });

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("flashKanjiOnboardingCompleted.v3", "true");
    localStorage.setItem("flashKanji.changelog.lastSeenVersion", "2026.08.27");
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

test("Eva Room applies the selected shop background instead of legacy progress default", async ({ page }) => {
  const failedBackgroundUrls: string[] = [];
  page.on("response", (response) => {
    const url = response.url();
    if (response.status() >= 400 && /\/assets\/bg\/.*\.webp/i.test(url)) {
      failedBackgroundUrls.push(`${response.status()} ${url}`);
    }
  });

  await page.addInitScript(() => {
    localStorage.setItem("flashKanji.progress.v2", JSON.stringify({
      settings: { language: "ru", languageManuallySelected: true },
      appOpens: 3,
      moonFragments: 100,
      selectedEvaRoomBackground: "bg_study_hub",
      unlockedBackgrounds: ["bg_study_hub", "bg_classroom"],
      shop: {
        owned: ["bg_study_hub", "bg_classroom"],
        equipped: { background: "bg_study_hub", outfit: "outfit_default_assassin", theme: "theme_default_dark" }
      }
    }));
    localStorage.setItem("flashkanji_customization", JSON.stringify({
      owned: ["bg_study_hub", "bg_classroom"],
      selected: { background: "bg_classroom", outfit: "outfit_default_assassin", theme: "theme_default_dark" },
      seen: ["bg_study_hub", "bg_classroom"],
      updatedAt: "2026-08-27T00:00:00.000Z"
    }));
  });

  await page.goto("./#eva-room");
  await expect(page.locator("#app .eva-room-page")).toBeVisible({ timeout: 15_000 });
  await expect(page.locator("#app .eva-vn-bg")).toBeVisible();

  await expect.poll(async () => page.evaluate(() => document.documentElement.dataset.customRoom)).toBe("bg_classroom");
  await expect.poll(async () => page.evaluate(() => {
    const debug = window.FLASH_KANJI_EVA_ROOM_DEBUG?.getBackground?.();
    const scene = document.querySelector(".eva-vn-scene") as HTMLElement | null;
    const bg = document.querySelector(".eva-vn-bg");
    return {
      currentId: debug?.currentId,
      selectedCustomization: debug?.selectedCustomization,
      selectedProgress: debug?.selectedProgress,
      sceneCss: scene?.style.getPropertyValue("--eva-bg") || "",
      computedBackground: bg ? getComputedStyle(bg).backgroundImage : ""
    };
  })).toMatchObject({
    currentId: "bg_classroom",
    selectedCustomization: "bg_classroom",
    selectedProgress: "bg_classroom"
  });

  const sceneCss = await page.locator(".eva-vn-scene").evaluate((node) => (node as HTMLElement).style.getPropertyValue("--eva-bg"));
  expect(sceneCss).toContain("bg_classroom.webp");
  expect(failedBackgroundUrls).toEqual([]);
});

test("buying and equipping an Eva outfit updates the visible Eva sprite and survives reload", async ({ page }) => {
  await page.addInitScript(() => {
    if (sessionStorage.getItem("flashkanji-shop-outfit-seeded") === "true") return;
    sessionStorage.setItem("flashkanji-shop-outfit-seeded", "true");
    const now = "2026-08-27T00:00:00.000Z";
    localStorage.removeItem("flashkanji_eva_state_v2");
    localStorage.setItem("flashKanji.progress.v2", JSON.stringify({
      settings: { language: "ru", languageManuallySelected: true },
      appOpens: 3,
      level: 3,
      moonFragments: 500,
      selectedEvaSprite: "idle",
      unlockedEvaSprites: ["idle", "fis_mentor"],
      selectedEvaRoomBackground: "bg_study_hub",
      achievements: {
        first_kanji: { unlockedAt: now, rewardXp: 25, rewardFragments: 5 },
        first_fragment: { unlockedAt: now, rewardXp: 30, rewardFragments: 5 }
      },
      transactions: [],
      shop: {
        owned: ["bg_study_hub", "outfit_fis_mentor", "eva_sprite:idle", "eva_sprite:fis_mentor"],
        equipped: { background: "bg_study_hub", outfit: "outfit_fis_mentor", theme: "theme_default_dark" }
      },
      evaAutonomy: { currentLine: null }
    }));
    localStorage.setItem("flashkanji_customization", JSON.stringify({
      owned: ["bg_study_hub", "outfit_fis_mentor", "theme_default_dark"],
      selected: { background: "bg_study_hub", outfit: "outfit_fis_mentor", theme: "theme_default_dark" },
      seen: ["bg_study_hub", "outfit_fis_mentor", "theme_default_dark"],
      updatedAt: now
    }));
  });

  await page.goto("./#home");
  const homeEvaImage = page.locator(".home-eva-avatar img").first();
  await expect(homeEvaImage).toBeVisible({ timeout: 15_000 });
  const spriteBeforeEquip = await homeEvaImage.getAttribute("src");
  expect(spriteBeforeEquip).toBeTruthy();

  await page.goto("./#stats");
  const outfit = page.locator('[data-item-id="outfit_study_session"]');
  await expect(outfit).toBeVisible({ timeout: 15_000 });
  await outfit.scrollIntoViewIfNeeded();
  await outfit.locator('[data-action="shop-buy"]').click();
  await expect(outfit).toContainText(/Куплено|Выбрать|Выбран/);
  await outfit.locator('[data-action="shop-select"]').click();
  await expect(outfit).toContainText("Выбран");

  await expect.poll(async () => page.evaluate(() => {
    const progress = JSON.parse(localStorage.getItem("flashKanji.progress.v2") || "{}");
    const customization = JSON.parse(localStorage.getItem("flashkanji_customization") || "{}");
    return {
      selectedOutfit: customization.selected?.outfit,
      selectedSprite: progress.selectedEvaSprite,
      unlockedStudySprite: progress.unlockedEvaSprites?.includes("study_session") ?? false
    };
  })).toEqual({
    selectedOutfit: "outfit_study_session",
    selectedSprite: "study_session",
    unlockedStudySprite: true
  });

  await page.goto("./#eva-room");
  const roomEvaImage = page.locator(".eva-vn-sprite").first();
  await expect(roomEvaImage).toBeVisible({ timeout: 15_000 });
  await expect.poll(async () => roomEvaImage.getAttribute("src")).toContain("eva_school_uniform");

  await page.goto("./#home");
  await expect(page.locator(".home-eva-avatar img").first()).toBeVisible({ timeout: 15_000 });
  await expect.poll(async () => page.locator(".home-eva-avatar img").first().getAttribute("src")).toContain("eva_school_uniform");
  await expect.poll(async () => page.locator(".home-eva-avatar img").first().getAttribute("src")).not.toBe(spriteBeforeEquip);

  await page.reload();
  await expect(page.locator(".home-eva-avatar img").first()).toBeVisible({ timeout: 15_000 });
  await expect.poll(async () => page.locator(".home-eva-avatar img").first().getAttribute("src")).toContain("eva_school_uniform");
});

declare global {
  interface Window {
    FLASH_KANJI_EVA_ROOM_DEBUG?: {
      getBackground?: () => {
        currentId?: string | null;
        selectedCustomization?: string | null;
        selectedProgress?: string | null;
      };
    };
  }
}
