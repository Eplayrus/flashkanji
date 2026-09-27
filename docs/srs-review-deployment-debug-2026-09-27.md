# SRS / Review / Pages debugging — 2026-09-27

Branch: `codex/fix-shop-srs-ui-regressions`. Starting commit `78a3f568` has
the same tree as local/remote main `6c48d2a45be97dc330d9907ee95ecef03d5243a1`.
This is a follow-up to `srs-navigation-performance-audit.md`, not a replacement
of the bounded-session refactor. No push, merge, remote configuration change or
production deployment was performed.

## Reproduced causes and changes

1. **Exercise → Next loop.** Card answers completed the frozen session item,
   but `review-exercise-next` only cleared feedback. The same incomplete item
   was selected on every render. Next now requires a recorded result, completes
   the exact item once, removes it from the derived backlog, records the batch
   result and clears feedback. A stale Next cannot advance another unanswered
   exercise. Cloze grading also rejects duplicate completed submissions.
   The existing `createReviewSession` policy (4 cards + at most 1 exercise),
   explicit next batch and interval algorithm are unchanged.

2. **Home count stayed stale.** The 30-second snapshot expiry was checked only
   when someone requested a render/count. Crossing `dueAt` while looking at Home
   did not trigger either. A single alarm for the nearest saved future due date
   invalidates the derived snapshot; returning to a visible tab does the same.
   Progress saves reschedule it. This is a due-date clock, not polling, an
   artificial navigation delay or a scroll-restoration timeout. No localStorage
   reparse on each render. Existing mutation invalidation and enrollment repair
   remain in place; the Next fix removes exercises from the cached backlog too.

3. **Cold Review waited for unrelated data.** Saved reading history called
   `loadDeferredAppData`, which awaited the complete deferred application data.
   Review also awaited boot ancillary data (shop/dialogues/sprites/changelog).
   One stalled unrelated request could therefore consume the fetch timeout on
   the Review critical path. Shared study-catalog loading now runs independently
   of ancillary data; reading history loads only relevant reading collections
   and, when necessary, the markdown reading source/translations. Existing
   request memoization, course caches and sentence eligibility remain intact.
   A regression test holds unrelated requests unresolved until Review is usable.
   Local baseline did not reproduce a 10-second CPU stall; it did reproduce the
   unnecessary loading dependency. Network and device timings are not universal.

4. **CI sentence-scroll failure.** The original test failed 3/10 local repeats
   (deltas 23, 23 and 853 px). Playwright scrolled an off-screen tile before the
   click; app code then selected an obsolete “settled” viewport (sometimes y=0)
   and restored it with repeated timers after replacing the whole route. Short
   feedback also shrank the document by 23 px, clamping the bottom scroll offset.
   The interactive Review section did not itself have `content-visibility:auto`;
   blaming that property here would be incorrect. Sentence interactions now
   patch their own line, feedback, tags and button states while preserving
   ancestors and controls. Overlaid invisible localized feedback strings reserve
   intrinsic message height. Removed the obsolete sentence scroll observer and
   remembered-viewport machinery. No new forced restoration or sleeps.

   The test now scrolls each intended control into view **before** measuring,
   clicks normally (no `force`) and checks the same <=4 px bound after **every**
   tile and Check, not just the last click. Existing lesson/card navigation
   scroll policies are unchanged.

## Pages and production evidence

- Custom [run 36251098395](https://github.com/Eplayrus/flashkanji/actions/runs/36251098395)
  for `6c48d2a4`: E2E failed; Configure/Upload/Deploy skipped. Bundle reporting
  is `continue-on-error` and was not the deployment blocker.
- Built-in [Pages/Jekyll run 36251098165](https://github.com/Eplayrus/flashkanji/actions/runs/36251098165)
  for the same SHA succeeded. There are two publishing mechanisms.
- Fresh isolated Chromium on production: root redirects to `/index/dist/#home`;
  JS `index-Bhorg8vn.js`, CSS `index-CTbAKjWr.css`, report build
  `local-1790423983246`, generated `2026-09-26T11:59:51.082Z`.
  These match the committed dist in main/starting branch. Thus the recent
  bounded-session refactor **was present**, via repository/Jekyll publication;
  the reproduced bugs are not explained solely by an old user cache.
- Production worker: `/index/dist/service-worker.js`, static cache version
  `2026-08-29-contextual-study-scroll-v1`. Home and Review opened with synthetic
  progress and no page errors. No real user storage was accessed.
- Vite now stamps the emitted SW with the build ID and emits `build-meta.json`
  (CI commit SHA + entry assets). SW offers a read-only build-info message and
  fetches diagnostic metadata network-first. Versioned static/data caches change
  per build. Audio/runtime caches and localStorage progress are retained.
- Local upgrade rehearsal runs real old/new workers, verifies the controlling
  worker version and unchanged card history. Existing app controller-change
  lifecycle is retained; no reload was added to repair SRS. Old in-flight worker
  responses can leave old-named cache entries; controller version, not mere cache
  existence, determines which worker is serving the page.
- Workflow saves failing browser traces and refuses publication when Pages
  reports legacy branch publishing. It still uploads only the tested `index/dist`.

**Required external action:** repository Settings → Pages → Source → GitHub Actions
must disable the branch/Jekyll publisher. Then an authorized merge/push/run must
publish the tested artifact. This task's no-push instruction prevents proving an
actual new deployment; acceptance items “Deploy completed” and “new production
build” remain unfulfilled. No claim is made that production is fixed already.

## Verification and measurements

Final commands, measurements and limitations are recorded below after the final
build. Raw local artifacts are under `tmp/performance` (ignored by Git); tools
use isolated browser contexts and never the user's browser profile.

## Changed source / test files

- `index/src/app.js`: exact exercise completion, due-boundary invalidation,
  narrower Review loading, local sentence DOM updates; obsolete scroll code removed.
- `index/src/styles.css`: stable intrinsic feedback height.
- `index/tests/e2e/srs-integration.spec.ts`: repeated exercise batches, stale events,
  due-clock/Home state, stalled irrelevant fetches and reading history/idempotency.
- `index/tests/e2e/routes.spec.ts`: realistic pre-click viewport setup; unchanged
  4 px guarantee now checked on every sentence interaction.
- `index/vite.config.ts`, `index/public/service-worker.js`,
  `.github/workflows/deploy-pages.yml`: build identity, SW versioning, diagnostics
  and publishing-source guard.
- `index/tools/audit-review-entry.mjs`, `audit-deployment.mjs`: reproducible audits.
- `index/dist`: generated by Vite, never hand-edited. This report.

## Research used to test the hypotheses

- [Playwright scrolling](https://playwright.dev/docs/input#scrolling) and
  [actionability](https://playwright.dev/docs/actionability): clicking can scroll
  before dispatching input; `force` does not make an off-screen click stationary.
- [MDN contain-intrinsic-size](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/contain-intrinsic-size)
  and [scroll anchoring](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll_anchoring):
  distinguish estimated geometry and bottom clamping from explicit app scrolling.
- [Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
  and [Pages REST API](https://docs.github.com/en/rest/pages/pages#update-information-about-a-github-pages-site):
  the publishing source is repository configuration, not just a workflow file.
- [Service worker lifecycle](https://web.dev/articles/service-worker-lifecycle)
  and [Vite production builds](https://vite.dev/guide/build): hashed JS does not
  automatically change a verbatim copied public service-worker script.
