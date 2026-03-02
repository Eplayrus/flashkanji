import { ensureTodayStats, getMemoryStats, getWeekErrorCount } from '../store.js';

export function renderHome(root, state) {
  const today = ensureTodayStats(state);
  const life = state.lifetimeStats;
  const memory = getMemoryStats(state);
  const weeklyErrors = getWeekErrorCount(state);

  root.className = 'screen-host home-screen';
  root.innerHTML = `
    <img class="logo" src="assets/logo.png" alt="FlashKanji" />

    <section class="nav-buttons">
      <button class="img-button" id="go-cards" aria-label="Карточки">
        <img src="assets/btn_cards.png" alt="Карточки" />
      </button>
      <button class="img-button" id="go-exercises" aria-label="Упражнения">
        <img src="assets/btn_exercises.png" alt="Упражнения" />
      </button>
    </section>

    <section class="stats-card">
      <p>Сегодня: ${today.cardsViewed}/15</p>
      <p>Streak: ${life.currentStreak} дней</p>
      <p>Сегодня выполнено: карточки ${today.cardsViewed}, упражнения ${today.exercisesDone}</p>
      <p>Всего выучено: ${life.totalCardsViewed}</p>
      <p>Ошибки за неделю: ${weeklyErrors}</p>
      <p>Упражнения выполнено: ${life.totalExercisesDone}</p>
      <p>К изучению сегодня: ${memory.dueToday}</p>
      <p>Короткая память: ${memory.shortMemory}</p>
      <p>Долгосрочная память: ${memory.longMemory}</p>
    </section>
  `;

  root.querySelector('#go-cards').addEventListener('click', () => (location.hash = '#/cards'));
  root.querySelector('#go-exercises').addEventListener('click', () => (location.hash = '#/exercises'));
}
