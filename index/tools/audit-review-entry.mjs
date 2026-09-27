// Isolated production preview. Run from index; never uses the user's browser profile.
import fs from "node:fs";
import { chromium } from "playwright";
import { preview } from "vite";
import { performanceProgress, installPerformanceProbe } from "../tests/e2e/helpers/performance-fixture.mjs";

const label = process.argv.find((arg) => arg.startsWith("--label="))?.slice(8) || "after";
const server = await preview({ preview: { port: 4188, host: "127.0.0.1", strictPort: true } });
const browser = await chromium.launch();
const results = [];
fs.mkdirSync("../tmp/performance", { recursive: true });
try {
  for (const mobile of [false, true]) for (const sw of [false, true]) {
    const context = await browser.newContext({ viewport: mobile ? { width: 390, height: 844 } : { width: 1440, height: 900 }, serviceWorkers: sw ? "allow" : "block" });
    const page = await context.newPage();
    await page.addInitScript(installPerformanceProbe, performanceProgress("power"));
    const cdp = await context.newCDPSession(page);
    if (mobile) await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const start = Date.now();
    await page.goto("http://127.0.0.1:4188/#review");
    await page.locator("[data-review-session-size]").waitFor();
    const coldMs = Date.now() - start;
    const cold = await page.evaluate(() => ({ tasks: window.__performanceProbe.tasks, requests: window.__performanceProbe.requests }));
    if (sw) await page.evaluate(async () => { await navigator.serviceWorker.ready; });
    const samples = [];
    for (const from of ["home", "textbooks", "home"]) {
      await page.evaluate((route) => { location.hash = route; }, from);
      await page.locator(from === "home" ? ".home-shell" : ".textbooks-page").waitFor();
      const result = await page.evaluate(() => new Promise((resolve) => {
        const p = window.__performanceProbe;
        p.tasks = []; p.requests = []; p.calls = {}; p.renders = 0;
        const start = performance.now();
        location.hash = "review";
        const check = () => {
          if (!document.querySelector("[data-review-session-size]")) { requestAnimationFrame(check); return; }
          const readyMs = performance.now() - start;
          setTimeout(() => resolve({ readyMs, calls: p.calls, requests: p.requests, tasks: p.tasks, renders: p.renders }), 100);
        };
        requestAnimationFrame(check);
      }));
      samples.push({ from, ...result });
    }
    const layout = [];
    if (mobile && !sw) for (const width of [320, 360, 390, 412]) {
      await page.setViewportSize({ width, height: 844 });
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
      layout.push({ width, overflow });
      if (overflow > 1) throw Error(`Review overflow at ${width}px: ${overflow}px`);
    }
    if (!sw) await page.screenshot({ path: `../tmp/performance/${label}-review-${mobile ? "mobile" : "desktop"}.png`, fullPage: true });
    const result = { mobile, sw, controlled: await page.evaluate(() => !!navigator.serviceWorker.controller), coldMs, cold, samples, errors, layout };
    results.push(result);
    console.log(JSON.stringify({ mobile, sw, coldMs, warmMs: samples.map((sample) => sample.readyMs), errors }));
    await context.close();
  }
  fs.mkdirSync("../tmp/performance", { recursive: true });
  fs.writeFileSync(`../tmp/performance/${label}-review-entry.json`, JSON.stringify(results, null, 2));
} finally {
  await browser.close();
  await new Promise((resolve) => server.httpServer.close(resolve));
}
