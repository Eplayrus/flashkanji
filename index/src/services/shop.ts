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

export interface ShopCatalogItemLike {
  id?: unknown;
  type?: unknown;
  price?: unknown;
  defaultOwned?: unknown;
  spriteId?: unknown;
  legacySpriteId?: unknown;
  legacyIds?: unknown;
}

export interface CustomizationBackgroundSelectionInput {
  catalogItems?: ShopCatalogItemLike[] | null;
  owned?: unknown;
  customizationSelected?: unknown;
  progressEquipped?: unknown;
  progressSelected?: unknown;
  fallbackId?: string;
}

export interface CustomizationOutfitSelectionInput {
  catalogItems?: ShopCatalogItemLike[] | null;
  owned?: unknown;
  customizationSelected?: unknown;
  progressEquipped?: unknown;
  progressSelected?: unknown;
  fallbackId?: string;
}

export const DEFAULT_EVA_ROOM_BACKGROUND_ID = "bg_study_hub";
export const DEFAULT_EVA_OUTFIT_ID = "outfit_fis_mentor";

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

function normalizeShopItemId(value: unknown): string {
  return String(value ?? "").trim();
}

function backgroundItems(items: ShopCatalogItemLike[] | null | undefined): ShopCatalogItemLike[] {
  return (Array.isArray(items) ? items : []).filter((item) => String(item?.type || "") === "background" && normalizeShopItemId(item?.id));
}

function outfitItems(items: ShopCatalogItemLike[] | null | undefined): ShopCatalogItemLike[] {
  return (Array.isArray(items) ? items : []).filter((item) => String(item?.type || "") === "outfit" && normalizeShopItemId(item?.id));
}

function isDefaultOwnedItem(item: ShopCatalogItemLike | undefined): boolean {
  return Boolean(item?.defaultOwned) || normalizeMoonFragmentsBalance(item?.price) === 0;
}

export function resolveCustomizationBackgroundSelection(input: CustomizationBackgroundSelectionInput): string {
  const fallbackId = normalizeShopItemId(input.fallbackId) || DEFAULT_EVA_ROOM_BACKGROUND_ID;
  const catalog = backgroundItems(input.catalogItems);
  const byId = new Map(catalog.map((item) => [normalizeShopItemId(item.id), item]));
  const ownedIds = new Set(normalizeShopIdArray(input.owned));
  catalog.forEach((item) => {
    const id = normalizeShopItemId(item.id);
    if (isDefaultOwnedItem(item)) ownedIds.add(id);
  });

  const resolveOwnedBackground = (raw: unknown): string | null => {
    const id = normalizeShopItemId(raw);
    if (!id) return null;
    const item = byId.get(id);
    if (!item) return null;
    return ownedIds.has(id) || isDefaultOwnedItem(item) ? id : null;
  };

  return resolveOwnedBackground(input.customizationSelected)
    || resolveOwnedBackground(input.progressEquipped)
    || resolveOwnedBackground(input.progressSelected)
    || resolveOwnedBackground(fallbackId)
    || fallbackId;
}

export function resolveCustomizationOutfitSelection(input: CustomizationOutfitSelectionInput): string {
  const fallbackId = normalizeShopItemId(input.fallbackId) || DEFAULT_EVA_OUTFIT_ID;
  const catalog = outfitItems(input.catalogItems);
  const byId = new Map(catalog.map((item) => [normalizeShopItemId(item.id), item]));
  const ownedIds = new Set(normalizeShopIdArray(input.owned));
  catalog.forEach((item) => {
    const id = normalizeShopItemId(item.id);
    const spriteId = normalizeShopItemId(item.spriteId);
    if (isDefaultOwnedItem(item)) ownedIds.add(id);
    if (spriteId && ownedIds.has(spriteId)) ownedIds.add(id);
  });

  const resolveCatalogOutfit = (raw: unknown): ShopCatalogItemLike | null => {
    const id = normalizeShopItemId(raw);
    if (!id) return null;
    const direct = byId.get(id);
    if (direct) return direct;
    const legacySpriteToken = id.startsWith("eva_sprite:") ? id : `eva_sprite:${id}`;
    return catalog.find((item) => {
      const spriteId = normalizeShopItemId(item.spriteId);
      const legacySpriteId = normalizeShopItemId(item.legacySpriteId);
      const legacyIds = normalizeShopIdArray(item.legacyIds);
      return spriteId === id
        || legacySpriteId === id
        || legacyIds.includes(id)
        || legacyIds.includes(legacySpriteToken);
    }) || null;
  };

  const resolveOwnedOutfit = (raw: unknown): string | null => {
    const item = resolveCatalogOutfit(raw);
    if (!item) return null;
    const id = normalizeShopItemId(item.id);
    return ownedIds.has(id) || isDefaultOwnedItem(item) ? id : null;
  };

  return resolveOwnedOutfit(input.customizationSelected)
    || resolveOwnedOutfit(input.progressEquipped)
    || resolveOwnedOutfit(input.progressSelected)
    || resolveOwnedOutfit(fallbackId)
    || fallbackId;
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
