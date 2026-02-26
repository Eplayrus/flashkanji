let state = {
  cards: [],
  currentCard: null,
  profile: null,
  exercise: null,
  selectedKanji: null,
  answers: {}
};

const topStats = document.getElementById('topStats');
const queueIndicator = document.getElementById('queueIndicator');
const cardEl = document.getElementById('card');
const frontEl = document.getElementById('cardFront');
const backEl = document.getElementById('cardBack');
const exerciseScreen = document.getElementById('exerciseScreen');
const cardScreen = document.getElementById('cardScreen');

function vibrate() {
  if (navigator.vibrate) navigator.vibrate(40);
}

function renderCard() {
  const card = state.currentCard ?? state.cards[0];
  state.currentCard = card;
  if (!card) {
    frontEl.textContent = 'Готово на сейчас 🎉';
    backEl.textContent = 'Повтори позже или выполни упражнение';
    return;
  }
  frontEl.textContent = card.kanji;
  backEl.innerHTML = `${card.reading}<br>${card.meaning}<br><small>${card.examples}</small>`;
}

function renderTop(queueState = 'Сейчас') {
  topStats.textContent = `Сегодня: ${state.profile.today_completed}/${state.profile.daily_goal} | 🔥 Streak: ${state.profile.daily_streak_count} дней`;
  queueIndicator.textContent = `Очередь: ${queueState}`;
}

async function loadSession() {
  const data = await fetch('/api/session').then((r) => r.json());
  state.cards = data.cards;
  state.profile = data.profile;
  state.currentCard = state.cards[0];
  renderCard();
  renderTop();
  renderStats(data.stats);
  syncSettings();
}

async function swipe(direction) {
  if (!state.currentCard) return;
  cardEl.classList.add(direction === 'right' ? 'swipe-right' : 'swipe-left');
  vibrate();
  const payload = { cardId: state.currentCard.id, direction };
  const data = await fetch('/api/swipe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }).then((r) => r.json());

  setTimeout(() => {
    cardEl.classList.remove('swipe-right', 'swipe-left');
    state.cards = state.cards.filter((c) => c.id !== state.currentCard.id);
    if (data.nextCard) state.cards.push(data.nextCard);
    state.currentCard = state.cards[0] || null;
    state.profile = data.profile;
    renderCard();
    renderTop(data.queueState);

    if (state.profile.streak_message) alert(state.profile.streak_message);
    if (data.exercise) showExercise(data.exercise);
  }, 250);
}

function showExercise(exercise) {
  state.exercise = exercise;
  state.answers = {};
  cardScreen.classList.add('hidden');
  exerciseScreen.classList.remove('hidden');

  const chips = document.getElementById('chips');
  chips.innerHTML = '';
  exercise.targets.map((t) => t.kanji).forEach((k) => {
    const chip = document.createElement('button');
    chip.className = 'chip';
    chip.textContent = k;
    chip.onclick = () => (state.selectedKanji = k);
    chips.appendChild(chip);
  });

  const text = document.getElementById('exerciseText');
  text.innerHTML = exercise.text_hira.replace(/\{(K\d+)\}/g, (_, slot) => `<span class="slot" data-slot="${slot}">□</span>`);
  text.querySelectorAll('.slot').forEach((slotEl) => {
    slotEl.onclick = () => {
      if (!state.selectedKanji) return;
      const slot = slotEl.dataset.slot;
      state.answers[slot] = state.selectedKanji;
      slotEl.textContent = state.selectedKanji;
    };
  });
}

async function submitExercise() {
  const body = { ...state.exercise, answers: state.answers };
  const result = await fetch('/api/exercise/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }).then((r) => r.json());
  const resEl = document.getElementById('exerciseResult');
  resEl.textContent = `Score: ${result.score}% ${result.passed ? '✅' : 'есть ошибки'}`;

  document.querySelectorAll('.slot').forEach((slotEl) => {
    const target = state.exercise.targets.find((t) => t.slot === slotEl.dataset.slot);
    if (state.answers[target.slot] !== target.kanji) slotEl.classList.add('wrong');
  });

  if (result.passed) {
    setTimeout(() => {
      exerciseScreen.classList.add('hidden');
      cardScreen.classList.remove('hidden');
    }, 1200);
  }
}

function syncSettings() {
  document.getElementById('dailyGoal').value = state.profile.daily_goal;
  document.getElementById('goalToggle').checked = state.profile.streak_requires_goal;
  document.getElementById('requeueMode').value = state.profile.requeue_mode;
  document.getElementById('requeueValue').value = state.profile.requeue_value;
}

async function saveSettings() {
  const payload = {
    ...state.profile,
    daily_goal: Number(document.getElementById('dailyGoal').value),
    streak_requires_goal: document.getElementById('goalToggle').checked,
    requeue_mode: document.getElementById('requeueMode').value,
    requeue_value: Number(document.getElementById('requeueValue').value)
  };
  state.profile = await fetch('/api/settings', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }).then((r) => r.json());
  renderTop();
}

async function resetProgress() {
  if (!confirm('Точно сбросить прогресс?')) return;
  await fetch('/api/reset', { method: 'POST' });
  loadSession();
}

async function renderStats(existing) {
  const stats = existing ?? await fetch('/api/stats').then((r) => r.json());
  document.getElementById('stats').textContent = `Всего выучено: ${stats.learned} | Ошибки за неделю: ${stats.errorsWeek} | Упражнений выполнено: ${stats.exercisesDone}`;
}

cardEl.addEventListener('click', () => {
  frontEl.classList.toggle('hidden');
  backEl.classList.toggle('hidden');
});

let touchStartX = null;
cardEl.addEventListener('touchstart', (e) => (touchStartX = e.touches[0].clientX));
cardEl.addEventListener('touchend', (e) => {
  if (touchStartX == null) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (dx > 60) swipe('right');
  if (dx < -60) swipe('left');
  touchStartX = null;
});

document.getElementById('rightBtn').onclick = () => swipe('right');
document.getElementById('leftBtn').onclick = () => swipe('left');
document.getElementById('undoBtn').onclick = async () => {
  await fetch('/api/undo', { method: 'POST' });
  loadSession();
};
document.getElementById('submitExercise').onclick = submitExercise;
document.getElementById('saveSettings').onclick = saveSettings;
document.getElementById('resetBtn').onclick = resetProgress;

loadSession();
