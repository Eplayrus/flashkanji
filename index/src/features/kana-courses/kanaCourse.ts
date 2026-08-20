import { calculateNextProgress, migrateCardProgress, type CardProgress, type SrsRating } from "../../services/srs";

export const KANA_COURSE_SLUGS = ["hiragana", "katakana"] as const;

export type KanaCourseSlug = (typeof KANA_COURSE_SLUGS)[number];

export interface KanaExerciseItem {
  number: string;
  prompt: string;
  accepted_answers: string[];
  solution?: string;
}

export interface KanaExercise {
  id: string;
  label: string;
  instruction: string;
  items: KanaExerciseItem[];
}

export interface KanaProgress {
  schema_version: number;
  content_version: string;
  settings: {
    showRomaji: boolean;
  };
  courses: Record<string, {
    currentRoute: string;
    lessons: Record<string, KanaLessonProgress>;
    practices: Record<string, KanaPracticeProgress>;
    finalTest: KanaFinalProgress;
    review: Record<string, CardProgress>;
    writing: Record<string, string>;
    updatedAt: string | null;
  }>;
}

export interface KanaLessonProgress {
  exercises: Record<string, KanaExerciseProgress>;
  completed: boolean;
  passed: boolean;
  latestScore: number;
  bestScore: number;
  updatedAt: string | null;
}

export interface KanaPracticeProgress {
  exercises: Record<string, KanaExerciseProgress>;
  completed: boolean;
  passed: boolean;
  latestScore: number;
  bestScore: number;
  updatedAt: string | null;
}

export interface KanaFinalProgress {
  sections: Record<string, KanaExerciseProgress>;
  completed: boolean;
  passed: boolean;
  latestScore: number;
  bestScore: number;
  score: number;
  total: number;
  updatedAt: string | null;
}

export interface KanaExerciseProgress {
  answers: Record<string, string>;
  correct: Record<string, boolean>;
  score: number;
  total: number;
  completed: boolean;
  passed: boolean;
  updatedAt: string | null;
}

export interface KanaScoreResult {
  answers: Record<string, string>;
  correct: Record<string, boolean>;
  score: number;
  total: number;
  completed: boolean;
  passed: boolean;
  updatedAt: string;
}

export function isKanaCourseSlug(value: unknown): value is KanaCourseSlug {
  return KANA_COURSE_SLUGS.includes(String(value || "").toLowerCase() as KanaCourseSlug);
}

export function normalizeKanaCourseSlug(value: unknown): KanaCourseSlug | "" {
  const slug = String(value || "").trim().toLowerCase();
  return isKanaCourseSlug(slug) ? slug : "";
}

export function normalizeKanaAnswer(value: unknown): string {
  return String(value ?? "")
    .normalize("NFKC")
    .trim()
    .replace(/\s+/gu, " ")
    .toLowerCase();
}

export function kanaAnswersMatch(value: unknown, acceptedAnswers: unknown): boolean {
  const normalized = normalizeKanaAnswer(value);
  if (!normalized) return false;
  const accepted = Array.isArray(acceptedAnswers) ? acceptedAnswers : [];
  return accepted.some((answer) => normalizeKanaAnswer(answer) === normalized);
}

export function defaultKanaProgress(): KanaProgress {
  return {
    schema_version: 1,
    content_version: "2026-08-kana-v1",
    settings: {
      showRomaji: true
    },
    courses: {}
  };
}

export function mergeKanaProgress(value: unknown): KanaProgress {
  const base = defaultKanaProgress();
  if (!value || typeof value !== "object") return base;
  const raw = value as Record<string, unknown>;
  const settings = raw.settings && typeof raw.settings === "object" ? raw.settings as Record<string, unknown> : {};
  const rawCourses = raw.courses && typeof raw.courses === "object" ? raw.courses as Record<string, unknown> : {};
  const courses: KanaProgress["courses"] = {};

  for (const slug of KANA_COURSE_SLUGS) {
    const rawCourse = rawCourses[slug] && typeof rawCourses[slug] === "object" ? rawCourses[slug] as Record<string, unknown> : {};
    const reviewRaw = rawCourse.review && typeof rawCourse.review === "object" ? rawCourse.review as Record<string, unknown> : {};
    courses[slug] = {
      currentRoute: typeof rawCourse.currentRoute === "string" ? rawCourse.currentRoute : "",
      lessons: mergeProgressMap(rawCourse.lessons, mergeKanaLessonProgress),
      practices: mergeProgressMap(rawCourse.practices, mergeKanaPracticeProgress),
      finalTest: mergeKanaFinalProgress(rawCourse.finalTest),
      review: Object.fromEntries(Object.entries(reviewRaw).map(([cardId, progress]) => [cardId, migrateCardProgress(progress)])),
      writing: rawCourse.writing && typeof rawCourse.writing === "object" ? { ...(rawCourse.writing as Record<string, string>) } : {},
      updatedAt: typeof rawCourse.updatedAt === "string" ? rawCourse.updatedAt : null
    };
  }

  return {
    ...base,
    ...raw,
    schema_version: 1,
    content_version: "2026-08-kana-v1",
    settings: {
      ...base.settings,
      showRomaji: typeof settings.showRomaji === "boolean" ? settings.showRomaji : base.settings.showRomaji
    },
    courses
  };
}

export function ensureKanaCourseProgress(progress: KanaProgress, slug: KanaCourseSlug) {
  progress.courses[slug] ||= {
    currentRoute: "",
    lessons: {},
    practices: {},
    finalTest: defaultKanaFinalProgress(),
    review: {},
    writing: {},
    updatedAt: null
  };
  return progress.courses[slug];
}

export function defaultKanaFinalProgress(): KanaFinalProgress {
  return {
    sections: {},
    completed: false,
    passed: false,
    latestScore: 0,
    bestScore: 0,
    score: 0,
    total: 0,
    updatedAt: null
  };
}

export function scoreKanaExercise(exercise: KanaExercise, values: Record<string, unknown>, now = new Date()): KanaScoreResult {
  const answers: Record<string, string> = {};
  const correct: Record<string, boolean> = {};
  let score = 0;
  const total = exercise.items.length;

  for (const item of exercise.items) {
    const answer = String(values[item.number] ?? "");
    answers[item.number] = answer;
    const itemCorrect = kanaAnswersMatch(answer, item.accepted_answers);
    correct[item.number] = itemCorrect;
    if (itemCorrect) score += 1;
  }

  return {
    answers,
    correct,
    score,
    total,
    completed: total > 0,
    passed: total > 0 && score / total >= 0.8,
    updatedAt: now.toISOString()
  };
}

export function summarizeKanaExerciseMap(exercises: KanaExercise[], progressMap: Record<string, KanaExerciseProgress>): { latestScore: number; bestScore: number; completed: boolean; passed: boolean } {
  const results = exercises.map((exercise) => progressMap[exercise.id]).filter(Boolean);
  const totalItems = exercises.reduce((sum, exercise) => sum + exercise.items.length, 0);
  const latestScore = results.reduce((sum, result) => sum + Number(result.score || 0), 0);
  const completedItems = results.reduce((sum, result) => sum + Number(result.total || 0), 0);
  const bestScore = results.reduce((sum, result) => sum + Math.max(Number(result.score || 0), 0), 0);
  return {
    latestScore,
    bestScore,
    completed: totalItems > 0 && completedItems >= totalItems,
    passed: totalItems > 0 && latestScore / totalItems >= 0.8
  };
}

export function kanaReviewProgress(input: unknown, rating: SrsRating, now = new Date()): CardProgress {
  return calculateNextProgress(input, rating, rating, now);
}

function defaultKanaExerciseProgress(): KanaExerciseProgress {
  return {
    answers: {},
    correct: {},
    score: 0,
    total: 0,
    completed: false,
    passed: false,
    updatedAt: null
  };
}

function mergeKanaFinalProgress(value: unknown): KanaFinalProgress {
  const raw = value && typeof value === "object" ? value as Record<string, unknown> : {};
  const fallbackExercise = mergeKanaExerciseProgress(raw);
  const sections = mergeProgressMap(raw.sections, mergeKanaExerciseProgress);
  return {
    ...defaultKanaFinalProgress(),
    sections,
    completed: Boolean(raw.completed || fallbackExercise.completed),
    passed: Boolean(raw.passed || fallbackExercise.passed),
    latestScore: Number(raw.latestScore || fallbackExercise.score || 0),
    bestScore: Number(raw.bestScore || fallbackExercise.score || 0),
    score: Number(raw.score || raw.latestScore || fallbackExercise.score || 0),
    total: Number(raw.total || fallbackExercise.total || 0),
    updatedAt: typeof raw.updatedAt === "string" ? raw.updatedAt : fallbackExercise.updatedAt
  };
}

function mergeKanaExerciseProgress(value: unknown): KanaExerciseProgress {
  const raw = value && typeof value === "object" ? value as Record<string, unknown> : {};
  return {
    answers: raw.answers && typeof raw.answers === "object" ? { ...(raw.answers as Record<string, string>) } : {},
    correct: raw.correct && typeof raw.correct === "object" ? { ...(raw.correct as Record<string, boolean>) } : {},
    score: Number(raw.score || 0),
    total: Number(raw.total || 0),
    completed: Boolean(raw.completed),
    passed: Boolean(raw.passed),
    updatedAt: typeof raw.updatedAt === "string" ? raw.updatedAt : null
  };
}

function mergeKanaLessonProgress(value: unknown): KanaLessonProgress {
  const raw = value && typeof value === "object" ? value as Record<string, unknown> : {};
  return {
    exercises: mergeProgressMap(raw.exercises, mergeKanaExerciseProgress),
    completed: Boolean(raw.completed),
    passed: Boolean(raw.passed),
    latestScore: Number(raw.latestScore || 0),
    bestScore: Number(raw.bestScore || 0),
    updatedAt: typeof raw.updatedAt === "string" ? raw.updatedAt : null
  };
}

function mergeKanaPracticeProgress(value: unknown): KanaPracticeProgress {
  const raw = value && typeof value === "object" ? value as Record<string, unknown> : {};
  return {
    exercises: mergeProgressMap(raw.exercises, mergeKanaExerciseProgress),
    completed: Boolean(raw.completed),
    passed: Boolean(raw.passed),
    latestScore: Number(raw.latestScore || 0),
    bestScore: Number(raw.bestScore || 0),
    updatedAt: typeof raw.updatedAt === "string" ? raw.updatedAt : null
  };
}

function mergeProgressMap<T>(value: unknown, mapper: (item: unknown) => T): Record<string, T> {
  if (!value || typeof value !== "object") return {};
  return Object.fromEntries(Object.entries(value as Record<string, unknown>).map(([key, item]) => [key, mapper(item)]));
}
