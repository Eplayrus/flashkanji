import localeRegistry from "../public/locales/registry.json";

export const ROUTES = [
  "home",
  "learn",
  "review",
  "dictionary",
  "download",
  "about",
  "kanji",
  "writing",
  "stats",
  "achievements",
  "eva-room",
  "jlpt-lesson",
  "textbooks"
] as const;

export const NOT_FOUND_ROUTE = "not-found" as const;

export type AppRoute = (typeof ROUTES)[number];
export type Route = AppRoute | typeof NOT_FOUND_ROUTE;
export type SupportedLocale = keyof typeof localeRegistry.locales;

export type RouteNotFoundReason =
  | "unknown-locale"
  | "unknown-route"
  | "invalid-parameter"
  | "entity-not-found";

export type RouteSource = "hash" | "pathname";
export type PublicRouteKind = "app-shell" | "legacy-index" | "download" | "localized-home" | "textbooks" | "textbook-level" | "kanji-hub" | "kanji-page";

export interface ValidRouteMatch {
  status: "valid";
  source: RouteSource;
  route: AppRoute;
  locale: SupportedLocale;
  params: Record<string, string>;
  raw: string;
  segments: string[];
  kind?: PublicRouteKind;
  canonicalPath?: string;
}

export interface NotFoundRouteMatch {
  status: "not-found";
  source: RouteSource;
  route: typeof NOT_FOUND_ROUTE;
  locale: SupportedLocale | null;
  params: Record<string, string>;
  raw: string;
  segments: string[];
  reason: RouteNotFoundReason;
  canonicalPath?: string;
}

export type RouteMatch = ValidRouteMatch | NotFoundRouteMatch;
export type ParsedRoute = RouteMatch;

const DEFAULT_LOCALE = localeRegistry.defaultLocale as SupportedLocale;
const SIMPLE_HASH_ROUTES = new Set<AppRoute>([
  "home",
  "review",
  "dictionary",
  "download",
  "about",
  "writing",
  "stats",
  "achievements",
  "eva-room"
]);
const JLPT_LEVEL_RE = /^n[1-5]$/i;
const ASCII_ROUTE_PARAM_RE = /^[A-Za-z0-9_-]+$/;
const CARD_ROUTE_PARAM_RE = /^[\p{Letter}\p{Number}_-]+$/u;
const PUBLIC_KANJI_SLUG_RE = /^u[0-9a-f]{4,6}(?:-u[0-9a-f]{4,6})*-[a-z0-9]+(?:-[a-z0-9]+)*$/;
const LOCALE_SEGMENT_RE = /^[a-z]{2}(?:-[a-z0-9]{2,8})?$/i;

const LOCALE_BY_URL_SEGMENT = new Map<string, SupportedLocale>(
  Object.entries(localeRegistry.locales).map(([code, config]) => [
    String(config.urlSegment).toLowerCase(),
    code as SupportedLocale
  ])
);

function valid(
  source: RouteSource,
  route: AppRoute,
  raw: string,
  segments: string[],
  params: Record<string, string> = {},
  locale: SupportedLocale = DEFAULT_LOCALE,
  extra: Pick<ValidRouteMatch, "kind" | "canonicalPath"> = {}
): ValidRouteMatch {
  return { status: "valid", source, route, locale, params, raw, segments, ...extra };
}

export function notFound(
  source: RouteSource,
  reason: RouteNotFoundReason,
  raw: string,
  segments: string[] = [],
  locale: SupportedLocale | null = DEFAULT_LOCALE,
  canonicalPath?: string
): NotFoundRouteMatch {
  return {
    status: "not-found",
    source,
    route: NOT_FOUND_ROUTE,
    locale,
    params: {},
    raw,
    segments,
    reason,
    canonicalPath
  };
}

export function isRegisteredRoute(value: string | null | undefined): value is AppRoute {
  return Boolean(value && (ROUTES as readonly string[]).includes(value));
}

export function canonicalJlptLevel(value: string | null | undefined): string {
  const level = String(value || "").trim().toUpperCase();
  return JLPT_LEVEL_RE.test(level) ? level : "";
}

export function isSafeRouteParam(value: string | null | undefined): boolean {
  return Boolean(value && CARD_ROUTE_PARAM_RE.test(String(value)));
}

function decodeRouteSource(value: string): { ok: true; value: string } | { ok: false } {
  try {
    return { ok: true, value: decodeURIComponent(value) };
  } catch {
    return { ok: false };
  }
}

function splitRoute(raw: string): string[] {
  return raw
    .replace(/^\/+|\/+$/g, "")
    .split("/")
    .filter(Boolean);
}

function invalidHash(reason: RouteNotFoundReason, raw: string, segments: string[] = splitRoute(raw)): NotFoundRouteMatch {
  return notFound("hash", reason, raw, segments);
}

function isValidAsciiParam(value: string): boolean {
  return ASCII_ROUTE_PARAM_RE.test(value);
}

function isValidCardParam(value: string): boolean {
  return CARD_ROUTE_PARAM_RE.test(value);
}

export function parseHash(hash: string): ParsedRoute {
  const encoded = String(hash || "").replace(/^#/, "").trim();
  const decoded = decodeRouteSource(encoded);
  if (!decoded.ok) return invalidHash("invalid-parameter", encoded, []);

  const raw = decoded.value.replace(/^\/+|\/+$/g, "");
  const segments = splitRoute(raw);
  const requested = (segments[0] || "home").toLowerCase();

  if (!segments.length) return valid("hash", "home", raw, segments);

  if (requested === "jlpt") {
    if (segments.length < 2 || segments.length > 3) return invalidHash("unknown-route", raw, segments);
    const level = canonicalJlptLevel(segments[1]);
    if (!level) return invalidHash("invalid-parameter", raw, segments);
    const subroute = segments[2] || "";
    if (subroute && !isValidAsciiParam(subroute)) return invalidHash("invalid-parameter", raw, segments);
    return valid("hash", "textbooks", raw, segments, { level, subroute, legacyRoute: "jlpt" });
  }

  if (requested === "textbooks") {
    if (segments.length > 3) return invalidHash("unknown-route", raw, segments);
    if (segments.length === 1) return valid("hash", "textbooks", raw, segments);
    const level = canonicalJlptLevel(segments[1]);
    if (!level) return invalidHash("invalid-parameter", raw, segments);
    const subroute = segments[2] || "";
    if (subroute && !isValidAsciiParam(subroute)) return invalidHash("invalid-parameter", raw, segments);
    return valid("hash", "textbooks", raw, segments, { level, subroute });
  }

  if (requested === "jlpt-lesson") {
    if (segments.length !== 2) return invalidHash("unknown-route", raw, segments);
    const level = canonicalJlptLevel(segments[1]);
    if (!level) return invalidHash("invalid-parameter", raw, segments);
    return valid("hash", "jlpt-lesson", raw, segments, { level });
  }

  if (requested === "kanji") {
    if (segments.length !== 2) return invalidHash("unknown-route", raw, segments);
    const cardId = segments[1];
    if (!isValidCardParam(cardId)) return invalidHash("invalid-parameter", raw, segments);
    return valid("hash", "kanji", raw, segments, { cardId });
  }

  if (requested === "learn") {
    if (segments.length === 1) return valid("hash", "learn", raw, segments, { view: "map" });
    if (segments.length !== 3) return invalidHash("unknown-route", raw, segments);
    const view = segments[1].toLowerCase();
    const targetId = segments[2];
    if (!["lesson", "legacy"].includes(view) || !isValidAsciiParam(targetId)) {
      return invalidHash("invalid-parameter", raw, segments);
    }
    return valid("hash", "learn", raw, segments, { view, targetId });
  }

  if (SIMPLE_HASH_ROUTES.has(requested as AppRoute)) {
    if (segments.length !== 1) return invalidHash("unknown-route", raw, segments);
    return valid("hash", requested as AppRoute, raw, segments);
  }

  if (isRegisteredRoute(requested)) return invalidHash("unknown-route", raw, segments);
  return invalidHash("unknown-route", raw, segments);
}

function stripQueryAndHash(pathname: string): string {
  return String(pathname || "/").split(/[?#]/, 1)[0] || "/";
}

function normalizePathname(pathname: string): { ok: true; path: string; segments: string[] } | { ok: false; raw: string } {
  const raw = stripQueryAndHash(pathname);
  const decoded = decodeRouteSource(raw);
  if (!decoded.ok) return { ok: false, raw };
  const collapsed = decoded.value.replace(/\/{2,}/g, "/");
  const withLeadingSlash = collapsed.startsWith("/") ? collapsed : `/${collapsed}`;
  const path = withLeadingSlash === "" ? "/" : withLeadingSlash;
  return { ok: true, path, segments: splitRoute(path) };
}

function localeForSegment(segment: string): SupportedLocale | null {
  return LOCALE_BY_URL_SEGMENT.get(segment.toLowerCase()) || null;
}

function canonicalLocalizedPath(locale: SupportedLocale, suffix = "/"): string {
  const segment = localeRegistry.locales[locale].urlSegment;
  return `/${segment}${suffix.startsWith("/") ? suffix : `/${suffix}`}`;
}

function withTrailingSlash(pathname: string): string {
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export function matchPathname(pathname: string): RouteMatch {
  const normalized = normalizePathname(pathname);
  if (!normalized.ok) return notFound("pathname", "invalid-parameter", normalized.raw, [], null);

  const { path, segments } = normalized;
  const raw = path;

  if (path === "/" || /^\/index\.html$/i.test(path)) {
    return valid("pathname", "home", raw, segments, {}, DEFAULT_LOCALE, { kind: "app-shell", canonicalPath: "/" });
  }

  if (/^\/index(?:\/dist)?(?:\/index\.html)?\/?$/i.test(path)) {
    return valid("pathname", "home", raw, segments, {}, DEFAULT_LOCALE, { kind: "legacy-index", canonicalPath: "/" });
  }

  if (/^\/download\/?$/i.test(path)) {
    return valid("pathname", "download", raw, segments, {}, DEFAULT_LOCALE, { kind: "download", canonicalPath: "/download/" });
  }

  if (!segments.length) {
    return valid("pathname", "home", raw, segments, {}, DEFAULT_LOCALE, { kind: "app-shell", canonicalPath: "/" });
  }

  const locale = localeForSegment(segments[0]);
  if (!locale) {
    const reason = LOCALE_SEGMENT_RE.test(segments[0]) ? "unknown-locale" : "unknown-route";
    return notFound("pathname", reason, raw, segments, null);
  }

  if (segments.length === 1) {
    return valid("pathname", "home", raw, segments, {}, locale, {
      kind: "localized-home",
      canonicalPath: canonicalLocalizedPath(locale, "/")
    });
  }

  const section = segments[1].toLowerCase();
  if (section === "download" && segments.length === 2) {
    return valid("pathname", "download", raw, segments, {}, locale, {
      kind: "download",
      canonicalPath: canonicalLocalizedPath(locale, "/download/")
    });
  }

  if (section === "textbooks") {
    if (segments.length === 2) {
      return valid("pathname", "textbooks", raw, segments, {}, locale, {
        kind: "textbooks",
        canonicalPath: canonicalLocalizedPath(locale, "/textbooks/")
      });
    }
    if (segments.length === 3) {
      const level = segments[2].toLowerCase();
      if (!JLPT_LEVEL_RE.test(level)) {
        return notFound("pathname", "invalid-parameter", raw, segments, locale);
      }
      return valid("pathname", "textbooks", raw, segments, { level: level.toUpperCase() }, locale, {
        kind: "textbook-level",
        canonicalPath: canonicalLocalizedPath(locale, `/textbooks/${level}/`)
      });
    }
    return notFound("pathname", "unknown-route", raw, segments, locale);
  }

  if (section === "kanji") {
    if (segments.length === 2) {
      return valid("pathname", "dictionary", raw, segments, {}, locale, {
        kind: "kanji-hub",
        canonicalPath: canonicalLocalizedPath(locale, "/kanji/")
      });
    }
    if (segments.length === 3) {
      const slug = segments[2].toLowerCase();
      if (!PUBLIC_KANJI_SLUG_RE.test(slug)) {
        return notFound("pathname", "invalid-parameter", raw, segments, locale);
      }
      return valid("pathname", "kanji", raw, segments, { slug }, locale, {
        kind: "kanji-page",
        canonicalPath: canonicalLocalizedPath(locale, `/kanji/${slug}/`)
      });
    }
    return notFound("pathname", "unknown-route", raw, segments, locale);
  }

  return notFound("pathname", "unknown-route", raw, segments, locale);
}

export function isAppShellPathname(pathname: string): boolean {
  const match = matchPathname(pathname);
  return match.status === "valid" && (match.kind === "app-shell" || match.kind === "legacy-index");
}

export function normalizeCanonicalPath(pathname: string): string {
  const match = matchPathname(pathname);
  return match.status === "valid" && match.canonicalPath ? match.canonicalPath : withTrailingSlash(stripQueryAndHash(pathname));
}

export function installHashRouter(onRoute: (route: ParsedRoute) => void): () => void {
  const listener = () => onRoute(parseHash(window.location.hash));
  window.addEventListener("hashchange", listener);
  return () => window.removeEventListener("hashchange", listener);
}

export interface RenderContext {
  route: Route;
  token: number;
  signal: AbortSignal;
  isCurrent(): boolean;
}

export function createRenderCoordinator(): { begin(route: Route): RenderContext; abort(): void } {
  let token = 0;
  let controller: AbortController | null = null;
  return {
    begin(route) {
      controller?.abort();
      controller = new AbortController();
      const currentToken = ++token;
      const currentController = controller;
      return {
        route,
        token: currentToken,
        signal: currentController.signal,
        isCurrent: () => token === currentToken && !currentController.signal.aborted
      };
    },
    abort() {
      controller?.abort();
    }
  };
}
