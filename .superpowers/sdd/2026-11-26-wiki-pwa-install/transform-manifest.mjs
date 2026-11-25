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

const tags = [
  '  <link rel="manifest" href="manifest.json">',
  '  <meta name="apple-mobile-web-app-capable" content="yes">',
  '  <meta name="apple-mobile-web-app-title" content="Warung Wiki">',
  '  <link rel="apple-touch-icon" href="assets/img/icons/apple-touch-icon-180.png">'
].join("\n");

for (const page of pages) {
  const path = join(root, page);
  let html = readFileSync(path, "utf8");
  if (html.includes('rel="manifest"')) {
    console.log(`${page}: already tagged`);
    continue;
  }
  if (!html.includes("</head>")) throw new Error(`${page}: tidak ada </head>`);
  html = html.replace("</head>", `${tags}\n  </head>`);
  writeFileSync(path, html, "utf8");
  console.log(`${page}: updated`);
}
