const SW_BUILD_VERSION = "2026-08-20-n5-lesson-availability-v1";
const CACHE_PREFIX = "flash-kanji-";
const STATIC_CACHE = `${CACHE_PREFIX}static-${SW_BUILD_VERSION}`;
const DATA_CACHE = `${CACHE_PREFIX}data-${SW_BUILD_VERSION}`;
const AUDIO_CACHE = `${CACHE_PREFIX}audio-v1`;
const RUNTIME_CACHE = `${CACHE_PREFIX}runtime-v1`;
const CURRENT_CACHES = new Set([STATIC_CACHE, DATA_CACHE, AUDIO_CACHE, RUNTIME_CACHE]);
const FLASH_KANJI_CACHE_PATTERN = /^(flash-kanji-|fk-)/;

const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./download/",
  "./download/index.html",
  "./assets/favicon.png",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/brand/flash-kanji-logo.webp",
  "./assets/brand/study-room.webp",
  "./assets/download/android-app-screenshot.png"
];

const NOTIFICATION_FALLBACKS = {
  review: {
    title: "Flash Kanji",
    body: "Твои карточки ждут повторения.",
    url: "./#review"
  },
  streak: {
    title: "Твой стрик",
    body: "Не потеряй свою серию занятий.",
    url: "./#home"
  },
  daily_bonus: {
    title: "Ежедневный бонус",
    body: "Забери XP и Moon Fragments.",
    url: "./#home"
  },
  lesson: {
    title: "Новый урок ждёт",
    body: "Продолжи изучать кандзи.",
    url: "./#textbooks"
  }
};

function notificationPayload(type = "review", overrides = {}) {
  const base = NOTIFICATION_FALLBACKS[type] || NOTIFICATION_FALLBACKS.review;
  return {
    title: overrides.title || base.title,
    options: {
      body: overrides.body || base.body,
      tag: overrides.tag || `flash-kanji-${type}`,
      renotify: false,
      icon: "./assets/icon-192.png",
      badge: "./assets/icon-192.png",
      data: { url: overrides.url || base.url, type }
    }
  };
}

function isFlashKanjiCache(cacheName) {
  return FLASH_KANJI_CACHE_PATTERN.test(cacheName);
}

function toRequest(input) {
  if (input instanceof Request) return input;
  return new Request(new URL(input, self.registration.scope).href, { credentials: "same-origin" });
}

async function trimCache(cacheName, maxEntries) {
  if (!maxEntries) return;
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length <= maxEntries) return;
  await Promise.all(keys.slice(0, keys.length - maxEntries).map((key) => cache.delete(key)));
}

async function putInCache(cacheName, request, response, { maxEntries = 0 } = {}) {
  if (!response || (!response.ok && response.type !== "opaque")) return response;
  const cache = await caches.open(cacheName);
  await cache.put(request, response.clone());
  if (maxEntries) await trimCache(cacheName, maxEntries);
  return response;
}

async function matchInCurrentCaches(request) {
  for (const cacheName of CURRENT_CACHES) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    if (cached) return cached;
  }
  return null;
}

async function cacheFirst(request, cacheName = RUNTIME_CACHE, { maxEntries = 120 } = {}) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  return putInCache(cacheName, request, response, { maxEntries });
}

async function staleWhileRevalidate(event, request, cacheName = DATA_CACHE, { maxEntries = 80 } = {}) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const revalidate = fetch(request)
    .then((response) => putInCache(cacheName, request, response, { maxEntries }))
    .catch(() => null);
  if (cached) {
    event.waitUntil(revalidate);
    return cached;
  }
  const response = await revalidate;
  return response || new Response("", { status: 503, statusText: "Offline" });
}

async function networkFirst(request, fallbackRequests = [], cacheName = STATIC_CACHE) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      await putInCache(cacheName, request, response);
      return response;
    }
    throw new Error(`Unexpected response for ${request.url}`);
  } catch {
    for (const fallbackRequest of fallbackRequests.map(toRequest)) {
      const cached = await matchInCurrentCaches(fallbackRequest);
      if (cached) return cached;
    }
    const cached = await matchInCurrentCaches(request);
    if (cached) return cached;
    return new Response("", { status: 503, statusText: "Offline" });
  }
}

function isDownloadDocumentUrl(url) {
  return /\/download(?:\/index\.html)?\/?$/i.test(url.pathname);
}

function downloadDocumentRequest() {
  return new Request(new URL("./download/index.html", self.registration.scope).href, {
    credentials: "same-origin"
  });
}

function isDataRequest(url) {
  return url.pathname.includes("/data/");
}

function isCriticalJlptCourseDataRequest(url) {
  return /\/data\/jlpt\/n[1-5]\/(?:meta|lessons|kanji|exercises)\.json$/i.test(url.pathname);
}

function isAudioRequest(request, url) {
  return request.destination === "audio" || /\/audio\/|\/sounds\//i.test(url.pathname);
}

function isVersionedAsset(url) {
  return /\/assets\/.+-[A-Za-z0-9_-]{8,}\.(?:js|css|webp|png|jpg|jpeg|svg|woff2?)$/i.test(url.pathname);
}

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(STATIC_CACHE);
    await Promise.allSettled(PRECACHE_URLS.map((url) => cache.add(url)));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter((key) => isFlashKanjiCache(key) && !CURRENT_CACHES.has(key))
      .map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  if (request.headers.has("range")) return;

  const url = new URL(request.url);
  const isDocument = request.destination === "document" || request.mode === "navigate";

  if (isDocument) {
    if (isDownloadDocumentUrl(url)) {
      event.respondWith(networkFirst(downloadDocumentRequest(), ["./download/index.html", "./download/", "./index.html", "./"]));
      return;
    }
    event.respondWith(networkFirst(request, ["./index.html", "./"]));
    return;
  }

  if (isCriticalJlptCourseDataRequest(url)) {
    event.respondWith(networkFirst(request, [], DATA_CACHE));
    return;
  }

  if (isDataRequest(url)) {
    event.respondWith(staleWhileRevalidate(event, request, DATA_CACHE, { maxEntries: 90 }));
    return;
  }

  if (isAudioRequest(request, url)) {
    event.respondWith(cacheFirst(request, AUDIO_CACHE, { maxEntries: 80 }));
    return;
  }

  if (isVersionedAsset(url)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  event.respondWith(cacheFirst(request, RUNTIME_CACHE, { maxEntries: 120 }));
});

self.addEventListener("message", (event) => {
  const type = event.data?.type;
  if (type === "FLASH_KANJI_FORCE_CACHE_RESET") {
    event.waitUntil((async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter(isFlashKanjiCache).map((key) => caches.delete(key)));
      const clients = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
      clients.forEach((client) => client.postMessage({
        type: "FLASH_KANJI_CACHE_RESET_DONE",
        cacheName: STATIC_CACHE,
        buildVersion: SW_BUILD_VERSION
      }));
    })());
    return;
  }
  if (type !== "SHOW_NOTIFICATION") return;
  const payload = notificationPayload(event.data.notificationType, event.data);
  event.waitUntil(self.registration.showNotification(payload.title, payload.options));
});

self.addEventListener("push", (event) => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch {
    data = { body: event.data?.text() };
  }
  const type = data.type || "review";
  const payload = notificationPayload(type, data);
  event.waitUntil(self.registration.showNotification(payload.title, payload.options));
});

self.addEventListener("periodicsync", (event) => {
  if (event.tag !== "flash-kanji-daily") return;
  const payload = notificationPayload("review");
  event.waitUntil(self.registration.showNotification(payload.title, payload.options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = new URL(event.notification.data?.url || "./#review", self.registration.scope).href;
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((windows) => {
      const existing = windows.find((client) => "focus" in client);
      if (existing) {
        existing.navigate?.(url);
        return existing.focus();
      }
      return clients.openWindow(url);
    })
  );
});
