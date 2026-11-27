import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join, relative, sep } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const swPath = join(root, "sw.js");

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(path));
    else out.push(relative(root, path).split(sep).join("/"));
  }
  return out;
}

test("sw.js ada dan memakai versi cache yang ditentukan", () => {
  assert.equal(existsSync(swPath), true, "sw.js belum ada");
  const sw = readFileSync(swPath, "utf8");
  assert.ok(sw.includes('const WIKI_CACHE_VERSION = "warung-wiki-v1.3-20261127b"'), "versi cache salah");
  assert.ok(sw.includes("caches.open(WIKI_CACHE_VERSION)"), "cache tidak dibuka dengan versi");
});

test("precache mencakup seluruh aset lokal", () => {
  const sw = readFileSync(swPath, "utf8");
  const assets = [
    ...walk(join(root, "assets")),
    "data/guide.md",
    "manifest.json",
    "index.html", "cerita-utama.html", "change-log.html", "daftar-barang.html",
    "daftar-harga-ikan.html", "daftar-harga.html", "daftar-kejadian-acak.html",
    "daftar-npc-pelanggan.html", "daftar-upgrade.html", "epilog.html",
    "kalender.html", "karakter-kasbon.html", "leaderboard.html",
    "panduan-mini-game.html", "quest-level.html", "quest-warga.html",
    "tips-trik.html"
  ];
  assert.ok(/cache\.addAll\(/.test(sw), "precache tidak memakai cache.addAll");
  for (const asset of assets) {
    assert.ok(sw.includes(`./${asset}`), `${asset} tidak masuk precache`);
  }
});

test("install dan activate mengelola cache dengan benar", () => {
  const sw = readFileSync(swPath, "utf8");
  const install = sw.slice(sw.indexOf("install"), sw.indexOf("activate"));
  const activate = sw.slice(sw.indexOf("activate"));
  assert.ok(/skipWaiting\(/.test(install), "install tidak memanggil skipWaiting");
  assert.ok(/clients\.claim\(/.test(activate), "activate tidak memanggil clients.claim");
  assert.ok(/WIKI_CACHE_VERSION/.test(activate), "activate tidak memeriksa versi cache");
  assert.ok(/caches\.delete/.test(activate), "activate tidak menghapus cache lama");
  assert.ok(sw.includes('key.startsWith("warung-wiki-")'), "activate menghapus cache aplikasi lain");
});

test("pencarian cache mengabaikan query string aset berversi", () => {
  const sw = readFileSync(swPath, "utf8");
  const matches = sw.match(/ignoreSearch: true/g) || [];
  assert.ok(matches.length >= 2, `ignoreSearch hanya dipakai ${matches.length} kali`);
});

test("pembaruan diam-diam menimpa entri cache kanonik", () => {
  const sw = readFileSync(swPath, "utf8");
  assert.ok(sw.includes("cache.put(cached.url"), "pembaruan tidak menimpa kunci kanonik hasil ignoreSearch");
  assert.ok(sw.includes("cache.put(request"), "pembaruan tidak menyimpan kunci asli");
});

test("navigasi network-first dan aset cache-first", () => {
  const sw = readFileSync(swPath, "utf8");
  assert.ok(sw.includes('request.mode === "navigate"'), "tidak ada cabang navigasi");
  const fetchHandler = sw.slice(sw.indexOf("fetch"));
  const navigatePos = fetchHandler.indexOf('request.mode === "navigate"');
  const fallbackPos = fetchHandler.indexOf("caches.match(request,", navigatePos);
  assert.ok(navigatePos >= 0 && fallbackPos > navigatePos, "navigasi tidak punya fallback cache");
  const assetPos = fetchHandler.indexOf("url.origin", navigatePos);
  const cacheFirstPos = fetchHandler.indexOf("caches.match(request,", assetPos);
  assert.ok(assetPos >= 0 && cacheFirstPos > assetPos, "aset tidak cache-first");
});
