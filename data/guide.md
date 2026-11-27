# Warung Life Simulator Wiki - Fanmade (v1.3)
> Sebuah Wiki Fanmade untuk Warung Life Simulator.
> Panduan ini dibuat dengan bantuan AI. Segala Informasi Bertujuan untuk Membuat Game Menjadi Lebih Informatif. Selalu Support Neo Paw Studio selaku Developer.

## 1. Daftar NPC & Pelanggan

### NPC (Warga)

Warga desa yang bisa kamu temui saat jalan-jalan di kampung. Tekan tombol Ngobrol untuk menyapa mereka.

| ID | Nama | Keterangan |
|---|---|---|
| pelajar | Dimas | Warga desa |
| kantoran | Pak Rudi | Warga desa |
| ojek | Kang Asep | Warga desa |
| ibu_rumah_tangga | Bu Ida | Warga desa |
| anak | Ucup | Warga desa |
| nenek | Nenek Sumi | Warga desa |
| siswi | Neng Shinta | Warga desa |
| giska | Mba Giska | Warga desa |
| santri_putih | Kang Fadil | Warga desa |
| santri_hitam | Kang Hasan | Warga desa |
| tukang | Mang Ujang | Warga desa |
| petani | Abah Karta | Warga desa |
| pak_rt | Pak RT | Warga desa |
| kurir | Kang Dadan | Warga desa |
| ibu_rumah_tangga | Bu Eni | Warga desa (pengganti Pak Misran di warung setelah epilog) |
| anak | Raka | Warga desa (kasir baru di warung) |
| kantoran | Kang Dedi | Warga desa (istirahat di rumah) |

### Pelanggan (Tipe)

**Preferensi pelanggan (barang yang disukai):**
- **Pelajar**: es krim, ciki, teh botol, data 2gb
- **Pekerja kantoran**: kopi susu, danda
- **Ojek online**: sachet, kopi susu, air mineral, danda
- **Ibu rumah tangga**: gula, sabun, deterjen, token listrik, beras, telur, lpg, galon, minyak goreng
- **Anak kecil**: es krim, susu kotak, permen, ciki, biskuit
- **Nenek**: gula, biskuit, beras, telur
- **Siswi SMP**: es krim, susu kotak, ciki, permen, teh botol, data 2gb
- **Santri (peci putih)**: sabun, mi rebus, mi goreng, teh botol
- **Santri (peci hitam)**: sabun, mi rebus, mi goreng, teh botol
- **Tukang bangunan**: kopi bubuk, sachet, kopi susu, air mineral
- **Petani**: kopi bubuk, sachet, air mineral, teh botol
- **Mba Giska**: token listrik, teh botol, air mineral, kopi susu, danda, data 5gb
- **Pak RT**: sachet, kopi susu, kerupuk


Tipe-tipe pelanggan yang datang ke warung. Setiap tipe punya kesukaan barang yang berbeda, jadi stok yang tepat akan membuat mereka lebih sering belanja.

| Tipe Pelanggan | Nama | Barang yang Disukai |
|---|---|---|
| pelajar | Pelajar | es krim, ciki, teh botol |
| kantoran | Pekerja kantoran | kopi susu, danda, token listrik |
| ojek | Ojek online | sachet, danda, kopi susu |
| ibu_rumah_tangga | Ibu rumah tangga | beras, telur, lpg |
| anak | Anak kecil | es krim, permen, ciki |
| nenek | Nenek | biskuit, gula, beras |
| siswi | Siswi SMP | data 2gb, es krim, susu kotak |
| santri_putih | Santri (peci putih) | sabun, mi rebus, mi goreng |
| santri_hitam | Santri (peci hitam) | sabun, mi rebus, mi goreng |
| tukang | Tukang bangunan | sachet, kopi susu, air mineral |
| petani | Petani | sachet, kopi bubuk, air mineral |
| giska | Mba Giska | teh botol, danda, token listrik |
| pak_rt | Pak RT | sachet, kopi susu, kerupuk |

### Varian NPC

Varian penampilan pembeli dan pejalan kaki. Mereka memakai model yang sama tapi dengan warna pakaian berbeda.

- **Pelajar (pramuka)** (pelajar_pramuka): seragam pramuka - Jajang
- **Pelajar SMP** (pelajar_smp): seragam SMP - Rendi
- **Remaja** (pelajar_santai): kemeja hitam - Aa Ridwan
- **Anak kecil** (anak_kuning): kaos kuning - Cecep
- **Anak kecil** (anak_hijau): kaos hijau - Encep
- **Anak kecil** (anak_biru): kaos biru - Ikbal
- **Siswi SD** (siswi_sd): seragam SD - Neng Ai
- **Siswi SMA** (siswi_sma): seragam SMA - Neng Wulan
- **Pekerja kantoran** (kantoran_putih): kemeja putih - Pak Hendra
- **Pekerja kantoran** (kantoran_krem): kemeja krem - Kang Yayan
- **Pekerja kantoran** (kantoran_hijau): kemeja hijau - Pak Engkus
- **Sales** (sales_roti): kemeja merah - Kang Dede
- **Sales** (sales_jamu): kemeja kuning - Kang Oding
- **Ibu rumah tangga** (ibu_biru): jilbab biru - Bu Imas
- **Ibu rumah tangga** (ibu_marun): jilbab krem - Ceu Iis
- **Ibu rumah tangga** (ibu_ungu): jilbab cokelat - Bu Enok
- **Haji Doni** (haji_doni):  - Haji Doni
- **Bapak berkoko** (haji_krem): koko krem - Haji Maman
- **Bapak berkoko** (haji_biru): koko biru - Abah Odih
- **Bapak berkoko** (haji_hijau): koko hijau - Haji Endang
- **Pemuda** (pemuda_biru): kaos biru - Kang Ade
- **Pemuda** (pemuda_hijau): kaos hijau tosca - Kang Ohan
- **Pemuda** (pemuda_kuning): kaos oranye - Kang Wawan
- **Nenek** (nenek_hijau): jilbab hijau - Nini Onah
- **Nenek** (nenek_ungu): jilbab ungu - Nini Eha
- **Nenek** (nenek_biru): jilbab biru - Nini Cucu

### Kesabaran Pelanggan

Saat melayani, ada dua batas waktu yang berjalan bersamaan. Lingkaran di atas kepala pembeli menunjukkan sisa kesabarannya.

| Hal | Casual | Hard |
|---|---|---|
| Sabar menunggu di antrean | 16 detik | 8 detik |
| Sabar saat pesanan disiapkan | 6,5 detik | 4 detik |
| Tambahan per jenis barang (mulai barang ke-2) | +2,5 detik | +1,6 detik |
| Maksimal orang dalam antrean | 4 | 5 |
| Jeda kedatangan pembeli | 5-11 menit | 3-8 menit |
| Peluang pesanan 2 jenis atau lebih | 35% | 60% |

- Casual masih dapat keringanan di awal: level 1-2 dapat +4 detik sabar antre dan +2 detik sabar respon, level 3 dapat +2 dan +1 detik.
- Tiap tambahan orang yang mengantre membuat kesabaran orang di belakangnya terkuras 25% lebih cepat.
- Kalau lingkaran habis, pembeli pulang ("nggak jadi deh"). Pembeli batal tidak dihitung sebagai pelanggan yang dilayani, memutus hitungan beruntun, dan menggagalkan quest "sehari tanpa batal". Peluang dia menulis ulasan bintang 1: 55%.
- Energi di bawah 30% membuat jendela respon jadi 15% lebih pendek.
- Upgrade yang menambah kesabaran: kipas +25% (semua situasi), bangku +25% (khusus yang mengantre, plus 1 slot antrean), TV warung +30% (khusus antre, plus 1 slot). Batas total efek kesabaran dari upgrade 85%.
- Etalase kaca menambah 1 detik jendela respon, QRIS menambah 2 detik.

### Pesanan Panjang & Nota Belanjaan

Mulai **Level 2**, pembeli bisa membawa nota belanjaan panjang: 4-7 macam barang sekaligus. Notanya muncul di meja, dan kalau jumlah macamnya 5 ke atas, daftarnya dibagi dua kolom.

- Peluang nota panjang: **4% + 1,5% per level di atas 2**, maksimal 10%. Tidak muncul kalau tingkat bantuan Casual lebih dari 0,3.
- Jumlah macam: 4 (35%), 5 (30%), 6 (20%), 7 (15%).
- Tiap macam biasanya 1 unit (85%), kadang 2 unit (15%).
- Pesanan biasa: 2 macam (70%) atau 3 macam. Tiap barang 1 unit (65%), 2 unit (27%), atau 3 unit (8%).

Nota panjang inilah yang membuat jendela respon bertambah 2,5 detik per jenis barang di Casual (1,6 detik di Hard), jadi makin lama macamnya, makin lama waktu yang kamu punya.

### Ulasan & Bintang

Setelah dilayani, pembeli bisa menulis ulasan. Jenis ulasan ditentukan dari cara kamu melayani, bukan diundi bebas.

| Kejadian | Bintang | Peluang ditulis |
|---|---|---|
| Dilayani di bawah separuh waktu sabar | 5 | 30% |
| Pesanan lebih dari 1 jenis | 5 | 30% |
| Semua barang dibeli di bawah harga pasaran | 5 | 25% |
| Dilayani biasa | 4 | 20% |
| Salah ambil barang | 3 | 35% |
| Barang kurang atau habis | 2 | 50% |
| Terpaksa beli walau mahal | 2 | 80% |
| Pembeli batal atau kesal | 1 | 55% |
| Barang kemahalan lalu batal | 1 | 90% |

Urutan pengecekannya: kurang barang, lalu keluhan mahal, lalu cepat, lalu pesanan banyak, lalu harga murah, sisanya ulasan biasa.

- Mulai v1.0, keluhan "kemahalan" bisa diistirahatkan sehari: saat keluhan muncul, pilih **"Jangan ingatkan lagi hari ini"** dan pembeli tidak komplain harga lagi sampai hari berganti.
- Angka rating yang ditampilkan memakai satu desimal dan **dibulatkan ke bawah** (mis. 4,87 tampil 4,8), tidak lagi dibulatkan ke atas.

- Radio menambah 50% peluang ulasan bagus (bintang 4-5).
- Bintang warung = rata-rata **80 ulasan terakhir**. Supaya warung baru tidak langsung bintang 1, game menambahkan 10 "ulasan bayangan" bintang 3 yang bobotnya makin kecil seiring jumlah ulasan asli.
- Reputasi dihitung dari rata-rata bintang ulasan dengan skala 0-100. Bintang 2 mulai dari 25 poin, bintang 3 dari 50, bintang 4 dari 75, dan bintang 5 dari 90.
- Bintang membuat pembeli datang lebih cepat: 3★ sekitar 5% lebih cepat, 4★ 10% lebih cepat, dan 5★ 15% lebih cepat. Bintang tidak dipakai sebagai syarat naik level.
- Ulasan bintang 5 hanya bertahan kalau fasilitas nyaman lengkap. Peluang mempertahankannya: 30% + 12% per fasilitas yang dimiliki (kipas, bangku, lampu, radio, QRIS), jadi 90% kalau kelimanya ada.
- Sebaliknya, ulasan bagus bisa turun jadi bintang 3 kalau fasilitas kurang: tidak ada kipas (gerah), tidak ada bangku (mengantre berdiri), lampu redup saat malam, radio belum ada di level 5 ke atas, QRIS belum ada di level 6 ke atas, barang masih sedikit (level 2 ke bawah), atau warung masih terlalu sederhana (level 1).

### Tingkat Keakraban Warga

Tiap tipe warga menyimpan poin akrab tersendiri. Poin naik/turun dari cara kamu berinteraksi, dan menentukan seberapa sering warga itu mampir.

| Poin | Tingkat |
|---|---|
| 0 | Baru kenal |
| 15 | Kenal |
| 35 | Tetangga akrab |
| 60 | Langganan setia |
| 85 | Sudah seperti keluarga |

- Sapa warga +3, bantu kerja +8, bantu cerita +20, tolak cerita −8, layani +1, bikin kesal −2. Kasih makan Neo +12.
- Kenaikan kecil (sapa, kerja, layani, kasih makan) maksimal **sekali per hari per tipe**. Menolong dan menolak cerita tidak kena batas itu.
- Efek akrab: warga makin sering datang sampai **+60%** (1 + 0,6 × akrab/100).
- **Langganan setia** (60+): peluang tip 20% dan ulasan bagus 25%.
- **Sudah seperti keluarga** (85+): sesekali mengirim makanan ke warung, peluang 1/7 per hari, jeda minimal 5 hari, datang pukul 10.00-15.30, tidak saat libur atau Ramadan. Energi yang didapat +15 s.d. +25 tergantung warganya (mis. Nenek +20, Ibu Rumah Tangga +25, Giska +15).
- Neo bisa dikasih makan setelah quest "Si Neo Hilang" selesai dengan pilihan membantu, butuh stok makanan kucing di warung, dan 1 kali sehari.

### Warga Membalas Sapaan

Mulai v1.0, warga tidak cuma diam saat disapa di jalan. Setelah sapaan Pak Misran, warga menjawab dulu sesuai suasana:

- Sapaan pagi, siang, atau malam dijawab sesuai waktunya (mis. "Pagi juga, Pak Misran!").
- Saat hujan, jawabannya soal hujan ("Iya, Pak, ada perlu sebentar.").
- Setelah hujan reda, kadang muncul jawaban lega ("Alhamdulillah, Pak. Akhirnya bisa keluar.").

Balasan ini muncul sebelum obrolan utama, dan tidak muncul kalau obrolannya sendiri sudah diawali salam. Jawaban dipilih acak dari beberapa variasi, jadi tidak selalu sama.

## 2. Quest Level

Progres dihitung sejak level itu dimulai (boleh lewat beberapa hari). Semua syarat lunas → hadiah + naik level.

- **omzet** = total uang masuk dari penjualan (bukan laba).
- **upgrade wajib** = harus sudah membeli salah satu upgrade yang terbuka di level itu.
- **bintang/reputasi** = BUKAN syarat level (reputasi hanya menambah keramaian).
- Setelah Level 10 muncul Level 11 "Coming Soon".

### Keringanan Target Casual

Mode Casual tidak pernah meminta angka penuh selamanya. Ada dua keringanan otomatis (Hard tidak mendapat keduanya):

- **Setelah misi utama selesai**: mulai hari ke-5 setelahnya, target tugas khusus turun **10% per hari**, sampai lantai **40%**. Syarat bintang juga turun 1 tiap 4 hari, sampai minimal 2 bintang.
- **Level macet**: kalau sudah 45 hari di level yang sama, semua target inti (pelanggan, barang, omzet) turun 2% per hari sejak hari ke-45, paling rendah **50%** dari target awal. Angka target di layar ikut menyesuaikan.

Keringanan ini juga menggeser bias harga pasaran ke arah harga naik, lihat **8.9 Kondisi Pasaran**.

### Macam quest khusus (tugas kualitas)

| Teks di game | Arti |
|---|---|

### Tabel quest level (lengkap)

| Lvl | Nama | Pelanggan | Barang | Omzet | Hadiah | Khusus | Upgrade wajib | Barang baru |
|---|---|---|---|---|---|---|---|---|
| 1 | Pemula | 15 | 25 | Rp100.000 | Rp15.000 | beruntun 5 | - | - |
| 2 | Mulai Dikenal | 40 | 70 | Rp400.000 | Rp50.000 | multi 8 | kipas | kerupuk |
| 3 | Langganan Kampung | 90 | 160 | Rp1.000.000 | Rp100.000 | laba_hari 40000 | spanduk, bangku | minuman energi |
| 4 | Warung Ramai | 180 | 320 | Rp2.200.000 | Rp200.000 | multi 25 | kurir_cepat | - |
| 5 | Juragan Warung | 350 | 620 | Rp4.500.000 | Rp300.000 | beruntun 20 | radio | - |
| 6 | Toko Kebanggaan | 480 | 850 | Rp6.500.000 | Rp400.000 | minuman 50 | qris | - |
| 7 | Raja Warung | 650 | 1150 | Rp9.500.000 | Rp500.000 | laba_hari 100000 | cctv | - |
| 8 | Saudagar Kampung | 850 | 1500 | Rp13.000.000 | Rp600.000 | multi 30 | genset | - |
| 9 | Pengusaha Desa | 1000 | 1800 | Rp16.000.000 | Rp800.000 | minuman 90 | tv_warung | - |
| 10 | Legenda Warung Kampung | 1200 | 2150 | Rp21.000.000 | Rp1.000.000 | laba_hari 150000 | wifi | - |

Catatan: angka omzet yang tampil di game = target x faktor_macet(), dibulatkan ke atas ke ribuan terdekat.


## 3. Cerita Utama

Pak Misran mengirim uang untuk Agus (anak, kuliah di kota) dan keperluan rumah tangga.
Membayar bab level sama = ikut jadi syarat naik level itu.
Lewat batas → batas diperpanjang **3 hari** dan target naik **10%**, paling banyak **2 kali**; lalu muncul dialog terlambat.

**Barang yang sudah terbuka di hari pertama:** mi goreng, mi rebus, telur, biskuit, air mineral, sachet, ciki, permen

**Sewa kios** (kepada Pak Haji Rasyid), per level: **Rp100.000** (level 1-2), **Rp200.000** (level 3-4), **Rp300.000** (level 5-6), **Rp400.000** (level 7-8), **Rp500.000** (level 9-10).
(Mulai v1.2 sewa **tetap** dan lebih ringan, sama untuk Casual dan Hard: tidak lagi dihitung dari 15% omzet atau upah kerja sampingan. Sewa hanya naik di Level 3, 5, 7, dan 9, dan Pak Haji Rasyid memberi tahu alasannya. Ditagih tiap Minggu pukul 18.00. Menunggak tidak kena denda, tapi tunggakan menumpuk; tiga minggu menunggak = kios diambil kembali.)

Mulai v1.2, besar sewa tetap dikunci di awal minggu dan **pembayaran otomatis memakai saldo QRIS** kalau uang di laci kurang, jadi kios tidak diambil padahal uangnya cukup. Kalau tagihan hari itu sudah dibayar, tombol bayar/tunda tidak muncul lagi dan cicilan berikutnya langsung dihitung untuk minggu depan - tidak ada tagihan dobel.

> **Fun Fact: di balik nama Pak Misran**
> "Misran" adalah nama ayah Mba Giska (istri kreator). Sifat Pak Misran di game dibuat meniru ayah kreator (namanya sengaja disamarkan), yang tinggal di Cianjur sejak kreator masih kuliah. Usaha beliau ada, tapi bukan warung. Cerita WLS juga mengadopsi pengalaman kuliah kreator. Katanya, kalau dulu dia tidak menyebalkan, game ini mungkin tidak dibuat.
>
> Sumber: [@agushermawann di Threads](https://www.threads.com/@agushermawann/post/DgMYHlaj6b2) ([tautan share](https://www.threads.com/share/BAdRpDvjsf)).

### Bab 1 - Uang Pendaftaran

- **Keperluan:** uang pendaftaran kuliah
- **Target:** Rp150.000
- **Batas:** 12 hari
- **Level terkait:** 1
- **Barang terbuka setelah lunas:** teh botol

**Dialog awal bab:**

  *Di sebuah kampung kecil di Cianjur, Pak Misran membuka warung di kios sewaan milik Pak Haji Rasyid.*
  *Sejak bercerai, Agus, anak satu-satunya, ikut ibunya tinggal di kota. Ibunya Agus adalah seorang ibu rumah tangga, jadi biaya sekolah Agus ditanggung Pak Misran.*
  *Hari itu HP Pak Misran berbunyi. Pesan dari Agus.*
  **Agus:** Pak! Aku keterima kuliah di kota, masuk semester ini!
  **Pak Misran:** Alhamdulillah, Gus! Bapak ikut senang.
  **Agus:** Tapi uang pendaftarannya harus dibayar sebelum daftar ulang, Pak. Butuh Rp150.000. Ibu nggak punya uang segitu.
  **Pak Misran:** Tenang, Gus. Bapak kumpulkan dulu dari warung, nanti Bapak kirim.
  **Agus:** Paling lambat 12 hari lagi ya, Pak. Makasih, Pak.
  *Modal Pak Misran Rp630.000: Rp500.000 untuk etalase kaca, sisanya Rp130.000 untuk stok. Pangkalan sudah menitipkan 2 tabung gas dan 3 galon di rak, tapi izin penyalur gas dan agen air galon belum keluar, jadi belum boleh dijual. Rak lainnya masih kosong. Klik HP, lalu buka Belanja Online untuk membeli mie goreng, mie rebus, telur, biskuit, air mineral, kopi sachet, ciki, dan permen (minimal 2 masing-masing) sebelum membuka warung.*
  *Sewa kios dibayar setiap Minggu malam. Kumpulkan uang dari berjualan, lalu kirim untuk Agus lewat HP, aplikasi Wasap. Kiriman untuk Agus adalah misi utama, jadi dahulukan. Misi utama juga salah satu tugas Level Warung: selesaikan semua tugasnya untuk naik level.*

**Setelah naik level:** *Warung mulai dikenal tetangga. Supplier langganan mau menitipkan barang baru.*

### Bab 2 - Buku dan Ospek

- **Keperluan:** buku dan perlengkapan ospek
- **Target:** Rp350.000
- **Batas:** 16 hari
- **Level terkait:** 2
- **Barang terbuka setelah lunas:** kopi susu

**Dialog awal bab:**

  **Agus:** Pak, minggu depan sudah mulai ospek.
  **Agus:** Aku perlu beli buku dan perlengkapan. Kira-kira Rp350.000, Pak.
  **Pak Misran:** Iya, Gus. Bapak usahakan sebelum 16 hari lagi.

**Setelah naik level:** *Sales minuman dari kota melihat warungmu makin ramai dan mulai menitipkan barang.*

### Bab 3 - Atap Kios Bocor

- **Keperluan:** biaya perbaikan atap kios
- **Target:** Rp500.000
- **Batas:** 14 hari
- **Level terkait:** 3

**Dialog awal bab:**

  *Pagi itu Pak Misran menemukan bekas air menetes dari atap, tepat di atas rak dagangan.*
  **Kontak:** Assalamualaikum, Pak Misran. Maaf, saya dengar atap kios bocor ya?
  **Pak Misran:** Waalaikumsalam, Pak Haji. Iya, Pak, di atas rak. Untung barangnya sempat Bapak pindahkan.
  **Kontak:** Atapnya memang sudah tua. Biaya perbaikannya kita bagi dua: separuhnya saya yang tanggung, Bapak cukup Rp500.000.
  **Pak Misran:** Baik, Pak Haji. Bapak usahakan sebelum 14 hari lagi.

**Setelah naik level:** *Atap kios sudah diperbaiki. Pelanggan makin betah berlama-lama di warung.*

### Bab 4 - Agus Jatuh Sakit

- **Keperluan:** biaya berobat Agus
- **Target:** Rp650.000
- **Batas:** 16 hari
- **Level terkait:** 4
- **Barang terbuka setelah lunas:** danda, data 2gb, data 5gb, data 10gb

**Dialog awal bab:**

  *HP Pak Misran berbunyi lagi. Suara Agus terdengar lemah.*
  **Agus:** Pak... aku dirawat di klinik. Kata dokter kena tifus. Ibu yang jagain aku.
  **Pak Misran:** Ya Allah, Gus! Kamu istirahat saja. Biayanya biar Bapak yang pikir.
  **Agus:** Butuh Rp650.000, Pak. Maaf ya, ngerepotin Bapak terus.
  **Pak Misran:** Jangan bilang begitu. Kamu cepat sembuh, itu yang paling penting.

**Setelah naik level:** *Berkat ajaran Agus, warungmu sekarang melayani top-up e-wallet dan paket data (isi saldonya lewat Belanja Online).*

### Bab 5 - Laptop untuk Kuliah

- **Keperluan:** laptop bekas untuk kuliah
- **Target:** Rp1.000.000
- **Batas:** 26 hari
- **Level terkait:** 5
- **Barang terbuka setelah lunas:** minyak goreng

**Dialog awal bab:**

  **Agus:** Pak, tugas kuliah banyak yang harus diketik. Ke warnet terus jadi mahal.
  **Agus:** Ada teman yang jual laptop bekas, masih bagus. Harganya Rp1.600.000. Aku sudah nabung Rp600.000 dari kerja paruh waktu di kafe, Pak.
  **Agus:** Kurangnya Rp1.000.000. Bapak bisa bantu?
  **Pak Misran:** Hebat kamu sudah mau nabung sendiri, Gus. Bapak kirim sebelum 26 hari lagi. Rawat baik-baik laptopnya.

**Setelah naik level:** *Agen sembako melihat warungmu ramai dan mulai memasok barang baru.*

### Bab 6 - Saung Warga

- **Keperluan:** patungan perbaikan saung warga
- **Target:** Rp1.200.000
- **Batas:** 20 hari
- **Level terkait:** 6

**Dialog awal bab:**

  **Kontak:** Assalamualaikum, Pak Misran. Saung di tepi sawah atapnya sudah rusak, padahal sering dipakai warga berteduh dan anak-anak mengaji.
  **Kontak:** Warga mau patungan. Karena warung Bapak sekarang paling ramai, kami berharap Bapak berkenan menyumbang Rp1.200.000.
  **Pak Misran:** Insyaallah, Pak RT. Itu juga buat kita semua. Bapak usahakan sebelum 20 hari lagi.

**Setelah naik level:** *Warga makin menghargai Pak Misran. Namanya disebut-sebut di pengajian.*

### Bab 7 - Uang Semester

- **Keperluan:** uang semester
- **Target:** Rp1.500.000
- **Batas:** 24 hari
- **Level terkait:** 7

**Dialog awal bab:**

  **Agus:** Pak, ini yang terakhir buat semester ini. Uang semesternya Rp2.000.000, tapi aku dapat keringanan dari kampus. Jadi tinggal Rp1.500.000.
  **Agus:** Batasnya 24 hari lagi, Pak.
  **Pak Misran:** Bapak sudah siapkan dari jauh hari, Gus. Tinggal sedikit lagi.

### Bab 8 - Gaji Pertama Agus

- **Keperluan:** kiriman gaji pertama dari Agus
- **Target:** Rp2.000.000
- **Batas:** 3 hari
- **Level terkait:** 8

**Dialog awal bab:**

  **Agus:** Pak! Aku diangkat jadi pegawai tetap di kafe, gaji pertamaku sudah cair. Alhamdulillah.
  **Agus:** Aku kirim Rp2.000.000 buat Bapak ya. Jangan ditolak, Pak.
  **Pak Misran:** Gus, itu hasil kerjamu sendiri. Simpan saja buat kamu.
  **Agus:** Sudah kupisahkan buat diriku, Pak. Selama ini Bapak yang kirim buat aku. Sekarang gantian, sedikit saja.
  **Pak Misran:** Ya Allah... terima kasih, Nak.
  *Uang Rp2.000.000 dari Agus masuk ke laci Pak Misran.*

**Setelah naik level:** *Kabar gaji pertama Agus membuat Pak Misran makin semangat mengurus warung.*

### Bab 9 - Cek Kesehatan Bapak

- **Keperluan:** biaya cek kesehatan lengkap
- **Target:** Rp1.500.000
- **Batas:** 21 hari
- **Level terkait:** 9

**Dialog awal bab:**

  *Beberapa hari ini Pak Misran sering pegal dan cepat lelah setelah seharian menjaga warung.*
  **Agus:** Pak, kata Pak RT Bapak sering kelihatan pucat. Bapak sudah periksa ke klinik?
  **Pak Misran:** Cuma capek biasa, Gus. Nanti juga sembuh sendiri.
  **Agus:** Aku nggak mau Bapak sakit sendirian, Pak. Aku sudah daftarkan Bapak cek kesehatan lengkap di Klinik Sehat.
  **Agus:** Biayanya Rp1.500.000. Tolong dibayar ya, Pak. Ini permintaan Agus.
  **Pak Misran:** Iya, Gus. Bapak ikuti kata anak sendiri. Bapak bayar sebelum 21 hari lagi.

**Setelah naik level:** *Pak Misran lebih sehat dan segar. Warung pun makin lancar diurus.*

### Bab 10 - Kios Milik Sendiri

- **Keperluan:** pembelian kios dari Pak Haji Rasyid
- **Target:** Rp30.000.000 (mulai v1.2; sebelumnya Rp24.000.000)
- **Batas:** 45 hari
- **Level terkait:** 10

Catatan v1.2: keringanan harga kios tidak lagi turun terlalu jauh - tiap kali lewat batas, target hanya dipotong 25% dari kekurangan (dibulatkan ke Rp5.000) dan **paling banyak Rp1.800.000** (6% dari Rp30.000.000). Harga tidak pernah turun di bawah **Rp12.000.000** (40% harga awal). Batas waktu diperpanjang **3 hari** setiap kali.

**Dialog awal bab:**

  *Hari itu Pak Haji Rasyid menelepon membawa kabar yang tidak biasa.*
  **Kontak:** Pak Misran, saya sudah tua dan ingin membagi harta untuk anak cucu. Kios ini mau saya jual, tapi saya ingin Bapak yang memilikinya.
  **Kontak:** Harganya Rp30.000.000, dibayar sekaligus. Untuk Bapak, saya sudah beri potongan.
  **Pak Misran:** Pak Haji... Bapak sangat ingin kios ini jadi milik sendiri. Bapak akan kumpulkan uangnya.
  **Kontak:** Saya tunggu sampai 45 hari lagi, Pak. Warung ini sudah seperti anak saya sendiri.
  **Agus:** Pak! Aku dengar dari Pak Haji. Semangat ya, Pak. Aku bantu doa dari kota.


**Dialog jika lewat batas:**

  **Agus:** Pak... batasnya sudah lewat. Aku sudah minta keringanan, tapi kena denda.
  **Pak Misran:** Maafkan Bapak, Gus. Kasih Bapak waktu sedikit lagi.
  *Batas diperpanjang 3 hari. Target diturunkan 25% dari kekurangan, paling banyak Rp1.800.000.*

**Dialog penutup (bab terakhir lunas):**

  *Hari itu, sebuah bus berhenti di depan warung. Seorang pemuda bersweter merah turun membawa tas ransel, dan di belakangnya ibunya ikut turun membawa rantang.*
  **Agus:** Assalamualaikum, Pak!
  **Pak Misran:** Waalaikumsalam, Gus! Ya Allah... Sini, sini, Nak.
  **Agus:** Pak, kafe kasih aku jadwal tetap, dan kampus kasih aku beasiswa buat semester depan!
  **Pak Misran:** Masya Allah. Bapak bangga sekali sama kamu, Gus. Semua capek ini rasanya hilang.
  *Warga kampung berdatangan menyalami Agus. Ibu Agus tersenyum, lalu meletakkan rantang di meja warung.*
  **Pak Misran:** Terima kasih sudah menemani Agus sampai sejauh ini, Bu.
  *Ibu Agus tersenyum dan mengangguk. Tidak ada kata lagi yang perlu diucapkan.*
  **Agus:** Pak, ini kios Bapak sendiri sekarang. Selama libur aku bantu jaga warung ya.
  **Pak Misran:** Ayo, Gus. Ambil celemek itu. Pelanggan sudah antre.
  *Cerita utama selesai. Semua barang sudah terbuka. Level 11 segera hadir. Warung tetap buka, silakan lanjut berdagang sesukamu.*

**Balasan WA setelah uang dikirim (acak):**

- Makasih, Pak. Sudah masuk.
- Sudah diterima, Pak. Bapak jaga kesehatan ya.
- Alhamdulillah, makasih Pak.
- Masuk, Pak. Bapak jangan lupa makan.

### Jam Buka Setelah Kios Milik

Mulai v1.0, sesudah kios dibeli dari Pak Haji Rasyid, aturan jam berubah total:

- **Tidak ada hari libur lagi**: Jumat pun warung boleh buka.
- **Buka kapan saja**: tidak perlu menunggu pukul 09.00, warung bisa dibuka sejak tengah malam.
- **Tutup bebas sampai pukul 24.00**, dan boleh tutup kapan saja sebelum itu (tidak ada lagi batas sore).
- **Buka lagi sesudah ditutup** (v1.3): kios milik sendiri yang sudah ditutup boleh dibuka kembali hari itu, sampai pukul 24.00 (Kamis ronda 22.00).
- Khusus **malam Jumat (Kamis)**: kalau ikut ronda, wajib tutup pukul **22.00**.
- Janji ketemu warga tetap muncul di hari Jumat (maksimal 3), walau warung sedang buka; tinggal temui mereka di tempat dan jam yang disebut.
- Mulai v1.2, sesudah kios dibeli, **ojek bisa narik lagi pukul 17.00-23.30**, dan khusus **hari Jumat** bisa narik dari pagi sampai malam.

## 4. Epilog: Tiga Tahun Kemudian

Fitur baru v0.40: scene sinematik setelah tamat (semua level selesai).

### Cerita
Pak Misran menutup warung dan menyerahkannya ke Bu Eni. Agus (anak Pak Misran) jadi guru TIK SD kampung. Neo (kucing) sudah tua. Kang Dedi istirahat di rumah. Raka jadi kasir baru.

### Karakter Baru
- **Bu Eni**: pengganti Pak Misran di warung
- **Raka**: kasir baru di warung
- **Kang Dedi**: istirahat di rumah (tidak bisa bekerja)

### Adegan
- Pak Misran menutup pintu rumah, menitipkan ke Agus
- Pak Misran berhenti di depan warung, memandangi rak-rak yang sudah kosong
- Bu Eni: "Insya Allah saya jaga baik-baik, Pak."
- Raka: "Pak Misran, nanti Raka yang jaga kasir!"
- Neo sudah tua, hanya menoleh pelan
- Agus memeluk bapaknya erat-erat
- Angkot membawa Pak Misran ke terminal, lalu ke kota
- Neo masih menoleh ke arah jalan, seolah menunggu angkot itu kembali

### Musik & Animasi
- Musik: musik_pamit.mp3
- Animasi: lengan_peluk (peluk), lengan_salim (salim)

### Naskah Lengkap Epilog

- **Syarat muncul:** Setelah tamat (semua level selesai), epilog otomatis muncul
- **Tipe:** Cinema (sinematik), tidak ada pilihan jawaban, hanya menonton

#### Tahap 1 - Warung · Pak Misran (pukul 07.00-22.00)

  *Pagi itu, Pak Misran menutup pintu rumahnya untuk terakhir kalinya.*
  **Pak Misran:** Rumah ini Bapak titip ya, Gus. Jendelanya dibuka tiap pagi, biar tidak lembap.
  **Agus:** Iya, Pak. Aku rawat baik-baik. Kan aku yang tinggal di sini sekarang.
  **Pak Misran:** Guru TIK SD kampung... Bapak masih tidak percaya, Gus.
  **Agus:** Ayo, Pak. Bu Eni sudah menunggu di warung.

  *Pak Misran berhenti di depan warung. Lama ia memandangi rak-rak yang sudah kosong, yang ia jaga bertahun-tahun.*
  **Pak Misran:** Dulu Bapak mulai dari satu rak mi instan... sekarang giliran Bu Eni yang mengisi lagi.
  **Bu Eni:** Insya Allah saya jaga baik-baik, Pak. Kang Dedi titip salam, masih istirahat di rumah.
  **Pak Misran:** Bilang sama Dedi, cepat sehat. Nanti kita ngopi lagi di bangku itu.

  **Raka:** Pak Misran, nanti Raka yang jaga kasir!
  **Pak Misran:** Wah, kasir baru. Kembaliannya jangan salah, ya.

  *Neo sudah tua. Ia tidak lagi berlari menyambut, hanya menoleh pelan.*
  **Pak Misran:** Neo... Bapak pergi dulu, ya. Jaga warung sama Bu Eni.

  **Agus:** Pak... jangan lupa kontrol ke dokter. Nanti aku telepon tiap malam.
  **Pak Misran:** Kamu juga, Gus. Ngajar yang sabar. Anak-anak kampung ini butuh guru kayak kamu.

  *Agus memeluk bapaknya erat-erat. Tidak ada yang bicara untuk beberapa saat.*
  *Agus mencium tangan bapaknya lama sekali, seperti waktu kecil dulu setiap berangkat sekolah.*
  **Pak Misran:** Sudah, sudah... nanti Bapak ikut nangis.

  **Pak Misran:** Angkotnya sudah datang. Assalamualaikum, semuanya.
  **Warga:** Waalaikumsalam, Pak. Hati-hati di jalan.

  *Angkot itu membawa Pak Misran ke terminal, lalu ke kota.*
  *Di depan warung, Neo masih menoleh ke arah jalan, seolah menunggu angkot itu kembali.*

  **Pop-up "Epilog"**
  - Tiga tahun kemudian...
  - Warung Bu Eni
  - Neo sudah tua

**HASIL:**
- Tidak ada reward (epilog naratif)
- Musik: musik_pamit.mp3
- Animasi: lengan_peluk (peluk), lengan_salim (salim)


## 5. Quest Warga

Cerita warga muncul di tempat dan jam tertentu, bukan kejadian acak saat berjalan-jalan. Pemain mendekat lalu menekan "Sapa" untuk memulai cerita. Setiap cerita punya beberapa tahap yang bisa pindah area atau tokoh. Setiap pilihan berujung pada satu dari lima hasil: membantu, menolak, lanjut ke tahap berikut, mengulang karena jawaban salah, atau menunda sampai nanti. Hasil cerita bisa menambah reputasi, membuka barang baru, atau mengubah frekuensi pelanggan datang. Reputasi adalah skor warung yang menambah keramaian pelanggan; nilainya tidak menentukan level berikutnya.

**Nama di depan dialog** adalah tokoh yang sedang bicara. Narasi ditulis miring tanpa nama.

*Penjelasan pendek:*
- **JANJI** = event khusus hari libur warung; maks 3 janji per libur (v1.0; sebelumnya 2). Sejak v1.0 hari libur warung hanya Jumat.
- **HARI SEKOLAH** = tidak muncul hari Minggu.
- **bukan_ramadan** = tidak muncul selama Ramadan (beberapa event tidak muncul di Ramadan).
- Setiap event punya beberapa tahap (lokasi/tim). Dekat → tekan **Sapa**.
- Pilihan: membantu atau menolak.
- Setelah cerita selesai muncul **obrolan** (percakapan warga).

### 4.1 Ucup Ingin Sekolah

- **Syarat muncul:** Level ≥ 1 · Hari ≥ 1 · HARI SEKOLAH (bukan Minggu) · **JANJI** (hanya hari libur warung) · **hasil menentukan hadiah selanjutnya:** **membantu** membuka **Ucup Juara Kelas**, **menolak** membuka **Susu Sekolah** · *Catatan: jalur membantu langsung membuka susu kotak tanpa perlu menyelesaikan misi Susu Sekolah.*

#### Tahap 1 - SD · Ucup (pukul 08.00-13.00)

  **Ucup:** Hhh... enak ya jadi mereka. Masih bisa sekolah...
  **Pak Misran:** Lho, Ucup? Kok sendirian di lapangan? Jam segini kamu nggak masuk kelas?
  **Ucup:** Ucup sudah nggak sekolah lagi, Pak Misran...
  **Pak Misran:** Astagfirullah! Nggak sekolah lagi? Kenapa, Cup?
  **Ucup:** Bapak sama Ibu Ucup sudah meninggal waktu Ucup kelas dua. Sekarang Ucup cuma tinggal sama Nenek Sumi.
  **Ucup:** Nenek sudah tua, Pak. Uangnya cuma dari jualan rengginang. Seragam Ucup sudah kekecilan, buku nggak punya, uang sekolah nunggak terus...
  **Ucup:** Jadi Ucup berhenti saja, kasihan Nenek. Tapi tiap siang Ucup ke sini, lihat teman-teman belajar dari luar jendela.
  *Pak Misran terdiam. Ia teringat Agus, yang dulu juga hampir putus sekolah.*

**Pertanyaan:**

  **Pak Misran:** (Biaya sekolah, seragam, dan buku Ucup kira-kira Rp200.000. Bantu Ucup?)
**Pilihan jawaban:**

1. **"Bantu biaya sekolah Ucup (Rp200.000)"**

  **Pak Misran:** Cup, besok kamu sekolah lagi, ya. Uang sekolah, seragam, sama bukunya biar Bapak yang urus.
  **Ucup:** Beneran, Pak?! Ucup... Ucup boleh sekolah lagi?
  **Pak Misran:** Boleh. Tapi janji, belajar yang rajin. Bilang ke Nenek, jangan khawatir lagi.
  **Ucup:** Janji, Pak! Makasih, Pak Misran! Nanti Ucup mau jadi dokter, biar bisa ngobatin Nenek!
  *Kabar kebaikan Pak Misran cepat menyebar ke seluruh kampung.*

2. **"Maaf, belum bisa membantu"**

  **Pak Misran:** Maaf, Cup... Bapak sendiri lagi pas-pasan. Uang warung juga buat kuliah Agus.
  **Ucup:** Nggak apa-apa, Pak... Ucup ngerti, kok.
  *Ucup tersenyum kecil, lalu kembali menatap ke arah kelas.*

3. **"Nanti Bapak pikirkan dulu"**

  **Pak Misran:** Cup, Bapak pikirkan dulu, ya. Nanti Bapak cari kamu lagi di sini.
  **Ucup:** Iya, Pak. Ucup biasanya di sini sampai siang.

**HASIL - BANTU:**

- Ulasan bintang 5: +1
- Barang baru terbuka: buku tulis
- Pelanggan: Ucup 1,3x lebih sering, Nenek Sumi 1,3x lebih sering

  **Pop-up "Barang Baru Terbuka!"**

  Ucup bisa sekolah lagi. Anak-anak sekolah mulai membeli buku tulis di warung Pak Misran.

  - Buku tulis sekarang bisa dijual
  - Reputasi warung naik 1 bintang
  - Ucup dan Nenek Sumi jadi langganan setia

**HASIL - TOLAK:**

- Pelanggan: Ucup 0,4x lebih sering

  **Pop-up "Ucup Kecewa"**

  Pak Misran tidak membantu biaya sekolah Ucup.

  - Ucup jadi jarang mampir ke warung
  - Pelanggan anak kecil lebih jarang datang

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak Misran! Tadi Ucup dapat nilai sembilan di ulangan IPA! / **Pak Misran:** Masyaallah, pinter! Pertahankan, Cup.
- **Warga:** Seragam baru Ucup wangi, Pak. Kata Nenek harus dijaga baik-baik. / **Pak Misran:** Betul kata Nenek. Rajin belajarnya, ya.
- **Warga:** Pak Misran, terima kasih sudah menolong cucu saya. Semoga Allah membalas berlipat-lipat. / **Pak Misran:** Aamiin, Nek. Ucup anak baik, sayang kalau tidak sekolah.

*Cabang menolak:*

- **Warga:** Siang, Pak... Ucup lagi bantu Nenek jualan rengginang. / **Pak Misran:** Yang semangat, Cup. Semoga laris, ya.
- **Warga:** Pak, kalau sudah besar Ucup mau kerja, biar bisa sekolah lagi. / **Pak Misran:** Aamiin. Jangan putus harapan, Cup.

---

### 4.2 Beras Abah Karta

- **Syarat muncul:** Level ≥ 1 · Hari ≥ 1
#### Tahap 1 - Sawah · Abah Karta (pukul 07.00-17.00)

  **Abah Karta:** Aduh, Pak Misran... pusing saya. Panen tahun ini bagus, berasnya banyak.
  **Pak Misran:** Lho, panen bagus kok malah pusing, Abah?
  **Abah Karta:** Tengkulak cuma mau beli murah sekali, Pak. Saya mau jual sendiri, tapi nggak ada tempatnya.
  **Abah Karta:** Kata orang, kalau mau titip jual di warung kampung harus ada surat keterangan dari Pak RT. Saya sungkan ke sana, nggak pandai ngomong.

**Pertanyaan:**

  **Pak Misran:** (Bantu Abah Karta mengurus surat ke Pak RT?)
**Pilihan jawaban:**

1. **"Bantu, biar saya temui Pak RT"**

  **Pak Misran:** Tenang, Abah. Biar saya yang bicara ke Pak RT. Biasanya beliau ada di pos ronda.
  **Abah Karta:** Alhamdulillah... Hatur nuhun, Pak Misran!
  *Temui Pak RT di depan pos ronda (area Rumah Warga), lalu kembali ke Abah Karta.*

2. **"Maaf, saya sedang sibuk"**

  **Pak Misran:** Maaf, Abah, warung saya lagi repot. Coba minta tolong orang lain dulu, ya.
  **Abah Karta:** Oh... iya, Pak. Nggak apa-apa.

3. **"Nanti saja"**

  **Pak Misran:** Nanti saya pikirkan dulu ya, Abah.
  **Abah Karta:** Mangga, Pak. Saya di sawah sampai sore.

#### Tahap 2 - Rumah Warga · Pak RT (pukul 07.00-21.00)

  **Pak RT:** Eh, Pak Misran. Tumben mampir ke pos ronda. Ada perlu apa?
  **Pak Misran:** Begini, Pak RT. Abah Karta mau titip jual beras hasil panennya di warung saya.
  **Pak RT:** Oh, boleh-boleh saja, Pak.

**Pertanyaan:**

  **Pak RT:** Sebelumnya saya ingin bertanya, beras titipan itu harusnya dijual dengan cara apa?
**Pilihan jawaban:**

1. **"Dicampur beras murah biar untung banyak"**

  **Pak RT:** Waduh, itu namanya curang, Pak Misran. Coba dipikir lagi.

2. **"Ditimbang pas dan harganya wajar"**

  **Pak RT:** Nah, betul! Timbangannya jujur, harganya wajar. Warga senang, Abah Karta juga untung.
  **Pak RT:** Ini surat keterangannya, Pak. Sampaikan salam saya ke Abah Karta.
  *Kembali ke sawah dan temui Abah Karta.*

3. **"Dijual semahal mungkin"**

  **Pak RT:** Kalau kemahalan, kasihan warga, Pak. Coba dipikir lagi.

#### Tahap 3 - Sawah · Abah Karta (pukul 07.00-17.00)

  **Pak Misran:** Abah, ini surat dari Pak RT. Beras Abah boleh dijual di warung saya.
  **Abah Karta:** Masyaallah! Terima kasih, Pak Misran. Mulai besok beras saya antar ke warung, harganya bersahabat.
  **Abah Karta:** Lima karung pertama gratis buat Bapak. Anggap saja tanda terima kasih.

*(tahap ini otomatis dianggap membantu)*

**HASIL - BANTU:**

- Reputasi: +3
- Barang baru terbuka: beras

  **Pop-up "Barang Baru Terbuka!"**

  Abah Karta menitipkan beras hasil panennya di warung.

  - Beras 1 kg sekarang bisa dijual
  - Bonus stok beras dari Abah Karta
  - +3 ulasan bintang 5 dari warga

**HASIL - TOLAK:**

- Reputasi: -4

  **Pop-up "Abah Karta Kecewa"**

  Pak Misran tidak membantu Abah Karta.

  - Reputasi -4
  - Beras belum bisa dijual di warung

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak Misran! Beras saya laku keras di warung Bapak. Alhamdulillah. / **Pak Misran:** Alhamdulillah, Abah. Berasnya memang pulen.
- **Warga:** Kemarin Pak RT nanya, beras saya masih ada? Katanya enak. / **Pak Misran:** Wah, mantap, Abah. Nanti saya siapkan buat beliau.

*Cabang menolak:*

- **Warga:** Pak... saya akhirnya jual ke tengkulak. Ya sudah, rezekinya segitu. / **Pak Misran:** Semoga panen berikutnya lebih baik, Abah.

---

### 4.3 Persiapan Pengajian

- **Syarat muncul:** Level ≥ 2 · Hari ≥ 2
#### Tahap 1 - Masjid · Haji Doni (pukul 07.00-17.00)

  **Haji Doni:** Assalamualaikum, Pak Misran. Kebetulan sekali Bapak lewat.
  **Pak Misran:** Waalaikumsalam, Haji Doni. Kelihatannya sibuk sekali?
  **Haji Doni:** Sebentar lagi ada pengajian akbar, ustadznya datang dari Cianjur kota. Tempat wudhunya belum disikat, karpet juga belum digelar.
  **Haji Doni:** Anak-anak remaja masjid lagi ikut lomba ke kecamatan. Saya sendirian, encok saya kambuh pula.

**Pertanyaan:**

  **Haji Doni:** Bapak bisa bantu sebentar? Kira-kira satu jam.
**Pilihan jawaban:**

1. **"Bantu Haji Doni (1 jam)"**

  **Pak Misran:** Tentu, Haji Doni. Bapak duduk saja, biar saya yang kerjakan.

2. **"Maaf, saya sedang ada perlu"**

  **Pak Misran:** Aduh, maaf, Haji Doni. Saya sedang ada perlu.
  **Haji Doni:** Tidak apa-apa, Pak Misran. Semoga dagangannya laris. Nanti datang ke pengajian, ya.

3. **"Nanti saja"**

  **Pak Misran:** Nanti saya ke sini lagi ya, Haji Doni.
  **Haji Doni:** Baik, saya di sini sampai sore.

**HASIL - BANTU:**

- Reputasi: +3
- Barang baru terbuka: sayur

  **Pop-up "Barang Baru Terbuka!"**

  Kebun Bu Haji menitipkan hasil panennya di warung.

  - Sayuran (cabai, bawang, tomat) sekarang bisa dijual
  - Bonus stok sayuran
  - +3 ulasan bintang 5 dari warga

**HASIL - TOLAK:**


  **Pop-up "Lain Kali, Ya"**

  Haji Doni memaklumi, Pak Misran sedang sibuk.

  - Tidak ada perubahan

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak Misran, jamaah memuji tempat wudhunya bersih sekali. Terima kasih, ya. / **Pak Misran:** Sama-sama, Haji Doni. Senang bisa membantu.
- **Warga:** Sayuran dari kebun istri saya laku di warung Bapak? Alhamdulillah. / **Pak Misran:** Laku, Haji Doni. Ibu-ibu senang, masih segar katanya.

*Cabang menolak:*

- **Warga:** Pengajian kemarin alhamdulillah lancar. Lain kali ikut, ya, Pak Misran. / **Pak Misran:** Insyaallah, Haji Doni.
- **Warga:** Jangan lupa sholat berjamaah, Pak Misran. Warung boleh ramai, masjid juga harus ramai. / **Pak Misran:** Siap, Haji Doni. Insyaallah.

---

### 4.4 Surat untuk Emak

- **Syarat muncul:** Level ≥ 2 · Hari ≥ 2
#### Tahap 1 - Pesantren · Kang Hasan (pukul 15.00-21.00)

  *Kang Hasan berdiri sendirian di halaman pesantren, menggenggam selembar surat yang sudah lusuh.*
  **Pak Misran:** Assalamualaikum, Kang Hasan. Kok melamun sendirian?
  **Kang Hasan:** Waalaikumsalam, Pak Misran. Ini... surat terakhir dari Emak saya.
  **Kang Hasan:** Emak meninggal tahun lalu, Pak. Waktu itu saya nggak bisa pulang, nggak ada ongkos. Saya cuma bisa mendoakan dari sini.
  **Kang Hasan:** Di surat ini Emak minta saya jadi hafiz. Tinggal lima juz lagi... tapi akhir-akhir ini hafalan saya sering hilang.
  **Kang Hasan:** Kang Fadil, sahabat saya dari kecil, sudah dua hari demam. Saya yang merawat, tapi uang kiriman bulan ini sudah habis buat beras pondok.

**Pertanyaan:**

  **Pak Misran:** (Apa yang dilakukan Pak Misran?)
**Pilihan jawaban:**

1. **"Bawakan obat & temani mereka (Rp20.000)"**

  **Pak Misran:** Tunggu sebentar ya, Kang. Bapak ambilkan obat di warung.

2. **"Doakan, lalu pamit"**

  **Pak Misran:** Sabar ya, Kang. Bapak doakan Kang Fadil cepat sembuh dan hafalanmu lancar.
  **Kang Hasan:** Aamiin. Terima kasih, Pak Misran.

3. **"Nanti saja"**

  **Pak Misran:** Kang, Bapak ke warung dulu sebentar, ya.
  **Kang Hasan:** Iya, Pak. Saya di sini sampai Isya.

**HASIL - BANTU:**

- Reputasi: +3
- Barang baru terbuka: obat
- Pelanggan: Kang Fadil 1,5x lebih sering, Kang Hasan 1,5x lebih sering

  **Pop-up "Hati yang Tersentuh"**

  Ustadz pesantren mendengar kebaikan Pak Misran dan memintanya menyediakan obat warung untuk para santri.

  - Obat warung sekarang bisa dijual
  - Santri lebih sering belanja di warung
  - +3 ulasan bintang 5 dari warga

**HASIL - TOLAK:**


  **Pop-up "Cerita Selesai"**

  Pak Misran mendoakan Kang Hasan dan Kang Fadil.

  - Tidak ada perubahan

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak Misran! Alhamdulillah hafalan saya sudah nambah dua juz. / **Pak Misran:** Masyaallah, Kang Hasan. Emakmu pasti tersenyum di sana.
- **Warga:** Pak, nanti kalau saya khatam, Bapak datang ke wisudanya, ya. Bapak kan sudah seperti orang tua saya. / **Pak Misran:** Insyaallah, Kang. Bapak pasti datang.
- **Warga:** Pak, saya sudah sehat. Obat dari Bapak manjur sekali. / **Pak Misran:** Alhamdulillah, Kang Fadil. Jaga kesehatan, ya.

*Cabang menolak:*

- **Warga:** Pak, Kang Fadil sudah sembuh. Kemarin dibantu ustadz. / **Pak Misran:** Alhamdulillah. Maaf ya, Kang, kemarin Bapak belum bisa banyak membantu.

---

### 4.5 Layangan Dimas

- **Syarat muncul:** Level ≥ 1 · Hari ≥ 3 · **JANJI** (hanya hari libur warung)
#### Tahap 1 - Sawah · Dimas (pukul 14.00-18.00)

  *Dimas berdiri di pematang sawah sambil menatap ke atas pohon kelapa. Benang layangan menjuntai dari pelepahnya.*
  **Pak Misran:** Lho, Dimas? Kok bengong di sini?
  **Dimas:** Layangan saya nyangkut, Pak Misran... Ini layangan buatan almarhum Kakek. Satu-satunya yang masih ada.
  **Dimas:** Saya sudah coba lempar pakai sandal, malah sandalnya ikut nyangkut. Hehe...
  **Dimas:** Sebentar lagi ada lomba layangan di lapangan SD. Kalau layangannya rusak, saya nggak bisa ikut.

**Pertanyaan:**

  **Pak Misran:** (Bantu ambilkan layangan Dimas?)
**Pilihan jawaban:**

1. **"Ambilkan pakai galah bambu (30 menit)"**

  **Pak Misran:** Sabar, Dim. Di saung biasanya ada galah bambu. Bapak coba, ya.

2. **"Jangan dipanjat, berbahaya"**

  **Pak Misran:** Dim, pohonnya tinggi, jangan dipanjat, ya. Bahaya. Minta tolong Abah Karta nanti sore saja.
  **Dimas:** Iya, Pak... (menunduk)

3. **"Nanti saja"**

  **Pak Misran:** Bapak ke warung dulu, ya. Nanti Bapak lewat sini lagi.
  **Dimas:** Iya, Pak. Saya tunggu di sini.

**HASIL - BANTU:**

- Reputasi: +2
- Pelanggan: Dimas 1,5x lebih sering, Neng Shinta 1,3x lebih sering

  **Pop-up "Layangan Kembali Terbang"**

  Beberapa hari kemudian layangan Dimas juara dua di lomba. Anak-anak sekolah ramai membicarakan Pak Misran.

  - Pelajar lebih sering jajan di warung
  - +2 ulasan bintang 5 dari warga

**HASIL - TOLAK:**


  **Pop-up "Cerita Selesai"**

  Pak Misran mengingatkan Dimas supaya berhati-hati.

  - Tidak ada perubahan

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak Misran! Layangan Kakek juara dua, lho. Pialanya saya taruh di samping foto Kakek. / **Pak Misran:** Masyaallah, hebat, Dim. Kakekmu pasti bangga.
- **Warga:** Pak, ajarin bikin layangan dong. Kata Ibu, dulu Bapak jago main layangan. / **Pak Misran:** Wah, itu sudah lama sekali. Boleh, nanti hari Minggu.

*Cabang menolak:*

- **Warga:** Pak, layangan saya akhirnya diambilkan Abah Karta. Sobek sedikit, tapi masih bisa terbang. / **Pak Misran:** Syukurlah, Dim. Hati-hati mainnya, ya.

---

### 4.6 Si Neo Hilang

- **Syarat muncul:** Level ≥ 1 · Hari ≥ 4
#### Tahap 1 - Rumah Warga · Mba Giska (pukul 08.00-18.00)

  **Mba Giska:** Pak Misran, ya? Maaf ganggu, Pak... lihat kucing putih krem nggak? Bulunya lebat, namanya Neo.
  **Mba Giska:** Saya bawa dia dari kota waktu pindah ke Cianjur. Di kota dia nggak pernah keluar rumah, jadi belum kenal jalan di kampung.
  **Mba Giska:** Sudah dua hari nggak pulang. Saya juga belum kenal banyak orang di sini, bingung mau nanya ke siapa.
  **Pak Misran:** Waduh, kasihan. Terakhir dilihat di mana, Mba?
  **Mba Giska:** Kata tetangga sebelah, Neo suka main ke arah masjid. Mungkin dikasih makan sama jamaah.

**Pertanyaan:**

  **Pak Misran:** (Bantu mencari si Neo?)
**Pilihan jawaban:**

1. **"Saya bantu cari di sekitar masjid"**

  **Pak Misran:** Biar saya cari, Mba. Kebetulan saya sering lewat masjid.
  **Mba Giska:** Beneran, Pak? Makasih banyak, Pak Misran!
  *Cari si Neo di area Masjid. Tanyakan pada Mang Ujang yang sedang bekerja di sana.*

2. **"Maaf, saya sedang sibuk"**

  **Pak Misran:** Maaf, Mba, saya sedang sibuk. Coba diumumkan di grup RT, ya. Warga sini baik-baik, pasti ada yang bantu.
  **Mba Giska:** Iya, Pak... nanti saya coba.

3. **"Nanti saja"**

  **Pak Misran:** Nanti kalau lewat masjid saya lihat-lihat, ya, Mba.
  **Mba Giska:** Iya, Pak. Saya di sini terus nungguin Neo.

#### Tahap 2 - Masjid · Mang Ujang (pukul 07.00-18.00)

  **Pak Misran:** Mang Ujang, lihat kucing putih krem yang bulunya lebat, nggak?
  **Mang Ujang:** Oh, kucing putih yang bulunya lebat itu? Ada, Pak! Dari kemarin ngumpet di dekat sini, nggak mau pergi.
  **Mang Ujang:** Kakinya kayaknya keseleo. Sudah saya kasih ikan asin sedikit, kasihan. Itu dia, Pak, di dekat bedug!
  *Cari si Neo di dekat bedug masjid (ada tanda merah di atasnya).*

*(tahap ini otomatis lanjut ke tahap berikutnya)*

#### Tahap 3 - Masjid · Si Neo (pukul 07.00-18.00)

  *Si Neo meringkuk, kaki depannya diangkat sedikit. Ia mengeong pelan melihat Pak Misran.*

**Pertanyaan:**

  **Pak Misran:** (Apa yang dilakukan Pak Misran?)
**Pilihan jawaban:**

1. **"Bawa Neo pelan-pelan dan antar pulang"**

  *Pak Misran berjongkok dan mengelus kepalanya. Si Neo mengeong pelan, lalu mau digendong.*
  **Pak Misran:** Ayo pulang, Neo. Mba Giska sudah nungguin kamu.
  *Antar si Neo ke Mba Giska di area Rumah Warga.*

2. **"Tarik ekornya biar cepat ikut"**

  *Si Neo mendesis dan mundur. Kakinya sedang sakit, jangan dipaksa.*

#### Tahap 4 - Rumah Warga · Mba Giska (pukul 07.00-21.00)

  **Mba Giska:** NEO! Ya ampun, Neo! (memeluk kucingnya)
  **Pak Misran:** Ketemu di masjid, Mba. Kakinya keseleo sedikit, dikompres air hangat saja.
  **Mba Giska:** Di kota, tetangga sebelah saja nggak saling kenal, Pak. Di sini saya belum lama, tapi sudah ditolong begini...
  **Mba Giska:** Makasih banyak, Pak Misran. Mulai sekarang saya belanja di warung Bapak terus, ya!

*(tahap ini otomatis dianggap membantu)*

**HASIL - BANTU:**

- Reputasi: +2
- Barang baru terbuka: makanan kucing
- Pelanggan: Mba Giska 1,6x lebih sering

  **Pop-up "Si Neo Pulang!"**

  Mba Giska bercerita di grup RT bahwa Pak Misran menemukan kucingnya. Warga baru dari kota itu jadi langganan setia warungmu.

  - Makanan kucing sekarang bisa dijual (Mba Giska yang menyarankan)
  - Mba Giska lebih sering belanja di warung
  - +2 ulasan bintang 5 dari warga

**HASIL - TOLAK:**


  **Pop-up "Cerita Selesai"**

  Mba Giska mengumumkan kucingnya yang hilang di grup RT.

  - Tidak ada perubahan

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak Misran, si Neo sudah lincah lagi. Sekarang dia suka tidur di depan pintu, nungguin saya pulang kerja. / **Pak Misran:** Alhamdulillah, Mba. Jangan sampai main jauh-jauh lagi, ya.
- **Warga:** Pak, ikan asin di warung masih ada? Buat Neo, katanya sudah ketagihan gara-gara Mang Ujang. / **Pak Misran:** Hehe, nanti saya tanyakan ke supplier, Mba.
- **Warga:** Ternyata tinggal di kampung enak juga, Pak. Pagi-pagi udaranya segar, nggak kayak di kota. / **Pak Misran:** Betah-betah di sini, Mba Giska.
- **Warga:** Pak, kucing putih kemarin sudah pulang, ya? Bedugnya jadi sepi, hehe. / **Pak Misran:** Sudah, Mang. Makasih sudah dikasih makan.

*Cabang menolak:*

- **Warga:** Pak, si Neo akhirnya pulang sendiri, kakinya pincang. Alhamdulillah masih ketemu. / **Pak Misran:** Syukurlah, Mba. Maaf kemarin saya belum sempat bantu.

---

### 4.7 Hadiah Lomba HUT Sekolah

- **Syarat muncul:** Level ≥ 3 · Hari ≥ 3 · HARI SEKOLAH (bukan Minggu) · **JANJI** (hanya hari libur warung)
#### Tahap 1 - SD · Neng Shinta (pukul 13.00-17.00)

  **Neng Shinta:** Pak Misran! Kebetulan banget. Saya Shinta, yang suka beli pulsa di warung Bapak.
  **Pak Misran:** Oh, Neng Shinta. Lagi apa di SD? Bukannya sudah SMP?
  **Neng Shinta:** Hehe, saya alumni sini, Pak. Sekarang bantu Bu Guru jadi panitia lomba HUT sekolah buat adik-adik SD.
  **Neng Shinta:** Lombanya sudah siap semua: balap karung, makan kerupuk, tarik tambang. Tapi hadiahnya belum ada, uang kas sekolah nggak cukup.
  **Neng Shinta:** Kalau warung Bapak mau jadi sponsor, nanti nama warungnya kami tulis besar-besar di spanduk lomba, lho!

**Pertanyaan:**

  **Pak Misran:** (Hadiah lomba untuk adik-adik SD kira-kira Rp100.000. Jadi sponsor?)
**Pilihan jawaban:**

1. **"Jadi sponsor lomba (Rp100.000)"**

  **Pak Misran:** Boleh, Neng. Belikan buku tulis, pensil, sama piala kecil buat juaranya. Yang kalah juga kasih permen, ya.
  **Neng Shinta:** Yeay! Makasih, Pak Misran! Adik-adik pasti senang banget.
  *Neng Shinta bergegas memberi kabar ke Bu Guru. Nama warung Pak Misran akan dipasang di spanduk lomba.*

2. **"Maaf, belum bisa membantu"**

  **Pak Misran:** Maaf, Neng. Uang warung lagi dipakai buat kuliah Agus.
  **Neng Shinta:** Nggak apa-apa, Pak. Nanti saya coba tanya ke toko yang lain.

3. **"Nanti saja"**

  **Pak Misran:** Bapak pikirkan dulu ya, Neng.
  **Neng Shinta:** Iya, Pak. Saya di sini tiap pulang sekolah sampai sore.

**HASIL - BANTU:**

- Reputasi: +3
- Pelanggan: Ucup 1,3x lebih sering, Neng Shinta 1,4x lebih sering, Dimas 1,2x lebih sering

  **Pop-up "Warung Jadi Sponsor!"**

  Nama warung Pak Misran terpampang di spanduk lomba HUT SD. Anak-anak dan orang tua makin kenal warungmu.

  - Anak sekolah lebih sering mampir ke warung
  - +3 ulasan bintang 5 dari warga

**HASIL - TOLAK:**


  **Pop-up "Cerita Selesai"**

  Neng Shinta mencari sponsor di tempat lain. Lombanya tetap jalan, hadiahnya patungan para guru.

  - Tidak ada perubahan

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak, adik-adik SD masih ngomongin hadiah lomba kemarin. Bukunya dipakai buat sekolah, katanya! / **Pak Misran:** Alhamdulillah, Neng. Bapak ikut senang.
- **Warga:** Bu Guru titip salam, Pak. Katanya tahun depan minta tolong jadi sponsor lagi, hehe. / **Pak Misran:** Insyaallah, Neng. Kalau rezekinya ada.
- **Warga:** Pak Misran! Aku menang balap karung, hadiahnya buku tulis dari warung Bapak! / **Pak Misran:** Wah, hebat! Dipakai buat belajar, ya.

*Cabang menolak:*

- **Warga:** Lombanya jadi juga, Pak. Hadiahnya patungan guru-guru. / **Pak Misran:** Syukurlah, Neng.

---

### 4.8 Kasbon Bu Ida

- **Syarat muncul:** Level ≥ 4 · Hari ≥ 6 · **JANJI** (hanya hari libur warung)
#### Tahap 1 - Pasar · Bu Ida (pukul 08.00-19.00, selama pasar buka)

  *Bu Ida duduk di lapaknya. Keranjang buahnya masih setengah penuh.*
  **Bu Ida:** Eh, Pak Misran... Pasar lagi sepi, Pak. Buah saya banyak yang nggak laku.
  **Bu Ida:** Padi suami saya juga kena wereng. Separuh sawah gagal panen.
  **Pak Misran:** Innalillahi... Sabar ya, Bu Ida.
  **Bu Ida:** Beras di rumah tinggal sedikit, anak-anak juga mau ujian. Suami saya malu mau ngutang ke warung.
  **Bu Ida:** Pak... boleh saya kasbon dulu? Beras, telur, sama minyak, kira-kira Rp60.000. Nanti saya lunasi kalau dagangan di pasar sudah ramai lagi.

**Pertanyaan:**

  **Pak Misran:** (Berikan kasbon kebutuhan dapur Rp60.000 untuk Bu Ida?)
**Pilihan jawaban:**

1. **"Berikan kasbon (Rp60.000)"**

  **Pak Misran:** Ambil saja di warung, Bu. Bayarnya nanti kalau sudah ada, saya catat di Buku Hutang.
  **Bu Ida:** Ya Allah... hatur nuhun pisan, Pak Misran. Saya nggak akan lupa.
  *Bu Ida bercerita ke ibu-ibu pengajian tentang kebaikan Pak Misran. Kasbonnya dicatat di Buku Hutang.*

2. **"Maaf, warung belum bisa kasbon"**

  **Pak Misran:** Maaf, Bu. Warung saya juga lagi pas-pasan, belum bisa kasbon.
  **Bu Ida:** Iya, Pak, saya ngerti... Nanti saya coba tanya ke saudara.

3. **"Nanti saja"**

  **Pak Misran:** Saya hitung uang warung dulu ya, Bu. Nanti saya ke sini lagi.
  **Bu Ida:** Iya, Pak. Saya di lapak sampai pasar tutup, jam sembilan malam.

**HASIL - BANTU:**

- Reputasi: +3
- Pelanggan: Bu Ida 1,4x lebih sering, Abah Karta 1,2x lebih sering
- Utang: Bu Ida Rp60.000 (dikembalikan 14 hari lagi)

  **Pop-up "Kasbon yang Berkah"**

  Kabar kebaikan Pak Misran menyebar dari mulut ke mulut. Ibu-ibu dan petani makin percaya pada warungmu.

  - Kasbon Rp60.000 dicatat di Buku Hutang (dilunasi 14 hari lagi)
  - Ibu-ibu dan petani lebih sering belanja di warung
  - +3 ulasan bintang 5 dari warga

**HASIL - TOLAK:**


  **Pop-up "Cerita Selesai"**

  Bu Ida meminjam beras dari saudaranya.

  - Tidak ada perubahan

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak Misran, suami saya sudah dapat kerja borongan. Alhamdulillah, kasbonnya sudah lunas, ya, Pak. / **Pak Misran:** Alhamdulillah, Bu. Semoga panen berikutnya bagus.
- **Warga:** Anak-anak saya lulus ujian semua, Pak. Hatur nuhun, berkat beras dari warung Bapak. / **Pak Misran:** Masyaallah, ikut senang, Bu Ida.

*Cabang menolak:*

- **Warga:** Panen kemarin memang berat, Pak. Tapi alhamdulillah ada saudara yang bantu. / **Pak Misran:** Syukurlah, Bu. Semoga panen berikutnya lebih baik.

---

### 4.9 Surat dari Cucu

- **Syarat muncul:** Level ≥ 2 · Hari ≥ 5 · **JANJI** (hanya hari libur warung)
#### Tahap 1 - Rumah Warga · Nenek Sumi (pukul 09.00-17.00)

  *Nenek Sumi berdiri di depan rumahnya, memegang amplop putih dekat sekali ke wajahnya.*
  **Nenek Sumi:** Nak Misran... sini sebentar. Ini surat dari cucu Nenek, si Rara, yang kuliah di Jakarta.
  **Nenek Sumi:** Mata Nenek sudah rabun, tulisannya kecil-kecil. Ucup lagi nggak di rumah, padahal Nenek sudah nggak sabar pengin tahu isinya.

**Pertanyaan:**

  **Pak Misran:** (Bacakan surat untuk Nenek Sumi?)
**Pilihan jawaban:**

1. **"Bacakan suratnya"**

  **Pak Misran:** Boleh, Nek. Sini saya bacakan pelan-pelan.
  *"Assalamualaikum, Nenek sayang. Rara sehat di Jakarta. Kuliah keperawatan Rara lancar, nilai Rara bagus semua."*
  *"Rara kangen rengginang buatan Nenek. Kangen dipijitin Nenek sebelum tidur. Tunggu Rara pulang Lebaran nanti, ya, Nek."*
  *"Kalau Rara sudah jadi perawat, Rara yang gantian merawat Nenek. Nenek jangan capek-capek, ya."*
  **Nenek Sumi:** (terisak) Cucu Nenek... sudah besar, ya. Dulu masih Nenek gendong ke sawah.
  **Nenek Sumi:** Nak Misran... Nenek pengin dengar suaranya. Sudah setahun Nenek nggak dengar suara Rara.

2. **"Nanti saja, Nek"**

  **Pak Misran:** Nanti saya mampir lagi ya, Nek. Saya ke warung dulu.
  **Nenek Sumi:** Iya, Nak. Nenek di sini saja.

#### Tahap 2 - Rumah Warga · Nenek Sumi (pukul 07.00-21.00)

  **Pak Misran:** Nek, di surat ada nomor HP Rara. Bagaimana kalau kita telepon pakai HP saya? Bisa lihat wajahnya juga.
  **Nenek Sumi:** Bisa begitu, Nak? Nenek nggak ngerti HP...

**Pertanyaan:**

  **Pak Misran:** (Video call Rara dari HP Pak Misran?)
**Pilihan jawaban:**

1. **"Video call Rara (pulsa Rp5.000)"**

  *Tut... tut... Wajah seorang gadis berjilbab biru muncul di layar HP.*
  *"Nenek?! Ya Allah, Nenek! Rara kangen banget, Nek!"*
  **Nenek Sumi:** Raraaa... cucu Nenek. Kamu kurusan, Nak. Makan yang banyak, ya...
  *Nenek Sumi dan Rara mengobrol lama sekali. Pak Misran memegangi HP sambil tersenyum.*
  **Nenek Sumi:** Nak Misran, terima kasih. Hari ini Nenek bahagia sekali. Nanti Nenek bikinkan rengginang buat warungmu.

2. **"Ajak Nenek menulis surat balasan"**

  **Pak Misran:** Kalau begitu kita tulis surat balasan saja, Nek. Nenek yang bicara, saya yang menulis.
  **Nenek Sumi:** Iya, Nak. Bilang ke Rara, Nenek sehat, Nenek bangga...

**HASIL - BANTU:**

- Reputasi: +3
- Barang baru terbuka: rengginang
- Pelanggan: Nenek Sumi 1,5x lebih sering

  **Pop-up "Rindu yang Terobati"**

  Nenek Sumi bercerita ke seluruh kampung tentang video call dengan cucunya. Warga makin sayang pada Pak Misran.

  - Rengginang buatan Nenek Sumi dititipkan di warung
  - Nenek Sumi lebih sering mampir ke warung
  - +3 ulasan bintang 5 dari warga

**HASIL - TOLAK:**

- Reputasi: +1

  **Pop-up "Surat Balasan"**

  Surat balasan Nenek Sumi dikirim lewat kantor pos. Seminggu kemudian Rara membalas lagi.

  - +1 ulasan bintang 5 dari warga

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Nak Misran, kemarin Rara telepon lagi lewat HP tetangga. Katanya salam buat Pak Misran. / **Pak Misran:** Waalaikumsalam. Alhamdulillah, Nek.
- **Warga:** Rengginangnya sudah Nenek jemur. Nanti Nenek titip di warung, ya. / **Pak Misran:** Siap, Nek. Pasti laris.

*Cabang menolak:*

- **Warga:** Rara sudah balas surat Nenek, Nak. Nanti tolong bacakan lagi, ya. / **Pak Misran:** Tentu, Nek. Kapan saja.

---

### 4.10 Program Bantuan Warung

- **Syarat muncul:** Level ≥ 6 · Hari ≥ 10 · **JANJI** (hanya hari libur warung)
#### Tahap 1 - Warung · Mas Fariz (pukul 10.00-16.00)

  *Seorang pemuda berkaus hitam dan bercelana pendek menghampiri Pak Misran di depan warung. Senyumnya ramah, ponselnya tidak lepas dari tangan.*
  **Mas Fariz:** Assalamualaikum, Pak. Dengan Pak Misran, pemilik warung ini? Perkenalkan, saya Fariz dari Bandung, petugas lapangan Program Warung Mitra Sejahtera.
  **Mas Fariz:** Ini program bantuan untuk warung kecil dari distributor minuman, kerja sama dengan kecamatan. Warung yang terpilih dapat dana bantuan Rp1.000.000, plus spanduk gratis.
  **Pak Misran:** Satu juta? Kok bisa warung saya yang terpilih, Mas?
  **Mas Fariz:** Datanya dari pendataan UMKM bulan lalu, Pak. Ini kartu petugas saya, ini surat tugasnya, ada cap kecamatan.
  *Mas Fariz memperlihatkan kartu identitas berfoto dan surat berkop lengkap dengan stempel biru. Di ponselnya ada foto-foto pemilik warung lain tersenyum memegang uang dan spanduk.*
  **Mas Fariz:** Warung di kampung sebelah sudah cair kemarin, Pak. Pak RT di sini juga sudah saya kabari kok.
  **Mas Fariz:** Syaratnya cuma satu: ambil paket produk mitra dulu Rp150.000. Isinya minuman yang nanti bisa Bapak jual lagi, jadi uangnya nggak hilang, malah balik jadi dagangan.
  **Mas Fariz:** Begitu paketnya dibayar, dana Rp1.000.000 langsung saya ajukan. Sore ini sudah masuk. Tapi kuotanya tinggal dua warung, hari ini terakhir, Pak.

**Pertanyaan:**

  **Pak Misran:** (Bayar paket Rp150.000 ke Mas Fariz supaya dapat bantuan Rp1.000.000?)
**Pilihan jawaban:**

1. **"Ikut program (bayar Rp150.000)"**

  **Pak Misran:** Ya sudah, Mas. Ini Rp150.000. Rezeki jangan ditolak.
  **Mas Fariz:** Siap, Pak! Paketnya diantar kurir besok pagi, dananya cair sore ini. Selamat ya, Pak Misran!
  *Mas Fariz mencatat sesuatu di ponselnya, berpamitan, lalu bergegas berjalan ke arah rumah warga.*

2. **"Uang saya kurang, Mas (bayar Rp100.000)"**

  **Pak Misran:** Mas, uang di laci saya nggak sampai Rp150.000. Gimana, ya?
  **Mas Fariz:** Waduh, Pak... Ya sudah, khusus Bapak Rp100.000 saja. Sisanya nanti dipotong dari dana bantuannya.
  **Mas Fariz:** Yang penting Bapak terdaftar hari ini. Sayang sekali kalau kuotanya lewat, Pak. Rp1.000.000 lho.
  **Pak Misran:** Ya sudah, Mas. Ini Rp100.000.
  *Mas Fariz cepat-cepat memasukkan uangnya ke saku, berpamitan, lalu bergegas berjalan ke arah rumah warga.*

3. **"Tanya Pak RT dulu"**

  **Pak Misran:** Sebentar ya, Mas. Saya telepon Pak RT dulu.
  **Mas Fariz:** Eh... nggak usah repot, Pak. Nanti kuotanya keburu habis, lho.
  *Mas Fariz mendadak gelisah. Sebelum telepon tersambung, ia pamit buru-buru, katanya ada janji di kampung lain.*

4. **"Nanti saja"**

  **Pak Misran:** Saya pikir-pikir dulu ya, Mas.
  **Mas Fariz:** Jangan kelamaan, Pak. Kuotanya hari ini saja. Saya masih di sekitar sini sampai sore.

#### Tahap 2 - Rumah Warga · Pak RT (pukul 16.00-22.00)

  *Uang yang dijanjikan tidak pernah masuk. Nomor Mas Fariz juga sudah tidak aktif.*
  **Pak RT:** Pak Misran! Ada pemuda dari kota ngaku petugas program bantuan warung, ya?
  **Pak Misran:** Iya, Pak RT. Saya sudah bayar paketnya. Katanya dananya langsung cair...
  **Pak RT:** Astagfirullah... Itu penipu, Pak. Nggak ada program begitu. Suratnya palsu, stempelnya palsu. Warung di kampung sebelah juga kena.
  **Pak Misran:** Ya Allah... Kok saya bisa percaya, ya.
  **Pak RT:** Orangnya pintar ngomong, Pak. Ingat: bantuan resmi nggak pernah minta kita bayar duluan. Saya kabari grup biar warga lain hati-hati.

**Pertanyaan:**

  **Pak Misran:** (Uang yang sudah dibayar tidak bisa kembali.)
**Pilihan jawaban:**

1. **"Ikhlaskan, jadikan pelajaran"**

  **Pak Misran:** Jadi pelajaran buat saya, Pak RT. Tolong dikabari ke warga, ya.
  **Pak RT:** Pasti, Pak. Yang sabar, ya.

**HASIL - BANTU:**

- Reputasi: +2
- Pesan WA: Pak RT: "Warga, hati-hati! Ada pemuda ngaku petugas "Program Warung Mitra Sejahtera", minta bayar Rp150.000 dulu supaya dapat bantuan Rp1.000.000. Itu PENIPUAN. Alhamdulillah Pak Misran nggak ketipu. Bantuan resmi nggak pernah minta bayar duluan."

  **Pop-up "Lolos dari Penipuan"**

  Untung Pak Misran bertanya ke Pak RT dulu. Mas Fariz ternyata penipu yang mengaku petugas program bantuan.

  - Uang Rp150.000 selamat
  - Pak RT mengingatkan warga di grup
  - +2 ulasan baik dari warga

**HASIL - TOLAK:**

- Pesan WA: Pak RT: "Warga, hati-hati! Ada pemuda ngaku petugas "Program Warung Mitra Sejahtera", minta bayar Rp150.000 dulu supaya dapat bantuan Rp1.000.000. Itu PENIPUAN, sudah ada korban di kampung kita. Bantuan resmi nggak pernah minta bayar duluan."

  **Pop-up "Kena Tipu!"**

  Mas Fariz ternyata penipu. Paket tidak pernah datang dan dana Rp1.000.000 tidak pernah ada.

  - Uang yang dibayar ke Mas Fariz hilang
  - Bantuan resmi tidak pernah minta bayar duluan
  - Kalau ragu, tanya Pak RT dulu

---

### 4.11 Snack Rapat Pak Rudi

- **Syarat muncul:** Level ≥ 5 · Hari ≥ 4 · bukan Ramadan
#### Tahap 1 - Warung · Pak Rudi (pukul 07.00-10.00)

  **Pak Rudi:** Pak Misran! Untung ketemu. Saya lagi pusing, Pak.
  **Pak Misran:** Kenapa, Pak Rudi? Pagi-pagi sudah kusut begitu mukanya.
  **Pak Rudi:** Kantor saya ada rapat besar sama orang dinas. Katering langganan mendadak batal. Butuh 30 kotak snack.
  **Pak Rudi:** Bapak bisa siapkan dari warung? Isinya kue kering dan air mineral. Nanti saya bayar Rp250.000 waktu diantar.
  *Untuk belanja bahan dan kotaknya, Pak Misran harus keluar modal dulu sekitar Rp150.000.*

**Pertanyaan:**

  **Pak Misran:** (Keluar modal Rp150.000 dulu, nanti dibayar Rp250.000. Terima pesanan Pak Rudi?)
**Pilihan jawaban:**

1. **"Sanggup, saya siapkan (modal Rp150.000)"**

  **Pak Misran:** Insyaallah sanggup, Pak Rudi. Saya siapkan sekarang.
  **Pak Rudi:** Alhamdulillah! Antar ke depan masjid, ya, Pak. Saya tunggu di sana.
  *Pak Misran berbelanja dan mengemas 30 kotak snack. Antar ke Pak Rudi di depan masjid.*

2. **"Maaf, modalnya belum ada"**

  **Pak Misran:** Maaf, Pak Rudi. Uang warung lagi pas-pasan, nggak berani keluar modal segitu.
  **Pak Rudi:** Oh, iya, nggak apa-apa, Pak. Saya cari ke toko kue di kota saja.

3. **"Nanti saya kabari"**

  **Pak Rudi:** Jangan lama-lama, Pak. Saya di sini sampai jam sepuluh.

#### Tahap 2 - Masjid · Pak Rudi (pukul 07.00-21.00)

  **Pak Misran:** Pak Rudi, ini 30 kotak snack-nya.
  **Pak Rudi:** Masyaallah, rapi sekali, Pak! Orang dinas pasti senang. Ini Rp250.000, sesuai janji.
  **Pak Rudi:** Nanti kalau kantor ada acara lagi, saya pesan ke Bapak saja. Teman-teman kantor juga saya suruh mampir ke warung.

*(tahap ini otomatis dianggap membantu)*

**HASIL - BANTU:**

- Reputasi: +2
- Uang masuk: Rp250.000
- Keramaian warung: +3%
- Barang baru terbuka: soda
- Pelanggan: Pak Rudi 1,4x lebih sering

  **Pop-up "Pesanan Lunas!"**

  Pak Rudi membayar pesanan snack rapat. Teman-teman kantornya ketagihan soda dingin dari warung, jadi sales minuman mulai menitipkan soda.

  - Soda kaleng sekarang bisa dijual
  - Dibayar Rp250.000 (untung Rp100.000)
  - Warung 3% lebih ramai
  - Pak Rudi lebih sering belanja
  - +2 ulasan bintang 5

**HASIL - TOLAK:**

- Pelanggan: Pak Rudi 0,7x lebih sering

  **Pop-up "Cerita Selesai"**

  Pak Rudi membeli snack di toko kue kota.

  - Pak Rudi agak jarang mampir

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak Misran, orang dinas kemarin nanya snack-nya beli di mana. Saya bilang warung Bapak! / **Pak Misran:** Alhamdulillah, makasih promosinya, Pak Rudi.

*Cabang menolak:*

- **Warga:** Rapat kemarin lancar, Pak. Snack-nya beli di kota, mahal juga ternyata. / **Pak Misran:** Syukurlah lancar, Pak Rudi.

---

### 4.12 Motor Kang Asep Mogok

- **Syarat muncul:** Level ≥ 3 · Hari ≥ 5
#### Tahap 1 - SD · Kang Asep (pukul 15.00-20.00)

  **Kang Asep:** Aduh, aduh... Motor saya mogok lagi, sekarang saya tinggal di bengkel. Rantainya putus, kampas remnya juga habis.
  **Pak Misran:** Kenapa, Kang Asep? Motornya rewel?
  **Kang Asep:** Iya, Pak Misran. Bengkel minta Rp120.000. Saya belum dapat orderan dari pagi.
  **Kang Asep:** Kalau motor nggak jalan, saya nggak bisa narik. Anak istri makan apa nanti...

**Pertanyaan:**

  **Pak Misran:** (Pinjami Kang Asep Rp120.000? Ia berjanji mengembalikan dalam beberapa hari.)
**Pilihan jawaban:**

1. **"Pinjami Rp120.000"**

  **Pak Misran:** Pakai ini dulu, Kang. Benerin motornya, biar bisa narik lagi.
  **Kang Asep:** Ya Allah, Pak Misran... Hatur nuhun pisan! Tiga hari lagi saya kembalikan, saya antar ke warung.
  **Kang Asep:** Penumpang saya nanti saya ajak mampir ke warung Bapak. Janji!
  *Pinjaman Kang Asep dicatat di Buku Hutang.*

2. **"Maaf, belum bisa"**

  **Pak Misran:** Maaf, Kang. Uang saya juga lagi dipakai buat stok warung.
  **Kang Asep:** Iya, Pak, nggak apa-apa... Nanti saya cari pinjaman lain.

3. **"Nanti dulu"**

  **Kang Asep:** Iya, Pak. Saya masih di sini nunggu anak-anak pulang les.

**HASIL - BANTU:**

- Keramaian warung: +2%
- Pelanggan: Kang Asep 1,5x lebih sering
- Utang: Kang Asep Rp120.000 (dikembalikan 3 hari lagi)

  **Pop-up "Kang Asep Narik Lagi"**

  Motor Kang Asep sudah jalan lagi. Ia sering mengajak penumpangnya mampir ke warung.

  - Pinjaman Rp120.000 dicatat di Buku Hutang (dikembalikan 3 hari lagi)
  - Warung 2% lebih ramai
  - Kang Asep lebih sering belanja

**HASIL - TOLAK:**

- Pelanggan: Kang Asep 0,7x lebih sering

  **Pop-up "Cerita Selesai"**

  Kang Asep meminjam uang ke rentenir untuk memperbaiki motornya.

  - Kang Asep agak jarang mampir

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak Misran, motor saya sekarang ngebut! Penumpang saya ajak mampir terus ke warung, hehe. / **Pak Misran:** Alhamdulillah, Kang. Hati-hati bawa motornya.

*Cabang menolak:*

- **Warga:** Bunga pinjaman rentenir itu mencekik, Pak... Ya sudah, dijalani saja. / **Pak Misran:** Yang sabar, Kang. Semoga cepat lunas.

---

### 4.13 Istri Kang Dadan Melahirkan

- **Syarat muncul:** Level ≥ 4 · Hari ≥ 7
#### Tahap 1 - Warung · Kang Dadan (pukul 17.00-21.00)

  **Kang Dadan:** Pak Misran... maaf ganggu. Boleh bicara sebentar?
  **Pak Misran:** Boleh, Kang Dadan. Kok kelihatan gelisah?
  **Kang Dadan:** Istri saya sudah waktunya melahirkan, Pak. Bu bidan minta Rp150.000 dulu, tapi gaji kurir baru cair minggu depan.
  **Kang Dadan:** Saya sudah tanya ke mana-mana, belum ada yang bisa bantu...

**Pertanyaan:**

  **Pak Misran:** (Pinjami Kang Dadan Rp150.000? Ia akan mengembalikannya setelah gajian.)
**Pilihan jawaban:**

1. **"Pinjami Rp150.000"**

  **Pak Misran:** Ini, Kang. Cepat ke bidan, jangan sampai istrimu menunggu.
  **Kang Dadan:** Ya Allah, Pak... Hatur nuhun! Lima hari lagi saya kembalikan.
  **Kang Dadan:** Mulai sekarang belanjaan warung Bapak selalu saya antar paling dulu!
  *Pinjaman Kang Dadan dicatat di Buku Hutang.*

2. **"Maaf, tidak bisa"**

  **Pak Misran:** Maaf, Kang Dadan. Uang saya lagi habis buat sewa kios.
  **Kang Dadan:** Iya, Pak... Saya coba pinjam ke bos saja.

**HASIL - BANTU:**

- Reputasi: +1
- Kurir: 20% lebih cepat datang
- Utang: Kang Dadan Rp150.000 (dikembalikan 5 hari lagi)
- Pesan WA: Kang Dadan: "(pesan suara) Pak Misran, anak saya sudah lahir, laki-laki, sehat. Alhamdulillah. Hatur nuhun pisan bantuannya, Pak."

  **Pop-up "Bayi Kang Dadan Lahir!"**

  Anak Kang Dadan lahir dengan selamat. Kini belanjaan warung Pak Misran selalu diantar paling dulu.

  - Pinjaman Rp150.000 dicatat di Buku Hutang (dikembalikan 5 hari lagi)
  - Kurir belanja 20% lebih cepat datang
  - +1 ulasan bintang 5

**HASIL - TOLAK:**

- Kurir: 15% lebih lambat datang

  **Pop-up "Cerita Selesai"**

  Kang Dadan meminjam uang ke bosnya. Ia jadi sungkan mampir ke warung.

  - Kurir belanja 15% lebih lama datang

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak Misran! Anak saya sudah bisa senyum. Namanya saya kasih Misbah, mirip nama Bapak, hehe. / **Pak Misran:** Masyaallah, semoga jadi anak saleh, Kang.

*Cabang menolak:*

- **Warga:** Anak saya sudah lahir, Pak. Utang ke bos dipotong dari gaji tiap minggu. / **Pak Misran:** Selamat, Kang Dadan. Semoga sehat semua.

---

### 4.14 Perkakas Mang Ujang

- **Syarat muncul:** Level ≥ 4 · Hari ≥ 8
#### Tahap 1 - Masjid · Mang Ujang (pukul 07.00-12.00)

  **Mang Ujang:** Astagfirullah... Semua perkakas saya hilang, Pak Misran. Gergaji, bor, palu, semua diambil maling semalam.
  **Pak Misran:** Ya Allah, Mang Ujang! Terus kerjaannya bagaimana?
  **Mang Ujang:** Besok saya dapat borongan renovasi rumah Pak Kades. Kalau nggak ada alat, borongannya dikasih orang lain.
  **Mang Ujang:** Perkakas bekas di pasar Rp200.000, Pak. Saya nggak pegang uang sama sekali.

**Pertanyaan:**

  **Pak Misran:** (Bantu Mang Ujang Rp200.000? Ia hanya sanggup mengembalikan separuhnya.)
**Pilihan jawaban:**

1. **"Bantu Rp200.000"**

  **Pak Misran:** Ini, Mang. Beli perkakasnya, jangan sampai borongannya lepas.
  **Mang Ujang:** Pak Misran... saya cuma bisa ganti Rp100.000 minggu ini. Sisanya saya bayar pakai tenaga, ya?
  **Pak Misran:** Sudah, nggak usah dipikirkan. Yang penting kerjaannya jalan.
  *Rp100.000 dicatat di Buku Hutang.*

2. **"Maaf, tidak bisa"**

  **Pak Misran:** Maaf, Mang. Saya juga lagi nabung buat Agus.
  **Mang Ujang:** Iya, Pak. Saya pinjam alat ke saudara saja, semoga dikasih.

3. **"Nanti saya pikirkan"**

  **Mang Ujang:** Saya di masjid sampai Zuhur, Pak. Bantu bersih-bersih, daripada nganggur.

**HASIL - BANTU:**

- Reputasi: +3
- Keramaian warung: +2%
- Pelanggan: Mang Ujang 1,5x lebih sering
- Utang: Mang Ujang Rp100.000 (dikembalikan 4 hari lagi)

  **Pop-up "Borongan Selamat"**

  Mang Ujang dapat borongan renovasi. Para kuli bangunannya tiap hari beli kopi dan gorengan di warung.

  - Rp100.000 dikembalikan 4 hari lagi (Buku Hutang)
  - Warung 2% lebih ramai
  - Mang Ujang lebih sering belanja
  - +3 ulasan bintang 5

**HASIL - TOLAK:**

- Pelanggan: Mang Ujang 0,7x lebih sering

  **Pop-up "Cerita Selesai"**

  Mang Ujang kehilangan borongannya.

  - Mang Ujang agak jarang mampir

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Rumah Pak Kades hampir beres, Pak. Kuli-kuli saya betah ngopi di warung Bapak. / **Pak Misran:** Alhamdulillah, Mang. Semoga borongannya nambah terus.

*Cabang menolak:*

- **Warga:** Sekarang saya jadi kuli harian dulu, Pak. Pelan-pelan nabung beli alat. / **Pak Misran:** Semangat, Mang Ujang.

---

### 4.15 Kitab Kang Fadil

- **Syarat muncul:** Level ≥ 2 · Hari ≥ 6
#### Tahap 1 - Pesantren · Kang Fadil (pukul 07.00-12.00)

  **Kang Fadil:** Assalamualaikum, Pak Misran...
  **Pak Misran:** Waalaikumsalam, Kang Fadil. Kok kelihatan bingung?
  **Kang Fadil:** Kitab saya ketumpahan air, Pak. Halamannya sobek dan luntur. Padahal sebentar lagi ujian hafalan, saya harus pakai kitab itu.
  **Kang Fadil:** Kitab baru di toko kitab kota Rp80.000. Kiriman Emak bulan ini sudah habis buat bayar asrama...

**Pertanyaan:**

  **Pak Misran:** (Belikan Kang Fadil kitab baru, Rp80.000?)
**Pilihan jawaban:**

1. **"Belikan kitab (Rp80.000)"**

  **Pak Misran:** Ini, Kang. Beli kitab yang baru. Belajar yang sungguh-sungguh, ya.
  **Kang Fadil:** Jazakallah khair, Pak Misran! Insyaallah saya doakan warung Bapak berkah.
  **Kang Fadil:** Nanti teman-teman asrama saya ajak jajan di warung Bapak.

2. **"Pakai kitab teman dulu, ya"**

  **Pak Misran:** Coba pinjam kitab teman dulu, Kang. Bapak lagi belum ada.
  **Kang Fadil:** Iya, Pak. Nanti saya salin dari kitab Kang Hasan.

3. **"Nanti dulu"**

  **Kang Fadil:** Iya, Pak. Saya di sini sampai Zuhur, murojaah hafalan.

**HASIL - BANTU:**

- Reputasi: +3
- Keramaian warung: +2%
- Pelanggan: Kang Fadil 1,4x lebih sering, Kang Hasan 1,2x lebih sering

  **Pop-up "Lulus Ujian Hafalan"**

  Kang Fadil lulus ujian dengan nilai terbaik. Santri-santri asrama jadi sering jajan di warung.

  - Warung 2% lebih ramai
  - Para santri lebih sering belanja
  - +3 ulasan bintang 5

**HASIL - TOLAK:**

- Pelanggan: Kang Fadil 0,75x lebih sering

  **Pop-up "Cerita Selesai"**

  Kang Fadil menyalin kitab dari temannya semalaman.

  - Kang Fadil agak jarang mampir

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak Misran, alhamdulillah hafalan saya lulus! Kitabnya saya jaga baik-baik. / **Pak Misran:** Masyaallah, selamat, Kang Fadil!

*Cabang menolak:*

- **Warga:** Ujian kemarin lumayan, Pak. Salinan kitab saya tulisannya berantakan, hehe. / **Pak Misran:** Yang penting hafalannya, Kang.

---

### 4.16 Lampu Kedip Zebra Cross

- **Syarat muncul:** Level ≥ 6 · Hari ≥ 9
#### Tahap 1 - Rumah Warga · Pak RT (pukul 16.00-21.00)

  **Pak RT:** Pak Misran, pas sekali. Saya lagi keliling minta sumbangan warga.
  **Pak RT:** Motor sering ngebut di zebra cross depan warung. Sudah beberapa kali warga hampir keserempet.
  **Pak RT:** Kami mau pasang lampu kedip dan rambu di kedua ujung jalan kampung, supaya kendaraan melambat. Kurangnya Rp150.000 lagi.
  **Pak Misran:** Wah, itu penting sekali, Pak RT. Warung saya juga pas di situ.

**Pertanyaan:**

  **Pak Misran:** (Sumbang kekurangan biaya lampu & rambu Rp150.000?)
**Pilihan jawaban:**

1. **"Sumbang Rp150.000"**

  **Pak Misran:** Biar saya tutup kekurangannya, Pak RT. Supaya cepat dipasang.
  **Pak RT:** Masyaallah! Hatur nuhun, Pak Misran. Minggu ini langsung kami pasang.

2. **"Maaf, belum bisa"**

  **Pak Misran:** Maaf, Pak RT. Bulan ini saya lagi berat, sewa kios naik.
  **Pak RT:** Iya, nggak apa-apa, Pak. Kami tunggu sumbangan warga lain dulu.

3. **"Nanti saya pikirkan"**

  **Pak RT:** Boleh, Pak. Saya di pos ronda sampai malam.

**HASIL - BANTU:**

- Reputasi: +3
- Keramaian warung: +3%
- Menyeberang: risiko kecelakaan turun 50%
- Pesan WA: Pak RT: "Alhamdulillah, lampu kedip dan rambu di kedua ujung jalan kampung sudah terpasang. Terima kasih Pak Misran yang menutup kekurangan biayanya."

  **Pop-up "Zebra Cross Terang"**

  Lampu kedip dan rambu terpasang di kedua ujung jalan kampung. Kendaraan lebih pelan, warga lebih aman, dan warung lebih ramai.

  - Menyeberang jauh lebih aman (kendaraan melambat)
  - Warung 3% lebih ramai
  - +3 ulasan bintang 5

**HASIL - TOLAK:**


  **Pop-up "Cerita Selesai"**

  Lampu kedip belum terpasang. Hati-hati menyeberang.

  - Kendaraan tetap ngebut di zebra cross

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Sejak ada lampu kedip dan rambu, motor jadi pelan-pelan lewat depan warung, Pak. Alhamdulillah. / **Pak Misran:** Alhamdulillah, Pak RT. Anak-anak juga aman nyeberang.

*Cabang menolak:*

- **Warga:** Sumbangan lampu kedip masih kurang, Pak. Sabar dulu, ya. / **Pak Misran:** Semoga cepat terkumpul, Pak RT.

---

### 4.17 Izin Agen Air Galon

- **Syarat muncul:** Level ≥ 3 · Hari ≥ 1
#### Tahap 1 - Rumah Warga · Pak RT (pukul 08.00-21.00)

  **Pak RT:** Pak Misran! Kebetulan. Tadi orang depot air isi ulang mampir ke pos ronda, nanyain warung Bapak.
  **Pak Misran:** Oh, soal galon titipan itu, Pak RT? Sudah lama nangkring di rak, tapi belum boleh saya jual.
  **Pak RT:** Nah, itu dia. Depotnya mau jadikan warung Bapak agen resmi. Syaratnya surat keterangan usaha dari RT dan RW.
  **Pak RT:** Biaya administrasi sama materai Rp75.000, Pak. Suratnya bisa saya urus hari ini juga.

**Pertanyaan:**

  **Pak Misran:** (Urus surat keterangan usaha agen galon, Rp75.000?)
**Pilihan jawaban:**

1. **"Urus suratnya (Rp75.000)"**

  **Pak Misran:** Bismillah, tolong diurus, Pak RT. Ini uangnya.
  **Pak RT:** Siap! Sore ini saya antar suratnya ke depot. Mulai besok galon di warung Bapak sudah resmi boleh dijual.

2. **"Nanti dulu, uangnya belum cukup"**

  **Pak RT:** Iya, Pak. Kapan saja Bapak siap, saya di pos ronda.

**HASIL - BANTU:**

- Reputasi: +1
- Barang baru terbuka: galon

  **Pop-up "Resmi Jadi Agen Galon!"**

  Surat keterangan usaha sudah keluar. Galon titipan depot sekarang boleh dijual.

  - Air galon isi ulang sekarang bisa dijual (untung Rp2.000 per galon)
  - Galon titipan di rak langsung bisa dijual

---

### 4.18 Pangkalan Gas Resmi

- **Syarat muncul:** Level ≥ 4 · Hari ≥ 1
#### Tahap 1 - SD · Kang Asep (pukul 15.00-20.00)

  **Kang Asep:** Pak Misran! Saya baru dari agen LPG di kecamatan, saudara saya kerja di sana.
  **Kang Asep:** Katanya mereka cari pangkalan baru di kampung ini. Warung Bapak kan sudah ada tabung titipan, tinggal izinnya.
  **Pak Misran:** Wah, betul, Kang. Tabungnya sudah lama di rak, tapi belum berani saya jual tanpa izin.
  **Kang Asep:** Syaratnya uang jaminan tabung Rp200.000, Pak. Nanti saya yang antar berkasnya ke agen.

**Pertanyaan:**

  **Pak Misran:** (Bayar jaminan tabung Rp200.000 supaya warung jadi pangkalan LPG resmi?)
**Pilihan jawaban:**

1. **"Bayar jaminan (Rp200.000)"**

  **Pak Misran:** Ini, Kang. Tolong sampaikan ke agennya, ya.
  **Kang Asep:** Siap, Pak! Besok tanda pangkalannya sudah bisa dipasang. Ibu-ibu nggak perlu jauh-jauh lagi beli gas.

2. **"Nanti dulu"**

  **Kang Asep:** Iya, Pak. Saya mangkal di sini tiap sore, nunggu anak-anak pulang les.

**HASIL - BANTU:**

- Reputasi: +2
- Keramaian warung: +2%
- Barang baru terbuka: lpg

  **Pop-up "Pangkalan LPG Resmi!"**

  Warung Pak Misran jadi pangkalan LPG 3 kg resmi. Ibu-ibu sekampung beli gas di sini.

  - LPG 3 kg sekarang bisa dijual (untung Rp4.000 per tabung)
  - Warung 2% lebih ramai
  - +2 ulasan bintang 5

---

### 4.19 Pesanan Arisan Ibu-Ibu

- **Syarat muncul:** Level ≥ 5 · Hari ≥ 1 · **JANJI** (hanya hari libur warung)
#### Tahap 1 - Pasar · Bu Ida (pukul 08.00-19.00, selama pasar buka)

  **Bu Ida:** Eh, Pak Misran, mampir ke pasar juga? Ibu-ibu arisan mau masak besar buat syukuran kampung sebentar lagi.
  **Bu Ida:** Kami perlu gula pasir sama teh celup yang banyak. Di lapak saya cuma ada buah. Kalau beli di grosir Haji Maman, ibu-ibu repot bolak-balik naik angkot.
  **Bu Ida:** Kalau Bapak mau sediakan, kami langsung borong. Nanti seterusnya juga belanja di warung Bapak.
  *Untuk stok pertama gula dan teh celup, Pak Misran harus keluar modal Rp150.000.*

**Pertanyaan:**

  **Pak Misran:** (Sediakan gula & teh celup dengan modal Rp150.000? Ibu-ibu langsung memborong Rp220.000.)
**Pilihan jawaban:**

1. **"Sediakan (modal Rp150.000)"**

  **Pak Misran:** Siap, Bu Ida. Besok pagi gula dan teh celupnya sudah ada di warung.
  **Bu Ida:** Alhamdulillah! Ini uang borongannya Rp220.000, Pak. Sisanya nanti ibu-ibu belanja sendiri-sendiri.

2. **"Nanti dulu"**

  **Bu Ida:** Iya, Pak. Tapi jangan lama-lama, syukurannya sebentar lagi.

**HASIL - BANTU:**

- Uang masuk: Rp220.000
- Keramaian warung: +2%
- Barang baru terbuka: gula, kopi bubuk
- Pelanggan: Bu Ida 1,3x lebih sering

  **Pop-up "Barang Baru Terbuka!"**

  Ibu-ibu arisan memborong gula dan teh celup. Kini keduanya jadi barang tetap di warung.

  - Gula pasir & teh celup sekarang bisa dijual
  - Borongan Rp220.000 (untung Rp70.000)
  - Warung 2% lebih ramai

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Syukurannya rame, Pak. Teh manisnya enak, pada nanya beli tehnya di mana. / **Pak Misran:** Alhamdulillah, Bu Ida. Makasih sudah promosi.

---

### 4.20 Ucup Juara Kelas

- **Syarat muncul:** Level ≥ 5 · Hari ≥ 1 · HARI SEKOLAH (bukan Minggu) · bukan Ramadan · **JANJI** (hanya hari libur warung) · **setelah** quest "Ucup Ingin Sekolah" selesai dengan hasil **membantu**

> **Pernyataan developer** (Neo Paw Studio, [Threads](https://www.threads.com/@neopawstudio/post/Dfv_ejDk2Nj)): kalau Ucup dibantu di "Ucup Ingin Sekolah", cerita inilah yang muncul sebagai gantinya, dan cerita ini yang membuka susu kotak. Sebaliknya, Susu Sekolah baru bisa muncul kalau Ucup tidak dibantu.
#### Tahap 1 - SD · Ucup (pukul 08.00-13.00)

  **Ucup:** Pak Misran! Pak Misran! Ucup ranking satu di kelas!
  **Pak Misran:** Masyaallah, Cup! Hebat sekali kamu!
  **Ucup:** Bu Guru bilang yang juara boleh traktir teman sekelas. Tapi Ucup nggak punya uang, Pak... Nenek juga.
  **Ucup:** Ucup pengin traktir susu kotak buat teman-teman. Mereka yang dulu minjemin Ucup buku.

**Pertanyaan:**

  **Pak Misran:** (Bantu Ucup mentraktir teman sekelasnya?)
**Pilihan jawaban:**

1. **"Traktir susu kotak satu kelas (Rp90.000)"**

  **Pak Misran:** Nanti Bapak antar susu kotak buat satu kelas. Anggap hadiah juara dari Bapak.
  **Ucup:** Beneran, Pak?! Ucup mau bilang ke teman-teman, ini dari Pak Misran!

2. **"Belikan kue kecil saja (Rp40.000)"**

  **Pak Misran:** Bapak belikan kue kecil buat dibagi, ya. Uang Bapak lagi pas-pasan.
  **Ucup:** Nggak apa-apa, Pak! Makasih banyak! Nanti Ucup bilang ke Bu Guru.

3. **"Nanti dulu"**

  **Ucup:** Iya, Pak. Ucup di sini sampai pulang sekolah.

**HASIL - BANTU:**

- Reputasi: +3
- Barang baru terbuka: susu kotak
- Pelanggan: Ucup 1,3x lebih sering, Neng Shinta 1,2x lebih sering, Dimas 1,2x lebih sering

  **Pop-up "Barang Baru Terbuka!"**

  Anak-anak SD senang ditraktir. Sejak itu mereka sering mampir membeli susu kotak sebelum sekolah.

  - Susu kotak sekarang bisa dijual
  - Anak sekolah lebih sering belanja
  - +3 ulasan bintang 5

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak Misran, teman-teman masih ngomongin susu kotak kemarin! Ucup mau tetap juara! / **Pak Misran:** Pertahankan, Cup. Nenek pasti bangga.

---

### 4.21 Susu Sekolah

- **Syarat muncul:** Level ≥ 5 · Hari ≥ 1 · hari sekolah (bukan Minggu) · bukan bulan Ramadan (hari 55-84) · hanya hari libur warung (sejak v1.0 hanya Jumat), dan itu pun hanya kalau ada janji untuk hari itu · setelah menolak "Ucup Ingin Sekolah" · setelah quest "Hadiah Lomba HUT Sekolah" selesai. Tempat: SD, pukul 13.00-17.00.

> **Pernyataan developer** (Neo Paw Studio lewat Threads). Semua syarat ini harus terpenuhi:
> 1. Warung sudah Level 5 atau lebih.
> 2. Waktu cerita "Ucup Ingin Sekolah", pemain harus memilih "tidak membantu Ucup".
> 3. Kalau Ucup dibantu, Susu Sekolah memang tidak akan pernah muncul.
> 4. Sebagai gantinya muncul cerita "Ucup Juara Kelas" (Ucup di SD, jam 08-13), dan cerita itu yang membuka susu kotak.
> 5. Cerita "Hadiah Lomba HUT Sekolah" (Neng Shinta) sudah selesai.
> 6. Bukan hari Minggu dan bukan bulan Ramadan (hari 55-84).
> 7. Di hari libur (Senin/Jumat), Neng Shinta hanya datang kalau memang ada janji untuk hari itu.
>
> Tempatnya di SD, jam 13.00-17.00. Misi yang tidak tercentang di daftar HP itu konsekuensi dari pilihan yang diambil, bukan bug yang perlu dikejar. Untuk sementara biarkan tidak tercentang; developer akan memperbaiki agar hilang dari list.
>
> Sumber: [@neopawstudio di Threads](https://www.threads.com/@neopawstudio/post/Dfv_ejDk2Nj)

*Catatan v1.0: hari libur warung kini hanya Jumat, jadi poin 7 di atas berlaku untuk hari Jumat.*

#### Tahap 1 - SD · Neng Shinta (pukul 13.00-17.00)

  **Neng Shinta:** Pak Misran! Bu Guru lagi cari warung yang bisa sediakan susu kotak buat adik-adik SD.
  **Neng Shinta:** Stok pertamanya sekitar Rp90.000, Pak. Nanti anak-anak bisa beli sendiri sebelum sekolah.

**Pertanyaan:**

  **Pak Misran:** (Sediakan susu kotak untuk anak-anak SD, Rp90.000?)
**Pilihan jawaban:**

1. **"Sediakan (Rp90.000)"**

  **Pak Misran:** Boleh, Neng. Bilang ke Bu Guru, susu kotaknya saya sediakan.
  **Neng Shinta:** Makasih, Pak! Adik-adik pasti senang.

2. **"Nanti dulu"**

  **Neng Shinta:** Iya, Pak. Saya di sini tiap pulang sekolah.

**HASIL - BANTU:**

- Reputasi: +3
- Barang baru terbuka: susu kotak
- Pelanggan: Ucup 1,3x lebih sering, Neng Shinta 1,2x lebih sering, Dimas 1,2x lebih sering

  **Pop-up "Barang Baru Terbuka!"**

  Anak-anak SD mulai membeli susu kotak di warung sebelum sekolah.

  - Susu kotak sekarang bisa dijual
  - Anak sekolah lebih sering belanja
  - +3 ulasan bintang 5

---

### 4.22 Hama Wereng di Sawah

- **Syarat muncul:** Level ≥ 3 · Hari ≥ 1
#### Tahap 1 - Sawah · Abah Karta (pukul 07.00-17.00)

  **Abah Karta:** Aduh, Pak Misran... Lihat ini, padinya kena wereng. Batangnya mulai kuning.
  **Pak Misran:** Astagfirullah, Abah. Masih bisa diselamatkan?
  **Abah Karta:** Masih, kalau cepat disemprot. Obat hamanya Rp150.000, tapi uang Abah habis buat bibit kemarin.
  **Abah Karta:** Kalau panen gagal, beras titipan di warung Bapak juga ikut habis...

**Pertanyaan:**

  **Pak Misran:** (Bantu Abah membeli obat hama Rp150.000? Abah berjanji membayar dengan hasil panen.)
**Pilihan jawaban:**

1. **"Bantu beli obat hama (Rp150.000)"**

  **Pak Misran:** Ayo, Abah. Kita beli sekarang, sekalian saya bantu semprot.
  *Pak Misran membantu Abah Karta menyemprot sawah sampai siang.*
  **Abah Karta:** Hatur nuhun, Pak. Nanti kalau panen, uangnya Abah ganti, ditambah beras sekarung buat Bapak.

2. **"Maaf, belum bisa"**

  **Pak Misran:** Maaf, Abah. Uang warung lagi dipakai buat Agus.
  **Abah Karta:** Iya, Pak... Abah coba pinjam ke kelompok tani saja.

**HASIL - BANTU:**

- Reputasi: +3
- Pelanggan: Abah Karta 1,4x lebih sering
- Utang: Abah Karta Rp200.000 (dikembalikan 6 hari lagi)

  **Pop-up "Sawah Selamat"**

  Padi Abah Karta selamat dari wereng. Abah berjanji mengganti uangnya dari hasil panen.

  - Abah membayar Rp200.000 dari hasil panen 6 hari lagi (Buku Hutang)
  - Abah Karta lebih sering belanja
  - +3 ulasan bintang 5

**HASIL - TOLAK:**

- Pelanggan: Abah Karta 0,7x lebih sering

  **Pop-up "Cerita Selesai"**

  Abah Karta meminjam obat hama ke kelompok tani. Sebagian sawahnya tetap gagal panen.

  - Abah Karta agak jarang mampir

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Padinya sudah menguning bagus, Pak. Wereng kapok, hehe. / **Pak Misran:** Alhamdulillah, Abah. Semoga panennya melimpah.

---

### 4.23 Laundry Mba Giska

- **Syarat muncul:** Level ≥ 6 · Hari ≥ 1 · **JANJI** (hanya hari libur warung)
#### Tahap 1 - Rumah Warga · Mba Giska (pukul 09.00-18.00)

  **Mba Giska:** Pak Misran! Saya mau buka usaha laundry kiloan di rumah. Banyak santri sama pekerja yang butuh.
  **Mba Giska:** Saya butuh sabun dan deterjen rutin tiap minggu. Bapak mau jadi pemasok saya?
  **Pak Misran:** Wah, boleh sekali, Mba. Tapi warung saya belum jual sabun dan deterjen.
  **Mba Giska:** Stok pertamanya kira-kira Rp120.000, Pak. Nanti pesanan pertama saya bayar Rp170.000 di muka.

**Pertanyaan:**

  **Pak Misran:** (Sediakan sabun & deterjen dengan modal Rp120.000? Mba Giska membayar pesanan pertama Rp170.000.)
**Pilihan jawaban:**

1. **"Jadi pemasok (modal Rp120.000)"**

  **Pak Misran:** Siap, Mba. Besok sabun dan deterjennya sudah ada.
  **Mba Giska:** Deal! Ini Rp170.000 buat pesanan pertama. Nanti pelanggan laundry saya suruh belanja ke warung Bapak juga.

2. **"Nanti dulu"**

  **Mba Giska:** Oke, Pak. Saya masih beres-beres mesin cucinya kok.

**HASIL - BANTU:**

- Uang masuk: Rp170.000
- Keramaian warung: +2%
- Barang baru terbuka: sabun, deterjen
- Pelanggan: Mba Giska 1,3x lebih sering, Kang Fadil 1,1x lebih sering, Kang Hasan 1,1x lebih sering

  **Pop-up "Barang Baru Terbuka!"**

  Laundry Mba Giska ramai. Warung Pak Misran jadi pemasok sabun dan deterjennya.

  - Sabun mandi & deterjen sekarang bisa dijual
  - Pesanan pertama Rp170.000 (untung Rp50.000)
  - Warung 2% lebih ramai

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Laundry saya sudah 20 kilo sehari, Pak! Deterjennya cepat habis, hehe. / **Pak Misran:** Alhamdulillah, Mba. Stoknya saya siapkan terus.

---

### 4.24 Loket Token Listrik

- **Syarat muncul:** Level ≥ 7 · Hari ≥ 1
#### Tahap 1 - Rumah Warga · Pak RT (pukul 16.00-21.00)

  **Pak RT:** Pak Misran, semalam rumah Nenek Sumi gelap. Token listriknya habis, konter terdekat sudah tutup.
  **Pak RT:** Warga minta saya cari warung yang bisa jual token listrik. Warung Bapak kan sudah ada konter pulsa.
  **Pak Misran:** Bisa, Pak RT. Tapi harus daftar loket dan isi deposit dulu, ya?
  **Pak RT:** Iya, pendaftaran loketnya Rp100.000. Biar warga nggak kegelapan lagi malam-malam.

**Pertanyaan:**

  **Pak Misran:** (Daftar loket token listrik, Rp100.000?)
**Pilihan jawaban:**

1. **"Daftar loket (Rp100.000)"**

  **Pak Misran:** Saya daftar hari ini, Pak RT. Mulai besok warga bisa beli token di warung.
  **Pak RT:** Alhamdulillah. Saya umumkan di grup RT.

2. **"Nanti dulu"**

  **Pak RT:** Boleh, Pak. Saya di pos ronda tiap sore.

**HASIL - BANTU:**

- Reputasi: +2
- Keramaian warung: +2%
- Barang baru terbuka: token listrik
- Pesan WA: Pak RT: "Bapak-Ibu, sekarang beli token listrik bisa di warung Pak Misran. Nggak usah jauh-jauh ke kecamatan lagi."

  **Pop-up "Barang Baru Terbuka!"**

  Warung Pak Misran resmi jadi loket token listrik.

  - Token listrik sekarang bisa dijual di konter pulsa
  - Warung 2% lebih ramai
  - +2 ulasan bintang 5

---

### 4.25 Dimas Masuk SMK

- **Syarat muncul:** Level ≥ 7 · Hari ≥ 1 · **JANJI** (hanya hari libur warung)
#### Tahap 1 - Sawah · Dimas (pukul 14.00-18.00)

  **Dimas:** Pak Misran... Dimas keterima di SMK jurusan mesin.
  **Pak Misran:** Wah, selamat, Dim! Kok mukanya sedih?
  **Dimas:** Seragam praktik sama sepatu safety-nya Rp150.000, Pak. Bapak saya lagi nggak ada kerjaan. Takut nggak jadi sekolah.
  **Dimas:** Kalau Bapak bantu dulu, Dimas cicil separuhnya dari uang saku. Boleh, Pak?

**Pertanyaan:**

  **Pak Misran:** (Bantu biaya seragam Dimas Rp150.000? Ia akan mencicil separuhnya dari uang saku.)
**Pilihan jawaban:**

1. **"Bantu (Rp150.000)"**

  **Pak Misran:** Ini, Dim. Sekolah yang benar. Soal cicilan, separuh saja cukup.
  **Dimas:** Makasih, Pak! Dimas janji, minggu depan cicilannya Dimas antar ke warung!

2. **"Maaf, belum bisa"**

  **Pak Misran:** Maaf, Dim. Bapak juga lagi butuh buat Agus.
  **Dimas:** Iya, Pak. Dimas coba minta keringanan ke sekolah.

3. **"Nanti dulu"**

  **Dimas:** Iya, Pak. Dimas di sini sampai sore.

**HASIL - BANTU:**

- Reputasi: +3
- Keramaian warung: +1%
- Pelanggan: Dimas 1,4x lebih sering, Neng Shinta 1,1x lebih sering
- Utang: Dimas Rp75.000 (dikembalikan 7 hari lagi)

  **Pop-up "Dimas Bisa Sekolah"**

  Dimas mulai sekolah di SMK. Ia mencicil separuh bantuan Pak Misran dari uang sakunya.

  - Dimas mengembalikan Rp75.000 7 hari lagi (Buku Hutang)
  - Anak sekolah lebih sering belanja
  - +3 ulasan bintang 5

**HASIL - TOLAK:**

- Pelanggan: Dimas 0,75x lebih sering

  **Pop-up "Cerita Selesai"**

  Dimas mendapat keringanan dari sekolah, tapi harus memakai seragam bekas.

  - Dimas agak jarang mampir

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak, tadi praktik bongkar mesin motor! Seru banget! / **Pak Misran:** Mantap, Dim. Nanti benerin motor Kang Asep, ya, hehe.

---

### 4.26 Freezer Es Krim

- **Syarat muncul:** Level ≥ 7 · Hari ≥ 1 · **JANJI** (hanya hari libur warung)
#### Tahap 1 - Warung · Kang Dadan (pukul 10.00-17.00)

  **Kang Dadan:** Pak Misran, kantor saya sekarang juga distributor es krim. Mereka cari warung buat titip freezer.
  **Kang Dadan:** Saya langsung rekomendasikan warung Bapak. Warung paling ramai di kampung ini.
  **Pak Misran:** Wah, freezer? Anak-anak pasti senang. Syaratnya apa, Kang?
  **Kang Dadan:** Uang jaminan freezer Rp250.000, Pak. Freezernya tetap milik distributor, listriknya dari warung.

**Pertanyaan:**

  **Pak Misran:** (Bayar jaminan freezer es krim Rp250.000?)
**Pilihan jawaban:**

1. **"Pasang freezer (Rp250.000)"**

  **Pak Misran:** Ayo, Kang. Pasang di samping kulkas saja.
  **Kang Dadan:** Siap! Besok freezer sama es krimnya saya antar sekalian.

2. **"Nanti dulu"**

  **Kang Dadan:** Iya, Pak. Tawarannya masih berlaku kok.

**HASIL - BANTU:**

- Keramaian warung: +3%
- Barang baru terbuka: es krim
- Pelanggan: Ucup 1,2x lebih sering, Neng Shinta 1,15x lebih sering, Dimas 1,15x lebih sering

  **Pop-up "Barang Baru Terbuka!"**

  Freezer es krim terpasang. Anak-anak kampung berebut beli es krim sepulang sekolah.

  - Es krim sekarang bisa dijual (paling laris siang hari)
  - Warung 3% lebih ramai
  - Anak-anak lebih sering mampir

---

### 4.27 Umrah untuk Ibunda

- **Syarat muncul:** Level ≥ 9 · Hari ≥ 1
#### Tahap 1 - Masjid · Haji Doni (pukul 07.00-17.00)

  **Haji Doni:** Pak Misran, ibu saya sudah sepuh. Dari dulu beliau ingin sekali umrah sebelum ajal.
  **Haji Doni:** Tabungan saya hampir cukup, tapi kurang sedikit. Jamaah masjid sepakat patungan.
  **Haji Doni:** Saya tidak memaksa, Pak. Seikhlasnya saja. Doa Bapak juga sudah cukup.

**Pertanyaan:**

  **Pak Misran:** (Ikut patungan umrah ibunda Haji Doni?)
**Pilihan jawaban:**

1. **"Ikut patungan (Rp300.000)"**

  **Pak Misran:** Ini dari saya, Haji Doni. Semoga ibunda sehat dan lancar ibadahnya.
  **Haji Doni:** Masyaallah... Jazakallah khair, Pak Misran. Nama Bapak saya titipkan dalam doa di Tanah Suci.

2. **"Ikut patungan (Rp100.000)"**

  **Pak Misran:** Maaf cuma segini, Haji Doni. Semoga berkah.
  **Haji Doni:** Berapa pun sangat berarti, Pak Misran. Terima kasih.

3. **"Doakan saja"**

  **Pak Misran:** Saya doakan dari sini, Haji Doni. Semoga lancar semuanya.
  **Haji Doni:** Aamiin. Terima kasih, Pak.

**HASIL - BANTU:**

- Reputasi: +4
- Keramaian warung: +3%
- Pesan WA: Pak RT: "Alhamdulillah, patungan umrah ibunda Pak Haji Doni sudah terkumpul. Terima kasih jamaah, termasuk Pak Misran."

  **Pop-up "Berangkat ke Tanah Suci"**

  Ibunda Haji Doni berangkat umrah. Jamaah masjid makin sayang pada Pak Misran.

  - Warung 3% lebih ramai
  - +4 ulasan bintang 5

**HASIL - TOLAK:**


  **Pop-up "Cerita Selesai"**

  Patungan jamaah tetap cukup. Ibunda Haji Doni berangkat umrah.

  - Haji Doni berterima kasih atas doanya

---

### 4.28 Agus Pulang

- **Syarat muncul:** Hari ≥ 85 · Hari ≤ 85
#### Tahap 1 - Warung · Agus (pukul 07.00-22.00)

  *Hari Raya Idulfitri. Takbir masih terdengar dari masjid. Seorang pemuda dengan ransel besar berjalan pelan ke depan warung.*
  **Pak Misran:** Mohon maaf lahir batin, Mas. Warung lagi libur Lebaran, tapi kalau ada yang perlu, Bapak carikan.
  **Agus:** Pak...
  **Agus:** Pak, ini Agus.
  *Pak Misran terdiam lama. Pemuda di depannya tersenyum, matanya berkaca-kaca.*
  **Pak Misran:** Agus...? Ya Allah, Gus. Kamu sudah besar sekali...
  **Agus:** Mohon maaf lahir dan batin, Pak. Agus sengaja nggak bilang-bilang, mau kasih kejutan.
  **Agus:** Ibu titip salam. Kata Ibu, Bapak harus jaga kesehatan.
  **Agus:** Haji Doni cerita, Bapak kerja keras sekali tiap hari. Kadang warungnya sepi, tapi kiriman buat Agus nggak pernah berhenti.
  **Pak Misran:** Itu sudah kewajiban Bapak, Gus. Yang penting kuliahmu lancar.
  **Agus:** Alhamdulillah lancar, Pak. Semua karena doa dan kerja keras Bapak.
  *Pak Misran menepuk bahu anaknya lama sekali. Untuk pertama kalinya setelah bertahun-tahun, warung kecil itu terasa seperti rumah.*
  **Agus:** Agus libur beberapa hari, Pak. Agus bantu jaga warung, ya. Biar Bapak nggak capek sendirian.

**Pertanyaan:**

  **Pak Misran:** (Ajak Agus masuk ke warung)
**Pilihan jawaban:**

1. **"Ayo masuk, Gus"**

  **Pak Misran:** Ayo masuk, Gus. Bapak buatkan kopi. Ceritakan semua soal kuliahmu.

**HASIL - BANTU:**

- Reputasi: +3
- Agus membantu: 4 hari

  **Pop-up "Agus Pulang"**

  Agus mudik Lebaran dan ikut menjaga warung selama beberapa hari.

  - Agus membantu di warung 4 hari: pembeli 25% lebih sabar
  - Warga ikut senang: +3 ulasan baik

---

### 4.29 Takjil Masjid

- **Syarat muncul:** Level ≥ 1 · Hari ≥ 56 · Hari ≤ 84 · **JANJI** (hanya hari libur warung)
#### Tahap 1 - Masjid · Haji Doni (pukul 09.00-17.00)

  **Haji Doni:** Assalamualaikum, Pak Misran. Setiap sore selama Ramadan, masjid menyiapkan takjil gratis untuk jamaah dan musafir yang lewat.
  **Haji Doni:** Kas masjid sedang menipis. Kalau warung Bapak berkenan menyumbang teh botol dan kurma untuk buka bersama, insyaallah berkah.
  *Sumbangan takjil untuk sisa Ramadan kira-kira Rp100.000.*

**Pertanyaan:**

  **Pak Misran:** (Sumbang takjil buka bersama Rp100.000?)
**Pilihan jawaban:**

1. **"Sumbang (Rp100.000)"**

  **Pak Misran:** Insyaallah, Haji Doni. Nanti sore Bapak antar ke masjid.
  **Haji Doni:** Jazakallah khair, Pak Misran. Nanti saya umumkan, takjilnya dari warung Bapak.

2. **"Maaf, belum bisa"**

  **Pak Misran:** Mohon maaf, Haji Doni, warung sedang seret. Semoga ada rezeki lain.
  **Haji Doni:** Tidak apa-apa, Pak. Doakan saja kas masjid cukup.

3. **"Nanti dulu"**

  **Haji Doni:** Iya, Pak. Kabari saya kalau sudah siap.

**HASIL - BANTU:**

- Reputasi: +3
- Keramaian warung: +2%
- Pelanggan: Kang Fadil 1,3x lebih sering, Kang Hasan 1,3x lebih sering, Nenek Sumi 1,2x lebih sering
- Pesan WA: Haji Doni: "Bapak-Ibu, takjil buka bersama di masjid Ramadan ini disumbang warung Pak Misran. Jazakallah khair!"

  **Pop-up "Takjil Masjid"**

  Takjil dari warung Pak Misran dibagikan setiap sore di masjid. Jamaah jadi sering mampir ke warung.

  - Jamaah & santri lebih sering belanja
  - Warung 2% lebih ramai
  - Warga memberi ulasan baik

**HASIL - TOLAK:**


  **Pop-up "Takjil Masjid"**

  Pak Misran belum bisa menyumbang takjil tahun ini.


**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Takjil dari warung Bapak laris, Pak. Jamaah senang sekali. / **Pak Misran:** Alhamdulillah, Haji Doni. Semoga berkah.

---

### 4.30 Abah Karta Tersesat

- **Syarat muncul:** Level ≥ 5 · Hari ≥ 1
#### Tahap 1 - Masjid · Abah Karta (pukul 16.00-21.00)

  *Abah Karta berdiri sendirian di depan masjid. Sarungnya terbalik, matanya terus menatap pintu masjid.*
  **Abah Karta:** Eh, Misran... Abah lagi nungguin Ambu. Katanya sebentar lagi beres ngaji.
  **Pak Misran:** (Ambu, istri Abah Karta, sudah wafat lima tahun lalu...)
  **Abah Karta:** Ambu teh suka lupa waktu kalau sudah ngaji. Nanti nasinya keburu dingin.

**Pertanyaan:**

  **Pak Misran:** (Apa yang Pak Misran katakan?)
**Pilihan jawaban:**

1. **"Temani Abah dan ajak pulang pelan-pelan"**

  **Pak Misran:** Abah, anginnya mulai dingin. Kita tunggu Ambu di rumah saja, yuk. Saya antar.
  **Abah Karta:** Iya, ya... Ambu mah pasti pulang sendiri. Dia hafal jalan.
  *Pak Misran menuntun Abah Karta pulang. Sepanjang jalan, Abah bercerita tentang Ambu seolah baru kemarin.*
  *Ceritakan kejadian ini kepada Pak RT di pos ronda (area Rumah Warga).*

2. **""Abah, Ambu kan sudah meninggal""**

  **Abah Karta:** Meninggal...? (Abah terdiam lama, lalu menangis seperti baru pertama kali mendengarnya.)
  **Pak Misran:** (Sepertinya bukan begini caranya. Abah butuh ditemani, bukan diingatkan.)

3. **"Nanti saja"**

  **Pak Misran:** Abah, saya ke warung dulu sebentar, ya.
  **Abah Karta:** Iya, Misran. Abah di sini saja, nungguin Ambu.

#### Tahap 2 - Rumah Warga · Pak RT (pukul 07.00-21.00)

  **Pak Misran:** Pak RT, tadi saya ketemu Abah Karta di masjid. Beliau nungguin Ambu...
  **Pak RT:** Astaghfirullah. Sudah dua kali minggu ini, Pak. Kemarin Bu Ida menemukan Abah di jembatan sawah waktu pulang dari pasar.
  **Pak RT:** Anak-anaknya di Jakarta semua. Ditelepon katanya sibuk, nanti Lebaran pulang.
  **Pak Misran:** Kasihan, Pak. Abah tinggal sendirian di rumah sebesar itu.
  **Pak RT:** Bagaimana kalau warga bergiliran menengok Abah? Pagi Bapak sebelum buka warung, sore Bu Ida sepulang dari pasar, malam saya.

**Pertanyaan:**

  **Pak Misran:** (Ikut bergiliran menengok Abah Karta?)
**Pilihan jawaban:**

1. **"Saya ikut, pagi biar saya"**

  **Pak RT:** Alhamdulillah. Coba tengok Abah di sawah, ya. Biasanya beliau ada di sawah.
  *Tengok Abah Karta di sawah.*

2. **"Saya sibuk di warung, Pak"**

  **Pak RT:** Ya sudah, Pak. Biar saya cari warga lain.

#### Tahap 3 - Sawah · Abah Karta (pukul 07.00-21.00)

  **Abah Karta:** Pak Misran! Sini, sini. Abah dengar dari Pak RT... Abah bikin repot, ya?
  **Pak Misran:** Nggak repot, Abah. Saya senang nemenin Abah ngobrol.
  **Abah Karta:** Kadang kepala Abah teh kayak berkabut. Abah lupa Ambu sudah nggak ada. Terus ingat lagi, terus sedih lagi.
  **Abah Karta:** Tapi tadi Abah ingat satu hal: waktu kecil Pak Misran suka nyolong jambu di kebun Ambu, hahaha.
  **Pak Misran:** Hahaha, Abah masih ingat saja. Ambu malah ngasih saya sekantong, katanya biar nggak nyolong lagi.
  **Abah Karta:** Iya... Ambu memang begitu. Hatur nuhun, Pak Misran. Sudah mau jadi teman orang tua ini.
  *Mulai hari itu warga bergiliran menengok Abah Karta. Abah tidak pernah lagi tersesat sendirian.*

*(tahap ini otomatis dianggap membantu)*

**HASIL - BANTU:**

- Reputasi: +2

  **Pop-up "Abah Tidak Sendirian"**

  Warga bergiliran menengok Abah Karta setiap hari. Kabar kebaikan ini tersebar di grup RT.

  - Abah Karta dan Pak RT makin akrab dengan Pak Misran
  - +2 ulasan bintang 5 dari warga

**HASIL - TOLAK:**


  **Pop-up "Cerita Selesai"**

  Pak RT mencari warga lain untuk menengok Abah Karta.

  - Tidak ada perubahan

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Tadi pagi Abah bangun, langsung ingat: hari ini giliran Pak Misran nengok. Abah sudah nunggu di saung, hehe. / **Pak Misran:** Saya bawakan teh manis, Abah.
- **Warga:** Jadwal nengok Abah Karta sekarang penuh, Pak. Malah warga rebutan giliran. / **Pak Misran:** Alhamdulillah, Pak RT. Kampung kita memang begini.

---

### 4.31 Rahasia Pak Rudi

- **Syarat muncul:** Level ≥ 8 · Hari ≥ 1 · bukan Ramadan · **JANJI** (hanya hari libur warung)
#### Tahap 1 - Masjid · Pak Rudi (pukul 10.00-15.00)

  *Pak Rudi berdiri di depan masjid dengan kemeja kantor dan tas kerjanya. Matanya kosong.*
  **Pak Rudi:** Eh... Pak Misran. Saya... lagi istirahat.
  **Pak Misran:** Kantor Bapak kan di kota, Pak Rudi. Jauh sekali istirahatnya sampai ke sini.
  **Pak Rudi:** (lama terdiam) Saya kena PHK, Pak. Sudah dua minggu.
  **Pak Rudi:** Tiap pagi saya tetap pakai kemeja dan pamit kerja ke istri. Terus saya diam di sini sampai sore. Saya malu, Pak.

**Pertanyaan:**

  **Pak Misran:** (Apa yang Pak Misran lakukan?)
**Pilihan jawaban:**

1. **"Dengarkan Pak Rudi"**

  **Pak Misran:** Malu kenapa, Pak? Bapak nggak mencuri, nggak menipu. Perusahaannya yang tutup.
  **Pak Rudi:** Anak saya mau masuk SMP, Pak. Istri saya pikir semuanya baik-baik saja...
  **Pak Misran:** Istri itu teman hidup, Pak, bukan tamu. Beban seberat ini jangan dipikul sendirian.
  **Pak Misran:** Saya coba tanya Kang Asep. Dia kenal banyak orang, siapa tahu ada lowongan.
  *Tanyakan lowongan kerja kepada Kang Asep di depan SD.*

2. **"Pura-pura tidak tahu"**

  **Pak Misran:** Oh, begitu. Ya sudah, saya duluan, Pak Rudi.
  *Pak Rudi menunduk. Ia kembali menatap pintu masjid sendirian.*

3. **"Nanti saja"**

  **Pak Misran:** Pak Rudi, nanti saya ke sini lagi, ya.
  **Pak Rudi:** Iya, Pak... saya di sini sampai sore.

#### Tahap 2 - SD · Kang Asep (pukul 07.00-21.00)

  **Pak Misran:** Kang Asep, kenal yang lagi cari pegawai? Untuk teman saya. Orangnya jujur dan rajin.
  **Kang Asep:** Hmm... Oh! Koperasi sekolah SD ini lagi cari bendahara, Pak. Kemarin kepala sekolahnya nanya ke saya.
  **Kang Asep:** Memang nggak sebesar kantor di kota. Tapi dekat, nggak usah macet-macetan tiap hari.
  **Pak Misran:** Wah, cocok sekali. Teman saya biasa pegang pembukuan.
  **Kang Asep:** Suruh datang ke sini besok pagi, Pak. Bilang saja dari Kang Asep.
  *Kabari Pak Rudi. Ia sedang di depan warung.*

*(tahap ini otomatis lanjut ke tahap berikutnya)*

#### Tahap 3 - Warung · Pak Rudi (pukul 07.00-21.00)

  **Pak Rudi:** Pak Misran! Saya... akhirnya cerita ke istri.
  **Pak Rudi:** Saya kira dia bakal marah. Ternyata dia cuma memeluk saya dan bilang, "Kenapa nggak dari dulu, Pak?"
  **Pak Misran:** Alhamdulillah. Dan ada kabar baik: koperasi SD sedang cari bendahara. Kang Asep yang kasih tahu.
  **Pak Rudi:** Ya Allah... Kecil pun nggak apa-apa, Pak. Yang penting saya bisa pulang sore tanpa bohong lagi.
  **Pak Rudi:** Saya sempat merasa jadi orang paling gagal di kampung ini.
  **Pak Misran:** Di kampung ini nggak ada yang jatuh sendirian, Pak Rudi.

*(tahap ini otomatis dianggap membantu)*

**HASIL - BANTU:**

- Reputasi: +2

  **Pop-up "Pak Rudi Bangkit"**

  Pak Rudi sekarang menjadi bendahara koperasi SD dan bisa pulang sore tanpa menyimpan rahasia lagi.

  - Pak Rudi dan Kang Asep makin akrab dengan Pak Misran
  - +2 ulasan bintang 5 dari warga

**HASIL - TOLAK:**


  **Pop-up "Cerita Selesai"**

  Beberapa minggu kemudian terdengar kabar Pak Rudi sekeluarga pindah ke rumah mertuanya di kota.

  - Tidak ada perubahan

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak Misran, buku kas koperasi sekarang rapi. Kepala sekolah senang sekali. / **Pak Misran:** Alhamdulillah, Pak Rudi memang ahlinya.
- **Warga:** Sekarang saya bisa jemput anak pulang sekolah, Pak. Dulu mana sempat. / **Pak Misran:** Itu rezeki yang nggak kelihatan, Pak.

---

### 4.32 Wali Wisuda Kang Fadil

- **Syarat muncul:** Level ≥ 8 · Hari ≥ 1 · **JANJI** (hanya hari libur warung)
#### Tahap 1 - Pesantren · Kang Fadil (pukul 08.00-17.00)

  **Kang Fadil:** Pak Misran! Alhamdulillah, saya sudah khatam hafalan 30 juz.
  **Pak Misran:** MasyaAllah, Kang Fadil! Bapak ikut bangga.
  **Kang Fadil:** Sebentar lagi wisuda tahfiz. Setiap santri didampingi orang tuanya naik panggung...
  **Kang Fadil:** Bapak saya sakit di Garut, Emak harus menjaga beliau. Mereka nggak bisa datang.
  **Kang Fadil:** Saya malu minta, Pak... tapi maukah Bapak jadi wali saya di panggung nanti?

**Pertanyaan:**

  **Pak Misran:** (Jadi wali wisuda Kang Fadil?)
**Pilihan jawaban:**

1. **"Dengan senang hati, Kang"**

  **Pak Misran:** Dengan senang hati, Kang. Anggap saja Bapak ini bapakmu di sini.
  **Kang Fadil:** Hatur nuhun, Pak... (matanya berkaca-kaca)
  *Pak Misran tidak punya baju koko yang pantas. Coba pinjam ke Haji Doni di masjid.*

2. **"Maaf, saya tidak bisa"**

  **Kang Fadil:** Iya, Pak, saya mengerti. Nanti saya naik panggung sendiri saja.

3. **"Nanti saya kabari"**

  **Kang Fadil:** Iya, Pak. Wisudanya masih beberapa hari lagi.

#### Tahap 2 - Masjid · Haji Doni (pukul 07.00-21.00)

  **Pak Misran:** Haji Doni, saya mau jadi wali wisuda Kang Fadil. Boleh pinjam baju koko yang pantas?
  **Haji Doni:** Wali wisuda tahfiz? MasyaAllah, itu kehormatan besar, Pak Misran.
  **Haji Doni:** Ini koko putih yang saya pakai waktu walimah anak saya. Pakailah. Pecinya juga.
  **Haji Doni:** Dulu waktu saya mondok, bapak saya juga tidak bisa datang. Yang menemani saya naik panggung tukang becak depan pondok. Sampai sekarang saya mendoakan beliau.
  **Pak Misran:** Insyaallah saya jaga baik-baik, Haji Doni.
  *Datang ke pesantren untuk menemani Kang Fadil di hari wisuda.*

*(tahap ini otomatis lanjut ke tahap berikutnya)*

#### Tahap 3 - Pesantren · Kang Fadil (pukul 07.00-21.00)

*Mulai v1.0: selama tahap ini (hari wisuda), Pak Misran memakai baju koko putih, sesuai yang disebut Kang Fadil di dialog.*

  *Wisuda baru saja selesai di aula pesantren. Pak Misran tadi mendampingi Kang Fadil naik panggung. Surat Ar-Rahman dilantunkannya tanpa sekali pun tersendat.*
  **Kang Hasan:** Fadil, tadi merdu sekali! Pak Misran sampai menahan air mata.
  **Haji Doni:** Hari ini Bapak jadi wali yang pantas, Pak Misran. Masyaallah.
  **Kang Fadil:** Koko putih Bapak tadi mirip punya Bapak saya, kalau beliau mau berangkat ke masjid.
  **Kang Fadil:** Emak tadi ikut lihat lewat video call, Pak. Beliau menangis, sambil mengarahkan HP ke Bapak yang terbaring.
  **Pak Misran:** (Pak Misran teringat Agus. Suatu hari nanti, ia juga ingin berdiri di samping anaknya seperti ini.)
  **Kang Fadil:** Hatur nuhun, Pak. Hari ini saya nggak merasa sendirian.

*(tahap ini otomatis dianggap membantu)*

**HASIL - BANTU:**

- Reputasi: +3

  **Pop-up "Wali Wisuda"**

  Kang Fadil diwisuda sebagai hafiz 30 juz dengan Pak Misran di sampingnya. Seluruh pesantren mengenal kebaikan pemilik warung itu.

  - Kang Fadil, Kang Hasan, dan Haji Doni makin akrab dengan Pak Misran
  - +3 ulasan bintang 5 dari warga

**HASIL - TOLAK:**


  **Pop-up "Cerita Selesai"**

  Kang Fadil naik panggung wisuda seorang diri.

  - Tidak ada perubahan

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak, Emak titip salam. Katanya kalau ke Cianjur, mau mampir ke warung Bapak. / **Pak Misran:** Wah, Bapak tunggu, Kang.

---

### 4.33 Rahasia Kang Dadan

- **Syarat muncul:** Level ≥ 9 · Hari ≥ 1
#### Tahap 1 - Warung · Kang Dadan (pukul 16.00-21.00)

  *Kang Dadan berdiri di depan warung, menatap layar HP lama sekali.*
  **Kang Dadan:** Pak Misran... boleh minta tolong bacakan ini? Mata saya... eh, HP saya buram.
  **Pak Misran:** (Layar HP-nya jelas sekali.) Ini pesan dari kantor ekspedisi, Kang. Mulai bulan depan semua alamat hanya lewat aplikasi.
  **Kang Dadan:** (menghela napas) Saya nggak bisa baca, Pak. Dari dulu saya hafalkan rumah orang dari warna pagar sama nama warung.
  **Kang Dadan:** Kalau ketahuan, saya bisa diberhentikan. Anak saya masih bayi, Pak...

**Pertanyaan:**

  **Pak Misran:** (Bantu Kang Dadan belajar membaca?)
**Pilihan jawaban:**

1. **"Saya ajari tiap malam di warung"**

  **Pak Misran:** Belajar membaca nggak ada kata terlambat, Kang. Tiap malam sesudah warung tutup, kita belajar di sini.
  **Kang Dadan:** Beneran, Pak? Saya kira Bapak bakal ketawa...
  **Pak Misran:** Kita butuh buku belajar membaca. Neng Shinta pasti masih punya buku lamanya.
  *Pinjam buku belajar membaca ke Neng Shinta di SD.*

2. **"Coba minta tolong teman kantor"**

  **Kang Dadan:** Iya, Pak... nanti saya coba.

3. **"Nanti saja"**

  **Kang Dadan:** Iya, Pak. Tolong jangan bilang siapa-siapa, ya.

#### Tahap 2 - SD · Neng Shinta (pukul 07.00-21.00)

  **Pak Misran:** Neng Shinta, masih punya buku belajar membaca waktu SD dulu?
  **Neng Shinta:** Masih, Pak! Buku "Ini Budi" sama buku latihan menulis huruf. Buat siapa, Pak?
  **Pak Misran:** Buat teman Bapak. Rahasia, ya, Neng.
  **Neng Shinta:** Siap, Pak! Saya selipkan juga kartu huruf buatan saya. Bilang ke temannya: semangat!
  *Temui Kang Dadan di depan warung.*

*(tahap ini otomatis lanjut ke tahap berikutnya)*

#### Tahap 3 - Warung · Kang Dadan (pukul 07.00-21.00)

  *Sejak itu Kang Dadan rajin belajar huruf demi huruf sesudah warung tutup. Hari ini ia ingin menunjukkan hasilnya.*
  **Kang Dadan:** Pak... coba dengar. "I-ni Bu-di. I-ni i-bu Bu-di."
  **Pak Misran:** Lancar, Kang! Sekarang coba yang ini.
  *Pak Misran menunjuk tulisan di kertas kado kecil yang dibawa Kang Dadan.*
  **Kang Dadan:** "Un-tuk... Mis-bah." Misbah... Itu nama anak saya, Pak.
  **Kang Dadan:** Saya baru pertama kali bisa membaca nama anak saya sendiri...
  **Pak Misran:** Nanti kalau Misbah sudah besar, Kang Dadan yang bacakan dongeng sebelum tidur, ya.
  **Kang Dadan:** (tertawa sambil mengusap mata) Insyaallah, Pak. Insyaallah.

*(tahap ini otomatis dianggap membantu)*

**HASIL - BANTU:**

- Reputasi: +2

  **Pop-up "Kang Dadan Bisa Membaca"**

  Kang Dadan kini bisa membaca alamat di aplikasi sendiri. Rahasianya aman bersama Pak Misran dan Neng Shinta.

  - Kang Dadan dan Neng Shinta makin akrab dengan Pak Misran
  - +2 ulasan bintang 5 dari warga

**HASIL - TOLAK:**


  **Pop-up "Cerita Selesai"**

  Kang Dadan berhenti jadi kurir dan bekerja sebagai kuli angkut di pasar.

  - Tidak ada perubahan

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak, tadi saya baca papan nama warung Bapak dari jauh. Sekarang semua tulisan kelihatan, hehe. / **Pak Misran:** Hebat, Kang! Nanti kita lanjut belajar menulis.
- **Warga:** Pak, teman rahasia Bapak sudah lancar membaca? Kartu hurufnya berguna, kan? / **Pak Misran:** Berguna sekali, Neng. Katanya terima kasih.



### 4.34 Kampung Kita

- **Syarat muncul:** Level ≥ 10 · Hari ≥ 1
#### Tahap 1 - Rumah Warga · Pak RT (pukul 08.00-20.00)

  *Pak RT memegang selembar surat berkop kecamatan. Wajahnya pucat.*
  **Pak RT:** Pak Misran, ini surat dari kecamatan. Ada rencana jalan tol baru, dan jalurnya lewat kampung kita.
  **Pak RT:** Rumah warga, masjid, sawah Abah Karta... warung Bapak juga. Semua masuk peta pembebasan lahan.
  **Pak Misran:** Ya Allah... Pak RT, kampung ini sudah ada sejak zaman kakek kita.
  **Pak RT:** Masih ada jalan, Pak. Kecamatan membuka musyawarah. Kalau seluruh warga asli sepakat dan mengusulkan jalur lain lewat lahan kosong di utara, usulan kita wajib dipertimbangkan.
  **Pak RT:** Tapi tanda tangannya harus sebanyak mungkin. Makin sedikit yang setuju, makin lemah usulan kita.
  **Pak RT:** Saya harus mengurus surat ke kecamatan. Bapak paling dekat dengan warga... maukah Bapak menemui mereka satu per satu?

**Pertanyaan:**

  **Pak Misran:** (Menemui seluruh warga kampung dan meminta persetujuan mereka?)
**Pilihan jawaban:**

1. **"Saya temui semuanya, Pak RT"**

  **Pak Misran:** Saya temui semuanya, Pak RT. Warung tutup sebentar pun nggak apa-apa.
  **Pak RT:** Bawa lembar tanda tangan ini. Semoga Allah memudahkan.
  *Temui setiap warga bertanda "!" di seluruh kampung (Rumah Warga, Warung, Masjid, Sawah, SD, Pesantren, dan Bu Ida di Pasar) dan minta tanda tangan mereka.*

2. **"Saya tidak mau ikut campur"**

  **Pak RT:** ...Begitu, ya, Pak. Baiklah, biar saya dan warga lain yang berkeliling.

3. **"Beri saya waktu berpikir"**

  **Pak RT:** Jangan terlalu lama, Pak. Batas waktunya tidak panjang.

#### Tahap 2 - ? · ? (pukul 07.00-21.00)

*(tahap ini otomatis lanjut ke tahap berikutnya)*

#### Tahap 3 - Rumah Warga · Pak RT (pukul 07.00-21.00)

  **Pak RT:** Lengkap, Pak? ...Semuanya?
  **Pak Misran:** Semuanya, Pak RT. Sampai Ucup ikut menggambar.
  **Pak RT:** (membalik lembar demi lembar) Ya Allah... Musyawarahnya di masjid. Bapak harus ikut bicara di sana.
  *Datang ke musyawarah di masjid.*

*(tahap ini otomatis lanjut ke tahap berikutnya)*

#### Tahap 4 - Masjid · Haji Doni (pukul 07.00-21.00)

  *Warga berkumpul di halaman masjid. Dua petugas kecamatan menunggu di serambi.*
  **Haji Doni:** Bapak-bapak dari kecamatan, ini tanda tangan seluruh warga asli. Tidak ada satu pun yang menolak.
  *Petugas kecamatan membuka lembar demi lembar. Di halaman terakhir ada gambar warung kecil buatan Ucup.*
  **Haji Doni:** Pak Misran, silakan. Bapak yang menemui semua warga.
  **Pak Misran:** Bapak-bapak... saya cuma pemilik warung kecil. Saya nggak paham soal peta dan jalan tol.
  **Pak Misran:** Tapi saya tahu, di kampung ini kalau ada yang sakit, tetangga datang bawa bubur. Kalau ada yang tersesat, warga bergantian menjaga.
  **Pak Misran:** Kampung ini bukan sekadar tanah, Pak. Ini keluarga. Tolong jangan pisahkan kami.
  *Halaman masjid hening. Lalu warga maju satu per satu: Abah Karta, Nenek Sumi, Kang Dadan, dan Ucup.*
  *Tidak lama kemudian, surat dari kecamatan datang: jalur tol dipindahkan ke lahan kosong di utara kampung.*
  **Pak RT:** (lewat telepon) Pak Misran! Kita berhasil! Kampung kita tetap berdiri!

*(tahap ini otomatis dianggap membantu)*

**HASIL - BANTU:**

- Reputasi: +5
- Pesan WA: Pak RT: "Bapak-Ibu, alhamdulillah! Kecamatan resmi memindahkan jalur tol ke utara. Terima kasih seluruh warga, terutama Pak Misran yang mengetuk pintu kita satu per satu."

  **Pop-up "Kampung Kita Tetap Berdiri"**

  Jalur tol dipindahkan. Seluruh warga tahu siapa yang mengetuk pintu mereka satu per satu. Warung Pak Misran kini benar-benar jadi jantung kampung.

  - Semua warga yang ditemui makin akrab dengan Pak Misran
  - +5 ulasan bintang 5 dari warga

**HASIL - TOLAK:**

- Reputasi: -2

  **Pop-up "Cerita Selesai"**

  Pak RT dan warga mengumpulkan tanda tangan sendiri. Kampung selamat, tapi warga bertanya-tanya kenapa Pak Misran diam saja.

  - 2 ulasan bintang 1 dari warga

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Surat dari kecamatan itu saya bingkai, Pak. Saya pajang di pos ronda. / **Pak Misran:** Biar anak cucu tahu ceritanya, ya, Pak RT.
- **Warga:** Pak Misran, gambar Ucup dipajang di kecamatan, lho! Kata warga, Ucup pahlawan kecil. / **Pak Misran:** Memang betul, Cup. Pahlawan kampung kita.
- **Warga:** Nenek sekarang tidur nyenyak, Misran. Rumah ini tetap rumah Nenek sampai akhir hayat. / **Pak Misran:** Insyaallah, Nek.
- **Warga:** Untung saya nggak tergoda ganti rugi itu, Pak. Tetangga seperti ini nggak bisa dibeli. / **Pak Misran:** Betul, Bu. Kita saling jaga.

---


### Balas Budi Warga

Warga yang pernah kamu bantu di quest bisa membalas budi. Yang dihitung sebagai penolong: NPC tipe itu, kecuali Fariz, Agus, dan Preman. Tiap bentuk balas budi maksimal **sekali per 14 hari**, kecuali patungan sewa yang punya aturan sendiri (lihat di bawah).

- **Sewa kios menunggak**: pada minggu ke-2, penolong patungan **15% tunggakan per orang** (maksimal **50%**, dibulatkan ke Rp1.000). Mulai v1.0 bantuan ini dibatasi: maksimal **2 kali seumur simpanan** dan jarak antar bantuan minimal **60 hari**. Kalau jatahnya habis, warga tidak bisa patungan sewa lagi. Kalau lunas, hitungan minggu tunggakan direset; kalau belum, kamu dapat tambahan waktu seminggu.
- **Preman nongkrong**: durasi kejadian dipotong **15% per penolong**, dengan batas bawah 40 menit.

Jadi membantu warga menaikkan reputasi, dan efeknya terasa saat sewa menunggak atau ada preman.

---


## 6. Daftar Kejadian Acak

Kejadian-kejadian yang bisa terjadi secara acak di warung. Mulai hari ke-2, tiap siang diundi apakah ada satu kejadian (peluang 45% per hari). Kalau ada, satu kejadian dipilih dari kejadian yang memenuhi syarat hari itu (jam, tanggal, level), dan kolom Bobot Undian menentukan mana yang paling sering muncul: angka besar = lebih sering.

| Kejadian | Mulai Hari | Bobot Undian | Dampak | Cara Mengatasi |
|---|---|---|---|---|
| Listrik padam | Hari 2 | 2 | Minuman tidak laris | Beli genset |
| Rombongan datang | Hari 2 | 2.5 | Lebih ramai, air mineral/teh/ciki laris | - |
| Palak preman | Hari 2 | 1.5 | Setoran Rp10.000-20.000 | Beli CCTV |
| Borongan | Hari 2 | 2.5 | Pesanan 2-3 jenis, 3-8 unit, reputasi +2 | - |
| Gajian (tanggal muda) | Hari 2 | 4 | Pelanggan datang lebih sering, belanja lebih banyak | - |
| Arisan | Hari 2 | 2 | Pesanan 2-4 jenis, 3-6 unit, tip Rp5.000-15.000, reputasi +1 | - |
| Preman nongkrong | Hari 2 | - | Sangat sepi, 3-4 menit | Beli CCTV |
| Pencurian | 5 | - | Kehilangan barang (maks Rp40.000) | Beli CCTV |
| Uang palsu | 8 | - | Ketahuan saat tutup, hanya uang tunai | Beli QRIS |
| Tikus | 6 | - | Makan barang (beras, gula, kerupuk, rengginang, biskuit, roti) | Neo minimal Tetangga akrab |

**Catatan undian:** Gajian paling sering muncul (bobot 4), palak preman paling jarang (bobot 1.5). Kejadian bertanda "-" (preman nongkrong, pencurian, uang palsu, tikus) tidak ikut undian bobot; mereka dicek terpisah tiap hari dengan peluang sendiri: pencurian 8%, tikus 7%, uang palsu 5%.

**Angka pelengkap:**

- Palak preman: bobot turun jadi 0,45 kalau punya CCTV (×0,3). Setoran Rp10.000 mulai hari 1, Rp15.000 mulai hari 4, Rp20.000 mulai hari 6.
- Pencurian: dengan CCTV turun dari 8% jadi 2% per hari (×0,25). Paling banyak 2 jenis, 3 unit, nilai maksimal Rp40.000.
- Uang palsu: hanya dicek kalau uang tunai hari itu minimal Rp50.000. Dengan QRIS turun dari 5% jadi 3,5% (×0,7). Yang hilang Rp20.000, atau Rp50.000 kalau uang tunai hari itu Rp150.000 ke atas (peluang 50%).
- Tikus: kalau Neo sudah akrab minimal Tetangga, turun dari 7% jadi 1,4% per hari (×0,2). Paling banyak 2 jenis, 2 unit.
- Jam mulai kejadian siang: listrik padam 09.00-15.00, rombongan 09.00-12.00, palak 10.00-16.00, borongan 09.00-15.00, gajian 09.00-09.30, arisan 16.00-17.00. Kalau jatuh Jumat jam 11.00-13.00, digeser 2 jam.

### Detail kejadian:

**Listrik padam:** Kulkas mati, minumannya tidak dingin. Tidak ada yang beli minuman sampai listrik menyala lagi. Genset langsung menyala jika ada.

**Rombongan datang:** Bapak-bapak kerja bakti. Bolak-balik mampir beli minum dan camilan. Siapkan air mineral dan kopi!

**Palak preman:** Preman memalak. Setoran Rp10.000 (hari 1), Rp15.000 (hari 4), Rp20.000 (hari 6). Kalau menolak, reputasi -1. CCTV mengurangi kejadian.

**Borongan:** Pesanan borongan (air mineral, teh botol, kopi susu, soda, ciki, biskuit, permen, mie goreng, mie rebus). 2-3 jenis, 3-8 unit. Reputasi +2.

**Gajian:** Hari gajian pabrik. Warga lebih ramai belanja dan belanjanya lebih banyak. Hanya tanggal 25 s.d. 3 (tanggal muda).

**Arisan:** Pesanan arisan (ciki, biskuit, kerupuk, rengginang, teh botol, kopi bubuk, permen, roti). 2-4 jenis, 3-6 unit. Tip Rp5.000-15.000 (peluang 50%). Reputasi +1.

**Preman nongkrong:** Preman nongkrong di warung. Jeda 8x (sangat sepi). Durasi 3-4 menit. CCTV membantu.

**Pencurian:** Kehilangan barang. Mulai hari 5. CCTV membantu. Maks 2 jenis, 3 unit, Rp40.000.

**Uang palsu:** Mulai hari 8. Ketahuan saat tutup, hanya uang tunai. QRIS mengurangi kejadian.

**Tikus:** Mulai hari 6. Malam hari, ketahuan saat buka. Jarang kalau Neo minimal Tetangga akrab. Makan beras, gula, kerupuk, rengginang, biskuit, roti.

## 7. Karakter Kasbon (Hutang)

Pembeli bisa berutang di kasir. Utangnya dicatat di Buku Hutang, lalu ditagih kalau lewat janji. Bagian ini merangkum cara kerja sistem kasbon dan siapa saja yang bisa minta utang, disusun dari analisis data game v0.40 dan diperbarui untuk v1.2.

### Kapan pembeli minta ngutang

Kasbon tidak muncul karena uang pembeli kurang. Undiannya acak setiap kali kamu menekan Layani: game memutuskan apakah pembeli ini "dompetnya ketinggalan", lalu kamu pilih Kasih atau Tolak.

Syarat agar permintaan kasbon bisa muncul:

- Sudah hari ke-2 atau lebih. Hari pertama tidak ada kasbon.
- Bukan mode latihan, dan tutorial sudah selesai.
- Maksimal 2 permintaan kasbon per hari.
- Maksimal 4 utang aktif sekaligus, dan hanya 1 utang per tipe warga.
- Peluang 10% per pembeli. Kalau ini permintaan pertama hari itu dan sudah lewat jam 12.00, peluangnya naik jadi 35%.
- Hanya 8 tipe pembeli yang bisa minta kasbon (tabel di bawah). Tipe lain tidak pernah minta utang di kasir.
- Mulai v1.0, pembeli yang datang membawa tawaran tip (bertanda bintang) tidak minta kasbon.
- Mulai v1.2, **utang paling sedikit Rp10.000** (warga tidak lagi ngutang receh), dan utang baru bisa **dicicil kalau Rp20.000 ke atas**.

Kalau kamu kasih, barang tetap keluar dari rak dan tercatat terjual, tapi uangnya tidak masuk kas. Nilainya dicatat sebagai utang sebesar total belanjaannya.

### Karakter yang bisa kasbon

| Tipe pembeli | Warga bernama | Varian tanpa nama |
|---|---|---|
| kantoran | Pak Rudi | Pak Hendra, Kang Yayan, Pak Engkus, Kang Dede, Kang Oding |
| ojek | Kang Asep | - |
| ibu_rumah_tangga | Bu Ida, Bu Eni | Bu Imas, Ceu Iis, Bu Enok |
| nenek | Nenek Sumi | Nini Onah, Nini Eha, Nini Cucu |
| tukang | Mang Ujang | - |
| petani | Abah Karta | - |
| giska | Mba Giska | - |
| pak_rt | Pak RT | - |

Yang menentukan bukan nama, tapi tipe pembeli. Varian pakaian mewarisi sifat tipe asalnya, jadi Bu Imas atau Nini Onah bisa ikut minta kasbon. Tipe di luar tabel (pelajar, siswi, anak, santri, kurir, haji) tidak pernah minta utang di kasir. Kang Dadan hanya berutang lewat quest cerita, bukan di kasir.

### Yang tidak mengembalikan

Tidak ada karakter yang selalu kabur. Peluang gagal bayar diundi per utang, bukan per nama.

- 10% utang langsung ditandai "susah bayar" begitu kamu memberikannya. Warga ini tidak datang pada hari janji.
- Kalau tidak ditagih sampai lewat 3 hari dari hari janji, statusnya otomatis jadi "Diikhlaskan" dan uangmu hangus.
- Penagihan dilakukan lewat Buku Hutang, sekali sehari per utang. Peluang berhasil: Halus 45%, Tegas 80%. Tiap percobaan menambah 15%, dan tagihan ketiga pasti berhasil.
- Kasus paling parah: pembeli tanpa nama dengan utang Rp50.000 ke atas. Saat kamu tagih pertama kali, ada 50% peluang dia "pindah rumah" dan utangnya hilang permanen, tidak bisa ditagih lagi. Warga bernama tidak bisa pindah rumah.

### Yang mengembalikan

Mayoritas bayar sendiri tanpa perlu ditagih.

- 90% utang dibayar pada hari janji, yaitu 1-2 hari setelah kasbon dan digeser ke hari buka berikutnya kalau warung libur. Dia datang ke warung antara jam 10.00 dan 15.30.
- Kalau telat lalu datang setelah ditagih, ada tiga pilihan: lunasi penuh (akrab -2), cicil separuh (akrab +2, sisa tetap di buku), atau ikhlaskan (akrab +6 dan dapat ulasan bintang 5).
- Semua utang dari quest warga dijamin lunas, tidak pernah kena undian 10% gagal bayar. Daftar questnya ada di bagian 5. Quest Warga.

| Quest | Karakter | Jumlah | Jatuh tempo |
|---|---|---|---|
| Kasbon Bu Ida | Bu Ida | Rp60.000 | 14 hari |
| Motor Kang Asep Mogok | Kang Asep | Rp120.000 | 3 hari |
| Istri Kang Dadan Melahirkan | Kang Dadan | Rp150.000 | 5 hari |
| Perkakas Mang Ujang | Mang Ujang | Rp100.000 | 4 hari |
| Hama Wereng di Sawah | Abah Karta | Rp200.000 | 6 hari |
| Dimas Masuk SMK | Dimas | Rp75.000 | 7 hari |

### Buku Hutang

Catatan kuning di kamar Pak Misran. Isinya kolom Nama, Jumlah, Tgl, dan Keterangan.

- Janji bayar 12 Nov: belum jatuh tempo.
- Mau datang bayar: sudah janji datang setelah ditagih.
- Telat 3 hari!: lewat janji dan belum ditagih.
- Lunas 13 Nov: sudah dibayar penuh.
- Diikhlaskan: utang dihapus, uang tidak kembali.
- Pindah rumah, hilang: pembeli tanpa nama kabur, utang hangus permanen.

### Efek ke hubungan

- Kasih kasbon: akrab +4 dan dapat ulasan bintang 5.
- Tolak kasbon: akrab -6, dan tipe pembeli itu 65% lebih jarang datang selama 7 hari.
- Tagih tegas: akrab -3 untuk warga bernama, dan 30% peluang dapat ulasan jelek ("ditagih kayak debt collector").
- Lunasi penuh setelah ditagih: akrab -2. Cicil: +2. Ikhlaskan: +6.

### Tips kasbon

- Kasbon bagus untuk menarik pelanggan, bukan untuk menambal kas. Uang keluar dulu, baru kembali 1-2 hari kemudian.
- Jangan biarkan 4 slot utang aktif penuh. Selama penuh, permintaan kasbon lain otomatis tidak muncul.
- Pembeli tanpa nama dengan belanja Rp50.000 ke atas adalah risiko terbesar. Kalau mau aman, tolak yang nominalnya besar.
- Tagih di hari telat pertama, jangan menunggu. Tagihan ketiga pasti berhasil, dan gaya tegas paling cepat.
- Warga bernama tidak bisa "pindah rumah", jadi utang mereka selalu bisa dikejar sampai lunas.

## 8. Daftar Harga

Daftar harga jual semua barang, ikan, dan buah di Pasar. Modal = harga beli, Jual = harga jual ke pelanggan.

### 8.1 Harga Barang


| Nama Barang | Modal | Jual | Keuntungan | Peluang |
|---|---|---|---|---|
| Mie goreng | Rp2.500 | Rp3.500 | Rp1.000 | 10 |
| Mie rebus | Rp2.500 | Rp3.500 | Rp1.000 | 8 |
| Minyak goreng 1 L | Rp17.000 | Rp19.500 | Rp2.500 | 6 |
| Galon isi ulang | Rp6.000 | Rp8.000 | Rp2.000 | 4 |
| LPG 3 kg | Rp18.000 | Rp22.000 | Rp4.000 | 3 |
| Beras 1 kg | Rp13.000 | Rp15.000 | Rp2.000 | 4 |
| Telur | Rp2.000 | Rp2.500 | Rp500 | 6 |
| Ciki | Rp1.500 | Rp2.500 | Rp1.000 | 8 |
| Permen | Rp200 | Rp500 | Rp300 | 6 |
| Biskuit | Rp2.000 | Rp3.000 | Rp1.000 | 6 |
| Air mineral 600 ml | Rp2.500 | Rp4.000 | Rp1.500 | 7 |
| Teh manis botol | Rp3.000 | Rp4.500 | Rp1.500 | 6 |
| Kopi susu botol | Rp4.500 | Rp6.500 | Rp2.000 | 4 |
| Minuman soda kaleng | Rp5.000 | Rp7.000 | Rp2.000 | 4 |
| Minuman energi | Rp5.000 | Rp7.000 | Rp2.000 | 4 |
| Minuman sachet | Rp1.000 | Rp1.500 | Rp500 | 6 |
| Kerupuk | Rp500 | Rp1.000 | Rp500 | 7 |
| Sayuran (cabai, bawang, tomat) | Rp4.000 | Rp5.000 | Rp1.000 | 5 |
| Obat warung | Rp2.500 | Rp3.500 | Rp1.000 | 3 |
| Buku tulis | Rp3.000 | Rp4.500 | Rp1.500 | 3 |
| Rengginang Nenek Sumi | Rp3.000 | Rp5.000 | Rp2.000 | 4 |
| Makanan kucing | Rp6.000 | Rp8.000 | Rp2.000 | 3 |
| Gula pasir 1/2 kg | Rp8.500 | Rp10.000 | Rp1.500 | 5 |
| Teh celup | Rp6.500 | Rp8.500 | Rp2.000 | 3 |
| Sabun mandi | Rp3.000 | Rp4.500 | Rp1.500 | 4 |
| Deterjen bubuk | Rp8.000 | Rp10.000 | Rp2.000 | 4 |
| Susu kotak | Rp3.500 | Rp5.000 | Rp1.500 | 4 |
| Es krim | Rp3.000 | Rp5.000 | Rp2.000 | 4 |
| Kurma 250 g | Rp12.000 | Rp15.000 | Rp3.000 | 3 |
| Sirup botol | Rp13.000 | Rp16.000 | Rp3.000 | 3 |
| Roti | Rp3.000 | Rp4.000 | Rp1.000 | 4 |
| Jamu kunyit asam | Rp3.500 | Rp5.000 | Rp1.500 | 3 |
| Top-up Saldo E-Wallet Rp10.000 | Rp10.000 | Rp11.000 | Rp1.000 | 3 |
| Paket data 2 GB | Rp12.000 | Rp14.000 | Rp2.000 | 3 |
| Paket data 5 GB | Rp25.000 | Rp28.000 | Rp3.000 | 2 |
| Paket data 10 GB | Rp45.000 | Rp49.000 | Rp4.000 | 1 |
| Token listrik Rp20.000 | Rp20.000 | Rp22.000 | Rp2.000 | 2 |



---



**Jam laris (barang lebih sering diminta di jam tertentu):**
- Air mineral 600 ml: jam 11-15
- Teh manis botol: jam 11-16
- Kopi susu botol: jam 6-9
- Minuman soda kaleng: jam 16-21
- Minuman energi: jam 10-16
- Minuman sachet: jam 6-10
- Kerupuk: jam 11-14
- Sayuran (cabai, bawang, tomat): jam 6-10
- Buku tulis: jam 6-8
- Buku tulis: jam 13-15
- Rengginang Nenek Sumi: jam 15-18
- Gula pasir 1/2 kg: jam 6-10
- Gula pasir 1/2 kg: jam 15-18
- Teh celup: jam 6-10
- Sabun mandi: jam 15-19
- Deterjen bubuk: jam 7-11
- Susu kotak: jam 6-9
- Susu kotak: jam 12-15
- Es krim: jam 11-16
- Roti: jam 6-10
- Roti: jam 15-18
- Jamu kunyit asam: jam 6-9
- Jamu kunyit asam: jam 15-18

### 8.2 Harga Ikan

Ikan hasil mini-game memancing di area sawah. Disimpan di Tas dan dijual di Pasar. Harga per ekor.

| Ikan | Harga jual (Rp) | Kemungkinan muncul | Jendela ketuk (detik) | Keterangan |
|---|---|---|---|---|
| Ikan wader | 500 | 55 | 0,8 | Biasa |
| Ikan mujair | 1500 | 27 | 0,75 | Biasa |
| Ikan nila | 2000 | 12,5 | 0,7 | Biasa |
| Ikan lele | 3000 | 4 | 0,6 | Biasa |
| Ikan gabus | 5000 | 1,2 | 0,5 | Langka |
| Ikan baung | 10000 | 0,3 | 0,42 | Langka |
| Ikan dewa | 100000 | 0,6% (legendaris) | 0,3 | Legendaris |

Catatan: makin kecil angka = makin langka. Mulai v1.2 **ikan mahal jauh lebih langka** (mis. lele dari 12% jadi 4%, gabus dari 6% jadi 1,2%, baung dari 2% jadi 0,3%). Ikan dewa adalah legendaris: peluang 0,6% per ikan yang menyambar, diundi terpisah, tidak ikut bonus lemparan jauh dan tidak ikut digandakan iklan x2. Jendela = detik untuk mengetuk saat pelampung tenggelam (ikan langka lebih gesit).



### 8.3 Harga Buah
Buah hasil mini-game petik buah di area sawah. Disimpan di Tas dan dijual di Pasar. Harga per buah.

| Buah | Harga jual (Rp) | Kemungkinan muncul | Keterangan |
|---|---|---|---|
| Jambu air | 500 | 45 | Biasa |
| Sawo | 700 | 25 | Biasa |
| Mangga | 1000 | 20 | Biasa |
| Alpukat | 2000 | 10 | Langka |
| Kelapa | 1500 | 0 | Tidak muncul acak (dapat dari pohon) |

Catatan: makin kecil angka = makin langka. Kelapa tidak muncul acak di mini-game petik; didapat dari pohon kelapa yang tumbuh di area sawah.

### 8.4 Harga Beli: Belanja Online vs Grosir

Dua cara mengisi stok warung: **Belanja Online** (aplikasi HP, lewat agen) dan **Grosir** (kios Haji Maman di pasar). Harga keduanya berubah setiap hari, tapi mekanismenya berbeda.

**Belanja Online**

- Harga dasarnya = harga beli (kolom Modal di 8.1).
- Setiap pagi, 1-3 barang kebagian **promo harian** dengan diskon acak **10%, 15%, atau 20%**. Diumumkan lewat chat "Sales Grosir" (mis. *Promo khusus hari ini: beras 15%, telur 10%*).
- Barang **khas agen**, yaitu barang yang terbuka karena cerita warga **ditolak** (mis. Susu Sekolah setelah menolak "Ucup Ingin Sekolah") harganya **10% lebih mahal** dari harga dasar.
- Harga akhir dibulatkan ke kelipatan Rp100.
- Mulai v1.0, daftar barang di aplikasi diurutkan dari **stok paling sedikit** (stok di rak + kiriman yang sedang jalan), jadi barang yang hampir habis muncul paling atas.
- Peringatan **stok menipis** muncul kalau stok barang (termasuk kiriman) tinggal **5 atau kurang** (sebelumnya 2).
- Mulai v1.2, stok tiap barang paling banyak **100**. Stok lama yang lebih dari 100 tetap aman dan bisa dijual.
- Aplikasi punya filter **Stok di bawah 5** dan **Diskon**; keduanya bisa dipakai bersamaan. Tampilan juga lebih lega, jadi lebih banyak barang terlihat sekaligus. Saldo QRIS tampil di layar belanja.

**Grosir (Haji Maman)**

- Kiosnya di pasar, di antara kios toples dan kios buah.
- Harganya **acak setiap hari**, tapi ada patokan tetap:
  - **45%** kemungkinan lebih murah: **85%-90%** dari harga modal Belanja Online.
  - **55%** kemungkinan lebih mahal: **105%-120%** dari modal.
  - Pembulatan: kelipatan Rp50 untuk harga di bawah Rp1.000, kelipatan Rp100 untuk Rp1.000 ke atas.
- Barang yang sedang dapat promo harian tidak dijual di grosir.
- Barang yang dibeli masuk ke **Tas** dulu, baru ditata ke rak warung.
- Salah pencet bisa dibatalkan satu-satu lewat tombol **"Batal 1"** (v0.39): barang kembali ke Tas, uang dikembalikan, total belanja dikurangi.

**Perbedaan utamanya**

- Tidak ada selisih harga tetap di antara dua kanal. Keduanya berubah tiap hari.
- Di aplikasi Belanja Online, diskon promo yang sedang aktif selalu terlihat (label "PROMO -x%").
- Barang khas agen selalu minimal 10% di atas harga belinya.
- Semua harga dihitung di dalam game, jadi tidak butuh internet; internet hanya untuk cek lisensi, cek versi, kode redeem, papan online, dan pengiriman data.

### 8.5 Atur Harga Jual

Harga jual tiap barang bisa diubah sendiri lewat aplikasi **Harga Jual** di HP, atau tombol **− / +** di panel belanja stok. Kolom Jual di tabel 8.1 adalah harga disarankan, bukan harga mati.

- Langkah perubahan Rp100 untuk barang di bawah Rp10.000, dan Rp500 untuk barang Rp10.000 ke atas.
- Batas bawah: harga modal + Rp100 (tidak bisa jual rugi), kecuali harga pasaran sedang di bawah itu, maka batas bawahnya ikut pasaran.
- Batas atas: **130%** dari harga disarankan (dibulatkan ke langkah harga), atau minimal harga pasaran kalau pasaran sedang lebih tinggi.
- Angka berhenti tepat di harga disarankan dan harga pasaran, jadi tidak ada harga yang "nyangkut" di antaranya.
- Mulai v1.2, harga jual yang terlalu mahal **lebih sering ditolak pembeli**.
- Di atas pasaran: untung per barang lebih besar, tapi pembeli mulai mengeluh. Peluang mengeluh naik dari 0% (harga = pasaran) sampai 90% di batas atas 130%. Dari yang mengeluh, separuhnya tetap membeli (ulasan bintang 2), separuhnya batal dan menulis ulasan bintang 1.
- Di bawah pasaran: untung lebih kecil, tapi warung lebih ramai dan pembeli lebih sabar. Efeknya dihitung dari rata-rata selisih semua barang: maksimal 20% lebih murah = sekitar 30% lebih ramai dan 20% lebih sabar.
- Harga pasaran mulai dilaporkan di **Level 2** lewat chat "Info Harga Pasaran" tiap Senin. Nilainya bergerak 80%-125% dari harga disarankan, 3-5 barang berubah tiap minggu, dan selisihnya menyusut separuh tiap minggu kalau tidak berubah lagi.
- Kalau harga terlalu mahal, pembeli bisa mengeluh lewat pop-up dan game menawarkan langsung membuka aplikasi Harga Jual di barang yang dimaksud.

### 8.6 Kurir & Ongkir

Saat checkout di Belanja Online, barang bisa dikirim lewat tiga pilihan kurir. Ongkir dibayar sekali saat memilih kurir dan berlaku untuk seluruh belanja hari itu; kurir yang sudah dipakai tidak bisa diganti sampai besok.

| Kurir | Waktu sampai | Ongkir | Keterangan |
|---|---|---|---|
| Reguler | ±30 detik | Rp10.000 | Gratis sampai Level 2 |
| Cepat | ±20 detik | Rp20.000 | - |
| Instan | Langsung sampai | Gratis | Berlaku 2 hari: hari ini dan besok |

- Kurir Instan didapat gratis kalau sudah punya Tanpa Iklan, atau dengan menonton 1 iklan. Selama masih aktif, pilihan kurir lain terkunci.
- Patokan durasi kirim dari reputasi = 20 detik. Upgrade **Langganan kurir cepat** memotong waktu antar 30%, dan motor dari Wishlist membuat waktu kirim ×0,6.
- Pilihan kurir tersimpan per hari. Kalau sudah memakai Reguler atau Cepat, belanja berikutnya di hari yang sama tetap memakai kurir itu tanpa ongkir tambahan.
- Reputasi tinggi dan upgrade kurir juga mempercepat antaran.
- **Stok minimum buka warung**: tiap barang yang sudah terbuka harus punya minimal **2 stok** (kecuali gas dan galon titipan pangkalan, yang baru boleh dijual setelah izin agen keluar). Barang yang masih dikirim kurir belum dihitung. Di Belanja Online ada tombol **Lengkapi stok** untuk membeli semua kekurangan sekaligus.

### 8.7 Saldo Layanan

Barang bertipe **layanan** (e-wallet, paket data, token listrik) tidak memakai stok rak, tapi **saldo layanan**. Saldo awalnya **Rp50.000** dan bisa diisi lewat tombol **Isi +50.000** di Belanja Online, panel belanja, atau Warga Bank.

- Kalau pembeli meminta layanan sementara saldo kurang, game otomatis mengisi Rp50.000 dari laci berulang sampai cukup, asal uang laci masih minimal Rp50.000 per pengisian.
- Penjualan layanan memotong saldo, bukan jumlah barang di rak.
- Kalau saldo tetap di bawah modal, barang layanan tidak bisa dijual dan pembeli akan bilang saldonya kurang.

### 8.8 Barang Titipan Sales (Roti & Jamu)

Selain dibeli sendiri, **roti** dan **jamu** datang sebagai titipan sales. Roti dititipkan Kang Dede, jamu Kang Oding. Barang ini tidak bisa dibeli lewat Belanja Online.

- Kunjungan pertama hari ke-3 (jamu satu hari lebih lambat), setelah itu tiap 4-7 hari. Kalau stok habis, sales bisa dipanggil lagi hari itu juga.
- Jumlah titip per kunjungan: **10** (Level 1-4), **20** (Level 5-7), **30** (Level 8 ke atas).
- Roti basi setelah **7 hari** dan stoknya berkurang otomatis; jamu tidak basi.
- Saat sales datang, kamu membayar barang yang sudah laku × modal: roti Rp3.000, jamu Rp3.500. Kalau uang tidak cukup, selisihnya jadi tunggakan.

### 8.9 Kondisi Pasaran

Harga pasaran (Lihat 8.5) tidak bergerak acak murni di Casual. Ada tiga kondisi:

| Kondisi | Syarat | Efek |
|---|---|---|
| Susah | 25+ hari di level yang sama, atau bantuan > 0,3, atau (Level 3+ dan hari/level ≥ 35) | Barang yang harganya di bawah pasaran direset ke 100%. Barang terpilih naik 5%-20%. |
| Normal | Tidak memenuhi syarat di atas | Perubahan 5%-20% acak. |
| Lancar | Level 3+ dan (hari/level ≤ 12 atau uang ≥ Rp1.500.000) | 1-2 barang naik 5%-10%, sisanya turun 5%-15%. |

Tiap minggu 3-5 barang berubah, kelipatan 5%, dan selisih lama menyusut separuh kalau tidak berubah lagi.

### 8.10 Saldo QRIS & Tarik Sebagian

Uang dari pelanggan yang membayar lewat QRIS masuk ke **saldo digital**, bukan langsung ke laci. Saldo ini otomatis dipakai kalau uang laci kurang saat belanja online.

Mulai v1.0, saldo bisa ditarik ke laci **sebagian**, tidak harus semuanya:

- Pilih nominal **Rp50.000** atau **Rp100.000**, atau tarik **semua** saldo.
- Tombol tarik ada di aplikasi **Warga Bank** (bagian saldo digital).
- Penarikan semua memakai konfirmasi singkat supaya tidak terpencet tanpa sengaja.

## 9. Daftar Upgrade


Daftar upgrade warung. Level = level tugas yang dibutuhkan. Harga = harga beli (sekali beli, permanen). **Mulai v1.2, semua harga upgrade naik 25% kecuali Etalase kaca.**

| Nama | Level | Harga | Biaya/hari |
|---|---|---|---|
| Etalase kaca | 1 | Rp425.000 | - |
| Kipas angin | 2 | Rp520.000 | Rp1.000 |
| Lampu LED terang | 2 | Rp620.000 | Rp1.000 |
| Spanduk baru | 3 | Rp830.000 | - |
| Bangku tunggu | 3 | Rp940.000 | - |
| Langganan kurir cepat | 4 | Rp1.040.000 | - |
| Radio | 5 | Rp1.245.000 | Rp500 |
| Pembayaran QRIS | 6 | Rp1.455.000 | Rp500 |
| CCTV | 7 | Rp2.490.000 | Rp1.000 |
| Genset | 8 | Rp2.075.000 | Rp1.500 |
| TV warung | 9 | Rp3.190.000 | Rp2.000 |
| WiFi gratis | 10 | Rp1.105.000 | Rp3.000 |
| Motor (Wishlist) | - | Cicilan | Rp5.000/hari |


**Detail tiap upgrade:**

- **Etalase kaca** (level 1, Rp425.000): Etalase kaca berisi jajanan di depan Pak Misran. Wajib dibeli di hari pertama (modal awal sudah termasuk). Waktu melayani +1 detik, 5% lebih sering memesan beberapa barang. Pembeli 6% lebih ramai.
- **Kipas angin** (level 2, Rp520.000 + biaya harian Rp1.000): Warung jadi sejuk. Semua pelanggan 25% lebih sabar, dan tidak ada lagi keluhan "gerah" di ulasan. Pembeli 6% lebih ramai. Listrik +Rp1.000/hari.
- **Lampu LED terang** (level 2, Rp620.000 + biaya harian Rp1.000): Warung terang benderang, menarik pembeli sore dan malam. Pembeli 5% lebih ramai sepanjang hari (mulai pukul 15.00 +20% lagi), dan tidak ada lagi keluhan "lampu redup" di ulasan. Listrik +Rp1.000/hari.
- **Spanduk baru** (level 3, Rp830.000): Spanduk mencolok di bawah papan nama warung. Sepanjang hari pembeli 8% lebih ramai.
- **Bangku tunggu** (level 3, Rp940.000): Bangku untuk pelanggan yang menunggu giliran. Antrean bisa lebih panjang (+1 orang) dan pelanggan yang mengantre 25% lebih sabar. Tidak ada lagi keluhan "ngantre sambil berdiri" di ulasan. Pembeli 5% lebih ramai.
- **Radio** (level 5, Rp1.245.000 + biaya harian Rp500): Lagu dangdut menemani pelanggan. Pelanggan yang puas 50% lebih sering menulis ulasan bagus. Tidak ada lagi keluhan "warungnya sepi" di ulasan. Pembeli 4% lebih ramai. Listrik +Rp500/hari.
- **WiFi gratis** (level 10, Rp1.105.000 + biaya harian Rp3.000): Router WiFi untuk pembeli. Anak muda dan tukang ojek senang mampir sambil online: sepanjang hari pembeli 6% lebih ramai. Internet +Rp3.000/hari.
- **Langganan kurir cepat** (level 4, Rp1.040.000): Supplier memakai kurir langganan: waktu antar kurir reguler dan cepat 30% lebih singkat. Pembeli 3% lebih ramai.
- **Pembayaran QRIS** (level 6, Rp1.455.000 + biaya harian Rp500): Sekitar 1 dari 3 pelanggan bayar pakai scan QR, uangnya masuk saldo digital (tarik ke laci lewat Warga Bank; sejak v1.0 bisa sebagian - lihat 8.10). Waktu melayani +2 detik, peluang tip +10%, tidak ada lagi keluhan "belum bisa QRIS" di ulasan. Pembeli 2% lebih ramai. Biaya layanan QRIS Rp500/hari.
- **Genset** (level 8, Rp2.075.000 + biaya harian Rp1.500): Listrik cadangan. Saat mati listrik, warung tetap terang dan kulkas tetap dingin. Pembeli 2% lebih ramai. Bensin & perawatan Rp1.500/hari.
- **CCTV** (level 7, Rp2.490.000 + biaya harian Rp1.000): Kamera pengawas. Kejadian buruk (pencurian, palak) jauh berkurang. Pembeli 1% lebih ramai. Listrik +Rp1.000/hari.
- **TV warung** (level 9, Rp3.190.000 + biaya harian Rp2.000): TV tabung di atas meja kecil: pembeli betah menunggu sambil menonton. Kesabaran saat antre +30% dan antrean boleh 1 orang lebih panjang. Listrik +Rp2.000/hari.

- **Motor** (Wishlist, cicilan): Motor untuk narik ojek (OjekKampung). Beli di aplikasi Wishlist, bisa dicicil (uang muka + cicilan bulanan). Matel (debt collector) datang kalau telat bayar, motor bisa disita. Kalau motor disita, OjekKampung tidak bisa dipakai sampai beli/cicil motor lagi.

**Isi aplikasi Wishlist:**

| Barang | Terbuka | Harga | Cara bayar |
|---|---|---|---|
| HP baru | Level 1 | Rp6.000.000 | Tunai |
| Motor | Level 3 | Rp12.000.000 | Tunai atau cicilan |
| Rumah baru | Level 6 | Rp18.000.000 | Tunai |

- Motor dicicil: uang muka Rp2.000.000, sisanya Rp10.000.000 dibagi 10 angsuran Rp1.000.000, jatuh tempo tiap 30 hari.
- Telat bayar angsuran: matel datang, motor ditarik, dan uang cicilan yang sudah dibayar hangus. Motor harus dibeli atau dicicil ulang.
- Punya motor membuat kurir mengantar barang 40% lebih cepat (waktu kirim ×0,6), selain membuka OjekKampung.
- Rumah baru membuat semua pengurasan energi berkurang 15%.

Catatan: efek total upgrade maksimal +50% keramaian dan +85% kesabaran.

## 10. Panduan Mini-Game

### Mini-Game Mancing (Ikan)

Lokasi: area sawah. Setiap lemparan memakai 3% energi (v1.0; sebelumnya 5%; tiap lemparan = 3 menit game), tanpa batas waktu, jadi bisa berhenti kapan saja. Rata-rata sekali mancing menghasilkan sekitar Rp10.000. Jam mancing: 06.00-20.00 (dengan suasana senja).

Cara main:
1. Lemparkan joran ke air
2. Tunggu pelampung tenggelam
3. Ketuk saat pelampung tenggelam (jendela waktu berbeda per ikan)
4. Ikan yang didapat masuk ke Tas

Jendela ketuk (detik): ikan langka lebih gesit (waktu lebih pendek).

Bonus:
- Lemparkan jauh = peluang ikan langka lebih tinggi
- Iklan x2 = menggandakan jumlah ikan (kecuali ikan dewa)
- Ikan dewa: legendaris, peluang 0.5% per ikan yang menyambar, diundi terpisah

### Mini-Game Petik Buah

Lokasi: area sawah. Memetik buah tidak memakai energi. Rata-rata sekali petik menghasilkan sekitar Rp9.000.

Cara main:
1. Pilih pohon buah
2. Ketuk buah yang matang
3. Buah yang didapat masuk ke Tas

Buah yang bisa didapat: jambu air, sawo, mangga, alpukat, kelapa.
Kelapa tidak muncul acak; didapat dari pohon kelapa yang tumbuh di area sawah.


### Detail Pohon Buah

| Buah | Jumlah di pohon | Hari tumbuh (matang) |
|---|---|---|
| Kelapa | 5 | 4 hari |
| Jambu air | 8 | 2 hari |
| Mangga | 5 | 4 hari |
| Alpukat | 4 | 5 hari |

### Aturan Mini-Game

- Mancing: energi -3% per lempar (v1.0; sebelumnya -5%), 3 menit game per lempar, jam 06.00-20.00 (suasana senja). Getaran HP saat ikan menyambar lebih terasa.
- Petik buah: 20 menit game, energi -0%, jam 06.00-18.00
- Buah matang menunggu dipanen (tidak busuk)
- Tas: ikan dan buah maksimal 5 per kotak (v0.39). **v0.40**: Tas kini muat **10 barang sejenis** per kotak (ikan, buah, dan barang grosir). Kalau Tas penuh, ikan lebihan dilepas kembali ke sungai dan buah yang tidak muat tidak terambil. Jual ke Bu Ida di Pasar perlu diketuk dua kali supaya tidak terjual tanpa sengaja.

### Mini-Game Kerja Sampingan

Tiap kerja sampingan punya mini-game sendiri, durasi 20 detik. Skor dibanding target menentukan upah: 90% ke atas dapat upah penuh, makin rendah makin turun sampai separuh.

| Kerjaan | Cara main | Target |
|---|---|---|
| Panen padi (Abah Karta) | Geser jari di atas padi **kuning** untuk menebas. Padi hijau jangan ikut ditebas. | 34 |
| Bikin rengginang (Nenek Sumi) | Yang **matang** ke tampah, yang **setengah matang** digoreng lagi di wajan lalu diangkat sebelum gosong, yang **gosong** dibuang ke ember. | 12 |
| Angkut material (Mang Ujang) | Ketuk untuk menjatuhkan sak semen. Minimal separuh sak harus menapak; tumpukan terlalu miring bisa ambruk. | 10 |
| Bersih-bersih masjid (Kang Fadil) | Tahan dan gosok tiap noda di sajadah dengan sikat sampai bersih. | 18 |

Mulai v1.0, padi hijau di mini-game panen perlahan **menguning** (sekitar 3-6 detik), dan selalu dijamin ada **minimal 8 rumpun kuning**, jadi tidak mungkin lagi semuanya hijau.

Empat kerjaan lain (antar pesanan, packing, sembako, nasi kotak) memakai mini-game mencocokkan:

| Kerjaan | Cara main | Target |
|---|---|---|
| Antar pesanan (Kang Asep) | Baca nama di kresek, klik rumah tujuannya. | 15 |
| Packing (Mba Giska) | Pilih kardus yang pas: kecil, sedang, atau besar sesuai barangnya. | 14 |
| Bagi sembako (Pak RT) | Lihat kartu warga, klik namanya di daftar. | 13 |
| Nasi kotak (Haji Doni) | Baca daftar isi kotak, klik lauk yang diminta. | 15 |

Kalau bermain sebagai Bu Eni setelah epilog, tiga kerjaan memakai versi lain: angkut jadi "masak sarapan tukang", antar jadi "siapkan pesanan", dan bersih masjid pakai sajadah saf perempuan.

---

### Mini-Game OjekKampung (Ride-Hailing)

Mini-game mengantar penumpang atau barang naik motor, tersedia setelah warung tutup (sore-malam). Butuh motor sendiri (beli di aplikasi Wishlist, terbuka di Level Warung tertentu).

**Syarat main:**
- Punya motor (beli di Wishlist, bisa dicicil)
- Warung sudah tutup (sore-malam)
- Buka aplikasi OjekKampung di HP
- Energi minimal 15 poin

**Aturan & batas:**

- Mulai v1.2 **tidak ada lagi batas 5 order per malam**: semua order hari itu bisa diambil sampai habis, dan **hari Jumat order dua kali lebih banyak**. Plafon penghasilan per malam tetap **acak antara Rp50.000 dan Rp100.000** per hari (kelipatan Rp5.000, cenderung di batas bawah). Kalau plafon tercapai, muncul pesan "Order malam ini sudah sepi". Yang ditampilkan sekaligus maksimal 3 order.
- Tarif di kartu order adalah **uang yang kamu terima** (bukan lagi sebelum potongan).
- Tiap order memakan **30 menit** waktu game dan **10 poin energi**.
- Ongkos per jarak: **Rp5.000-10.000**, **Rp12.000-20.000**, atau **Rp22.000-30.000**. Order "buru-buru" tambah Rp5.000; hujan ×1,25. Tip maksimal Rp5.000, plafon Rp35.000 per order.
- Skor nyetir = 40% progres perjalanan + 60% kenyamanan. Ongkos ikut skor, minimum 50% dari nilai order.
- Jam buka: mulai 07.00 saat hari libur (Jumat), atau jam tutup warung (17.00; 19.00 saat Ramadan). Tutup pukul 22.00, kecuali Kamis pukul 21.30. Mulai v1.2, sesudah kios dibeli ojek bisa narik lagi **17.00-23.30**, dan khusus **Jumat bisa dari pagi sampai malam**.

**Cara main:**
1. Ambil order dari aplikasi OjekKampung
2. Antar penumpang/barang ke tujuan (Sawah Abah Karta, Terminal kecamatan, Puskesmas, Toko Haji Maman, Rumah Bu Ida, dll.)
3. Mini-game nyetir: ketuk atas/bawah untuk pindah lajur, tahan untuk rem pelan di polisi tidur, hindari lubang dan kendaraan lawan
4. Ongkos + tip masuk ke uang warung

**Reward:**
- Ongkos Rp5.000-35.000 per antaran + tip
- Hujan: ongkos +25%, tapi jalan licin
- Energi: tiap order = sekali antar, ongkos langsung masuk

**Barang titipan (delivery):** Nasi bungkus, Galon air, Paket online, Kue pesanan, Telur 2 kg, Gas melon, yaitu barang-barang yang diantar ke tujuan tertentu (Rumah Kang Dadan, Warung Bu Enok, Apotek desa, Rumah Bu Ida, dll.)

**Cicilan motor:**
- Motor bisa dicicil (uang muka + cicilan bulanan)
- Kalau telat bayar, matel (debt collector) datang dan motor bisa disita
- Kalau motor disita, OjekKampung tidak bisa dipakai sampai beli/cicil motor lagi

### Mini-Game Bungkus Rapi (Packing)

Mini-game membungkus barang. v0.40: barang bisa diseret lagi (bug fix). Misi yang ditunda (Neng Shinta, Mas Fariz) selalu muncul sesuai daftar misi. Item baru: **Nasi bungkus**.

### Mini-Game Tip Pelanggan

Sekali sehari, kira-kira antara pukul 09.00 dan 16.30, muncul pembeli khusus yang menawarkan tip. Tawarannya keluar saat pembeli itu sampai di kasir, jadi warung harus sedang buka dan belum lewat pukul 17.00.

Jenis mini-game-nya diundi per hari, satu jenis per hari. Tip dihitung dari hasil mini-game: maksimal Rp6.000 untuk hitung kembalian dan tebak langganan, Rp5.000 untuk bungkus rapi. Hasil di bawah 30% tidak dapat tip; di atas itu nilainya dibulatkan ke Rp500 terdekat.

Mulai v1.0, plafon tip juga mengikuti **total belanja pembeli**: dibulatkan ke bawah ke kelipatan Rp500 (minimal Rp1.000), tanpa melewati plafon mini-game di atas. Sejak v1.2, tip **tidak pernah lebih besar dari total belanjaannya** (misalnya pembeli permen tidak mungkin memberi tip Rp5.000). Pembeli pembawa tip juga membawa pesanan yang lebih besar dari biasanya, dan tidak akan minta kasbon.

| Mini-game | Waktu | Target | Cara main |
|---|---|---|---|
| Hitung kembalian | 24 detik | 7 | Klik uang di laci sampai isi baki sama dengan kembalian, pakai lembar sesedikit mungkin. Isi laci terbatas. |
| Bungkus rapi | 22 detik | 18 | Seret belanjaan ke kardus: yang berat di sekat bawah, yang mudah pecah di sekat atas. Salah tempat skor −1. Tiap sekat muat 3 barang; kardus penuh diganti baru. |
| Tebak langganan | 34 detik | 14 | Hafalkan barang yang biasa dibeli tipe pembeli itu, lalu klik barang yang sama di rak. Jumlah barang yang harus diingat bertambah tiap ronde. |

### Mini-Game Cek QRIS

Setelah punya upgrade QRIS (level 6), pelanggan bisa minta mini-game "Cek QRIS" saat membayar. Mulai v1.2 mini-game ini muncul **paling banyak sekali sehari** (sebelumnya 3 kali), supaya jualan tidak sering terpotong. Muncul pagi-siang hanya saat warung buka dan belum lewat pukul 17.00. Pembeli yang dapat mini-game ini bukan pembeli yang sama dengan pembawa tip.

Cara mainnya: seret HP pembeli ke kode QRIS, lalu putuskan **TERIMA** atau **TOLAK**. Terima hanya kalau notifikasinya berhasil, nominalnya pas, nama warungnya benar, dan buktinya bukan palsu. Selain itu tolak. Durasi 39 detik dengan target **4** (v1.0; sebelumnya 7), tip maksimal Rp6.000.

Mulai v1.0 lebih mudah dibaca: HP pembeli **diperbesar 1,45×** saat mengambil keputusan, area penting disorot, dan kalau HP dilepas dalam jarak dekat langsung otomatis memindai. Kalau salah menerima/menolak, alasannya ditampilkan singkat (2,5 detik) supaya bisa belajar dari kesalahan.

### Catatan OjekKampung

- Cicilan lunas: motor jadi milik sendiri, matel berhenti menagih.
- Status di aplikasi: SIAP NARIK atau OFFLINE, sisa order malam ini, dan jam narik.

**Perubahan v1.0: rintangan di jalan**

- Komposisi rintangan: **polisi tidur 22%**, **koin 12%**, **lubang 28%**, **kendaraan lawan 38%**. Hewan (ayam/kucing), batu, bola, dan genangan dihapus.
- Lubang lebih sering mengincar: 55% muncul dekat posisi pemain, dan separuh rintangan lubang/kendaraan membawa **lubang kedua** di lajur seberang.
- Polisi tidur punya celah lebih lebar, dan 70% dicarikan celah yang tidak tepat di posisi pemain, lebih adil, tapi tetap harus rem.
- Kendaraan lawan (mobil, motor, angkot, pikap) hadir dengan warna berbeda-beda; motor lebih sering muncul, dan motor dari depan kadang berpindah lajur vertikal.
- Kecepatan jalan naik bertahap sampai **+30%** di akhir perjalanan (sebelumnya +22%); order "buru-buru" tetap lebih cepat.

**Perubahan v1.0: tampilan**

- Penumpang dan barang titipan sekarang **terlihat di motor**: penumpang duduk (warga perempuan duduk menyamping), barang berupa kardus.
- Roda berputar, kendaraan warna-warni, dan **sisa jarak** ditulis dalam meter/kilometer.


---

## 11. Kalender

### Hari & Waktu

- **Hari sekolah**: Senin-Sabtu (bukan Minggu)
- **Jam buka warung**: buka 09.00, tutup 17.00 (5 sore); selama Ramadan boleh sampai 19.00 (7 sore). Setelah kios milik (v1.0): buka kapan saja dan tutup bebas sampai 24.00, khusus Kamis ikut ronda wajib tutup 22.00.
- **Hari libur warung**: mulai v1.0 hanya **Jumat** (sebelumnya Senin dan Jumat). Pagi Jumat bebas jalan keliling kampung, sekitar jam 12.30 Pak Misran jalan sendiri ke Masjid Al-Ikhlas untuk Jumatan (jalan otomatisnya bisa dihentikan dengan joystick). Event khusus (janji ketemu warga) hanya muncul di hari libur warung, maksimal **3 janji** per libur. Setelah kios milik, warung tidak libur lagi; Jumat pun boleh buka, tapi janji warga tetap muncul.
- **Pasar (lapak Bu Ida)**: buka **05.00-21.00** (juga saat Ramadan; sejak v1.3 ikut jam bangun Pak Misran), **libur Selasa & Kamis**. Ikan dan buah dari Tas bisa dijual ke Bu Ida hanya saat pasar buka. Angkot dari pos ronda Rp2.000 sekali jalan, ±30 menit, jalan 05.00-21.00.
- **Malam**: pukul 21.00 boleh pulang tidur (hari berganti); sesudah 21.00 energi turun lebih cepat. Ronda malam Jumat (malam Kamis) kumpul di pos ronda mulai 21.00.
- **Ramadan**: selama Ramadan, beberapa event tidak muncul; warung boleh buka sampai 19.00, buka puasa sekali sehari sesudah Maghrib (18.00), tarawih 19.30-21.00.
- **Gajian (tanggal muda)**: tanggal 25 s.d. 3 (hari gajian pabrik). Warung lebih ramai.
- **Warung baru masih sepi**: keramaian hari pertama cuma **40%**, naik **6% per hari**, penuh di **hari ke-11**.
- **Jam ramai**: 09.00-10.00 dan 15.30-17.00. **Jam sepi**: 13.00-15.30.
- **Kecepatan waktu** di Pengaturan: **Lambat 1,04 / Normal 1,52 / Cepat 2,4** menit game per detik nyata. Jam buka 09.00-17.00 = 480 menit game, jadi sekitar **7,7 / 5,3 / 3,3 menit nyata**. Waktu (dan semua orang) berhenti saat HP atau jendela lain terbuka.

### Motor ke Pasar (v1.3)

Kalau sudah punya motor sendiri (Wishlist, terbuka Level 3), dekati motor yang diparkir di **samping warung** lalu pilih **Naik motor ke Pasar**.

- **Gratis** dan lebih cepat: **±15 menit** perjalanan (angkot Rp2.000, ±30 menit).
- Motor diparkir di **depan lapak Bu Ida** selama belanja; pilih **Naik motor pulang** untuk kembali ke warung.
- Kalau motor ketinggalan, ada warga yang membawanya pulang ke samping warung.
- Pasar tetap buka 05.00-21.00 dan libur Selasa & Kamis.

### Musim

- **Pagi**: 05.00-10.00 (pelanggan sedikit, tenang). Sejak v1.3 Pak Misran bangun 05.00 dan energi baru berkurang 07.00, jadi 05.00-07.00 waktu bebas tanpa biaya energi.
- **Siang**: 10.00-15.00 (ramai)
- **Sore**: 15.00-18.00 (ramai, pulang sekolah/kerja)
- **Malam**: 18.00-22.00 (sepi, kecuali event khusus)

### Hujan

Hujan mulai bisa muncul dari hari 2. Tiap minggu ada 1 hari hujan (30%), 2 hari (45%), atau 3 hari (25%). Peluangnya 35% jadi hujan seharian; kalau tidak, hujan mulai acak antara pukul 09.00 dan 16.00 dan berlangsung 150-210 menit. Hujan seharian minimal jarak 2 hari dari hujan seharian sebelumnya. Game menyiapkan ramalan cuaca untuk hari berikutnya, dan kadang Pak RT mengirim chat mendung lebih dulu (40%).

Saat hujan:

- Jeda kedatangan pembeli ×1,2, jadi warung lebih sepi. Permintaan minuman ×0,5, tapi mi rebus ×4, kopi susu ×2,5, sachet ×2,5, dan obat ×1,5.
- Tampilan jadi lebih redup.
- Tidak bisa mancing dan tidak bisa petik buah; tanah tetap basah sampai hari berganti.
- Tidak ada keluhan "gerah", jadi kipas tidak diperlukan untuk menghindari ulasan itu.
- Preman dan Fariz tidak keluar saat hujan, jadi quest yang melibatkan mereka menunggu. Warga lain tetap muncul.
- Kejadian palak dan preman nongkrong tidak aktif saat hujan.
- Di OjekKampung, ongkos +25%, tapi jalan licin, hindari lubang, ayam, genangan, dan polisi tidur.

### Kalender Hadiah (v1.2)

Aplikasi **Hadiah** di HP menampilkan kalender absen 30 hari. Bisa dibuka kapan saja, termasuk saat warung tutup. Absen **sekali per hari nyata** (tanggal WIB), dan baru terbuka setelah tutorial selesai.

| Hari | Hadiah |
|---|---|
| Hari biasa | Rp15.000 |
| 4 | Rp100.000 |
| 8 | Rp150.000 |
| 12 | Rp200.000 |
| 16 | Rp250.000 |
| 20 | Rp300.000 |
| 24 | Rp350.000 |
| 26 | Tanpa Iklan 1 hari (jadi Rp100.000 kalau sudah punya) |
| 28 | Rp400.000 |
| 30 | Baju **Kaos & sarung** (jadi Rp500.000 kalau sudah punya) |

- Butuh internet: tanggal diambil dari jam server (header HTTP), jadi jam HP yang dimajukan tidak menipu.
- Hari yang terlewat **tidak mengulang** kalender (tidak bisa dikejar besoknya).
- Sesudah hari ke-30, besoknya kalender mulai lagi dari hari 1 (siklus baru).

### Banjir (v1.2)

Sesekali datang saat **hujan seharian**. Tanda-tandanya muncul lewat chat warga dan ramalan cuaca ("waspada banjir siang hari").

Syarat & jadwal:

- Baru bisa mulai **hari ke-10**.
- Jarak minimal **14 hari** dari banjir terakhir.
- Peluang **40%** pada hari hujan yang memenuhi syarat di atas.
- Air naik acak antara pukul **10.00-13.00**, jalan sudah ditutup **20 menit sebelum** air naik.
- Air surut pukul **17.00**.
- Banjir hanya jadi kalau Pak Misran **sedang di warung** saat air mulai naik. Kalau tidak di warung, hari itu banjir batal.

Saat banjir:

- Tidak ada pembeli dan kendaraan.
- Pak Misran **tidak bisa keluar warung**, tidak bisa jalan-jalan keliling kampung, dan tidak bisa berangkat kerja sampingan.
- Kurir/supplier tidak datang, jadi stok tidak bisa diisi selama air masih tinggi.
- Ada tombol **Lewati sampai air surut** yang mempercepat waktu sampai pukul 17.00.

### Infak, Zakat & THR

Semua transaksi ini lewat aplikasi **Warga Bank** di HP.

- **Infak masjid**: Rp20.000 / Rp50.000 / Rp100.000, sekali sehari. Efeknya +1 ulasan bintang 5 dari Haji Doni.
- **Zakat fitrah**: Rp45.000, bisa dibayar mulai hari ke-81 sampai hari ke-84 (Lebaran hari ke-85). Membayar lebih awal memberi +1 ulasan bintang 5 dari Haji Doni; kalau terlewat sampai hari Lebaran, muncul ulasan bintang 2.
- **THR untuk Agus**: Rp100.000 / Rp200.000 / Rp300.000, sekali, hanya hari ke-78 s.d. 84. Kalau dikirim, Agus membantu warung lebih lama saat mudik (2 hari tambahan).

### Tarawih

Selama Ramadan, tarawih bisa diikuti pukul 19.30-21.00, **1 kali sehari**.

- Waktu game maju 60 menit dan energi berkurang 4 poin.
- Akrab Haji Doni dan Kang Fadil masing-masing +8.
- Peluang 50% mendapat ulasan bintang 5 dari jamaah masjid.

### Jajan di Pasar

Nini Onah di pasar menjual makanan yang memulihkan energi. Tiap menu bisa dibeli **1 kali sehari**, tidak bisa dipesan kalau energi sudah ≥99%, dan diblokir sebelum Maghrib (18.00) saat Ramadan.

| Menu | Harga | Energi | Waktu |
|---|---|---|---|
| Gorengan | Rp2.000 | +4 | 5 menit |
| Teh manis hangat | Rp3.000 | +6 | 5 menit |
| Kue lapis | Rp5.000 | +9 | 5 menit |
| Lontong sayur | Rp7.500 | +12 | 10 menit |
| Nasi pecel | Rp10.000 | +16 | 15 menit |

### Kerja Sampingan

Selain berjualan, Pak Misran bisa mengambil kerja sampingan dari warga (ada tanda Rp hijau di atas kepala mereka). Tiap hari biasanya hanya muncul satu kerjaan pagi dan satu kerjaan malam, bergiliran, ditambah kerjaan khusus hari libur.

| Kerjaan | Pemberi | Jam | Durasi | Upah |
|---|---|---|---|---|
| Bantu panen | Abah Karta (sawah) | 07.00-09.00 | 75 menit | Dasar |
| Bikin rengginang | Nenek Sumi | 07.00-09.00 | 75 menit | Dasar |
| Angkut material | Mang Ujang | 07.00-09.00 | 75 menit | Dasar |
| Antar pesanan | Kang Asep | 19.00-21.30 | 90 menit | Dasar |
| Bersih-bersih masjid | Kang Fadil | 19.00-21.30 | 90 menit | Dasar |
| Packing pesanan | Mba Giska | 19.00-21.30 | 90 menit | Dasar |
| Bagi sembako | Pak RT (Jumat) | 16.00-17.00 | 180 menit | Dasar × 1,5 |
| Nasi kotak Jumat | Haji Doni (Jumat) | 13.00-16.00 | 120 menit | Dasar × 1,25 |

- Upah dasar tergantung level warung: **Rp35.000** (level 1-3), **Rp40.000** (level 4-6), **Rp50.000** (level 7-10). Upah bersamaan pengali kerjaan, lalu dibulatkan ke ribuan.
- Bantu panen baru muncul setelah cerita beras Abah Karta selesai, dan bikin rengginang setelah surat Nenek Sumi. Kalau syaratnya belum selesai, kerjaan itu tidak ada di daftar.
- Menguras 10 poin energi dan butuh energi minimal 15 poin. Waktu game ikut maju sesuai durasi kerjaan.
- Hasil mini-game menentukan upah: skor 90% ke atas dapat upah penuh, lalu turun sampai separuh kalau skornya rendah.
- Dua kerjaan pertama tiap hari gratis. Kerjaan ketiga dan seterusnya harus menonton iklan dulu; kalau sudah punya Tanpa Iklan, syarat ini hilang. Sesudah kerja, ada pilihan menonton iklan lagi untuk menambah upah sebesar upah kerjaan itu (total dua kali).
- Tiap kerjaan menambah keakraban +8 dengan pemberi kerjanya.
- Di malam Kamis, kerjaan malam berhenti pukul 20.30. Selama Ramadan, kerjaan malam pindah ke 21.00-22.00 dan tidak ada kerjaan malam di malam Kamis.

### Biaya Harian & Bangkrut

- Saat menutup hari, biaya harian dipotong otomatis: **Rp10.000** (Casual) atau **Rp20.000** (Hard), ditambah biaya harian tiap upgrade yang dimiliki (lihat bagian 9).
- Kalau Pak Misran sakit, biaya harian hari itu tidak dipotong.
- Uang laci yang minus saat tutup hari dihitung satu hari minus. **Tiga hari minus berturut-turut** (Casual) atau **satu hari minus** (Hard) membuat warung bangkrut.
- Bangkrut berarti permainan berakhir dan slot itu diarsipkan; pemain memulai dari slot baru.
- Sewa kios ditagih tiap Minggu (hari ke-7, 14, 21, dan seterusnya) pukul 18.00 ke Pak Haji Rasyid. Tunggakan dibawa ke minggu berikutnya tanpa denda. **Tiga minggu menunggak** membuat kios diambil kembali dan warung bangkrut.

### Cicilan Sewa

Lewat Warga Bank, sewa bisa dicicil **Rp25.000** atau **Rp50.000** sekali bayar. Uang cicilan dipakai untuk melunasi tunggakan lebih dulu; kalau tunggakan habis, hitungan minggu tunggakan direset. Sisanya baru dipakai untuk sewa minggu ini. Ada juga tombol bayar sekarang dan tunda pada saat tagihan datang. Mulai v1.2, kalau uang di laci kurang, pembayaran sewa **otomatis memakai saldo QRIS** lebih dulu.

### Kecelakaan & Sakit

Pak Misran bisa tertabrak saat menyeberang. Kali pertama, warga patungan **Rp100.000** untuk biaya dokter. Untuk kecelakaan berikutnya, biaya Rp100.000 diambil dari laci; kalau uangnya kurang, sisanya dicatat sebagai **utang dokter** dan dipotong otomatis dari uang warung setiap tutup hari.

- Setelah tertabrak, game menjalankan dua kali tidur berturut-turut, lalu Pak Misran bangun pukul 07.00.
- Saat sakit, biaya harian tidak dipotong dan uang minus tidak menambah hitungan hari minus, jadi tidak langsung bangkrut.
- Perban muncul di kaki, lengan, atau kepala; letaknya berubah tiap kecelakaan.

### Energi

- Energi mulai 100% tiap hari. Berjalan biasa tidak memakai energi; berlari memakai 0,42% per detik (v1.0; sebelumnya 0,5%).
- Energi juga turun sendiri seiring waktu: sekitar 0,039% per menit sebelum pukul 21.00, dan 0,099% per menit sesudahnya (v1.0 lebih hemat ±17%; sebelumnya 0,047% dan 0,119%). Ramai atau sepinya warung tidak berpengaruh. **Sejak v1.3 energi tidak berkurang sebelum pukul 07.00**, jadi waktu 05.00-07.00 gratis.
- Mancing: −3% per lemparan (v1.0; sebelumnya −5%; tiap lemparan = 3 menit game). Petik buah: tanpa biaya energi. Kerja sampingan: −10%.
- **Ngopi**: +30% (v1.0; sebelumnya +50%), 1 kali sehari, butuh stok sachet / kopi susu / minuman energi, dan memakan 10 menit. Harus jeda 2 jam sebelum istirahat lagi.
- **Makan mi rebus** (baru di v1.0): +30%, 1 kali sehari, butuh stok mi rebus, dan memakan 20 menit. Terpisah dari ngopi, jadi keduanya bisa dipakai di hari yang sama.
- Saat Ramadan, ngopi dan makan mi rebus diganti opsi **buka puasa** (sekali sehari, sesudah Maghrib 18.00). Semua isi energi ditolak kalau energi sudah ≥99%.
- **Tonton iklan**: energi langsung penuh, 1 kali sehari.
- Di bawah 30%: lelah. Jalan 25% lebih pelan dan jendela melayani 15% lebih pendek.
- Di bawah 20%: tidak bisa berlari dan tidak bisa membuka warung.
- 0%: pingsan. Warga membawanya pulang, bayar mantri maksimal Rp20.000, dan besok bangun pukul 10.00.
- **Tidur**: energi penuh lagi. Jam bangun tergantung jam tidur: sebelum 22.00 bangun **05.00**, sebelum 24.00 bangun **06.00**, sebelum 01.00 bangun **07.00**, lebih dari itu bangun **08.00** (v1.3; sebelumnya 07.00/08.00/09.00/10.00).
- Rumah baru dari Wishlist membuat semua pengurasan energi 15% lebih kecil.

### Sholat Tahajud & Doa Malam Ini (v1.3)

Seminggu sekali (hari dipilih acak), Pak Misran bangun pukul **03.00**, sholat tahajud di sajadah kamar, lalu membuka menu **Doa Malam Ini**. Energi berkurang **5 poin**. Pilih **satu doa**; efeknya berlaku mulai hari berikutnya.

| Doa | Efek |
|---|---|
| Semoga warung ramai pembeli besok | Pembeli lebih ramai di hari buka berikutnya |
| Semoga 3 hari ini tidak ada yang berhutang dulu | 3 hari tidak ada warga yang minta berhutang |
| Semoga dijauhkan dari musibah 3 hari ini | 3 hari kejadian buruk lebih jarang |
| Semoga diringankan bayar sewa kios | Sewa kios berikutnya **setengah harga** (sekali; tidak tersedia kalau kios sudah milik sendiri) |
| Semoga makin akrab dengan warga besok | Semua warga akrab penuh di hari buka berikutnya (sekali) |
| Semoga warga yang berhutang segera membayar | Warga yang berhutang datang membayar di hari buka berikutnya (hanya muncul kalau ada hutang) |
| Semoga badan sehat dan kuat besok | Energi berkurang lebih lambat seharian besok (×0,75) |
| Semoga negeri ini baik-baik saja | Sama seperti doa musibah, plus doa untuk negeri |

## 12. Tips & Trik

### Tips Pemula

Untuk pemain baru mulai di v1.0, dari hari pertama sampai kebiasaan harian.

**Membuka warung (hari 1)**

- Klik HP, buka Belanja Online, lalu beli mie goreng, mie rebus, telur, biskuit, air mineral, sachet, ciki, dan permen (minimal 2 masing-masing) sebelum warung dibuka.
- Modal Rp630.000 sudah termasuk etalase kaca; Rp130.000 sisanya untuk belanja stok.
- 2 tabung gas dan 3 galon sudah dititipkan di rak, tapi belum boleh dijual sebelum izin penyalur gas dan agen air galon keluar.

**Misi utama**

- Kirim uang ke Agus lewat HP (aplikasi Wasap). Ini misi utama sekaligus salah satu tugas level, jadi dahulukan.
- Bab 1: kumpulkan Rp150.000 dalam 12 hari. Lunas membuka teh botol (barang baru, untung Rp1.500 per botol). Lewat batas bab kena denda 10% dan dialog terlambat.

**Sewa kios**

- Sewa ke Pak Haji Rasyid tiap Minggu malam: **Rp100.000 di level 1-2**, naik Rp100.000 tiap 2 level sampai **Rp500.000 di level 9-10** (mulai v1.2 sewa tetap, tidak ikut omzet). Sisakan uangnya dari omzet.

**Kebiasaan harian**

- Cek chat "Sales Grosir" tiap pagi: 1-3 barang kebagian promo 10-20%. Isi stok pas promo, hemat modal.
- Bandingkan dua kanal belanja (Belanja Online dan kios grosir Haji Maman). Harga keduanya berubah tiap hari, tidak ada yang selalu lebih murah; beli yang lebih murah hari itu.
- Isi ulang yang laris: mie goreng, mie rebus, air mineral, ciki, biskuit, telur (peluang tinggi, modal murah).
- Sesuaikan stok dengan jam laris: kopi, susu, jamu di pagi hari (jam 5-9); air mineral dan teh di siang hari (jam 11-16); soda di sore-malam (jam 16-21).

**Hindari dulu**

- Level 1-3 fokus jualan dulu. Kipas dan lampu baru terbuka di level 2, spanduk dan bangku di level 3. CCTV, genset, dan QRIS baru penting setelah kejadian acak mulai sering (mulai hari ke-2, 45% per hari).
- Jangan membayar Rp1.000.000 ke Fariz (Program Bantuan Warung). Itu jebakan, uangnya tidak kembali.
- Jangan mancing tiap hari: tiap lempar memakan 3% energi (bar di atas layar) dan 3 menit waktu game. Petik buah tidak memotong energi, jadi selang-selingkan keduanya.

**Sering dilupakan**

- Buka tab jalan-jalan tiap hari. Cerita warga non-acak muncul di lokasi dan jam tertentu; membantu warga menaikkan reputasi dan membuka barang baru.
- Baca dialog warga sebelum memilih. Membantu dan menolak membuka jalur berbeda, contoh: menolak "Ucup Ingin Sekolah" membuka jalur Susu Sekolah (setelah "Hadiah Lomba HUT Sekolah" selesai).
- CCTV memangkas pencurian (peluang 8% per hari turun jadi 2%) dan mengurangi palak preman. Untuk tikus, yang membantu adalah hubungan dengan Neo (kucing Bu Ida) di aplikasi HP: minimal "Tetangga akrab". CCTV tidak banyak menolong untuk tikus.

---

### Tips dari Pemain Leaderboard

Tips dari komunitas, dikumpulkan dari [posting Threads](https://www.threads.com/@khaillatunissa_abqariah/post/Dfw_dfbI9f_) oleh @khaillatunissa_abqariah. Ini pengalaman main dari pemain, bukan aturan resmi dari developer.

1. Jangan pelit kasih hutang.
2. Kalau tidak dibayar, ikhlasin saja.
3. Tonton iklan agar dapat uang lebih banyak; kalau bisa, beli versi Tanpa Iklan.
4. Ikuti semua quest harian.
5. Ajak ngobrol semua warga, termasuk Neo.
6. Saat libur dagang, cek setiap tempat untuk menyelesaikan quest cerita.
7. Siapkan stok belanjaan sebelum buka warung.
8. Tolong warga yang meminta bantuan, karena berpengaruh pada reputasi warung.
9. Promosikan tokomu setiap 2 hari sekali agar semakin banyak yang datang membeli.

---

### Tips Umum

- **Fokus upgrade**: beli etalase (level 1) dan kipas (level 2) dulu untuk meningkatkan pelanggan.
- **Stok**: selalu isi stok barang yang laris (mie goreng, teh botol, air mineral, ciki).
- **Reputasi**: bantu warga untuk meningkatkan reputasi dan mendapat ulasan bintang 5.
- **Iklan**: aktifkan iklan untuk mendapat bonus (x2 ikan, dll). Mode pengembang bisa dimatikan dengan kode khusus.
- **Pindah HP**: progress bisa dipindah ke HP baru lewat kode transfer. Pembelian "Tanpa Iklan" ikut pindah (diverifikasi ke toko). Kalau belum ikut, buka game sekali di HP lama (versi terbaru, dengan internet) lalu buat kode lagi, atau tekan "Pulihkan Pembelian" kalau memakai akun Google yang sama.
- **Hemat energi**: jangan mancing tiap hari (tiap lempar −3%); petik buah tidak memakai energi, jadi aman diulang. Ngopi (+30%) dan makan mi rebus (+30%) bisa dipakai di hari yang sama.

### Iklan Harian

Iklan dipakai di beberapa tempat. Kalau sudah punya **Tanpa Iklan**, semua aksi ini jadi gratis otomatis, tetapi batas harian tertentu tetap berlaku.

| Tempat | Batas / syarat | Hasil |
|---|---|---|
| Bar energi | 1 kali sehari | Energi langsung 100% |
| Kerja sampingan | 2 kerjaan pertama gratis; setelah itu wajib iklan | Bisa kerja lagi |
| Kerja sampingan, setelah selesai | 1 iklan pilihan | Upah berlipat (total 2×) |
| Kurir Instan | 1 iklan | Gratis 2 hari: hari ini dan besok |
| Upgrade | Maksimal 6 iklan per upgrade, tidak untuk etalase | Diskon 10% per iklan |
| Promosi warung | Bisa tiap 2 hari (jeda 2 hari) | Pembeli **+20%** selama 2 hari |
| Hasil mini-game | 1 iklan di layar hasil | Hasil tangkapan ×2 |
| Ganti nama warung | Gratis untuk pertama kali, setelah itu iklan | Nama warung berubah |

Catatan upgrade: diskon 10% per iklan bertumpuk sampai batas 6 iklan. Diskon naik jadi 30% setelah 30 hari di satu level, dan 40% saat level sudah macet. Mulai v1.2, potongan harga upgrade dari iklan dibatasi **paling banyak 60%**.

### Tips Omzet

- **Level 1-3**: fokus jual barang warung, jangan terlalu banyak upgrade.
- **Level 4-6**: tambah upgrade (spanduk, bangku, QRIS), mulai jual hasil alam.
- **Level 7-9**: upgrade mahal (CCTV, genset, TV), fokus reputasi tinggi.
- **Level 10**: WiFi gratis, maksimalkan semua.

### Tips Quest Warga

- **Baca dialog dengan teliti**: pilihan membantu atau menolak menentukan quest selanjutnya.
- **Ucup Ingin Sekolah**: membantu membuka Ucup Juara Kelas; menolak membuka Susu Sekolah (muncul setelah "Hadiah Lomba HUT Sekolah" selesai).
- **Program Bantuan Warung (Fariz)**: JANGAN bayar Rp1.000.000! Ini jebakan (tipu_fariz).
- **Janji**: hanya hari libur warung. Event khusus hanya muncul di hari libur.

### Tips Mini-Game (v1.0)
- **OjekKampung**: ambil order sore-malam setelah warung tutup. Butuh motor (beli di Wishlist). Hujan: ongkos +25% tapi jalan licin. Hindari lubang dan polisi tidur; kendaraan lawan bisa pindah lajur. Plafon malam kini acak Rp50.000-100.000 per hari, jadi jangan kaget kalau order tiba-tiba "sepi".
- **Bungkus Rapi**: barang bisa diseret lagi (bug fix). Misi yang ditunda selalu muncul.
- **Tas**: kini muat 10 barang sejenis per kotak (ikan, buah, barang grosir).
- **Mancing**: bisa sampai pukul 20.00 dengan suasana senja; energi per lempar turun jadi 3%.
- **Cek QRIS**: cukup 4 pembayaran, HP pembeli diperbesar saat mengambil keputusan. Baca nominal, nama warung, dan notifikasi sebelum TERIMA.
- **Panen padi**: padi hijau akan menguning sendiri; tunggu sebentar, selalu ada minimal 8 rumpun kuning.

### Tips Save & Akun
- Tautkan akun Google untuk simpanan aman di cloud (bonus Rp100.000). Di iPhone bisa juga Masuk dengan Apple.
- Cloud tidak akan menimpa simpanan di HP yang lebih maju. Ada kartu perbandingan sebelum memilih.
- Jangan hapus game untuk update, cukup tekan Update di toko.
- Simpanan cadangan otomatis, tidak hilang walau tertutup paksa.
- Pulihkan simpanan lama dari Load Save jika simpanan rusak.

### Tips Pembayaran
- Pembayaran yang belum lunas diingatkan.
- Bayar pakai pulsa, e-wallet, atau kartu supaya langsung aktif.
- "Tanpa Iklan" diperiksa ke toko dan ikut Pindah HP.

### Tips Supporter
- Dukung developer untuk dapat Lencana ★ Pendukung Awal dan nama emas di papan peringkat.
- Pembeli Tanpa Iklan dapat Gelar ★ Warga Baik Hati.
- Dukungan Rp100.000 dapat Gelar ★ Warga Peduli (platinum).

- **Mancing**: lemparkan jauh untuk peluang ikan langka lebih tinggi. Iklan x2 menggandakan jumlah.
- **Petik buah**: pilih pohon yang matang. Kelapa dari pohon kelapa, bukan dari mini-game.
- **Energi**: mancing -3% per lempar, petik buah gratis. Selang-seling agar tidak kehabisan energi.

### Belanja Grosir (Haji Maman)

- Belanja barang grosiran di Haji Maman. Kalau salah pesan, tekan tombol "Batal 1": barang dikembalikan ke Tas dan uangnya dikembalikan, total belanja grosir dikurangi.

### Buku Hutang

- Kalau warga belanja kasbon atau meminjam, jumlahnya dicatat di Buku Hutang, yang tampil seperti buku catatan asli dengan tulisan tangan tinta warna.
- Setiap hutang punya tanggal jatuh tempo (misalnya "dikembalikan 14 hari lagi").
- Kalau lewat jatuh tempo, muncul tanda "Telat X hari!".
- Tekan "Tagih!" untuk menagih pembayaran.
- Setelah dibayar, tercatat "Lunas ✓".
- Kalau warganya pindah rumah, hutangnya hilang ("Pindah rumah, hilang").

---

### Save & Akun (Cloud)

Sejak v0.40 simpanan warung bisa disimpan di cloud (akun Google) dan dipulihkan di HP baru. Di v1.0 fiturnya diperluas: akun Apple/Google di iPhone, proteksi simpanan yang lebih maju, dan menu utama yang lebih jelas.

### Kode Warung & Cadangan Otomatis (v1.2)

- Warung **otomatis dicadangkan ke server tanpa perlu login**. Kodenya ada di **menu jeda** (ketuk untuk menyalin), formatnya `W-xxxx-xxxx`.
- Ganti HP atau game terhapus? Tekan **MULAI > Pulihkan warung lama**, lalu ketik kodenya.
- Butuh internet saat memeriksa dan memulihkan kode. Kalau kode salah, muncul "Kode warung tidak ditemukan".
- **Satu kode milik satu HP.** Kalau kode itu dipakai memulihkan warung di HP lain, warung di HP ini jadi terpisah dan mendapat Kode Warung baru. Supaya tidak bingung, main di satu HP saja.
- Simpanan dari **versi game lebih baru** tidak bisa dibuka versi lama: update game dulu, kodenya tetap berlaku.
- Kalau data cadangan rusak, gunakan form **Bantuan**.
- Warung **tersimpan otomatis selama bermain**, jadi jualan tidak hilang kalau game tiba-tiba tertutup atau HP mati.
- Kalau akun Google di HP ikut mencadangkan, hapus lalu pasang lagi game di HP yang sama akan memunculkan **"Warungmu ditemukan!"**.
- Main di dua HP lebih aman: game menanyakan dulu simpanan mana yang mau dipakai. Kode Pindah HP tidak hangus kalau gagal dipakai.
- Ada peringatan kalau simpanan cloud **lebih lama** dari warung di HP ini, supaya warung tidak tertimpa tanpa sengaja (lihat Proteksi Simpanan Cloud).

### Tautkan Akun Google
- Buka Pengaturan > Akun & simpanan cloud
- Tautkan akun Google (tidak wajib, game tetap bisa dimainkan tanpa akun)
- Bonus Rp100.000 sekali per akun (masuk begitu membuka permainan)
- Simpanan dikirim otomatis ke cloud tiap beberapa menit saat bermain, dan saat game ditutup

### Pulihkan Simpanan Lama
- Load Save > Pulihkan simpanan lama: kembalikan warung dari cadangan yang masih ada di HP
- Slot-based: Slot %d, simpanan rusak bisa dipulihkan dari slot lain

### Akun di iPhone (v1.0)

- Di iPhone, tautkan akun lewat **Masuk dengan Apple** atau **Masuk dengan Google** (Pengaturan > Akun & simpanan cloud). Bonus Rp100.000 sekali per akun, tidak wajib.
- Pindahan dari Android? Pilih **Masuk dengan Google** memakai akun yang sama, lalu ambil simpanan warung dari cloud.

### Proteksi Simpanan Cloud (v1.0)

- Cloud tidak otomatis menimpa simpanan di HP yang **lebih maju**. Simpanan HP dianggap lebih maju kalau levelnya lebih tinggi, atau (level sama) harinya lebih jauh.
- Kalau simpanan cloud ternyata lebih tua dari yang di HP (level lebih rendah, atau hari tertinggal lebih dari 3), game menahan pengiriman dan menampilkan **kartu perbandingan**: dua kotak berisi nama warung, level, hari, dan uang. Yang lebih jauh ditandai **★ Lebih jauh**. Pemain yang memilih mau pakai simpanan cloud atau simpanan HP.
- Tujuannya supaya progres yang sudah jauh tidak hilang tertimpa simpanan lama.

### Menu Utama & Slot (v1.0)

- Tombol **MULAI** hanya muncul untuk pemain yang belum punya simpanan; kalau sudah pernah main, tombolnya **LANJUTKAN**.
- Mau main baru di slot lain: lewat **Load Save**, pilih slot kosong bertanda **"+ Main baru di sini"**.
- Slot yang rusak tidak lagi tampil kosong saja: muncul dialog dengan pilihan **pulihkan dari cloud** atau kirim laporan lewat form bantuan.
- Pilihan penjaga sekarang berlabel **Season 1** (Pak Misran, Level 1-10) dan **Season 2** (Bu Eni, Level 11-20).
- Simpanan dari game versi lama tidak bisa dibuka (harus update game dulu)

### Pindah HP
- Buat kode di HP lama (Pengaturan > Pindah HP)
- Ketik kode di HP baru dalam 7 hari
- Data di HP lama tidak dihapus
- Simpanan di HP lama tetap dicadangkan
- "Tanpa Iklan" ikut pindah (diperiksa ke toko)

### Tips
- Jangan hapus game untuk update, cukup tekan Update di toko aplikasi
- Simpanan aman dengan cadangan otomatis
- Kalau simpanan rusak, coba slot lain di Load Save

### Kalkulator di HP (v1.0)

Aplikasi baru di HP: **Kalkulator**. Berguna untuk menghitung kembalian, total belanja, atau bagi hasil tanpa keluar game.

- Operasi dasar: tambah, kurang, kali, bagi, dan persen.
- Angka sampai 15 digit, dengan tombol **00** dan **000** supaya cepat mengetik nominal besar.
- Layar menampilkan rumus yang sedang diketik, jadi tidak mudah lupa urutan hitungannya.

### Kemudahan Lain v1.0

- **Peringkat di HP** langsung membuka papan lebar (tidak perlu langkah tambahan).
- **Nota pesanan** tidak lagi bergetar/bergeser saat disentuh. Posisinya dikunci supaya barang di bawahnya tetap bisa diklik.
- **Kurir yang macet** otomatis diterima setelah 12 detik, jadi kiriman tidak tertahan lama.
- Keluhan "kemahalan" bisa dimatikan sehari (lihat bagian Ulasan & Bintang).

### Kemudahan Lain v1.2

- **Lemari baju** di kamar: dekati lemari, lalu ketuk **Lemari baju**. Isinya terbagi **Baju bawaan**, **Hadiah tester**, dan **Segera hadir**. Pilih baju lalu ketuk **Pakai**; yang sedang dipakai bertanda **Dipakai**. Saat ini **Kaos & sarung** sudah bisa dipakai, baju lain menyusul.
- **Pak Misran nyangkut** saat jalan-jalan? Menu jeda > Pengaturan > **"Pak Misran nyangkut? Pindahkan"**.
- **Semua tombol yang mengeluarkan uang** bertanya dulu (**Batal / Ya, bayar**), jadi uang tidak hilang karena kepencet.
- **Pengaturan suara terpisah**: Musik, Efek Suara, dan Suara Sekitar.
- **Isi Tas bisa dibuang**: pilih barangnya, tentukan jumlahnya, lalu ketuk **Buang**.
- **Mini-game bisa dijeda** dengan tombol **Jeda**.
- **Tampilan emas** untuk pop up, naik level, hasil misi, dan menu utama. Ikon aplikasi di HP tampil baru: lebih cerah, mengilap, berbayang.
- **Saldo QRIS** tampil di layar warung dan layar utama HP.
- **Belanja Online** lebih lega; panel Stok dengan daftar panjang tidak lagi terpotong di layar HP.
- **Barang pesanan sesudah warung tutup**, atau dari HP saat jalan-jalan, tetap diantar kurir.
- **Motor cicilan** tidak langsung disita kalau matel belum sempat menagih karena hujan atau Pak Misran sakit.
- **Ikan dan buah** yang sudah didapat tetap masuk Tas walau game tertutup di tengah mini-game.
- Cerita **Takjil Masjid** dan **Agus Pulang** tetap bisa diselesaikan walau tanggalnya sudah lewat; kalau uang belum cukup, selalu ada pilihan **Nanti dulu**.
- **Misi di panel kiri bisa diketuk** untuk melihat lokasi warga: gambar tempatnya, hari, jam, dan apakah orangnya bisa ditemui sekarang.
- **Panel Misi** tidak lagi menutupi Belanja Online, warga tidak membeli dagangannya sendiri, dan tanda "!" tidak muncul di tempat kosong.
- Game tidak lagi keluar sendiri di beberapa HP (Infinix Note 40 Pro 5G, Redmi Note 14 5G, POCO M7 Pro 5G) dan saat berpindah tempat.

### Kemudahan Lain v1.3

- **Pagi lebih panjang**: Pak Misran bangun **05.00**, Pasar buka **05.00**, dan energi baru berkurang **07.00**. Waktu 05.00-07.00 bisa dipakai ke pasar, keliling kampung, atau kerja sampingan tanpa biaya energi.
- **Sholat tahajud & Doa Malam Ini**: seminggu sekali Pak Misran bangun pukul 03.00 dan memilih satu doa (lihat bagian Kalender).
- **Motor ke Pasar**: gratis, ±15 menit, motor diparkir di depan lapak Bu Ida dan bisa dinaiki pulang.
- **Titipan roti dan jamu** yang habis diantar sales lebih cepat, jadi pembeli tidak menunggu lama.
- **Obrolan baru** dari tetangga dan **Grup Warga RT 05**.
- **Adu Laris** tampil baru: duel melawan pemain asli, bisa kapan saja, **10 kali sehari**.
- **Kios milik sendiri bisa dibuka lagi** sesudah ditutup, sampai pukul 24.00.
- **Papan Peringkat lebih adil**: warung dengan data tidak wajar atau hasil suntik uang dikeluarkan; Kode Warung dan Kode Pindah HP tampil tersamar.
- **Tanpa Iklan dan Dukung Kami** lebih jarang gagal. Kalau pembayaran ditolak Google Play, game menyarankan mencoba metode pembayaran lain.
- **Kalender Hadiah** tidak terkunci lagi; layar hitam sesudah menonton iklan dan game yang keluar sendiri di beberapa HP diperbaiki.

---

## 13. Papan Peringkat & Supporter Badge

Papan peringkat ("Peringkat Warung") ada di aplikasi smartphone dalam game, menampilkan top 50 warung dengan pembeli terbanyak. Data dikirim otomatis dari HP kamu beberapa kali setiap menit saat bermain, jadi tidak perlu melakukan apa-apa agar masuk papan. Mulai v1.0, membuka Peringkat di HP langsung menampilkan papan lebar.

**Panel komunitas (live):**

Panel di bawah menampilkan papan **langsung dari server resmi game** (Supabase), data yang sama dengan yang tampil di dalam game. Ada 3 tab: Sepanjang Masa, Mingguan, dan Bulanan, sama seperti di game.

<div id="papanWidget"></div>

*Catatan: papan Sepanjang Masa menumpuk sejak warung pertama dibuka. Papan Mingguan dan Bulanan mulai dari nol lagi saat periodenya berganti, jadi peringkat di ketiga tab bisa berbeda.*

### Papan Lebih Adil (v1.3)

- Warung dengan **data tidak wajar** (misalnya uang bertambah tanpa penjualan) atau hasil **jasa suntik uang** dikeluarkan dari Papan Peringkat.
- Warung yang dikeluarkan tidak bisa ikut duel resmi Adu Laris; mode **Latihan** tetap boleh.
- **Kode Warung** dan **Kode Pindah HP** kini tampil **tersamar** di layar, jadi aman saat live atau saat layar dibagikan.

### Foto Profil (v1.2)

Pilih foto tokoh untuk warungmu. Fotonya tampil di **papan peringkat** dan **Adu Laris**.

Pilihan yang tersedia: **Pak Misran, Agus, Pak RT, Mba Giska, Pak Rudi, Dimas, Neng Shinta, Bu Ida, Nenek Sumi, Ucup, Kang Asep, Abah Karta, Mang Ujang, Kang Fadil, Kang Hasan, dan Kang Dadan**.

### ADU LARIS (v1.3)

Duel jualan **1 menit** melawan warung **pemain asli**. Lawan diambil dari cuplikan Papan Peringkat; kalau tidak ada lawan online, game memakai warung bot. Sejak v1.3 Adu Laris bisa dimainkan **kapan saja**, tidak harus sesudah warung tutup. Ada **papan Adu Laris mingguan**, dan **mode Latihan** yang bisa dimainkan kapan saja.

- Duel resmi boleh dimainkan selama bukan tutorial/latihan dan belum pukul **23.30**.
- Batas **10 kali sehari** (v1.3; sebelumnya 5). Sesudah habis, ada hitungan waktu sampai terbuka lagi.
- Butuh energi minimal **15**.
- Lawan bot memakai nama warung kampung (mis. Warung Barokah, Toko Sumber Rejeki, Kios Mang Dadang).
- Hasil duel: **menang / kalah / seri**, plus hitungan **beruntun** dan **trofi**.
- **Musim Adu Laris 1.3** mereset trofi, menang, kalah, seri, dan beruntun dari musim sebelumnya.
- Warung yang dikeluarkan dari Papan Peringkat karena data tidak wajar tidak bisa ikut duel resmi; mode Latihan tetap boleh.

Cara main & skor:

- Satu duel **60 detik**, berisi **40 pembeli** dengan pola borongan **kecil, kecil, sedang, sedang, besar**.
- Tiap barang dihargai **Rp6.500**, jadi satu pesanan bernilai jumlah barang × Rp6.500 (toleransi ±5%).
- Kerjakan pesanan sebelum kesabaran pembeli habis: kesabaran mulai **13 detik** dan menyusut sampai **8 detik** di akhir duel. Pesanan **borong/besar** dapat +6 detik, dan tiap barang di atas 2 menambah +0,8 detik.
- Pelanggan yang dilayani cepat memberi **tip Rp100 per detik sisa kesabaran**.
- Beruntun **3 kali** menaikkan nilai pesanan ×1,1; beruntun **6 kali** jadi ×1,2. Pesanan yang gagal mereset beruntun.
- Skor akhir = total omzet. **Menang** kalau omzetmu lebih besar dari lawan; omzet di atas **Rp1.250.000** dianggap tidak wajar dan tidak masuk papan.
- Trofi: **+3** menang, **+1** seri, **0** kalah. Beruntun hanya naik saat menang.
- Kekuatan lawan mengikuti level warungmu (±1 level) plus beruntunmu, dengan kecenderungan jago 25%-92%.

### Papan Juara Kerja Sampingan (v1.2)

Tiap kerja sampingan punya **papan juara mingguan** yang tampil saat kamu diajak kerja. Isinya peringkat, **skor**, dan **waktu (detik)**. Kalau belum ada yang main, muncul "Belum ada juara minggu ini. Jadilah yang pertama!".

Mini-game **tidak lagi berhenti di 2x target**, jadi skormu bisa setinggi-tingginya. Catatan: bonus "capai 2x target" tetap memberi uang tambahan dan mengakhiri permainan lebih cepat kalau diinginkan. Skor yang dikirim diperiksa dulu sebelum masuk papan.

### Jempol & Lapor Nama

Di papan dalam game, kamu bisa memberi jempol ke warung lain. Batasnya **1 kali per warung per hari** dan maksimal **10 jempol per hari**, dengan syarat ID perangkat minimal 16 karakter. Tombol **⚑** dipakai untuk melaporkan nama warung yang tidak pantas; nama warung juga disaring dari kata terlarang, termasuk penyamarannya dengan angka atau simbol (mis. `0` untuk `o`, `@` untuk `a`).

### Bagikan Capaian

Tombol **Bagikan (+Rp100.000)** di kartu capaian memberi Rp100.000 sekali per simpanan. Setelah dipakai, tombolnya hilang. Mode latihan tidak mendapat hadiah ini.

### Supporter Badge (v0.40)

Sejak v0.40 papan peringkat menandai warung milik supporter. Panel di atas ikut menampilkan tanda itu, dengan warna yang sama seperti di dalam game.

- **★ Pendukung Awal**: nama **emas** untuk siapa pun yang sudah mendukung developer.
- **★ Warga Baik Hati**: pembeli Tanpa Iklan atau dukungan besar, nama tetap **emas**.
- **★ Warga Peduli**: dukungan Rp100.000, nama **platinum**.

Hadiah lain: ucapan terima kasih dari developer di genteng warungmu.

Papan di server diperbarui tiap 30 menit, dan angka jempol di atas 1.000 ditulis ringkas (1k) di dalam game.

*Cara wiki tahu: server menyimpan dua daftar kode warung: satu untuk pendukung (emas), satu untuk Warga Peduli (platinum). Kode tiap warung di papan dicocokkan dengan daftar itu, jadi warnanya bukan tebakan.*

## 14. Change Log

### Ringkasan Fitur & Perubahan v1.3

**Fitur baru**
- **Pagi lebih panjang**: Pak Misran bangun 05.00, Pasar buka 05.00, energi baru berkurang 07.00.
- **Sholat tahajud** seminggu sekali pukul 03.00, lalu pilih satu **Doa Malam Ini**.
- **Motor ke Pasar**: gratis, ±15 menit, motor diparkir di depan lapak Bu Ida.
- **Obrolan baru** tetangga dan **Grup Warga RT 05**; titipan roti/jamu diantar lebih cepat.

**Perubahan & keseimbangan**
- **Adu Laris** melawan pemain asli, bisa kapan saja, **10 kali sehari**, musim 1.3 mereset trofi.
- **Kios milik sendiri bisa dibuka lagi** sesudah ditutup sampai 24.00.
- **Papan Peringkat lebih adil**: data tidak wajar / suntik uang dikeluarkan; kode Warung & Pindah HP tersamar.

**Perbaikan**
- Tanpa Iklan dan Dukung Kami lebih andal; saran metode bayar lain kalau ditolak Google Play.
- Kalender Hadiah tidak terkunci, layar hitam sesudah iklan, dan crash di beberapa HP.

### v1.3 (build 52, November 2026)

Diverifikasi dari APK `com.neopawstudio.warunglife` versionName **1.3**, versionCode **52**, terpasang 27 November 2026. Changelog diambil dari `yang_baru.gd` (`CATATAN["1.3"]`) dan dicek silang dengan `game_state.gd`, `jelajah.gd`, `adu_laris.gd`, `papan_online.gd`, serta data `peta.json`/`warga.json`.

**Fitur baru**
- **Pagi lebih panjang**: Pak Misran bangun **05.00**, Pasar ikut buka **05.00**, dan energi baru mulai berkurang **07.00**. Pagi bisa dipakai ke pasar, keliling kampung, atau kerja sampingan.
- **Sholat tahajud**: seminggu sekali Pak Misran bangun pukul **03.00**, sholat di sajadah kamar, lalu memilih satu doa di menu **Doa Malam Ini**.
- **Motor ke Pasar**: naik motor dari samping warung, **gratis, ±15 menit**. Motor diparkir di depan lapak Bu Ida dan bisa dinaiki pulang.
- **Titipan roti dan jamu** yang habis diantar sales lebih cepat.
- **Obrolan lucu baru** dari tetangga dan **Grup Warga RT 05**.

**Lebih baik**
- **Adu Laris** tampil baru bergaya duel melawan **pemain asli**, bisa dimainkan **kapan saja**, **10 kali sehari**.
- **Kios milik sendiri** bisa dibuka lagi sesudah ditutup, sampai pukul **24.00**.
- **Papan Peringkat lebih adil**: warung dengan data tidak wajar atau hasil **jasa suntik uang** dikeluarkan dari papan.
- **Kode Warung** dan **Kode Pindah HP** tampil **tersamar**, aman saat live.

**Perbaikan**
- Tombol **Tanpa Iklan** dan **Dukung Kami** lebih jarang gagal. Kalau pembayaran ditolak Google Play, game menyarankan mencoba metode pembayaran lain.
- **Kalender Hadiah** tidak terkunci lagi.
- **Layar hitam** sesudah menonton iklan diperbaiki.
- Perbaikan game yang keluar sendiri di beberapa HP.

### Ringkasan Fitur & Perubahan v1.2

**Fitur baru**
- **Kalender Hadiah**: absen harian Rp15.000, hadiah besar tiap 4 hari sampai Rp400.000, baju Kaos & sarung di hari ke-30.
- **Kode Warung**: cadangan otomatis tanpa login; pulihkan lewat MULAI > Pulihkan warung lama.
- **ADU LARIS**: duel jualan 1 menit, papan mingguan, dan mode Latihan.
- **Foto profil**, **Papan Juara** kerja sampingan, **Lemari baju** di kamar.
- **Banjir** saat hujan seharian, lengkap dengan tombol Lewati sampai surut.
- **Filter Belanja Online** (Stok di bawah 5 dan Diskon), **buang isi Tas**, **Jeda mini-game**, **pengaturan suara terpisah**, dan **tampilan emas**.

**Ekonomi & keseimbangan**
- Harga upgrade naik **25%** (Etalase kaca tetap); kios Rp30 juta; sewa tetap Rp100.000-Rp500.000 dan hanya naik di Level 3, 5, 7, 9.
- Stok tiap barang maksimal **100**; utang minimal **Rp10.000** (cicil mulai Rp20.000).
- Ikan mahal jauh lebih langka; tip tidak melebihi total belanja.
- Cek QRIS **sekali sehari**; ojek Jumat dua kali lebih banyak; potongan upgrade maksimal **60%**.

### v1.2 (build 49, November 2026)

Diverifikasi dari APK `com.neopawstudio.warunglife` versionName **1.2**, versionCode **49**. APK ditandatangani skema v2+v3.

*Catatan sumber:* `yang_baru.gd` (`CATATAN`) memisahkan sebagian perubahan di bawah ke rilis **v1.1**: sewa tetap Rp100.000-Rp500.000, harga upgrade +25%, kios Rp30 juta, stok maksimal 100, kasbon minimal Rp10.000, ikan langka, Cek QRIS sekali sehari, tanggal emas, suara terpisah, jeda mini-game, filter/Buang Tas, ojek malam 17.00-23.30, dan plafon keringanan 60%. Wiki menggabungkannya di entri v1.2 karena build yang terpasang adalah 49.

**Fitur baru**
- **Kalender Hadiah**: absen sekali sehari dapat Rp15.000. Setiap 4 hari hadiah besar sampai Rp400.000, dan baju **Kaos & sarung** di hari ke-30. Bisa dibuka kapan saja lewat aplikasi **Hadiah** di HP.
- **Kode Warung**: warung otomatis dicadangkan ke server tanpa login. Kodenya ada di menu jeda (ketuk untuk menyalin). Ganti HP atau game terhapus? Tekan **MULAI > Pulihkan warung lama**, lalu ketik kodenya.
- **Cadangan otomatis**: warung tersimpan selama bermain, jadi jualan tidak hilang kalau game tiba-tiba tertutup atau HP mati. Simpanan cloud juga tidak lagi tertinggal diam-diam.
- **Cadangan akun Google HP**: kalau game dihapus lalu dipasang lagi di HP yang sama, game langsung menawarkan **"Warungmu ditemukan!"**.
- **ADU LARIS**: duel jualan 1 menit melawan warung lain di depan warung, sesudah warung tutup. Ada papan Adu Laris mingguan dan mode **Latihan** yang bisa dimainkan kapan saja.
- **Foto profil**: pilih foto tokoh untuk warungmu. Fotonya tampil di papan peringkat dan Adu Laris.
- **Papan Juara mingguan** untuk tiap kerja sampingan, tampil saat diajak kerja. Mini-game tidak lagi berhenti di 2x target, jadi skor bisa setinggi-tingginya.
- **Banjir**: sesekali datang saat hujan seharian. Tidak ada pembeli dan kendaraan, Pak Misran tidak bisa keluar warung, dan ada tombol **Lewati sampai air surut** pukul 17.00.
- **Lemari baju** di kamar: dekati lemari, lalu ketuk **Lemari baju**. Tester uji coba sudah bisa memakai Kaos & sarung; baju lain menyusul.
- **Buang isi Tas**: pilih barangnya, tentukan jumlahnya, lalu ketuk **Buang**.
- **Filter Belanja Online**: **Stok di bawah 5** dan **Diskon**, bisa dipakai bersamaan.
- **Pengaturan suara terpisah**: Musik, Efek Suara, dan Suara Sekitar.
- **Jeda mini-game** lewat tombol Jeda.
- **Tampilan emas** untuk pop up, naik level, hasil misi, dan menu utama; ikon aplikasi HP baru lebih cerah dan berbayang.
- **Tombol konfirmasi uang**: semua tombol yang mengeluarkan uang bertanya dulu (Batal / Ya, bayar).
- **"Pak Misran nyangkut? Pindahkan"** di menu jeda > Pengaturan.

**Perubahan & keseimbangan**
- **Harga perlengkapan warung naik 25%** (Etalase kaca tetap). Harga beli kios dari Pak Haji Rasyid menjadi **Rp30 juta**.
- **Sewa kios tetap dan lebih ringan**: Rp100.000 sampai Rp500.000. Sewa hanya naik di **Level 3, 5, 7, dan 9**, dan Pak Haji Rasyid memberi tahu alasannya. Kerja sampingan tidak lagi membuat sewa naik.
- **Stok tiap barang paling banyak 100**. Stok lama di atas 100 tetap aman dan bisa dijual.
- **Kasbon**: utang paling sedikit **Rp10.000**; baru bisa dicicil kalau **Rp20.000** ke atas.
- **Ikan mahal jauh lebih langka**, dan harga jual yang terlalu mahal lebih sering ditolak pembeli.
- **Tip** tidak lagi lebih besar dari total belanja pembeli.
- **Cek QRIS** muncul **sekali sehari** (sebelumnya 3 kali).
- **OjekKampung**: tarif di kartu order adalah uang yang diterima; order hari itu bisa diambil sampai habis; **Jumat order dua kali lebih banyak**; aplikasi berwarna biru.
- Sesudah kios dibeli, **ojek bisa narik lagi 17.00-23.30**; hari Jumat bisa dari pagi sampai malam.
- Harga kios tidak lagi turun terlalu jauh: keringanannya pelan dan **paling banyak 60%**.
- Potongan harga upgrade dari iklan **paling banyak 60%**.
- **Bayar sewa otomatis memakai saldo QRIS** kalau uang di laci kurang.
- **Belanja Online lebih lega**; saldo QRIS tampil di layar warung dan layar utama HP.
- **Motor cicilan** tidak langsung disita kalau matel belum sempat menagih karena hujan atau Pak Misran sakit.
- **Ikan dan buah** yang sudah didapat tetap masuk Tas walau game tertutup di tengah mini-game.
- Misi di panel kiri bisa diketuk untuk melihat lokasi warga, hari, jam, dan apakah bisa ditemui sekarang.
- Cerita **Takjil Masjid** dan **Agus Pulang** tetap bisa diselesaikan walau tanggalnya lewat; selalu ada pilihan **Nanti dulu** kalau uang belum cukup.
- **Menu lebih jelas**: MULAI hanya untuk pemain baru, sesudah itu cukup LANJUTKAN. Main baru di slot lain lewat Load Save (slot kosong).

**Perbaikan**
- Barang yang dipesan sesudah warung tutup, atau dari HP saat jalan-jalan, tetap diantar kurir.
- Tanpa Iklan lebih andal: bayar QRIS atau transfer saat game tertutup tetap aktif sendiri. Tautkan akun Google tidak macet lagi.
- Game tidak lagi keluar sendiri di beberapa HP (Infinix Note 40 Pro 5G, Redmi Note 14 5G, POCO M7 Pro 5G) dan saat berpindah tempat.
- Panel Misi tidak lagi menutupi Belanja Online; warga tidak membeli dagangannya sendiri; tanda "!" tidak muncul di tempat kosong.
- Panel Stok dengan daftar panjang tidak lagi terpotong di layar HP.
- Mini-game sekarang bisa dijeda.
- Penumpang ojek duduk membonceng dengan benar, termasuk Mang Ujang dan Abah Karta.
- Ajakan bagi sembako Pak RT tidak lagi bilang warung libur kalau kios sudah milik sendiri.
- Simpanan cloud yang lebih lama memberi peringatan supaya warung tidak tertimpa tanpa sengaja.
- Perbaikan kecil teks dan tampilan lainnya.

### v1.0 (build 45, November 2026)

Rilis publik pertama, game keluar dari masa uji coba. Progres pemain lama **tidak direset**.

**Fitur baru**
- **Menu lebih jelas**: MULAI hanya untuk pemain baru, sesudah itu cukup LANJUTKAN. Main baru di slot lain lewat Load Save (slot kosong "+ Main baru di sini"). Slot rusak punya dialog pemulihan sendiri.
- **Kalkulator di HP**: aplikasi baru untuk menghitung kembalian dan belanja (angka sampai 15 digit, ada tombol 00/000 dan persen).
- **Akun di iPhone**: Masuk dengan Apple atau Google; pindahan dari Android cukup masuk dengan akun Google yang sama lalu ambil simpanan dari cloud.
- **Tarik saldo QRIS sebagian**: pilih Rp50.000, Rp100.000, atau semua, lewat Warga Bank.
- **Makan mi rebus**: isi energi baru +30% (20 menit, sekali sehari), terpisah dari ngopi.
- **Warga membalas sapaan**: jawaban sesuai waktu, hujan, atau setelah hujan reda.
- **Penumpang dan barang terlihat di motor OjekKampung**: roda berputar, kendaraan warna-warni, sisa jarak dalam m/km.

**Lebih baik**
- **Libur hanya Jumat** (sebelumnya Senin dan Jumat). Sesudah kios dibeli dari Pak Haji Rasyid, jam buka bebas sampai pukul 24.00 (Kamis 22.00 karena ronda), termasuk hari Jumat.
- **Energi ±20% lebih awet**: turun lebih lambat siang dan malam, lari lebih hemat. Ngopi turun jadi +30% tapi ada tambahan makan mi rebus +30%.
- **Janji ketemu** naik jadi maksimal 3 per hari libur.
- **Sembako Pak RT pindah ke Jumat sore** (16.00-17.00), setelah nasi kotak Jumat berkah.
- **OjekKampung lebih menantang**: plafon malam acak Rp50.000-100.000 per hari, lubang lebih sering dan kadang berpasangan, hewan/batu/bola/genangan dihapus, kendaraan lawan bisa pindah lajur, kecepatan akhir +30%.
- **Cek QRIS lebih mudah**: cukup 4 pembayaran (sebelumnya 7), HP pembeli diperbesar 1,45×, lepas dekat kode langsung memindai, alasan salah ditampilkan.
- **Panen padi**: padi hijau perlahan menguning, minimal 8 rumpun kuning dijamin.
- **Mancing lebih hemat**: energi per lempar turun dari 5% jadi 3%, getaran HP lebih terasa.
- **Tip pelanggan mengikuti total belanja** (kelipatan Rp500, min Rp1.000); pembeli tip membawa pesanan lebih besar dan tidak minta kasbon.
- **Balas budi sewa dibatasi**: patungan maksimal 50% tunggakan, 2 kali seumur simpanan, jeda 60 hari.
- **Belanja Online** mengurutkan barang dari stok tersedikit; peringatan stok menipis mulai dari 5 barang.
- **Keluhan "kemahalan"** bisa dimatikan sehari lewat "Jangan ingatkan lagi hari ini".
- **Proteksi cloud**: simpanan HP yang lebih maju tidak tertimpa simpanan cloud lama; ada kartu perbandingan ★ Lebih jauh.
- **Peringkat di HP** langsung membuka papan lebar. Pilihan penjaga berlabel Season 1 (Level 1-10) dan Season 2 (Level 11-20).

**Perbaikan**
- Sewa tidak tertagih dua kali; sesudah dibayar, cicilan berikutnya langsung untuk minggu depan.
- Kurir yang macet otomatis diterima setelah 12 detik.
- Nota pesanan tidak bergetar/bergeser, barang di bawahnya tetap bisa diklik.
- Rating ditampilkan satu desimal dibulatkan ke bawah, tidak lagi dibulatkan ke atas.
- Animasi bicara Agus diperbaiki; Pak Misran memakai baju putih saat hari wisuda Kang Fadil.

### v0.40 (15 November 2026)

**Fitur baru**
- **OjekKampung**: mini-game mengantar penumpang/barang naik motor setelah warung tutup. Ambil order di aplikasi OjekKampung, antar ke tujuan (Sawah Abah Karta, Terminal, Puskesmas, Toko Haji Maman, Rumah Bu Ida, dll.). Ongkos Rp5.000-35.000 per antaran + tip. Butuh motor sendiri (beli di Wishlist, bisa dicicil). Hujan: ongkos +25%, tapi jalan licin.
- **Save & Akun**: tautkan akun Google, simpanan aman di cloud, cadangan otomatis, pulihkan simpanan lama dari HP. Bonus Rp100.000 sekali per akun.
- **Pembayaran Google Play**: pembayaran dilacak (belum lunas, lunas, dibatalkan), reminder pembayaran yang belum lunas, metode: pulsa, e-wallet, kartu, QRIS, minimarket.
- **Epilog "Tiga tahun kemudian..."**: Pak Misran menyerahkan warung ke Bu Eni, Agus jadi guru TIK SD, Neo sudah tua. Scene sinematik dengan musik pamit.
- **Supporter Badge**: Lencana ★ Pendukung Awal (nama emas di papan peringkat), Gelar ★ Warga Baik Hati (pembeli Tanpa Iklan), Gelar ★ Warga Peduli (platinum untuk dukungan Rp100.000).
- **Inventory 10 per kotak**: Tas kini muat 10 barang sejenis per kotak (ikan, buah, barang grosir).
- **Bungkus Rapi**: barang bisa diseret lagi (bug fix). Misi yang ditunda selalu muncul sesuai daftar.
- **Cicilan motor**: beli motor bisa dicicil. Matel (debt collector) datang kalau telat bayar, motor bisa disita.

**Perbaikan (bug fix)**
- Tertabrak saat uang menipis tidak lagi langsung membuat warung bangkrut.
- Pak Misran tidak lagi macet di pagar atau depan pintu rumah.
- Papan peringkat besar selalu bisa ditutup.
- Token listrik dan barang di bawah kertas pesanan bisa diklik.
- Jumatan bisa dihentikan dengan joystick, tidak tertabrak kendaraan.
- Titik merah aplikasi HP hilang setelah dibuka. Misi Susu Sekolah dan cerita warga selalu muncul.
- Daftar yang digeser tidak ikut memencet +5.
- Roti & jamu titipan diantar lagi hari itu juga, kurir tidak macet lagi.
- Papan peringkat diperbarui tiap 30 menit. Jempol di atas 1.000 ditulis ringkas (1k).
- Kotak kode Pindah HP, kode promo, dan ganti nama selalu bisa diketik (keyboard muncul).
- Warga Bank tidak lagi melebar keluar layar.
- Daftar misi tidak menampilkan cerita yang tidak kamu pilih.

**Lainnya**
- Pancing bisa sampai pukul 20.00 (sebelumnya 18.30), dengan suasana senja.
- Tampilan baru untuk Pengaturan, Dukung Kami, rak, misi, dan notifikasi.
- NPC baru: Bu Eni (pengganti Pak Misran di warung), Raka (kasir baru), Kang Dedi.
- Barang baru di OjekKampung: Nasi bungkus, Galon air, Paket online, Kue pesanan, Telur 2 kg, Gas melon.

### v0.39 (13 November 2026)

**Fitur baru**

- **Jumat resmi libur warung**: warung tutup, jadi pagi Jumat bebas keliling kampung. Mulai jam 12.30, Pak Misran berangkat sendiri ke Masjid Al-Ikhlas untuk Jumatan.
- **Jumatan dipoles**: jalan otomatis bisa dihentikan dengan joystick, Pak Misran tidak lagi ketabrak kendaraan, dan Jumatan tidak lagi muncul di hari Minggu. Sholat mulai begitu sampai di depan masjid (sebelum 13.00).
- **Pindah HP**: progres bisa dipindah ke HP baru lewat kode transfer. Pembelian "Tanpa Iklan" diperiksa langsung ke toko dan ikut pindah. Kalau belum ikut, buka game sekali di HP lama (versi terbaru, dengan internet) lalu buat kode lagi, atau tekan "Pulihkan Pembelian" kalau memakai akun Google yang sama.
- **Buku Hutang dirombak**: tampil seperti buku catatan asli dengan tulisan tangan tinta warna. Tiap hutang punya tanggal jatuh tempo, tanda "Telat X hari!", tombol "Tagih!", tanda "Lunas ✓", dan hutang hangus kalau warganya pindah rumah ("Pindah rumah, hilang").
- **Grosir "Batal 1"**: belanja grosir di Haji Maman salah pencet? Tekan "Batal 1": barang kembali ke Tas, uang dikembalikan, total belanja grosir dikurangi.
- **Tas terbatas**: ikan dan buah maksimal 5 per kotak. Kalau Tas penuh, ikan lebihan dilepas kembali ke sungai dan buah yang tidak muat tidak terambil. Jual ke Bu Ida di Pasar perlu diketuk dua kali supaya tidak terjual tanpa sengaja.
- **Misi Susu Sekolah**: sekarang baru muncul setelah quest "Hadiah Lomba HUT Sekolah" selesai.

**Perbaikan (bug fix)**

- Token listrik dan barang yang tertutup kertas pesanan sekarang selalu bisa diklik.
- Titik merah aplikasi HP hilang setelah dibuka. Misi Susu Sekolah dan cerita warga yang berjalan selalu muncul.
- Menyentuh daftar yang sedang digeser tidak lagi ikut memencet tombol +5.

**Lainnya (tidak terlihat langsung saat main)**

- Posisi dan hadap NPC di 6 event digeser: Hadiah Lomba HUT Sekolah, Motor Kang Asep, Pangkalan Gas, Susu Sekolah, Rahasia Rudi (tahap 2), dan Dadan Membaca (tahap 2).
- Font baru PatrickHand dipakai untuk tulisan tangan di Buku Hutang.

### v0.38 (versi dasar wiki ini)

Wiki ini pertama kali ditulis untuk versi 0.38, jadi sebagian besar bagian di atas menggambarkan kondisi game saat v0.38, lengkap dengan pembaruan v0.39, v0.40, dan v1.0 yang disebut di halaman ini. Riwayat perubahan lengkap v0.38 terhadap versi sebelumnya tidak bisa direkonstruksi dari file yang tersedia, karena build v0.37 tidak tersedia untuk dibandingkan.
