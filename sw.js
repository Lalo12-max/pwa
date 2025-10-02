const CACHE_NAME = "mi-universidad-v1";
const APP_SHELL = [
  "index.html",
  "app.js",
  "manifest.json",
  "materias.json"
];


self.addEventListener("instalar", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
});


self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});

