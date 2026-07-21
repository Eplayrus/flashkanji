import { describe, expect, it, vi } from "vitest";
import {
  buildKanjiSpeechItems,
  pickKanjiSpeechItem,
  speakJapaneseReading,
  splitKanjiReadingText
} from "../../src/services/kanjiTts";

describe("kanji TTS helpers", () => {
  it("splits readings and normalizes katakana to hiragana", () => {
    expect(splitKanjiReadingText("ニチ / ジツ, ひ.る")).toEqual(["にち", "じつ", "ひる"]);
  });

  it("builds unique onyomi and kunyomi speech items before fallback kana", () => {
    const items = buildKanjiSpeechItems({
      kanji: "日",
      onyomi: "ニチ / ジツ",
      kunyomi: "ひ / か",
      hiragana: "ひ"
    });
    expect(items.map((item) => `${item.kind}:${item.kana}`)).toEqual([
      "onyomi:にち",
      "onyomi:じつ",
      "kunyomi:ひ",
      "kunyomi:か"
    ]);
  });

  it("cycles through all readings or one reading kind", () => {
    const items = buildKanjiSpeechItems({ onyomi: "にち / じつ", kunyomi: "ひ / か" });
    expect(pickKanjiSpeechItem(items, -1, "cycle").item?.kana).toBe("にち");
    expect(pickKanjiSpeechItem(items, 0, "cycle").item?.kana).toBe("じつ");
    expect(pickKanjiSpeechItem(items, -1, "kunyomi").item?.kana).toBe("ひ");
    expect(pickKanjiSpeechItem(items, 0, "kunyomi").item?.kana).toBe("か");
  });

  it("speaks Japanese text through system speech synthesis", () => {
    const speak = vi.fn();
    const cancel = vi.fn();
    const synth = {
      cancel,
      speak,
      getVoices: () => [{ lang: "ja-JP", name: "Japanese" } as SpeechSynthesisVoice]
    } as unknown as SpeechSynthesis;
    class Utterance {
      text: string;
      lang = "";
      rate = 1;
      voice: SpeechSynthesisVoice | null = null;

      constructor(text: string) {
        this.text = text;
      }
    }
    expect(speakJapaneseReading("にち", { synth, Utterance: Utterance as typeof SpeechSynthesisUtterance })).toBe(true);
    expect(cancel).toHaveBeenCalledOnce();
    expect(speak).toHaveBeenCalledOnce();
    expect(speak.mock.calls[0][0]).toMatchObject({ text: "にち", lang: "ja-JP", rate: 0.92 });
  });

  it("reports speech synthesis failures so callers can use audio fallback", () => {
    const onError = vi.fn();
    const synth = {
      cancel: vi.fn(),
      speak: vi.fn(() => {
        throw new Error("blocked");
      }),
      getVoices: () => []
    } as unknown as SpeechSynthesis;
    class Utterance {
      text: string;
      lang = "";
      rate = 1;
      voice: SpeechSynthesisVoice | null = null;
      onend: (() => void) | null = null;
      onerror: ((error: unknown) => void) | null = null;

      constructor(text: string) {
        this.text = text;
      }
    }
    expect(speakJapaneseReading("にち", { synth, Utterance: Utterance as unknown as typeof SpeechSynthesisUtterance, onError })).toBe(false);
    expect(onError).toHaveBeenCalledOnce();
  });
});
