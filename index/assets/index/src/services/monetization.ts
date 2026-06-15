export interface MonetizationCatalog {
  version: number;
  premiumFlags: {
    premiumLessons: boolean;
    premiumVoicePacks: boolean;
    cloudSync: boolean;
  };
  plannedProducts: Array<{
    id: string;
    type: "lessonPack" | "voicePack" | "sync";
    enabled: boolean;
  }>;
}

export function isPremiumEnabled(catalog: MonetizationCatalog, key: keyof MonetizationCatalog["premiumFlags"]): boolean {
  return Boolean(catalog.premiumFlags[key]);
}
