import { beforeEach, describe, expect, it } from "vitest";
import {
  CHANGELOG_LAST_SEEN_VERSION_KEY,
  FLASH_KANJI_HAS_VISITED_KEY,
  decideChangelogVisibility,
  markChangelogHandled,
  normalizeChangelogPayload,
  resetChangelogSessionForTests
} from "../../src/services/changelog";

function memoryStorage(initial: Record<string, string> = {}) {
  const data = { ...initial };
  return {
    getItem: (key: string) => data[key] ?? null,
    setItem: (key: string, value: string) => {
      data[key] = value;
    },
    data
  };
}

const payload = normalizeChangelogPayload({
  currentVersion: "2026.08.06",
  entries: [
    {
      version: "2026.08.06",
      date: "2026-08-06",
      title: { ru: "Что изменилось для тебя", en: "What changed for you" },
      items: { ru: ["Учебные данные остаются в браузере"], en: ["Study data stays in your browser"] }
    }
  ]
});

describe("changelog visibility", () => {
  beforeEach(() => {
    resetChangelogSessionForTests();
  });

  it("does not show to a completely new user and marks current version handled", () => {
    const storage = memoryStorage();
    const decision = decideChangelogVisibility(payload, {}, storage);

    expect(decision.shouldShow).toBe(false);
    expect(decision.shouldMarkHandled).toBe(true);

    markChangelogHandled(decision.currentVersion, storage);
    expect(storage.data[FLASH_KANJI_HAS_VISITED_KEY]).toBe("true");
    expect(storage.data[CHANGELOG_LAST_SEEN_VERSION_KEY]).toBe("2026.08.06");
  });

  it("shows once to an existing user without lastSeenVersion", () => {
    const storage = memoryStorage();
    const decision = decideChangelogVisibility(payload, { cards: { "1": { state: "Review" } } }, storage);

    expect(decision.shouldShow).toBe(true);
    expect(decision.entry?.items.ru).toEqual(["Учебные данные остаются в браузере"]);

    markChangelogHandled(decision.currentVersion, storage);
    expect(decideChangelogVisibility(payload, { cards: { "1": {} } }, storage).shouldShow).toBe(false);
  });

  it("can ignore hydrated default progress signals for a first run", () => {
    const storage = memoryStorage();
    const decision = decideChangelogVisibility(
      payload,
      { cards: { "1": { state: "New" } }, appOpens: 1 },
      storage,
      { hadPriorVisit: false, useProgressSignals: false }
    );

    expect(decision.shouldShow).toBe(false);
    expect(decision.shouldMarkHandled).toBe(true);
  });

  it("still shows when the boot snapshot confirms a returning user", () => {
    const storage = memoryStorage();
    const decision = decideChangelogVisibility(payload, {}, storage, {
      hadPriorVisit: true,
      useProgressSignals: false
    });

    expect(decision.shouldShow).toBe(true);
  });

  it("does not show when current version was already seen", () => {
    const storage = memoryStorage({ [CHANGELOG_LAST_SEEN_VERSION_KEY]: "2026.08.06" });
    const decision = decideChangelogVisibility(payload, { appOpens: 8 }, storage);

    expect(decision.shouldShow).toBe(false);
  });

  it("shows again when changelog currentVersion changes", () => {
    const storage = memoryStorage({ [CHANGELOG_LAST_SEEN_VERSION_KEY]: "2026.07.01" });
    const decision = decideChangelogVisibility(payload, { appOpens: 8 }, storage);

    expect(decision.shouldShow).toBe(true);
    expect(decision.currentVersion).toBe("2026.08.06");
  });

  it("survives unavailable storage without throwing", () => {
    const storage = {
      getItem: () => {
        throw new Error("blocked");
      },
      setItem: () => {
        throw new Error("blocked");
      }
    };

    const decision = decideChangelogVisibility(payload, { appOpens: 2 }, storage);
    expect(decision.shouldShow).toBe(true);
    expect(() => markChangelogHandled(decision.currentVersion, storage)).not.toThrow();
  });
});
