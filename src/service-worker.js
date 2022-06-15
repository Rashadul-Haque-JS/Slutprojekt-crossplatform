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

// Trying to fix SW update issue
addEventListener("fetch", (e) => {
  e.respondWith(
    caches.open("RAOM").then(cache => {
      cache.match(e.request).then(cacheResponse => {
        const networkFetch = fetch(e.request).then(networkResponse => {
          cache.put(e.request, networkResponse.clone());
          return networkResponse
        });

        return cacheResponse || networkFetch;
      });
    }).catch(error => {
      console.log('error in cache open: ', error)
    })
  )
});
