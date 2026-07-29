# Workflow переводов Flash Kanji

## Принцип

Flash Kanji нельзя переводить одним prompt на все языки. Сначала переводится инфраструктура и небольшой проверяемый слой, затем учебный корпус расширяется партиями с reviewer process.

## Источники истины

Source of truth:

- `index/public/locales/registry.json` — список локалей и статусы;
- `index/public/locales/{locale}/{namespace}.json` — UI namespaces;
- `index/public/data/jlpt/{level}/meta.json` — counts и metadata учебника;
- `index/public/data/jlpt/{level}/lessons.json` — уроки;
- `index/public/data/jlpt/{level}/kanji.json` — kanji cards;
- `index/public/data/kanji/translations.json` — cross-course translation layer;
- `index/tools/generate-seo.mjs` — SEO output;
- `index/tools/validate-i18n.mjs` и `index/tools/validate-seo.mjs` — gates.

Нельзя считать source of truth:

- README;
- старые generated HTML;
- комментарии в коде;
- `index/dist`, если он не пересобран из текущих исходников.

## Namespace workflow

Для каждого нового языка:

1. Добавить locale в `registry.json` со статусом `planned`.
2. Создать минимальные namespaces:
   - `common.json`;
   - `navigation.json`;
   - `home.json`;
   - `textbooks.json`;
   - `seo.json`.
3. Запустить:

```bash
npm run validate:i18n
```

4. Если UI pilot готов, поставить:

```json
{
  "publicationStatus": "pilot",
  "uiStatus": "pilot",
  "seoStatus": "noindex"
}
```

5. Не добавлять locale в sitemap до редакторской проверки.

## Учебный content workflow

Каждая единица контента должна иметь стабильный ID:

```text
cardId
courseCardId
lessonId
grammarId
readingId
listeningId
```

Переводчик получает пакет:

```text
source id
Japanese source
current ru/en translation
target locale
context: JLPT level, lesson, examples
SEO constraints
```

Результат:

```json
{
  "id": "n5-001",
  "locale": "es",
  "meaning": "día; sol",
  "examples": [
    {
      "sourceWord": "日本",
      "translation": "Japón"
    }
  ],
  "reviewStatus": "reviewed",
  "reviewer": "human",
  "updatedAt": "content-version-or-git-derived"
}
```

Для текущего foundation отдельный translation memory ещё не введён; документ фиксирует целевую модель.

## Запрещённые действия

- публиковать непроверенный machine translation как indexable SEO;
- использовать English fallback внутри RU/ES pages без маркировки;
- canonicalize все локали на English;
- добавлять hreflang для отсутствующего перевода;
- менять `cardId`/`lessonId`;
- хранить весь UI в одном огромном JSON;
- грузить все локали при старте;
- вручную редактировать `index/dist`;
- выставлять всем sitemap URLs сегодняшний `lastmod`.

## SEO translation workflow

Для каждой indexable страницы нужны:

- unique `<title>`;
- localized `<meta name="description">`;
- self canonical;
- reciprocal hreflang;
- valid JSON-LD;
- visible content на том же языке;
- no mixed fallback.

Если перевод не готов:

- страница может существовать для QA;
- ставится `noindex, follow`;
- страница не попадает в sitemap;
- страница не включается в hreflang других indexable pages.

## Review gates

Перед изменением `seoStatus` на `indexable`:

```bash
npm run generate:seo
npm run validate:i18n
npm run validate:seo
npm run test
npm run build
```

Для UI runtime:

```bash
npm run typecheck
npm run lint
npm run test:e2e
```

## Human review checklist

Reviewer проверяет:

1. Термины `JLPT`, `SRS`, `onyomi`, `kunyomi` не искажены.
2. Japanese source не переведён случайно.
3. Meaning краткий и учебно полезный.
4. Example translations соответствуют Japanese word/sentence.
5. Title/description естественные и не дублируются.
6. Нет English fallback.
7. Нет mojibake.
8. UI не обрезается на 360–430 px.
9. Для RTL locale нет зеркальных багов.
10. TTS locale config не мешает Japanese voice `ja-JP`.

## Rollback

Если новая локаль ломает сборку:

1. Вернуть её `publicationStatus` в `planned`.
2. Вернуть `seoStatus` в `planned` или `noindex`.
3. Удалить locale из sitemap/hreflang через `npm run generate:seo`.
4. Не трогать LocalStorage и SRS.
5. Откатить только translation files и generated SEO output.

## CI

`.github/workflows/deploy-pages.yml` теперь запускает:

```text
npm ci
npm run typecheck
npm run lint
npm test
npm run validate:n1
npm run generate:seo
npm run validate:i18n
npm run validate:seo
npm run build
npm run perf:bundle
npm run test:e2e
```

Цель: не допустить ситуацию, когда приложение обновилось, а public SEO-страницы остались от старой версии.
