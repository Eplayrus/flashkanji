import type { KanjiPageSourceItem, JLPTLevel } from "../types";

export type KanjiPageLanguage = "ru" | "en";

export interface KanjiPageModel {
  lang: KanjiPageLanguage;
  literal: string;
  publicUrl: string;
  alternateUrl: string;
  legacyUrl?: string;
  title: string;
  description: string;
  h1: string;
  item: KanjiPageSourceItem;
  strokeSvg?: string;
  lessonHref?: string;
  writingHref: string;
  reviewHref: string;
}

export interface KanjiPageMeta {
  title: string;
  description: string;
  canonical: string;
  alternate: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  robots: "index, follow" | "noindex, follow";
}

export function highlightKanji(text: string, targetKanji: string): string {
  const target = String(targetKanji || "");
  const source = String(text || "");
  if (!target) return escapeHtml(source);
  return source
    .split(target)
    .map(escapeHtml)
    .join(`<mark class="kanji-hit" data-kanji="${escapeHtml(target)}">${escapeHtml(target)}</mark>`);
}

export function buildKanjiPageModel(
  item: KanjiPageSourceItem | undefined,
  lang: KanjiPageLanguage,
  baseUrl: string,
  legacyUrl?: string
): KanjiPageModel | null {
  if (!item?.literal || !item.kanjidic2 || item.commonWords.length < 6 || item.sentences.length < 4) return null;
  const meaning = item.meanings[lang]?.[0] || item.meanings.en[0] || item.literal;
  const topReadings = [...item.readings.onyomi.slice(0, 2), ...item.readings.kunyomi.slice(0, 2)].join(" / ");
  const publicUrl = `${trimSlash(baseUrl)}/${lang}/kanji/${encodeURIComponent(item.literal)}/`;
  const alternateLang = lang === "ru" ? "en" : "ru";
  const alternateUrl = `${trimSlash(baseUrl)}/${alternateLang}/kanji/${encodeURIComponent(item.literal)}/`;
  const title = `${item.literal} — ${meaning}, ${lang === "ru" ? "чтения" : "readings"} ${topReadings}, JLPT ${item.jlpt} | Flash Kanji`;
  const description = lang === "ru"
    ? `Кандзи ${item.literal}: значения, онъёми и кунъёми, примеры слов, предложения, порядок письма и контекст JLPT ${item.jlpt} в Flash Kanji.`
    : `Kanji ${item.literal}: meanings, onyomi and kunyomi, common words, example sentences, stroke order and JLPT ${item.jlpt} context in Flash Kanji.`;
  return {
    lang,
    literal: item.literal,
    publicUrl,
    alternateUrl,
    legacyUrl,
    title,
    description,
    h1: `${item.literal} — ${meaning}`,
    item,
    lessonHref: item.related.lessonId ? `../../index/index.html#learn` : undefined,
    writingHref: "../../index/index.html#writing",
    reviewHref: "../../index/index.html#review"
  };
}

export function generateKanjiPageMeta(model: KanjiPageModel | null, fallbackUrl: string): KanjiPageMeta {
  if (!model) {
    return {
      title: "Kanji not found | Flash Kanji",
      description: "This kanji page is not available in Flash Kanji yet.",
      canonical: fallbackUrl,
      alternate: fallbackUrl,
      ogTitle: "Kanji not found | Flash Kanji",
      ogDescription: "This kanji page is not available in Flash Kanji yet.",
      ogUrl: fallbackUrl,
      robots: "noindex, follow"
    };
  }
  return {
    title: model.title,
    description: model.description,
    canonical: model.publicUrl,
    alternate: model.alternateUrl,
    ogTitle: model.title,
    ogDescription: model.description,
    ogUrl: model.publicUrl,
    robots: "index, follow"
  };
}

export function generateKanjiJsonLd(model: KanjiPageModel): Array<Record<string, unknown>> {
  const languageName = model.lang === "ru" ? "Russian" : "English";
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Flash Kanji", "item": trimSlash(model.publicUrl).replace(/\/(ru|en)\/kanji\/.+$/, "/") },
        { "@type": "ListItem", "position": 2, "name": model.lang.toUpperCase(), "item": trimSlash(model.publicUrl).replace(/\/kanji\/.+$/, "/") },
        { "@type": "ListItem", "position": 3, "name": "Kanji", "item": trimSlash(model.publicUrl).replace(/\/[^/]+\/$/, "/") },
        { "@type": "ListItem", "position": 4, "name": model.literal, "item": model.publicUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": model.title,
      "description": model.description,
      "url": model.publicUrl,
      "inLanguage": model.lang,
      "isPartOf": { "@type": "WebSite", "name": "Flash Kanji" }
    },
    {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      "name": model.literal,
      "termCode": model.item.kanjidic2.codepoints.unicode,
      "description": model.item.meanings[model.lang].join(", "),
      "inDefinedTermSet": `Flash Kanji ${model.item.jlpt} Kanji`,
      "url": model.publicUrl,
      "additionalType": "Japanese kanji",
      "alternateName": `${languageName} Flash Kanji entry`
    }
  ];
}

export function renderKanjiPage(model: KanjiPageModel): string {
  const item = model.item;
  return `
    <main class="kanji-public-main">
      <nav class="kanji-breadcrumb" aria-label="Breadcrumb">
        <a href="../../">Flash Kanji</a>
        <span>/</span>
        <a href="../">Kanji</a>
        <span>/</span>
        <span aria-current="page">${escapeHtml(model.literal)}</span>
      </nav>
      <article class="kanji-public-article">
        <header class="kanji-public-hero">
          <div class="kanji-public-glyph">${highlightKanji(model.literal, model.literal)}</div>
          <div>
            <h1>${escapeHtml(model.h1)}</h1>
            <p>${escapeHtml(editorialIntro(item, model.lang))}</p>
            <div class="kanji-tag-row">
              <span>JLPT ${escapeHtml(item.jlpt)}</span>
              <span>${item.kanjidic2.strokeCount} ${model.lang === "ru" ? "черты" : "strokes"}</span>
              <span>Grade ${item.kanjidic2.grade ?? "-"}</span>
              <span>Radical ${item.kanjidic2.radical}</span>
              <span>Freq ${item.kanjidic2.freq ?? "-"}</span>
            </div>
          </div>
        </header>
      </article>
    </main>
  `;
}

function editorialIntro(item: KanjiPageSourceItem, lang: KanjiPageLanguage): string {
  const editorial = item.editorial[lang];
  return [editorial.why, editorial.firstSeen].join(" ");
}

function trimSlash(value: string): string {
  return value.replace(/\/+$/, "");
}

function escapeHtml(value: string): string {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char] || char));
}
