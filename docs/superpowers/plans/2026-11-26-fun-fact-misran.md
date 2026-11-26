# Fun fact Misran Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Menambahkan fun fact bersumber dari thread @agushermawann ke pembuka Cerita Utama tanpa mengubah data quest atau PWA.

**Architecture:** Konten wiki seluruhnya berasal dari `data/guide.md` dan di-render oleh `assets/js/app.js`; satu blok kutipan Markdown disisipkan antara pembuka bagian 3 dan Bab 1. Tidak ada file HTML, CSS, JS, manifest, atau service worker yang diubah.

**Tech Stack:** Markdown + `marked`, test bawaan Node (`node:test`, `node:assert/strict`), GitHub Pages statis, upload lewat BrowserOS neo.

**Spec:** `docs/superpowers/specs/2026-11-26-fun-fact-misran-design.md`

## Global Constraints

- Penempatan: setelah paragraf terakhir pembuka `## 3. Cerita Utama`, sebelum `### Bab 1 - Uang Pendaftaran`.
- Redaksi harus setia pada sumber: "Misran" = nama ayah Mba Giska (istri kreator); sifatnya meniru ayah kreator yang tinggal di Cianjur sejak kuliah; usaha beliau bukan warung; cerita mengadopsi pengalaman kuliah kreator.
- Nama asli ayah kreator tidak boleh ditebak atau ditulis.
- Sumber wajib menyebut `@agushermawann` dan memuat `https://www.threads.com/@agushermawann/post/DgMYHlaj6b2` serta `https://www.threads.com/share/BAdRpDvjsf`.
- Jangan mengubah angka, target, dialog, urutan bab, meta tag, `manifest.json`, `sw.js`, atau `WIKI_CACHE_VERSION`.
- Folder lokal bukan git repository; publish dilakukan dengan meng-upload file yang berubah ke branch `main` lewat BrowserOS neo, bukan `git push`.

## Review Focus

- **Nama ayah kreator sengaja disamarkan** — blok fun fact tidak boleh memuat nama asli atau klaim "nama beliau"; test di Task 1 menolak pola `nama asli|bapak gue bernama`.
- **Usaha ayah bukan warung** — pembaca bisa salah mengira warung di game = usaha ayah kreator; test di Task 1 mewajibkan frasa "Usaha beliau ada, tapi bukan warung".
- **Sumber tanpa tautan** — pembaca tidak bisa mengecek klaim; test di Task 1 mewajibkan dua URL Threads di dalam blok fun fact.
- **Salah penempatan** — fun fact bisa masuk Bab 1 atau halaman kasbon; test di Task 1 membatasi blok ke rentang antara `## 3. Cerita Utama` dan `### Bab 1 - Uang Pendaftaran`.
- **Tautan menuju post lain** — tautan bisa mengarah ke akun/post berbeda; Task 2 langkah verifikasi membuka kedua URL di browser dan memastikan isi post menyebut Misran, Giska, dan Cianjur.

---

### Task 1: Fun fact di Cerita Utama + test

**Files:**
- Modify: `data/guide.md` (sisipkan blok setelah baris 243, sebelum `### Bab 1`)
- Create: `tests/fun-fact-misran.test.mjs`

**Interfaces:**
- Consumes: teks fun fact dan dua URL dari spec, pembuka `## 3. Cerita Utama` di `data/guide.md`.
- Produces: blok kutipan Markdown yang bisa dicari dengan penanda `**💡 Fun Fact — di balik nama Pak Misran**`; test `tests/fun-fact-misran.test.mjs` yang dijalankan oleh `node --test tests/*.test.mjs`.

- [ ] **Step 1: Tulis test yang gagal**

Buat `tests/fun-fact-misran.test.mjs` dengan isi:

```js
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
```

- [ ] **Step 2: Jalankan test dan pastikan gagal**

Run: `node --test tests/fun-fact-misran.test.mjs`
Expected: FAIL — "blok fun fact tidak ditemukan di pembuka Cerita Utama".

- [ ] **Step 3: Sisipkan blok fun fact di `data/guide.md`**

Tempat tepat: setelah paragraf yang diawali "Mulai v1.2, besar sewa tetap dikunci..." dan sebelum `### Bab 1 - Uang Pendaftaran`. Isi persis:

```markdown
> **💡 Fun Fact — di balik nama Pak Misran**
> "Misran" adalah nama ayah Mba Giska (istri kreator). Sifat Pak Misran di game dibuat meniru ayah kreator (namanya sengaja disamarkan), yang tinggal di Cianjur sejak kreator masih kuliah. Usaha beliau ada, tapi bukan warung. Cerita WLS juga mengadopsi pengalaman kuliah kreator—katanya, kalau dulu dia tidak menyebalkan, game ini mungkin tidak dibuat.
>
> Sumber: [@agushermawann di Threads](https://www.threads.com/@agushermawann/post/DgMYHlaj6b2) ([tautan share](https://www.threads.com/share/BAdRpDvjsf)).
```

- [ ] **Step 4: Jalankan test Task 1 dan pastikan lulus**

Run: `node --test tests/fun-fact-misran.test.mjs`
Expected: PASS — 3 test.

- [ ] **Step 5: Jalankan seluruh suite**

Run: `node --test tests/*.test.mjs`
Expected: PASS — 34 test, 0 fail (31 existing + 3 baru).

### Task 2: Publish ke GitHub Pages dan verifikasi

**Files:**
- Upload: `data/guide.md`, `tests/fun-fact-misran.test.mjs`, `docs/superpowers/specs/2026-11-26-fun-fact-misran-design.md`, `docs/superpowers/plans/2026-11-26-fun-fact-misran.md`
- Tidak ada file lain yang berubah.

**Interfaces:**
- Consumes: `data/guide.md` dari Task 1 yang sudah lulus test.
- Produces: konten fun fact live di `https://irsemoticon9.github.io/warung-life-simulator-wiki/cerita-utama.html`.

- [ ] **Step 1: Upload file yang berubah ke branch `main`**

Di BrowserOS neo, buka repo `irsemoticon9/warung-life-simulator-wiki`, gunakan tombol **Add file → Upload files**, pilih keempat file di atas, Set commit message: `Add Misran fun fact to Cerita Utama`, lalu commit langsung ke `main`. Untuk path bertingkat (`data/`, `tests/`, `docs/...`), buka folder tujuan di GitHub lebih dulu sebelum memilih file, seperti praktik upload sebelumnya.

- [ ] **Step 2: Verifikasi source di branch `main`**

Buka `https://github.com/irsemoticon9/warung-life-simulator-wiki/raw/refs/heads/main/data/guide.md` di BrowserOS neo. Expected: memuat `**💡 Fun Fact — di balik nama Pak Misran**` dan kedua URL Threads. Jangan pakai `raw.githubusercontent.com/.../main/...` yang bisa terkena cache CDN lama.

- [ ] **Step 3: Verifikasi tautan sumber**

Buka `https://www.threads.com/share/BAdRpDvjsf` di BrowserOS neo. Expected: post @agushermawann memuat Misran, Giska, Cianjur, dan pernyataan usaha bukan warung. Jika muncul gate login, minta handoff ke user; jangan menebak isi.

- [ ] **Step 4: Verifikasi halaman Pages**

Buka `https://irsemoticon9.github.io/warung-life-simulator-wiki/cerita-utama.html`. Expected: blok fun fact tampil sebelum "Bab 1 - Uang Pendaftaran", bukan error loading guide.

- [ ] **Step 5: Laporkan hasil**

Sampaikan ke user: file yang diubah, commit, jumlah test yang lulus, dan tautan Pages. Tidak perlu mengubah `sw.js` karena `./data/guide.md` sudah masuk precache.
