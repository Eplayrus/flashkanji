#!/usr/bin/env node
import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { PUBLIC_DIR, readJson } from "./seo-foundation.mjs";

const REQUIRED_NAMESPACES = ["common", "navigation", "home", "textbooks", "seo"];
const REQUIRED_LOCALES = ["ru", "en", "es", "pt-BR", "de", "fr", "it", "pl", "uk", "tr", "zh-Hans", "zh-Hant", "ko", "vi", "id", "th", "hi", "ar", "ja", "nl", "cs", "ro", "hu", "be", "kk", "en-XA"];
const MOJIBAKE_RE = /â€™|â€œ|â€|вЂ|гЃ|ж—|ењ/i;

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function isObject(value) {
  return value && typeof value === "object" && !Array.isArray(value);
}

async function readNamespace(localeSegment, namespace) {
  const file = path.join(PUBLIC_DIR, "locales", localeSegment, `${namespace}.json`);
  assert(existsSync(file), `Missing namespace ${localeSegment}/${namespace}.json`);
  const raw = await readFile(file, "utf8");
  assert(!MOJIBAKE_RE.test(raw), `Mojibake detected in ${file}`);
  return JSON.parse(raw);
}

async function main() {
  const registry = await readJson("public/locales/registry.json");
  const locales = registry.locales || {};
  for (const locale of REQUIRED_LOCALES) {
    assert(locales[locale], `Registry misses required locale ${locale}`);
  }
  assert(registry.defaultLocale === "ru", "Default locale must stay ru until app migration is complete");
  assert(locales.ar.direction === "rtl", "Arabic must be registered as RTL");
  assert(locales["en-XA"].publicationStatus === "internal", "Pseudo-locale must not be public");
  assert(locales.es.publicationStatus === "pilot" && locales.es.seoStatus === "noindex", "Spanish pilot must remain noindex before human review");

  const urlSegments = new Set();
  const hreflangs = new Set();
  for (const [code, config] of Object.entries(locales)) {
    assert(config.code === code, `Locale ${code} has mismatched code field`);
    assert(config.urlSegment, `Locale ${code} misses urlSegment`);
    assert(!urlSegments.has(config.urlSegment), `Duplicate urlSegment ${config.urlSegment}`);
    urlSegments.add(config.urlSegment);
    assert(config.hreflang, `Locale ${code} misses hreflang`);
    assert(!hreflangs.has(config.hreflang), `Duplicate hreflang ${config.hreflang}`);
    hreflangs.add(config.hreflang);
    assert(["ltr", "rtl"].includes(config.direction), `Invalid direction for ${code}`);
    if (config.fallbackLocale) assert(locales[config.fallbackLocale], `Unknown fallback ${config.fallbackLocale} for ${code}`);
    assert(isObject(config.tts), `Locale ${code} misses TTS config`);
    assert(isObject(config.formatting), `Locale ${code} misses formatting config`);
  }

  for (const locale of ["ru", "en", "es"]) {
    const segment = locales[locale].urlSegment;
    for (const namespace of REQUIRED_NAMESPACES) {
      const data = await readNamespace(segment, namespace);
      assert(Object.keys(data).length > 0, `Empty namespace ${segment}/${namespace}`);
    }
  }

  const localeDirs = await readdir(path.join(PUBLIC_DIR, "locales"), { withFileTypes: true });
  for (const entry of localeDirs.filter((item) => item.isDirectory())) {
    assert(urlSegments.has(entry.name), `Unexpected locale directory ${entry.name}`);
  }

  console.log(`i18n validation passed for ${Object.keys(locales).length} locales and ${REQUIRED_NAMESPACES.length} namespaces.`);
}

main().catch((error) => {
  console.error(error.message || error);
  process.exitCode = 1;
});
