#!/usr/bin/env node
import path from "node:path";
import {
  JLPT_LEVELS,
  PUBLIC_DIR,
  SITE_URL,
  canonicalUrl,
  clean,
  esc,
  hreflangLinks,
  isSeoIndexableLocale,
  localeByCode,
  localePath,
  readJson,
  safeRemoveInsidePublic,
  stableKanjiSlug,
  stripHtml,
  writeText
} from "./seo-foundation.mjs";

const SEO_LOCALES = ["ru", "en", "es"];
const INDEXABLE_LOCALES = ["ru", "en"];
const PILOT_ES_KANJI_LIMIT = 10;
const KANA_COURSE_SLUGS = ["hiragana", "katakana"];

const KANA_COPY = {
  hiragana: {
    ru: {
      title: "Хирагана с нуля",
      description: "Интерактивный курс хираганы Flash Kanji: 46 базовых знаков, уроки, чтение, прописи и SRS-повторение по официальному PDF."
    },
    en: {
      title: "Hiragana from zero",
      description: "Flash Kanji interactive hiragana course: 46 base signs, lessons, reading practice, handwriting and SRS review based on the official Russian PDF."
    },
    es: {
      title: "Hiragana desde cero",
      description: "Curso interactivo de hiragana de Flash Kanji: 46 signos base, lecciones, lectura, escritura y repaso SRS desde el PDF oficial en ruso."
    }
  },
  katakana: {
    ru: {
      title: "Катакана с нуля",
      description: "Интерактивный курс катаканы Flash Kanji: 46 базовых знаков, слова-заимствования, чтение, прописи и SRS-повторение по официальному PDF."
    },
    en: {
      title: "Katakana from zero",
      description: "Flash Kanji interactive katakana course: 46 base signs, loanword reading practice, handwriting and SRS review based on the official Russian PDF."
    },
    es: {
      title: "Katakana desde cero",
      description: "Curso interactivo de katakana de Flash Kanji: 46 signos base, lectura de préstamos, escritura y repaso SRS desde el PDF oficial en ruso."
    }
  }
};

const COPY = {
  ru: {
    lang: "ru",
    app: "Открыть приложение",
    appHash: "#home",
    download: "Скачать APK",
    textbooks: "Учебники",
    textbookHubTitle: "Учебники Flash Kanji",
    textbookHubDescription: "Хирагана, катакана и JLPT N5–N1: кандзи, слова, предложения, упражнения, письмо и SRS-повторение. Страницы генерируются из тех же данных, что использует приложение.",
    homeTitle: "Flash Kanji — учи японские кандзи через JLPT-учебники",
    homeDescription: "Flash Kanji помогает учить японские кандзи через JLPT N5–N1, SRS-повторение, письмо, словарь, примеры и игровые цели Moon Fragments.",
    kanjiHubTitle: "Кандзи Flash Kanji",
    kanjiHubDescription: "Публичная вики кандзи: чтения, значения, JLPT-уровень, слова-примеры и переход в интерактивную практику.",
    downloadTitle: "Скачать Flash Kanji для Android и установить PWA",
    downloadDescription: "Официальная страница скачивания Flash Kanji: APK для Android, PWA-установка и ссылка на веб-версию.",
    meaningMissing: "Русский перевод значения требует редакторской проверки.",
    editorialPending: "Страница исключена из sitemap, пока перевод не прошёл проверку.",
    examples: "Примеры",
    readings: "Чтения",
    level: "Уровень",
    lessons: "уроков",
    kanaSigns: "знаков",
    tasks: "заданий",
    sourcePdf: "Официальный PDF",
    openCourse: "Открыть курс",
    kanji: "кандзи",
    grammar: "грамматика",
    reading: "чтение",
    listening: "аудирование",
    pilotNote: ""
  },
  en: {
    lang: "en",
    app: "Open app",
    appHash: "#home",
    download: "Download APK",
    textbooks: "Textbooks",
    textbookHubTitle: "Flash Kanji textbooks",
    textbookHubDescription: "Hiragana, katakana and JLPT N5-N1: kanji, words, sentences, exercises, writing and SRS review. Pages are generated from the same data used by the app.",
    homeTitle: "Flash Kanji — learn Japanese kanji through JLPT textbooks",
    homeDescription: "Flash Kanji helps you learn Japanese kanji through JLPT N5–N1, SRS review, writing practice, dictionary examples and Moon Fragments goals.",
    kanjiHubTitle: "Flash Kanji kanji wiki",
    kanjiHubDescription: "Public kanji wiki: readings, meanings, JLPT level, word examples and links into interactive practice.",
    downloadTitle: "Download Flash Kanji for Android and install the PWA",
    downloadDescription: "Official Flash Kanji download page: Android APK, PWA installation and the web app link.",
    meaningMissing: "Editorial review is required for this meaning.",
    editorialPending: "This page is excluded from the sitemap until the translation is reviewed.",
    examples: "Examples",
    readings: "Readings",
    level: "Level",
    lessons: "lessons",
    kanaSigns: "signs",
    tasks: "tasks",
    sourcePdf: "Official PDF",
    openCourse: "Open course",
    kanji: "kanji",
    grammar: "grammar",
    reading: "reading",
    listening: "listening",
    pilotNote: ""
  },
  es: {
    lang: "es",
    app: "Abrir la versión web",
    appHash: "#home",
    download: "Descargar APK",
    textbooks: "Libros",
    textbookHubTitle: "Libros de Flash Kanji",
    textbookHubDescription: "Piloto en español para hiragana, katakana y JLPT N5-N1. Estas páginas usan los mismos datos que la aplicación, pero siguen pendientes de revisión editorial.",
    homeTitle: "Flash Kanji — piloto en español para estudiar kanji",
    homeDescription: "Piloto en español de Flash Kanji: rutas JLPT N5–N1, repaso SRS, escritura, diccionario y objetivos Moon Fragments. Pendiente de revisión editorial.",
    kanjiHubTitle: "Wiki de kanji de Flash Kanji",
    kanjiHubDescription: "Piloto en español con diez páginas de muestra. El corpus completo no se publica para SEO hasta la revisión humana.",
    downloadTitle: "Descargar Flash Kanji para Android e instalar la PWA",
    downloadDescription: "Página de descarga de Flash Kanji: APK para Android, PWA y acceso a la versión web.",
    meaningMissing: "Traducción pendiente de revisión editorial.",
    editorialPending: "Piloto no indexable hasta completar la revisión editorial.",
    examples: "Ejemplos",
    readings: "Lecturas",
    level: "Nivel",
    lessons: "lecciones",
    kanaSigns: "signos",
    tasks: "ejercicios",
    sourcePdf: "PDF oficial",
    openCourse: "Abrir curso",
    kanji: "kanji",
    grammar: "gramática",
    reading: "lectura",
    listening: "audio",
    pilotNote: "Piloto en español: noindex hasta revisión humana."
  }
};

const ES_MEANINGS = new Map(Object.entries({
  "日": "día; sol",
  "月": "mes; luna",
  "人": "persona",
  "本": "libro; origen",
  "一": "uno",
  "二": "dos",
  "時": "tiempo; hora",
  "年": "año",
  "国": "país; estado",
  "大": "grande"
}));

function isProbablyRussian(value) {
  return /[А-Яа-яЁё]/.test(value);
}

function isProbablyEnglish(value) {
  return /[A-Za-z]/.test(value);
}

function localizedValue(value, locale, fallback = "") {
  if (!value) return fallback;
  if (typeof value === "string") return clean(value);
  return clean(value[locale] || value.en || value.ru || fallback);
}

function levelLabel(level) {
  return level.toUpperCase();
}

function relativeCss(depth = 0) {
  return `${"../".repeat(depth)}seo-page.css`;
}

function relativeApp(depth = 0, hash = "#home") {
  return `${"../".repeat(depth)}index.html${hash}`;
}

function relativeDownload(depth = 0) {
  return `${"../".repeat(depth)}downloads/flash-kanji-android.apk`;
}

function robotsMeta(indexable) {
  return indexable ? "index, follow" : "noindex, follow";
}

function baseHead({ locale, title, description, pathname, indexable, alternates = [], xDefaultPath = "/" }) {
  const config = localeByCode(state.registry, locale);
  return `<!doctype html>
<html lang="${esc(config.hreflang)}" dir="${esc(config.direction)}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#08080c" />
  <meta name="robots" content="${robotsMeta(indexable)}" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}" />
  <link rel="canonical" href="${esc(canonicalUrl(pathname))}" />
  ${alternates.length ? hreflangLinks(alternates, xDefaultPath) : ""}
  <meta property="og:site_name" content="Flash Kanji" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(description)}" />
  <meta property="og:url" content="${esc(canonicalUrl(pathname))}" />
  <meta property="og:image" content="${SITE_URL}/assets/og/flashkanji-og.webp" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(title)}" />
  <meta name="twitter:description" content="${esc(description)}" />
  <meta name="twitter:image" content="${SITE_URL}/assets/og/flashkanji-og.webp" />`;
}

function layout({ locale, title, description, pathname, indexable, depth, alternates, xDefaultPath, body, jsonLd = [] }) {
  const copy = COPY[locale];
  const pilot = copy.pilotNote ? `<p class="seo-alert">${esc(copy.pilotNote)}</p>` : "";
  return `${baseHead({ locale, title, description, pathname, indexable, alternates, xDefaultPath })}
  <link rel="stylesheet" href="${esc(relativeCss(depth))}" />
  ${jsonLd.map((item) => `<script type="application/ld+json">${JSON.stringify(item)}</script>`).join("\n  ")}
</head>
<body>
  <div class="seo-bg" aria-hidden="true"></div>
  <header class="seo-header">
    <a class="seo-brand" href="${esc(relativeApp(depth, "#home"))}" aria-label="Flash Kanji">
      <img src="${esc(`${"../".repeat(depth)}assets/brand/flash-kanji-logo.webp`)}" alt="Flash Kanji" />
    </a>
    <nav class="seo-nav" aria-label="SEO navigation">
      <a href="${esc(`${"../".repeat(depth)}ru/`)}">RU</a>
      <a href="${esc(`${"../".repeat(depth)}en/`)}">EN</a>
      <a href="${esc(relativeApp(depth, copy.appHash))}">${esc(copy.app)}</a>
    </nav>
  </header>
  <main class="seo-main">
    ${pilot}
    ${body}
  </main>
</body>
</html>
`;
}

function alternatesForSuffix(suffix) {
  return INDEXABLE_LOCALES.map((code) => ({
    hreflang: localeByCode(state.registry, code).hreflang,
    path: localePath(state.registry, code, suffix)
  }));
}

function kanjiAlternates(card) {
  const slug = stableKanjiSlug(card);
  const result = [];
  if (isKanjiIndexable(card, "ru")) {
    result.push({ hreflang: "ru", path: `/ru/kanji/${slug}/` });
  }
  if (isKanjiIndexable(card, "en")) {
    result.push({ hreflang: "en", path: `/en/kanji/${slug}/` });
  }
  return result;
}

function loadCardMeaning(card, locale) {
  const raw = card.meaning;
  const ru = clean(raw?.ru || card.meaning_ru || "");
  const en = clean(raw?.en || card.meaning_en || card.meaning || card.kanji);
  if (locale === "en") return isProbablyEnglish(en) ? en : COPY.en.meaningMissing;
  if (locale === "es") return ES_MEANINGS.get(card.kanji) || COPY.es.meaningMissing;
  return isProbablyRussian(ru) ? ru : COPY.ru.meaningMissing;
}

function isKanjiIndexable(card, locale) {
  if (locale === "es") return false;
  if (locale === "en") return isProbablyEnglish(clean(card.meaning?.en || card.meaning_en || card.meaning || ""));
  return isProbablyRussian(clean(card.meaning?.ru || card.meaning_ru || ""));
}

function readingsText(card) {
  const onyomi = Array.isArray(card.readings?.onyomi) ? card.readings.onyomi.join(" / ") : clean(card.onyomi || "");
  const kunyomi = Array.isArray(card.readings?.kunyomi) ? card.readings.kunyomi.join(" / ") : clean(card.kunyomi || "");
  const parts = [];
  if (onyomi) parts.push(`on: ${onyomi}`);
  if (kunyomi) parts.push(`kun: ${kunyomi}`);
  return parts.join(" · ") || clean(card.hiragana || card.kanji);
}

function examplesHtml(card, locale) {
  const examples = Array.isArray(card.examples) ? card.examples.slice(0, 4) : [];
  if (!examples.length) return "";
  return `<section class="seo-card"><h2>${esc(COPY[locale].examples)}</h2><ul class="seo-list">${examples.map((example) => {
    const translation = locale === "en"
      ? clean(example.translation_en || example.translation || "")
      : locale === "ru"
        ? clean(example.translation_ru || example.translation || COPY.ru.meaningMissing)
        : COPY.es.meaningMissing;
    return `<li><strong>${esc(example.word || card.kanji)}</strong><span>${esc(example.reading || "")}</span><small>${esc(translation)}</small></li>`;
  }).join("")}</ul></section>`;
}

function textbookCounts(meta) {
  return {
    kanjiCount: Number(meta.kanjiCount || 0),
    lessonCount: Number(meta.lessonCount || 0),
    grammarCount: Number(meta.grammarCount || 0),
    readingCount: Number(meta.readingCount || 0),
    listeningCount: Number(meta.listeningCount || 0)
  };
}

function kanaTitle(course, locale) {
  return clean(KANA_COPY[course.slug]?.[locale]?.title || course.title || course.slug);
}

function kanaDescription(course, locale) {
  return clean(KANA_COPY[course.slug]?.[locale]?.description || course.description || COPY[locale].textbookHubDescription);
}

function kanaStats(course) {
  return {
    lessonCount: Number(course.stats?.lessonCount || course.stats?.lesson_count || course.lesson_count || 0),
    baseCharacterCount: Number(course.stats?.baseCharacterCount || course.stats?.base_character_count || course.base_character_count || 0),
    taskCount: Number(course.stats?.taskCount || course.stats?.task_count || course.task_count || 0)
  };
}

function kanaPdfUrl(course) {
  return clean(course.source?.pdf_file || course.pdf_url || `docs/flash-kanji-${course.slug}-textbook-ru.pdf`);
}

function jsonLdWebPage({ title, description, pathname, locale }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": canonicalUrl(pathname),
    "inLanguage": localeByCode(state.registry, locale).hreflang
  };
}

async function writeCss() {
  await writeText(path.join(PUBLIC_DIR, "seo-page.css"), `:root{color-scheme:dark;--bg:#08080c;--panel:rgba(22,23,31,.88);--panel2:rgba(35,36,48,.76);--line:rgba(255,255,255,.16);--accent:#f33464;--accent2:#ffdf59;--text:#fff;--muted:rgba(255,255,255,.72)}*{box-sizing:border-box}html{min-width:0}body{margin:0;background:#08080c;color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.55;overflow-x:hidden}.seo-bg{position:fixed;inset:0;background:linear-gradient(90deg,rgba(8,8,12,.96),rgba(8,8,12,.82)),url("assets/brand/study-room.webp") center/cover no-repeat;z-index:-2}.seo-bg:after{content:"";position:absolute;inset:0;background:radial-gradient(circle at 72% 24%,rgba(243,52,100,.28),transparent 34%),radial-gradient(circle at 20% 10%,rgba(255,223,89,.1),transparent 26%)}a{color:inherit}.seo-header{display:flex;justify-content:space-between;align-items:center;gap:24px;padding:24px clamp(18px,4vw,56px);border-bottom:1px solid var(--line);background:rgba(7,8,13,.84);backdrop-filter:blur(18px);position:sticky;top:0;z-index:2}.seo-brand img{width:150px;max-width:42vw}.seo-nav{display:flex;flex-wrap:wrap;gap:10px}.seo-nav a,.seo-button{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:10px 16px;border:1px solid var(--line);border-radius:14px;background:rgba(255,255,255,.06);text-decoration:none;font-weight:800}.seo-nav a:focus-visible,.seo-button:focus-visible{outline:3px solid rgba(255,223,89,.8);outline-offset:3px}.seo-button.primary{background:linear-gradient(135deg,#ff3d6d,#c91645);border-color:rgba(255,255,255,.22);box-shadow:0 16px 40px rgba(243,52,100,.32)}.seo-main{width:min(1160px,calc(100% - 32px));margin:28px auto 64px}.seo-hero,.seo-card{border:1px solid var(--line);border-radius:24px;background:linear-gradient(135deg,rgba(19,20,28,.94),rgba(19,20,28,.72));box-shadow:0 24px 80px rgba(0,0,0,.34);padding:clamp(22px,4vw,48px);margin:0 0 18px}.seo-hero{border-color:rgba(243,52,100,.72)}.seo-eyebrow{color:var(--accent2);font-weight:900;letter-spacing:.18em;text-transform:uppercase}.seo-title{font-family:Georgia,"Times New Roman",serif;font-size:clamp(42px,8vw,94px);line-height:.95;margin:.2em 0;text-shadow:4px 4px 0 var(--accent)}.seo-description{font-size:clamp(18px,2vw,24px);color:var(--muted);max-width:820px}.seo-actions{display:flex;flex-wrap:wrap;gap:14px;margin-top:26px}.seo-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px}.seo-tile{display:block;padding:18px;border:1px solid var(--line);border-radius:18px;background:var(--panel2);text-decoration:none}.seo-tile strong{display:block;font-size:22px}.seo-tile span,.seo-list small,.seo-muted{color:var(--muted)}.seo-stats{display:flex;flex-wrap:wrap;gap:10px;margin:18px 0}.seo-pill{display:inline-flex;padding:8px 12px;border:1px solid rgba(255,223,89,.34);border-radius:999px;background:rgba(255,223,89,.08);color:#ffe889;font-weight:800}.seo-list{display:grid;gap:10px;list-style:none;margin:0;padding:0}.seo-list li{padding:14px;border:1px solid var(--line);border-radius:16px;background:rgba(255,255,255,.05)}.seo-list strong,.seo-list span,.seo-list small{display:block}.seo-alert{border:1px solid rgba(255,223,89,.48);border-radius:16px;background:rgba(255,223,89,.1);padding:12px 16px;color:#ffe889;font-weight:800}.seo-kanji{font-size:clamp(80px,18vw,160px);line-height:1}.seo-footer-links{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}@media (max-width:560px){.seo-header{align-items:flex-start;flex-direction:column}.seo-main{width:min(100% - 20px,1160px);margin-top:14px}.seo-hero,.seo-card{border-radius:18px;padding:20px}.seo-title{font-size:48px}.seo-actions{display:grid}.seo-button{width:100%}}@media (prefers-reduced-motion:reduce){*,*:before,*:after{scroll-behavior:auto!important;animation-duration:.01ms!important;transition-duration:.01ms!important}}`);
}

async function loadTextbooks() {
  const catalog = await readJson("public/data/jlpt/index.json", { items: [] });
  const result = [];
  for (const level of JLPT_LEVELS) {
    const meta = await readJson(`public/data/jlpt/${level}/meta.json`);
    const lessons = await readJson(`public/data/jlpt/${level}/lessons.json`, { items: [] });
    const catalogItem = catalog.items.find((item) => item.slug === level) || {};
    result.push({ level, meta, lessons, catalogItem, counts: textbookCounts(meta) });
  }
  return result;
}

async function loadKanaCourses() {
  const catalog = await readJson("public/data/kana/index.json", { courses: [] });
  const result = [];
  for (const slug of KANA_COURSE_SLUGS) {
    const catalogItem = (catalog.courses || []).find((item) => item.slug === slug) || {};
    const courseFile = catalogItem.course_file || `data/kana/${slug}.json`;
    const course = await readJson(`public/${courseFile}`);
    result.push({
      ...course,
      catalogItem,
      slug,
      stats: kanaStats(course)
    });
  }
  return result;
}

async function loadKanjiCards() {
  const cards = [];
  const seen = new Set();
  for (const level of JLPT_LEVELS) {
    const payload = await readJson(`public/data/jlpt/${level}/kanji.json`, { items: [] });
    for (const item of payload.items || []) {
      if (!item.kanji || seen.has(item.kanji)) continue;
      seen.add(item.kanji);
      cards.push({ ...item, level: item.level || item.jlpt || levelLabel(level), jlpt: item.jlpt || item.level || levelLabel(level) });
    }
  }
  return cards;
}

async function writeLocalizedHome(locale, textbooks, kanaCourses) {
  const copy = COPY[locale];
  const pathname = localePath(state.registry, locale, "/");
  const indexable = isSeoIndexableLocale(state.registry, locale);
  const body = `<section class="seo-hero">
    <p class="seo-eyebrow">Flash Kanji · JLPT N5-N1 · Moon Fragments</p>
    <h1 class="seo-title">${esc(copy.homeTitle.replace(/^Flash Kanji —\s*/, ""))}</h1>
    <p class="seo-description">${esc(copy.homeDescription)}</p>
    <div class="seo-actions">
      <a class="seo-button primary" href="${esc(relativeApp(1, "#home"))}">${esc(copy.app)}</a>
      <a class="seo-button" href="textbooks/">${esc(copy.textbooks)}</a>
      <a class="seo-button" href="kanji/">${esc(copy.kanjiHubTitle)}</a>
    </div>
  </section>
  <section class="seo-card">
    <h2>${esc(copy.textbooks)}</h2>
    <div class="seo-grid">${[
      ...kanaCourses.map((course) => `<a class="seo-tile" href="textbooks/${course.slug}/"><strong>${esc(kanaTitle(course, locale))}</strong><span>${course.stats.baseCharacterCount} ${esc(copy.kanaSigns)} · ${course.stats.taskCount} ${esc(copy.tasks)}</span></a>`),
      ...textbooks.map(({ level, counts }) => `<a class="seo-tile" href="textbooks/${level}/"><strong>${esc(levelLabel(level))}</strong><span>${counts.kanjiCount} ${esc(copy.kanji)} · ${counts.lessonCount} ${esc(copy.lessons)}</span></a>`)
    ].join("")}</div>
  </section>`;
  await writeText(path.join(PUBLIC_DIR, localeByCode(state.registry, locale).urlSegment, "index.html"), layout({
    locale,
    title: copy.homeTitle,
    description: copy.homeDescription,
    pathname,
    indexable,
    depth: 1,
    alternates: alternatesForSuffix("/"),
    xDefaultPath: "/",
    body,
    jsonLd: [
      jsonLdWebPage({ title: copy.homeTitle, description: copy.homeDescription, pathname, locale }),
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Flash Kanji",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Web, Android",
        "url": SITE_URL,
        "inLanguage": localeByCode(state.registry, locale).hreflang,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      }
    ]
  }));
}

async function writeTextbookHub(locale, textbooks, kanaCourses) {
  const copy = COPY[locale];
  const pathname = localePath(state.registry, locale, "/textbooks/");
  const indexable = isSeoIndexableLocale(state.registry, locale);
  const body = `<section class="seo-hero">
    <p class="seo-eyebrow">JLPT N5-N1</p>
    <h1 class="seo-title">${esc(copy.textbookHubTitle)}</h1>
    <p class="seo-description">${esc(copy.textbookHubDescription)}</p>
  </section>
  <section class="seo-card">
    <div class="seo-grid">${[
      ...kanaCourses.map((course) => `<a class="seo-tile" href="${course.slug}/"><strong>${esc(kanaTitle(course, locale))}</strong><span>${course.stats.baseCharacterCount} ${esc(copy.kanaSigns)} · ${course.stats.taskCount} ${esc(copy.tasks)}</span></a>`),
      ...textbooks.map(({ level, counts, catalogItem }) => {
      const title = localizedValue(catalogItem.displayTitle || catalogItem.title, locale, levelLabel(level));
      return `<a class="seo-tile" href="${level}/"><strong>${esc(levelLabel(level))}: ${esc(title)}</strong><span>${counts.kanjiCount} ${esc(copy.kanji)} · ${counts.lessonCount} ${esc(copy.lessons)}</span></a>`;
    })
    ].join("")}</div>
  </section>`;
  await writeText(path.join(PUBLIC_DIR, localeByCode(state.registry, locale).urlSegment, "textbooks", "index.html"), layout({
    locale,
    title: copy.textbookHubTitle,
    description: copy.textbookHubDescription,
    pathname,
    indexable,
    depth: 2,
    alternates: alternatesForSuffix("/textbooks/"),
    xDefaultPath: "/",
    body,
    jsonLd: [jsonLdWebPage({ title: copy.textbookHubTitle, description: copy.textbookHubDescription, pathname, locale })]
  }));
}

async function writeTextbookLevel(locale, textbook) {
  const copy = COPY[locale];
  const level = levelLabel(textbook.level);
  const title = `${level} · ${localizedValue(textbook.catalogItem.displayTitle || textbook.catalogItem.title || textbook.meta.title, locale, level)} | Flash Kanji`;
  const description = localizedValue(textbook.meta.description || textbook.catalogItem.description, locale, copy.textbookHubDescription);
  const pathname = localePath(state.registry, locale, `/textbooks/${textbook.level}/`);
  const indexable = isSeoIndexableLocale(state.registry, locale);
  const counts = textbook.counts;
  const lessons = (textbook.lessons.items || []).slice(0, 12);
  const body = `<section class="seo-hero" data-source-level="${esc(level)}" data-source-kanji-count="${counts.kanjiCount}" data-source-lesson-count="${counts.lessonCount}" data-source-grammar-count="${counts.grammarCount}" data-source-reading-count="${counts.readingCount}" data-source-listening-count="${counts.listeningCount}">
    <p class="seo-eyebrow">Flash Kanji · ${esc(level)}</p>
    <h1 class="seo-title">${esc(level)} ${esc(copy.textbooks)}</h1>
    <p class="seo-description">${esc(description)}</p>
    <div class="seo-stats">
      <span class="seo-pill">${counts.kanjiCount} ${esc(copy.kanji)}</span>
      <span class="seo-pill">${counts.lessonCount} ${esc(copy.lessons)}</span>
      ${counts.grammarCount ? `<span class="seo-pill">${counts.grammarCount} ${esc(copy.grammar)}</span>` : ""}
      ${counts.readingCount ? `<span class="seo-pill">${counts.readingCount} ${esc(copy.reading)}</span>` : ""}
      ${counts.listeningCount ? `<span class="seo-pill">${counts.listeningCount} ${esc(copy.listening)}</span>` : ""}
    </div>
    <div class="seo-actions"><a class="seo-button primary" href="${esc(relativeApp(3, `#textbooks/${level}`))}">${esc(copy.app)}</a></div>
  </section>
  <section class="seo-card"><h2>${esc(copy.lessons)}</h2><ul class="seo-list">${lessons.map((lesson) => `<li><strong>${esc(localizedValue(lesson.title, locale, lesson.id))}</strong><span>${esc(localizedValue(lesson.goal || lesson.theme, locale, ""))}</span></li>`).join("")}</ul></section>`;
  await writeText(path.join(PUBLIC_DIR, localeByCode(state.registry, locale).urlSegment, "textbooks", textbook.level, "index.html"), layout({
    locale,
    title,
    description,
    pathname,
    indexable,
    depth: 3,
    alternates: alternatesForSuffix(`/textbooks/${textbook.level}/`),
    xDefaultPath: "/",
    body,
    jsonLd: [
      jsonLdWebPage({ title, description, pathname, locale }),
      {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": title,
        "description": description,
        "url": canonicalUrl(pathname),
        "inLanguage": localeByCode(state.registry, locale).hreflang,
        "numberOfCredits": counts.lessonCount,
        "about": `${level} kanji`
      }
    ]
  }));
}

async function writeKanaCoursePage(locale, course) {
  const copy = COPY[locale];
  const titleBase = kanaTitle(course, locale);
  const title = `${titleBase} | Flash Kanji`;
  const description = kanaDescription(course, locale);
  const pathname = localePath(state.registry, locale, `/textbooks/${course.slug}/`);
  const indexable = isSeoIndexableLocale(state.registry, locale);
  const stats = kanaStats(course);
  const lessons = (course.lessons || []).slice(0, 12);
  const visibleCharacters = (course.base_characters || []).slice(0, 46);
  const pdfUrl = kanaPdfUrl(course);
  const body = `<section class="seo-hero" data-source-kana="${esc(course.slug)}" data-source-character-count="${stats.baseCharacterCount}" data-source-lesson-count="${stats.lessonCount}" data-source-task-count="${stats.taskCount}">
    <p class="seo-eyebrow">Flash Kanji · Kana · ${esc(course.native_title || course.slug)}</p>
    <h1 class="seo-title">${esc(titleBase)}</h1>
    <p class="seo-description">${esc(description)}</p>
    <div class="seo-stats">
      <span class="seo-pill">${stats.baseCharacterCount} ${esc(copy.kanaSigns)}</span>
      <span class="seo-pill">${stats.lessonCount} ${esc(copy.lessons)}</span>
      <span class="seo-pill">${stats.taskCount} ${esc(copy.tasks)}</span>
    </div>
    <div class="seo-actions">
      <a class="seo-button primary" href="${esc(relativeApp(3, `#textbooks/${course.slug}`))}">${esc(copy.openCourse)}</a>
      <a class="seo-button" href="${esc(`${"../".repeat(3)}${pdfUrl}`)}" download>${esc(copy.sourcePdf)}</a>
    </div>
  </section>
  <section class="seo-card">
    <h2>${esc(copy.kanaSigns)}</h2>
    <p class="seo-description" lang="ja">${visibleCharacters.map((item) => esc(item.kana)).join(" ")}</p>
  </section>
  <section class="seo-card"><h2>${esc(copy.lessons)}</h2><ul class="seo-list">${lessons.map((lesson) => `<li><strong>${esc(lesson.title || lesson.id)}</strong><span>${esc(clean((lesson.body || []).slice(0, 2).join(" ")))}</span></li>`).join("")}</ul></section>`;
  await writeText(path.join(PUBLIC_DIR, localeByCode(state.registry, locale).urlSegment, "textbooks", course.slug, "index.html"), layout({
    locale,
    title,
    description,
    pathname,
    indexable,
    depth: 3,
    alternates: alternatesForSuffix(`/textbooks/${course.slug}/`),
    xDefaultPath: "/",
    body,
    jsonLd: [
      jsonLdWebPage({ title, description, pathname, locale }),
      {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": titleBase,
        "description": description,
        "url": canonicalUrl(pathname),
        "inLanguage": localeByCode(state.registry, locale).hreflang,
        "numberOfCredits": stats.lessonCount,
        "about": `${course.slug} kana`
      }
    ]
  }));
}

async function writeKanjiHub(locale, cards) {
  const copy = COPY[locale];
  const pathname = localePath(state.registry, locale, "/kanji/");
  const indexable = isSeoIndexableLocale(state.registry, locale);
  const visibleCards = locale === "es" ? cards.slice(0, PILOT_ES_KANJI_LIMIT) : cards.filter((card) => isKanjiIndexable(card, locale));
  const body = `<section class="seo-hero">
    <p class="seo-eyebrow">Flash Kanji · Kanji wiki</p>
    <h1 class="seo-title">${esc(copy.kanjiHubTitle)}</h1>
    <p class="seo-description">${esc(copy.kanjiHubDescription)}</p>
  </section>
  <section class="seo-card"><ul class="seo-list">${visibleCards.slice(0, 500).map((card) => `<li><a href="${esc(stableKanjiSlug(card))}/"><strong>${esc(card.kanji)} · ${esc(loadCardMeaning(card, locale))}</strong><span>${esc(card.jlpt || card.level || "")} · ${esc(readingsText(card))}</span></a></li>`).join("")}</ul></section>`;
  await writeText(path.join(PUBLIC_DIR, localeByCode(state.registry, locale).urlSegment, "kanji", "index.html"), layout({
    locale,
    title: copy.kanjiHubTitle,
    description: copy.kanjiHubDescription,
    pathname,
    indexable,
    depth: 2,
    alternates: alternatesForSuffix("/kanji/"),
    xDefaultPath: "/",
    body,
    jsonLd: [
      jsonLdWebPage({ title: copy.kanjiHubTitle, description: copy.kanjiHubDescription, pathname, locale }),
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": copy.kanjiHubTitle,
        "itemListElement": visibleCards.slice(0, 100).map((card, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "url": canonicalUrl(`${pathname}${stableKanjiSlug(card)}/`),
          "name": `${card.kanji} ${loadCardMeaning(card, locale)}`
        }))
      }
    ]
  }));
}

async function writeKanjiPage(locale, card) {
  const copy = COPY[locale];
  const slug = stableKanjiSlug(card);
  const pathname = localePath(state.registry, locale, `/kanji/${slug}/`);
  const meaning = loadCardMeaning(card, locale);
  const indexable = isKanjiIndexable(card, locale);
  const title = `${card.kanji} — ${meaning}, ${card.jlpt || card.level || "JLPT"} | Flash Kanji`;
  const description = locale === "ru"
    ? `Кандзи ${card.kanji}: ${meaning}. Чтения ${readingsText(card)}, уровень ${card.jlpt || card.level || "JLPT"} в Flash Kanji.`
    : locale === "es"
      ? `Kanji ${card.kanji}: ${meaning}. Lecturas ${readingsText(card)} y nivel ${card.jlpt || card.level || "JLPT"} en Flash Kanji.`
      : `Kanji ${card.kanji}: ${meaning}. Readings ${readingsText(card)}, ${card.jlpt || card.level || "JLPT"} level in Flash Kanji.`;
  const body = `<article class="seo-hero" data-kanji="${esc(card.kanji)}" data-translation-status="${indexable ? "ready" : "needs-review"}">
    <p class="seo-eyebrow">${esc(card.jlpt || card.level || "JLPT")} · ${esc(copy.level)}</p>
    <div class="seo-kanji" lang="ja">${esc(card.kanji)}</div>
    <h1 class="seo-title">${esc(meaning)}</h1>
    <p class="seo-description">${esc(copy.readings)}: <span lang="ja">${esc(readingsText(card))}</span></p>
    ${indexable ? "" : `<p class="seo-alert">${esc(copy.editorialPending)}</p>`}
    <div class="seo-actions"><a class="seo-button primary" href="${esc(relativeApp(3, `#kanji/${encodeURIComponent(card.kanji)}`))}">${esc(copy.app)}</a></div>
  </article>
  ${examplesHtml(card, locale)}`;
  const alternates = indexable ? kanjiAlternates(card) : [];
  const xDefaultPath = alternates.find((item) => item.hreflang === "en")?.path || alternates[0]?.path || pathname;
  await writeText(path.join(PUBLIC_DIR, localeByCode(state.registry, locale).urlSegment, "kanji", slug, "index.html"), layout({
    locale,
    title,
    description,
    pathname,
    indexable,
    depth: 3,
    alternates,
    xDefaultPath,
    body,
    jsonLd: [
      jsonLdWebPage({ title, description, pathname, locale }),
      {
        "@context": "https://schema.org",
        "@type": "DefinedTerm",
        "name": card.kanji,
        "description": meaning,
        "url": canonicalUrl(pathname),
        "inLanguage": localeByCode(state.registry, locale).hreflang,
        "termCode": card.kanji
      }
    ]
  }));
}

async function writeDownloadPages() {
  await writeText(path.join(PUBLIC_DIR, "download", "index.html"), downloadPage("ru", "/download/", 1, true));
  for (const locale of SEO_LOCALES) {
    const indexable = isSeoIndexableLocale(state.registry, locale);
    await writeText(path.join(PUBLIC_DIR, localeByCode(state.registry, locale).urlSegment, "download", "index.html"), downloadPage(locale, localePath(state.registry, locale, "/download/"), 2, indexable));
  }
}

function downloadPage(locale, pathname, depth, indexable) {
  const copy = COPY[locale];
  const body = `<section class="seo-hero">
    <p class="seo-eyebrow">Flash Kanji · Android · PWA</p>
    <h1 class="seo-title">${esc(copy.downloadTitle)}</h1>
    <p class="seo-description">${esc(copy.downloadDescription)}</p>
    <div class="seo-actions">
      <a class="seo-button primary" href="${esc(relativeDownload(depth))}" download="flash-kanji-android.apk">${esc(copy.download)}</a>
      <a class="seo-button" href="${esc(relativeApp(depth, "#home"))}">${esc(copy.app)}</a>
    </div>
    <p class="seo-muted">Android 8.0+ · APK · Flash Kanji</p>
  </section>
  <section class="seo-card"><h2>Install</h2><div class="seo-grid">
    <div class="seo-tile"><strong>1</strong><span>Download the APK file.</span></div>
    <div class="seo-tile"><strong>2</strong><span>Allow installation from this source if Android asks.</span></div>
    <div class="seo-tile"><strong>3</strong><span>Open Flash Kanji and keep learning offline-capable PWA content.</span></div>
  </div></section>`;
  return layout({
    locale,
    title: copy.downloadTitle,
    description: copy.downloadDescription,
    pathname,
    indexable,
    depth,
    alternates: pathname === "/download/" ? [] : alternatesForSuffix("/download/"),
    xDefaultPath: "/download/",
    body,
    jsonLd: [
      jsonLdWebPage({ title: copy.downloadTitle, description: copy.downloadDescription, pathname, locale }),
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Flash Kanji",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Android, Web",
        "downloadUrl": `${SITE_URL}/downloads/flash-kanji-android.apk`,
        "url": canonicalUrl(pathname),
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      }
    ]
  });
}

async function writeSitemaps(urlsByGroup) {
  await safeRemoveInsidePublic("sitemaps");
  const sitemapEntries = [];
  for (const [name, urls] of Object.entries(urlsByGroup)) {
    const file = `sitemaps/sitemap-${name}.xml`;
    sitemapEntries.push(canonicalUrl(`/${file}`));
    await writeText(path.join(PUBLIC_DIR, file), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${esc(canonicalUrl(url))}</loc></url>`).join("\n")}
</urlset>
`);
  }
  await writeText(path.join(PUBLIC_DIR, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map((url) => `  <sitemap><loc>${esc(url)}</loc></sitemap>`).join("\n")}
</sitemapindex>
`);
  await writeText(path.join(PUBLIC_DIR, "robots.txt"), `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`);
}

async function writeLegacyMap(cards) {
  const rows = [
    { legacy: "/index/", action: "redirect-to-root", canonical: "/" },
    { legacy: "/index/dist/", action: "redirect-to-root", canonical: "/" },
    { legacy: "/index/index.html", action: "redirect-to-root", canonical: "/" },
    { legacy: "/index/dist/index.html", action: "redirect-to-root", canonical: "/" }
  ];
  for (const card of cards.slice(0, 200)) {
    rows.push({
      legacy: `/ru/kanji/${encodeURIComponent(card.kanji)}/`,
      action: "404-or-client-redirect",
      canonical: `/ru/kanji/${stableKanjiSlug(card)}/`
    });
  }
  await writeText(path.join(PUBLIC_DIR, "legacy-url-map.json"), `${JSON.stringify({ version: 1, generatedAt: new Date(0).toISOString(), rows }, null, 2)}\n`);
}

async function writeLegacyRedirectPages() {
  const page = (relativeRoot) => `<!doctype html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex, follow" />
  <link rel="canonical" href="${SITE_URL}/" />
  <meta http-equiv="refresh" content="0; url=${relativeRoot}" />
  <title>Flash Kanji — redirect</title>
  <script>
    (function () {
      var target = new URL("${relativeRoot}", location.href);
      target.search = location.search;
      target.hash = location.hash || "#home";
      location.replace(target.href);
    })();
  </script>
</head>
<body>
  <p><a href="${relativeRoot}">Open Flash Kanji</a></p>
</body>
</html>
`;
  await writeText(path.join(PUBLIC_DIR, "index", "index.html"), page("../"));
  await writeText(path.join(PUBLIC_DIR, "index", "dist", "index.html"), page("../../"));
}

const state = {
  registry: await readJson("public/locales/registry.json")
};

async function main() {
  const textbooks = await loadTextbooks();
  const kanaCourses = await loadKanaCourses();
  const cards = await loadKanjiCards();

  await safeRemoveInsidePublic("ru");
  await safeRemoveInsidePublic("en");
  await safeRemoveInsidePublic("es");
  await safeRemoveInsidePublic("kanji");
  await safeRemoveInsidePublic("assets/ru");
  await safeRemoveInsidePublic("assets/en");
  await writeCss();

  for (const locale of SEO_LOCALES) {
    await writeLocalizedHome(locale, textbooks, kanaCourses);
    await writeTextbookHub(locale, textbooks, kanaCourses);
    await writeKanjiHub(locale, cards);
    for (const course of kanaCourses) {
      await writeKanaCoursePage(locale, course);
    }
    for (const textbook of textbooks) {
      await writeTextbookLevel(locale, textbook);
    }
  }

  for (const card of cards) {
    await writeKanjiPage("en", card);
    await writeKanjiPage("ru", card);
  }
  for (const card of cards.slice(0, PILOT_ES_KANJI_LIMIT)) {
    await writeKanjiPage("es", card);
  }

  await writeDownloadPages();
  await writeLegacyMap(cards);
  await writeLegacyRedirectPages();

  const mainUrls = ["/", "/download/"];
  const urlsByGroup = { main: mainUrls };
  for (const locale of INDEXABLE_LOCALES) {
    const urls = [
      localePath(state.registry, locale, "/"),
      localePath(state.registry, locale, "/textbooks/"),
      ...kanaCourses.map((course) => localePath(state.registry, locale, `/textbooks/${course.slug}/`)),
      ...JLPT_LEVELS.map((level) => localePath(state.registry, locale, `/textbooks/${level}/`)),
      localePath(state.registry, locale, "/kanji/"),
      localePath(state.registry, locale, "/download/")
    ];
    for (const card of cards) {
      if (isKanjiIndexable(card, locale)) {
        urls.push(localePath(state.registry, locale, `/kanji/${stableKanjiSlug(card)}/`));
      }
    }
    urlsByGroup[locale] = urls;
  }
  await writeSitemaps(urlsByGroup);

  const summary = {
    generatedAt: new Date(0).toISOString(),
    canonicalBase: SITE_URL,
    locales: SEO_LOCALES,
    indexableLocales: INDEXABLE_LOCALES,
    kanaCourses: kanaCourses.map((item) => ({ slug: item.slug, ...item.stats })),
    textbookLevels: textbooks.map((item) => ({ level: item.level, ...item.counts })),
    kanjiPages: {
      en: cards.length,
      ru: cards.length,
      es: PILOT_ES_KANJI_LIMIT,
      ruIndexable: cards.filter((card) => isKanjiIndexable(card, "ru")).length,
      enIndexable: cards.filter((card) => isKanjiIndexable(card, "en")).length
    },
    sitemapUrls: Object.fromEntries(Object.entries(urlsByGroup).map(([key, urls]) => [key, urls.length]))
  };
  await writeText(path.join(PUBLIC_DIR, "seo-report.json"), `${JSON.stringify(summary, null, 2)}\n`);
  console.log(`Generated SEO foundation: ${summary.kanjiPages.en} EN kanji, ${summary.kanjiPages.ruIndexable} RU indexable kanji, ${PILOT_ES_KANJI_LIMIT} ES pilot kanji.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
