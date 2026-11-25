// Warung Life Wiki service worker.
// Naikkan WIKI_CACHE_VERSION setiap kali HTML, CSS, JS, gambar, font, atau data/guide.md berubah.
const WIKI_CACHE_VERSION = "warung-wiki-v1.2-20261126";

const PRECACHE = [
  "./",
  "./index.html",
  "./cerita-utama.html",
  "./change-log.html",
  "./daftar-barang.html",
  "./daftar-harga-ikan.html",
  "./daftar-harga.html",
  "./daftar-kejadian-acak.html",
  "./daftar-npc-pelanggan.html",
  "./daftar-upgrade.html",
  "./epilog.html",
  "./kalender.html",
  "./karakter-kasbon.html",
  "./leaderboard.html",
  "./panduan-mini-game.html",
  "./quest-level.html",
  "./quest-warga.html",
  "./tips-trik.html",
  "./manifest.json",
  "./assets/css/fonts.css",
  "./assets/css/style.css",
  "./assets/img/favicon.png",
  "./assets/img/warung-life-hero.png",
  "./assets/img/warung-life-logo.png",
  "./assets/img/icons/apple-touch-icon-180.png",
  "./assets/img/icons/icon-192.png",
  "./assets/img/icons/icon-512.png",
  "./assets/img/icons/icon-maskable-512.png",
  "./assets/js/app.js",
  "./assets/vendor/marked.min.js",
  "./assets/vendor/purify.min.js",
  "./assets/fonts/dm-sans-latin.woff2",
  "./assets/fonts/space-grotesk-latin.woff2",
  "./data/guide.md"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(WIKI_CACHE_VERSION)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key.startsWith("warung-wiki-") && key !== WIKI_CACHE_VERSION)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(WIKI_CACHE_VERSION).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => caches.match(request, { ignoreSearch: true }).then((cached) => cached || caches.match("./index.html")))
    );
    return;
  }

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request, { ignoreSearch: true }).then((cached) => {
      if (cached) {
        fetch(request)
          .then((response) => {
            if (response && response.status === 200) {
              caches.open(WIKI_CACHE_VERSION).then((cache) => Promise.all([
                cache.put(cached.url, response.clone()),
                cache.put(request, response)
              ]));
            }
          })
          .catch(() => {});
        return cached;
      }
      return fetch(request).then((response) => {
        if (response && response.status === 200) {
          const copy = response.clone();
          caches.open(WIKI_CACHE_VERSION).then((cache) => cache.put(request, copy));
        }
        return response;
      });
    })
  );
});
