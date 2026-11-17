/* Offline support for a classroom with one tired access point.
 *
 * Strategy, deliberately boring:
 *   fonts and icons  -> cache first, they never change without a new filename
 *   everything else  -> network first, cache as a fallback
 *
 * Network-first on the page matters: it means a fix Glenn deploys at 8am is on
 * every iPad by 9am, and the cached copy only ever appears when the wifi has
 * actually gone away.
 */
var VERSION = 'bcgp-2026-11-17-4';
var IMMUTABLE = /\/(fonts|icons)\/|favicon\.svg$/;

var CORE = [
  './',
  'index.html',
  'fonts.css',
  'manifest.webmanifest',
  'favicon.svg',
  'icons/icon-192.png',
  'icons/apple-touch-icon.png',
  'fonts/archivo-500-latin.woff2',
  'fonts/archivo-500-latin-ext.woff2',
  'fonts/source-sans-3-400-latin.woff2',
  'fonts/source-sans-3-400-latin-ext.woff2',
  'fonts/ibm-plex-mono-400-latin.woff2',
  'fonts/ibm-plex-mono-400-latin-ext.woff2',
  'fonts/ibm-plex-mono-600-latin.woff2',
  'fonts/ibm-plex-mono-600-latin-ext.woff2'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(VERSION)
      .then(function (c) { return c.addAll(CORE); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.map(function (k) {
          return k === VERSION ? null : caches.delete(k);
        }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;   // Wikimedia, Bing: leave alone

  if (IMMUTABLE.test(url.pathname)) {
    e.respondWith(
      caches.match(req).then(function (hit) {
        return hit || fetch(req).then(function (res) {
          var copy = res.clone();
          caches.open(VERSION).then(function (c) { c.put(req, copy); });
          return res;
        });
      })
    );
    return;
  }

  e.respondWith(
    fetch(req)
      .then(function (res) {
        if (res && res.ok) {
          var copy = res.clone();
          caches.open(VERSION).then(function (c) { c.put(req, copy); });
        }
        return res;
      })
      .catch(function () {
        return caches.match(req).then(function (hit) {
          return hit || caches.match('index.html');
        });
      })
  );
});
