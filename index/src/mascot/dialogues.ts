import { localized, type Language, type LocalizedText } from "../services/i18n";

export interface MascotDefinition {
  role: LocalizedText;
  name: LocalizedText;
  sprites: Record<string, string>;
  dialogs: Record<string, Partial<Record<Language, string[]>>>;
}

export function mascotLine(mascot: MascotDefinition, category: string, language: Language): string {
  const group = mascot.dialogs[category] || mascot.dialogs.welcome || {};
  const lines = group[language] || group.ru || [localized(mascot.name, language)];
  return lines[Math.floor(Math.random() * lines.length)];
}
