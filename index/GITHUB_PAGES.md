# GitHub Pages deployment

Flash Kanji is a static frontend PWA. It does not need a backend for the current stage.

## Recommended setup

1. Push this repository to GitHub.
2. Go to repository `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to `main` or run the workflow manually.

The workflow `.github/workflows/deploy-pages.yml` builds `index/` with Vite and publishes `index/dist` as the site root.

## Runtime storage

- Lessons, kanji metadata, hints, dialogues, achievements and monetization placeholders are JSON files under `index/public/data/`.
- User progress, SRS state, favorites, streaks and Moon Fragment transactions are stored in `localStorage`.
- Offline support is handled by `service-worker.js`.

## Important

Do not deploy the repository root or committed source folders as the site root. The app entry point is `index/index.html`, and the GitHub Actions workflow already handles this by uploading the tested Vite build from `index/dist`.
