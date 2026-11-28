# Soft Page Transition Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ganti halaman wiki tanpa reload penuh, dengan transisi singkat yang hanya memakai `opacity` dan `transform`.

**Architecture:** Semua bagian `guide.md` sudah berada di DOM. `app.js` menangkap klik internal, mengubah `window.GUIDE_PAGE`, memperbarui URL lewat `history.pushState`, lalu menjalankan ulang `showOnlyCurrentSection()` dan `buildNavigation()`. Animasi memakai View Transition bila tersedia, dengan fallback kelas CSS dan `prefers-reduced-motion`.

**Tech Stack:** HTML statis, CSS, JavaScript vanilla, Node.js `node:test`, GitHub Pages, service worker.

**Spec:** `docs/superpowers/specs/2026-11-28-soft-page-transition-design.md`

## Global Constraints

- Tanpa backend, database, framework, build tool, atau layanan pihak ketiga baru.
- Link langsung ke semua `*.html` harus tetap bekerja walau JavaScript mati.
- Hanya link same-origin yang ditangkap. Eksternal, `data/guide.md`, `target="_blank"`, dan klik dengan `metaKey`/`ctrlKey`/`shiftKey`/`altKey` memakai navigasi bawaan.
- URL harus tetap memakai nama file asli, contoh `quest-warga.html#4-1-ucup-ingin-sekolah`, dan `popstate` harus mengembalikan halaman yang benar.
- Animasi hanya `opacity` dan `transform`, maksimal 150 ms, kurva `cubic-bezier(0.23, 1, 0.32, 1)`, dan tidak boleh memakai `transition: all` pada `.guide-content`.
- `prefers-reduced-motion: reduce` menjalankan perubahan tanpa gerak.
- Versi cache wajib tepat `warung-wiki-v1.3-20261128b`; query aset wajib `app.js?v=67` dan `style.css?v=46`.
- Folder kerja lokal bukan git repository. Publish dilakukan dari `warung\publish` dengan `git push origin main`.

## Review Focus

- Tombol back/forward setelah beberapa kali pindah halaman harus sinkron dengan bagian yang tampak → test `popstate` Task 1 + browser check Task 4.
- Deep link dengan hash harus membuka target di dalam bagian yang benar → test `revealTarget(hash)` Task 1.
- Klik modifier, tab baru, dan link eksternal tidak boleh dicegat → test guard Task 1 + browser check Task 4.
- Browser tanpa `startViewTransition` dan pengguna reduced motion tidak boleh melihat gerak → test fallback Task 2.
- Pengunjung lama dengan cache `20261128a` harus mendapat JS/CSS baru → test versi Task 3 + live check Task 4.
- TOC dibuat ulang setiap navigasi, jadi listener lama hilang → test listener delegasi Task 1.

---

### Task 1: Navigasi internal tanpa reload

**Files:**
- Modify: `assets/js/app.js`
- Test: `tests/page-transition.test.mjs`

**Interfaces:**
- Consumes: `currentPageKey()`, `pageFile()`, `PAGE_FILES`, `showOnlyCurrentSection()`, `buildNavigation()`, `updateCrumb()`, `revealTarget(id)`.
- Produces: `PAGE_TITLES`, `navigateToPage(key, hash, push = true)`, listener klik delegasi, listener `popstate`. Task 2 akan membungkus bagian DOM dari `navigateToPage` dengan `runPageTransition(update)`.

- [ ] **Step 1: Tulis test gagal untuk navigasi**

Buat `tests/page-transition.test.mjs` dengan `root` dari `fileURLToPath(new URL("../", import.meta.url))` dan pembaca `assets/js/app.js`. Tambahkan tiga test:

```js
test("navigasi internal memakai history dan menangani tombol back", () => {
  const src = readFileSync(join(root, "assets/js/app.js"), "utf8");
  for (const needle of [
    'document.addEventListener("click"',
    "history.pushState(",
    'window.addEventListener("popstate"',
    "window.GUIDE_PAGE = key",
    "revealTarget(hash)",
    "e.button !== 0",
    "e.metaKey || e.ctrlKey || e.shiftKey || e.altKey",
    'a.target === "_blank"',
    "url.origin !== location.origin",
    "data/guide.md"
  ]) assert.ok(src.includes(needle), `app.js kehilangan ${needle}`);
});

test("tautan anchor memakai listener delegasi", () => {
  const src = readFileSync(join(root, "assets/js/app.js"), "utf8");
  assert.ok(src.includes('a[href^="#"'), "anchor tidak memakai delegasi");
});

test("judul halaman dipetakan untuk kunci utama", () => {
  const src = readFileSync(join(root, "assets/js/app.js"), "utf8");
  for (const title of [
    "Warung Life Simulator Wiki: Panduan v1.3",
    "Warung Life Simulator Wiki: Quest Warga v1.3",
    "Warung Life Simulator Wiki: Papan Peringkat",
    "Warung Life Simulator Wiki: Change Log v1.3"
  ]) assert.ok(src.includes(title), `judul belum ada: ${title}`);
});
```

- [ ] **Step 2: Jalankan test sampai gagal**

Run: `node --test tests/page-transition.test.mjs`
Expected: FAIL karena `PAGE_TITLES` dan handler belum ada.

- [ ] **Step 3: Tambahkan `PAGE_TITLES` di `app.js`**

Deklarasikan objek dengan 15 pasangan kunci judul persis sesuai `<title>` HTML: `beranda`, `daftar-npc-pelanggan`, `quest-level`, `cerita-utama`, `epilog`, `quest-warga`, `daftar-kejadian-acak`, `karakter-kasbon`, `daftar-harga`, `daftar-upgrade`, `panduan-mini-game`, `kalender`, `tips-trik`, `papan-peringkat`, `change-log`. Gunakan `Warung Life Simulator Wiki: Panduan v1.3` untuk `beranda` dan `Warung Life Simulator Wiki: Papan Peringkat` tanpa `v1.3` untuk `papan-peringkat`.

- [ ] **Step 4: Tambahkan `navigateToPage(key, hash, push = true)` di `app.js`**

Perilaku tetap: tetapkan `window.GUIDE_PAGE = key`; bila `push`, panggil `history.pushState({ page: key }, "", pageFile(key) + (hash ? "#" + hash : ""))`; tetapkan `document.title = PAGE_TITLES[key] || document.title`; jalankan `showOnlyCurrentSection()`, `buildNavigation()`, `updateCrumb()`, hapus kelas `open`/`show` dari sidebar dan backdrop; lalu `revealTarget(hash)` bila ada hash, atau `window.scrollTo({ top: 0, behavior: "auto" })`. Jangan memanggil animasi langsung di task ini.

- [ ] **Step 5: Tambahkan listener delegasi di `app.js`**

Pasang `document.addEventListener("click", ...)` yang mengabaikan klik non-kiri, modifier, `defaultPrevented`, `a.target === "_blank"`, `download`, origin berbeda, `data/guide.md`, dan `href` yang diawali `#`. Untuk link yang tersisa, cari kunci dari `PAGE_FILES` berdasarkan nama file di `url.pathname`, `preventDefault()`, lalu panggil `navigateToPage(key, url.hash.slice(1), true)`.

- [ ] **Step 6: Ubah `bindAnchors()` menjadi delegasi**

Ganti loop `querySelectorAll(...).forEach(...)` dengan satu `document.addEventListener("click", ...)` yang memakai `e.target.closest('a[href^="#"]')`, `preventDefault()`, lalu `scrollIntoView({ behavior: "smooth" })` untuk target yang ada. Ini memastikan TOC yang dibuat ulang tetap bekerja.

- [ ] **Step 7: Tambahkan listener `popstate`**

Pasang `window.addEventListener("popstate", ...)` yang mengambil nama file dari `location.pathname`, memilih kunci dari `PAGE_FILES` dengan fallback `beranda`, lalu memanggil `navigateToPage(key, location.hash.slice(1), false)`.

- [ ] **Step 8: Jalankan test sampai lulus**

Run: `node --test tests/page-transition.test.mjs`
Expected: PASS 3 test.

- [ ] **Step 9: Simpan perubahan**

Catat path `assets/js/app.js` dan `tests/page-transition.test.mjs` untuk Task 2. Belum publish.

### Task 2: Transisi cepat dengan fallback

**Files:**
- Modify: `assets/js/app.js`
- Modify: `assets/css/style.css`
- Test: `tests/page-transition.test.mjs`

**Interfaces:**
- Consumes: `navigateToPage(key, hash, push)` dari Task 1.
- Produces: `runPageTransition(update)`, dipanggil oleh `navigateToPage` untuk membungkus `showOnlyCurrentSection()`, `buildNavigation()`, `updateCrumb()`, dan penutupan sidebar.

- [ ] **Step 1: Perluas test transisi**

Tambahkan ke `tests/page-transition.test.mjs`:

```js
test("transisi memakai View Transition dan fallback opacity/transform", () => {
  const js = readFileSync(join(root, "assets/js/app.js"), "utf8");
  const css = readFileSync(join(root, "assets/css/style.css"), "utf8");
  for (const needle of [
    "document.startViewTransition(",
    "runPageTransition(",
    'matchMedia("(prefers-reduced-motion: reduce)")',
    'classList.add("is-switching")',
    "requestAnimationFrame("
  ]) assert.ok(js.includes(needle), `JS kehilangan ${needle}`);
  for (const needle of [
    "--page-fade:150ms",
    "--page-ease:cubic-bezier(0.23, 1, 0.32, 1)",
    ".guide-content.is-switching",
    "translateY(4px)",
    "::view-transition-old(root)",
    "::view-transition-new(root)",
    "@media (prefers-reduced-motion: reduce)"
  ]) assert.ok(css.includes(needle), `CSS kehilangan ${needle}`);
  const rule = css.match(/\.guide-content[^,{]*\{[^}]*\}/)?.[0] || "";
  assert.ok(!/transition:\s*all/.test(rule), "fallback tidak boleh memakai transition: all");
});
```

- [ ] **Step 2: Jalankan test sampai gagal**

Run: `node --test tests/page-transition.test.mjs`
Expected: FAIL karena `runPageTransition` dan CSS belum ada.

- [ ] **Step 3: Tambahkan CSS token dan aturan transisi**

Tambahkan ke `:root` dua deklarasi persis `--page-fade:150ms` dan `--page-ease:cubic-bezier(0.23, 1, 0.32, 1)`. Tambahkan `.guide-content{transition:opacity var(--page-fade) var(--page-ease),transform var(--page-fade) var(--page-ease)}`, `.guide-content.is-switching{opacity:0;transform:translateY(4px)}`, aturan `::view-transition-old(root)`/`::view-transition-new(root)` dengan durasi `var(--page-fade)` dan keyframe `page-out`/`page-in` yang hanya mengubah `opacity` dan `transform`. Di dalam `@media (prefers-reduced-motion: reduce)`, nyatakan `.guide-content.is-switching{transform:none}` dan `.guide-content{transition:opacity var(--page-fade) linear}`.

- [ ] **Step 4: Tambahkan `runPageTransition(update)` di `app.js`**

Jika reduced motion, jalankan `update()` langsung. Jika `document.startViewTransition` ada, panggil `document.startViewTransition(() => update())`. Jika tidak, ambil `#guideContent`, tambahkan `is-switching`, tunggu dua `requestAnimationFrame` bertingkat agar keadaan awal sempat dicetak, lalu jalankan `update()` dan hapus kelas tersebut. Jika elemen tidak ada, jalankan `update()` langsung.

- [ ] **Step 5: Bungkus perubahan DOM di `navigateToPage`**

Pindahkan pemanggilan `showOnlyCurrentSection()`, `buildNavigation()`, `updateCrumb()`, dan penghapusan kelas sidebar/backdrop ke dalam `runPageTransition(() => { ... })`. Biarkan `window.GUIDE_PAGE`, `history.pushState`, dan `document.title` di luar callback. Jalankan `revealTarget(hash)` atau scroll ke atas setelah callback selesai dipanggil.

- [ ] **Step 6: Jalankan test sampai lulus**

Run: `node --test tests/page-transition.test.mjs`
Expected: PASS 4 test.

- [ ] **Step 7: Simpan perubahan**

Catat `assets/js/app.js`, `assets/css/style.css`, dan test. Belum publish.

### Task 3: Bump versi cache dan query aset

**Files:**
- Modify: `sw.js`, `README.md`, semua 17 `*.html`
- Modify: `tests/pwa-sw.test.mjs`, `tests/pwa-readme.test.mjs`, `tests/pwa-social-preview.test.mjs`

**Interfaces:**
- Consumes: versi lama `warung-wiki-v1.3-20261128a`, `app.js?v=66`, `style.css?v=45`.
- Produces: versi baru `warung-wiki-v1.3-20261128b`, `app.js?v=67`, `style.css?v=46`, dan test yang menagihnya.

- [ ] **Step 1: Ubah ekspektasi test lebih dulu**

Ganti string `warung-wiki-v1.3-20261128a` menjadi `warung-wiki-v1.3-20261128b` pada tiga test di atas.

- [ ] **Step 2: Jalankan test sampai gagal**

Run: `node --test tests/pwa-sw.test.mjs tests/pwa-readme.test.mjs tests/pwa-social-preview.test.mjs`
Expected: FAIL karena `sw.js` dan `README.md` masih memakai versi lama.

- [ ] **Step 3: Terapkan versi baru**

Ganti `warung-wiki-v1.3-20261128a` menjadi `warung-wiki-v1.3-20261128b` di `sw.js` dan `README.md`. Ganti `assets/js/app.js?v=66` menjadi `assets/js/app.js?v=67` dan `assets/css/style.css?v=45` menjadi `assets/css/style.css?v=46` di ke-17 halaman HTML.

- [ ] **Step 4: Jalankan seluruh test sampai lulus**

Run: `node --test tests/*.test.mjs`
Expected: PASS, 0 gagal.

- [ ] **Step 5: Simpan perubahan**

Pastikan tidak ada `20261128a`, `app.js?v=66`, atau `style.css?v=45` yang tertinggal.

### Task 4: Publish dan verifikasi live

**Files:**
- Copy ke: `C:\Users\IRSE\Documents\Default Project\warung\publish`
- Modify via git: commit dan push ke `main`

**Interfaces:**
- Consumes: semua file yang diubah Task 1 sampai Task 3.
- Produces: commit baru di GitHub dengan halaman live yang memakai navigasi tanpa reload.

- [ ] **Step 1: Salin file ke clone git**

Salin dari folder kerja ke `warung\publish`: `assets/js/app.js`, `assets/css/style.css`, `sw.js`, `README.md`, semua `*.html`, seluruh `tests/*.test.mjs`, dan dua file `docs/superpowers/{specs,plans}` baru. Jalankan `node --test tests/*.test.mjs` di `publish`.

Expected: PASS di clone git.

- [ ] **Step 2: Commit**

Run: `git add -A` lalu `git commit -m "Make wiki page navigation instant with light transitions"`.

Expected: satu commit baru dengan perubahan CSS, JS, HTML, SW, README, dan test.

- [ ] **Step 3: Push dan cek remote**

Run: `git push origin main`, lalu `git ls-remote https://github.com/irsemoticon9/warung-life-simulator-wiki.git HEAD`.

Expected: HEAD sama dengan commit lokal. PowerShell boleh mencetak `NativeCommandError` saat push; kebenaran diukur dari `ls-remote`.

- [ ] **Step 4: Verifikasi aset live**

Tunggu hingga GitHub Pages selesai. Fetch `data/guide.md`, `sw.js`, dan `cerita-utama.html` dengan query acak plus header `Cache-Control: no-cache`. Pastikan `WIKI_CACHE_VERSION = "warung-wiki-v1.3-20261128b"`, HTML memuat `app.js?v=67` dan `style.css?v=46`. Ulangi sekali bila masih 404 saat deploy.

- [ ] **Step 5: Verifikasi navigasi di browser**

Buka `https://irsemoticon9.github.io/warung-life-simulator-wiki/cerita-utama.html`. Set `window.__probe = 1`, klik `.nav-link[href="quest-warga.html"]`, lalu cek: probe masih `1` (tidak reload), `crumbCurrent` berisi `Quest Warga`, `document.title` sesuai, dan `location.pathname` berakhir `quest-warga.html`. Panggil `history.back()` dan cek crumb kembali `Cerita Utama` dengan probe tetap `1`. Klik tautan Threads di fun fact dan pastikan tetap membuka tab/URL eksternal.

- [ ] **Step 6: Tutup pekerjaan**

Laporkan commit, versi cache, dan hasil browser check. Hentikan server lokal bila masih ada.
