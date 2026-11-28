import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const readme = readFileSync(join(root, "README.md"), "utf8");

test("README menjelaskan wiki sebagai PWA yang bisa dipasang", () => {
  assert.ok(/PWA|progressive web app/i.test(readme), "tidak ada penjelasan PWA");
  assert.ok(/layar utama|home screen/i.test(readme), "tidak ada penjelasan pemasangan di layar utama");
  assert.ok(/offline|tanpa internet/i.test(readme), "tidak ada penjelasan offline");
});

test("README memuat langkah pemasangan iPhone", () => {
  assert.ok(/Share/.test(readme), "tombol Share tidak disebut");
  assert.ok(/Add to Home Screen/.test(readme), "Add to Home Screen tidak disebut");
  assert.ok(/\bAdd\b/.test(readme), "tombol Add tidak disebut");
});

test("README mengingatkan naikkan versi cache", () => {
  assert.ok(readme.includes("WIKI_CACHE_VERSION"), "WIKI_CACHE_VERSION tidak disebut");
  assert.ok(readme.includes("sw.js"), "sw.js tidak disebut");
});

test("README mendaftarkan berkas dan folder baru", () => {
  for (const path of ["assets/vendor", "assets/fonts", "assets/img/icons", "manifest.json", "sw.js"]) {
    assert.ok(readme.includes(path), `${path} tidak didaftarkan`);
  }
});

test("README tidak menyatakan library masih dimuat dari CDN", () => {
  assert.ok(!/dimuat dari jsDelivr CDN/.test(readme), "catatan CDN lama masih tertinggal");
});

test("README menjelaskan preview media sosial dan versi cache terbaru", () => {
  assert.ok(readme.includes("og-preview.png"), "gambar preview tidak disebut");
  assert.ok(readme.includes("Open Graph"), "tag Open Graph tidak disebut");
  assert.ok(readme.includes("warung-wiki-v1.3-20261128d"), "contoh versi cache terbaru tidak ada");
});
