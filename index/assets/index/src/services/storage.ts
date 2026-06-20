import type { UserProgress } from "../types";

export const STORAGE_KEY = "flashKanji.progress.v1";

export function createDefaultProgress(theme: "dark" | "light" = "dark"): UserProgress {
  return {
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    settings: {
      theme,
      sound: true,
      language: "ru",
      dailyGoal: 10
    },
    xp: 0,
    level: 1,
    moonFragments: 0,
    totalCorrect: 0,
    totalWrong: 0,
    correctCombo: 0,
    bestCorrectCombo: 0,
    cards: {},
    daily: {},
    favorites: {},
    transactions: [],
    streakHistory: [],
    streak: {
      current: 0,
      best: 0,
      lastStudyDate: null
    },
    lessonCompletions: {},
    achievements: {},
    dailyBonuses: {},
    shop: {
      owned: [],
      equipped: {}
    }
  };
}

export function loadProgress(): UserProgress {
  const base = createDefaultProgress("dark");
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return base;

  try {
    const saved = JSON.parse(raw) as Partial<UserProgress>;
    return {
      ...base,
      ...saved,
      settings: { ...base.settings, ...saved.settings },
      cards: { ...base.cards, ...saved.cards },
      daily: { ...base.daily, ...saved.daily },
      favorites: { ...base.favorites, ...saved.favorites },
      transactions: Array.isArray(saved.transactions) ? saved.transactions : base.transactions,
      streakHistory: Array.isArray(saved.streakHistory) ? saved.streakHistory : base.streakHistory,
      streak: { ...base.streak, ...saved.streak },
      lessonCompletions: { ...base.lessonCompletions, ...saved.lessonCompletions },
      achievements: { ...base.achievements, ...saved.achievements },
      dailyBonuses: { ...base.dailyBonuses, ...saved.dailyBonuses },
      shop: {
        owned: [...new Set([...(base.shop.owned || []), ...((saved.shop && saved.shop.owned) || [])])],
        equipped: { ...base.shop.equipped, ...((saved.shop && saved.shop.equipped) || {}) }
      }
    };
  } catch {
    return base;
  }
}

export function saveProgress(progress: UserProgress): void {
  progress.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}
