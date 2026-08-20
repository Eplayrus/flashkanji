import { expect, test } from "@playwright/test";

test.use({ serviceWorkers: "block" });

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("flashKanjiOnboardingCompleted.v3", "true");
    localStorage.setItem("flashKanji.changelog.lastSeenVersion", "2026.08.20");
    localStorage.setItem("flashKanji.hasVisited", "true");
  });
});

test("kana courses appear in textbooks and load lazily inside the app shell", async ({ page, request }) => {
  const catalogResponse = await request.get("/data/kana/index.json");
  expect(catalogResponse.ok()).toBeTruthy();
  const catalog = await catalogResponse.json();
  expect(catalog.courses.map((course: { slug: string }) => course.slug)).toEqual(["hiragana", "katakana"]);

  await page.goto("./#textbooks");
  await expect(page.locator("#app .textbooks-page")).toBeVisible();
  await expect(page.locator("#textbook-hiragana")).toContainText("Хирагана");
  await expect(page.locator("#textbook-katakana")).toContainText("Катакана");

  await page.locator('#textbook-hiragana a[href="#textbooks/hiragana"]').click();
  await expect(page).toHaveURL(/#textbooks\/hiragana$/);
  await expect(page.locator("#app .kana-course-page")).toBeVisible();
  await expect(page.locator("#app h1").first()).toContainText("Хирагана");
  await expect(page.locator("#app [data-route-error]")).toHaveCount(0);
});

test("home treats kana as first-class learning content and kana lesson uses one study card", async ({ page }) => {
  await page.goto("./#home");
  await expect(page.locator('[data-section="home-kana-courses"]')).toBeVisible();
  await expect(page.locator('[data-kana-course="hiragana"]')).toContainText("Хирагана");
  await expect(page.locator('[data-kana-course="katakana"]')).toContainText("Катакана");

  await page.locator('[data-kana-course="hiragana"] a[href="#textbooks/hiragana/lesson-1"]').click();
  await expect(page).toHaveURL(/#textbooks\/hiragana\/lesson-1$/);
  await expect(page.locator("#app .kana-lesson-page")).toBeVisible();
  await expect(page.locator("#app [data-kana-character-card]")).toHaveCount(1);
  await expect(page.locator("#app .kana-new-sign-grid")).toHaveCount(0);
  await expect(page.locator("#app .kana-readwrite-grid")).toHaveCount(0);
  await expect(page.locator("#app [data-section='kana-character-study-card'] .kana-lesson-focus")).toContainText("あ");

  await expect.poll(async () => page.evaluate(() => {
    const raw = localStorage.getItem("flashKanji.progress.v2");
    const progress = raw ? JSON.parse(raw) : {};
    return progress.kanaCourses?.courses?.hiragana?.currentRoute || "";
  })).toBe("lesson-1");

  await page.locator('[data-action="kana-lesson-card"][data-rating="forgot"]').click();
  await expect(page.locator("#app [data-section='kana-character-study-card'] .kana-lesson-focus")).toContainText("い");

  await expect.poll(async () => page.evaluate(() => {
    const raw = localStorage.getItem("flashKanji.progress.v2");
    const progress = raw ? JSON.parse(raw) : {};
    return Object.keys(progress.kanaCourses?.courses?.hiragana?.review || {});
  })).toEqual(["kana:hiragana:3042"]);

  await page.evaluate(() => {
    const raw = localStorage.getItem("flashKanji.progress.v2");
    const progress = raw ? JSON.parse(raw) : {};
    const review = progress.kanaCourses?.courses?.hiragana?.review || {};
    for (const card of Object.values(review) as Array<Record<string, unknown>>) {
      card.dueAt = "2026-01-01T00:00:00.000Z";
      card.state = "Learning";
    }
    localStorage.setItem("flashKanji.progress.v2", JSON.stringify(progress));
  });
  await page.addInitScript(() => {
    const raw = localStorage.getItem("flashKanji.progress.v2");
    const progress = raw ? JSON.parse(raw) : {};
    const review = progress.kanaCourses?.courses?.hiragana?.review || {};
    for (const card of Object.values(review) as Array<Record<string, unknown>>) {
      card.dueAt = "2026-01-01T00:00:00.000Z";
      card.state = "Learning";
    }
    localStorage.setItem("flashKanji.progress.v2", JSON.stringify(progress));
  });
  await page.reload();

  await page.goto("./#home");
  await expect(page.locator('[data-kana-course="hiragana"]')).toContainText(/Продолжить|Continue/);
  await expect(page.locator('[data-kana-course="hiragana"]')).toContainText(/1 к повторению|1 due/);

  await page.goto("./#review");
  await expect(page.locator('#app [data-review-kind="kana"]')).toBeVisible();
  await expect(page.locator('#app [data-review-kind="kana"] .kana-srs-focus')).toContainText("あ");
});

test("hiragana exercise checks accepted answers and persists progress without touching katakana", async ({ page, request }) => {
  const courseResponse = await request.get("/data/kana/hiragana.json");
  expect(courseResponse.ok()).toBeTruthy();
  const course = await courseResponse.json();
  const firstLesson = course.lessons[0];

  await page.goto("./#textbooks/hiragana/lesson-1");
  await expect(page.locator("#app .kana-lesson-page")).toBeVisible();

  for (const exercise of firstLesson.exercises) {
    const form = page.locator(`[data-kana-exercise-form][data-course="hiragana"][data-exercise="${exercise.id}"]`).first();
    await expect(form).toBeVisible();

    for (const item of exercise.items) {
      await form.locator(`input[name="kana-${item.number}"]`).fill(item.solution || item.accepted_answers[0]);
    }
    await form.locator('[data-action="kana-submit-exercise"]').click();
    await expect(page.locator(`[data-kana-exercise-form][data-course="hiragana"][data-exercise="${exercise.id}"] .exercise-feedback`)).toContainText(`${exercise.items.length}/${exercise.items.length}`);
  }

  await expect.poll(async () => page.evaluate(() => {
    const raw = localStorage.getItem("flashKanji.progress.v2");
    const progress = raw ? JSON.parse(raw) : {};
    const reviewKeys = Object.keys(progress.kanaCourses?.courses?.hiragana?.review || {});
    return {
      hiraganaScore: progress.kanaCourses?.courses?.hiragana?.lessons?.["lesson-1"]?.exercises?.["lesson-1-a"]?.score ?? null,
      hiraganaPassed: progress.kanaCourses?.courses?.hiragana?.lessons?.["lesson-1"]?.passed ?? false,
      katakanaLessonCount: Object.keys(progress.kanaCourses?.courses?.katakana?.lessons || {}).length,
      reviewCount: reviewKeys.length,
      namespacedReviewKeys: reviewKeys.every((key) => key.startsWith("kana:hiragana:"))
    };
  })).toMatchObject({
    hiraganaScore: 6,
    hiraganaPassed: true,
    katakanaLessonCount: 0,
    reviewCount: 5,
    namespacedReviewKeys: true
  });

  await page.evaluate(() => {
    const raw = localStorage.getItem("flashKanji.progress.v2");
    const progress = raw ? JSON.parse(raw) : {};
    const review = progress.kanaCourses?.courses?.hiragana?.review || {};
    for (const card of Object.values(review) as Array<Record<string, unknown>>) {
      card.dueAt = "2026-01-01T00:00:00.000Z";
      card.state = "Learning";
    }
    localStorage.setItem("flashKanji.progress.v2", JSON.stringify(progress));
  });
  await page.addInitScript(() => {
    const raw = localStorage.getItem("flashKanji.progress.v2");
    const progress = raw ? JSON.parse(raw) : {};
    const review = progress.kanaCourses?.courses?.hiragana?.review || {};
    for (const card of Object.values(review) as Array<Record<string, unknown>>) {
      card.dueAt = "2026-01-01T00:00:00.000Z";
      card.state = "Learning";
    }
    localStorage.setItem("flashKanji.progress.v2", JSON.stringify(progress));
  });

  await page.goto("./#review");
  await page.reload();
  await expect(page.locator('#app [data-review-kind="kana"]')).toBeVisible();
  await expect(page.locator('#app [data-review-kind="kana"]')).toHaveCount(1);
  await expect(page.locator("#app .kana-review-card")).toHaveCount(0);
  await expect(page.locator("#app .study-card")).toContainText(/Осталось:|Remaining:/);
  await page.locator('[data-action="rate-kana-review"][data-rating="remember"]').click();
  await expect(page.locator('#app [data-review-kind="kana"]')).toBeVisible();
  for (let index = 0; index < 4; index += 1) {
    await page.locator('[data-action="rate-kana-review"][data-rating="remember"]').click();
  }
  await expect(page.locator("#app .review-complete-card")).toContainText(/Повторение завершено|Review complete/);
  await expect(page.locator("#app .review-complete-card")).toContainText(/Помню|Remember/);

  await page.goto("./#textbooks/katakana");
  await expect(page.locator("#app .kana-course-page")).toBeVisible();
  await expect(page.locator("#app h1").first()).toContainText("Катакана");
  await expect(page.locator("#app")).not.toContainText("6/6");
});

test("kana public URLs have SEO HTML and bad kana routes are not coerced to Home", async ({ page, request }) => {
  const seoResponse = await request.get("/ru/textbooks/hiragana/");
  expect(seoResponse.status()).toBe(200);
  const html = await seoResponse.text();
  expect(html).toContain("Хирагана");
  expect(html).toContain("flash-kanji-hiragana-textbook-ru.pdf");
  expect(html).toContain('rel="canonical" href="https://flashkanji.space/ru/textbooks/hiragana/"');

  await page.goto("./#textbooks/hiragana/not-real-lesson");
  await expect(page.locator('#app [data-route-error="not-found"][data-route-not-found="entity-not-found"]')).toBeVisible();
  await expect(page.locator('[data-route="home"][aria-current="page"]:visible')).toHaveCount(0);
});
