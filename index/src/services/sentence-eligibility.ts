/** Count the same slots as the tile builder without constructing/shuffling tiles.
 * Answer duplicates occupy separate slots; distractors are unique learned signs.
 */
export function hasEnoughSentenceTiles(answer: readonly { kanji: string }[], learned: ReadonlySet<string>): boolean {
  if (!answer.length || answer.some((item) => !learned.has(item.kanji))) return false;
  const distinctAnswers = new Set(answer.map((item) => item.kanji));
  const availableSlots = learned.size - distinctAnswers.size + answer.length;
  return availableSlots >= Math.max(4, answer.length);
}
