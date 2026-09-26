import { describe, expect, it, vi } from "vitest";
import { createResourceCache } from "../../src/services/resource-cache";

describe("session resource cache", () => {
  it("shares in-flight loads and retains the same parsed object for warm navigation", async () => {
    const cache = createResourceCache<object>();
    const payload = { items: [1, 2] };
    const load = vi.fn(async () => payload);
    const first = cache.get("course.json", load);
    expect(cache.get("course.json", load)).toBe(first);
    expect(await first).toBe(payload);
    expect(await cache.get("course.json", load)).toBe(payload);
    expect(load).toHaveBeenCalledTimes(1);
  });
  it("retries failures and allows explicit content refresh", async () => {
    const cache = createResourceCache<number>();
    const load = vi.fn().mockRejectedValueOnce(new Error("offline")).mockResolvedValue(2);
    await expect(cache.get("course.json", load)).rejects.toThrow("offline");
    expect(await cache.get("course.json", load)).toBe(2);
    cache.delete("course.json");
    expect(await cache.get("course.json", load)).toBe(2);
    expect(load).toHaveBeenCalledTimes(3);
  });
});
