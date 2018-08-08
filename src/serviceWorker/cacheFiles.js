const cacheName = "newsFeed";
const cachedFiles = ["bundle-*.js", "style-*.css"];

self.addEventListener("install", ev => {
  ev.waitUntil(caches.open(cacheName).then(cache => cache.addAll(cachedFiles)));
});

self.addEventListener('activate', event => {
  console.log('V1 now ready to handle fetches!');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});


