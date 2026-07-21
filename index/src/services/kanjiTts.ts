export type KanjiSpeechKind = "onyomi" | "kunyomi" | "hiragana" | "kanji";

export interface KanjiSpeechInput {
  kanji?: unknown;
  onyomi?: unknown;
  kunyomi?: unknown;
  hiragana?: unknown;
}

export interface KanjiSpeechItem {
  kind: KanjiSpeechKind;
  kana: string;
  label: string;
}

export interface PickKanjiSpeechResult {
  item: KanjiSpeechItem | null;
  cursor: number;
}

const READING_SPLIT_RE = /[\/／,、;；\s]+/u;
const KATAKANA_RE = /[\u30a1-\u30f6]/g;
const READING_DECORATION_RE = /[()[\]{}.\-‐-―]/gu;

export function toHiragana(value: unknown): string {
  return String(value || "")
    .normalize("NFKC")
    .replace(KATAKANA_RE, (char) => String.fromCharCode(char.charCodeAt(0) - 0x60));
}

export function splitKanjiReadingText(value: unknown): string[] {
  const source = Array.isArray(value) ? value.join(" / ") : String(value || "");
  return source
    .split(READING_SPLIT_RE)
    .map((part) => toHiragana(part).replace(READING_DECORATION_RE, "").trim())
    .filter(Boolean);
}

export function buildKanjiSpeechItems(input: KanjiSpeechInput | null | undefined): KanjiSpeechItem[] {
  if (!input)
    return [];
  const items = [
    ...readingsForKind("onyomi", "On", input.onyomi),
    ...readingsForKind("kunyomi", "Kun", input.kunyomi)
  ];
  const seenKana = new Set<string>();
  const unique = items.filter((item) => {
    const key = item.kana;
    if (!key || seenKana.has(key))
      return false;
    seenKana.add(key);
    return true;
  });
  if (unique.length)
    return unique;
  const fallback = splitKanjiReadingText(input.hiragana)[0];
  if (fallback)
    return [{ kind: "hiragana", kana: fallback, label: "Kana" }];
  const kanji = String(input.kanji || "").trim();
  return kanji ? [{ kind: "kanji", kana: kanji, label: "Kanji" }] : [];
}

export function pickKanjiSpeechItem(items: KanjiSpeechItem[], cursor = -1, preferredKind = ""): PickKanjiSpeechResult {
  const available = preferredKind && preferredKind !== "cycle"
    ? items.filter((item) => item.kind === preferredKind)
    : items;
  if (!available.length)
    return { item: null, cursor: -1 };
  const nextCursor = (Number(cursor) + 1) % available.length;
  return { item: available[nextCursor], cursor: nextCursor };
}

export function speakJapaneseReading(text: string, options: {
  rate?: number;
  synth?: SpeechSynthesis;
  Utterance?: typeof SpeechSynthesisUtterance;
  onEnd?: () => void;
  onError?: (error: unknown) => void;
} = {}): boolean {
  const trimmed = String(text || "").trim();
  const browserWindow = typeof window !== "undefined" ? window : undefined;
  const synth = options.synth || browserWindow?.speechSynthesis;
  const Utterance = options.Utterance || browserWindow?.SpeechSynthesisUtterance;
  if (!trimmed || !synth || !Utterance)
    return false;
  synth.cancel();
  const utterance = new Utterance(trimmed);
  utterance.lang = "ja-JP";
  utterance.rate = options.rate ?? 0.92;
  utterance.voice = japaneseVoice(synth);
  utterance.onend = () => options.onEnd?.();
  utterance.onerror = (error) => options.onError?.(error);
  try {
    synth.speak(utterance);
    return true;
  } catch (error) {
    options.onError?.(error);
    return false;
  }
}

function readingsForKind(kind: "onyomi" | "kunyomi", label: string, value: unknown): KanjiSpeechItem[] {
  return splitKanjiReadingText(value).map((kana) => ({ kind, kana, label }));
}

function japaneseVoice(synth: SpeechSynthesis): SpeechSynthesisVoice | null {
  const voices = typeof synth.getVoices === "function" ? synth.getVoices() : [];
  return voices.find((voice) => /^ja[-_]?JP$/iu.test(voice.lang))
    || voices.find((voice) => /^ja/iu.test(voice.lang))
    || null;
}
