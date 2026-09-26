import { expect, test } from "@playwright/test";

test.use({ serviceWorkers: "block" });
for (const [width, height] of [[320, 700], [360, 800], [390, 844], [412, 915], [674, 1536], [768, 1024]]) {
  test(`kana and N5 overview/lesson fit ${width}x${height} without clipped controls`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height });
    await page.addInitScript(() => {
      localStorage.setItem("flashKanjiOnboardingCompleted.v3", "true");
      localStorage.setItem("flashKanji.changelog.lastSeenVersion", "2026.08.27");
    });
    for (const route of ["hiragana", "hiragana/lesson-1", "katakana", "katakana/lesson-1", "N5", "N5/n5-lesson-1"]) {
      await page.goto(`./#textbooks/${route}`);
      const loaded = route.startsWith("N5") ? ".n5-hero, .lesson-study-card" : route.includes("/") ? ".kana-lesson-hero-card" : ".kana-course-hero";
      await expect(page.locator(loaded).first()).toBeVisible();
      const overflow = await page.evaluate(() => {
        const nodes = [...document.querySelectorAll("#app .n5-course-page button, #app .n5-course-page a.btn, #app .n5-course-page > *, #app .kana-answer-row input")];
        return { scrollWidth: document.documentElement.scrollWidth, offenders: nodes.flatMap((node) => {
          const rect = node.getBoundingClientRect();
          if (!rect.width || !rect.height) return [];
          return rect.x < -2 || rect.right > innerWidth + 2 ? [{ tag: node.tagName, class: node.className, text: node.textContent?.slice(0, 50), x: rect.x, right: rect.right }] : [];
        }) };
      });
      expect(overflow.scrollWidth, route).toBeLessThanOrEqual(width + 2);
      expect(overflow.offenders, `${route}: content must fit even with global clipping`).toEqual([]);
      const lastAction = page.locator("#app .n5-course-page :is(button, a.btn):visible").last();
      await expect(async () => {
        await lastAction.evaluate((element) => element.scrollIntoView({ block: "center", behavior: "instant" }));
        const box = await lastAction.boundingBox();
        const nav = await page.locator(".bottom-nav").boundingBox();
        expect(box).not.toBeNull();
        expect(box!.x).toBeGreaterThanOrEqual(-2);
        expect(box!.x + box!.width).toBeLessThanOrEqual(width + 2);
        expect(box!.y).toBeGreaterThanOrEqual(0);
        if (nav) expect(box!.y + box!.height, `${route}: last action clears bottom nav`).toBeLessThanOrEqual(nav.y + 2);
      }).toPass({ timeout: 5000 });
      if (width === 360 && !route.startsWith("N5")) {
        await page.evaluate(() => scrollTo(0, 0));
        await page.screenshot({ path: testInfo.outputPath(`${route.replace("/", "-")}.png`) });
      }
    }
  });
}
