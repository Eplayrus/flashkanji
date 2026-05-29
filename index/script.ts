(() => {
  "use strict";

  const STORAGE_KEY = "flashKanji.progress.v2";
  const LEGACY_STORAGE_KEY = "flashKanji.progress.v1";
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
    monetization: "data/monetization/catalog.json"
  };

  const ratingLabels = { again: "Again", hard: "Hard", good: "Good", easy: "Easy" };
  const stateLabels = { New: "New", Learning: "Learning", Review: "Review", Mastered: "Mastered", new: "New", learning: "Learning", review: "Review", mastered: "Mastered" };
  const routes = ["home", "learn", "review", "dictionary", "writing", "stats"];

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
    monetization: null,
    progress: null,
    activeLessonId: null,
    activeCardId: null,
    revealed: false,
    detailCardId: null,
    rewardModal: null,
    rewardQueue: [],
    charts: [],
    filters: { query: "", jlpt: "all", strokes: "all", radical: "all", favorites: "all" }
  };

  let audioContext = null;
  let activeKanjiAudio = null;
  let lastAutoAudioKey = "";
  let toastTimer = 0;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const app = $("#app");
  const importInput = $("#progressImport");

  document.addEventListener("click", handleClick);
  document.addEventListener("input", handleInput);
  importInput.addEventListener("change", handleImportFile);
  window.addEventListener("hashchange", () => {
    const route = readRouteHash();
    if (route !== state.route) {
      state.route = route;
      state.detailCardId = null;
      state.revealed = false;
      render();
    }
  });

  boot();

  async function boot() {
    app.innerHTML = renderLoading();
    state.progress = loadProgress();
    applyTheme();

    try {
      const [course, i18n, dialogues, rewards, kanjiMeta, kanjiHints, kanjiTranslations, lessonTranslations, vocabulary, monetization] = await Promise.all([
        loadCourse(),
        fetchJson(DATA_URLS.i18n),
        fetchJson(DATA_URLS.dialogues),
        fetchJson(DATA_URLS.rewards),
        fetchJson(DATA_URLS.kanjiMeta),
        fetchJson(DATA_URLS.kanjiHints),
        fetchJson(DATA_URLS.kanjiTranslations),
        fetchJson(DATA_URLS.lessonTranslations),
        fetchJson(DATA_URLS.vocabulary),
        fetchJson(DATA_URLS.monetization)
      ]);
      state.lessons = course.lessons;
      state.cards = course.cards;
      state.i18n = i18n;
      state.dialogues = dialogues;
      state.rewards = rewards;
      state.kanjiMeta = kanjiMeta.items || {};
      state.kanjiHints = kanjiHints.items || {};
      state.kanjiTranslations = kanjiTranslations.items || {};
      state.lessonTranslations = lessonTranslations.items || {};
      state.vocabulary = vocabulary.items || [];
      state.monetization = monetization;
      hydrateProgress();
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
      cards: {},
      daily: {},
      favorites: {},
      transactions: [],
      streakHistory: [],
      streak: { current: 0, best: 0, lastStudyDate: null },
      lessonCompletions: {},
      achievements: {},
      dailyBonuses: {},
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
      shop: {
        owned: [...new Set([...(base.shop.owned || []), ...((saved.shop && saved.shop.owned) || [])])],
        equipped: { ...base.shop.equipped, ...((saved.shop && saved.shop.equipped) || {}) }
      }
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
    if (action === "toggle-favorite") toggleFavorite(id);
    if (action === "clear-writing") clearWritingCanvas();
    if (action === "replay-writing") replayStrokeAnimation();
    if (action === "play-kanji-audio") {
      const card = findCard(id) || findCard(state.activeCardId);
      if (card) playKanjiAudio(card);
    }
    if (action === "play-audio") playAudioPlaceholder(target.dataset.audio, target.dataset.label);
    if (action === "close-reward") {
      state.rewardModal = state.rewardQueue.shift() || null;
      if (state.rewardModal) showConfetti();
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
      if (action === "start-lesson") setRoute("learn");
      else render();
    }
    if (action === "show-answer") {
      state.revealed = true;
      render();
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
      state.detailCardId = null;
      setRoute("learn");
    }
  }

  function handleInput(event) {
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

  function setRoute(route) {
    state.route = routes.includes(route) ? route : "home";
    if (location.hash !== `#${state.route}`) history.replaceState(null, "", `#${state.route}`);
    state.detailCardId = null;
    state.revealed = false;
    render();
  }

  function render() {
    destroyCharts();
    syncChrome();

    if (state.route === "home") app.innerHTML = renderHome();
    if (state.route === "learn") {
      app.innerHTML = renderLearn();
      requestAnimationFrame(autoPlayActiveKanjiAudio);
    }
    if (state.route === "review") {
      app.innerHTML = renderReview();
      requestAnimationFrame(autoPlayActiveKanjiAudio);
    }
    if (state.route === "dictionary") app.innerHTML = renderDictionary();
    if (state.route === "writing") {
      app.innerHTML = renderWriting();
      requestAnimationFrame(setupWritingCanvas);
    }
    if (state.route === "stats") {
      app.innerHTML = renderStats();
      requestAnimationFrame(renderCharts);
    }
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
        ${renderRewardModal()}
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
        ${renderRewardModal()}
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
        ${renderRewardModal()}
      </section>
    `;
  }

  function renderKanjiAudioButton(card) {
    const audio = getKanjiAudioPath(card);
    if (!audio) return "";
    return `
      <button class="audio-trigger" type="button" data-action="play-kanji-audio" data-id="${escapeAttr(card.id)}" aria-label="${escapeAttr(lang() === "ru" ? "Проиграть озвучку кандзи" : "Play kanji audio")}" title="${escapeAttr(lang() === "ru" ? "Озвучка" : "Audio")}">🔊</button>
    `;
  }

  function renderStudyCard(card) {
    const progress = getCardProgress(card.id);
    const visible = state.revealed;
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
          <div class="actions">
            <button class="btn primary" type="button" data-action="show-answer">${escapeHtml(t("showAnswer"))}</button>
            <button class="btn" type="button" data-action="open-card" data-id="${escapeAttr(card.id)}">典 ${escapeHtml(t("details"))}</button>
          </div>
        `}
      </article>
      ${renderDetailModal()}
    `;
  }

  function renderAnswer(card) {
    return `
      <div class="answer-section">
        <div class="reading-row">
          <div class="reading-box"><span class="label">${escapeHtml(t("hiragana"))}</span><strong>${escapeHtml(card.hiragana)}</strong></div>
          <div class="reading-box"><span class="label">Romaji</span><strong>${escapeHtml(card.romaji)}</strong></div>
        </div>
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
        ${renderDetailModal()}
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
          <p>${escapeHtml(card.hiragana)} · ${escapeHtml(card.romaji)}</p>
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
    }
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
            <div class="stroke-demo">
              <canvas id="strokeCanvas" width="520" height="280" aria-label="stroke order animation"></canvas>
            </div>
            <div class="actions">
              <button class="btn primary" type="button" data-action="replay-writing">${escapeHtml(t("replay"))}</button>
              <button class="btn" type="button" data-action="clear-writing">${escapeHtml(t("clear"))}</button>
            </div>
          </article>
          <article class="writing-card">
            <h3>${escapeHtml(t("strokeOrder"))}</h3>
            <ol class="stroke-list">${(card?.stroke_order || []).map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
            <h3>${escapeHtml(t("hint"))}</h3>
            <p>${escapeHtml(kanjiHint(card?.id).hint)}</p>
            <h3>${escapeHtml(t("mnemonic"))}</h3>
            <p>${escapeHtml(kanjiHint(card?.id).mnemonic)}</p>
          </article>
          <article class="writing-card writing-practice">
            <h3>${escapeHtml(lang() === "ru" ? "Поле письма" : "Writing area")}</h3>
            <canvas id="practiceCanvas" width="520" height="360" aria-label="writing canvas"></canvas>
          </article>
        </div>
      </section>
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
              <p>${escapeHtml(card.hiragana)} · ${escapeHtml(card.romaji)} · ${card.strokes} ${escapeHtml(t("strokes"))}</p>
              <p><span class="pill">${escapeHtml(t("radical"))}: ${escapeHtml(meta.radical || "-")} ${escapeHtml(localized(meta.radicalMeaning || {}))}</span></p>
            </div>
          </div>
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
    return `
      <section class="audio-panel">
        <h3>${escapeHtml(t("audio"))}</h3>
        <div class="actions">
          ${audio
            ? `<button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${escapeAttr(card.id)}">🔊 Kanji</button>`
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
        ${renderRewardModal()}
      </section>
    `;
  }

  function renderAchievementsPreview() {
    return `
      <div class="section-head">
        <div><h2>${escapeHtml(t("achievements"))}</h2><p>${unlockedAchievementCount()}/${state.rewards.achievements.length}</p></div>
      </div>
      <div class="achievement-grid">${state.rewards.achievements.slice(0, 4).map(renderAchievement).join("")}</div>
    `;
  }

  function renderAchievementsList() {
    return `<h3>${escapeHtml(t("achievements"))}</h3><div class="achievement-grid compact">${state.rewards.achievements.map(renderAchievement).join("")}</div>`;
  }

  function renderAchievement(item) {
    const unlocked = Boolean(state.progress.achievements[item.id]);
    return `
      <div class="achievement ${unlocked ? "is-unlocked" : ""}">
        <strong>${unlocked ? "◆" : "◇"} ${escapeHtml(localized(item.name))}</strong>
        <small>${escapeHtml(localized(item.description))}</small>
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
    const message = isLevel
      ? `${t("level")} ${state.progress.level} - ${state.progress.xp} XP - ${state.progress.moonFragments} ${t("coins")}`
      : reward.message;
    return `
      <div class="reward-backdrop">
        <article class="reward-modal">
          ${isLevel ? `<img class="reward-logo" src="assets/logo.png" alt="Flash Kanji" />` : ""}
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

  function renderMascotPanel(character, mood, category) {
    const mascot = getMascot(character);
    return `
      <article class="sidekick mascot-${character} mood-${mood}">
        <img src="${escapeAttr(mascot.sprites[mood] || Object.values(mascot.sprites)[0])}" alt="${escapeAttr(localized(mascot.name))}" />
        <div><strong>${escapeHtml(localized(mascot.name))}</strong><p>${escapeHtml(dialogueText(character, category))}</p></div>
      </article>
    `;
  }

  function renderMascot(character, mood, category, className) {
    const mascot = getMascot(character);
    return `
      <div class="${className} mascot-${character} mood-${mood}">
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
    if (!state.rewards?.achievements) return;
    state.rewards.achievements.forEach((achievement) => {
      if (state.progress.achievements[achievement.id]) return;
      if (!achievementMet(achievement)) return;
      state.progress.achievements[achievement.id] = new Date().toISOString();
      addReward(achievement.xp || 0, achievement.coins || 0, `achievement:${achievement.id}`);
      queueReward({
        title: localized(achievement.name),
        message: dialogueText("eva", "achievement"),
        xp: achievement.xp || 0,
        coins: achievement.coins || 0,
        mascot: "eva",
        mood: "happy",
        dialog: "achievement"
      });
    });
  }

  function achievementMet(achievement) {
    if (achievement.kind === "lessonComplete") return Object.keys(state.progress.lessonCompletions).length >= achievement.target;
    if (achievement.kind === "correct") return state.progress.totalCorrect >= achievement.target;
    if (achievement.kind === "learned") return getSummary().learned >= achievement.target;
    if (achievement.kind === "reviews") return totalReviews() >= achievement.target;
    if (achievement.kind === "streak") return state.progress.streak.current >= achievement.target;
    if (achievement.kind === "jlpt") {
      const cards = state.cards.filter((card) => card.jlpt === achievement.jlpt);
      return cards.length > 0 && cards.every((card) => getCardProgress(card.id).state === "Mastered");
    }
    return false;
  }

  function queueReward(reward) {
    if (!state.rewardModal) {
      state.rewardModal = reward;
      showConfetti();
      return;
    }
    if (reward.type === "level") {
      state.rewardQueue.unshift(reward);
      return;
    }
    state.rewardQueue.push(reward);
  }

  function addReward(xp, coins, reason = "reward") {
    const previousLevel = state.progress.level || calculateLevel(state.progress.xp);
    state.progress.xp += xp;
    state.progress.moonFragments += coins;
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
    setupPracticeCanvas();
    replayStrokeAnimation();
  }

  function setupPracticeCanvas() {
    const canvas = document.getElementById("practiceCanvas");
    if (!canvas) return;
    const context = canvas.getContext("2d");
    clearCanvas(context, canvas);
    let drawing = false;
    const point = (event) => {
      const rect = canvas.getBoundingClientRect();
      const source = event.touches ? event.touches[0] : event;
      return {
        x: (source.clientX - rect.left) * (canvas.width / rect.width),
        y: (source.clientY - rect.top) * (canvas.height / rect.height)
      };
    };
    const start = (event) => {
      event.preventDefault();
      drawing = true;
      const p = point(event);
      context.beginPath();
      context.moveTo(p.x, p.y);
    };
    const move = (event) => {
      if (!drawing) return;
      event.preventDefault();
      const p = point(event);
      context.lineTo(p.x, p.y);
      context.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--text").trim();
      context.lineWidth = 12;
      context.lineCap = "round";
      context.lineJoin = "round";
      context.stroke();
    };
    const end = () => { drawing = false; };
    canvas.onpointerdown = start;
    canvas.onpointermove = move;
    canvas.onpointerup = end;
    canvas.onpointerleave = end;
    canvas.ontouchstart = start;
    canvas.ontouchmove = move;
    canvas.ontouchend = end;
  }

  function clearWritingCanvas() {
    const canvas = document.getElementById("practiceCanvas");
    if (!canvas) return;
    clearCanvas(canvas.getContext("2d"), canvas);
  }

  function replayStrokeAnimation() {
    const canvas = document.getElementById("strokeCanvas");
    const card = findCard(state.activeCardId) || getTodayCards()[0] || state.cards[0];
    if (!canvas || !card) return;
    const context = canvas.getContext("2d");
    const strokes = makeStrokePaths(card.strokes);
    let index = 0;
    const drawNext = () => {
      clearCanvas(context, canvas);
      drawGrid(context, canvas);
      context.lineWidth = 12;
      context.lineCap = "round";
      context.lineJoin = "round";
      strokes.slice(0, index + 1).forEach((stroke, strokeIndex) => {
        context.strokeStyle = strokeIndex === index
          ? getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim()
          : getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
        context.beginPath();
        context.moveTo(stroke[0][0], stroke[0][1]);
        stroke.slice(1).forEach(([x, y]) => context.lineTo(x, y));
        context.stroke();
      });
      context.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--text").trim();
      context.font = "700 18px system-ui";
      context.fillText(`${index + 1}/${strokes.length}`, 18, 28);
      index += 1;
      if (index < strokes.length) window.setTimeout(drawNext, 420);
    };
    drawNext();
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
    context.stroke();
    context.restore();
  }

  function makeStrokePaths(count) {
    const templates = [
      [[90, 70], [430, 70]],
      [[105, 70], [105, 220]],
      [[430, 70], [430, 220]],
      [[95, 220], [435, 220]],
      [[140, 145], [380, 145]],
      [[260, 50], [260, 245]],
      [[125, 235], [225, 105]],
      [[395, 235], [295, 105]],
      [[150, 95], [220, 155], [150, 220]],
      [[370, 95], [300, 155], [370, 220]]
    ];
    return Array.from({ length: Math.max(1, count) }, (_, index) => templates[index % templates.length]);
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
        card.kanji, cardMeaning(card), card.meaning_ru, card.hiragana, card.romaji, card.jlpt, lessonTitleById(card.lessonId), cardInterface(card), meta.radical, localized(meta.radicalMeaning || {}),
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

  function getKanjiAudioPath(card) {
    if (!card) return "";
    const explicit = card.audioSrc || card.audio || "";
    return normalizeAudioPath(explicit);
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

  function autoPlayActiveKanjiAudio() {
    if (state.route !== "learn" && state.route !== "review") return;
    const card = findCard(state.activeCardId);
    const audio = getKanjiAudioPath(card);
    if (!card || !audio) return;
    const key = `${state.route}:${card.id}:${audio}`;
    if (key === lastAutoAudioKey) return;
    lastAutoAudioKey = key;
    playKanjiAudio(card, { silent: true });
  }

  function playKanjiAudio(card, options = {}) {
    const audio = getKanjiAudioPath(card);
    if (!audio) {
      if (!options.silent) console.warn("Kanji audio is not available for this card.", { id: card?.id, expected: expectedKanjiAudioPath(card) });
      return Promise.resolve(false);
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
        if (!options.silent) console.warn("Kanji audio playback was blocked or failed.", { id: card?.id, audio, error });
        return false;
      });
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
    while (remaining >= xpForLevel(level, curve) && level < 99) {
      remaining -= xpForLevel(level, curve);
      level += 1;
    }
    return level;
  }

  function getLevelInfo() {
    const curve = state.rewards?.levelCurve || { baseXp: 100, growth: 1.35 };
    let level = 1;
    let remaining = state.progress.xp;
    while (remaining >= xpForLevel(level, curve) && level < 99) {
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
    return Object.keys(state.progress.achievements).length;
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
  }

  function escapeAttr(value) {
    return escapeHtml(value);
  }
})();
