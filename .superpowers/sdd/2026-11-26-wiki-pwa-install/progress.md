# SDD ledger — plan: docs/superpowers/plans/2026-11-26-wiki-pwa-install.md

Ruling: workspace skrip git tidak dipakai — folder wiki bukan git repository dan `sdd-workspace`/`task-start`/`task-done` mensyaratkan git; ledger manual di `.superpowers/sdd/2026-11-26-wiki-pwa-install/` dipakai sebagai ganti; biaya jika salah: jejak commit tidak ada, jadi bukti kemajuan bergantung pada ledger dan hasil test yang tercatat di sini.
Pre-flight: Task 2 consumes Task 1 direktori aset — tidak ada konflik; Task 2 memakai `assets/` yang sudah ada dan tidak mengubah vendor/font.
Pre-flight: Task 3 consumes Task 1 + Task 2 daftar aset — tidak ada konflik; daftar precache mengikuti path yang dibuat Task 1–2.
Pre-flight: Task 4 consumes Task 2 manifest + Task 3 sw.js — tidak ada konflik; Task 4 hanya menyunting `app.js`/`style.css`, tidak menyentuh manifest atau sw.js.
Pre-flight: Task 5 consumes semua task — tidak ada konflik; README hanya dokumentasi.
Spec: docs/superpowers/specs/2026-11-26-wiki-pwa-install-design.md.
Execution method: native (user chose).

Task 1: RED 3/4 gagal → tambah vendor/font lokal + ubah 17 HTML → GREEN 4/4. Catatan: URL `marked@18.3.0/marked.min.js` 404, dipakai `lib/marked.umd.js` (versi 18.3.0) dengan nama file `marked.min.js`.
Task 2: RED 4/4 gagal → manifest + 4 ikon PNG dari logo via Pillow + tag head 17 halaman → GREEN 4/4.
Task 3: RED 4/4 gagal → sw.js versi `warung-wiki-v1.2-20261126`, precache 32 URL → GREEN 4/4.
Task 4: RED 6/6 gagal → UI install di app.js + gaya CSS → GREEN 6/6. Koreksi: atribut dialog ditulis langsung di innerHTML agar memenuhi test.
Task 5: RED 5/5 gagal → README PWA + aturan versi cache → GREEN 5/5.

Final review independen menemukan 4 defect; semua diperbaiki dengan TDD (test baru RED → fix → GREEN):
1. Aset berversi (`?v=45`, `?v=64`) tidak cocok dengan kunci cache → `caches.match(request, { ignoreSearch: true })` di dua cabang `sw.js`. Verifikasi browser: `cache.match("./assets/css/style.css?v=45", {ignoreSearch:true})` dan `...app.js?v=64` keduanya 200.
2. `aria-modal` tanpa focus containment → `.app-shell.inert = true` saat dialog dibuka, `false` saat ditutup. Verifikasi browser: inert `true` saat dialog tampil, `false` setelah ditutup.
3. `activate` menghapus semua cache origin → sekarang hanya cache dengan prefix `warung-wiki-`; GitHub Pages project sites berbagi origin.
4. `markSeen()` dipanggil sebelum pop-up tampil → dipindah ke `closeDialog()` dan `appinstalled`; `showButton()` tidak menandai dilihat. Verifikasi browser: `localStorage` masih `null` saat dialog tampil, `"1"` setelah ditutup.

Reviewer kedua menemukan satu regresi dari perbaikan #1: `ignoreSearch` mengembalikan entri precache kanonik, sehingga `cache.put(request, …)` saat refresh diam-diam menyimpan di kunci berversi yang tidak pernah menang lookup — pembaruan `?v=` tidak pernah terlihat. Diperbaiki dengan TDD (test RED → fix → GREEN): refresh sukses kini menulis `cache.put(cached.url, response.clone())` dan `cache.put(request, response)`. Reviewer mengonfirmasi RESOLVED tanpa defect baru. Verifikasi browser: entri kanonik ditimpa probe, lalu lookup `?v=64` + `ignoreSearch` mengembalikan probe (`probeWon: true`); cache dikembalikan ke isi semula (`restoredOk: true`).

Final: `node --test tests/*.test.mjs` → 27/27 pass (setelah perbaikan review dan regresi).

Verifikasi browser (server lokal `python -m http.server 8000`, BrowserOS neo):
- Halaman utama: manifest tertaut, `apple-mobile-web-app-capable=yes`, SW terdaftar dan mengontrol halaman, tombol install muncul, pop-up first-visit terbuka, tidak ada permintaan ke jsDelivr/Google Fonts, font lokal termuat, guide render 399 elemen.
- Setelah reload: pop-up tidak muncul lagi.
- Cache SW: 39 entri — 17 halaman HTML, `data/guide.md`, manifest, 2 font, 4 ikon, 2 vendor; `fetch("./quest-level.html", {cache:"only-if-cached"})` balas 200 dan berisi konten.
- Cabang iOS diuji dengan harness sementara yang mengganti `navigator.userAgent`: tombol "↓Unduh wiki", dialog `role=dialog aria-modal=true`, langkah Share → Add to Home Screen → Add. Harness sudah dihapus.
- Pembatasan: CDP `Network.emulateNetworkConditions` dan `setUserAgentOverride` tidak tersedia di target browser ini, jadi offline diuji lewat isi cache + only-if-cached fetch, bukan putus jaringan sungguhan; pemasangan sungguhan di iPhone tidak teruji dari mesin ini.
- Server lokal dan tab browser yang dibuka sudah ditutup.
