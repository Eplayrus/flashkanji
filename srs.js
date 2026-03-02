export function rememberIntervalDays(stage) {
  if (stage <= 0) return 1;
  if (stage === 1) return 2;
  if (stage === 2) return 5;
  if (stage === 3) return 14;
  if (stage === 4) return 30;
  return 60;
}

export function applyRemember(card) {
  const interval = rememberIntervalDays(card.stage);
  card.stage += 1;
  card.nextReviewAt = new Date(Date.now() + interval * 24 * 60 * 60 * 1000).toISOString();
}

export function applyNotRemember(card) {
  card.stage = 0;
  card.nextReviewAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
}
