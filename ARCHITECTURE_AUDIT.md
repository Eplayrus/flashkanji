# Flash Kanji architecture audit

Audit date: 2026-07-21. No files were deleted before this inventory was completed.

## Runtime entry points before recovery

- GitHub Pages uploaded `index/` directly from `.github/workflows/deploy-pages.yml`; it did not install dependencies or run Vite.
- The published document was therefore `index/index.html` at the artifact root (the same document served for the application URL).
- That HTML loaded `index/script.js?v=2026-07-18-route-fix-v67` and `index/styles.css` directly.
- `index/src/main.ts` was an empty placeholder. None of the TypeScript services under `index/src` participated in the runtime.
- `index/script.ts` was another parallel, non-runtime copy of the monolith.

## Implementations and duplicates

| path | used by runtime | duplicate | safe to remove | reason |
| --- | --- | --- | --- | --- |
| `index/index.html` | yes | `index/assets/index.html` | no | real Pages HTML entry |
| `index/script.js` | yes | `index/script.ts`, `index/script.js.bak` | after migration | direct runtime monolith |
| `index/src/main.ts` | no | none | no | intended Vite entry, previously empty |
| `index/src/services/srs.ts` | no | runtime SRS inside `script.js`; copied under `assets/index/src` | replace | inactive alternative implementation with duplicate fields |
| `index/src/services/storage.ts` | no | runtime storage inside `script.js`; copied under `assets/index/src` | replace | inactive alternative implementation |
| router functions in `index/script.js` | yes | parallel copy in `script.ts` | after migration | only live router and only `hashchange` listener |
| `index/service-worker.js` | yes | root worker and `index/assets/index/service-worker.js` | replace/remove copies | live worker was registered from the monolith |
| `index/src` | no | `index/assets/index/src` (22 copied files) | copied tree yes | asset tree must not contain source application |
| `index/data` | yes | `index/assets/index/data` (161 copied files) | copied tree yes | fetches use `data/*.json` from the app root |
| `index/assets/index` | partially reachable but not canonical | nested copy of the application | yes | contains HTML/source/data/worker copies and must not be published |
| `index/dist`, root `dist` | no | generated builds | yes/ignored | build output |
| root/index `node_modules`, `.pnpm-store` | no | generated dependencies | ignore/untrack | never deployment input |
| `*.bak`, logs, QA/tmp images | no | backups/temporary output | ignore/remove | not source or runtime assets |

Counts recorded before cleanup: `index/src` 23 files; `index/assets/index/src` 22 files; `index/data` 255 files; `index/assets/index/data` 161 files.

## Root cause of `#review` rendering Textbooks

`readRouteSource()` inspected `location.pathname` first and returned any path beginning with `textbooks`/`jlpt`, ignoring a present hash. On a URL such as `/textbooks/#review`, `readRouteHash()` therefore returned `textbooks`. This violated the required invariant that `location.hash` is the selected route.

## Recovery decisions

- `index/src/main.ts` becomes the only application entry and imports the preserved runtime from `src/app.js`.
- Router, SRS migration/scheduling, and storage normalization become testable modules in `src`.
- Fetch-addressed JSON and other stable runtime files move to `index/public`; Vite copies them to the standalone artifact.
- Vite owns JS/CSS hashing; handwritten query-string cache versions are removed.
- GitHub Pages publishes only `index/dist` after all checks.

