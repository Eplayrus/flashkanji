import { describe, expect, it, vi } from "vitest";
import { readStoredProgress } from "../../src/services/storage";

describe("LocalStorage recovery", () => {
  it("reads the legacy key and unwraps exported progress", () => {
    const storage = { getItem: (key: string) => key.endsWith("v1") ? JSON.stringify({ progress: { xp: 42 } }) : null };
    expect(readStoredProgress(storage)).toMatchObject({ xp: 42 });
  });

  it("does not crash on damaged data", () => {
    vi.spyOn(console, "warn").mockImplementation(() => undefined);
    const storage = { getItem: () => "{broken" };
    expect(readStoredProgress(storage)).toBeNull();
  });
});
