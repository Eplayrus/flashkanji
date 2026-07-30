# SEO-аудит и план миграции Flash Kanji

## Проверенные источники

Проверены:

- корневой `index.html` репозитория;
- `index/index.html`;
- `index/dist`;
- `.github/workflows/deploy-pages.yml`;
- `index/vite.config.ts`;
- `index/src/router.ts`;
- `index/src/app.js`;
- `index/src/services/i18n.ts`;
- `index/public/data/i18n.json`;
- `index/public/data/kanji/translations.json`;
- `index/public/data/jlpt/n5` ... `n1`;
- `index/public/data/changelog.json`;
- `index/public/manifest.webmanifest`;
- `index/public/service-worker.js`;
- `index/public/robots.txt`;
- `index/public/sitemap.xml`;
- `index/tools/generate-kanji-wiki.mjs`;
- текущие public SEO-страницы `/ru/kanji/`, `/en/kanji/`, `/download/`;
- живые URL `flashkanji.space`.

Живой сайт до миграции показал:

```text
https://flashkanji.space/            -> 200
https://flashkanji.space/index/      -> 200
https://flashkanji.space/index/dist/ -> 200
https://flashkanji.space/ru/         -> 404
https://flashkanji.space/en/         -> 404
https://flashkanji.space/download/   -> 200
https://flashkanji.space/sitemap.xml -> 200
```

Это подтверждает конкуренцию URL-моделей и отсутствие локализованных главных страниц.

## Critical

### 1. Конкурирующие базовые URL

В проекте одновременно встречались:

```text
/
/index/
/index/dist/
/index/index.html
/index/dist/index.html
```

Корневой `index.html` репозитория и старые redirect-shells ссылались на `/index/dist/#home`. `index/public/sitemap.xml` включал `/index/`. OG в корневом shell ссылался на `/index/dist/assets/...`.

Решение foundation:

- каноническая модель: GitHub Actions публикует `index/dist` как корень домена;
- приложение открывается с `/`;
- внутренние публичные ссылки не используют `/index/` и `/index/dist/`;
- `manifest.webmanifest` использует `id: "./"`, `start_url: "./"`;
- service worker notification URLs используют `./#review`, `./#home`, `./#textbooks`;
- sitemap не содержит `/index/`, `/index/dist/`, hash URL.

### 2. `/ru/` и `/en/` отсутствовали

До foundation `index/public/ru/index.html` и `index/public/en/index.html` отсутствовали. На живом сайте оба URL возвращали 404.

Решение:

- `npm run generate:seo` создаёт:
  - `/ru/`;
  - `/en/`;
  - `/es/` pilot noindex;
  - `/ru/textbooks/`, `/en/textbooks/`, `/es/textbooks/`;
  - `/ru/textbooks/n5/` ... `/n1/`;
  - `/en/textbooks/n5/` ... `/n1/`;
  - `/ru/kanji/`, `/en/kanji/`, `/es/kanji/`;
  - `/download/`, `/{locale}/download/`.

### 3. Сломанная генерация kanji SEO

`generate-kanji-wiki.mjs` использовал:

```js
APP_URL = `${BASE_URL}/index/`;
OG_IMAGE = `${BASE_URL}/index/assets/og/flashkanji-og.webp`;
TODAY = new Date().toISOString().slice(0, 10);
```

Также старые страницы попадали в неожиданные места, включая `public/assets/en/kanji`.

Решение:

- добавлен `index/tools/generate-seo.mjs`;
- добавлен общий helper `index/tools/seo-foundation.mjs`;
- generator удаляет legacy `public/kanji`, `public/assets/ru`, `public/assets/en`;
- public kanji pages генерируются заново в чистом UTF-8;
- `lastmod` не проставляется автоматически сегодняшней датой.

### 4. Mixed-language fallback в индексируемых страницах

В данных есть случаи, когда RU field содержит английский текст, а EN field — русский текст. Например N1/N2 kanji могут иметь source fallback вместо готового перевода.

Решение:

- RU kanji page индексируется только если значение похоже на русский перевод;
- EN kanji page индексируется только если значение похоже на английский перевод;
- иначе страница остаётся доступной для пилота/проверки, но получает `noindex, follow`;
- sitemap включает только indexable pages;
- `validate:seo` падает, если индексируемая RU page содержит известный EN fallback или EN page содержит кириллицу как fallback.

## High

### 5. Два формата kanji URL

Встречались:

```text
/ru/kanji/u7d71-suberu/
/ru/kanji/統/
/ru/kanji/u7d71-kanji/
```

Выбран стабильный формат:

```text
/{locale}/kanji/u{unicode}-{primary-romaji}/
```

Пример:

```text
/ru/kanji/u7d71-tou/
/en/kanji/u7d71-tou/
```

`primary-romaji` берётся из первого `onyomi`, затем `kunyomi`, затем fallback romaji. Helper находится в `index/tools/seo-foundation.mjs`:

```js
stableKanjiSlug(card)
```

Миграция legacy:

- `/index/` -> `/`;
- `/index/dist/` -> `/`;
- `/ru/kanji/統/` -> `/ru/kanji/u7d71-tou/`;
- `/en/kanji/統/` -> `/en/kanji/u7d71-tou/`;
- старые slug variants не включаются в sitemap и не конкурируют с canonical.

Таблица примеров генерируется в:

```text
index/public/legacy-url-map.json
```

### 6. Textbook SEO pages не были связаны с source counts

N1 сейчас:

```text
kanjiCount: 1047
lessonCount: 53
grammarCount: 142
readingCount: 8
listeningCount: 6
```

N2 сейчас:

```text
kanjiCount: 380
lessonCount: 38
grammarCount: 120
readingCount: 46
listeningCount: 6
```

Старые SEO-страницы могли хранить числа вручную. Теперь generator читает `meta.json`, а `validate:seo` проверяет `data-source-kanji-count`, `data-source-lesson-count`, `data-source-grammar-count`, `data-source-reading-count`, `data-source-listening-count`.

### 7. Sitemap включал legacy URL

Старый sitemap включал `/index/` и большой набор устаревших страниц. Новый sitemap:

```text
/sitemap.xml
/sitemaps/sitemap-main.xml
/sitemaps/sitemap-ru.xml
/sitemaps/sitemap-en.xml
```

В sitemap нет:

- `/index/`;
- `/index/dist/`;
- hash URL;
- assets;
- JSON;
- service worker;
- noindex pages;
- `es` pilot pages до human review.

Текущий foundation report:

```text
main sitemap URLs: 2
ru sitemap URLs:   1005
en sitemap URLs:   1136
total canonical:   2143
```

## Medium

### 8. Root page была недостаточно полезной

`index/index.html` — SPA shell. В foundation убран source-folder redirect в `/dist/`, canonical оставлен на `/`, hreflang теперь ведёт на `/ru/` и `/en/`, добавлен статический SEO-блок с описанием Flash Kanji и HTML-ссылками.

Следующий этап: сделать root x-default landing аккуратно сверстанной частью shell, а не только fallback-контентом внутри `#app`.

### 9. JSON-LD нужно держать честным

Новый generator добавляет только базовые:

- `WebPage`;
- `SoftwareApplication`;
- `Course`;
- `DefinedTerm`;
- `ItemList`.

`validate:seo` проверяет `JSON.parse` и базовые поля. Расширять schema нужно только если видимый контент страницы действительно это подтверждает.

### 10. Download page

Старая `/download/` была redirect-shell на `index.html#download`. Foundation создаёт настоящую HTML-страницу `/download/` и локализованные варианты `/{locale}/download/`.

## Low

### 11. OG/Twitter assets

Часть старых страниц ссылалась на `/index/assets/...`. Новый generator использует:

```text
https://flashkanji.space/assets/og/flashkanji-og.webp
```

### 12. Root repository shell

Корневой `index.html` репозитория не является Pages artifact при текущем workflow, но остаётся источником путаницы при локальном `python -m http.server`. Его нужно либо удалить из пользовательского пути, либо сделать noindex legacy shell с понятным переходом на `/`.

## Автоматические проверки

Добавлены scripts:

```text
npm run generate:seo
npm run validate:i18n
npm run validate:seo
```

`validate:seo` проверяет:

1. sitemap index и sitemap XML;
2. отсутствие `/index/`, `/index/dist/`, hash URL;
3. существование всех sitemap URL в source tree;
4. ровно один canonical;
5. self canonical;
6. title/description;
7. html lang;
8. JSON-LD parse;
9. hreflang self/x-default/reciprocity;
10. counts из `meta.json`;
11. отсутствие старых N1/N2 counts;
12. отсутствие mixed-language fallback в индексируемых kanji pages;
13. стабильный slug `統 -> u7d71-tou`;
14. noindex pages не попадают в sitemap.

## План миграции

### Этап 0 — foundation

Файлы:

- `index/tools/generate-seo.mjs`;
- `index/tools/seo-foundation.mjs`;
- `index/tools/validate-seo.mjs`;
- `index/tools/validate-i18n.mjs`;
- `index/public/locales/registry.json`;
- `index/public/locales/{ru,en,es}/*.json`;
- `index/public/sitemap.xml`;
- `index/public/sitemaps/*.xml`;
- `index/public/seo-report.json`;
- `index/index.html`;
- `index/public/manifest.webmanifest`;
- `index/public/service-worker.js`;
- `.github/workflows/deploy-pages.yml`.

Критерии:

- `validate:i18n` pass;
- `validate:seo` pass;
- build pass;
- `/ru/`, `/en/`, `/download/` работают как настоящие URLs.

Rollback:

- откатить commit branch;
- удалить generated `public/{ru,en,es,sitemaps,seo-page.css,seo-report.json,legacy-url-map.json}`;
- вернуть старый sitemap.

### Этап 1 — runtime i18n migration

Перенести `app.js` с монолитного `data/i18n.json` на namespace-loader:

- `common`;
- `navigation`;
- `home`;
- `textbooks`;
- `review`;
- `dictionary`;
- `profile`;
- `changelog`;
- `errors`.

Критерии:

- localStorage не сброшен;
- RU/EN UI совпадает с текущим;
- `document.lang/dir` обновляется;
- initial bundle не растёт.

### Этап 2 — Spanish pilot review

Перевести и проверить:

- UI shell;
- `/es/`;
- `/es/textbooks/`;
- N5 landing;
- 10 kanji pages;
- download page.

После human review:

- `es.seoStatus -> indexable`;
- добавить `sitemap-es.xml`;
- включить `es` в hreflang для реально готовых страниц.

### Этап 3 — первая волна

`pt-BR`, `de`, `fr`, `it`, `pl`, `uk`, `tr`.

### Этап 4 — азиатские языки

`zh-Hans`, `zh-Hant`, `ko`, `vi`, `id`, `th`, `hi`.

### Этап 5 — RTL и дополнительные европейские языки

`ar`, `ja`, `nl`, `cs`, `ro`, `hu`, `be`, `kk`.
