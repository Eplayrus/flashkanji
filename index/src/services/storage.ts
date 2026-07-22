import { migrateCardProgress, type CardProgress } from "./srs";

export const STORAGE_KEY = "flashKanji.progress.v2";
export const LEGACY_STORAGE_KEY = "flashKanji.progress.v1";

export function readStoredProgress(storage: Pick<Storage, "getItem"> = localStorage): Record<string, unknown> | null {
  const raw = storage.getItem(STORAGE_KEY) || storage.getItem(LEGACY_STORAGE_KEY);
  if (!raw) return null;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    const record = parsed as Record<string, unknown>;
    return record.progress && typeof record.progress === "object" ? record.progress as Record<string, unknown> : record;
  } catch (error) {
    console.warn("Flash Kanji ignored damaged LocalStorage progress.", error);
    return null;
  }
}

export function migrateCardMap(value: unknown): Record<string, CardProgress> {
  if (!value || typeof value !== "object") return {};
  return Object.fromEntries(Object.entries(value as Record<string, unknown>).map(([cardId, progress]) => [cardId, migrateCardProgress(progress)]));
}

export function writeStoredProgress(progress: unknown, storage: Pick<Storage, "setItem"> = localStorage): boolean {
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(progress));
    return true;
  } catch (error) {
    console.warn("Flash Kanji could not save LocalStorage progress.", error);
    return false;
  }
}
