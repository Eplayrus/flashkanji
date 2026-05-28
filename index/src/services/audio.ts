import type { KanjiAudioSources } from "../types";

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
