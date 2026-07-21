# Flash Kanji recovery report

Date: 2026-07-21

## 1. Real entry point

Before recovery, GitHub Pages uploaded `index/` without a build. The actual document was `index/index.html`; it directly executed `index/script.js`. `index/src/main.ts` was an inactive placeholder.

After recovery, `index/index.html` loads `/src/main.ts` during Vite compilation. `src/main.ts` imports the stylesheet and preserved application runtime. Production HTML points only to hashed bundles in `dist/assets`.

## 2. Why `#review` rendered Textbooks

The old `readRouteSource()` returned a `textbooks`/`jlpt` pathname before checking the hash. Thus `/textbooks/#review` was parsed as `textbooks`. The new parser reads `location.hash` as the sole selected-route source. `state.route`, active navigation and rendered page all derive from that result.

## 3. Duplicate directories

- `index/assets/index/src` duplicated `index/src`.
- `index/assets/index/data` duplicated part of `index/data`.
- The whole `index/assets/index` tree was a nested application copy.
- `index/dist` and root `dist` were generated artifacts.
- root/index `node_modules` and root `.pnpm-store` were generated dependencies.

The pre-cleanup inventory is in `ARCHITECTURE_AUDIT.md`.

## 4. Files removed from active source/deployment

The following were removed from the active source tree and placed in ignored `recovery/architecture-cleanup` rather than destructively discarded:

- nested `index/assets/index` application copy;
- `index/script.ts` parallel monolith;
- `index/script.js.bak`, `styles.css.bak`, `styles.css.bak2`;
- `data/eva-sprites.json.bak`;
- duplicate `src/audio/soundManager.js` after switching runtime to `soundManager.ts`;
- obsolete `pnpm-lock.yaml` and `pnpm-workspace.yaml` after standardizing CI on `npm ci`.

Generated dependency/build/temp paths are excluded by the new root `.gitignore`. They are never uploaded.

## 5. Files moved

- `index/script.js` → `index/src/app.js` (preserved UI/runtime, now reachable only through Vite).
- `index/styles.css` → `index/src/styles.css` (hashed by Vite).
- fetch-addressed `data`, images/assets, audio, vendor script, manifest, service worker, wiki/static pages, robots/sitemap, CNAME and `.nojekyll` → `index/public` (guaranteed copy to `dist`).

Router, SRS and LocalStorage normalization were extracted into `src/router.ts`, `src/services/srs.ts` and `src/services/storage.ts` and are used by the live runtime.

## 6. Router

- One `hashchange` subscription is installed by `installHashRouter`.
- `parseHash(location.hash)` is the selected-route source; legacy `#jlpt/Nx` hashes map to Textbooks.
- Route changes reset the old review session when appropriate and render from the current state.
- Every render gets a monotonically increasing token and `AbortController`; beginning a newer render aborts and invalidates the old context.
- The render boundary catches failures, clears/replaces page content with an error screen, and logs route, generated build ID and stack.
- Delayed data completion calls render against the current route and cannot restore old route content.

## 7. SRS

- One scheduling implementation is exported from `src/services/srs.ts` and used by the runtime.
- Canonical card state uses `state`, `dueAt` and `reviewCount`.
- Legacy `stage`, `nextReview`, `reviews` and `lastReview` are accepted during migration, then removed without losing progress.
- A review session freezes a deduplicated ordered key snapshot. Newly due items do not enter the active session.
- `Again` schedules the card five minutes later; it completes the current snapshot item and never increases the initial session size.
- Review displays Due now, Remaining, Learning later and Total SRS separately.

## 8. Verification results

- `npm ci`: pass (lockfile reproduced successfully).
- `npm run typecheck`: pass.
- `npm run lint`: pass.
- `npm test`: pass, 3 files / 9 tests.
- `npm run build`: pass.
- `npm run test:compat`: pass; all four legacy bundles parse as ES5.
- `npm run test:e2e`: pass, 3/3 on mobile Chromium (Pixel 5 profile).

E2E covers direct/reloaded `#review`, Home → Review → Textbooks → Review, active nav/content agreement, and a delayed Textbooks response followed by Review.

## 9. `dist` contents

Final audit found 10,023 files, 371.99 MiB:

- hashed modern and legacy JS, hashed CSS, source maps and polyfills under `assets`;
- 252 JSON files and every file from `public` (zero missing);
- 473 images plus audio;
- `manifest.webmanifest`, `service-worker.js`, CNAME, `.nojekyll`, robots and sitemap;
- static RU/EN kanji and textbook pages.

No `src`, `tools`, dependency directory, TypeScript, package lock, pnpm file or backup is present in `dist`.

## 10. GitHub Pages

`.github/workflows/deploy-pages.yml` now runs, in order: `npm ci`, typecheck, lint, unit/integration tests, build, legacy syntax verification and Playwright. Only `index/dist` is passed to `actions/upload-pages-artifact`; deploy runs only after all preceding steps succeed.

## 11. Manual Android WebView checks

1. Open the deployed URL on the oldest supported Android/WebView and confirm no blank boot screen.
2. Open `#review`, reload, background/restore the app, and verify Review remains active.
3. Navigate Home → Review → Textbooks → Review rapidly and compare hash, highlighted bottom nav and heading/content.
4. Enable slow network throttling, open Textbooks, immediately switch to Review, and verify Textbooks never replaces it.
5. Complete one review with Again; confirm Remaining decreases and the card returns only after five minutes or in a new session.
6. Close/reopen WebView and verify old LocalStorage progress, streak, lesson completion and SRS counters remain.
7. Corrupt a disposable test profile's progress JSON and verify the app shows a usable fresh state instead of crashing.
8. Install the PWA, go offline after one successful online load, and verify shell/data previously visited can open.
9. Deploy a second build and confirm the service worker updates without a reload loop or stale manually versioned URL.
10. Check sound unlock, writing canvas, import/export and notification permission on a physical device.

Non-blocking build notes: Vite reports that several CSS URLs remain runtime-relative because those images deliberately live in `public`, and it reports the preserved core UI chunk as larger than 500 kB. Both modern and legacy artifacts are emitted successfully; the legacy artifact passes the explicit ES5 syntax gate.
