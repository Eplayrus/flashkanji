// Run against `npm run preview -- --port 4186`; optionally serve a committed app bundle.
// This uses isolated browser storage, never the user's profile.
import fs from "node:fs";
import { execFileSync } from "node:child_process";
import { chromium } from "playwright";

const baseURL = process.env.REVIEW_PREVIEW_URL || "http://127.0.0.1:4186/";
const ref = process.argv.find((arg) => arg.startsWith("--baseline-ref="))?.split("=")[1];
const server = process.argv.includes("--serve")
  ? await (await import("vite")).preview({ preview: { port: 4186, strictPort: true, host: "127.0.0.1" } }) : null;
const read = (file) => JSON.parse(fs.readFileSync(`public/${file}`, "utf8"));
const cards = [...new Map(read("data/lessons.json").lessons.flatMap((lesson) => read(lesson.file).items)
  .map((card) => [String(card.id), card])).values()].slice(0, 150);
const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, serviceWorkers: "block" });
  if (ref) {
    const html = execFileSync("git", ["show", `${ref}:index/dist/index.html`], { encoding: "utf8" });
    const asset = html.match(/assets\/index-[^"\s]+\.js/)?.[0];
    const body = execFileSync("git", ["show", `${ref}:index/dist/${asset}`], { maxBuffer: 5_000_000 });
    await page.route("**/assets/index-*.js", (route) => route.fulfill({ contentType: "text/javascript", body }));
  }
  await page.addInitScript((seedCards) => {
    localStorage.setItem("flashKanjiOnboardingCompleted.v3", "true");
    localStorage.setItem("flashKanji.changelog.lastSeenVersion", "2026.08.27");
    const dueAt = "2026-01-01T00:00:00.000Z";
    localStorage.setItem("flashKanji.progress.v2", JSON.stringify({ settings: { sound: false },
      cards: Object.fromEntries(seedCards.map((card) => [card.id, { state: "Review", dueAt, reviewCount: 6,
        intervalDays: 2, srsStep: 4, easeFactor: 2.3, correct: 5, wrong: 1, successRate: 83, lapses: 1, history: [] }])) }));
  }, cards);
  // Baseline #review does not load the full dataset; visit dictionary for a fair backlog comparison.
  await page.goto(`${baseURL}#dictionary`);
  await page.waitForTimeout(7000);
  await page.evaluate(() => { location.hash = "review"; });
  await page.locator('[data-action="show-answer"]').waitFor();
  const header = await page.locator("#app .section-head").first().innerText();
  const samples = [];
  for (let index = 0; index < 4; index++) {
    await page.locator('[data-action="show-answer"]').click();
    samples.push(await page.locator('[data-action="rate"][data-rating="forgot"]').evaluate((element) => new Promise((resolve) => {
      const start = performance.now();
      element.click();
      requestAnimationFrame(() => resolve(performance.now() - start));
    })));
    await page.waitForTimeout(400);
  }
  const report = { version: ref || "working-tree", backlog: 150, header, answerToFrameMs: samples,
    meanMs: samples.reduce((a, b) => a + b, 0) / samples.length };
  console.log(JSON.stringify(report, null, 2));
  fs.mkdirSync("../tmp/performance", { recursive: true });
  fs.writeFileSync(`../tmp/performance/${ref || "after"}-review-answers.json`, JSON.stringify(report, null, 2));
} finally {
  await browser.close();
  if (server) await new Promise((resolve) => server.httpServer.close(resolve));
}
