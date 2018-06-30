self.addEventListener("install", ev => {
  ev.waitUntil(
    caches.open("newsFeed").then(cache => {
      console.log(cache);
    })
  );
});
