"use strict";

const STORAGE_KEY = "flashKanjiProgress";
const DEFAULT_REVIEW_STEPS = [5, 60, 720, 1440, 2880, 5760];

const t = (ru, en) => ({ ru, en });
const ex = (jp, kana, ru, en) => ({ jp, kana, ru, en });

const FALLBACK_DATA = {
  courses: [
    {
      id: "hiragana",
      title: t("Hiragana", "Hiragana"),
      description: t("Разминка для первого контакта с системой.", "Warm-up for the first contact with the system.")
    },
    {
      id: "katakana",
      title: t("Katakana", "Katakana"),
      description: t("Короткий курс на ритм и форму.", "A short track for rhythm and shape.")
    },
    {
      id: "basic_kanji",
      title: t("Basic Kanji", "Basic Kanji"),
      description: t("Первые кандзи и простые связки.", "First kanji and simple links.")
    },
    {
      id: "jlpt_n5",
      title: t("JLPT N5", "JLPT N5"),
      description: t("База для ежедневного учебного цикла.", "Base for the daily study cycle.")
    },
    {
      id: "jlpt_n4",
      title: t("JLPT N4", "JLPT N4"),
      description: t("Следующий уровень после устойчивой базы.", "The next step after the core base.")
    }
  ],
  review: {
    stepsMinutes: DEFAULT_REVIEW_STEPS,
    maxQueue: 3
  },
  kanji: [
    {
      id: "kanji_ichi",
      symbol: "一",
      jlpt: "N5",
      meanings_ru: ["один", "единый"],
      meanings_en: ["one", "single"],
      onyomi: ["イチ"],
      kunyomi: ["ひと"],
      romaji: ["ichi", "hito"],
      examples: [ex("一人です。", "ひとりです。", "Это один человек.", "It is one person.")]
    },
    {
      id: "kanji_gaku",
      symbol: "学",
      jlpt: "N5",
      meanings_ru: ["учёба", "изучать", "наука"],
      meanings_en: ["study", "learning", "science"],
      onyomi: ["ガク"],
      kunyomi: ["まな.ぶ"],
      romaji: ["gaku", "manabu"],
      examples: [ex("彼は日本語を学んでいます。", "かれはにほんごをまなんでいます。", "Он изучает японский язык.", "He is studying Japanese.")]
    },
    {
      id: "kanji_nichi",
      symbol: "日",
      jlpt: "N5",
      meanings_ru: ["день", "солнце", "Япония"],
      meanings_en: ["day", "sun", "Japan"],
      onyomi: ["ニチ", "ジツ"],
      kunyomi: ["ひ", "か"],
      romaji: ["nichi", "jitsu", "hi", "ka"],
      examples: [ex("今日はいい日です。", "きょうはいいひです。", "Сегодня хороший день.", "Today is a good day.")]
    },
    {
      id: "kanji_hon",
      symbol: "本",
      jlpt: "N5",
      meanings_ru: ["книга", "основа", "счётный суффикс для длинных предметов"],
      meanings_en: ["book", "origin", "counter for long objects"],
      onyomi: ["ホン"],
      kunyomi: ["もと"],
      romaji: ["hon", "moto"],
      examples: [ex("この本は面白いです。", "このほんはおもしろいです。", "Эта книга интересная.", "This book is interesting.")]
    },
    {
      id: "kanji_hito",
      symbol: "人",
      jlpt: "N5",
      meanings_ru: ["человек", "люди"],
      meanings_en: ["person", "people"],
      onyomi: ["ジン", "ニン"],
      kunyomi: ["ひと"],
      romaji: ["jin", "nin", "hito"],
      examples: [ex("三人います。", "さんにんいます。", "Здесь три человека.", "There are three people.")]
    },
    {
      id: "kanji_mi",
      symbol: "見",
      jlpt: "N5",
      meanings_ru: ["видеть", "смотреть", "замечать"],
      meanings_en: ["see", "look", "notice"],
      onyomi: ["ケン"],
      kunyomi: ["み.る"],
      romaji: ["ken", "miru"],
      examples: [ex("映画を見ます。", "えいがをみます。", "Я смотрю фильм.", "I watch a movie.")]
    },
    {
      id: "kanji_shoku",
      symbol: "食",
      jlpt: "N5",
      meanings_ru: ["есть", "еда", "питание"],
      meanings_en: ["eat", "food", "meal"],
      onyomi: ["ショク"],
      kunyomi: ["た.べる"],
      romaji: ["shoku", "taberu"],
      examples: [ex("朝ご飯を食べます。", "あさごはんをたべます。", "Я завтракаю.", "I eat breakfast.")]
    },
    {
      id: "kanji_gyou",
      symbol: "行",
      jlpt: "N4",
      meanings_ru: ["идти", "ехать", "проводить"],
      meanings_en: ["go", "travel", "conduct"],
      onyomi: ["コウ", "ギョウ"],
      kunyomi: ["い.く", "おこな.う"],
      romaji: ["kou", "gyou", "iku", "okonau"],
      examples: [ex("駅へ行きます。", "えきへいきます。", "Иду на станцию.", "I go to the station.")]
    },
    {
      id: "kanji_yama",
      symbol: "山",
      jlpt: "N5",
      meanings_ru: ["гора"],
      meanings_en: ["mountain"],
      onyomi: ["サン"],
      kunyomi: ["やま"],
      romaji: ["san", "yama"],
      examples: [ex("山が見えます。", "やまがみえます。", "Видна гора.", "A mountain is visible.")]
    }
  ],
  lessons: [
    {
      id: "lesson_hira_001",
      courseId: "hiragana",
      title: t("Звук и форма", "Sound and shape"),
      description: t("Короткая разминка на одно простое чтение.", "A short warm-up on a simple reading."),
      xpReward: 12,
      stardustReward: 4,
      items: [],
      steps: [
        {
          type: "intro",
          entity: {
            symbol: "あ",
            reading: "a",
            romaji: "a",
            meaning: t("гласный звук a", "the vowel a"),
            example: ex("あさ", "あさ", "утро", "morning")
          }
        },
        {
          type: "multiple_choice_reading",
          question: t("Как читается あ?", "How do you read あ?"),
          options: ["a", "i", "u", "e"],
          answer: "a"
        },
        {
          type: "type_answer",
          question: t("Напиши чтение латиницей.", "Type the reading in romaji."),
          answers: ["a"]
        },
        { type: "finish" }
      ]
    },
    {
      id: "lesson_kata_001",
      courseId: "katakana",
      title: t("Жёсткий контур", "Sharp contour"),
      description: t("Ещё одна короткая разминка.", "Another short warm-up."),
      xpReward: 12,
      stardustReward: 4,
      items: [],
      steps: [
        {
          type: "intro",
          entity: {
            symbol: "ア",
            reading: "a",
            romaji: "a",
            meaning: t("катакана для звука a", "katakana for the sound a"),
            example: ex("アプリ", "あぷり", "приложение", "app")
          }
        },
        {
          type: "multiple_choice_reading",
          question: t("Как читается ア?", "How do you read ア?"),
          options: ["ka", "a", "shi", "to"],
          answer: "a"
        },
        {
          type: "type_answer",
          question: t("Введи чтение латиницей.", "Type the romaji reading."),
          answers: ["a"]
        },
        { type: "finish" }
      ]
    },
    {
      id: "lesson_basic_001",
      courseId: "basic_kanji",
      title: t("Первый кандзи", "First kanji"),
      description: t("Смотрим на знак, значение и первое чтение.", "See the sign, meaning, and first reading."),
      xpReward: 20,
      stardustReward: 6,
      items: ["kanji_ichi"],
      steps: [
        { type: "intro", kanjiId: "kanji_ichi" },
        {
          type: "multiple_choice_meaning",
          kanjiId: "kanji_ichi",
          question: t("Что значит 一?", "What does 一 mean?"),
          options: ["один", "два", "три", "гора"],
          answer: "один"
        },
        {
          type: "multiple_choice_reading",
          kanjiId: "kanji_ichi",
          question: t("Выбери чтение 一.", "Pick the reading of 一."),
          options: ["ichi", "ni", "san", "yama"],
          answer: "ichi"
        },
        {
          type: "sentence_choice",
          kanjiId: "kanji_ichi",
          question: t("Где 一 использовано правильно?", "Where is 一 used correctly?"),
          options: [
            "一人です。",
            "二人です。",
            "山です。"
          ],
          answer: "一人です。"
        },
        {
          type: "type_answer",
          kanjiId: "kanji_ichi",
          question: t("Введи чтение 一 латиницей.", "Type the reading of 一 in romaji."),
          answers: ["ichi", "hito"]
        },
        { type: "finish" }
      ]
    },
    {
      id: "lesson_basic_002",
      courseId: "basic_kanji",
      title: t("Учёба и наука", "Study and science"),
      description: t("Работаем с 学 и короткой связкой.", "Work with 学 and a short link."),
      xpReward: 22,
      stardustReward: 7,
      items: ["kanji_gaku"],
      steps: [
        { type: "intro", kanjiId: "kanji_gaku" },
        {
          type: "multiple_choice_meaning",
          kanjiId: "kanji_gaku",
          question: t("Что значит 学?", "What does 学 mean?"),
          options: ["учёба", "день", "гора", "рот"],
          answer: "учёба"
        },
        {
          type: "multiple_choice_reading",
          kanjiId: "kanji_gaku",
          question: t("Какое чтение у 学?", "Which reading matches 学?"),
          options: ["gaku", "hon", "yama", "kuchi"],
          answer: "gaku"
        },
        {
          type: "match",
          pairs: [
            { left: "学", right: "учёба" },
            { left: "日", right: "день" },
            { left: "山", right: "гора" }
          ]
        },
        { type: "finish" }
      ]
    },
    {
      id: "lesson_n5_001",
      courseId: "jlpt_n5",
      title: t("Солнечный день", "Sunny day"),
      description: t("日, 本 и понятный пример.", "日, 本 and a clear example."),
      xpReward: 26,
      stardustReward: 8,
      items: ["kanji_nichi", "kanji_hon"],
      steps: [
        { type: "intro", kanjiId: "kanji_nichi" },
        {
          type: "multiple_choice_meaning",
          kanjiId: "kanji_nichi",
          question: t("Что значит 日?", "What does 日 mean?"),
          options: ["день", "книга", "человек", "еда"],
          answer: "день"
        },
        {
          type: "multiple_choice_reading",
          kanjiId: "kanji_nichi",
          question: t("Выбери чтение 日.", "Choose the reading of 日."),
          options: ["nichi", "hon", "hito", "shoku"],
          answer: "nichi"
        },
        {
          type: "sentence_choice",
          kanjiId: "kanji_nichi",
          question: t("Где 日 используется естественно?", "Where is 日 used naturally?"),
          options: [
            "今日はいい日です。",
            "本は青いです。",
            "人が山へ行きます。"
          ],
          answer: "今日はいい日です。"
        },
        {
          type: "type_answer",
          kanjiId: "kanji_nichi",
          question: t("Введи чтение 日 латиницей.", "Type the romaji reading of 日."),
          answers: ["nichi", "hi"]
        },
        { type: "finish" }
      ]
    },
    {
      id: "lesson_n4_001",
      courseId: "jlpt_n4",
      title: t("Движение", "Movement"),
      description: t("行 и карта простого пути.", "行 and a simple path map."),
      xpReward: 32,
      stardustReward: 10,
      items: ["kanji_gyou", "kanji_yama"],
      steps: [
        { type: "intro", kanjiId: "kanji_gyou" },
        {
          type: "multiple_choice_meaning",
          kanjiId: "kanji_gyou",
          question: t("Что значит 行?", "What does 行 mean?"),
          options: ["идти", "смотреть", "гора", "книга"],
          answer: "идти"
        },
        {
          type: "multiple_choice_reading",
          kanjiId: "kanji_gyou",
          question: t("Выбери чтение 行.", "Choose the reading of 行."),
          options: ["iku", "miru", "yama", "hon"],
          answer: "iku"
        },
        {
          type: "sentence_choice",
          kanjiId: "kanji_gyou",
          question: t("Где 行 стоит естественно?", "Where does 行 fit naturally?"),
          options: [
            "駅へ行きます。",
            "本を見ます。",
            "山が高いです。"
          ],
          answer: "駅へ行きます。"
        },
        { type: "finish" }
      ]
    }
  ]
};

const appRoot = document.getElementById("app");
const topBarCopy = document.querySelector(".top-bar-copy");

const state = {
  data: null,
  progress: loadProgress(),
  route: parseRoute(),
  ui: {
    lessonDrafts: {},
    review: {
      currentId: null,
      currentKind: {},
      answer: null,
      solved: false,
      feedback: ""
    },
    codexQuery: "",
    codexSelectedId: null,
    focusAfterRender: null
  },
  installPrompt: null
};

boot().catch((error) => {
  console.error(error);
  if (appRoot) {
    appRoot.innerHTML = renderError(error);
  }
});

window.addEventListener("hashchange", () => {
  state.route = parseRoute();
  render();
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  state.installPrompt = event;
  render();
});

window.addEventListener("appinstalled", () => {
  state.installPrompt = null;
  render();
});

if (appRoot) {
  appRoot.addEventListener("click", onAppClick);
  appRoot.addEventListener("submit", onAppSubmit);
  appRoot.addEventListener("input", onAppInput);
}

function boot() {
  renderLoading();
  return loadData().then((data) => {
    state.data = prepareData(data);
    state.route = parseRoute();
    ensureSelectionDefaults();
    render();
    registerServiceWorker();
  });
}

function renderLoading() {
  if (!appRoot) return;
  appRoot.innerHTML = `
    <section class="section hero">
      <article class="panel hero-main">
        <div class="hero-copy">
          <p class="eyebrow">JLPT N5-N1 · lessons · review</p>
          <h1>FLASH KANJI</h1>
          <p>Загружаем данные и поднимаем тёмный учебный кабинет. Всё хранится локально и работает без backend.</p>
          <div class="hero-actions">
            <button class="btn primary" type="button" disabled>Загрузка…</button>
            <a class="btn ghost" href="#lessons">Учебники</a>
            <a class="btn ghost" href="#review">Повторение</a>
          </div>
        </div>
      </article>
      <aside class="hero-side">
        <div class="panel panel-inner">
          <p class="eyebrow">Подготовка</p>
          <h3>Подтягиваем курсы, кандзи и уроки</h3>
          <p class="muted">Если JSON по какой-то причине недоступен, приложение подхватит встроенный резервный набор данных.</p>
        </div>
      </aside>
    </section>
  `;
}

function render() {
  if (!appRoot || !state.data) return;
  ensureSelectionDefaults();
  state.route = parseRoute();
  const markup = renderRoute(state.route);
  appRoot.innerHTML = `${markup}${renderBottomNav(state.route)}`;
  updateTopBar();
  applyFocusAfterRender();
  window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }));
}

function renderRoute(route) {
  switch (route.name) {
    case "home":
      return renderHome();
    case "lessons":
      return renderLessons(route.courseId);
    case "lesson":
      return renderLesson(route.lessonId);
    case "review":
      return renderReview();
    case "progress":
      return renderProgress();
    case "codex":
      return renderCodex(route.kanjiId);
    default:
      return renderHome();
  }
}

function renderCourseCard(course) {
  const progress = getCourseCompletion(course.id);
  return `
    <a class="course-card" href="#lessons/${course.id}">
      <h3>${escapeHTML(textOf(course.title))}</h3>
      <p>${escapeHTML(textOf(course.description))}</p>
      <div class="progress"><i style="width:${Math.max(4, progress.percent)}%"></i></div>
      <div class="meta-row">
        <span class="pill">${progress.completed}/${progress.total} уроков</span>
        <span class="pill">${progress.percent}%</span>
      </div>
    </a>
  `;
}

function renderHome() {
  const continueLesson = getContinueLesson();
  const reviewQueue = getDueReviewEntries();
  const nextDue = getNextReviewEntry();
  const courseCards = state.data.courses
    .map((course) => renderCourseCard(course))
    .join("");

  return `
    <section class="section hero">
      <article class="panel hero-main">
        <div class="hero-copy">
          <p class="eyebrow">JLPT N5-N1 · front-only PWA</p>
          <h1>FLASH KANJI</h1>
          <p>Кандзи, чтение, уроки и повторение в одном спокойном пространстве. Учимся шаг за шагом, без backend и без лишней суеты.</p>
          <div class="hero-actions">
            <a class="btn primary" href="${continueLesson ? `#lesson/${continueLesson.id}` : "#lessons"}">${continueLesson && !continueLesson.completed ? "Продолжить урок" : "Начать урок"}</a>
            <a class="btn ghost" href="#review">Повторение${reviewQueue.length ? ` · ${reviewQueue.length}` : ""}</a>
            <a class="btn ghost" href="#lessons">Учебники</a>
          </div>
        </div>
      </article>

      <aside class="hero-side">
        <div class="stat-grid">
          <div class="stat">
            <span>Уровень</span>
            <strong>${state.progress.level}</strong>
          </div>
          <div class="stat">
            <span>XP</span>
            <strong>${state.progress.xp}</strong>
          </div>
          <div class="stat">
            <span>Стрик</span>
            <strong>${state.progress.streak}</strong>
          </div>
          <div class="stat">
            <span>Повторы</span>
            <strong>${reviewQueue.length}</strong>
          </div>
        </div>

        <div class="panel panel-inner">
          <p class="eyebrow">${continueLesson ? "Следующий шаг" : "Первый шаг"}</p>
          <h3>${continueLesson ? continueLesson.title : "Откройте первый урок"}</h3>
          <p>${continueLesson ? continueLesson.description : "Начните с самого первого курса и откройте ритм приложения."}</p>
          <div class="actions">
            <a class="btn primary" href="${continueLesson ? `#lesson/${continueLesson.id}` : "#lessons"}">${continueLesson && !continueLesson.completed ? "Продолжить" : "Перейти"}</a>
            <a class="btn ghost" href="#progress">Прогресс</a>
          </div>
        </div>

        <div class="panel panel-inner">
          <p class="eyebrow">Ближайшее повторение</p>
          ${nextDue ? renderMiniReviewPreview(nextDue) : `<p class="muted">Сейчас повторений нет. Откройте урок, чтобы добавить кандзи в очередь SRS.</p>`}
        </div>

        <div class="panel panel-inner">
          <p class="eyebrow">PWA</p>
          ${state.installPrompt ? `
            <h3>Установить приложение</h3>
            <p>Сохраните Flash Kanji на главный экран, чтобы открыть его как отдельное приложение.</p>
            <div class="actions">
              <button class="btn primary" type="button" data-action="install">Установить приложение</button>
            </div>
          ` : isIOS() ? `
            <h3>Установка на iPhone</h3>
            <p>Нажмите <strong>Поделиться</strong>, затем <strong>На экран Домой</strong>.</p>
          ` : `
            <h3>Приложение готово</h3>
            <p>Flash Kanji уже работает как PWA. Когда браузер предложит установку, можно сохранить его на экран устройства.</p>
          `}
        </div>
      </aside>
    </section>

    <section class="section">
      <div class="route-title">
        <div>
          <h2>Учебные курсы</h2>
          <small>Последовательность без перегруза. Откройте курс и идите по урокам.</small>
        </div>
        <small>${countCompletedLessons()} / ${state.data.lessons.length} уроков завершено</small>
      </div>
      <div class="course-strip">
        ${courseCards}
      </div>
    </section>
  `;
}

function renderMiniReviewPreview(entry) {
  const kanji = entry.kanji;
  if (!kanji) {
    return `<p class="muted">Карточка повторения не найдена.</p>`;
  }
  const kind = getReviewKind(entry.id);
  const prompt = kind === "meaning" ? `Что значит ${kanji.symbol}?` : `Как читается ${kanji.symbol}?`;
  return `
    <div class="review-slab">
      <div class="meta-row">
        <span class="pill">${kanji.jlpt}</span>
        <span class="pill">${kind === "meaning" ? "значение" : "чтение"}</span>
      </div>
      <div class="symbol">${kanji.symbol}</div>
      <p>${prompt}</p>
      <a class="btn primary" href="#review">Открыть повторение</a>
    </div>
  `;
}

function renderLessons(courseId) {
  const selectedCourse = state.data.courses.find((course) => course.id === courseId) || state.data.courses[0];
  const courseLessons = getLessonsByCourse(selectedCourse.id);
  const visibleLessons = courseLessons;
  const strip = state.data.courses.map((course) => {
    const progress = getCourseCompletion(course.id);
    const active = course.id === selectedCourse.id;
    const progressWidth = `${Math.max(4, progress.percent)}%`;
    return `
      <a class="course-card" href="#lessons/${course.id}" style="${active ? "border-color: rgba(231,79,130,.7); box-shadow: 0 18px 42px rgba(231,79,130,.12);" : ""}">
        <h3>${escapeHTML(textOf(course.title))}</h3>
        <p>${escapeHTML(textOf(course.description))}</p>
        <div class="progress"><i style="width:${progressWidth}"></i></div>
        <div class="meta-row">
          <span class="pill">${progress.completed}/${progress.total} уроков</span>
          <span class="pill">${course.id === selectedCourse.id ? "Открыто" : "Открыть"}</span>
        </div>
      </a>
    `;
  }).join("");

  const lessonCards = visibleLessons.map((lesson, index) => {
    const previous = index > 0 ? visibleLessons[index - 1] : null;
    const unlocked = !previous || isLessonCompleted(previous.id);
    const completed = isLessonCompleted(lesson.id);
    const progress = getLessonProgress(lesson.id);
    const lessonHref = unlocked ? `#lesson/${lesson.id}` : null;
    const buttonLabel = completed ? "Пересмотреть" : unlocked ? "Открыть урок" : "Закрыто";
    const lockNote = unlocked ? "" : `<div class="lock-note">Сначала завершите предыдущий урок этого курса.</div>`;
    const cardInner = `
      <h3>${escapeHTML(textOf(lesson.title))}</h3>
      <p>${escapeHTML(textOf(lesson.description))}</p>
      <div class="lesson-meta">
        <span class="pill">${lesson.xpReward} XP</span>
        <span class="pill">+${lesson.stardustReward} stardust</span>
        <span class="pill">${lesson.steps.length} шагов</span>
        ${lesson.items.length ? `<span class="pill">${lesson.items.length} кандзи</span>` : `<span class="pill">без кандзи</span>`}
      </div>
      <div class="progress"><i style="width:${Math.max(4, progress.percent)}%"></i></div>
      <div class="meta-row">
        <span class="pill">${completed ? "Завершён" : unlocked ? "Доступен" : "Заблокирован"}</span>
        <span class="pill">${progress.percent}%</span>
      </div>
      ${lockNote}
      ${lessonHref ? `<a class="btn primary" href="${lessonHref}">${buttonLabel}</a>` : `<button class="btn" type="button" disabled>${buttonLabel}</button>`}
    `;
    return unlocked || completed
      ? `<article class="lesson-card">${cardInner}</article>`
      : `<article class="lesson-card" style="opacity:.72">${cardInner}</article>`;
  }).join("");

  return `
    <section class="section">
      <div class="route-title">
        <div>
          <h2>Учебники</h2>
          <small>${escapeHTML(textOf(selectedCourse.title))} · ${escapeHTML(textOf(selectedCourse.description))}</small>
        </div>
        <small>${visibleLessons.length} уроков</small>
      </div>
      <div class="course-strip">${strip}</div>
      <div class="lessons-grid">${lessonCards}</div>
    </section>
  `;
}

function renderLesson(lessonId) {
  const lesson = state.data.lessonsById.get(lessonId);
  if (!lesson) return renderEmpty("Урок не найден", "Выберите другой урок в списке учебников.", "#lessons");
  if (!isLessonUnlocked(lesson.id)) {
    return renderEmpty("Урок закрыт", "Сначала завершите предыдущий урок в этом курсе.", `#lessons/${lesson.courseId}`);
  }

  seedLessonExposure(lesson);
  const lessonState = getLessonState(lesson.id);
  lessonState.lastTouchedAt = Date.now();
  state.progress.lastActiveLessonId = lesson.id;
  saveProgress();
  const currentStepIndex = Math.min(lessonState.stepIndex, lesson.steps.length - 1);
  const currentStep = lesson.steps[currentStepIndex];
  const currentStepSolved = isStepSolved(lesson.id, currentStepIndex);
  const progressPercent = lessonState.completed
    ? 100
    : Math.round(((currentStepIndex + (currentStepSolved ? 1 : 0)) / lesson.steps.length) * 100);
  const course = state.data.coursesById.get(lesson.courseId);
  const nextLesson = getNextLesson(lesson.id);
  const itemChips = (lesson.items || [])
    .map((id) => {
      const kanji = state.data.kanjiById.get(id);
      return kanji ? `<span class="pill">${kanji.symbol} · ${kanji.jlpt}</span>` : "";
    })
    .join("");

  return `
    <section class="section lesson-shell">
      <div class="route-title">
        <div>
          <h2>${escapeHTML(textOf(lesson.title))}</h2>
          <small>${escapeHTML(textOf(course?.title || { ru: lesson.courseId, en: lesson.courseId }))} · ${escapeHTML(textOf(lesson.description))}</small>
        </div>
        <small>${lesson.steps.length} шагов</small>
      </div>

      <div class="lesson-progress">
        <div class="lesson-progress-head">
          <span>Шаг ${Math.min(currentStepIndex + 1, lesson.steps.length)} / ${lesson.steps.length}</span>
          <span>${progressPercent}%</span>
        </div>
        <div class="progress"><i style="width:${progressPercent}%"></i></div>
      </div>

      <div class="detail-layout">
        <section class="detail-card">
          <div class="meta-row">
            <span class="pill">${escapeHTML(textOf(course?.title || { ru: lesson.courseId, en: lesson.courseId }))}</span>
            <span class="pill">${lesson.xpReward} XP</span>
            <span class="pill">+${lesson.stardustReward} stardust</span>
            ${itemChips}
          </div>
          ${renderLessonStep(lesson, lessonState, currentStepIndex, currentStep)}
        </section>

        <aside class="detail-aside">
          <div class="panel panel-inner">
            <p class="eyebrow">Путь</p>
            <h3>${nextLesson ? "Следующий урок" : "Финишная точка"}</h3>
            <p>${nextLesson ? escapeHTML(textOf(nextLesson.title)) : "Это последний доступный урок в текущем наборе."}</p>
            <div class="actions">
              ${nextLesson ? `<a class="btn ghost" href="#lesson/${nextLesson.id}">К следующему уроку</a>` : `<a class="btn ghost" href="#lessons">К списку уроков</a>`}
              <a class="btn ghost" href="#review">В повторение</a>
            </div>
          </div>

          <div class="panel panel-inner">
            <p class="eyebrow">Статус</p>
            <div class="meta-row">
              <span class="pill">Сделано шагов: ${countSolvedLessonSteps(lesson.id)}</span>
              <span class="pill">Точность: ${getLessonAccuracy(lesson.id)}%</span>
            </div>
            <p class="muted">${lessonState.completed ? "Урок уже завершён. Можно повторить его и пройти заново." : "Продвигайтесь шаг за шагом. После фактического просмотра кандзи попадут в очередь повторения."}</p>
          </div>
        </aside>
      </div>
    </section>
  `;
}

function renderLessonStep(lesson, lessonState, stepIndex, step) {
  if (!step) {
    return renderEmptyBlock("Шаг не найден", "Вернитесь к списку уроков и откройте урок снова.", "#lessons");
  }

  const stepState = getLessonStepState(lesson.id, stepIndex);

  switch (step.type) {
    case "intro":
      return renderLessonIntro(lesson, step, stepState);
    case "multiple_choice_meaning":
    case "multiple_choice_reading":
    case "sentence_choice":
      return renderLessonChoice(lesson, step, stepState, stepIndex);
    case "type_answer":
      return renderLessonTypeAnswer(lesson, step, stepState, stepIndex);
    case "match":
      return renderLessonMatch(lesson, step, stepState, stepIndex);
    case "finish":
      return renderLessonFinish(lesson, lessonState, stepState);
    default:
      return renderEmptyBlock("Неизвестный шаг", "В данных урока есть неподдерживаемый тип шага.");
  }
}

function renderLessonIntro(lesson, step) {
  const entity = resolveLessonEntity(step);
  const solved = isStepSolved(lesson.id, lessonStateStepIndex(lesson.id));
  const actionLabel = solved ? "Продолжить" : "Понял";
  return `
    <div class="step-card">
      <div class="symbol-card">
        <div class="symbol">${escapeHTML(entity.symbol || "?")}</div>
        <div class="reading">${escapeHTML(entity.reading || entity.romaji || "")}</div>
        <div class="meaning">${escapeHTML(textOf(entity.meaning || ""))}</div>
      </div>
      <div>
        <p class="eyebrow">Вводный шаг</p>
        <h3>${escapeHTML(textOf(entity.title || lesson.title))}</h3>
        <p>${escapeHTML(textOf(entity.description || step.question || lesson.description))}</p>
      </div>
      ${entity.example ? `
        <div class="review-slab">
          <div class="meta-row">
            <span class="pill">${escapeHTML(entity.example.jp)}</span>
            <span class="pill">${escapeHTML(entity.example.kana)}</span>
          </div>
          <p>${escapeHTML(entity.example.ru)}</p>
        </div>
      ` : ""}
      <div class="actions">
        <button class="btn primary" type="button" data-action="lesson-next" data-lesson-id="${lesson.id}">${actionLabel}</button>
      </div>
    </div>
  `;
}

function renderLessonChoice(lesson, step, stepState, stepIndex) {
  const solved = !!stepState.solved;
  const selected = stepState.selected || null;
  const options = step.options || [];
  const correct = step.answer;
  const feedback = getLessonStepFeedback(stepState, correct, selected, solved);
  return `
    <div class="step-card">
      <div class="page-title">
        <p class="eyebrow">${step.type === "multiple_choice_meaning" ? "Значение" : step.type === "multiple_choice_reading" ? "Чтение" : "Самопроверка"}</p>
        <h3>${escapeHTML(textOf(step.question))}</h3>
      </div>
      <div class="option-grid${options.length <= 3 ? " one-col" : ""}">
        ${options.map((option) => {
          const isSelected = selected === option;
          const isCorrect = solved && option === correct;
          const isWrong = selected === option && !solved;
          return `
            <button class="option ${isSelected ? "is-selected" : ""} ${isCorrect ? "is-correct" : ""} ${isWrong ? "is-wrong" : ""}" type="button" data-action="lesson-answer" data-lesson-id="${lesson.id}" data-step-index="${stepIndex}" data-value="${escapeAttribute(option)}" ${solved ? "disabled" : ""}>
              ${escapeHTML(option)}
            </button>
          `;
        }).join("")}
      </div>
      <div class="feedback ${solved ? "good" : selected && !solved ? "bad" : ""}">${escapeHTML(feedback)}</div>
      ${solved ? `
        <div class="actions">
          <button class="btn primary" type="button" data-action="lesson-next" data-lesson-id="${lesson.id}">Продолжить</button>
        </div>
      ` : ""}
    </div>
  `;
}

function renderLessonTypeAnswer(lesson, step, stepState, stepIndex) {
  const solved = !!stepState.solved;
  const typed = stepState.typed || "";
  const feedback = getLessonStepFeedback(stepState, step.answers?.[0] || "", typed, solved);
  return `
    <div class="step-card">
      <div class="page-title">
        <p class="eyebrow">Проверка ввода</p>
        <h3>${escapeHTML(textOf(step.question))}</h3>
      </div>
      <form class="input-row" data-form="lesson-type" data-lesson-id="${lesson.id}" data-step-index="${stepIndex}">
        <input type="text" name="answer" value="${escapeAttribute(typed)}" placeholder="Введите ответ" ${solved ? "disabled" : ""} autocomplete="off" spellcheck="false" />
        <button class="btn primary" type="submit" ${solved ? "disabled" : ""}>Проверить</button>
      </form>
      <div class="feedback ${solved ? "good" : typed ? "bad" : ""}">${escapeHTML(feedback)}</div>
      ${solved ? `
        <div class="actions">
          <button class="btn primary" type="button" data-action="lesson-next" data-lesson-id="${lesson.id}">Продолжить</button>
        </div>
      ` : ""}
    </div>
  `;
}

function renderLessonMatch(lesson, step, stepState, stepIndex) {
  const draft = getMatchDraft(lesson.id, stepIndex);
  const solved = !!stepState.solved;
  const pairs = step.pairs || [];
  const matchedCount = Object.keys(draft.matched || {}).length;
  const feedback = solved ? "Все пары собраны. Можно продолжать." : matchedCount ? `Собрано ${matchedCount} / ${pairs.length} пар.` : "Соединяйте пары по смыслу.";
  const leftItems = pairs.map((pair) => {
    const matched = draft.matched[pair.left];
    const picked = draft.selectedLeft === pair.left;
    return `
      <button class="match-item ${matched ? "is-paired" : ""} ${picked ? "is-picked" : ""}" type="button" data-action="lesson-match-select" data-side="left" data-lesson-id="${lesson.id}" data-step-index="${stepIndex}" data-value="${escapeAttribute(pair.left)}" ${matched || solved ? "disabled" : ""}>
        ${escapeHTML(pair.left)}
      </button>
    `;
  }).join("");
  const rightItems = pairs.map((pair) => {
    const matched = draft.matched[pair.left];
    const picked = draft.selectedRight === pair.right;
    return `
      <button class="match-item ${matched ? "is-paired" : ""} ${picked ? "is-picked" : ""}" type="button" data-action="lesson-match-select" data-side="right" data-lesson-id="${lesson.id}" data-step-index="${stepIndex}" data-value="${escapeAttribute(pair.right)}" ${matched || solved ? "disabled" : ""}>
        ${escapeHTML(pair.right)}
      </button>
    `;
  }).join("");

  return `
    <div class="step-card">
      <div class="page-title">
        <p class="eyebrow">Сопоставление</p>
        <h3>${escapeHTML(textOf(step.question || t("Соедини пары", "Match the pairs")))}</h3>
      </div>
      <div class="match-grid">
        <div class="match-column">${leftItems}</div>
        <div class="match-column">${rightItems}</div>
      </div>
      <div class="feedback ${solved ? "good" : ""}">${escapeHTML(feedback)}</div>
      ${solved ? `
        <div class="actions">
          <button class="btn primary" type="button" data-action="lesson-next" data-lesson-id="${lesson.id}">Продолжить</button>
        </div>
      ` : ""}
    </div>
  `;
}

function renderLessonFinish(lesson, lessonState) {
  const completed = !!lessonState.completed;
  const rewardText = completed ? "Урок уже завершён." : "Завершите урок, чтобы начислить XP и stardust.";
  const nextLesson = getNextLesson(lesson.id);
  return `
    <div class="step-card">
      <div class="page-title">
        <p class="eyebrow">Финал</p>
        <h3>Готово к завершению</h3>
        <p>${escapeHTML(rewardText)}</p>
      </div>
      <div class="stat-grid">
        <div class="stat">
          <span>XP</span>
          <strong>+${lesson.xpReward}</strong>
        </div>
        <div class="stat">
          <span>Stardust</span>
          <strong>+${lesson.stardustReward}</strong>
        </div>
      </div>
      <div class="meta-row">
        <span class="pill">Точность ${getLessonAccuracy(lesson.id)}%</span>
        <span class="pill">${lesson.items.length} кандзи</span>
        <span class="pill">${lesson.steps.length} шагов</span>
      </div>
      <div class="actions">
        ${completed ? `<a class="btn ghost" href="${nextLesson ? `#lesson/${nextLesson.id}` : "#lessons"}">${nextLesson ? "К следующему уроку" : "К списку уроков"}</a>` : `<button class="btn primary" type="button" data-action="lesson-complete" data-lesson-id="${lesson.id}">Завершить урок</button>`}
        <a class="btn ghost" href="#review">В повторение</a>
      </div>
    </div>
  `;
}

function renderReview() {
  const dueEntries = getDueReviewEntries();
  const current = getCurrentReviewCard(dueEntries);
  const upcoming = getNextReviewEntry();
  const schedule = (state.data.review.stepsMinutes || DEFAULT_REVIEW_STEPS).map((minutes) => `<span class="pill">${formatReviewInterval(minutes)}</span>`).join("");
  const queueInfo = dueEntries.length ? `${dueEntries.length} карточек готовы` : "Сейчас нет карточек для ответа";

  return `
    <section class="section lesson-shell">
      <div class="route-title">
        <div>
          <h2>Повторение</h2>
          <small>${queueInfo} · очередь строится из кандзи, которые вы уже видели в уроках.</small>
        </div>
        <small>${countReviewedCards()} карточек в SRS</small>
      </div>

      <div class="detail-layout">
        <section class="detail-card">
          ${current ? renderReviewCard(current) : renderReviewEmpty()}
        </section>
        <aside class="detail-aside">
          <div class="panel panel-inner">
            <p class="eyebrow">Схема SRS</p>
            <div class="meta-row">${schedule}</div>
            <p class="muted">Карточка движется по шкале 5м → 1ч → 12ч → 24ч → 48ч → 96ч и дальше по удвоению.</p>
          </div>
          <div class="panel panel-inner">
            <p class="eyebrow">Ближайшая карточка</p>
            ${upcoming ? renderMiniReviewPreview(upcoming) : `<p class="muted">Пока нет даже будущих повторов. Откройте урок, чтобы добавить кандзи в очередь.</p>`}
          </div>
        </aside>
      </div>
    </section>
  `;
}

function renderReviewEmpty() {
  return `
    <div class="empty-state">
      <div class="review-slab" style="max-width: 640px; margin: 0 auto;">
        <div class="symbol">休</div>
        <h3>Повторов сейчас нет</h3>
        <p>Откройте урок, пройдите кандзи, и карточки появятся в очереди SRS автоматически.</p>
        <div class="actions" style="justify-content:center;">
          <a class="btn primary" href="#lessons">К урокам</a>
          <a class="btn ghost" href="#codex">К словарю</a>
        </div>
      </div>
    </div>
  `;
}

function renderReviewCard(entry) {
  const kanji = entry.kanji;
  if (!kanji) {
    return renderEmptyBlock("Карточка не найдена", "Вернитесь назад и попробуйте открыть повторение снова.", "#home");
  }
  const kind = getReviewKind(entry.id);
  const prompt = kind === "meaning" ? t(`Что значит ${kanji.symbol}?`, `What does ${kanji.symbol} mean?`) : t(`Как читается ${kanji.symbol}?`, `How do you read ${kanji.symbol}?`);
  const solved = state.ui.review.solved && state.ui.review.currentId === entry.id;
  const answer = state.ui.review.answer;
  const feedback = solved
    ? `Верно. Следующий показ через ${formatReviewInterval(getNextReviewDelayMinutes(entry.stage || 0))}.`
    : answer
      ? `Неверно. ${kind === "meaning" ? `Правильное значение: ${kanji.meanings_ru[0]}` : `Правильное чтение: ${kanji.romaji[0]}`}`
      : "Выберите ответ.";
  const options = kind === "meaning" ? buildMeaningOptions(kanji) : buildReadingOptions(kanji);

  return `
    <div class="review-card">
      <div class="review-slab">
        <div class="meta-row">
          <span class="pill">${kanji.jlpt}</span>
          <span class="pill">${kind === "meaning" ? "значение" : "чтение"}</span>
          <span class="pill">этап ${entry.stage || 0}</span>
        </div>
        <div class="symbol">${kanji.symbol}</div>
        <h3>${escapeHTML(textOf(prompt))}</h3>
      </div>
      ${kind === "meaning" ? `
        <div class="option-grid">
          ${options.map((option) => {
            const selected = answer === option;
            const isCorrect = solved && normalize(option) === normalize(kanji.meanings_ru[0]);
            const isWrong = selected && !solved;
            return `<button class="option ${selected ? "is-selected" : ""} ${isCorrect ? "is-correct" : ""} ${isWrong ? "is-wrong" : ""}" type="button" data-action="review-answer" data-review-id="${entry.id}" data-kind="${kind}" data-value="${escapeAttribute(option)}" ${solved ? "disabled" : ""}>${escapeHTML(option)}</button>`;
          }).join("")}
        </div>
      ` : `
        <div class="option-grid">
          ${options.map((option) => {
            const selected = answer === option;
            const isCorrect = solved && normalize(option) === normalize(kanji.romaji[0]);
            const isWrong = selected && !solved;
            return `<button class="option ${selected ? "is-selected" : ""} ${isCorrect ? "is-correct" : ""} ${isWrong ? "is-wrong" : ""}" type="button" data-action="review-answer" data-review-id="${entry.id}" data-kind="${kind}" data-value="${escapeAttribute(option)}" ${solved ? "disabled" : ""}>${escapeHTML(option)}</button>`;
          }).join("")}
        </div>
      `}
      <div class="review-feedback ${solved ? "good" : answer ? "bad" : ""}">${escapeHTML(feedback)}</div>
      ${solved ? `
        <div class="actions">
          <button class="btn primary" type="button" data-action="review-next">Следующая карточка</button>
        </div>
      ` : ""}
      <div class="meta-row">
        <span class="pill">Последний ответ ${entry.lastReviewedAt ? formatDateTime(entry.lastReviewedAt) : "ещё не было"}</span>
        <span class="pill">Показать чтение можно в кодексе</span>
      </div>
      <div class="review-slab">
        <p class="eyebrow">Пример</p>
        <p><strong>${escapeHTML(kanji.examples[0].jp)}</strong></p>
        <p>${escapeHTML(kanji.examples[0].kana)}</p>
        <p>${escapeHTML(kanji.examples[0].ru)}</p>
      </div>
    </div>
  `;
}

function renderProgress() {
  const totals = {
    lessonsCompleted: countCompletedLessons(),
    dueReviews: getDueReviewEntries().length,
    unlockedKanji: Object.keys(state.progress.unlockedKanji || {}).length,
    reviewedCards: countReviewedCards()
  };
  const courseStats = state.data.courses.map((course) => {
    const progress = getCourseCompletion(course.id);
    return `
      <article class="course-card">
        <h3>${escapeHTML(textOf(course.title))}</h3>
        <p>${escapeHTML(textOf(course.description))}</p>
        <div class="progress"><i style="width:${Math.max(4, progress.percent)}%"></i></div>
        <div class="meta-row">
          <span class="pill">${progress.completed}/${progress.total} уроков</span>
          <span class="pill">${progress.percent}%</span>
        </div>
      </article>
    `;
  }).join("");
  const unlockedTiles = getUnlockedKanjiList().map((kanji) => `<span class="pill">${kanji.symbol} · ${kanji.jlpt}</span>`).join("");

  return `
    <section class="section">
      <div class="route-title">
        <div>
          <h2>Прогресс</h2>
          <small>Локально сохранённые уроки, кандзи и очереди SRS.</small>
        </div>
        <small>localStorage · ${STORAGE_KEY}</small>
      </div>

      <div class="stat-grid">
        <div class="stat"><span>Уровень</span><strong>${state.progress.level}</strong></div>
        <div class="stat"><span>XP</span><strong>${state.progress.xp}</strong></div>
        <div class="stat"><span>Стрик</span><strong>${state.progress.streak}</strong></div>
        <div class="stat"><span>Stardust</span><strong>${state.progress.stardust}</strong></div>
      </div>

      <div class="stat-grid">
        <div class="stat"><span>Завершено уроков</span><strong>${totals.lessonsCompleted}</strong></div>
        <div class="stat"><span>Карточек в SRS</span><strong>${totals.reviewedCards}</strong></div>
        <div class="stat"><span>Сегодня в повторе</span><strong>${totals.dueReviews}</strong></div>
        <div class="stat"><span>Открыто кандзи</span><strong>${totals.unlockedKanji}</strong></div>
      </div>

      <div class="course-strip">${courseStats}</div>

      <div class="panel panel-inner">
        <p class="eyebrow">Открытые кандзи</p>
        <div class="meta-row">${unlockedTiles || `<span class="pill">Пока нет открытых кандзи</span>`}</div>
      </div>
    </section>
  `;
}

function renderCodex(kanjiId) {
  const query = normalize(state.ui.codexQuery);
  const tiles = state.data.kanji
    .filter((kanji) => {
      if (!query) return true;
      const haystack = [
        kanji.symbol,
        kanji.jlpt,
        ...(kanji.meanings_ru || []),
        ...(kanji.meanings_en || []),
        ...(kanji.romaji || []),
        ...(kanji.examples || []).flatMap((item) => [item.jp, item.kana, item.ru, item.en])
      ].join(" ");
      return normalize(haystack).includes(query);
    })
    .map((kanji) => {
      const selected = kanji.id === kanjiId || kanji.id === state.ui.codexSelectedId;
      const unlocked = isKanjiUnlocked(kanji.id);
      return `
        <button class="kanji-tile ${unlocked ? "" : "is-locked"}" type="button" data-action="codex-select" data-kanji-id="${kanji.id}">
          <span class="symbol">${escapeHTML(kanji.symbol)}</span>
          <span class="label">${escapeHTML(kanji.jlpt)} · ${escapeHTML(kanji.meanings_ru[0])}</span>
          ${selected ? `<span class="pill">Открыто</span>` : ""}
        </button>
      `;
    }).join("");
  const selected = state.data.kanjiById.get(kanjiId) || state.data.kanjiById.get(state.ui.codexSelectedId) || state.data.kanji[0];
  if (selected && selected.id !== state.ui.codexSelectedId) {
    state.ui.codexSelectedId = selected.id;
  }
  const unlocked = selected ? isKanjiUnlocked(selected.id) : false;
  const examples = selected ? selected.examples.map((item) => `
    <div class="review-slab">
      <p><strong>${escapeHTML(item.jp)}</strong></p>
      <p>${escapeHTML(item.kana)}</p>
      <p>${escapeHTML(item.ru)}</p>
      <p>${escapeHTML(item.en)}</p>
    </div>
  `).join("") : "";

  return `
    <section class="section">
      <div class="route-title">
        <div>
          <h2>Кодекс кандзи</h2>
          <small>Поиск, просмотр и быстрый доступ к открытому словарю.</small>
        </div>
        <small>${state.data.kanji.length} знаков</small>
      </div>

      <div class="search-row">
        <input type="search" data-input="codex-search" placeholder="Поиск по кандзи, чтению или значению" value="${escapeAttribute(state.ui.codexQuery)}" />
        <a class="btn ghost" href="#progress">Мой прогресс</a>
      </div>

      <div class="detail-layout">
        <section class="detail-card">
          <div class="kanji-list">${tiles}</div>
        </section>
        <aside class="detail-aside">
          ${selected ? `
            <div class="panel panel-inner">
              <p class="eyebrow">${escapeHTML(selected.jlpt)}</p>
              <div class="big-symbol">${escapeHTML(selected.symbol)}</div>
              <h3>${escapeHTML(selected.meanings_ru.join(" · "))}</h3>
              <p>${escapeHTML(selected.meanings_en.join(" · "))}</p>
              <div class="meta-row">
                <span class="pill">${escapeHTML(selected.onyomi.join(" / "))}</span>
                <span class="pill">${escapeHTML(selected.kunyomi.join(" / "))}</span>
                <span class="pill">${escapeHTML(selected.romaji.join(" / "))}</span>
              </div>
              <div class="meta-row">
                <span class="pill">${unlocked ? "Открыто" : "Закрыто до урока"}</span>
              </div>
            </div>
            <div class="panel panel-inner">
              <p class="eyebrow">Примеры</p>
              ${examples}
            </div>
          ` : `<div class="empty-state"><p class="muted">Ничего не выбрано.</p></div>`}
        </aside>
      </div>
    </section>
  `;
}

function renderBottomNav(route) {
  const active = (name) => route.name === name || (name === "lessons" && (route.name === "lesson" || route.name === "lessons"));
  return `
    <nav class="bottom-nav" aria-label="Навигация">
      <div class="bottom-nav-inner">
        <a class="nav-btn ${active("home") ? "is-active" : ""}" href="#home"><span>⌂</span><strong>Главная</strong></a>
        <a class="nav-btn ${active("lessons") ? "is-active" : ""}" href="#lessons"><span>文</span><strong>Уроки</strong></a>
        <a class="nav-btn ${active("review") ? "is-active" : ""}" href="#review"><span>↻</span><strong>Повтор</strong></a>
        <a class="nav-btn ${active("progress") ? "is-active" : ""}" href="#progress"><span>◎</span><strong>Прогресс</strong></a>
        <a class="nav-btn ${active("codex") ? "is-active" : ""}" href="#codex"><span>卍</span><strong>Кодекс</strong></a>
      </div>
    </nav>
  `;
}

function renderEmpty(title, description, backHref) {
  return `
    <section class="section">
      <div class="empty-state">
        <h2>${escapeHTML(title)}</h2>
        <p>${escapeHTML(description)}</p>
        <a class="btn primary" href="${backHref}">Назад</a>
      </div>
    </section>
  `;
}

function renderEmptyBlock(title, description, backHref = "#home") {
  return `
    <div class="empty-state">
      <h3>${escapeHTML(title)}</h3>
      <p>${escapeHTML(description)}</p>
      <a class="btn primary" href="${backHref}">Назад</a>
    </div>
  `;
}

function renderError(error) {
  return `
    <section class="section">
      <div class="empty-state">
        <h2>Ошибка загрузки</h2>
        <p>${escapeHTML(error?.message || String(error))}</p>
        <a class="btn primary" href="#home">Попробовать снова</a>
      </div>
    </section>
  `;
}

async function loadData() {
  const [courses, review, kanji, lessons] = await Promise.all([
    loadJson("data/courses.json", FALLBACK_DATA.courses),
    loadJson("data/review.json", FALLBACK_DATA.review),
    loadJson("data/kanji.json", FALLBACK_DATA.kanji),
    loadJson("data/lessons.json", FALLBACK_DATA.lessons)
  ]);
  return { courses, review, kanji, lessons };
}

async function loadJson(url, fallback) {
  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error(`${url} ${response.status}`);
    return await response.json();
  } catch {
    return structuredClone(fallback);
  }
}

function prepareData(data) {
  const courses = data.courses || [];
  const review = { stepsMinutes: data.review?.stepsMinutes || DEFAULT_REVIEW_STEPS, maxQueue: data.review?.maxQueue || 3 };
  const kanji = data.kanji || [];
  const lessons = data.lessons || [];
  const courseMap = new Map(courses.map((item) => [item.id, item]));
  const kanjiMap = new Map(kanji.map((item) => [item.id, item]));
  const lessonMap = new Map(lessons.map((item) => [item.id, item]));
  return {
    courses,
    review,
    kanji,
    lessons,
    coursesById: courseMap,
    kanjiById: kanjiMap,
    lessonsById: lessonMap
  };
}

function loadProgress() {
  const defaults = defaultProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaults;
    const parsed = JSON.parse(raw);
    return mergeProgress(defaults, parsed);
  } catch {
    return defaults;
  }
}

function defaultProgress() {
  return {
    version: 1,
    xp: 0,
    level: 1,
    streak: 0,
    stardust: 0,
    lastStudyDate: null,
    lastActiveLessonId: null,
    lastCompletedLessonId: null,
    totalLessonsCompleted: 0,
    totalCardsReviewed: 0,
    correctCardsReviewed: 0,
    completedLessons: {},
    lessonStates: {},
    review: {},
    unlockedKanji: {},
    seenKanji: {},
    settings: {
      language: "ru",
      sound: true
    }
  };
}

function mergeProgress(base, patch) {
  const merged = structuredClone(base);
  if (!patch || typeof patch !== "object") return merged;
  for (const [key, value] of Object.entries(patch)) {
    if (value && typeof value === "object" && !Array.isArray(value) && base[key] && typeof base[key] === "object" && !Array.isArray(base[key])) {
      merged[key] = { ...base[key], ...value };
    } else {
      merged[key] = value;
    }
  }
  if (!merged.settings) merged.settings = structuredClone(base.settings);
  if (!merged.lessonStates) merged.lessonStates = {};
  if (!merged.review) merged.review = {};
  if (!merged.completedLessons) merged.completedLessons = {};
  if (!merged.unlockedKanji) merged.unlockedKanji = {};
  if (!merged.seenKanji) merged.seenKanji = {};
  return merged;
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
  } catch (error) {
    console.warn("Could not save progress", error);
  }
}

function updateTopBar() {
  if (!topBarCopy) return;
  const dueCount = getDueReviewEntries().length;
  topBarCopy.innerHTML = `
    <span class="pill">XP ${state.progress.xp}</span>
    <span class="pill">LVL ${state.progress.level}</span>
    <span class="pill">Повторы ${dueCount}</span>
    <span class="pill">${state.progress.streak} стрик</span>
  `;
}

function parseRoute() {
  const hash = (location.hash || "#home").replace(/^#/, "");
  const [head, ...rest] = hash.split("/");
  if (!head || head === "home") return { name: "home" };
  if (head === "lessons") return { name: "lessons", courseId: rest[0] || null };
  if (head === "lesson") return { name: "lesson", lessonId: rest[0] || null };
  if (head === "review") return { name: "review" };
  if (head === "progress") return { name: "progress" };
  if (head === "codex") return { name: "codex", kanjiId: rest[0] || null };
  return { name: "home" };
}

function ensureSelectionDefaults() {
  if (!state.data) return;
  if (!state.ui.codexSelectedId && state.data.kanji.length) {
    state.ui.codexSelectedId = state.data.kanji[0].id;
  }
}

function onAppClick(event) {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;
  if (target.matches("button")) event.preventDefault();

  switch (action) {
    case "lesson-answer":
      answerLessonChoice(target);
      break;
    case "lesson-next":
      advanceLesson(target.dataset.lessonId);
      break;
    case "lesson-complete":
      completeLesson(target.dataset.lessonId);
      break;
    case "lesson-match-select":
      handleMatchSelect(target);
      break;
    case "review-answer":
      answerReview(target);
      break;
    case "review-next":
      nextReviewCard();
      break;
    case "install":
      triggerInstall();
      break;
    case "codex-select":
      state.ui.codexSelectedId = target.dataset.kanjiId;
      state.route = parseRoute();
      render();
      break;
    default:
      break;
  }
}

function onAppSubmit(event) {
  const form = event.target.closest("[data-form]");
  if (!form) return;
  event.preventDefault();
  if (form.dataset.form === "lesson-type") {
    submitLessonType(form);
  }
}

function onAppInput(event) {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) return;
  if (target.dataset.input === "codex-search") {
    state.ui.codexQuery = target.value;
    state.ui.focusAfterRender = {
      selector: '[data-input="codex-search"]',
      value: target.value,
      selectionStart: target.selectionStart,
      selectionEnd: target.selectionEnd
    };
    render();
  }
}

function triggerInstall() {
  if (!state.installPrompt) return;
  state.installPrompt.prompt();
  state.installPrompt.userChoice.finally(() => {
    state.installPrompt = null;
    render();
  });
}

function answerLessonChoice(target) {
  const lessonId = target.dataset.lessonId;
  const stepIndex = Number(target.dataset.stepIndex);
  const value = target.dataset.value;
  const lesson = state.data.lessonsById.get(lessonId);
  if (!lesson) return;
  const step = lesson.steps[stepIndex];
  const lessonState = getLessonState(lessonId);
  if (!step || isStepSolved(lessonId, stepIndex)) return;

  const correct = normalize(value) === normalize(step.answer);
  const stepState = getLessonStepState(lessonId, stepIndex);
  stepState.selected = value;
  stepState.solved = correct;
  stepState.lastAnsweredAt = Date.now();
  lessonState.score = lessonState.score || { correct: 0, attempts: 0 };
  lessonState.score.attempts += 1;
  if (correct) {
    lessonState.score.correct += 1;
  } else {
    lessonState.score.wrong = (lessonState.score.wrong || 0) + 1;
  }
  if (correct) {
    touchStudy();
  }
  saveProgress();
  render();
}

function submitLessonType(form) {
  const lessonId = form.dataset.lessonId;
  const stepIndex = Number(form.dataset.stepIndex);
  const lesson = state.data.lessonsById.get(lessonId);
  if (!lesson) return;
  const step = lesson.steps[stepIndex];
  if (!step || isStepSolved(lessonId, stepIndex)) return;
  const input = form.querySelector("input[name='answer']");
  const typed = input?.value || "";
  const stepState = getLessonStepState(lessonId, stepIndex);
  stepState.typed = typed;
  const correctAnswers = step.answers || [];
  const correct = correctAnswers.some((answer) => normalize(answer) === normalize(typed));
  stepState.solved = correct;
  stepState.lastAnsweredAt = Date.now();
  const lessonState = getLessonState(lessonId);
  lessonState.score = lessonState.score || { correct: 0, attempts: 0 };
  lessonState.score.attempts += 1;
  if (correct) {
    lessonState.score.correct += 1;
    touchStudy();
  } else {
    lessonState.score.wrong = (lessonState.score.wrong || 0) + 1;
  }
  saveProgress();
  render();
}

function handleMatchSelect(target) {
  const lessonId = target.dataset.lessonId;
  const stepIndex = Number(target.dataset.stepIndex);
  const side = target.dataset.side;
  const value = target.dataset.value;
  const lesson = state.data.lessonsById.get(lessonId);
  if (!lesson) return;
  const step = lesson.steps[stepIndex];
  if (!step || step.type !== "match") return;
  const stepState = getLessonStepState(lessonId, stepIndex);
  if (stepState.solved) return;
  const draft = getMatchDraft(lessonId, stepIndex);
  const pairs = step.pairs || [];

  if (side === "left") {
    draft.selectedLeft = draft.selectedLeft === value ? null : value;
  } else {
    draft.selectedRight = draft.selectedRight === value ? null : value;
  }

  if (draft.selectedLeft && draft.selectedRight) {
    const pair = pairs.find((item) => item.left === draft.selectedLeft && item.right === draft.selectedRight);
    if (pair) {
      draft.matched[pair.left] = pair.right;
      draft.selectedLeft = null;
      draft.selectedRight = null;
      draft.feedback = "Верно.";
      if (Object.keys(draft.matched).length === pairs.length) {
        stepState.solved = true;
        stepState.lastAnsweredAt = Date.now();
        const lessonState = getLessonState(lessonId);
        lessonState.score = lessonState.score || { correct: 0, attempts: 0 };
        lessonState.score.correct += 1;
        lessonState.score.attempts += 1;
        touchStudy();
      }
    } else {
      draft.feedback = "Не совпадает. Попробуйте ещё раз.";
      draft.selectedLeft = null;
      draft.selectedRight = null;
      const lessonState = getLessonState(lessonId);
      lessonState.score = lessonState.score || { correct: 0, attempts: 0 };
      lessonState.score.attempts += 1;
      lessonState.score.wrong = (lessonState.score.wrong || 0) + 1;
    }
  }
  saveProgress();
  render();
}

function answerReview(target) {
  const reviewId = target.dataset.reviewId;
  const kind = target.dataset.kind;
  const value = target.dataset.value;
  const entry = state.progress.review[reviewId];
  const kanji = state.data.kanjiById.get(reviewId);
  if (!entry || !kanji) return;

  const correctAnswer = kind === "meaning" ? kanji.meanings_ru[0] : kanji.romaji[0];
  const correct = normalize(value) === normalize(correctAnswer);
  state.ui.review.currentId = reviewId;
  state.ui.review.currentKind[reviewId] = kind;
  state.ui.review.answer = value;
  state.ui.review.solved = correct;
  state.ui.review.feedback = correct
    ? "Верно."
    : `Неверно. Правильный ответ: ${correctAnswer}`;

  const stage = Number(entry.stage || 0);
  const reviewSteps = state.data.review.stepsMinutes || DEFAULT_REVIEW_STEPS;
  if (correct) {
    entry.stage = stage + 1;
    entry.correct = (entry.correct || 0) + 1;
    entry.lastReviewedAt = Date.now();
    entry.dueAt = Date.now() + getReviewDelayMinutes(stage, reviewSteps) * 60 * 1000;
    state.progress.totalCardsReviewed += 1;
    state.progress.correctCardsReviewed += 1;
    addXP(3);
    addStardust(1);
    touchStudy();
  } else {
    entry.wrong = (entry.wrong || 0) + 1;
    entry.stage = Math.max(0, stage - 1);
    entry.lastReviewedAt = Date.now();
    entry.dueAt = Date.now() + reviewSteps[0] * 60 * 1000;
    state.progress.totalCardsReviewed += 1;
    touchStudy();
  }
  saveProgress();
  render();
}

function nextReviewCard() {
  state.ui.review.currentId = null;
  state.ui.review.answer = null;
  state.ui.review.solved = false;
  state.ui.review.feedback = "";
  render();
}

function advanceLesson(lessonId) {
  const lesson = state.data.lessonsById.get(lessonId);
  if (!lesson) return;
  const lessonState = getLessonState(lessonId);
  const currentStepIndex = Math.min(lessonState.stepIndex, lesson.steps.length - 1);
  const currentStep = lesson.steps[currentStepIndex];
  if (!currentStep) return;

  if (currentStep.type === "finish") {
    completeLesson(lessonId);
    return;
  }
  if (currentStep.type !== "intro" && currentStep.type !== "finish" && !isStepSolved(lessonId, currentStepIndex)) {
    return;
  }

  lessonState.stepIndex = Math.min(currentStepIndex + 1, lesson.steps.length - 1);
  lessonState.lastTouchedAt = Date.now();
  state.progress.lastActiveLessonId = lessonId;
  saveProgress();
  render();
}

function completeLesson(lessonId) {
  const lesson = state.data.lessonsById.get(lessonId);
  if (!lesson) return;
  const lessonState = getLessonState(lessonId);
  const alreadyCompleted = !!lessonState.completed || !!state.progress.completedLessons[lessonId];
  lessonState.completed = true;
  lessonState.stepIndex = Math.max(lesson.steps.length - 1, lessonState.stepIndex);
  state.progress.completedLessons[lessonId] = {
    completedAt: Date.now(),
    accuracy: getLessonAccuracy(lessonId),
    xpReward: lesson.xpReward,
    stardustReward: lesson.stardustReward
  };
  if (!alreadyCompleted) {
    state.progress.totalLessonsCompleted += 1;
    addXP(lesson.xpReward);
    addStardust(lesson.stardustReward);
    touchStudy();
  }
  state.progress.lastCompletedLessonId = lessonId;
  state.progress.lastActiveLessonId = lessonId;
  saveProgress();
  render();
}

function addXP(amount) {
  state.progress.xp += amount;
  state.progress.level = Math.max(1, Math.floor(state.progress.xp / 100) + 1);
}

function addStardust(amount) {
  state.progress.stardust += amount;
}

function touchStudy() {
  const today = getLocalDateKey(new Date());
  const yesterday = getLocalDateKey(new Date(Date.now() - 86400000));
  if (!state.progress.lastStudyDate) {
    state.progress.streak = 1;
  } else if (state.progress.lastStudyDate === today) {
    // keep streak
  } else if (state.progress.lastStudyDate === yesterday) {
    state.progress.streak += 1;
  } else {
    state.progress.streak = 1;
  }
  state.progress.lastStudyDate = today;
}

function seedLessonExposure(lesson) {
  const now = Date.now();
  let changed = false;
  for (const kanjiId of lesson.items || []) {
    if (!state.progress.unlockedKanji[kanjiId]) {
      state.progress.unlockedKanji[kanjiId] = now;
      changed = true;
    }
    if (!state.progress.seenKanji[kanjiId]) {
      state.progress.seenKanji[kanjiId] = now;
      changed = true;
    }
    if (!state.progress.review[kanjiId]) {
      state.progress.review[kanjiId] = {
        stage: 0,
        dueAt: now,
        introducedAt: now,
        lastReviewedAt: null,
        correct: 0,
        wrong: 0,
        sourceLessonId: lesson.id
      };
      changed = true;
    }
  }
  if (changed) saveProgress();
}

function getReviewKind(id) {
  if (!state.ui.review.currentKind[id]) {
    state.ui.review.currentKind[id] = Math.random() < 0.55 ? "meaning" : "reading";
  }
  return state.ui.review.currentKind[id];
}

function getCurrentReviewCard(dueEntries) {
  if (state.ui.review.currentId) {
    const entry = buildReviewEntry(state.ui.review.currentId);
    if (entry) return entry;
  }
  const next = dueEntries[0];
  if (!next) return null;
  state.ui.review.currentId = next.id;
  if (!state.ui.review.currentKind[next.id]) {
    state.ui.review.currentKind[next.id] = Math.random() < 0.55 ? "meaning" : "reading";
  }
  state.ui.review.answer = null;
  state.ui.review.solved = false;
  state.ui.review.feedback = "";
  return buildReviewEntry(next.id);
}

function buildReviewEntry(reviewId) {
  const entry = state.progress.review[reviewId];
  const kanji = state.data.kanjiById.get(reviewId);
  if (!entry || !kanji) return null;
  return {
    id: reviewId,
    ...entry,
    kanji
  };
}

function getDueReviewEntries() {
  const now = Date.now();
  return Object.entries(state.progress.review || {})
    .map(([id, entry]) => ({ id, ...entry, kanji: state.data.kanjiById.get(id) }))
    .filter((entry) => entry.kanji && entry.dueAt <= now)
    .sort((a, b) => a.dueAt - b.dueAt || a.stage - b.stage || a.kanji.symbol.localeCompare(b.kanji.symbol, "ja"))
    .slice(0, state.data.review.maxQueue || 3);
}

function getNextReviewEntry() {
  const entries = Object.entries(state.progress.review || {})
    .map(([id, entry]) => ({ id, ...entry, kanji: state.data.kanjiById.get(id) }))
    .filter((entry) => entry.kanji)
    .sort((a, b) => a.dueAt - b.dueAt);
  return entries[0] || null;
}

function getReviewDelayMinutes(stage, reviewSteps = DEFAULT_REVIEW_STEPS) {
  if (stage < reviewSteps.length) return reviewSteps[stage];
  const extra = stage - reviewSteps.length + 1;
  return reviewSteps[reviewSteps.length - 1] * Math.pow(2, extra);
}

function buildMeaningOptions(kanji) {
  const correct = kanji.meanings_ru[0];
  const pool = state.data.kanji
    .flatMap((item) => (item.id === kanji.id ? [] : item.meanings_ru || []))
    .filter(Boolean);
  return shuffle(unique([correct, ...sample(pool, 3)]).slice(0, 4));
}

function buildReadingOptions(kanji) {
  const correct = kanji.romaji[0];
  const pool = state.data.kanji
    .flatMap((item) => (item.id === kanji.id ? [] : item.romaji || []))
    .filter(Boolean);
  return shuffle(unique([correct, ...sample(pool, 3)]).slice(0, 4));
}

function getLessonsByCourse(courseId) {
  return state.data.lessons.filter((lesson) => lesson.courseId === courseId);
}

function getCourseCompletion(courseId) {
  const lessons = getLessonsByCourse(courseId);
  const completed = lessons.filter((lesson) => isLessonCompleted(lesson.id)).length;
  const total = lessons.length || 1;
  return {
    completed,
    total,
    percent: Math.round((completed / total) * 100)
  };
}

function getLessonProgress(lessonId) {
  const lessonState = getLessonState(lessonId);
  if (lessonState.completed) return { percent: 100 };
  const lesson = state.data.lessonsById.get(lessonId);
  if (!lesson) return { percent: 0 };
  const solved = countSolvedLessonSteps(lessonId);
  return { percent: Math.round((solved / lesson.steps.length) * 100) };
}

function getLessonState(lessonId) {
  if (!state.progress.lessonStates[lessonId]) {
    state.progress.lessonStates[lessonId] = {
      stepIndex: 0,
      completed: false,
      score: {
        correct: 0,
        attempts: 0,
        wrong: 0
      }
    };
  }
  return state.progress.lessonStates[lessonId];
}

function getLessonStepState(lessonId, stepIndex) {
  const lessonState = getLessonState(lessonId);
  lessonState.steps = lessonState.steps || {};
  if (!lessonState.steps[stepIndex]) {
    lessonState.steps[stepIndex] = {
      solved: false,
      selected: null,
      typed: "",
      lastAnsweredAt: null
    };
  }
  return lessonState.steps[stepIndex];
}

function getMatchDraft(lessonId, stepIndex) {
  state.ui.lessonDrafts[lessonId] = state.ui.lessonDrafts[lessonId] || {};
  if (!state.ui.lessonDrafts[lessonId][stepIndex]) {
    state.ui.lessonDrafts[lessonId][stepIndex] = {
      selectedLeft: null,
      selectedRight: null,
      matched: {},
      feedback: ""
    };
  }
  return state.ui.lessonDrafts[lessonId][stepIndex];
}

function isLessonCompleted(lessonId) {
  return !!state.progress.completedLessons[lessonId] || !!getLessonState(lessonId).completed;
}

function isLessonUnlocked(lessonId) {
  const lesson = state.data.lessonsById.get(lessonId);
  if (!lesson) return false;
  const lessons = getLessonsByCourse(lesson.courseId);
  const index = lessons.findIndex((item) => item.id === lessonId);
  if (index <= 0) return true;
  return isLessonCompleted(lessons[index - 1].id);
}

function isStepSolved(lessonId, stepIndex) {
  return !!getLessonStepState(lessonId, stepIndex).solved;
}

function countSolvedLessonSteps(lessonId) {
  const lessonState = getLessonState(lessonId);
  return Object.values(lessonState.steps || {}).filter((step) => step.solved).length;
}

function getLessonAccuracy(lessonId) {
  const score = getLessonState(lessonId).score || { correct: 0, attempts: 0 };
  if (!score.attempts) return 0;
  return Math.round((score.correct / score.attempts) * 100);
}

function lessonStateStepIndex(lessonId) {
  return getLessonState(lessonId).stepIndex || 0;
}

function getContinueLesson() {
  const unfinished = Object.entries(state.progress.lessonStates || {})
    .map(([lessonId, lessonState]) => ({ lessonId, lessonState }))
    .filter(({ lessonState }) => lessonState && !lessonState.completed)
    .sort((a, b) => (b.lessonState.lastTouchedAt || 0) - (a.lessonState.lastTouchedAt || 0))[0];

  if (unfinished) {
    const lesson = state.data.lessonsById.get(unfinished.lessonId);
    if (lesson) return { ...lesson, completed: false };
  }

  const nextUnlocked = state.data.lessons.find((lesson) => !isLessonCompleted(lesson.id) && isLessonUnlocked(lesson.id));
  if (nextUnlocked) {
    return { ...nextUnlocked, completed: false };
  }

  if (state.progress.lastCompletedLessonId) {
    const last = state.data.lessonsById.get(state.progress.lastCompletedLessonId);
    const next = last ? getNextLesson(last.id) : null;
    if (next) return { ...next, completed: false };
  }

  const firstLesson = state.data.lessons[0];
  if (firstLesson) return { ...firstLesson, completed: false };
  return null;
}

function getNextLesson(lessonId) {
  const lesson = state.data.lessonsById.get(lessonId);
  if (!lesson) return null;
  const lessons = getLessonsByCourse(lesson.courseId);
  const index = lessons.findIndex((item) => item.id === lessonId);
  if (index < 0) return null;
  if (index + 1 < lessons.length) return lessons[index + 1];
  const courseIndex = state.data.courses.findIndex((course) => course.id === lesson.courseId);
  if (courseIndex >= 0 && courseIndex + 1 < state.data.courses.length) {
    const nextCourse = state.data.courses[courseIndex + 1];
    const nextCourseLessons = getLessonsByCourse(nextCourse.id);
    return nextCourseLessons[0] || null;
  }
  return null;
}

function countCompletedLessons() {
  return Object.keys(state.progress.completedLessons || {}).length;
}

function countReviewedCards() {
  return Object.keys(state.progress.review || {}).length;
}

function getUnlockedKanjiList() {
  return Object.keys(state.progress.unlockedKanji || {})
    .map((id) => state.data.kanjiById.get(id))
    .filter(Boolean);
}

function isKanjiUnlocked(kanjiId) {
  return !!state.progress.unlockedKanji[kanjiId] || !!state.progress.seenKanji[kanjiId];
}

function resolveLessonEntity(step) {
  if (step.entity) return step.entity;
  if (step.kanjiId) {
    const kanji = state.data.kanjiById.get(step.kanjiId);
    if (kanji) {
      return {
        symbol: kanji.symbol,
        reading: kanji.romaji[0],
        romaji: kanji.romaji[0],
        meaning: t(kanji.meanings_ru[0], kanji.meanings_en[0]),
        example: kanji.examples[0]
      };
    }
  }
  return {
    symbol: "•",
    reading: "",
    romaji: "",
    meaning: t("Вводный шаг", "Intro step")
  };
}

function getLessonStepFeedback(stepState, correctAnswer, value, solved) {
  if (solved) {
    return "Верно. Можно продолжать.";
  }
  if (!value) return "Выберите или введите ответ.";
  if (normalize(value) === normalize(correctAnswer) || (Array.isArray(correctAnswer) && correctAnswer.some((item) => normalize(item) === normalize(value)))) {
    return "Верно. Можно продолжать.";
  }
  return "Пока нет. Попробуйте ещё раз.";
}

function getNextReviewDelayMinutes(stage) {
  const steps = state.data?.review?.stepsMinutes || DEFAULT_REVIEW_STEPS;
  return getReviewDelayMinutes(stage, steps);
}

function formatReviewInterval(minutes) {
  if (minutes < 60) return `${minutes}м`;
  if (minutes < 1440) return `${minutes / 60}ч`;
  return `${minutes / 1440}д`;
}

function formatDateTime(timestamp) {
  const date = new Date(timestamp);
  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function getLocalDateKey(date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function textOf(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (typeof value === "object") return value.ru || value.en || "";
  return String(value);
}

function normalize(value) {
  return String(value || "")
    .normalize("NFKC")
    .replace(/ё/g, "е")
    .toLowerCase()
    .trim()
    .replace(/[\s_.\-—–,!?()[\]{}"'`~•·:;]+/g, "");
}

function unique(values) {
  return [...new Set(values)];
}

function sample(values, count) {
  return shuffle(values).slice(0, count);
}

function shuffle(values) {
  const array = [...values];
  for (let index = array.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [array[index], array[swap]] = [array[swap], array[index]];
  }
  return array;
}

function escapeHTML(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttribute(value) {
  return escapeHTML(value).replace(/`/g, "&#96;");
}

function applyFocusAfterRender() {
  const focus = state.ui.focusAfterRender;
  if (!focus) return;
  const element = appRoot.querySelector(focus.selector);
  if (element instanceof HTMLInputElement) {
    element.focus();
    if (typeof focus.selectionStart === "number") {
      const end = typeof focus.selectionEnd === "number" ? focus.selectionEnd : focus.selectionStart;
      try {
        element.setSelectionRange(focus.selectionStart, end);
      } catch {
        // ignore
      }
    }
  }
  state.ui.focusAfterRender = null;
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  if (location.protocol === "file:") return;
  navigator.serviceWorker.register("./service-worker.js").catch((error) => {
    console.warn("Service worker registration failed:", error);
  });
}

function isIOS() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent || "");
}
