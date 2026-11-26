import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { marked } = require("../assets/vendor/marked.min.js");
const guide = readFileSync(fileURLToPath(new URL("../data/guide.md", import.meta.url)), "utf8");
const html = marked.parse(guide);
const fact = html.match(/<blockquote>\s*<p><strong>💡 Fun Fact — di balik nama Pak Misran<\/strong>[\s\S]*?<\/blockquote>/)?.[0];
const bab1 = html.indexOf("Bab 1 - Uang Pendaftaran");

test("fun fact tampil di hasil render Cerita Utama sebelum Bab 1", () => {
  assert.ok(fact, "blok fun fact tidak ditemukan pada hasil render Cerita Utama");
  assert.ok(html.indexOf("Cerita Utama") < html.indexOf(fact));
  assert.ok(html.indexOf(fact) < bab1, "fun fact harus sebelum Bab 1");
});

test("render fun fact memuat redaksi yang sesuai sumber", () => {
  assert.ok(fact);
  for (const needle of [
    "nama ayah Mba Giska (istri kreator)",
    "dibuat meniru ayahnya",
    "tinggal di Cianjur sejak kreator masih kuliah",
    "Usaha beliau ada, tapi bukan warung",
    "mengadopsi pengalaman kuliah kreator"
  ]) {
    assert.ok(fact.includes(needle), `hilang: ${needle}`);
  }
  assert.doesNotMatch(fact, /nama asli|bapak gue bernama/i);
});

test("render fun fact menautkan dua sumber Threads yang bisa dicek", () => {
  assert.ok(fact);
  assert.ok(fact.includes('href="https://www.threads.com/@agushermawann/post/DgMYHlaj6b2"'));
  assert.ok(fact.includes('href="https://www.threads.com/share/BAdRpDvjsf"'));
});
