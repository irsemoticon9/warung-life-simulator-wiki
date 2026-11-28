# Warung Life Wiki - v1.3

Website wiki statis untuk panduan Warung Life Simulator v1.3. Dibuat dengan HTML, CSS, dan JavaScript; siap dipublikasikan menggunakan GitHub Pages.

## Isi
- Quest Level (10 level)
- Cerita Utama (10 bab)
- Quest Warga (34 cerita)
- Daftar Barang (37)
- Daftar Upgrade (12)
- Pencarian isi panduan dan navigasi otomatis berdasarkan heading

## Menjalankan lokal
Karena browser membatasi `fetch()` dari file lokal, jalankan server statis sederhana:

```bash
python -m http.server 8000
```

Lalu buka http://localhost:8000.

## Deploy ke GitHub Pages
1. Buat repository baru di GitHub, misalnya `warung-life-wiki`.
2. Ekstrak seluruh isi ZIP ini.
3. Upload semua file dan folder ke root repository (pastikan `index.html` berada di root).
4. Buka **Settings ? Pages**.
5. Pada **Build and deployment**, pilih **Deploy from a branch**.
6. Pilih branch `main`, folder `/(root)`, lalu klik **Save**.
7. Tunggu proses deployment selesai. GitHub akan memberikan URL website, biasanya:
   `https://USERNAME.github.io/warung-life-wiki/`

## Wiki sebagai PWA

Wiki ini sekarang adalah PWA (progressive web app): bisa dipasang dari layar utama HP dan dibaca tanpa internet setelah kunjungan pertama.

- **Android / Chrome desktop:** pengunjung baru melihat pop-up sekali, lalu ada tombol **Install wiki** di bilah atas. Tombol itu memanggil prompt pemasangan browser. Setelah terpasang, tombolnya hilang.
- **iPhone / iPad (Safari):** Safari tidak punya prompt install otomatis. Tombol **Unduh wiki** tetap tersedia di bilah atas dan membuka instruksi: tekan **Share** (kotak dengan panah ke atas) ? pilih **Add to Home Screen** ? tekan **Add**. Ikon wiki lalu muncul di layar utama.
- Pop-up first-visit hanya muncul sekali per browser. Pilihan disimpan di `localStorage` dengan kunci `warungwiki-install-seen`. Menutup pop-up juga menandainya sudah dilihat.
- Semua 17 halaman, `data/guide.md`, CSS/JS, gambar, font, dan library Markdown disimpan di cache service worker. Halaman dan panduan tetap bisa dibuka offline. Widget papan peringkat tetap memerlukan internet karena datanya berasal dari server eksternal.

### Berkas PWA yang ditambahkan

- `manifest.json` ? nama aplikasi, warna tema, `start_url`, dan daftar ikon.
- `sw.js` ? service worker dengan precache berversi dan strategi network-first untuk navigasi.
- `assets/img/icons/` ? ikon 192?192, 512?512, maskable 512?512, dan apple-touch-icon 180?180.
- `assets/vendor/` ? salinan lokal `marked.min.js` dan `purify.min.js` (menggantikan jsDelivr CDN).
- `assets/fonts/` + `assets/css/fonts.css` ? salinan lokal font DM Sans dan Space Grotesk (menggantikan Google Fonts).

### Preview saat tautan dibagikan

`assets/img/og-preview.png` adalah gambar 1200?630 berisi logo, judul wiki, dan tagline. Tag **Open Graph** dan Twitter Card disuntikkan ke `<head>` ketujuh belas halaman, sehingga Threads, WhatsApp, Facebook, X, dan Discord menampilkan judul, deskripsi, serta gambar yang sama saat tautan ditempel. URL gambar dan `og:url` memakai alamat absolut GitHub Pages; satu gambar dipakai untuk semua halaman. Preview di Threads hanya bisa dipastikan dengan membagikan tautan dari akun sendiri.

### Aturan penting saat mengubah konten

Setiap kali mengubah file HTML, CSS, JS, gambar, font, atau `data/guide.md`, **naikkan nilai `WIKI_CACHE_VERSION` di `sw.js`**. Tanpa itu, pengunjung yang sudah pernah membuka wiki akan terus melihat versi lama dari cache. Format yang dipakai saat ini: `warung-wiki-v1.3-20261128d` (naikkan nomor versi atau tanggalnya setiap ada perubahan).

## Catatan
- Tidak membutuhkan backend, database, build tools, atau server berbayar.
- Panduan lengkap tersimpan di `data/guide.md`.
- Renderer Markdown, sanitasi HTML, dan font disimpan lokal di dalam repo, sehingga tidak bergantung pada CDN.
- Logo dan gambar warung memakai `assets/img/warung-life-logo.png` (logo, favicon) dan `assets/img/warung-life-hero.png` (hero).
- Tema gelap/terang otomatis mengikuti sistem; tombol tema di bilah atas untuk ganti manual (pilihan disimpan di browser).
- Navigasi menggunakan halaman terpisah per bagian: `quest-level.html`, `cerita-utama.html`, `quest-warga.html`, `daftar-barang.html`, `daftar-upgrade.html`. Beranda di `index.html`.
- Isi panduan dipertahankan dari dokumen sumber yang diunggah; website tidak mengubah isi game guide.
