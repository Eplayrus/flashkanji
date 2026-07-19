import type { KanjiAudioSources, KanjiCard } from "../types";

export interface AudioTrack {
  id: keyof KanjiAudioSources;
  label: string;
  src?: string;
}

export function kanjiAudioTracks(audio: KanjiAudioSources = {}): AudioTrack[] {
  return [
    { id: "pronunciation", label: "Kanji", src: audio.pronunciation },
    { id: "eva", label: "Eva", src: audio.eva },
    { id: "leya", label: "Leya", src: audio.leya }
  ];
}

type KanjiAudioLookup = Pick<KanjiCard, "audio" | "audioSrc" | "id" | "jlpt" | "lessonId" | "romaji"> &
  Partial<Pick<KanjiCard, "onyomi_romaji" | "kunyomi_romaji">>;

export function getKanjiAudioPath(card?: Partial<KanjiAudioLookup>): string {
  const explicit = card?.audioSrc || card?.audio || "";
  if (explicit.startsWith("./") || explicit.startsWith("http")) return explicit;
  if (explicit.startsWith("/")) return `.${explicit}`;
  if (explicit) return `./${explicit}`;
  return expectedKanjiAudioPath(card);
}

export function expectedKanjiAudioPath(card: Partial<KanjiAudioLookup>): string {
  const slug = kanjiAudioSlugs(card)[0] || "";
  if (!card.id || !card.jlpt || !card.lessonId || !slug) return "";
  return `./audio/kanji/${String(card.jlpt).toLowerCase()}/${card.lessonId}/${card.id}-${slug}.mp3`;
}

export function kanjiAudioSlugs(card: Partial<Pick<KanjiCard, "romaji" | "onyomi_romaji" | "kunyomi_romaji">>): string[] {
  return [
    ...splitRomaji(card.romaji),
    ...splitRomaji(card.onyomi_romaji),
    ...splitRomaji(card.kunyomi_romaji)
  ]
    .map(audioSlug)
    .filter(Boolean)
    .filter((slug, index, slugs) => slugs.indexOf(slug) === index);
}

function splitRomaji(value?: string): string[] {
  return String(value || "")
    .split("/")
    .map((part) => part.trim())
    .filter(Boolean);
}

export function audioSlug(romaji: string): string {
  return String(romaji || "")
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
