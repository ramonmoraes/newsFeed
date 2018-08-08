const cacheName = "newsFeed";
const fontUrl = "https://fonts.googleapis.com/css?family=Encode+Sans+Condensed";
const cachedFiles = ["bundle.js", "style.css", "index.html", fontUrl];

const preCache = () => {
  return caches.open(cacheName).then(cache => {
    console.log("Sw cached files");
    return cache.addAll(cachedFiles);
  });
};

const networkFirst = (evt, timeoutDelay = 400) => {
  return fromNetwork(evt.request, timeoutDelay)
  .catch(fromCache(evt.request));
};

const fromNetwork = (request, timeout) => {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(reject, timeout);
    fetch(request).then(response => {
      clearTimeout(timeoutId);
      resolve(response);
    }, reject);
  });
};

const fromCache = request => {
  return caches
    .open(cacheName)
    .then(cache =>
      cache
        .match(request)
        .then(matching => matching || Promise.reject("no-match"))
    );
};

export { preCache, networkFirst };
