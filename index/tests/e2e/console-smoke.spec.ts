import { expect, test } from "@playwright/test";

test("key pages load without page or console errors", async ({ page }) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });

  page.on("pageerror", (error) => {
    pageErrors.push(String(error?.message || error));
  });

  for (const route of ["/#home", "/#review", "/#textbooks"]) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1000);
  }

  expect(pageErrors, "page errors").toEqual([]);
  expect(consoleErrors, "console errors").toEqual([]);
});
