# Wiki PWA Install Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Jadikan wiki statis Warung Life sebagai PWA yang bisa dipasang, bekerja offline, dan mengajak pengunjung pertama kali memasangnya dengan instruksi khusus iPhone.

**Architecture:** Wiki tetap 17 halaman HTML statis yang memakai satu CSS dan satu JS bersama. Dependensi eksternal disalin ke dalam repo, manifest dan ikon ditambahkan, service worker melakukan precache dengan versi manual, dan seluruh UI pemasangan disuntik dari `app.js` agar tidak mengubah 17 file berulang kali.

**Tech Stack:** HTML/CSS/JavaScript vanilla, Service Worker API, Web App Manifest, Node.js built-in test runner (`node --test`), Python http.server untuk verifikasi lokal.

**Spec:** `docs/superpowers/specs/2026-11-26-wiki-pwa-install-design.md`

## Global Constraints

- Root proyek: `warung/warung-life-simulator-wiki-main`; 17 halaman: `index.html`, `cerita-utama.html`, `change-log.html`, `daftar-barang.html`, `daftar-harga-ikan.html`, `daftar-harga.html`, `daftar-kejadian-acak.html`, `daftar-npc-pelanggan.html`, `daftar-upgrade.html`, `epilog.html`, `kalender.html`, `karakter-kasbon.html`, `leaderboard.html`, `panduan-mini-game.html`, `quest-level.html`, `quest-warga.html`, `tips-trik.html`.
- Semua URL harus relatif; tidak boleh ada URL `/awalan` absolut karena GitHub Pages memakai subpath.
- Kunci localStorage untuk pop-up: `warungwiki-install-seen`.
- Nama manifest: `Warung Life Simulator Wiki`; `short_name`: `Warung Wiki`; `start_url`: `./`; `scope`: `./`; `display`: `standalone`.
- Ikon yang dibutuhkan: `192x192`, `512x512`, `maskable 512x512`, `apple-touch-icon 180x180`, semuanya PNG persegi.
- Versi cache awal: `warung-wiki-v1.2-20261126`, disimpan sebagai konstanta `WIKI_CACHE_VERSION` di `sw.js`; wajib dinaikkan manual setiap kali konten/aset berubah.
- Navigasi: network-first dengan fallback cache. Aset same-origin: cache-first.
- Tidak ada backend, database, build tool, atau framework baru. Folder ini bukan git repository, jadi langkah commit tidak dipakai.

## Review Focus

- iOS Safari tidak pernah memicu `beforeinstallprompt` → tombol unduh tetap muncul dan membuka instruksi; diuji di Task 4 dengan pemeriksaan cabang iOS dan verifikasi emulasi.
- Pop-up muncul terus setiap kunjungan → cukup sekali; diuji di Task 4 dengan pemeriksaan kunci `warungwiki-install-seen`.
- File penting terlewat dari precache (terutama `data/guide.md`, font, dan vendor) → offline gagal; diuji di Task 3 dengan daftar precache lengkap.
- GitHub Pages memakai subpath → URL absolut merusak aset; diuji di Task 1 dengan pemeriksaan semua tag memakai path relatif.
- Konten berubah tapi cache lama dipakai → pengguna melihat panduan lama; diuji di Task 3 dengan keberadaan `WIKI_CACHE_VERSION` dan dicatat di README pada Task 5.

---

### Task 1: Dependensi lokal dan perbaikan head semua halaman

**Files:**
- Create: `assets/vendor/marked.min.js`, `assets/vendor/purify.min.js`, `assets/fonts/dm-sans-latin.woff2`, `assets/fonts/space-grotesk-latin.woff2`, `assets/css/fonts.css`
- Modify: 17 file `.html` di root
- Test: `tests/pwa-assets.test.mjs`

**Interfaces:**
- Consumes: tidak ada.
- Produces: semua halaman memuat `assets/vendor/marked.min.js`, `assets/vendor/purify.min.js`, `assets/css/fonts.css`, dan `assets/css/style.css`; tidak ada lagi permintaan ke `cdn.jsdelivr.net`, `fonts.googleapis.com`, atau `fonts.gstatic.com`.

- [ ] **Step 1: Tulis test yang gagal**

Buat `tests/pwa-assets.test.mjs` dengan `node:test` dan `node:assert`. Test harus memeriksa:
- semua 17 nama file di Global Constraints ada;
- setiap file HTML mengandung `assets/vendor/marked.min.js`, `assets/vendor/purify.min.js`, `assets/css/fonts.css`, dan `assets/css/style.css`;
- tidak ada file HTML yang mengandung `cdn.jsdelivr.net`, `fonts.googleapis.com`, atau `fonts.gstatic.com`;
- tidak ada tag yang src/href-nya diawali `/` (kecuali `//` untuk skema relatif, yang juga tidak dipakai).

- [ ] **Step 2: Jalankan test sampai gagal**

Run: `node --test tests/pwa-assets.test.mjs`
Expected: FAIL karena file vendor/font belum ada dan HTML masih memuat CDN.

- [ ] **Step 3: Unduh dependensi ke repo**

- `marked` versi `18.3.0`: `https://cdn.jsdelivr.net/npm/marked@18.3.0/marked.min.js` → `assets/vendor/marked.min.js`.
- DOMPurify `3.2.6`: `https://cdn.jsdelivr.net/npm/dompurify@3.2.6/dist/purify.min.js` → `assets/vendor/purify.min.js`.
- DM Sans latin: `https://fonts.gstatic.com/s/dmsans/v17/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K4.woff2` → `assets/fonts/dm-sans-latin.woff2`.
- Space Grotesk latin: `https://fonts.gstatic.com/s/spacegrotesk/v22/V8mDoQDjQSkFtoMM3T6r8E7mPbF4Cw.woff2` → `assets/fonts/space-grotesk-latin.woff2`.
- Tulis `assets/css/fonts.css` dengan `@font-face` untuk family `DM Sans` (weight `400 700`) dan `Space Grotesk` (weight `500 700`), `font-display: swap`, src relatif `../fonts/...woff2`.

- [ ] **Step 4: Sunting ke-17 halaman**

Pada setiap halaman: ganti dua `<script src="https://cdn.jsdelivr.net/...">` dengan path vendor lokal; ganti `<link href="https://fonts.googleapis.com/...">` dengan `<link rel="stylesheet" href="assets/css/fonts.css">`; biarkan `style.css`, `theme-color`, dan `window.GUIDE_PAGE` apa adanya.

- [ ] **Step 5: Jalankan ulang test**

Run: `node --test tests/pwa-assets.test.mjs`
Expected: PASS.

---

### Task 2: Manifest dan ikon PWA

**Files:**
- Create: `manifest.json`, `assets/img/icons/icon-192.png`, `assets/img/icons/icon-512.png`, `assets/img/icons/icon-maskable-512.png`, `assets/img/icons/apple-touch-icon-180.png`
- Modify: `<head>` ke-17 halaman
- Test: `tests/pwa-manifest.test.mjs`

**Interfaces:**
- Consumes: struktur direktori dari Task 1.
- Produces: `manifest.json` yang valid dan tertaut dari semua halaman; meta iOS tersedia di semua halaman.

- [ ] **Step 1: Tulis test yang gagal**

Buat `tests/pwa-manifest.test.mjs`. Test harus memeriksa:
- `manifest.json` bisa di-parse dan memiliki `name`, `short_name`, `start_url: "./"`, `scope: "./"`, `display: "standalone"`, `theme_color`, `background_color`, dan `icons`;
- `icons` memuat entri untuk ukuran `192x192`, `512x512`, `512x512` dengan `"purpose": "maskable"`, dan `180x180`;
- setiap file ikon ada dan 4 byte pertama PNG benar (`89 50 4E 47`), serta lebar/tinggi dari header IHDR sesuai ukuran;
- semua 17 halaman mengandung `<link rel="manifest" href="manifest.json">`, `<meta name="apple-mobile-web-app-capable" content="yes">`, `<meta name="apple-mobile-web-app-title" content="Warung Wiki">`, dan `<link rel="apple-touch-icon" href="assets/img/icons/apple-touch-icon-180.png">`.

- [ ] **Step 2: Jalankan test sampai gagal**

Run: `node --test tests/pwa-manifest.test.mjs`
Expected: FAIL karena manifest dan ikon belum ada.

- [ ] **Step 3: Buat manifest**

Tulis `manifest.json` dengan nilai dari Global Constraints. `theme_color` dan `background_color` mengikuti warna tema wiki yang sudah ada (`#161008` untuk background; ambil warna aksen dari `assets/css/style.css` untuk theme_color). Semua path ikon relatif tanpa leading slash.

- [ ] **Step 4: Buat ikon persegi**

Dari `assets/img/warung-life-logo.png`, hasilkan empat PNG persegi dengan latar warna wiki. Gunakan Pillow (`python -m pip install Pillow` bila belum ada) atau alat lain yang tersedia; hasil harus benar-benar persegi sesuai ukuran pada Global Constraints. Untuk maskable, biarkan logo lebih kecil di tengah agar area aman lingkaran tidak terpotong.

- [ ] **Step 5: Tambah tag ke semua halaman**

Sisipkan tag manifest dan tiga meta iOS tepat sebelum `</head>` pada ke-17 halaman.

- [ ] **Step 6: Jalankan ulang test**

Run: `node --test tests/pwa-manifest.test.mjs`
Expected: PASS.

---

### Task 3: Service worker dengan precache versi

**Files:**
- Create: `sw.js`
- Test: `tests/pwa-sw.test.mjs`

**Interfaces:**
- Consumes: daftar aset dari Task 1 dan ikon/manifest dari Task 2.
- Produces: `sw.js` yang dapat didaftarkan oleh Task 4.

- [ ] **Step 1: Tulis test yang gagal**

Buat `tests/pwa-sw.test.mjs`. Test harus memeriksa bahwa sumber `sw.js` memuat:
- `const WIKI_CACHE_VERSION = "warung-wiki-v1.2-20261126"`;
- `caches.open(WIKI_CACHE_VERSION)`;
- `cache.addAll(` atau `cache.add(`, dengan daftar yang mencakup ke-17 halaman, `manifest.json`, `assets/css/style.css`, `assets/css/fonts.css`, `assets/js/app.js`, `assets/vendor/marked.min.js`, `assets/vendor/purify.min.js`, `data/guide.md`, semua font, semua gambar di `assets/img/`, dan semua ikon;
- `install` memanggil `skipWaiting()` dan `activate` memanggil `clients.claim()` serta menghapus cache yang tidak sama dengan `WIKI_CACHE_VERSION`;
- `fetch` memiliki cabang untuk `request.mode === "navigate"` yang mencoba `fetch(request)` dulu lalu `caches.match(request)` sebagai fallback;
- cabang aset same-origin memakai `caches.match(request)` lebih dulu.

- [ ] **Step 2: Jalankan test sampai gagal**

Run: `node --test tests/pwa-sw.test.mjs`
Expected: FAIL karena `sw.js` belum ada.

- [ ] **Step 3: Implementasi service worker**

Tulis `sw.js` dengan daftar precache statis relatif terhadap root (`./index.html`, `./assets/...`, dst.). Hindari URL absolut. Jangan men-cache respons papan peringkat eksternal.

- [ ] **Step 4: Jalankan ulang test**

Run: `node --test tests/pwa-sw.test.mjs`
Expected: PASS.

---

### Task 4: UI pemasangan dan pendaftaran service worker

**Files:**
- Modify: `assets/js/app.js`, `assets/css/style.css`
- Test: `tests/pwa-install-ui.test.mjs`

**Interfaces:**
- Consumes: `manifest.json`, `sw.js`, dan ikon dari Task 2–3.
- Produces: tombol pemasangan di bilah atas, dialog pertama kali, lembar instruksi iOS, dan service worker terdaftar.

- [ ] **Step 1: Tulis test yang gagal**

Buat `tests/pwa-install-ui.test.mjs`. Test harus memeriksa bahwa `assets/js/app.js` memuat:
- `"beforeinstallprompt"` dan pemanggilan `prompt()`;
- deteksi platform iOS (misalnya `/iPad|iPhone|iPod/` atau `navigator.platform`);
- string instruksi `Add to Home Screen`;
- kunci `warungwiki-install-seen` dengan `localStorage.getItem` dan `localStorage.setItem`;
- atribut `role="dialog"` dan `aria-modal="true"`;
- penanganan `Escape` dan `appinstalled`;
- pendaftaran service worker dengan `serviceWorker.register("./sw.js")`.

Test juga memeriksa `assets/css/style.css` memuat selector untuk tombol dan dialog yang dipakai `app.js`, serta aturan `@media (prefers-reduced-motion: reduce)`.

- [ ] **Step 2: Jalankan test sampai gagal**

Run: `node --test tests/pwa-install-ui.test.mjs`
Expected: FAIL karena kode UI belum ada.

- [ ] **Step 3: Implementasi UI di `app.js`**

Tambahkan satu fungsi inisialisasi yang:
- menyimpan event `beforeinstallprompt` bila tersedia;
- membuat tombol di `.top-actions` sebelum/sesudah `#themeToggle`;
- pada iOS menampilkan tombol berikon unduh dengan label "Unduh wiki" dan membuka lembar instruksi tiga langkah;
- pada browser yang bisa install menampilkan "Install wiki" dan memanggil prompt yang tersimpan;
- menyembunyikan tombol setelah `appinstalled`;
- menampilkan dialog pertama kali hanya bila iOS atau event install tersedia, lalu menulis `warungwiki-install-seen`;
- menutup dialog lewat tombol tutup, Escape, dan klik di luar; mengembalikan fokus ke elemen pemicu.

Jangan mengubah logika render panduan yang sudah ada.

- [ ] **Step 4: Tambah gaya di `style.css`**

Pakai variabel CSS yang sudah ada (`--bg`, `--card`, `--line`, `--accent`, `--text`, `--muted`). Pastikan dialog tetap terbaca di tema terang dan gelap, tidak menutup seluruh layar pada desktop, dan menghormati `prefers-reduced-motion`.

- [ ] **Step 5: Daftarkan service worker**

Di dalam `app.js`, setelah UI siap, panggil `navigator.serviceWorker.register("./sw.js")` hanya bila `serviceWorker` tersedia dan halaman memakai `http:`/`https:`.

- [ ] **Step 6: Jalankan ulang test**

Run: `node --test tests/pwa-install-ui.test.mjs`
Expected: PASS.

---

### Task 5: Dokumentasi dan verifikasi manual

**Files:**
- Modify: `README.md`
- Test: `tests/pwa-readme.test.mjs`

**Interfaces:**
- Consumes: semua task sebelumnya.
- Produces: README yang menjelaskan cara kerja PWA dan aturan naikkan versi cache.

- [ ] **Step 1: Tulis test yang gagal**

Buat `tests/pwa-readme.test.mjs`. Test harus memeriksa `README.md` mengandung:
- penjelasan bahwa wiki kini PWA dan bisa dipasang dari layar utama;
- langkah iPhone: Share → Add to Home Screen → Add;
- peringatan untuk menaikkan `WIKI_CACHE_VERSION` di `sw.js` setiap kali mengubah HTML/CSS/JS/gambar/`data/guide.md`;
- daftar folder baru `assets/vendor`, `assets/fonts`, `assets/img/icons`, `manifest.json`, dan `sw.js`.

- [ ] **Step 2: Jalankan test sampai gagal**

Run: `node --test tests/pwa-readme.test.mjs`
Expected: FAIL karena README belum diperbarui.

- [ ] **Step 3: Perbarui README**

Tambahkan bagian PWA di bawah bagian "Deploy ke GitHub Pages". Jangan hapus instruksi lama.

- [ ] **Step 4: Jalankan seluruh test**

Run: `node --test tests/*.test.mjs`
Expected: PASS semua.

- [ ] **Step 5: Verifikasi di browser lokal**

Jalankan `python -m http.server 8000` dari root wiki, buka `http://localhost:8000`, lalu periksa:
- tidak ada permintaan ke `cdn.jsdelivr.net`, `fonts.googleapis.com`, atau `fonts.gstatic.com`;
- `manifest.json` dan service worker terdaftar;
- pop-up muncul sekali dan tidak muncul lagi setelah halaman dimuat ulang;
- setelah load pertama, matikan jaringan dan buka beberapa halaman termasuk `quest-level.html`; konten dan font tetap tampil;
- dengan emulasi iPhone, tombol unduh tetap ada dan instruksi Add to Home Screen muncul.

Catatan: pemasangan sungguhan di iPhone tidak dapat diverifikasi dari mesin ini dan harus dinyatakan belum teruji.

---

## Self-Review

- **Spec coverage:** seluruh bagian desain terpetakan: manifest/ikon (Task 2), precache offline (Task 3), pop-up + iOS instruction (Task 4), dependency lokal (Task 1), README dan verifikasi (Task 5). Tidak ada gap.
- **Step scan:** tiap langkah memprodusikan satu hasil yang bisa dicek; tidak ada langkah "handle edge cases" umum.
- **Type consistency:** nama `WIKI_CACHE_VERSION`, kunci `warungwiki-install-seen`, dan path aset sama di semua task.
- **Review Focus:** kelima kondisi berisiko mendapat test di Task 1, 3, dan 4, kecuali pemasangan iPhone sungguhan yang dinyatakan tidak teruji secara lokal.
- **Proportion:** plan lebih panjang dari spec karena test assertions perlu nilai eksak, tetapi tidak berisi transcript implementasi penuh.
