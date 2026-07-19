export interface LevelCurve {
  baseXp: number;
  growth: number;
}

export function xpForLevel(level: number, curve: LevelCurve): number {
  return Math.round(curve.baseXp * Math.pow(curve.growth, level - 1));
}

export function calculateLevel(totalXp: number, curve: LevelCurve): number {
  let level = 1;
  let remaining = totalXp;
  while (remaining >= xpForLevel(level, curve) && level < 99) {
    remaining -= xpForLevel(level, curve);
    level += 1;
  }
  return level;
}

export function levelProgress(totalXp: number, curve: LevelCurve) {
  let level = 1;
  let remaining = totalXp;
  while (remaining >= xpForLevel(level, curve) && level < 99) {
    remaining -= xpForLevel(level, curve);
    level += 1;
  }
  const next = xpForLevel(level, curve);
  return {
    level,
    current: remaining,
    next,
    toNext: Math.max(0, next - remaining),
    percent: next ? Math.round((remaining / next) * 100) : 0
  };
}
