const cacheName = 'v1';
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
];

self.addEventListener("install" , (event)=>{
  event.waitUntil(
    caches.open("cacheFiles")
    .then( (cache)=>{
      cache.addAll(cacheFiles)
    })
  );
}); // <-- Install Ends

self.addEventListener("activate" , (event)=>{
  console.log("activate");
}); // <-- Activate Ends

self.addEventListener("fetch", (event)=>{
  event.respondWith(
    caches.match(event.request)
    .then( (resFromTheCache)=>{
      if(resFromTheCache){
        return resFromTheCache;
      } else{
        return fetch(event.request);
      }
    })

  )
}); // <-- Fecth Ends
