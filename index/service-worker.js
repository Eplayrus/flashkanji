const CACHE_NAME = "flash-kanji-cache-v28";

const NOTIFICATION_FALLBACKS = {
  review: {
    title: "Flash Kanji",
    body: "Ваши кандзи ждут повторения.",
    url: "./index.html#review"
  },
  streak: {
    title: "Лея рядом 🌙",
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
    url: "./index.html#learn"
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

const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./src/audio/soundManager.js",
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
  "./assets/mascots/eva/eva_default_pack/eva_idle.png",
  "./assets/mascots/eva/eva_default_pack/eva_happy.png",
  "./assets/mascots/eva/eva_default_pack/eva_sad.png",
  "./assets/mascots/eva/eva_default_pack/eva_angry.png",
  "./assets/mascots/eva/eva_default_pack/eva_shy.png",
  "./assets/mascots/eva/eva_default_pack/eva_think.png",
  "./assets/mascots/eva/eva_default_pack/eva_proud.png",
  "./assets/mascots/eva/eva_default_pack/eva_approve.png",
  "./assets/mascots/eva/eva_default_pack/eva_achievement.png",
  "./assets/mascots/eva/eva_default_pack/eva_reward.png",
  "./assets/mascots/eva/eva_default_pack/eva_review.png",
  "./assets/mascots/eva/eva_default_pack/eva_correct.png",
  "./assets/mascots/eva/eva_default_pack/eva_levelup.png",
  "./assets/mascots/eva/eva_default_pack/eva_default.png",
  "./assets/mascots/leya_calm.png",
  "./assets/plate.png",
  "./assets/bg/bg_study_hub.png",
  "./assets/bg/bg_classroom.png",
  "./assets/bg/bg_library.png",
  "./assets/bg/bg_school_street.png",
  "./assets/bg/bg_park.png",
  "./assets/bg/bg_cafe.png",
  "./assets/bg/bg_evening_street.png",
  "./assets/bg/bg_eva_room.png",
  "./assets/bg/bg_practice_room.png",
  "./assets/bg/bg_shrine.png",
  "./audio/ux_sounds/achievement_unlock.mp3",
  "./audio/ux_sounds/answer_correct.mp3",
  "./audio/ux_sounds/answer_wrong.mp3",
  "./audio/ux_sounds/button_click.mp3",
  "./audio/ux_sounds/button_hover.mp3",
  "./audio/ux_sounds/card_flip.mp3",
  "./audio/ux_sounds/daily_bonus.mp3",
  "./audio/ux_sounds/item_unlock.mp3",
  "./audio/ux_sounds/level_up.mp3",
  "./audio/ux_sounds/menu_close.mp3",
  "./audio/ux_sounds/menu_open.mp3",
  "./audio/ux_sounds/moon_fragment_gain.mp3",
  "./audio/ux_sounds/notification_reminder.mp3",
  "./audio/ux_sounds/notification_reward.mp3",
  "./audio/ux_sounds/notification_soft.mp3",
  "./audio/ux_sounds/page_turn.mp3",
  "./audio/ux_sounds/purchase_failed.mp3",
  "./audio/ux_sounds/purchase_success.mp3",
  "./audio/ux_sounds/streak_reward.mp3",
  "./audio/ux_sounds/tab_switch.mp3",
  "./audio/ux_sounds/xp_gain.mp3",
  "./data/dialogues.json",
  "./data/dialogues/index.json",
  "./data/eva-backgrounds.json",
  "./data/eva-sprites.json",
  "./data/eva-room-dialogues.json",
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
  "./data/lessons/generated/bulk-n5-01.json",
  "./data/lessons/generated/bulk-n5-02.json",
  "./data/lessons/generated/bulk-n5-03.json",
  "./data/lessons/generated/bulk-n5-04.json",
  "./data/lessons/generated/bulk-n4-01.json",
  "./data/lessons/generated/bulk-n4-02.json",
  "./data/lessons/generated/bulk-n4-03.json",
  "./data/lessons/generated/bulk-n4-04.json",
  "./data/lessons/generated/bulk-n4-05.json",
  "./data/lessons/generated/bulk-n4-06.json",
  "./data/lessons/generated/bulk-n4-07.json",
  "./data/lessons/generated/bulk-n4-08.json",
  "./data/lessons/generated/bulk-n3-01.json",
  "./data/lessons/generated/bulk-n3-02.json",
  "./data/lessons/generated/bulk-n3-03.json",
  "./data/lessons/generated/bulk-n3-04.json",
  "./data/lessons/generated/bulk-n3-05.json",
  "./data/lessons/generated/bulk-n3-06.json",
  "./data/lessons/generated/bulk-n3-07.json",
  "./data/lessons/generated/bulk-n3-08.json",
  "./data/lessons/generated/bulk-n3-09.json",
  "./data/lessons/generated/bulk-n3-10.json",
  "./data/lessons/generated/bulk-n3-11.json",
  "./data/lessons/generated/bulk-n3-12.json",
  "./data/lessons/generated/bulk-n3-13.json",
  "./data/lessons/generated/bulk-n3-14.json",
  "./data/lessons/generated/bulk-n3-15.json",
  "./data/lessons/generated/bulk-n3-16.json",
  "./data/lessons/generated/bulk-n3-17.json",
  "./data/lessons/generated/bulk-n3-18.json",
  "./data/lessons/generated/bulk-n3-19.json",
  "./data/lessons/generated/bulk-n2-01.json",
  "./data/lessons/generated/bulk-n2-02.json",
  "./data/lessons/generated/bulk-n2-03.json",
  "./data/lessons/generated/bulk-n2-04.json",
  "./data/lessons/generated/bulk-n2-05.json",
  "./data/lessons/generated/bulk-n2-06.json",
  "./data/lessons/generated/bulk-n2-07.json",
  "./data/lessons/generated/bulk-n2-08.json",
  "./data/lessons/generated/bulk-n2-09.json",
  "./data/lessons/generated/bulk-n2-10.json",
  "./data/lessons/generated/bulk-n2-11.json",
  "./data/lessons/generated/bulk-n2-12.json",
  "./data/lessons/generated/bulk-n2-13.json",
  "./data/lessons/generated/bulk-n2-14.json",
  "./data/lessons/generated/bulk-n2-15.json",
  "./data/lessons/generated/bulk-n2-16.json",
  "./data/lessons/generated/bulk-n2-17.json",
  "./data/lessons/generated/bulk-n2-18.json",
  "./data/lessons/generated/bulk-n2-19.json",
  "./data/lessons/generated/bulk-n1-01.json",
  "./data/lessons/generated/bulk-n1-02.json",
  "./data/lessons/generated/bulk-n1-03.json",
  "./data/lessons/generated/bulk-n1-04.json",
  "./data/lessons/generated/bulk-n1-05.json",
  "./data/lessons/generated/bulk-n1-06.json",
  "./data/lessons/generated/bulk-n1-07.json",
  "./data/lessons/generated/bulk-n1-08.json",
  "./data/lessons/generated/bulk-n1-09.json",
  "./data/lessons/generated/bulk-n1-10.json",
  "./data/lessons/generated/bulk-n1-11.json",

  "./data/lessons/translations.json",
  "./data/rewards.json",
  "./data/sentences/index.json",
  "./data/vocabulary/index.json",
  "./data/achievements/index.json",
  "./data/jlpt-lessons.json",
  "./data/monetization/catalog.json",
  "./data/content-sources.json"
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

self.addEventListener("message", (event) => {
  if (event.data?.type !== "SHOW_NOTIFICATION") return;
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
