const CACHE = 'amal-v2';
const FILES = [
  '/amal_app/index.html',
  '/amal_app/manifest.json',
  '/amal_app/icon-192.png',
  '/amal_app/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
