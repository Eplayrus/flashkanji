(() => {
  "use strict";

  const STORAGE_KEY = "flashKanji.uxSound.v1";
  const BASE_PATH = "./audio/ux_sounds/";
  const COOLDOWN_MS = 110;

  const SOUND_FILES = {
    achievement_unlock: "achievement_unlock.mp3",
    answer_correct: "answer_correct.mp3",
    answer_wrong: "answer_wrong.mp3",
    button_click: "button_click.mp3",
    button_hover: "button_hover.mp3",
    card_flip: "card_flip.mp3",
    daily_bonus: "daily_bonus.mp3",
    item_unlock: "item_unlock.mp3",
    level_up: "level_up.mp3",
    menu_close: "menu_close.mp3",
    menu_open: "menu_open.mp3",
    moon_fragment_gain: "moon_fragment_gain.mp3",
    notification_reminder: "notification_reminder.mp3",
    notification_reward: "notification_reward.mp3",
    notification_soft: "notification_soft.mp3",
    page_turn: "page_turn.mp3",
    purchase_failed: "purchase_failed.mp3",
    purchase_success: "purchase_success.mp3",
    streak_reward: "streak_reward.mp3",
    tab_switch: "tab_switch.mp3",
    xp_gain: "xp_gain.mp3"
  };

  const FALLBACKS = {
    lesson_complete: "level_up",
    achievement_unlock: "level_up",
    item_unlock: "button_click",
    moon_fragment_gain: "notification_reward",
    purchase_failed: "answer_wrong",
    purchase_success: "answer_correct",
    tab_switch: "button_click",
    xp_gain: "notification_soft"
  };

  const sounds = new Map();
  const missing = new Set();
  const lastPlayed = new Map();
  let settings = loadSettings();

  function loadSettings() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { enabled: true, volume: 0.75 };
      const saved = JSON.parse(raw);
      return {
        enabled: saved.enabled !== false,
        volume: clampVolume(saved.volume)
      };
    } catch {
      return { enabled: true, volume: 0.75 };
    }
  }

  function saveSettings() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (error) {
      console.warn("Cannot save UX sound settings.", error);
    }
  }

  function clampVolume(value) {
    const numeric = Number(value);
    if (!Number.isFinite(numeric)) return 0.75;
    return Math.max(0, Math.min(1, numeric));
  }

  function resolveSoundName(name) {
    return SOUND_FILES[name] ? name : FALLBACKS[name] || name;
  }

  function warnMissing(name) {
    if (missing.has(name)) return;
    missing.add(name);
    console.warn(`UX sound is not available: ${name}`);
  }

  function getAudio(name) {
    const resolved = resolveSoundName(name);
    const file = SOUND_FILES[resolved];
    if (!file) {
      warnMissing(name);
      return null;
    }
    if (!sounds.has(resolved)) {
      const audio = new Audio(`${BASE_PATH}${file}`);
      audio.preload = "auto";
      audio.addEventListener("error", () => warnMissing(resolved), { once: true });
      sounds.set(resolved, audio);
    }
    return sounds.get(resolved) || null;
  }

  function preloadSounds() {
    Object.keys(SOUND_FILES).forEach((name) => {
      const audio = getAudio(name);
      try {
        audio?.load();
      } catch (error) {
        console.warn(`Cannot preload UX sound: ${name}`, error);
      }
    });
  }

  function playSound(name) {
    if (!settings.enabled || settings.volume <= 0) return false;
    const resolved = resolveSoundName(String(name));
    const now = performance.now();
    if (now - (lastPlayed.get(resolved) || 0) < COOLDOWN_MS) return false;

    const source = getAudio(resolved);
    if (!source) return false;

    lastPlayed.set(resolved, now);
    try {
      source.pause();
      source.currentTime = 0;
      source.volume = settings.volume;
      source.play().catch((error) => {
        if (error?.name !== "NotAllowedError") console.warn(`Cannot play UX sound: ${resolved}`, error);
        window.FlashKanjiUxToneFallback?.(resolved);
      });
      return true;
    } catch (error) {
      console.warn(`Cannot play UX sound: ${resolved}`, error);
      return false;
    }
  }

  function setSoundEnabled(value) {
    settings.enabled = Boolean(value);
    saveSettings();
  }

  function isSoundEnabled() {
    return settings.enabled;
  }

  function setSoundVolume(value) {
    settings.volume = clampVolume(value);
    saveSettings();
  }

  function getSoundVolume() {
    return settings.volume;
  }

  window.FlashKanjiSound = {
    preloadSounds,
    playSound,
    setSoundEnabled,
    isSoundEnabled,
    setSoundVolume,
    getSoundVolume
  };
})();
