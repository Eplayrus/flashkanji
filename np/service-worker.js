const CACHE_NAME = "flash-kanji-np-v1";
const PRECACHE = [
  "./index.html",
  "./styles.css",
  "./script.js",
  "./manifest.webmanifest",
  "./data/kanji.json",
  "./data/lessons.json",
  "./data/courses.json",
  "./data/review.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)).catch(() => null);
      return response;
    }).catch(() => cached || Response.error()))
  );
});
