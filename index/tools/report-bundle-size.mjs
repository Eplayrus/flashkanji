import { readFile } from "node:fs/promises";

const reportUrl = new URL("../dist/reports/bundle-size.json", import.meta.url);
const report = JSON.parse(await readFile(reportUrl, "utf8"));

const kb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;
const { summary, budgets } = report;

console.log("Flash Kanji bundle size report");
console.log(`buildId: ${report.buildId}`);
console.log(`initial JS gzip: ${kb(summary.initialJsGzipBytes)} / ${kb(budgets.initialJsGzipBytes)} ${budgets.initialJsWithinBudget ? "OK" : "OVER"}`);
console.log(`total CSS gzip: ${kb(summary.totalCssGzipBytes)} / ${kb(budgets.totalCssGzipBytes)} ${budgets.cssWithinBudget ? "OK" : "OVER"}`);
console.log(`largest async chunk gzip: ${kb(summary.largestAsyncChunkGzipBytes)} / ${kb(budgets.asyncChunkGzipBytes)} ${budgets.asyncChunksWithinBudget ? "OK" : "OVER"}`);
console.log("");
console.log("Largest assets:");
for (const entry of report.entries.slice(0, 10)) {
  console.log(`${entry.fileName}: ${kb(entry.gzipBytes)} gzip, ${kb(entry.rawBytes)} raw`);
}
