const CACHE_NAME = 'flashkanji-web-v1';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './store.js',
  './srs.js',
  './screens/home.js',
  './screens/cards.js',
  './screens/exercises.js',
  './data/kanji_seed.json',
  './data/exercise_seed.json',
  './assets/bg_home.png',
  './assets/logo.png',
  './assets/btn_cards.png',
  './assets/btn_exercises.png',
  './assets/stats_card.png',
  './assets/card.png',
  './assets/remember.png',
  './assets/not_remeber.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
