(() => {
  "use strict";

  const STORAGE_KEY = "flashKanji.progress.v2";
  const LEGACY_STORAGE_KEY = "flashKanji.progress.v1";
  const PWA_INSTALL_STORAGE_KEY = "flashKanji.pwaInstallPrompt.v1";
  const APP_VERSION = 2;
  const DATA_URLS = {
    lessons: "data/lessons.json",
    dialogues: "data/dialogues.json",
    i18n: "data/i18n.json",
    rewards: "data/rewards.json",
    kanjiMeta: "data/kanji/meta.json",
    kanjiHints: "data/kanji/hints.json",
    kanjiTranslations: "data/kanji/translations.json",
    lessonTranslations: "data/lessons/translations.json",
    vocabulary: "data/vocabulary/index.json",
    sentences: "data/sentences/index.json",
    achievements: "data/achievements/index.json",
    monetization: "data/monetization/catalog.json"
  };

  const ratingLabels = { again: "Again", hard: "Hard", good: "Good", easy: "Easy" };
  const stateLabels = { New: "New", Learning: "Learning", Review: "Review", Mastered: "Mastered", new: "New", learning: "Learning", review: "Review", mastered: "Mastered" };
  const sentenceRewardFallback = { xp: 12, coins: 2 };
  const routes = ["home", "learn", "review", "dictionary", "writing", "stats", "achievements"];

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
    lessonTranslations: {},
    vocabulary: [],
    sentenceExercises: [],
    achievements: [],
    achievementCategories: [],
    monetization: null,
    progress: null,
    activeLessonId: null,
    activeCardId: null,
    revealed: false,
    detailCardId: null,
    rewardModal: null,
    rewardQueue: [],
    charts: [],
    filters: { query: "", jlpt: "all", strokes: "all", radical: "all", favorites: "all" },
    sentencePractice: { activeId: null, selected: [], checked: false, result: null, tileKeys: [] },
    readingCheck: { cardId: null, value: "", status: null, message: "" },
    writingStep: 0,
    pwaInstallPrompt: loadPwaInstallPromptState()
  };

  let audioContext = null;
  let activeKanjiAudio = null;
  let lastAutoAudioKey = "";
  let toastTimer = 0;
  let deferredPwaInstallPrompt = null;
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
  document.addEventListener("input", handleInput);
  document.addEventListener("keydown", handleKeydown);
  importInput.addEventListener("change", handleImportFile);
  window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  window.addEventListener("appinstalled", handlePwaInstallAccepted);
  window.addEventListener("hashchange", () => {
    const route = readRouteHash();
    if (route !== state.route) {
      state.route = route;
      state.detailCardId = null;
      state.revealed = false;
      resetReadingCheck();
      render();
    }
  });

  boot();

  async function boot() {
    app.innerHTML = renderLoading();
    state.progress = loadProgress();
    applyTheme();

    try {
      const [course, i18n, dialogues, rewards, kanjiMeta, kanjiHints, kanjiTranslations, lessonTranslations, vocabulary, sentences, achievements, monetization] = await Promise.all([
        loadCourse(),
        fetchJson(DATA_URLS.i18n),
        fetchJson(DATA_URLS.dialogues),
        fetchJson(DATA_URLS.rewards),
        fetchJson(DATA_URLS.kanjiMeta),
        fetchJson(DATA_URLS.kanjiHints),
        fetchJson(DATA_URLS.kanjiTranslations),
        fetchJson(DATA_URLS.lessonTranslations),
        fetchJson(DATA_URLS.vocabulary),
        fetchJson(DATA_URLS.sentences),
        fetchJson(DATA_URLS.achievements),
        fetchJson(DATA_URLS.monetization)
      ]);
      const achievementBundle = normalizeAchievementData(achievements, rewards.achievements || []);
      state.lessons = course.lessons;
      state.cards = course.cards;
      state.i18n = i18n;
      state.dialogues = dialogues;
      state.rewards = rewards;
      state.achievements = achievementBundle.items;
      state.achievementCategories = achievementBundle.categories;
      state.rewards.achievements = state.achievements;
      state.kanjiMeta = kanjiMeta.items || {};
      state.kanjiHints = kanjiHints.items || {};
      state.kanjiTranslations = kanjiTranslations.items || {};
      state.lessonTranslations = lessonTranslations.items || {};
      state.vocabulary = vocabulary.items || [];
      state.sentenceExercises = sentences.items || [];
      state.monetization = monetization;
      hydrateProgress();
      syncPwaInstallInstalledFlag();
      recordAppOpen();
      claimDailyBonus();
      evaluateAchievements();
      saveProgress();
      render();
      registerServiceWorker();
    } catch (error) {
      console.error(error);
      app.innerHTML = renderLoadError(error);
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

  function defaultProgress() {
    const theme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    return {
      version: APP_VERSION,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      settings: { theme, sound: true, language: "ru", dailyGoal: 10 },
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
      lessonCompletions: {},
      achievements: {},
      dailyBonuses: {},
      writingPractice: { completed: 0, cards: {} },
      secrets: { evaClicks: 0, nightVisit: false },
      sentencePractice: { activeId: null, selected: [], checked: false, result: null, tileKeys: [], completed: {}, attempts: 0, recentIds: [], recentAnswers: [] },
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
      lessonCompletions: { ...base.lessonCompletions, ...(saved.lessonCompletions || {}) },
      achievements: { ...base.achievements, ...(saved.achievements || {}) },
      dailyBonuses: { ...base.dailyBonuses, ...(saved.dailyBonuses || {}) },
      appOpens: Number(saved.appOpens || base.appOpens),
      totalMoonFragmentsEarned: Number(saved.totalMoonFragmentsEarned || base.totalMoonFragmentsEarned),
      writingPractice: { ...base.writingPractice, ...(saved.writingPractice || {}) },
      secrets: { ...base.secrets, ...(saved.secrets || {}) },
      sentencePractice: mergeSentencePractice(base.sentencePractice, saved.sentencePractice || {}),
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
      completed: { ...base.completed, ...(saved.completed || {}) }
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
      state.detailCardId = null;
      render();
      return;
    }

    const target = event.target.closest("[data-action]");
    if (!target) return;

    const action = target.dataset.action;
    const id = target.dataset.id;

    if (action === "route") {
      if (target.dataset.route === "writing" && state.detailCardId) state.activeCardId = state.detailCardId;
      setRoute(target.dataset.route);
    }
    if (action === "theme") toggleTheme();
    if (action === "language") toggleLanguage();
    if (action === "sound") toggleSound();
    if (action === "export") exportProgress();
    if (action === "import") importInput.click();
    if (action === "reset") resetProgress();
    if (action === "share-achievement") shareAchievement().catch(() => toast(t("shareFallback")));
    if (action === "pwa-install") handlePwaInstallRequest();
    if (action === "pwa-later") handlePwaInstallDeclined();
    if (action === "mascot-click") handleMascotClick(target.dataset.character);
    if (action === "toggle-favorite") toggleFavorite(id);
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
    if (action === "play-kanji-audio") {
      const card = findCard(id) || findCard(state.activeCardId);
      if (card) playKanjiAudio(card);
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
    if (action === "buy-shop") buyShopItem(id);
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
      if (action === "start-lesson") setRoute("learn");
      else render();
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
  }

  function handleInput(event) {
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

    const input = event.target.closest("[data-filter]");
    if (!input) return;
    const key = input.dataset.filter;
    const selectionStart = input.selectionStart;
    state.filters[key] = input.value;
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
    if (event.key === "Escape" && (state.detailCardId || state.rewardModal)) {
      state.detailCardId = null;
      state.rewardModal = null;
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

  function setRoute(route) {
    state.route = routes.includes(route) ? route : "home";
    if (location.hash !== `#${state.route}`) history.replaceState(null, "", `#${state.route}`);
    state.detailCardId = null;
    state.revealed = false;
    resetReadingCheck();
    render();
  }

  function render() {
    destroyCharts();
    syncChrome();

    let html = "";
    if (state.route === "home") html = renderHome();
    if (state.route === "learn") {
      html = renderLearn();
      requestAnimationFrame(autoPlayActiveKanjiAudio);
    }
    if (state.route === "review") {
      html = renderReview();
      requestAnimationFrame(autoPlayActiveKanjiAudio);
    }
    if (state.route === "dictionary") html = renderDictionary();
    if (state.route === "writing") {
      html = renderWriting();
      requestAnimationFrame(setupWritingCanvas);
    }
    if (state.route === "stats") {
      html = renderStats();
      requestAnimationFrame(renderCharts);
    }
    if (state.route === "achievements") html = renderAchievementsPage();
    app.innerHTML = `${html}${renderGlobalOverlays()}`;
    document.body.classList.toggle("modal-open", Boolean(state.detailCardId || state.rewardModal));
  }

  function renderGlobalOverlays() {
    const overlays = `${renderDetailModal()}${renderRewardModal()}${renderPwaInstallBanner()}`;
    return overlays ? `<div class="modal-layer">${overlays}</div>` : "";
  }

  function syncChrome() {
    $$(".nav-btn").forEach((button) => {
      const route = button.dataset.route;
      button.classList.toggle("is-active", route === state.route);
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
    const glyph = locked ? "鎖" : lessonCards[0]?.kanji || "文";
    const width = progressWidth(mastered, lessonCards.length);
    return `
      <button class="lesson-tile ${locked ? "is-locked" : ""}" type="button" data-action="start-lesson" data-id="${escapeAttr(lesson.id)}">
        <span class="lesson-glyph">${escapeHtml(glyph)}</span>
        <span>
          <span class="pill">${escapeHtml(lesson.jlpt)}</span>
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
          ${state.lessons.map((item) => `
            <button class="btn ${item.id === state.activeLessonId ? "primary" : "ghost"} ${!isLessonUnlocked(item) ? "is-disabled" : ""}" type="button" data-action="select-lesson" data-id="${escapeAttr(item.id)}">
              ${escapeHtml(item.jlpt)}
            </button>
          `).join("")}
        </div>
        <div class="study-layout">
          ${card ? renderStudyCard(card) : renderLessonDone(lesson)}
          ${renderStudySidePanel(card, candidates.length)}
        </div>
      </section>
    `;
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
        <div class="study-layout">
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
    const labels = sentencePracticeLabels();

    if (!learned.length) {
      return `
        <article class="sentence-practice empty-state">
          <span class="kanji-char">文</span>
          <h2>${escapeHtml(labels.title)}</h2>
          <p>${escapeHtml(labels.noLearned)}</p>
          <button class="btn primary" type="button" data-action="route" data-route="learn">▶ ${escapeHtml(t("learn"))}</button>
        </article>
      `;
    }

    if (learned.length < 4) {
      return `
        <article class="sentence-practice empty-state">
          <span class="kanji-char">文</span>
          <h2>${escapeHtml(labels.title)}</h2>
          <p>${escapeHtml(labels.notEnough.replace("{count}", learned.length))}</p>
        </article>
      `;
    }

    if (!available.length) {
      return `
        <article class="sentence-practice empty-state">
          <span class="kanji-char">文</span>
          <h2>${escapeHtml(labels.title)}</h2>
          <p>${escapeHtml(labels.noExercise)}</p>
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
      <article class="sentence-practice${statusClass}" aria-live="polite">
        <div class="section-head sentence-head">
          <div>
            <h2>${escapeHtml(labels.title)}</h2>
            <p>${escapeHtml(labels.subtitle.replace("{learned}", learned.length).replace("{total}", state.cards.length))}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${escapeHtml(exercise.jlpt)}</span>
            <span class="pill">${escapeHtml(labels.progress.replace("{done}", Object.keys(state.progress.sentencePractice.completed || {}).length).replace("{total}", available.length))}</span>
          </div>
        </div>
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

  function localizedSentenceTranslation(exercise) {
    return lang() === "en" ? exercise.translationEn || exercise.translationRu || "" : exercise.translationRu || exercise.translationEn || "";
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
    const exercise = state.sentenceExercises.find((item) => item.id === activeId);
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
    return state.sentenceExercises.filter((exercise) => {
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
    const targetCount = Math.max(4, answerTiles.length);
    return shuffleStable([...answerTiles, ...distractors.slice(0, targetCount - answerTiles.length)], exercise.id);
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
      playTone("ok");
    } else {
      state.progress.totalWrong += 1;
      state.progress.correctCombo = 0;
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
    return pool[Math.floor(Math.random() * pool.length)];
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

  function renderAnswer(card) {
    return `
      <div class="answer-section">
        ${renderReadingGrid(card)}
        <strong>${escapeHtml(t("examples"))}</strong>
        <ul class="example-list">
          ${card.examples.map((example) => `
            <li><b>${escapeHtml(example.word)}</b> <span>${escapeHtml(example.reading)} · ${escapeHtml(example.romaji)}</span><small>${escapeHtml(example.translation)}</small></li>
          `).join("")}
        </ul>
        <strong>${escapeHtml(t("apps"))}</strong>
        <p>${escapeHtml(cardInterface(card))}</p>
        <ul class="app-list">${card.apps.map((name) => `<li>${escapeHtml(name)}</li>`).join("")}</ul>
        <div class="rating-grid">
          <button class="btn danger" type="button" data-action="rate" data-rating="again">Again <small>5 min</small></button>
          <button class="btn warning" type="button" data-action="rate" data-rating="hard">Hard <small>12 h</small></button>
          <button class="btn success" type="button" data-action="rate" data-rating="good">Good <small>1 d</small></button>
          <button class="btn primary" type="button" data-action="rate" data-rating="easy">Easy <small>4 d</small></button>
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
    const jlptOptions = ["all", ...new Set(state.cards.map((card) => card.jlpt))];
    const radicals = ["all", ...new Set(state.cards.map((card) => cardMeta(card.id).radical).filter(Boolean))];
    return `
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${escapeHtml(t("dictionary"))}</h1>
            <p>${cards.length}/${state.cards.length}</p>
          </div>
        </div>
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
        <div class="dictionary-grid" style="margin-top:12px">${cards.map(renderDictionaryTile).join("") || renderDictionaryEmpty()}</div>
      </section>
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
    return `<article class="empty-state"><span class="kanji-char">無</span><h2>${escapeHtml(lang() === "ru" ? "Ничего не найдено" : "Nothing found")}</h2></article>`;
  }

  function renderWriting() {
    const card = findCard(state.activeCardId) || getTodayCards()[0] || state.cards[0];
    if (card) {
      state.activeCardId = card.id;
      state.activeLessonId = card.lessonId;
      state.writingStep = clamp(state.writingStep, 0, Math.max(0, card.strokes - 1));
    }
    const stepCount = Math.max(1, card?.strokes || 1);
    const stepLabel = lang() === "ru" ? "Шаг" : "Step";
    const practiceLabel = lang() === "ru" ? "Проверка черт" : "Stroke check";
    return `
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${escapeHtml(t("writingPractice"))}</h1>
            <p>${escapeHtml(card ? `${card.kanji} · ${cardMeaning(card)}` : "")}</p>
          </div>
        </div>
        <div class="writing-layout">
          <article class="writing-card">
            <div class="kanji-focus writing-focus">${escapeHtml(card?.kanji || "文")}</div>
            ${card ? renderReadingGrid(card) : ""}
            ${card ? `<div class="actions"><button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${escapeAttr(card.id)}">🔊 ${escapeHtml(t("audio"))}</button></div>` : ""}
            <div class="stroke-demo">
              <canvas id="strokeCanvas" width="520" height="280" aria-label="stroke order animation"></canvas>
            </div>
            <div class="writing-step-panel">
              <div class="writing-step-head">
                <span class="pill" id="writingStepCounter">${stepLabel} ${state.writingStep + 1}/${stepCount}</span>
                <span class="label">${escapeHtml(card?.stroke_order?.[state.writingStep] || "")}</span>
              </div>
              <div class="writing-step-actions">
                <button class="btn" type="button" data-action="writing-step-prev">←</button>
                <button class="btn primary" type="button" data-action="play-writing-step">${escapeHtml(lang() === "ru" ? "Показать шаг" : "Show step")}</button>
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
          <article class="writing-card writing-practice">
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
            </div>
            <div class="writing-feedback" id="writingFeedback">${escapeHtml(lang() === "ru" ? "Напиши кандзи отдельными чертами." : "Write the kanji stroke by stroke.")}</div>
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
          <ul class="example-list">${card.examples.map((example) => `<li><b>${escapeHtml(example.word)}</b> <span>${escapeHtml(example.reading)} · ${escapeHtml(example.romaji)}</span><small>${escapeHtml(example.translation)}</small></li>`).join("")}</ul>
          <h3>${escapeHtml(t("apps"))}</h3>
          <p>${escapeHtml(cardInterface(card))}</p>
          <ul class="app-list">${card.apps.map((name) => `<li>${escapeHtml(name)}</li>`).join("")}</ul>
          <div class="actions" style="margin-top:14px">
            <button class="btn primary" type="button" data-action="study-card" data-id="${escapeAttr(card.id)}">▶ ${escapeHtml(t("study"))}</button>
            <button class="btn" type="button" data-action="toggle-favorite" data-id="${escapeAttr(card.id)}">${favorite ? "★" : "☆"} ${escapeHtml(t("favorites"))}</button>
            <button class="btn" type="button" data-action="route" data-route="writing">筆 ${escapeHtml(t("writing"))}</button>
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
          <article class="tool-panel">${renderShop()}</article>
          <article class="tool-panel">${renderTransactions()}</article>
          <article class="tool-panel">
            <h3>${escapeHtml(t("settings"))}</h3>
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
    return `
      <h3>${escapeHtml(t("coins"))}: ${state.progress.moonFragments}</h3>
      <div class="shop-grid">
        ${state.rewards.shop.map((item) => {
          const owned = state.progress.shop.owned.includes(item.id);
          return `
            <button class="shop-item ${owned ? "is-owned" : ""}" type="button" data-action="buy-shop" data-id="${escapeAttr(item.id)}">
              <strong>${escapeHtml(localized(item.name))}</strong>
              <small>${owned ? "Owned" : `${item.cost} ◐`}</small>
            </button>
          `;
        }).join("")}
      </div>
    `;
  }

  function renderTransactions() {
    return `
      <h3>${escapeHtml(t("transactions"))}</h3>
      <div class="transaction-list">
        ${state.progress.transactions.slice(0, 10).map((item) => `
          <div class="transaction-row">
            <strong>${escapeHtml(item.reason)}</strong>
            <span>${item.coins >= 0 ? "+" : ""}${item.coins} ◐ · ${item.xp >= 0 ? "+" : ""}${item.xp} XP</span>
          </div>
        `).join("") || `<p>${escapeHtml(lang() === "ru" ? "Пока нет операций." : "No transactions yet.")}</p>`}
      </div>
    `;
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

  function renderMascotPanel(character, mood, category) {
    const mascot = getMascot(character);
    return `
      <article class="sidekick mascot-${character} mood-${mood}" data-action="mascot-click" data-character="${escapeAttr(character)}">
        <img src="${escapeAttr(mascot.sprites[mood] || Object.values(mascot.sprites)[0])}" alt="${escapeAttr(localized(mascot.name))}" />
        <div><strong>${escapeHtml(localized(mascot.name))}</strong><p>${escapeHtml(dialogueText(character, category))}</p></div>
      </article>
    `;
  }

  function renderMascot(character, mood, category, className) {
    const mascot = getMascot(character);
    return `
      <div class="${className} mascot-${character} mood-${mood}" data-action="mascot-click" data-character="${escapeAttr(character)}">
        <img src="${escapeAttr(mascot.sprites[mood] || Object.values(mascot.sprites)[0])}" alt="${escapeAttr(localized(mascot.name))}" />
        <div class="speech">${escapeHtml(dialogueText(character, category))}</div>
      </div>
    `;
  }

  function rateActiveCard(rating) {
    const card = findCard(state.activeCardId);
    if (!card || !ratingLabels[rating]) return;

    const before = cloneProgress(getCardProgress(card.id));
    const after = calculateNextProgress(before, rating);
    state.progress.cards[card.id] = after;
    updateDailyStats(before, after, rating);
    updateStreak();

    if (rating === "again") {
      state.progress.totalWrong += 1;
      state.progress.correctCombo = 0;
      playTone("again");
      toast(dialogueText("eva", "wrong"));
    } else {
      addReward(state.rewards.rewards.correctXp, state.rewards.rewards.correctCoins, "review_success");
      state.progress.totalCorrect += 1;
      state.progress.correctCombo += 1;
      state.progress.bestCorrectCombo = Math.max(state.progress.bestCorrectCombo, state.progress.correctCombo);
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

    checkLessonCompletion(card.lessonId);
    checkDailyGoal();
    evaluateAchievements();
    saveProgress();
    state.revealed = false;
    state.activeCardId = null;
    resetReadingCheck();
    render();
  }

  function calculateNextProgress(before, rating) {
    const now = new Date();
    const next = cloneProgress(before);
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
    next.lastRating = ratingLabels[rating];
    next.reviews += 1;
    next.reviewCount = next.reviews;
    next.history = [...(before.history || []), { at: now.toISOString(), rating: ratingLabels[rating], from: oldState, to: nextState, intervalDays: next.intervalDays }].slice(-120);
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
    addReward(xp, coins, "lesson_completion");
    queueReward({
      title: localized({ ru: "Урок завершён", en: "Lesson complete" }),
      message: dialogueText("eva", "lessonComplete"),
      xp,
      coins,
      mascot: "eva",
      mood: "happy",
      dialog: "lessonComplete"
    });
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
      toast(dialogueText("eva", "welcome"));
      evaluateAchievements();
      saveProgress();
      render();
      return;
    }
    if (character === "leya") toast(dialogueText("leya", "combo"));
  }

  function recordWritingPracticeComplete() {
    if (writingSession.completed) return;
    writingSession.completed = true;
    state.progress.writingPractice.completed = Number(state.progress.writingPractice.completed || 0) + 1;
    if (writingSession.cardId) {
      state.progress.writingPractice.cards[writingSession.cardId] = (state.progress.writingPractice.cards[writingSession.cardId] || 0) + 1;
    }
    const unlocked = evaluateAchievements();
    saveProgress();
    if (unlocked) render();
  }

  function claimDailyBonus() {
    const key = todayKey();
    if (state.progress.dailyBonuses[key]) return;
    state.progress.dailyBonuses[key] = new Date().toISOString();
    addReward(state.rewards.rewards.dailyBonusXp, state.rewards.rewards.dailyBonusCoins, "daily_bonus");
    queueReward({
      title: t("dailyBonus"),
      message: dialogueText("leya", "welcome"),
      xp: state.rewards.rewards.dailyBonusXp,
      coins: state.rewards.rewards.dailyBonusCoins,
      mascot: "leya",
      mood: "calm",
      dialog: "welcome"
    });
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
    if (achievement.kind === "shopComplete") return state.rewards?.shop?.length && state.rewards.shop.every((item) => state.progress.shop.owned.includes(item.id)) ? 1 : 0;
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
    if (reward?.type === "achievement") playAchievementSound();
  }

  function addReward(xp, coins, reason = "reward") {
    const previousLevel = state.progress.level || calculateLevel(state.progress.xp);
    state.progress.xp += xp;
    state.progress.moonFragments += coins;
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

  function updateDailyStats(before, after, rating) {
    const today = todayStats();
    today.reviews += 1;
    if (before.state === "New" && after.state !== "New") today.learned += 1;
    if (before.state !== "Mastered" && after.state === "Mastered") today.mastered += 1;
    if (rating === "again") today.mistakes += 1;
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
    if (lost) toast(dialogueText("eva", "streakLoss"));
    if ([1, 7, 30, 100].includes(state.progress.streak.current)) {
      addReward(0, state.rewards.rewards.streakCoins, `streak:${state.progress.streak.current}`);
    }
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
      state.writingStep = clamp(state.writingStep, 0, Math.max(0, card.strokes - 1));
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
    const expectedCount = Math.max(1, card?.strokes || 1);
    if (!canvas || !card) {
      return { score: 0, success: false, expectedCount, message: "" };
    }
    const expected = makeStrokePaths(expectedCount, canvas.width, canvas.height, card);
    const actual = writingSession.strokes;
    if (!actual.length) {
      return {
        score: 0,
        success: false,
        expectedCount,
        message: lang() === "ru" ? "Начни с первой черты." : "Start with the first stroke."
      };
    }
    const comparisons = expected.map((stroke, index) => actual[index] ? compareStroke(actual[index], stroke, canvas) : null);
    const readyComparisons = comparisons.filter(Boolean);
    const averageStrokeScore = readyComparisons.length
      ? readyComparisons.reduce((sum, item) => sum + item.score, 0) / readyComparisons.length
      : 0;
    const countPenalty = Math.min(42, Math.abs(actual.length - expected.length) * 14);
    const completionPenalty = Math.max(0, expected.length - actual.length) * 10;
    const score = clamp(Math.round(averageStrokeScore - countPenalty - completionPenalty), 0, 100);
    const firstWeak = comparisons.findIndex((item) => item && (!item.directionOk || !item.positionOk));
    const success = actual.length === expected.length && score >= 72 && firstWeak === -1;
    let message = lang() === "ru"
      ? `Черты: ${actual.length}/${expected.length}. Точность ${score}%.`
      : `Strokes: ${actual.length}/${expected.length}. Accuracy ${score}%.`;
    if (actual.length < expected.length) {
      message = lang() === "ru"
        ? `Черта ${actual.length + 1}/${expected.length}: продолжай по примеру.`
        : `Stroke ${actual.length + 1}/${expected.length}: keep following the guide.`;
    } else if (actual.length > expected.length) {
      message = lang() === "ru"
        ? `Лишние черты: нужно ${expected.length}, сейчас ${actual.length}.`
        : `Extra strokes: expected ${expected.length}, got ${actual.length}.`;
    } else if (firstWeak >= 0) {
      const weak = comparisons[firstWeak];
      message = weak.directionOk
        ? (lang() === "ru" ? `Черта ${firstWeak + 1}: ближе к форме примера.` : `Stroke ${firstWeak + 1}: stay closer to the guide.`)
        : (lang() === "ru" ? `Черта ${firstWeak + 1}: проверь направление.` : `Stroke ${firstWeak + 1}: check the direction.`);
    } else if (success) {
      message = lang() === "ru" ? "Отлично. Черты похожи на пример." : "Great. The strokes match the guide.";
    }
    return { score, success, expectedCount, message };
  }

  function replayStrokeAnimation() {
    const canvas = document.getElementById("strokeCanvas");
    const card = currentWritingCard();
    if (!canvas || !card) return;
    cancelAnimationFrame(writingSession.demoAnimationId);
    const strokes = makeStrokePaths(card.strokes, canvas.width, canvas.height, card);
    const duration = 460;
    const startedAt = performance.now();
    const frame = (now) => {
      const elapsed = now - startedAt;
      const index = clamp(Math.floor(elapsed / duration), 0, strokes.length - 1);
      const progress = clamp((elapsed - index * duration) / duration, 0, 1);
      state.writingStep = index;
      drawWritingGuideFrame(index, progress);
      updateWritingStepUi();
      if (elapsed < strokes.length * duration) {
        writingSession.demoAnimationId = requestAnimationFrame(frame);
      } else {
        state.writingStep = strokes.length - 1;
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
    const step = clamp(state.writingStep, 0, Math.max(0, card.strokes - 1));
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
    state.writingStep = clamp(index, 0, Math.max(0, card.strokes - 1));
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
    if (counter) counter.textContent = `${label} ${state.writingStep + 1}/${Math.max(1, card.strokes)}`;
    const stepText = document.querySelector(".writing-step-head .label");
    if (stepText) stepText.textContent = steps[state.writingStep] || "";
    $$(".writing-guide-list li").forEach((item, index) => item.classList.toggle("is-active", index === state.writingStep));
  }

  function drawWritingGuideFrame(activeIndex = state.writingStep, progress = 1) {
    const canvas = document.getElementById("strokeCanvas");
    const card = currentWritingCard();
    if (!canvas || !card) return;
    const context = canvas.getContext("2d");
    const strokes = makeStrokePaths(card.strokes, canvas.width, canvas.height, card);
    clearCanvas(context, canvas);
    strokes.forEach((stroke, index) => {
      const isPast = index < activeIndex;
      const isActive = index === activeIndex;
      context.save();
      context.globalAlpha = isPast || isActive ? 1 : 0.2;
      drawSmoothStroke(context, isActive ? clipPolyline(stroke, progress) : stroke, {
        color: isActive
          ? getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim()
          : getComputedStyle(document.documentElement).getPropertyValue("--accent").trim(),
        width: isActive ? 15 : 11,
        shadow: isActive
      });
      drawStrokeNumber(context, stroke, index + 1, isActive);
      context.restore();
    });
  }

  function drawExpectedGuide(context, canvas, card) {
    const strokes = makeStrokePaths(card.strokes, canvas.width, canvas.height, card);
    context.save();
    context.globalAlpha = 0.2;
    context.setLineDash([10, 11]);
    strokes.forEach((stroke, index) => {
      drawSmoothStroke(context, stroke, {
        color: index === state.writingStep
          ? getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim()
          : getComputedStyle(document.documentElement).getPropertyValue("--accent").trim(),
        width: index === state.writingStep ? 10 : 7,
        shadow: false
      });
    });
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

  function makeStrokePaths(count, width = 520, height = 280, card = null) {
    const known = makeKnownKanjiStrokePaths(card?.kanji, width, height);
    if (known && known.length === count) return known;
    const templates = makeGenericStrokeTemplates(width, height);
    return Array.from({ length: Math.max(1, count) }, (_, index) => templates[index % templates.length]);
  }

  function makeKnownKanjiStrokePaths(kanji, width, height) {
    const x1 = width * 0.24;
    const x2 = width * 0.76;
    const y1 = height * 0.18;
    const y2 = height * 0.82;
    const xm = width * 0.5;
    const ym = height * 0.5;
    const shapes = {
      "日": [[[x1, y1], [x1, y2]], [[x1, y1], [x2, y1], [x2, y2]], [[x1, ym], [x2, ym]], [[x1, y2], [x2, y2]]],
      "月": [[[x1, y1], [x1, y2]], [[x1, y1], [x2, y1], [x2, y2]], [[x1, y1 + (y2 - y1) * 0.36], [x2, y1 + (y2 - y1) * 0.36]], [[x1, y1 + (y2 - y1) * 0.68], [x2, y1 + (y2 - y1) * 0.68]]],
      "一": [[[width * 0.18, ym], [width * 0.82, ym]]],
      "二": [[[width * 0.25, height * 0.34], [width * 0.75, height * 0.34]], [[width * 0.16, height * 0.68], [width * 0.84, height * 0.68]]],
      "三": [[[width * 0.26, height * 0.28], [width * 0.74, height * 0.28]], [[width * 0.22, ym], [width * 0.78, ym]], [[width * 0.15, height * 0.74], [width * 0.85, height * 0.74]]],
      "人": [[[width * 0.46, height * 0.2], [width * 0.38, height * 0.46], [width * 0.2, height * 0.8]], [[width * 0.48, height * 0.25], [width * 0.66, height * 0.55], [width * 0.82, height * 0.8]]],
      "大": [[[width * 0.22, height * 0.36], [width * 0.78, height * 0.36]], [[width * 0.5, height * 0.18], [width * 0.42, height * 0.5], [width * 0.23, height * 0.82]], [[width * 0.51, height * 0.42], [width * 0.67, height * 0.63], [width * 0.82, height * 0.82]]],
      "十": [[[width * 0.22, ym], [width * 0.78, ym]], [[xm, height * 0.18], [xm, height * 0.84]]],
      "口": [[[x1, y1], [x1, y2]], [[x1, y1], [x2, y1], [x2, y2]], [[x1, y2], [x2, y2]]],
      "中": [[[x1, y1], [x1, y2]], [[x1, y1], [x2, y1], [x2, y2]], [[x1, ym], [x2, ym]], [[xm, height * 0.1], [xm, height * 0.9]]],
      "木": [[[width * 0.2, height * 0.36], [width * 0.8, height * 0.36]], [[xm, height * 0.14], [xm, height * 0.86]], [[xm, height * 0.43], [width * 0.22, height * 0.82]], [[xm, height * 0.44], [width * 0.8, height * 0.82]]],
      "本": [[[width * 0.2, height * 0.34], [width * 0.8, height * 0.34]], [[xm, height * 0.12], [xm, height * 0.86]], [[xm, height * 0.42], [width * 0.22, height * 0.8]], [[xm, height * 0.43], [width * 0.8, height * 0.8]], [[width * 0.32, height * 0.7], [width * 0.68, height * 0.7]]],
      "川": [[[width * 0.28, height * 0.22], [width * 0.24, height * 0.82]], [[xm, height * 0.16], [xm, height * 0.86]], [[width * 0.72, height * 0.22], [width * 0.76, height * 0.82]]],
      "山": [[[xm, height * 0.14], [xm, height * 0.78]], [[width * 0.25, height * 0.4], [width * 0.25, height * 0.8], [width * 0.75, height * 0.8]], [[width * 0.75, height * 0.4], [width * 0.75, height * 0.8]]],
      "小": [[[xm, height * 0.18], [xm, height * 0.84]], [[width * 0.34, height * 0.45], [width * 0.2, height * 0.72]], [[width * 0.66, height * 0.45], [width * 0.82, height * 0.72]]]
    };
    return shapes[kanji] || null;
  }

  function makeGenericStrokeTemplates(width, height) {
    const point = (x, y) => [width * x, height * y];
    return [
      [point(0.18, 0.24), point(0.82, 0.24)],
      [point(0.23, 0.22), point(0.23, 0.78)],
      [point(0.77, 0.22), point(0.77, 0.78)],
      [point(0.18, 0.78), point(0.82, 0.78)],
      [point(0.24, 0.5), point(0.76, 0.5)],
      [point(0.5, 0.16), point(0.5, 0.84)],
      [point(0.3, 0.78), point(0.45, 0.52), point(0.5, 0.24)],
      [point(0.5, 0.42), point(0.66, 0.62), point(0.82, 0.8)],
      [point(0.3, 0.3), point(0.42, 0.5), point(0.3, 0.7)],
      [point(0.7, 0.3), point(0.58, 0.5), point(0.7, 0.7)]
    ];
  }

  function normalizeStrokeDescriptions(card) {
    const paths = makeStrokePaths(card.strokes, 520, 280, card);
    const source = Array.isArray(card.stroke_order) ? card.stroke_order : [];
    return Array.from({ length: Math.max(1, card.strokes) }, (_, index) => source[index] || describeStrokePath(paths[index], index));
  }

  function describeStrokePath(path, index) {
    const points = path.map(toCanvasPoint);
    const start = points[0];
    const end = points[points.length - 1];
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const vertical = Math.abs(dy) > Math.abs(dx) * 1.35;
    const horizontal = Math.abs(dx) > Math.abs(dy) * 1.35;
    if (lang() !== "ru") {
      if (horizontal) return `Stroke ${index + 1}: horizontal ${dx >= 0 ? "left to right" : "right to left"}.`;
      if (vertical) return `Stroke ${index + 1}: vertical ${dy >= 0 ? "top to bottom" : "bottom to top"}.`;
      return `Stroke ${index + 1}: diagonal ${dx >= 0 ? "to the right" : "to the left"}.`;
    }
    if (horizontal) return `Черта ${index + 1}: горизонталь ${dx >= 0 ? "слева направо" : "справа налево"}.`;
    if (vertical) return `Черта ${index + 1}: вертикаль ${dy >= 0 ? "сверху вниз" : "снизу вверх"}.`;
    return `Черта ${index + 1}: диагональ ${dx >= 0 ? "вправо" : "влево"}.`;
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
        ...card.apps, ...card.examples.flatMap((example) => [example.word, example.reading, example.romaji, example.translation])
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
    const card = findCard(state.activeCardId);
    const audio = normalizeAudioPath(card?.audioSrc || card?.audio || "");
    if (!card || !audio) return;
    const key = `${state.route}:${card.id}:${audio}`;
    if (key === lastAutoAudioKey) return;
    lastAutoAudioKey = key;
    playKanjiAudio(card, { silent: true });
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
    const item = state.rewards.shop.find((entry) => entry.id === id);
    if (!item || state.progress.shop.owned.includes(id)) return;
    if (state.progress.moonFragments < item.cost) {
      toast(`${item.cost} ◐`);
      return;
    }
    state.progress.moonFragments -= item.cost;
    state.progress.transactions.unshift({
      at: new Date().toISOString(),
      reason: `shop:${item.id}`,
      xp: 0,
      coins: -item.cost,
      balance: state.progress.moonFragments
    });
    state.progress.transactions = state.progress.transactions.slice(0, 80);
    state.progress.shop.owned.push(id);
    evaluateAchievements();
    saveProgress();
    toast(localized(item.name));
    render();
  }

  function exportProgress() {
    const payload = { app: "Flash Kanji", exportedAt: new Date().toISOString(), progress: state.progress };
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
    const mascot = getMascot(mascotKey);
    const mascotSrc = mascot.sprites?.[reward.mood || "happy"] || Object.values(mascot.sprites || {})[0];
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
    saveProgress();
    render();
  }

  function toggleSound() {
    state.progress.settings.sound = !state.progress.settings.sound;
    saveProgress();
    toast(state.progress.settings.sound ? "♪" : "×");
  }

  function applyTheme() {
    document.documentElement.dataset.theme = state.progress.settings.theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", state.progress.settings.theme === "light" ? "#f8f7f2" : "#08080c");
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

  function getMascot(character) {
    return state.dialogues?.mascots?.[character] || { name: { ru: character, en: character }, sprites: {}, dialogs: {} };
  }

  function dialogueText(character, category) {
    const dialogs = getMascot(character).dialogs?.[category] || getMascot(character).dialogs?.welcome || {};
    const lines = dialogs[lang()] || dialogs.ru || [""];
    return sample(lines);
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
    try {
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
    window.addEventListener("load", () => navigator.serviceWorker.register("service-worker.js").catch(console.warn));
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
    if (canShowPwaInstallPrompt()) render();
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

  function selected(value, current) {
    return String(value) === String(current) ? "selected" : "";
  }

  function readRouteHash() {
    const route = location.hash.replace("#", "");
    return routes.includes(route) ? route : "home";
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
