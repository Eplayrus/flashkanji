import { expect, test, type Page } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

test.use({ serviceWorkers: "block" });
const read = (file: string) => JSON.parse(fs.readFileSync(path.resolve("public", file), "utf8"));
const manifest = read("data/lessons.json");
const cards = [...new Map<string, any>(manifest.lessons.flatMap((lesson: any) => read(lesson.file).items)
  .map((card: any) => [String(card.id), card])).values()];
const dueAt = "2026-01-01T00:00:00.000Z";
const existing = { state: "Review", dueAt, srsStep: 4, intervalDays: 2, reviewCount: 6, correct: 5, wrong: 1,
  easeFactor: 2.3, lapses: 1, successRate: 83, history: [{ at: dueAt, rating: "Good" }] };
const kanaId = (slug: string, glyph: string) => `kana:${slug}:${glyph.codePointAt(0)!.toString(16).toUpperCase()}`;

async function seed(page: Page, progress: object) {
  await page.addInitScript((payload) => {
    localStorage.setItem("flashKanjiOnboardingCompleted.v3", "true");
    localStorage.setItem("flashKanji.changelog.lastSeenVersion", "2026.08.27");
    if (!sessionStorage.getItem("srs-regression-seeded")) {
      sessionStorage.setItem("srs-regression-seeded", "true");
      localStorage.setItem("flashKanji.progress.v2", JSON.stringify(payload));
    }
  }, { settings: { language: "ru", languageManuallySelected: true, sound: false }, ...progress });
}
async function saved(page: Page) {
  return page.evaluate(() => JSON.parse(localStorage.getItem("flashKanji.progress.v2") || "{}"));
}

test("150 valid due cards stay a four-card session; answers are fast and next batch is explicit", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await seed(page, { cards: Object.fromEntries(cards.slice(0, 150).map((card) => [card.id, existing])) });
  await page.goto("./#review");
  const review = page.locator("[data-review-session-size]");
  await expect(review).toHaveAttribute("data-review-total-due", "150");
  await expect(review).toHaveAttribute("data-review-session-size", "4");
  const seen = new Set<string>();
  const delays: number[] = [];
  for (let i = 0; i < 4; i++) {
    await expect(page.locator("#app .study-card")).toHaveCount(1);
    const symbol = await page.locator("#app .study-card .kanji-focus").first().innerText();
    expect(seen.has(symbol)).toBe(false);
    seen.add(symbol);
    await page.locator('[data-action="show-answer"]').click();
    const delay = await page.locator('[data-action="rate"][data-rating="forgot"]').evaluate((element) => new Promise<number>((resolve) => {
      const start = performance.now();
      (element as HTMLElement).click();
      requestAnimationFrame(() => resolve(performance.now() - start));
    }));
    delays.push(delay);
    expect(delay).toBeLessThan(650);
    await expect(review).toHaveAttribute("data-review-total-due", String(149 - i));
  }
  await expect(page.locator(".review-complete-card")).toBeVisible();
  await expect(page.locator("#app .study-card")).toHaveCount(0);
  await page.locator('[data-action="theme"]').first().click();
  await expect(page.locator(".review-complete-card")).toBeVisible();
  await page.locator('[data-action="review-next-batch"]').click();
  await expect(review).toHaveAttribute("data-review-session-size", "4");
  expect(seen.has(await page.locator("#app .study-card .kanji-focus").first().innerText())).toBe(false);
  expect(errors).toEqual([]);
  console.log("150-card backlog answer-to-frame ms:", delays.map((value) => value.toFixed(1)).join(", "));
});

for (const slug of ["hiragana", "katakana"]) {
  test(`${slug}: passing a lesson enrolls every symbol once and persists after reload`, async ({ page }) => {
    const course = read(`data/kana/${slug}.json`);
    const lesson = course.lessons[0];
    const ids = lesson.focus_characters.map((item: any) => kanaId(slug, item.kana));
    await seed(page, {});
    await page.goto(`./#textbooks/${slug}/${lesson.id}`);
    await expect(page.locator(".kana-lesson-page")).toBeVisible();
    expect(Object.keys((await saved(page)).kanaCourses?.courses?.[slug]?.review || {})).toHaveLength(0);
    for (const exercise of lesson.exercises) {
      const form = page.locator(`[data-kana-exercise-form][data-exercise="${exercise.id}"]`);
      for (const item of exercise.items) await form.locator(`input[name="kana-${item.number}"]`).fill(item.solution || item.accepted_answers[0]);
      await form.locator('[data-action="kana-submit-exercise"]').click();
    }
    await expect.poll(async () => Object.keys((await saved(page)).kanaCourses.courses[slug].review).sort()).toEqual(ids.sort());
    const before = (await saved(page)).kanaCourses.courses[slug].review;
    expect((await saved(page)).kanaCourses.courses[slug].lessons[lesson.id].passed).toBe(true);
    await page.locator('[data-action="kana-submit-exercise"]').last().click();
    await page.reload();
    await expect(page.locator(".kana-lesson-page")).toBeVisible();
    expect((await saved(page)).kanaCourses.courses[slug].review).toEqual(before);
  });
}

test("legacy completed kana and all JLPT levels restore missing enrollment without resetting history", async ({ page }) => {
  const seedProgress: any = { cards: {}, kanaCourses: { courses: {} } };
  const expectedKanji = new Set<string>();
  for (const level of ["N5", "N4", "N3", "N2", "N1"]) {
    const raw = read(`data/jlpt/${level.toLowerCase()}/lessons.json`);
    const lesson = (raw.lessons || raw.items)[0];
    seedProgress[`${level.toLowerCase()}Course`] = { completedLessons: { [lesson.id]: dueAt } };
    for (const glyph of lesson.kanji) {
      const card = cards.find((card) => card.kanji === glyph);
      if (card) expectedKanji.add(String(card.id));
    }
  }
  const preservedId = [...expectedKanji][0];
  seedProgress.cards[preservedId] = existing;
  for (const slug of ["hiragana", "katakana"]) {
    const lesson = read(`data/kana/${slug}.json`).lessons[0];
    seedProgress.kanaCourses.courses[slug] = { lessons: { [lesson.id]: { completed: true, passed: true } },
      review: { [kanaId(slug, lesson.focus_characters[0].kana)]: existing } };
  }
  await seed(page, seedProgress);
  await page.goto("./#review");
  await expect(page.locator("[data-review-session-size]")).toBeVisible();
  await expect.poll(async () => {
    const progress = await saved(page);
    return [...expectedKanji].every((id) => progress.cards[id]?.state !== "New" && progress.cards[id]?.dueAt);
  }).toBe(true);
  const before = await saved(page);
  expect(before.cards[preservedId]).toMatchObject(existing);
  for (const slug of ["hiragana", "katakana"]) {
    const lesson = read(`data/kana/${slug}.json`).lessons[0];
    expect(Object.keys(before.kanaCourses.courses[slug].review)).toHaveLength(lesson.focus_characters.length);
    expect(before.kanaCourses.courses[slug].review[kanaId(slug, lesson.focus_characters[0].kana)]).toMatchObject(existing);
  }
  await page.reload();
  await expect(page.locator("[data-review-session-size]")).toBeVisible();
  const after = await saved(page);
  for (const id of expectedKanji) expect(after.cards[id]).toEqual(before.cards[id]);
  expect(after.kanaCourses.courses.hiragana.review).toEqual(before.kanaCourses.courses.hiragana.review);
  expect(after.kanaCourses.courses.katakana.review).toEqual(before.kanaCourses.courses.katakana.review);
});

test("completing N5 study and exercises enrolls every lesson kanji and preserves their answers", async ({ page }) => {
  const lesson = read("data/jlpt/n5/lessons.json").items[0];
  const catalog = read("data/jlpt/n5/kanji.json").items;
  await seed(page, {});
  await page.goto(`./#textbooks/N5/${lesson.id}`);
  const ids: string[] = [];
  for (const glyph of lesson.kanji) {
    const button = page.locator('[data-action="jlpt-lesson-answer"][data-value="remember"]').first();
    await expect(button).toBeVisible();
    const id = (await button.getAttribute("data-card"))!;
    ids.push(id);
    await expect(page.locator(".lesson-study-card")).toContainText(glyph);
    await button.click();
  }
  const answers = [ids[0], lesson.kanji[1], catalog.find((card: any) => card.kanji === lesson.kanji[2]).examples[0].reading,
    lesson.sentences[0].ru, catalog.find((card: any) => card.kanji === lesson.kanji[3]).examples[0].word];
  const suffixes = ["meaning-0", "kanji-1", "reading-2", "sentence-3", "word-4"];
  for (let i = 0; i < answers.length; i++) {
    await page.locator(`[data-action="n5-answer"][data-id="${lesson.id}-${suffixes[i]}"][data-value=${JSON.stringify(answers[i])}]`).click();
  }
  const check = page.locator(`[data-action="n5-check-input"][data-id="${lesson.id}-active-5"]`);
  await check.locator("xpath=..").locator("input").fill(lesson.kanji[4]);
  await check.click();
  await expect.poll(async () => Boolean((await saved(page)).n5Course.completedLessons[lesson.id])).toBe(true);
  const before = (await saved(page)).cards;
  for (const id of ids) expect(before[id]).toMatchObject({ state: "Learning", reviewCount: 1 });
  await page.reload();
  await expect(page.locator('[data-action="n5-complete-lesson"]')).toBeDisabled();
  for (const id of ids) expect((await saved(page)).cards[id]).toEqual(before[id]);
});

test("passed voiced-kana lessons enroll all introduced signs; base mastery remains separate", async ({ page }) => {
  const hiragana = read("data/kana/hiragana.json");
  const lesson = hiragana.lessons.find((item: any) => item.id === "lesson-6");
  const ids = [...new Set(lesson.focus_characters.map((item: any) => kanaId("hiragana", item.kana)))];
  await seed(page, { kanaCourses: { courses: { hiragana: { lessons: { "lesson-6": { passed: true, completed: true } } } } } });
  await page.goto("./#review");
  await expect(page.locator("[data-review-session-size]")).toBeVisible();
  await expect.poll(async () => Object.keys((await saved(page)).kanaCourses.courses.hiragana.review).sort()).toEqual(ids.sort());
});

test("kana aliases deduplicate; stale glyphs, future cards and New cards are excluded", async ({ page }) => {
  await seed(page, { kanaCourses: { courses: { hiragana: { review: {
    "hiragana:あ": existing, "kana:hiragana:3042": existing,
    "kana:hiragana:1F600": existing, "kana:hiragana:FFFFFFFF": existing,
    "kana:hiragana:3044": { ...existing, state: "New" },
    "kana:hiragana:3046": { ...existing, dueAt: "2099-01-01T00:00:00.000Z" }
  } } } } });
  await page.goto("./#review");
  await expect(page.locator("[data-review-session-size]")).toHaveAttribute("data-review-total-due", "1");
  await expect(page.locator('[data-review-card-id="kana:hiragana:3042"]')).toBeVisible();
});
