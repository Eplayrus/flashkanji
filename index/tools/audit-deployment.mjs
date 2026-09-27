// Read-only production inspection and isolated local SW upgrade rehearsal.
import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import assert from "node:assert/strict";
import { chromium } from "playwright";

const root = path.resolve("dist");
const output = path.resolve("../tmp/performance");
fs.mkdirSync(output, { recursive: true });
const meta = JSON.parse(fs.readFileSync(path.join(root, "build-meta.json"), "utf8"));
let version = "upgrade-rehearsal-old";
const types = { ".html": "text/html", ".js": "text/javascript", ".json": "application/json", ".css": "text/css", ".webmanifest": "application/manifest+json" };
const server = http.createServer((req, res) => {
  let name = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  if (name.endsWith("/")) name += "index.html";
  const file = path.resolve(root, `.${name}`);
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404).end(); return; }
  res.setHeader("Content-Type", types[path.extname(file)] || "application/octet-stream");
  res.setHeader("Cache-Control", "no-store");
  if (name === "/service-worker.js") {
    res.end(fs.readFileSync(file, "utf8").replace(/^const SW_BUILD_VERSION = "[^"]+";/m, `const SW_BUILD_VERSION = ${JSON.stringify(version)};`));
  } else fs.createReadStream(file).pipe(res);
});
await new Promise((resolve) => server.listen(4193, "127.0.0.1", resolve));
const browser = await chromium.launch();
const fixture = { settings: { sound: false, language: "ru" }, cards: { "1": { state: "Review", dueAt: "2026-01-01T00:00:00Z",
  reviewCount: 6, correct: 5, wrong: 1, intervalDays: 2, srsStep: 4, easeFactor: 2.3,
  history: [{ at: "2026-01-01T00:00:00Z", rating: "Good" }] } } };
async function newIsolatedPage() {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  await context.addInitScript((progress) => {
    if (sessionStorage.getItem("deployment-audit-seeded")) return;
    sessionStorage.setItem("deployment-audit-seeded", "1");
    localStorage.setItem("flashKanji.progress.v2", JSON.stringify(progress));
    localStorage.setItem("flashKanjiOnboardingCompleted.v3", "true");
    localStorage.setItem("flashKanji.changelog.lastSeenVersion", "2026.08.27");
  }, fixture);
  return { context, page: await context.newPage() };
}
const report = { local: null, production: null };
try {
  const { context, page } = await newIsolatedPage();
  await page.goto("http://127.0.0.1:4193/#review");
  await page.locator("[data-review-session-size]").waitFor();
  await page.waitForFunction(() => !!navigator.serviceWorker.controller);
  const before = await page.evaluate(async () => ({ keys: await caches.keys(), card: JSON.parse(localStorage.getItem("flashKanji.progress.v2")).cards["1"] }));
  assert(before.keys.includes(`flash-kanji-static-${version}`));
  version = meta.buildId;
  await page.evaluate(async () => { const r = await navigator.serviceWorker.ready; await r.update(); });
  await page.waitForFunction(async (id) => {
    if (!navigator.serviceWorker.controller) return false;
    const info = await new Promise((resolve) => {
      const channel = new MessageChannel();
      channel.port1.onmessage = (event) => { channel.port1.close(); resolve(event.data); };
      navigator.serviceWorker.controller.postMessage({ type: "FLASH_KANJI_BUILD_INFO" }, [channel.port2]);
    });
    return info.buildId === id;
  }, version);
  await page.locator("[data-review-session-size]").waitFor();
  const after = await page.evaluate(async () => ({ keys: await caches.keys(), card: JSON.parse(localStorage.getItem("flashKanji.progress.v2")).cards["1"] }));
  assert.deepEqual(after.card, before.card);
  report.local = { buildId: meta.buildId, before, after, progressPreserved: true };
  await context.close();

  const prod = await newIsolatedPage();
  const errors = [];
  prod.page.on("pageerror", (error) => errors.push(error.message));
  await prod.page.goto("https://flashkanji.space/", { waitUntil: "domcontentloaded" });
  await prod.page.locator(".home-shell").waitFor();
  await prod.page.screenshot({ path: path.join(output, "production-home.png"), fullPage: true });
  const productionState = await prod.page.evaluate(async () => ({
    url: location.href, scripts: [...document.scripts].map((s) => s.src).filter(Boolean),
    controller: navigator.serviceWorker.controller?.scriptURL || null, caches: await caches.keys()
  }));
  const bundleReport = await (await fetch(new URL("reports/bundle-size.json", productionState.url))).json();
  await prod.page.evaluate(() => { location.hash = "review"; });
  await prod.page.locator("[data-review-session-size]").waitFor();
  await prod.page.screenshot({ path: path.join(output, "production-review.png"), fullPage: true });
  report.production = { ...productionState, buildId: bundleReport.buildId, generatedAt: bundleReport.generatedAt, errors };
  await prod.context.close();
  fs.writeFileSync(path.join(output, "deployment-audit.json"), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
} finally {
  await browser.close();
  await new Promise((resolve) => server.close(resolve));
}
