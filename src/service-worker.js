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
  event.respondWith(
    caches.open("RAOM").then((runtimeCache) => {
      return caches.match(event.request).then((response) => {
        if (response) {
          return response;
        } else {
          const networkResponse = fetch(event.request);

          networkResponse.then((response) => {
            runtimeCache.put(event.request, response.clone());
          });

          return networkResponse;
        }
      });
    })
  );
});
