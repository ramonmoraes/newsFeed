const cacheName = 'v4';
const cacheFiles = [
  '/',
  './',
  './manifest.json',
  './javascripts/script.js',
  './stylesheets/style.css',
  './images/icons/exit.png',
  './images/icons/home.png',
  './images/icons/perfil.png',
  './images/icons/refresh.png',
  './favicon.ico'
];

self.addEventListener('install', function(ev){
    ev.waitUntil(
      caches.open(cacheName).then(function(caches){
        console.log('aqui');
        return caches.addAll(cacheFiles);
      })
    )
});
self.addEventListener('activate', function(ev){
  ev.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheName.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', function(ev){

    ev.respondWith(
      caches.match(ev.request)
    );

});
