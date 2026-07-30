#!/usr/bin/env node
import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import {
  JLPT_LEVELS,
  PUBLIC_DIR,
  ROOT_DIR,
  SITE_URL,
  canonicalUrl,
  clean,
  readJson,
  stableKanjiSlug,
  stripHtml
} from "./seo-foundation.mjs";

const FORBIDDEN_URL_RE = /\/index\/|\/index\/dist\/|#|\/assets\/|\.json$|service-worker\.js/i;
const OLD_COUNT_RE = /("kanjiCount"\s*:\s*220|"lessonCount"\s*:\s*11|"kanjiCount"\s*:\s*367|"lessonCount"\s*:\s*19|data-source-kanji-count="220"|data-source-lesson-count="11"|data-source-kanji-count="367"|data-source-lesson-count="19")/i;
const MOJIBAKE_RE = /â€™|â€œ|â€|вЂ|гЃ|ж—|ењ/i;

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function extractAll(pattern, text) {
  return [...text.matchAll(pattern)].map((match) => match[1]);
}

function extractOne(pattern, text, label, file) {
  const matches = extractAll(pattern, text);
  assert(matches.length === 1, `${file}: expected exactly one ${label}, got ${matches.length}`);
  return matches[0];
}

function pathFromUrl(url) {
  assert(url.startsWith(SITE_URL), `Sitemap URL is outside site: ${url}`);
  return new URL(url).pathname;
}

function sourceFileForPath(pathname) {
  if (pathname === "/") return path.join(ROOT_DIR, "index.html");
  const normalized = pathname.replace(/^\/+/, "").replace(/\/$/, "/index.html");
  return path.join(PUBLIC_DIR, normalized);
}

async function readHtmlForPath(pathname) {
  const file = sourceFileForPath(pathname);
  assert(existsSync(file), `Missing source HTML for ${pathname}: ${file}`);
  return { file, html: await readFile(file, "utf8") };
}

async function collectSitemapUrls() {
  const sitemap = await readFile(path.join(PUBLIC_DIR, "sitemap.xml"), "utf8");
  assert(/<sitemapindex\b/.test(sitemap), "sitemap.xml must be a sitemap index");
  const sitemapUrls = extractAll(/<loc>(.*?)<\/loc>/g, sitemap);
  const urls = [];
  for (const sitemapUrl of sitemapUrls) {
    assert(!FORBIDDEN_URL_RE.test(sitemapUrl), `Forbidden sitemap file URL: ${sitemapUrl}`);
    const file = sourceFileForPath(pathFromUrl(sitemapUrl));
    assert(existsSync(file), `Missing sitemap file ${file}`);
    const xml = await readFile(file, "utf8");
    assert(/<urlset\b/.test(xml), `${file} must contain urlset`);
    urls.push(...extractAll(/<loc>(.*?)<\/loc>/g, xml));
  }
  return urls;
}

function localeFromPath(pathname) {
  const segment = pathname.split("/").filter(Boolean)[0];
  return ["ru", "en", "es"].includes(segment) ? segment : null;
}

function expectedLang(locale) {
  return locale || "ru";
}

function validateJsonLd(html, file) {
  const blocks = extractAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g, html);
  assert(blocks.length > 0, `${file}: missing JSON-LD`);
  for (const block of blocks) {
    const parsed = JSON.parse(block);
    assert(parsed["@context"] === "https://schema.org", `${file}: JSON-LD context mismatch`);
  }
}

function validateHreflang(pathname, html, file, htmlByPath) {
  const locale = localeFromPath(pathname);
  if (!locale || /<meta name="robots" content="noindex/.test(html)) return;
  const alternates = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)]
    .map((match) => ({ hreflang: match[1], href: match[2], path: new URL(match[2]).pathname }));
  assert(alternates.some((item) => item.hreflang === locale && item.path === pathname), `${file}: missing self hreflang`);
  assert(alternates.some((item) => item.hreflang === "x-default"), `${file}: missing x-default hreflang`);
  for (const alternate of alternates.filter((item) => item.hreflang !== "x-default")) {
    assert(htmlByPath.has(alternate.path), `${file}: hreflang target is not in sitemap ${alternate.path}`);
    const target = htmlByPath.get(alternate.path);
    const reciprocal = new RegExp(`<link rel="alternate" hreflang="${locale}" href="${canonicalUrl(pathname).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`);
    assert(reciprocal.test(target.html), `${file}: hreflang is not reciprocal with ${alternate.path}`);
  }
}

async function validateTextbookCounts() {
  for (const level of JLPT_LEVELS) {
    const meta = await readJson(`public/data/jlpt/${level}/meta.json`);
    for (const locale of ["ru", "en", "es"]) {
      const pathname = `/${locale}/textbooks/${level}/`;
      const { file, html } = await readHtmlForPath(pathname);
      assert(html.includes(`data-source-kanji-count="${Number(meta.kanjiCount || 0)}"`), `${file}: kanjiCount differs from meta.json`);
      assert(html.includes(`data-source-lesson-count="${Number(meta.lessonCount || 0)}"`), `${file}: lessonCount differs from meta.json`);
      if (meta.grammarCount) assert(html.includes(`data-source-grammar-count="${Number(meta.grammarCount)}"`), `${file}: grammarCount differs from meta.json`);
      if (meta.readingCount) assert(html.includes(`data-source-reading-count="${Number(meta.readingCount)}"`), `${file}: readingCount differs from meta.json`);
      if (meta.listeningCount) assert(html.includes(`data-source-listening-count="${Number(meta.listeningCount)}"`), `${file}: listeningCount differs from meta.json`);
    }
  }
}

async function walkHtml(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const result = [];
  for (const entry of entries) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...await walkHtml(file));
    else if (entry.name.endsWith(".html")) result.push(file);
  }
  return result;
}

async function validateNoOldPages() {
  const htmlFiles = [
    path.join(ROOT_DIR, "index.html"),
    ...await walkHtml(PUBLIC_DIR)
  ];
  const rootIndex = path.join(ROOT_DIR, "index.html");
  for (const file of htmlFiles) {
    const html = await readFile(file, "utf8");
    assert(!OLD_COUNT_RE.test(html), `${file}: old N1/N2 SEO count detected`);
    if (file !== rootIndex) {
      assert(!MOJIBAKE_RE.test(html), `${file}: mojibake detected in public HTML`);
    }
  }
}

async function validateKanjiSlugSample() {
  const n1 = await readJson("public/data/jlpt/n1/kanji.json", { items: [] });
  const tou = n1.items.find((item) => item.kanji === "統");
  assert(tou, "N1 sample kanji 統 missing");
  assert(stableKanjiSlug(tou) === "u7d71-tou", `Stable kanji slug for 統 must be u7d71-tou, got ${stableKanjiSlug(tou)}`);
  assert(existsSync(path.join(PUBLIC_DIR, "en", "kanji", "u7d71-tou", "index.html")), "Missing canonical EN 統 page");
}

async function main() {
  const sitemapUrls = await collectSitemapUrls();
  assert(sitemapUrls.length > 0, "Sitemap contains no URLs");
  const htmlByPath = new Map();
  const titlesByLocale = new Map();
  for (const url of sitemapUrls) {
    assert(!FORBIDDEN_URL_RE.test(url), `Forbidden URL in sitemap: ${url}`);
    const pathname = pathFromUrl(url);
    const { file, html } = await readHtmlForPath(pathname);
    htmlByPath.set(pathname, { file, html });
    assert(!/<meta name="robots" content="noindex/.test(html), `${file}: noindex page is present in sitemap`);
    const canonical = extractOne(/<link rel="canonical" href="([^"]+)"/g, html, "canonical", file);
    assert(canonical === canonicalUrl(pathname), `${file}: canonical ${canonical} must be self ${canonicalUrl(pathname)}`);
    const title = clean(extractOne(/<title>([\s\S]*?)<\/title>/g, html, "title", file));
    assert(title.length >= 12, `${file}: title is too short`);
    const description = extractOne(/<meta name="description" content="([^"]+)"/g, html, "description", file);
    assert(description.length >= 50, `${file}: description is too short`);
    const locale = localeFromPath(pathname);
    const lang = extractOne(/<html lang="([^"]+)"/g, html, "html lang", file);
    assert(lang === expectedLang(locale), `${file}: html lang ${lang} does not match URL locale ${locale}`);
    if (locale === "ar") assert(/<html[^>]+dir="rtl"/.test(html), `${file}: Arabic page must be RTL`);
    const key = locale || "x-default";
    const seenTitles = titlesByLocale.get(key) || new Set();
    assert(!seenTitles.has(title), `${file}: duplicate title in locale ${key}: ${title}`);
    seenTitles.add(title);
    titlesByLocale.set(key, seenTitles);
    validateJsonLd(html, file);
    if (pathname.startsWith("/ru/kanji/")) {
      assert(!/family name, surname|disarm, dismantle|abandon, discard|contract, reduce/i.test(stripHtml(html)), `${file}: Russian kanji page exposes English fallback`);
    }
    if (pathname.startsWith("/en/kanji/")) {
      assert(!/[А-Яа-яЁё]{3,}/.test(stripHtml(html)), `${file}: English kanji page exposes Russian fallback`);
    }
  }
  for (const [pathname, { file, html }] of htmlByPath.entries()) validateHreflang(pathname, html, file, htmlByPath);
  await validateTextbookCounts();
  await validateNoOldPages();
  await validateKanjiSlugSample();
  console.log(`SEO validation passed for ${sitemapUrls.length} canonical URLs.`);
}

main().catch((error) => {
  console.error(error.message || error);
  process.exitCode = 1;
});
