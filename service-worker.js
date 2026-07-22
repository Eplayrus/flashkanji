const CACHE_PREFIXES = [
  "flash-kanji-cache-",
  "flash-kanji-runtime"
];

async function clearLegacyCaches() {
  const keys = await caches.keys();
  await Promise.all(
    keys
      .filter((key) => CACHE_PREFIXES.some((prefix) => key.startsWith(prefix) || key === prefix))
      .map((key) => caches.delete(key))
  );
}

async function unregisterRootWorker() {
  await clearLegacyCaches();
  const clientsList = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
  clientsList.forEach((client) => {
    client.postMessage({
      type: "FLASH_KANJI_ROOT_SERVICE_WORKER_REMOVED"
    });
  });
  await self.registration.unregister();
}

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(unregisterRootWorker());
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "FLASH_KANJI_FORCE_CACHE_RESET") {
    event.waitUntil(clearLegacyCaches());
  }
});
