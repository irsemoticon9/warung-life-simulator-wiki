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
const iconSpecs = [
  { path: "assets/img/icons/icon-192.png", size: 192, purpose: "any" },
  { path: "assets/img/icons/icon-512.png", size: 512, purpose: "any" },
  { path: "assets/img/icons/icon-maskable-512.png", size: 512, purpose: "maskable" },
  { path: "assets/img/icons/apple-touch-icon-180.png", size: 180, purpose: null }
];

function pngSize(path) {
  const buf = readFileSync(path);
  assert.deepEqual([...buf.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10], `${path} bukan PNG`);
  assert.equal(buf.toString("ascii", 12, 16), "IHDR", `${path} tidak punya IHDR`);
  return [buf.readUInt32BE(16), buf.readUInt32BE(20)];
}

test("manifest.json valid dan lengkap", () => {
  const path = join(root, "manifest.json");
  assert.equal(existsSync(path), true, "manifest.json belum ada");
  const manifest = JSON.parse(readFileSync(path, "utf8"));
  assert.equal(manifest.name, "Warung Life Simulator Wiki");
  assert.equal(manifest.short_name, "Warung Wiki");
  assert.equal(manifest.start_url, "./");
  assert.equal(manifest.scope, "./");
  assert.equal(manifest.display, "standalone");
  assert.ok(manifest.theme_color, "theme_color kosong");
  assert.ok(manifest.background_color, "background_color kosong");
  assert.ok(Array.isArray(manifest.icons), "icons bukan array");
});

test("manifest mendeklarasikan keempat ikon", () => {
  const manifest = JSON.parse(readFileSync(join(root, "manifest.json"), "utf8"));
  for (const spec of iconSpecs.filter((s) => s.purpose)) {
    const found = manifest.icons.find((icon) =>
      icon.sizes === `${spec.size}x${spec.size}` &&
      (spec.purpose === "any"
        ? !icon.purpose || icon.purpose === "any"
        : icon.purpose === spec.purpose));
    assert.ok(found, `ikon ${spec.size}x${spec.size} purpose ${spec.purpose} tidak ada di manifest`);
    assert.ok(found.src.startsWith("assets/img/icons/"), `path ikon ${found.src} salah`);
    assert.ok(!found.src.startsWith("/"), `path ikon ${found.src} absolut`);
  }
  const apple = manifest.icons.find((icon) => icon.sizes === "180x180");
  assert.ok(apple, "ikon 180x180 tidak ada di manifest");
});

test("file ikon PNG persegi sesuai ukuran", () => {
  for (const spec of iconSpecs) {
    const path = join(root, spec.path);
    assert.equal(existsSync(path), true, `${spec.path} belum ada`);
    assert.deepEqual(pngSize(path), [spec.size, spec.size], `${spec.path} ukurannya salah`);
  }
});

test("setiap halaman menautkan manifest dan meta iOS", () => {
  const required = [
    '<link rel="manifest" href="manifest.json">',
    '<meta name="apple-mobile-web-app-capable" content="yes">',
    '<meta name="apple-mobile-web-app-title" content="Warung Wiki">',
    '<link rel="apple-touch-icon" href="assets/img/icons/apple-touch-icon-180.png">'
  ];
  for (const page of pages) {
    const html = readFileSync(join(root, page), "utf8");
    for (const needle of required) {
      assert.ok(html.includes(needle), `${page} belum memuat ${needle}`);
    }
  }
});
