/**
 * KIA EV4 Systemanalyse – Service Worker
 * Cache-first for static assets, network-first for HTML. Offline fallback.
 * @version 1.0.0
 */
const CACHE_NAME = 'ev4-systemanalyse-v1';
const STATIC_ASSETS = [
  './',
  './index.html',
  './changelog.html',
  './404.html',
  './css/main.css',
  './js/main.js',
  './manifest.json',
  './img/ev4/placeholder.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch(() => {});
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) => {
      return Promise.all(
        names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (url.origin !== location.origin && !url.pathname.startsWith('/')) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() =>
        caches.match(request.url).then((r) => r || caches.match('./index.html'))
      )
    );
    return;
  }

  if (/\.(css|js|json|woff2?|ttf)$/i.test(url.pathname) || url.pathname.includes('/img/')) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        cache.match(request).then((cached) =>
          cached || fetch(request).then((res) => {
            if (res.ok) cache.put(request, res.clone());
            return res;
          })
        )
      )
    );
    return;
  }

  event.respondWith(fetch(request));
});
