export const FLASH_KANJI_HAS_VISITED_KEY = "flashKanji.hasVisited";
export const CHANGELOG_LAST_SEEN_VERSION_KEY = "flashKanji.changelog.lastSeenVersion";

export interface ChangelogEntry {
  version: string;
  date: string;
  title: Record<string, string>;
  items: Record<string, string[]>;
}

export interface ChangelogPayload {
  currentVersion: string;
  entries: ChangelogEntry[];
}

export interface ChangelogDecision {
  currentVersion: string;
  shouldShow: boolean;
  shouldMarkHandled: boolean;
  entry: ChangelogEntry | null;
}

export interface SafeChangelogStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

const sessionHandledVersions = new Set<string>();

export function normalizeChangelogPayload(payload: unknown): ChangelogPayload | null {
  if (!payload || typeof payload !== "object") return null;
  const raw = payload as Record<string, unknown>;
  const currentVersion = String(raw.currentVersion || "").trim();
  if (!currentVersion) return null;
  const entries = Array.isArray(raw.entries)
    ? raw.entries.map(normalizeChangelogEntry).filter((entry): entry is ChangelogEntry => Boolean(entry))
    : [];
  if (!entries.length) return null;
  return { currentVersion, entries };
}

export function decideChangelogVisibility(
  changelog: ChangelogPayload | null,
  progress: unknown,
  storage: SafeChangelogStorage | null | undefined,
  options: { hadPriorVisit?: boolean; useProgressSignals?: boolean } = {}
): ChangelogDecision {
  const currentVersion = changelog?.currentVersion || "";
  const entry = changelog?.entries.find((item) => item.version === currentVersion) || changelog?.entries[0] || null;
  if (!changelog || !currentVersion || !entry || sessionHandledVersions.has(currentVersion)) {
    return { currentVersion, shouldShow: false, shouldMarkHandled: false, entry: null };
  }

  const lastSeenVersion = safeStorageGet(storage, CHANGELOG_LAST_SEEN_VERSION_KEY);
  if (lastSeenVersion === currentVersion) {
    return { currentVersion, shouldShow: false, shouldMarkHandled: false, entry: null };
  }

  const existingUser = Boolean(
    options.hadPriorVisit ||
    safeStorageGet(storage, FLASH_KANJI_HAS_VISITED_KEY) === "true" ||
    (options.useProgressSignals !== false && hasProgressSignals(progress))
  );

  if (!existingUser) {
    return { currentVersion, shouldShow: false, shouldMarkHandled: true, entry: null };
  }

  return { currentVersion, shouldShow: true, shouldMarkHandled: false, entry };
}

export function markChangelogHandled(version: string, storage: SafeChangelogStorage | null | undefined): void {
  const normalized = String(version || "").trim();
  if (!normalized) return;
  sessionHandledVersions.add(normalized);
  safeStorageSet(storage, FLASH_KANJI_HAS_VISITED_KEY, "true");
  safeStorageSet(storage, CHANGELOG_LAST_SEEN_VERSION_KEY, normalized);
}

export function resetChangelogSessionForTests(): void {
  sessionHandledVersions.clear();
}

export function hasProgressSignals(progress: unknown): boolean {
  if (!progress || typeof progress !== "object") return false;
  const raw = progress as Record<string, unknown>;
  return Boolean(
    numberValue(raw.appOpens) > 0 ||
    objectSize(raw.lessonCompletions) > 0 ||
    objectSize(raw.cards) > 0 ||
    objectSize(raw.seenKanji) > 0 ||
    objectSize(raw.daily) > 0 ||
    objectSize(raw.favorites) > 0 ||
    arraySize(raw.transactions) > 0 ||
    numberValue(raw.totalMoonFragmentsEarned) > 0 ||
    numberValue((raw.secrets as Record<string, unknown> | undefined)?.evaClicks) > 0 ||
    Boolean((raw.secrets as Record<string, unknown> | undefined)?.nightVisit) ||
    numberValue((raw.visits as Record<string, unknown> | undefined)?.streak) > 0 ||
    numberValue((raw.visits as Record<string, unknown> | undefined)?.bestStreak) > 0
  );
}

function normalizeChangelogEntry(value: unknown): ChangelogEntry | null {
  if (!value || typeof value !== "object") return null;
  const raw = value as Record<string, unknown>;
  const version = String(raw.version || "").trim();
  if (!version) return null;
  return {
    version,
    date: String(raw.date || "").trim(),
    title: normalizeLocalizedText(raw.title),
    items: normalizeLocalizedList(raw.items)
  };
}

function normalizeLocalizedText(value: unknown): Record<string, string> {
  const raw = value && typeof value === "object" ? value as Record<string, unknown> : {};
  return {
    ru: String(raw.ru || raw.en || "").trim(),
    en: String(raw.en || raw.ru || "").trim()
  };
}

function normalizeLocalizedList(value: unknown): Record<string, string[]> {
  const raw = value && typeof value === "object" ? value as Record<string, unknown> : {};
  const ru = Array.isArray(raw.ru) ? raw.ru.map((item) => String(item || "").trim()).filter(Boolean) : [];
  const en = Array.isArray(raw.en) ? raw.en.map((item) => String(item || "").trim()).filter(Boolean) : [];
  return {
    ru: ru.length ? ru : en,
    en: en.length ? en : ru
  };
}

function safeStorageGet(storage: SafeChangelogStorage | null | undefined, key: string): string {
  try {
    return storage?.getItem(key) || "";
  } catch {
    return "";
  }
}

function safeStorageSet(storage: SafeChangelogStorage | null | undefined, key: string, value: string): void {
  try {
    storage?.setItem(key, value);
  } catch {
    // LocalStorage can be unavailable in private modes / hardened WebViews.
    // Session memory above still prevents modal loops while the app is open.
  }
}

function objectSize(value: unknown): number {
  return value && typeof value === "object" && !Array.isArray(value) ? Object.keys(value).length : 0;
}

function arraySize(value: unknown): number {
  return Array.isArray(value) ? value.length : 0;
}

function numberValue(value: unknown): number {
  const next = Number(value || 0);
  return Number.isFinite(next) ? next : 0;
}
