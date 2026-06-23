const ROOT_CLEANUP_VERSION = "2026-06-23-readings-audit-v31";

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter((key) => key.startsWith("flash-kanji-cache-") || key.includes("flash-kanji"))
        .map((key) => caches.delete(key))
    );

    await self.clients.claim();
    const windows = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    await Promise.all(windows.map((client) => {
      if (!client.url || client.url.includes(`rootCleanup=${ROOT_CLEANUP_VERSION}`)) return null;
      const url = new URL(client.url);
      url.searchParams.set("rootCleanup", ROOT_CLEANUP_VERSION);
      return client.navigate(url.href);
    }));

    await self.registration.unregister();
  })());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
