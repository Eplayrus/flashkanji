export type Language = "ru" | "en";

export type LocalizedText = Partial<Record<Language, string>>;

export function localized(value: LocalizedText | string | undefined, language: Language): string {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[language] || value.ru || value.en || "";
}
