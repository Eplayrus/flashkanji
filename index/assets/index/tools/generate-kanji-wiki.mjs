#!/usr/bin/env node
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const REPO_ROOT = path.resolve(ROOT, "..");
const BASE_URL = "https://flashkanji.space";
const APP_URL = `${BASE_URL}/index/`;
const OG_IMAGE = `${BASE_URL}/index/assets/og/flashkanji-og.png`;
const TODAY = new Date().toISOString().slice(0, 10);

const esc = (value = "") => String(value ?? "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#39;");

const clean = (value = "") => String(value ?? "").replace(/\s+/g, " ").trim();
const slugify = (value = "") => clean(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "kanji";
const firstRomaji = (card = {}) => {
  const raw = String(card.romaji || card.onyomi_romaji || card.kunyomi_romaji || "kanji").toLowerCase();
  return slugify(raw.split(/[\/,;|()\s]+/).find((part) => /[a-z]/.test(part)) || raw);
};
const codepointSlug = (literal = "") => Array.from(literal).map((char) => `u${char.codePointAt(0).toString(16).padStart(4, "0")}`).join("-");
const publicSlug = (card) => `${codepointSlug(card.kanji) || "kanji"}-${firstRomaji(card)}`;
const pageUrl = (lang, card) => `${BASE_URL}/${lang}/kanji/${publicSlug(card)}/`;
const pageDirs = (lang, card) => [
  path.join(REPO_ROOT, lang, "kanji", publicSlug(card)),
  path.join(ROOT, lang, "kanji", publicSlug(card))
];
const indexDirs = (lang) => [
  path.join(REPO_ROOT, lang, "kanji"),
  path.join(ROOT, lang, "kanji")
];

async function readJson(relativePath, fallback = {}) {
  const file = path.join(ROOT, relativePath);
  if (!existsSync(file)) return fallback;
  return JSON.parse(await readFile(file, "utf8"));
}

async function writeHtml(dir, html) {
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "index.html"), html, "utf8");
}

async function writeFileEnsured(file, content) {
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, content, "utf8");
}

async function loadCourse() {
  const manifest = await readJson("data/lessons.json", { lessons: [] });
  const cards = [];
  const seen = new Set();
  for (const lessonRef of manifest.lessons || []) {
    const payload = await readJson(lessonRef.file.replace(/^data\//, "data/"), { lesson: {}, items: [] });
    const lesson = { ...lessonRef, ...(payload.lesson || {}) };
    for (const item of payload.items || []) {
      if (!item.kanji || seen.has(item.kanji)) continue;
      seen.add(item.kanji);
      cards.push({
        ...item,
        id: String(item.id || ""),
        lessonId: lesson.id || lessonRef.id || "",
        lessonTitle: lesson.title || lessonRef.title || "",
        lessonTitleEn: lesson.title_en || lessonRef.title_en || lesson.title || lessonRef.title || "",
        examples: Array.isArray(item.examples) ? item.examples : [],
        apps: Array.isArray(item.apps) ? item.apps : [],
        stroke_order: Array.isArray(item.stroke_order) ? item.stroke_order : []
      });
    }
  }
  return cards;
}

function meaning(card, translations, lang) {
  const tr = translations[card.id] || {};
  if (lang === "en") return clean(tr.meaning_en || card.meaning_en || card.meaning_ru || card.kanji);
  return clean(card.meaning_ru || tr.meaning_en || card.meaning_en || card.kanji);
}

function interfaceUse(card, translations, lang) {
  const tr = translations[card.id] || {};
  if (lang === "en") return clean(tr.interface_use_en || card.interface_use_en || card.interface_use || "");
  return clean(card.interface_use || tr.interface_use_en || "");
}

function readingSummary(card) {
  const parts = [card.onyomi, card.kunyomi, card.hiragana].filter(Boolean);
  return parts.join(" / ") || card.kanji;
}

function titleFor(card, translations, lang) {
  const level = card.jlpt || "JLPT";
  if (lang === "en") return `${card.kanji} — ${meaning(card, translations, "en")}, readings ${readingSummary(card)}, ${level} | Flash Kanji`;
  return `${card.kanji} — ${meaning(card, translations, "ru")}, чтения ${readingSummary(card)}, ${level} | Flash Kanji`;
}

function descriptionFor(card, translations, lang) {
  const level = card.jlpt || "JLPT";
  if (lang === "en") {
    return `Kanji ${card.kanji}: meanings, onyomi and kunyomi, useful words, interface examples, sentence practice and writing notes for ${level} in Flash Kanji.`;
  }
  return `Кандзи ${card.kanji}: значения, онъёми и кунъёми, слова, примеры в интерфейсах, предложения и порядок письма для ${level} в Flash Kanji.`;
}

function highlightKanji(text, target) {
  const safe = esc(text);
  const mark = esc(target);
  return mark ? safe.replaceAll(mark, `<mark class="kanji-hit" data-kanji="${mark}">${mark}</mark>`) : safe;
}

function sourceLocalized(value, lang) {
  if (!value || typeof value !== "object") return clean(value);
  return clean(value[lang] || value.ru || value.en || "");
}

function translationForExample(example, lang) {
  if (lang === "en") return clean(example.translation_en || example.translationEn || example.translation || example.translation_ru || "");
  return clean(example.translation || example.translation_ru || example.translationRu || example.translation_en || "");
}

function buildWordIndex(cards, vocabulary = []) {
  const courseKanji = new Set(cards.map((card) => card.kanji));
  const index = new Map();
  const add = (target, entry, priority = 2) => {
    const word = clean(entry.word || entry.surface || "");
    if (!target || !word) return;
    const normalized = {
      word,
      reading: clean(entry.reading || entry.kana || ""),
      romaji: clean(entry.romaji || ""),
      translation: clean(entry.translation || entry.translation_ru || entry.translationRu || ""),
      translation_en: clean(entry.translation_en || entry.translationEn || entry.en || ""),
      priority
    };
    const bucket = index.get(target) || [];
    const key = `${normalized.word}|${normalized.reading}`;
    if (!bucket.some((item) => `${item.word}|${item.reading}` === key)) {
      bucket.push(normalized);
      index.set(target, bucket);
    }
  };

  for (const card of cards) {
    for (const example of card.examples || []) {
      add(card.kanji, example, 0);
      for (const char of Array.from(example.word || "")) {
        if (courseKanji.has(char) && char !== card.kanji) add(char, example, 3);
      }
    }
  }

  for (const item of vocabulary || []) {
    const targets = new Set([
      ...(Array.isArray(item.kanji) ? item.kanji : []),
      ...Array.from(item.word || "").filter((char) => courseKanji.has(char))
    ]);
    for (const target of targets) add(target, item, 1);
  }

  for (const bucket of index.values()) {
    bucket.sort((a, b) => a.priority - b.priority || a.word.length - b.word.length || a.word.localeCompare(b.word, "ja"));
  }
  return index;
}

function examplesFor(card, lang, wordIndex) {
  const candidates = [];
  const seen = new Set();
  const add = (example) => {
    const word = clean(example.word || "");
    const key = `${word}|${clean(example.reading || "")}`;
    if (!word || seen.has(key)) return;
    seen.add(key);
    candidates.push(example);
  };

  for (const example of card.examples || []) add(example);
  for (const example of wordIndex.get(card.kanji) || []) add(example);

  const rows = candidates.slice(0, 10).map((example) => `
    <li>
      <b>${highlightKanji(example.word || "", card.kanji)}</b>
      <span>${esc(example.reading || "")} · ${esc(example.romaji || "")}</span>
      <small>${esc(translationForExample(example, lang))}</small>
    </li>
  `);
  if (rows.length) return rows.join("");
  return `<li><b>${esc(card.kanji)}</b><span>${esc(readingSummary(card))}</span><small>${esc(meaning(card, {}, lang))}</small></li>`;
}

function sentencesFor(card, sentences, lang) {
  const rows = [];
  for (const exercise of sentences) {
    const sentence = exercise.sentence || exercise.jp || "";
    const answers = (exercise.blanks || []).flatMap((blank) => blank.answer || []).join("");
    if (!sentence.includes(card.kanji) && !answers.includes(card.kanji)) continue;
    let visible = esc(sentence);
    for (const blank of exercise.blanks || []) {
      visible = visible.replace("___", highlightKanji((blank.answer || []).join(""), card.kanji));
    }
    rows.push(`
      <li>
        <strong>${visible}</strong>
        <span>${esc(exercise.reading || exercise.hiragana || "")}</span>
        <small>${esc(lang === "en" ? (exercise.translationEn || exercise.en || exercise.translationRu || exercise.ru || "") : (exercise.translationRu || exercise.ru || exercise.translationEn || exercise.en || ""))}</small>
      </li>
    `);
    if (rows.length >= 6) break;
  }
  if (rows.length) return rows.join("");
  const jp = `${card.kanji}を見ます。`;
  const ru = `Я вижу кандзи ${card.kanji}.`;
  const en = `I look at the kanji ${card.kanji}.`;
  return `<li><strong>${highlightKanji(jp, card.kanji)}</strong><span>${esc(card.hiragana || card.onyomi || "")}</span><small>${esc(lang === "en" ? en : ru)}</small></li>`;
}

function renderStroke(card, strokes, lang) {
  const data = strokes[card.kanji] || {};
  const paths = Array.isArray(data.strokeOrder) ? data.strokeOrder : [];
  if (!paths.length) {
    const message = lang === "en"
      ? "Precise KanjiVG paths are not available yet. Use the in-app translucent template for self-check."
      : "Точных SVG-штрихов KanjiVG пока нет. Используй полупрозрачный шаблон в приложении для самопроверки.";
    const steps = (card.stroke_order || []).slice(0, 4).map((step, index) => `<li><b>${index + 1}</b><span>${esc(step)}</span></li>`).join("");
    return `<div class="stroke-fallback"><strong>${esc(card.kanji)}</strong><p>${esc(message)}</p></div>${steps ? `<ol class="stroke-steps">${steps}</ol>` : ""}`;
  }
  const labelKey = lang === "ru" ? "description_ru" : "description_en";
  return `
    <div class="stroke-order-layout">
      <svg class="stroke-svg" viewBox="${esc(data.viewBox || "0 0 109 109")}" role="img" aria-label="KanjiVG stroke order for ${esc(card.kanji)}">
        ${paths.map((stroke, index) => `<path d="${esc(stroke.path)}" data-stroke="${index + 1}" />`).join("")}
      </svg>
      <ol class="stroke-steps">
        ${paths.map((stroke, index) => `<li><b>${index + 1}</b><span>${esc(stroke[labelKey] || stroke.description_en || "KanjiVG stroke")}</span></li>`).join("")}
      </ol>
    </div>
  `;
}

function interfaceCards(card, translations, lang) {
  const base = [
    { type: "notification", ru: `Уведомление: ${card.kanji}`, en: `Notification: ${card.kanji}` },
    { type: "settings", ru: `Настройка ${card.kanji}`, en: `${card.kanji} setting` },
    { type: "lesson", ru: `Повторить ${card.kanji}`, en: `Review ${card.kanji}` }
  ];
  return base.map((item, index) => `
    <article class="interface-mock-card ${item.type}">
      <span>${esc(card.apps[index] || item.type)}</span>
      <strong>${highlightKanji(lang === "en" ? item.en : item.ru, card.kanji)}</strong>
      <small>${esc(interfaceUse(card, translations, lang) || meaning(card, translations, lang))}</small>
    </article>
  `).join("");
}

function factGrid(card, translations, meta, lang) {
  const m = meta[card.id] || {};
  const labels = lang === "en"
    ? { meanings: "Meanings", strokes: "Strokes", radical: "Radical", lesson: "Lesson" }
    : { meanings: "Значения", strokes: "Черты", radical: "Радикал", lesson: "Урок" };
  return `
    <dl class="kanji-fact-grid">
      <div><dt>${labels.meanings}</dt><dd>${esc(meaning(card, translations, lang))}</dd></div>
      <div><dt>Onyomi</dt><dd>${esc(card.onyomi || card.hiragana || "—")}</dd></div>
      <div><dt>Kunyomi</dt><dd>${esc(card.kunyomi || card.hiragana || "—")}</dd></div>
      <div><dt>Romaji</dt><dd>${esc(card.romaji || card.onyomi_romaji || card.kunyomi_romaji || "—")}</dd></div>
      <div><dt>JLPT</dt><dd>${esc(card.jlpt || "—")}</dd></div>
      <div><dt>${labels.strokes}</dt><dd>${esc(card.strokes || "—")}</dd></div>
      <div><dt>${labels.radical}</dt><dd>${esc(m.radical || "—")} ${esc(sourceLocalized(m.radicalMeaning || {}, lang))}</dd></div>
      <div><dt>${labels.lesson}</dt><dd>${esc(lang === "en" ? card.lessonTitleEn : card.lessonTitle)}</dd></div>
      <div><dt>Unicode</dt><dd>${esc(`U+${card.kanji.codePointAt(0).toString(16).toUpperCase()}`)}</dd></div>
      <div><dt>ID</dt><dd>${esc(card.id)}</dd></div>
    </dl>
  `;
}

function jsonLd(card, translations, lang) {
  const url = pageUrl(lang, card);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Flash Kanji", "item": `${BASE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Kanji", "item": `${BASE_URL}/${lang}/kanji/` },
          { "@type": "ListItem", "position": 3, "name": card.kanji, "item": url }
        ]
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        "url": url,
        "name": titleFor(card, translations, lang),
        "description": descriptionFor(card, translations, lang),
        "inLanguage": lang,
        "isPartOf": { "@type": "WebSite", "name": "Flash Kanji", "url": `${BASE_URL}/` },
        "breadcrumb": { "@id": `${url}#breadcrumb` }
      },
      {
        "@type": "LearningResource",
        "@id": `${url}#learning-resource`,
        "name": `Flash Kanji — ${card.kanji} (${card.jlpt})`,
        "learningResourceType": "Kanji wiki page",
        "educationalLevel": card.jlpt,
        "inLanguage": [lang, "ja"],
        "teaches": [card.kanji, meaning(card, translations, lang)],
        "url": url
      },
      {
        "@type": "DefinedTerm",
        "@id": `${url}#term`,
        "name": card.kanji,
        "termCode": `U+${card.kanji.codePointAt(0).toString(16).toUpperCase()}`,
        "description": meaning(card, translations, lang),
        "inDefinedTermSet": `Flash Kanji ${card.jlpt} Kanji`,
        "url": url
      }
    ]
  };
}

function pageHtml(card, allCards, translations, meta, strokes, sentences, wordIndex, lang) {
  const title = titleFor(card, translations, lang);
  const description = descriptionFor(card, translations, lang);
  const currentUrl = pageUrl(lang, card);
  const altLang = lang === "ru" ? "en" : "ru";
  const wordsLabel = lang === "en" ? "Useful words" : "Полезные слова";
  const sentenceLabel = lang === "en" ? "Example sentences" : "Примеры предложений";
  const interfaceLabel = lang === "en" ? "Interface contexts" : "Контекст в интерфейсах";
  const writingLabel = lang === "en" ? "Writing and stroke order" : "Письмо и порядок черт";
  const factsLabel = lang === "en" ? "Facts" : "Факты";
  const notesLabel = lang === "en" ? "Flash Kanji note" : "Заметка Flash Kanji";
  const related = allCards.filter((item) => item.jlpt === card.jlpt && item.id !== card.id).slice(0, 6);
  return `<!doctype html>
<html lang="${esc(lang)}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <meta name="robots" content="index, follow" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}" />
  <link rel="canonical" href="${esc(currentUrl)}" />
  <link rel="alternate" hreflang="${esc(lang)}" href="${esc(currentUrl)}" />
  <link rel="alternate" hreflang="${esc(altLang)}" href="${esc(pageUrl(altLang, card))}" />
  <link rel="alternate" hreflang="x-default" href="${esc(pageUrl("en", card))}" />
  <meta property="og:site_name" content="Flash Kanji" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(description)}" />
  <meta property="og:url" content="${esc(currentUrl)}" />
  <meta property="og:image" content="${OG_IMAGE}" />
  <meta name="twitter:card" content="summary_large_image" />
  <script type="application/ld+json">${JSON.stringify(jsonLd(card, translations, lang))}</script>
  <link rel="icon" href="../../../index/assets/favicon.png" type="image/png" />
  <link rel="stylesheet" href="../../../index/kanji-page.css" />
  <link rel="stylesheet" href="../../../kanji-page.css" />
</head>
<body>
  <main class="kanji-public-main">
    <nav class="kanji-breadcrumb" aria-label="Breadcrumb">
      <a href="${BASE_URL}/">Flash Kanji</a><span>/</span><a href="../">Kanji</a><span>/</span><a href="../?jlpt=${esc(card.jlpt)}">${esc(card.jlpt)}</a><span>/</span><span aria-current="page">${esc(card.kanji)}</span>
    </nav>
    <article class="kanji-public-article">
      <header class="kanji-public-hero">
        <div class="kanji-public-glyph">${highlightKanji(card.kanji, card.kanji)}</div>
        <div class="kanji-public-intro">
          <p class="eyebrow">Flash Kanji JSON · JLPT ${esc(card.jlpt)}</p>
          <h1>${esc(card.kanji)} — ${esc(meaning(card, translations, lang))}</h1>
          <p>${esc(interfaceUse(card, translations, lang) || (lang === "en" ? `This wiki page is generated from the Flash Kanji course data and links back into practice, writing and review.` : `Эта wiki-страница создана из JSON-данных курса Flash Kanji и связана с практикой, письмом и повторением.`))}</p>
          <div class="kanji-tag-row">
            <span>${esc(card.jlpt)}</span><span>${esc(card.strokes)} ${esc(lang === "en" ? "strokes" : "черт")}</span><span>${esc(lang === "en" ? card.lessonTitleEn : card.lessonTitle)}</span>
          </div>
          <div class="reading-row">
            <div><span>Onyomi</span><b>${esc(card.onyomi || card.hiragana || "—")}</b></div>
            <div><span>Kunyomi</span><b>${esc(card.kunyomi || card.hiragana || "—")}</b></div>
          </div>
          <div class="hero-actions"><a class="primary-link" href="${APP_URL}index.html#kanji/${esc(card.id)}">${esc(lang === "en" ? "Open in app" : "Открыть в приложении")}</a></div>
        </div>
      </header>
      <section class="kanji-public-section" id="facts"><h2>${esc(factsLabel)}</h2>${factGrid(card, translations, meta, lang)}</section>
      <section class="kanji-public-section" id="words"><h2>${esc(wordsLabel)}</h2><ul class="kanji-word-list">${examplesFor(card, lang, wordIndex)}</ul></section>
      <section class="kanji-public-section" id="sentences"><h2>${esc(sentenceLabel)}</h2><ul class="kanji-sentence-list">${sentencesFor(card, sentences, lang)}</ul></section>
      <section class="kanji-public-section" id="interfaces"><h2>${esc(interfaceLabel)}</h2><div class="interface-mock-grid">${interfaceCards(card, translations, lang)}</div></section>
      <section class="kanji-public-section" id="writing"><h2>${esc(writingLabel)}</h2>${renderStroke(card, strokes, lang)}</section>
      <section class="kanji-public-section editorial-card" id="notes"><h2>${esc(notesLabel)}</h2><section><h3>${esc(lang === "en" ? "What to watch" : "На что обратить внимание")}</h3><p>${esc(lang === "en" ? `Learn ${card.kanji} through words first, then reinforce it in sentence and writing practice.` : `Сначала закрепи ${card.kanji} через слова, затем проверь его в предложениях и письме.`)}</p></section></section>
      <section class="kanji-public-section" id="related"><h2>${esc(lang === "en" ? "Related kanji" : "Связанные кандзи")}</h2><div class="related-links">${related.map((item) => `<a href="../${publicSlug(item)}/">${esc(item.kanji)} · ${esc(meaning(item, translations, lang))}</a>`).join("")}</div></section>
    </article>
  </main>
</body>
</html>`;
}

function indexHtml(cards, translations, lang) {
  const title = lang === "en" ? "Flash Kanji wiki" : "Вики Flash Kanji";
  const description = lang === "en"
    ? "All kanji available in Flash Kanji, with readings, meanings, examples and writing practice links."
    : "Все кандзи из Flash Kanji: чтения, значения, примеры и ссылки на практику письма.";
  const links = cards.map((card) => `<li><a href="${publicSlug(card)}/"><b>${esc(card.kanji)}</b><span>${esc(meaning(card, translations, lang))} · ${esc(card.jlpt)} · ${esc(readingSummary(card))}</span></a></li>`).join("");
  return `<!doctype html>
<html lang="${esc(lang)}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="index, follow" />
  <title>${esc(title)} | Flash Kanji</title>
  <meta name="description" content="${esc(description)}" />
  <link rel="canonical" href="${BASE_URL}/${lang}/kanji/" />
  <link rel="alternate" hreflang="ru" href="${BASE_URL}/ru/kanji/" />
  <link rel="alternate" hreflang="en" href="${BASE_URL}/en/kanji/" />
  <link rel="stylesheet" href="../../index/kanji-page.css" />
  <link rel="stylesheet" href="../../kanji-page.css" />
</head>
<body>
  <main class="kanji-public-main">
    <nav class="kanji-breadcrumb" aria-label="Breadcrumb"><a href="${BASE_URL}/">Flash Kanji</a><span>/</span><span>Kanji</span></nav>
    <article class="kanji-public-section"><h1>${esc(title)}</h1><p>${esc(description)}</p><ul class="kanji-word-list">${links}</ul></article>
  </main>
</body>
</html>`;
}

function sitemapXml(cards) {
  const urls = [`${BASE_URL}/`, `${BASE_URL}/index/`, `${BASE_URL}/ru/kanji/`, `${BASE_URL}/en/kanji/`];
  for (const card of cards) {
    urls.push(pageUrl("ru", card), pageUrl("en", card));
  }
  const unique = [...new Set(urls)];
  const body = unique.map((url) => `  <url>\n    <loc>${esc(url)}</loc>\n    <lastmod>${TODAY}</lastmod>\n  </url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

async function main() {
  const [cards, translationsBundle, metaBundle, strokesBundle, sentenceBundle, vocabularyBundle] = await Promise.all([
    loadCourse(),
    readJson("data/kanji/translations.json", { items: {} }),
    readJson("data/kanji/meta.json", { items: {} }),
    readJson("data/kanji/stroke-order-kanjivg.json", { items: {} }),
    readJson("data/sentences/index.json", { items: [] }),
    readJson("data/vocabulary/index.json", { items: [] })
  ]);
  const translations = translationsBundle.items || {};
  const meta = metaBundle.items || {};
  const strokes = strokesBundle.items || {};
  const sentences = sentenceBundle.items || [];
  const vocabulary = vocabularyBundle.items || [];
  const wordIndex = buildWordIndex(cards, vocabulary);

  for (const lang of ["ru", "en"]) {
    for (const dir of indexDirs(lang)) await writeHtml(dir, indexHtml(cards, translations, lang));
  }

  for (const card of cards) {
    for (const lang of ["ru", "en"]) {
      const html = pageHtml(card, cards, translations, meta, strokes, sentences, wordIndex, lang);
      for (const dir of pageDirs(lang, card)) await writeHtml(dir, html);
    }
  }

  const sitemap = sitemapXml(cards);
  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${BASE_URL}/sitemap.xml\n`;
  await writeFileEnsured(path.join(REPO_ROOT, "sitemap.xml"), sitemap);
  await writeFileEnsured(path.join(ROOT, "sitemap.xml"), sitemap);
  await writeFileEnsured(path.join(REPO_ROOT, "robots.txt"), robots);
  await writeFileEnsured(path.join(ROOT, "robots.txt"), robots);
  console.log(`Generated ${cards.length * 2} wiki pages for ${cards.length} kanji.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
