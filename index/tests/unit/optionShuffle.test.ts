import { describe, expect, it } from "vitest";
import { fisherYatesShuffle, stableShuffledOptions } from "../../src/services/optionShuffle";

const options = [
  { value: "correct", label: "Correct answer", correct: true },
  { value: "wrong-a", label: "Wrong A", correct: false },
  { value: "wrong-b", label: "Wrong B", correct: false },
  { value: "wrong-c", label: "Wrong C", correct: false }
];

function sequenceRandom(values: number[]) {
  let index = 0;
  return () => values[index++ % values.length];
}

describe("SRS answer option shuffle", () => {
  it("uses Fisher-Yates order without tying correctness to button index", () => {
    const shuffled = fisherYatesShuffle(options, sequenceRandom([0.99, 0, 0.5]));

    expect(shuffled.map((option) => option.value)).toEqual(["wrong-b", "wrong-a", "correct", "wrong-c"]);
    expect(shuffled.find((option) => option.correct)?.value).toBe("correct");
    expect(shuffled.findIndex((option) => option.correct)).toBe(2);
  });

  it("can produce different stable orders for different random sequences", () => {
    const first = stableShuffledOptions(options, null, sequenceRandom([0.99, 0, 0.5]));
    const second = stableShuffledOptions(options, null, sequenceRandom([0, 0.99, 0]));

    expect(first.order).not.toEqual(second.order);
    expect(new Set(first.order)).toEqual(new Set(options.map((option) => option.value)));
    expect(new Set(second.order)).toEqual(new Set(options.map((option) => option.value)));
  });

  it("reuses an existing order instead of reshuffling the same card render", () => {
    const first = stableShuffledOptions(options, null, sequenceRandom([0.99, 0, 0.5]));
    const rerender = stableShuffledOptions(options, first.order, sequenceRandom([0, 0, 0]));

    expect(rerender.order).toEqual(first.order);
    expect(rerender.options.map((option) => option.value)).toEqual(first.order);
  });
});
