const STORAGE_KEY = 'flashkanji.web.state.v1';

export function getTodayKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function endOfTodayTimestamp() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999).getTime();
}

export function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export async function bootstrapState() {
  let state = loadState();
  if (state) return state;

  const [cardsRes, exRes] = await Promise.all([
    fetch('data/kanji_seed.json'),
    fetch('data/exercise_seed.json')
  ]);
  const [cardsSeed, exercisesSeed] = await Promise.all([cardsRes.json(), exRes.json()]);
  const nowIso = new Date().toISOString();

  state = {
    cards: cardsSeed.map((c) => ({ ...c, stage: 0, nextReviewAt: nowIso })),
    exercises: exercisesSeed,
    dailyStats: {},
    lifetimeStats: {
      totalCardsViewed: 0,
      totalExercisesDone: 0,
      currentStreak: 0,
      bestStreak: 0,
      lastStreakDate: null,
    },
    exerciseLog: [],
  };

  ensureTodayStats(state);
  saveState(state);
  return state;
}

export function ensureTodayStats(state) {
  const key = getTodayKey();
  if (!state.dailyStats[key]) {
    state.dailyStats[key] = {
      cardsViewed: 0,
      exercisesDone: 0,
      streakCounted: false,
    };
  }
  return state.dailyStats[key];
}

export function getWeekErrorCount(state) {
  const now = Date.now();
  const weekAgo = now - 7 * 24 * 60 * 60 * 1000;
  return state.exerciseLog.filter((item) => item.timestamp >= weekAgo && item.mistakes > 0).length;
}

export function getMemoryStats(state) {
  const dueEnd = endOfTodayTimestamp();
  const dueToday = state.cards.filter((c) => new Date(c.nextReviewAt).getTime() <= dueEnd).length;
  const shortMemory = state.cards.filter((c) => c.stage <= 2).length;
  const longMemory = state.cards.filter((c) => c.stage >= 3).length;
  return { dueToday, shortMemory, longMemory };
}

export function getDueCards(state) {
  const dueEnd = endOfTodayTimestamp();
  return state.cards
    .filter((c) => new Date(c.nextReviewAt).getTime() <= dueEnd)
    .sort((a, b) => new Date(a.nextReviewAt) - new Date(b.nextReviewAt));
}

export function maybeCountStreak(state) {
  const todayKey = getTodayKey();
  const today = ensureTodayStats(state);
  if (today.streakCounted) return;

  const qualifies = today.cardsViewed >= 15 || today.exercisesDone >= 1;
  if (!qualifies) return;

  const life = state.lifetimeStats;
  const last = life.lastStreakDate;
  if (!last) {
    life.currentStreak = 1;
  } else {
    const lastDate = new Date(`${last}T00:00:00`);
    const curDate = new Date(`${todayKey}T00:00:00`);
    const diffDays = Math.round((curDate - lastDate) / (24 * 60 * 60 * 1000));
    life.currentStreak = diffDays === 1 ? life.currentStreak + 1 : diffDays === 0 ? life.currentStreak : 1;
  }

  life.bestStreak = Math.max(life.bestStreak, life.currentStreak);
  life.lastStreakDate = todayKey;
  today.streakCounted = true;
}
