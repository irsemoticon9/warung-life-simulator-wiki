import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../../../", import.meta.url));
const pages = [
  "index.html", "cerita-utama.html", "change-log.html", "daftar-barang.html",
  "daftar-harga-ikan.html", "daftar-harga.html", "daftar-kejadian-acak.html",
  "daftar-npc-pelanggan.html", "daftar-upgrade.html", "epilog.html",
  "kalender.html", "karakter-kasbon.html", "leaderboard.html",
  "panduan-mini-game.html", "quest-level.html", "quest-warga.html",
  "tips-trik.html"
];

const rules = [
  [/<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/marked[^"]*"><\/script>/g, '<script src="assets/vendor/marked.min.js"></script>'],
  [/<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/dompurify[^"]*"><\/script>/g, '<script src="assets/vendor/purify.min.js"></script>'],
  [/<link href="https:\/\/fonts\.googleapis\.com\/css2[^>]*>/g, '<link rel="stylesheet" href="assets/css/fonts.css">'],
  [/<link rel="preconnect" href="https:\/\/fonts\.(?:googleapis|gstatic)\.com"(?: crossorigin)?>/g, ""]
];

for (const page of pages) {
  const path = join(root, page);
  let html = readFileSync(path, "utf8");
  const before = html;
  for (const [pattern, replacement] of rules) html = html.replace(pattern, replacement);
  if (html !== before) writeFileSync(path, html, "utf8");
  console.log(`${page}: ${html === before ? "unchanged" : "updated"}`);
}
