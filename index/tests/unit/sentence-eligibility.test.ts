import { describe, expect, it } from "vitest";
import { hasEnoughSentenceTiles } from "../../src/services/sentence-eligibility";

describe("sentence eligibility without building all candidate tiles", () => {
  it("preserves the tile builder's minimum, including repeated answer symbols", () => {
    const signs = ["日", "本", "月", "火", "水", "木", "金"];
    for (let count = 0; count <= signs.length; count++) {
      const learned = new Set(signs.slice(0, count));
      for (const slots of [[], ["日"], ["日", "本"], ["日", "日"], ["日", "本", "日", "本"], signs]) {
        const distinctAnswers = new Set(slots);
        const distractors = [...learned].filter((sign) => !distinctAnswers.has(sign));
        const tileCount = Math.min(Math.max(6, slots.length + 2), slots.length + distractors.length);
        const legacyEligible = slots.length > 0 && slots.every((sign) => learned.has(sign))
          && tileCount >= Math.max(4, slots.length);
        expect(hasEnoughSentenceTiles(slots.map((kanji) => ({ kanji })), learned)).toBe(legacyEligible);
      }
    }
  });
});
