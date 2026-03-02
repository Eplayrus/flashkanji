import { renderCards } from './screens/cards.js';
import { renderExercises } from './screens/exercises.js';
import { renderHome } from './screens/home.js';
import { bootstrapState, saveState } from './store.js';

const appRoot = document.getElementById('app');
let state;

const routes = {
  '/home': () => renderHome(appRoot, state),
  '/cards': () => renderCards(appRoot, state),
  '/exercises': () => renderExercises(appRoot, state),
};

function getRoute() {
  const hash = location.hash || '#/home';
  return hash.replace('#', '');
}

function renderRoute() {
  const route = getRoute();
  (routes[route] || routes['/home'])();
  saveState(state);
}

async function init() {
  state = await bootstrapState();

  if (!location.hash) {
    location.hash = '#/home';
  }

  window.addEventListener('hashchange', renderRoute);
  renderRoute();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

init();
