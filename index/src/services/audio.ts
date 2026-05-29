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

export function getKanjiAudioPath(card?: Pick<KanjiCard, "audio" | "audioSrc">): string {
  const explicit = card?.audioSrc || card?.audio || "";
  if (!explicit) return "";
  if (explicit.startsWith("./") || explicit.startsWith("http")) return explicit;
  if (explicit.startsWith("/")) return `.${explicit}`;
  return `./${explicit}`;
}

export function expectedKanjiAudioPath(card: Pick<KanjiCard, "id" | "jlpt" | "lessonId" | "romaji">): string {
  const slug = audioSlug(card.romaji);
  if (!card.id || !card.jlpt || !card.lessonId || !slug) return "";
  return `./audio/kanji/${String(card.jlpt).toLowerCase()}/${card.lessonId}/${card.id}-${slug}.mp3`;
}

export function audioSlug(romaji: string): string {
  return String(romaji || "")
    .split("/")[0]
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
