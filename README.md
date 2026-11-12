# Warung Life Wiki — v0.38

Website wiki statis untuk panduan Warung Life Simulator v0.38. Dibuat dengan HTML, CSS, dan JavaScript; siap dipublikasikan menggunakan GitHub Pages.

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
4. Buka **Settings → Pages**.
5. Pada **Build and deployment**, pilih **Deploy from a branch**.
6. Pilih branch `main`, folder `/(root)`, lalu klik **Save**.
7. Tunggu proses deployment selesai. GitHub akan memberikan URL website, biasanya:
   `https://USERNAME.github.io/warung-life-wiki/`

## Catatan
- Tidak membutuhkan backend, database, build tools, atau server berbayar.
- Panduan lengkap tersimpan di `data/guide.md`.
- Renderer Markdown dan sanitasi HTML dimuat dari jsDelivr CDN. Saat pertama membuka website diperlukan koneksi internet.
- Isi panduan dipertahankan dari dokumen sumber yang diunggah; website tidak mengubah isi game guide.
