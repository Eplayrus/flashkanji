# Flash Kanji source layout

Runtime files are intentionally static for the first stage: `index.html`, `styles.css`, `script.js`, JSON data, assets and the service worker.

The `src/` tree keeps the TypeScript domain boundaries for the next stage:

- `pages/` route-level screens.
- `components/` reusable UI pieces.
- `services/` data loading, SRS and LocalStorage.
- `data/` data adapters and future API mappings.
- `styles/` design tokens and theme modules.
- `assets/` app-owned visual asset notes.
- `mascot/` Eva and Leia behavior.
- `utils/` shared helpers.

When a bundler is introduced, `script.js` can be split into these modules without changing the JSON data contract.
