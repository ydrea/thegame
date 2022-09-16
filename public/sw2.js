const CACHE_NAME = "cash-2";
const cachedSite = ["index.html"];

const self = this;

// Install SW
self.addEventListener("install", (event) => {
  console.log("Opened cache");
});

// Listen for requests
self.addEventListener("fetch", (event) => {
  console.log("fetching");
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        const siteClone = res.clone();
        caches.open(cachedSite).then((cache) => {
          cache.put(event.request, siteClone);
        });
        return res;
        // return fetch(event.request).catch(() => caches.match("index.html"));
      })
      .catch((err) => caches.match(event.request().then((res) => res)))
  );
});

// Activate the SW
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
