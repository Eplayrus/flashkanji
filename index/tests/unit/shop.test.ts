import { describe, expect, it } from "vitest";
import {
  normalizeMoonFragmentsBalance,
  normalizeShopEquipped,
  normalizeShopIdArray,
  resolveShopPurchase
} from "../../src/services/shop";

describe("customization shop state", () => {
  it("purchases an affordable item exactly once", () => {
    const result = resolveShopPurchase({
      balance: 100,
      owned: [],
      itemId: "bg_classroom",
      price: 30
    });

    expect(result).toMatchObject({
      status: "purchased",
      balance: 70,
      owned: ["bg_classroom"],
      price: 30
    });
  });

  it("does not mutate balance when funds are insufficient", () => {
    const result = resolveShopPurchase({
      balance: 20,
      owned: [],
      itemId: "bg_classroom",
      price: 30
    });

    expect(result.status).toBe("insufficient-funds");
    expect(result.balance).toBe(20);
    expect(result.owned).not.toContain("bg_classroom");
  });

  it("does not charge for an already-owned item", () => {
    const result = resolveShopPurchase({
      balance: 100,
      owned: ["bg_classroom"],
      itemId: "bg_classroom",
      price: 30
    });

    expect(result.status).toBe("already-owned");
    expect(result.balance).toBe(100);
    expect(result.owned).toEqual(["bg_classroom"]);
  });

  it("normalizes damaged legacy state safely", () => {
    expect(normalizeMoonFragmentsBalance(undefined)).toBe(0);
    expect(normalizeMoonFragmentsBalance("100")).toBe(100);
    expect(normalizeMoonFragmentsBalance(Number.NaN, 5)).toBe(5);
    expect(normalizeShopIdArray({ bg_classroom: true, broken: false, outfit: { owned: true } })).toEqual(["bg_classroom", "outfit"]);
    expect(normalizeShopEquipped(null)).toMatchObject({
      background: null,
      outfit: null,
      theme: null,
      decoration: null,
      frame: null,
      effect: null
    });
  });
});
