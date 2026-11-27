import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const baseUrl = "https://irsemoticon9.github.io/warung-life-simulator-wiki/";
const pages = [
  "index.html", "cerita-utama.html", "change-log.html", "daftar-barang.html",
  "daftar-harga-ikan.html", "daftar-harga.html", "daftar-kejadian-acak.html",
  "daftar-npc-pelanggan.html", "daftar-upgrade.html", "epilog.html",
  "kalender.html", "karakter-kasbon.html", "leaderboard.html",
  "panduan-mini-game.html", "quest-level.html", "quest-warga.html",
  "tips-trik.html"
];

test("og-preview.png berukuran 1200x630 PNG", () => {
  const buf = readFileSync(join(root, "assets/img/og-preview.png"));
  assert.equal(buf.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
  assert.equal(buf.readUInt32BE(16), 1200);
  assert.equal(buf.readUInt32BE(20), 630);
});

test("service worker memuat gambar preview dengan versi cache baru", () => {
  const sw = readFileSync(join(root, "sw.js"), "utf8");
  assert.ok(sw.includes('const WIKI_CACHE_VERSION = "warung-wiki-v1.3-20261127b";'));
  assert.ok(sw.includes('"./assets/img/og-preview.png"'));
  assert.ok(sw.includes('key.startsWith("warung-wiki-")'));
});

const escapeHtml = (s) => s.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const imageUrl = baseUrl + "assets/img/og-preview.png?v=131";

test("setiap halaman punya tag Open Graph dan Twitter Card yang absolut", () => {
  for (const page of pages) {
    const html = readFileSync(join(root, page), "utf8");
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    assert.ok(title, `${page} tidak punya <title>`);
    const pageUrl = page === "index.html" ? baseUrl : baseUrl + page;
    for (const needle of [
      '<meta property="og:type" content="website">',
      '<meta property="og:site_name" content="Warung Life Simulator Wiki">',
      `<meta property="og:title" content="${escapeHtml(title)}">`,
      `<meta property="og:url" content="${pageUrl}">`,
      `<meta property="og:image" content="${imageUrl}">`,
      '<meta property="og:image:type" content="image/png">',
      '<meta property="og:image:width" content="1200">',
      '<meta property="og:image:height" content="630">',
      '<meta property="og:image:alt" content="Warung Life Simulator Wiki: panduan lengkap">',
      '<meta name="twitter:card" content="summary_large_image">',
      `<meta name="twitter:title" content="${escapeHtml(title)}">`,
      `<meta name="twitter:image" content="${imageUrl}">`
    ]) {
      assert.ok(html.includes(needle), `${page} kehilangan ${needle}`);
    }
    assert.ok(html.includes('<meta property="og:description"'), `${page} kehilangan og:description`);
    assert.ok(html.includes('<meta name="twitter:description"'), `${page} kehilangan twitter:description`);
  }
});
