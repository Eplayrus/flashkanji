# GitHub Pages deployment

Flash Kanji is a static frontend PWA. It does not need a backend for the current stage.

## Recommended setup

1. Push this repository to GitHub.
2. Go to repository `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to `main` or run the workflow manually.

The workflow `.github/workflows/deploy-pages.yml` publishes the `index/` folder as the site root.

## Runtime storage

- Lessons, kanji metadata, hints, dialogues, achievements and monetization placeholders are JSON files under `index/data/`.
- User progress, SRS state, favorites, streaks and Moon Fragment transactions are stored in `localStorage`.
- Offline support is handled by `service-worker.js`.

## Important

Do not deploy the repository root as the site root unless you add a root redirect yourself. The app entry point is `index/index.html`, and the GitHub Actions workflow already handles this by uploading `index/`.
