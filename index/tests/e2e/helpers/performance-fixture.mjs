import fs from "node:fs";
import path from "node:path";

const read = (file) => JSON.parse(fs.readFileSync(path.resolve("public", file), "utf8"));

// Real content IDs, independent histories, no changes to the user's browser storage.
export function performanceProgress(size = "power") {
  const count = size === "fresh" ? 0 : size === "medium" ? 160 : 700;
  const historyLength = size === "power" ? 40 : 8;
  const cards = [...new Map(read("data/lessons.json").lessons.flatMap((lesson) => read(lesson.file).items)
    .map((card) => [String(card.id), card])).values()].slice(0, count);
  const dueAt = "2026-01-01T00:00:00.000Z";
  const progress = { settings: { sound: false, language: "ru", languageManuallySelected: true },
    appOpens: count ? 50 : 0, cards: {}, kanaCourses: { courses: {} } };
  for (const [index, card] of cards.entries()) {
    progress.cards[card.id] = { state: index < 150 ? "Review" : "Mastered", dueAt: index < 150 ? dueAt : "2099-01-01T00:00:00Z",
      reviewCount: historyLength, intervalDays: 5, srsStep: 4, easeFactor: 2.3, correct: historyLength - 2,
      wrong: 2, lapses: 2, successRate: 95, lastReviewedAt: dueAt,
      history: Array.from({ length: historyLength }, (_, i) => ({ at: new Date(Date.UTC(2025, 10, i + 1)).toISOString(), rating: "Good", intervalDays: 5 })) };
  }
  if (count) {
    for (const slug of ["hiragana", "katakana"]) {
      const course = read(`data/kana/${slug}.json`);
      progress.kanaCourses.courses[slug] = { lessons: Object.fromEntries(course.lessons.slice(0, size === "power" ? 8 : 2)
        .map((lesson) => [lesson.id, { passed: true, completed: true }])), review: {}, currentRoute: "lesson-2" };
    }
    for (const level of ["n5", "n4", "n3", "n2", "n1"]) {
      const raw = read(`data/jlpt/${level}/lessons.json`);
      const lessons = (raw.items || raw.lessons).slice(0, size === "power" ? 6 : 1);
      const course = progress[`${level}Course`] = { completedLessons: Object.fromEntries(lessons.map((lesson) => [lesson.id, dueAt])),
        viewedLessons: Object.fromEntries(lessons.map((lesson) => [lesson.id, dueAt])), exerciseSrs: {}, completedExercises: {} };
      for (const lesson of lessons) {
        for (const suffix of ["meaning-0", "kanji-1", "reading-2"]) {
          const id = `${lesson.id}-${suffix}`;
          course.completedExercises[id] = dueAt;
          course.exerciseSrs[id] = { ...progress.cards[cards[0].id], exerciseId: id, lessonId: lesson.id, level: level.toUpperCase() };
        }
      }
    }
    if (size === "power") {
      progress.viewedReadingLevels = { N5: dueAt };
      progress.readingExercises = { "jlpt-md-n5-reading-01": {
        ...progress.cards[cards[0].id], exerciseId: "jlpt-md-n5-reading-01", level: "N5"
      } };
    }
  }
  return progress;
}

export function installPerformanceProbe(progress) {
  if (!sessionStorage.getItem("performance-fixture")) {
    localStorage.setItem("flashKanji.progress.v2", JSON.stringify(progress));
    sessionStorage.setItem("performance-fixture", "true");
  }
  localStorage.setItem("flashKanjiOnboardingCompleted.v3", "true");
  localStorage.setItem("flashKanji.changelog.lastSeenVersion", "2026.08.27");
  const probe = window.__performanceProbe = { calls: {}, functions: {}, tasks: [], requests: [], frames: 0, renders: 0 };
  const count = (key) => { probe.calls[key] = (probe.calls[key] || 0) + 1; };
  for (const key of ["parse", "stringify"]) {
    const original = JSON[key];
    JSON[key] = function (...args) { count(`JSON.${key}`); return original.apply(this, args); };
  }
  for (const key of ["getItem", "setItem"]) {
    const original = Storage.prototype[key];
    Storage.prototype[key] = function (...args) {
      if (this === localStorage) count(`storage.${key}:${args[0]}`);
      return original.apply(this, args);
    };
  }
  const fetch = window.fetch;
  window.fetch = function (...args) { probe.requests.push(String(args[0])); return fetch.apply(this, args); };
  const raf = window.requestAnimationFrame;
  window.requestAnimationFrame = (fn) => raf((time) => { probe.frames++; fn(time); });
  new PerformanceObserver((list) => probe.tasks.push(...list.getEntries().map((entry) => ({ start: entry.startTime, ms: entry.duration }))))
    .observe({ type: "longtask", buffered: true });
  document.addEventListener("DOMContentLoaded", () => {
    const app = document.querySelector("#app");
    if (app) new MutationObserver(() => probe.renders++).observe(app, { childList: true });
  });
}

export async function measureHome(page) {
  return page.evaluate(() => new Promise((resolve) => {
    const probe = window.__performanceProbe;
    probe.calls = {}; probe.functions = {}; probe.requests = []; probe.tasks = []; probe.frames = 0; probe.renders = 0;
    const start = performance.now();
    const watchdog = setTimeout(() => resolve({ timedOut: true, hash: location.hash, ...probe }), 12000);
    let paintMs = 0, hashMs = 0, shellMs = 0;
    const target = [...document.querySelectorAll('[data-action="route"][data-route="home"]')].find((el) => el.getBoundingClientRect().width);
    if (!target) throw new Error("No visible Home navigation control");
    target.click();
    requestAnimationFrame(() => { paintMs = performance.now() - start; });
    const check = () => {
      if (!hashMs && location.hash === "#home") hashMs = performance.now() - start;
      if (!shellMs && hashMs && document.querySelector("#app .home-shell")) shellMs = performance.now() - start;
      if (hashMs && shellMs && paintMs) {
        clearTimeout(watchdog);
        const interactiveMs = performance.now() - start;
        // Collect tasks and side effects after the interactive frame too.
        setTimeout(() => resolve({ paintMs, hashMs, shellMs, interactiveMs, ...probe,
          maxTaskMs: Math.max(0, ...probe.tasks.filter((task) => task.start >= start).map((task) => task.ms)) }), 300);
      } else requestAnimationFrame(check);
    };
    requestAnimationFrame(check);
  }));
}
