# Yandex.Metrika SPA tracking

## Scope

Flash Kanji uses one Yandex.Metrika counter: `109492033`. The counter is still loaded lazily from `index/index.html`; the SPA code only adds virtual pageviews and goals on top of the existing queue stub. No second counter is created.

The implementation lives in:

- `index/index.html` — delayed counter bootstrap and initial clean virtual URL.
- `index/src/services/metrika.ts` — route-to-virtual-path mapping, de-duplication, safe goal params and debug logging.
- `index/src/app.js` — product events wired to route changes and real completion actions.

## Virtual route table

| App route | Virtual path |
| --- | --- |
| `#home` | `/app/home` |
| `#learn` | `/app/learn` |
| `#learn/lesson/{lessonId}` | `/app/learn/lesson/{lessonId}` |
| `#learn/legacy/{lessonId}` | `/app/learn/legacy/{lessonId}` |
| `#textbooks` | `/app/textbooks` |
| `#textbooks/N5` ... `#textbooks/N1` | `/app/textbooks/n5` ... `/app/textbooks/n1` |
| `#textbooks/N5/{lessonId}` ... `#textbooks/N1/{lessonId}` | `/app/textbooks/n5/{lessonId}` ... `/app/textbooks/n1/{lessonId}` |
| `#review` | `/app/review` |
| `#dictionary` | `/app/dictionary` |
| `#kanji/{cardId}` | `/app/kanji/{cardId}` |
| `#writing` | `/app/writing` |
| `#stats` | `/app/stats` |
| `#achievements` | `/app/achievements` |
| `#eva-room` | `/app/eva-room` |
| `#download` | `/app/download` |
| `#about` | `/app/about` |
| `#jlpt-lesson/N5` ... `#jlpt-lesson/N1` | `/app/jlpt-lesson/n5` ... `/app/jlpt-lesson/n1` |
| Unknown or invalid route | `/app/not-found` |

The first pageview is handled by `ym(..., "init", { url })`. The app primes the same virtual path in `window.__FLASH_KANJI_METRIKA_INITIAL_PATH`, so it does not send an extra `hit` during initial render. Subsequent route changes send:

```js
window.ym(109492033, "hit", virtualPath, { title, referer: previousVirtualPath })
```

Repeated renders with the same virtual path are skipped.

## What is not a pageview

These actions must not send virtual hits:

- card flips;
- “remember / forgot” answers;
- active card changes inside a review or lesson session;
- hints;
- TTS playback;
- filters and UI renders;
- XP/reward animations;
- autosave;
- repeated navigation to the same hash.

## Goals

Allowed goals:

- `learning_start`
- `lesson_open`
- `lesson_complete`
- `review_open`
- `review_session_complete`
- `kanji_open`
- `writing_complete`
- `final_test_start`
- `final_test_complete`
- `final_test_pass`
- `progress_export`
- `apk_download`
- `pwa_install_click`
- `pwa_installed`
- `share_opened`
- `share_completed`
- `share_link_copied`
- `social_{network}_opened`

Goal params are allowlisted to:

- `route`
- `level`
- `lessonId`
- `cardId`
- `source`

The analytics layer intentionally drops user-entered text, imported save content, LocalStorage snapshots, search text, user agent data and unknown params.

## De-duplication

- Pageviews are de-duplicated by the last virtual path.
- `pwa_installed` is de-duplicated once per app session.
- Completion goals use deterministic keys such as `level:lessonId`, final-test completion timestamps, and review session start time.

## Debug mode

Open the app with `?debugMetrika=1` to enable concise console diagnostics:

- virtual path;
- title;
- previous virtual path;
- goal name;
- sanitized goal params;
- duplicate/skip reason.

Debug logs do not include user progress dumps or personal content. Normal mode does not add extra logs.

## Verification

Run from `index/`:

```bash
npm test
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

In Yandex.Metrika, check that reports contain `/app/...` paths instead of duplicated `/#...` and `/index/dist/#...` URLs, and that card-answer clicks do not create extra pageviews.
