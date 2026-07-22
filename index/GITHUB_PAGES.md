# GitHub Pages deployment

Flash Kanji is a static frontend PWA. It does not need a backend for the current stage.

## Recommended setup

1. Push this repository to GitHub.
2. Go to repository `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to `main` or run the workflow manually.

The workflow `.github/workflows/deploy-pages.yml` installs dependencies in `index/`,
builds the Vite app, and publishes a clean static artifact:

- `/index.html` and `/404.html` redirect users to `/index/dist/#home`.
- `/index/` redirects users to `/index/dist/#home`.
- `/index/dist/` contains the built shell plus the legacy static runtime:
  `script.js`, `styles.css`, `data/`, `assets/`, `audio/`, `vendor/` and the
  app service worker.
- `/assets/` contains hashed Vite build assets referenced by the built shell.
- `/index/assets/`, `/index/styles.css`, and `/index/kanji-page.css` are
  compatibility aliases for older crawlable pages.
- `/service-worker.js` is only a cleanup worker for old root-scope caches.
- `/ru/` and `/en/` keep the crawlable public pages.

## Runtime storage

- Lessons, kanji metadata, hints, dialogues, achievements and monetization placeholders are JSON files under `index/data/`.
- User progress, SRS state, favorites, streaks and Moon Fragment transactions are stored in `localStorage`.
- Offline support is handled by `index/dist/service-worker.js`.

## Important

Do not deploy `index/dist/index.html` by itself. It must ship with both hashed
Vite assets and the legacy runtime files above. If any of them are missing, the
browser shows the unstyled fallback shell instead of the app.
