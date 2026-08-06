import type { RouteMatch } from "../router";

export const YANDEX_METRIKA_COUNTER_ID = 109492033;

export const METRIKA_GOALS = [
  "learning_start",
  "lesson_open",
  "lesson_complete",
  "review_open",
  "review_session_complete",
  "kanji_open",
  "writing_complete",
  "final_test_start",
  "final_test_complete",
  "final_test_pass",
  "progress_export",
  "apk_download",
  "pwa_install_click",
  "pwa_installed",
  "share_opened",
  "share_completed",
  "share_link_copied"
] as const;

export type MetrikaGoal = (typeof METRIKA_GOALS)[number];

export interface MetrikaAppState {
  route?: unknown;
  activeTextbookLevel?: unknown;
  activeTextbookSubroute?: unknown;
  activeLearnView?: unknown;
  activeLearnNodeId?: unknown;
  activeLearnLegacyLessonId?: unknown;
  activeJlptLesson?: unknown;
  kanjiPageId?: unknown;
  progress?: {
    settings?: {
      language?: unknown;
    };
  };
  cards?: Array<Record<string, unknown>>;
}

export interface MetrikaGoalParams {
  [key: string]: unknown;
  route?: unknown;
  level?: unknown;
  lessonId?: unknown;
  cardId?: unknown;
  source?: unknown;
}

export interface TrackMetrikaGoalOptions {
  dedupeKey?: string;
}

export interface TrackMetrikaPageViewResult {
  sent: boolean;
  virtualPath: string;
  title: string;
  referer?: string;
  reason?: "duplicate" | "no-window" | "missing-ym" | "error";
}

type MetrikaFunction = (counterId: number, method: "hit" | "reachGoal", target: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    ym?: MetrikaFunction;
    __FLASH_KANJI_METRIKA_INITIAL_PATH?: string;
  }
}

const SIMPLE_ROUTE_PATHS: Record<string, string> = {
  home: "/app/home",
  review: "/app/review",
  dictionary: "/app/dictionary",
  download: "/app/download",
  about: "/app/about",
  writing: "/app/writing",
  stats: "/app/stats",
  achievements: "/app/achievements",
  "eva-room": "/app/eva-room"
};

const SIMPLE_TITLES = {
  ru: {
    home: "Flash Kanji — Главная",
    learn: "Flash Kanji — Маршрут обучения",
    review: "Flash Kanji — Повторение",
    dictionary: "Flash Kanji — Словарь кандзи",
    download: "Flash Kanji — Скачать приложение",
    about: "Flash Kanji — О проекте",
    writing: "Flash Kanji — Практика письма",
    stats: "Flash Kanji — Статистика",
    achievements: "Flash Kanji — Достижения",
    "eva-room": "Flash Kanji — Eva Room",
    "not-found": "Flash Kanji — Страница не найдена"
  },
  en: {
    home: "Flash Kanji — Home",
    learn: "Flash Kanji — Learning path",
    review: "Flash Kanji — Review",
    dictionary: "Flash Kanji — Kanji dictionary",
    download: "Flash Kanji — Download app",
    about: "Flash Kanji — About",
    writing: "Flash Kanji — Writing practice",
    stats: "Flash Kanji — Stats",
    achievements: "Flash Kanji — Achievements",
    "eva-room": "Flash Kanji — Eva Room",
    "not-found": "Flash Kanji — Not Found"
  }
} as const;

const SAFE_DYNAMIC_SEGMENT_RE = /^[\p{Letter}\p{Number}_-]{1,96}$/u;
const SAFE_GOAL_RE = /^[a-z][a-z0-9_]{1,64}$/;
const SAFE_SOURCE_RE = /^[a-z][a-z0-9_-]{0,48}$/i;
const JLPT_LEVEL_RE = /^N[1-5]$/i;
const sentGoalDedupeKeys = new Set<string>();
let lastVirtualPath = "";

export function buildMetrikaVirtualPath(routeMatch: RouteMatch | null | undefined, appState: MetrikaAppState = {}): string {
  if (!routeMatch || routeMatch.status === "not-found") return "/app/not-found";

  const params = routeMatch.params || {};
  const route = String(routeMatch.route || appState.route || "home");

  if (route === "learn") {
    const view = segment(params.view || appState.activeLearnView || "map").toLowerCase();
    const nodeId = segment(params.targetId || appState.activeLearnNodeId || appState.activeLearnLegacyLessonId);
    if (view === "lesson" && nodeId) return `/app/learn/lesson/${nodeId}`;
    if (view === "legacy" && nodeId) return `/app/learn/legacy/${nodeId}`;
    return "/app/learn";
  }

  if (route === "textbooks") {
    const level = levelSegment(params.level || appState.activeTextbookLevel);
    const lessonId = segment(params.subroute || appState.activeTextbookSubroute);
    if (!level) return "/app/textbooks";
    return lessonId ? `/app/textbooks/${level}/${lessonId}` : `/app/textbooks/${level}`;
  }

  if (route === "kanji") {
    const cardId = segment(params.cardId || appState.kanjiPageId || params.slug);
    return cardId ? `/app/kanji/${cardId}` : "/app/kanji";
  }

  if (route === "jlpt-lesson") {
    const level = levelSegment(params.level || appState.activeJlptLesson);
    return level ? `/app/jlpt-lesson/${level}` : "/app/jlpt-lesson";
  }

  return SIMPLE_ROUTE_PATHS[route] || "/app/not-found";
}

export function buildMetrikaPageTitle(routeMatch: RouteMatch | null | undefined, appState: MetrikaAppState = {}): string {
  const language = languageCode(appState);
  const titleSet = SIMPLE_TITLES[language];
  if (!routeMatch || routeMatch.status === "not-found") return titleSet["not-found"];

  const params = routeMatch.params || {};
  const route = String(routeMatch.route || appState.route || "home");

  if (route === "learn") {
    const view = segment(params.view || appState.activeLearnView || "map").toLowerCase();
    const nodeId = segment(params.targetId || appState.activeLearnNodeId || appState.activeLearnLegacyLessonId);
    if (view === "lesson" && nodeId) return language === "ru" ? `Flash Kanji — Урок маршрута ${nodeId}` : `Flash Kanji — Path lesson ${nodeId}`;
    if (view === "legacy" && nodeId) return language === "ru" ? `Flash Kanji — Урок ${nodeId}` : `Flash Kanji — Lesson ${nodeId}`;
    return titleSet.learn;
  }

  if (route === "textbooks") {
    const level = levelSegment(params.level || appState.activeTextbookLevel).toUpperCase();
    const lessonId = segment(params.subroute || appState.activeTextbookSubroute);
    if (!level) return language === "ru" ? "Flash Kanji — Учебники" : "Flash Kanji — Textbooks";
    if (!lessonId) return language === "ru" ? `Flash Kanji — Учебник JLPT ${level}` : `Flash Kanji — JLPT ${level} textbook`;
    if (["final", "final-test"].includes(lessonId)) return language === "ru" ? `Flash Kanji — JLPT ${level} · Финальный тест` : `Flash Kanji — JLPT ${level} · Final test`;
    return language === "ru" ? `Flash Kanji — JLPT ${level} · Урок ${lessonNumberLabel(lessonId)}` : `Flash Kanji — JLPT ${level} · Lesson ${lessonNumberLabel(lessonId)}`;
  }

  if (route === "kanji") {
    const cardId = segment(params.cardId || appState.kanjiPageId || params.slug);
    const symbol = findCardSymbol(appState, cardId) || cardId;
    return language === "ru" ? `Flash Kanji — Кандзи ${symbol}` : `Flash Kanji — Kanji ${symbol}`;
  }

  if (route === "jlpt-lesson") {
    const level = levelSegment(params.level || appState.activeJlptLesson).toUpperCase();
    return level ? language === "ru" ? `Flash Kanji — JLPT ${level}` : `Flash Kanji — JLPT ${level}` : titleSet.learn;
  }

  return titleSet[route as keyof typeof titleSet] || titleSet["not-found"];
}

export function primeMetrikaPageView(routeMatch: RouteMatch | null | undefined, appState: MetrikaAppState = {}): TrackMetrikaPageViewResult {
  const virtualPath = buildMetrikaVirtualPath(routeMatch, appState);
  const title = buildMetrikaPageTitle(routeMatch, appState);
  lastVirtualPath = virtualPath;
  if (typeof window !== "undefined") {
    window.__FLASH_KANJI_METRIKA_INITIAL_PATH = virtualPath;
  }
  debugMetrika("prime", { virtualPath, title });
  return { sent: false, virtualPath, title, reason: "duplicate" };
}

export function trackMetrikaPageView(routeMatch: RouteMatch | null | undefined, appState: MetrikaAppState = {}): TrackMetrikaPageViewResult {
  const virtualPath = buildMetrikaVirtualPath(routeMatch, appState);
  const title = buildMetrikaPageTitle(routeMatch, appState);
  if (virtualPath === lastVirtualPath) {
    debugMetrika("skip-pageview-duplicate", { virtualPath, title, previousVirtualPath: lastVirtualPath });
    return { sent: false, virtualPath, title, reason: "duplicate" };
  }

  const referer = lastVirtualPath || undefined;
  try {
    if (typeof window === "undefined") return { sent: false, virtualPath, title, referer, reason: "no-window" };
    if (typeof window.ym !== "function") {
      debugMetrika("skip-pageview-missing-ym", { virtualPath, title, previousVirtualPath: referer });
      return { sent: false, virtualPath, title, referer, reason: "missing-ym" };
    }
    window.ym(YANDEX_METRIKA_COUNTER_ID, "hit", virtualPath, {
      title,
      ...(referer ? { referer } : {})
    });
    lastVirtualPath = virtualPath;
    debugMetrika("pageview", { virtualPath, title, previousVirtualPath: referer });
    return { sent: true, virtualPath, title, referer };
  } catch (error) {
    debugMetrika("pageview-error", { virtualPath, title, previousVirtualPath: referer, error: error instanceof Error ? error.message : String(error) });
    return { sent: false, virtualPath, title, referer, reason: "error" };
  }
}

export function trackMetrikaGoal(goal: string, params: MetrikaGoalParams = {}, options: TrackMetrikaGoalOptions = {}): boolean {
  const normalizedGoal = sanitizeGoal(goal);
  if (!normalizedGoal) {
    debugMetrika("skip-goal-invalid", { goal });
    return false;
  }

  const dedupeKey = options.dedupeKey ? `${normalizedGoal}:${options.dedupeKey}` : "";
  if (dedupeKey && sentGoalDedupeKeys.has(dedupeKey)) {
    debugMetrika("skip-goal-duplicate", { goal: normalizedGoal, params: sanitizeGoalParams(params), dedupeKey });
    return false;
  }

  try {
    if (typeof window === "undefined") return false;
    if (typeof window.ym !== "function") {
      debugMetrika("skip-goal-missing-ym", { goal: normalizedGoal, params: sanitizeGoalParams(params) });
      return false;
    }
    const safeParams = sanitizeGoalParams(params);
    window.ym(YANDEX_METRIKA_COUNTER_ID, "reachGoal", normalizedGoal, safeParams);
    if (dedupeKey) sentGoalDedupeKeys.add(dedupeKey);
    debugMetrika("goal", { goal: normalizedGoal, params: safeParams });
    return true;
  } catch (error) {
    debugMetrika("goal-error", { goal: normalizedGoal, params: sanitizeGoalParams(params), error: error instanceof Error ? error.message : String(error) });
    return false;
  }
}

export function resetMetrikaTrackingForTests(): void {
  lastVirtualPath = "";
  sentGoalDedupeKeys.clear();
}

function sanitizeGoal(goal: string): string {
  const normalized = String(goal || "").trim().toLowerCase();
  if (!SAFE_GOAL_RE.test(normalized)) return "";
  if ((METRIKA_GOALS as readonly string[]).includes(normalized)) return normalized;
  if (/^social_[a-z0-9_]+_opened$/.test(normalized)) return normalized;
  return "";
}

function sanitizeGoalParams(params: MetrikaGoalParams): Record<string, string> {
  const safe: Record<string, string> = {};
  const route = segment(params.route).toLowerCase();
  const level = levelSegment(params.level).toUpperCase();
  const lessonId = segment(params.lessonId);
  const cardId = segment(params.cardId);
  const source = sourceSegment(params.source);
  if (route) safe.route = route;
  if (level) safe.level = level;
  if (lessonId) safe.lessonId = lessonId;
  if (cardId) safe.cardId = cardId;
  if (source) safe.source = source;
  return safe;
}

function languageCode(appState: MetrikaAppState): "ru" | "en" {
  return String(appState.progress?.settings?.language || "ru").toLowerCase() === "en" ? "en" : "ru";
}

function levelSegment(value: unknown): string {
  const normalized = String(value || "").trim().toUpperCase();
  return JLPT_LEVEL_RE.test(normalized) ? normalized.toLowerCase() : "";
}

function segment(value: unknown): string {
  const normalized = String(value || "").trim();
  return SAFE_DYNAMIC_SEGMENT_RE.test(normalized) ? encodeURIComponent(normalized) : "";
}

function sourceSegment(value: unknown): string {
  const normalized = String(value || "").trim();
  return SAFE_SOURCE_RE.test(normalized) ? normalized.toLowerCase() : "";
}

function lessonNumberLabel(lessonId: string): string {
  const match = lessonId.match(/-(\d+)$/);
  return match?.[1] ? String(Number(match[1])) : lessonId;
}

function findCardSymbol(appState: MetrikaAppState, cardId: string): string {
  if (!cardId || !Array.isArray(appState.cards)) return "";
  const decodedCardId = safeDecode(cardId);
  const card = appState.cards.find((item) => String(item.id || "") === decodedCardId || String(item.slug || "") === decodedCardId);
  return String(card?.kanji || "").trim();
}

function safeDecode(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function debugMetrika(label: string, payload: Record<string, unknown>): void {
  if (!isDebugMetrikaEnabled()) return;
  console.debug(`[Flash Kanji Metrika] ${label}`, payload);
}

function isDebugMetrikaEnabled(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const search = new URLSearchParams(window.location.search || "");
    if (search.get("debugMetrika") === "1") return true;
    const hashQuery = String(window.location.hash || "").split("?", 2)[1] || "";
    return new URLSearchParams(hashQuery).get("debugMetrika") === "1";
  } catch {
    return false;
  }
}
