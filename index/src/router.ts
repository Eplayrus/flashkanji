export const ROUTES = [
  "home",
  "learn",
  "review",
  "dictionary",
  "about",
  "kanji",
  "stats",
  "achievements",
  "eva-room",
  "jlpt-lesson",
  "textbooks"
] as const;

export type Route = (typeof ROUTES)[number];

export interface ParsedRoute {
  route: Route;
  raw: string;
  segments: string[];
}

export function parseHash(hash: string): ParsedRoute {
  let raw = hash.replace(/^#/, "");
  try {
    raw = decodeURIComponent(raw);
  } catch {
    raw = "";
  }
  const segments = raw.split("/").filter(Boolean);
  const requested = segments[0]?.toLowerCase() || "home";
  const route = requested === "jlpt" && /^n[1-5]$/i.test(segments[1] || "")
    ? "textbooks"
    : (ROUTES as readonly string[]).includes(requested) ? (requested as Route) : "home";
  return { route, raw, segments };
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

export function installHashRouter(onRoute: (route: ParsedRoute) => void): () => void {
  const listener = () => onRoute(parseHash(window.location.hash));
  window.addEventListener("hashchange", listener);
  return () => window.removeEventListener("hashchange", listener);
}
