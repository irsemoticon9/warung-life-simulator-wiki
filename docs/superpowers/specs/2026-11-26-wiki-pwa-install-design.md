# Desain: Wiki Warung Life sebagai PWA dengan ajakan install

Tanggal: 2026-11-26
Lokasi: `warung/warung-life-simulator-wiki-main`

## Maksud dan alasan

Pengunjung wiki ini kebanyakan membuka panduan dari HP. Pemilik wiki ingin pengunjung pertama kali diberi tahu bahwa wiki bisa dipasang sebagai shortcut di layar utama, dan di iPhone tetap ada ikon unduh yang menjelaskan cara memasangnya karena Safari tidak menampilkan prompt install otomatis. Contoh perilaku yang diinginkan mengikuti `https://github.com/aronsommer/pwa-template`: aplikasi bisa dipasang, bekerja offline, dan punya versi yang jelas.

## Tujuan

- Wiki bisa dipasang sebagai aplikasi standalone di Android/Chrome dan di iPhone/Safari lewat Add to Home Screen.
- Pengunjung baru melihat satu pop-up yang menawarkan pemasangan, lalu tidak mengganggu lagi.
- Di iPhone, ikon unduh tetap terlihat dan membuka instruksi langkah demi langkah.
- Seluruh 17 halaman wiki, `data/guide.md`, CSS/JS, gambar, dan dependensi bisa dibuka tanpa internet setelah kunjungan pertama.

## Bukan tujuan

- Mengubah isi panduan atau struktur navigasi wiki.
- Menambah backend, database, push notification, atau build tool.
- Membuat aplikasi game; yang dipasang adalah wiki/panduannya.

## Anti-tujuan (yang membuat ini gagal meski technical jalan)

- Pop-up muncul setiap kali halaman dibuka atau menghalangi pembacaan panduan.
- Di iPhone tombol install memanggil API yang tidak didukung sehingga tidak terjadi apa-apa.
- Halaman tampil rusak offline karena `marked`, DOMPurify, atau font masih dimuat dari CDN.

## Keadaan sekarang dan batasan

- Wiki adalah 17 file HTML statis dengan `assets/css/style.css`, `assets/js/app.js`, dan satu `data/guide.md` (~200 KB). Semua halaman memakai CSS/JS yang sama.
- `marked` dan DOMPurify saat ini dimuat dari jsDelivr; font DM Sans dan Space Grotesk dari Google Fonts. Itu harus disalin ke dalam repo supaya offline benar-benar berfungsi.
- Belum ada `manifest.json`, service worker, atau ikon persegi. Logo yang ada berukuran 512x352, jadi perlu dibuat versi persegi.
- Deploy saat ini adalah GitHub Pages dari root, tanpa build step. Folder ini juga bukan git repository, jadi desain ini disimpan di `docs/superpowers/specs/` sebagai berkas biasa.
- Tidak ada alat pembuat gambar terpasang; Pillow perlu dipasang untuk membuat ikon persegi dari logo yang sudah ada.

## Pendekatan yang dipertimbangkan

1. **PWA penuh (dipilih).** Manifest + ikon + service worker + dependency lokal + pop-up dan tombol unduh. Paling sesuai dengan contoh repo dan membuat wiki benar-benar bisa dipakai offline. Biayanya: lebih banyak berkas dan aturan versi cache yang harus dijaga.
2. **Shortcut tanpa offline.** Manifest dan meta iOS saja. Lebih sedikit perubahan, tetapi halaman tetap bergantung pada internet dan library CDN, jadi kurang terasa seperti aplikasi.
3. **Pop-up dan instruksi saja.** Tidak ada manifest; yang didapat hanya bookmark biasa, bukan aplikasi standalone. Tidak memenuhi maksud "shortcut app".

## Keputusan desain (sudah ditetapkan)

### Berkas dan struktur

- Tambah `manifest.json` di root: nama panjang `Warung Life Simulator Wiki`, `short_name` `Warung Wiki`, `start_url` `./`, `scope` `./`, `display` `standalone`, warna mengikuti tema wiki yang ada, ikon 192/512 serta maskable.
- Tambah meta iOS di `<head>` semua halaman: `apple-mobile-web-app-capable=yes`, `apple-mobile-web-app-title`, `apple-touch-icon`, dan `theme-color` yang sudah ada dipertahankan.
- Tambah `assets/css/fonts.css` dan `assets/fonts/` untuk woff2 DM Sans dan Space Grotesk; ganti `<link>` Google Fonts di semua halaman dengan stylesheet lokal. Nama family tetap sama supaya `style.css` tidak diubah.
- Tambah `assets/vendor/marked.min.js` dan `assets/vendor/purify.min.js` (versi sama dengan yang dipakai sekarang), lalu ganti tag script CDN di semua halaman.
- Buat `assets/img/icons/` berisi ikon persegi 192, 512, maskable 512, dan apple-touch-icon 180 dari logo existing dengan latar warna wiki.
- Tambah `sw.js` satu berkas di root.

### Service worker

- Cache bernama versi, misalnya `warung-wiki-v1.2-<tanggal>`; konstanta versi ditulis manual di `sw.js` dan wajib dinaikkan setiap kali konten atau aset berubah.
- `install`: precache seluruh 17 halaman HTML, CSS, JS, vendor, font, gambar, ikon, `manifest.json`, dan `data/guide.md`.
- Navigasi: network-first, fallback ke cache halaman yang sesuai. Aset same-origin: cache-first dengan pembaruan diam-diam.
- `activate`: hapus cache lama. Tidak ada strategi offline untuk data papan peringkat eksternal; widget itu boleh tetap menampilkan pesan gagal seperti sekarang.

### UI pemasangan

- Disuntik dari `app.js` supaya tidak mengubah 17 file secara manual berulang kali: satu tombol kecil di bilah atas dekat tombol tema, memakai variasi CSS yang sama dengan tombol yang ada.
- Chrome Android/desktop: tangkap `beforeinstallprompt`. Tombol bertuliskan "Install wiki" dan memanggil prompt asli. Setelah `appinstalled`, tombol disembunyikan.
- iPhone/iPad Safari: `beforeinstallprompt` tidak tersedia. Tombol selalu tampil dengan ikon unduh dan membuka lembar instruksi: tekan tombol Share (kotak dengan panah ke atas) → pilih **Add to Home Screen** → tekan **Add**. Sertakan catatan bahwa shortcut muncul sebagai ikon di layar utama.
- Pop-up pertama kali: muncul sekali pada iOS dan pada browser yang bisa memasang. Pilihan disimpan di `localStorage` dengan kunci `warungwiki-install-seen`. Menutup pop-up (tombol tutup, Escape, atau klik luar) menandai sudah dilihat. Tombol unduh di iPhone tetap tersedia walaupun pop-up sudah ditutup.
- Browser tanpa dukungan pemasangan: tidak ada pop-up dan tidak ada tombol.
- Dialog memakai `role="dialog"`, `aria-modal`, fokus masuk saat dibuka, fokus kembali saat ditutup, Escape untuk menutup, dan tidak animasi kalau `prefers-reduced-motion`.

### Verifikasi

- Jalankan `python -m http.server` di root wiki, buka di browser, cek manifest dan service worker terdaftar, cek aset tidak lagi meminta domain luar, dan cek mode offline setelah load pertama.
- Cek alur pop-up: muncul sekali, tidak muncul lagi setelah ditutup/dimuat ulang.
- Cek tombol iOS lewat device emulation untuk memastikan instruksi muncul dan tidak memanggil API yang tidak ada. Pemasangan sungguhan di iPhone tidak bisa diverifikasi dari mesin ini dan akan dinyatakan sebagai belum teruji.
- Perbarui `README.md` dengan cara kerja PWA, daftar berkas baru, dan aturan naikkan versi cache saat mengubah konten.

## Diserahkan ke pembuat

- Pilihan warna ikon dan detail visual pop-up mengikuti variabel CSS yang sudah ada; tidak perlu tanya lagi.
- Cara teknis membuat ikon persegi (Pillow atau alat lain) terserah pembuat, asal hasilnya PNG persegi dengan latar yang sesuai tema.
- Nama konstanta versi dan struktur fungsi di `app.js` terserah pembuat selama perilakunya sesuai di atas.
