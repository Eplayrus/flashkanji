import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "../..");
const cyrillic = /[\u0400-\u04FF]/u;

function readText(relativePath: string) {
  return fs.readFileSync(path.join(projectRoot, relativePath), "utf8");
}

function readJson<T>(relativePath: string): T {
  return JSON.parse(readText(relativePath)) as T;
}

function englishStrings(value: unknown, inEnglishField = false): string[] {
  if (typeof value === "string") return inEnglishField ? [value] : [];
  if (Array.isArray(value)) return value.flatMap((item) => englishStrings(item, inEnglishField));
  if (!value || typeof value !== "object") return [];
  return Object.entries(value as Record<string, unknown>).flatMap(([key, item]) => {
    const isEnglishKey = key === "en" || key.endsWith("_en") || key.endsWith("En");
    return englishStrings(item, inEnglishField || isEnglishKey);
  });
}

describe("full QA regression guardrails", () => {
  it("keeps known mojibake and extra-letter regressions out of the app shell", () => {
    const source = [
      readText("src/app.js"),
      readText("index.html")
    ].join("\n");
    const forbiddenMarkers = [
      ["Р", "'·"].join(""),
      ["Р", "љ"].join(""),
      ["С", "Ѓ Flash"].join(""),
      ["ж", "›ё"].join(""),
      ["з", "Ѓ«"].join(""),
      ["з", "­†"].join(""),
      ["й", "Ќµ"].join(""),
      ["в", "—†"].join(""),
      ["в", "–Ґ"].join(""),
      ["в", "—€"].join(""),
      ["в", "—ђ"].join(""),
      ["в", "™Є"].join(""),
      ["Г", "—"].join(""),
      ["г", "Ђ"].join(""),
      ["г", "ѓ"].join(""),
      ["п", "ј"].join(""),
      ["п", "Ѕ"].join(""),
      String.fromCharCode(0xfffd)
    ];
    for (const marker of forbiddenMarkers) {
      expect(source, marker).not.toContain(marker);
    }
    expect(source).not.toMatch(/Какое слово подходит к значению[^`"]*В/);
    expect(source).toContain('join(" · ")');
    expect(source).toContain("Lv ${level}");
  });

  it("points SRS and reading validators at shipped public data", () => {
    expect(readText("tools/validate-srs.mjs")).toContain('"public", "data"');
    expect(readText("tools/validate-readings.mjs")).toContain('"public", "data"');
  });

  it("keeps critical first-lesson English copy free of Cyrillic fallback text", () => {
    const criticalFixtures: Array<{ level: "n5" | "n3" | "n2"; count: number }> = [
      { level: "n5", count: 8 },
      { level: "n3", count: 10 },
      { level: "n2", count: 10 }
    ];
    for (const fixture of criticalFixtures) {
      const kanji = readJson<{ items: unknown[] }>(`public/data/jlpt/${fixture.level}/kanji.json`);
      const visibleCards = kanji.items.slice(0, fixture.count);
      const leaking = visibleCards.flatMap((card) => englishStrings(card).filter((text) => cyrillic.test(text)));
      expect(leaking, `${fixture.level} visible cards`).toEqual([]);
    }

    for (const level of ["n5", "n3", "n2"] as const) {
      const lessons = readJson<{ items: unknown[] }>(`public/data/jlpt/${level}/lessons.json`);
      const leaking = englishStrings(lessons.items[0]).filter((text) => cyrillic.test(text));
      expect(leaking, `${level} first lesson`).toEqual([]);
    }

    const grammarChecks = [
      { level: "n3", patterns: ["について", "に関して"] },
      { level: "n2", patterns: ["に基づいて", "上で", "ことから", "において"] }
    ] as const;
    for (const check of grammarChecks) {
      const grammar = readJson<{ items: Array<{ pattern: string }> }>(`public/data/jlpt/${check.level}/grammar.json`);
      const patterns: readonly string[] = check.patterns;
      const items = grammar.items.filter((item) => patterns.includes(item.pattern));
      const leaking = items.flatMap((item) => englishStrings(item).filter((text) => cyrillic.test(text)));
      expect(leaking, `${check.level} grammar smoke`).toEqual([]);
    }
  });

  it("uses localized grammar answers instead of Russian-only answer labels", () => {
    const source = readText("src/app.js");
    expect(source).toContain("function localizedGrammarAnswer");
    expect(source).toContain("function localizedGrammarOptions");
    expect(source).not.toMatch(/answer:\s*grammar\.answer/);
    expect(source).not.toMatch(/answerLabel:\s*grammar\.answer/);
    expect(source).not.toMatch(/grammar\.options\.filter/);
  });
});
