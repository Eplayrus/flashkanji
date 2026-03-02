import { ensureTodayStats, maybeCountStreak, saveState } from '../store.js';

export function renderExercises(root, state) {
  root.className = 'screen-host';

  const today = ensureTodayStats(state);
  const learned = new Set(state.cards.filter((c) => c.stage >= 1).map((c) => c.kanji));
  const pool = state.exercises.filter((ex) => ex.answers.every((ans) => learned.has(ans)));
  const source = pool.length ? pool : state.exercises;
  const exercise = source[Math.floor(Math.random() * source.length)];

  if (!exercise) {
    root.innerHTML = '<div class="exercise-panel">Нет упражнений.</div>';
    return;
  }

  const filled = Array(exercise.blanks).fill('__');

  function renderSentence() {
    let sentence = exercise.sentence;
    filled.forEach((value) => {
      sentence = sentence.replace('__', `<span class="slot">${value}</span>`);
    });
    return sentence;
  }

  function slotsFull() {
    return filled.every((s) => s !== '__');
  }

  function nextSlotIndex() {
    return filled.findIndex((s) => s === '__');
  }

  function ui(feedback = '') {
    const streak = state.lifetimeStats.currentStreak;
    const panelClass = feedback.startsWith('✅') ? 'feedback ok' : feedback ? 'feedback bad' : 'feedback hidden';

    root.innerHTML = `
      <header class="screen-head">
        <span>Сегодня: ${today.cardsViewed}/15</span>
        <span>Streak: ${streak} дней</span>
      </header>

      <section class="exercise-panel">
        <div class="sentence">${renderSentence()}</div>
        <p>${exercise.translation}</p>

        <div class="choices">
          ${exercise.choices
            .map((c) => `<button class="choice-btn" data-choice="${c}">${c}</button>`)
            .join('')}
        </div>

        <div class="actions" style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;">
          <button id="check" class="plain-btn">Проверить</button>
          <button id="reset" class="plain-btn">Сброс</button>
          <button id="next" class="plain-btn">Дальше</button>
          <button id="home" class="plain-btn">Назад</button>
        </div>

        <div class="${panelClass}">${feedback}</div>
      </section>
    `;

    root.querySelectorAll('.choice-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = nextSlotIndex();
        if (idx === -1) return;
        filled[idx] = btn.dataset.choice;
        ui(feedback);
      });
    });

    root.querySelector('#reset').addEventListener('click', () => {
      for (let i = 0; i < filled.length; i += 1) filled[i] = '__';
      ui('');
    });

    root.querySelector('#check').addEventListener('click', () => {
      if (!slotsFull()) {
        ui('❌ Заполните все пропуски.');
        return;
      }
      const ok = filled.every((v, i) => v === exercise.answers[i]);
      const mistakes = ok ? 0 : 1;

      today.exercisesDone += 1;
      state.lifetimeStats.totalExercisesDone += 1;
      state.exerciseLog.push({ timestamp: Date.now(), mistakes });
      maybeCountStreak(state);
      saveState(state);

      if (ok) ui('✅ Верно!');
      else ui(`❌ Неверно. Правильный ответ: ${exercise.answers.join(' ')}`);
    });

    root.querySelector('#next').addEventListener('click', () => renderExercises(root, state));
    root.querySelector('#home').addEventListener('click', () => (location.hash = '#/home'));
  }

  ui('');
}
