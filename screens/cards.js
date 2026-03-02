import { applyNotRemember, applyRemember } from '../srs.js';
import { ensureTodayStats, getDueCards, maybeCountStreak, saveState } from '../store.js';

export function renderCards(root, state) {
  root.className = 'screen-host';

  const today = ensureTodayStats(state);
  let queue = getDueCards(state);
  let current = queue.shift() || null;

  function currentCardBackText(card) {
    return `${card.meaning}<br>${card.hiragana} (${card.romaji})<br><small>${card.example_hiragana}<br>${card.example_translation}</small>`;
  }

  function content() {
    const streak = state.lifetimeStats.currentStreak;
    return `
      <header class="screen-head">
        <span>Сегодня: ${today.cardsViewed}/15</span>
        <span>Streak: ${streak} дней</span>
      </header>

      <section class="flip-card-wrap">
        <div id="flip-card" class="flip-card ${current ? '' : 'hidden'}">
          <article class="flip-side flip-front">
            <div class="kanji-big" id="front-kanji">${current ? current.kanji : ''}</div>
          </article>
          <article class="flip-side flip-back">
            <div class="card-meta" id="back-meta">${current ? currentCardBackText(current) : ''}</div>
          </article>
        </div>
        <div id="empty-msg" class="exercise-panel ${current ? 'hidden' : ''}">
          На сегодня карточек к повторению нет.
        </div>
      </section>

      <section class="answer-buttons">
        <button class="img-button" id="btn-no" aria-label="Не помню">
          <img src="assets/not_remeber.png" alt="Не помню" />
        </button>
        <button class="img-button" id="btn-yes" aria-label="Помню">
          <img src="assets/remember.png" alt="Помню" />
        </button>
      </section>

      <button class="plain-btn" id="go-home">Назад</button>
    `;
  }

  function advance(remember) {
    if (!current) return;

    if (remember) applyRemember(current);
    else applyNotRemember(current);

    today.cardsViewed += 1;
    state.lifetimeStats.totalCardsViewed += 1;
    maybeCountStreak(state);
    saveState(state);

    queue = getDueCards(state);
    current = queue.shift() || null;
    root.innerHTML = content();
    bind();
  }

  function bind() {
    const flipCard = root.querySelector('#flip-card');
    if (flipCard) {
      flipCard.addEventListener('click', () => flipCard.classList.toggle('flipped'));
    }
    root.querySelector('#btn-no')?.addEventListener('click', () => advance(false));
    root.querySelector('#btn-yes')?.addEventListener('click', () => advance(true));
    root.querySelector('#go-home')?.addEventListener('click', () => (location.hash = '#/home'));
  }

  root.innerHTML = content();
  bind();
}
