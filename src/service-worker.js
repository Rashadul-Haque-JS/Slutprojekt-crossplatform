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
  if (!(event.request.url.indexOf("http") === 0)) return;
  event.respondWith(
    // look in the cache for the resource
    caches.match(event.request).then(async (response) => {
      if (response) {
        // is in cache, respond with the cached resource
        return response;
      }
      // if not found fetch it from the network
      const networkResponse = await fetch(event.request);
      // response needs to be cloned if going to be used more than once
      const clonedResponse = networkResponse.clone();

      // save response to runtime cache for later use
      const runtimeCache = await caches.open("RAOM");
      runtimeCache.put(event.request, networkResponse);

      // respond with the cloned network response
      return Promise.resolve(clonedResponse);
    })
  );
});

// self.addEventListener("install", event => {
//   console.log("Installing!")
//   self.skipWaiting()
// })

// self.addEventListener("activate", event => {
//   console.log("Activate!")

// })
