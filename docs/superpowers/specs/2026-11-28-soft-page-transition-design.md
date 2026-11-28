# Soft Page Transition Design

> Disetujui oleh pengguna pada 28 November 2026.

## Intent

Pergantian halaman wiki terasa putus karena setiap klik menu memuat ulang seluruh HTML dan memparse ulang `guide.md` menjadi sekitar 400 ribu karakter HTML. Tujuannya membuat pindah halaman terasa langsung dan mengalir tanpa mengubah isi panduan.

## Goals

- Klik menu internal mengganti bagian yang tampak tanpa reload penuh.
- URL tetap nyata (`*.html`) dan tombol back/forward tetap bekerja.
- Transisi singkat, halus, dan tidak mengganggu membaca.
- Tetap bekerja offline sebagai PWA.

## Non-goals

- Tidak mengubah isi `guide.md`, angka, dialogue, atau tabel.
- Tidak menambah framework, build tool, backend, atau database.
- Tidak memberi animasi pada aksi keyboard berulang; yang dianimasikan hanya navigasi halaman yang tidak terlalu sering.
- Tidak menganimasi properti layout seperti `width`, `height`, `margin`, `top`, atau `left`.

## Constraints

- Situs statis GitHub Pages, 17 halaman HTML dengan shell yang sama.
- `app.js` sudah memuat seluruh `guide.md` ke DOM dan menyembunyikan bagian lain lewat `showOnlyCurrentSection()`.
- `window.GUIDE_PAGE` dipakai `currentPageKey()` untuk menentukan bagian aktif.
- Widget papan peringkat berada di dalam `guide.md`, jadi tidak perlu pengecualian khusus.
- Link eksternal, `data/guide.md`, `target="_blank"`, dan klik dengan modifier key tetap memakai navigasi bawaan browser.
- Versi cache baru harus tepat `warung-wiki-v1.3-20261128b`; query aset `app.js?v=67` dan `style.css?v=46`.

## Approaches

1. **CSS cross-document view transition saja** — paling sedikit kode, tapi tetap reload penuh dan parse ulang `guide.md`. Dukungan browser terbatas.
2. **Navigasi tanpa reload** — klik ditangkap, bagian aktif diganti dari DOM yang sudah ada, URL diperbarui dengan `history.pushState`. Lebih cepat dan lebih ringan di kerja browser, dengan biaya sedikit logika `popstate`.

**Pilihan:** opsi 2, dengan fallback navigasi biasa untuk browser yang tidak mendukung dan untuk klik yang tidak memenuhi syarat.

## Design

- `PAGE_TITLES` memetakan 15 kunci halaman ke judul yang sama persis dengan `<title>` HTML masing-masing.
- `navigateToPage(key, hash, push)`:
  - menetapkan `window.GUIDE_PAGE = key`;
  - memanggil `history.pushState({ page: key }, "", file + hash)` bila `push` true;
  - memperbarui `document.title`, breadcrumb, menu aktif, dan menutup sidebar HP;
  - memanggil `showOnlyCurrentSection()` lalu `buildNavigation()`;
  - membuka target `hash` dengan `revealTarget(hash)` atau menggulir ke atas.
- Event delegation di `document` menangkap klik internal dan `popstate`; tautan anchor `#...` tetap ditangani oleh listener delegasi tersendiri supaya TOC yang dibuat ulang tidak kehilangan handler.
- Animasi: `document.startViewTransition(update)` bila tersedia. Fallback: kelas `is-switching` pada `#guideContent` dengan dua `requestAnimationFrame` agar keadaan sempat dicetak, lalu dihapus.
- Properti yang dianimasikan hanya `opacity` dan `transform`. Durasi 150 ms, kurva `cubic-bezier(0.23, 1, 0.32, 1)`.
- `prefers-reduced-motion: reduce` menjalankan perubahan tanpa gerak dan tanpa View Transition.
- Tidak ada jejak animasi untuk klik yang ditolak; perilaku sama persis seperti sebelum perubahan.
