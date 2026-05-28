const CACHE_NAME = "flash-kanji-cache-v6";

const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./manifest.webmanifest",
  "./vendor/chart.umd.min.js",
  "./assets/1.png",
  "./assets/bg_1.png",
  "./assets/button.png",
  "./assets/eva.png",
  "./assets/favicon.png",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/leya.png",
  "./assets/logo.png",
  "./assets/mascots/eva_normal.png",
  "./assets/mascots/leya_calm.png",
  "./assets/plate.png",
  "./data/dialogues.json",
  "./data/dialogues/index.json",
  "./data/i18n.json",
  "./data/kanji/meta.json",
  "./data/kanji/hints.json",
  "./data/kanji/translations.json",
  "./data/lessons.json",
  "./data/lesson-1.json",
  "./data/lesson-2.json",
  "./data/lesson-3.json",
  "./data/lesson-4.json",
  "./data/lesson-5.json",
  "./data/lessons/lesson-1.json",
  "./data/lessons/lesson-2.json",
  "./data/lessons/lesson-3.json",
  "./data/lessons/lesson-4.json",
  "./data/lessons/lesson-5.json",
  "./data/lessons/translations.json",
  "./data/rewards.json",
  "./data/vocabulary/index.json",
  "./data/achievements/index.json",
  "./data/monetization/catalog.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  if (request.destination === "document") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match("./index.html")))
    );
    return;
  }

  if (new URL(request.url).pathname.includes("/data/")) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        return response;
      });
    })
  );
});
