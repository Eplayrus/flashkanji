export interface OptionLike {
  value?: unknown;
  [key: string]: unknown;
}

export interface StableShuffledOptions<T extends OptionLike> {
  options: T[];
  order: string[];
}

export function optionValue(option: OptionLike): string {
  return String(option?.value ?? "").trim();
}

export function fisherYatesShuffle<T>(items: readonly T[], random: () => number = Math.random): T[] {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const value = Number(random());
    const normalized = Number.isFinite(value) ? Math.min(Math.max(value, 0), 0.999999999) : 0;
    const swapIndex = Math.floor(normalized * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

export function applyOptionOrder<T extends OptionLike>(options: readonly T[], order: readonly string[] | null | undefined): T[] | null {
  if (!Array.isArray(order) || order.length !== options.length)
    return null;

  const byValue = new Map(options.map((option) => [optionValue(option), option]));
  const ordered: T[] = [];
  const used = new Set<string>();

  for (const value of order) {
    const normalizedValue = String(value ?? "").trim();
    const option = byValue.get(normalizedValue);
    if (!option || used.has(normalizedValue))
      return null;
    used.add(normalizedValue);
    ordered.push(option);
  }

  return ordered.length === options.length ? ordered : null;
}

export function stableShuffledOptions<T extends OptionLike>(
  options: readonly T[],
  existingOrder: readonly string[] | null | undefined,
  random: () => number = Math.random
): StableShuffledOptions<T> {
  const normalizedOptions = options.filter((option) => optionValue(option));
  const existing = applyOptionOrder(normalizedOptions, existingOrder);
  if (existing) {
    return {
      options: existing,
      order: existing.map(optionValue)
    };
  }

  const shuffled = fisherYatesShuffle(normalizedOptions, random);
  return {
    options: shuffled,
    order: shuffled.map(optionValue)
  };
}
