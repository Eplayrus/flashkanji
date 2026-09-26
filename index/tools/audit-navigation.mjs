// Isolated production-mode audit. Instrumentation is injected only into this temporary build.
// npm exec node tools/audit-navigation.mjs [--baseline-ref=50d9d876] [--mobile] [--sw] [--size=power]
import fs from "node:fs";
import { execFileSync } from "node:child_process";
import { build, preview, createServer } from "vite";
import { chromium } from "playwright";
import { performanceProgress, installPerformanceProbe, measureHome } from "../tests/e2e/helpers/performance-fixture.mjs";

const ref = process.argv.find((arg) => arg.startsWith("--baseline-ref="))?.split("=")[1];
const size = process.argv.find((arg) => arg.startsWith("--size="))?.split("=")[1] || "power";
const mobile = process.argv.includes("--mobile"), sw = process.argv.includes("--sw");
const quick = process.argv.includes("--quick");
const diagnose = process.argv.includes("--diagnose");
const dev = process.argv.includes("--dev");
const withoutExercises = process.argv.includes("--without-exercises");
const measured = ["renderNow", "renderHome", "syncChrome", "scheduleRender", "hydrateProgress", "reconcileCompletedLessonEnrollment",
  "getReviewQueueCount", "currentReviewQueueItemsSnapshot", "getCardProgress", "ensureLearningPathProgress", "homeJourneySteps",
  "homeEvaScene", "kanaHomeCourseItems", "jlptLessonStudyProgress", "ensureN5CourseProgress", "mergeN5CourseProgress",
  "mergeN1CourseProgress", "mergeKanaProgress", "findTextbookExerciseById", "getDueTextbookExerciseItems", "getJlptReviewPoolCards",
  "ensureEvaRoomProgress", "syncEvaRelationshipFromProgress", "saveProgress", "calculateStats", "allReadingExercises",
  "jlptReadingMarkdownExercises", "findCard", "buildCurrentReviewQueueItems", "getDueReadingExerciseItems",
  "renderReview", "renderSentencePractice", "allSentenceExercises", "buildSentenceTiles", "getAvailableSentenceExercises"];
const config = { logLevel: "error", build: { outDir: "test-results/perf-audit-dist", emptyOutDir: true, ...(diagnose ? { minify: false } : {}) }, plugins: [{
  name: "audit-only", enforce: "pre", transform(source, id) {
    if (ref && id.endsWith("/src/services/srs.ts"))
      return execFileSync("git", ["show", `${ref}:index/src/services/srs.ts`], { encoding: "utf8" });
    if (!id.endsWith("/src/app.js")) return;
    if (ref) source = execFileSync("git", ["show", `${ref}:index/src/app.js`], { encoding: "utf8", maxBuffer: 5_000_000 });
    for (const name of measured) {
      const search = `function ${name}(`;
      if (!source.includes(search)) continue;
      source = source.replace(search, `function ${name}(...args) {
        const p = window.__performanceProbe; const t = performance.now();
        if (p && "${name}" === "saveProgress") (p.progressSaves ||= []).push({ at: t, route: location.hash, stack: new Error().stack });
        try { return __audit_${name}(...args); } finally { if (p) { const v = p.functions["${name}"] ||= { count: 0, ms: 0 }; v.count++; v.ms += performance.now()-t; } }
      }
      function __audit_${name}(`);
    }
    return source;
  }
}] };
if (!dev) await build(config);
const server = dev
  ? await createServer({ ...config, server: { port: 4187, strictPort: true, host: "127.0.0.1" } })
  : await preview({ build: { outDir: "test-results/perf-audit-dist" }, preview: { port: 4187, strictPort: true, host: "127.0.0.1" } });
if (dev) await server.listen();
const browser = await chromium.launch();
const report = { version: ref || "working-tree", dev, withoutExercises, mobile, cpuRate: mobile ? 4 : 1, serviceWorker: sw, size, samples: [], errors: [] };
fs.mkdirSync("../tmp/performance", { recursive: true });
const file = `../tmp/performance/${ref || "after"}-${size}-${mobile ? "mobile" : "desktop"}${sw ? "-sw" : ""}${dev ? "-dev" : ""}${withoutExercises ? "-cards" : ""}${diagnose ? "-diagnostic" : ""}.json`;
const checkpoint = () => fs.writeFileSync(file, JSON.stringify(report, null, 2));
try {
  const page = await browser.newPage({ viewport: mobile ? { width: 390, height: 844 } : { width: 1440, height: 900 }, serviceWorkers: sw ? "allow" : "block" });
  page.on("pageerror", (err) => report.errors.push(err.message));
  const progress = performanceProgress(size);
  if (withoutExercises) for (const level of ["n1", "n2", "n3", "n4", "n5"]) {
    if (progress[`${level}Course`]) {
      progress[`${level}Course`].exerciseSrs = {};
      progress[`${level}Course`].completedExercises = {};
    }
  }
  if (withoutExercises) { delete progress.readingExercises; delete progress.viewedReadingLevels; }
  report.seedBytes = Buffer.byteLength(JSON.stringify(progress));
  await page.addInitScript(installPerformanceProbe, progress);
  const cdp = await page.context().newCDPSession(page);
  await cdp.send("Emulation.setCPUThrottlingRate", { rate: report.cpuRate });
  await cdp.send("Performance.enable");
  if (diagnose) {
    if (process.argv.includes("--review")) {
      await page.goto("http://127.0.0.1:4187/#dictionary");
      await page.waitForTimeout(15000);
    }
    await cdp.send("Profiler.enable");
    await cdp.send("Profiler.start");
    if (process.argv.includes("--review")) await page.evaluate(() => { location.hash = "review"; });
    else await page.goto("http://127.0.0.1:4187/#dictionary", { waitUntil: "commit" });
    await new Promise((resolve) => setTimeout(resolve, 15000));
    const { profile } = await cdp.send("Profiler.stop");
    const profileFile = process.argv.includes("--review") ? "review.cpuprofile" : "startup.cpuprofile";
    fs.writeFileSync(`../tmp/performance/${profileFile}`, JSON.stringify(profile));
    const totals = new Map();
    for (let i = 0; i < profile.samples.length; i++) {
      const node = profile.nodes.find((node) => node.id === profile.samples[i]);
      const name = `${node.callFrame.functionName}:${node.callFrame.lineNumber + 1}`;
      totals.set(name, (totals.get(name) || 0) + profile.timeDeltas[i] / 1000);
    }
    console.log([...totals.entries()].sort((a, b) => b[1] - a[1]).slice(0, 30));
    report.startupProfile = profileFile;
    report.probe = await page.evaluate(() => window.__performanceProbe);
  } else {
  const coldStart = Date.now();
  await page.goto("http://127.0.0.1:4187/#home");
  await page.locator("#app .home-shell").waitFor();
  report.coldHomeMs = Date.now() - coldStart;
  report.cold = await page.evaluate(() => window.__performanceProbe);
  await page.goto("http://127.0.0.1:4187/#dictionary");
  await page.waitForTimeout(mobile ? 15000 : 8000);
  report.progressBytes = await page.evaluate(() => new Blob([localStorage.getItem("flashKanji.progress.v2")]).size);
  report.initial = await page.evaluate(() => window.__performanceProbe);
  if (sw) {
    await page.evaluate(async () => { await navigator.serviceWorker.ready; });
    await page.reload();
    await page.waitForTimeout(8000);
    report.swControlled = await page.evaluate(() => !!navigator.serviceWorker.controller);
  }
  await measureHome(page);
  for (const route of quick ? ["dictionary", "review"] : ["dictionary", "textbooks", "textbooks/hiragana", "textbooks/katakana", "textbooks/hiragana/lesson-1", "textbooks/N5/n5-lesson-1", "review", "stats", "achievements", "eva-room", "writing", "download", "about"]) {
    const entry = await page.evaluate((hash) => new Promise((resolve) => {
      const p = window.__performanceProbe, app = document.querySelector("#app"), previous = app.firstElementChild;
      p.functions = {}; p.tasks = []; p.calls = {}; p.requests = []; p.renders = 0;
      const start = performance.now();
      let paintMs = 0;
      const watchdog = setTimeout(() => resolve({ timedOut: true, ...p }), 12000);
      location.hash = hash;
      requestAnimationFrame(() => { paintMs = performance.now() - start; });
      const check = () => {
        if (app.firstElementChild !== previous && app.querySelector("h1, .eva-room-page") && !app.querySelector(".boot-screen.loading")) {
          clearTimeout(watchdog);
          const interactiveMs = performance.now() - start;
          setTimeout(() => resolve({ interactiveMs, paintMs, ...p,
            maxTaskMs: Math.max(0, ...p.tasks.filter((t) => t.start >= start).map((t) => t.ms)) }), 300);
        } else requestAnimationFrame(check);
      };
      requestAnimationFrame(check);
    }), route);
    await page.waitForTimeout(300);
    const from = await page.locator("#app h1, #app .eva-room-page h2").first().textContent().catch(() => "");
    const metricBefore = await cdp.send("Performance.getMetrics");
    const sample = await measureHome(page);
    const metricAfter = await cdp.send("Performance.getMetrics");
    sample.layoutStyleMs = metricAfter.metrics.filter((m) => ["LayoutDuration", "RecalcStyleDuration"].includes(m.name))
      .reduce((sum, m) => sum + 1000 * (m.value - metricBefore.metrics.find((v) => v.name === m.name).value), 0);
    report.samples.push({ route, from, entry, ...sample });
    checkpoint();
    console.log(route, JSON.stringify({ entryMs: entry.interactiveMs, entryTask: entry.maxTaskMs, paint: sample.paintMs, interactive: sample.interactiveMs, maxTask: sample.maxTaskMs, renders: sample.renders }));
  }
  await cdp.send("HeapProfiler.collectGarbage");
  report.memoryBefore = await cdp.send("Memory.getDOMCounters");
  report.cycles = [];
  for (let i = 0; i < (quick ? 2 : 20); i++) {
    await page.evaluate(() => { location.hash = "textbooks"; });
    await page.waitForTimeout(250);
    report.cycles.push(await measureHome(page));
  }
  await cdp.send("HeapProfiler.collectGarbage");
  report.memoryAfter = await cdp.send("Memory.getDOMCounters");
  report.cacheNames = await page.evaluate(() => caches.keys());
  }
} finally {
  await browser.close();
  if (dev) await server.close();
  else await new Promise((resolve) => server.httpServer.close(resolve));
  checkpoint();
  console.log(`Report: ${file}`);
}
