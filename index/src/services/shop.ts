export type ShopPurchaseStatus = "purchased" | "already-owned" | "insufficient-funds" | "invalid-item";

export interface ShopPurchaseInput {
  balance: unknown;
  owned: unknown;
  itemId: unknown;
  price: unknown;
}

export interface ShopPurchaseResult {
  status: ShopPurchaseStatus;
  balance: number;
  owned: string[];
  itemId: string;
  price: number;
}

export function normalizeMoonFragmentsBalance(value: unknown, fallback = 0): number {
  const primary = Number(value);
  const fallbackNumber = Number(fallback);
  const resolved = Number.isFinite(primary) ? primary : Number.isFinite(fallbackNumber) ? fallbackNumber : 0;
  return Math.max(0, Math.floor(resolved));
}

export function normalizeShopIdArray(value: unknown): string[] {
  const ids: string[] = [];
  const add = (raw: unknown) => {
    const id = String(raw ?? "").trim();
    if (id) ids.push(id);
  };

  if (Array.isArray(value)) {
    value.forEach(add);
  } else if (value instanceof Set) {
    value.forEach(add);
  } else if (typeof value === "string") {
    value.split(",").forEach(add);
  } else if (value && typeof value === "object") {
    Object.entries(value as Record<string, unknown>).forEach(([id, enabled]) => {
      if (enabled !== false && enabled !== null && enabled !== undefined) add(id);
    });
  }

  return [...new Set(ids)];
}

export function normalizeShopEquipped(value: unknown): Record<string, string | null> {
  const slots = ["background", "outfit", "theme", "decoration", "frame", "effect"] as const;
  const source = value && typeof value === "object" ? value as Record<string, unknown> : {};
  return Object.fromEntries(slots.map((slot) => {
    const raw = source[slot];
    const normalized = raw === null || raw === undefined ? null : String(raw).trim();
    return [slot, normalized || null];
  }));
}

export function resolveShopPurchase(input: ShopPurchaseInput): ShopPurchaseResult {
  const itemId = String(input.itemId ?? "").trim();
  const price = normalizeMoonFragmentsBalance(input.price);
  const balance = normalizeMoonFragmentsBalance(input.balance);
  const owned = normalizeShopIdArray(input.owned);

  if (!itemId) {
    return { status: "invalid-item", balance, owned, itemId, price };
  }

  if (owned.includes(itemId)) {
    return { status: "already-owned", balance, owned, itemId, price };
  }

  if (balance < price) {
    return { status: "insufficient-funds", balance, owned, itemId, price };
  }

  return {
    status: "purchased",
    balance: balance - price,
    owned: [...owned, itemId],
    itemId,
    price
  };
}
