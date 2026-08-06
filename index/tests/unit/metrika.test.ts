import { describe, expect, it, beforeEach, vi } from "vitest";
import { notFound, parseHash } from "../../src/router";
import {
  buildMetrikaPageTitle,
  buildMetrikaVirtualPath,
  primeMetrikaPageView,
  resetMetrikaTrackingForTests,
  trackMetrikaGoal,
  trackMetrikaPageView
} from "../../src/services/metrika";

describe("Yandex Metrika SPA analytics", () => {
  beforeEach(() => {
    resetMetrikaTrackingForTests();
    window.history.replaceState(null, "", "/?debugMetrika=0#home");
    window.ym = vi.fn();
    window.__FLASH_KANJI_METRIKA_INITIAL_PATH = undefined;
  });

  it("maps hash routes to clean virtual paths", () => {
    expect(buildMetrikaVirtualPath(parseHash("#home"))).toBe("/app/home");
    expect(buildMetrikaVirtualPath(parseHash("#textbooks/N5"))).toBe("/app/textbooks/n5");
    expect(buildMetrikaVirtualPath(parseHash("#textbooks/N5/n5-lesson-1"))).toBe("/app/textbooks/n5/n5-lesson-1");
    expect(buildMetrikaVirtualPath(parseHash("#learn/lesson/n5-lesson-1"))).toBe("/app/learn/lesson/n5-lesson-1");
    expect(buildMetrikaVirtualPath(parseHash("#kanji/日"))).toBe("/app/kanji/%E6%97%A5");
    expect(buildMetrikaVirtualPath(notFound("hash", "unknown-route", "wat", ["wat"]))).toBe("/app/not-found");
  });

  it("builds localized titles without user text", () => {
    expect(buildMetrikaPageTitle(parseHash("#textbooks/N5/n5-lesson-1"), { progress: { settings: { language: "ru" } } })).toBe("Flash Kanji — JLPT N5 · Урок 1");
    expect(buildMetrikaPageTitle(parseHash("#download"), { progress: { settings: { language: "en" } } })).toBe("Flash Kanji — Download app");
    expect(buildMetrikaPageTitle(parseHash("#kanji/card-1"), { cards: [{ id: "card-1", kanji: "日" }] })).toBe("Flash Kanji — Кандзи 日");
  });

  it("does not send a duplicate hit for the primed initial route", () => {
    primeMetrikaPageView(parseHash("#home"));
    expect(window.__FLASH_KANJI_METRIKA_INITIAL_PATH).toBe("/app/home");
    const duplicate = trackMetrikaPageView(parseHash("#home"));
    expect(duplicate.sent).toBe(false);
    expect(window.ym).not.toHaveBeenCalled();

    const next = trackMetrikaPageView(parseHash("#textbooks/N5"));
    expect(next.sent).toBe(true);
    expect(window.ym).toHaveBeenCalledWith(109492033, "hit", "/app/textbooks/n5", {
      title: "Flash Kanji — Учебник JLPT N5",
      referer: "/app/home"
    });
  });

  it("sends new hits when route parameters change", () => {
    trackMetrikaPageView(parseHash("#textbooks/N5"));
    trackMetrikaPageView(parseHash("#textbooks/N4"));
    trackMetrikaPageView(parseHash("#textbooks/N4/n4-lesson-1"));
    trackMetrikaPageView(parseHash("#textbooks/N4/n4-lesson-2"));

    const ymMock = vi.mocked(window.ym);
    if (!ymMock) throw new Error("ym mock missing");
    expect(ymMock).toHaveBeenCalledTimes(4);
    expect(ymMock.mock.calls.map((call) => call[2])).toEqual([
      "/app/textbooks/n5",
      "/app/textbooks/n4",
      "/app/textbooks/n4/n4-lesson-1",
      "/app/textbooks/n4/n4-lesson-2"
    ]);
  });

  it("does not throw when window.ym is missing", () => {
    window.ym = undefined;
    expect(() => trackMetrikaPageView(parseHash("#review"))).not.toThrow();
    expect(trackMetrikaPageView(parseHash("#review")).sent).toBe(false);
    expect(() => trackMetrikaGoal("review_open", { route: "review" })).not.toThrow();
  });

  it("sanitizes goal params and deduplicates selected goals", () => {
    expect(trackMetrikaGoal("pwa_installed", {
      route: "home",
      level: "N5",
      lessonId: "lesson-1",
      cardId: "card-1",
      source: "browser",
      email: "user@example.com"
    }, { dedupeKey: "appinstalled" })).toBe(true);
    expect(trackMetrikaGoal("pwa_installed", { route: "home", source: "browser" }, { dedupeKey: "appinstalled" })).toBe(false);

    expect(window.ym).toHaveBeenCalledTimes(1);
    expect(window.ym).toHaveBeenCalledWith(109492033, "reachGoal", "pwa_installed", {
      route: "home",
      level: "N5",
      lessonId: "lesson-1",
      cardId: "card-1",
      source: "browser"
    });
  });
});
