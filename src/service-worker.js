/* eslint-disable no-restricted-globals */

const statics = self.__WB_MANIFEST;

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open("RAOM").then((cache) => {
      return cache.addAll(statics.map((path) => path.url));
    })
  );
});

addEventListener("fetch", (event) => {
  if (!(event.request.url.indexOf("http") === 0)) {
    return;
  } else {
    event.respondWith(
      caches.match(event.request).then(async (response) => {
        if (response) {
          return response;
        }

        const networkResponse = await fetch(event.request);

        const clonedResponse = networkResponse.clone();

        const runtimeCache = await caches.open("RAOM");
        runtimeCache.put(event.request, networkResponse);

        return Promise.resolve(clonedResponse);
      })
    );
  }
});
