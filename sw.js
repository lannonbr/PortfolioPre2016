importScripts('/cache-polyfill.js');

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open("offline-v2").then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/pure-min.css',
        'grids-responsive-min.css',
        '/style.css',
        '/profilepic.png',
        '/resume.html'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
