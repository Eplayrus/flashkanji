import { existsSync } from "node:fs";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const SITE_URL = "https://flashkanji.space";
export const TOOL_DIR = path.dirname(fileURLToPath(import.meta.url));
export const ROOT_DIR = path.resolve(TOOL_DIR, "..");
export const PUBLIC_DIR = path.join(ROOT_DIR, "public");
export const DIST_DIR = path.join(ROOT_DIR, "dist");
export const JLPT_LEVELS = ["n5", "n4", "n3", "n2", "n1"];

export async function readJson(relativePath, fallback = null) {
  const file = path.join(ROOT_DIR, relativePath);
  if (!existsSync(file)) {
    if (fallback !== null) return fallback;
    throw new Error(`Missing JSON: ${relativePath}`);
  }
  return JSON.parse(await readFile(file, "utf8"));
}

export async function writeText(file, content) {
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, content, "utf8");
}

export async function safeRemoveInsidePublic(relativePath) {
  const target = path.resolve(PUBLIC_DIR, relativePath);
  if (!target.startsWith(PUBLIC_DIR)) throw new Error(`Refusing to remove outside public: ${target}`);
  await rm(target, { recursive: true, force: true });
}

export function esc(value = "") {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function clean(value = "") {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

export function stripHtml(value = "") {
  return clean(String(value).replace(/<[^>]+>/g, " "));
}

export function slugify(value = "") {
  return clean(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "kanji";
}

const HEPBURN_DIGRAPHS = new Map(Object.entries({
  きゃ: "kya", きゅ: "kyu", きょ: "kyo",
  しゃ: "sha", しゅ: "shu", しょ: "sho",
  ちゃ: "cha", ちゅ: "chu", ちょ: "cho",
  にゃ: "nya", にゅ: "nyu", にょ: "nyo",
  ひゃ: "hya", ひゅ: "hyu", ひょ: "hyo",
  みゃ: "mya", みゅ: "myu", みょ: "myo",
  りゃ: "rya", りゅ: "ryu", りょ: "ryo",
  ぎゃ: "gya", ぎゅ: "gyu", ぎょ: "gyo",
  じゃ: "ja", じゅ: "ju", じょ: "jo",
  びゃ: "bya", びゅ: "byu", びょ: "byo",
  ぴゃ: "pya", ぴゅ: "pyu", ぴょ: "pyo"
}));

const HEPBURN = new Map(Object.entries({
  あ: "a", い: "i", う: "u", え: "e", お: "o",
  か: "ka", き: "ki", く: "ku", け: "ke", こ: "ko",
  さ: "sa", し: "shi", す: "su", せ: "se", そ: "so",
  た: "ta", ち: "chi", つ: "tsu", て: "te", と: "to",
  な: "na", に: "ni", ぬ: "nu", ね: "ne", の: "no",
  は: "ha", ひ: "hi", ふ: "fu", へ: "he", ほ: "ho",
  ま: "ma", み: "mi", む: "mu", め: "me", も: "mo",
  や: "ya", ゆ: "yu", よ: "yo",
  ら: "ra", り: "ri", る: "ru", れ: "re", ろ: "ro",
  わ: "wa", を: "o", ん: "n",
  が: "ga", ぎ: "gi", ぐ: "gu", げ: "ge", ご: "go",
  ざ: "za", じ: "ji", ず: "zu", ぜ: "ze", ぞ: "zo",
  だ: "da", ぢ: "ji", づ: "zu", で: "de", ど: "do",
  ば: "ba", び: "bi", ぶ: "bu", べ: "be", ぼ: "bo",
  ぱ: "pa", ぴ: "pi", ぷ: "pu", ぺ: "pe", ぽ: "po",
  ゔ: "vu", ゃ: "ya", ゅ: "yu", ょ: "yo", ー: ""
}));

export function kanaToRomaji(value = "") {
  const hiragana = String(value).replace(/[\u30a1-\u30f6]/g, (char) =>
    String.fromCharCode(char.charCodeAt(0) - 0x60)
  );
  let output = "";
  for (let index = 0; index < hiragana.length; index += 1) {
    const char = hiragana[index];
    if (char === "っ") {
      const nextPair = hiragana.slice(index + 1, index + 3);
      const nextSingle = hiragana[index + 1] || "";
      const next = HEPBURN_DIGRAPHS.get(nextPair) || HEPBURN.get(nextSingle) || "";
      output += next[0] || "";
      continue;
    }
    const pair = hiragana.slice(index, index + 2);
    if (HEPBURN_DIGRAPHS.has(pair)) {
      output += HEPBURN_DIGRAPHS.get(pair);
      index += 1;
      continue;
    }
    output += HEPBURN.get(char) || "";
  }
  return slugify(output);
}

export function codepointSlug(literal = "") {
  return Array.from(String(literal)).map((char) => `u${char.codePointAt(0).toString(16).padStart(4, "0")}`).join("-");
}

export function primaryRomaji(card = {}) {
  const onyomi = Array.isArray(card.readings?.onyomi) ? card.readings.onyomi[0] : card.onyomi;
  const kunyomi = Array.isArray(card.readings?.kunyomi) ? card.readings.kunyomi[0] : card.kunyomi;
  const kana = clean(onyomi || kunyomi || card.hiragana || "").split(/[\/,;|()\s]+/).find(Boolean);
  const fromKana = kanaToRomaji(kana);
  if (fromKana && fromKana !== "kanji") return fromKana;
  const romaji = Array.isArray(card.readings?.romaji) ? card.readings.romaji[0] : card.romaji;
  return slugify(String(romaji || "kanji").split(/[\/,;|()\s]+/).find((part) => /[a-z]/i.test(part)) || "kanji");
}

export function stableKanjiSlug(card = {}) {
  return `${codepointSlug(card.kanji || card.char || "") || "kanji"}-${primaryRomaji(card)}`;
}

export function canonicalUrl(pathname = "/") {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${SITE_URL}${normalized}`;
}

export async function loadRegistry() {
  return readJson("public/locales/registry.json");
}

export function localeEntries(registry) {
  return Object.entries(registry.locales);
}

export function localeByCode(registry, code) {
  return registry.locales[code];
}

export function isSeoIndexableLocale(registry, code) {
  return localeByCode(registry, code)?.seoStatus === "indexable";
}

export function localePath(registry, code, suffix = "/") {
  const locale = localeByCode(registry, code);
  return `/${locale.urlSegment}${suffix.startsWith("/") ? suffix : `/${suffix}`}`;
}

export function hreflangLinks(alternates, xDefaultPath = "/") {
  return [
    ...alternates.map((item) => `<link rel="alternate" hreflang="${esc(item.hreflang)}" href="${esc(canonicalUrl(item.path))}" />`),
    `<link rel="alternate" hreflang="x-default" href="${esc(canonicalUrl(xDefaultPath))}" />`
  ].join("\n  ");
}
