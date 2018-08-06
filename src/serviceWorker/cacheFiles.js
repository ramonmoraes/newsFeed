const cachedFiles = [
  'bundle.js',
  'style.css'
];

self.addEventListener("install", ev => {
  ev.waitUntil(
    caches.open("newsFeed").then(cache => cache.addAll(cachedFiles))
  );
});
