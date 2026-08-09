import { expect, test } from "@playwright/test";

const CHANGELOG_VERSION = "2026.08.09";
const LAST_SEEN_KEY = "flashKanji.changelog.lastSeenVersion";
const HAS_VISITED_KEY = "flashKanji.hasVisited";

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("flashKanjiOnboardingCompleted.v3", "true");
  });
});

test("JLPT lesson answer switches card before slow audio promises resolve", async ({ page }) => {
  await page.addInitScript(() => {
    if (!sessionStorage.getItem("__flashKanjiE2eInstantFeedbackSeeded")) {
      sessionStorage.setItem("__flashKanjiE2eInstantFeedbackSeeded", "true");
      localStorage.removeItem("flashKanji.progress.v2");
      localStorage.removeItem("flashKanji.changelog.lastSeenVersion");
      localStorage.removeItem("flashKanji.hasVisited");
      localStorage.setItem("flashKanjiOnboardingCompleted.v3", "true");
    }
    window.__flashKanjiPendingAudio = false;
    window.__flashKanjiSpeechStarted = false;

    const never = new Promise<void>(() => undefined);
    HTMLMediaElement.prototype.play = () => {
      window.__flashKanjiPendingAudio = true;
      return never;
    };

    class Utterance {
      text: string;
      lang = "";
      rate = 1;
      voice: SpeechSynthesisVoice | null = null;

      constructor(text: string) {
        this.text = text;
      }
    }

    Object.defineProperty(window, "SpeechSynthesisUtterance", { configurable: true, value: Utterance });
    Object.defineProperty(window, "speechSynthesis", {
      configurable: true,
      value: {
        cancel: () => undefined,
        getVoices: () => [],
        speak: () => {
          window.__flashKanjiSpeechStarted = true;
        }
      }
    });
  });

  await page.goto("./#jlpt/n1/bulk-n1-01");
  await expect(page.locator("#app .n1-course-page.n5-lesson-page")).toBeVisible({ timeout: 15_000 });
  await expect(page.locator("#app [data-route-error]")).toHaveCount(0);
  const answerButton = page.locator('#app button[data-action="jlpt-lesson-answer"][data-level="N1"][data-value="remember"]').first();
  await expect(answerButton).toBeVisible({ timeout: 15_000 });
  const firstCardId = await answerButton.getAttribute("data-card");
  expect(firstCardId).toBeTruthy();

  await answerButton.click();

  await expect.poll(async () => page.locator('#app button[data-action="jlpt-lesson-answer"][data-level="N1"][data-value="remember"]').first().getAttribute("data-card"), {
    timeout: 1200
  }).not.toBe(firstCardId);

  await expect.poll(async () => page.evaluate((cardId) => {
    const raw = localStorage.getItem("flashKanji.progress.v2");
    const progress = raw ? JSON.parse(raw) : {};
    const session = progress.jlptLessonStudy?.sessions?.["N1:bulk-n1-01"];
    return Boolean(cardId && session?.answers?.[cardId]);
  }, firstCardId)).toBe(true);

  await expect.poll(async () => page.evaluate(() => window.__flashKanjiPendingAudio || window.__flashKanjiSpeechStarted)).toBeTruthy();
});

test("new user does not see changelog and is marked current", async ({ page }) => {
  await page.addInitScript(() => {
    if (sessionStorage.getItem("__flashKanjiE2eNewChangelogSeeded")) return;
    sessionStorage.setItem("__flashKanjiE2eNewChangelogSeeded", "true");
    localStorage.removeItem("flashKanji.progress.v2");
    localStorage.removeItem("flashKanji.changelog.lastSeenVersion");
    localStorage.removeItem("flashKanji.hasVisited");
  });

  await page.goto("./#home");
  await expect(page.locator("#app")).toHaveAttribute("aria-busy", "false");
  await expect.poll(async () => {
    try {
      return await page.evaluate((key) => localStorage.getItem(key), LAST_SEEN_KEY);
    } catch {
      return null;
    }
  }).toBe(CHANGELOG_VERSION);
  await expect(page.locator(".changelog-modal")).toHaveCount(0);
});

test("existing user sees changelog once per version", async ({ page }) => {
  await page.addInitScript(() => {
    if (sessionStorage.getItem("__flashKanjiE2eReturningChangelogSeeded")) return;
    sessionStorage.setItem("__flashKanjiE2eReturningChangelogSeeded", "true");
    localStorage.removeItem("flashKanji.changelog.lastSeenVersion");
    localStorage.removeItem("flashKanji.hasVisited");
    localStorage.setItem("flashKanji.progress.v2", JSON.stringify({
      appOpens: 3,
      cards: { "1": { state: "Review", dueAt: new Date(Date.now() - 60_000).toISOString(), reviewCount: 1 } },
      settings: { language: "ru", languageAutoDetected: false, languageManuallySelected: true }
    }));
  });

  await page.goto("./#home");
  await expect(page.locator(".changelog-modal")).toBeVisible();
  await expect(page.locator(".changelog-modal")).toContainText("Озвучка стала аккуратнее");
  await page.locator('[data-action="close-changelog"]').click();
  await expect(page.locator(".changelog-modal")).toHaveCount(0);
  await expect.poll(async () => page.evaluate((key) => localStorage.getItem(key), LAST_SEEN_KEY)).toBe(CHANGELOG_VERSION);

  await page.reload();
  await expect(page.locator("#app")).toHaveAttribute("aria-busy", "false");
  await page.waitForTimeout(500);
  await expect(page.locator(".changelog-modal")).toHaveCount(0);
});

test("changelog content follows saved English language", async ({ page }) => {
  await page.addInitScript(() => {
    if (sessionStorage.getItem("__flashKanjiE2eEnglishChangelogSeeded")) return;
    sessionStorage.setItem("__flashKanjiE2eEnglishChangelogSeeded", "true");
    localStorage.removeItem("flashKanji.changelog.lastSeenVersion");
    localStorage.removeItem("flashKanji.hasVisited");
    localStorage.setItem("flashKanji.progress.v2", JSON.stringify({
      appOpens: 2,
      settings: { language: "en", languageManuallySelected: true },
      seenKanji: { "1": "2026-07-29T00:00:00.000Z" }
    }));
  });

  await page.goto("./#home");
  await expect(page.locator(".changelog-modal")).toBeVisible();
  await expect(page.locator(".changelog-modal")).toContainText("Audio playback is cleaner");
  await expect(page.locator(".changelog-modal")).toContainText("Kanji pronunciation no longer overlaps itself");
});

declare global {
  interface Window {
    __flashKanjiPendingAudio?: boolean;
    __flashKanjiSpeechStarted?: boolean;
  }
}
