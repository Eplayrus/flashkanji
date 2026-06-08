(() => {
  "use strict";

  const STORAGE_KEY = "flashKanji.progress.v2";
  const LEGACY_STORAGE_KEY = "flashKanji.progress.v1";
  const PWA_INSTALL_STORAGE_KEY = "flashKanji.pwaInstallPrompt.v1";
  const NOTIFICATION_STORAGE_KEY = "flashKanji.notificationPrompt.v1";
  const CUSTOMIZATION_STORAGE_KEY = "flashkanji_customization";
  const EVA_STATE_STORAGE_KEY = "flashkanji_eva_state_v2";
  const APP_VERSION = 3;
  const BUILD_VERSION = "2026-06-06-pwa-decor-eva-v1";
  const MOON_CHEAT_CODE = "moonfarm";
  const BUILD_STORAGE_KEY = "flashKanji.appBuild.v1";
  const PWA_CACHE_RESET_STORAGE_KEY = "flashKanji.pwaCacheReset.v1";
      // Guard key for one-time forced PWA cache reset.
      // When set to "done", the app will skip resetting caches on subsequent loads.
      const FORCE_PWA_CACHE_RESET_FLAG = "flashKanji.forcePwaCacheReset.v1";

  const DATA_URLS = {
    lessons: "data/lessons.json",
    dialogues: "data/dialogues.json",
    i18n: "data/i18n.json",
    rewards: "data/rewards.json",
    kanjiMeta: "data/kanji/meta.json",
    kanjiHints: "data/kanji/hints.json",
    kanjiTranslations: "data/kanji/translations.json",
    kanjiStrokes: "data/kanji/stroke-order-kanjivg.json",
    kanjiPageSources: "data/sources/kanji-page-sources.json",
    lessonTranslations: "data/lessons/translations.json",
    vocabulary: "data/vocabulary/index.json",
    sentences: "data/sentences/index.json",
    achievements: "data/achievements/index.json",
    jlptLessons: "data/jlpt-lessons.json",
    jlptPracticeLessons: "data/jlpt-practice-lessons.json",
    monetization: "data/monetization/catalog.json",
    customizationShop: "data/customization-shop.json",
    evaBackgrounds: "data/eva-backgrounds.json",
    evaSprites: "data/eva-sprites.json",
    evaRoomDialogues: "data/eva-room-dialogues.json",
    evaAutonomyLines: "data/eva-autonomy-lines.json",
    evaExpandedDialogues: "data/eva-expanded-dialogues.json",
    evaFisPersonality: "data/eva-fis-personality.json",
    evaPresence: "data/eva-presence.json"
  };

  const ratingLabels = { forgot: "Forgot", remember: "Remember", again: "Again", hard: "Hard", good: "Good", easy: "Easy" };
  const stateLabels = { New: "New", Learning: "Learning", Review: "Review", Mastered: "Mastered", new: "New", learning: "Learning", review: "Review", mastered: "Mastered" };
  const commonExampleTranslationsEn = {
    nihon: "Japan",
    kyou: "today",
    getsuyoubi: "Monday",
    ichigatsu: "January",
    nihonjin: "Japanese person",
    hitori: "one person",
    honya: "bookstore",
    ichinichi: "one day",
    ichiban: "number one, the best",
    nigatsu: "February",
    futari: "two people",
    jikan: "time, hour",
    nanji: "what time",
    kotoshi: "this year",
    rainen: "next year",
    kaimono: "shopping",
    kounyuu: "purchase",
    baiten: "kiosk, shop stall",
    hatsubai: "release, sale",
    shiyou: "use",
    tsukaikata: "how to use",
    soushin: "message sending",
    housou: "broadcast",
    sekai: "world",
    sedai: "generation",
    gyoukai: "industry",
    toukou: "post, publication",
    toushi: "investment",
    jouhou: "information",
    houkoku: "report",
    kakunin: "confirmation, check",
    shounin: "approval",
    kaigi: "meeting",
    giron: "discussion",
    kengen: "access rights, permission",
    chosakuken: "copyright",
    eikyou: "influence",
    hibiku: "to sound, to resonate"
  };
  const sentenceRewardFallback = { xp: 12, coins: 2 };
  const routes = ["home", "learn", "review", "dictionary", "kanji", "writing", "stats", "achievements", "eva-room", "jlpt-lesson"];
  const DICTIONARY_INITIAL_LIMIT = 72;
  const DICTIONARY_INCREMENT = 96;

  const state = {
    route: readRouteHash(),
    lessons: [],
    cards: [],
    i18n: null,
    dialogues: null,
    rewards: null,
    kanjiMeta: {},
    kanjiHints: {},
    kanjiTranslations: {},
    kanjiStrokes: {},
    kanjiPageSources: {},
    lessonTranslations: {},
    vocabulary: [],
    sentenceExercises: [],
    achievements: [],
    achievementCategories: [],
    jlptLessons: [],
    jlptPracticeLessons: [],
    monetization: null,
    customizationCatalog: { categories: [], items: [] },
    customization: null,
    evaBackgrounds: [],
    evaSprites: {},
    evaRoomDialogues: [],
    evaRoomLines: [],
    evaAutonomyLines: [],
    evaFisPersonality: null,
    evaPresence: null,
    evaRuntime: null,
    evaRoomShopOpen: false,
    progress: null,
    activeLessonId: null,
    activeJlptLesson: null,
    activeCardId: null,
    kanjiPageId: readKanjiRouteId(),
    revealed: false,
    detailCardId: null,
    rewardModal: null,
    rewardQueue: [],
    charts: [],
    filters: { query: "", jlpt: "all", strokes: "all", radical: "all", favorites: "all" },
    dictionaryVisibleCount: DICTIONARY_INITIAL_LIMIT,
    shopFilters: { category: "all", view: "all", sort: "featured" },
    sentencePractice: { activeId: null, selected: [], checked: false, result: null, tileKeys: [] },
    readingCheck: { cardId: null, value: "", status: null, message: "" },
    writingStep: 0,
    navMenu: null,
    pendingFocus: null,
    pwaInstallPrompt: loadPwaInstallPromptState(),
    notificationPrompt: loadNotificationPromptState(),
    notificationPromptVisible: false
  };

  let audioContext = null;
  let activeKanjiAudio = null;
  let lastAutoAudioKey = "";
  let lastUxSoundAt = 0;
  let toastTimer = 0;
  let deferredPwaInstallPrompt = null;
  let notificationPromptTimer = 0;
  let evaAutonomyTimer = 0;
  let evaSpriteRotationTimer = 0;
  let evaSpriteRotationTick = Math.floor(Date.now() / 60000);
  let lastEvaDirectActionAt = 0;
  let moonCheatBuffer = "";
  let recentEvaMascotLineIds = [];
  const notificationTimers = new Map();
  const notificationUsageStartedAt = Date.now();
  const writingSession = {
    cardId: null,
    strokes: [],
    currentStroke: [],
    drawing: false,
    activePointerId: null,
    completed: false,
    demoAnimationId: 0
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const app = $("#app");
  const importInput = $("#progressImport");

  document.addEventListener("click", handleClick);
  document.addEventListener("pointerdown", handleEvaDirectPointer);
  document.addEventListener("input", handleInput);
  document.addEventListener("change", handleInput);
  document.addEventListener("keydown", handleKeydown);
  window.flashKanjiFarmMoon = (amount = 5000) => grantMoonCheat(amount);
  importInput.addEventListener("change", handleImportFile);
  window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  window.addEventListener("appinstalled", handlePwaInstallAccepted);
  window.addEventListener("eva:event", (event) => {
    if (event.detail?.handledByFlashKanji) return;
    handleEvaEvent(event.detail || {});
  });
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) maybeShowNotificationPrompt("usage");
    if (!document.hidden && state.route === "eva-room" && maybeRunEvaAutonomy("return")) {
      saveProgress();
      render();
    }
  });
  window.addEventListener("hashchange", () => {
    const route = readRouteHash();
    const kanjiPageId = readKanjiRouteId();
    if (route !== state.route || (route === "kanji" && kanjiPageId !== state.kanjiPageId)) {
      state.route = route;
      state.kanjiPageId = route === "kanji" ? kanjiPageId : null;
      state.detailCardId = null;
      state.revealed = false;
      state.navMenu = null;
      state.pendingFocus = null;
      if (route !== "eva-room") state.evaRoomShopOpen = false;
      resetReadingCheck();
      render();
      if (route === "eva-room") dispatchEvaEvent("room_opened");
    }
  });

  boot();

  async function boot() {
    if (await forcePwaCacheResetIfNeeded()) return;
if (await refreshStaleAppCache()) return;
    app.innerHTML = renderLoading();
    state.progress = loadProgress();
    syncUxSoundSettings();
    preloadUxSounds();
    applyTheme();

    try {
      const [course, i18n, dialogues, rewards, kanjiMeta, kanjiHints, kanjiTranslations, kanjiStrokes, kanjiPageSources, lessonTranslations, vocabulary, sentences, achievements, jlptLessons, jlptPracticeLessons, monetization, customizationShop, evaBackgrounds, evaSprites, evaRoomDialogues, evaAutonomyLines, evaExpandedDialogues, evaFisPersonality, evaPresence] = await Promise.all([
        loadCourse(),
        fetchJson(DATA_URLS.i18n),
        fetchJson(DATA_URLS.dialogues),
        fetchJson(DATA_URLS.rewards),
        fetchJson(DATA_URLS.kanjiMeta),
        fetchJson(DATA_URLS.kanjiHints),
        fetchJson(DATA_URLS.kanjiTranslations),
        fetchJson(DATA_URLS.kanjiStrokes),
        fetchJson(DATA_URLS.kanjiPageSources),
        fetchJson(DATA_URLS.lessonTranslations),
        fetchJson(DATA_URLS.vocabulary),
        fetchJson(DATA_URLS.sentences),
        fetchJson(DATA_URLS.achievements),
        fetchJson(DATA_URLS.jlptLessons),
        fetchJson(DATA_URLS.jlptPracticeLessons),
        fetchJson(DATA_URLS.monetization),
        fetchJson(DATA_URLS.customizationShop),
        fetchJson(DATA_URLS.evaBackgrounds),
        fetchJson(DATA_URLS.evaSprites),
        fetchJson(DATA_URLS.evaRoomDialogues),
        fetchJson(DATA_URLS.evaAutonomyLines),
        fetchJson(DATA_URLS.evaExpandedDialogues),
        fetchJson(DATA_URLS.evaFisPersonality),
        fetchJson(DATA_URLS.evaPresence)
      ]);
      const achievementBundle = normalizeAchievementData(achievements, rewards.achievements || []);
      state.lessons = course.lessons;
      state.cards = course.cards;
      state.i18n = i18n;
      state.dialogues = dialogues;
      state.rewards = rewards;
      state.achievements = achievementBundle.items;
      state.achievementCategories = achievementBundle.categories;
      state.jlptLessons = normalizeJlptLessons(jlptLessons);
      state.jlptPracticeLessons = normalizeJlptPracticeLessons(jlptPracticeLessons);
      state.rewards.achievements = state.achievements;
      state.customizationCatalog = normalizeCustomizationCatalog(customizationShop);
      state.kanjiMeta = kanjiMeta.items || {};
      state.kanjiHints = kanjiHints.items || {};
      state.kanjiTranslations = kanjiTranslations.items || {};
      state.kanjiStrokes = normalizeKanjiStrokeData(kanjiStrokes);
      state.kanjiPageSources = kanjiPageSources.items || {};
      state.lessonTranslations = lessonTranslations.items || {};
      state.vocabulary = vocabulary.items || [];
      state.sentenceExercises = sentences.items || [];
      state.monetization = monetization;
      const evaRoomData = normalizeEvaRoomDialogueData(evaRoomDialogues);
      const evaFisRoomData = normalizeEvaRoomDialogueData(evaFisPersonality || {});
      const evaPresenceData = normalizeEvaPresenceData(evaPresence || {});
      state.evaBackgrounds = Array.isArray(evaBackgrounds) ? evaBackgrounds : [];
      state.evaSprites = evaSprites || {};
      state.evaFisPersonality = evaFisPersonality || null;
      state.evaPresence = evaPresenceData;
      state.evaRoomDialogues = mergeEvaFisRoomNodes(evaRoomData.nodes, evaFisRoomData.nodes, evaFisPersonality?.introChoices || []);
      state.evaRoomLines = [...evaRoomData.lines, ...evaFisRoomData.lines, ...evaPresenceData.roomLines];
      state.evaAutonomyLines = [
        ...normalizeEvaAutonomyLines(evaAutonomyLines),
        ...normalizeEvaAutonomyLines(evaExpandedDialogues),
        ...normalizeEvaAutonomyLines(evaFisPersonality?.autonomyLines || []),
        ...evaPresenceData.autonomyLines
      ];
      hydrateProgress();
      hydrateCustomization();
      hydrateEvaState();
      applyTheme();
      syncPwaInstallInstalledFlag();
      recordAppOpen();
      claimDailyBonus();
      evaluateAchievements();
      saveProgress();
      render();
      registerServiceWorker();
      startEvaAutonomyLoop();
      startEvaSpriteRotationLoop();
      scheduleNotificationPromptCheck();
      prepareDailyNotifications();
    } catch (error) {
      console.error(error);
      app.innerHTML = renderLoadError(error);
    }
  }

  async function refreshStaleAppCache() {
    try {
      const previous = localStorage.getItem(BUILD_STORAGE_KEY);
      localStorage.setItem(BUILD_STORAGE_KEY, BUILD_VERSION);
      if (!previous || previous === BUILD_VERSION) return false;
      const guardKey = `${BUILD_STORAGE_KEY}:reloaded:${BUILD_VERSION}`;
      if (sessionStorage.getItem(guardKey)) return false;
      sessionStorage.setItem(guardKey, "1");
      if ("caches" in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map((key) => caches.delete(key)));
      }
      if ("serviceWorker" in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(registrations.map(async (registration) => {
          requestServiceWorkerCacheReset(registration);
          await registration.update().catch(() => null);
        }));
      }
      location.reload();
      return true;
    } catch (error) {
      console.warn("App cache version check failed.", error);
      return false;
    }
  }

  
      /**
       * Force resetting PWA caches and reloading the page.
       * This helper will delete all caches and instruct service workers
       * to reset their internal caches. It only runs once per user based on
       * the FORCE_PWA_CACHE_RESET_FLAG. After running it reloads
       * the page so new parameters take effect.
       */
      async function forcePwaCacheResetIfNeeded() {
        try {
          const done = localStorage.getItem(FORCE_PWA_CACHE_RESET_FLAG);
          if (done === 'done') return false;
          // Mark as done to avoid repeated resets
          localStorage.setItem(FORCE_PWA_CACHE_RESET_FLAG, 'done');
          // Clear all caches via the Cache Storage API
          if ('caches' in window) {
            const keys = await caches.keys();
            await Promise.all(keys.map((key) => caches.delete(key)));
          }
          // Notify service workers to reset their internal caches and update them
          if ('serviceWorker' in navigator) {
            const registrations = await navigator.serviceWorker.getRegistrations();
            await Promise.all(registrations.map(async (registration) => {
              try {
                if (registration.active) {
                  // Post the same message the service worker listens for to trigger cache clearing
                  registration.active.postMessage('FLASH_KANJI_FORCE_CACHE_RESET');
                }
              } catch (_) {
                /* ignore */
              }
              // Request the worker to update itself
              await registration.update().catch(() => null);
            }));
          }
          // Reload the page to apply updates
          location.reload();
          return true;
        } catch (error) {
          console.warn('Force cache reset failed.', error);
          return false;
        }
      }

async function loadCourse() {
    const manifest = await fetchJson(DATA_URLS.lessons);
    const payloads = await Promise.all(manifest.lessons.map(async (lesson) => ({
      manifestLesson: lesson,
      payload: await fetchJson(lesson.file)
    })));

    const lessons = payloads.map(({ manifestLesson, payload }) => ({
      ...manifestLesson,
      ...payload.lesson,
      file: manifestLesson.file,
      items: payload.items.map((item) => normalizeCard(item, payload.lesson.id))
    }));

    const cards = lessons.flatMap((lesson) => lesson.items.map((item) => ({
      ...item,
      lessonTitle: lesson.title,
      lessonOrder: lesson.order
    })));

    return { lessons, cards };
  }

  async function fetchJson(url) {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error(`Cannot load ${url}`);
    return response.json();
  }

  function normalizeCard(item, lessonId) {
    return {
      ...item,
      id: String(item.id),
      lessonId,
      examples: Array.isArray(item.examples) ? item.examples : [],
      apps: Array.isArray(item.apps) ? item.apps : [],
      stroke_order: Array.isArray(item.stroke_order) ? item.stroke_order : []
    };
  }

  function normalizeKanjiStrokeData(payload) {
    const items = payload?.items && typeof payload.items === "object" ? payload.items : {};
    return Object.fromEntries(Object.entries(items)
      .map(([kanji, item]) => {
        const strokeOrder = Array.isArray(item?.strokeOrder)
          ? item.strokeOrder.filter((stroke) => typeof stroke?.path === "string" && stroke.path.trim())
          : [];
        if (!strokeOrder.length) return null;
        return [kanji, {
          ...item,
          kanji: item.kanji || kanji,
          strokes: Number(item.strokes || strokeOrder.length),
          viewBox: item.viewBox || "0 0 109 109",
          strokeOrder
        }];
      })
      .filter(Boolean));
  }

  function normalizeCustomizationCatalog(payload) {
    const categories = Array.isArray(payload?.categories) ? payload.categories : [];
    const items = Array.isArray(payload?.items) ? payload.items : [];
    return {
      version: Number(payload?.version || 1),
      currency: payload?.currency || "Moon Fragments",
      categories: categories.length ? categories : [
        { id: "all", title_ru: "Все", title_en: "All" },
        { id: "background", title_ru: "Фоны", title_en: "Backgrounds" },
        { id: "outfit", title_ru: "Образы", title_en: "Outfits" },
        { id: "decoration", title_ru: "Декор", title_en: "Decorations" },
        { id: "theme", title_ru: "Темы", title_en: "Themes" },
        { id: "effect", title_ru: "Эффекты", title_en: "Effects" }
      ],
      items: items.map((item) => ({
        ...item,
        id: String(item.id || ""),
        type: String(item.type || "effect"),
        price: Math.max(0, Number(item.price || 0)),
        rarity: String(item.rarity || "common").toLowerCase(),
        defaultOwned: Boolean(item.defaultOwned || item.price === 0),
        unlockCondition: item.unlockCondition || null
      })).filter((item) => item.id)
    };
  }

  function defaultCustomization() {
    return {
      owned: [],
      selected: {
        background: "bg_study_hub",
        outfit: "outfit_default_assassin",
        theme: "theme_default_dark",
        decoration: null,
        frame: null,
        effect: null
      },
      seen: [],
      updatedAt: new Date().toISOString()
    };
  }

  function readCustomizationStorage() {
    try {
      const raw = localStorage.getItem(CUSTOMIZATION_STORAGE_KEY);
      if (!raw) return defaultCustomization();
      const parsed = JSON.parse(raw);
      const base = defaultCustomization();
      return {
        owned: Array.isArray(parsed.owned) ? parsed.owned.map(String) : base.owned,
        selected: { ...base.selected, ...((parsed && parsed.selected) || {}) },
        seen: Array.isArray(parsed.seen) ? parsed.seen.map(String) : base.seen,
        updatedAt: parsed.updatedAt || base.updatedAt
      };
    } catch (error) {
      console.warn("Customization storage failed.", error);
      return defaultCustomization();
    }
  }

  function saveCustomizationStorage() {
    if (!state.customization) return;
    state.customization.updatedAt = new Date().toISOString();
    try {
      localStorage.setItem(CUSTOMIZATION_STORAGE_KEY, JSON.stringify(state.customization));
    } catch (error) {
      console.warn("Customization save failed.", error);
    }
  }

  function hydrateCustomization() {
    const customization = readCustomizationStorage();
    const owned = new Set();
    (customization.owned || []).forEach((id) => {
      const item = customizationShopItem(id) || legacyCustomizationItem(id);
      if (item) owned.add(item.id);
    });
    customizationShopItems().forEach((item) => {
      if (item.defaultOwned || item.price === 0) owned.add(item.id);
    });
    (state.progress.unlockedBackgrounds || []).forEach((id) => {
      const item = customizationShopItem(id) || legacyCustomizationItem(id);
      if (item) owned.add(item.id);
    });
    (state.progress.unlockedEvaSprites || []).forEach((sprite) => {
      const outfit = outfitItemBySprite(sprite);
      if (outfit) owned.add(outfit.id);
      if (state.progress.shop?.owned?.includes(`eva_sprite:${sprite}`) && outfit) owned.add(outfit.id);
    });
    (state.progress.shop?.owned || []).forEach((id) => {
      const legacyId = String(id);
      const item = customizationShopItem(legacyId) || legacyCustomizationItem(legacyId);
      if (item) owned.add(item.id);
      if (!item && legacyId.startsWith("eva_sprite:")) {
        const outfit = outfitItemBySprite(legacyId.replace("eva_sprite:", ""));
        if (outfit) owned.add(outfit.id);
      }
    });

    const selected = normalizeCustomizationSelection({ ...defaultCustomization().selected, ...(customization.selected || {}) });
    if (state.progress.selectedEvaRoomBackground) selected.background = normalizeCustomizationItemId(state.progress.selectedEvaRoomBackground);
    if (state.progress.selectedEvaSprite) selected.outfit = outfitItemBySprite(state.progress.selectedEvaSprite)?.id || selected.outfit;
    if (!owned.has(selected.background)) selected.background = "bg_study_hub";
    if (!owned.has(selected.outfit)) selected.outfit = "outfit_default_assassin";
    if (!owned.has(selected.theme)) selected.theme = "theme_default_dark";
    if (selected.decoration && !owned.has(selected.decoration)) selected.decoration = null;
    if (selected.effect && !owned.has(selected.effect)) selected.effect = null;

    state.customization = {
      owned: [...owned],
      selected,
      seen: [...new Set([...(customization.seen || []), ...owned])],
      updatedAt: customization.updatedAt || new Date().toISOString()
    };
    syncCustomizationToProgress();
    saveCustomizationStorage();
  }

  function syncCustomizationToProgress() {
    if (!state.customization || !state.progress) return;
    ensureEvaRoomProgress();
    const selected = state.customization.selected || {};
    if (selected.background) state.progress.selectedEvaRoomBackground = selected.background;
    const outfit = customizationShopItem(selected.outfit);
    if (outfit?.spriteId) state.progress.selectedEvaSprite = outfit.spriteId;
    state.progress.unlockedBackgrounds = [...new Set([
      ...(state.progress.unlockedBackgrounds || []),
      ...state.customization.owned.filter((id) => customizationShopItem(id)?.type === "background")
    ])];
    state.progress.unlockedEvaSprites = [...new Set([
      ...(state.progress.unlockedEvaSprites || []),
      ...state.customization.owned
        .map((id) => customizationShopItem(id))
        .filter((item) => item?.type === "outfit" && item.spriteId)
        .map((item) => item.spriteId)
    ])];
    state.progress.shop ||= { owned: [], equipped: {} };
    state.progress.shop.owned = [...new Set([
      ...(state.progress.shop.owned || []),
      ...state.customization.owned,
      ...state.progress.unlockedEvaSprites.map((sprite) => `eva_sprite:${sprite}`)
    ])];
    state.progress.shop.equipped = {
      ...(state.progress.shop.equipped || {}),
      background: selected.background || null,
      outfit: selected.outfit || null,
      theme: selected.theme || null,
      decoration: selected.decoration || selected.frame || null,
      effect: selected.effect || null
    };
  }

  function customizationShopItems() {
    return state.customizationCatalog?.items || [];
  }

  function customizationShopItem(id) {
    return customizationShopItems().find((item) => item.id === id) || null;
  }

  function legacyCustomizationItem(id) {
    const legacyId = String(id || "");
    if (!legacyId) return null;
    return customizationShopItems().find((item) => Array.isArray(item.legacyIds) && item.legacyIds.map(String).includes(legacyId)) || null;
  }

  function normalizeCustomizationItemId(id) {
    const item = customizationShopItem(id) || legacyCustomizationItem(id);
    return item?.id || id || null;
  }

  function normalizeCustomizationSelection(selected = {}) {
    return {
      background: normalizeCustomizationItemId(selected.background),
      outfit: normalizeCustomizationItemId(selected.outfit),
      theme: normalizeCustomizationItemId(selected.theme),
      decoration: normalizeCustomizationItemId(selected.decoration || selected.frame),
      effect: normalizeCustomizationItemId(selected.effect)
    };
  }

  function outfitItemBySprite(sprite) {
    const spriteId = String(sprite || "");
    if (!spriteId) return null;
    const legacyToken = `eva_sprite:${spriteId}`;
    return customizationShopItems().find((item) => {
      if (item.type !== "outfit") return false;
      if (item.spriteId === spriteId) return true;
      if (item.legacySpriteId === spriteId) return true;
      return Array.isArray(item.legacyIds) && item.legacyIds.map(String).includes(legacyToken);
    }) || null;
  }

  function normalizeJlptLessons(payload) {
    const items = Array.isArray(payload?.items) ? payload.items : Array.isArray(payload) ? payload : [];
    return items.map((item) => ({
      ...item,
      jlpt: String(item.jlpt || "").toUpperCase(),
      title: item.title || { ru: item.jlpt || "JLPT", en: item.jlpt || "JLPT" },
      summary: item.summary || { ru: "", en: "" },
      goals: Array.isArray(item.goals) ? item.goals : [],
      sections: Array.isArray(item.sections) ? item.sections : [],
      practice: Array.isArray(item.practice) ? item.practice : [],
      checkpoint: Array.isArray(item.checkpoint) ? item.checkpoint : []
    })).filter((item) => item.jlpt);
  }

  function normalizeJlptPracticeLessons(payload) {
    const items = Array.isArray(payload?.items) ? payload.items : Array.isArray(payload) ? payload : [];
    return items.map((item) => ({
      ...item,
      jlpt: String(item.jlpt || "").toUpperCase(),
      apps: Array.isArray(item.apps) ? item.apps : [],
      kana: item.kana || { hiragana: [], katakana: [] },
      kanjiFocus: Array.isArray(item.kanjiFocus) ? item.kanjiFocus : [],
      drills: Array.isArray(item.drills) ? item.drills : [],
      sources: Array.isArray(item.sources) ? item.sources : []
    })).filter((item) => item.jlpt);
  }

  function normalizeAchievementData(payload, fallback = []) {
    const rawItems = Array.isArray(payload?.achievements) && payload.achievements.length ? payload.achievements : fallback;
    const categories = Array.isArray(payload?.categories) ? payload.categories.map((category) => ({
      id: String(category.id),
      title: category.title || { ru: category.id, en: category.id },
      icon: category.icon || "moon"
    })) : [];
    const items = rawItems.map((item) => normalizeAchievement(item));
    const known = new Set(categories.map((category) => category.id));
    items.forEach((item) => {
      if (!known.has(item.category)) {
        known.add(item.category);
        categories.push({ id: item.category, title: { ru: item.category, en: item.category }, icon: item.icon || "moon" });
      }
    });
    return { categories, items };
  }

  function normalizeAchievement(item) {
    const rewardXp = Number(item.rewardXp ?? item.xp ?? 0);
    const rewardFragments = Number(item.rewardFragments ?? item.coins ?? 0);
    return {
      ...item,
      id: String(item.id),
      category: item.category || item.kind || "learning",
      title: item.title || item.name || { ru: item.id, en: item.id },
      description: item.description || { ru: "", en: "" },
      icon: item.icon || "moon",
      kind: item.kind || "learned",
      target: Number(item.target || 1),
      rewardXp,
      rewardFragments,
      unlocked: Boolean(item.unlocked),
      secret: Boolean(item.secret)
    };
  }

  function detectInitialLanguage() {
    const languages = [navigator.language, ...(navigator.languages || [])]
      .filter(Boolean)
      .map((value) => String(value).toLowerCase());
    return languages.some((value) => value === "ru" || value.startsWith("ru-") || value === "be" || value.startsWith("be-")) ? "ru" : "en";
  }

  function defaultProgress() {
    const theme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const language = detectInitialLanguage();
    return {
      version: APP_VERSION,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      settings: { theme, sound: true, uxSound: true, uxVolume: 0.75, language, languageAutoDetected: true, languageManuallySelected: false, dailyGoal: 10 },
      xp: 0,
      level: 1,
      moonFragments: 0,
      totalCorrect: 0,
      totalWrong: 0,
      correctCombo: 0,
      bestCorrectCombo: 0,
      appOpens: 0,
      totalMoonFragmentsEarned: 0,
      cards: {},
      daily: {},
      favorites: {},
      transactions: [],
      streakHistory: [],
      streak: { current: 0, best: 0, lastStudyDate: null },
      visits: { firstVisitDate: null, lastVisitDate: null, lastDailyBonusDate: null, streak: 0, bestStreak: 0 },
      lessonCompletions: {},
      achievements: {},
      dailyBonuses: {},
      writingPractice: { completed: 0, cards: {} },
      secrets: { evaClicks: 0, nightVisit: false },
      sentencePractice: {
        activeId: null,
        selected: [],
        checked: false,
        result: null,
        tileKeys: [],
        completed: {},
        attempts: 0,
        recentIds: [],
        recentAnswers: [],
        custom: [],
        customSentences: [],
        customEditingId: null,
        customDraft: { jp: "", hiragana: "", ru: "", en: "" },
        customMessage: "",
        customStatus: ""
      },
      jlptLessonPractice: { activeIds: {}, selected: {}, checked: {}, results: {}, completed: {} },
      unlockedBackgrounds: ["bg_study_hub"],
      selectedEvaRoomBackground: "bg_study_hub",
      unlockedEvaSprites: ["idle", "default"],
      selectedEvaSprite: "idle",
      evaRoomDialogueProgress: { currentNode: "intro", rewardsClaimed: {}, visited: {}, lineHistory: [] },
      evaAutonomy: defaultEvaAutonomy(),
      evaRelationship: defaultEvaRelationship(),
      shop: { owned: [], equipped: {} }
    };
  }

  function loadProgress() {
    const fresh = defaultProgress();
    try {
      const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
      if (!raw) return fresh;
      const parsed = JSON.parse(raw);
      return mergeProgress(fresh, parsed.progress || parsed);
    } catch (error) {
      console.warn("Progress reset because stored JSON is invalid.", error);
      return fresh;
    }
  }

  function mergeProgress(base, saved) {
    return {
      ...base,
      ...saved,
      version: APP_VERSION,
      settings: { ...base.settings, ...(saved.settings || {}) },
      cards: { ...base.cards, ...(saved.cards || {}) },
      daily: { ...base.daily, ...(saved.daily || {}) },
      favorites: { ...base.favorites, ...(saved.favorites || {}) },
      transactions: Array.isArray(saved.transactions) ? saved.transactions : base.transactions,
      streakHistory: Array.isArray(saved.streakHistory) ? saved.streakHistory : base.streakHistory,
      streak: { ...base.streak, ...(saved.streak || {}) },
      visits: { ...base.visits, ...(saved.visits || {}) },
      lessonCompletions: { ...base.lessonCompletions, ...(saved.lessonCompletions || {}) },
      achievements: { ...base.achievements, ...(saved.achievements || {}) },
      dailyBonuses: { ...base.dailyBonuses, ...(saved.dailyBonuses || {}) },
      appOpens: Number(saved.appOpens || base.appOpens),
      totalMoonFragmentsEarned: Number(saved.totalMoonFragmentsEarned || base.totalMoonFragmentsEarned),
      writingPractice: { ...base.writingPractice, ...(saved.writingPractice || {}) },
      secrets: { ...base.secrets, ...(saved.secrets || {}) },
      sentencePractice: mergeSentencePractice(base.sentencePractice, saved.sentencePractice || {}),
      jlptLessonPractice: mergeJlptLessonPractice(base.jlptLessonPractice, saved.jlptLessonPractice || {}),
      unlockedBackgrounds: [...new Set([...(base.unlockedBackgrounds || []), ...((saved.unlockedBackgrounds) || [])])],
      selectedEvaRoomBackground: saved.selectedEvaRoomBackground || base.selectedEvaRoomBackground,
      unlockedEvaSprites: [...new Set([...(base.unlockedEvaSprites || []), ...((saved.unlockedEvaSprites) || []), ...(((saved.shop && saved.shop.owned) || []).filter((item) => String(item).startsWith("eva_sprite:")).map((item) => String(item).replace("eva_sprite:", "")))])],
      selectedEvaSprite: saved.selectedEvaSprite || base.selectedEvaSprite,
      evaRoomDialogueProgress: {
        ...base.evaRoomDialogueProgress,
        ...(saved.evaRoomDialogueProgress || {}),
        rewardsClaimed: { ...base.evaRoomDialogueProgress.rewardsClaimed, ...((saved.evaRoomDialogueProgress && saved.evaRoomDialogueProgress.rewardsClaimed) || {}) },
        visited: { ...base.evaRoomDialogueProgress.visited, ...((saved.evaRoomDialogueProgress && saved.evaRoomDialogueProgress.visited) || {}) },
        lineHistory: Array.isArray(saved.evaRoomDialogueProgress?.lineHistory) ? saved.evaRoomDialogueProgress.lineHistory : base.evaRoomDialogueProgress.lineHistory || []
      },
      evaAutonomy: mergeEvaAutonomy(base.evaAutonomy, saved.evaAutonomy || {}),
      evaRelationship: mergeEvaRelationship(base.evaRelationship, saved.evaRelationship || {}),
      shop: {
        owned: [...new Set([...(base.shop.owned || []), ...((saved.shop && saved.shop.owned) || [])])],
        equipped: { ...base.shop.equipped, ...((saved.shop && saved.shop.equipped) || {}) }
      }
    };
  }

  function mergeSentencePractice(base, saved) {
    return {
      ...base,
      ...saved,
      selected: Array.isArray(saved.selected) ? saved.selected : base.selected,
      tileKeys: Array.isArray(saved.tileKeys) ? saved.tileKeys : base.tileKeys,
      recentIds: Array.isArray(saved.recentIds) ? saved.recentIds : base.recentIds,
      recentAnswers: Array.isArray(saved.recentAnswers) ? saved.recentAnswers : base.recentAnswers,
      completed: { ...base.completed, ...(saved.completed || {}) },
      custom: Array.isArray(saved.custom) ? saved.custom.slice(0, 80) : base.custom,
      customSentences: normalizeCustomSentences(saved.customSentences, saved.custom),
      customEditingId: typeof saved.customEditingId === "string" ? saved.customEditingId : null,
      customDraft: normalizeCustomSentenceDraft(saved.customDraft || base.customDraft),
      customMessage: typeof saved.customMessage === "string" ? saved.customMessage : base.customMessage,
      customStatus: typeof saved.customStatus === "string" ? saved.customStatus : base.customStatus
    };
  }

  function normalizeCustomSentenceDraft(draft = {}) {
    return {
      jp: String(draft.jp ?? draft.sentence ?? ""),
      hiragana: String(draft.hiragana ?? draft.reading ?? ""),
      ru: String(draft.ru ?? draft.translationRu ?? ""),
      en: String(draft.en ?? draft.translationEn ?? "")
    };
  }

  function normalizeCustomSentences(savedCustomSentences, legacyCustomExercises) {
    const result = [];
    const seen = new Set();
    const addItem = (item) => {
      if (!item) return;
      const jp = cleanSentenceField(item.jp || restoreSentenceFromExercise(item));
      const key = normalizeSentenceText(jp);
      if (!key || seen.has(key)) return;
      seen.add(key);
      const id = String(item.id || "").startsWith("custom_")
        ? String(item.id)
        : `custom_${stableHash(key).toString(36)}`;
      result.push({
        id,
        jp,
        hiragana: cleanSentenceField(item.hiragana || item.reading || ""),
        ru: cleanSentenceField(item.ru || item.translationRu || ""),
        en: cleanSentenceField(item.en || item.translationEn || ""),
        source: "user"
      });
    };
    (Array.isArray(savedCustomSentences) ? savedCustomSentences : []).forEach(addItem);
    (Array.isArray(legacyCustomExercises) ? legacyCustomExercises : []).forEach(addItem);
    return result.slice(0, 160);
  }

  function mergeJlptLessonPractice(base, saved) {
    return {
      ...base,
      ...saved,
      activeIds: { ...base.activeIds, ...(saved.activeIds || {}) },
      selected: { ...base.selected, ...(saved.selected || {}) },
      checked: { ...base.checked, ...(saved.checked || {}) },
      results: { ...base.results, ...(saved.results || {}) },
      completed: { ...base.completed, ...(saved.completed || {}) }
    };
  }

  function defaultEvaRelationship() {
    return {
      warmth: 44,
      trust: 40,
      discipline: 35,
      curiosity: 42,
      mood: "neutral",
      conversationCount: 0,
      totalDialogueChoices: 0,
      lastInteractionAt: null,
      lastInteractionDate: null,
      lastDecayDate: todayKey(),
      lastKnown: {
        learned: 0,
        mastered: 0,
        reviews: 0,
        lessons: 0,
        streak: 0,
        wrong: 0,
        writing: 0,
        sentence: 0
      },
      history: []
    };
  }

  function defaultEvaAutonomy() {
    return {
      enabled: true,
      frequency: "normal",
      roomMode: "auto",
      outfitMode: "auto",
      currentLine: null,
      currentQuestion: null,
      currentDecoration: null,
      currentEffect: null,
      mood: "neutral",
      emotion: "calm",
      lastSpokeAt: null,
      nextSpeakAt: null,
      recentLineIds: [],
      lastRoomId: null,
      lastSprite: null
    };
  }

  function mergeEvaRelationship(base, saved) {
    return {
      ...base,
      ...saved,
      warmth: clamp(Number(saved.warmth ?? base.warmth), 0, 100),
      trust: clamp(Number(saved.trust ?? base.trust), 0, 100),
      discipline: clamp(Number(saved.discipline ?? base.discipline), 0, 100),
      curiosity: clamp(Number(saved.curiosity ?? base.curiosity), 0, 100),
      lastKnown: { ...base.lastKnown, ...(saved.lastKnown || {}) },
      history: Array.isArray(saved.history) ? saved.history.slice(0, 40) : base.history
    };
  }

  function mergeEvaAutonomy(base, saved) {
    return {
      ...base,
      ...saved,
      enabled: true,
      frequency: "normal",
      roomMode: "auto",
      outfitMode: "auto",
      recentLineIds: Array.isArray(saved.recentLineIds) ? saved.recentLineIds.slice(0, 32) : base.recentLineIds,
      currentLine: saved.currentLine && typeof saved.currentLine === "object" ? saved.currentLine : base.currentLine,
      currentQuestion: saved.currentQuestion && typeof saved.currentQuestion === "object" ? saved.currentQuestion : base.currentQuestion,
      currentDecoration: typeof saved.currentDecoration === "string" ? saved.currentDecoration : base.currentDecoration,
      currentEffect: typeof saved.currentEffect === "string" ? saved.currentEffect : base.currentEffect,
      mood: typeof saved.mood === "string" ? saved.mood : base.mood,
      emotion: typeof saved.emotion === "string" ? saved.emotion : base.emotion
    };
  }

  function defaultEvaMemory() {
    return {
      lastSeenDate: null,
      lastInteractionDate: null,
      lastRoute: null,
      recentLineIds: [],
      recentTopics: [],
      daysSinceReturn: 0,
      lastPraiseAt: null,
      lastWarningAt: null,
      timesUserChoseTalkOverStudy: 0,
      timesUserReturnedAfterGap: 0,
      lastReturnCountedDate: null,
      preferredEvaRoomBackground: null,
      lastKnownMood: "neutral",
      recentProblemCluster: null
    };
  }

  function mergeEvaMemory(base, saved = {}) {
    return {
      ...base,
      ...saved,
      recentLineIds: Array.isArray(saved.recentLineIds) ? saved.recentLineIds.slice(0, 30) : base.recentLineIds,
      recentTopics: Array.isArray(saved.recentTopics) ? saved.recentTopics.slice(0, 20) : base.recentTopics,
      daysSinceReturn: Number(saved.daysSinceReturn || base.daysSinceReturn || 0),
      timesUserChoseTalkOverStudy: Number(saved.timesUserChoseTalkOverStudy || base.timesUserChoseTalkOverStudy || 0),
      timesUserReturnedAfterGap: Number(saved.timesUserReturnedAfterGap || base.timesUserReturnedAfterGap || 0),
      lastKnownMood: typeof saved.lastKnownMood === "string" ? saved.lastKnownMood : base.lastKnownMood
    };
  }

  function defaultEvaStateV2() {
    return {
      version: 3,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      presenceState: "idle",
      mood: "neutral",
      emotion: "calm",
      currentPhrase: null,
      pendingQuestion: null,
      currentSkin: "idle",
      currentBackground: "bg_study_hub",
      currentDecoration: null,
      currentEffect: "none",
      activeSkin: "idle",
      activeBackground: "bg_study_hub",
      ownedSkins: ["idle", "default"],
      ownedBackgrounds: ["bg_study_hub"],
      ownedEffects: [],
      ownedDecorations: [],
      lastEvent: null,
      lastQuestion: null,
      lastPhraseAt: 0,
      lastEmotionChangeAt: 0,
      lastQuestionAt: 0,
      lastVisualChangeAt: 0,
      lastPlayerActionAt: Date.now(),
      textRevealSkippedLineId: null,
      memory: defaultEvaMemory(),
      questionHistory: [],
      clickCount: 0,
      eventHistory: [],
      recentEvents: [],
      cooldowns: {
        emotion: 18000,
        phrase: 65000,
        question: 240000,
        visual: 720000
      }
    };
  }

  function hydrateEvaState() {
    const fresh = defaultEvaStateV2();
    let saved = null;
    try {
      const raw = localStorage.getItem(EVA_STATE_STORAGE_KEY);
      saved = raw ? JSON.parse(raw) : null;
    } catch (error) {
      console.warn("Eva state reset because stored JSON is invalid.", error);
    }
    state.evaRuntime = mergeEvaStateV2(fresh, saved || migrateEvaStateFromProgress());
    refreshEvaPresenceMemoryOnBoot();
    saveEvaState();
  }

  function refreshEvaPresenceMemoryOnBoot() {
    if (!state.evaRuntime) return;
    state.evaRuntime.memory = mergeEvaMemory(defaultEvaMemory(), state.evaRuntime.memory || {});
    const memory = state.evaRuntime.memory;
    const today = todayKey();
    const previousSeen = memory.lastSeenDate || null;
    const gap = previousSeen ? Math.max(0, dayDifference(previousSeen, today)) : 0;
    memory.daysSinceReturn = gap;
    if (gap > 0 && memory.lastReturnCountedDate !== today) {
      memory.timesUserReturnedAfterGap = Number(memory.timesUserReturnedAfterGap || 0) + 1;
      memory.lastReturnCountedDate = today;
    }
    memory.lastSeenDate = today;
    memory.lastRoute = state.route;
    memory.preferredEvaRoomBackground = state.progress?.selectedEvaRoomBackground || memory.preferredEvaRoomBackground || "bg_study_hub";
    memory.lastKnownMood = state.evaRuntime.mood || memory.lastKnownMood || "neutral";
  }

  function migrateEvaStateFromProgress() {
    const autonomy = state.progress?.evaAutonomy || {};
    return {
      currentSkin: state.progress?.selectedEvaSprite || autonomy.lastSprite || "idle",
      currentBackground: state.progress?.selectedEvaRoomBackground || autonomy.lastRoomId || "bg_study_hub",
      currentDecoration: state.customization?.selected?.decoration || state.customization?.selected?.frame || null,
      currentEffect: state.customization?.selected?.effect || "none",
      activeSkin: state.progress?.selectedEvaSprite || autonomy.lastSprite || "idle",
      activeBackground: state.progress?.selectedEvaRoomBackground || autonomy.lastRoomId || "bg_study_hub",
      lastEvent: autonomy.currentLine?.reason ? { type: autonomy.currentLine.reason, at: autonomy.currentLine.at } : null
    };
  }

  function mergeEvaStateV2(base, saved = {}) {
    return {
      ...base,
      ...saved,
      version: 3,
      updatedAt: new Date().toISOString(),
      presenceState: typeof saved.presenceState === "string" ? saved.presenceState : base.presenceState,
      mood: typeof saved.mood === "string" ? saved.mood : base.mood,
      emotion: typeof saved.emotion === "string" ? saved.emotion : base.emotion,
      currentPhrase: saved.currentPhrase && typeof saved.currentPhrase === "object" ? saved.currentPhrase : base.currentPhrase,
      pendingQuestion: saved.pendingQuestion && typeof saved.pendingQuestion === "object" ? saved.pendingQuestion : base.pendingQuestion,
      currentSkin: typeof saved.currentSkin === "string" ? saved.currentSkin : base.currentSkin,
      currentBackground: typeof saved.currentBackground === "string" ? saved.currentBackground : base.currentBackground,
      currentDecoration: typeof saved.currentDecoration === "string" ? saved.currentDecoration : null,
      currentEffect: typeof saved.currentEffect === "string" ? saved.currentEffect : base.currentEffect,
      activeSkin: typeof saved.activeSkin === "string" ? saved.activeSkin : (saved.currentSkin || base.activeSkin),
      activeBackground: typeof saved.activeBackground === "string" ? saved.activeBackground : (saved.currentBackground || base.activeBackground),
      ownedSkins: Array.isArray(saved.ownedSkins) ? saved.ownedSkins : base.ownedSkins,
      ownedBackgrounds: Array.isArray(saved.ownedBackgrounds) ? saved.ownedBackgrounds : base.ownedBackgrounds,
      ownedEffects: Array.isArray(saved.ownedEffects) ? saved.ownedEffects : base.ownedEffects,
      ownedDecorations: Array.isArray(saved.ownedDecorations) ? saved.ownedDecorations : base.ownedDecorations,
      lastPhraseAt: Number(saved.lastPhraseAt || base.lastPhraseAt || 0),
      lastEmotionChangeAt: Number(saved.lastEmotionChangeAt || base.lastEmotionChangeAt || 0),
      lastQuestionAt: Number(saved.lastQuestionAt || base.lastQuestionAt || 0),
      lastVisualChangeAt: Number(saved.lastVisualChangeAt || base.lastVisualChangeAt || 0),
      lastPlayerActionAt: Number(saved.lastPlayerActionAt || base.lastPlayerActionAt || Date.now()),
      textRevealSkippedLineId: typeof saved.textRevealSkippedLineId === "string" ? saved.textRevealSkippedLineId : null,
      memory: mergeEvaMemory(base.memory || defaultEvaMemory(), saved.memory || {}),
      questionHistory: Array.isArray(saved.questionHistory) ? saved.questionHistory.slice(0, 40) : base.questionHistory,
      eventHistory: Array.isArray(saved.eventHistory) ? saved.eventHistory.slice(0, 80) : base.eventHistory,
      recentEvents: Array.isArray(saved.recentEvents) ? saved.recentEvents.slice(0, 80) : base.recentEvents,
      cooldowns: {
        ...base.cooldowns,
        ...(saved.cooldowns || {})
      },
      clickCount: Number(saved.clickCount || base.clickCount || 0)
    };
  }

  function saveEvaState() {
    if (!state.evaRuntime) return;
    syncEvaRuntimeInventory();
    state.evaRuntime.updatedAt = new Date().toISOString();
    try {
      localStorage.setItem(EVA_STATE_STORAGE_KEY, JSON.stringify(state.evaRuntime));
    } catch (error) {
      console.warn("Eva state could not be saved.", error);
    }
  }

  function syncEvaRuntimeInventory() {
    if (!state.evaRuntime || !state.progress) return;
    const selectedBackground = state.progress.selectedEvaRoomBackground || state.customization?.selected?.background || "bg_study_hub";
    const ownedItems = customizationShopItems().filter((item) => isCustomizationOwned(item.id));
    state.evaRuntime.ownedSkins = [...new Set([
      "idle",
      "default",
      ...(state.progress.unlockedEvaSprites || []),
      ...ownedItems.filter((item) => item.type === "outfit").map((item) => item.spriteId || item.id)
    ].filter(Boolean))];
    state.evaRuntime.ownedBackgrounds = [...new Set([
      "bg_study_hub",
      ...(state.progress.unlockedBackgrounds || []),
      ...ownedItems.filter((item) => item.type === "background").map((item) => item.id)
    ].filter(Boolean))];
    state.evaRuntime.ownedEffects = [...new Set(ownedItems.filter((item) => item.type === "effect").map((item) => item.id))];
    state.evaRuntime.ownedDecorations = [...new Set(ownedItems.filter((item) => item.type === "decoration").map((item) => item.id))];
    state.evaRuntime.currentBackground = selectedBackground;
    state.evaRuntime.activeSkin = state.evaRuntime.currentSkin || state.progress.selectedEvaSprite || "idle";
    state.evaRuntime.activeBackground = selectedBackground;
  }

  function normalizeEvaRoomDialogueData(payload) {
    if (Array.isArray(payload)) return { nodes: payload, lines: [] };
    const nodes = Array.isArray(payload?.nodes) ? payload.nodes : [];
    const lines = [];
    if (Array.isArray(payload?.lines)) lines.push(...payload.lines);
    Object.entries(payload?.linePools || {}).forEach(([category, items]) => {
      if (!Array.isArray(items)) return;
      items.forEach((item, index) => {
        if (typeof item === "string") {
          lines.push({
            id: `${category}_${index + 1}`,
            category,
            text: { ru: item, en: item }
          });
          return;
        }
        lines.push({
          category,
          ...item,
          id: item.id || `${category}_${index + 1}`
        });
      });
    });
    return { nodes, lines };
  }

  function mergeEvaFisRoomNodes(baseNodes = [], fisNodes = [], introChoices = []) {
    const nodes = baseNodes.map((node) => ({ ...node, choices: Array.isArray(node.choices) ? [...node.choices] : node.choices }));
    const existingIds = new Set(nodes.map((node) => node.id));
    fisNodes.forEach((node) => {
      if (node?.id && !existingIds.has(node.id)) {
        nodes.push(node);
        existingIds.add(node.id);
      }
    });
    const intro = nodes.find((node) => node.id === "intro");
    if (intro && Array.isArray(introChoices) && introChoices.length) {
      intro.choices ||= [];
      const choiceKeys = new Set(intro.choices.map((choice) => localized(choice.text || {}).toLowerCase()));
      introChoices.forEach((choice) => {
        const key = localized(choice.text || {}).toLowerCase();
        if (!choice || choiceKeys.has(key)) return;
        intro.choices.push(choice);
        choiceKeys.add(key);
      });
    }
    return nodes;
  }

  function normalizeEvaAutonomyLines(payload) {
    const lines = [];
    const pushLine = (item, category = "adaptive", index = lines.length) => {
      if (!item) return;
      if (typeof item === "string") {
        lines.push({
          id: `${category}_${index + 1}`,
          category,
          moods: [],
          text: { ru: item, en: item }
        });
        return;
      }
      const text = item.text || { ru: item.ru || "", en: item.en || item.ru || "" };
      lines.push({
        ...item,
        id: item.id || `${category}_${index + 1}`,
        category: item.category || category,
        moods: Array.isArray(item.moods) ? item.moods : [],
        preferredBackgrounds: Array.isArray(item.preferredBackgrounds) ? item.preferredBackgrounds : [],
        text
      });
    };
    if (Array.isArray(payload)) payload.forEach((item, index) => pushLine(item, item.category || "adaptive", index));
    if (Array.isArray(payload?.lines)) payload.lines.forEach((item, index) => pushLine(item, item.category || "adaptive", index));
    Object.entries(payload?.linePools || {}).forEach(([category, items]) => {
      if (Array.isArray(items)) items.forEach((item, index) => pushLine(item, category, index));
    });
    return lines.filter((line) => localized(line.text));
  }

  function normalizeEvaPresenceData(payload = {}) {
    const normalizePresenceLine = (item, category = "fis_observation", index = 0, prefix = "presence") => {
      if (!item) return null;
      const text = item.text || { ru: item.ru || "", en: item.en || item.ru || "" };
      if (!localized(text)) return null;
      return {
        ...item,
        id: item.id || `${prefix}_${category}_${index + 1}`,
        category: item.category || category,
        state: item.state || "observe",
        moods: Array.isArray(item.moods) ? item.moods : [],
        tags: Array.isArray(item.tags) ? item.tags : [],
        conditions: item.conditions && typeof item.conditions === "object" ? item.conditions : {},
        preferredBackgrounds: Array.isArray(item.preferredBackgrounds) ? item.preferredBackgrounds : [],
        preferredDecorations: Array.isArray(item.preferredDecorations) ? item.preferredDecorations : [],
        preferredEffects: Array.isArray(item.preferredEffects) ? item.preferredEffects : [],
        text
      };
    };
    const entryStates = (Array.isArray(payload.entryStates) ? payload.entryStates : [])
      .map((line, index) => normalizePresenceLine(line, line.category || "fis_presence_entry", index, "entry"))
      .filter(Boolean);
    const eventLines = {};
    Object.entries(payload.eventLines || {}).forEach(([reason, lines]) => {
      eventLines[reason] = (Array.isArray(lines) ? lines : [])
        .map((line, index) => normalizePresenceLine(line, line.category || reason, index, `event_${reason}`))
        .filter(Boolean);
    });
    const poolLines = [];
    Object.entries(payload.linePools || {}).forEach(([category, lines]) => {
      if (!Array.isArray(lines)) return;
      lines.forEach((line, index) => {
        const normalized = normalizePresenceLine(line, category, index, "pool");
        if (normalized) poolLines.push(normalized);
      });
    });
    return {
      version: Number(payload.version || 1),
      voiceGuide: payload.voiceGuide || {},
      categoryMap: payload.categoryMap || {},
      entryStates,
      eventLines,
      roomLines: poolLines,
      autonomyLines: poolLines
    };
  }

  function saveProgress() {
    state.progress.level = calculateLevel(state.progress.xp);
    state.progress.updatedAt = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
  }

  function hydrateProgress() {
    state.cards.forEach((card) => getCardProgress(card.id));
    state.progress.level = calculateLevel(state.progress.xp);
    state.progress.totalMoonFragmentsEarned = Math.max(
      Number(state.progress.totalMoonFragmentsEarned || 0),
      Number(state.progress.moonFragments || 0),
      totalPositiveFragmentsFromHistory()
    );
    ensureEvaRoomProgress();
    syncEvaRelationshipFromProgress();
    const firstUnlocked = state.lessons.find((lesson) => isLessonUnlocked(lesson));
    if (!state.activeLessonId) state.activeLessonId = firstUnlocked?.id || state.lessons[0]?.id || null;
  }

  function getCardProgress(cardId) {
    const id = String(cardId);
    if (!state.progress.cards[id]) {
      state.progress.cards[id] = {
        state: "New",
        intervalDays: 0,
        easeFactor: 2.5,
        dueAt: null,
        lastReviewedAt: null,
        lastRating: null,
        reviews: 0,
        lapses: 0,
        correct: 0,
        wrong: 0,
        stage: "new",
        lastReview: null,
        nextReview: null,
        reviewCount: 0,
        successRate: 0,
        history: []
      };
    }
    const progress = state.progress.cards[id];
    progress.stage ||= toStage(progress.state);
    progress.lastReview ||= progress.lastReviewedAt || null;
    progress.nextReview ||= progress.dueAt || null;
    progress.reviewCount ||= progress.reviews || 0;
    progress.successRate = calculateSuccessRate(progress);
    progress.state = fromStage(progress.stage);
    progress.dueAt = progress.nextReview;
    progress.lastReviewedAt = progress.lastReview;
    return state.progress.cards[id];
  }

  function handleClick(event) {
    if (event.target.classList?.contains("detail-backdrop")) {
      playUxSound("menu_close");
      state.detailCardId = null;
      render();
      return;
    }

    const clickedNavSurface = event.target.closest(".nav-popover, .bottom-nav");
    if (state.navMenu && !clickedNavSurface && !event.target.closest("[data-action]")) {
      state.navMenu = null;
      render();
      return;
    }

    const target = event.target.closest("[data-action]");
    if (!target) return;

    const action = target.dataset.action;
    const id = target.dataset.id;
    if (["eva-click", "eva-autonomy-next"].includes(action) && Date.now() - lastEvaDirectActionAt < 280) return;
    recordEvaPlayerActivity(action);
    playActionSound(action, target);

    if (action === "route") {
      const route = target.dataset.route;
      if (target.closest(".bottom-nav") && hasNavMenu(route)) {
        toggleNavMenu(route);
        return;
      }
      state.navMenu = null;
      if (route === "writing" && state.detailCardId) state.activeCardId = state.detailCardId;
      setRoute(route);
    }
    if (action === "nav-menu-route") {
      const route = target.dataset.route;
      state.navMenu = null;
      if (route === "writing" && state.detailCardId) state.activeCardId = state.detailCardId;
      setRoute(route, target.dataset.focus || null);
    }
    if (action === "close-nav-menu") {
      state.navMenu = null;
      render();
    }
    if (action === "theme") toggleTheme();
    if (action === "language") toggleLanguage();
    if (action === "sound") toggleSound();
    if (action === "toggle-ux-sound") toggleUxSound();
    if (action === "export") exportProgress();
    if (action === "import") importInput.click();
    if (action === "reset") resetProgress();
    if (action === "share-achievement") shareAchievement().catch(() => toast(t("shareFallback")));
    if (action === "pwa-install") handlePwaInstallRequest();
    if (action === "pwa-later") handlePwaInstallDeclined();
    if (action === "notification-allow") handleNotificationPermissionAccepted();
    if (action === "notification-later") handleNotificationPermissionDeclined();
    if (action === "mascot-click") handleMascotClick(target.dataset.character);
    if (action === "eva-click") handleEvaRoomSpriteClick();
    if (action === "eva-dialogue-skip") skipEvaDialogueReveal(target);
    if (action === "dictionary-favorites-tab") {
      state.filters.favorites = target.dataset.favorites || "all";
      state.dictionaryVisibleCount = DICTIONARY_INITIAL_LIMIT;
      render();
    }
    if (action === "dictionary-load-more") {
      state.dictionaryVisibleCount += DICTIONARY_INCREMENT;
      render();
    }
    if (action === "toggle-favorite") toggleFavorite(id);
    if (action === "eva-room-choice") handleEvaRoomChoice(target);
    if (action === "eva-question-answer") handleEvaQuestionAnswer(target);
    if (action === "eva-room-reset") resetEvaRoomDialogue();
    if (action === "toggle-eva-autonomy") toggleEvaAutonomy();
    if (action === "cycle-eva-autonomy") cycleEvaAutonomyFrequency();
    if (action === "eva-autonomy-room-mode") toggleEvaAutonomyRoomMode();
    if (action === "eva-autonomy-outfit-mode") toggleEvaAutonomyOutfitMode();
    if (action === "eva-autonomy-next") nextEvaAutonomyLine();
    if (action === "eva-autonomy-clear") clearEvaAutonomyLine();
    if (action === "eva-room-shop-open") {
      state.evaRoomShopOpen = true;
      dispatchEvaEvent("shop_opened");
      render();
    }
    if (action === "eva-room-shop-close") {
      state.evaRoomShopOpen = false;
      render();
    }
    if (action === "eva-bg-buy") buyEvaRoomBackground(id);
    if (action === "eva-bg-select") selectEvaRoomBackground(id);
    if (action === "eva-sprite-buy") buyEvaSprite(id);
    if (action === "eva-sprite-select") selectEvaSprite(id);
    if (action === "shop-category") {
      state.shopFilters.category = target.dataset.category || "all";
      render();
    }
    if (action === "shop-filter") {
      state.shopFilters.view = target.dataset.filter || "all";
      render();
    }
    if (action === "shop-sort") {
      state.shopFilters.sort = target.dataset.sort || "featured";
      render();
    }
    if (action === "shop-buy") buyCustomizationItem(id);
    if (action === "shop-select") selectCustomizationItem(id);
    if (action === "clear-writing") clearWritingCanvas();
    if (action === "undo-writing") undoWritingStroke();
    if (action === "check-writing") checkWritingPractice(true);
    if (action === "replay-writing") replayStrokeAnimation();
    if (action === "play-writing-step") playWritingStep();
    if (action === "writing-step-prev") changeWritingStep(-1);
    if (action === "writing-step-next") changeWritingStep(1);
    if (action === "select-writing-step") selectWritingStep(Number(target.dataset.index || 0), true);
    if (action === "insert-sentence-tile") insertSentenceTile(Number(target.dataset.index));
    if (action === "undo-sentence-tile") undoSentenceTile();
    if (action === "clear-sentence") clearSentencePractice();
    if (action === "check-sentence") checkSentencePractice();
    if (action === "next-sentence") nextSentencePractice();
    if (action === "add-custom-sentence") addCustomSentenceExercise();
    if (action === "edit-custom-sentence") editCustomSentence(target.dataset.id);
    if (action === "delete-custom-sentence") deleteCustomSentence(target.dataset.id);
    if (action === "cancel-custom-sentence-edit") cancelCustomSentenceEdit();
    if (action === "insert-jlpt-tile") insertJlptLessonTile(Number(target.dataset.index));
    if (action === "undo-jlpt-tile") undoJlptLessonTile();
    if (action === "clear-jlpt-practice") clearJlptLessonPractice();
    if (action === "check-jlpt-practice") checkJlptLessonPractice();
    if (action === "next-jlpt-practice") nextJlptLessonPractice();
    if (action === "play-kanji-audio") {
      const card = findCard(id) || findCard(state.activeCardId);
      if (card) playKanjiAudio(card);
    }
    if (action === "open-jlpt-lesson") {
      const jlpt = String(target.dataset.jlpt || "").toUpperCase();
      if (jlptLessonByLevel(jlpt)) {
        state.activeJlptLesson = jlpt;
        setRoute("jlpt-lesson");
      }
    }
    if (action === "play-audio") playAudioPlaceholder(target.dataset.audio, target.dataset.label);
    if (action === "close-reward") {
      state.rewardModal = state.rewardQueue.shift() || null;
      if (state.rewardModal) showRewardFeedback(state.rewardModal);
      render();
    }
    if (action === "set-goal") {
      state.progress.settings.dailyGoal = Number(target.dataset.goal);
      saveProgress();
      toast(`${t("dailyGoal")}: ${state.progress.settings.dailyGoal}`);
      render();
    }
    if (action === "buy-shop") buyCustomizationItem(id);
    if (action === "start-due") {
      setRoute(getDueNowCards().length ? "review" : "learn");
      if (!getDueNowCards().length) toast(dialogueText("eva", "welcome"));
    }
    if (action === "start-lesson" || action === "select-lesson") {
      const lesson = state.lessons.find((item) => item.id === id);
      if (!lesson || !isLessonUnlocked(lesson)) {
        toast(`${t("unlockedAt")} ${unlockLevel(lesson)}`);
        return;
      }
      state.activeLessonId = id;
      state.activeCardId = null;
      state.revealed = false;
      resetReadingCheck();
      if (action === "start-lesson") {
        dispatchEvaEvent("lesson_start", { lessonId: id, jlpt: lesson.jlpt });
        setRoute("learn");
      } else {
        render();
      }
    }
    if (action === "show-answer") {
      state.revealed = true;
      resetReadingCheck();
      render();
    }
    if (action === "check-reading") {
      const input = document.getElementById(`readingCheck-${id || state.activeCardId}`);
      if (input) {
        state.readingCheck.value = input.value;
        state.readingCheck.cardId = id || state.activeCardId;
      }
      checkActiveCardReading();
    }
    if (action === "rate") rateActiveCard(target.dataset.rating);
    if (action === "open-card") {
      state.detailCardId = id;
      render();
    }
    if (action === "open-kanji-page") openKanjiPage(id);
    if (action === "close-detail") {
      state.detailCardId = null;
      render();
    }
    if (action === "study-card") {
      const card = findCard(id);
      if (!card) return;
      state.activeLessonId = card.lessonId;
      state.activeCardId = card.id;
      state.revealed = false;
      resetReadingCheck(card.id);
      state.detailCardId = null;
      setRoute("learn");
    }
    if (action === "write-card") {
      const card = findCard(id);
      if (!card) return;
      state.activeLessonId = card.lessonId;
      state.activeCardId = card.id;
      state.detailCardId = null;
      setRoute("writing");
    }
  }

  function handleEvaDirectPointer(event) {
    const target = event.target.closest?.('[data-action="eva-click"], [data-action="eva-autonomy-next"]');
    if (!target || target.disabled) return;
    const action = target.dataset.action;
    lastEvaDirectActionAt = Date.now();
    event.preventDefault();
    recordEvaPlayerActivity(action);
    if (action === "eva-click") handleEvaRoomSpriteClick();
    if (action === "eva-autonomy-next") nextEvaAutonomyLine();
  }

  function recordEvaPlayerActivity(action = "activity") {
    if (!state.evaRuntime) return;
    state.evaRuntime.lastPlayerActionAt = Date.now();
    state.evaRuntime.memory = mergeEvaMemory(defaultEvaMemory(), state.evaRuntime.memory || {});
    state.evaRuntime.memory.lastRoute = state.route;
    if (action.startsWith("eva")) state.evaRuntime.memory.lastInteractionDate = todayKey();
    if (!["eva-autonomy-next", "eva-question-answer"].includes(action)) return;
    state.evaRuntime.lastPlayerActionAt = Date.now();
  }

  function skipEvaDialogueReveal(target) {
    if (!state.evaRuntime) return;
    const lineId = target?.dataset?.lineId || evaAutonomy().currentLine?.id || "";
    if (!lineId || state.evaRuntime.textRevealSkippedLineId === lineId) return;
    state.evaRuntime.textRevealSkippedLineId = lineId;
    saveEvaState();
    render();
  }

  function playActionSound(action, target) {
    if (!action || target?.disabled) return;
    if (isStudyCardAction(action, target)) return;
    if (["eva-room-choice", "eva-bg-buy", "eva-bg-select"].includes(action)) return;
    if (action === "eva-room-shop-open") {
      playUxSound("menu_open");
      return;
    }
    if (action === "eva-room-shop-close") {
      playUxSound("menu_close");
      return;
    }
    if (action === "route") {
      if (target?.closest(".bottom-nav") && hasNavMenu(target.dataset.route)) {
        playUxSound(state.navMenu === target.dataset.route ? "menu_close" : "menu_open");
        return;
      }
      playUxSound("tab_switch");
      return;
    }
    if (action === "nav-menu-route") {
      playUxSound("tab_switch");
      return;
    }
    if (action === "close-nav-menu") {
      playUxSound("menu_close");
      return;
    }
    if (action === "show-answer" || action === "open-card") {
      playUxSound("card_flip");
      return;
    }
    if (["close-reward", "close-detail", "pwa-later", "notification-later"].includes(action)) {
      playUxSound("menu_close");
      return;
    }
    if (["start-lesson", "select-lesson", "next-sentence", "study-card", "rate", "open-jlpt-lesson"].includes(action)) {
      playUxSound("page_turn");
      return;
    }
    if (["pwa-install", "notification-allow", "set-goal"].includes(action)) {
      playUxSound("notification_soft");
      return;
    }
    if (target?.matches("button, .btn, [role='button']")) playUxSound("button_click");
  }

  function isStudyCardAction(action, target) {
    if (!["learn", "review"].includes(state.route)) return false;
    const quietActions = new Set([
      "show-answer",
      "rate",
      "check-reading",
      "play-kanji-audio",
      "start-lesson",
      "select-lesson",
      "study-card"
    ]);
    return quietActions.has(action) || Boolean(target?.closest(".study-card, .study-layout"));
  }

  function handleInput(event) {
    recordEvaPlayerActivity("input");
    const uxVolumeInput = event.target.closest("[data-ux-volume]");
    if (uxVolumeInput) {
      setUxSoundVolume(Number(uxVolumeInput.value) / 100);
      const label = document.querySelector("[data-ux-volume-label]");
      if (label) label.textContent = `${Math.round(getUxSoundVolume() * 100)}%`;
      return;
    }

    const readingInput = event.target.closest("[data-reading-input]");
    if (readingInput) {
      state.readingCheck = {
        cardId: readingInput.dataset.id || state.activeCardId,
        value: readingInput.value,
        status: null,
        message: ""
      };
      return;
    }

    const sentenceDraftInput = event.target.closest("[data-sentence-draft]");
    if (sentenceDraftInput) {
      const practice = sentencePracticeProgress();
      const field = sentenceDraftInput.dataset.sentenceDraft;
      practice.customDraft = normalizeCustomSentenceDraft(practice.customDraft || {});
      if (field && Object.prototype.hasOwnProperty.call(practice.customDraft, field)) {
        practice.customDraft[field] = sentenceDraftInput.value;
        practice.customMessage = "";
        practice.customStatus = "";
        saveProgress();
      }
      return;
    }

    const input = event.target.closest("[data-filter]");
    if (!input) return;
    const key = input.dataset.filter;
    const selectionStart = input.selectionStart;
    state.filters[key] = input.value;
    state.dictionaryVisibleCount = DICTIONARY_INITIAL_LIMIT;
    render();
    requestAnimationFrame(() => {
      const restored = document.getElementById(input.id);
      if (!restored) return;
      restored.focus();
      if (typeof selectionStart === "number" && "setSelectionRange" in restored) {
        restored.setSelectionRange(selectionStart, selectionStart);
      }
    });
  }

  function handleKeydown(event) {
    if (handleMoonCheatKey(event)) return;

    if (event.key === "Escape" && (state.detailCardId || state.rewardModal || state.navMenu)) {
      state.detailCardId = null;
      state.rewardModal = null;
      state.navMenu = null;
      render();
      return;
    }

    const readingInput = event.target.closest?.("[data-reading-input]");
    if (!readingInput || event.key !== "Enter") return;
    event.preventDefault();
    state.readingCheck.value = readingInput.value;
    state.readingCheck.cardId = readingInput.dataset.id || state.activeCardId;
    checkActiveCardReading();
  }

  function handleMoonCheatKey(event) {
    const target = event.target;
    if (target?.closest?.("input, textarea, select, [contenteditable='true']")) return false;
    if (event.ctrlKey || event.metaKey || event.altKey || event.key.length !== 1) return false;
    moonCheatBuffer = `${moonCheatBuffer}${event.key.toLowerCase()}`.slice(-MOON_CHEAT_CODE.length);
    if (moonCheatBuffer !== MOON_CHEAT_CODE) return false;
    moonCheatBuffer = "";
    grantMoonCheat(5000);
    return true;
  }

  function grantMoonCheat(amount = 5000) {
    const value = Math.max(1, Math.min(999999, Math.floor(Number(amount) || 5000)));
    if (!state.progress) return 0;
    addReward(0, value, "cheat:moon_farm");
    evaluateAchievements();
    saveProgress();
    playUxSound("moon_fragment_gain");
    toast(lang() === "ru" ? `Чит активирован: +${value} Moon` : `Cheat activated: +${value} Moon`);
    render();
    return state.progress.moonFragments;
  }

  function setRoute(route, focus = null) {
    state.route = routes.includes(route) ? route : "home";
    if (location.hash !== `#${state.route}`) history.replaceState(null, "", `#${state.route}`);
    if (state.route !== "kanji") state.kanjiPageId = null;
    state.detailCardId = null;
    state.revealed = false;
    state.navMenu = null;
    state.pendingFocus = focus;
    if (state.route !== "eva-room") state.evaRoomShopOpen = false;
    resetReadingCheck();
    render();
    if (state.route === "eva-room") dispatchEvaEvent("room_opened");
  }

  function openKanjiPage(id) {
    const card = findCard(id);
    if (!card) return;
    state.route = "kanji";
    state.kanjiPageId = card.id;
    state.detailCardId = null;
    state.revealed = false;
    state.navMenu = null;
    state.pendingFocus = null;
    state.evaRoomShopOpen = false;
    resetReadingCheck();
    const nextHash = `#kanji/${encodeURIComponent(card.id)}`;
    if (location.hash !== nextHash) history.replaceState(null, "", nextHash);
    render();
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  function render() {
    destroyCharts();
    syncChrome();

    let html = "";
    if (state.route === "home") html = renderHome();
    if (state.route === "learn") {
      html = renderLearn();
      if (state.pendingFocus !== "lesson-tabs") requestAnimationFrame(autoPlayActiveKanjiAudio);
    }
    if (state.route === "review") {
      html = renderReview();
      if (state.pendingFocus !== "sentence-practice") requestAnimationFrame(autoPlayActiveKanjiAudio);
    }
    if (state.route === "dictionary") html = renderDictionary();
    if (state.route === "kanji") html = renderKanjiPage();
    if (state.route === "writing") {
      html = renderWriting();
      requestAnimationFrame(setupWritingCanvas);
    }
    if (state.route === "stats") {
      html = renderStats();
      requestAnimationFrame(renderCharts);
    }
    if (state.route === "achievements") html = renderAchievementsPage();
    if (state.route === "eva-room") html = renderEvaRoom();
    if (state.route === "jlpt-lesson") html = renderJlptLessonPage();
    app.innerHTML = `${html}${renderGlobalOverlays()}`;
    document.body.classList.toggle("modal-open", Boolean(state.detailCardId || state.rewardModal));
    requestAnimationFrame(applyPendingFocus);
  }

  function renderGlobalOverlays() {
    const overlays = `${renderBottomNavMenu()}${renderDetailModal()}${renderRewardModal()}${renderPwaInstallBanner()}${renderNotificationPermissionBanner()}`;
    return overlays ? `<div class="modal-layer">${overlays}</div>` : "";
  }

  function hasNavMenu(route) {
    return navMenuItems(route).length > 1;
  }

  function toggleNavMenu(route) {
    if (!hasNavMenu(route)) {
      setRoute(route);
      return;
    }
    state.navMenu = state.navMenu === route ? null : route;
    render();
  }

  function navMenuItems(route) {
    const ru = lang() === "ru";
    const items = {
      learn: [
        { route: "learn", focus: "lesson-card", icon: "文", title: ru ? "Текущий урок" : "Current lesson", text: ru ? "Карточки и новые кандзи." : "Cards and new kanji." },
        { route: "learn", focus: "lesson-tabs", icon: "段", title: ru ? "Выбор урока" : "Lesson list", text: ru ? "Перейти к списку уроков." : "Jump to lesson picker." }
      ],
      review: [
        { route: "review", focus: "review-card", icon: "↻", title: ru ? "Повторение" : "Review cards", text: ru ? "SRS-карточки на сегодня." : "Today’s SRS queue." },
        { route: "review", focus: "sentence-practice", icon: "文", title: ru ? "Практика предложений" : "Sentence practice", text: ru ? "Вставь кандзи в пропуск." : "Fill kanji into blanks." }
      ],
      writing: [
        { route: "writing", focus: "writing-demo", icon: "筆", title: ru ? "Порядок черт" : "Stroke order", text: ru ? "Пошаговый пример письма." : "Step-by-step guide." },
        { route: "writing", focus: "writing-canvas", icon: "線", title: ru ? "Проверка письма" : "Writing check", text: ru ? "Напиши кандзи на canvas." : "Write kanji on canvas." }
      ],
      stats: [
        { route: "stats", focus: "stats-top", icon: "▥", title: ru ? "Статистика" : "Statistics", text: ru ? "Графики, XP и серия." : "Charts, XP, and streak." },
        { route: "achievements", focus: "achievements-top", icon: "月", title: ru ? "Достижения" : "Achievements", text: ru ? "Галерея наград." : "Reward gallery." },
        { route: "stats", focus: "shop-panel", icon: "◈", title: ru ? "Магазин" : "Shop", text: ru ? "Moon Fragments и предметы." : "Moon Fragments and items." }
      ]
    };
    return items[route] || [];
  }

  function renderBottomNavMenu() {
    const items = navMenuItems(state.navMenu);
    if (!items.length) return "";
    const current = state.navMenu;
    const title = current ? t(current) : "";
    return `
      <aside class="nav-popover" role="menu" aria-label="${escapeAttr(title)}">
        <div class="nav-popover-head">
          <strong>${escapeHtml(title)}</strong>
          <button class="icon-btn nav-popover-close" type="button" data-action="close-nav-menu" aria-label="${escapeAttr(lang() === "ru" ? "Закрыть меню" : "Close menu")}">×</button>
        </div>
        <div class="nav-popover-list">
          ${items.map((item) => `
            <button class="nav-popover-item" type="button" role="menuitem" data-action="nav-menu-route" data-route="${escapeAttr(item.route)}" data-focus="${escapeAttr(item.focus)}">
              <span>${escapeHtml(item.icon)}</span>
              <b>${escapeHtml(item.title)}</b>
              <small>${escapeHtml(item.text)}</small>
            </button>
          `).join("")}
        </div>
      </aside>
    `;
  }

  function applyPendingFocus() {
    if (!state.pendingFocus) return;
    const focus = state.pendingFocus;
    state.pendingFocus = null;
    const selectors = {
      "lesson-card": ".study-card, .daily-lesson-card",
      "lesson-tabs": ".lesson-tabs",
      "review-card": "[data-section='review-card']",
      "sentence-practice": "[data-section='sentence-practice']",
      "writing-demo": "[data-section='writing-demo']",
      "writing-canvas": "[data-section='writing-canvas']",
      "stats-top": ".metric-grid",
      "achievements-top": ".achievements-page .metric-grid",
      "shop-panel": "[data-section='shop-panel']"
    };
    const element = document.querySelector(selectors[focus] || focus);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    element.classList.add("is-focus-pulse");
    window.setTimeout(() => element.classList.remove("is-focus-pulse"), 900);
  }

  function syncChrome() {
    $$(".nav-btn").forEach((button) => {
      const route = button.dataset.route;
      const active = route === state.route || (route === "stats" && state.route === "achievements") || (route === "dictionary" && state.route === "kanji");
      button.classList.toggle("is-active", active);
      button.classList.toggle("has-menu", hasNavMenu(route));
      button.setAttribute("aria-expanded", state.navMenu === route ? "true" : "false");
      const label = button.querySelector("small");
      if (label && route) label.textContent = t(route);
    });
    const languageButton = $('[data-action="language"]');
    if (languageButton) languageButton.textContent = lang().toUpperCase();
  }

  function renderHome() {
    const summary = getSummary();
    const featured = getTodayCards()[0] || state.cards[0];
    const dailyPercent = progressWidth(todayStats().reviews || 0, state.progress.settings.dailyGoal);
    const levelInfo = getLevelInfo();
    const daily = getDailyLesson();
    const reviewQueue = getDueNowCards().length;
    const newAvailable = getUnlockedNewCards().length;

    return `
      <section class="page">
        <div class="hero-grid">
          <section class="hero-panel">
            <p class="eyebrow">SRS · JLPT N5-N1 · PWA</p>
            <h1 class="hero-title">Flash Kanji</h1>
            <p class="hero-subtitle">${escapeHtml(t("tagline"))}</p>
            <div class="hero-actions">
              <button class="btn primary" type="button" data-action="start-due">▶ ${escapeHtml(t("study"))}</button>
              <button class="btn" type="button" data-action="route" data-route="dictionary">典 ${escapeHtml(t("dictionary"))}</button>
            </div>
            ${renderMascot("eva", "normal", "welcome", "hero-mascot")}
            ${renderHeroDecoration()}
          </section>

          <section class="metric-grid" aria-label="summary">
            ${renderMetric(t("level"), `${state.progress.level}`, `${levelInfo.current}/${levelInfo.next} XP`, levelInfo.percent)}
            ${renderMetric(t("xp"), state.progress.xp, `${levelInfo.toNext} XP`, levelInfo.percent)}
            ${renderMetric(t("coins"), state.progress.moonFragments, t("dailyBonus"), progressWidth(state.progress.moonFragments, 200))}
            ${renderMetric(t("dailyGoal"), `${todayStats().reviews || 0}/${state.progress.settings.dailyGoal}`, t("cardsToday"), dailyPercent)}
            ${renderMetric(t("reviewQueue"), reviewQueue, t("review"), progressWidth(reviewQueue, Math.max(summary.total, 1)))}
            ${renderMetric(t("newCards"), newAvailable, t("learn"), progressWidth(newAvailable, Math.max(summary.total, 1)))}
            ${renderStreakCard()}
            ${renderMascotPanel("leya", "calm", "welcome")}
          </section>
        </div>

        <article class="daily-lesson-card">
          <div>
            <span class="pill">${escapeHtml(t("todayLesson"))}</span>
            <h2>${escapeHtml(daily ? lessonTitle(daily) : "-")}</h2>
            <p>${escapeHtml(daily ? lessonSummary(daily) : "")}</p>
          </div>
          <button class="btn primary" type="button" data-action="start-lesson" data-id="${escapeAttr(daily?.id || "")}">▶ ${escapeHtml(t("study"))}</button>
        </article>

        ${renderEvaRoomEntry()}

        <div class="goal-strip">
          ${state.rewards.dailyGoals.map((goal) => `
            <button class="btn ${goal === state.progress.settings.dailyGoal ? "primary" : "ghost"}" type="button" data-action="set-goal" data-goal="${goal}">
              ${goal} ${escapeHtml(t("cardsToday"))}
            </button>
          `).join("")}
        </div>

        <div class="section-head">
          <div>
            <h2>${escapeHtml(t("lessons"))}</h2>
            <p>${escapeHtml(t("lessonsStored"))}</p>
          </div>
        </div>
        <div class="lesson-grid">${state.lessons.map(renderLessonTile).join("")}</div>

        ${featured ? renderFeaturedCard(featured) : ""}
        ${renderAchievementsPreview()}
      </section>
    `;
  }

  function renderStreakCard() {
    const checkpoints = [1, 7, 30, 100];
    return `
      <article class="metric streak-card">
        <span>${escapeHtml(t("streak"))}</span>
        <strong>${state.progress.streak.current}</strong>
        <div class="streak-dots">
          ${checkpoints.map((day) => `<span class="${state.progress.streak.current >= day ? "is-hit" : ""}">${day}</span>`).join("")}
        </div>
      </article>
    `;
  }

  function renderEvaRoomEntry() {
    const bg = currentEvaRoomBackground();
    const node = currentEvaRoomNode();
    const label = lang() === "ru"
      ? { title: "Комната Евы", text: "Мини-новелла, разговоры и уютные фоны за Moon Fragments.", action: "Войти" }
      : { title: "Eva Room", text: "A cozy mini visual novel with backgrounds and Moon Fragments.", action: "Enter" };
    return `
      <article class="eva-room-entry">
        <div class="eva-room-entry-bg">
          <img src="${escapeAttr(bg.file)}" alt="" loading="lazy" onerror="this.hidden=true" />
        </div>
        <div>
          <span class="pill">Eva Room</span>
          <h2>${escapeHtml(label.title)}</h2>
          <p>${escapeHtml(label.text)}</p>
          <div class="tag-row">
            <span class="pill">Moon ${state.progress.moonFragments}</span>
            <span class="pill">${escapeHtml(localized(bg.title))}</span>
            <span class="pill">${escapeHtml(localized(node.speaker || { ru: "Ева", en: "Eva" }))}</span>
          </div>
        </div>
        <button class="btn primary" type="button" data-action="route" data-route="eva-room">Eva · ${escapeHtml(label.action)}</button>
      </article>
    `;
  }

  function evaScenePresenceState(scene) {
    return scene.line?.state || state.evaRuntime?.presenceState || (scene.isAutonomy ? "speak" : "wait_choice");
  }

  function evaSpriteMotionClass(scene) {
    const classes = ["eva-vn-sprite"];
    const presenceState = evaScenePresenceState(scene);
    if (["speak", "soften", "warning"].includes(presenceState)) classes.push("is-speaking");
    if (["react", "warning"].includes(presenceState) || Date.now() - Number(state.evaRuntime?.lastVisualChangeAt || 0) < 1400) classes.push("is-reacting");
    if (presenceState === "quiet") classes.push("is-quiet");
    return classes.join(" ");
  }

  function splitEvaDialoguePieces(text) {
    const raw = String(text || "").trim();
    if (!raw) return [];
    const pieces = raw.match(/[^.!?。！？]+[.!?。！？]?/g) || [raw];
    return pieces.map((piece) => piece.trim()).filter(Boolean);
  }

  function renderEvaDialogueText(text, lineId = "") {
    const pieces = splitEvaDialoguePieces(text);
    const skipped = state.evaRuntime?.textRevealSkippedLineId === lineId;
    const className = `eva-dialogue-text ${skipped ? "is-skipped" : ""}`;
    const content = pieces.length
      ? pieces.map((piece, index) => `<span class="eva-line-piece" style="--i:${index}">${escapeHtml(piece)}</span>`).join(" ")
      : escapeHtml(text);
    return `<p class="${className}" data-action="eva-dialogue-skip" data-line-id="${escapeAttr(lineId)}">${content}</p>`;
  }

  function renderEvaRoom() {
    ensureEvaRoomProgress();
    syncEvaRelationshipFromProgress();
    const scene = currentEvaRoomScene();
    const node = scene.node;
    const bg = currentEvaRoomBackground() || scene.bg || getEvaRoomBackground(node.background);
    const sprite = evaSpritePath(scene.sprite || resolveEvaSprite(node.sprite));
    const labels = evaRoomLabels();
    const liveLabels = evaLiveLabels();
    const choices = Array.isArray(node.choices) ? node.choices : [];
    const presenceState = evaScenePresenceState(scene);
    const lineId = scene.line?.id || node.id || "eva_dialogue";
    return `
      <section class="page eva-room-page">
        <div class="eva-room-toolbar">
          <button class="btn ghost" type="button" data-action="route" data-route="home">← ${escapeHtml(labels.back)}</button>
          <div class="eva-room-currency">
            <span>Moon</span>
            <strong>${state.progress.moonFragments}</strong>
            <small>Moon Fragments</small>
          </div>
          <span class="eva-room-live-pill">${escapeHtml(liveLabels.badge)}</span>
          <button class="btn primary" type="button" data-action="eva-room-shop-open">Shop · ${escapeHtml(labels.shop)}</button>
        </div>

        ${renderEvaRelationshipStats()}
        ${renderEvaAutonomyPanel(scene)}
        <article class="eva-vn-scene ${scene.isAutonomy ? "is-autonomous" : ""} is-${escapeAttr(presenceState)}" data-eva-state="${escapeAttr(presenceState)}" data-eva-mood="${escapeAttr(scene.mood || evaRelationship().mood)}" data-eva-emotion="${escapeAttr(scene.emotion || "calm")}" style="--eva-bg:url('${escapeAttr(bg.file)}')">
          <div class="eva-vn-bg" aria-hidden="true"></div>
          <button class="eva-sprite-button" type="button" data-action="eva-click" aria-label="${escapeAttr(localized(node.speaker || { ru: "Ева", en: "Eva" }))}">
            <img class="${escapeAttr(evaSpriteMotionClass(scene))}" src="${escapeAttr(sprite)}" alt="${escapeAttr(localized(node.speaker || { ru: "Ева", en: "Eva" }))}" onerror="this.src='assets/mascots/eva_normal.png'" />
          </button>
          ${renderEvaRoomDecoration(scene)}
          <div class="eva-dialogue-box">
            <div class="eva-dialogue-meta">
              <strong>${escapeHtml(localized(node.speaker || { ru: "Ева", en: "Eva" }))}</strong>
              <span>${scene.isAutonomy ? `${escapeHtml(liveLabels.badge)} · ` : ""}${escapeHtml(localized(bg.title || {}))}</span>
            </div>
            ${renderEvaDialogueText(localized(node.text || {}), lineId)}
            ${scene.isAutonomy ? renderEvaAutonomyChoices(labels) : `
              <div class="eva-choice-grid">
                ${choices.map((choice, index) => `
                  <button class="btn ${index === 0 ? "primary" : "ghost"}" type="button" data-action="eva-room-choice" data-index="${index}">
                    ${escapeHtml(localized(choice.text || {}))}
                    ${choice.rewardMoonFragments ? `<small>+${choice.rewardMoonFragments} Moon</small>` : ""}
                  </button>
                `).join("")}
              </div>
            `}
          </div>
        </article>

        <div class="eva-room-footer-actions">
          <button class="btn" type="button" data-action="eva-room-reset">${escapeHtml(labels.restart)}</button>
          <button class="btn" type="button" data-action="route" data-route="learn">${escapeHtml(labels.study)}</button>
          <button class="btn" type="button" data-action="route" data-route="review">${escapeHtml(labels.review)}</button>
        </div>

        ${state.evaRoomShopOpen ? renderEvaRoomShop() : ""}
      </section>
    `;
  }

  function renderEvaRoomShop() {
    const labels = evaRoomLabels();
    return `
      <aside class="eva-shop-panel customization-shop-panel" role="dialog" aria-label="${escapeAttr(labels.shop)}">
        ${renderCustomizationShop({ closable: true })}
      </aside>
    `;
  }

  function renderEvaRoomDecoration(scene = {}) {
    const item = selectedDecorationItem(scene);
    if (!item) return "";
    return `
      <div class="eva-room-decoration deco-${escapeAttr(item.id)}" aria-label="${escapeAttr(customizationItemTitle(item))}">
        <img src="${escapeAttr(item.asset || item.preview)}" alt="" loading="lazy" />
      </div>
    `;
  }

  function renderHeroDecoration() {
    const item = selectedDecorationItem();
    if (!item) return "";
    return `
      <div class="hero-decoration deco-${escapeAttr(item.id)}" aria-label="${escapeAttr(customizationItemTitle(item))}">
        <img src="${escapeAttr(item.asset || item.preview)}" alt="" loading="lazy" />
      </div>
    `;
  }

  function selectedDecorationItem(scene = {}) {
    const decorationId = scene.decoration || evaAutonomy().currentDecoration || state.customization?.selected?.decoration || state.customization?.selected?.frame;
    const item = customizationShopItem(decorationId);
    if (!item || item.type !== "decoration" || !isCustomizationOwned(item.id)) return null;
    return item;
  }

  function renderCustomizationShop(options = {}) {
    const labels = shopLabels();
    const items = filteredCustomizationItems();
    const ownedCount = customizationShopItems().filter((item) => isCustomizationOwned(item.id)).length;
    return `
      <div class="custom-shop">
        <div class="custom-shop-hero">
          <div>
            <span class="pill">${escapeHtml(labels.subtitle)}</span>
            <h2>${escapeHtml(labels.title)}</h2>
            <p>${escapeHtml(labels.hint)}</p>
            <div class="custom-shop-stats">
              <span><b>${state.progress.moonFragments}</b> Moon</span>
              <span><b>${ownedCount}</b>/${customizationShopItems().length} ${escapeHtml(labels.ownedShort)}</span>
            </div>
          </div>
          ${options.closable ? `<button class="icon-btn" type="button" data-action="eva-room-shop-close" aria-label="${escapeAttr(evaRoomLabels().close)}">×</button>` : ""}
        </div>
        <div class="custom-shop-tabs" role="tablist" aria-label="${escapeAttr(labels.categories)}">
          ${customizationCategories().map((category) => `
            <button class="${state.shopFilters.category === category.id ? "is-active" : ""}" type="button" data-action="shop-category" data-category="${escapeAttr(category.id)}">
              ${escapeHtml(localized({ ru: category.title_ru, en: category.title_en }))}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls">
          ${shopViewFilters().map((filter) => `
            <button class="${state.shopFilters.view === filter.id ? "is-active" : ""}" type="button" data-action="shop-filter" data-filter="${escapeAttr(filter.id)}">
              ${escapeHtml(filter.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls custom-shop-sort">
          ${shopSortFilters().map((filter) => `
            <button class="${state.shopFilters.sort === filter.id ? "is-active" : ""}" type="button" data-action="shop-sort" data-sort="${escapeAttr(filter.id)}">
              ${escapeHtml(filter.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-grid">
          ${items.map(renderCustomizationItemCard).join("") || `<article class="empty-state"><h3>${escapeHtml(labels.empty)}</h3></article>`}
        </div>
        <div class="custom-shop-history">
          ${renderTransactions({ compact: true, limit: 6 })}
        </div>
      </div>
    `;
  }

  function customizationCategories() {
    return state.customizationCatalog?.categories?.length
      ? state.customizationCatalog.categories
      : [
          { id: "all", title_ru: "Все", title_en: "All" },
          { id: "background", title_ru: "Фоны", title_en: "Backgrounds" },
          { id: "outfit", title_ru: "Образы", title_en: "Outfits" },
          { id: "decoration", title_ru: "Декор", title_en: "Decorations" },
          { id: "theme", title_ru: "Темы", title_en: "Themes" },
          { id: "effect", title_ru: "Эффекты", title_en: "Effects" }
        ];
  }

  function shopViewFilters() {
    const ru = lang() === "ru";
    return [
      { id: "all", title: ru ? "Все" : "All" },
      { id: "available", title: ru ? "Доступные" : "Available" },
      { id: "owned", title: ru ? "Купленные" : "Owned" },
      { id: "new", title: ru ? "Новые" : "New" }
    ];
  }

  function shopSortFilters() {
    const ru = lang() === "ru";
    return [
      { id: "featured", title: ru ? "Рекомендовано" : "Featured" },
      { id: "price", title: ru ? "По цене" : "By price" },
      { id: "rarity", title: ru ? "По редкости" : "By rarity" }
    ];
  }

  function filteredCustomizationItems() {
    const category = state.shopFilters.category || "all";
    const view = state.shopFilters.view || "all";
    const rarityRank = { common: 1, rare: 2, epic: 3, legendary: 4, mythic: 5 };
    let items = customizationShopItems().filter((item) => category === "all" || item.type === category);
    if (view === "available") items = items.filter((item) => customizationItemStatus(item) === "available");
    if (view === "owned") items = items.filter((item) => isCustomizationOwned(item.id));
    if (view === "new") items = items.filter((item) => !state.customization?.seen?.includes(item.id));
    if (state.shopFilters.sort === "price") items = [...items].sort((a, b) => a.price - b.price);
    if (state.shopFilters.sort === "rarity") items = [...items].sort((a, b) => (rarityRank[b.rarity] || 0) - (rarityRank[a.rarity] || 0) || a.price - b.price);
    return items;
  }

  function renderCustomizationItemCard(item) {
    const status = customizationItemStatus(item);
    const labels = shopLabels();
    const statusText = labels.status[status] || status;
    const unlockHint = customizationUnlockHint(item);
    const action = status === "available"
      ? `<button class="btn primary" type="button" data-action="shop-buy" data-id="${escapeAttr(item.id)}">${escapeHtml(labels.buy)}</button>`
      : status === "owned"
        ? `<button class="btn" type="button" data-action="shop-select" data-id="${escapeAttr(item.id)}">${escapeHtml(labels.select)}</button>`
        : status === "selected"
          ? `<button class="btn success" type="button" disabled>${escapeHtml(labels.selected)}</button>`
          : `<button class="btn" type="button" disabled>${escapeHtml(labels.unavailable)}</button>`;
    return `
      <article class="custom-shop-card type-${escapeAttr(item.type)} is-${escapeAttr(status)} rarity-${escapeAttr(item.rarity)}">
        <div class="custom-shop-preview">
          <img src="${escapeAttr(item.preview || item.asset)}" alt="${escapeAttr(customizationItemTitle(item))}" loading="lazy" onerror="this.closest('.custom-shop-card').classList.add('is-missing')" />
          <span class="rarity-badge">${escapeHtml(rarityLabel(item.rarity))}</span>
        </div>
        <div class="custom-shop-card-body">
          <div class="custom-shop-title-row">
            <strong>${escapeHtml(customizationItemTitle(item))}</strong>
            <span class="status-badge">${escapeHtml(statusText)}</span>
          </div>
          ${item.stars ? `<div class="custom-shop-stars" aria-label="${escapeAttr(`${item.stars} stars`)}">${escapeHtml("★".repeat(Math.max(1, Math.min(5, Number(item.stars) || 1))))}</div>` : ""}
          <p>${escapeHtml(customizationItemDescription(item))}</p>
          ${item.type === "outfit" && customizationItemPhrase(item) ? `<blockquote class="custom-shop-phrase">${escapeHtml(customizationItemPhrase(item))}</blockquote>` : ""}
          ${unlockHint ? `<small class="custom-shop-unlock">${escapeHtml(unlockHint)}</small>` : ""}
          <div class="custom-shop-price">
            <span>${item.price ? `${item.price} Moon` : labels.free}</span>
            <small>${escapeHtml(typeLabel(item.type))}</small>
          </div>
          ${action}
        </div>
      </article>
    `;
  }

  function shopLabels() {
    const ru = lang() === "ru";
    return ru
      ? {
          title: "Магазин кастомизации",
          subtitle: "Flash Kanji Custom",
          hint: "Фоны, образы Евы, декор, темы и эффекты за Moon Fragments.",
          categories: "Категории магазина",
          ownedShort: "куплено",
          buy: "Купить",
          select: "Выбрать",
          selected: "Выбран",
          unavailable: "Недоступно",
          free: "Бесплатно",
          locked: "Предмет пока недоступен.",
          notEnough: "Не хватает Moon Fragments.",
          bought: "Куплено: {item}",
          selectedToast: "Выбрано: {item}",
          empty: "Нет предметов по этому фильтру.",
          status: { selected: "Выбран", owned: "Куплено", available: "Доступно", locked: "Закрыто" }
        }
      : {
          title: "Customization Shop",
          subtitle: "Flash Kanji Custom",
          hint: "Backgrounds, Eva outfits, room decor, themes, and effects for Moon Fragments.",
          categories: "Shop categories",
          ownedShort: "owned",
          buy: "Buy",
          select: "Select",
          selected: "Selected",
          unavailable: "Unavailable",
          free: "Free",
          locked: "This item is not available yet.",
          notEnough: "Not enough Moon Fragments.",
          bought: "Bought: {item}",
          selectedToast: "Selected: {item}",
          empty: "No items match this filter.",
          status: { selected: "Selected", owned: "Owned", available: "Available", locked: "Locked" }
        };
  }

  function customizationItemTitle(item) {
    return lang() === "en" ? item.title_en || item.title_ru || item.id : item.title_ru || item.title_en || item.id;
  }

  function customizationItemDescription(item) {
    return lang() === "en" ? item.description_en || item.description_ru || "" : item.description_ru || item.description_en || "";
  }

  function customizationItemPhrase(item) {
    return lang() === "en" ? item.phrase_en || item.phrase_ru || "" : item.phrase_ru || item.phrase_en || "";
  }

  function rarityLabel(rarity) {
    const labels = {
      common: lang() === "ru" ? "Common" : "Common",
      rare: lang() === "ru" ? "Rare" : "Rare",
      epic: lang() === "ru" ? "Epic" : "Epic",
      legendary: lang() === "ru" ? "Legendary" : "Legendary",
      mythic: lang() === "ru" ? "Mythic" : "Mythic"
    };
    return labels[rarity] || rarity;
  }

  function typeLabel(type) {
    const ru = lang() === "ru";
    return {
      background: ru ? "Фон" : "Background",
      outfit: ru ? "Образ" : "Outfit",
      decoration: ru ? "Декор" : "Decoration",
      theme: ru ? "Тема" : "Theme",
      effect: ru ? "Эффект" : "Effect"
    }[type] || type;
  }

  function renderEvaAutonomyPanel(scene) {
    const labels = evaRoomLabels();
    const live = evaLiveLabels();
    const autonomy = evaAutonomy();
    const bg = scene.bg || currentEvaRoomBackground();
    const spriteItem = getEvaSpriteShopItem(scene.sprite || state.progress.selectedEvaSprite);
    const effectItem = customizationShopItem(scene.effect || autonomy.currentEffect);
    const decorationItem = customizationShopItem(scene.decoration || autonomy.currentDecoration);
    const moodLabel = evaMoodLabel(scene.mood || autonomy.mood);
    return `
      <aside class="eva-autonomy-panel eva-live-status" data-eva-lines="${state.evaAutonomyLines.length}" data-eva-current="${escapeAttr(autonomy.currentLine?.id || "")}">
        <div>
          <span class="pill">${escapeHtml(live.badge)}</span>
          <strong>${escapeHtml(live.status)}</strong>
          <small>${escapeHtml(live.hint)}</small>
        </div>
        <div class="eva-autonomy-meta">
          <span>${escapeHtml(live.mood)}: ${escapeHtml(moodLabel)}</span>
          <span>${escapeHtml(localized(bg.title || {}))}</span>
          <span>${escapeHtml(localized(spriteItem?.title || { ru: "Ева", en: "Eva" }))}</span>
          ${decorationItem ? `<span>${escapeHtml(customizationItemTitle(decorationItem))}</span>` : ""}
          ${effectItem ? `<span>${escapeHtml(customizationItemTitle(effectItem))}</span>` : ""}
        </div>
      </aside>
    `;
  }

  function renderEvaAutonomyChoices(labels) {
    const live = evaLiveLabels();
    const question = evaAutonomy().currentQuestion;
    if (question?.id) {
      return `
        <div class="eva-question-box">
          <span class="pill">${escapeHtml(live.question)}</span>
          <strong>${escapeHtml(localized(question.text))}</strong>
          <div class="eva-choice-grid">
            ${question.options.map((option) => `
              <button class="btn ${option.id === question.options[0]?.id ? "primary" : "ghost"}" type="button" data-action="eva-question-answer" data-option="${escapeAttr(option.id)}">
                ${escapeHtml(localized(option.text))}
              </button>
            `).join("")}
          </div>
        </div>
      `;
    }
    return `
      <div class="eva-choice-grid">
        <button class="btn primary" type="button" data-action="eva-autonomy-next">${escapeHtml(labels.nextAutonomyLine)}</button>
        <button class="btn ghost" type="button" data-action="eva-room-reset">${escapeHtml(labels.storyDialogue)}</button>
        <button class="btn" type="button" data-action="route" data-route="learn">${escapeHtml(labels.study)}</button>
      </div>
    `;
  }

  function evaLiveLabels() {
    return lang() === "ru"
      ? {
          badge: "Ева рядом",
          status: "Ева держит присутствие в комнате",
          hint: "Она помнит паузы, выбирает тон по контексту и реагирует открытыми образами без лишнего шума.",
          mood: "Настроение",
          question: "Вопрос Евы"
        }
      : {
          badge: "Eva nearby",
          status: "Eva keeps presence in the room",
          hint: "She remembers gaps, chooses tone from context, and reacts with unlocked looks without extra noise.",
          mood: "Mood",
          question: "Eva's question"
        };
  }

  function evaMoodLabel(mood) {
    const ru = lang() === "ru";
    const labels = ru
      ? {
          neutral: "Ровное настроение",
          focused: "Собрана",
          soft: "Мягче обычного",
          strict: "Строгая",
          tired: "Немного устала",
          happy: "Довольна прогрессом",
          serious: "Серьёзна",
          mystic: "Лунное настроение",
          cyber: "Анализирует",
          travel: "Вспоминает дороги",
          quiet: "Молчит рядом",
          curious: "Заинтересована",
          close: "Близость",
          proud: "Гордится тобой",
          worried: "Беспокоится",
          reserved: "Держит дистанцию"
        }
      : {
          neutral: "Steady mood",
          focused: "Focused",
          soft: "Softer than usual",
          strict: "Strict",
          tired: "A little tired",
          happy: "Pleased with progress",
          serious: "Serious",
          mystic: "Moonlit mood",
          cyber: "Analyzing",
          travel: "Thinking of old roads",
          quiet: "Quiet nearby",
          curious: "Interested",
          close: "Close",
          proud: "Proud of you",
          worried: "Worried",
          reserved: "Reserved"
        };
    return labels[mood] || labels.neutral;
  }

  function renderEvaRelationshipStats() {
    const rel = evaRelationship();
    const labels = evaRoomLabels();
    const moodLabel = labels.moods[rel.mood] || labels.moods.neutral;
    const stats = [
      ["warmth", labels.warmth, rel.warmth],
      ["trust", labels.trust, rel.trust],
      ["discipline", labels.discipline, rel.discipline],
      ["curiosity", labels.curiosity, rel.curiosity]
    ];
    return `
      <aside class="eva-relationship-panel" aria-label="${escapeAttr(labels.relationship)}">
        <div class="eva-relationship-head">
          <span>${escapeHtml(labels.relationship)}</span>
          <strong>${escapeHtml(moodLabel)}</strong>
        </div>
        <div class="eva-relationship-grid">
          ${stats.map(([key, label, value]) => `
            <div class="eva-relationship-stat eva-stat-${key}">
              <div><span>${escapeHtml(label)}</span><strong>${Math.round(value)}</strong></div>
              <i><b style="width:${clamp(value, 0, 100)}%"></b></i>
            </div>
          `).join("")}
        </div>
      </aside>
    `;
  }

  function evaRoomLabels() {
    return lang() === "ru"
      ? {
        back: "На главную",
        shop: "Магазин Евы",
        close: "Закрыть",
        shopHint: "Покупай комнаты и образы Евы за Moon Fragments.",
        buy: "Купить",
        select: "Выбрать",
        selected: "Выбран",
        free: "Открыто",
        restart: "Начать диалог заново",
        study: "К уроку",
        review: "К повтору",
        notEnough: "Не хватает Moon Fragments.",
        bought: "Фон открыт.",
        selectedToast: "Фон выбран.",
        reward: "Ева дала Moon Fragments.",
        roomShopTitle: "Комнаты",
        spriteShopTitle: "Образы Евы",
        spriteBought: "Образ Евы открыт.",
        spriteSelected: "Образ Евы выбран.",
        autonomyBadge: "Ева рядом",
        autonomyShortOn: "Ева · авто",
        autonomyShortOff: "Ева · тихо",
        autonomyOn: "Ева рядом",
        autonomyOff: "Ева рядом",
        autonomyHint: "Ева сама выбирает реплики, настроение, комнату и образ без спойлеров FIS.",
        autonomySettingsHint: "Самостоятельные реплики Евы в комнате, без раскрытия сюжета.",
        enableAutonomy: "Ева рядом",
        disableAutonomy: "Ева рядом",
        changeFrequency: "Статус Евы",
        frequency: "Частота",
        frequencies: { quiet: "тихо", normal: "нормально", active: "часто" },
        roomMode: "Комната",
        outfitMode: "Образ",
        roomModeButton: "Комната Евы",
        outfitModeButton: "Образ Евы",
        auto: "авто",
        manual: "ручной",
        nextAutonomyLine: "Ещё мысль.",
        storyDialogue: "Вернуться к диалогу.",
        relationship: "Отношения с Евой",
        warmth: "Тепло",
        trust: "Доверие",
        discipline: "Дисциплина",
        curiosity: "Интерес",
        moreTalk: "Ещё реплика",
        anotherTalk: "Другая тема",
        moods: {
          neutral: "Ровное настроение",
          close: "Близость",
          proud: "Гордится тобой",
          curious: "Заинтересована",
          worried: "Беспокоится",
          reserved: "Держит дистанцию"
        }
      }
      : {
        back: "Home",
        shop: "Eva Shop",
        close: "Close",
        shopHint: "Buy rooms and Eva looks with Moon Fragments.",
        buy: "Buy",
        select: "Select",
        selected: "Selected",
        free: "Unlocked",
        restart: "Restart dialogue",
        study: "Study",
        review: "Review",
        notEnough: "Not enough Moon Fragments.",
        bought: "Background unlocked.",
        selectedToast: "Background selected.",
        reward: "Eva gave you Moon Fragments.",
        roomShopTitle: "Rooms",
        spriteShopTitle: "Eva Looks",
        spriteBought: "Eva look unlocked.",
        spriteSelected: "Eva look selected.",
        autonomyBadge: "Eva nearby",
        autonomyShortOn: "Eva · auto",
        autonomyShortOff: "Eva · quiet",
        autonomyOn: "Eva nearby",
        autonomyOff: "Eva nearby",
        autonomyHint: "Eva chooses lines, mood, room, and look by herself without FIS spoilers.",
        autonomySettingsHint: "Independent Eva lines in her room, without story spoilers.",
        enableAutonomy: "Eva nearby",
        disableAutonomy: "Eva nearby",
        changeFrequency: "Eva status",
        frequency: "Frequency",
        frequencies: { quiet: "quiet", normal: "normal", active: "active" },
        roomMode: "Room",
        outfitMode: "Look",
        roomModeButton: "Eva room",
        outfitModeButton: "Eva look",
        auto: "auto",
        manual: "manual",
        nextAutonomyLine: "Another thought.",
        storyDialogue: "Back to dialogue.",
        relationship: "Relationship with Eva",
        warmth: "Warmth",
        trust: "Trust",
        discipline: "Discipline",
        curiosity: "Interest",
        moreTalk: "Another line",
        anotherTalk: "Different topic",
        moods: {
          neutral: "Steady mood",
          close: "Close",
          proud: "Proud of you",
          curious: "Interested",
          worried: "Worried",
          reserved: "Reserved"
        }
      };
  }

  function ensureEvaRoomProgress() {
    state.progress.unlockedBackgrounds ||= ["bg_study_hub"];
    if (!state.progress.unlockedBackgrounds.includes("bg_study_hub")) state.progress.unlockedBackgrounds.unshift("bg_study_hub");
    state.progress.selectedEvaRoomBackground ||= "bg_study_hub";
    state.progress.unlockedEvaSprites ||= ["idle", "default"];
    ["idle", "default"].forEach((sprite) => {
      if (!state.progress.unlockedEvaSprites.includes(sprite)) state.progress.unlockedEvaSprites.push(sprite);
    });
    state.progress.selectedEvaSprite ||= "idle";
    state.progress.evaAutonomy = mergeEvaAutonomy(defaultEvaAutonomy(), state.progress.evaAutonomy || {});
    state.evaRuntime ||= defaultEvaStateV2();
    state.progress.evaRoomDialogueProgress ||= { currentNode: "intro", rewardsClaimed: {}, visited: {}, lineHistory: [] };
    state.progress.evaRoomDialogueProgress.currentNode ||= "intro";
    state.progress.evaRoomDialogueProgress.rewardsClaimed ||= {};
    state.progress.evaRoomDialogueProgress.visited ||= {};
    state.progress.evaRoomDialogueProgress.lineHistory = Array.isArray(state.progress.evaRoomDialogueProgress.lineHistory)
      ? state.progress.evaRoomDialogueProgress.lineHistory.slice(-24)
      : [];
    if (!state.progress.evaRelationship) {
      state.progress.evaRelationship = defaultEvaRelationship();
    } else {
      const normalized = mergeEvaRelationship(defaultEvaRelationship(), state.progress.evaRelationship);
      Object.keys(state.progress.evaRelationship).forEach((key) => delete state.progress.evaRelationship[key]);
      Object.assign(state.progress.evaRelationship, normalized);
    }
  }

  function evaRelationship() {
    ensureEvaRoomProgress();
    return state.progress.evaRelationship;
  }

  function syncEvaRelationshipFromProgress() {
    if (!state.progress || !state.cards.length) return false;
    ensureEvaRoomProgress();
    const rel = state.progress.evaRelationship;
    let changed = false;
    const today = todayKey();
    const lastDecayDate = rel.lastDecayDate || today;
    const daysSinceDecay = Math.max(0, dayDifference(lastDecayDate, today));
    if (daysSinceDecay > 0) {
      const lastStudy = state.progress.streak?.lastStudyDate;
      const studyGap = lastStudy ? dayDifference(lastStudy, today) : daysSinceDecay + 1;
      if (!lastStudy || studyGap > 1) {
        adjustEvaRelationship({
          warmth: -Math.min(10, daysSinceDecay * 1.2),
          trust: -Math.min(14, daysSinceDecay * 1.6),
          discipline: -Math.min(22, daysSinceDecay * 3.4)
        }, "study_gap", { silent: true });
        changed = true;
      } else if ((state.progress.streak?.current || 0) > 0) {
        adjustEvaRelationship({ discipline: 0.8, trust: 0.4 }, "streak_kept", { silent: true });
        changed = true;
      }
      rel.lastDecayDate = today;
    }

    const summary = getSummary();
    const snapshot = {
      learned: summary.learned,
      mastered: summary.mastered,
      reviews: totalReviews(),
      lessons: Object.keys(state.progress.lessonCompletions || {}).length,
      streak: Math.max(state.progress.streak?.current || 0, state.progress.streak?.best || 0),
      wrong: state.progress.totalWrong || 0,
      writing: state.progress.writingPractice?.completed || 0,
      sentence: Object.keys(state.progress.sentencePractice?.completed || {}).length
    };
    const known = rel.lastKnown || {};
    const delta = (key) => Math.max(0, Number(snapshot[key] || 0) - Number(known[key] || 0));
    const relationshipDelta = {};
    const reviews = delta("reviews");
    const learned = delta("learned");
    const mastered = delta("mastered");
    const lessons = delta("lessons");
    const streak = delta("streak");
    const wrong = delta("wrong");
    const writing = delta("writing");
    const sentence = delta("sentence");

    if (reviews) {
      relationshipDelta.discipline = (relationshipDelta.discipline || 0) + Math.min(18, reviews * 0.08);
      relationshipDelta.trust = (relationshipDelta.trust || 0) + Math.min(10, reviews * 0.04);
    }
    if (learned) {
      relationshipDelta.trust = (relationshipDelta.trust || 0) + Math.min(20, learned * 0.5);
      relationshipDelta.curiosity = (relationshipDelta.curiosity || 0) + Math.min(16, learned * 0.35);
    }
    if (mastered) {
      relationshipDelta.trust = (relationshipDelta.trust || 0) + Math.min(16, mastered * 1.2);
      relationshipDelta.warmth = (relationshipDelta.warmth || 0) + Math.min(8, mastered * 0.5);
    }
    if (lessons) {
      relationshipDelta.warmth = (relationshipDelta.warmth || 0) + Math.min(12, lessons * 2);
      relationshipDelta.discipline = (relationshipDelta.discipline || 0) + Math.min(10, lessons * 1.5);
    }
    if (streak) {
      relationshipDelta.discipline = (relationshipDelta.discipline || 0) + Math.min(15, streak * 3);
      relationshipDelta.warmth = (relationshipDelta.warmth || 0) + Math.min(8, streak);
    }
    if (writing) relationshipDelta.curiosity = (relationshipDelta.curiosity || 0) + Math.min(10, writing * 0.8);
    if (sentence) relationshipDelta.trust = (relationshipDelta.trust || 0) + Math.min(10, sentence * 0.8);
    if (wrong) relationshipDelta.discipline = (relationshipDelta.discipline || 0) - Math.min(6, wrong * 0.12);

    if (Object.keys(relationshipDelta).length) {
      adjustEvaRelationship(relationshipDelta, "learning_progress", { silent: true });
      changed = true;
    }
    rel.lastKnown = snapshot;
    updateEvaRelationshipMood();
    return changed;
  }

  function adjustEvaRelationship(delta = {}, reason = "relationship", options = {}) {
    ensureEvaRoomProgress();
    const rel = state.progress.evaRelationship;
    ["warmth", "trust", "discipline", "curiosity"].forEach((key) => {
      if (typeof delta[key] === "undefined") return;
      rel[key] = round(clamp(Number(rel[key] || 0) + Number(delta[key] || 0), 0, 100), 1);
    });
    updateEvaRelationshipMood();
    if (!options.silent) {
      rel.history.unshift({ at: new Date().toISOString(), reason, delta });
      rel.history = rel.history.slice(0, 40);
    }
    return rel;
  }

  function updateEvaRelationshipMood() {
    const rel = state.progress.evaRelationship;
    if (rel.discipline < 25) rel.mood = "worried";
    else if (rel.trust < 30) rel.mood = "reserved";
    else if (rel.warmth >= 76 && rel.trust >= 68) rel.mood = "close";
    else if ((state.progress.streak?.current || 0) >= 7 && rel.discipline >= 58) rel.mood = "proud";
    else if (rel.curiosity >= 68) rel.mood = "curious";
    else rel.mood = "neutral";
    return rel.mood;
  }

  function selectedEvaSkinId() {
    const selectedOutfitId = state.customization?.selected?.outfit || state.progress?.shop?.equipped?.outfit || null;
    const outfit = customizationShopItem(selectedOutfitId);
    const spriteId = outfit?.spriteId || state.progress?.selectedEvaSprite || "idle";
    return state.evaSprites?.[spriteId] && isEvaSpriteUnlocked(spriteId) ? spriteId : "idle";
  }

  function isBaseEvaEmotionSprite(id) {
    const value = String(id || "");
    return new Set(["normal", "neutral", "idle", "default", "welcome", "happy", "soft_smile", "gentle_smile", "sad", "angry", "shy", "think", "thinking", "focus", "observe", "observation", "explain", "teach", "ready", "reading", "serious", "strict", "determined", "tired", "surprised", "cold", "proud", "approve", "confirm", "achievement", "reward", "review", "correct", "levelup", "writing", "calm", "tea", "speaking"]).has(value);
  }

  function resolveEvaSprite(skinId, emotion = null) {
    const requestedSkin = skinId && skinId !== "relationship" ? String(skinId) : null;
    const selectedSkin = selectedEvaSkinId();
    const requestedIsBaseEmotion = isBaseEvaEmotionSprite(requestedSkin);
    const normalizedSkin = requestedSkin && !requestedIsBaseEmotion ? requestedSkin : selectedSkin;
    const mood = state.evaRuntime?.mood || evaRelationship().mood;
    const desiredEmotion = emotion || (requestedIsBaseEmotion ? requestedSkin : null) || state.evaRuntime?.emotion || {
      close: "shy",
      proud: "approve",
      curious: "thinking",
      worried: "sad",
      reserved: "idle",
      neutral: "idle"
    }[mood] || "idle";
    const emotionSprites = evaEmotionSpriteCandidates(desiredEmotion);
    const skinCandidates = [...new Set([normalizedSkin, selectedSkin].filter(Boolean))];
    const candidates = [
      ...skinCandidates.flatMap((skin) => evaSkinnedSpriteCandidates(skin, emotionSprites)),
      ...skinCandidates,
      ...emotionSprites,
      "idle",
      "default"
    ].filter(Boolean);
    const picked = candidates.find((candidate) => state.evaSprites?.[candidate] && (isEvaSpriteUnlocked(candidate) || !normalizedSkin || isEvaSpriteUnlocked(normalizedSkin)));
    return picked || "idle";
  }

  function evaSkinnedSpriteCandidates(skin, emotionSprites = []) {
    const skinId = String(skin || "");
    if (!skinId) return [];
    const direct = emotionSprites
      .map((sprite) => `${skinId}_${sprite}`)
      .filter((candidate) => state.evaSprites?.[candidate]);
    const outfit = outfitItemBySprite(skinId);
    if (!outfit || outfit.defaultOwned || direct.length <= 1) return direct;
    return rotateEvaSpriteCandidates(direct);
  }

  function rotateEvaSpriteCandidates(candidates = []) {
    const unique = [...new Set(candidates.filter(Boolean))];
    if (unique.length <= 1) return unique;
    const offset = evaSpriteRotationTick % unique.length;
    return [...unique.slice(offset), ...unique.slice(0, offset)];
  }

  function selectedEvaOutfitCanRotate() {
    const skin = selectedEvaSkinId();
    const outfit = outfitItemBySprite(skin);
    if (!outfit || outfit.defaultOwned) return false;
    return Object.keys(state.evaSprites || {}).some((key) => key.startsWith(`${skin}_`));
  }

  function startEvaSpriteRotationLoop() {
    if (evaSpriteRotationTimer) window.clearInterval(evaSpriteRotationTimer);
    evaSpriteRotationTimer = window.setInterval(() => {
      const nextTick = Math.floor(Date.now() / 60000);
      if (nextTick === evaSpriteRotationTick) return;
      evaSpriteRotationTick = nextTick;
      if (document.hidden || !selectedEvaOutfitCanRotate()) return;
      if (state.route === "home" || state.route === "eva-room") render();
    }, 30000);
  }

  function evaEmotionSpriteCandidates(emotion) {
    const normalized = String(emotion || "neutral").toLowerCase();
    const groups = {
      normal: ["soft_smile", "neutral", "observe", "idle"],
      neutral: ["neutral", "idle", "soft_smile"],
      idle: ["neutral", "idle"],
      welcome: ["soft_smile", "observe", "neutral", "idle"],
      happy: ["happy", "soft_smile", "gentle_smile", "encourage", "approve", "proud"],
      soft_smile: ["soft_smile", "gentle_smile", "happy", "shy", "approve", "neutral"],
      approve: ["approve", "confirm", "correct", "confident", "ready", "soft_smile"],
      correct: ["correct", "confirm", "approve", "confident", "ready", "soft_smile"],
      proud: ["proud", "confident", "approve", "determined", "soft_smile"],
      achievement: ["achievement", "legendary", "mythic", "reward", "proud", "approve", "ready"],
      levelup: ["levelup", "legendary", "mythic", "determined", "proud", "ready"],
      reward: ["reward", "blessing", "soft_smile", "happy", "approve"],
      review: ["review", "reading", "ready", "explain", "think", "neutral"],
      explain: ["explain", "teach", "review", "think", "reading"],
      think: ["think", "thinking", "analyze", "observe", "reading", "explain", "serious"],
      thinking: ["think", "thinking", "analyze", "observe", "reading", "explain", "serious"],
      observe: ["observe", "serious", "think", "neutral"],
      ready: ["ready", "determined", "walk", "neutral"],
      serious: ["serious", "strict", "determined", "neutral"],
      strict: ["strict", "command", "angry", "serious"],
      angry: ["angry", "strict", "command", "serious"],
      sad: ["sad", "tired", "cold", "serious", "neutral"],
      tired: ["tired", "cold", "neutral"],
      shy: ["shy", "soft_smile", "gentle_smile", "happy"],
      surprised: ["surprised", "think", "observe"],
      writing: ["writing", "teach", "explain", "ready", "think"],
      focus: ["think", "observe", "ready", "serious"],
      calm: ["neutral", "idle", "soft_smile"]
    };
    const base = evaEmotionSpriteId(normalized);
    return [...new Set([...(groups[normalized] || []), normalized, base, "neutral", "idle"].filter(Boolean))];
  }

  function evaEmotionSpriteId(emotion) {
    return {
      neutral: "idle",
      idle: "idle",
      normal: "idle",
      welcome: "happy",
      happy: "happy",
      soft_smile: "shy",
      thinking: "think",
      serious: "think",
      strict: "angry",
      sad: "sad",
      shy: "shy",
      surprised: "think",
      approve: "approve",
      explain: "review",
      ready: "review",
      tired: "idle",
      observe: "think",
      special: "levelup",
      proud: "proud",
      calm: "idle"
    }[emotion] || "idle";
  }

  function evaAutonomy() {
    ensureEvaRoomProgress();
    return state.progress.evaAutonomy;
  }

  function isEvaAutonomyEnabled() {
    const autonomy = evaAutonomy();
    autonomy.enabled = true;
    autonomy.frequency = "normal";
    autonomy.roomMode = "auto";
    autonomy.outfitMode = "auto";
    return true;
  }

  function evaRoomBackgrounds() {
    const base = state.evaBackgrounds?.length ? state.evaBackgrounds : [{
      id: "bg_study_hub",
      title: { ru: "Учебная комната", en: "Study Hub" },
      file: "assets/bg/bg_study_hub.png",
      price: 0,
      defaultUnlocked: true
    }];
    const existing = new Set(base.map((item) => item.id));
    const shopBackgrounds = customizationShopItems()
      .filter((item) => item.type === "background" && !existing.has(item.id))
      .map((item) => ({
        id: item.id,
        title: { ru: item.title_ru, en: item.title_en },
        file: item.asset || item.preview,
        price: item.price,
        defaultUnlocked: item.defaultOwned
      }));
    return [...base, ...shopBackgrounds];
  }

  function getEvaRoomBackground(id) {
    return evaRoomBackgrounds().find((item) => item.id === id) || evaRoomBackgrounds()[0];
  }

  function currentEvaRoomBackground() {
    ensureEvaRoomProgress();
    const selected = state.progress.selectedEvaRoomBackground || state.customization?.selected?.background;
    return getEvaRoomBackground(selected) || getEvaRoomBackground("bg_study_hub");
  }

  function isEvaRoomBackgroundUnlocked(id) {
    const bg = getEvaRoomBackground(id);
    if (!bg) return false;
    return bg.defaultUnlocked || bg.price === 0 || state.progress.unlockedBackgrounds.includes(bg.id);
  }

  function evaSpriteShopItems() {
    const catalogOutfits = customizationShopItems()
      .filter((item) => item.type === "outfit")
      .map((item) => ({
        id: item.spriteId || item.id,
        shopId: item.id,
        title: { ru: item.title_ru, en: item.title_en },
        price: item.price,
        defaultUnlocked: item.defaultOwned
      }));
    const legacy = [
      { id: "idle", title: { ru: "Ева: спокойная", en: "Eva: Calm" }, price: 0, defaultUnlocked: true },
      { id: "default", title: { ru: "Ева: классика", en: "Eva: Classic" }, price: 0, defaultUnlocked: true },
      { id: "think", title: { ru: "Ева: размышление", en: "Eva: Thinking" }, price: 25 },
      { id: "happy", title: { ru: "Ева: тепло", en: "Eva: Warm" }, price: 35 },
      { id: "approve", title: { ru: "Ева: наставник", en: "Eva: Mentor" }, price: 35 },
      { id: "review", title: { ru: "Ева: повторение", en: "Eva: Review" }, price: 40 },
      { id: "proud", title: { ru: "Ева: гордость", en: "Eva: Proud" }, price: 45 },
      { id: "shy", title: { ru: "Ева: ближе", en: "Eva: Closer" }, price: 55 },
      { id: "sad", title: { ru: "Ева: тревога", en: "Eva: Concerned" }, price: 30 },
      { id: "reward", title: { ru: "Ева: награда", en: "Eva: Reward" }, price: 50 },
      { id: "achievement", title: { ru: "Ева: достижение", en: "Eva: Achievement" }, price: 60 },
      { id: "levelup", title: { ru: "Ева: уровень", en: "Eva: Level Up" }, price: 65 }
    ].filter((item) => state.evaSprites?.[item.id] && !catalogOutfits.some((outfit) => outfit.id === item.id));
    return [...catalogOutfits, ...legacy];
  }

  function getEvaSpriteShopItem(id) {
    return evaSpriteShopItems().find((item) => item.id === id);
  }

  function isEvaSpriteUnlocked(id) {
    if (!id) return false;
    const item = getEvaSpriteShopItem(id);
    return Boolean(item?.defaultUnlocked || item?.price === 0 || state.progress.unlockedEvaSprites?.includes(id) || state.progress.shop?.owned?.includes(`eva_sprite:${id}`));
  }

  function chooseEvaAutonomyBackground(line) {
    ensureEvaRoomProgress();
    const mood = state.evaRuntime?.mood || calculateEvaMood(getEvaContext());
    const moodPrefs = {
      close: ["bg_cafe", "bg_park", "bg_eva_room", "bg_study_hub"],
      proud: ["bg_practice_room", "bg_classroom", "bg_moon_room", "bg_study_hub"],
      curious: ["bg_library", "bg_cyber_room", "bg_shrine", "bg_study_hub"],
      worried: ["bg_study_hub", "bg_evening_street", "bg_winter_city"],
      reserved: ["bg_library", "bg_silent_road", "bg_study_hub"],
      focused: ["bg_classroom", "bg_practice_room", "bg_study_hub"],
      soft: ["bg_cafe", "bg_park", "bg_study_hub"],
      strict: ["bg_classroom", "bg_silent_road", "bg_study_hub"],
      tired: ["bg_cafe", "bg_library", "bg_study_hub"],
      happy: ["bg_park", "bg_cafe", "bg_moon_room", "bg_study_hub"],
      serious: ["bg_silent_road", "bg_library", "bg_study_hub"],
      mystic: ["bg_moon_room", "bg_shrine", "bg_study_hub"],
      cyber: ["bg_cyber_room", "bg_library", "bg_study_hub"],
      travel: ["bg_silent_road", "bg_evening_street", "bg_school_street", "bg_study_hub"],
      quiet: ["bg_library", "bg_study_hub"],
      neutral: ["bg_study_hub", "bg_classroom", "bg_library", "bg_silent_road"]
    };
    const preferred = [...(line?.preferredBackgrounds || []), ...(moodPrefs[mood] || moodPrefs.neutral)];
    const unlocked = evaRoomBackgrounds().filter((bg) => isEvaRoomBackgroundUnlocked(bg.id));
    const picked = preferred.map((id) => unlocked.find((bg) => bg.id === id)).find(Boolean) || sample(unlocked);
    return picked || currentEvaRoomBackground();
  }

  function chooseEvaAutonomySprite(line) {
    ensureEvaRoomProgress();
    const mood = state.evaRuntime?.mood || calculateEvaMood(getEvaContext());
    const moodPrefs = {
      close: ["casual_fox", "librarian_eva", "shy", "idle", "approve"],
      proud: ["academy_instructor", "moon_priestess", "study_session", "approve", "proud", "review"],
      curious: ["librarian_eva", "cyber_eva", "think", "review", "idle"],
      worried: ["winter_traveler", "fis_mentor", "sad", "idle", "think"],
      reserved: ["silent_road", "fis_mentor", "idle", "default"],
      focused: ["study_session", "academy_instructor", "review", "approve", "idle"],
      soft: ["librarian_eva", "casual_fox", "shy", "approve", "idle"],
      strict: ["academy_instructor", "fis_mentor", "angry", "think", "idle"],
      tired: ["winter_traveler", "idle", "default"],
      happy: ["happy", "proud", "approve", "casual_fox"],
      serious: ["fis_mentor", "silent_road", "think", "idle"],
      mystic: ["moon_priestess", "shrine_maiden", "achievement", "reward"],
      cyber: ["cyber_eva", "think", "review"],
      travel: ["silent_road", "winter_traveler", "fis_mentor"],
      quiet: ["fis_mentor", "idle", "default"],
      neutral: ["fis_mentor", "study_session", "librarian_eva", "idle", "think", "review", "default"]
    };
    const preferred = [line?.sprite, ...(moodPrefs[mood] || moodPrefs.neutral)].filter(Boolean);
    return preferred.find((sprite) => isEvaSpriteUnlocked(sprite) && state.evaSprites?.[sprite]) || state.progress.selectedEvaSprite || "idle";
  }

  function evaRoomNodeById(id) {
    if (id === "generated_line") return generatedEvaRoomNode();
    return state.evaRoomDialogues.find((item) => item.id === id) || state.evaRoomDialogues[0] || {
      id: "intro",
      background: "bg_study_hub",
      sprite: "relationship",
      speaker: { ru: "Ева", en: "Eva" },
      text: { ru: "С возвращением.", en: "Welcome back." },
      choices: []
    };
  }

  function generatedEvaRoomNode() {
    ensureEvaRoomProgress();
    const labels = evaRoomLabels();
    const generated = state.progress.evaRoomDialogueProgress.generatedLine || pickEvaRoomLine("adaptive");
    state.progress.evaRoomDialogueProgress.generatedLine = generated;
    return {
      id: "generated_line",
      background: generated.background || currentEvaRoomBackground().id || "bg_study_hub",
      sprite: generated.sprite || "relationship",
      speaker: { ru: "Ева", en: "Eva" },
      text: generated.text,
      choices: [
        { text: { ru: labels.moreTalk, en: labels.moreTalk }, randomLine: generated.category || "adaptive", relationshipDelta: { warmth: 0.6, curiosity: 0.4 } },
        { text: { ru: labels.anotherTalk, en: labels.anotherTalk }, next: "intro", relationshipDelta: { warmth: 0.2 } },
        { text: { ru: labels.study, en: labels.study }, next: "intro", route: "learn", relationshipDelta: { discipline: 1.2, trust: 0.5 } }
      ]
    };
  }

  function evaRoomLines() {
    return Array.isArray(state.evaRoomLines) ? state.evaRoomLines : [];
  }

  function evaPresenceCategoriesForReason(reason = "auto") {
    const mapped = state.evaPresence?.categoryMap?.[reason];
    return Array.isArray(mapped) ? mapped : [];
  }

  function evaConditionList(value) {
    if (typeof value === "undefined" || value === null) return [];
    return Array.isArray(value) ? value.map(String) : [String(value)];
  }

  function evaLineMeetsContext(line, context = getEvaContext()) {
    const conditions = line?.conditions || {};
    const matchesList = (actual, expected) => {
      const list = evaConditionList(expected);
      return !list.length || list.includes(String(actual));
    };
    const matchesAny = (actual, expected) => {
      const list = evaConditionList(expected);
      return !list.length || list.some((item) => String(actual || "").includes(item) || item === String(actual));
    };
    if (!matchesList(context.route, conditions.route)) return false;
    if (!matchesList(context.timeOfDay, conditions.timeOfDay)) return false;
    if (!matchesAny(context.activeSkin, conditions.activeSkin)) return false;
    if (!matchesAny(context.activeBackground, conditions.activeBackground)) return false;
    if (typeof conditions.minGapDays !== "undefined" && Number(context.daysSinceReturn || 0) < Number(conditions.minGapDays)) return false;
    if (typeof conditions.maxGapDays !== "undefined" && Number(context.daysSinceReturn || 0) > Number(conditions.maxGapDays)) return false;
    if (typeof conditions.minDueReviews !== "undefined" && Number(context.dueReviews || 0) < Number(conditions.minDueReviews)) return false;
    if (typeof conditions.maxDueReviews !== "undefined" && Number(context.dueReviews || 0) > Number(conditions.maxDueReviews)) return false;
    if (typeof conditions.minStreak !== "undefined" && Number(context.streak || 0) < Number(conditions.minStreak)) return false;
    if (typeof conditions.maxStreak !== "undefined" && Number(context.streak || 0) > Number(conditions.maxStreak)) return false;
    if (typeof conditions.minTalkOverStudy !== "undefined" && Number(context.timesUserChoseTalkOverStudy || 0) < Number(conditions.minTalkOverStudy)) return false;
    return true;
  }

  function pickFreshEvaLine(pool = [], reason = "auto", context = getEvaContext()) {
    const rel = evaRelationship();
    const memory = state.evaRuntime?.memory || defaultEvaMemory();
    const recent = new Set([
      ...(evaAutonomy().recentLineIds || []),
      ...(memory.recentLineIds || []),
      evaAutonomy().currentLine?.id
    ].filter(Boolean));
    const eligible = pool.filter((line) => {
      if (!line || !localized(line.text)) return false;
      if (recent.has(line.id)) return false;
      if (!evaLineMeetsRelationship(line, rel)) return false;
      if (!evaLineMeetsContext(line, context)) return false;
      const moods = Array.isArray(line.moods) ? line.moods : [];
      return !moods.length || moods.includes(rel.mood) || moods.includes(context.mood);
    });
    if (eligible.length) {
      const scored = eligible.map((line) => ({
        line,
        score: Object.keys(line.conditions || {}).length + (line.state === "return_after_gap" ? 2 : 0)
      }));
      const maxScore = Math.max(...scored.map((item) => item.score));
      return sample(scored.filter((item) => item.score === maxScore).map((item) => item.line));
    }
    const relaxed = pool.filter((line) => {
      if (!line || !localized(line.text)) return false;
      if (!evaLineMeetsRelationship(line, rel)) return false;
      return evaLineMeetsContext(line, context);
    });
    return sample(relaxed.length ? relaxed : pool);
  }

  function evaPresenceEventLine(reason = "auto", context = getEvaContext()) {
    const presence = state.evaPresence;
    if (!presence) return null;
    const pool = [];
    if (["room_opened", "return", "render", "render_fallback"].includes(reason)) {
      pool.push(...(presence.entryStates || []));
    }
    pool.push(...(presence.eventLines?.[reason] || []));
    const picked = pickFreshEvaLine(pool, reason, context);
    if (!picked) return null;
    return {
      ...picked,
      category: picked.category || reason,
      text: picked.text,
      relationshipDelta: picked.relationshipDelta || {}
    };
  }

  function rememberEvaPresenceLine(line, reason = "auto", context = getEvaContext()) {
    if (!state.evaRuntime || !line?.id) return;
    state.evaRuntime.memory = mergeEvaMemory(defaultEvaMemory(), state.evaRuntime.memory || {});
    const memory = state.evaRuntime.memory;
    memory.recentLineIds = [line.id, ...(memory.recentLineIds || []).filter((id) => id !== line.id)].slice(0, 30);
    const topic = line.category || reason;
    memory.recentTopics = [topic, ...(memory.recentTopics || []).filter((item) => item !== topic)].slice(0, 20);
    memory.lastRoute = context.route || state.route;
    memory.lastInteractionDate = todayKey();
    memory.lastKnownMood = state.evaRuntime.mood || evaRelationship().mood;
    if (["warning", "answer_wrong", "idle_timeout"].includes(reason) || String(line.category || "").includes("warning")) {
      memory.lastWarningAt = new Date().toISOString();
    }
    if (["answer_correct", "lesson_complete", "level_up", "streak_up"].includes(reason) || String(line.category || "").includes("reward")) {
      memory.lastPraiseAt = new Date().toISOString();
    }
  }

  function recordEvaPresenceEvent(eventRecord) {
    if (!state.evaRuntime) return;
    state.evaRuntime.memory = mergeEvaMemory(defaultEvaMemory(), state.evaRuntime.memory || {});
    const memory = state.evaRuntime.memory;
    memory.lastRoute = state.route;
    if (!["timer", "idle_timeout"].includes(eventRecord.type)) {
      memory.lastInteractionDate = todayKey();
    }
    if (eventRecord.type === "answer_wrong") memory.recentProblemCluster = eventRecord.payload?.cardId || "reading";
    if (eventRecord.type === "room_opened") memory.preferredEvaRoomBackground = state.progress?.selectedEvaRoomBackground || memory.preferredEvaRoomBackground;
  }

  function evaAutonomyIntervals() {
    return { quiet: 120000, normal: randomBetween(45000, 120000), active: 45000 };
  }

  function startEvaAutonomyLoop() {
    if (evaAutonomyTimer) window.clearInterval(evaAutonomyTimer);
    evaAutonomyTimer = window.setInterval(tickEvaAutonomy, 5000);
  }

  function scheduleNextEvaAutonomyLine() {
    const autonomy = evaAutonomy();
    const interval = evaAutonomyIntervals()[autonomy.frequency] || randomBetween(45000, 120000);
    autonomy.nextSpeakAt = Date.now() + interval;
  }

  function tickEvaAutonomy() {
    if (document.hidden || !state.progress || !state.evaRuntime) return false;
    const context = getEvaContext();
    const runtime = state.evaRuntime;
    const autonomy = evaAutonomy();
    const now = Date.now();
    let changed = false;

    if (context.idleMs > 90000 && (!runtime.lastEvent || runtime.lastEvent.type !== "idle_timeout") && now - Number(runtime.lastPhraseAt || 0) > 60000) {
      dispatchEvaEvent("idle_timeout", { idleMs: context.idleMs });
      return true;
    }

    if (now - Number(runtime.lastEmotionChangeAt || 0) >= Number(runtime.cooldowns?.emotion || 18000)) {
      const mood = calculateEvaMood(context);
      const emotion = chooseEvaEmotion(context, mood);
      if (mood !== runtime.mood || emotion !== runtime.emotion) {
        runtime.mood = mood;
        runtime.emotion = emotion;
        autonomy.mood = mood;
        autonomy.emotion = emotion;
        runtime.lastEmotionChangeAt = now;
        runtime.cooldowns.emotion = randomBetween(15000, 30000);
        changed = true;
      }
    }

    if (state.route === "eva-room" && now >= Number(autonomy.nextSpeakAt || 0)) {
      const shouldStayQuiet = Math.random() < 0.14;
      if (shouldStayQuiet) {
        runtime.mood = "quiet";
        runtime.emotion = "observe";
        runtime.presenceState = "quiet";
        autonomy.mood = "quiet";
        autonomy.emotion = "observe";
        scheduleNextEvaAutonomyLine();
        changed = true;
      } else if (maybeRunEvaAutonomy("timer", { context })) {
        changed = true;
      }
    }

    if (changed) {
      saveEvaState();
      saveProgress();
      if (state.route === "eva-room") render();
    }
    return changed;
  }

  function getEvaContext(extra = {}) {
    const today = state.progress ? todayStats() : {};
    const runtime = state.evaRuntime || defaultEvaStateV2();
    const memory = mergeEvaMemory(defaultEvaMemory(), runtime.memory || {});
    const hour = new Date().getHours();
    syncEvaRuntimeInventory();
    return {
      route: state.route,
      hour,
      timeOfDay: hour < 5 ? "late_night" : hour < 11 ? "morning" : hour < 18 ? "day" : hour < 23 ? "evening" : "night",
      correctToday: Number(today.reviews || 0) - Number(today.mistakes || 0),
      mistakesToday: Number(today.mistakes || 0),
      reviewsToday: Number(today.reviews || 0),
      learnedToday: Number(today.learned || 0),
      streak: Number(state.progress?.streak?.current || 0),
      level: Number(state.progress?.level || 1),
      moonFragments: Number(state.progress?.moonFragments || 0),
      ownedSkins: runtime.ownedSkins || [],
      ownedBackgrounds: runtime.ownedBackgrounds || [],
      ownedEffects: runtime.ownedEffects || [],
      ownedDecorations: runtime.ownedDecorations || [],
      activeSkin: runtime.activeSkin || state.progress?.selectedEvaSprite || "idle",
      activeBackground: runtime.activeBackground || state.progress?.selectedEvaRoomBackground || "bg_study_hub",
      memory,
      daysSinceReturn: Number(memory.daysSinceReturn || 0),
      recentTopics: memory.recentTopics || [],
      recentLineIds: memory.recentLineIds || [],
      timesUserChoseTalkOverStudy: Number(memory.timesUserChoseTalkOverStudy || 0),
      timesUserReturnedAfterGap: Number(memory.timesUserReturnedAfterGap || 0),
      idleMs: Date.now() - Number(runtime.lastPlayerActionAt || Date.now()),
      sessionMs: Date.now() - notificationUsageStartedAt,
      lastEvent: runtime.lastEvent,
      dueReviews: state.progress ? getDueNowCards().length : 0,
      shopOpen: Boolean(state.evaRoomShopOpen),
      ...extra
    };
  }

  function calculateEvaMood(context = getEvaContext()) {
    const eventType = context.lastEvent?.type;
    if (eventType === "level_up" || eventType === "lesson_complete" || eventType === "streak_up") return "happy";
    if (eventType === "item_bought" && String(context.lastEvent?.payload?.itemId || "").includes("moon")) return "mystic";
    if (context.shopOpen || eventType === "shop_opened" || eventType === "item_bought") return "curious";
    if (context.route === "learn" || context.route === "review" || context.dueReviews > 0) return "focused";
    if (context.mistakesToday >= 4) return context.correctToday > context.mistakesToday ? "soft" : "strict";
    if (context.hour >= 23 || context.hour < 5) return context.ownedEffects?.includes("effect_moon_particles") ? "mystic" : "quiet";
    if (context.sessionMs > 35 * 60 * 1000) return "tired";
    if (context.activeSkin === "cyber_eva" || context.ownedSkins?.includes("cyber_eva")) return "cyber";
    if (context.activeSkin === "silent_road" || context.ownedSkins?.includes("silent_road")) return "travel";
    if (context.route === "eva-room") return context.streak >= 7 ? "soft" : "neutral";
    return "neutral";
  }

  function chooseEvaEmotion(context = getEvaContext(), mood = calculateEvaMood(context), reason = context.lastEvent?.type || "auto") {
    if (reason === "answer_correct") return sample(["approve", "happy", "soft_smile"]);
    if (reason === "answer_wrong") return sample(["thinking", "strict", "serious"]);
    if (reason === "lesson_complete") return "approve";
    if (reason === "level_up") return "special";
    if (reason === "item_bought" || reason === "shop_opened") return "observe";
    if (reason === "user_clicked_eva") return sample(["curious", "shy", "observe"]);
    if (reason === "idle_timeout") return "observe";
    const byMood = {
      neutral: ["idle", "observe"],
      focused: ["ready", "explain", "thinking"],
      soft: ["soft_smile", "approve"],
      strict: ["strict", "serious"],
      tired: ["tired", "idle"],
      happy: ["happy", "approve"],
      serious: ["serious", "thinking"],
      mystic: ["special", "observe"],
      cyber: ["observe", "thinking"],
      travel: ["ready", "observe"],
      quiet: ["observe", "idle"],
      curious: ["thinking", "surprised", "observe"]
    };
    return sample(byMood[mood] || byMood.neutral);
  }

  function maybeRunEvaAutonomy(reason = "auto", options = {}) {
    if (!state.progress || !isEvaAutonomyEnabled()) return false;
    if (!options.force && state.route !== "eva-room") return false;
    const autonomy = evaAutonomy();
    const now = Date.now();
    if (!options.force && autonomy.currentLine?.text && autonomy.nextSpeakAt && now < Number(autonomy.nextSpeakAt)) return false;
    const context = options.context || getEvaContext({ lastEvent: { type: reason, payload: options.eventPayload || {} } });
    const mood = calculateEvaMood(context);
    const line = evaEventLine(reason) || pickEvaAutonomyLine(reason);
    if (!line) return false;
    state.evaRuntime ||= defaultEvaStateV2();
    state.evaRuntime.mood = mood;
    const emotion = line.emotion || chooseEvaEmotion(context, mood, reason);
    const bg = chooseEvaAutonomyBackground(line);
    const sprite = resolveEvaSprite(chooseEvaAutonomySprite(line), emotion);
    const decoration = chooseEvaAutonomyDecoration(line);
    const effect = chooseEvaAutonomyEffect(line);
    const question = maybeAskEvaQuestion(context, line);
    autonomy.currentLine = {
      id: line.id,
      category: line.category || "mood",
      text: line.text,
      sprite,
      background: bg.id,
      decoration,
      effect,
      emotion,
      state: line.state || "speak",
      at: new Date().toISOString(),
      reason
    };
    autonomy.currentQuestion = question;
    autonomy.currentDecoration = decoration;
    autonomy.currentEffect = effect;
    autonomy.mood = mood;
    autonomy.emotion = emotion;
    autonomy.lastSpokeAt = autonomy.currentLine.at;
    autonomy.lastRoomId = bg.id;
    autonomy.lastSprite = sprite;
    autonomy.recentLineIds = [line.id, ...(autonomy.recentLineIds || []).filter((id) => id !== line.id)].slice(0, 32);
    state.evaRuntime ||= defaultEvaStateV2();
    Object.assign(state.evaRuntime, {
      mood,
      emotion,
      presenceState: line.state || "speak",
      currentPhrase: autonomy.currentLine,
      pendingQuestion: question,
      currentSkin: sprite,
      currentBackground: bg.id,
      currentDecoration: decoration,
      currentEffect: effect,
      activeSkin: sprite,
      activeBackground: bg.id,
      lastPhraseAt: now,
      lastEmotionChangeAt: now,
      lastQuestionAt: question ? now : Number(state.evaRuntime.lastQuestionAt || 0),
      lastVisualChangeAt: now,
      textRevealSkippedLineId: null,
      cooldowns: {
        ...state.evaRuntime.cooldowns,
        emotion: randomBetween(15000, 30000),
        phrase: randomBetween(45000, 120000),
        question: randomBetween(3 * 60000, 7 * 60000),
        visual: randomBetween(10 * 60000, 15 * 60000)
      }
    });
    rememberEvaPresenceLine(line, reason, context);
    preloadEvaVisuals(sprite, bg.file);
    scheduleNextEvaAutonomyLine();
    adjustEvaRelationship(line.relationshipDelta || { warmth: 0.1 }, `eva_autonomy:${line.id}`, { silent: true });
    saveEvaState();
    applyTheme();
    return true;
  }

  function evaEventLine(reason) {
    const presenceLine = evaPresenceEventLine(reason, getEvaContext({ lastEvent: { type: reason } }));
    if (presenceLine) return presenceLine;
    const pools = {
      answer_correct: [
        { ru: "Верно.", en: "Correct." },
        { ru: "Хорошо.", en: "Good." },
        { ru: "Да. Именно так.", en: "Yes. Exactly." },
        { ru: "Ты начинаешь видеть структуру.", en: "You are starting to see the structure." },
        { ru: "Неплохо. Продолжай.", en: "Not bad. Continue." }
      ],
      answer_wrong: [
        { ru: "Не совсем.", en: "Not quite." },
        { ru: "Посмотри ещё раз.", en: "Look again." },
        { ru: "Не угадывай. Разбери.", en: "Do not guess. Break it down." },
        { ru: "Запомни не ответ, а причину.", en: "Remember the reason, not just the answer." },
        { ru: "Это место стоит повторить.", en: "This part is worth repeating." }
      ],
      user_clicked_eva: [
        { ru: "Да?", en: "Yes?" },
        { ru: "Что-то нужно?", en: "Need something?" },
        { ru: "Я слушаю.", en: "I'm listening." },
        { ru: "Не отвлекайся слишком часто.", en: "Don't distract yourself too often." },
        { ru: "Если нужен совет — спроси.", en: "If you need advice, ask." }
      ],
      idle_timeout: [
        { ru: "Ты всё ещё здесь?", en: "Still here?" },
        { ru: "Сделаем короткий шаг?", en: "One short step?" },
        { ru: "Я подожду.", en: "I'll wait." },
        { ru: "Не исчезай надолго.", en: "Don't vanish for too long." }
      ],
      manual: [
        { ru: "Один шаг всё ещё шаг.", en: "One step is still a step." },
        { ru: "Я рядом. Продолжай.", en: "I'm nearby. Continue." },
        { ru: "Кандзи не убегут. Но лучше не заставлять их ждать.", en: "The kanji won't run. Better not keep them waiting." },
        { ru: "Сначала форма. Потом смысл.", en: "Shape first. Meaning after." }
      ],
      lesson_complete: [
        { ru: "Урок закрыт. След оставлен.", en: "Lesson complete. A mark is left." },
        { ru: "Хорошая работа. Теперь закрепи.", en: "Good work. Now reinforce it." }
      ],
      level_up: [
        { ru: "Уровень выше. Дорога стала длиннее, не легче.", en: "Level up. The road is longer, not easier." },
        { ru: "Ты стал крепче. Это заметно.", en: "You got steadier. It shows." }
      ],
      item_bought: [
        { ru: "Новая вещь. Посмотрим, приживётся ли.", en: "A new item. We'll see if it settles in." },
        { ru: "Комната меняется. Ты тоже.", en: "The room changes. So do you." }
      ],
      room_opened: [
        { ru: "Я здесь.", en: "I'm here." },
        { ru: "Ты снова здесь. Это говорит больше, чем обещание.", en: "You're here again. That says more than a promise." },
        { ru: "Продолжай. Я посмотрю.", en: "Continue. I'll watch." }
      ]
    };
    const pool = pools[reason] || [];
    const recent = new Set(evaAutonomy().recentLineIds || []);
    const fresh = pool.filter((item) => !recent.has(`${reason}_${stableHash(`${item.ru || item.en}`)}`));
    const text = sample(fresh.length ? fresh : pool);
    if (!text) return null;
    return {
      id: `${reason}_${stableHash(`${text.ru || text.en}`)}`,
      category: reason,
      text,
      relationshipDelta: {}
    };
  }

  function rememberCurrentEvaLine() {
    const autonomy = evaAutonomy();
    const currentId = autonomy.currentLine?.id;
    if (!currentId) return;
    autonomy.recentLineIds = [currentId, ...(autonomy.recentLineIds || []).filter((id) => id !== currentId)].slice(0, 32);
  }

  function evaAutonomyCategories(reason = "auto") {
    const rel = evaRelationship();
    const hour = new Date().getHours();
    const due = getDueNowCards().length;
    const today = todayStats();
    const categories = [];
    categories.push(...evaPresenceCategoriesForReason(reason));
    if (reason === "return" || (!rel.lastInteractionDate && state.progress.appOpens > 1)) categories.push("fis_return", "return");
    if (reason === "room_opened") categories.push("fis_room", "fis_observation", "room");
    if (reason === "shop_opened" || reason === "item_bought" || reason === "item_equipped") categories.push("fis_room", "fis_reward", "reward");
    if (reason === "answer_correct") categories.push("fis_focus", "fis_short", "study");
    if (reason === "answer_wrong") categories.push("fis_guard", "fis_focus", "mood");
    if (reason === "user_clicked_eva" || reason === "eva_click") categories.push("fis_observation", "fis_short", "mood");
    if (reason === "idle_timeout") categories.push("fis_return", "fis_short", "return");
    if (reason === "user_answered_eva_question") categories.push("fis_focus", "fis_observation");
    if (reason === "lesson_start") categories.push("fis_study", "study", "fis_focus");
    if (reason === "lesson_complete" || reason === "level_up" || reason === "streak_up") categories.push("fis_reward", "reward", "fis_streak");
    if (reason === "writing_complete" || reason === "sentence_complete" || reason === "advanced_mode") categories.push("fis_observation", "fis_focus");
    if (hour >= 23 || hour < 5) categories.push("fis_night", "night");
    if (due >= 8) categories.push("fis_review", "review");
    if ((today.reviews || 0) === 0) categories.push("fis_study", "study");
    if ((state.progress.streak?.current || 0) >= 3) categories.push("fis_streak", "streak");
    if (state.progress.rewardHistory?.length || state.rewardModal) categories.push("fis_reward", "reward");
    if (rel.mood === "curious") categories.push("fis_observation", "fis_focus", "fis_room", "hint", "room");
    if (rel.mood === "worried" || rel.mood === "reserved") categories.push("fis_guard", "fis_return", "mood", "return");
    categories.push("fis_observation", "fis_road", "fis_guard", "fis_focus", "fis_short", "mood", "study", "short");
    return [...new Set(categories)];
  }

  function pickEvaAutonomyLine(reason = "auto") {
    ensureEvaRoomProgress();
    syncEvaRelationshipFromProgress();
    const rel = evaRelationship();
    const context = getEvaContext({ lastEvent: { type: reason } });
    const currentLineId = evaAutonomy().currentLine?.id;
    const recent = new Set([currentLineId, ...(evaAutonomy().recentLineIds || []), ...(state.evaRuntime?.memory?.recentLineIds || [])].filter(Boolean));
    const lines = Array.isArray(state.evaAutonomyLines) ? state.evaAutonomyLines : [];
    const categories = evaAutonomyCategories(reason);
    const eligibleFor = (category, allowRecent = false) => lines.filter((line) => {
      const categoryMatch = line.category === category || (line.tags || []).includes(category);
      if (!categoryMatch) return false;
      if (!allowRecent && recent.has(line.id)) return false;
      if (!evaLineMeetsRelationship(line, rel)) return false;
      if (!evaLineMeetsContext(line, context)) return false;
      const moods = Array.isArray(line.moods) ? line.moods : [];
      return !moods.length || moods.includes(rel.mood);
    });
    for (const category of categories) {
      const pool = eligibleFor(category);
      if (pool.length) return sample(pool);
    }
    for (const category of categories) {
      const pool = eligibleFor(category, true);
      if (pool.length) return sample(pool);
    }
    const fallback = lines.filter((line) => !recent.has(line.id));
    return sample(fallback.length ? fallback : lines);
  }

  function dispatchEvaEvent(type, payload = {}) {
    if (!type) return;
    const detail = { type: normalizeEvaEventType(type), payload: payload || {}, at: Date.now() };
    handleEvaEvent(detail);
    window.dispatchEvent(new CustomEvent("eva:event", {
      detail: { ...detail, handledByFlashKanji: true }
    }));
  }

  Object.assign(window, { dispatchEvaEvent });

  function handleEvaEvent(detail = {}) {
    if (!detail.type || !state.progress) return;
    ensureEvaRoomProgress();
    state.evaRuntime ||= defaultEvaStateV2();
      const eventRecord = {
      type: normalizeEvaEventType(detail.type),
      payload: detail.payload || {},
      at: detail.at || Date.now()
    };
    state.evaRuntime.lastEvent = eventRecord;
    state.evaRuntime.eventHistory = [eventRecord, ...(state.evaRuntime.eventHistory || [])].slice(0, 80);
    state.evaRuntime.recentEvents = [eventRecord, ...(state.evaRuntime.recentEvents || [])].slice(0, 80);
    recordEvaPresenceEvent(eventRecord);
    if (!["timer", "idle_timeout"].includes(eventRecord.type)) state.evaRuntime.lastPlayerActionAt = Date.now();
    const delta = evaRelationshipDeltaForEvent(eventRecord.type, eventRecord.payload);
    if (Object.keys(delta).length) adjustEvaRelationship(delta, `eva_event:${eventRecord.type}`, { silent: true });
    const autonomy = evaAutonomy();
    rememberCurrentEvaLine();
    autonomy.nextSpeakAt = 0;
    const changed = maybeRunEvaAutonomy(eventRecord.type, { force: true, eventPayload: eventRecord.payload });
    saveEvaState();
    saveProgress();
    if (changed && state.route === "eva-room") render();
  }

  function normalizeEvaEventType(type) {
    const value = String(type || "");
    return value === "eva_click" ? "user_clicked_eva" : value;
  }

  function evaRelationshipDeltaForEvent(type, payload = {}) {
    const eventDeltas = {
      room_opened: { warmth: 0.2, curiosity: 0.2 },
      shop_opened: { curiosity: 0.4 },
      item_bought: { warmth: 0.5, curiosity: 0.8 },
      item_equipped: { curiosity: 0.3 },
      eva_click: { warmth: 0.35, curiosity: 0.2 },
      user_clicked_eva: { warmth: 0.35, curiosity: 0.2 },
      answer_correct: { trust: 0.35, discipline: 0.2 },
      answer_wrong: { discipline: -0.45, trust: -0.15, curiosity: 0.15 },
      lesson_start: { discipline: 0.25 },
      lesson_complete: { warmth: 1.1, trust: 1.2, discipline: 1.1 },
      level_up: { warmth: 1, curiosity: 0.8 },
      streak_up: { discipline: 0.8, trust: 0.4 },
      writing_complete: { curiosity: 0.5, discipline: 0.3 },
      sentence_complete: { trust: 0.45, curiosity: 0.3 },
      advanced_mode: { curiosity: 0.5, discipline: 0.4 }
    };
    const delta = { ...(eventDeltas[type] || {}) };
    if (type === "answer_wrong" && payload.comboLost) delta.discipline = (delta.discipline || 0) - 0.25;
    return delta;
  }

  function chooseEvaAutonomyDecoration(line) {
    const mood = state.evaRuntime?.mood || calculateEvaMood(getEvaContext());
    const moodPrefs = {
      close: ["deco_tea_table", "deco_lantern", "deco_moon_frame"],
      proud: ["deco_kanji_board", "deco_bookshelf", "deco_gold_accent"],
      curious: ["deco_bookshelf", "deco_kanji_board", "deco_tea_table"],
      worried: ["deco_lantern", "deco_moon_frame"],
      reserved: ["deco_lantern", "deco_bookshelf"],
      focused: ["deco_kanji_board", "deco_bookshelf"],
      soft: ["deco_tea_table", "deco_lantern"],
      strict: ["deco_kanji_board", "deco_scroll"],
      tired: ["deco_tea_table", "deco_lantern"],
      happy: ["deco_golden_accent", "deco_moon_frame"],
      serious: ["deco_scroll", "deco_lantern"],
      mystic: ["deco_moon_frame", "deco_lantern"],
      cyber: ["deco_kanji_board", "deco_bookshelf"],
      travel: ["deco_scroll", "deco_lantern"],
      quiet: ["deco_lantern", "deco_bookshelf"],
      neutral: ["deco_bookshelf", "deco_tea_table", "deco_lantern"]
    };
    const preferred = [...(line?.preferredDecorations || []), ...(moodPrefs[mood] || moodPrefs.neutral)];
    return pickOwnedCustomizationId("decoration", preferred);
  }

  function chooseEvaAutonomyEffect(line) {
    const mood = state.evaRuntime?.mood || calculateEvaMood(getEvaContext());
    const moodPrefs = {
      close: ["effect_golden_glow", "effect_sakura_particles"],
      proud: ["effect_golden_glow", "effect_moon_particles"],
      curious: ["effect_cyber_hud", "effect_sakura_particles"],
      worried: ["effect_snow_particles", "effect_dust_particles"],
      reserved: ["effect_dust_particles", "effect_snow_particles"],
      focused: ["effect_lesson_shine", "effect_golden_glow"],
      soft: ["effect_sakura_particles", "effect_golden_glow"],
      strict: ["effect_level_frame", "effect_dust_particles"],
      tired: ["effect_snow_particles", "effect_dust_particles"],
      happy: ["effect_golden_glow", "effect_moon_particles"],
      serious: ["effect_dust_particles", "effect_level_frame"],
      mystic: ["effect_moon_particles", "effect_golden_glow"],
      cyber: ["effect_cyber_hud", "effect_lesson_shine"],
      travel: ["effect_dust_particles", "effect_snow_particles"],
      quiet: ["effect_moon_particles", "effect_snow_particles"],
      neutral: ["effect_golden_glow", "effect_moon_particles"]
    };
    const preferred = [...(line?.preferredEffects || []), ...(moodPrefs[mood] || moodPrefs.neutral)];
    return pickOwnedCustomizationId("effect", preferred) || "none";
  }

  function pickOwnedCustomizationId(type, preferred = []) {
    const owned = customizationShopItems().filter((item) => item.type === type && isCustomizationOwned(item.id));
    const picked = preferred.map((id) => owned.find((item) => item.id === id)).find(Boolean) || sample(owned);
    return picked?.id || null;
  }

  function evaAutonomyEmotion(reason, line) {
    const category = line?.category || "";
    if (["answer_wrong", "streak_lost"].includes(reason) || category.includes("guard")) return "serious";
    if (["lesson_complete", "level_up", "item_bought", "achievement"].includes(reason) || category.includes("reward")) return "proud";
    if (["answer_correct", "sentence_complete", "writing_complete"].includes(reason)) return "approve";
    if (category.includes("observation") || category.includes("focus")) return "thinking";
    return {
      close: "soft",
      proud: "proud",
      curious: "thinking",
      worried: "serious",
      reserved: "calm",
      neutral: "calm"
    }[evaRelationship().mood] || "calm";
  }

  function maybeAskEvaQuestion(context = getEvaContext(), line = null) {
    const autonomy = evaAutonomy();
    if (autonomy.currentQuestion?.id) return autonomy.currentQuestion;
    const reason = context.lastEvent?.type || "auto";
    const force = ["user_clicked_eva", "room_opened"].includes(reason);
    const now = Date.now();
    const last = Number(state.evaRuntime?.lastQuestionAt || state.evaRuntime?.lastQuestion?.at || 0);
    const cooldown = Number(state.evaRuntime?.cooldowns?.question || randomBetween(3 * 60000, 7 * 60000));
    if (!force && now - last < cooldown) return null;
    if (!force && Math.random() > 0.34) return null;
    const recent = new Set(state.evaRuntime?.questionHistory?.slice(0, 6).map((item) => item.id));
    const pool = evaQuestionPool(reason, line).filter((item) => !recent.has(item.id));
    const question = sample(pool.length ? pool : evaQuestionPool(reason, line));
    if (!question) return null;
    return {
      ...question,
      at: new Date().toISOString()
    };
  }

  function maybePickEvaQuestion(reason, line) {
    return maybeAskEvaQuestion(getEvaContext({ lastEvent: { type: reason } }), line);
  }

  function evaQuestionPool(reason = "auto") {
    const ru = lang() === "ru";
    const base = [
      {
        id: "pace",
        text: { ru: "Сегодня держим темп или идем тише?", en: "Do we keep pace today, or move quieter?" },
        options: [
          { id: "steady", text: { ru: "Держим темп.", en: "Keep pace." }, reply: { ru: "Хорошо. Тогда без лишнего шума.", en: "Good. Then no extra noise." }, delta: { discipline: 0.8, trust: 0.3 } },
          { id: "calm", text: { ru: "Тише.", en: "Quieter." }, reply: { ru: "Тоже разумно. Дорога не любит спешки.", en: "Reasonable. Roads dislike haste." }, delta: { warmth: 0.5, trust: 0.2 } }
        ]
      },
      {
        id: "review_first",
        text: { ru: "Повторы сначала. Согласен?", en: "Reviews first. Agreed?" },
        options: [
          { id: "yes", text: { ru: "Согласен.", en: "Agreed." }, reply: { ru: "Тогда начнем с того, что уже почти ускользнуло.", en: "Then we start with what nearly slipped." }, delta: { discipline: 0.9, trust: 0.2 } },
          { id: "lesson", text: { ru: "Хочу новый урок.", en: "I want a new lesson." }, reply: { ru: "Можно. Но старые следы потом догонят.", en: "We can. Old tracks will catch up later." }, delta: { curiosity: 0.6 } }
        ]
      },
      {
        id: "detail",
        text: { ru: "Ты заметил, какой элемент повторяется в сегодняшних карточках?", en: "Did you notice which part repeats in today's cards?" },
        options: [
          { id: "noticed", text: { ru: "Да.", en: "Yes." }, reply: { ru: "Хорошо. Наблюдательность экономит силы.", en: "Good. Observation saves strength." }, delta: { trust: 0.6, curiosity: 0.4 } },
          { id: "not_yet", text: { ru: "Пока нет.", en: "Not yet." }, reply: { ru: "Посмотри еще раз. Ответ часто лежит на краю знака.", en: "Look again. The answer often sits at the edge of the character." }, delta: { curiosity: 0.4, warmth: 0.2 } }
        ]
      }
    ];
    if (reason === "answer_wrong") {
      base.unshift({
        id: "wrong_recover",
        text: { ru: "Ошибка была в чтении или в поспешности?", en: "Was the mistake in the reading, or in haste?" },
        options: [
          { id: "reading", text: { ru: "В чтении.", en: "Reading." }, reply: { ru: "Тогда слушай и повтори вслух. Коротко.", en: "Then listen and say it aloud. Briefly." }, delta: { curiosity: 0.5 } },
          { id: "haste", text: { ru: "Поспешил.", en: "I rushed." }, reply: { ru: "Такое случается на плохих дорогах. Сбавь шаг.", en: "Happens on bad roads. Slow your step." }, delta: { discipline: 0.5, trust: 0.2 } }
        ]
      });
    }
    return base.map((item) => ({
      ...item,
      text: item.text || { ru: String(item.ru || ""), en: String(item.en || item.ru || "") },
      options: item.options.map((option) => ({
        ...option,
        text: option.text || { ru: option.label || option.id, en: option.label || option.id },
        reply: option.reply || { ru: ru ? "Принято." : "Noted.", en: "Noted." }
      }))
    }));
  }

  function handleEvaQuestionAnswer(target) {
    ensureEvaRoomProgress();
    const autonomy = evaAutonomy();
    const question = autonomy.currentQuestion;
    if (!question?.id) return;
    answerEvaQuestion(question.id, target.dataset.option);
  }

  function answerEvaQuestion(questionId, answerId) {
    ensureEvaRoomProgress();
    const autonomy = evaAutonomy();
    const question = autonomy.currentQuestion;
    if (!question?.id || question.id !== questionId) return;
    const option = question.options?.find((item) => item.id === answerId);
    if (!option) return;
    adjustEvaRelationship(option.delta || { warmth: 0.2 }, `eva_question:${question.id}`);
    const answerRecord = {
      id: question.id,
      option: option.id,
      at: new Date().toISOString()
    };
    state.evaRuntime ||= defaultEvaStateV2();
    state.evaRuntime.lastQuestion = { ...answerRecord, at: Date.now() };
    state.evaRuntime.lastQuestionAt = Date.now();
    state.evaRuntime.pendingQuestion = null;
    state.evaRuntime.questionHistory = [answerRecord, ...(state.evaRuntime.questionHistory || [])].slice(0, 40);
    const bg = chooseEvaAutonomyBackground({ category: "question" });
    const sprite = resolveEvaSprite(chooseEvaAutonomySprite({ category: "question", sprite: "approve" }), "approve");
    autonomy.currentQuestion = null;
    autonomy.currentLine = {
      id: `question_reply_${question.id}_${option.id}`,
      category: "question_reply",
      text: option.reply,
      sprite,
      background: bg.id,
      emotion: "approve",
      state: "react",
      at: new Date().toISOString(),
      reason: "question_answer"
    };
    state.evaRuntime.presenceState = "react";
    state.evaRuntime.textRevealSkippedLineId = null;
    rememberEvaPresenceLine(autonomy.currentLine, "question_answer", getEvaContext({ lastEvent: { type: "question_answer" } }));
    autonomy.lastSpokeAt = autonomy.currentLine.at;
    autonomy.lastRoomId = bg.id;
    autonomy.lastSprite = sprite;
    scheduleNextEvaAutonomyLine();
    dispatchEvaEvent("user_answered_eva_question", { questionId: question.id, answerId: option.id });
    saveEvaState();
    saveProgress();
    playUxSound("notification_soft");
    render();
  }

  function currentEvaRoomScene() {
    ensureEvaRoomProgress();
    if (isEvaAutonomyEnabled()) {
      maybeRunEvaAutonomy("render");
    }
    const storyNode = currentEvaRoomNode();
    let auto = evaAutonomy().currentLine;
    if (isEvaAutonomyEnabled() && !auto?.text && state.evaAutonomyLines.length) {
      const line = pickEvaAutonomyLine("render_fallback") || state.evaAutonomyLines[0];
      const bg = chooseEvaAutonomyBackground(line);
      const context = getEvaContext({ lastEvent: { type: "render_fallback" } });
      const mood = calculateEvaMood(context);
      const decoration = chooseEvaAutonomyDecoration(line);
      const effect = chooseEvaAutonomyEffect(line);
      const emotion = line.emotion || chooseEvaEmotion(context, mood, "render_fallback");
      const sprite = resolveEvaSprite(chooseEvaAutonomySprite(line), emotion);
      auto = {
        id: line.id,
        category: line.category || "mood",
        text: line.text,
        sprite,
        background: bg.id,
        decoration,
        effect,
        emotion,
        state: line.state || "observe",
        at: new Date().toISOString()
      };
      evaAutonomy().currentLine = auto;
      evaAutonomy().currentDecoration = decoration;
      evaAutonomy().currentEffect = effect;
      evaAutonomy().mood = mood;
      evaAutonomy().emotion = emotion;
      evaAutonomy().lastSpokeAt = auto.at;
      evaAutonomy().lastRoomId = bg.id;
      evaAutonomy().lastSprite = sprite;
      state.evaRuntime.presenceState = auto.state;
      state.evaRuntime.textRevealSkippedLineId = null;
      rememberEvaPresenceLine(line, "render_fallback", context);
      preloadEvaVisuals(sprite, bg.file);
      scheduleNextEvaAutonomyLine();
      saveProgress();
    }
    if (isEvaAutonomyEnabled() && auto?.text) {
      const bg = getEvaRoomBackground(auto.background) || currentEvaRoomBackground();
      return {
        isAutonomy: true,
        line: auto,
        bg,
        sprite: resolveEvaSprite(auto.sprite || "relationship", auto.emotion || evaAutonomy().emotion),
        decoration: auto.decoration || evaAutonomy().currentDecoration,
        effect: auto.effect || evaAutonomy().currentEffect,
        mood: evaAutonomy().mood || evaRelationship().mood,
        emotion: auto.emotion || evaAutonomy().emotion || "calm",
        node: {
          id: "eva_autonomy_line",
          background: bg.id,
          sprite: resolveEvaSprite(auto.sprite || "relationship", auto.emotion || evaAutonomy().emotion),
          speaker: { ru: "Ева", en: "Eva" },
          text: auto.text,
          choices: []
        }
      };
    }
    const bg = getEvaRoomBackground(storyNode.background) || currentEvaRoomBackground();
    return {
      isAutonomy: false,
      line: null,
      bg,
      sprite: resolveEvaSprite(storyNode.sprite, evaAutonomy().emotion),
      decoration: evaAutonomy().currentDecoration,
      effect: evaAutonomy().currentEffect,
      mood: evaRelationship().mood,
      emotion: evaAutonomy().emotion || "calm",
      node: storyNode
    };
  }

  function pickEvaRoomLine(category = "adaptive") {
    ensureEvaRoomProgress();
    syncEvaRelationshipFromProgress();
    const rel = evaRelationship();
    const recent = new Set(state.progress.evaRoomDialogueProgress.lineHistory || []);
    const eligible = evaRoomLines().filter((line) => {
      const tags = Array.isArray(line.tags) ? line.tags : [];
      const categoryMatch = category === "adaptive" || line.category === category || tags.includes(category);
      if (!categoryMatch) return false;
      if (!evaLineMeetsRelationship(line, rel)) return false;
      return !recent.has(line.id);
    });
    const fallback = evaRoomLines().filter((line) => category === "adaptive" || line.category === category || (line.tags || []).includes(category));
    const pool = eligible.length ? eligible : fallback.length ? fallback : evaRoomLines();
    const line = sample(pool) || {
      id: "fallback",
      category: "adaptive",
      text: { ru: "Я рядом. Давай сделаем хотя бы один честный шаг.", en: "I'm here. Let's make one honest step." },
      sprite: "relationship",
      background: currentEvaRoomBackground().id
    };
    const lineHistory = state.progress.evaRoomDialogueProgress.lineHistory || [];
    state.progress.evaRoomDialogueProgress.lineHistory = [line.id, ...lineHistory.filter((item) => item !== line.id)].slice(0, 24);
    return {
      id: line.id,
      category: line.category || category,
      text: line.text || { ru: String(line.ru || ""), en: String(line.en || line.ru || "") },
      sprite: line.sprite || "relationship",
      background: line.background || currentEvaRoomBackground().id,
      relationshipDelta: line.relationshipDelta || {}
    };
  }

  function evaLineMeetsRelationship(line, rel) {
    const checks = [
      ["minWarmth", rel.warmth, (actual, expected) => actual >= expected],
      ["maxWarmth", rel.warmth, (actual, expected) => actual <= expected],
      ["minTrust", rel.trust, (actual, expected) => actual >= expected],
      ["maxTrust", rel.trust, (actual, expected) => actual <= expected],
      ["minDiscipline", rel.discipline, (actual, expected) => actual >= expected],
      ["maxDiscipline", rel.discipline, (actual, expected) => actual <= expected],
      ["minCuriosity", rel.curiosity, (actual, expected) => actual >= expected],
      ["maxCuriosity", rel.curiosity, (actual, expected) => actual <= expected]
    ];
    return checks.every(([key, actual, compare]) => typeof line[key] === "undefined" || compare(actual, Number(line[key])));
  }

  function currentEvaRoomNode() {
    ensureEvaRoomProgress();
    const node = evaRoomNodeById(state.progress.evaRoomDialogueProgress.currentNode);
    state.progress.evaRoomDialogueProgress.visited[node.id] = new Date().toISOString();
    return node;
  }

  function evaSpritePath(sprite) {
    return state.evaSprites?.[sprite] || state.evaSprites?.default || "assets/mascots/eva_normal.png";
  }

  function preloadEvaVisuals(spriteId, backgroundSrc = "") {
    [evaSpritePath(spriteId), backgroundSrc].filter(Boolean).forEach((src) => {
      try {
        const image = new Image();
        image.src = src;
        if (image.decode) image.decode().catch(() => null);
      } catch (error) {
        console.warn("Eva visual preload skipped.", error);
      }
    });
  }

  function handleEvaRoomChoice(target) {
    const node = currentEvaRoomNode();
    const choice = node.choices?.[Number(target.dataset.index || 0)];
    if (!choice) return;
    ensureEvaRoomProgress();
    const rel = state.progress.evaRelationship;
    rel.conversationCount = Number(rel.conversationCount || 0) + 1;
    rel.totalDialogueChoices = Number(rel.totalDialogueChoices || 0) + 1;
    rel.lastInteractionAt = new Date().toISOString();
    rel.lastInteractionDate = todayKey();
    rememberEvaRoomChoice(choice);
    adjustEvaRelationship(choice.relationshipDelta || { warmth: 0.4, curiosity: 0.2 }, "dialogue_choice");
    const reward = Number(choice.rewardMoonFragments || 0);
    const rewardKey = choice.rewardOnceKey;
    if (reward > 0 && rewardKey && !state.progress.evaRoomDialogueProgress.rewardsClaimed[rewardKey]) {
      state.progress.evaRoomDialogueProgress.rewardsClaimed[rewardKey] = new Date().toISOString();
      addReward(0, reward, `eva_room:${rewardKey}`);
      toast(evaRoomLabels().reward);
    }
    if (choice.randomLine) {
      const generated = pickEvaRoomLine(choice.randomLine);
      adjustEvaRelationship(generated.relationshipDelta || {}, `eva_line:${generated.id}`, { silent: true });
      state.progress.evaRoomDialogueProgress.generatedLine = generated;
      state.progress.evaRoomDialogueProgress.currentNode = "generated_line";
    } else {
      state.progress.evaRoomDialogueProgress.generatedLine = null;
      state.progress.evaRoomDialogueProgress.currentNode = choice.next || "intro";
    }
    if (choice.openShop) state.evaRoomShopOpen = true;
    saveProgress();
    if (choice.route) {
      setRoute(choice.route);
      return;
    }
    playUxSound(choice.openShop ? "menu_open" : "page_turn");
    render();
  }

  function rememberEvaRoomChoice(choice = {}) {
    if (!state.evaRuntime) return;
    state.evaRuntime.memory = mergeEvaMemory(defaultEvaMemory(), state.evaRuntime.memory || {});
    const memory = state.evaRuntime.memory;
    const isTalk = Boolean(choice.randomLine && !choice.route);
    const isStudyRoute = ["learn", "review", "writing"].includes(choice.route);
    if (isTalk) memory.timesUserChoseTalkOverStudy = Number(memory.timesUserChoseTalkOverStudy || 0) + 1;
    if (isStudyRoute) memory.timesUserChoseTalkOverStudy = Math.max(0, Number(memory.timesUserChoseTalkOverStudy || 0) - 1);
    memory.lastInteractionDate = todayKey();
    memory.lastRoute = state.route;
  }

  function resetEvaRoomDialogue() {
    ensureEvaRoomProgress();
    state.progress.evaRoomDialogueProgress.currentNode = "intro";
    state.progress.evaRoomDialogueProgress.generatedLine = null;
    if (state.evaRuntime) {
      state.evaRuntime.presenceState = "wait_choice";
      state.evaRuntime.textRevealSkippedLineId = null;
    }
    saveProgress();
    playUxSound("page_turn");
    render();
  }

  function buyEvaRoomBackground(id) {
    buyCustomizationItem(id);
  }

  function selectEvaRoomBackground(id) {
    selectCustomizationItem(id);
  }

  function buyEvaSprite(id) {
    const shopItem = customizationShopItem(id) || legacyCustomizationItem(id) || outfitItemBySprite(id);
    if (shopItem) buyCustomizationItem(shopItem.id);
  }

  function selectEvaSprite(id) {
    const shopItem = customizationShopItem(id) || legacyCustomizationItem(id) || outfitItemBySprite(id);
    if (shopItem) selectCustomizationItem(shopItem.id);
  }

  function isCustomizationOwned(id) {
    if (!state.customization) hydrateCustomization();
    const item = customizationShopItem(id) || legacyCustomizationItem(id);
    return Boolean(item?.defaultOwned || item?.price === 0 || state.customization?.owned?.includes(item?.id || id));
  }

  function customizationSelectionSlot(item) {
    if (!item) return null;
    if (item.type === "background") return "background";
    if (item.type === "outfit") return "outfit";
    if (item.type === "theme") return "theme";
    if (item.type === "effect") return "effect";
    if (item.type === "decoration") return "decoration";
    return item.type;
  }

  function isCustomizationSelected(item) {
    const slot = customizationSelectionSlot(item);
    return Boolean(slot && state.customization?.selected?.[slot] === item.id);
  }

  function customizationItemStatus(item) {
    if (!item) return "locked";
    if (!isCustomizationAvailable(item)) return "locked";
    if (isCustomizationSelected(item)) return "selected";
    if (isCustomizationOwned(item.id)) return "owned";
    return "available";
  }

  function customizationUnlockHint(item) {
    if (!item?.unlockCondition || isCustomizationAvailable(item)) return "";
    const condition = item.unlockCondition;
    const ru = lang() === "ru";
    if (condition.type === "achievement") {
      const achievement = achievementList().find((entry) => entry.id === condition.id);
      const title = achievement ? achievementTitle(achievement) : condition.id;
      return ru ? `Открывается за достижение: ${title}` : `Unlocks after achievement: ${title}`;
    }
    if (condition.type === "level") {
      return ru ? `Открывается на уровне ${condition.value}` : `Unlocks at level ${condition.value}`;
    }
    if (condition.type === "streak") {
      return ru ? `Открывается за серию ${condition.value} дн.` : `Unlocks at a ${condition.value}-day streak`;
    }
    return "";
  }

  function isCustomizationAvailable(item) {
    if (!item?.unlockCondition) return true;
    const condition = item.unlockCondition;
    if (condition.type === "level") return state.progress.level >= Number(condition.value || 0);
    if (condition.type === "streak") return state.progress.streak.current >= Number(condition.value || 0);
    if (condition.type === "achievement") return Boolean(state.progress.achievements?.[condition.id]?.unlockedAt);
    return true;
  }

  function buyCustomizationItem(id) {
    const item = customizationShopItem(id);
    if (!item) return;
    if (!isCustomizationAvailable(item)) {
      playUxSound("purchase_failed");
      toast(shopLabels().locked);
      return;
    }
    if (isCustomizationOwned(item.id)) {
      selectCustomizationItem(item.id);
      return;
    }
    if (state.progress.moonFragments < item.price) {
      playUxSound("purchase_failed");
      toast(shopLabels().notEnough);
      return;
    }
    state.progress.moonFragments -= item.price;
    state.customization.owned = [...new Set([...(state.customization.owned || []), item.id])];
    state.customization.seen = [...new Set([...(state.customization.seen || []), item.id])];
    state.progress.transactions.unshift({
      at: new Date().toISOString(),
      reason: `customization:${item.type}:${item.id}`,
      label: customizationItemTitle(item),
      xp: 0,
      coins: -item.price,
      balance: state.progress.moonFragments
    });
    state.progress.transactions = state.progress.transactions.slice(0, 80);
    syncCustomizationToProgress();
    saveCustomizationStorage();
    evaluateAchievements();
    saveProgress();
    playUxSound("purchase_success");
    playUxSound("item_unlock");
    dispatchEvaEvent("item_bought", { itemId: item.id, type: item.type, title: customizationItemTitle(item), price: item.price });
    toast(shopLabels().bought.replace("{item}", customizationItemTitle(item)));
    render();
  }

  function selectCustomizationItem(id) {
    const item = customizationShopItem(id);
    if (!item || !isCustomizationOwned(item.id)) return;
    const slot = customizationSelectionSlot(item);
    if (!slot) return;
    state.customization.selected[slot] = item.id;
    if (slot === "decoration") state.customization.selected.frame = item.id;
    if (item.type === "outfit" && item.spriteId) {
      state.progress.selectedEvaSprite = item.spriteId;
      state.progress.evaAutonomy.currentLine = null;
    }
  if (item.type === "background") {
    state.progress.selectedEvaRoomBackground = item.id;
    if (state.evaRuntime) {
      state.evaRuntime.currentBackground = item.id;
      state.evaRuntime.activeBackground = item.id;
      state.evaRuntime.memory ||= defaultEvaMemory();
      state.evaRuntime.memory.preferredEvaRoomBackground = item.id;
    }
    state.progress.evaAutonomy.currentLine = null;
  }
    syncCustomizationToProgress();
    saveCustomizationStorage();
    saveProgress();
    applyTheme();
    playUxSound("notification_soft");
    dispatchEvaEvent("item_equipped", { itemId: item.id, type: item.type, title: customizationItemTitle(item) });
    toast(shopLabels().selectedToast.replace("{item}", customizationItemTitle(item)));
    render();
  }

  function toggleEvaAutonomy() {
    const autonomy = evaAutonomy();
    autonomy.enabled = true;
    autonomy.frequency = "normal";
    autonomy.roomMode = "auto";
    autonomy.outfitMode = "auto";
    autonomy.nextSpeakAt = 0;
    maybeRunEvaAutonomy("toggle", { force: true });
    saveProgress();
    playUxSound("notification_soft");
    toast(evaLiveLabels().status);
    render();
  }

  function cycleEvaAutonomyFrequency() {
    const autonomy = evaAutonomy();
    autonomy.frequency = "normal";
    scheduleNextEvaAutonomyLine();
    saveProgress();
    playUxSound("notification_soft");
    render();
  }

  function toggleEvaAutonomyRoomMode() {
    const autonomy = evaAutonomy();
    autonomy.roomMode = "auto";
    autonomy.currentLine = null;
    saveProgress();
    playUxSound("notification_soft");
    render();
  }

  function toggleEvaAutonomyOutfitMode() {
    const autonomy = evaAutonomy();
    autonomy.outfitMode = "auto";
    autonomy.currentLine = null;
    saveProgress();
    playUxSound("notification_soft");
    render();
  }

  function nextEvaAutonomyLine() {
    const autonomy = evaAutonomy();
    autonomy.enabled = true;
    rememberCurrentEvaLine();
    autonomy.currentQuestion = null;
    autonomy.currentLine = null;
    autonomy.nextSpeakAt = 0;
    forceEvaEventLine("manual");
    saveProgress();
    playUxSound("page_turn");
    render();
  }

  function forceEvaEventLine(reason = "manual") {
    const line = evaEventLine(reason) || pickEvaAutonomyLine(reason);
    if (!line) return false;
    const context = getEvaContext({ lastEvent: { type: reason } });
    const mood = calculateEvaMood(context);
    const emotion = line.emotion || chooseEvaEmotion(context, mood, reason);
    const bg = chooseEvaAutonomyBackground(line);
    const sprite = resolveEvaSprite(chooseEvaAutonomySprite(line), emotion);
    const decoration = chooseEvaAutonomyDecoration(line);
    const effect = chooseEvaAutonomyEffect(line);
    const autonomy = evaAutonomy();
    const now = Date.now();
    autonomy.currentLine = {
      id: line.id,
      category: line.category || reason,
      text: line.text,
      sprite,
      background: bg.id,
      decoration,
      effect,
      emotion,
      state: line.state || "speak",
      at: new Date(now).toISOString(),
      reason
    };
    autonomy.currentDecoration = decoration;
    autonomy.currentEffect = effect;
    autonomy.mood = mood;
    autonomy.emotion = emotion;
    autonomy.lastSpokeAt = autonomy.currentLine.at;
    autonomy.lastRoomId = bg.id;
    autonomy.lastSprite = sprite;
    autonomy.recentLineIds = [line.id, ...(autonomy.recentLineIds || []).filter((id) => id !== line.id)].slice(0, 32);
    state.evaRuntime ||= defaultEvaStateV2();
    Object.assign(state.evaRuntime, {
      mood,
      emotion,
      presenceState: line.state || "speak",
      currentPhrase: autonomy.currentLine,
      pendingQuestion: null,
      currentSkin: sprite,
      currentBackground: bg.id,
      currentDecoration: decoration,
      currentEffect: effect,
      activeSkin: sprite,
      activeBackground: bg.id,
      lastPhraseAt: now,
      lastEmotionChangeAt: now,
      lastVisualChangeAt: now,
      textRevealSkippedLineId: null
    });
    rememberEvaPresenceLine(line, reason, context);
    preloadEvaVisuals(sprite, bg.file);
    scheduleNextEvaAutonomyLine();
    saveEvaState();
    applyTheme();
    return true;
  }

  function clearEvaAutonomyLine() {
    evaAutonomy().currentLine = null;
    saveProgress();
    playUxSound("menu_close");
    render();
  }

  function renderMetric(label, value, note, width) {
    return `
      <article class="metric">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value)}</strong>
        <div class="meter"><i style="width:${clamp(width, 0, 100)}%"></i></div>
        <p class="label">${escapeHtml(note)}</p>
      </article>
    `;
  }

  function renderLessonTile(lesson) {
    const lessonCards = getLessonCards(lesson.id);
    const learned = lessonCards.filter((card) => getCardProgress(card.id).state !== "New").length;
    const mastered = lessonCards.filter((card) => getCardProgress(card.id).state === "Mastered").length;
    const locked = !isLessonUnlocked(lesson);
    const status = lessonProgressStatus(lesson);
    const glyph = locked ? "鎖" : lessonCards[0]?.kanji || "文";
    const width = progressWidth(mastered, lessonCards.length);
    return `
      <button class="lesson-tile ${locked ? "is-locked" : ""} ${lessonStatusClass(status)}" type="button" data-action="start-lesson" data-id="${escapeAttr(lesson.id)}">
        <span class="lesson-glyph">${escapeHtml(glyph)}</span>
        <span>
          <span class="pill">${escapeHtml(lesson.jlpt)}</span>
          ${renderLessonStatusPill(status)}
          <h3>${escapeHtml(lessonTitle(lesson))}</h3>
          <p>${escapeHtml(lessonSummary(lesson))}</p>
          <span class="lesson-meta">
            <span class="pill">${learned}/${lessonCards.length}</span>
            <span class="pill mastered">${mastered} ${escapeHtml(t("mastered"))}</span>
            ${locked ? `<span class="pill danger-pill">${escapeHtml(t("unlockedAt"))} ${unlockLevel(lesson)}</span>` : ""}
          </span>
          <span class="meter"><i style="width:${width}%"></i></span>
        </span>
      </button>
    `;
  }

  function renderFeaturedCard(card) {
    const progress = getCardProgress(card.id);
    return `
      <div class="section-head">
        <div>
          <h2>${escapeHtml(t("cardOfDay"))}</h2>
          <p>${escapeHtml(lessonTitleById(card.lessonId))}</p>
        </div>
      </div>
      <button class="kanji-tile" type="button" data-action="open-card" data-id="${escapeAttr(card.id)}">
        ${renderKanjiLine(card)}
        <div class="tag-row">
          ${renderStatePill(progress.state)}
          <span class="pill">${escapeHtml(card.jlpt)}</span>
          <span class="pill">${card.strokes} ${escapeHtml(t("strokes"))}</span>
        </div>
      </button>
    `;
  }

  function renderLessonTab(lesson) {
    const status = lessonProgressStatus(lesson);
    const active = lesson.id === state.activeLessonId;
    const locked = !isLessonUnlocked(lesson);
    return `
      <button class="btn ${active ? "primary" : "ghost"} ${locked ? "is-disabled" : ""} ${lessonStatusClass(status)}" type="button" data-action="select-lesson" data-id="${escapeAttr(lesson.id)}" title="${escapeAttr(lessonStatusLabel(status))}">
        <span>${escapeHtml(lesson.jlpt)}</span>
        ${renderLessonStatusDot(status)}
      </button>
    `;
  }

  function renderLearn() {
    ensureActiveLesson();
    const lesson = state.lessons.find((item) => item.id === state.activeLessonId);
    const candidates = getStudyCandidates(state.activeLessonId, false);
    if (!state.activeCardId || !candidates.some((card) => card.id === state.activeCardId)) {
      state.activeCardId = candidates[0]?.id || null;
    }
    const card = state.activeCardId ? findCard(state.activeCardId) : null;

    return `
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${escapeHtml(t("learn"))}</h1>
            <p>${escapeHtml(lesson ? lessonTitle(lesson) : "")}</p>
          </div>
        </div>
        <div class="actions lesson-tabs">
          ${state.lessons.map(renderLessonTab).join("")}
        </div>
        <div class="study-layout">
          ${card ? renderStudyCard(card) : renderLessonDone(lesson)}
          ${renderStudySidePanel(card, candidates.length)}
        </div>
      </section>
    `;
  }

  function renderJlptLessonPage() {
    const lesson = jlptLessonByLevel(state.activeJlptLesson)
      || jlptLessonByLevel(findCard(state.activeCardId)?.jlpt)
      || state.jlptLessons[0];
    if (!lesson) {
      return `
        <section class="page">
          <article class="empty-state">
            <span class="kanji-char">JLPT</span>
            <h2>${escapeHtml(lang() === "ru" ? "JLPT-уроки пока не загружены" : "JLPT lessons are not loaded yet")}</h2>
            <button class="btn primary" type="button" data-action="route" data-route="learn">${escapeHtml(t("learn"))}</button>
          </article>
        </section>
      `;
    }
    state.activeJlptLesson = lesson.jlpt;
    const cards = cardsForJlpt(lesson.jlpt);
    const mastered = cards.filter((card) => getCardProgress(card.id).state === "Mastered").length;
    const learned = cards.filter((card) => getCardProgress(card.id).state !== "New").length;
    const labels = { ...jlptLessonLabels(), ...jlptLessonExtraLabels() };
    return `
      <section class="page jlpt-lesson-page">
        <div class="section-head">
          <div>
            <h1>${escapeHtml(localized(lesson.title))}</h1>
            <p>${escapeHtml(localized(lesson.summary))}</p>
          </div>
          <button class="btn ghost" type="button" data-action="route" data-route="learn">${escapeHtml(labels.back)}</button>
        </div>
        <div class="actions jlpt-switcher">
          ${state.jlptLessons.map((item) => `
            <button class="btn ${item.jlpt === lesson.jlpt ? "primary" : "ghost"}" type="button" data-action="open-jlpt-lesson" data-jlpt="${escapeAttr(item.jlpt)}">${escapeHtml(item.jlpt)}</button>
          `).join("")}
        </div>
        <article class="jlpt-lesson-hero">
          <div>
            <span class="pill">${escapeHtml(lesson.jlpt)}</span>
            <h2>${escapeHtml(labels.courseMap)}</h2>
            <p>${escapeHtml(labels.courseText)}</p>
          </div>
          <div class="mini-stat-row">
            ${renderMetric(labels.available, cards.length, lesson.jlpt, progressWidth(cards.length, Math.max(state.cards.length, 1)))}
            ${renderMetric(labels.learned, learned, `${mastered} ${labels.mastered}`, progressWidth(learned, Math.max(cards.length, 1)))}
          </div>
        </article>
        ${renderJlptPracticeModule(lesson)}
        <div class="jlpt-section-grid">
          ${lesson.goals.length ? `
            <article class="jlpt-section-card">
              <h3>${escapeHtml(labels.goals)}</h3>
              <ul>${lesson.goals.map((goal) => `<li>${escapeHtml(localized(goal))}</li>`).join("")}</ul>
            </article>
          ` : ""}
          ${lesson.sections.map((section) => `
            <article class="jlpt-section-card">
              <h3>${escapeHtml(localized(section.title))}</h3>
              <p>${escapeHtml(localized(section.body))}</p>
              ${Array.isArray(section.points) && section.points.length ? `<ul>${section.points.map((point) => `<li>${escapeHtml(localized(point))}</li>`).join("")}</ul>` : ""}
            </article>
          `).join("")}
          ${lesson.practice.length ? `
            <article class="jlpt-section-card">
              <h3>${escapeHtml(labels.practice)}</h3>
              <ul>${lesson.practice.map((point) => `<li>${escapeHtml(localized(point))}</li>`).join("")}</ul>
            </article>
          ` : ""}
          ${lesson.checkpoint.length ? `
            <article class="jlpt-section-card">
              <h3>${escapeHtml(labels.checkpoint)}</h3>
              <ul>${lesson.checkpoint.map((point) => `<li>${escapeHtml(localized(point))}</li>`).join("")}</ul>
            </article>
          ` : ""}
        </div>
      </section>
    `;
  }

  function renderJlptPracticeModule(lesson) {
    const module = jlptPracticeModuleByLevel(lesson.jlpt);
    if (!module) return "";
    const labels = { ...jlptLessonLabels(), ...jlptLessonExtraLabels() };
    return `
      <div class="jlpt-practice-grid">
        ${renderJlptAppsBlock(module, labels)}
        ${renderJlptKanaBlock(module, labels)}
        ${renderJlptKanjiFocusBlock(module, labels)}
        ${renderJlptSentenceDrill(module, labels)}
      </div>
    `;
  }

  function renderJlptAppsBlock(module, labels) {
    if (!module.apps.length) return "";
    return `
      <article class="jlpt-practice-card">
        <h3>${escapeHtml(labels.apps)}</h3>
        <div class="jlpt-app-grid">
          ${module.apps.map((item) => `
            <div class="jlpt-app-chip">
              <strong>${escapeHtml(item.name)}</strong>
              <span>${escapeHtml(localized(item.context))}</span>
            </div>
          `).join("")}
        </div>
      </article>
    `;
  }

  function renderJlptKanaBlock(module, labels) {
    const hiragana = Array.isArray(module.kana?.hiragana) ? module.kana.hiragana : [];
    const katakana = Array.isArray(module.kana?.katakana) ? module.kana.katakana : [];
    if (!hiragana.length && !katakana.length) return "";
    return `
      <article class="jlpt-practice-card">
        <h3>${escapeHtml(labels.kana)}</h3>
        <div class="kana-columns">
          ${renderKanaColumn(labels.hiragana, hiragana)}
          ${renderKanaColumn(labels.katakana, katakana)}
        </div>
      </article>
    `;
  }

  function renderKanaColumn(title, items) {
    if (!items.length) return "";
    return `
      <div class="kana-column">
        <strong>${escapeHtml(title)}</strong>
        ${items.map((item) => `
          <span class="kana-chip">
            <b>${escapeHtml(item.kana)}</b>
            <small>${escapeHtml(item.romaji)} · ${escapeHtml(localized(item.note))}</small>
          </span>
        `).join("")}
      </div>
    `;
  }

  function renderJlptKanjiFocusBlock(module, labels) {
    if (!module.kanjiFocus.length) return "";
    return `
      <article class="jlpt-practice-card jlpt-kanji-focus">
        <h3>${escapeHtml(labels.kanjiFocus)}</h3>
        <div class="jlpt-focus-grid">
          ${module.kanjiFocus.map((item) => `
            <div class="jlpt-focus-item">
              <span class="kanji-mini">${escapeHtml(item.kanji)}</span>
              <div>
                <strong>${renderFurigana(item)}</strong>
                <small>${escapeHtml(item.romaji)} · ${escapeHtml(localized(item.meaning))}</small>
                <p>${escapeHtml(localized(item.appUse))}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </article>
    `;
  }

  function renderFurigana(item) {
    const parts = Array.isArray(item.furigana) ? item.furigana : [];
    if (!parts.length) return escapeHtml(item.word || item.kanji || "");
    return parts.map((part) => part.rt
      ? `<ruby>${escapeHtml(part.text)}<rt>${escapeHtml(part.rt)}</rt></ruby>`
      : escapeHtml(part.text)
    ).join("");
  }

  function renderJlptSentenceDrill(module, labels) {
    const drill = currentJlptLessonDrill(module);
    if (!drill) return "";
    const practice = jlptLessonPractice();
    const selected = practice.selected[drill.id] || [];
    const checked = Boolean(practice.checked[drill.id]);
    const result = practice.results[drill.id] || null;
    const selectedTiles = selected.map((index) => drill.tiles[index]).filter(Boolean);
    const complete = checked && result?.correct;
    const wrongIndexes = checked && result ? result.wrongIndexes || [] : [];
    return `
      <article class="jlpt-practice-card jlpt-drill-card">
        <div class="section-head compact-head">
          <div>
            <h3>${escapeHtml(labels.sentenceDrill)}</h3>
            <p>${escapeHtml(localized(drill.translation))}</p>
          </div>
          <span class="pill">${escapeHtml(module.jlpt)}</span>
        </div>
        <div class="jlpt-sentence-line">${renderJlptSentenceLine(drill, selectedTiles, wrongIndexes)}</div>
        <p class="label">${escapeHtml(drill.reading)}</p>
        <div class="sentence-tiles jlpt-tiles">
          ${drill.tiles.map((tile, index) => {
            const used = selected.includes(index);
            return `
              <button class="sentence-tile ${used ? "is-used" : ""}" type="button" data-action="insert-jlpt-tile" data-index="${index}" ${used || complete ? "disabled" : ""}>
                <small>${escapeHtml(tile.reading)}</small>
                <strong>${escapeHtml(tile.kanji)}</strong>
              </button>
            `;
          }).join("")}
        </div>
        <p class="sentence-result ${checked ? (complete ? "is-success" : "is-error") : ""}">
          ${escapeHtml(result?.message || labels.fillBlanks)}
        </p>
        <div class="actions">
          <button class="btn primary" type="button" data-action="check-jlpt-practice" ${complete ? "disabled" : ""}>${escapeHtml(labels.check)}</button>
          <button class="btn" type="button" data-action="undo-jlpt-tile" ${!selected.length || complete ? "disabled" : ""}>${escapeHtml(labels.undo)}</button>
          <button class="btn" type="button" data-action="clear-jlpt-practice" ${!selected.length || complete ? "disabled" : ""}>${escapeHtml(labels.clear)}</button>
          <button class="btn" type="button" data-action="next-jlpt-practice">${escapeHtml(labels.next)}</button>
        </div>
      </article>
    `;
  }

  function renderJlptSentenceLine(drill, selectedTiles, wrongIndexes) {
    let cursor = 0;
    return String(drill.sentence || "").split("___").map((part, blankIndex, parts) => {
      if (blankIndex === parts.length - 1) return escapeHtml(part);
      const blank = drill.blanks[blankIndex] || { answer: [] };
      const answerLength = blank.answer.length || 1;
      const tiles = selectedTiles.slice(cursor, cursor + answerLength);
      const wrong = tiles.some((_, offset) => wrongIndexes.includes(cursor + offset));
      cursor += answerLength;
      const content = tiles.length
        ? tiles.map((tile) => `<span>${escapeHtml(tile.kanji)}</span>`).join("")
        : `<span>${escapeHtml("□".repeat(answerLength))}</span>`;
      return `${escapeHtml(part)}<span class="sentence-blank ${wrong ? "is-wrong" : ""}">${content}</span>`;
    }).join("");
  }

  function renderReview() {
    const due = getDueNowCards();
    if (!state.activeCardId || !due.some((card) => card.id === state.activeCardId)) state.activeCardId = due[0]?.id || null;
    const card = state.activeCardId ? findCard(state.activeCardId) : null;
    return `
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${escapeHtml(t("review"))}</h1>
            <p>${due.length} ${escapeHtml(t("cardsToday"))}</p>
          </div>
        </div>
        <div class="study-layout" data-section="review-card">
          ${card ? renderStudyCard(card) : renderNoReview()}
          ${renderStudySidePanel(card, due.length)}
        </div>
        ${renderSentencePractice()}
      </section>
    `;
  }

  function renderSentencePractice() {
    const learned = getLearnedSentenceCards();
    const available = getAvailableSentenceExercises(learned);
    const labels = { ...sentencePracticeLabels(), ...sentencePracticeCustomLabels() };
    const builder = renderCustomSentenceBuilder(learned, labels);

    if (!learned.length) {
      return `
      <article class="sentence-practice empty-state" data-section="sentence-practice">
          <span class="kanji-char">文</span>
          <h2>${escapeHtml(labels.title)}</h2>
          <p>${escapeHtml(labels.noLearned)}</p>
          ${builder}
          <button class="btn primary" type="button" data-action="route" data-route="learn">▶ ${escapeHtml(t("learn"))}</button>
        </article>
      `;
    }

    if (learned.length < 4) {
      return `
        <article class="sentence-practice empty-state" data-section="sentence-practice">
          <span class="kanji-char">文</span>
          <h2>${escapeHtml(labels.title)}</h2>
          <p>${escapeHtml(labels.notEnough.replace("{count}", learned.length))}</p>
          ${builder}
        </article>
      `;
    }

    if (!available.length) {
      return `
        <article class="sentence-practice empty-state" data-section="sentence-practice">
          <span class="kanji-char">文</span>
          <h2>${escapeHtml(labels.title)}</h2>
          <p>${escapeHtml(labels.noExercise)}</p>
          ${builder}
        </article>
      `;
    }

    const prepared = ensureSentencePractice(available, learned);
    if (!prepared) return "";
    const { exercise, tiles, selectedTiles, answerFlat, wrongIndexes, complete, awarded } = prepared;
    const selectedSet = new Set(state.progress.sentencePractice.selected);
    const result = state.progress.sentencePractice.result || {};
    const statusClass = state.progress.sentencePractice.checked ? (complete ? " is-success" : " is-error") : "";
    return `
      <article class="sentence-practice${statusClass}" data-section="sentence-practice" aria-live="polite">
        <div class="section-head sentence-head">
          <div>
            <h2>${escapeHtml(labels.title)}</h2>
            <p>${escapeHtml(labels.subtitle.replace("{learned}", learned.length).replace("{total}", state.cards.length))}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${escapeHtml(exercise.jlpt)}</span>
            ${exercise.source ? `<span class="pill">${escapeHtml(sentenceSourceLabel(exercise.source, labels))}</span>` : ""}
            <span class="pill">${escapeHtml(labels.progress.replace("{done}", Object.keys(state.progress.sentencePractice.completed || {}).length).replace("{total}", available.length))}</span>
          </div>
        </div>
        ${builder}
        <div class="sentence-card">
          <div class="sentence-line">${renderSentenceLine(exercise, selectedTiles, wrongIndexes)}</div>
          <p class="sentence-reading">${escapeHtml(exercise.reading || "")}</p>
          <p class="sentence-translation">${escapeHtml(localizedSentenceTranslation(exercise))}</p>
        </div>
        <div class="sentence-tiles">
          ${tiles.map((tile, index) => {
            const used = selectedSet.has(index);
            const wrong = wrongIndexes.includes(state.progress.sentencePractice.selected.indexOf(index));
            return `
              <button class="sentence-tile ${used ? "is-used" : ""} ${wrong ? "is-wrong" : ""}" type="button" data-action="insert-sentence-tile" data-index="${index}" ${used || complete ? "disabled" : ""}>
                <span>${escapeHtml(tile.reading)}</span>
                <strong>${escapeHtml(tile.kanji)}</strong>
              </button>
            `;
          }).join("")}
        </div>
        <div class="sentence-feedback">
          ${escapeHtml(result.message || labels.tip.replace("{count}", answerFlat.length))}
          ${complete && !awarded ? `<small>${escapeHtml(labels.completedBefore)}</small>` : ""}
        </div>
        <div class="actions sentence-actions">
          <button class="btn primary" type="button" data-action="check-sentence">${escapeHtml(labels.check)}</button>
          <button class="btn" type="button" data-action="undo-sentence-tile" ${!state.progress.sentencePractice.selected.length || complete ? "disabled" : ""}>${escapeHtml(labels.undo)}</button>
          <button class="btn" type="button" data-action="clear-sentence" ${!state.progress.sentencePractice.selected.length || complete ? "disabled" : ""}>${escapeHtml(labels.clear)}</button>
          <button class="btn ghost" type="button" data-action="next-sentence">${escapeHtml(labels.next)}</button>
        </div>
      </article>
    `;
  }

  function renderCustomSentenceBuilder(learned, labels) {
    const practice = sentencePracticeProgress();
    const draft = normalizeCustomSentenceDraft(practice.customDraft || {});
    const customSentences = Array.isArray(practice.customSentences) ? practice.customSentences : [];
    const customCount = customSentences.length;
    const isEditing = Boolean(practice.customEditingId);
    const messageClass = practice.customStatus ? ` is-${practice.customStatus}` : "";
    return `
      <details class="sentence-builder" ${isEditing || practice.customMessage ? "open" : ""}>
        <summary>
          <span>${escapeHtml(labels.customTitle)}</span>
          <small>${escapeHtml(labels.customCount.replace("{count}", customCount))}</small>
        </summary>
        <div class="sentence-builder-grid">
          <label class="field sentence-builder-wide">
            <span>${escapeHtml(labels.customSentence)}</span>
            <textarea data-sentence-draft="jp" rows="2" autocomplete="off" spellcheck="false" placeholder="${escapeAttr(labels.customSentencePlaceholder)}">${escapeHtml(draft.jp || "")}</textarea>
          </label>
          <label class="field sentence-builder-wide">
            <span>${escapeHtml(labels.customReading)}</span>
            <input data-sentence-draft="hiragana" type="text" autocomplete="off" spellcheck="false" value="${escapeAttr(draft.hiragana || "")}" placeholder="${escapeAttr(labels.customReadingPlaceholder)}" />
          </label>
          <label class="field">
            <span>${escapeHtml(labels.customTranslationRu)}</span>
            <input data-sentence-draft="ru" type="text" value="${escapeAttr(draft.ru || "")}" placeholder="${escapeAttr(labels.customTranslationRuPlaceholder)}" />
          </label>
          <label class="field">
            <span>${escapeHtml(labels.customTranslationEn)}</span>
            <input data-sentence-draft="en" type="text" value="${escapeAttr(draft.en || "")}" placeholder="${escapeAttr(labels.customTranslationEnPlaceholder)}" />
          </label>
        </div>
        <div class="sentence-builder-actions">
          <button class="btn primary" type="button" data-action="add-custom-sentence">${escapeHtml(isEditing ? labels.updateCustom : labels.addCustom)}</button>
          ${isEditing ? `<button class="btn ghost" type="button" data-action="cancel-custom-sentence-edit">${escapeHtml(labels.cancelEdit)}</button>` : ""}
          <span class="sentence-builder-message${messageClass}">${escapeHtml(practice.customMessage || labels.customHelp.replace("{learned}", learned.length))}</span>
        </div>
        ${renderCustomSentenceList(customSentences, learned, labels)}
      </details>
    `;
  }

  function renderCustomSentenceList(items, learned, labels) {
    if (!items.length) {
      return `<p class="sentence-custom-empty">${escapeHtml(labels.customEmpty)}</p>`;
    }
    return `
      <div class="sentence-custom-list">
        ${items.map((item) => {
          const exercise = customSentenceToExercise(item, learned);
          const ready = Boolean(exercise && buildSentenceTiles(exercise, learned).length >= Math.max(4, flatSentenceAnswer(exercise).length));
          const translation = lang() === "en" ? item.en || item.ru : item.ru || item.en;
          return `
            <article class="sentence-custom-item">
              <div class="sentence-custom-copy">
                <div class="tag-row">
                  <span class="pill">${escapeHtml(labels.userSource)}</span>
                  <span class="pill ${ready ? "success" : ""}">${escapeHtml(ready ? labels.customReady : labels.customLocked)}</span>
                </div>
                <strong>${escapeHtml(item.jp)}</strong>
                ${item.hiragana ? `<small>${escapeHtml(item.hiragana)}</small>` : ""}
                ${translation ? `<small>${escapeHtml(translation)}</small>` : ""}
              </div>
              <div class="sentence-custom-actions">
                <button class="btn" type="button" data-action="edit-custom-sentence" data-id="${escapeAttr(item.id)}">${escapeHtml(labels.editCustom)}</button>
                <button class="btn ghost" type="button" data-action="delete-custom-sentence" data-id="${escapeAttr(item.id)}">${escapeHtml(labels.deleteCustom)}</button>
              </div>
            </article>
          `;
        }).join("")}
      </div>
    `;
  }

  function sentenceSourceLabel(source, labels) {
    if (source === "user" || source === "custom") return labels.userSource || labels.customSource;
    if (source === "dynamic") return labels.dynamicSource;
    return source;
  }

  function sentencePracticeLabels() {
    return lang() === "ru"
      ? {
          title: "Практика предложений",
          subtitle: "Только из изученных кандзи: {learned}/{total}",
          progress: "{done}/{total} готово",
          noLearned: "Сначала изучи несколько кандзи в уроках или повторении. После этого появятся предложения.",
          notEnough: "Изучено {count} кандзи. Для упражнения нужно минимум 4 изученных кандзи, чтобы собрать варианты.",
          noExercise: "Изученные кандзи пока не складываются в доступные предложения. Продолжай уроки, и блок откроется.",
          tip: "Заполни {count} пропуск(а) плитками по порядку.",
          check: "Проверить",
          clear: "Очистить",
          next: "Следующее",
          undo: "Убрать",
          completedBefore: "Награда за это предложение уже получена.",
          fillAll: "Заполни все пропуски перед проверкой.",
          correct: "Верно. Предложение собрано правильно.",
          wrong: "Проверь красные места и попробуй ещё раз.",
          full: "Все пропуски уже заполнены.",
          inserted: "Плитка вставлена.",
          removed: "Последняя плитка убрана."
        }
      : {
          title: "Sentence practice",
          subtitle: "Only learned kanji: {learned}/{total}",
          progress: "{done}/{total} done",
          noLearned: "Study a few kanji first. Sentence practice will unlock after that.",
          notEnough: "{count} kanji learned. You need at least 4 learned kanji for tile choices.",
          noExercise: "Your learned kanji do not form an available sentence yet. Continue lessons to unlock this block.",
          tip: "Fill {count} blank slot(s) with tiles in order.",
          check: "Check",
          clear: "Clear",
          next: "Next",
          undo: "Undo",
          completedBefore: "Reward for this sentence was already claimed.",
          fillAll: "Fill every blank before checking.",
          correct: "Correct. The sentence is complete.",
          wrong: "Check the red slots and try again.",
          full: "All blank slots are already filled.",
          inserted: "Tile inserted.",
          removed: "Last tile removed."
        };
  }

  function sentencePracticeCustomLabels() {
    return lang() === "ru"
      ? {
          customTitle: "Своё предложение",
          customCount: "Своих: {count}",
          customSentence: "Японское предложение",
          customSentencePlaceholder: "私は日本語を勉強します。",
          customReading: "Чтение хираганой",
          customReadingPlaceholder: "わたしは にほんごを べんきょうします。",
          customTranslationRu: "Перевод RU",
          customTranslationRuPlaceholder: "Я изучаю японский.",
          customTranslationEn: "Translation EN",
          customTranslationEnPlaceholder: "I study Japanese.",
          addCustom: "Добавить",
          customHelp: "Вставь фразу. Приложение спрячет только изученные кандзи: {learned}.",
          customAdded: "Предложение добавлено.",
          customNoSentence: "Вставь японское предложение.",
          customNoKnown: "В этом предложении нет изученных кандзи.",
          customNoTiles: "Нужно минимум 4 изученных кандзи для вариантов.",
          customDuplicate: "Такое предложение уже есть.",
          customUpdated: "Предложение обновлено.",
          customDeleted: "Предложение удалено.",
          customEmpty: "Свои предложения появятся здесь.",
          customReady: "Доступно",
          customLocked: "Позже",
          updateCustom: "Сохранить",
          cancelEdit: "Отмена",
          editCustom: "Редактировать",
          deleteCustom: "Удалить",
          customSource: "Своё",
          userSource: "USER",
          dynamicSource: "JSON"
        }
      : {
          customTitle: "Custom sentence",
          customCount: "Custom: {count}",
          customSentence: "Japanese sentence",
          customSentencePlaceholder: "私は日本語を勉強します。",
          customReading: "Hiragana reading",
          customReadingPlaceholder: "わたしは にほんごを べんきょうします。",
          customTranslationRu: "Translation RU",
          customTranslationRuPlaceholder: "Я изучаю японский.",
          customTranslationEn: "Translation EN",
          customTranslationEnPlaceholder: "I study Japanese.",
          addCustom: "Add",
          customHelp: "Paste a phrase. The app will hide only learned kanji: {learned}.",
          customAdded: "Sentence added.",
          customNoSentence: "Paste a Japanese sentence.",
          customNoKnown: "No learned kanji found in this sentence.",
          customNoTiles: "You need at least 4 learned kanji for tile choices.",
          customDuplicate: "This sentence already exists.",
          customUpdated: "Sentence updated.",
          customDeleted: "Sentence deleted.",
          customEmpty: "Your sentences will appear here.",
          customReady: "Ready",
          customLocked: "Later",
          updateCustom: "Save",
          cancelEdit: "Cancel",
          editCustom: "Edit",
          deleteCustom: "Delete",
          customSource: "Custom",
          userSource: "USER",
          dynamicSource: "JSON"
        };
  }

  function localizedSentenceTranslation(exercise) {
    return lang() === "en" ? exercise.translationEn || exercise.translationRu || "" : exercise.translationRu || exercise.translationEn || "";
  }

  function allSentenceExercises(learned = getLearnedSentenceCards()) {
    const custom = customSentenceExercises(learned);
    const dynamic = buildDynamicSentenceExercises(learned);
    const seen = new Set();
    return [...custom, ...dynamic, ...state.sentenceExercises].filter((exercise) => {
      if (!exercise?.id || seen.has(exercise.id)) return false;
      seen.add(exercise.id);
      return true;
    });
  }

  function customSentenceExercises(learned = getLearnedSentenceCards()) {
    const practice = sentencePracticeProgress();
    return (practice.customSentences || [])
      .map((item) => customSentenceToExercise(item, learned))
      .filter(Boolean);
  }

  function customSentenceToExercise(item, learned = getLearnedSentenceCards()) {
    if (!item?.jp) return null;
    return createSentenceExerciseFromText({
      id: item.id,
      jlpt: bestJlptForCustomSentence(item.jp, learned),
      sentence: item.jp,
      reading: item.hiragana || autoSentenceReading(item.jp),
      translationRu: item.ru || "",
      translationEn: item.en || "",
      source: "user"
    }, learned, { maxBlanks: 3, maxBlankChars: 5 });
  }

  function renderSentenceLine(exercise, selectedTiles, wrongIndexes) {
    const blanks = exercise.blanks || [];
    const parts = String(exercise.sentence || "").split("___");
    let selectedOffset = 0;
    return parts.map((part, index) => {
      const blank = blanks[index];
      if (!blank) return escapeHtml(part);
      const slots = blank.answer || [];
      const slotHtml = slots.map((_, slotIndex) => {
        const globalIndex = selectedOffset + slotIndex;
        const tile = selectedTiles[globalIndex];
        const wrong = wrongIndexes.includes(globalIndex);
        return `<span class="sentence-slot ${tile ? "is-filled" : ""} ${wrong ? "is-wrong" : ""}">${tile ? escapeHtml(tile.kanji) : ""}</span>`;
      }).join("");
      selectedOffset += slots.length;
      return `${escapeHtml(part)}<span class="sentence-blank">${slotHtml}</span>`;
    }).join("");
  }

  function ensureSentencePractice(available = getAvailableSentenceExercises(), learned = getLearnedSentenceCards()) {
    const practice = sentencePracticeProgress();
    const validIds = new Set(available.map((exercise) => exercise.id));
    if (!validIds.has(practice.activeId)) resetSentencePractice(chooseSentenceExercise(available)?.id || null);
    const exercise = available.find((item) => item.id === state.progress.sentencePractice.activeId) || available[0];
    if (!exercise) return null;

    const answerFlat = flatSentenceAnswer(exercise);
    if (!state.progress.sentencePractice.tileKeys?.length) {
      state.progress.sentencePractice.tileKeys = buildSentenceTiles(exercise, learned).map(sentenceTileKey);
    }

    let tiles = state.progress.sentencePractice.tileKeys.map(parseSentenceTileKey).filter(Boolean);
    const hasEveryAnswer = () => answerFlat.every((answer) => tiles.some((tile) => tile.kanji === answer.kanji));
    if (tiles.length < Math.max(4, answerFlat.length) || !hasEveryAnswer()) {
      tiles = buildSentenceTiles(exercise, learned);
      state.progress.sentencePractice.tileKeys = tiles.map(sentenceTileKey);
      state.progress.sentencePractice.selected = [];
      state.progress.sentencePractice.checked = false;
      state.progress.sentencePractice.result = null;
    }

    state.progress.sentencePractice.selected = (state.progress.sentencePractice.selected || [])
      .filter((index, position, items) => Number.isInteger(index) && index >= 0 && index < tiles.length && items.indexOf(index) === position)
      .slice(0, answerFlat.length);

    const selectedTiles = state.progress.sentencePractice.selected.map((index) => tiles[index]).filter(Boolean);
    const wrongIndexes = state.progress.sentencePractice.checked && state.progress.sentencePractice.result
      ? state.progress.sentencePractice.result.wrongIndexes || []
      : [];

    return {
      exercise,
      tiles,
      selectedTiles,
      answerFlat,
      wrongIndexes,
      complete: Boolean(state.progress.sentencePractice.checked && state.progress.sentencePractice.result?.correct),
      awarded: Boolean(state.progress.sentencePractice.completed?.[exercise.id])
    };
  }

  function sentencePracticeProgress() {
    state.progress.sentencePractice = mergeSentencePractice(defaultProgress().sentencePractice, state.progress.sentencePractice || {});
    return state.progress.sentencePractice;
  }

  function resetSentencePractice(activeId) {
    state.progress.sentencePractice = {
      ...sentencePracticeProgress(),
      activeId,
      selected: [],
      checked: false,
      result: null,
      tileKeys: []
    };
    const exercise = allSentenceExercises(getLearnedSentenceCards()).find((item) => item.id === activeId);
    if (exercise) rememberSentenceExercise(exercise);
  }

  function getLearnedSentenceCards() {
    return state.cards.filter((card) => {
      const lesson = state.lessons.find((item) => item.id === card.lessonId);
      if (lesson && !isLessonUnlocked(lesson)) return false;
      const progress = getCardProgress(card.id);
      return progress.state !== "New" || progress.reviewCount > 0 || progress.lastReview || state.progress.lessonCompletions[card.lessonId];
    });
  }

  function getAvailableSentenceExercises(learned = getLearnedSentenceCards()) {
    const learnedKanji = new Set(learned.map((card) => card.kanji));
    return allSentenceExercises(learned).filter((exercise) => {
      const answer = flatSentenceAnswer(exercise);
      if (!answer.length || answer.some((item) => !learnedKanji.has(item.kanji))) return false;
      return buildSentenceTiles(exercise, learned).length >= Math.max(4, answer.length);
    });
  }

  function flatSentenceAnswer(exercise) {
    return (exercise.blanks || []).flatMap((blank) => (blank.answer || []).map((kanji, index) => ({
      kanji,
      reading: blank.reading?.[index] || ""
    })));
  }

  function sentenceAnswerKey(exercise) {
    return flatSentenceAnswer(exercise).map((item) => item.kanji).join("");
  }

  function buildSentenceTiles(exercise, learned) {
    const answer = flatSentenceAnswer(exercise);
    const answerKanji = new Set(answer.map((item) => item.kanji));
    const learnedKanji = new Set(learned.map((card) => card.kanji));
    const preferred = new Map();
    [...(exercise.tiles || []), ...answer].forEach((tile) => {
      if (tile?.kanji && tile?.reading) preferred.set(tile.kanji, tile.reading);
    });
    const answerTiles = answer.map((tile) => ({ kanji: tile.kanji, reading: tile.reading || preferred.get(tile.kanji) || sentenceReadingFromCard(tile.kanji) }));
    const exerciseDistractors = (exercise.tiles || [])
      .filter((tile) => tile?.kanji && !answerKanji.has(tile.kanji) && learnedKanji.has(tile.kanji))
      .map((tile) => ({ kanji: tile.kanji, reading: tile.reading || sentenceReadingFromCard(tile.kanji) }))
      .filter((tile, index, items) => items.findIndex((item) => item.kanji === tile.kanji) === index);
    const learnedDistractors = learned
      .filter((card) => card.kanji && !answerKanji.has(card.kanji))
      .map((card) => ({ kanji: card.kanji, reading: preferred.get(card.kanji) || sentenceReadingFromCard(card.kanji, card) }))
      .filter((tile, index, items) => items.findIndex((item) => item.kanji === tile.kanji) === index)
      .sort((a, b) => stableHash(`${exercise.id}:${a.kanji}`) - stableHash(`${exercise.id}:${b.kanji}`));
    const distractors = [...exerciseDistractors, ...learnedDistractors]
      .filter((tile) => !answerKanji.has(tile.kanji))
      .filter((tile, index, items) => items.findIndex((item) => item.kanji === tile.kanji) === index);
    const targetCount = Math.min(Math.max(6, answerTiles.length + 2), answerTiles.length + distractors.length);
    return shuffleStable([...answerTiles, ...distractors.slice(0, targetCount - answerTiles.length)], exercise.id);
  }

  function buildDynamicSentenceExercises(learned) {
    if (!learned.length) return [];
    const learnedKanji = new Set(learned.map((card) => card.kanji));
    const seenWords = new Set();
    const exercises = [];
    const examples = learned.flatMap((card) => (card.examples || []).map((example) => ({ ...example, card })));

    examples.forEach((example, index) => {
      const word = normalizeSentenceText(example.word || "");
      if (!word || seenWords.has(word) || !containsKanji(word)) return;
      if (extractKanjiChars(word).some((kanji) => !learnedKanji.has(kanji))) return;
      seenWords.add(word);
      const reading = toHiragana(example.reading || autoSentenceReading(word));
      const translation = example.translation || word;
      const templates = [
        {
          sentence: `今日は${word}をアプリで見ます。`,
          reading: `きょうは ${reading}を あぷりで みます。`,
          translationRu: `Сегодня я смотрю в приложении: ${translation}.`,
          translationEn: `Today I check ${word} in an app.`
        },
        {
          sentence: `駅で${word}について話します。`,
          reading: `えきで ${reading}について はなします。`,
          translationRu: `На станции говорю про: ${translation}.`,
          translationEn: `At the station, I talk about ${word}.`
        },
        {
          sentence: `メモに${word}を書きます。`,
          reading: `めもに ${reading}を かきます。`,
          translationRu: `Я записываю в заметку: ${translation}.`,
          translationEn: `I write ${word} in a memo.`
        }
      ];
      const template = templates[index % templates.length];
      const exercise = createSentenceExerciseFromText({
        id: `sentence-json-${stableHash(`${word}:${template.sentence}`).toString(36)}`,
        jlpt: example.card?.jlpt || "N5",
        sentence: template.sentence,
        reading: template.reading,
        translationRu: template.translationRu,
        translationEn: template.translationEn,
        source: "dynamic"
      }, learned, { maxBlanks: 2, maxBlankChars: 4 });
      if (exercise) exercises.push(exercise);
    });

    return exercises.slice(0, 160);
  }

  function addCustomSentenceExercise() {
    const practice = sentencePracticeProgress();
    const labels = { ...sentencePracticeLabels(), ...sentencePracticeCustomLabels() };
    const draft = normalizeCustomSentenceDraft(readCustomSentenceDraftFromDom() || practice.customDraft || {});
    const learned = getLearnedSentenceCards();
    const jp = cleanSentenceField(draft.jp);
    if (!jp) {
      setCustomSentenceMessage(labels.customNoSentence, "error");
      return;
    }

    const editingId = practice.customEditingId || null;
    const duplicate = hasDuplicateCustomSentence(jp, editingId);
    if (duplicate) {
      setCustomSentenceMessage(labels.customDuplicate, "error");
      return;
    }

    const livePractice = sentencePracticeProgress();
    const item = {
      id: editingId || `custom_${Date.now().toString(36)}_${stableHash(jp).toString(36)}`,
      jp,
      hiragana: toHiragana(cleanSentenceField(draft.hiragana) || autoSentenceReading(jp)),
      ru: cleanSentenceField(draft.ru),
      en: cleanSentenceField(draft.en),
      source: "user"
    };
    const existingIndex = (livePractice.customSentences || []).findIndex((sentence) => sentence.id === item.id);
    if (existingIndex >= 0) {
      livePractice.customSentences[existingIndex] = item;
    } else {
      livePractice.customSentences = [item, ...(livePractice.customSentences || [])].slice(0, 160);
    }
    livePractice.customDraft = { jp: "", hiragana: "", ru: "", en: "" };
    livePractice.customEditingId = null;
    setCustomSentenceMessage(editingId ? labels.customUpdated : labels.customAdded, "success", false);
    const exercise = customSentenceToExercise(item, learned);
    if (exercise && buildSentenceTiles(exercise, learned).length >= Math.max(4, flatSentenceAnswer(exercise).length)) {
      resetSentencePractice(exercise.id);
      state.progress.sentencePractice.tileKeys = buildSentenceTiles(exercise, learned).map(sentenceTileKey);
    }
    saveProgress();
    render();
  }

  function readCustomSentenceDraftFromDom() {
    const root = document.querySelector(".sentence-builder");
    if (!root) return null;
    const read = (field) => root.querySelector(`[data-sentence-draft="${field}"]`)?.value || "";
    return {
      jp: read("jp"),
      hiragana: read("hiragana"),
      ru: read("ru"),
      en: read("en")
    };
  }

  function editCustomSentence(id) {
    const practice = sentencePracticeProgress();
    const item = (practice.customSentences || []).find((sentence) => sentence.id === id);
    if (!item) return;
    practice.customEditingId = item.id;
    practice.customDraft = {
      jp: item.jp || "",
      hiragana: item.hiragana || "",
      ru: item.ru || "",
      en: item.en || ""
    };
    practice.customMessage = "";
    practice.customStatus = "";
    saveProgress();
    render();
  }

  function deleteCustomSentence(id) {
    const practice = sentencePracticeProgress();
    const labels = { ...sentencePracticeLabels(), ...sentencePracticeCustomLabels() };
    const before = (practice.customSentences || []).length;
    practice.customSentences = (practice.customSentences || []).filter((sentence) => sentence.id !== id);
    if (practice.customSentences.length === before) return;
    if (practice.customEditingId === id) {
      practice.customEditingId = null;
      practice.customDraft = { jp: "", hiragana: "", ru: "", en: "" };
    }
    if (practice.completed?.[id]) delete practice.completed[id];
    practice.recentIds = (practice.recentIds || []).filter((recentId) => recentId !== id);
    if (practice.activeId === id) {
      const learned = getLearnedSentenceCards();
      const next = chooseSentenceExercise(getAvailableSentenceExercises(learned));
      resetSentencePractice(next?.id || null);
    }
    setCustomSentenceMessage(labels.customDeleted, "success", false);
    saveProgress();
    render();
  }

  function cancelCustomSentenceEdit() {
    const practice = sentencePracticeProgress();
    practice.customEditingId = null;
    practice.customDraft = { jp: "", hiragana: "", ru: "", en: "" };
    practice.customMessage = "";
    practice.customStatus = "";
    saveProgress();
    render();
  }

  function hasDuplicateCustomSentence(jp, ignoreId = null) {
    const key = normalizeSentenceText(jp);
    const practice = sentencePracticeProgress();
    if ((practice.customSentences || []).some((item) => item.id !== ignoreId && normalizeSentenceText(item.jp) === key)) {
      return true;
    }
    return state.sentenceExercises.some((exercise) => normalizeSentenceText(restoreSentenceFromExercise(exercise)) === key);
  }

  function setCustomSentenceMessage(message, status, shouldRender = true) {
    const practice = sentencePracticeProgress();
    practice.customMessage = message;
    practice.customStatus = status;
    saveProgress();
    if (shouldRender) render();
  }

  function createSentenceExerciseFromText(input, learned, options = {}) {
    const sentence = normalizeSentenceText(input.sentence || "");
    const candidates = findLearnedKanjiSegments(sentence, learned)
      .filter((segment) => segment.answer.length <= Number(options.maxBlankChars || 5));
    if (!candidates.length) return null;
    const selected = selectSentenceBlankSegments(candidates, sentence, options);
    if (!selected.length) return null;

    let output = "";
    let cursor = 0;
    const blanks = selected.map((segment) => {
      output += sentence.slice(cursor, segment.start) + "___";
      cursor = segment.end;
      return {
        answer: segment.answer,
        reading: readingsForKanjiSegment(segment.text)
      };
    });
    output += sentence.slice(cursor);

    return {
      id: input.id,
      jlpt: input.jlpt || "N5",
      sentence: output,
      originalSentence: sentence,
      reading: toHiragana(input.reading || autoSentenceReading(sentence)),
      translationRu: input.translationRu || "",
      translationEn: input.translationEn || "",
      blanks,
      tiles: blanks.flatMap((blank) => blank.answer.map((kanji, index) => ({ kanji, reading: blank.reading[index] || sentenceReadingFromCard(kanji) }))),
      source: input.source || "custom",
      createdAt: input.createdAt
    };
  }

  function findLearnedKanjiSegments(sentence, learned) {
    const learnedMap = new Map(learned.map((card) => [card.kanji, card]));
    const segments = [];
    let current = null;
    Array.from(sentence).forEach((char, index) => {
      if (isKanjiChar(char) && learnedMap.has(char)) {
        current ||= { start: index, end: index, text: "", answer: [] };
        current.end = index + 1;
        current.text += char;
        current.answer.push(char);
        return;
      }
      if (current) segments.push(current);
      current = null;
    });
    if (current) segments.push(current);
    return segments;
  }

  function selectSentenceBlankSegments(candidates, sentence, options = {}) {
    const maxBlanks = Number(options.maxBlanks || 2);
    const maxChars = Number(options.maxBlankChars || 5);
    const middle = candidates.filter((segment) => segment.start > 0 && segment.end < sentence.length);
    const later = candidates.filter((segment) => segment.start > 0);
    const pool = (middle.length ? middle : later.length ? later : candidates)
      .slice()
      .sort((a, b) => {
        const lengthDiff = b.answer.length - a.answer.length;
        if (lengthDiff) return lengthDiff;
        return Math.abs(a.start - sentence.length / 2) - Math.abs(b.start - sentence.length / 2);
      });
    const selected = [];
    let totalChars = 0;
    pool.forEach((segment) => {
      if (selected.length >= maxBlanks || totalChars + segment.answer.length > maxChars) return;
      selected.push(segment);
      totalChars += segment.answer.length;
    });
    return selected.sort((a, b) => a.start - b.start);
  }

  function readingsForKanjiSegment(text) {
    const chars = Array.from(text);
    const wordReading = lookupExampleReading(text);
    if (wordReading) return splitReadingByKanji(chars, toHiragana(wordReading));
    return chars.map((kanji) => sentenceReadingFromCard(kanji));
  }

  function lookupExampleReading(word) {
    for (const card of state.cards) {
      for (const example of card.examples || []) {
        if (example.word === word && example.reading) return example.reading;
      }
    }
    return "";
  }

  function splitReadingByKanji(chars, reading) {
    const result = Array(chars.length).fill("");
    let rest = reading;
    for (let index = chars.length - 1; index > 0; index -= 1) {
      const candidates = kanjiReadingCandidates(chars[index]).sort((a, b) => b.length - a.length);
      const match = candidates.find((item) => item && rest.endsWith(item));
      if (match) {
        result[index] = match;
        rest = rest.slice(0, -match.length);
      }
    }
    result[0] = rest || sentenceReadingFromCard(chars[0]);
    return result.map((item, index) => item || sentenceReadingFromCard(chars[index]));
  }

  function kanjiReadingCandidates(kanji) {
    const card = state.cards.find((item) => item.kanji === kanji);
    const readings = [card?.hiragana, card?.onyomi, card?.kunyomi]
      .flatMap((value) => String(value || "").split(/[\/,;・、\s]+/))
      .map((value) => toHiragana(value.trim()))
      .filter(Boolean);
    return [...new Set(readings)];
  }

  function autoSentenceReading(sentence) {
    return toHiragana(Array.from(sentence).map((char) => isKanjiChar(char) ? sentenceReadingFromCard(char) : char).join(""));
  }

  function bestJlptForCustomSentence(sentence, learned) {
    const order = ["N5", "N4", "N3", "N2", "N1"];
    const learnedMap = new Map(learned.map((card) => [card.kanji, card]));
    const levels = extractKanjiChars(sentence).map((kanji) => learnedMap.get(kanji)?.jlpt).filter(Boolean);
    return levels.sort((a, b) => order.indexOf(b) - order.indexOf(a))[0] || "N5";
  }

  function normalizeSentenceText(value) {
    return String(value || "").replace(/\s+/g, "").trim();
  }

  function cleanSentenceField(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function restoreSentenceFromExercise(exercise) {
    if (!exercise) return "";
    if (exercise.jp) return exercise.jp;
    if (exercise.originalSentence) return exercise.originalSentence;
    let blankIndex = 0;
    return String(exercise.sentence || "").replace(/___/g, () => {
      const blank = exercise.blanks?.[blankIndex++];
      return (blank?.answer || []).join("");
    });
  }

  function containsKanji(value) {
    return Array.from(String(value || "")).some(isKanjiChar);
  }

  function extractKanjiChars(value) {
    return Array.from(String(value || "")).filter(isKanjiChar);
  }

  function isKanjiChar(char) {
    return /[\u3400-\u9fff]/u.test(char);
  }

  function toHiragana(value) {
    return String(value || "").replace(/[\u30a1-\u30f6]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0x60));
  }

  function sentenceReadingFromCard(kanji, card = state.cards.find((item) => item.kanji === kanji)) {
    const reading = card?.onyomi || card?.kunyomi || card?.hiragana || "";
    return String(reading).split("/")[0].trim() || "かな";
  }

  function sentenceTileKey(tile) {
    return `${tile.kanji}\t${tile.reading || ""}`;
  }

  function parseSentenceTileKey(key) {
    const [kanji, reading] = String(key || "").split("\t");
    return kanji ? { kanji, reading: reading || sentenceReadingFromCard(kanji) } : null;
  }

  function insertSentenceTile(index) {
    const prepared = ensureSentencePractice();
    if (!prepared || !Number.isInteger(index)) return;
    const labels = sentencePracticeLabels();
    const practice = state.progress.sentencePractice;
    if (practice.result?.correct || practice.selected.includes(index)) return;
    if (practice.selected.length >= prepared.answerFlat.length) {
      toast(labels.full);
      return;
    }
    practice.selected.push(index);
    practice.checked = false;
    practice.result = { correct: false, message: labels.inserted, wrongIndexes: [] };
    saveProgress();
    render();
  }

  function undoSentenceTile() {
    const practice = sentencePracticeProgress();
    if (!practice.selected.length || practice.result?.correct) return;
    practice.selected.pop();
    practice.checked = false;
    practice.result = { correct: false, message: sentencePracticeLabels().removed, wrongIndexes: [] };
    saveProgress();
    render();
  }

  function clearSentencePractice() {
    const practice = sentencePracticeProgress();
    if (practice.result?.correct) return;
    practice.selected = [];
    practice.checked = false;
    practice.result = null;
    saveProgress();
    render();
  }

  function checkSentencePractice() {
    const prepared = ensureSentencePractice();
    if (!prepared) return;
    const labels = sentencePracticeLabels();
    const practice = state.progress.sentencePractice;
    if (practice.selected.length < prepared.answerFlat.length) {
      practice.checked = true;
      practice.result = { correct: false, message: labels.fillAll, wrongIndexes: [] };
      saveProgress();
      render();
      return;
    }

    const wrongIndexes = prepared.answerFlat
      .map((answer, index) => prepared.selectedTiles[index]?.kanji === answer.kanji ? -1 : index)
      .filter((index) => index >= 0);
    const correct = wrongIndexes.length === 0;
    practice.checked = true;
    practice.attempts = (practice.attempts || 0) + 1;
    practice.result = {
      correct,
      wrongIndexes,
      message: correct ? labels.correct : labels.wrong
    };

    if (correct) {
      awardSentencePractice(prepared.exercise);
      adjustEvaRelationship({ trust: 0.8, curiosity: 0.5, discipline: 0.4 }, "sentence_correct");
      dispatchEvaEvent("sentence_complete", { exerciseId: prepared.exercise.id, source: prepared.exercise.source || "builtin" });
      playTone("ok");
    } else {
      state.progress.totalWrong += 1;
      state.progress.correctCombo = 0;
      adjustEvaRelationship({ discipline: -0.6, curiosity: 0.2 }, "sentence_wrong");
      dispatchEvaEvent("answer_wrong", { exerciseId: prepared.exercise.id, mode: "sentence" });
      const today = todayStats();
      today.mistakes += 1;
      state.progress.daily[todayKey()] = today;
      playTone("again");
    }

    saveProgress();
    render();
  }

  function awardSentencePractice(exercise) {
    const practice = sentencePracticeProgress();
    if (practice.completed[exercise.id]) return;
    const rewards = state.rewards?.rewards || {};
    const xp = rewards.sentencePracticeXp || sentenceRewardFallback.xp;
    const coins = rewards.sentencePracticeCoins || sentenceRewardFallback.coins;
    practice.completed[exercise.id] = new Date().toISOString();
    state.progress.totalCorrect += 1;
    state.progress.correctCombo += 1;
    state.progress.bestCorrectCombo = Math.max(state.progress.bestCorrectCombo, state.progress.correctCombo);
    const today = todayStats();
    today.reviews += 1;
    today.minutes = round((today.minutes || 0) + 0.8, 1);
    state.progress.daily[todayKey()] = today;
    addReward(xp, coins, `sentence:${exercise.id}`);
    adjustEvaRelationship({ trust: 0.8, curiosity: 0.7 }, "sentence_complete");
    updateStreak();
    checkDailyGoal();
    evaluateAchievements();
  }

  function nextSentencePractice() {
    const learned = getLearnedSentenceCards();
    const available = getAvailableSentenceExercises(learned);
    if (!available.length) return;
    const currentId = state.progress.sentencePractice?.activeId;
    const current = available.find((exercise) => exercise.id === currentId);
    if (current) rememberSentenceExercise(current);
    const next = chooseSentenceExercise(available, { excludeCurrent: true, preferUncompleted: true });
    resetSentencePractice(next.id);
    state.progress.sentencePractice.tileKeys = buildSentenceTiles(next, learned).map(sentenceTileKey);
    saveProgress();
    render();
  }

  function chooseSentenceExercise(available, options = {}) {
    if (!available.length) return null;
    const practice = sentencePracticeProgress();
    const currentId = practice.activeId;
    const recentIds = new Set(practice.recentIds || []);
    const recentAnswers = new Set(practice.recentAnswers || []);
    const isNotCurrent = (exercise) => !options.excludeCurrent || available.length === 1 || exercise.id !== currentId;
    const isUncompleted = (exercise) => !options.preferUncompleted || !practice.completed?.[exercise.id];
    const hasFreshAnswer = (exercise) => !recentAnswers.has(sentenceAnswerKey(exercise));
    const hasFreshId = (exercise) => !recentIds.has(exercise.id);
    const pools = [
      available.filter(isNotCurrent).filter(isUncompleted).filter(hasFreshAnswer).filter(hasFreshId),
      available.filter(isNotCurrent).filter(isUncompleted).filter(hasFreshAnswer),
      available.filter(isNotCurrent).filter(hasFreshAnswer).filter(hasFreshId),
      available.filter(isNotCurrent).filter(hasFreshId),
      available.filter(isNotCurrent),
      available
    ];
    const pool = pools.find((items) => items.length) || available;
    const challengePool = pool.filter(isChallengingSentenceExercise);
    const finalPool = challengePool.length ? challengePool : pool;
    return finalPool[Math.floor(Math.random() * finalPool.length)];
  }

  function isChallengingSentenceExercise(exercise) {
    return exercise.source === "user" || exercise.source === "custom" || exercise.source === "dynamic" || String(exercise.sentence || "").indexOf("___") > 0;
  }

  function rememberSentenceExercise(exercise) {
    const practice = sentencePracticeProgress();
    const answerKey = sentenceAnswerKey(exercise);
    practice.recentIds = [exercise.id, ...(practice.recentIds || []).filter((id) => id !== exercise.id)].slice(0, 14);
    practice.recentAnswers = [answerKey, ...(practice.recentAnswers || []).filter((key) => key !== answerKey)].slice(0, 8);
  }

  function stableHash(value) {
    return String(value).split("").reduce((hash, char) => ((hash << 5) - hash + char.charCodeAt(0)) | 0, 0) >>> 0;
  }

  function shuffleStable(items, seed) {
    return [...items].sort((a, b) => stableHash(`${seed}:${a.kanji}:${a.reading}`) - stableHash(`${seed}:${b.kanji}:${b.reading}`));
  }

  function renderKanjiAudioButton(card) {
    if (!canPlayKanjiAudio(card)) return "";
    return `
      <button class="audio-trigger" type="button" data-action="play-kanji-audio" data-id="${escapeAttr(card.id)}" aria-label="${escapeAttr(lang() === "ru" ? "Проиграть озвучку кандзи" : "Play kanji audio")}" title="${escapeAttr(lang() === "ru" ? "Озвучка" : "Audio")}">🔊</button>
    `;
  }

  function renderReadingGrid(card) {
    const readings = cardReadings(card);
    return `
      <div class="reading-row reading-split">
        ${renderReadingBox(readingLabel("onyomi"), readings.onyomi.kana, readings.onyomi.romaji)}
        ${renderReadingBox(readingLabel("kunyomi"), readings.kunyomi.kana, readings.kunyomi.romaji)}
      </div>
    `;
  }

  function renderReadingBox(label, kana, romaji) {
    return `
      <div class="reading-box">
        <span class="label">${escapeHtml(label)}</span>
        <strong>${escapeHtml(kana || "—")}</strong>
        <small>${escapeHtml(romaji || "—")}</small>
      </div>
    `;
  }

  function renderJlptLessonButton(card, className = "btn ghost") {
    const lesson = jlptLessonForCard(card);
    if (!lesson) return "";
    const label = lang() === "ru" ? "JLPT урок" : "JLPT lesson";
    return `<button class="${className}" type="button" data-action="open-jlpt-lesson" data-jlpt="${escapeAttr(lesson.jlpt)}">${escapeHtml(lesson.jlpt)} · ${escapeHtml(label)}</button>`;
  }

  function renderStudyCard(card) {
    const progress = getCardProgress(card.id);
    const visible = state.revealed;
    syncReadingCheckCard(card.id);
    return `
      <article class="study-card">
        <div class="study-topline">
          <div class="tag-row compact-tags">
            <span class="pill">${escapeHtml(lessonTitleById(card.lessonId))}</span>
            ${renderStatePill(progress.state)}
          </div>
          ${renderKanjiAudioButton(card)}
        </div>
        <div class="kanji-focus" aria-label="${escapeAttr(card.kanji)}">${escapeHtml(card.kanji)}</div>
        <h2>${visible ? escapeHtml(cardMeaning(card)) : escapeHtml(t("question"))}</h2>
        <p class="label">${escapeHtml(card.jlpt)} · ${card.strokes} ${escapeHtml(t("strokes"))} · ${escapeHtml(formatDue(progress.dueAt))}</p>
        ${visible ? renderAnswer(card) : `
          ${renderReadingCheck(card)}
          <div class="actions">
            <button class="btn primary" type="button" data-action="show-answer">${escapeHtml(t("showAnswer"))}</button>
            ${renderJlptLessonButton(card)}
            <button class="btn" type="button" data-action="open-card" data-id="${escapeAttr(card.id)}">典 ${escapeHtml(t("details"))}</button>
          </div>
        `}
      </article>
    `;
  }

  function renderReadingCheck(card) {
    const check = state.readingCheck.cardId === card.id ? state.readingCheck : { value: "", status: null, message: "" };
    const statusClass = check.status ? ` is-${check.status}` : "";
    const helper = check.message || (lang() === "ru"
      ? "Напиши любое чтение этого кандзи хираганой или катаканой."
      : "Type any reading for this kanji in hiragana or katakana.");
    return `
      <section class="reading-check${statusClass}" aria-live="polite">
        <label class="label" for="readingCheck-${escapeAttr(card.id)}">${escapeHtml(lang() === "ru" ? "Проверка чтения" : "Reading check")}</label>
        <div class="reading-check-row">
          <input id="readingCheck-${escapeAttr(card.id)}" data-reading-input data-id="${escapeAttr(card.id)}" type="text" inputmode="text" autocomplete="off" autocapitalize="off" spellcheck="false" value="${escapeAttr(check.value)}" placeholder="${escapeAttr(lang() === "ru" ? "Например: にち или ニチ" : "Example: にち or ニチ")}" />
          <button class="btn ghost" type="button" data-action="check-reading" data-id="${escapeAttr(card.id)}">${escapeHtml(lang() === "ru" ? "Проверить" : "Check")}</button>
        </div>
        <p>${escapeHtml(helper)}</p>
      </section>
    `;
  }

  function renderExampleItem(example) {
    return `
      <li class="example-item">
        <div class="example-main">
          <b>${escapeHtml(example.word)}</b>
          <span>${escapeHtml(example.reading)}</span>
          <span class="example-romaji">${escapeHtml(example.romaji)}</span>
        </div>
        <small class="example-translation">${escapeHtml(exampleTranslation(example))}</small>
      </li>
    `;
  }

  function renderAnswer(card) {
    return `
      <div class="answer-section">
        ${renderReadingGrid(card)}
        <strong>${escapeHtml(t("examples"))}</strong>
        <ul class="example-list">
          ${card.examples.map(renderExampleItem).join("")}
        </ul>
        <strong>${escapeHtml(t("apps"))}</strong>
        <p>${escapeHtml(cardInterface(card))}</p>
        <ul class="app-list">${card.apps.map((name) => `<li>${escapeHtml(name)}</li>`).join("")}</ul>
        <div class="actions compact-actions">
          ${renderJlptLessonButton(card)}
        </div>
        <div class="rating-grid srs-binary-grid">
          <button class="btn danger" type="button" data-action="rate" data-rating="forgot">${escapeHtml(srsButtonLabels().forgot)} <small>${escapeHtml(srsButtonLabels().forgotHint)}</small></button>
          <button class="btn success" type="button" data-action="rate" data-rating="remember">${escapeHtml(srsButtonLabels().remember)} <small>${escapeHtml(srsDecisionHint(card))}</small></button>
        </div>
      </div>
    `;
  }

  function renderStudySidePanel(card, queueCount) {
    const comboMascot = state.progress.correctCombo >= 3 ? "leya" : "eva";
    const category = comboMascot === "leya" ? "combo" : "welcome";
    return `
      <aside>
        ${renderMascotPanel(comboMascot, comboMascot === "leya" ? "focus" : "thinking", category)}
        <div class="mini-stat-row" style="margin-top:10px">
          ${renderMetric(t("review"), queueCount, "queue", progressWidth(queueCount, Math.max(state.cards.length, 1)))}
          ${renderMetric("Combo", state.progress.correctCombo, `${state.progress.bestCorrectCombo} best`, progressWidth(state.progress.correctCombo, 10))}
        </div>
        ${card ? `<article class="tool-panel profile-panel">
          <h3>${escapeHtml(t("hint"))} · Leya</h3>
          <p>${escapeHtml(kanjiHint(card.id).hint)}</p>
          <h3>${escapeHtml(t("mnemonic"))}</h3>
          <p>${escapeHtml(kanjiHint(card.id).mnemonic)}</p>
        </article>` : ""}
      </aside>
    `;
  }

  function renderLessonDone(lesson) {
    return `
      <article class="empty-state">
        <span class="kanji-char">済</span>
        <h2>${escapeHtml(dialogueText("eva", "lessonComplete"))}</h2>
        <p>${escapeHtml(lesson ? lessonTitle(lesson) : "")}</p>
        <div class="actions" style="justify-content:center">
          <button class="btn primary" type="button" data-action="route" data-route="review">↻ ${escapeHtml(t("review"))}</button>
          <button class="btn" type="button" data-action="route" data-route="dictionary">典 ${escapeHtml(t("dictionary"))}</button>
        </div>
      </article>
    `;
  }

  function renderNoReview() {
    return `
      <article class="empty-state">
        <span class="kanji-char">休</span>
        <h2>${escapeHtml(lang() === "ru" ? "Повторов сейчас нет" : "No reviews right now")}</h2>
        <p>${escapeHtml(dialogueText("leya", "welcome"))}</p>
        <button class="btn primary" type="button" data-action="route" data-route="learn">▶ ${escapeHtml(t("learn"))}</button>
      </article>
    `;
  }

  function renderDictionary() {
    const cards = getFilteredCards();
    const visibleCount = Math.max(DICTIONARY_INITIAL_LIMIT, Number(state.dictionaryVisibleCount || DICTIONARY_INITIAL_LIMIT));
    const visibleCards = cards.slice(0, visibleCount);
    const hasMore = visibleCards.length < cards.length;
    const favoriteCount = state.cards.filter((card) => Boolean(state.progress.favorites[card.id])).length;
    const jlptOptions = ["all", ...new Set(state.cards.map((card) => card.jlpt))];
    const radicals = ["all", ...new Set(state.cards.map((card) => cardMeta(card.id).radical).filter(Boolean))];
    const renderedLabel = lang() === "ru"
      ? `Показано ${visibleCards.length} из ${cards.length}`
      : `Showing ${visibleCards.length} of ${cards.length}`;
    const moreLabel = lang() === "ru" ? "Показать ещё" : "Show more";
    return `
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${escapeHtml(t("dictionary"))}</h1>
            <p>${escapeHtml(renderedLabel)} · ${cards.length}/${state.cards.length}</p>
          </div>
        </div>
        ${renderDictionaryTabs(favoriteCount)}
        <div class="filters">
          <div class="field">
            <label for="dictionarySearch">${escapeHtml(t("search"))}</label>
            <input id="dictionarySearch" data-filter="query" type="search" value="${escapeAttr(state.filters.query)}" placeholder="日, にち, sun" autocomplete="off" />
          </div>
          <div class="field">
            <label for="jlptFilter">JLPT</label>
            <select id="jlptFilter" data-filter="jlpt">
              ${jlptOptions.map((value) => `<option value="${escapeAttr(value)}" ${selected(value, state.filters.jlpt)}>${value === "all" ? escapeHtml(t("all")) : escapeHtml(value)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="strokeFilter">${escapeHtml(t("strokes"))}</label>
            <select id="strokeFilter" data-filter="strokes">
              ${[["all", t("all")], ["1-4", "1-4"], ["5-8", "5-8"], ["9-12", "9-12"], ["13+", "13+"]].map(([value, label]) => `<option value="${value}" ${selected(value, state.filters.strokes)}>${escapeHtml(label)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="radicalFilter">${escapeHtml(t("radical"))}</label>
            <select id="radicalFilter" data-filter="radical">
              ${radicals.map((value) => `<option value="${escapeAttr(value)}" ${selected(value, state.filters.radical)}>${value === "all" ? escapeHtml(t("all")) : escapeHtml(value)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="favoriteFilter">${escapeHtml(t("favorites"))}</label>
            <select id="favoriteFilter" data-filter="favorites">
              <option value="all" ${selected("all", state.filters.favorites)}>${escapeHtml(t("all"))}</option>
              <option value="yes" ${selected("yes", state.filters.favorites)}>★</option>
            </select>
          </div>
        </div>
        <div class="dictionary-grid" style="margin-top:12px">${visibleCards.map(renderDictionaryTile).join("") || renderDictionaryEmpty()}</div>
        ${hasMore ? `
          <div class="dictionary-load-more">
            <span>${escapeHtml(renderedLabel)}</span>
            <button class="btn primary" type="button" data-action="dictionary-load-more">${escapeHtml(moreLabel)}</button>
          </div>
        ` : ""}
      </section>
    `;
  }

  function renderDictionaryTabs(favoriteCount) {
    const favoritesActive = state.filters.favorites === "yes";
    const allLabel = lang() === "ru" ? "Все кандзи" : "All kanji";
    const favoritesLabel = lang() === "ru" ? "Избранные" : "Favorites";
    return `
      <div class="dictionary-tabs" role="tablist" aria-label="${escapeAttr(t("dictionary"))}">
        <button class="btn ${favoritesActive ? "" : "is-active"}" type="button" role="tab" aria-selected="${favoritesActive ? "false" : "true"}" data-action="dictionary-favorites-tab" data-favorites="all">
          ${escapeHtml(allLabel)}
          <span class="dictionary-tab-count">${state.cards.length}</span>
        </button>
        <button class="btn ${favoritesActive ? "is-active" : ""}" type="button" role="tab" aria-selected="${favoritesActive ? "true" : "false"}" data-action="dictionary-favorites-tab" data-favorites="yes">
          ★ ${escapeHtml(favoritesLabel)}
          <span class="dictionary-tab-count">${favoriteCount}</span>
        </button>
      </div>
    `;
  }

  function renderDictionaryTile(card) {
    const progress = getCardProgress(card.id);
    const meta = cardMeta(card.id);
    const favorite = Boolean(state.progress.favorites[card.id]);
    return `
      <button class="kanji-tile" type="button" data-action="open-card" data-id="${escapeAttr(card.id)}">
        ${renderKanjiLine(card)}
        <div class="tag-row">
          ${renderStatePill(progress.state)}
          <span class="pill">${escapeHtml(card.jlpt)}</span>
          <span class="pill">${card.strokes} ${escapeHtml(t("strokes"))}</span>
          <span class="pill">${escapeHtml(t("radical"))}: ${escapeHtml(meta.radical || "-")}</span>
          <span class="pill">${escapeHtml(t("learnedStatus"))}: ${escapeHtml(progress.stage)}</span>
          <span class="pill">${favorite ? "★" : "☆"}</span>
        </div>
      </button>
    `;
  }

  function renderKanjiLine(card) {
    return `
      <span class="kanji-line">
        <span class="kanji-char">${escapeHtml(card.kanji)}</span>
        <span>
          <h3>${escapeHtml(cardMeaning(card))}</h3>
          <p>${escapeHtml(readingSummaryText(card))}</p>
          <span class="label">${escapeHtml(lessonTitleById(card.lessonId))}</span>
        </span>
      </span>
    `;
  }

  function renderDictionaryEmpty() {
    const favorites = state.filters.favorites === "yes";
    const title = favorites
      ? (lang() === "ru" ? "В избранном пока пусто" : "No favorites yet")
      : (lang() === "ru" ? "Ничего не найдено" : "Nothing found");
    const text = favorites
      ? (lang() === "ru" ? "Открой кандзи и нажми звездочку, чтобы он появился здесь." : "Open a kanji and tap the star to keep it here.")
      : "";
    return `<article class="empty-state"><span class="kanji-char">無</span><h2>${escapeHtml(title)}</h2>${text ? `<p>${escapeHtml(text)}</p>` : ""}</article>`;
  }

  function renderKanjiPage() {
    const card = findCard(state.kanjiPageId || readKanjiRouteId());
    if (!card) {
      return `
        <section class="page">
          <article class="empty-state">
            <span class="kanji-char">無</span>
            <h1>${escapeHtml(lang() === "ru" ? "Кандзи не найден" : "Kanji not found")}</h1>
            <p>${escapeHtml(lang() === "ru" ? "Открой словарь и выбери карточку заново." : "Open the dictionary and choose a card again.")}</p>
            <button class="btn primary" type="button" data-action="route" data-route="dictionary">典 ${escapeHtml(t("dictionary"))}</button>
          </article>
        </section>
      `;
    }

    const progress = getCardProgress(card.id);
    const meta = cardMeta(card.id);
    const favorite = Boolean(state.progress.favorites[card.id]);
    const semanticPath = kanjiSemanticPagePath(card, lang());
    const sourceItem = sourceKanjiPageItem(card);
    const preciseStroke = hasPreciseStrokeData(card);
    return `
      <section class="page kanji-page">
        <div class="section-head kanji-page-head">
          <div>
            <button class="btn ghost" type="button" data-action="route" data-route="dictionary">← ${escapeHtml(t("dictionary"))}</button>
            <h1>${escapeHtml(sourceItem ? `${card.kanji} — ${sourcePrimaryMeaning(sourceItem)}` : card.kanji)}</h1>
            <p>${escapeHtml(sourceItem ? sourceEditorialIntro(sourceItem) : cardMeaning(card))}</p>
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="study-card" data-id="${escapeAttr(card.id)}">▶ ${escapeHtml(t("study"))}</button>
            <button class="btn" type="button" data-action="toggle-favorite" data-id="${escapeAttr(card.id)}">${favorite ? "★" : "☆"} ${escapeHtml(t("favorites"))}</button>
          </div>
        </div>

        <article class="kanji-profile-card">
          <div class="kanji-profile-hero">
            <div class="kanji-profile-char" aria-label="${escapeAttr(card.kanji)}">${escapeHtml(card.kanji)}</div>
            <div class="kanji-profile-summary">
              <div class="tag-row">
                ${renderStatePill(progress.state)}
                <span class="pill">${escapeHtml(card.jlpt)}</span>
                <span class="pill">${card.strokes} ${escapeHtml(t("strokes"))}</span>
                <span class="pill">${escapeHtml(t("radical"))}: ${escapeHtml(meta.radical || "-")} ${escapeHtml(localized(meta.radicalMeaning || {}))}</span>
                ${sourceItem ? `<span class="pill">Grade ${escapeHtml(sourceItem.kanjidic2.grade || "-")}</span><span class="pill">Freq ${escapeHtml(sourceItem.kanjidic2.freq || "-")}</span>` : ""}
              </div>
              <h2>${escapeHtml(cardMeaning(card))}</h2>
              <p>${escapeHtml(cardInterface(card))}</p>
              ${renderReadingGrid(card)}
              ${renderAudioPlayer(card)}
            </div>
          </div>
        </article>

        <div class="kanji-profile-grid">
          ${sourceItem ? renderSourceFactBlock(sourceItem) : ""}
          ${sourceItem ? renderSourceCommonWords(sourceItem) : ""}
          <article class="kanji-profile-card">
            <h2>${escapeHtml(t("examples"))}</h2>
            <ul class="example-list">${card.examples.map(renderExampleItem).join("") || `<li>${escapeHtml(lang() === "ru" ? "Примеры пока не добавлены." : "No examples yet.")}</li>`}</ul>
          </article>

          <article class="kanji-profile-card">
            <h2>${escapeHtml(lang() === "ru" ? "Предложения" : "Sentences")}</h2>
            ${sourceItem ? renderSourceSentences(sourceItem) : renderKanjiSentenceExamples(card)}
          </article>

          <article class="kanji-profile-card">
            <h2>${escapeHtml(t("strokeOrder"))}</h2>
            <p class="label">${escapeHtml(preciseStroke
              ? (lang() === "ru" ? "Есть точные SVG-штрихи KanjiVG для практики." : "Precise KanjiVG SVG stroke data is available for practice.")
              : (lang() === "ru" ? "Точного SVG-пути пока нет, доступен полупрозрачный шаблон." : "Precise SVG paths are not available yet; template mode is available."))}</p>
            <ol class="stroke-list">${normalizeStrokeDescriptions(card).map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
            <div class="actions compact-actions">
              <button class="btn primary" type="button" data-action="write-card" data-id="${escapeAttr(card.id)}">筆 ${escapeHtml(t("writing"))}</button>
              ${renderJlptLessonButton(card)}
            </div>
          </article>

          <article class="kanji-profile-card">
            <h2>${escapeHtml(t("apps"))}</h2>
            <p>${escapeHtml(cardInterface(card))}</p>
            <ul class="app-list">${card.apps.map((name) => `<li>${escapeHtml(name)}</li>`).join("")}</ul>
            ${sourceItem ? renderInterfaceMockups(sourceItem) : ""}
            <h3>${escapeHtml(lang() === "ru" ? "SEO-страница" : "SEO page")}</h3>
            <p class="label">${escapeHtml(lang() === "ru" ? "Статическая HTML-страница для поисковиков и превью." : "Static HTML page for search engines and link previews.")}</p>
            <a class="btn primary" href="${escapeAttr(semanticPath)}" target="_blank" rel="noopener">↗ ${escapeHtml(lang() === "ru" ? "Публичная страница" : "Public page")}</a>
          </article>
          ${sourceItem ? renderSourceEditorial(sourceItem) : ""}
        </div>
      </section>
    `;
  }

  function sourceKanjiPageItem(card) {
    return state.kanjiPageSources?.[card?.kanji] || null;
  }

  function sourcePrimaryMeaning(item) {
    return sourceLocalizedArray(item.meanings)[0] || item.literal;
  }

  function sourceLocalizedArray(value) {
    if (!value) return [];
    return value[lang()] || value.ru || value.en || [];
  }

  function sourceLocalized(value) {
    if (!value || typeof value !== "object") return String(value || "");
    return value[lang()] || value.ru || value.en || "";
  }

  function sourceEditorialIntro(item) {
    const editorial = item.editorial?.[lang()] || item.editorial?.ru || item.editorial?.en || {};
    return [editorial.why, editorial.firstSeen].filter(Boolean).join(" ");
  }

  function renderSourceFactBlock(item) {
    const facts = item.kanjidic2 || {};
    const unicode = facts.codepoints?.unicode || `U+${facts.codepoints?.ucs || ""}`;
    return `
      <article class="kanji-profile-card kanji-facts-card">
        <h2>${escapeHtml(lang() === "ru" ? "Факты KANJIDIC2" : "KANJIDIC2 facts")}</h2>
        <dl class="kanji-fact-grid">
          <div><dt>${escapeHtml(lang() === "ru" ? "Значения" : "Meanings")}</dt><dd>${escapeHtml(sourceLocalizedArray(item.meanings).join(", "))}</dd></div>
          <div><dt>Onyomi</dt><dd>${escapeHtml((item.readings?.onyomi || []).join(" / "))}</dd></div>
          <div><dt>Kunyomi</dt><dd>${escapeHtml((item.readings?.kunyomi || []).join(" / "))}</dd></div>
          <div><dt>JLPT</dt><dd>${escapeHtml(item.jlpt)} <small>${escapeHtml(sourceLocalized(item.modernJlptNote || {}))}</small></dd></div>
          <div><dt>${escapeHtml(t("strokes"))}</dt><dd>${escapeHtml(facts.strokeCount || "-")}</dd></div>
          <div><dt>${escapeHtml(t("radical"))}</dt><dd>${escapeHtml(`${facts.radical || "-"} ${facts.radicalLiteral || ""} ${sourceLocalized(facts.radicalName || {})}`)}</dd></div>
          <div><dt>Grade</dt><dd>${escapeHtml(facts.grade || "-")}</dd></div>
          <div><dt>Unicode</dt><dd>${escapeHtml(unicode)}</dd></div>
          <div><dt>Freq</dt><dd>${escapeHtml(facts.freq || "-")}</dd></div>
          <div><dt>${escapeHtml(lang() === "ru" ? "Варианты" : "Variants")}</dt><dd>${escapeHtml((item.variants || []).join(" / ") || "-")}</dd></div>
        </dl>
        <p class="source-note">${escapeHtml(facts.source || "KANJIDIC2 / EDRDG")}</p>
      </article>
    `;
  }

  function renderSourceCommonWords(item) {
    return `
      <article class="kanji-profile-card">
        <h2>${escapeHtml(lang() === "ru" ? "Полезные слова JMdict" : "Useful JMdict words")}</h2>
        <ul class="kanji-word-list">
          ${(item.commonWords || []).slice(0, 10).map((word) => `
            <li>
              <a href="${escapeAttr(wordPlannedPath(word))}">
                <b>${highlightKanji(word.surface, item.literal)}</b>
                <span>${escapeHtml(word.reading)} · ${escapeHtml(sourceLocalized(word.gloss || {}))}</span>
                <small>${escapeHtml(word.partOfSpeech || "")} · JMdict ${escapeHtml(word.jmdictSeq || "")}</small>
              </a>
            </li>
          `).join("")}
        </ul>
      </article>
    `;
  }

  function renderSourceSentences(item) {
    const sentences = filterSourceSentences(item);
    return `
      <ul class="kanji-sentence-list">
        ${sentences.map((sentence) => `
          <li>
            <strong>${highlightKanji(sentence.japanese, item.literal)}</strong>
            <small>${escapeHtml(sourceLocalized(sentence.translation || {}))}</small>
            <span class="source-note">${escapeHtml(`${sentence.sourceName || "Tatoeba"} #${sentence.sourceId}${sentence.author ? ` · ${sentence.author}` : ""}${sentence.license ? ` · ${sentence.license}` : ""}`)}</span>
          </li>
        `).join("")}
      </ul>
    `;
  }

  function filterSourceSentences(item) {
    const seen = new Set();
    const usefulWords = new Set((item.commonWords || []).map((word) => word.surface));
    return (item.sentences || [])
      .filter((sentence) => {
        const jp = sentence.japanese || "";
        if (!jp.includes(item.literal) || seen.has(jp)) return false;
        seen.add(jp);
        const compactLength = jp.replace(/[\s。、！？!?「」『』（）()・〜ー]/g, "").length;
        if (compactLength < 3 || compactLength > 44) return false;
        return true;
      })
      .sort((a, b) => Number(hasUsefulWord(b.japanese, usefulWords)) - Number(hasUsefulWord(a.japanese, usefulWords)))
      .slice(0, 8);
  }

  function hasUsefulWord(text, words) {
    return [...words].some((word) => text.includes(word));
  }

  function renderInterfaceMockups(item) {
    return `
      <h3>${escapeHtml(lang() === "ru" ? "В интерфейсах" : "In interfaces")}</h3>
      <div class="interface-mock-grid">
        ${(item.interfaceContexts || []).slice(0, 6).map((context) => `
          <article class="interface-mock-card ${escapeAttr(context.type || "card")}">
            <span>${escapeHtml(sourceLocalized(context.title || {}))}</span>
            <strong>${highlightKanji(context.japanese, item.literal)}</strong>
            <small>${escapeHtml(sourceLocalized(context.translation || {}))}</small>
          </article>
        `).join("")}
      </div>
    `;
  }

  function renderSourceEditorial(item) {
    const copy = item.editorial?.[lang()] || item.editorial?.ru || item.editorial?.en || {};
    const labels = lang() === "ru"
      ? ["Почему этот кандзи важен", "Частая путаница", "Где встретишь раньше всего", "На что обратить внимание"]
      : ["Why this kanji matters", "Common confusion", "Where you will meet it first", "What to watch"];
    const values = [copy.why, copy.confusion, copy.firstSeen, copy.focus];
    return `
      <article class="kanji-profile-card editorial-card">
        <h2>${escapeHtml(lang() === "ru" ? "Заметки Flash Kanji" : "Flash Kanji notes")}</h2>
        ${values.map((value, index) => value ? `<section><h3>${escapeHtml(labels[index])}</h3><p>${escapeHtml(value)}</p></section>` : "").join("")}
      </article>
    `;
  }

  function wordPlannedPath(word) {
    return `../word/${encodeURIComponent(word.surface || "")}/`;
  }

  function highlightKanji(text, targetKanji) {
    const target = String(targetKanji || "");
    const source = String(text || "");
    if (!target) return escapeHtml(source);
    return source
      .split(target)
      .map(escapeHtml)
      .join(`<mark class="kanji-hit" data-kanji="${escapeAttr(target)}">${escapeHtml(target)}</mark>`);
  }

  function renderKanjiSentenceExamples(card) {
    const sentences = kanjiSentenceExamples(card);
    if (!sentences.length) {
      return `<p class="label">${escapeHtml(lang() === "ru" ? "Подходящие предложения появятся, когда база практики содержит этот кандзи." : "Matching sentences will appear when the practice database contains this kanji.")}</p>`;
    }
    return `
      <ul class="kanji-sentence-list">
        ${sentences.map((exercise) => `
          <li>
            <strong>${renderSentenceWithAnswers(exercise)}</strong>
            <span>${escapeHtml(exerciseReadingText(exercise))}</span>
            <small>${escapeHtml(exerciseTranslationText(exercise))}</small>
          </li>
        `).join("")}
      </ul>
    `;
  }

  function kanjiSentenceExamples(card) {
    const target = card?.kanji || "";
    if (!target) return [];
    return (state.sentenceExercises || [])
      .filter((exercise) => {
        const sentence = exerciseSentenceText(exercise);
        const answers = (exercise.blanks || []).flatMap((blank) => blank.answer || []).join("");
        return sentence.includes(target) || answers.includes(target);
      })
      .slice(0, 6);
  }

  function exerciseSentenceText(exercise) {
    return exercise?.sentence || exercise?.jp || "";
  }

  function exerciseReadingText(exercise) {
    return exercise?.reading || exercise?.hiragana || "";
  }

  function exerciseTranslationText(exercise) {
    return lang() === "en"
      ? exercise?.translationEn || exercise?.en || exercise?.translationRu || exercise?.ru || ""
      : exercise?.translationRu || exercise?.ru || exercise?.translationEn || exercise?.en || "";
  }

  function renderSentenceWithAnswers(exercise) {
    let sentence = escapeHtml(exerciseSentenceText(exercise));
    const answers = (exercise?.blanks || []).map((blank) => (blank.answer || []).join(""));
    answers.forEach((answer) => {
      sentence = sentence.replace("___", `<mark>${escapeHtml(answer)}</mark>`);
    });
    return sentence;
  }

  function kanjiSemanticPagePath(card, pageLang = "ru") {
    return `../${pageLang === "en" ? "en" : "ru"}/kanji/${kanjiPublicSlug(card)}/`;
  }

  function kanjiPublicSlug(card) {
    const literal = String(card?.kanji || "");
    const codepoint = Array.from(literal).map((char) => `u${char.codePointAt(0).toString(16).padStart(4, "0")}`).join("-");
    const reading = String(card?.romaji || card?.onyomi_romaji || card?.kunyomi_romaji || "kanji")
      .toLowerCase()
      .split(/[\/,;|()\s]+/)
      .find((part) => /[a-z]/.test(part)) || "kanji";
    const slug = reading.replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "kanji";
    return `${codepoint || "kanji"}-${slug}`;
  }

  function renderWriting() {
    const card = findCard(state.activeCardId) || getTodayCards()[0] || state.cards[0];
    if (card) {
      state.activeCardId = card.id;
      state.activeLessonId = card.lessonId;
      state.writingStep = clamp(state.writingStep, 0, Math.max(0, writingStepCount(card) - 1));
    }
    const preciseStrokeData = hasPreciseStrokeData(card);
    const stepCount = writingStepCount(card);
    const stepLabel = lang() === "ru" ? "Шаг" : "Step";
    const practiceLabel = lang() === "ru" ? "Получилось" : "Got it";
    const sampleLabel = lang() === "ru" ? "Показать образец" : "Show sample";
    const modeLabel = preciseStrokeData
      ? (lang() === "ru" ? "Точные SVG-штрихи KanjiVG" : "Precise KanjiVG SVG strokes")
      : (lang() === "ru" ? "Fallback: шаблон без фейковых штрихов" : "Fallback: template without fake strokes");
    return `
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${escapeHtml(t("writingPractice"))}</h1>
            <p>${escapeHtml(card ? `${card.kanji} · ${cardMeaning(card)}` : "")}</p>
          </div>
        </div>
        <div class="writing-layout">
          <article class="writing-card" data-section="writing-demo">
            <div class="kanji-focus writing-focus">${escapeHtml(card?.kanji || "文")}</div>
            ${card ? renderReadingGrid(card) : ""}
            ${card ? `<div class="actions"><button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${escapeAttr(card.id)}">🔊 ${escapeHtml(t("audio"))}</button></div>` : ""}
            <div class="stroke-demo">
              <canvas id="strokeCanvas" width="520" height="280" aria-label="stroke order animation"></canvas>
            </div>
            <div class="writing-step-panel">
              <div class="writing-step-head">
                <span class="pill" id="writingStepCounter">${stepLabel} ${state.writingStep + 1}/${stepCount}</span>
                <span class="label">${escapeHtml(normalizeStrokeDescriptions(card)[state.writingStep] || "")}</span>
                <span class="writing-mode-note">${escapeHtml(modeLabel)}</span>
              </div>
              <div class="writing-step-actions">
                <button class="btn" type="button" data-action="writing-step-prev">←</button>
                <button class="btn primary" type="button" data-action="play-writing-step">${escapeHtml(sampleLabel)}</button>
                <button class="btn" type="button" data-action="writing-step-next">→</button>
              </div>
            </div>
            <div class="actions">
              <button class="btn primary" type="button" data-action="replay-writing">${escapeHtml(t("replay"))}</button>
            </div>
          </article>
          <article class="writing-card">
            <h3>${escapeHtml(t("strokeOrder"))}</h3>
            ${card ? renderWritingStepList(card) : ""}
            <h3>${escapeHtml(t("hint"))}</h3>
            <p>${escapeHtml(kanjiHint(card?.id).hint)}</p>
            <h3>${escapeHtml(t("mnemonic"))}</h3>
            <p>${escapeHtml(kanjiHint(card?.id).mnemonic)}</p>
          </article>
          <article class="writing-card writing-practice" data-section="writing-canvas">
            <h3>${escapeHtml(lang() === "ru" ? "Поле письма" : "Writing area")}</h3>
            <div class="writing-practice-head">
              <span class="pill" id="writingStrokeCounter">0/${stepCount}</span>
            </div>
            <div class="writing-score" id="writingScore">
              <span>0%</span>
              <i style="width:0%"></i>
            </div>
            <canvas id="practiceCanvas" width="520" height="360" aria-label="writing canvas"></canvas>
            <div class="actions writing-practice-actions">
              <button class="btn primary" type="button" data-action="check-writing">${escapeHtml(practiceLabel)}</button>
              <button class="btn" type="button" data-action="undo-writing">${escapeHtml(lang() === "ru" ? "Отменить черту" : "Undo stroke")}</button>
              <button class="btn" type="button" data-action="clear-writing">${escapeHtml(t("clear"))}</button>
              <button class="btn" type="button" data-action="replay-writing">${escapeHtml(t("replay"))}</button>
            </div>
            <div class="writing-feedback" id="writingFeedback">${escapeHtml(lang() === "ru" ? "Напиши кандзи поверх образца и нажми «Получилось» для самопроверки." : "Write over the guide and tap “Got it” for self-check.")}</div>
          </article>
        </div>
      </section>
    `;
  }

  function renderWritingStepList(card) {
    const steps = normalizeStrokeDescriptions(card);
    return `
      <ol class="stroke-list writing-guide-list">
        ${steps.map((step, index) => `
          <li class="${index === state.writingStep ? "is-active" : ""}">
            <button type="button" data-action="select-writing-step" data-index="${index}">
              <b>${index + 1}</b>
              <span>${escapeHtml(step)}</span>
            </button>
          </li>
        `).join("")}
      </ol>
    `;
  }

  function renderDetailModal() {
    if (!state.detailCardId) return "";
    const card = findCard(state.detailCardId);
    if (!card) return "";
    const progress = getCardProgress(card.id);
    const meta = cardMeta(card.id);
    const favorite = Boolean(state.progress.favorites[card.id]);
    return `
      <div class="detail-backdrop">
        <article class="detail-sheet" role="dialog" aria-modal="true">
          <div class="detail-title">
            <span class="kanji-char">${escapeHtml(card.kanji)}</span>
            <div>
              <span class="pill">${escapeHtml(card.jlpt)}</span> ${renderStatePill(progress.state)}
              <h2>${escapeHtml(cardMeaning(card))}</h2>
              <p>${escapeHtml(readingSummaryText(card))} · ${card.strokes} ${escapeHtml(t("strokes"))}</p>
              <p><span class="pill">${escapeHtml(t("radical"))}: ${escapeHtml(meta.radical || "-")} ${escapeHtml(localized(meta.radicalMeaning || {}))}</span></p>
            </div>
          </div>
          ${renderReadingGrid(card)}
          ${renderAudioPlayer(card)}
          <h3>${escapeHtml(t("strokeOrder"))}</h3>
          <ol class="stroke-list">${card.stroke_order.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
          <h3>${escapeHtml(t("examples"))}</h3>
          <ul class="example-list">${card.examples.map(renderExampleItem).join("")}</ul>
          <h3>${escapeHtml(t("apps"))}</h3>
          <p>${escapeHtml(cardInterface(card))}</p>
          <ul class="app-list">${card.apps.map((name) => `<li>${escapeHtml(name)}</li>`).join("")}</ul>
          <div class="actions" style="margin-top:14px">
            <button class="btn primary" type="button" data-action="study-card" data-id="${escapeAttr(card.id)}">▶ ${escapeHtml(t("study"))}</button>
            <button class="btn" type="button" data-action="open-kanji-page" data-id="${escapeAttr(card.id)}">↗ ${escapeHtml(lang() === "ru" ? "Страница" : "Page")}</button>
            <button class="btn" type="button" data-action="toggle-favorite" data-id="${escapeAttr(card.id)}">${favorite ? "★" : "☆"} ${escapeHtml(t("favorites"))}</button>
            <button class="btn" type="button" data-action="write-card" data-id="${escapeAttr(card.id)}">筆 ${escapeHtml(t("writing"))}</button>
            ${renderJlptLessonButton(card)}
            <button class="btn" type="button" data-action="close-detail">OK</button>
          </div>
        </article>
      </div>
    `;
  }

  function renderAudioPlayer(card) {
    const audio = getKanjiAudioPath(card);
    const fallback = !audio && getKanjiSpeechText(card);
    return `
      <section class="audio-panel">
        <h3>${escapeHtml(t("audio"))}</h3>
        <div class="actions">
          ${audio || fallback
            ? `<button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${escapeAttr(card.id)}">🔊 Kanji${fallback ? " TTS" : ""}</button>`
            : `<span class="label">${escapeHtml(lang() === "ru" ? "Озвучка для этой карточки пока не найдена." : "Audio for this card is not available yet.")}</span>`}
        </div>
      </section>
    `;
  }

  function renderStats() {
    const summary = getSummary();
    const today = todayStats();
    return `
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${escapeHtml(t("stats"))}</h1>
            <p>${escapeHtml(t("xp"))} · ${escapeHtml(t("level"))} · ${escapeHtml(t("coins"))}</p>
          </div>
          <button class="btn primary" type="button" data-action="route" data-route="achievements">◐ ${escapeHtml(t("achievements"))}</button>
        </div>
        <div class="metric-grid">
          ${renderMetric(t("xp"), state.progress.xp, `${t("level")} ${state.progress.level}`, getLevelInfo().percent)}
          ${renderMetric(t("streak"), state.progress.streak.current, `${state.progress.streak.best} best`, progressWidth(state.progress.streak.current, 30))}
          ${renderMetric(t("mastered"), summary.mastered, `${summary.total}`, progressWidth(summary.mastered, summary.total))}
          ${renderMetric(t("successRate"), `${overallSuccessRate()}%`, `${totalReviews()} reviews`, overallSuccessRate())}
          ${renderMetric(t("errors"), today.mistakes || 0, `${state.progress.totalWrong} total`, progressWidth(today.mistakes || 0, Math.max(today.reviews || 1, 1)))}
        </div>
        <div class="stats-grid" style="margin-top:12px">
          <article class="chart-panel"><h3>${escapeHtml(t("activity"))}</h3><div class="chart-box"><canvas id="activityChart"></canvas></div></article>
          <article class="chart-panel"><h3>${escapeHtml(t("streak"))}</h3><div class="chart-box"><canvas id="streakChart"></canvas></div></article>
          <article class="chart-panel"><h3>${escapeHtml(t("jlptProgress"))}</h3><div class="chart-box"><canvas id="jlptChart"></canvas></div></article>
          <article class="chart-panel"><h3>SRS</h3><div class="chart-box"><canvas id="stateChart"></canvas></div></article>
          <article class="chart-panel"><h3>${escapeHtml(t("errors"))}</h3><div class="chart-box"><canvas id="mistakeChart"></canvas></div></article>
          <article class="tool-panel">${renderAchievementsList()}</article>
          <article class="tool-panel" data-section="shop-panel">${renderShop()}</article>
          <article class="tool-panel">${renderTransactions()}</article>
          <article class="tool-panel">
            <h3>${escapeHtml(t("settings"))}</h3>
            <div class="settings-list">
              <div class="settings-row">
                <span>
                  <strong>${escapeHtml(evaLiveLabels().badge)}</strong>
                  <small>${escapeHtml(evaLiveLabels().hint)}</small>
                </span>
                <span class="pill">${escapeHtml(evaLiveLabels().status)}</span>
              </div>
              <div class="settings-row">
                <span>
                  <strong>${escapeHtml(lang() === "ru" ? "Звуки интерфейса" : "UX sounds")}</strong>
                  <small>${escapeHtml(lang() === "ru" ? "Клики, ответы, награды и уведомления." : "Clicks, answers, rewards, and in-app notices.")}</small>
                </span>
                <button class="btn ${isUxSoundEnabled() ? "success" : "ghost"}" type="button" data-action="toggle-ux-sound">${isUxSoundEnabled() ? "On" : "Off"}</button>
              </div>
              <label class="settings-row settings-row-range">
                <span>
                  <strong>${escapeHtml(lang() === "ru" ? "Громкость UX" : "UX volume")}</strong>
                  <small>${escapeHtml(lang() === "ru" ? "Не влияет на озвучку кандзи и музыку." : "Does not affect kanji voice or music.")}</small>
                </span>
                <input class="ux-volume-slider" type="range" min="0" max="100" step="5" value="${Math.round(getUxSoundVolume() * 100)}" data-ux-volume />
                <strong class="volume-value" data-ux-volume-label>${Math.round(getUxSoundVolume() * 100)}%</strong>
              </label>
            </div>
            <div class="actions">
              <button class="btn primary" type="button" data-action="export">⇩ ${escapeHtml(t("export"))}</button>
              <button class="btn" type="button" data-action="import">⇧ ${escapeHtml(t("import"))}</button>
              <button class="btn danger" type="button" data-action="reset">↺ ${escapeHtml(t("reset"))}</button>
            </div>
          </article>
        </div>
      </section>
    `;
  }

  function achievementList() {
    return state.achievements?.length ? state.achievements : state.rewards?.achievements || [];
  }

  function achievementCategoryList() {
    if (state.achievementCategories?.length) return state.achievementCategories;
    const ids = [...new Set(achievementList().map((item) => item.category || "learning"))];
    return ids.map((id) => ({ id, title: { ru: id, en: id }, icon: "moon" }));
  }

  function achievementTitle(item) {
    return localized(item.title || item.name || { ru: item.id, en: item.id });
  }

  function achievementDescription(item) {
    return localized(item.description || {});
  }

  function achievementIcon(icon) {
    const icons = {
      moon: "月",
      book: "書",
      memory: "記",
      flame: "火",
      star: "星",
      brush: "筆",
      text: "文",
      lock: "鍵",
      eye: "眼"
    };
    return icons[icon] || "◆";
  }

  function renderAchievementsPreview() {
    const items = achievementList();
    return `
      <div class="section-head">
        <div><h2>${escapeHtml(t("achievements"))}</h2><p>${unlockedAchievementCount()}/${items.length}</p></div>
        <button class="btn ghost" type="button" data-action="route" data-route="achievements">${escapeHtml(lang() === "ru" ? "Все" : "All")}</button>
      </div>
      <div class="achievement-grid">${items.slice(0, 4).map(renderAchievement).join("")}</div>
    `;
  }

  function renderAchievementsList() {
    return `<h3>${escapeHtml(t("achievements"))}</h3><div class="achievement-grid compact">${achievementList().slice(0, 8).map(renderAchievement).join("")}</div>`;
  }

  function renderAchievementsPage() {
    const items = achievementList();
    const unlocked = unlockedAchievementCount();
    const totalRewards = items.reduce((sum, item) => ({
      xp: sum.xp + (item.rewardXp || 0),
      coins: sum.coins + (item.rewardFragments || 0)
    }), { xp: 0, coins: 0 });
    return `
      <section class="page achievements-page">
        <div class="section-head">
          <div>
            <h1>${escapeHtml(t("achievements"))}</h1>
            <p>${escapeHtml(lang() === "ru" ? "Лунные цели, секреты Евы и Леи, награды за прогресс." : "Moon goals, Eva and Leya secrets, and progress rewards.")}</p>
          </div>
          <button class="btn" type="button" data-action="route" data-route="stats">▥ ${escapeHtml(t("stats"))}</button>
        </div>
        <div class="metric-grid">
          ${renderMetric(t("achievements"), `${unlocked}/${items.length}`, lang() === "ru" ? "открыто" : "unlocked", progressWidth(unlocked, items.length))}
          ${renderMetric("XP", totalRewards.xp, lang() === "ru" ? "в наградах" : "in rewards", progressWidth(unlocked, items.length))}
          ${renderMetric(t("coins"), totalRewards.coins, lang() === "ru" ? "в наградах" : "in rewards", progressWidth(unlocked, items.length))}
          ${renderMetric(lang() === "ru" ? "Секреты" : "Secrets", `${items.filter((item) => item.secret && isAchievementUnlocked(item.id)).length}/${items.filter((item) => item.secret).length}`, "Eva · Leya", progressWidth(items.filter((item) => item.secret && isAchievementUnlocked(item.id)).length, Math.max(1, items.filter((item) => item.secret).length)))}
        </div>
        <div class="achievement-category-list">
          ${achievementCategoryList().map((category) => {
            const categoryItems = items.filter((item) => item.category === category.id);
            if (!categoryItems.length) return "";
            const done = categoryItems.filter((item) => isAchievementUnlocked(item.id)).length;
            return `
              <section class="achievement-category">
                <div class="section-head compact-head">
                  <div>
                    <h2>${achievementIcon(category.icon)} ${escapeHtml(localized(category.title))}</h2>
                    <p>${done}/${categoryItems.length}</p>
                  </div>
                  <span class="pill">${progressWidth(done, categoryItems.length)}%</span>
                </div>
                <div class="achievement-grid expanded">${categoryItems.map((item) => renderAchievement(item, true)).join("")}</div>
              </section>
            `;
          }).join("")}
        </div>
      </section>
    `;
  }

  function renderAchievement(item, detailed = false) {
    const unlocked = isAchievementUnlocked(item.id);
    const current = achievementValue(item);
    const target = Math.max(1, Number(item.target || 1));
    const percent = progressWidth(current, target);
    const displayCurrent = Math.min(current, target);
    const title = item.secret && !unlocked && !detailed
      ? (lang() === "ru" ? "Секретное достижение" : "Secret achievement")
      : achievementTitle(item);
    const description = item.secret && !unlocked && !detailed
      ? (lang() === "ru" ? "Откроется при необычном действии." : "Unlocked by an unusual action.")
      : achievementDescription(item);
    return `
      <div class="achievement ${unlocked ? "is-unlocked" : ""} ${item.secret ? "is-secret" : ""}">
        <span class="achievement-icon">${achievementIcon(item.icon)}</span>
        <strong>${escapeHtml(title)}</strong>
        <small>${escapeHtml(description)}</small>
        <div class="achievement-progress" aria-label="${escapeAttr(`${displayCurrent}/${target}`)}"><i style="width:${percent}%"></i></div>
        <small class="achievement-reward">+${item.rewardXp || 0} XP · +${item.rewardFragments || 0} ${escapeHtml(t("coins"))}</small>
      </div>
    `;
  }

  function renderShop() {
    return renderCustomizationShop({ closable: false });
  }

  function renderTransactions(options = {}) {
    const limit = options.limit || 10;
    const items = (state.progress.transactions || []).slice(0, limit);
    return `
      <h3>${escapeHtml(t("transactions"))}</h3>
      <div class="transaction-list">
        ${items.map((item) => `
          <div class="transaction-row">
            <div>
              <strong>${escapeHtml(transactionTitle(item))}</strong>
              <small>${escapeHtml(formatDate(item.at))}</small>
            </div>
            <span>${Number(item.coins || 0) >= 0 ? "+" : ""}${Number(item.coins || 0)} Moon · ${Number(item.xp || 0) >= 0 ? "+" : ""}${Number(item.xp || 0)} XP</span>
          </div>
        `).join("") || `<p>${escapeHtml(lang() === "ru" ? "Пока нет операций." : "No transactions yet.")}</p>`}
      </div>
    `;
  }

  function transactionTitle(item) {
    if (item.label) return item.label;
    const reason = String(item.reason || "");
    const customizationMatch = reason.match(/^customization:[^:]+:(.+)$/);
    if (customizationMatch) {
      const shopItem = customizationShopItem(customizationMatch[1]);
      if (shopItem) return customizationItemTitle(shopItem);
    }
    if (reason.startsWith("achievement:")) return lang() === "ru" ? "Достижение" : "Achievement";
    if (reason.startsWith("daily_bonus")) return lang() === "ru" ? "Ежедневный бонус" : "Daily bonus";
    if (reason.startsWith("sentence")) return lang() === "ru" ? "Практика предложений" : "Sentence practice";
    if (reason.startsWith("writing")) return lang() === "ru" ? "Практика письма" : "Writing practice";
    if (reason.startsWith("lesson")) return lang() === "ru" ? "Урок" : "Lesson";
    if (reason.startsWith("review")) return lang() === "ru" ? "Повторение" : "Review";
    if (reason.startsWith("shop:")) return lang() === "ru" ? "Магазин" : "Shop";
    return lang() === "ru" ? "Операция" : "Transaction";
  }

  function renderRewardModal() {
    if (!state.rewardModal) return "";
    const reward = state.rewardModal;
    const isLevel = reward.type === "level";
    const isAchievement = reward.type === "achievement";
    const message = isLevel
      ? `${t("level")} ${state.progress.level} - ${state.progress.xp} XP - ${state.progress.moonFragments} ${t("coins")}`
      : reward.message;
    return `
      <div class="reward-backdrop">
        <article class="reward-modal ${isAchievement ? "is-achievement" : ""}">
          ${isLevel ? `<img class="reward-logo" src="assets/logo.png" alt="Flash Kanji" />` : ""}
          ${isAchievement ? `<div class="reward-achievement-icon">${achievementIcon(reward.icon)}</div>` : ""}
          ${renderMascot(reward.mascot || "eva", reward.mood || "happy", reward.dialog || "achievement", "reward-mascot")}
          <h2>${escapeHtml(reward.title)}</h2>
          <p>${escapeHtml(message)}</p>
          <div class="reward-values">
            ${isLevel ? `<span>${escapeHtml(t("level"))} ${state.progress.level}</span>` : ""}
            ${reward.xp ? `<span>+${reward.xp} XP</span>` : ""}
            ${isLevel ? `<span>${state.progress.xp} XP</span>` : ""}
            ${reward.coins ? `<span>+${reward.coins} ${escapeHtml(t("coins"))}</span>` : ""}
            ${isLevel ? `<span>${state.progress.moonFragments} ${escapeHtml(t("coins"))}</span>` : ""}
          </div>
          ${isLevel ? `<button class="btn primary share-btn" type="button" data-action="share-achievement">${escapeHtml(t("shareAchievement"))}</button>` : ""}
          <button class="btn primary" type="button" data-action="close-reward">OK</button>
        </article>
      </div>
    `;
  }

  function renderPwaInstallBanner() {
    if (!canShowPwaInstallPrompt()) return "";
    if (state.detailCardId || state.rewardModal) return "";
    const copy = pwaInstallCopy();
    const isInstruction = !deferredPwaInstallPrompt && isIosSafari();
    return `
      <aside class="pwa-install-banner" role="dialog" aria-modal="false" aria-label="${escapeAttr(copy.title)}">
        <div class="pwa-install-logo"><img src="assets/logo.png" alt="Flash Kanji" /></div>
        <div class="pwa-install-copy">
          <span class="pill">${escapeHtml(copy.badge)}</span>
          <h2>${escapeHtml(copy.title)}</h2>
          <p>${escapeHtml(copy.description)}</p>
          ${isInstruction ? `<p class="pwa-install-instruction">${escapeHtml(copy.iosInstruction)}</p>` : ""}
        </div>
        <div class="pwa-install-actions">
          <button class="btn primary" type="button" data-action="pwa-install">${escapeHtml(copy.install)}</button>
          <button class="btn ghost" type="button" data-action="pwa-later">${escapeHtml(copy.later)}</button>
        </div>
      </aside>
    `;
  }

  function renderNotificationPermissionBanner() {
    if (!state.notificationPromptVisible || !canShowNotificationPrompt("visible")) return "";
    if (state.detailCardId || state.rewardModal || canShowPwaInstallPrompt()) return "";
    const copy = notificationPromptCopy();
    return `
      <aside class="pwa-install-banner notification-permission-banner" role="dialog" aria-modal="false" aria-label="${escapeAttr(copy.title)}">
        <div class="pwa-install-logo notification-bell">月</div>
        <div class="pwa-install-copy">
          <span class="pill">${escapeHtml(copy.badge)}</span>
          <h2>${escapeHtml(copy.title)}</h2>
          <p>${escapeHtml(copy.description)}</p>
        </div>
        <div class="pwa-install-actions">
          <button class="btn primary" type="button" data-action="notification-allow">${escapeHtml(copy.allow)}</button>
          <button class="btn ghost" type="button" data-action="notification-later">${escapeHtml(copy.later)}</button>
        </div>
      </aside>
    `;
  }

  function renderMascotPanel(character, mood, category) {
    const mascot = getMascot(character);
    const image = mascotImageSrc(character, mood, category);
    const phrase = formatMascotDialogueText(dialogueText(character, category));
    return `
      <article class="sidekick mascot-${character} mood-${mood}" data-action="mascot-click" data-character="${escapeAttr(character)}">
        <img src="${escapeAttr(image)}" alt="${escapeAttr(localized(mascot.name))}" />
        <div><strong>${escapeHtml(localized(mascot.name))}</strong><p>${escapeHtml(phrase)}</p></div>
      </article>
    `;
  }

  function renderMascot(character, mood, category, className) {
    const mascot = getMascot(character);
    const image = mascotImageSrc(character, mood, category);
    const phrase = formatMascotDialogueText(dialogueText(character, category));
    return `
      <div class="${className} mascot-${character} mood-${mood}" data-action="mascot-click" data-character="${escapeAttr(character)}">
        <img src="${escapeAttr(image)}" alt="${escapeAttr(localized(mascot.name))}" />
        <div class="speech">${escapeHtml(phrase)}</div>
      </div>
    `;
  }

  function mascotImageSrc(character, mood = "normal", category = "welcome") {
    if (character === "eva") return evaSpritePath(resolveEvaSprite(null, evaMascotEmotion(mood, category)));
    const mascot = getMascot(character);
    return mascot.sprites?.[mood] || Object.values(mascot.sprites || {})[0] || "";
  }

  function evaMascotEmotion(mood = "normal", category = "welcome") {
    const categoryKey = String(category || "").toLowerCase();
    const moodKey = String(mood || "").toLowerCase();
    const byCategory = {
      welcome: "welcome",
      correct: "approve",
      wrong: "sad",
      progress: "observe",
      streakloss: "sad",
      lessoncomplete: "proud",
      masterymilestone: "proud",
      achievement: "achievement",
      goal: "reward",
      combo: "proud",
      hint: "think",
      dailybonus: "reward"
    };
    const byMood = {
      normal: "welcome",
      calm: "neutral",
      happy: "happy",
      proud: "proud",
      thinking: "think",
      focus: "think",
      sad: "sad",
      angry: "strict",
      shy: "shy"
    };
    const explicitMood = byMood[moodKey] && !["normal", "calm"].includes(moodKey) ? byMood[moodKey] : null;
    if (explicitMood && (!categoryKey || categoryKey === "welcome")) return explicitMood;
    return byCategory[categoryKey] || byMood[moodKey] || moodKey || "neutral";
  }

  function formatMascotDialogueText(text) {
    if (lang() !== "ru") return text;
    return String(text || "").replace(/(^|\s)([А-Яа-яЁё])\s+(?=[А-Яа-яЁё]{4,})/g, "$1$2\u00a0");
  }

  function rateActiveCard(rating) {
    const card = findCard(state.activeCardId);
    if (!card || !ratingLabels[rating]) return;
    stopKanjiAudio();

    const before = cloneProgress(getCardProgress(card.id));
    const after = calculateNextProgress(before, rating);
    state.progress.cards[card.id] = after;
    updateDailyStats(before, after, rating);
    updateStreak();

    const previousCombo = Number(state.progress.correctCombo || 0);
    if (isForgottenRating(rating)) {
      state.progress.totalWrong += 1;
      state.progress.correctCombo = 0;
      adjustEvaRelationship({ discipline: -0.8, trust: -0.2 }, "answer_again");
      dispatchEvaEvent("answer_wrong", { cardId: card.id, kanji: card.kanji, rating, comboLost: previousCombo > 0 });
      playTone("again");
      toast(dialogueText("eva", "wrong"));
    } else {
      addReward(state.rewards.rewards.correctXp, state.rewards.rewards.correctCoins, "review_success");
      state.progress.totalCorrect += 1;
      state.progress.correctCombo += 1;
      state.progress.bestCorrectCombo = Math.max(state.progress.bestCorrectCombo, state.progress.correctCombo);
      adjustEvaRelationship({ trust: 0.35, discipline: 0.25, curiosity: after.lastDecision === "Easy" ? 0.2 : 0 }, `answer_${rating}`);
      dispatchEvaEvent("answer_correct", { cardId: card.id, kanji: card.kanji, rating, combo: state.progress.correctCombo });
      playTone("ok");
      toast(dialogueText("eva", "correct"));
      if (state.progress.correctCombo > 0 && state.progress.correctCombo % 5 === 0) {
        addReward(state.rewards.rewards.comboXp, 0, "combo_bonus");
        queueReward({
          title: "Combo",
          message: dialogueText("leya", "combo"),
          xp: state.rewards.rewards.comboXp,
          coins: 0,
          mascot: "leya",
          mood: "proud",
          dialog: "combo"
        });
      }
    }

    syncEvaRelationshipFromProgress();
    checkLessonCompletion(card.lessonId);
    checkDailyGoal();
    evaluateAchievements();
    saveProgress();
    state.revealed = false;
    state.activeCardId = null;
    resetReadingCheck();
    render();
  }

  function srsButtonLabels() {
    return lang() === "ru"
      ? { forgot: "Не помню", remember: "Помню", forgotHint: "вернём быстро", rememberHint: "SRS выберет срок" }
      : { forgot: "Forgot", remember: "Remember", forgotHint: "review soon", rememberHint: "SRS decides" };
  }

  function srsDecisionHint(card) {
    const labels = srsButtonLabels();
    const decision = resolveSrsDecision(getCardProgress(card.id), "remember");
    const intervals = {
      hard: lang() === "ru" ? "около 12 ч." : "about 12 h",
      good: lang() === "ru" ? "около 1 дня" : "about 1 day",
      easy: lang() === "ru" ? "дольше обычного" : "longer interval"
    };
    return `${labels.rememberHint}: ${intervals[decision] || intervals.good}`;
  }

  function resolveSrsDecision(before, rating) {
    if (isForgottenRating(rating)) return "again";
    if (rating !== "remember") return rating;
    const oldState = before.state || "New";
    const reviews = Number(before.reviews || before.reviewCount || 0);
    const correct = Number(before.correct || 0);
    const wrong = Number(before.wrong || 0);
    const lapses = Number(before.lapses || 0);
    const successRate = Number(before.successRate || (reviews ? (correct / Math.max(correct + wrong, 1)) * 100 : 0));

    if (oldState === "New") return "good";
    if (oldState === "Learning") return successRate >= 70 || correct >= 2 ? "good" : "hard";
    if (successRate >= 88 && correct >= 5 && lapses <= 1) return "easy";
    if (successRate < 70 || lapses > Math.max(1, Math.floor(correct / 3))) return "hard";
    return "good";
  }

  function isForgottenRating(rating) {
    return rating === "forgot" || rating === "again";
  }

  function calculateNextProgress(before, rating) {
    const now = new Date();
    const next = cloneProgress(before);
    const inputRating = rating;
    const decisionRating = resolveSrsDecision(before, rating);
    rating = decisionRating;
    const oldState = before.state || "New";
    let ease = Number(before.easeFactor || 2.5);
    let intervalDays = Number(before.intervalDays || 0);
    let nextState = oldState;

    if (rating === "again") {
      ease = Math.max(1.3, ease - 0.2);
      intervalDays = 5 / 1440;
      nextState = "Learning";
      next.lapses += oldState === "New" ? 0 : 1;
      next.wrong += 1;
    }
    if (rating === "hard") {
      ease = Math.max(1.3, ease - 0.15);
      intervalDays = oldState === "New" || oldState === "Learning" ? 0.5 : Math.max(0.5, intervalDays * 1.2);
      nextState = intervalDays < 1 ? "Learning" : "Review";
      next.correct += 1;
    }
    if (rating === "good") {
      intervalDays = oldState === "New" || oldState === "Learning" ? 1 : Math.max(1, intervalDays * ease);
      nextState = "Review";
      next.correct += 1;
    }
    if (rating === "easy") {
      ease = Math.min(3.2, ease + 0.15);
      intervalDays = oldState === "New" || oldState === "Learning" ? 4 : Math.max(3, intervalDays * ease * 1.7);
      nextState = "Review";
      next.correct += 1;
    }
    if (next.correct >= 8 && intervalDays >= 30) nextState = "Mastered";

    next.state = nextState;
    next.stage = toStage(nextState);
    next.easeFactor = round(ease, 2);
    next.intervalDays = round(intervalDays, 3);
    next.dueAt = addDays(now, intervalDays).toISOString();
    next.nextReview = next.dueAt;
    next.lastReviewedAt = now.toISOString();
    next.lastReview = next.lastReviewedAt;
    next.lastRating = ratingLabels[inputRating] || ratingLabels[rating];
    next.lastDecision = ratingLabels[decisionRating] || ratingLabels[rating];
    next.reviews += 1;
    next.reviewCount = next.reviews;
    next.history = [...(before.history || []), {
      at: now.toISOString(),
      rating: ratingLabels[inputRating] || ratingLabels[rating],
      inputRating: ratingLabels[inputRating] || ratingLabels[rating],
      decision: ratingLabels[decisionRating] || ratingLabels[rating],
      from: oldState,
      to: nextState,
      intervalDays: next.intervalDays
    }].slice(-120);
    next.successRate = calculateSuccessRate(next);
    return next;
  }

  function checkLessonCompletion(lessonId) {
    if (state.progress.lessonCompletions[lessonId]) return;
    const lessonCards = getLessonCards(lessonId);
    const complete = lessonCards.length > 0 && lessonCards.every((card) => getCardProgress(card.id).state !== "New");
    if (!complete) return;
    const xp = state.rewards.rewards.lessonCompleteXp;
    const coins = state.rewards.rewards.lessonCompleteCoins;
    state.progress.lessonCompletions[lessonId] = new Date().toISOString();
    playUxSound("lesson_complete");
    addReward(xp, coins, "lesson_completion");
    adjustEvaRelationship({ warmth: 2.4, trust: 2, discipline: 2.2, curiosity: 0.8 }, "lesson_completion");
    dispatchEvaEvent("lesson_complete", { lessonId, xp, coins });
    queueReward({
      title: localized({ ru: "Урок завершён", en: "Lesson complete" }),
      message: dialogueText("eva", "lessonComplete"),
      xp,
      coins,
      mascot: "eva",
      mood: "happy",
      dialog: "lessonComplete"
    });
    maybeShowNotificationPrompt("lesson_complete");
  }

  function checkDailyGoal() {
    const key = todayKey();
    const today = todayStats();
    if (today.goalClaimed || today.reviews < state.progress.settings.dailyGoal) return;
    today.goalClaimed = true;
    const xp = state.rewards.rewards.comboXp;
    const coins = state.rewards.rewards.streakCoins;
    addReward(xp, coins, "daily_goal");
    queueReward({
      title: t("dailyGoal"),
      message: dialogueText("leya", "goal"),
      xp,
      coins,
      mascot: "leya",
      mood: "happy",
      dialog: "goal"
    });
    state.progress.daily[key] = today;
  }

  function recordAppOpen() {
    state.progress.appOpens = Number(state.progress.appOpens || 0) + 1;
    const hour = new Date().getHours();
    if (hour >= 22 || hour < 5) state.progress.secrets.nightVisit = true;
  }

  function handleMascotClick(character) {
    if (character === "eva") {
      state.progress.secrets.evaClicks = Number(state.progress.secrets.evaClicks || 0) + 1;
      adjustEvaRelationship({ warmth: 0.2, curiosity: 0.1 }, "eva_click");
      toast(dialogueText("eva", "welcome"));
      evaluateAchievements();
      saveProgress();
      render();
      return;
    }
    if (character === "leya") toast(dialogueText("leya", "combo"));
  }

  function handleEvaRoomSpriteClick() {
    ensureEvaRoomProgress();
    state.progress.secrets.evaClicks = Number(state.progress.secrets.evaClicks || 0) + 1;
    state.evaRuntime ||= defaultEvaStateV2();
    state.evaRuntime.clickCount = Number(state.evaRuntime.clickCount || 0) + 1;
    dispatchEvaEvent("user_clicked_eva", { clickCount: state.evaRuntime.clickCount });
    evaluateAchievements();
    playUxSound("notification_soft");
    saveProgress();
    render();
  }

  function recordWritingPracticeComplete() {
    if (writingSession.completed) return;
    writingSession.completed = true;
    state.progress.writingPractice.completed = Number(state.progress.writingPractice.completed || 0) + 1;
    if (writingSession.cardId) {
      state.progress.writingPractice.cards[writingSession.cardId] = (state.progress.writingPractice.cards[writingSession.cardId] || 0) + 1;
    }
    adjustEvaRelationship({ curiosity: 1, discipline: 0.8, trust: 0.4 }, "writing_complete");
    dispatchEvaEvent("writing_complete", { cardId: writingSession.cardId });
    const unlocked = evaluateAchievements();
    saveProgress();
    if (unlocked) render();
  }

  function claimDailyBonus() {
    const key = todayKey();
    const visits = normalizeVisitState();
    const previousVisitDate = visits.lastVisitDate;

    if (!visits.firstVisitDate) {
      visits.firstVisitDate = key;
      visits.lastVisitDate = key;
      visits.streak = 1;
      visits.bestStreak = Math.max(visits.bestStreak || 0, visits.streak);
      return;
    }

    if (state.progress.dailyBonuses[key] || visits.lastDailyBonusDate === key) {
      visits.lastVisitDate = key;
      return;
    }

    if (previousVisitDate === key) return;

    updateVisitStreak(previousVisitDate, key);
    visits.lastVisitDate = key;
    visits.lastDailyBonusDate = key;
    state.progress.dailyBonuses[key] = new Date().toISOString();
    playUxSound("daily_bonus");
    addReward(state.rewards.rewards.dailyBonusXp, state.rewards.rewards.dailyBonusCoins, "daily_bonus");
    adjustEvaRelationship({ warmth: 1, discipline: 0.8 }, "daily_bonus");
    queueReward({
      title: t("dailyBonus"),
      message: dialogueText("leya", "welcome"),
      xp: state.rewards.rewards.dailyBonusXp,
      coins: state.rewards.rewards.dailyBonusCoins,
      mascot: "leya",
      mood: "calm",
      dialog: "welcome"
    });
    evaluateAchievements();
    prepareDailyNotifications();
  }

  function normalizeVisitState() {
    state.progress.visits ||= {};
    const visits = state.progress.visits;
    visits.firstVisitDate ||= null;
    visits.lastVisitDate ||= null;
    visits.lastDailyBonusDate ||= null;
    visits.streak = Number(visits.streak || 0);
    visits.bestStreak = Number(visits.bestStreak || 0);

    return visits;
  }

  function updateVisitStreak(previousVisitDate, today) {
    const visits = normalizeVisitState();
    visits.streak = previousVisitDate && dayDifference(previousVisitDate, today) === 1 ? visits.streak + 1 : 1;
    visits.bestStreak = Math.max(visits.bestStreak || 0, visits.streak);

    const studyLast = state.progress.streak.lastStudyDate;
    if (studyLast !== today) {
      state.progress.streak.current = studyLast && dayDifference(studyLast, today) === 1 ? state.progress.streak.current + 1 : 1;
      state.progress.streak.lastStudyDate = today;
      state.progress.streak.best = Math.max(state.progress.streak.best || 0, state.progress.streak.current);
      state.progress.streakHistory.push({ date: today, value: state.progress.streak.current });
      state.progress.streakHistory = state.progress.streakHistory.slice(-120);
    }
  }

  function evaluateAchievements() {
    if (!achievementList().length) return 0;
    let unlockedCount = 0;
    achievementList().forEach((achievement) => {
      if (isAchievementUnlocked(achievement.id)) return;
      if (!achievementMet(achievement)) return;
      unlockedCount += 1;
      const xp = achievement.rewardXp || 0;
      const coins = achievement.rewardFragments || 0;
      state.progress.achievements[achievement.id] = {
        unlockedAt: new Date().toISOString(),
        rewardXp: xp,
        rewardFragments: coins
      };
      queueReward({
        type: "achievement",
        title: achievementTitle(achievement),
        message: achievementDescription(achievement),
        xp,
        coins,
        icon: achievement.icon,
        mascot: "eva",
        mood: "happy",
        dialog: "achievement"
      });
      addReward(xp, coins, `achievement:${achievement.id}`);
    });
    return unlockedCount;
  }

  function achievementMet(achievement) {
    return achievementValue(achievement) >= Number(achievement.target || 1);
  }

  function achievementValue(achievement) {
    if (achievement.kind === "lessonComplete") return Object.keys(state.progress.lessonCompletions).length;
    if (achievement.kind === "correct") return state.progress.totalCorrect;
    if (achievement.kind === "learned") return getSummary().learned;
    if (achievement.kind === "reviews") return totalReviews();
    if (achievement.kind === "streak") return Math.max(state.progress.streak.current || 0, state.progress.streak.best || 0);
    if (achievement.kind === "level") return state.progress.level || 1;
    if (achievement.kind === "moonFragments") return state.progress.totalMoonFragmentsEarned || 0;
    if (achievement.kind === "writing") return state.progress.writingPractice?.completed || 0;
    if (achievement.kind === "sentence") return Object.keys(state.progress.sentencePractice?.completed || {}).length;
    if (achievement.kind === "evaClicks") return state.progress.secrets?.evaClicks || 0;
    if (achievement.kind === "nightVisit") return state.progress.secrets?.nightVisit ? 1 : 0;
    if (achievement.kind === "appOpens") return state.progress.appOpens || 0;
    if (achievement.kind === "shopComplete") {
      const purchasable = customizationShopItems().filter((item) => !item.defaultOwned && item.price > 0);
      return purchasable.length && purchasable.every((item) => isCustomizationOwned(item.id)) ? 1 : 0;
    }
    if (achievement.kind === "jlpt") {
      const cards = state.cards.filter((card) => card.jlpt === achievement.jlpt);
      return cards.length > 0 && cards.every((card) => getCardProgress(card.id).state === "Mastered") ? 1 : 0;
    }
    return 0;
  }

  function queueReward(reward) {
    if (!state.rewardModal) {
      state.rewardModal = reward;
      showRewardFeedback(reward);
      return;
    }
    if (reward.type === "level") {
      state.rewardQueue.unshift(reward);
      return;
    }
    state.rewardQueue.push(reward);
  }

  function showRewardFeedback(reward) {
    showConfetti();
    if (reward?.type === "achievement") {
      if (soundManager()) playUxSound("achievement_unlock");
      else if (isUxSoundEnabled()) playAchievementSound();
      return;
    }
    if (reward?.type === "level") {
      playUxSound("level_up");
      return;
    }
    if ((reward?.xp || 0) > 0 || (reward?.coins || 0) > 0) playUxSound("notification_reward");
  }

  function addReward(xp, coins, reason = "reward") {
    const previousLevel = state.progress.level || calculateLevel(state.progress.xp);
    state.progress.xp += xp;
    state.progress.moonFragments += coins;
    const quietReward = shouldQuietPerCardReward(reason);
    if (!quietReward && xp > 0) playUxSound("xp_gain");
    if (!quietReward && coins > 0) playUxSound("moon_fragment_gain");
    if (coins > 0) state.progress.totalMoonFragmentsEarned = Number(state.progress.totalMoonFragmentsEarned || 0) + coins;
    state.progress.level = calculateLevel(state.progress.xp);
    if (xp || coins) {
      state.progress.transactions.unshift({
        at: new Date().toISOString(),
        reason,
        xp,
        coins,
        balance: state.progress.moonFragments
      });
      state.progress.transactions = state.progress.transactions.slice(0, 80);
    }
    if (state.progress.level > previousLevel) {
      playUxSound("level_up");
      dispatchEvaEvent("level_up", { level: state.progress.level, xp: state.progress.xp, moonFragments: state.progress.moonFragments });
      queueReward({
        type: "level",
        title: t("levelUp"),
        message: `${t("level")} ${state.progress.level} - ${state.progress.xp} XP - ${state.progress.moonFragments} ${t("coins")}`,
        xp: 0,
        coins: 0,
        mascot: state.progress.level % 2 === 0 ? "leya" : "eva",
        mood: "happy",
        dialog: "achievement",
        level: state.progress.level,
        totalXp: state.progress.xp,
        moonFragments: state.progress.moonFragments
      });
    }
  }

  function shouldQuietPerCardReward(reason) {
    return ["learn", "review"].includes(state.route) && ["review_success", "combo_bonus"].includes(reason);
  }

  function updateDailyStats(before, after, rating) {
    const today = todayStats();
    today.reviews += 1;
    if (before.state === "New" && after.state !== "New") today.learned += 1;
    if (before.state !== "Mastered" && after.state === "Mastered") today.mastered += 1;
    if (isForgottenRating(rating)) today.mistakes += 1;
    today.minutes = round(today.reviews * 0.75 + today.learned * 1.25, 1);
    state.progress.daily[todayKey()] = today;
  }

  function updateStreak() {
    const today = todayKey();
    const last = state.progress.streak.lastStudyDate;
    if (last === today) return;
    const lost = Boolean(last && dayDifference(last, today) > 1 && state.progress.streak.current > 0);
    state.progress.streak.current = last && dayDifference(last, today) === 1 ? state.progress.streak.current + 1 : 1;
    state.progress.streak.lastStudyDate = today;
    state.progress.streak.best = Math.max(state.progress.streak.best, state.progress.streak.current);
    state.progress.streakHistory.push({ date: today, value: state.progress.streak.current });
    state.progress.streakHistory = state.progress.streakHistory.slice(-120);
    adjustEvaRelationship(lost
      ? { discipline: -3.5, trust: -1.4, warmth: -0.8 }
      : { discipline: 1.4, trust: 0.8, warmth: 0.4 },
    lost ? "streak_lost" : "study_streak");
    if (lost) toast(dialogueText("eva", "streakLoss"));
    if ([1, 7, 30, 100].includes(state.progress.streak.current)) {
      playUxSound("streak_reward");
      addReward(0, state.rewards.rewards.streakCoins, `streak:${state.progress.streak.current}`);
    }
    dispatchEvaEvent("streak_up", { streak: state.progress.streak.current, lost });
  }

  function renderCharts() {
    if (state.route !== "stats") return;
    if (!window.Chart) return;
    const days = lastDays(10);
    const labels = days.map((day) => day.slice(5));
    const colors = chartColors();
    const options = chartOptions(colors);
    createChart("activityChart", {
      type: "bar",
      data: {
        labels,
        datasets: [
          { label: t("learned"), data: days.map((day) => state.progress.daily[day]?.learned || 0), backgroundColor: colors.green },
          { label: t("review"), data: days.map((day) => state.progress.daily[day]?.reviews || 0), backgroundColor: colors.red }
        ]
      },
      options
    });
    createChart("jlptChart", {
      type: "bar",
      data: {
        labels: Object.keys(jlptProgress()),
        datasets: [{ label: t("mastered"), data: Object.values(jlptProgress()), backgroundColor: colors.yellow }]
      },
      options
    });
    createChart("streakChart", {
      type: "line",
      data: {
        labels,
        datasets: [{
          label: t("streak"),
          data: days.map((day) => state.progress.streakHistory.find((entry) => entry.date === day)?.value || (state.progress.daily[day]?.reviews ? 1 : 0)),
          borderColor: colors.blue,
          backgroundColor: colors.blueSoft,
          fill: true,
          tension: 0.35
        }]
      },
      options
    });
    createChart("stateChart", {
      type: "doughnut",
      data: {
        labels: Object.keys(countStates()),
        datasets: [{ data: Object.values(countStates()), backgroundColor: [colors.blue, colors.yellow, colors.green, colors.pink], borderColor: colors.line }]
      },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: colors.text } } } }
    });
    createChart("mistakeChart", {
      type: "line",
      data: {
        labels,
        datasets: [{ label: t("errors"), data: days.map((day) => state.progress.daily[day]?.mistakes || 0), borderColor: colors.danger, backgroundColor: colors.dangerSoft, fill: true, tension: 0.35 }]
      },
      options
    });
  }

  function createChart(id, config) {
    const canvas = document.getElementById(id);
    if (canvas) state.charts.push(new Chart(canvas, config));
  }

  function setupWritingCanvas() {
    const card = currentWritingCard();
    if (card) {
      state.activeCardId = card.id;
      state.activeLessonId = card.lessonId;
      state.writingStep = clamp(state.writingStep, 0, Math.max(0, writingStepCount(card) - 1));
      if (writingSession.cardId !== String(card.id)) resetWritingSession(card);
    }
    setupPracticeCanvas();
    drawWritingGuideFrame();
    updateWritingStepUi();
    updateWritingFeedback(evaluateWritingPractice(false));
    window.setTimeout(replayStrokeAnimation, 120);
  }

  function currentWritingCard() {
    return findCard(state.activeCardId) || getTodayCards()[0] || state.cards[0] || null;
  }

  function resetWritingSession(card) {
    writingSession.cardId = String(card?.id || "");
    writingSession.strokes = [];
    writingSession.currentStroke = [];
    writingSession.drawing = false;
    writingSession.activePointerId = null;
    writingSession.completed = false;
  }

  function setupPracticeCanvas() {
    const canvas = document.getElementById("practiceCanvas");
    if (!canvas) return;
    redrawPracticeCanvas();
    const start = (event) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      event.preventDefault();
      canvas.setPointerCapture?.(event.pointerId);
      writingSession.drawing = true;
      writingSession.activePointerId = event.pointerId;
      writingSession.currentStroke = [canvasPoint(canvas, event)];
      writingSession.completed = false;
      redrawPracticeCanvas();
    };
    const move = (event) => {
      if (!writingSession.drawing || event.pointerId !== writingSession.activePointerId) return;
      event.preventDefault();
      const point = canvasPoint(canvas, event);
      const last = writingSession.currentStroke[writingSession.currentStroke.length - 1];
      if (!last || distance(last, point) > 1.4) {
        writingSession.currentStroke.push(point);
        redrawPracticeCanvas();
      }
    };
    const end = (event) => {
      if (!writingSession.drawing || event.pointerId !== writingSession.activePointerId) return;
      event.preventDefault();
      const stroke = simplifyStroke(writingSession.currentStroke);
      if (stroke.length) writingSession.strokes.push(stroke);
      writingSession.currentStroke = [];
      writingSession.drawing = false;
      writingSession.activePointerId = null;
      redrawPracticeCanvas();
      updateWritingFeedback(evaluateWritingPractice(false));
    };
    canvas.onpointerdown = start;
    canvas.onpointermove = move;
    canvas.onpointerup = end;
    canvas.onpointercancel = end;
    canvas.onpointerleave = end;
    canvas.oncontextmenu = (event) => event.preventDefault();
  }

  function canvasPoint(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: clamp((event.clientX - rect.left) * (canvas.width / rect.width), 0, canvas.width),
      y: clamp((event.clientY - rect.top) * (canvas.height / rect.height), 0, canvas.height),
      pressure: event.pressure || 0.5,
      time: performance.now()
    };
  }

  function simplifyStroke(points) {
    if (!points.length) return [];
    const result = [points[0]];
    points.slice(1).forEach((point) => {
      if (distance(result[result.length - 1], point) >= 2.6) result.push(point);
    });
    return result.length === 1 ? [result[0], { ...result[0], x: result[0].x + 0.1, y: result[0].y + 0.1 }] : result;
  }

  function redrawPracticeCanvas() {
    const canvas = document.getElementById("practiceCanvas");
    if (!canvas) return;
    const context = canvas.getContext("2d");
    const card = currentWritingCard();
    clearCanvas(context, canvas);
    if (card) drawExpectedGuide(context, canvas, card);
    writingSession.strokes.forEach((stroke, index) => drawSmoothStroke(context, stroke, {
      color: getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),
      width: 13,
      shadow: index === writingSession.strokes.length - 1
    }));
    if (writingSession.currentStroke.length) {
      drawSmoothStroke(context, writingSession.currentStroke, {
        color: getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),
        width: 13,
        shadow: true
      });
    }
  }

  function clearWritingCanvas() {
    writingSession.strokes = [];
    writingSession.currentStroke = [];
    writingSession.drawing = false;
    writingSession.completed = false;
    redrawPracticeCanvas();
    updateWritingFeedback(evaluateWritingPractice(false));
  }

  function undoWritingStroke() {
    writingSession.strokes.pop();
    writingSession.currentStroke = [];
    writingSession.completed = false;
    redrawPracticeCanvas();
    updateWritingFeedback(evaluateWritingPractice(false));
  }

  function checkWritingPractice(final = false) {
    const result = evaluateWritingPractice(true);
    updateWritingFeedback(result);
    if (final) {
      playTone(result.success ? "good" : "again");
      toast(result.message);
      if (result.success) recordWritingPracticeComplete();
    }
  }

  function evaluateWritingPractice(final) {
    const canvas = document.getElementById("practiceCanvas");
    const card = currentWritingCard();
    const expectedCount = writingStepCount(card);
    if (!canvas || !card) {
      return { score: 0, success: false, expectedCount, message: "" };
    }
    const actual = writingSession.strokes;
    if (!actual.length) {
      return {
        score: 0,
        success: false,
        expectedCount,
        message: lang() === "ru" ? "Начни с первой черты." : "Start with the first stroke."
      };
    }
    const countScore = clamp(Math.round((Math.min(actual.length, expectedCount) / expectedCount) * 100), 0, 100);
    const score = final ? 100 : countScore;
    const success = Boolean(final && actual.length);
    let message = lang() === "ru"
      ? `Черты: ${actual.length}/${expectedCount}. Самопроверка без распознавания.`
      : `Strokes: ${actual.length}/${expectedCount}. Self-check without recognition.`;
    if (!final && actual.length < expectedCount) {
      message = lang() === "ru"
        ? `Черта ${actual.length + 1}/${expectedCount}: продолжай по образцу.`
        : `Stroke ${actual.length + 1}/${expectedCount}: keep following the guide.`;
    } else if (!final && actual.length > expectedCount) {
      message = lang() === "ru"
        ? `Черты: ${actual.length}/${expectedCount}. Если лишняя линия случайная, нажми «Отменить черту».`
        : `Strokes: ${actual.length}/${expectedCount}. If one was accidental, tap “Undo stroke”.`;
    } else if (final) {
      message = hasPreciseStrokeData(card)
        ? (lang() === "ru" ? "Записано. Сравни с жёлтым порядком KanjiVG и двигайся дальше." : "Saved. Compare it with the yellow KanjiVG order and move on.")
        : (lang() === "ru" ? "Записано. Для этого кандзи пока есть только шаблон, без точной схемы штрихов." : "Saved. This kanji currently has a template only, without exact stroke paths.");
    }
    return { score, success, expectedCount, message };
  }

  function replayStrokeAnimation() {
    const canvas = document.getElementById("strokeCanvas");
    const card = currentWritingCard();
    if (!canvas || !card) return;
    cancelAnimationFrame(writingSession.demoAnimationId);
    const strokeTotal = writingStepCount(card);
    const duration = 460;
    const startedAt = performance.now();
    const frame = (now) => {
      const elapsed = now - startedAt;
      const index = clamp(Math.floor(elapsed / duration), 0, strokeTotal - 1);
      const progress = clamp((elapsed - index * duration) / duration, 0, 1);
      state.writingStep = index;
      drawWritingGuideFrame(index, progress);
      updateWritingStepUi();
      if (elapsed < strokeTotal * duration) {
        writingSession.demoAnimationId = requestAnimationFrame(frame);
      } else {
        state.writingStep = strokeTotal - 1;
        drawWritingGuideFrame(state.writingStep, 1);
        updateWritingStepUi();
      }
    };
    writingSession.demoAnimationId = requestAnimationFrame(frame);
  }

  function playWritingStep() {
    const canvas = document.getElementById("strokeCanvas");
    const card = currentWritingCard();
    if (!canvas || !card) return;
    cancelAnimationFrame(writingSession.demoAnimationId);
    const startedAt = performance.now();
    const duration = 520;
    const step = clamp(state.writingStep, 0, Math.max(0, writingStepCount(card) - 1));
    const frame = (now) => {
      const progress = clamp((now - startedAt) / duration, 0, 1);
      drawWritingGuideFrame(step, progress);
      if (progress < 1) writingSession.demoAnimationId = requestAnimationFrame(frame);
    };
    writingSession.demoAnimationId = requestAnimationFrame(frame);
  }

  function changeWritingStep(delta) {
    selectWritingStep(state.writingStep + delta, false);
  }

  function selectWritingStep(index, animate) {
    const card = currentWritingCard();
    if (!card) return;
    state.writingStep = clamp(index, 0, Math.max(0, writingStepCount(card) - 1));
    updateWritingStepUi();
    if (animate) playWritingStep();
    else drawWritingGuideFrame(state.writingStep, 1);
  }

  function updateWritingStepUi() {
    const card = currentWritingCard();
    if (!card) return;
    const steps = normalizeStrokeDescriptions(card);
    const label = lang() === "ru" ? "Шаг" : "Step";
    const counter = document.getElementById("writingStepCounter");
    if (counter) counter.textContent = `${label} ${state.writingStep + 1}/${writingStepCount(card)}`;
    const stepText = document.querySelector(".writing-step-head .label");
    if (stepText) stepText.textContent = steps[state.writingStep] || "";
    $$(".writing-guide-list li").forEach((item, index) => item.classList.toggle("is-active", index === state.writingStep));
  }

  function drawWritingGuideFrame(activeIndex = state.writingStep, progress = 1) {
    const canvas = document.getElementById("strokeCanvas");
    const card = currentWritingCard();
    if (!canvas || !card) return;
    const context = canvas.getContext("2d");
    clearCanvas(context, canvas);
    const strokeData = preciseStrokeDataForCard(card);
    if (!strokeData) {
      drawWritingFallbackTemplate(context, canvas, card, activeIndex);
      return;
    }
    drawKanjiSvgStrokes(context, canvas, strokeData, {
      activeIndex,
      progress,
      showFuture: true,
      guideAlpha: 1,
      showNumbers: true
    });
  }

  function drawExpectedGuide(context, canvas, card) {
    const strokeData = preciseStrokeDataForCard(card);
    if (!strokeData) {
      drawWritingFallbackTemplate(context, canvas, card, state.writingStep);
      return;
    }
    drawKanjiSvgStrokes(context, canvas, strokeData, {
      activeIndex: state.writingStep,
      progress: 1,
      showFuture: true,
      guideAlpha: 0.24,
      showNumbers: false
    });
  }

  function preciseStrokeDataForCard(card) {
    if (!card?.kanji) return null;
    const data = state.kanjiStrokes?.[card.kanji];
    if (!data?.strokeOrder?.length) return null;
    return data;
  }

  function hasPreciseStrokeData(card) {
    return Boolean(preciseStrokeDataForCard(card));
  }

  function writingStepCount(card) {
    const data = preciseStrokeDataForCard(card);
    return Math.max(1, data?.strokeOrder?.length || Number(card?.strokes || 1));
  }

  function drawKanjiSvgStrokes(context, canvas, strokeData, options = {}) {
    const activeIndex = clamp(Number(options.activeIndex || 0), 0, Math.max(0, strokeData.strokeOrder.length - 1));
    const transform = kanjiSvgTransform(strokeData, canvas, options.padding || 22);
    const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
    const active = getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim();
    const muted = getComputedStyle(document.documentElement).getPropertyValue("--muted").trim();
    strokeData.strokeOrder.forEach((stroke, index) => {
      const isPast = index < activeIndex;
      const isActive = index === activeIndex;
      const isFuture = index > activeIndex;
      if (isFuture && !options.showFuture) return;
      context.save();
      context.translate(transform.x, transform.y);
      context.scale(transform.scale, transform.scale);
      context.lineCap = "round";
      context.lineJoin = "round";
      context.strokeStyle = isActive ? active : (isPast ? accent : muted);
      context.lineWidth = (isActive ? 8 : 5.5) / transform.scale;
      context.globalAlpha = Number(options.guideAlpha ?? 1) * (isActive ? 1 : isPast ? 0.86 : 0.24);
      if (isActive && options.progress < 1) {
        context.globalAlpha *= 0.45 + clamp(options.progress, 0, 1) * 0.55;
      }
      if (isActive) {
        context.shadowColor = "rgba(248, 216, 74, 0.34)";
        context.shadowBlur = 13 / transform.scale;
      }
      context.stroke(new Path2D(stroke.path));
      context.restore();
      if (options.showNumbers) drawSvgStrokeNumber(context, stroke, transform, index + 1, isActive);
    });
  }

  function kanjiSvgTransform(strokeData, canvas, padding = 22) {
    const box = parseViewBox(strokeData.viewBox);
    const scale = Math.min((canvas.width - padding * 2) / box.width, (canvas.height - padding * 2) / box.height);
    const x = (canvas.width - box.width * scale) / 2 - box.x * scale;
    const y = (canvas.height - box.height * scale) / 2 - box.y * scale;
    return { ...box, scale, x, y };
  }

  function parseViewBox(viewBox) {
    const parts = String(viewBox || "0 0 109 109").trim().split(/\s+/).map(Number);
    const [x = 0, y = 0, width = 109, height = 109] = parts;
    return { x, y, width: Math.max(1, width), height: Math.max(1, height) };
  }

  function drawSvgStrokeNumber(context, stroke, transform, number, active) {
    const point = firstSvgMovePoint(stroke.path);
    if (!point) return;
    const x = transform.x + point.x * transform.scale;
    const y = transform.y + point.y * transform.scale;
    drawStrokeBadge(context, x, y, number, active);
  }

  function firstSvgMovePoint(pathData) {
    const match = String(pathData || "").match(/M\s*(-?\d+(?:\.\d+)?)[,\s]+(-?\d+(?:\.\d+)?)/i);
    if (!match) return null;
    return { x: Number(match[1]), y: Number(match[2]) };
  }

  function drawStrokeBadge(context, x, y, number, active) {
    context.save();
    context.fillStyle = active
      ? getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim()
      : getComputedStyle(document.documentElement).getPropertyValue("--surface-2").trim();
    context.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--line-strong").trim();
    context.lineWidth = 1;
    context.beginPath();
    context.arc(x, y, active ? 13 : 10, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.fillStyle = active ? "#111014" : getComputedStyle(document.documentElement).getPropertyValue("--text").trim();
    context.font = "800 12px system-ui";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(String(number), x, y + 0.5);
    context.restore();
  }

  function drawWritingFallbackTemplate(context, canvas, card, activeIndex = 0) {
    const textColor = getComputedStyle(document.documentElement).getPropertyValue("--text").trim();
    const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim();
    context.save();
    context.globalAlpha = 0.16;
    context.fillStyle = textColor;
    context.font = `900 ${Math.floor(canvas.height * 0.7)}px "Noto Sans JP", "Yu Gothic", serif`;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(card?.kanji || "文", canvas.width / 2, canvas.height / 2 + canvas.height * 0.04);
    context.globalAlpha = 1;
    context.fillStyle = accent;
    context.font = "800 15px system-ui";
    context.textAlign = "left";
    context.textBaseline = "top";
    const label = lang() === "ru"
      ? `Шаг ${activeIndex + 1}/${writingStepCount(card)} · точной схемы пока нет`
      : `Step ${activeIndex + 1}/${writingStepCount(card)} · exact paths not available yet`;
    context.fillText(label, 18, 16);
    context.restore();
  }

  function drawSmoothStroke(context, rawPoints, options = {}) {
    const points = rawPoints.map(toCanvasPoint).filter(Boolean);
    if (!context || !points.length) return;
    context.save();
    context.strokeStyle = options.color || getComputedStyle(document.documentElement).getPropertyValue("--text").trim();
    context.lineWidth = options.width || 12;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.imageSmoothingEnabled = true;
    if (options.shadow) {
      context.shadowColor = "rgba(255, 48, 92, 0.36)";
      context.shadowBlur = 12;
    }
    context.beginPath();
    context.moveTo(points[0].x, points[0].y);
    if (points.length === 1) {
      context.arc(points[0].x, points[0].y, context.lineWidth / 2, 0, Math.PI * 2);
      context.fillStyle = context.strokeStyle;
      context.fill();
      context.restore();
      return;
    }
    if (points.length === 2) {
      context.lineTo(points[1].x, points[1].y);
    } else {
      for (let index = 1; index < points.length - 1; index += 1) {
        const mid = midpoint(points[index], points[index + 1]);
        context.quadraticCurveTo(points[index].x, points[index].y, mid.x, mid.y);
      }
      const last = points[points.length - 1];
      context.lineTo(last.x, last.y);
    }
    context.stroke();
    context.restore();
  }

  function drawStrokeNumber(context, stroke, number, active) {
    const first = toCanvasPoint(stroke[0]);
    if (!first) return;
    context.save();
    context.fillStyle = active
      ? getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim()
      : getComputedStyle(document.documentElement).getPropertyValue("--surface-2").trim();
    context.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--line-strong").trim();
    context.lineWidth = 1;
    context.beginPath();
    context.arc(first.x, first.y, active ? 13 : 10, 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.fillStyle = active ? "#111014" : getComputedStyle(document.documentElement).getPropertyValue("--text").trim();
    context.font = "800 12px system-ui";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(String(number), first.x, first.y + 0.5);
    context.restore();
  }

  function clearCanvas(context, canvas) {
    if (!context || !canvas) return;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--surface").trim();
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid(context, canvas);
  }

  function drawGrid(context, canvas) {
    context.save();
    context.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--line").trim();
    context.lineWidth = 1;
    context.setLineDash([8, 8]);
    context.beginPath();
    context.moveTo(canvas.width / 2, 0);
    context.lineTo(canvas.width / 2, canvas.height);
    context.moveTo(0, canvas.height / 2);
    context.lineTo(canvas.width, canvas.height / 2);
    context.moveTo(0, 0);
    context.lineTo(canvas.width, canvas.height);
    context.moveTo(canvas.width, 0);
    context.lineTo(0, canvas.height);
    context.stroke();
    context.setLineDash([]);
    context.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--line-strong").trim();
    context.strokeRect(0.5, 0.5, canvas.width - 1, canvas.height - 1);
    context.restore();
  }

  function normalizeStrokeDescriptions(card) {
    const precise = preciseStrokeDataForCard(card);
    if (precise?.strokeOrder?.length) {
      return precise.strokeOrder.map((stroke, index) => lang() === "ru"
        ? (stroke.description_ru || `Штрих ${index + 1} по данным KanjiVG`)
        : (stroke.description_en || `Stroke ${index + 1} from KanjiVG data`));
    }
    const source = Array.isArray(card?.stroke_order) ? card.stroke_order : [];
    return Array.from({ length: writingStepCount(card) }, (_, index) => source[index] || fallbackStrokeDescription(card, index));
  }

  function fallbackStrokeDescription(card, index) {
    if (lang() !== "ru") {
      return `Step ${index + 1}: exact stroke paths are not available yet. Use the translucent ${card?.kanji || "kanji"} template.`;
    }
    return `Шаг ${index + 1}: для этого кандзи пока нет точной схемы штрихов. Обводи полупрозрачный шаблон ${card?.kanji || ""}.`;
  }

  function compareStroke(actualStroke, expectedStroke, canvas) {
    const expected = expectedStroke.map(toCanvasPoint);
    const actual = actualStroke.map(toCanvasPoint);
    const expectedSamples = samplePolyline(expected, 18);
    const actualSamples = samplePolyline(actual, 26);
    const diagonal = Math.hypot(canvas.width, canvas.height);
    const averageDistance = expectedSamples.reduce((sum, point) => sum + minDistance(point, actualSamples), 0) / expectedSamples.length;
    const distanceScore = clamp(100 - (averageDistance / diagonal) * 310, 0, 100);
    const startScore = clamp(100 - (distance(actual[0], expected[0]) / diagonal) * 260, 0, 100);
    const endScore = clamp(100 - (distance(actual[actual.length - 1], expected[expected.length - 1]) / diagonal) * 260, 0, 100);
    const directionScore = directionSimilarity(actual, expected);
    const lengthRatio = pathLength(actual) / Math.max(1, pathLength(expected));
    const lengthScore = clamp(100 - Math.abs(Math.log(Math.max(0.08, lengthRatio))) * 58, 0, 100);
    const score = Math.round(distanceScore * 0.45 + ((startScore + endScore) / 2) * 0.22 + directionScore * 0.23 + lengthScore * 0.1);
    return {
      score,
      directionOk: directionScore >= 46,
      positionOk: distanceScore >= 44
    };
  }

  function updateWritingFeedback(result) {
    const counter = document.getElementById("writingStrokeCounter");
    if (counter) counter.textContent = `${writingSession.strokes.length}/${result.expectedCount}`;
    const score = document.getElementById("writingScore");
    if (score) {
      score.querySelector("span").textContent = `${result.score}%`;
      score.querySelector("i").style.width = `${result.score}%`;
    }
    const feedback = document.getElementById("writingFeedback");
    if (feedback) {
      feedback.textContent = result.message;
      feedback.classList.toggle("is-good", result.success);
      feedback.classList.toggle("is-warning", !result.success && result.score > 0);
    }
  }

  function toCanvasPoint(point) {
    if (!point) return null;
    if (Array.isArray(point)) return { x: point[0], y: point[1] };
    return { x: point.x, y: point.y };
  }

  function midpoint(a, b) {
    return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
  }

  function distance(a, b) {
    return Math.hypot((a?.x || 0) - (b?.x || 0), (a?.y || 0) - (b?.y || 0));
  }

  function minDistance(point, points) {
    return points.reduce((best, item) => Math.min(best, distance(point, item)), Infinity);
  }

  function pathLength(points) {
    return points.slice(1).reduce((sum, point, index) => sum + distance(points[index], point), 0);
  }

  function samplePolyline(points, count) {
    const length = pathLength(points);
    if (!length) return [points[0]];
    return Array.from({ length: count }, (_, index) => pointAtLength(points, (length * index) / Math.max(1, count - 1)));
  }

  function pointAtLength(points, target) {
    let traveled = 0;
    for (let index = 1; index < points.length; index += 1) {
      const start = points[index - 1];
      const end = points[index];
      const segment = distance(start, end);
      if (traveled + segment >= target) {
        const ratio = segment ? (target - traveled) / segment : 0;
        return { x: start.x + (end.x - start.x) * ratio, y: start.y + (end.y - start.y) * ratio };
      }
      traveled += segment;
    }
    return points[points.length - 1];
  }

  function clipPolyline(rawPoints, progress) {
    const points = rawPoints.map(toCanvasPoint);
    const target = pathLength(points) * clamp(progress, 0.02, 1);
    const clipped = [points[0]];
    let traveled = 0;
    for (let index = 1; index < points.length; index += 1) {
      const start = points[index - 1];
      const end = points[index];
      const segment = distance(start, end);
      if (traveled + segment < target) {
        clipped.push(end);
        traveled += segment;
      } else {
        clipped.push(pointAtLength([start, end], target - traveled));
        break;
      }
    }
    return clipped;
  }

  function directionSimilarity(actual, expected) {
    const av = vector(actual);
    const ev = vector(expected);
    const dot = av.x * ev.x + av.y * ev.y;
    const length = Math.hypot(av.x, av.y) * Math.hypot(ev.x, ev.y);
    if (!length) return 100;
    return clamp(((dot / length) + 1) * 50, 0, 100);
  }

  function vector(points) {
    const first = points[0];
    const last = points[points.length - 1];
    return { x: last.x - first.x, y: last.y - first.y };
  }

  function destroyCharts() {
    state.charts.forEach((chart) => chart.destroy());
    state.charts = [];
  }

  function getStudyCandidates(lessonId, reviewOnly) {
    const now = new Date();
    return state.cards
      .filter((card) => !lessonId || card.lessonId === lessonId)
      .filter((card) => {
        const lesson = state.lessons.find((item) => item.id === card.lessonId);
        if (lesson && !isLessonUnlocked(lesson)) return false;
        const progress = getCardProgress(card.id);
        if (progress.state === "New") return !reviewOnly;
        return progress.dueAt && new Date(progress.dueAt) <= now;
      })
      .sort(compareStudyCards);
  }

  function getDueNowCards() {
    return getStudyCandidates(null, true);
  }

  function getTodayCards() {
    const end = endOfToday();
    return state.cards.filter((card) => {
      const lesson = state.lessons.find((item) => item.id === card.lessonId);
      if (lesson && !isLessonUnlocked(lesson)) return false;
      const progress = getCardProgress(card.id);
      return progress.state === "New" || (progress.dueAt && new Date(progress.dueAt) <= end);
    }).sort(compareStudyCards);
  }

  function compareStudyCards(a, b) {
    const pa = getCardProgress(a.id);
    const pb = getCardProgress(b.id);
    const aTime = pa.dueAt ? new Date(pa.dueAt).getTime() : 0;
    const bTime = pb.dueAt ? new Date(pb.dueAt).getTime() : 0;
    return aTime === bTime ? Number(a.id) - Number(b.id) : aTime - bTime;
  }

  function getFilteredCards() {
    const query = state.filters.query.trim().toLocaleLowerCase(lang() === "ru" ? "ru-RU" : "en-US");
    return state.cards.filter((card) => {
      const meta = cardMeta(card.id);
      const haystack = [
        card.kanji, cardMeaning(card), card.meaning_ru, card.hiragana, card.romaji, card.onyomi, card.onyomi_romaji, card.kunyomi, card.kunyomi_romaji, readingSummaryText(card), card.jlpt, lessonTitleById(card.lessonId), cardInterface(card), meta.radical, localized(meta.radicalMeaning || {}),
        ...card.apps, ...card.examples.flatMap((example) => [example.word, example.reading, example.romaji, example.translation, exampleTranslation(example)])
      ].join(" ").toLocaleLowerCase(lang() === "ru" ? "ru-RU" : "en-US");
      return (!query || haystack.includes(query))
        && (state.filters.jlpt === "all" || card.jlpt === state.filters.jlpt)
        && (state.filters.radical === "all" || meta.radical === state.filters.radical)
        && (state.filters.favorites === "all" || Boolean(state.progress.favorites[card.id]))
        && matchesStrokeFilter(card.strokes, state.filters.strokes);
    });
  }

  function matchesStrokeFilter(strokes, filter) {
    if (filter === "all") return true;
    if (filter === "13+") return strokes >= 13;
    const [min, max] = filter.split("-").map(Number);
    return strokes >= min && strokes <= max;
  }

  function getSummary() {
    const total = state.cards.length;
    const learned = state.cards.filter((card) => getCardProgress(card.id).state !== "New").length;
    const mastered = state.cards.filter((card) => getCardProgress(card.id).state === "Mastered").length;
    return { total, learned, mastered, todayCards: getTodayCards().length, completion: progressWidth(mastered, total) };
  }

  function totalReviews() {
    return Object.values(state.progress.cards).reduce((sum, progress) => sum + (progress.reviewCount || progress.reviews || 0), 0);
  }

  function totalPositiveFragmentsFromHistory() {
    return (state.progress.transactions || []).reduce((sum, item) => sum + Math.max(0, Number(item.coins || 0)), 0);
  }

  function overallSuccessRate() {
    const total = state.progress.totalCorrect + state.progress.totalWrong;
    return total ? Math.round((state.progress.totalCorrect / total) * 100) : 0;
  }

  function countStates() {
    const counts = { New: 0, Learning: 0, Review: 0, Mastered: 0 };
    state.cards.forEach((card) => { counts[getCardProgress(card.id).state] += 1; });
    return counts;
  }

  function jlptProgress() {
    const result = {};
    state.cards.forEach((card) => {
      result[card.jlpt] ||= 0;
      if (getCardProgress(card.id).state === "Mastered") result[card.jlpt] += 1;
    });
    return result;
  }

  function todayStats() {
    const key = todayKey();
    if (!state.progress.daily[key]) state.progress.daily[key] = { learned: 0, reviews: 0, mastered: 0, mistakes: 0, minutes: 0, goalClaimed: false };
    return state.progress.daily[key];
  }

  function getLessonCards(lessonId) {
    return state.cards.filter((card) => card.lessonId === lessonId);
  }

  function getUnlockedNewCards() {
    return state.cards.filter((card) => {
      const lesson = state.lessons.find((item) => item.id === card.lessonId);
      return (!lesson || isLessonUnlocked(lesson)) && getCardProgress(card.id).stage === "new";
    });
  }

  function getDailyLesson() {
    const unlocked = state.lessons.filter((lesson) => isLessonUnlocked(lesson));
    if (!unlocked.length) return state.lessons[0] || null;
    const start = keyToDate("2026-01-01");
    const index = Math.abs(dayDifference(dateKey(start), todayKey())) % unlocked.length;
    return unlocked[index];
  }

  function findCard(id) {
    return state.cards.find((card) => card.id === String(id));
  }

  function cardMeta(id) {
    return state.kanjiMeta[String(id)] || {};
  }

  function kanjiHint(id) {
    const item = state.kanjiHints[String(id)] || {};
    return {
      hint: localized(item.hint || {}) || dialogueText("leya", "hint"),
      mnemonic: localized(item.mnemonic || {}) || ""
    };
  }

  function toggleFavorite(id) {
    if (!id) return;
    if (state.progress.favorites[id]) delete state.progress.favorites[id];
    else state.progress.favorites[id] = new Date().toISOString();
    saveProgress();
    render();
  }

  function resetReadingCheck(cardId = null) {
    state.readingCheck = { cardId: cardId ? String(cardId) : null, value: "", status: null, message: "" };
  }

  function syncReadingCheckCard(cardId) {
    const id = String(cardId || "");
    if (state.readingCheck.cardId !== id) resetReadingCheck(id);
  }

  function checkActiveCardReading() {
    const card = findCard(state.readingCheck.cardId || state.activeCardId);
    if (!card) return;
    stopKanjiAudio();

    const tokens = normalizeKanaTokens(state.readingCheck.value);
    const accepted = acceptedKanaReadings(card);
    const matched = tokens.some((token) => accepted.normalized.has(token));
    const hasValue = tokens.length > 0;
    const status = hasValue && matched ? "correct" : "wrong";
    const message = !hasValue
      ? (lang() === "ru" ? "Сначала напиши чтение хираганой или катаканой." : "Type a reading in hiragana or katakana first.")
      : matched
        ? (lang() === "ru" ? "Верно. Это чтение есть у карточки." : "Correct. This reading belongs to the card.")
        : (lang() === "ru" ? "Почти. Попробуй другое онъёми или кунъёми." : "Almost. Try another on'yomi or kun'yomi.");

    state.readingCheck = {
      cardId: card.id,
      value: state.readingCheck.value,
      status,
      message
    };
    playUxSound(status === "correct" ? "answer_correct" : "answer_wrong");
    render();
    requestAnimationFrame(() => {
      const input = document.getElementById(`readingCheck-${card.id}`);
      if (!input) return;
      input.focus();
      if ("setSelectionRange" in input) input.setSelectionRange(input.value.length, input.value.length);
    });
  }

  function acceptedKanaReadings(card) {
    const readings = cardReadings(card);
    const raw = [
      ...splitReadingText(readings.onyomi.kana),
      ...splitReadingText(readings.kunyomi.kana),
      ...splitReadingText(card.hiragana)
    ].filter(Boolean);
    const unique = raw.filter((value, index) => raw.indexOf(value) === index);
    return {
      normalized: new Set(unique.map(normalizeKanaToken).filter(Boolean))
    };
  }

  function normalizeKanaTokens(value) {
    return String(value || "")
      .split(/[\/,、，\s]+/u)
      .map(normalizeKanaToken)
      .filter(Boolean);
  }

  function normalizeKanaToken(value) {
    const kana = kataToHira(String(value || "").normalize("NFKC"))
      .replace(/[・･.\-]/gu, "")
      .replace(/\s+/gu, "");
    return expandKanaLongVowels(kana).trim();
  }

  function kataToHira(value) {
    return [...String(value || "")]
      .map((char) => {
        const code = char.charCodeAt(0);
        return code >= 0x30a1 && code <= 0x30f6 ? String.fromCharCode(code - 0x60) : char;
      })
      .join("");
  }

  function expandKanaLongVowels(value) {
    let output = "";
    for (const char of String(value || "")) {
      if (char === "ー") {
        output += kanaVowel(output.slice(-1));
        continue;
      }
      output += char;
    }
    return output;
  }

  function kanaVowel(char) {
    if ("あかさたなはまやらわがざだばぱゃぁ".includes(char)) return "あ";
    if ("いきしちにひみりぎじぢびぴぃ".includes(char)) return "い";
    if ("うくすつぬふむゆるぐずづぶぷゅぅ".includes(char)) return "う";
    if ("えけせてねへめれげぜでべぺぇ".includes(char)) return "え";
    if ("おこそとのほもよろをごぞどぼぽょぉ".includes(char)) return "お";
    return "";
  }

  function cardReadings(card) {
    const onyomiKana = card?.onyomi || "";
    const onyomiRomaji = card?.onyomi_romaji || "";
    const kunyomiKana = card?.kunyomi || "";
    const kunyomiRomaji = card?.kunyomi_romaji || "";
    if (onyomiKana || kunyomiKana || onyomiRomaji || kunyomiRomaji) {
      return {
        onyomi: { kana: onyomiKana, romaji: onyomiRomaji },
        kunyomi: { kana: kunyomiKana, romaji: kunyomiRomaji }
      };
    }

    const kana = splitReadingText(card?.hiragana);
    const romaji = splitReadingText(card?.romaji);
    return {
      onyomi: { kana: kana[0] || "", romaji: romaji[0] || "" },
      kunyomi: { kana: kana.slice(1).join(" / "), romaji: romaji.slice(1).join(" / ") }
    };
  }

  function splitReadingText(value) {
    return String(value || "")
      .split("/")
      .map((part) => part.trim())
      .filter(Boolean);
  }

  function readingLabel(kind) {
    if (kind === "onyomi") return lang() === "ru" ? "\u041e\u043d\u044a\u0451\u043c\u0438" : "On'yomi";
    return lang() === "ru" ? "\u041a\u0443\u043d\u044a\u0451\u043c\u0438" : "Kun'yomi";
  }

  function readingShortLabel(kind) {
    if (kind === "onyomi") return lang() === "ru" ? "\u041e\u043d" : "On";
    return lang() === "ru" ? "\u041a\u0443\u043d" : "Kun";
  }

  function readingSummaryText(card) {
    const readings = cardReadings(card);
    return [
      `${readingShortLabel("onyomi")}: ${readings.onyomi.kana || "—"} (${readings.onyomi.romaji || "—"})`,
      `${readingShortLabel("kunyomi")}: ${readings.kunyomi.kana || "—"} (${readings.kunyomi.romaji || "—"})`
    ].join(" · ");
  }

  function getKanjiAudioPath(card) {
    if (!card) return "";
    const explicit = card.audioSrc || card.audio || "";
    return normalizeAudioPath(explicit) || expectedKanjiAudioPath(card);
  }

  function expectedKanjiAudioPath(card) {
    if (!card?.id || !card?.jlpt || !card?.lessonId) return "";
    const slug = audioSlug(card.romaji);
    if (!slug) return "";
    return `./audio/kanji/${String(card.jlpt).toLowerCase()}/${card.lessonId}/${card.id}-${slug}.mp3`;
  }

  function normalizeAudioPath(path) {
    if (!path) return "";
    if (path.startsWith("./") || path.startsWith("http")) return path;
    if (path.startsWith("/")) return `.${path}`;
    return `./${path}`;
  }

  function audioSlug(romaji) {
    return String(romaji || "")
      .split("/")[0]
      .trim()
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function canPlayKanjiAudio(card) {
    return Boolean(getKanjiAudioPath(card) || getKanjiSpeechText(card));
  }

  function getKanjiSpeechText(card) {
    if (!card) return "";
    const readings = cardReadings(card);
    return readings.onyomi.kana || readings.kunyomi.kana || card.hiragana || card.kanji || "";
  }

  function firstReading(value) {
    return splitReadingText(value)[0] || String(value || "").trim();
  }

  function autoPlayActiveKanjiAudio() {
    if (state.route !== "learn" && state.route !== "review") return;
    const waitForUx = 560 - (Date.now() - lastUxSoundAt);
    if (waitForUx > 0) {
      window.setTimeout(autoPlayActiveKanjiAudio, waitForUx);
      return;
    }
    const card = findCard(state.activeCardId);
    const audio = normalizeAudioPath(card?.audioSrc || card?.audio || "");
    if (!card || !audio) return;
    const key = `${state.route}:${card.id}:${audio}`;
    if (key === lastAutoAudioKey) return;
    lastAutoAudioKey = key;
    playKanjiAudio(card, { silent: true });
  }

  function stopKanjiAudio() {
    if (activeKanjiAudio) {
      activeKanjiAudio.pause();
      activeKanjiAudio.currentTime = 0;
      activeKanjiAudio = null;
    }
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  }

  function playKanjiAudio(card, options = {}) {
    const audio = getKanjiAudioPath(card);
    if (!audio) {
      return Promise.resolve(options.silent ? false : speakKanjiAudio(card));
    }

    if (activeKanjiAudio) {
      activeKanjiAudio.pause();
      activeKanjiAudio.currentTime = 0;
    }

    activeKanjiAudio = new Audio(audio);
    activeKanjiAudio.preload = "auto";
    activeKanjiAudio.onended = () => {
      activeKanjiAudio = null;
    };
    activeKanjiAudio.onerror = () => {
      if (!options.silent) console.warn("Kanji audio file could not be loaded.", { id: card?.id, audio });
    };

    return activeKanjiAudio.play()
      .then(() => true)
      .catch((error) => {
        if (!options.silent && speakKanjiAudio(card)) return true;
        if (!options.silent) console.warn("Kanji audio playback was blocked or failed.", { id: card?.id, audio, error });
        return false;
      });
  }

  function speakKanjiAudio(card) {
    const text = firstReading(getKanjiSpeechText(card));
    if (!text || !("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      console.warn("Kanji audio is not available for this card.", { id: card?.id, expected: expectedKanjiAudioPath(card) });
      return false;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    utterance.rate = 0.92;
    window.speechSynthesis.speak(utterance);
    return true;
  }

  function playAudioPlaceholder(url, label) {
    toast(url ? `${label}: ${url}` : `${label}: ${lang() === "ru" ? "аудио пока не добавлено" : "audio not added yet"}`);
  }

  function ensureActiveLesson() {
    const active = state.lessons.find((lesson) => lesson.id === state.activeLessonId);
    if (active && isLessonUnlocked(active)) return;
    state.activeLessonId = state.lessons.find((lesson) => isLessonUnlocked(lesson))?.id || state.lessons[0]?.id || null;
  }

  function isLessonUnlocked(lesson) {
    return state.progress.level >= unlockLevel(lesson);
  }

  function unlockLevel(lesson) {
    return state.rewards?.lessonUnlocks?.[lesson?.id] || 1;
  }

  function lessonProgressStatus(lesson) {
    if (!lesson || !isLessonUnlocked(lesson)) return "locked";
    const lessonCards = getLessonCards(lesson.id);
    if (!lessonCards.length) return "new";
    const completed = Boolean(state.progress.lessonCompletions?.[lesson.id]) || lessonCards.every((card) => {
      const progress = getCardProgress(card.id);
      return progress.state !== "New" || progress.reviewCount > 0 || progress.lastReview;
    });
    if (completed) return "completed";
    const started = lessonCards.some((card) => {
      const progress = getCardProgress(card.id);
      return progress.state !== "New" || progress.reviewCount > 0 || progress.lastReview;
    });
    return started ? "started" : "new";
  }

  function lessonStatusClass(status) {
    if (status === "completed") return "is-completed";
    if (status === "started") return "is-started";
    return "";
  }

  function lessonStatusLabel(status) {
    const ru = lang() === "ru";
    if (status === "completed") return ru ? "Урок пройден" : "Lesson completed";
    if (status === "started") return ru ? "Урок начат" : "Lesson started";
    return ru ? "Не начат" : "Not started";
  }

  function renderLessonStatusDot(status) {
    if (status !== "completed" && status !== "started") return "";
    return `<span class="lesson-status-dot" aria-label="${escapeAttr(lessonStatusLabel(status))}"></span>`;
  }

  function renderLessonStatusPill(status) {
    if (status !== "completed" && status !== "started") return "";
    return `<span class="pill lesson-status-pill ${lessonStatusClass(status)}">${escapeHtml(lessonStatusLabel(status))}</span>`;
  }

  function jlptLessonByLevel(jlpt) {
    const key = String(jlpt || "").toUpperCase();
    return state.jlptLessons.find((item) => item.jlpt === key) || null;
  }

  function jlptLessonForCard(card) {
    return card ? jlptLessonByLevel(card.jlpt) : null;
  }

  function jlptPracticeModuleByLevel(jlpt) {
    const key = String(jlpt || "").toUpperCase();
    return state.jlptPracticeLessons.find((item) => item.jlpt === key) || null;
  }

  function jlptLessonPractice() {
    state.progress.jlptLessonPractice = mergeJlptLessonPractice(defaultProgress().jlptLessonPractice, state.progress.jlptLessonPractice || {});
    return state.progress.jlptLessonPractice;
  }

  function currentJlptLessonDrill(module) {
    if (!module?.drills?.length) return null;
    const practice = jlptLessonPractice();
    const activeId = practice.activeIds[module.jlpt];
    const active = module.drills.find((item) => item.id === activeId);
    if (active) return active;
    practice.activeIds[module.jlpt] = module.drills[0].id;
    return module.drills[0];
  }

  function insertJlptLessonTile(index) {
    const module = jlptPracticeModuleByLevel(state.activeJlptLesson);
    const drill = currentJlptLessonDrill(module);
    if (!drill || !drill.tiles[index]) return;
    const practice = jlptLessonPractice();
    const selected = practice.selected[drill.id] || [];
    const total = drill.blanks.flatMap((blank) => blank.answer || []).length;
    if (selected.includes(index) || selected.length >= total) return;
    practice.selected[drill.id] = [...selected, index];
    practice.checked[drill.id] = false;
    practice.results[drill.id] = null;
    saveProgress();
    render();
  }

  function undoJlptLessonTile() {
    const drill = currentJlptLessonDrill(jlptPracticeModuleByLevel(state.activeJlptLesson));
    if (!drill) return;
    const practice = jlptLessonPractice();
    practice.selected[drill.id] = (practice.selected[drill.id] || []).slice(0, -1);
    practice.checked[drill.id] = false;
    practice.results[drill.id] = null;
    saveProgress();
    render();
  }

  function clearJlptLessonPractice() {
    const drill = currentJlptLessonDrill(jlptPracticeModuleByLevel(state.activeJlptLesson));
    if (!drill) return;
    const practice = jlptLessonPractice();
    practice.selected[drill.id] = [];
    practice.checked[drill.id] = false;
    practice.results[drill.id] = null;
    saveProgress();
    render();
  }

  function checkJlptLessonPractice() {
    const drill = currentJlptLessonDrill(jlptPracticeModuleByLevel(state.activeJlptLesson));
    if (!drill) return;
    const labels = { ...jlptLessonLabels(), ...jlptLessonExtraLabels() };
    const practice = jlptLessonPractice();
    const selected = practice.selected[drill.id] || [];
    const answer = drill.blanks.flatMap((blank) => blank.answer || []);
    const wrongIndexes = answer.reduce((wrong, kanji, index) => {
      const tile = drill.tiles[selected[index]];
      if (!tile || tile.kanji !== kanji) wrong.push(index);
      return wrong;
    }, []);
    const correct = selected.length === answer.length && wrongIndexes.length === 0;
    practice.checked[drill.id] = true;
    practice.results[drill.id] = {
      correct,
      wrongIndexes,
      message: correct ? labels.correct : labels.wrong
    };
    if (correct && !practice.completed[drill.id]) {
      practice.completed[drill.id] = new Date().toISOString();
      addReward(8, 1, `jlpt_practice:${drill.id}`);
      playUxSound("answer_correct");
    } else if (!correct) {
      playUxSound("answer_wrong");
    }
    saveProgress();
    render();
  }

  function nextJlptLessonPractice() {
    const module = jlptPracticeModuleByLevel(state.activeJlptLesson);
    const drill = currentJlptLessonDrill(module);
    if (!module || !drill) return;
    const index = module.drills.findIndex((item) => item.id === drill.id);
    const next = module.drills[(index + 1) % module.drills.length];
    const practice = jlptLessonPractice();
    practice.activeIds[module.jlpt] = next.id;
    practice.selected[next.id] ||= [];
    practice.checked[next.id] ||= false;
    practice.results[next.id] ||= null;
    saveProgress();
    render();
  }

  function cardsForJlpt(jlpt) {
    const key = String(jlpt || "").toUpperCase();
    return state.cards.filter((card) => String(card.jlpt || "").toUpperCase() === key);
  }

  function jlptLessonExtraLabels() {
    return lang() === "ru"
      ? {
        courseText: "Стратегия уровня, чтения, лексика, приложения и интерактивная практика. Контент хранится в JSON, поэтому урок можно расширять без изменения логики.",
        apps: "Приложения и интерфейсы",
        kana: "Хирагана и катакана",
        hiragana: "Хирагана",
        katakana: "Катакана",
        kanjiFocus: "Кандзи с фуриганой",
        sentenceDrill: "Поставь кандзи в пропуск",
        fillBlanks: "Заполни пропуск плитками по порядку.",
        check: "Проверить",
        undo: "Убрать",
        clear: "Очистить",
        next: "Следующее",
        correct: "Верно. +8 XP и +1 Moon Fragment.",
        wrong: "Почти. Проверь порядок плиток и попробуй ещё раз."
      }
      : {
        courseText: "Level strategy, readings, vocabulary, apps, and interactive practice. Content lives in JSON, so lessons can grow without changing app logic.",
        apps: "Apps and interfaces",
        kana: "Hiragana and katakana",
        hiragana: "Hiragana",
        katakana: "Katakana",
        kanjiFocus: "Kanji with furigana",
        sentenceDrill: "Place kanji into the blank",
        fillBlanks: "Fill the blank with tiles in order.",
        check: "Check",
        undo: "Undo",
        clear: "Clear",
        next: "Next",
        correct: "Correct. +8 XP and +1 Moon Fragment.",
        wrong: "Almost. Check the tile order and try again."
      };
  }

  function jlptLessonLabels() {
    return lang() === "ru"
      ? {
        back: "К урокам",
        courseMap: "Полноценный JLPT-модуль",
        courseText: "Краткая стратегия уровня, чтения, лексика и практика. Данные хранятся в JSON, поэтому урок можно расширять без изменения логики.",
        available: "кандзи уровня",
        learned: "изучено",
        mastered: "освоено",
        goals: "Цели уровня",
        practice: "Практика",
        checkpoint: "Чекпоинт"
      }
      : {
        back: "Back to lessons",
        courseMap: "Full JLPT module",
        courseText: "Level strategy, readings, vocabulary, and practice. The content lives in JSON, so lessons can grow without changing app logic.",
        available: "level kanji",
        learned: "learned",
        mastered: "mastered",
        goals: "Level goals",
        practice: "Practice",
        checkpoint: "Checkpoint"
      };
  }

  function calculateLevel(xp) {
    const curve = state.rewards?.levelCurve || { baseXp: 100, growth: 1.35 };
    let level = 1;
    let remaining = xp;
    while (remaining >= xpForLevel(level, curve) && level < 100) {
      remaining -= xpForLevel(level, curve);
      level += 1;
    }
    return level;
  }

  function getLevelInfo() {
    const curve = state.rewards?.levelCurve || { baseXp: 100, growth: 1.35 };
    let level = 1;
    let remaining = state.progress.xp;
    while (remaining >= xpForLevel(level, curve) && level < 100) {
      remaining -= xpForLevel(level, curve);
      level += 1;
    }
    const next = xpForLevel(level, curve);
    return { current: remaining, next, toNext: Math.max(0, next - remaining), percent: progressWidth(remaining, next) };
  }

  function xpForLevel(level, curve) {
    return Math.round(curve.baseXp * Math.pow(curve.growth, level - 1));
  }

  function buyShopItem(id) {
    buyCustomizationItem(id);
  }

  function exportProgress() {
    const payload = { app: "Flash Kanji", exportedAt: new Date().toISOString(), progress: state.progress, customization: state.customization };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `flash-kanji-progress-${todayKey()}.json`;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    toast(t("export"));
  }

  async function shareAchievement() {
    const reward = state.rewardModal || {};
    const text = achievementShareText(reward);
    const url = appShareUrl();

    if (!navigator.share) {
      await copyShareFallback(text, url);
      return;
    }

    try {
      const imageBlob = await createAchievementCardBlob(reward);
      if (imageBlob && typeof File !== "undefined") {
        const file = new File([imageBlob], `flash-kanji-level-${state.progress.level}.png`, { type: "image/png" });
        if (navigator.canShare?.({ files: [file] })) {
          await navigator.share({
            title: "Flash Kanji",
            text,
            url,
            files: [file]
          });
          return;
        }
      }

      await navigator.share({
        title: "Flash Kanji",
        text,
        url
      });
    } catch (error) {
      if (error && error.name === "AbortError") return;
      try {
        await navigator.share({ title: "Flash Kanji", text, url });
        return;
      } catch (shareError) {
        if (shareError && shareError.name === "AbortError") return;
      }
      await copyShareFallback(text, url);
    }
  }

  function achievementShareText(reward = {}) {
    const prefix = t("shareFallback");
    const level = reward.level || state.progress.level;
    const xp = reward.type === "level" ? state.progress.xp : reward.totalXp || state.progress.xp;
    const coins = reward.type === "level" ? state.progress.moonFragments : reward.moonFragments || state.progress.moonFragments;
    return `${prefix}: ${t("level")} ${level}, ${xp} XP, ${coins} Moon Fragments.`;
  }

  function appShareUrl() {
    const url = new URL(location.href);
    url.search = "";
    url.hash = "home";
    return url.href;
  }

  async function createAchievementCardBlob(reward = {}) {
    const width = 1200;
    const height = 630;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    if (!context) return null;

    drawAchievementCardBackground(context, width, height);
    const cardLevel = reward.level || state.progress.level;
    const cardXp = reward.type === "level" ? state.progress.xp : reward.totalXp || state.progress.xp;
    const cardFragments = reward.type === "level" ? state.progress.moonFragments : reward.moonFragments || state.progress.moonFragments;

    const mascotKey = reward.mascot || (state.progress.level % 2 === 0 ? "leya" : "eva");
    const mascotSrc = mascotImageSrc(mascotKey, reward.mood || "happy", reward.dialog || reward.type || "achievement");
    const [logoImage, mascotImage] = await Promise.all([
      loadCanvasImage("assets/logo.png"),
      mascotSrc ? loadCanvasImage(mascotSrc) : Promise.resolve(null)
    ]);

    if (logoImage) drawContainedImage(context, logoImage, 58, 48, 330, 116);
    if (mascotImage) drawContainedImage(context, mascotImage, 780, 95, 330, 450);

    context.fillStyle = "#f7f4ee";
    context.font = "900 58px system-ui, sans-serif";
    context.fillText(t("levelUp"), 64, 230);

    context.font = "900 110px 'Yu Mincho', serif";
    context.fillStyle = "#ffe15a";
    context.fillText(`${t("level")} ${cardLevel}`, 64, 340);

    context.font = "800 38px system-ui, sans-serif";
    context.fillStyle = "#f7f4ee";
    context.fillText(`${cardXp} XP`, 70, 425);
    context.fillText(`${cardFragments} Moon Fragments`, 70, 482);

    context.fillStyle = "rgba(255,255,255,0.74)";
    context.font = "700 28px system-ui, sans-serif";
    context.fillText("Flash Kanji | SRS Japanese learning", 70, 558);

    context.strokeStyle = "rgba(255, 225, 90, 0.7)";
    context.lineWidth = 3;
    context.strokeRect(34, 30, width - 68, height - 60);

    return canvasToBlob(canvas);
  }

  function drawAchievementCardBackground(context, width, height) {
    const gradient = context.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#08080c");
    gradient.addColorStop(0.45, "#1c1018");
    gradient.addColorStop(1, "#071a18");
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);

    context.fillStyle = "rgba(255, 56, 92, 0.22)";
    context.beginPath();
    context.moveTo(0, 70);
    context.lineTo(720, 0);
    context.lineTo(560, 630);
    context.lineTo(0, 630);
    context.closePath();
    context.fill();

    context.strokeStyle = "rgba(255,255,255,0.08)";
    context.lineWidth = 1;
    for (let x = -width; x < width * 2; x += 38) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x + width, height);
      context.stroke();
    }
  }

  function loadCanvasImage(src) {
    return new Promise((resolve) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => resolve(null);
      image.src = new URL(src, location.href).href;
    });
  }

  function drawContainedImage(context, image, x, y, width, height) {
    const ratio = Math.min(width / image.naturalWidth, height / image.naturalHeight);
    const drawWidth = image.naturalWidth * ratio;
    const drawHeight = image.naturalHeight * ratio;
    context.drawImage(image, x + (width - drawWidth) / 2, y + (height - drawHeight) / 2, drawWidth, drawHeight);
  }

  function canvasToBlob(canvas) {
    return new Promise((resolve) => canvas.toBlob(resolve, "image/png", 0.94));
  }

  async function copyShareFallback(text, url) {
    const copied = await copyShareText(`${text}\n${url}`);
    toast(copied ? t("shareCopied") : text);
  }

  async function copyShareText(text) {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch {
        // Browsers can deny Clipboard API writes even from a user gesture.
      }
    }
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.append(textarea);
    textarea.focus();
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);
    try {
      return document.execCommand("copy");
    } catch {
      return false;
    } finally {
      textarea.remove();
    }
  }

  async function handleImportFile(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const parsed = JSON.parse(await file.text());
      state.progress = mergeProgress(defaultProgress(), parsed.progress || parsed);
      hydrateProgress();
      if (parsed.customization) {
        state.customization = {
          ...defaultCustomization(),
          ...parsed.customization,
          selected: { ...defaultCustomization().selected, ...(parsed.customization.selected || {}) }
        };
        saveCustomizationStorage();
      }
      hydrateCustomization();
      syncUxSoundSettings();
      saveProgress();
      applyTheme();
      toast(t("import"));
      render();
    } catch (error) {
      console.error(error);
      toast("Invalid JSON");
    } finally {
      event.target.value = "";
    }
  }

  function resetProgress() {
    if (!confirm(lang() === "ru" ? "Сбросить прогресс?" : "Reset progress?")) return;
    const settings = state.progress.settings;
    state.progress = defaultProgress();
    state.progress.settings = settings;
    hydrateProgress();
    syncUxSoundSettings();
    saveProgress();
    render();
  }

  function toggleTheme() {
    state.progress.settings.theme = state.progress.settings.theme === "dark" ? "light" : "dark";
    applyTheme();
    saveProgress();
    render();
  }

  function toggleLanguage() {
    state.progress.settings.language = lang() === "ru" ? "en" : "ru";
    state.progress.settings.languageAutoDetected = false;
    state.progress.settings.languageManuallySelected = true;
    saveProgress();
    render();
  }

  function toggleSound() {
    state.progress.settings.sound = !state.progress.settings.sound;
    syncUxSoundSettings();
    saveProgress();
    toast(state.progress.settings.sound ? "♪" : "×");
  }

  function toggleUxSound() {
    state.progress.settings.uxSound = state.progress.settings.uxSound === false;
    syncUxSoundSettings();
    saveProgress();
    toast(state.progress.settings.uxSound ? "UX On" : "UX Off");
    if (state.progress.settings.uxSound) playUxSound("notification_soft");
    render();
  }

  function soundManager() {
    return window.FlashKanjiSound || null;
  }

  function preloadUxSounds() {
    try {
      soundManager()?.preloadSounds?.();
    } catch (error) {
      console.warn("UX sounds preload failed.", error);
    }
  }

  function syncUxSoundSettings() {
    const manager = soundManager();
    if (!manager || !state.progress?.settings) return;
    manager.setSoundEnabled?.(isUxSoundEnabled());
    manager.setSoundVolume?.(getUxSoundVolume());
  }

  function isUxSoundEnabled() {
    return state.progress?.settings?.sound !== false && state.progress?.settings?.uxSound !== false;
  }

  function getUxSoundVolume() {
    const volume = Number(state.progress?.settings?.uxVolume);
    return Number.isFinite(volume) ? clamp(volume, 0, 1) : 0.75;
  }

  function setUxSoundVolume(value) {
    const volume = clamp(Number(value), 0, 1);
    state.progress.settings.uxVolume = volume;
    syncUxSoundSettings();
    saveProgress();
  }

  function playUxSound(name) {
    if (!isUxSoundEnabled()) return false;
    syncUxSoundSettings();
    try {
      const played = Boolean(soundManager()?.playSound?.(name));
      if (played) lastUxSoundAt = Date.now();
      return played;
    } catch (error) {
      console.warn("UX sound failed.", error);
      return false;
    }
  }

  function applyTheme() {
    document.documentElement.dataset.theme = state.progress.settings.theme;
    document.documentElement.dataset.customTheme = state.customization?.selected?.theme || "theme_default_dark";
    const roomBackground = currentEvaRoomBackground();
    document.documentElement.dataset.customRoom = roomBackground?.id || "bg_study_hub";
    document.documentElement.style.setProperty("--app-room-bg", cssImageUrl(roomBackground?.file || "assets/bg/bg_study_hub.png"));
    const evaEffect = state.route === "eva-room" ? state.evaRuntime?.currentEffect || evaAutonomy().currentEffect : null;
    const usableEvaEffect = evaEffect === "none" || (evaEffect && customizationShopItem(evaEffect) && isCustomizationOwned(evaEffect)) ? evaEffect : null;
    document.documentElement.dataset.customEffect = usableEvaEffect || state.customization?.selected?.effect || "none";
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", state.progress.settings.theme === "light" ? "#f8f7f2" : "#08080c");
  }

  function cssImageUrl(value) {
    const safe = String(value || "").replace(/["\\\n\r]/g, "");
    return `url("${safe || "assets/bg/bg_study_hub.png"}")`;
  }

  function t(key) {
    return state.i18n?.ui?.[key]?.[lang()] || state.i18n?.ui?.[key]?.ru || key;
  }

  function lang() {
    return state.progress?.settings?.language || "ru";
  }

  function localized(value) {
    if (!value || typeof value !== "object") return String(value || "");
    return value[lang()] || value.ru || value.en || "";
  }

  function formatDate(value) {
    if (!value) return "";
    try {
      return new Intl.DateTimeFormat(lang() === "ru" ? "ru-RU" : "en-US", {
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit"
      }).format(new Date(value));
    } catch {
      return String(value).slice(0, 16);
    }
  }

  function lessonTitle(lesson) {
    return lang() === "en" ? state.lessonTranslations[lesson.id]?.title_en || lesson.title : lesson.title;
  }

  function lessonSummary(lesson) {
    return lang() === "en" ? state.lessonTranslations[lesson.id]?.summary_en || lesson.summary : lesson.summary;
  }

  function lessonTitleById(lessonId) {
    const lesson = state.lessons.find((item) => item.id === lessonId);
    return lesson ? lessonTitle(lesson) : "";
  }

  function cardMeaning(card) {
    return lang() === "en" ? state.kanjiTranslations[card.id]?.meaning_en || card.meaning_ru : card.meaning_ru;
  }

  function cardInterface(card) {
    return lang() === "en" ? state.kanjiTranslations[card.id]?.interface_use_en || card.interface_use : card.interface_use;
  }

  function exampleTranslation(example) {
    if (lang() !== "en") return example.translation_ru || example.translation || "";
    if (example.translation_en) return example.translation_en;
    const vocabularyMatch = state.vocabulary.find((item) =>
      item.word === example.word
      || normalizeRomaji(item.romaji) === normalizeRomaji(example.romaji)
    );
    if (vocabularyMatch?.translation_en) return vocabularyMatch.translation_en;
    return commonExampleTranslationsEn[normalizeRomaji(example.romaji)] || example.translation || "";
  }

  function normalizeRomaji(value) {
    return String(value || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "");
  }

  function getMascot(character) {
    return state.dialogues?.mascots?.[character] || { name: { ru: character, en: character }, sprites: {}, dialogs: {} };
  }

  function dialogueText(character, category) {
    const ambientEvaLine = character === "eva" ? evaAmbientMascotDialogue(category) : "";
    if (ambientEvaLine) return ambientEvaLine;
    const dialogs = getMascot(character).dialogs?.[category] || getMascot(character).dialogs?.welcome || {};
    const lines = dialogs[lang()] || dialogs.ru || [""];
    return sample(lines);
  }

  function evaAmbientMascotDialogue(category = "welcome") {
    const key = String(category || "welcome").toLowerCase();
    if (!["welcome", "progress", "hint", "lessoncomplete", "masterymilestone", "achievement"].includes(key)) return "";
    const categories = evaAmbientMascotCategories(key);
    const lines = [...(state.evaAutonomyLines || []), ...evaRoomLines()]
      .filter((line) => {
        const text = localized(line?.text || {});
        if (!text) return false;
        const tags = Array.isArray(line.tags) ? line.tags : [];
        const categoryMatch = categories.includes(line.category) || tags.some((tag) => categories.includes(tag));
        if (!categoryMatch) return false;
        const speech = compactEvaMascotSpeech(text);
        return speech.length >= 12 && speech.length <= 132;
      });
    const fresh = lines.filter((line) => !recentEvaMascotLineIds.includes(line.id));
    const line = sample(fresh.length ? fresh : lines);
    if (!line) return "";
    if (line.id) {
      recentEvaMascotLineIds = [line.id, ...recentEvaMascotLineIds.filter((id) => id !== line.id)].slice(0, 18);
    }
    return compactEvaMascotSpeech(localized(line.text || {}));
  }

  function evaAmbientMascotCategories(category) {
    return {
      welcome: ["fis_study", "fis_focus", "fis_observation", "fis_short", "study", "short", "mood", "room"],
      progress: ["fis_reward", "fis_streak", "fis_review", "reward", "streak", "review", "progress"],
      hint: ["fis_focus", "fis_observation", "hint", "study"],
      lessoncomplete: ["fis_reward", "fis_streak", "reward", "study"],
      masterymilestone: ["fis_reward", "fis_streak", "reward", "progress"],
      achievement: ["fis_reward", "reward", "achievement"]
    }[category] || ["fis_study", "study"];
  }

  function compactEvaMascotSpeech(text) {
    const clean = String(text || "").replace(/\s+/g, " ").trim();
    if (clean.length <= 132) return clean;
    const parts = clean.match(/[^.!?。！？]+[.!?。！？]?/g) || [clean];
    let compact = "";
    for (const part of parts) {
      const next = `${compact} ${part.trim()}`.trim();
      if (next.length > 132) break;
      compact = next;
    }
    if (compact.length >= 12) return compact;
    return `${clean.slice(0, 124).trimEnd()}...`;
  }

  function renderStatePill(cardState) {
    const stage = toStage(cardState);
    return `<span class="pill ${stage}">${escapeHtml(stateLabels[stage] || "New")}</span>`;
  }

  function toStage(value) {
    const raw = String(value || "new").toLowerCase();
    if (raw === "new" || raw === "learning" || raw === "review" || raw === "mastered") return raw;
    if (raw === "New".toLowerCase()) return "new";
    return raw.includes("master") ? "mastered" : raw.includes("learn") ? "learning" : raw.includes("review") ? "review" : "new";
  }

  function fromStage(stage) {
    return ({ new: "New", learning: "Learning", review: "Review", mastered: "Mastered" })[toStage(stage)];
  }

  function calculateSuccessRate(progress) {
    const total = (progress.correct || 0) + (progress.wrong || 0);
    return total ? Math.round(((progress.correct || 0) / total) * 100) : 0;
  }

  function chartColors() {
    const styles = getComputedStyle(document.documentElement);
    return {
      text: styles.getPropertyValue("--text").trim(),
      muted: styles.getPropertyValue("--muted").trim(),
      line: styles.getPropertyValue("--line").trim(),
      red: styles.getPropertyValue("--accent").trim(),
      yellow: styles.getPropertyValue("--accent-2").trim(),
      green: styles.getPropertyValue("--accent-3").trim(),
      blue: styles.getPropertyValue("--accent-4").trim(),
      danger: styles.getPropertyValue("--danger").trim(),
      pink: "#ff91d8",
      blueSoft: "rgba(67, 214, 255, 0.16)",
      dangerSoft: "rgba(255, 107, 95, 0.16)"
    };
  }

  function chartOptions(colors) {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { labels: { color: colors.text } } },
      scales: {
        x: { ticks: { color: colors.muted }, grid: { color: colors.line } },
        y: { beginAtZero: true, ticks: { color: colors.muted, precision: 0 }, grid: { color: colors.line } }
      }
    };
  }

  function playTone(kind) {
    if (!state.progress.settings.sound) return;
    if (soundManager()) {
      playUxSound(kind === "again" ? "answer_wrong" : "answer_correct");
      return;
    }
    try {
      lastUxSoundAt = Date.now();
      audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const now = audioContext.currentTime;
      oscillator.type = "triangle";
      oscillator.frequency.value = kind === "again" ? 180 : 480;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.13, now + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
      oscillator.connect(gain).connect(audioContext.destination);
      oscillator.start(now);
      oscillator.stop(now + 0.2);
    } catch (error) {
      console.warn("Audio unavailable.", error);
    }
  }

  function playAchievementSound() {
    if (!state.progress.settings.sound) return;
    try {
      lastUxSoundAt = Date.now();
      audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
      const now = audioContext.currentTime;
      [523.25, 659.25, 783.99].forEach((frequency, index) => {
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();
        oscillator.type = "sine";
        oscillator.frequency.value = frequency;
        const start = now + index * 0.08;
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(0.12, start + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.24);
        oscillator.connect(gain).connect(audioContext.destination);
        oscillator.start(start);
        oscillator.stop(start + 0.26);
      });
    } catch (error) {
      console.warn("Achievement sound unavailable.", error);
    }
  }

  function showConfetti() {
    const wrap = document.createElement("div");
    wrap.className = "confetti";
    wrap.innerHTML = Array.from({ length: 34 }, (_, index) => `<i style="--x:${Math.random() * 100}vw;--d:${Math.random() * 0.8 + 0.8}s;--r:${Math.random() * 360}deg;--c:${index % 4}"></i>`).join("");
    document.body.append(wrap);
    window.setTimeout(() => wrap.remove(), 1800);
  }

  function toast(message) {
    const element = $("#toast");
    element.textContent = message;
    element.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => { element.hidden = true; }, 2400);
  }

  function renderLoading() {
    return `<section class="loading"><div><strong>Flash Kanji</strong><p>Loading...</p></div></section>`;
  }

  function renderLoadError(error) {
    return `<section class="empty-state" style="margin-top:24px"><span class="kanji-char">警</span><h1>Data error</h1><p>${escapeHtml(error.message)}</p></section>`;
  }

  function registerServiceWorker() {
    if (!("serviceWorker" in navigator) || location.protocol === "file:") return;
    let refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (refreshing) return;
      refreshing = true;
      location.reload();
    });
    navigator.serviceWorker.addEventListener("message", (event) => {
      if (event.data?.type !== "FLASH_KANJI_CACHE_RESET_DONE") return;
      try {
        localStorage.setItem(PWA_CACHE_RESET_STORAGE_KEY, `${BUILD_VERSION}:done`);
      } catch (error) {
        console.warn("Cannot save PWA cache reset marker.", error);
      }
    });
    window.addEventListener("load", async () => {
      try {
        const registration = await navigator.serviceWorker.register(`service-worker.js?v=${encodeURIComponent(BUILD_VERSION)}`);
        watchServiceWorkerUpdate(registration);
        await registration.update().catch(console.warn);
        requestServiceWorkerCacheReset(registration);
      } catch (error) {
        console.warn(error);
      }
    });
  }

  function watchServiceWorkerUpdate(registration) {
    if (!registration) return;
    registration.addEventListener("updatefound", () => {
      const worker = registration.installing;
      if (!worker) return;
      worker.addEventListener("statechange", () => {
        if (worker.state === "installed" || worker.state === "activated") {
          requestServiceWorkerCacheReset(registration);
        }
      });
    });
  }

  function requestServiceWorkerCacheReset(registration) {
    if (!("serviceWorker" in navigator)) return;
    const marker = `${BUILD_VERSION}:done`;
    try {
      if (localStorage.getItem(PWA_CACHE_RESET_STORAGE_KEY) === marker) return;
    } catch {}
    const worker = registration?.waiting || registration?.active || navigator.serviceWorker.controller;
    if (!worker) return;
    worker.postMessage({ type: "FLASH_KANJI_FORCE_CACHE_RESET", buildVersion: BUILD_VERSION });
  }

  function loadPwaInstallPromptState() {
    const base = { declineCount: 0, nextShowAt: 0, neverShow: false, installed: false };
    try {
      const raw = localStorage.getItem(PWA_INSTALL_STORAGE_KEY);
      if (!raw) return base;
      const saved = JSON.parse(raw);
      return {
        ...base,
        ...saved,
        declineCount: Number(saved.declineCount || 0),
        nextShowAt: Number(saved.nextShowAt || 0),
        neverShow: Boolean(saved.neverShow),
        installed: Boolean(saved.installed)
      };
    } catch (error) {
      console.warn("PWA install prompt state reset.", error);
      return base;
    }
  }

  function savePwaInstallPromptState() {
    try {
      localStorage.setItem(PWA_INSTALL_STORAGE_KEY, JSON.stringify(state.pwaInstallPrompt));
    } catch (error) {
      console.warn("Cannot save PWA install prompt state.", error);
    }
  }

  function handleBeforeInstallPrompt(event) {
    event.preventDefault();
    deferredPwaInstallPrompt = event;
    if (state.progress && state.i18n) showPwaInstallBanner();
  }

  async function handlePwaInstallRequest() {
    if (isPwaInstalled()) {
      handlePwaInstallAccepted();
      return;
    }

    if (!deferredPwaInstallPrompt) {
      if (isIosSafari()) toast(pwaInstallCopy().iosInstruction);
      return;
    }

    const promptEvent = deferredPwaInstallPrompt;
    deferredPwaInstallPrompt = null;
    try {
      await promptEvent.prompt();
      const choice = await promptEvent.userChoice;
      if (choice?.outcome === "accepted") {
        handlePwaInstallAccepted();
        return;
      }
      handlePwaInstallDeclined();
    } catch (error) {
      console.warn("PWA install prompt failed.", error);
      handlePwaInstallDeclined();
    }
  }

  function isPwaInstalled() {
    const standaloneDisplay = ["standalone", "fullscreen", "minimal-ui"].some((mode) =>
      window.matchMedia?.(`(display-mode: ${mode})`)?.matches
    );
    return standaloneDisplay || Reflect.get(navigator, "standalone") === true;
  }

  function canShowPwaInstallPrompt() {
    const promptState = state.pwaInstallPrompt || loadPwaInstallPromptState();
    if (isPwaInstalled() || promptState.installed || promptState.neverShow) return false;
    if (Date.now() < Number(promptState.nextShowAt || 0)) return false;
    return Boolean(deferredPwaInstallPrompt) || isIosSafari();
  }

  function showPwaInstallBanner() {
    if (canShowPwaInstallPrompt()) {
      playUxSound("notification_soft");
      render();
    }
  }

  function handlePwaInstallAccepted() {
    state.pwaInstallPrompt = {
      ...loadPwaInstallPromptState(),
      ...state.pwaInstallPrompt,
      installed: true,
      neverShow: true,
      nextShowAt: 0
    };
    savePwaInstallPromptState();
    scheduleNotificationPromptCheck();
    if (state.progress && state.i18n) render();
  }

  function handlePwaInstallDeclined() {
    const current = state.pwaInstallPrompt || loadPwaInstallPromptState();
    const declineCount = Math.min(Number(current.declineCount || 0) + 1, 5);
    state.pwaInstallPrompt = {
      ...current,
      declineCount,
      nextShowAt: scheduleNextPwaPrompt(declineCount),
      neverShow: declineCount >= 5,
      installed: false
    };
    savePwaInstallPromptState();
    render();
  }

  function scheduleNextPwaPrompt(declineCount) {
    const hour = 60 * 60 * 1000;
    const day = 24 * hour;
    const delays = {
      1: 12 * hour,
      2: 48 * hour,
      3: 7 * day,
      4: 30 * day
    };
    return declineCount >= 5 ? 0 : Date.now() + (delays[declineCount] || 12 * hour);
  }

  function syncPwaInstallInstalledFlag() {
    if (!isPwaInstalled() || state.pwaInstallPrompt.installed) return;
    state.pwaInstallPrompt = { ...state.pwaInstallPrompt, installed: true, neverShow: true, nextShowAt: 0 };
    savePwaInstallPromptState();
  }

  function isIosSafari() {
    const ua = navigator.userAgent || "";
    const isIos = /iphone|ipad|ipod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isSafari = /safari/i.test(ua) && !/(crios|fxios|edgios|opios|chrome|android)/i.test(ua);
    return isIos && isSafari;
  }

  function pwaInstallCopy() {
    if (lang() === "en") {
      return {
        badge: "Offline PWA",
        title: "Install Flash Kanji on your home screen?",
        description: "Your progress, lessons and reviews will open like a real app.",
        iosInstruction: "Tap Share -> Add to Home Screen.",
        install: "Install",
        later: "Later"
      };
    }
    return {
      badge: "Offline PWA",
      title: "Установить Flash Kanji на главный экран?",
      description: "Так прогресс, уроки и повторения будут открываться как приложение.",
      iosInstruction: "Нажмите Поделиться → На экран Домой.",
      install: "Установить",
      later: "Позже"
    };
  }

  function loadNotificationPromptState() {
    const base = {
      declineCount: 0,
      nextShowAt: 0,
      neverShow: false,
      permission: typeof Notification === "undefined" ? "unsupported" : Notification.permission,
      enabled: false,
      acceptedAt: null,
      lastAskedAt: 0,
      lastShown: {},
      periodicSync: false
    };
    try {
      const raw = localStorage.getItem(NOTIFICATION_STORAGE_KEY);
      if (!raw) return base;
      const saved = JSON.parse(raw);
      return {
        ...base,
        ...saved,
        declineCount: Number(saved.declineCount || 0),
        nextShowAt: Number(saved.nextShowAt || 0),
        neverShow: Boolean(saved.neverShow),
        enabled: Boolean(saved.enabled),
        lastShown: saved.lastShown && typeof saved.lastShown === "object" ? saved.lastShown : {}
      };
    } catch (error) {
      console.warn("Notification prompt state reset.", error);
      return base;
    }
  }

  function saveNotificationPromptState() {
    try {
      localStorage.setItem(NOTIFICATION_STORAGE_KEY, JSON.stringify(state.notificationPrompt));
    } catch (error) {
      console.warn("Cannot save notification prompt state.", error);
    }
  }

  function isNotificationInstallEligible() {
    return isPwaInstalled() || Boolean(state.pwaInstallPrompt?.installed);
  }

  function canShowNotificationPrompt(trigger = "usage") {
    const prompt = state.notificationPrompt || loadNotificationPromptState();
    if (!("Notification" in window) || prompt.neverShow || prompt.enabled) return false;
    if (!isNotificationInstallEligible()) return false;
    if (Notification.permission === "granted") return false;
    if (Notification.permission === "denied") return false;
    if (Date.now() < Number(prompt.nextShowAt || 0)) return false;
    if (trigger !== "lesson_complete" && Date.now() - notificationUsageStartedAt < 2 * 60 * 1000) return false;
    return true;
  }

  function maybeShowNotificationPrompt(trigger = "usage") {
    if (!canShowNotificationPrompt(trigger)) {
      if ("Notification" in window && Notification.permission === "granted") handleNotificationPermissionGranted();
      return false;
    }
    state.notificationPromptVisible = true;
    playUxSound("notification_soft");
    render();
    return true;
  }

  function scheduleNotificationPromptCheck() {
    clearTimeout(notificationPromptTimer);
    if (!isNotificationInstallEligible()) return;
    const wait = Math.max(0, 2 * 60 * 1000 - (Date.now() - notificationUsageStartedAt));
    notificationPromptTimer = window.setTimeout(() => maybeShowNotificationPrompt("usage"), wait);
  }

  async function handleNotificationPermissionAccepted() {
    state.notificationPromptVisible = false;
    if (!("Notification" in window)) {
      handleNotificationPermissionDeclined();
      return;
    }

    try {
      const permission = Notification.permission === "granted" ? "granted" : await Notification.requestPermission();
      state.notificationPrompt.permission = permission;
      state.notificationPrompt.lastAskedAt = Date.now();
      if (permission === "granted") {
        handleNotificationPermissionGranted();
        toast(notificationPromptCopy().enabled);
        render();
        return;
      }
      handleNotificationPermissionDeclined();
    } catch (error) {
      console.warn("Notification permission failed.", error);
      handleNotificationPermissionDeclined();
    }
  }

  function handleNotificationPermissionGranted() {
    if (!("Notification" in window) || Notification.permission !== "granted") return;
    state.notificationPrompt = {
      ...loadNotificationPromptState(),
      ...state.notificationPrompt,
      permission: "granted",
      enabled: true,
      neverShow: true,
      acceptedAt: state.notificationPrompt.acceptedAt || new Date().toISOString(),
      nextShowAt: 0
    };
    saveNotificationPromptState();
    prepareDailyNotifications();
  }

  function handleNotificationPermissionDeclined() {
    const current = state.notificationPrompt || loadNotificationPromptState();
    const declineCount = Math.min(Number(current.declineCount || 0) + 1, 5);
    state.notificationPromptVisible = false;
    state.notificationPrompt = {
      ...current,
      permission: "Notification" in window ? Notification.permission : "unsupported",
      declineCount,
      nextShowAt: scheduleNextNotificationPrompt(declineCount),
      neverShow: declineCount >= 5,
      enabled: false,
      lastAskedAt: Date.now()
    };
    saveNotificationPromptState();
    render();
  }

  function scheduleNextNotificationPrompt(declineCount) {
    const hour = 60 * 60 * 1000;
    const day = 24 * hour;
    const delays = {
      1: 12 * hour,
      2: 48 * hour,
      3: 7 * day,
      4: 30 * day
    };
    return declineCount >= 5 ? 0 : Date.now() + (delays[declineCount] || 12 * hour);
  }

  function prepareDailyNotifications() {
    if (!("Notification" in window) || Notification.permission !== "granted") return;
    state.notificationPrompt.permission = "granted";
    state.notificationPrompt.enabled = true;
    saveNotificationPromptState();
    notificationTimers.forEach((timer) => clearTimeout(timer));
    notificationTimers.clear();
    [
      { type: "daily_bonus", hour: 9, minute: 0 },
      { type: "lesson", hour: 11, minute: 30 },
      { type: "review", hour: 18, minute: 0 },
      { type: "streak", hour: 20, minute: 30 }
    ].forEach((entry) => scheduleDailyNotification(entry.type, nextNotificationTime(entry.hour, entry.minute)));
    registerPeriodicNotificationSync();
  }

  function scheduleDailyNotification(type, when) {
    const delay = Math.max(1000, Math.min(when.getTime() - Date.now(), 2147483647));
    const timer = window.setTimeout(async () => {
      await sendDailyNotification(type);
      scheduleDailyNotification(type, addDays(when, 1));
    }, delay);
    notificationTimers.set(type, timer);
  }

  function nextNotificationTime(hour, minute) {
    const date = new Date();
    date.setHours(hour, minute, 0, 0);
    if (date.getTime() <= Date.now() + 60 * 1000) date.setDate(date.getDate() + 1);
    return date;
  }

  async function sendDailyNotification(type) {
    if (!notificationShouldFire(type)) return false;
    const payload = notificationPayload(type);
    try {
      const registration = await navigator.serviceWorker?.ready;
      if (registration?.showNotification) {
        await registration.showNotification(payload.title, payload.options);
      } else if ("Notification" in window && Notification.permission === "granted") {
        new Notification(payload.title, payload.options);
      }
      playUxSound(type === "daily_bonus" ? "notification_reward" : "notification_reminder");
      state.notificationPrompt.lastShown[type] = todayKey();
      saveNotificationPromptState();
      return true;
    } catch (error) {
      console.warn("Notification show failed.", error);
      return false;
    }
  }

  function notificationShouldFire(type) {
    if (!("Notification" in window) || Notification.permission !== "granted") return false;
    if (state.notificationPrompt.lastShown?.[type] === todayKey()) return false;
    if (type === "review") return getDueNowCards().length > 0;
    if (type === "daily_bonus") return Boolean(state.progress.visits?.firstVisitDate) && !state.progress.dailyBonuses[todayKey()];
    if (type === "lesson") return getUnlockedNewCards().length > 0;
    if (type === "streak") return (state.progress.streak.current || state.progress.visits?.streak || 0) > 0;
    return true;
  }

  function notificationPayload(type) {
    const ru = lang() === "ru";
    const payloads = {
      review: {
        title: "Flash Kanji",
        body: ru ? "Ваши кандзи ждут повторения." : "Your kanji are waiting for review.",
        url: "./index.html#review"
      },
      streak: {
        title: ru ? "Лея рядом 🌙" : "Leya is nearby 🌙",
        body: ru ? "Не потеряйте свою серию дней." : "Do not lose your daily streak.",
        url: "./index.html#home"
      },
      daily_bonus: {
        title: ru ? "Ежедневный бонус" : "Daily Bonus",
        body: ru ? "Заберите XP и Moon Fragments." : "Claim XP and Moon Fragments.",
        url: "./index.html#home"
      },
      lesson: {
        title: ru ? "Новые знания ждут" : "New knowledge awaits",
        body: ru ? "Продолжите изучение кандзи." : "Continue learning kanji.",
        url: "./index.html#learn"
      }
    };
    const item = payloads[type] || payloads.review;
    return {
      title: item.title,
      options: {
        body: item.body,
        tag: `flash-kanji-${type}`,
        renotify: false,
        icon: "./assets/icon-192.png",
        badge: "./assets/icon-192.png",
        data: { url: item.url, type }
      }
    };
  }

  async function registerPeriodicNotificationSync() {
    try {
      const registration = await navigator.serviceWorker?.ready;
      if (!registration?.periodicSync) return;
      await registration.periodicSync.register("flash-kanji-daily", { minInterval: 24 * 60 * 60 * 1000 });
      state.notificationPrompt.periodicSync = true;
      saveNotificationPromptState();
    } catch {
      state.notificationPrompt.periodicSync = false;
      saveNotificationPromptState();
    }
  }

  function notificationPromptCopy() {
    if (lang() === "en") {
      return {
        badge: "PWA reminders",
        title: "Allow Flash Kanji notifications?",
        description: "We will remind you about reviews, streaks and daily bonuses.",
        allow: "Allow",
        later: "Later",
        enabled: "Notifications enabled"
      };
    }
    return {
      badge: "PWA напоминания",
      title: "Разрешить уведомления Flash Kanji?",
      description: "Мы напомним о повторениях, серии и ежедневном бонусе.",
      allow: "Разрешить",
      later: "Позже",
      enabled: "Уведомления включены"
    };
  }

  function cloneProgress(progress) {
    return { ...progress, history: [...(progress.history || [])] };
  }

  function addDays(date, days) {
    return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
  }

  function endOfToday() {
    const date = new Date();
    date.setHours(23, 59, 59, 999);
    return date;
  }

  function todayKey() {
    return dateKey(new Date());
  }

  function dateKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  }

  function keyToDate(key) {
    const [year, month, day] = key.split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  function dayDifference(fromKey, toKey) {
    return Math.round((keyToDate(toKey) - keyToDate(fromKey)) / 86400000);
  }

  function lastDays(count) {
    return Array.from({ length: count }, (_, index) => {
      const date = new Date();
      date.setDate(date.getDate() - (count - 1 - index));
      return dateKey(date);
    });
  }

  function formatDue(iso) {
    if (!iso) return lang() === "ru" ? "сейчас" : "now";
    const diff = new Date(iso).getTime() - Date.now();
    if (diff <= 0) return lang() === "ru" ? "сейчас" : "now";
    const minutes = Math.ceil(diff / 60000);
    if (minutes < 60) return lang() === "ru" ? `через ${minutes} мин.` : `in ${minutes} min`;
    const hours = Math.ceil(minutes / 60);
    if (hours < 24) return lang() === "ru" ? `через ${hours} ч.` : `in ${hours} h`;
    const days = Math.ceil(hours / 24);
    return lang() === "ru" ? `через ${days} дн.` : `in ${days} d`;
  }

  function progressWidth(value, total) {
    return total ? clamp(Math.round((value / total) * 100), 0, 100) : 0;
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function round(value, digits) {
    const factor = 10 ** digits;
    return Math.round(value * factor) / factor;
  }

  function sample(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function randomBetween(min, max) {
    return Math.floor(Number(min) + Math.random() * (Number(max) - Number(min)));
  }

  function selected(value, current) {
    return String(value) === String(current) ? "selected" : "";
  }

  function readRouteHash() {
    const raw = location.hash.replace("#", "");
    const route = raw.split("/")[0];
    return routes.includes(route) ? route : "home";
  }

  function readKanjiRouteId() {
    const raw = decodeURIComponent(location.hash.replace("#", ""));
    const match = raw.match(/^kanji\/([^/?]+)/);
    return match ? match[1] : "";
  }

  function unlockedAchievementCount() {
    return achievementList().filter((item) => isAchievementUnlocked(item.id)).length;
  }

  function isAchievementUnlocked(id) {
    const value = state.progress?.achievements?.[id];
    return Boolean(value && (value === true || typeof value === "string" || value.unlockedAt || value.rewardXp !== undefined));
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
  }

  function escapeAttr(value) {
    return escapeHtml(value);
  }
})();

/**
 * ЧАСТЬ 1: Безопасный клиентский скрипт регистрации Service Worker.
 * Этот код размещается в основном JS-файле (index.js / App.jsx) или подключается в index.html.
 */

const APP_VERSION = 'v1.0.2'; // Меняйте версию при каждом деплое

function registerServiceWorkerWithCacheBuster() {
  if ('serviceWorker' in navigator) {
    // КРИТИЧЕСКИЙ ФИКС: Запоминаем, управлял ли уже сервис-воркер страницей при загрузке.
    // Если "wasControlled" равен false, значит это первая установка приложения пользователем.
    // В таком случае перезагрузка страницы НЕ нужна и только сломает инициализацию React!
    const wasControlled = !!navigator.serviceWorker.controller;

    // Регистрируем sw.js без query-параметров, так как Vite/Webpack могут отдавать 404 на пути с "?"
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service Worker зарегистрирован с версией:', APP_VERSION);

        // Проверяем наличие обновлений SW в фоновом режиме
        registration.update();

        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              // Если новый SW успешно скачался и установился
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                console.log('Доступно новое обновление! Активируем...');
                // Даем команду новому SW немедленно занять рабочее место
                newWorker.postMessage({ type: 'SKIP_WAITING' });
              }
            });
          }
        });
      })
      .catch((error) => {
        console.error('Ошибка регистрации Service Worker:', error);
      });

    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      // Перезагружаем страницу ТОЛЬКО если старая версия SW заменяется на новую.
      // Если это просто первичная активация SW для нового пользователя — не трогаем вкладку!
      if (wasControlled && !refreshing) {
        refreshing = true;
        console.log('PWA успешно обновлено до версии:', APP_VERSION);
        window.location.reload(); // Мягкая перезагрузка для подтягивания нового кэша
      }
    });
  }
}

// Запуск после полной загрузки всех ресурсов страницы
window.addEventListener('load', () => {
  registerServiceWorkerWithCacheBuster();
});


/**
 * ЧАСТЬ 2: Обработчики для sw.js (в корневом файле вашего сервис-воркера).
 */

/*
// Код ниже должен находиться внутри вашего sw.js:

const CACHE_NAME = 'flash-kanji-cache-v1.0.2'; // Версия кэша должна совпадать с APP_VERSION

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting()); // Позволяет новому SW сразу активироваться
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Удаление старого кэша:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim()) // Захватывает управление вкладками без перезагрузки
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
*/