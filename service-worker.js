const CACHE_NAME = "flash-kanji-cache-v151-root";
const CACHE_PREFIX = "flash-kanji-cache-";
const SW_BUILD_VERSION = "2026-07-18-route-fix-v67-root";

const PRECACHE_URLS = [
  "./index.html",
  "./recovery/entry.html",
  "./index/index.html",
  "./index/styles.css",
  "./index/script.js",
  "./index/manifest.webmanifest",
  "./index/kanji-page.css",
  "./index/src/audio/soundManager.js",
  "./index/src/effects/cyberHudEffect.js",
  "./index/vendor/chart.umd.min.js",
  "./index/assets/favicon.ico",
  "./index/assets/favicon.png",
  "./index/assets/icon-192.png",
  "./index/assets/icon-512.png",
  "./index/assets/logo.png",
  "./index/assets/bg_1.webp",
  "./index/assets/bg/bg_study_hub.webp",
  "./index/assets/bg/bg_classroom.webp",
  "./index/assets/mascots/eva_normal.webp",
  "./index/assets/mascots/leya_calm.webp",
  "./index/data/rewards.json",
  "./index/data/i18n.json",
  "./index/data/dialogues.json",
  "./index/data/achievements/index.json",
  "./index/data/customization-shop.json",
  "./index/data/jlpt/index.json",
  "./index/data/jlpt-lessons.json",
  "./index/data/jlpt-practice-lessons.json",
  "./index/data/jlpt/reading-texts_N5_N1.translations.json",
  "./index/data/lessons.json",
  "./index/data/lessons/translations.json",
  "./index/data/monetization/catalog.json"
];

const NOTIFICATION_FALLBACKS = {
  review: {
    title: "Flash Kanji",
    body: "Ваши кандзи ждут повторения.",
    url: "./recovery/entry.html#review"
  },
  streak: {
    title: "Лея рядом",
    body: "Не потеряйте свою серию дней.",
    url: "./recovery/entry.html#home"
  },
  daily_bonus: {
    title: "Ежедневный бонус",
    body: "Заберите XP и Moon Fragments.",
    url: "./recovery/entry.html#home"
  },
  lesson: {
    title: "Новые знания ждут",
    body: "Продолжите изучение кандзи.",
    url: "./recovery/entry.html#textbooks"
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
      icon: "./index/assets/icon-192.png",
      badge: "./index/assets/icon-192.png",
      data: { url: overrides.url || base.url, type }
    }
  };
}

async function putInCache(request, response) {
  if (!response || !response.ok) return response;
  const cache = await caches.open(CACHE_NAME);
  await cache.put(request, response.clone());
  return response;
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  return putInCache(request, response);
}

async function staleWhileRevalidate(event, request) {
  const cached = await caches.match(request);
  const revalidate = fetch(request)
    .then((response) => putInCache(request, response))
    .catch(() => null);
  if (cached) {
    event.waitUntil(revalidate);
    return cached;
  }
  const response = await revalidate;
  return response || new Response("", { status: 503, statusText: "Offline" });
}

async function networkFirst(request, fallbackRequests = []) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      await putInCache(request, response);
      return response;
    }
    throw new Error(`Unexpected response for ${request.url}`);
  } catch (error) {
    for (const fallbackRequest of fallbackRequests) {
      const cached = await caches.match(fallbackRequest);
      if (cached) return cached;
    }
    const cached = await caches.match(request);
    if (cached) return cached;
    return new Response("", { status: 503, statusText: "Offline" });
  }
}

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.allSettled(PRECACHE_URLS.map((url) => cache.add(url)));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME).map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  const isDocument = request.destination === "document" || request.mode === "navigate";
  const isDataRequest = url.pathname.includes("/data/");
  const isAudioRequest = request.destination === "audio" || url.pathname.includes("/audio/kanji/");

  if (isDocument) {
    event.respondWith(networkFirst(request, ["./recovery/entry.html", "./index/index.html", "./index.html"]));
    return;
  }

  if (isDataRequest) {
    event.respondWith(staleWhileRevalidate(event, request));
    return;
  }

  if (isAudioRequest) {
    event.respondWith(cacheFirst(request));
    return;
  }

  event.respondWith(cacheFirst(request));
});

self.addEventListener("message", (event) => {
  const type = event.data?.type;
  if (type === "FLASH_KANJI_FORCE_CACHE_RESET") {
    event.waitUntil((async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((key) => key.startsWith(CACHE_PREFIX)).map((key) => caches.delete(key)));
      const clients = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
      clients.forEach((client) => client.postMessage({
        type: "FLASH_KANJI_CACHE_RESET_DONE",
        cacheName: CACHE_NAME,
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
  const url = new URL(event.notification.data?.url || "./recovery/entry.html#review", self.registration.scope).href;
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
