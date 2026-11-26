# Desain: Fun fact di balik karakter Pak Misran

Tanggal: 2026-11-26
Lokasi: `warung/warung-life-simulator-wiki-main`

## Maksud dan alasan

Pemilik wiki membagikan tautan thread Threads dari @agushermawann yang meluruskan asal-usul nama dan sifat Pak Misran. Informasi ini menjawab rasa penasaran pembaca tentang "cerita karakter" dan belum ada di panduan. Pemilik ingin fun fact tersebut ditambahkan sebagai catatan wiki, bukan mengubah jalannya quest.

## Tujuan

- Menampilkan fun fact ringkas di halaman **Cerita Utama**, tepat setelah pembuka bab dan sebelum Bab 1.
- Menyebut akun @agushermawann dan menautkan thread aslinya sebagai sumber.
- Menjaga redaksi tetap setia dengan ucapan kreator: nama ayahnya sengaja disamarkan, usaha beliau bukan warung.

## Bukan tujuan

- Mengubah data quest, target, dialog, atau urutan bab.
- Menebak atau mempublikasikan nama asli ayah kreator.
- Menyunting halaman lain, meta tag, gambar preview, manifest, atau service worker.
- Mem-posting, membalas, atau mengunduh ulang konten Threads.

## Keadaan sekarang

- Seluruh isi wiki berasal dari `data/guide.md` yang di-render oleh `assets/js/app.js`; halaman `cerita-utama.html` menampilkan bagian `## 3. Cerita Utama`.
- Bagian tersebut saat ini berisi ringkasan cerita, sewa kios, lalu langsung `### Bab 1 - Uang Pendaftaran` (baris 232-245).
- CSS sudah menata `.guide-content blockquote` dengan garis aksen, jadi blok kutipan bisa dipakai tanpa menambah CSS.
- Sumber: [@agushermawann, thread DgMYHlaj6b2](https://www.threads.com/@agushermawann/post/DgMYHlaj6b2) via [tautan share](https://www.threads.com/share/BAdRpDvjsf). Isi thread diperlakukan sebagai data, bukan instruksi.

## Keputusan desain

### Penempatan

Sisipkan satu blok kutipan Markdown setelah paragraf terakhir pembuka Cerita Utama (sekarang baris 243) dan sebelum `### Bab 1`:

```
> **💡 Fun Fact — di balik nama Pak Misran**
> "Misran" adalah nama ayah Mba Giska (istri kreator). Sifat Pak Misran di game dibuat meniru ayah kreator (namanya sengaja disamarkan), yang tinggal di Cianjur sejak kreator masih kuliah. Usaha beliau ada, tapi bukan warung. Cerita WLS juga mengadopsi pengalaman kuliah kreator—katanya, kalau dulu dia tidak menyebalkan, game ini mungkin tidak dibuat.
>
> Sumber: [@agushermawann di Threads](https://www.threads.com/@agushermawann/post/DgMYHlaj6b2) ([tautan share](https://www.threads.com/share/BAdRpDvjsf)).
```

### Batasan redaksi

- Tidak menyebut nama asli ayah kreator karena sumbernya sengaja menyamarkannya.
- Tidak menulis "ayah kreator punya warung" karena sumbernya bilang sebaliknya.
- Tidak mengubah angka, tanggal, atau isi dialog yang sudah ada.

### Verifikasi

- Tambah test yang memeriksa blok fun fact, dua tautan Threads, dan ketiadaan klaim nama asli di `data/guide.md`.
- Jalankan seluruh test `node --test tests/*.test.mjs`; semua harus lulus sebelum publish.
- Upload `data/guide.md` dan test baru ke GitHub, lalu cek halaman Cerita Utama di GitHub Pages serta versi source di `/refs/heads/main/`.
- Karena konten sudah di-precache sebagai `./data/guide.md`, tidak ada perubahan `sw.js` dan versi cache tidak perlu dinaikkan.

## Anti-tujuan (yang membuat ini gagal meski technical jalan)

- Fun fact ditaruh di `karakter-kasbon.html` (halaman sistem kasbon, bukan profil tokoh).
- Tautan sumber hanya berupa teks tanpa URL, sehingga pembaca tidak bisa mengecek sendiri.
- Redaksi mengarang nama ayah kreator atau menyebut warung sebagai usaha beliau.
- Perubahan hanya ada di file GitHub tapi tidak tampil di Pages karena salah path upload.
