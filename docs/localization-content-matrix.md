# Матрица локализации Flash Kanji

## Статусы

Статусы в `registry.json`:

- `publicationStatus`: `published`, `pilot`, `planned`, `internal`;
- `uiStatus`: готовность интерфейса;
- `contentStatus`: готовность учебного слоя;
- `seoStatus`: можно ли индексировать public pages;
- `translationCompleteness`: приблизительная доля готового перевода.

Пока индексируются только `ru` и `en`. `es` — pilot/noindex.

## Что переводится

Локализуемый слой:

- UI labels;
- title/description;
- lesson goals;
- explanations;
- hints;
- mnemonics;
- exercise instructions;
- answer explanations;
- grammar descriptions;
- reading/listening translations;
- SEO snippets.

Не переводится автоматически:

- Flash Kanji;
- JLPT;
- SRS;
- onyomi;
- kunyomi;
- Japanese words;
- японские символы;
- `cardId`, `lessonId`, `courseCardId`.

## Волна 0 — существующие языки

| Locale | URL | Аудитория | UI | Учебный слой | SEO | Особенности |
|---|---|---:|---|---|---|---|
| `ru` | `/ru/` | высокая текущая | ready | частично ready | indexable с фильтром | часть N1/N2 kanji имеет английский fallback, такие pages noindex |
| `en` | `/en/` | международная | ready | частично ready | indexable с фильтром | часть cards имеет русский fallback, такие pages noindex |

## Волна 1 — приоритетные мировые языки

| Locale | URL | Аудитория | Сложность UI | Учебный объём | Plural rules | TTS | SEO готовность |
|---|---|---:|---|---|---|---|---|
| `es` | `/es/` | высокая | низкая | высокий | простые | хорошее | pilot/noindex до review |
| `pt-BR` | `/pt-br/` | высокая | низкая | высокий | средние | хорошее | planned |
| `de` | `/de/` | средняя | средняя из-за длины слов | высокий | простые | хорошее | planned |
| `fr` | `/fr/` | высокая | средняя | высокий | простые | хорошее | planned |
| `it` | `/it/` | средняя | низкая | высокий | простые | хорошее | planned |
| `pl` | `/pl/` | средняя | высокая | высокий | сложные | среднее | planned |
| `uk` | `/uk/` | высокая для RU-аудитории | средняя | высокий | сложные | среднее | planned |
| `tr` | `/tr/` | средняя | средняя | высокий | простые | среднее | planned |

Риски первой волны:

- длинные немецкие/польские строки ломают карточки;
- `pl` и `uk` требуют качественных plural rules;
- нельзя публиковать SEO до редакторской проверки учебных meanings.

## Волна 2 — Азия и крупные рынки

| Locale | URL | Аудитория | Сложность | Plural/format | TTS | Нужна редактура |
|---|---|---:|---|---|---|---|
| `zh-Hans` | `/zh-cn/` | очень высокая | средняя | простые | хорошее | обязательно, различать японские/китайские термины |
| `zh-Hant` | `/zh-tw/` | высокая | средняя | простые | хорошее | обязательно |
| `ko` | `/ko/` | высокая | средняя | простые | хорошее | обязательно |
| `vi` | `/vi/` | высокая | низкая | простые | среднее | желательно |
| `id` | `/id/` | высокая | низкая | простые | среднее | желательно |
| `th` | `/th/` | средняя | высокая из-за шрифтов/переносов | простые | среднее | обязательно |
| `hi` | `/hi/` | высокая | высокая из-за Devanagari | средние | среднее | обязательно |
| `ar` | `/ar/` | высокая | очень высокая RTL | сложные | среднее | обязательно |

`ar` должен получить `dir="rtl"` и отдельные визуальные проверки desktop/mobile/PWA.

## Волна 3 — дополнительные языки

| Locale | URL | Причина | Сложность | SEO публикация |
|---|---|---|---|---|
| `ja` | `/ja/` | японский интерфейс для immersion | высокая: объяснения не должны дублировать source | planned |
| `nl` | `/nl/` | европейский рынок | низкая | planned |
| `cs` | `/cs/` | европейский рынок | средняя | planned |
| `ro` | `/ro/` | европейский рынок | низкая | planned |
| `hu` | `/hu/` | европейский рынок | средняя | planned |
| `be` | `/be/` | близко к RU/UK аудитории | средняя | planned |
| `kk` | `/kk/` | региональная аудитория | средняя | planned |

## Испанский pilot

Реализовано технически:

- `registry.json` содержит `es`;
- namespace files для `common`, `navigation`, `home`, `textbooks`, `seo`;
- генерируются `/es/`, `/es/textbooks/`, `/es/textbooks/n5/` ... `/n1/`, `/es/kanji/`;
- генерируются 10 pilot kanji pages;
- все `es` SEO pages получают `noindex, follow`;
- `es` не попадает в sitemap и hreflang indexable pages.

До публикации нужно:

1. Проверить испанские UI strings человеком.
2. Перевести N5 public meanings.
3. Проверить SEO title/description на длину и уникальность.
4. Включить `es.seoStatus = "indexable"`.
5. Сгенерировать `sitemap-es.xml`.
6. Добавить `es` в reciprocal hreflang только для реально готовых страниц.

## Контентные риски

- N1/N2 source содержит много fallback meanings.
- Некоторые English meanings фактически на русском.
- Некоторые Russian meanings фактически на английском.
- Примеры могут быть смешанными: Japanese source + translation fields.
- Нельзя менять IDs, иначе SRS и LocalStorage потеряют соответствие.

## Минимальные acceptance checks для новой локали

- namespace schema проходит `validate:i18n`;
- нет mojibake;
- no missing required keys in `common`, `navigation`, `home`, `textbooks`, `seo`;
- plural examples проходят unit tests;
- public pages имеют `html lang`;
- `dir=rtl` для RTL;
- SEO pages не используют fallback как готовый перевод;
- sitemap добавляется только после `seoStatus: indexable`;
- human reviewer подписал учебные meanings и descriptions.
