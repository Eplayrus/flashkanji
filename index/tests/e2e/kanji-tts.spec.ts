import { expect, test } from "@playwright/test";

declare global {
  interface Window {
    __flashKanjiTtsCalls?: Array<{
      type: "cancel" | "speak";
      text?: string;
      lang?: string;
      rate?: number;
    }>;
    __flashKanjiAudioCalls?: Array<{
      type: "new" | "play" | "pause";
      src?: string;
    }>;
    __flashKanjiTtsShouldThrow?: boolean;
  }
}

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("flashKanjiOnboardingCompleted.v3", "true");
    window.__flashKanjiTtsCalls = [];
    window.__flashKanjiAudioCalls = [];
    window.__flashKanjiTtsShouldThrow = false;

    class MockUtterance {
      text: string;
      lang = "";
      rate = 1;
      voice: SpeechSynthesisVoice | null = null;

      constructor(text: string) {
        this.text = text;
      }
    }

    Object.defineProperty(window, "SpeechSynthesisUtterance", {
      configurable: true,
      value: MockUtterance
    });
    Object.defineProperty(window, "speechSynthesis", {
      configurable: true,
      value: {
        cancel: () => window.__flashKanjiTtsCalls?.push({ type: "cancel" }),
        speak: (utterance: SpeechSynthesisUtterance) => {
          if (window.__flashKanjiTtsShouldThrow)
            throw new Error("System TTS unavailable");
          window.__flashKanjiTtsCalls?.push({
            type: "speak",
            text: utterance.text,
            lang: utterance.lang,
            rate: utterance.rate
          });
        },
        getVoices: () => [{
          default: true,
          lang: "ja-JP",
          localService: true,
          name: "Mock Japanese",
          voiceURI: "mock-ja"
        }]
      }
    });
    class MockAudio {
      src: string;
      preload = "";
      currentTime = 0;
      onended: (() => void) | null = null;
      onerror: (() => void) | null = null;

      constructor(src: string) {
        this.src = src;
        window.__flashKanjiAudioCalls?.push({ type: "new", src });
      }

      play() {
        window.__flashKanjiAudioCalls?.push({ type: "play", src: this.src });
        return Promise.resolve();
      }

      pause() {
        window.__flashKanjiAudioCalls?.push({ type: "pause", src: this.src });
      }
    }
    Object.defineProperty(window, "Audio", {
      configurable: true,
      value: MockAudio
    });
  });
});

test("kanji reading button sends hiragana to system TTS", async ({ page }) => {
  await page.goto("./#textbooks/N5");
  await expect(page.locator("#app .textbooks-page")).toBeVisible();
  await page.locator('#app [data-action="n5-open-lesson"]').first().click();
  await expect(page.locator("#app .n5-lesson-page")).toBeVisible();
  const button = page.locator('#app .lesson-study-readings [data-action="play-kanji-audio"][data-tts-kind]').first();
  await expect(button).toBeVisible();
  await button.click();

  await expect.poll(async () => page.evaluate(() => Boolean(window.__flashKanjiTtsCalls?.some((call) => call.type === "speak")))).toBe(true);
  const call = await page.evaluate(() => window.__flashKanjiTtsCalls?.find((item) => item.type === "speak") || null);
  expect(call?.lang).toBe("ja-JP");
  expect(call?.rate).toBe(0.92);
  expect(call?.text).toMatch(/[\u3040-\u309f]/u);
});

test("generic kanji audio button prefers system TTS over prepared files", async ({ page }) => {
  await page.goto("./#kanji/1");
  await expect(page.locator("#app .kanji-page")).toBeVisible();
  const button = page.locator('#app .audio-panel > .actions > button[data-action="play-kanji-audio"]:not(.reading-tts-choice)').first();
  await expect(button).toBeVisible();
  await button.click();

  await expect.poll(async () => page.evaluate(() => Boolean(window.__flashKanjiTtsCalls?.some((call) => call.type === "speak")))).toBe(true);
  const kanjiAudioPlayed = await page.evaluate(() => Boolean(window.__flashKanjiAudioCalls?.some((call) => call.type === "play" && (call.src || "").includes("audio/kanji/"))));
  expect(kanjiAudioPlayed).toBe(false);
});

test("prepared kanji file is fallback when system TTS fails", async ({ page }) => {
  await page.addInitScript(() => {
    window.__flashKanjiTtsShouldThrow = true;
  });

  await page.goto("./#kanji/1");
  await expect(page.locator("#app .kanji-page")).toBeVisible();
  const button = page.locator('#app .audio-panel > .actions > button[data-action="play-kanji-audio"]:not(.reading-tts-choice)').first();
  await expect(button).toBeVisible();
  await button.click();

  await expect.poll(async () => page.evaluate(() => Boolean(window.__flashKanjiAudioCalls?.some((call) => call.type === "play" && (call.src || "").includes("audio/kanji/"))))).toBe(true);
});
