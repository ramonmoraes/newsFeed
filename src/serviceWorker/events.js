import { preCache, networkFirst } from "./cacheFiles";

self.addEventListener("install", ev => {
  console.log("Installing sw");
  ev.waitUntil(preCache());
});

self.addEventListener("activate", ev => {
  console.log("V1 now ready to handle fetches!");
});

self.addEventListener("fetch", ev => {
  console.log("fetched");
  ev.respondWith(networkFirst(ev));
});
