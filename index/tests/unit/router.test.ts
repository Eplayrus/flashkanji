import { describe, expect, it, vi } from "vitest";
import { NOT_FOUND_ROUTE, createRenderCoordinator, installHashRouter, matchPathname, parseHash } from "../../src/router";

describe("hash router", () => {
  it("uses the hash as the only selected route", () => {
    window.history.replaceState(null, "", "/textbooks/N5/#review");
    expect(parseHash(window.location.hash).route).toBe("review");
  });

  it("maps review and textbooks independently", () => {
    expect(parseHash("#review").route).toBe("review");
    expect(parseHash("#textbooks").route).toBe("textbooks");
  });

  it("routes the full N1 textbook through the textbooks renderer", () => {
    expect(parseHash("#textbooks/N1")).toMatchObject({
      status: "valid",
      route: "textbooks",
      params: { level: "N1", subroute: "" },
      segments: ["textbooks", "N1"]
    });
    expect(parseHash("#jlpt/n1/bulk-n1-01")).toMatchObject({
      status: "valid",
      route: "textbooks",
      params: { level: "N1", subroute: "bulk-n1-01", legacyRoute: "jlpt" },
      segments: ["jlpt", "n1", "bulk-n1-01"]
    });
  });

  it("routes kana courses through the same strict textbooks registry", () => {
    expect(parseHash("#textbooks/hiragana")).toMatchObject({
      status: "valid",
      route: "textbooks",
      params: { course: "hiragana", subroute: "" },
      segments: ["textbooks", "hiragana"]
    });
    expect(parseHash("#textbooks/katakana/lesson-11")).toMatchObject({
      status: "valid",
      route: "textbooks",
      params: { course: "katakana", subroute: "lesson-11" },
      segments: ["textbooks", "katakana", "lesson-11"]
    });
    expect(parseHash("#textbooks/hentaigana")).toMatchObject({
      status: "not-found",
      route: NOT_FOUND_ROUTE,
      reason: "invalid-parameter"
    });
  });

  it("does not silently coerce unknown hashes to Home", () => {
    expect(parseHash("#does-not-exist")).toMatchObject({
      status: "not-found",
      route: NOT_FOUND_ROUTE,
      reason: "unknown-route"
    });
  });

  it("rejects malformed hash parameters before rendering", () => {
    expect(parseHash("#textbooks/N9")).toMatchObject({
      status: "not-found",
      route: NOT_FOUND_ROUTE,
      reason: "invalid-parameter"
    });
    expect(parseHash("#kanji/a/b")).toMatchObject({
      status: "not-found",
      route: NOT_FOUND_ROUTE,
      reason: "unknown-route"
    });
    expect(parseHash("#kanji/%E0%A4%A")).toMatchObject({
      status: "not-found",
      route: NOT_FOUND_ROUTE,
      reason: "invalid-parameter"
    });
  });

  it("strictly matches public pathname routes", () => {
    expect(matchPathname("/")).toMatchObject({
      status: "valid",
      route: "home",
      kind: "app-shell",
      canonicalPath: "/"
    });
    expect(matchPathname("/download/")).toMatchObject({
      status: "valid",
      route: "download",
      kind: "download",
      canonicalPath: "/download/"
    });
    expect(matchPathname("/en/textbooks/n1/")).toMatchObject({
      status: "valid",
      route: "textbooks",
      locale: "en",
      kind: "textbook-level",
      params: { level: "N1" },
      canonicalPath: "/en/textbooks/n1/"
    });
    expect(matchPathname("/ru/textbooks/hiragana/")).toMatchObject({
      status: "valid",
      route: "textbooks",
      locale: "ru",
      kind: "kana-course",
      params: { course: "hiragana" },
      canonicalPath: "/ru/textbooks/hiragana/"
    });
    expect(matchPathname("/en/kanji/u4e0a-ue/")).toMatchObject({
      status: "valid",
      route: "kanji",
      locale: "en",
      kind: "kanji-page",
      params: { slug: "u4e0a-ue" },
      canonicalPath: "/en/kanji/u4e0a-ue/"
    });
  });

  it("rejects bad public pathnames without falling through to the app shell", () => {
    expect(matchPathname("/xx/")).toMatchObject({
      status: "not-found",
      route: NOT_FOUND_ROUTE,
      reason: "unknown-locale"
    });
    expect(matchPathname("/en/kanji/not-a-slug/")).toMatchObject({
      status: "not-found",
      route: NOT_FOUND_ROUTE,
      reason: "invalid-parameter"
    });
    expect(matchPathname("/review")).toMatchObject({
      status: "not-found",
      route: NOT_FOUND_ROUTE,
      reason: "unknown-route"
    });
    expect(matchPathname("/en/kanji/u4e0a-ue/extra/")).toMatchObject({
      status: "not-found",
      route: NOT_FOUND_ROUTE,
      reason: "unknown-route"
    });
  });

  it("aborts the old render during rapid navigation", () => {
    const coordinator = createRenderCoordinator();
    const textbooks = coordinator.begin("textbooks");
    const review = coordinator.begin("review");
    expect(textbooks.signal.aborted).toBe(true);
    expect(textbooks.isCurrent()).toBe(false);
    expect(review.isCurrent()).toBe(true);
  });

  it("installs exactly one removable hashchange listener", () => {
    const callback = vi.fn();
    const remove = installHashRouter(callback);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    remove();
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
