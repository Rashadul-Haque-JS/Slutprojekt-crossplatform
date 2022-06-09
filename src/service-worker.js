/* eslint-disable no-restricted-globals */
console.log("Hello from Service Worker!!")
const statics = self.__WB_MANIFEST
console.log(statics);


self.addEventListener("install", event => {
  console.log("Installing!")
  self.skipWaiting()
})

self.addEventListener("activate", event => {
  console.log("Activate!")
  setTimeout(() => {
    self.registration.showNotification("Ahemn durå",  {body:'!!!'})
  }, 4000)
})

self.addEventListener("push", event => {
  const payload = event.data.text();
  console.log(payload)
  event.waitUntil(
    self.registration.showNotification("Lol", {body: payload})
  )
})