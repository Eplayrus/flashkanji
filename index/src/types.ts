export type JLPTLevel = "N5" | "N4" | "N3" | "N2" | "N1" | "N2-N1";

export type SrsState = "New" | "Learning" | "Review" | "Mastered";

export type SrsRating = "again" | "hard" | "good" | "easy";

export interface KanjiExample {
  word: string;
  reading: string;
  romaji: string;
  translation: string;
}

export interface KanjiCard {
  id: string;
  lessonId: string;
  lessonTitle: string;
  lessonOrder: number;
  kanji: string;
  meaning_ru: string;
  hiragana: string;
  romaji: string;
  jlpt: JLPTLevel;
  strokes: number;
  stroke_order: string[];
  examples: KanjiExample[];
  apps: string[];
  interface_use: string;
  audio?: string;
  audioSrc?: string;
}

export interface KanjiAudioSources {
  pronunciation?: string;
  eva?: string;
  leya?: string;
}

export interface KanjiMeta {
  radical: string;
  radicalMeaning: Partial<Record<"ru" | "en", string>>;
  favoriteSeed?: boolean;
  audio?: KanjiAudioSources;
}

export interface KanjiHint {
  hint: Partial<Record<"ru" | "en", string>>;
  mnemonic: Partial<Record<"ru" | "en", string>>;
}

export interface LessonManifestItem {
  id: string;
  file: string;
  title: string;
  jlpt: JLPTLevel;
  order: number;
  mascot: "eva" | "leya";
  summary: string;
}

export interface SrsHistoryEntry {
  at: string;
  rating: "Again" | "Hard" | "Good" | "Easy";
  from: SrsState;
  to: SrsState;
  intervalDays: number;
}

export interface CardProgress {
  state: SrsState;
  stage: "new" | "learning" | "review" | "mastered";
  intervalDays: number;
  easeFactor: number;
  dueAt: string | null;
  nextReview: string | null;
  lastReviewedAt: string | null;
  lastReview: string | null;
  lastRating: string | null;
  reviews: number;
  reviewCount: number;
  lapses: number;
  correct: number;
  wrong: number;
  successRate: number;
  history: SrsHistoryEntry[];
}

export interface DailyProgress {
  learned: number;
  reviews: number;
  mastered: number;
  mistakes: number;
  minutes: number;
  goalClaimed?: boolean;
}

export interface AchievementProgress {
  [achievementId: string]: string;
}

export interface ShopProgress {
  owned: string[];
  equipped: Record<string, string>;
}

export interface UserProgress {
  version: number;
  createdAt: string;
  updatedAt: string;
  settings: {
    theme: "dark" | "light";
    sound: boolean;
    language: "ru" | "en";
    dailyGoal: 10 | 20 | 50;
  };
  xp: number;
  level: number;
  moonFragments: number;
  totalCorrect: number;
  totalWrong: number;
  correctCombo: number;
  bestCorrectCombo: number;
  cards: Record<string, CardProgress>;
  daily: Record<string, DailyProgress>;
  favorites: Record<string, string>;
  transactions: Array<{
    at: string;
    reason: string;
    xp: number;
    coins: number;
    balance: number;
  }>;
  streakHistory: Array<{ date: string; value: number }>;
  streak: {
    current: number;
    best: number;
    lastStudyDate: string | null;
  };
  lessonCompletions: Record<string, string>;
  achievements: AchievementProgress;
  dailyBonuses: Record<string, string>;
  shop: ShopProgress;
}
