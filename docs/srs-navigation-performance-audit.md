# SRS, enrollment and navigation performance audit

Branch: `codex/fix-shop-srs-ui-regressions`. Baseline: `50d9d876`.
Environment: Windows, local Vite production preview, isolated Playwright Chromium
profiles; mobile CPU measurements use CDP 4× throttling, not a physical Android device.
No production storage was cleared, no remote changes were made.

## Root causes and changes

### 1. Backlog was used as an active session

`renderReview → getReviewQueueItems → resetReviewSession` froze **all** due keys.
When that list became empty, `getReviewQueueItems` silently created another session.
The service `createReviewSession` was not the source of the application's session
policy. Only one study card was rendered already; the bug was the unbounded session
and repeated whole-backlog work, not 150 visible study cards.

The app now uses the canonical service: four kanji/kana cards and at most one
exercise, frozen at session creation. The total due backlog is independent of the
remaining batch. Answers remove only their active key; finishing shows a result
and an explicit next-batch button. New, future, invalid-date, duplicate and
unresolvable content IDs are excluded. `calculateNextProgress` is unchanged.

### 2. Course completion did not reliably enroll introduced signs

Passing a kana lesson previously enrolled only missing records through an
answer-like path; already-materialized default New records were skipped. Completed
legacy lessons could have no SRS entries. Kanji
completion also depended on individual card interactions instead of the lesson's
introduced-card set.

`enrollMissingCards` now adds every introduced sign when completion rules are met,
without recording a fictitious answer or awarding XP. New entries are Learning,
due in five minutes. Existing intervals, due times and histories are preserved.
For kana, `completed` means submitted; only `passed` satisfies the course's rules.
Voiced/small kana in lesson content are valid review signs; mastery of the 46 base
symbols remains separate. JLPT completion uses the existing resolver.

Legacy repair runs at snapshot/content hydration with per-course `*-v1`
checkpoints, invalidated by new content, imported progress or completion facts.
It is not a route/render hook. Known aliases are reconciled without deleting the
original records; visible review totals do not count archived aliases twice.

### 3. Warm Home navigation recomputed the review universe

`route action → router coordinator → renderNow → syncChrome → getReviewQueueCount
→ currentReviewQueueItemsSnapshot → getJlptReviewPoolCards → compareStudyCards
→ getCardProgress → migrateCardProgress` repeatedly sorted the whole catalog and
normalized/materialized unrelated records. Course getters also deep-merged
progress while reading it. This was CPU work on the in-memory snapshot, **not
repeated LocalStorage reads** on every Home transition.

On the baseline's 700-card/40-history fixture, a single sampled Home transition
made about 20,900 `getCardProgress` calls; `syncChrome` dominated the render.
The fix normalizes each loaded record once, preserves course snapshot identities,
does not sort the full catalog merely to count due items, and caches the validated
backlog. Actual progress saves/content hydration/import invalidate derived data.
Outside a frozen session the due cache also expires after 30 seconds.

### 4. A second bottleneck was hidden in exercise-history hydration

With 90 saved JLPT exercise entries, each loaded course triggered full hydration
of all levels. The CPU profile followed:

`ensureJlptCourseData → hydrateProgress → seedTextbookExercisesFromCourse
→ buildN1LessonExercises → n1OptionSet → n1AllCards → mergeN1CardDetail`.

Repeated catalog copying and garbage collection consumed several seconds.
Hydration now scopes exercise normalization to the arriving course, immutable
JLPT card lists are cached, and saved exercises resolve through a per-lesson
index instead of generating exercises for every lesson in every course.
Empty saved reading maps no longer trigger markdown exercise generation.

### 5. Review sentence practice performed unused work

A separate 15-second, 4× CPU profile of Review recorded roughly 5,174 ms in
`stableHash`, plus repeated tile deduplication and example-reading scans.
`renderSentencePractice → getAvailableSentenceExercises → buildSentenceTiles`
built/shuffled answers for every candidate. Dynamic examples were generated in
full and only then truncated to the existing 160-item limit.

Eligibility now counts answer/distractor slots with equivalent semantics, covered
by a unit comparison against the old tile-count rule. The generator stops at the
same first 160 results; immutable exercise results are memoized, with invalidation
for learned content and custom-sentence edits. Example readings use a first-match
index. Actual tiles retain the same stable hash ordering, but calculate each hash
once and deduplicate in linear time. Content, correct answers and saved custom
sentences are not changed.

### 6. Other findings

- Resource loaders now share both pending promises and parsed successful JSON.
  Failed requests are evicted; explicit course retry invalidates the relevant URLs.
- Returning-user review content loads the necessary card entities and used
  courses. A fresh empty Review does not wait for unrelated deferred dictionaries.
- Mood-only Eva timer updates outside Eva Room save the small Eva snapshot, not
  the entire multi-megabyte study history. Relationship/room actions still save
  progress normally.
- Eva/achievement statistics also called `getSummary → getTodayCards` just to
  obtain a count, repeatedly sorting the entire study queue (159,282 progress
  lookups in the profiled entry). Summary counts now use a single unsorted pass;
  actual study queue ordering is unchanged.
- Writing demo animation frames are cancelled before route DOM replacement.
  Existing Chart cleanup/late-result route guards remain in place.
- The original changelog eligibility decision is captured before startup itself
  creates returning-user signals.
- Kana/N5 layout used intrinsic grid minimum widths and oversized nested controls.
  Explicit `minmax(0, 1fr)`, child minimum widths, responsive action rows and input
  sizing fix real element bounds; no new global overflow-clipping workaround.
- Full E2E exposed a lesson scroll race: replacing a `content-visibility:auto`
  lesson root discarded its remembered height. The diagnostic recorded document
  height falling from 5,825 px to 1,732 px and scroll clamping to 1,005 px; one run
  ended 1,315 px away from the pre-answer position. Interactive lesson/final/practice
  roots now stay laid out instead of using the 820 px skipped-content placeholder.
  Existing scroll assertions/timeouts are unchanged.

## Reproduction tools and measurement interpretation

`index/tools/audit-navigation.mjs` injects function timing only into an isolated
temporary build. No profiler/console spam is shipped in production. It records
click → rAF, hash, Home shell/interactive frame, render/task counts, fetches,
JSON/Storage calls, progress size, function timings, CDP layout/style time and
DOM/listener counters. A rAF measurement is a next-frame proxy, not an optical
measurement of physical screen presentation. Function timings are inclusive and
must not be summed as independent CPU totals.

The power fixture uses real IDs: 700 kanji, 40 history entries each, 150 due kanji,
passed kana lessons, six completed lessons per JLPT level, 90 exercise histories
and a saved markdown reading exercise. `--without-exercises` reproduces the
earlier card/history-only comparison without reducing the 700-card backlog.
Baseline source is read with `git show`; branch/main are not switched or changed.

```powershell
cd index
node tools/audit-navigation.mjs --baseline-ref=50d9d876 --mobile --quick --without-exercises
node tools/audit-navigation.mjs --mobile --quick --without-exercises
node tools/audit-navigation.mjs --mobile
node tools/audit-navigation.mjs
node tools/audit-navigation.mjs --mobile --sw
node tools/audit-navigation.mjs --dev --mobile --quick --size=medium
node tools/measure-review-latency.mjs --serve --baseline-ref=50d9d876
node tools/measure-review-latency.mjs --serve
```

Raw reports/profiles are local in `tmp/performance/` (not shipped with the app).
The baseline 5–10-second production symptom was not assumed to reproduce exactly:
warm Home showed a 1.3–2.4-second CPU stall here, and the realistic exercise-history
and sentence-practice profiles exposed additional multi-second stalls.

## Measured results

Same card/history-only fixture, 390×844, CPU 4×, production build:

| Warm transition | Baseline | Fixed |
| --- | ---: | ---: |
| Dictionary → Home | 1,406.1 ms | 27.5 ms |
| Review → Home | 1,355.4 ms | 22.9 ms |
| Longest Home task in these samples | 1,393 ms | no task ≥50 ms |

Separate production SRS answer benchmark, same 150 valid due IDs, 390×844,
normal CPU (four consecutive `forgot` answers, click → next animation frame):

| Metric | Baseline | Fixed |
| --- | ---: | ---: |
| Mean answer latency | 1,576.9 ms | 19.9 ms |
| Individual samples | 2,439 / 1,284.8 / 1,406.2 / 1,177.7 ms | 31.3 / 16.3 / 15.7 / 16.3 ms |
| Initial active cards / total due | 150 / 150 | 4 / 150 |

The baseline script serves the committed production JS, with the same content and
isolated seed; both runs warm Dictionary first so all 150 entities are available.

Broader post-fix power-user audit (including exercise/reading history; progress
JSON approximately 2,680,096 bytes):

| Configuration | Home interactive range | Render passes per Home | Home data fetches |
| --- | ---: | ---: | ---: |
| Production desktop, 13 routes | 5.0–123.7 ms | 1 | 0 |
| Production mobile, CPU 4×, 13 routes | 21.4–49.9 ms | 1 | 0 |
| Real SW controlling mobile, CPU 4×, 13 routes (final build) | 20.4–64.5 ms | 1 | 0 |
| Dev mobile, CPU 4×, medium profile, Dictionary/Review | 25.5–29.8 ms | 1 | 0 |

Across those warm Home samples there were no full-progress LocalStorage reads or
writes, no JSON stringification of progress, and no ≥50 ms Home task. Some samples
after visiting Eva included two small JSON parses unrelated to LocalStorage;
this is not reported as zero JSON work for every route. The 20-cycle mobile run
went from 26.5 ms to 20.7 ms; DOM counters remained one document, 1,096 nodes and
63 listeners. The final SW run retained one document, 1,099 nodes/64 listeners
across its 20 cycles (32.2 ms first Home → 23.6 ms last Home).

Cold Home shell: 307 ms desktop and 1,115 ms on 4× CPU. These are shell timings,
not a claim that every deferred dataset finished at that point. The unprimed dev
server took 10,959 ms for its first shell (including Vite transforms/network);
its measured startup longest task was 416 ms, distinct from a 10-second
synchronous application freeze. Production background startup longest tasks in
the power-user run were 167 ms desktop and 838 ms at 4× CPU.
The final SW-enabled run measured a 1,047 ms cold shell and 887 ms longest
background startup task; these costs are not hidden inside the warm-route numbers.

The initial Dictionary trace contained five duplicated JSON URLs on the baseline
(lesson manifest, three startup lesson files and N5 lessons); the fixed trace had
171 requests/171 distinct URLs, including saved kana content. Warm route cycles
do not refetch those databases. Chart.js remains route-lazy and Home does not
eagerly load the heavyweight fresh-user datasets (regression tests cover both).

The SW was active and controlling the measured page. Warm SPA transitions did
not replace CacheStorage namespaces or reset history, and the SW-enabled test
records context-level requests, including worker requests. No evidence identified
SW update/cache maintenance as the cause of the original Home CPU stall.

The early mobile audit's Eva entry detector incorrectly required an `h1`, which
that screen does not have. Its entry timeout is excluded; its Home result remains
valid. The corrected SW audit measured Eva entry at 1,113 ms and led to the
additional statistics-count optimization described above, rather than attributing
that cost to the worker. Repeating the same audit after that change measured
801 ms for Eva Room entry (798 ms longest task); its return to Home was 64.5 ms.
This is improved but still the most expensive measured secondary route, not
an assertion that all route entry work is negligible.

## Regression coverage

- Canonical session/enrollment/alias unit tests; resource cache failure/retry and
  in-flight sharing; sentence eligibility equivalence.
- 150 real due cards, one visible study card, fast answers, frozen completion and
  explicit next batch; mixed kanji/kana/exercise routes retain existing coverage.
- Actual H/K lesson submissions, actual N5 completion, all-level legacy repair,
  reload idempotency, preservation of histories and special kana.
- Kana/N5 overview and lessons at 320×700, 360×800, 390×844, 412×915, 674×1536 and
  768×1024. Bounds are checked even when global clipping would hide overflow;
  final controls must clear the bottom navigation.
- Large-progress Home navigation on desktop and 360/390/412 mobile at 4× CPU;
  no read/write of full progress or new data fetch per warm Home transition.
- Twenty warm cycles check latency and retained DOM/listener counts.
- Delayed Dictionary JSON cannot block Home. Separate real-SW tests check
  activation/control, stable caches, no repeated databases and preserved history.

Existing scroll, router/404, changelog, TTS and shop assertions are not weakened.
Two old assertions expecting a five-card active batch were updated for the new
four-card policy, adding explicit next-batch coverage. The SW cache baseline is
taken after warming Home assets because runtime caches are created lazily on first
use, not necessarily during activation.

## Scope and remaining limits

No routing, PDF/course content, SRS interval algorithm or remote deployment changes.
No history deletion, IndexedDB migration, force-click test workaround or timeout
increase. The existing large initial JS bundle and build asset-resolution warnings
remain separate cold-start concerns; performance budgets are not raised here.
An additional `npm run perf:bundle` check still fails: initial JS is 238,283 bytes
gzip (232.7 KiB) against 150 KiB. The starting commit already had 235,423 bytes
(229.9 KiB) against the same limit. CSS (31.2 KiB) and async chunks (2.1 KiB max)
pass. This work fixes measured runtime stalls, not the separate entry-bundle
code-splitting problem; it must not be reported as passing that CI budget.
Real Android WebView/device and Safari runtime measurements are not claimed.

## Changed files

- `index/src/app.js`: loaders, snapshot reads, enrollment repair, canonical review
  integration, derived caches, sentence eligibility and timer/animation lifecycle.
- `index/src/services/srs.ts`: bounded frozen session policy, safe enrollment,
  alias reconciliation and canonical review totals; interval algorithm unchanged.
- `index/src/services/resource-cache.ts`, `sentence-eligibility.ts`: small tested
  helpers for shared request results and lightweight exercise eligibility.
- `index/src/styles.css`: intrinsic sizing fixes and interactive lesson layout.
- `index/tests/unit/{srs,resource-cache,sentence-eligibility}.test.ts` and
  `index/tests/e2e/{srs-integration,kana-mobile,interaction-latency,performance,
  kana-courses,routes}.spec.ts`, plus `helpers/performance-fixture.{mjs,d.mts}`.
- `index/tools/{audit-navigation,measure-review-latency}.mjs`: reproducible,
  isolated profiling tools, with no instrumentation in the shipped app.
- `index/dist/`: generated by Vite, never hand-edited.
- This audit report.

## Commands and final verification (2026-09-26)

| Command/check | Result |
| --- | --- |
| `npm run typecheck` | Passed |
| `npm run lint` | Passed (repository's configured lint scope) |
| `npm run test` | 85 tests passed, 14 files |
| `npm run validate:kana` | Passed |
| `npm run validate:srs` | 255 files, 31,197 readings, zero issues |
| `npm run build` | Passed; existing asset-path warnings noted above |
| `npm run test:e2e -- --workers=1` | 76 passed, 4.7 minutes, no retries |
| Final rebuild: console smoke + N5 exercise scroll | 2/2 passed |
| N5 correct/wrong exercise scroll test, `--repeat-each=5` | 5/5 passed after the CSS fix |
| Production before/after navigation and answer audit tools | Completed; measurements above |
| Additional `npm run perf:bundle` | Fails existing initial-JS budget; exact sizes above |
| `git diff --check` | Passed |

The final 150-card E2E measured answer-to-frame samples of 25.4 / 16.1 / 13.8 /
19.3 ms, independently of the separate before/after benchmark. The complete run
includes unchanged shop purchase/equip persistence, TTS fallback/exclusivity,
router/404/history, changelog eligibility and scroll assertions.

Browser screenshots from the final 360×800 tests are preserved locally in
`tmp/qa-screenshots/`: `hiragana.png`, `hiragana-lesson-1.png`, `katakana.png`,
`katakana-lesson-1.png`. They are QA artifacts, not additional shipped assets.
