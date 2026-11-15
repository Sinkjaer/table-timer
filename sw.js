// Offline cache so the timer opens at the table without a connection.
// Bump VERSION after changing index.html so phones pick up the new copy.
const VERSION = 'table-timer-v2';
const CORE = ['./', './index.html', './manifest.webmanifest', './apple-touch-icon.png', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const keep = res => {
    if (res && (res.ok || res.type === 'opaque')) {
      const copy = res.clone();
      caches.open(VERSION).then(c => c.put(req, copy));
    }
    return res;
  };
  if (req.mode === 'navigate') {
    // The page itself: try the network first so updates arrive, fall back to the cached copy.
    e.respondWith(fetch(req).then(keep).catch(() => caches.match(req).then(hit => hit || caches.match('./index.html'))));
    return;
  }
  // Icons and fonts: cached copy first.
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(keep)));
});
