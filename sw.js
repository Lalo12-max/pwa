const CACHE_NAME = "mi-universidad-v1";
const APP_SHELL = [
  "index.html",
  "app.js",
  "manifest.json",
  "materias.json"
];

// Instalar y cachear el App Shell
self.addEventListener("instalar", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
});

// Interceptar requests y servir desde caché si es posible
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
