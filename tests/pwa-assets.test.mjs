import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const pages = [
  "index.html", "cerita-utama.html", "change-log.html", "daftar-barang.html",
  "daftar-harga-ikan.html", "daftar-harga.html", "daftar-kejadian-acak.html",
  "daftar-npc-pelanggan.html", "daftar-upgrade.html", "epilog.html",
  "kalender.html", "karakter-kasbon.html", "leaderboard.html",
  "panduan-mini-game.html", "quest-level.html", "quest-warga.html",
  "tips-trik.html"
];
const localAssets = [
  "assets/vendor/marked.min.js",
  "assets/vendor/purify.min.js",
  "assets/fonts/dm-sans-latin.woff2",
  "assets/fonts/space-grotesk-latin.woff2",
  "assets/css/fonts.css"
];

test("file vendor dan font lokal tersedia", () => {
  for (const asset of localAssets) {
    assert.equal(existsSync(join(root, asset)), true, `${asset} belum ada`);
  }
});

test("setiap halaman memuat CSS, vendor, dan font lokal", () => {
  for (const page of pages) {
    const html = readFileSync(join(root, page), "utf8");
    for (const needle of [
      "assets/vendor/marked.min.js",
      "assets/vendor/purify.min.js",
      "assets/css/fonts.css",
      "assets/css/style.css"
    ]) {
      assert.ok(html.includes(needle), `${page} belum memuat ${needle}`);
    }
  }
});

test("tidak ada halaman yang memuat CDN atau Google Fonts", () => {
  for (const page of pages) {
    const html = readFileSync(join(root, page), "utf8");
    for (const forbidden of ["cdn.jsdelivr.net", "fonts.googleapis.com", "fonts.gstatic.com"]) {
      assert.ok(!html.includes(forbidden), `${page} masih memuat ${forbidden}`);
    }
  }
});

test("accordion Change Log menggabungkan Ringkasan ke blok versi", () => {
  const js = readFileSync(join(root, "assets/js/app.js"), "utf8");
  assert.ok(js.includes("/^Ringkasan\\b/i.test(text)"), "deteksi Ringkasan hilang");
  assert.ok(js.includes("collectUntil(intro, h)"), "isi Ringkasan tidak digabung");
  assert.ok(js.includes("parent.insertBefore(details, intro || h)"), "blok versi tidak dipasang di posisi Ringkasan");
});

test("semua URL aset bersifat relatif", () => {
  for (const page of pages) {
    const html = readFileSync(join(root, page), "utf8");
    assert.equal(/(?:src|href)="\//.test(html), false, `${page} memakai URL absolut`);
  }
});
