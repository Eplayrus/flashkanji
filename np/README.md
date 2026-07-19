# Flash Kanji NP

Isolated front-only prototype for the rewritten lesson flow.

## Run locally

Open `np/index.html` directly with `file://` or serve the `np/` folder with any static server.

Example:

```powershell
python -m http.server 4174 -d np
```

Then open `http://127.0.0.1:4174/`.

## Why fallback data exists

When the app runs from `file://`, `fetch()` can be blocked by the browser. In that case the app falls back to the embedded data in `script.js`, so the UI still works locally.

## Add a new lesson

1. Add the lesson to `data/lessons.json`.
2. Add its kanji to `data/kanji.json` if needed.
3. Give the lesson a unique `id`, `courseId`, `items`, and `steps`.
4. The lesson engine supports `intro`, `multiple_choice_meaning`, `multiple_choice_reading`, `match`, `sentence_choice`, `type_answer`, and `finish`.

## Add a new kanji

1. Add an item to `data/kanji.json`.
2. Include its `id` in one or more lessons.
3. When a lesson is completed, the kanji is added to the review pool.

## Progress storage

Progress is stored in `localStorage` under the key `flashKanjiProgress`.

## Reset progress

Open DevTools and run:

```js
localStorage.removeItem("flashKanjiProgress");
location.reload();
```
