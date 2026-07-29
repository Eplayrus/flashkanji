import { describe, expect, it } from "vitest";
import {
  applyDocumentLocale,
  directionForLocale,
  fallbackChain,
  formatDate,
  formatNumber,
  interpolate,
  isLocaleCode,
  loadLocaleNamespace,
  localeFromUrlSegment,
  localized,
  migrateStoredLanguage,
  normalizeLocale,
  pluralCategory,
  pluralize,
  pseudoLocalize,
  urlSegmentForLocale
} from "../../src/services/i18n";

describe("locale registry", () => {
  it("normalizes locale codes and URL segments without manual unions", () => {
    expect(isLocaleCode("pt-BR")).toBe(true);
    expect(normalizeLocale("pt-br")).toBe("pt-BR");
    expect(localeFromUrlSegment("zh-cn")).toBe("zh-Hans");
    expect(urlSegmentForLocale("zh-Hant")).toBe("zh-tw");
  });

  it("keeps Spanish as pilot and Arabic as RTL-ready", () => {
    expect(fallbackChain("es")).toEqual(["es", "en", "ru"]);
    expect(directionForLocale("ar")).toBe("rtl");
  });

  it("applies html lang and direction for browser documents", () => {
    const target = { documentElement: { lang: "", dir: "" } } as Document;
    applyDocumentLocale("ar", target);
    expect(target.documentElement.lang).toBe("ar");
    expect(target.documentElement.dir).toBe("rtl");
  });
});

describe("localized messages", () => {
  it("falls back through the configured chain", () => {
    expect(localized({ en: "Review" }, "es")).toBe("Review");
    expect(localized({ ru: "Повтор" }, "es")).toBe("Повтор");
  });

  it("interpolates parameters", () => {
    expect(interpolate("Выполнено {done} из {total}", { done: 3, total: 10 })).toBe("Выполнено 3 из 10");
  });

  it("pluralizes critical target languages with Intl rules", () => {
    expect(pluralCategory("ru", 1)).toBe("one");
    expect(pluralCategory("ru", 2)).toBe("few");
    expect(pluralCategory("ru", 5)).toBe("many");
    expect(pluralCategory("en", 2)).toBe("other");
    expect(pluralCategory("pl", 2)).toBe("few");
    expect(pluralCategory("uk", 5)).toBe("many");
    expect(pluralCategory("ar", 0)).toBe("zero");
    expect(pluralCategory("fr", 1)).toBe("one");
    expect(pluralCategory("zh-Hans", 99)).toBe("other");
    expect(pluralize("en", 2, { one: "{count} lesson", other: "{count} lessons" })).toBe("2 lessons");
  });

  it("formats numbers and dates by locale", () => {
    expect(formatNumber("fr", 1234.5)).toContain("1");
    expect(formatDate("en", "2026-07-29T00:00:00Z", { year: "numeric" })).toBe("2026");
  });

  it("pseudo-localizes without entering SEO publication", () => {
    expect(pseudoLocalize("Continue lesson")).toMatch(/^\[!!/);
    expect(localized({ en: "Continue lesson" }, "en-XA")).toContain("Çōñţīñūē");
  });
});

describe("namespace loading and persistence", () => {
  it("loads namespaces dynamically and merges fallbacks", async () => {
    const payloads: Record<string, Record<string, string>> = {
      "ru/common": { openApp: "Открыть приложение", onlyRu: "Есть" },
      "en/common": { openApp: "Open app" },
      "es/common": { download: "Descargar" }
    };
    const namespace = await loadLocaleNamespace("es", "common", async (locale, name) => {
      const payload = payloads[`${locale}/${name}`];
      if (!payload) throw new Error("missing");
      return payload;
    });
    expect(namespace.openApp).toBe("Open app");
    expect(namespace.download).toBe("Descargar");
    expect(namespace.onlyRu).toBe("Есть");
  });

  it("migrates the legacy RU/EN storage key", () => {
    const data: Record<string, string> = { "flashKanji.language": "en" };
    const storage = {
      getItem: (key: string) => data[key] ?? null,
      setItem: (key: string, value: string) => {
        data[key] = value;
      }
    };
    expect(migrateStoredLanguage(storage)).toBe("en");
    expect(data["flashKanji.locale"]).toBe("en");
  });
});
