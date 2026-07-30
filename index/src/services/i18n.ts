import localeRegistry from "../../public/locales/registry.json";

export type LocaleDirection = "ltr" | "rtl";
export type PublicationStatus = "published" | "pilot" | "planned" | "internal";

export type LocaleConfig = {
  code: string;
  urlSegment: string;
  hreflang: string;
  nativeName: string;
  englishName: string;
  direction: LocaleDirection;
  intlLocale: string;
  fallbackLocale: LocaleCode | null;
  publicationStatus: PublicationStatus;
  uiStatus: "ready" | "pilot" | "planned" | "pseudo";
  contentStatus: "ready" | "pilot" | "planned" | "source";
  seoStatus: "indexable" | "noindex" | "planned";
  translationCompleteness: number;
  tts: {
    preferredLang: string;
    japaneseVoiceLang: string;
  };
  formatting: {
    numberingSystem: string;
    calendar: string;
  };
  fontStack: string;
};

export const LOCALES = localeRegistry.locales as Record<string, LocaleConfig>;
export type LocaleCode = keyof typeof localeRegistry.locales;
export type Language = LocaleCode;

export type LocalizedText = Partial<Record<LocaleCode, string>>;
export type NamespaceName =
  | "common"
  | "navigation"
  | "home"
  | "textbooks"
  | "lessons"
  | "grammar"
  | "review"
  | "dictionary"
  | "profile"
  | "changelog"
  | "errors"
  | "seo";

const DEFAULT_LOCALE: LocaleCode = localeRegistry.defaultLocale as LocaleCode;
const LOCALE_STORAGE_KEY = "flashKanji.locale";

export function isLocaleCode(value: string | null | undefined): value is LocaleCode {
  return Boolean(value && Object.prototype.hasOwnProperty.call(LOCALES, value));
}

export function normalizeLocale(value: string | null | undefined): LocaleCode {
  if (!value) return DEFAULT_LOCALE;
  if (isLocaleCode(value)) return value;
  const lower = value.toLowerCase();
  const direct = Object.keys(LOCALES).find((code) => code.toLowerCase() === lower);
  if (direct && isLocaleCode(direct)) return direct;
  const byUrl = Object.entries(LOCALES).find(([, config]) => config.urlSegment.toLowerCase() === lower)?.[0];
  if (byUrl && isLocaleCode(byUrl)) return byUrl;
  const base = lower.split("-")[0];
  const byBase = Object.keys(LOCALES).find((code) => code.toLowerCase().split("-")[0] === base);
  return byBase && isLocaleCode(byBase) ? byBase : DEFAULT_LOCALE;
}

export function getLocaleConfig(locale: LocaleCode = DEFAULT_LOCALE): LocaleConfig {
  return LOCALES[locale] || LOCALES[DEFAULT_LOCALE];
}

export function localeFromUrlSegment(segment: string | null | undefined): LocaleCode | null {
  if (!segment) return null;
  const normalized = segment.toLowerCase();
  const entry = Object.entries(LOCALES).find(([, config]) => config.urlSegment.toLowerCase() === normalized);
  return entry && isLocaleCode(entry[0]) ? entry[0] : null;
}

export function urlSegmentForLocale(locale: LocaleCode): string {
  return getLocaleConfig(locale).urlSegment;
}

export function directionForLocale(locale: LocaleCode): LocaleDirection {
  return getLocaleConfig(locale).direction;
}

export function fallbackChain(locale: LocaleCode): LocaleCode[] {
  const chain: LocaleCode[] = [];
  const seen = new Set<LocaleCode>();
  let current: LocaleCode | null = locale;
  while (current && !seen.has(current)) {
    seen.add(current);
    chain.push(current);
    current = getLocaleConfig(current).fallbackLocale;
  }
  if (!seen.has(DEFAULT_LOCALE)) chain.push(DEFAULT_LOCALE);
  return chain;
}

export function localized(value: LocalizedText | string | undefined, language: LocaleCode = DEFAULT_LOCALE): string {
  if (!value) return "";
  if (typeof value === "string") return language === "en-XA" ? pseudoLocalize(value) : value;
  const chain = fallbackChain(language);
  for (const locale of chain) {
    const translated = value[locale];
    if (translated) return language === "en-XA" ? pseudoLocalize(translated) : translated;
  }
  return "";
}

export function interpolate(template: string, params: Record<string, string | number | boolean> = {}): string {
  return template.replace(/\{([A-Za-z0-9_.-]+)\}/g, (match, key: string) => {
    const value = params[key];
    return value === undefined || value === null ? match : String(value);
  });
}

export function pluralCategory(locale: LocaleCode, count: number): Intl.LDMLPluralRule {
  return new Intl.PluralRules(getLocaleConfig(locale).intlLocale).select(count);
}

export function pluralize(
  locale: LocaleCode,
  count: number,
  forms: Partial<Record<Intl.LDMLPluralRule | "other", string>>
): string {
  const category = pluralCategory(locale, count);
  const template = forms[category] || forms.other || "";
  return interpolate(template, { count });
}

export function formatNumber(locale: LocaleCode, value: number, options: Intl.NumberFormatOptions = {}): string {
  return new Intl.NumberFormat(getLocaleConfig(locale).intlLocale, options).format(value);
}

export function formatDate(locale: LocaleCode, value: Date | number | string, options: Intl.DateTimeFormatOptions = {}): string {
  const date = value instanceof Date ? value : new Date(value);
  return new Intl.DateTimeFormat(getLocaleConfig(locale).intlLocale, options).format(date);
}

export function pseudoLocalize(text: string): string {
  const map: Record<string, string> = {
    a: "à", A: "À", b: "ƀ", B: "Ɓ", c: "ç", C: "Ç", d: "ď", D: "Ď",
    e: "ē", E: "Ē", i: "ī", I: "Ī", l: "ļ", L: "Ļ", n: "ñ", N: "Ñ",
    o: "ō", O: "Ō", r: "ř", R: "Ř", s: "š", S: "Š", t: "ţ", T: "Ţ",
    u: "ū", U: "Ū", y: "ý", Y: "Ý"
  };
  const expanded = Array.from(text).map((char) => map[char] || char).join("");
  return `[!! ${expanded} ${expanded.length > 12 ? "~~" : "~"} !!]`;
}

export function applyDocumentLocale(locale: LocaleCode, target: Pick<Document, "documentElement"> = document): void {
  const config = getLocaleConfig(locale);
  target.documentElement.lang = config.hreflang;
  target.documentElement.dir = config.direction;
}

export function readPersistedLocale(storage: Pick<Storage, "getItem"> = localStorage): LocaleCode | null {
  try {
    const raw = storage.getItem(LOCALE_STORAGE_KEY) || storage.getItem("flashKanji.language");
    return raw ? normalizeLocale(raw) : null;
  } catch {
    return null;
  }
}

export function persistLocale(locale: LocaleCode, storage: Pick<Storage, "setItem"> = localStorage): void {
  try {
    storage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // Storage can be blocked in private mode; language selection still works in memory.
  }
}

export function migrateStoredLanguage(storage: Pick<Storage, "getItem" | "setItem"> = localStorage): LocaleCode {
  const locale = readPersistedLocale(storage) || DEFAULT_LOCALE;
  persistLocale(locale, storage);
  return locale;
}

export async function loadLocaleNamespace(
  locale: LocaleCode,
  namespace: NamespaceName,
  loader: (locale: LocaleCode, namespace: NamespaceName) => Promise<Record<string, string>> = defaultNamespaceLoader
): Promise<Record<string, string>> {
  const chain = fallbackChain(locale);
  const merged: Record<string, string> = {};
  for (const fallbackLocale of chain.slice().reverse()) {
    try {
      Object.assign(merged, await loader(fallbackLocale, namespace));
    } catch {
      if (fallbackLocale === locale) {
        merged[`__missing.${namespace}`] = `${namespace} namespace is missing for ${locale}`;
      }
    }
  }
  return locale === "en-XA"
    ? Object.fromEntries(Object.entries(merged).map(([key, value]) => [key, pseudoLocalize(value)]))
    : merged;
}

async function defaultNamespaceLoader(locale: LocaleCode, namespace: NamespaceName): Promise<Record<string, string>> {
  const segment = urlSegmentForLocale(locale);
  const response = await fetch(`locales/${segment}/${namespace}.json`);
  if (!response.ok) throw new Error(`Cannot load locale namespace ${locale}/${namespace}`);
  return response.json() as Promise<Record<string, string>>;
}
