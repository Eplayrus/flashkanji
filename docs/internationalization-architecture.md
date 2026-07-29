# Архитектура международной адаптации Flash Kanji

## Текущее состояние проекта

Flash Kanji сейчас — front-end приложение в папке `index/`, собираемое Vite. GitHub Pages публикует результат `index/dist` как корень домена. Основной интерфейс находится в `index/src/app.js`, точка входа — `index/src/main.ts`, hash-router — `index/src/router.ts`.

Данные приложения лежат в `index/public/data/`:

- `data/i18n.json` — текущий монолитный RU/EN словарь интерфейса;
- `data/jlpt/index.json` — каталог JLPT-учебников;
- `data/jlpt/n5` ... `data/jlpt/n1` — `meta.json`, `lessons.json`, `kanji.json`, `grammar.json`, `reading.json`, `listening.json`, `tests.json`;
- `data/kanji/translations.json` — сейчас в основном английский слой (`meaning_en`, `interface_use_en`);
- `data/changelog.json` — changelog для интерфейса;
- `data/lessons/generated*` — сгенерированные уроки, завязанные на существующие `cardId`/`lessonId`.

Прогресс пользователя хранится в LocalStorage и SRS не должен зависеть от языка интерфейса. Поэтому при интернационализации нельзя менять `cardId`, `courseCardId`, `lessonId`, `jlpt` и ключи прогресса.

## Что изменено в foundation

Добавлен единый реестр локалей:

```text
index/public/locales/registry.json
```

`index/src/services/i18n.ts` больше не зашит в `type Language = "ru" | "en"`. Он импортирует registry и предоставляет:

- `LocaleCode`;
- `LOCALES`;
- `normalizeLocale`;
- `localeFromUrlSegment`;
- `urlSegmentForLocale`;
- `directionForLocale`;
- `fallbackChain`;
- `localized`;
- `interpolate`;
- `pluralize`;
- `formatNumber`;
- `formatDate`;
- `applyDocumentLocale`;
- `loadLocaleNamespace`;
- `pseudoLocalize`;
- миграцию старого `flashKanji.language` в `flashKanji.locale`.

Минимальная namespace-структура уже создана для `ru`, `en`, `es`:

```text
index/public/locales/
  registry.json
  ru/
    common.json
    navigation.json
    home.json
    textbooks.json
    seo.json
  en/
    common.json
    navigation.json
    home.json
    textbooks.json
    seo.json
  es/
    common.json
    navigation.json
    home.json
    textbooks.json
    seo.json
```

`es` — пилотная локаль. Она существует технически, но имеет `seoStatus: "noindex"` до человеческой редакторской проверки.

## Целевая модель locale registry

Каждая локаль описывается одним объектом:

```ts
{
  code: "pt-BR",
  urlSegment: "pt-br",
  hreflang: "pt-BR",
  nativeName: "Português do Brasil",
  englishName: "Brazilian Portuguese",
  direction: "ltr",
  intlLocale: "pt-BR",
  fallbackLocale: "en",
  publicationStatus: "planned",
  uiStatus: "planned",
  contentStatus: "planned",
  seoStatus: "planned",
  translationCompleteness: 0,
  tts: {
    preferredLang: "pt-BR",
    japaneseVoiceLang: "ja-JP"
  },
  formatting: {
    numberingSystem: "latn",
    calendar: "gregory"
  },
  fontStack: "Inter, system-ui, sans-serif"
}
```

Важно: `urlSegment` и `hreflang` не обязаны совпадать. Например:

- URL: `/pt-br/`, hreflang: `pt-BR`;
- URL: `/zh-cn/`, hreflang: `zh-Hans`;
- URL: `/zh-tw/`, hreflang: `zh-Hant`.

## Загрузка переводов

Нельзя грузить все языки при старте. Целевая схема:

1. При запуске приложения грузить только `common` + `navigation` текущей локали.
2. При открытии учебников — `textbooks` + нужный lesson namespace.
3. При открытии словаря — `dictionary`.
4. При открытии changelog — `changelog`.
5. При ошибке — `errors`.
6. Fallback-локаль грузить только при отсутствующем ключе, с коротким memory-cache.

Пример namespace-пути:

```text
public/locales/ru/review.json
public/locales/en/review.json
public/locales/es/review.json
```

## Формат сообщений

Простое сложение строк не подходит для Flash Kanji. Нужны:

- интерполяция: `Выполнено {done} из {total}`;
- plural rules: `1 карточка`, `2 карточки`, `5 карточек`;
- select: разные формулировки для `onyomi`, `kunyomi`, `mixed`;
- числа, проценты, даты, относительное время через `Intl`;
- списки через `Intl.ListFormat`.

Foundation уже покрывает `Intl.PluralRules`, `Intl.NumberFormat`, `Intl.DateTimeFormat` и тесты для `ru`, `en`, `pl`, `uk`, `ar`, `fr`, `zh-Hans`.

## Разделение японского источника и локализуемого слоя

Не нужно дублировать японский оригинал в каждом языке.

Японский source слой:

- `kanji`;
- readings;
- Japanese words;
- Japanese sentences;
- grammar patterns;
- stroke/order identifiers.

Локализуемый слой:

- meanings;
- explanations;
- hints;
- mnemonics;
- exercise instructions;
- answer explanations;
- lesson goals;
- reading/listening translations;
- SEO title/description.

Целевая модель:

```text
contentId -> Japanese source -> translations by locale
```

Существующие `cardId`, `courseCardId`, `lessonId` сохраняются. Прогресс SRS должен продолжать ссылаться на content id, а не на перевод.

## SPA language switch

При переключении языка SPA должна обновлять:

```ts
document.documentElement.lang = locale.hreflang;
document.documentElement.dir = locale.direction;
```

Для `ar` обязательно `dir="rtl"`. Сейчас это покрыто `applyDocumentLocale()` и unit-тестом, но `index/src/app.js` ещё использует собственную runtime-логику `localized()` и должен быть мигрирован поэтапно.

## Pseudo-locale

Добавлен `en-XA`:

- не публикуется в SEO;
- не должен попадать в production language selector;
- удлиняет строки;
- помогает найти обрезания UI;
- работает через `pseudoLocalize()`.

## Риски миграции

- `index/src/app.js` большой и содержит собственные локализационные helpers. Его нельзя переписать одним махом без риска сломать уроки и LocalStorage.
- В учебных данных встречается mixed-language fallback: часть RU/EN kanji meanings не является переводом нужной локали.
- N1/N2 обновлялись недавно, поэтому SEO-страницы должны генерироваться из `meta.json`/`lessons.json`, а не хранить числа вручную.
- Service worker не должен precache все локали и все kanji pages.

## Минимальные критерии готовности этапа foundation

- `npm run validate:i18n`;
- `npm run validate:seo`;
- `npm run test`;
- `npm run build`;
- `/ru/`, `/en/`, `/es/` существуют как реальные HTML-страницы;
- `es` noindex до human review;
- sitemap содержит только canonical indexable URLs;
- `cardId`/`lessonId` не изменены.
