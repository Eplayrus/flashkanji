const CACHE_NAME = "flash-kanji-cache-v129";
const SW_BUILD_VERSION = "2026-07-18-route-fix-v67";

const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./index/index.html",
  "./styles.css",
  "./styles.css?v=2026-07-18-route-fix-v67",
  "./kanji-page.css",
  "./script.js",
  "./script.js?v=2026-07-18-route-fix-v67",
  "./manifest.webmanifest",
  "./manifest.webmanifest?v=2026-07-18-route-fix-v67",
  "./src/audio/soundManager.js",
  "./src/audio/soundManager.js?v=2026-07-18-route-fix-v67",
  "./src/effects/cyberHudEffect.js",
  "./src/effects/cyberHudEffect.js?v=2026-07-18-route-fix-v67",
  "./vendor/chart.umd.min.js",
  "./vendor/chart.umd.min.js?v=2026-07-18-route-fix-v67",
  "./assets/favicon.ico",
  "./assets/favicon.png",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/logo.png",
  "./assets/bg_1.webp",
  "./assets/bg/bg_study_hub.webp",
  "./assets/bg/bg_classroom.webp",
  "./assets/mascots/eva_normal.webp",
  "./assets/mascots/leya_calm.webp",
  "./data/rewards.json",
  "./data/i18n.json",
  "./data/dialogues.json",
  "./data/achievements/index.json",
  "./data/customization-shop.json",
  "./data/jlpt/index.json",
  "./data/jlpt-lessons.json",
  "./data/jlpt-practice-lessons.json",
  "./data/lessons.json",
  "./data/lessons/translations.json",
  "./data/monetization/catalog.json"
];

const NOTIFICATION_FALLBACKS = {
  review: {
    title: "Flash Kanji",
    body: "Ваши кандзи ждут повторения.",
    url: "./index.html#review"
  },
  streak: {
    title: "Лея рядом",
    body: "Не потеряйте свою серию дней.",
    url: "./index.html#home"
  },
  daily_bonus: {
    title: "Ежедневный бонус",
    body: "Заберите XP и Moon Fragments.",
    url: "./index.html#home"
  },
  lesson: {
    title: "Новые знания ждут",
    body: "Продолжите изучение кандзи.",
    url: "./index.html#textbooks"
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
    await Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)));
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
    event.respondWith(networkFirst(request, ["./index.html", "./"]));
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
      await Promise.all(keys.map((key) => caches.delete(key)));
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
  const url = new URL(event.notification.data?.url || "./index.html#review", self.registration.scope).href;
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
