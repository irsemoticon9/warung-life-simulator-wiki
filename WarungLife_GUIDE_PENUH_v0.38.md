# Warung Life Simulator — PANDUAN QUEST PENUH (v0.38)
> Versi lengkap tanpa ringkasan: semua dialog, semua pilihan, semua tahap, semua hasil.
> Sumber: file data asli game v0.38 — data/tugas.json, data/cerita.json, data/event.json, data/barang.json, data/upgrade.json.

## Isi

1. [Quest Level (10 level)](#1-quest-level)
2. [Cerita Utama (10 bab)](#2-cerita-utama)
3. [Quest Warga (34 cerita)](#3-quest-warga)
4. [Daftar Barang (37)](#4-daftar-barang)
5. [Daftar Upgrade (12)](#5-daftar-upgrade)

---

## 1. Quest Level

Progres dihitung sejak level itu dimulai (boleh lewat beberapa hari). Semua syarat lunas → hadiah + naik level.

- **omzet** = total uang masuk dari penjualan (bukan laba).
- **upgrade wajib** = harus sudah membeli salah satu upgrade yang terbuka di level itu.
- **bintang/reputasi** = BUKAN syarat level (reputasi hanya menambah keramaian).
- Setelah Level 10 muncul Level 11 "Coming Soon".

### Macam quest khusus (tugas kualitas)

| jenis | Teks di game | Arti |
|---|---|---|
| `beruntun` | "Layani N pelanggan beruntun" | N pelanggan berturut-turut, tidak ada yang batal |
| `multi` | "N pesanan campuran" | N pesanan berisi 2 jenis barang atau lebih |
| `laba_hari` | "Laba Rp N sehari" | Laba minimal N dalam satu hari |
| `minuman` | "Jual N minuman" | Total minuman terjual |
| `hari_sempurna` | "Sehari tanpa batal (min. N)" | Tutup hari tanpa pelanggan batal, minimal N dilayani |

### Tabel quest level (lengkap)

| Lvl | Nama | Pelanggan | Barang | Omzet | Hadiah | Khusus | Upgrade wajib | Barang baru |
|---|---|---|---|---|---|---|---|---|
| 1 | Pemula | 15 | 25 | Rp100000 | Rp15000 | beruntun 5 | — | — |
| 2 | Mulai Dikenal | 40 | 70 | Rp400000 | Rp50000 | multi 8 | kipas | kerupuk |
| 3 | Langganan Kampung | 90 | 160 | Rp1000000 | Rp100000 | laba_hari 40000 | spanduk, bangku | minuman_energi |
| 4 | Warung Ramai | 180 | 320 | Rp2200000 | Rp200000 | multi 25 | kurir_cepat | — |
| 5 | Juragan Warung | 350 | 620 | Rp4500000 | Rp300000 | beruntun 20 | radio | — |
| 6 | Toko Kebanggaan | 480 | 850 | Rp6500000 | Rp400000 | minuman 50 | qris | — |
| 7 | Raja Warung | 650 | 1150 | Rp9500000 | Rp500000 | laba_hari 100000 | cctv | — |
| 8 | Saudagar Kampung | 850 | 1500 | Rp13000000 | Rp600000 | multi 30 | genset | — |
| 9 | Pengusaha Desa | 1000 | 1800 | Rp16000000 | Rp800000 | minuman 90 | tv_warung | — |
| 10 | Legenda Warung Kampung | 1200 | 2150 | Rp21000000 | Rp1000000 | laba_hari 150000 | wifi | — |

Catatan: angka omzet yang tampil di game = target x faktor_macet(), dibulatkan ke atas ke ribuan terdekat.

## 2. Cerita Utama

Pak Misran mengirim uang untuk Agus (anak, kuliah di kota) dan keperluan rumah tangga.
Membayar bab level sama = ikut jadi syarat naik level itu.
Lewat batas → denda dan dialog terlambat.

**Barang yang sudah terbuka di hari pertama:** mi_goreng, mi_rebus, telur, biskuit, air_mineral, sachet, ciki, permen

**Sewa kios** (kepada Pak Haji Rasyid), per level: Rp250000 → Rp300000 → Rp375000 → Rp450000 → Rp550000 → Rp650000 → Rp750000 → Rp800000 → Rp850000 → Rp900000
(Sewa aktual = dasar + keringanan 15% omzet + 50% upah kerja sampingan, maksimal per_minggu di atas. Denda keterlambatan bab: 10%.)

### Bab 1 — Uang Pendaftaran

- **Keperluan:** uang pendaftaran kuliah
- **Target:** Rp150000
- **Batas:** 12 hari
- **Level terkait:** 1
- **Barang terbuka setelah lunas:** teh_botol

**Dialog awal bab:**

  *Di sebuah kampung kecil di Cianjur, Pak Misran membuka warung di kios sewaan milik Pak Haji Rasyid.*
  *Sejak bercerai, Agus, anak satu-satunya, ikut ibunya tinggal di kota. Ibunya Agus adalah seorang ibu rumah tangga, jadi biaya sekolah Agus ditanggung Pak Misran.*
  *Hari itu HP Pak Misran berbunyi. Pesan dari Agus.*
  **Agus:** Pak! Aku keterima kuliah di kota, masuk semester ini!
  **Pak Misran:** Alhamdulillah, Gus! Bapak ikut senang.
  **Agus:** Tapi uang pendaftarannya harus dibayar sebelum daftar ulang, Pak. Butuh {target}. Ibu nggak punya uang segitu.
  **Pak Misran:** Tenang, Gus. Bapak kumpulkan dulu dari warung, nanti Bapak kirim.
  **Agus:** Paling lambat tanggal {batas} ya, Pak. Makasih, Pak.
  *Modal Pak Misran Rp630.000: Rp500.000 untuk etalase kaca, sisanya Rp130.000 untuk stok. Pangkalan sudah menitipkan 2 tabung gas dan 3 galon di rak, tapi izin penyalur gas dan agen air galon belum keluar, jadi belum boleh dijual. Rak lainnya masih kosong. Klik HP, lalu buka Belanja Online untuk membeli mie goreng, mie rebus, telur, biskuit, air mineral, kopi sachet, ciki, dan permen (minimal 2 masing-masing) sebelum membuka warung.*
  *Sewa kios dibayar setiap Minggu malam. Kumpulkan uang dari berjualan, lalu kirim untuk Agus lewat HP, aplikasi Wasap. Kiriman untuk Agus adalah misi utama, jadi dahulukan. Misi utama juga salah satu tugas Level Warung: selesaikan semua tugasnya untuk naik level.*

**Setelah naik level:** *Warung mulai dikenal tetangga. Supplier langganan mau menitipkan barang baru.*

### Bab 2 — Buku dan Ospek

- **Keperluan:** buku dan perlengkapan ospek
- **Target:** Rp350000
- **Batas:** 16 hari
- **Level terkait:** 2
- **Barang terbuka setelah lunas:** kopi_susu

**Dialog awal bab:**

  **Agus:** Pak, minggu depan sudah mulai ospek.
  **Agus:** Aku perlu beli buku dan perlengkapan. Kira-kira {target}, Pak.
  **Pak Misran:** Iya, Gus. Bapak usahakan sebelum tanggal {batas}.

**Setelah naik level:** *Sales minuman dari kota melihat warungmu makin ramai dan mulai menitipkan barang.*

### Bab 3 — Atap Kios Bocor

- **Keperluan:** biaya perbaikan atap kios
- **Target:** Rp500000
- **Batas:** 14 hari
- **Level terkait:** 3

**Dialog awal bab:**

  *Pagi itu Pak Misran menemukan bekas air menetes dari atap, tepat di atas rak dagangan.*
  **Kontak:** Assalamualaikum, Pak Misran. Maaf, saya dengar atap kios bocor ya?
  **Pak Misran:** Waalaikumsalam, Pak Haji. Iya, Pak, di atas rak. Untung barangnya sempat Bapak pindahkan.
  **Kontak:** Atapnya memang sudah tua. Biaya perbaikannya kita bagi dua: separuhnya saya yang tanggung, Bapak cukup {target}.
  **Pak Misran:** Baik, Pak Haji. Bapak usahakan sebelum tanggal {batas}.

**Setelah naik level:** *Atap kios sudah diperbaiki. Pelanggan makin betah berlama-lama di warung.*

### Bab 4 — Agus Jatuh Sakit

- **Keperluan:** biaya berobat Agus
- **Target:** Rp650000
- **Batas:** 16 hari
- **Level terkait:** 4
- **Barang terbuka setelah lunas:** danda, data_2gb, data_5gb, data_10gb

**Dialog awal bab:**

  *HP Pak Misran berbunyi lagi. Suara Agus terdengar lemah.*
  **Agus:** Pak... aku dirawat di klinik. Kata dokter kena tifus. Ibu yang jagain aku.
  **Pak Misran:** Ya Allah, Gus! Kamu istirahat saja. Biayanya biar Bapak yang pikir.
  **Agus:** Butuh {target}, Pak. Maaf ya, ngerepotin Bapak terus.
  **Pak Misran:** Jangan bilang begitu. Kamu cepat sembuh, itu yang paling penting.

**Setelah naik level:** *Berkat ajaran Agus, warungmu sekarang melayani top-up e-wallet dan paket data (isi saldonya lewat Belanja Online).*

### Bab 5 — Laptop untuk Kuliah

- **Keperluan:** laptop bekas untuk kuliah
- **Target:** Rp1000000
- **Batas:** 26 hari
- **Level terkait:** 5
- **Barang terbuka setelah lunas:** minyak_goreng

**Dialog awal bab:**

  **Agus:** Pak, tugas kuliah banyak yang harus diketik. Ke warnet terus jadi mahal.
  **Agus:** Ada teman yang jual laptop bekas, masih bagus. Harganya Rp1.600.000. Aku sudah nabung Rp600.000 dari kerja paruh waktu di kafe, Pak.
  **Agus:** Kurangnya {target}. Bapak bisa bantu?
  **Pak Misran:** Hebat kamu sudah mau nabung sendiri, Gus. Bapak kirim sebelum tanggal {batas}. Rawat baik-baik laptopnya.

**Setelah naik level:** *Agen sembako melihat warungmu ramai dan mulai memasok barang baru.*

### Bab 6 — Saung Warga

- **Keperluan:** patungan perbaikan saung warga
- **Target:** Rp1200000
- **Batas:** 20 hari
- **Level terkait:** 6

**Dialog awal bab:**

  **Kontak:** Assalamualaikum, Pak Misran. Saung di tepi sawah atapnya sudah rusak, padahal sering dipakai warga berteduh dan anak-anak mengaji.
  **Kontak:** Warga mau patungan. Karena warung Bapak sekarang paling ramai, kami berharap Bapak berkenan menyumbang {target}.
  **Pak Misran:** Insyaallah, Pak RT. Itu juga buat kita semua. Bapak usahakan sebelum tanggal {batas}.

**Setelah naik level:** *Warga makin menghargai Pak Misran. Namanya disebut-sebut di pengajian.*

### Bab 7 — Uang Semester

- **Keperluan:** uang semester
- **Target:** Rp1500000
- **Batas:** 24 hari
- **Level terkait:** 7

**Dialog awal bab:**

  **Agus:** Pak, ini yang terakhir buat semester ini. Uang semesternya Rp2.000.000, tapi aku dapat keringanan dari kampus. Jadi tinggal {target}.
  **Agus:** Batasnya tanggal {batas}, Pak.
  **Pak Misran:** Bapak sudah siapkan dari jauh hari, Gus. Tinggal sedikit lagi.

### Bab 8 — Gaji Pertama Agus

- **Keperluan:** kiriman gaji pertama dari Agus
- **Target:** Rp2000000
- **Batas:** 3 hari
- **Level terkait:** 8

**Dialog awal bab:**

  **Agus:** Pak! Aku diangkat jadi pegawai tetap di kafe, gaji pertamaku sudah cair. Alhamdulillah.
  **Agus:** Aku kirim {target} buat Bapak ya. Jangan ditolak, Pak.
  **Pak Misran:** Gus, itu hasil kerjamu sendiri. Simpan saja buat kamu.
  **Agus:** Sudah kupisahkan buat diriku, Pak. Selama ini Bapak yang kirim buat aku. Sekarang gantian, sedikit saja.
  **Pak Misran:** Ya Allah... terima kasih, Nak.
  *Uang {target} dari Agus masuk ke laci Pak Misran.*

**Setelah naik level:** *Kabar gaji pertama Agus membuat Pak Misran makin semangat mengurus warung.*

### Bab 9 — Cek Kesehatan Bapak

- **Keperluan:** biaya cek kesehatan lengkap
- **Target:** Rp1500000
- **Batas:** 21 hari
- **Level terkait:** 9

**Dialog awal bab:**

  *Beberapa hari ini Pak Misran sering pegal dan cepat lelah setelah seharian menjaga warung.*
  **Agus:** Pak, kata Pak RT Bapak sering kelihatan pucat. Bapak sudah periksa ke klinik?
  **Pak Misran:** Cuma capek biasa, Gus. Nanti juga sembuh sendiri.
  **Agus:** Aku nggak mau Bapak sakit sendirian, Pak. Aku sudah daftarkan Bapak cek kesehatan lengkap di Klinik Sehat.
  **Agus:** Biayanya {target}. Tolong dibayar ya, Pak. Ini permintaan Agus.
  **Pak Misran:** Iya, Gus. Bapak ikuti kata anak sendiri. Bapak bayar sebelum tanggal {batas}.

**Setelah naik level:** *Pak Misran lebih sehat dan segar. Warung pun makin lancar diurus.*

### Bab 10 — Kios Milik Sendiri

- **Keperluan:** pembelian kios dari Pak Haji Rasyid
- **Target:** Rp24000000
- **Batas:** 45 hari
- **Level terkait:** 10

**Dialog awal bab:**

  *Hari itu Pak Haji Rasyid menelepon membawa kabar yang tidak biasa.*
  **Kontak:** Pak Misran, saya sudah tua dan ingin membagi harta untuk anak cucu. Kios ini mau saya jual, tapi saya ingin Bapak yang memilikinya.
  **Kontak:** Harganya {target}, dibayar sekaligus. Untuk Bapak, saya sudah beri potongan.
  **Pak Misran:** Pak Haji... Bapak sangat ingin kios ini jadi milik sendiri. Bapak akan kumpulkan uangnya.
  **Kontak:** Saya tunggu sampai tanggal {batas}, Pak. Warung ini sudah seperti anak saya sendiri.
  **Agus:** Pak! Aku dengar dari Pak Haji. Semangat ya, Pak. Aku bantu doa dari kota.


**Dialog jika lewat batas:**

  **Agus:** Pak... batasnya sudah lewat. Aku sudah minta keringanan, tapi kena denda.
  **Pak Misran:** Maafkan Bapak, Gus. Kasih Bapak waktu sedikit lagi.
  *Batas diperpanjang sampai tanggal {batas}. Target {kebutuhan} sekarang {target}.*

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

## 3. Quest Warga

Cerita warga (event non-acak) di mode jalan-jalan, dijalankan scripts/jelajah.gd. Warga cerita berdiri di 'posisi' (koordinat gambar area) pada jam [mulai, selesai) mulai hari 'hari_min', ditandai titik merah di atas kepala; pemain mendekat lalu menekan 'Sapa'. tahap = urutan bagian cerita (bisa pindah area/tokoh). siapa di dialog: bapak, id tipe warga (anak, nenek, petani, santri_putih, ...), id tokoh (haji_doni, pak_rt), atau kosong (narasi). pilihan.opsi.aksi: tolong / tolak = cerita selesai dengan hasil itu, lanjut = ke tahap berikutnya, ulang = jawaban salah (tetap di tahap ini), tunda = nanti saja. biaya = uang yang dibayar kalau memilih opsi ini. maju_menit = waktu berjalan (misalnya membantu bekerja). pergi_ke = [[x, y], ...] warga itu berjalan pergi lalu hilang; hilang = true warga itu langsung memudar hilang (misalnya kucing digendong). perjalanan = {teks, menit, langkah (true = suara langkah kaki), detik} layar gelap berisi keterangan, misalnya Pak Misran kembali ke warung mengambil obat; sesudahnya dialog_sesudah. hasil.tolong/tolak: bintang = naik sekian bintang, reputasi = tambah/kurang poin (0-100), buka = barang yang terbuka, pelanggan = pengali seberapa sering tipe itu datang ke warung (0,4 = jarang, 1,5 = lebih sering), popup = isi pop-up hasil (judul, isi, daftar, gambar). obrolan = percakapan pengganti saat menyapa warga itu di jalan sesudah cerita selesai (format sama dengan warga.json). tetap = sesudah cerita selesai tokoh ini tetap berdiri di sana dan bisa disapa (obrolan dari bagian obrolan). akrab: false = cerita ini tidak mengubah keakraban warga yang terlibat. jika_uang_cukup / jika_uang_kurang (di opsi) = pilihan hanya tampil kalau uang >= / < angka itu. hasil.chat = pesan Wasap sesudah cerita selesai: [[pengirim, teks, kontak]] (kontak: rt, agus, juragan, sales). tahap.gendong = id tipe tokoh (kucing) yang dipeluk Pak Misran selama tahap itu. setelah_hasil = cerita ini hanya muncul kalau hasil cerita setelah sama dengan nilai ini. hari_sekolah = awal cerita tidak muncul hari Minggu. bukan_ramadan = awal cerita tidak muncul selama Ramadan. tahap.jam_ketat = tahap lanjutan tetap mengikuti jam. pendamping_sesudah.digendong = penerima langsung menggendong tokoh itu. tahap.pendamping = warga lain yang ikut berdiri di adegan itu. tahap.bawa = berkas model barang (misalnya res://assets/upgrade/kardus_bawa.glb) yang dipeluk Pak Misran selama tahap itu, lepas sendiri saat cerita selesai.

**Lembar nama tokoh:** `` · `agus` · `agusdatang` · `bapak (narasi)` · `anak` · `siswi` · `pelajar` · `nenek` · `petani` · `santri_putih` · `santri_hitam` · `giska` · `tukang` · `kantoran` · `kurir` · `ojek` · `ibu_rumah_tangga` · `pak_rt` · `haji_doni` · `fariz` · `kucing` · `juragan`

*Penjelasan pendek:*
- **JANJI** = event khusus hari libur warung; maks 2 janji per libur.
- **HARI SEKOLAH** = tidak muncul hari Minggu.
- **bukan_ramadan** = tidak muncul selama Ramadan.
- Setiap event punya beberapa `tahap` (lokasi/tim). Dekat → tekan **Sapa**.
- Pilihan: **tolong** (membantu) / **tolak** (tolak).
- Setelah cerita selesai muncul **obrolan** (percakapan warga).

### 3.1 Ucup Ingin Sekolah (`ucup_sekolah`)

- **Syarat muncul:** Level ≥ 1 · Hari ≥ 1 · HARI SEKOLAH (bukan Minggu) · **JANJI** (hanya hari libur warung)
#### Tahap 1 — SD · Ucup (pukul 08.0–13.0)

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
   - biaya Rp200000 → aksi: `tolong`

  **Pak Misran:** Cup, besok kamu sekolah lagi, ya. Uang sekolah, seragam, sama bukunya biar Bapak yang urus.
  **Ucup:** Beneran, Pak?! Ucup... Ucup boleh sekolah lagi?
  **Pak Misran:** Boleh. Tapi janji, belajar yang rajin. Bilang ke Nenek, jangan khawatir lagi.
  **Ucup:** Janji, Pak! Makasih, Pak Misran! Nanti Ucup mau jadi dokter, biar bisa ngobatin Nenek!
  *Kabar kebaikan Pak Misran cepat menyebar ke seluruh kampung.*

2. **"Maaf, belum bisa membantu"**
   - aksi: `tolak`

  **Pak Misran:** Maaf, Cup... Bapak sendiri lagi pas-pasan. Uang warung juga buat kuliah Agus.
  **Ucup:** Nggak apa-apa, Pak... Ucup ngerti, kok.
  *Ucup tersenyum kecil, lalu kembali menatap ke arah kelas.*

3. **"Nanti Bapak pikirkan dulu"**
   - aksi: `tunda`

  **Pak Misran:** Cup, Bapak pikirkan dulu, ya. Nanti Bapak cari kamu lagi di sini.
  **Ucup:** Iya, Pak. Ucup biasanya di sini sampai siang.

**HASIL — BANTU (tolong):**

- bintang: 1
- barang terbuka: buku_tulis
- pelanggan: Ucup x1.3, Nenek Sumi x1.3

  **Pop-up "Barang Baru Terbuka!"**

  Ucup bisa sekolah lagi. Anak-anak sekolah mulai membeli buku tulis di warung Pak Misran.

  - Buku tulis sekarang bisa dijual
  - Reputasi warung naik 1 bintang
  - Ucup dan Nenek Sumi jadi langganan setia

**HASIL — TOLAK:**

- pelanggan: Ucup x0.4

  **Pop-up "Ucup Kecewa"**

  Pak Misran tidak membantu biaya sekolah Ucup.

  - Ucup jadi jarang mampir ke warung
  - Pelanggan anak kecil lebih jarang datang

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak Misran! Tadi Ucup dapat nilai sembilan di ulangan IPA! / **Pak Misran:** Masyaallah, pinter! Pertahankan, Cup.
- **Warga:** Seragam baru Ucup wangi, Pak. Kata Nenek harus dijaga baik-baik. / **Pak Misran:** Betul kata Nenek. Rajin belajarnya, ya.
- **Warga:** Pak Misran, terima kasih sudah menolong cucu saya. Semoga Allah membalas berlipat-lipat. / **Pak Misran:** Aamiin, Nek. Ucup anak baik, sayang kalau tidak sekolah.

*Cabang tolak:*

- **Warga:** Siang, Pak... Ucup lagi bantu Nenek jualan rengginang. / **Pak Misran:** Yang semangat, Cup. Semoga laris, ya.
- **Warga:** Pak, kalau sudah besar Ucup mau kerja, biar bisa sekolah lagi. / **Pak Misran:** Aamiin. Jangan putus harapan, Cup.

---

### 3.2 Beras Abah Karta (`beras_abah_karta`)

- **Syarat muncul:** Level ≥ 1 · Hari ≥ 1
#### Tahap 1 — Sawah · Abah Karta (pukul 07.0–17.0)

  **Abah Karta:** Aduh, Pak Misran... pusing saya. Panen tahun ini bagus, berasnya banyak.
  **Pak Misran:** Lho, panen bagus kok malah pusing, Abah?
  **Abah Karta:** Tengkulak cuma mau beli murah sekali, Pak. Saya mau jual sendiri, tapi nggak ada tempatnya.
  **Abah Karta:** Kata orang, kalau mau titip jual di warung kampung harus ada surat keterangan dari Pak RT. Saya sungkan ke sana, nggak pandai ngomong.

**Pertanyaan:**

  **Pak Misran:** (Bantu Abah Karta mengurus surat ke Pak RT?)
**Pilihan jawaban:**

1. **"Bantu, biar saya temui Pak RT"**
   - aksi: `lanjut`

  **Pak Misran:** Tenang, Abah. Biar saya yang bicara ke Pak RT. Biasanya beliau ada di pos ronda.
  **Abah Karta:** Alhamdulillah... Hatur nuhun, Pak Misran!
  *Temui Pak RT di depan pos ronda (area Rumah Warga), lalu kembali ke Abah Karta.*

2. **"Maaf, saya sedang sibuk"**
   - aksi: `tolak`

  **Pak Misran:** Maaf, Abah, warung saya lagi repot. Coba minta tolong orang lain dulu, ya.
  **Abah Karta:** Oh... iya, Pak. Nggak apa-apa.

3. **"Nanti saja"**
   - aksi: `tunda`

  **Pak Misran:** Nanti saya pikirkan dulu ya, Abah.
  **Abah Karta:** Mangga, Pak. Saya di sawah sampai sore.

#### Tahap 2 — Rumah Warga · Pak RT (pukul 07.0–21.0)

  **Pak RT:** Eh, Pak Misran. Tumben mampir ke pos ronda. Ada perlu apa?
  **Pak Misran:** Begini, Pak RT. Abah Karta mau titip jual beras hasil panennya di warung saya.
  **Pak RT:** Oh, boleh-boleh saja, Pak.

**Pertanyaan:**

  **Pak RT:** Sebelumnya saya ingin bertanya, beras titipan itu harusnya dijual dengan cara apa?
**Pilihan jawaban:**

1. **"Dicampur beras murah biar untung banyak"**
   - aksi: `ulang`

  **Pak RT:** Waduh, itu namanya curang, Pak Misran. Coba dipikir lagi.

2. **"Ditimbang pas dan harganya wajar"**
   - aksi: `lanjut`

  **Pak RT:** Nah, betul! Timbangannya jujur, harganya wajar. Warga senang, Abah Karta juga untung.
  **Pak RT:** Ini surat keterangannya, Pak. Sampaikan salam saya ke Abah Karta.
  *Kembali ke sawah dan temui Abah Karta.*

3. **"Dijual semahal mungkin"**
   - aksi: `ulang`

  **Pak RT:** Kalau kemahalan, kasihan warga, Pak. Coba dipikir lagi.

#### Tahap 3 — Sawah · Abah Karta (pukul 07.0–17.0)

  **Pak Misran:** Abah, ini surat dari Pak RT. Beras Abah boleh dijual di warung saya.
  **Abah Karta:** Masyaallah! Terima kasih, Pak Misran. Mulai besok beras saya antar ke warung, harganya bersahabat.
  **Abah Karta:** Lima karung pertama gratis buat Bapak. Anggap saja tanda terima kasih.

*(aksi otomatis tahap ini: `tolong`)*

**HASIL — BANTU (tolong):**

- reputasi: 3
- barang terbuka: beras

  **Pop-up "Barang Baru Terbuka!"**

  Abah Karta menitipkan beras hasil panennya di warung.

  - Beras 1 kg sekarang bisa dijual
  - Bonus stok beras dari Abah Karta
  - +3 ulasan bintang 5 dari warga

**HASIL — TOLAK:**

- reputasi: -4

  **Pop-up "Abah Karta Kecewa"**

  Pak Misran tidak membantu Abah Karta.

  - Reputasi -4
  - Beras belum bisa dijual di warung

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak Misran! Beras saya laku keras di warung Bapak. Alhamdulillah. / **Pak Misran:** Alhamdulillah, Abah. Berasnya memang pulen.
- **Warga:** Kemarin Pak RT nanya, beras saya masih ada? Katanya enak. / **Pak Misran:** Wah, mantap, Abah. Nanti saya siapkan buat beliau.

*Cabang tolak:*

- **Warga:** Pak... saya akhirnya jual ke tengkulak. Ya sudah, rezekinya segitu. / **Pak Misran:** Semoga panen berikutnya lebih baik, Abah.

---

### 3.3 Persiapan Pengajian (`pengajian_haji_doni`)

- **Syarat muncul:** Level ≥ 2 · Hari ≥ 2
#### Tahap 1 — Masjid · Haji Doni (pukul 07.0–17.0)

  **Haji Doni:** Assalamualaikum, Pak Misran. Kebetulan sekali Bapak lewat.
  **Pak Misran:** Waalaikumsalam, Haji Doni. Kelihatannya sibuk sekali?
  **Haji Doni:** Sebentar lagi ada pengajian akbar, ustadznya datang dari Cianjur kota. Tempat wudhunya belum disikat, karpet juga belum digelar.
  **Haji Doni:** Anak-anak remaja masjid lagi ikut lomba ke kecamatan. Saya sendirian, encok saya kambuh pula.

**Pertanyaan:**

  **Haji Doni:** Bapak bisa bantu sebentar? Kira-kira satu jam.
**Pilihan jawaban:**

1. **"Bantu Haji Doni (1 jam)"**
   - aksi: `tolong`

  **Pak Misran:** Tentu, Haji Doni. Bapak duduk saja, biar saya yang kerjakan.

2. **"Maaf, saya sedang ada perlu"**
   - aksi: `tolak`

  **Pak Misran:** Aduh, maaf, Haji Doni. Saya sedang ada perlu.
  **Haji Doni:** Tidak apa-apa, Pak Misran. Semoga dagangannya laris. Nanti datang ke pengajian, ya.

3. **"Nanti saja"**
   - aksi: `tunda`

  **Pak Misran:** Nanti saya ke sini lagi ya, Haji Doni.
  **Haji Doni:** Baik, saya di sini sampai sore.

**HASIL — BANTU (tolong):**

- reputasi: 3
- barang terbuka: sayur

  **Pop-up "Barang Baru Terbuka!"**

  Kebun Bu Haji menitipkan hasil panennya di warung.

  - Sayuran (cabai, bawang, tomat) sekarang bisa dijual
  - Bonus stok sayuran
  - +3 ulasan bintang 5 dari warga

**HASIL — TOLAK:**


  **Pop-up "Lain Kali, Ya"**

  Haji Doni memaklumi, Pak Misran sedang sibuk.

  - Tidak ada perubahan

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak Misran, jamaah memuji tempat wudhunya bersih sekali. Terima kasih, ya. / **Pak Misran:** Sama-sama, Haji Doni. Senang bisa membantu.
- **Warga:** Sayuran dari kebun istri saya laku di warung Bapak? Alhamdulillah. / **Pak Misran:** Laku, Haji Doni. Ibu-ibu senang, masih segar katanya.

*Cabang tolak:*

- **Warga:** Pengajian kemarin alhamdulillah lancar. Lain kali ikut, ya, Pak Misran. / **Pak Misran:** Insyaallah, Haji Doni.
- **Warga:** Jangan lupa sholat berjamaah, Pak Misran. Warung boleh ramai, masjid juga harus ramai. / **Pak Misran:** Siap, Haji Doni. Insyaallah.

---

### 3.4 Surat untuk Emak (`surat_kang_hasan`)

- **Syarat muncul:** Level ≥ 2 · Hari ≥ 2
#### Tahap 1 — Pesantren · Kang Hasan (pukul 15.0–21.0)

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
   - biaya Rp20000 → aksi: `tolong`

  **Pak Misran:** Tunggu sebentar ya, Kang. Bapak ambilkan obat di warung.

2. **"Doakan, lalu pamit"**
   - aksi: `tolak`

  **Pak Misran:** Sabar ya, Kang. Bapak doakan Kang Fadil cepat sembuh dan hafalanmu lancar.
  **Kang Hasan:** Aamiin. Terima kasih, Pak Misran.

3. **"Nanti saja"**
   - aksi: `tunda`

  **Pak Misran:** Kang, Bapak ke warung dulu sebentar, ya.
  **Kang Hasan:** Iya, Pak. Saya di sini sampai Isya.

**HASIL — BANTU (tolong):**

- reputasi: 3
- barang terbuka: obat
- pelanggan: Kang Fadil x1.5, Kang Hasan x1.5

  **Pop-up "Hati yang Tersentuh"**

  Ustadz pesantren mendengar kebaikan Pak Misran dan memintanya menyediakan obat warung untuk para santri.

  - Obat warung sekarang bisa dijual
  - Santri lebih sering belanja di warung
  - +3 ulasan bintang 5 dari warga

**HASIL — TOLAK:**


  **Pop-up "Cerita Selesai"**

  Pak Misran mendoakan Kang Hasan dan Kang Fadil.

  - Tidak ada perubahan

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak Misran! Alhamdulillah hafalan saya sudah nambah dua juz. / **Pak Misran:** Masyaallah, Kang Hasan. Emakmu pasti tersenyum di sana.
- **Warga:** Pak, nanti kalau saya khatam, Bapak datang ke wisudanya, ya. Bapak kan sudah seperti orang tua saya. / **Pak Misran:** Insyaallah, Kang. Bapak pasti datang.
- **Warga:** Pak, saya sudah sehat. Obat dari Bapak manjur sekali. / **Pak Misran:** Alhamdulillah, Kang Fadil. Jaga kesehatan, ya.

*Cabang tolak:*

- **Warga:** Pak, Kang Fadil sudah sembuh. Kemarin dibantu ustadz. / **Pak Misran:** Alhamdulillah. Maaf ya, Kang, kemarin Bapak belum bisa banyak membantu.

---

### 3.5 Layangan Dimas (`layangan_dimas`)

- **Syarat muncul:** Level ≥ 1 · Hari ≥ 3 · **JANJI** (hanya hari libur warung)
#### Tahap 1 — Sawah · Dimas (pukul 14.0–18.0)

  *Dimas berdiri di pematang sawah sambil menatap ke atas pohon kelapa. Benang layangan menjuntai dari pelepahnya.*
  **Pak Misran:** Lho, Dimas? Kok bengong di sini?
  **Dimas:** Layangan saya nyangkut, Pak Misran... Ini layangan buatan almarhum Kakek. Satu-satunya yang masih ada.
  **Dimas:** Saya sudah coba lempar pakai sandal, malah sandalnya ikut nyangkut. Hehe...
  **Dimas:** Sebentar lagi ada lomba layangan di lapangan SD. Kalau layangannya rusak, saya nggak bisa ikut.

**Pertanyaan:**

  **Pak Misran:** (Bantu ambilkan layangan Dimas?)
**Pilihan jawaban:**

1. **"Ambilkan pakai galah bambu (30 menit)"**
   - aksi: `tolong`

  **Pak Misran:** Sabar, Dim. Di saung biasanya ada galah bambu. Bapak coba, ya.

2. **"Jangan dipanjat, berbahaya"**
   - aksi: `tolak`

  **Pak Misran:** Dim, pohonnya tinggi, jangan dipanjat, ya. Bahaya. Minta tolong Abah Karta nanti sore saja.
  **Dimas:** Iya, Pak... (menunduk)

3. **"Nanti saja"**
   - aksi: `tunda`

  **Pak Misran:** Bapak ke warung dulu, ya. Nanti Bapak lewat sini lagi.
  **Dimas:** Iya, Pak. Saya tunggu di sini.

**HASIL — BANTU (tolong):**

- reputasi: 2
- pelanggan: Dimas x1.5, Neng Shinta x1.3

  **Pop-up "Layangan Kembali Terbang"**

  Beberapa hari kemudian layangan Dimas juara dua di lomba. Anak-anak sekolah ramai membicarakan Pak Misran.

  - Pelajar lebih sering jajan di warung
  - +2 ulasan bintang 5 dari warga

**HASIL — TOLAK:**


  **Pop-up "Cerita Selesai"**

  Pak Misran mengingatkan Dimas supaya berhati-hati.

  - Tidak ada perubahan

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak Misran! Layangan Kakek juara dua, lho. Pialanya saya taruh di samping foto Kakek. / **Pak Misran:** Masyaallah, hebat, Dim. Kakekmu pasti bangga.
- **Warga:** Pak, ajarin bikin layangan dong. Kata Ibu, dulu Bapak jago main layangan. / **Pak Misran:** Wah, itu sudah lama sekali. Boleh, nanti hari Minggu.

*Cabang tolak:*

- **Warga:** Pak, layangan saya akhirnya diambilkan Abah Karta. Sobek sedikit, tapi masih bisa terbang. / **Pak Misran:** Syukurlah, Dim. Hati-hati mainnya, ya.

---

### 3.6 Si Neo Hilang (`kucing_bu_ida`)

- **Syarat muncul:** Level ≥ 1 · Hari ≥ 4
#### Tahap 1 — Rumah Warga · Mba Giska (pukul 08.0–18.0)

  **Mba Giska:** Pak Misran, ya? Maaf ganggu, Pak... lihat kucing putih krem nggak? Bulunya lebat, namanya Neo.
  **Mba Giska:** Saya bawa dia dari kota waktu pindah ke Cianjur. Di kota dia nggak pernah keluar rumah, jadi belum kenal jalan di kampung.
  **Mba Giska:** Sudah dua hari nggak pulang. Saya juga belum kenal banyak orang di sini, bingung mau nanya ke siapa.
  **Pak Misran:** Waduh, kasihan. Terakhir dilihat di mana, Mba?
  **Mba Giska:** Kata tetangga sebelah, Neo suka main ke arah masjid. Mungkin dikasih makan sama jamaah.

**Pertanyaan:**

  **Pak Misran:** (Bantu mencari si Neo?)
**Pilihan jawaban:**

1. **"Saya bantu cari di sekitar masjid"**
   - aksi: `lanjut`

  **Pak Misran:** Biar saya cari, Mba. Kebetulan saya sering lewat masjid.
  **Mba Giska:** Beneran, Pak? Makasih banyak, Pak Misran!
  *Cari si Neo di area Masjid. Tanyakan pada Mang Ujang yang sedang bekerja di sana.*

2. **"Maaf, saya sedang sibuk"**
   - aksi: `tolak`

  **Pak Misran:** Maaf, Mba, saya sedang sibuk. Coba diumumkan di grup RT, ya. Warga sini baik-baik, pasti ada yang bantu.
  **Mba Giska:** Iya, Pak... nanti saya coba.

3. **"Nanti saja"**
   - aksi: `tunda`

  **Pak Misran:** Nanti kalau lewat masjid saya lihat-lihat, ya, Mba.
  **Mba Giska:** Iya, Pak. Saya di sini terus nungguin Neo.

#### Tahap 2 — Masjid · Mang Ujang (pukul 07.0–18.0)

  **Pak Misran:** Mang Ujang, lihat kucing putih krem yang bulunya lebat, nggak?
  **Mang Ujang:** Oh, kucing putih yang bulunya lebat itu? Ada, Pak! Dari kemarin ngumpet di dekat sini, nggak mau pergi.
  **Mang Ujang:** Kakinya kayaknya keseleo. Sudah saya kasih ikan asin sedikit, kasihan. Itu dia, Pak, di dekat bedug!
  *Cari si Neo di dekat bedug masjid (ada tanda merah di atasnya).*

*(aksi otomatis tahap ini: `lanjut`)*

#### Tahap 3 — Masjid · Si Neo (pukul 07.0–18.0)

  *Si Neo meringkuk, kaki depannya diangkat sedikit. Ia mengeong pelan melihat Pak Misran.*

**Pertanyaan:**

  **Pak Misran:** (Apa yang dilakukan Pak Misran?)
**Pilihan jawaban:**

1. **"Bawa Neo pelan-pelan dan antar pulang"**
   - aksi: `lanjut`

  *Pak Misran berjongkok dan mengelus kepalanya. Si Neo mengeong pelan, lalu mau digendong.*
  **Pak Misran:** Ayo pulang, Neo. Mba Giska sudah nungguin kamu.
  *Antar si Neo ke Mba Giska di area Rumah Warga.*

2. **"Tarik ekornya biar cepat ikut"**
   - aksi: `ulang`

  *Si Neo mendesis dan mundur. Kakinya sedang sakit, jangan dipaksa.*

#### Tahap 4 — Rumah Warga · Mba Giska (pukul 07.0–21.0)

  **Mba Giska:** NEO! Ya ampun, Neo! (memeluk kucingnya)
  **Pak Misran:** Ketemu di masjid, Mba. Kakinya keseleo sedikit, dikompres air hangat saja.
  **Mba Giska:** Di kota, tetangga sebelah saja nggak saling kenal, Pak. Di sini saya belum lama, tapi sudah ditolong begini...
  **Mba Giska:** Makasih banyak, Pak Misran. Mulai sekarang saya belanja di warung Bapak terus, ya!

*(aksi otomatis tahap ini: `tolong`)*

**HASIL — BANTU (tolong):**

- reputasi: 2
- barang terbuka: makanan_kucing
- pelanggan: Mba Giska x1.6

  **Pop-up "Si Neo Pulang!"**

  Mba Giska bercerita di grup RT bahwa Pak Misran menemukan kucingnya. Warga baru dari kota itu jadi langganan setia warungmu.

  - Makanan kucing sekarang bisa dijual (Mba Giska yang menyarankan)
  - Mba Giska lebih sering belanja di warung
  - +2 ulasan bintang 5 dari warga

**HASIL — TOLAK:**


  **Pop-up "Cerita Selesai"**

  Mba Giska mengumumkan kucingnya yang hilang di grup RT.

  - Tidak ada perubahan

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak Misran, si Neo sudah lincah lagi. Sekarang dia suka tidur di depan pintu, nungguin saya pulang kerja. / **Pak Misran:** Alhamdulillah, Mba. Jangan sampai main jauh-jauh lagi, ya.
- **Warga:** Pak, ikan asin di warung masih ada? Buat Neo, katanya sudah ketagihan gara-gara Mang Ujang. / **Pak Misran:** Hehe, nanti saya tanyakan ke supplier, Mba.
- **Warga:** Ternyata tinggal di kampung enak juga, Pak. Pagi-pagi udaranya segar, nggak kayak di kota. / **Pak Misran:** Betah-betah di sini, Mba Giska.
- **Warga:** Pak, kucing putih kemarin sudah pulang, ya? Bedugnya jadi sepi, hehe. / **Pak Misran:** Sudah, Mang. Makasih sudah dikasih makan.

*Cabang tolak:*

- **Warga:** Pak, si Neo akhirnya pulang sendiri, kakinya pincang. Alhamdulillah masih ketemu. / **Pak Misran:** Syukurlah, Mba. Maaf kemarin saya belum sempat bantu.

---

### 3.7 Hadiah Lomba HUT Sekolah (`lomba_shinta`)

- **Syarat muncul:** Level ≥ 3 · Hari ≥ 3 · HARI SEKOLAH (bukan Minggu) · **JANJI** (hanya hari libur warung)
#### Tahap 1 — SD · Neng Shinta (pukul 13.0–17.0)

  **Neng Shinta:** Pak Misran! Kebetulan banget. Saya Shinta, yang suka beli pulsa di warung Bapak.
  **Pak Misran:** Oh, Neng Shinta. Lagi apa di SD? Bukannya sudah SMP?
  **Neng Shinta:** Hehe, saya alumni sini, Pak. Sekarang bantu Bu Guru jadi panitia lomba HUT sekolah buat adik-adik SD.
  **Neng Shinta:** Lombanya sudah siap semua: balap karung, makan kerupuk, tarik tambang. Tapi hadiahnya belum ada, uang kas sekolah nggak cukup.
  **Neng Shinta:** Kalau warung Bapak mau jadi sponsor, nanti nama warungnya kami tulis besar-besar di spanduk lomba, lho!

**Pertanyaan:**

  **Pak Misran:** (Hadiah lomba untuk adik-adik SD kira-kira Rp100.000. Jadi sponsor?)
**Pilihan jawaban:**

1. **"Jadi sponsor lomba (Rp100.000)"**
   - biaya Rp100000 → aksi: `tolong`

  **Pak Misran:** Boleh, Neng. Belikan buku tulis, pensil, sama piala kecil buat juaranya. Yang kalah juga kasih permen, ya.
  **Neng Shinta:** Yeay! Makasih, Pak Misran! Adik-adik pasti senang banget.
  *Neng Shinta bergegas memberi kabar ke Bu Guru. Nama warung Pak Misran akan dipasang di spanduk lomba.*

2. **"Maaf, belum bisa membantu"**
   - aksi: `tolak`

  **Pak Misran:** Maaf, Neng. Uang warung lagi dipakai buat kuliah Agus.
  **Neng Shinta:** Nggak apa-apa, Pak. Nanti saya coba tanya ke toko yang lain.

3. **"Nanti saja"**
   - aksi: `tunda`

  **Pak Misran:** Bapak pikirkan dulu ya, Neng.
  **Neng Shinta:** Iya, Pak. Saya di sini tiap pulang sekolah sampai sore.

**HASIL — BANTU (tolong):**

- reputasi: 3
- pelanggan: Ucup x1.3, Neng Shinta x1.4, Dimas x1.2

  **Pop-up "Warung Jadi Sponsor!"**

  Nama warung Pak Misran terpampang di spanduk lomba HUT SD. Anak-anak dan orang tua makin kenal warungmu.

  - Anak sekolah lebih sering mampir ke warung
  - +3 ulasan bintang 5 dari warga

**HASIL — TOLAK:**


  **Pop-up "Cerita Selesai"**

  Neng Shinta mencari sponsor di tempat lain. Lombanya tetap jalan, hadiahnya patungan para guru.

  - Tidak ada perubahan

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak, adik-adik SD masih ngomongin hadiah lomba kemarin. Bukunya dipakai buat sekolah, katanya! / **Pak Misran:** Alhamdulillah, Neng. Bapak ikut senang.
- **Warga:** Bu Guru titip salam, Pak. Katanya tahun depan minta tolong jadi sponsor lagi, hehe. / **Pak Misran:** Insyaallah, Neng. Kalau rezekinya ada.
- **Warga:** Pak Misran! Aku menang balap karung, hadiahnya buku tulis dari warung Bapak! / **Pak Misran:** Wah, hebat! Dipakai buat belajar, ya.

*Cabang tolak:*

- **Warga:** Lombanya jadi juga, Pak. Hadiahnya patungan guru-guru. / **Pak Misran:** Syukurlah, Neng.

---

### 3.8 Kasbon Bu Ida (`kasbon_bu_ida`)

- **Syarat muncul:** Level ≥ 4 · Hari ≥ 6 · **JANJI** (hanya hari libur warung)
#### Tahap 1 — Pasar · Bu Ida (pukul 08.0–20.0)

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
   - biaya Rp60000 → aksi: `tolong`

  **Pak Misran:** Ambil saja di warung, Bu. Bayarnya nanti kalau sudah ada, saya catat di Buku Hutang.
  **Bu Ida:** Ya Allah... hatur nuhun pisan, Pak Misran. Saya nggak akan lupa.
  *Bu Ida bercerita ke ibu-ibu pengajian tentang kebaikan Pak Misran. Kasbonnya dicatat di Buku Hutang.*

2. **"Maaf, warung belum bisa kasbon"**
   - aksi: `tolak`

  **Pak Misran:** Maaf, Bu. Warung saya juga lagi pas-pasan, belum bisa kasbon.
  **Bu Ida:** Iya, Pak, saya ngerti... Nanti saya coba tanya ke saudara.

3. **"Nanti saja"**
   - aksi: `tunda`

  **Pak Misran:** Saya hitung uang warung dulu ya, Bu. Nanti saya ke sini lagi.
  **Bu Ida:** Iya, Pak. Saya di lapak sampai pasar tutup, jam sembilan malam.

**HASIL — BANTU (tolong):**

- reputasi: 3
- pelanggan: Bu Ida x1.4, Abah Karta x1.2
- hutang: Bu Ida Rp60000 (dikembalikan 14 hari lagi)

  **Pop-up "Kasbon yang Berkah"**

  Kabar kebaikan Pak Misran menyebar dari mulut ke mulut. Ibu-ibu dan petani makin percaya pada warungmu.

  - Kasbon Rp60.000 dicatat di Buku Hutang (dilunasi 14 hari lagi)
  - Ibu-ibu dan petani lebih sering belanja di warung
  - +3 ulasan bintang 5 dari warga

**HASIL — TOLAK:**


  **Pop-up "Cerita Selesai"**

  Bu Ida meminjam beras dari saudaranya.

  - Tidak ada perubahan

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak Misran, suami saya sudah dapat kerja borongan. Alhamdulillah, kasbonnya sudah lunas, ya, Pak. / **Pak Misran:** Alhamdulillah, Bu. Semoga panen berikutnya bagus.
- **Warga:** Anak-anak saya lulus ujian semua, Pak. Hatur nuhun, berkat beras dari warung Bapak. / **Pak Misran:** Masyaallah, ikut senang, Bu Ida.

*Cabang tolak:*

- **Warga:** Panen kemarin memang berat, Pak. Tapi alhamdulillah ada saudara yang bantu. / **Pak Misran:** Syukurlah, Bu. Semoga panen berikutnya lebih baik.

---

### 3.9 Surat dari Cucu (`surat_nenek_sumi`)

- **Syarat muncul:** Level ≥ 2 · Hari ≥ 5 · **JANJI** (hanya hari libur warung)
#### Tahap 1 — Rumah Warga · Nenek Sumi (pukul 09.0–17.0)

  *Nenek Sumi berdiri di depan rumahnya, memegang amplop putih dekat sekali ke wajahnya.*
  **Nenek Sumi:** Nak Misran... sini sebentar. Ini surat dari cucu Nenek, si Rara, yang kuliah di Jakarta.
  **Nenek Sumi:** Mata Nenek sudah rabun, tulisannya kecil-kecil. Ucup lagi nggak di rumah, padahal Nenek sudah nggak sabar pengin tahu isinya.

**Pertanyaan:**

  **Pak Misran:** (Bacakan surat untuk Nenek Sumi?)
**Pilihan jawaban:**

1. **"Bacakan suratnya"**
   - aksi: `lanjut`

  **Pak Misran:** Boleh, Nek. Sini saya bacakan pelan-pelan.
  *"Assalamualaikum, Nenek sayang. Rara sehat di Jakarta. Kuliah keperawatan Rara lancar, nilai Rara bagus semua."*
  *"Rara kangen rengginang buatan Nenek. Kangen dipijitin Nenek sebelum tidur. Tunggu Rara pulang Lebaran nanti, ya, Nek."*
  *"Kalau Rara sudah jadi perawat, Rara yang gantian merawat Nenek. Nenek jangan capek-capek, ya."*
  **Nenek Sumi:** (terisak) Cucu Nenek... sudah besar, ya. Dulu masih Nenek gendong ke sawah.
  **Nenek Sumi:** Nak Misran... Nenek pengin dengar suaranya. Sudah setahun Nenek nggak dengar suara Rara.

2. **"Nanti saja, Nek"**
   - aksi: `tunda`

  **Pak Misran:** Nanti saya mampir lagi ya, Nek. Saya ke warung dulu.
  **Nenek Sumi:** Iya, Nak. Nenek di sini saja.

#### Tahap 2 — Rumah Warga · Nenek Sumi (pukul 07.0–21.0)

  **Pak Misran:** Nek, di surat ada nomor HP Rara. Bagaimana kalau kita telepon pakai HP saya? Bisa lihat wajahnya juga.
  **Nenek Sumi:** Bisa begitu, Nak? Nenek nggak ngerti HP...

**Pertanyaan:**

  **Pak Misran:** (Video call Rara dari HP Pak Misran?)
**Pilihan jawaban:**

1. **"Video call Rara (pulsa Rp5.000)"**
   - biaya Rp5000 → aksi: `tolong`

  *Tut... tut... Wajah seorang gadis berjilbab biru muncul di layar HP.*
  *"Nenek?! Ya Allah, Nenek! Rara kangen banget, Nek!"*
  **Nenek Sumi:** Raraaa... cucu Nenek. Kamu kurusan, Nak. Makan yang banyak, ya...
  *Nenek Sumi dan Rara mengobrol lama sekali. Pak Misran memegangi HP sambil tersenyum.*
  **Nenek Sumi:** Nak Misran, terima kasih. Hari ini Nenek bahagia sekali. Nanti Nenek bikinkan rengginang buat warungmu.

2. **"Ajak Nenek menulis surat balasan"**
   - aksi: `tolak`

  **Pak Misran:** Kalau begitu kita tulis surat balasan saja, Nek. Nenek yang bicara, saya yang menulis.
  **Nenek Sumi:** Iya, Nak. Bilang ke Rara, Nenek sehat, Nenek bangga...

**HASIL — BANTU (tolong):**

- reputasi: 3
- barang terbuka: rengginang
- pelanggan: Nenek Sumi x1.5

  **Pop-up "Rindu yang Terobati"**

  Nenek Sumi bercerita ke seluruh kampung tentang video call dengan cucunya. Warga makin sayang pada Pak Misran.

  - Rengginang buatan Nenek Sumi dititipkan di warung
  - Nenek Sumi lebih sering mampir ke warung
  - +3 ulasan bintang 5 dari warga

**HASIL — TOLAK:**

- reputasi: 1

  **Pop-up "Surat Balasan"**

  Surat balasan Nenek Sumi dikirim lewat kantor pos. Seminggu kemudian Rara membalas lagi.

  - +1 ulasan bintang 5 dari warga

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Nak Misran, kemarin Rara telepon lagi lewat HP tetangga. Katanya salam buat Pak Misran. / **Pak Misran:** Waalaikumsalam. Alhamdulillah, Nek.
- **Warga:** Rengginangnya sudah Nenek jemur. Nanti Nenek titip di warung, ya. / **Pak Misran:** Siap, Nek. Pasti laris.

*Cabang tolak:*

- **Warga:** Rara sudah balas surat Nenek, Nak. Nanti tolong bacakan lagi, ya. / **Pak Misran:** Tentu, Nek. Kapan saja.

---

### 3.10 Program Bantuan Warung (`tipu_fariz`)

- **Syarat muncul:** Level ≥ 6 · Hari ≥ 10 · **JANJI** (hanya hari libur warung)
#### Tahap 1 — Warung · Mas Fariz (pukul 10.0–16.0)

  *Seorang pemuda berkaus hitam dan bercelana pendek menghampiri Pak Misran di depan warung. Senyumnya ramah, ponselnya tidak lepas dari tangan.*
  **Mas Fariz:** Assalamualaikum, Pak. Dengan Pak Misran, pemilik Warung {warung}? Perkenalkan, saya Fariz dari Bandung, petugas lapangan Program Warung Mitra Sejahtera.
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
   - biaya Rp150000 · hanya kalau uang ≥ Rp150000 → aksi: `lanjut`

  **Pak Misran:** Ya sudah, Mas. Ini Rp150.000. Rezeki jangan ditolak.
  **Mas Fariz:** Siap, Pak! Paketnya diantar kurir besok pagi, dananya cair sore ini. Selamat ya, Pak Misran!
  *Mas Fariz mencatat sesuatu di ponselnya, berpamitan, lalu bergegas berjalan ke arah rumah warga.*

2. **"Uang saya kurang, Mas (bayar Rp100.000)"**
   - biaya Rp100000 · hanya kalau uang < Rp150000 → aksi: `lanjut`

  **Pak Misran:** Mas, uang di laci saya nggak sampai Rp150.000. Gimana, ya?
  **Mas Fariz:** Waduh, Pak... Ya sudah, khusus Bapak Rp100.000 saja. Sisanya nanti dipotong dari dana bantuannya.
  **Mas Fariz:** Yang penting Bapak terdaftar hari ini. Sayang sekali kalau kuotanya lewat, Pak. Rp1.000.000 lho.
  **Pak Misran:** Ya sudah, Mas. Ini Rp100.000.
  *Mas Fariz cepat-cepat memasukkan uangnya ke saku, berpamitan, lalu bergegas berjalan ke arah rumah warga.*

3. **"Tanya Pak RT dulu"**
   - aksi: `tolong`

  **Pak Misran:** Sebentar ya, Mas. Saya telepon Pak RT dulu.
  **Mas Fariz:** Eh... nggak usah repot, Pak. Nanti kuotanya keburu habis, lho.
  *Mas Fariz mendadak gelisah. Sebelum telepon tersambung, ia pamit buru-buru, katanya ada janji di kampung lain.*

4. **"Nanti saja"**
   - aksi: `tunda`

  **Pak Misran:** Saya pikir-pikir dulu ya, Mas.
  **Mas Fariz:** Jangan kelamaan, Pak. Kuotanya hari ini saja. Saya masih di sekitar sini sampai sore.

#### Tahap 2 — Rumah Warga · Pak RT (pukul 16.0–22.0)

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
   - aksi: `tolak`

  **Pak Misran:** Jadi pelajaran buat saya, Pak RT. Tolong dikabari ke warga, ya.
  **Pak RT:** Pasti, Pak. Yang sabar, ya.

**HASIL — BANTU (tolong):**

- reputasi: 2
- pesan WA: Pak RT: "Warga, hati-hati! Ada pemuda ngaku petugas "Program Warung Mitra Sejahtera", minta bayar Rp150.000 dulu supaya dapat bantuan Rp1.000.000. Itu PENIPUAN. Alhamdulillah Pak Misran nggak ketipu. Bantuan resmi nggak pernah minta bayar duluan."

  **Pop-up "Lolos dari Penipuan"**

  Untung Pak Misran bertanya ke Pak RT dulu. Mas Fariz ternyata penipu yang mengaku petugas program bantuan.

  - Uang Rp150.000 selamat
  - Pak RT mengingatkan warga di grup
  - +2 ulasan baik dari warga

**HASIL — TOLAK:**

- pesan WA: Pak RT: "Warga, hati-hati! Ada pemuda ngaku petugas "Program Warung Mitra Sejahtera", minta bayar Rp150.000 dulu supaya dapat bantuan Rp1.000.000. Itu PENIPUAN, sudah ada korban di kampung kita. Bantuan resmi nggak pernah minta bayar duluan."

  **Pop-up "Kena Tipu!"**

  Mas Fariz ternyata penipu. Paket tidak pernah datang dan dana Rp1.000.000 tidak pernah ada.

  - Uang yang dibayar ke Mas Fariz hilang
  - Bantuan resmi tidak pernah minta bayar duluan
  - Kalau ragu, tanya Pak RT dulu

---

### 3.11 Snack Rapat Pak Rudi (`snack_rapat_rudi`)

- **Syarat muncul:** Level ≥ 5 · Hari ≥ 4 · bukan Ramadan
#### Tahap 1 — Warung · Pak Rudi (pukul 07.0–10.0)

  **Pak Rudi:** Pak Misran! Untung ketemu. Saya lagi pusing, Pak.
  **Pak Misran:** Kenapa, Pak Rudi? Pagi-pagi sudah kusut begitu mukanya.
  **Pak Rudi:** Kantor saya ada rapat besar sama orang dinas. Katering langganan mendadak batal. Butuh 30 kotak snack.
  **Pak Rudi:** Bapak bisa siapkan dari warung? Isinya kue kering dan air mineral. Nanti saya bayar Rp250.000 waktu diantar.
  *Untuk belanja bahan dan kotaknya, Pak Misran harus keluar modal dulu sekitar Rp150.000.*

**Pertanyaan:**

  **Pak Misran:** (Keluar modal Rp150.000 dulu, nanti dibayar Rp250.000. Terima pesanan Pak Rudi?)
**Pilihan jawaban:**

1. **"Sanggup, saya siapkan (modal Rp150.000)"**
   - biaya Rp150000 → aksi: `lanjut`

  **Pak Misran:** Insyaallah sanggup, Pak Rudi. Saya siapkan sekarang.
  **Pak Rudi:** Alhamdulillah! Antar ke depan masjid, ya, Pak. Saya tunggu di sana.
  *Pak Misran berbelanja dan mengemas 30 kotak snack. Antar ke Pak Rudi di depan masjid.*

2. **"Maaf, modalnya belum ada"**
   - aksi: `tolak`

  **Pak Misran:** Maaf, Pak Rudi. Uang warung lagi pas-pasan, nggak berani keluar modal segitu.
  **Pak Rudi:** Oh, iya, nggak apa-apa, Pak. Saya cari ke toko kue di kota saja.

3. **"Nanti saya kabari"**
   - aksi: `tunda`

  **Pak Rudi:** Jangan lama-lama, Pak. Saya di sini sampai jam sepuluh.

#### Tahap 2 — Masjid · Pak Rudi (pukul 07.0–21.0)

  **Pak Misran:** Pak Rudi, ini 30 kotak snack-nya.
  **Pak Rudi:** Masyaallah, rapi sekali, Pak! Orang dinas pasti senang. Ini Rp250.000, sesuai janji.
  **Pak Rudi:** Nanti kalau kantor ada acara lagi, saya pesan ke Bapak saja. Teman-teman kantor juga saya suruh mampir ke warung.

*(aksi otomatis tahap ini: `tolong`)*

**HASIL — BANTU (tolong):**

- reputasi: 2
- uang: 250000
- ramai: 0.03
- barang terbuka: soda
- pelanggan: Pak Rudi x1.4

  **Pop-up "Pesanan Lunas!"**

  Pak Rudi membayar pesanan snack rapat. Teman-teman kantornya ketagihan soda dingin dari warung, jadi sales minuman mulai menitipkan soda.

  - Soda kaleng sekarang bisa dijual
  - Dibayar Rp250.000 (untung Rp100.000)
  - Warung 3% lebih ramai
  - Pak Rudi lebih sering belanja
  - +2 ulasan bintang 5

**HASIL — TOLAK:**

- pelanggan: Pak Rudi x0.7

  **Pop-up "Cerita Selesai"**

  Pak Rudi membeli snack di toko kue kota.

  - Pak Rudi agak jarang mampir

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak Misran, orang dinas kemarin nanya snack-nya beli di mana. Saya bilang warung Bapak! / **Pak Misran:** Alhamdulillah, makasih promosinya, Pak Rudi.

*Cabang tolak:*

- **Warga:** Rapat kemarin lancar, Pak. Snack-nya beli di kota, mahal juga ternyata. / **Pak Misran:** Syukurlah lancar, Pak Rudi.

---

### 3.12 Motor Kang Asep Mogok (`motor_kang_asep`)

- **Syarat muncul:** Level ≥ 3 · Hari ≥ 5
#### Tahap 1 — SD · Kang Asep (pukul 15.0–20.0)

  **Kang Asep:** Aduh, aduh... Motor saya mogok lagi, sekarang saya tinggal di bengkel. Rantainya putus, kampas remnya juga habis.
  **Pak Misran:** Kenapa, Kang Asep? Motornya rewel?
  **Kang Asep:** Iya, Pak Misran. Bengkel minta Rp120.000. Saya belum dapat orderan dari pagi.
  **Kang Asep:** Kalau motor nggak jalan, saya nggak bisa narik. Anak istri makan apa nanti...

**Pertanyaan:**

  **Pak Misran:** (Pinjami Kang Asep Rp120.000? Ia berjanji mengembalikan dalam beberapa hari.)
**Pilihan jawaban:**

1. **"Pinjami Rp120.000"**
   - biaya Rp120000 → aksi: `tolong`

  **Pak Misran:** Pakai ini dulu, Kang. Benerin motornya, biar bisa narik lagi.
  **Kang Asep:** Ya Allah, Pak Misran... Hatur nuhun pisan! Tiga hari lagi saya kembalikan, saya antar ke warung.
  **Kang Asep:** Penumpang saya nanti saya ajak mampir ke warung Bapak. Janji!
  *Pinjaman Kang Asep dicatat di Buku Hutang.*

2. **"Maaf, belum bisa"**
   - aksi: `tolak`

  **Pak Misran:** Maaf, Kang. Uang saya juga lagi dipakai buat stok warung.
  **Kang Asep:** Iya, Pak, nggak apa-apa... Nanti saya cari pinjaman lain.

3. **"Nanti dulu"**
   - aksi: `tunda`

  **Kang Asep:** Iya, Pak. Saya masih di sini nunggu anak-anak pulang les.

**HASIL — BANTU (tolong):**

- ramai: 0.02
- pelanggan: Kang Asep x1.5
- hutang: Kang Asep Rp120000 (dikembalikan 3 hari lagi)

  **Pop-up "Kang Asep Narik Lagi"**

  Motor Kang Asep sudah jalan lagi. Ia sering mengajak penumpangnya mampir ke warung.

  - Pinjaman Rp120.000 dicatat di Buku Hutang (dikembalikan 3 hari lagi)
  - Warung 2% lebih ramai
  - Kang Asep lebih sering belanja

**HASIL — TOLAK:**

- pelanggan: Kang Asep x0.7

  **Pop-up "Cerita Selesai"**

  Kang Asep meminjam uang ke rentenir untuk memperbaiki motornya.

  - Kang Asep agak jarang mampir

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak Misran, motor saya sekarang ngebut! Penumpang saya ajak mampir terus ke warung, hehe. / **Pak Misran:** Alhamdulillah, Kang. Hati-hati bawa motornya.

*Cabang tolak:*

- **Warga:** Bunga pinjaman rentenir itu mencekik, Pak... Ya sudah, dijalani saja. / **Pak Misran:** Yang sabar, Kang. Semoga cepat lunas.

---

### 3.13 Istri Kang Dadan Melahirkan (`istri_kang_dadan`)

- **Syarat muncul:** Level ≥ 4 · Hari ≥ 7
#### Tahap 1 — Warung · Kang Dadan (pukul 17.0–21.0)

  **Kang Dadan:** Pak Misran... maaf ganggu. Boleh bicara sebentar?
  **Pak Misran:** Boleh, Kang Dadan. Kok kelihatan gelisah?
  **Kang Dadan:** Istri saya sudah waktunya melahirkan, Pak. Bu bidan minta Rp150.000 dulu, tapi gaji kurir baru cair minggu depan.
  **Kang Dadan:** Saya sudah tanya ke mana-mana, belum ada yang bisa bantu...

**Pertanyaan:**

  **Pak Misran:** (Pinjami Kang Dadan Rp150.000? Ia akan mengembalikannya setelah gajian.)
**Pilihan jawaban:**

1. **"Pinjami Rp150.000"**
   - biaya Rp150000 → aksi: `tolong`

  **Pak Misran:** Ini, Kang. Cepat ke bidan, jangan sampai istrimu menunggu.
  **Kang Dadan:** Ya Allah, Pak... Hatur nuhun! Lima hari lagi saya kembalikan.
  **Kang Dadan:** Mulai sekarang belanjaan warung Bapak selalu saya antar paling dulu!
  *Pinjaman Kang Dadan dicatat di Buku Hutang.*

2. **"Maaf, tidak bisa"**
   - aksi: `tolak`

  **Pak Misran:** Maaf, Kang Dadan. Uang saya lagi habis buat sewa kios.
  **Kang Dadan:** Iya, Pak... Saya coba pinjam ke bos saja.

**HASIL — BANTU (tolong):**

- reputasi: 1
- kurir: 0.8
- hutang: Kang Dadan Rp150000 (dikembalikan 5 hari lagi)
- pesan WA: Kang Dadan: "(pesan suara) Pak Misran, anak saya sudah lahir, laki-laki, sehat. Alhamdulillah. Hatur nuhun pisan bantuannya, Pak."

  **Pop-up "Bayi Kang Dadan Lahir!"**

  Anak Kang Dadan lahir dengan selamat. Kini belanjaan warung Pak Misran selalu diantar paling dulu.

  - Pinjaman Rp150.000 dicatat di Buku Hutang (dikembalikan 5 hari lagi)
  - Kurir belanja 20% lebih cepat datang
  - +1 ulasan bintang 5

**HASIL — TOLAK:**

- kurir: 1.15

  **Pop-up "Cerita Selesai"**

  Kang Dadan meminjam uang ke bosnya. Ia jadi sungkan mampir ke warung.

  - Kurir belanja 15% lebih lama datang

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak Misran! Anak saya sudah bisa senyum. Namanya saya kasih Misbah, mirip nama Bapak, hehe. / **Pak Misran:** Masyaallah, semoga jadi anak saleh, Kang.

*Cabang tolak:*

- **Warga:** Anak saya sudah lahir, Pak. Utang ke bos dipotong dari gaji tiap minggu. / **Pak Misran:** Selamat, Kang Dadan. Semoga sehat semua.

---

### 3.14 Perkakas Mang Ujang (`alat_mang_ujang`)

- **Syarat muncul:** Level ≥ 4 · Hari ≥ 8
#### Tahap 1 — Masjid · Mang Ujang (pukul 07.0–12.0)

  **Mang Ujang:** Astagfirullah... Semua perkakas saya hilang, Pak Misran. Gergaji, bor, palu, semua diambil maling semalam.
  **Pak Misran:** Ya Allah, Mang Ujang! Terus kerjaannya bagaimana?
  **Mang Ujang:** Besok saya dapat borongan renovasi rumah Pak Kades. Kalau nggak ada alat, borongannya dikasih orang lain.
  **Mang Ujang:** Perkakas bekas di pasar Rp200.000, Pak. Saya nggak pegang uang sama sekali.

**Pertanyaan:**

  **Pak Misran:** (Bantu Mang Ujang Rp200.000? Ia hanya sanggup mengembalikan separuhnya.)
**Pilihan jawaban:**

1. **"Bantu Rp200.000"**
   - biaya Rp200000 → aksi: `tolong`

  **Pak Misran:** Ini, Mang. Beli perkakasnya, jangan sampai borongannya lepas.
  **Mang Ujang:** Pak Misran... saya cuma bisa ganti Rp100.000 minggu ini. Sisanya saya bayar pakai tenaga, ya?
  **Pak Misran:** Sudah, nggak usah dipikirkan. Yang penting kerjaannya jalan.
  *Rp100.000 dicatat di Buku Hutang.*

2. **"Maaf, tidak bisa"**
   - aksi: `tolak`

  **Pak Misran:** Maaf, Mang. Saya juga lagi nabung buat Agus.
  **Mang Ujang:** Iya, Pak. Saya pinjam alat ke saudara saja, semoga dikasih.

3. **"Nanti saya pikirkan"**
   - aksi: `tunda`

  **Mang Ujang:** Saya di masjid sampai Zuhur, Pak. Bantu bersih-bersih, daripada nganggur.

**HASIL — BANTU (tolong):**

- reputasi: 3
- ramai: 0.02
- pelanggan: Mang Ujang x1.5
- hutang: Mang Ujang Rp100000 (dikembalikan 4 hari lagi)

  **Pop-up "Borongan Selamat"**

  Mang Ujang dapat borongan renovasi. Para kuli bangunannya tiap hari beli kopi dan gorengan di warung.

  - Rp100.000 dikembalikan 4 hari lagi (Buku Hutang)
  - Warung 2% lebih ramai
  - Mang Ujang lebih sering belanja
  - +3 ulasan bintang 5

**HASIL — TOLAK:**

- pelanggan: Mang Ujang x0.7

  **Pop-up "Cerita Selesai"**

  Mang Ujang kehilangan borongannya.

  - Mang Ujang agak jarang mampir

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Rumah Pak Kades hampir beres, Pak. Kuli-kuli saya betah ngopi di warung Bapak. / **Pak Misran:** Alhamdulillah, Mang. Semoga borongannya nambah terus.

*Cabang tolak:*

- **Warga:** Sekarang saya jadi kuli harian dulu, Pak. Pelan-pelan nabung beli alat. / **Pak Misran:** Semangat, Mang Ujang.

---

### 3.15 Kitab Kang Fadil (`kitab_kang_fadil`)

- **Syarat muncul:** Level ≥ 2 · Hari ≥ 6
#### Tahap 1 — Pesantren · Kang Fadil (pukul 07.0–12.0)

  **Kang Fadil:** Assalamualaikum, Pak Misran...
  **Pak Misran:** Waalaikumsalam, Kang Fadil. Kok kelihatan bingung?
  **Kang Fadil:** Kitab saya ketumpahan air, Pak. Halamannya sobek dan luntur. Padahal sebentar lagi ujian hafalan, saya harus pakai kitab itu.
  **Kang Fadil:** Kitab baru di toko kitab kota Rp80.000. Kiriman Emak bulan ini sudah habis buat bayar asrama...

**Pertanyaan:**

  **Pak Misran:** (Belikan Kang Fadil kitab baru, Rp80.000?)
**Pilihan jawaban:**

1. **"Belikan kitab (Rp80.000)"**
   - biaya Rp80000 → aksi: `tolong`

  **Pak Misran:** Ini, Kang. Beli kitab yang baru. Belajar yang sungguh-sungguh, ya.
  **Kang Fadil:** Jazakallah khair, Pak Misran! Insyaallah saya doakan warung Bapak berkah.
  **Kang Fadil:** Nanti teman-teman asrama saya ajak jajan di warung Bapak.

2. **"Pakai kitab teman dulu, ya"**
   - aksi: `tolak`

  **Pak Misran:** Coba pinjam kitab teman dulu, Kang. Bapak lagi belum ada.
  **Kang Fadil:** Iya, Pak. Nanti saya salin dari kitab Kang Hasan.

3. **"Nanti dulu"**
   - aksi: `tunda`

  **Kang Fadil:** Iya, Pak. Saya di sini sampai Zuhur, murojaah hafalan.

**HASIL — BANTU (tolong):**

- reputasi: 3
- ramai: 0.02
- pelanggan: Kang Fadil x1.4, Kang Hasan x1.2

  **Pop-up "Lulus Ujian Hafalan"**

  Kang Fadil lulus ujian dengan nilai terbaik. Santri-santri asrama jadi sering jajan di warung.

  - Warung 2% lebih ramai
  - Para santri lebih sering belanja
  - +3 ulasan bintang 5

**HASIL — TOLAK:**

- pelanggan: Kang Fadil x0.75

  **Pop-up "Cerita Selesai"**

  Kang Fadil menyalin kitab dari temannya semalaman.

  - Kang Fadil agak jarang mampir

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak Misran, alhamdulillah hafalan saya lulus! Kitabnya saya jaga baik-baik. / **Pak Misran:** Masyaallah, selamat, Kang Fadil!

*Cabang tolak:*

- **Warga:** Ujian kemarin lumayan, Pak. Salinan kitab saya tulisannya berantakan, hehe. / **Pak Misran:** Yang penting hafalannya, Kang.

---

### 3.16 Lampu Kedip Zebra Cross (`lampu_zebra_pak_rt`)

- **Syarat muncul:** Level ≥ 6 · Hari ≥ 9
#### Tahap 1 — Rumah Warga · Pak RT (pukul 16.0–21.0)

  **Pak RT:** Pak Misran, pas sekali. Saya lagi keliling minta sumbangan warga.
  **Pak RT:** Motor sering ngebut di zebra cross depan warung. Sudah beberapa kali warga hampir keserempet.
  **Pak RT:** Kami mau pasang lampu kedip dan rambu di kedua ujung jalan kampung, supaya kendaraan melambat. Kurangnya Rp150.000 lagi.
  **Pak Misran:** Wah, itu penting sekali, Pak RT. Warung saya juga pas di situ.

**Pertanyaan:**

  **Pak Misran:** (Sumbang kekurangan biaya lampu & rambu Rp150.000?)
**Pilihan jawaban:**

1. **"Sumbang Rp150.000"**
   - biaya Rp150000 → aksi: `tolong`

  **Pak Misran:** Biar saya tutup kekurangannya, Pak RT. Supaya cepat dipasang.
  **Pak RT:** Masyaallah! Hatur nuhun, Pak Misran. Minggu ini langsung kami pasang.

2. **"Maaf, belum bisa"**
   - aksi: `tolak`

  **Pak Misran:** Maaf, Pak RT. Bulan ini saya lagi berat, sewa kios naik.
  **Pak RT:** Iya, nggak apa-apa, Pak. Kami tunggu sumbangan warga lain dulu.

3. **"Nanti saya pikirkan"**
   - aksi: `tunda`

  **Pak RT:** Boleh, Pak. Saya di pos ronda sampai malam.

**HASIL — BANTU (tolong):**

- reputasi: 3
- ramai: 0.03
- zebra_aman: 0.5
- pesan WA: Pak RT: "Alhamdulillah, lampu kedip dan rambu di kedua ujung jalan kampung sudah terpasang. Terima kasih Pak Misran yang menutup kekurangan biayanya."

  **Pop-up "Zebra Cross Terang"**

  Lampu kedip dan rambu terpasang di kedua ujung jalan kampung. Kendaraan lebih pelan, warga lebih aman, dan warung lebih ramai.

  - Menyeberang jauh lebih aman (kendaraan melambat)
  - Warung 3% lebih ramai
  - +3 ulasan bintang 5

**HASIL — TOLAK:**


  **Pop-up "Cerita Selesai"**

  Lampu kedip belum terpasang. Hati-hati menyeberang.

  - Kendaraan tetap ngebut di zebra cross

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Sejak ada lampu kedip dan rambu, motor jadi pelan-pelan lewat depan warung, Pak. Alhamdulillah. / **Pak Misran:** Alhamdulillah, Pak RT. Anak-anak juga aman nyeberang.

*Cabang tolak:*

- **Warga:** Sumbangan lampu kedip masih kurang, Pak. Sabar dulu, ya. / **Pak Misran:** Semoga cepat terkumpul, Pak RT.

---

### 3.17 Izin Agen Air Galon (`izin_depot_galon`)

- **Syarat muncul:** Level ≥ 3 · Hari ≥ 1
#### Tahap 1 — Rumah Warga · Pak RT (pukul 08.0–21.0)

  **Pak RT:** Pak Misran! Kebetulan. Tadi orang depot air isi ulang mampir ke pos ronda, nanyain warung Bapak.
  **Pak Misran:** Oh, soal galon titipan itu, Pak RT? Sudah lama nangkring di rak, tapi belum boleh saya jual.
  **Pak RT:** Nah, itu dia. Depotnya mau jadikan warung Bapak agen resmi. Syaratnya surat keterangan usaha dari RT dan RW.
  **Pak RT:** Biaya administrasi sama materai Rp75.000, Pak. Suratnya bisa saya urus hari ini juga.

**Pertanyaan:**

  **Pak Misran:** (Urus surat keterangan usaha agen galon, Rp75.000?)
**Pilihan jawaban:**

1. **"Urus suratnya (Rp75.000)"**
   - biaya Rp75000 → aksi: `tolong`

  **Pak Misran:** Bismillah, tolong diurus, Pak RT. Ini uangnya.
  **Pak RT:** Siap! Sore ini saya antar suratnya ke depot. Mulai besok galon di warung Bapak sudah resmi boleh dijual.

2. **"Nanti dulu, uangnya belum cukup"**
   - aksi: `tunda`

  **Pak RT:** Iya, Pak. Kapan saja Bapak siap, saya di pos ronda.

**HASIL — BANTU (tolong):**

- reputasi: 1
- barang terbuka: galon

  **Pop-up "Resmi Jadi Agen Galon!"**

  Surat keterangan usaha sudah keluar. Galon titipan depot sekarang boleh dijual.

  - Air galon isi ulang sekarang bisa dijual (untung Rp2.000 per galon)
  - Galon titipan di rak langsung bisa dijual

---

### 3.18 Pangkalan Gas Resmi (`pangkalan_gas`)

- **Syarat muncul:** Level ≥ 4 · Hari ≥ 1
#### Tahap 1 — SD · Kang Asep (pukul 15.0–20.0)

  **Kang Asep:** Pak Misran! Saya baru dari agen LPG di kecamatan, saudara saya kerja di sana.
  **Kang Asep:** Katanya mereka cari pangkalan baru di kampung ini. Warung Bapak kan sudah ada tabung titipan, tinggal izinnya.
  **Pak Misran:** Wah, betul, Kang. Tabungnya sudah lama di rak, tapi belum berani saya jual tanpa izin.
  **Kang Asep:** Syaratnya uang jaminan tabung Rp200.000, Pak. Nanti saya yang antar berkasnya ke agen.

**Pertanyaan:**

  **Pak Misran:** (Bayar jaminan tabung Rp200.000 supaya warung jadi pangkalan LPG resmi?)
**Pilihan jawaban:**

1. **"Bayar jaminan (Rp200.000)"**
   - biaya Rp200000 → aksi: `tolong`

  **Pak Misran:** Ini, Kang. Tolong sampaikan ke agennya, ya.
  **Kang Asep:** Siap, Pak! Besok tanda pangkalannya sudah bisa dipasang. Ibu-ibu nggak perlu jauh-jauh lagi beli gas.

2. **"Nanti dulu"**
   - aksi: `tunda`

  **Kang Asep:** Iya, Pak. Saya mangkal di sini tiap sore, nunggu anak-anak pulang les.

**HASIL — BANTU (tolong):**

- reputasi: 2
- ramai: 0.02
- barang terbuka: lpg

  **Pop-up "Pangkalan LPG Resmi!"**

  Warung Pak Misran jadi pangkalan LPG 3 kg resmi. Ibu-ibu sekampung beli gas di sini.

  - LPG 3 kg sekarang bisa dijual (untung Rp4.000 per tabung)
  - Warung 2% lebih ramai
  - +2 ulasan bintang 5

---

### 3.19 Pesanan Arisan Ibu-Ibu (`arisan_bu_ida`)

- **Syarat muncul:** Level ≥ 5 · Hari ≥ 1 · **JANJI** (hanya hari libur warung)
#### Tahap 1 — Pasar · Bu Ida (pukul 08.0–20.0)

  **Bu Ida:** Eh, Pak Misran, mampir ke pasar juga? Ibu-ibu arisan mau masak besar buat syukuran kampung sebentar lagi.
  **Bu Ida:** Kami perlu gula pasir sama teh celup yang banyak. Di lapak saya cuma ada buah. Kalau beli di grosir Haji Maman, ibu-ibu repot bolak-balik naik angkot.
  **Bu Ida:** Kalau Bapak mau sediakan, kami langsung borong. Nanti seterusnya juga belanja di warung Bapak.
  *Untuk stok pertama gula dan teh celup, Pak Misran harus keluar modal Rp150.000.*

**Pertanyaan:**

  **Pak Misran:** (Sediakan gula & teh celup dengan modal Rp150.000? Ibu-ibu langsung memborong Rp220.000.)
**Pilihan jawaban:**

1. **"Sediakan (modal Rp150.000)"**
   - biaya Rp150000 → aksi: `tolong`

  **Pak Misran:** Siap, Bu Ida. Besok pagi gula dan teh celupnya sudah ada di warung.
  **Bu Ida:** Alhamdulillah! Ini uang borongannya Rp220.000, Pak. Sisanya nanti ibu-ibu belanja sendiri-sendiri.

2. **"Nanti dulu"**
   - aksi: `tunda`

  **Bu Ida:** Iya, Pak. Tapi jangan lama-lama, syukurannya sebentar lagi.

**HASIL — BANTU (tolong):**

- uang: 220000
- ramai: 0.02
- barang terbuka: gula, kopi_bubuk
- pelanggan: Bu Ida x1.3

  **Pop-up "Barang Baru Terbuka!"**

  Ibu-ibu arisan memborong gula dan teh celup. Kini keduanya jadi barang tetap di warung.

  - Gula pasir & teh celup sekarang bisa dijual
  - Borongan Rp220.000 (untung Rp70.000)
  - Warung 2% lebih ramai

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Syukurannya rame, Pak. Teh manisnya enak, pada nanya beli tehnya di mana. / **Pak Misran:** Alhamdulillah, Bu Ida. Makasih sudah promosi.

---

### 3.20 Ucup Juara Kelas (`ucup_juara`)

- **Syarat muncul:** Level ≥ 5 · Hari ≥ 1 · HARI SEKOLAH (bukan Minggu) · bukan Ramadan · **JANJI** (hanya hari libur warung)
#### Tahap 1 — SD · Ucup (pukul 08.0–13.0)

  **Ucup:** Pak Misran! Pak Misran! Ucup ranking satu di kelas!
  **Pak Misran:** Masyaallah, Cup! Hebat sekali kamu!
  **Ucup:** Bu Guru bilang yang juara boleh traktir teman sekelas. Tapi Ucup nggak punya uang, Pak... Nenek juga.
  **Ucup:** Ucup pengin traktir susu kotak buat teman-teman. Mereka yang dulu minjemin Ucup buku.

**Pertanyaan:**

  **Pak Misran:** (Bantu Ucup mentraktir teman sekelasnya?)
**Pilihan jawaban:**

1. **"Traktir susu kotak satu kelas (Rp90.000)"**
   - biaya Rp90000 → aksi: `tolong`

  **Pak Misran:** Nanti Bapak antar susu kotak buat satu kelas. Anggap hadiah juara dari Bapak.
  **Ucup:** Beneran, Pak?! Ucup mau bilang ke teman-teman, ini dari Pak Misran!

2. **"Belikan kue kecil saja (Rp40.000)"**
   - biaya Rp40000 → aksi: `tolong`

  **Pak Misran:** Bapak belikan kue kecil buat dibagi, ya. Uang Bapak lagi pas-pasan.
  **Ucup:** Nggak apa-apa, Pak! Makasih banyak! Nanti Ucup bilang ke Bu Guru.

3. **"Nanti dulu"**
   - aksi: `tunda`

  **Ucup:** Iya, Pak. Ucup di sini sampai pulang sekolah.

**HASIL — BANTU (tolong):**

- reputasi: 3
- barang terbuka: susu_kotak
- pelanggan: Ucup x1.3, Neng Shinta x1.2, Dimas x1.2

  **Pop-up "Barang Baru Terbuka!"**

  Anak-anak SD senang ditraktir. Sejak itu mereka sering mampir membeli susu kotak sebelum sekolah.

  - Susu kotak sekarang bisa dijual
  - Anak sekolah lebih sering belanja
  - +3 ulasan bintang 5

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak Misran, teman-teman masih ngomongin susu kotak kemarin! Ucup mau tetap juara! / **Pak Misran:** Pertahankan, Cup. Nenek pasti bangga.

---

### 3.21 Susu Sekolah (`susu_sd`)

- **Syarat muncul:** Level ≥ 5 · Hari ≥ 1 · HARI SEKOLAH (bukan Minggu) · bukan Ramadan · **JANJI** (hanya hari libur warung)
#### Tahap 1 — SD · Neng Shinta (pukul 13.0–17.0)

  **Neng Shinta:** Pak Misran! Bu Guru lagi cari warung yang bisa sediakan susu kotak buat adik-adik SD.
  **Neng Shinta:** Stok pertamanya sekitar Rp90.000, Pak. Nanti anak-anak bisa beli sendiri sebelum sekolah.

**Pertanyaan:**

  **Pak Misran:** (Sediakan susu kotak untuk anak-anak SD, Rp90.000?)
**Pilihan jawaban:**

1. **"Sediakan (Rp90.000)"**
   - biaya Rp90000 → aksi: `tolong`

  **Pak Misran:** Boleh, Neng. Bilang ke Bu Guru, susu kotaknya saya sediakan.
  **Neng Shinta:** Makasih, Pak! Adik-adik pasti senang.

2. **"Nanti dulu"**
   - aksi: `tunda`

  **Neng Shinta:** Iya, Pak. Saya di sini tiap pulang sekolah.

**HASIL — BANTU (tolong):**

- reputasi: 3
- barang terbuka: susu_kotak
- pelanggan: Ucup x1.3, Neng Shinta x1.2, Dimas x1.2

  **Pop-up "Barang Baru Terbuka!"**

  Anak-anak SD mulai membeli susu kotak di warung sebelum sekolah.

  - Susu kotak sekarang bisa dijual
  - Anak sekolah lebih sering belanja
  - +3 ulasan bintang 5

---

### 3.22 Hama Wereng di Sawah (`panen_abah`)

- **Syarat muncul:** Level ≥ 3 · Hari ≥ 1
#### Tahap 1 — Sawah · Abah Karta (pukul 07.0–17.0)

  **Abah Karta:** Aduh, Pak Misran... Lihat ini, padinya kena wereng. Batangnya mulai kuning.
  **Pak Misran:** Astagfirullah, Abah. Masih bisa diselamatkan?
  **Abah Karta:** Masih, kalau cepat disemprot. Obat hamanya Rp150.000, tapi uang Abah habis buat bibit kemarin.
  **Abah Karta:** Kalau panen gagal, beras titipan di warung Bapak juga ikut habis...

**Pertanyaan:**

  **Pak Misran:** (Bantu Abah membeli obat hama Rp150.000? Abah berjanji membayar dengan hasil panen.)
**Pilihan jawaban:**

1. **"Bantu beli obat hama (Rp150.000)"**
   - biaya Rp150000 → aksi: `tolong`

  **Pak Misran:** Ayo, Abah. Kita beli sekarang, sekalian saya bantu semprot.
  *Pak Misran membantu Abah Karta menyemprot sawah sampai siang.*
  **Abah Karta:** Hatur nuhun, Pak. Nanti kalau panen, uangnya Abah ganti, ditambah beras sekarung buat Bapak.

2. **"Maaf, belum bisa"**
   - aksi: `tolak`

  **Pak Misran:** Maaf, Abah. Uang warung lagi dipakai buat Agus.
  **Abah Karta:** Iya, Pak... Abah coba pinjam ke kelompok tani saja.

**HASIL — BANTU (tolong):**

- reputasi: 3
- pelanggan: Abah Karta x1.4
- hutang: Abah Karta Rp200000 (dikembalikan 6 hari lagi)

  **Pop-up "Sawah Selamat"**

  Padi Abah Karta selamat dari wereng. Abah berjanji mengganti uangnya dari hasil panen.

  - Abah membayar Rp200.000 dari hasil panen 6 hari lagi (Buku Hutang)
  - Abah Karta lebih sering belanja
  - +3 ulasan bintang 5

**HASIL — TOLAK:**

- pelanggan: Abah Karta x0.7

  **Pop-up "Cerita Selesai"**

  Abah Karta meminjam obat hama ke kelompok tani. Sebagian sawahnya tetap gagal panen.

  - Abah Karta agak jarang mampir

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Padinya sudah menguning bagus, Pak. Wereng kapok, hehe. / **Pak Misran:** Alhamdulillah, Abah. Semoga panennya melimpah.

---

### 3.23 Laundry Mba Giska (`laundry_giska`)

- **Syarat muncul:** Level ≥ 6 · Hari ≥ 1 · **JANJI** (hanya hari libur warung)
#### Tahap 1 — Rumah Warga · Mba Giska (pukul 09.0–18.0)

  **Mba Giska:** Pak Misran! Saya mau buka usaha laundry kiloan di rumah. Banyak santri sama pekerja yang butuh.
  **Mba Giska:** Saya butuh sabun dan deterjen rutin tiap minggu. Bapak mau jadi pemasok saya?
  **Pak Misran:** Wah, boleh sekali, Mba. Tapi warung saya belum jual sabun dan deterjen.
  **Mba Giska:** Stok pertamanya kira-kira Rp120.000, Pak. Nanti pesanan pertama saya bayar Rp170.000 di muka.

**Pertanyaan:**

  **Pak Misran:** (Sediakan sabun & deterjen dengan modal Rp120.000? Mba Giska membayar pesanan pertama Rp170.000.)
**Pilihan jawaban:**

1. **"Jadi pemasok (modal Rp120.000)"**
   - biaya Rp120000 → aksi: `tolong`

  **Pak Misran:** Siap, Mba. Besok sabun dan deterjennya sudah ada.
  **Mba Giska:** Deal! Ini Rp170.000 buat pesanan pertama. Nanti pelanggan laundry saya suruh belanja ke warung Bapak juga.

2. **"Nanti dulu"**
   - aksi: `tunda`

  **Mba Giska:** Oke, Pak. Saya masih beres-beres mesin cucinya kok.

**HASIL — BANTU (tolong):**

- uang: 170000
- ramai: 0.02
- barang terbuka: sabun, deterjen
- pelanggan: Mba Giska x1.3, Kang Fadil x1.1, Kang Hasan x1.1

  **Pop-up "Barang Baru Terbuka!"**

  Laundry Mba Giska ramai. Warung Pak Misran jadi pemasok sabun dan deterjennya.

  - Sabun mandi & deterjen sekarang bisa dijual
  - Pesanan pertama Rp170.000 (untung Rp50.000)
  - Warung 2% lebih ramai

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Laundry saya sudah 20 kilo sehari, Pak! Deterjennya cepat habis, hehe. / **Pak Misran:** Alhamdulillah, Mba. Stoknya saya siapkan terus.

---

### 3.24 Loket Token Listrik (`token_pak_rt`)

- **Syarat muncul:** Level ≥ 7 · Hari ≥ 1
#### Tahap 1 — Rumah Warga · Pak RT (pukul 16.0–21.0)

  **Pak RT:** Pak Misran, semalam rumah Nenek Sumi gelap. Token listriknya habis, konter terdekat sudah tutup.
  **Pak RT:** Warga minta saya cari warung yang bisa jual token listrik. Warung Bapak kan sudah ada konter pulsa.
  **Pak Misran:** Bisa, Pak RT. Tapi harus daftar loket dan isi deposit dulu, ya?
  **Pak RT:** Iya, pendaftaran loketnya Rp100.000. Biar warga nggak kegelapan lagi malam-malam.

**Pertanyaan:**

  **Pak Misran:** (Daftar loket token listrik, Rp100.000?)
**Pilihan jawaban:**

1. **"Daftar loket (Rp100.000)"**
   - biaya Rp100000 → aksi: `tolong`

  **Pak Misran:** Saya daftar hari ini, Pak RT. Mulai besok warga bisa beli token di warung.
  **Pak RT:** Alhamdulillah. Saya umumkan di grup RT.

2. **"Nanti dulu"**
   - aksi: `tunda`

  **Pak RT:** Boleh, Pak. Saya di pos ronda tiap sore.

**HASIL — BANTU (tolong):**

- reputasi: 2
- ramai: 0.02
- barang terbuka: token_listrik
- pesan WA: Pak RT: "Bapak-Ibu, sekarang beli token listrik bisa di warung Pak Misran. Nggak usah jauh-jauh ke kecamatan lagi."

  **Pop-up "Barang Baru Terbuka!"**

  Warung Pak Misran resmi jadi loket token listrik.

  - Token listrik sekarang bisa dijual di konter pulsa
  - Warung 2% lebih ramai
  - +2 ulasan bintang 5

---

### 3.25 Dimas Masuk SMK (`dimas_smk`)

- **Syarat muncul:** Level ≥ 7 · Hari ≥ 1 · **JANJI** (hanya hari libur warung)
#### Tahap 1 — Sawah · Dimas (pukul 14.0–18.0)

  **Dimas:** Pak Misran... Dimas keterima di SMK jurusan mesin.
  **Pak Misran:** Wah, selamat, Dim! Kok mukanya sedih?
  **Dimas:** Seragam praktik sama sepatu safety-nya Rp150.000, Pak. Bapak saya lagi nggak ada kerjaan. Takut nggak jadi sekolah.
  **Dimas:** Kalau Bapak bantu dulu, Dimas cicil separuhnya dari uang saku. Boleh, Pak?

**Pertanyaan:**

  **Pak Misran:** (Bantu biaya seragam Dimas Rp150.000? Ia akan mencicil separuhnya dari uang saku.)
**Pilihan jawaban:**

1. **"Bantu (Rp150.000)"**
   - biaya Rp150000 → aksi: `tolong`

  **Pak Misran:** Ini, Dim. Sekolah yang benar. Soal cicilan, separuh saja cukup.
  **Dimas:** Makasih, Pak! Dimas janji, minggu depan cicilannya Dimas antar ke warung!

2. **"Maaf, belum bisa"**
   - aksi: `tolak`

  **Pak Misran:** Maaf, Dim. Bapak juga lagi butuh buat Agus.
  **Dimas:** Iya, Pak. Dimas coba minta keringanan ke sekolah.

3. **"Nanti dulu"**
   - aksi: `tunda`

  **Dimas:** Iya, Pak. Dimas di sini sampai sore.

**HASIL — BANTU (tolong):**

- reputasi: 3
- ramai: 0.01
- pelanggan: Dimas x1.4, Neng Shinta x1.1
- hutang: Dimas Rp75000 (dikembalikan 7 hari lagi)

  **Pop-up "Dimas Bisa Sekolah"**

  Dimas mulai sekolah di SMK. Ia mencicil separuh bantuan Pak Misran dari uang sakunya.

  - Dimas mengembalikan Rp75.000 7 hari lagi (Buku Hutang)
  - Anak sekolah lebih sering belanja
  - +3 ulasan bintang 5

**HASIL — TOLAK:**

- pelanggan: Dimas x0.75

  **Pop-up "Cerita Selesai"**

  Dimas mendapat keringanan dari sekolah, tapi harus memakai seragam bekas.

  - Dimas agak jarang mampir

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak, tadi praktik bongkar mesin motor! Seru banget! / **Pak Misran:** Mantap, Dim. Nanti benerin motor Kang Asep, ya, hehe.

---

### 3.26 Freezer Es Krim (`freezer_es_krim`)

- **Syarat muncul:** Level ≥ 7 · Hari ≥ 1 · **JANJI** (hanya hari libur warung)
#### Tahap 1 — Warung · Kang Dadan (pukul 10.0–17.0)

  **Kang Dadan:** Pak Misran, kantor saya sekarang juga distributor es krim. Mereka cari warung buat titip freezer.
  **Kang Dadan:** Saya langsung rekomendasikan warung Bapak. Warung paling ramai di kampung ini.
  **Pak Misran:** Wah, freezer? Anak-anak pasti senang. Syaratnya apa, Kang?
  **Kang Dadan:** Uang jaminan freezer Rp250.000, Pak. Freezernya tetap milik distributor, listriknya dari warung.

**Pertanyaan:**

  **Pak Misran:** (Bayar jaminan freezer es krim Rp250.000?)
**Pilihan jawaban:**

1. **"Pasang freezer (Rp250.000)"**
   - biaya Rp250000 → aksi: `tolong`

  **Pak Misran:** Ayo, Kang. Pasang di samping kulkas saja.
  **Kang Dadan:** Siap! Besok freezer sama es krimnya saya antar sekalian.

2. **"Nanti dulu"**
   - aksi: `tunda`

  **Kang Dadan:** Iya, Pak. Tawarannya masih berlaku kok.

**HASIL — BANTU (tolong):**

- ramai: 0.03
- barang terbuka: es_krim
- pelanggan: Ucup x1.2, Neng Shinta x1.15, Dimas x1.15

  **Pop-up "Barang Baru Terbuka!"**

  Freezer es krim terpasang. Anak-anak kampung berebut beli es krim sepulang sekolah.

  - Es krim sekarang bisa dijual (paling laris siang hari)
  - Warung 3% lebih ramai
  - Anak-anak lebih sering mampir

---

### 3.27 Umrah untuk Ibunda (`umrah_haji_doni`)

- **Syarat muncul:** Level ≥ 9 · Hari ≥ 1
#### Tahap 1 — Masjid · Haji Doni (pukul 07.0–17.0)

  **Haji Doni:** Pak Misran, ibu saya sudah sepuh. Dari dulu beliau ingin sekali umrah sebelum ajal.
  **Haji Doni:** Tabungan saya hampir cukup, tapi kurang sedikit. Jamaah masjid sepakat patungan.
  **Haji Doni:** Saya tidak memaksa, Pak. Seikhlasnya saja. Doa Bapak juga sudah cukup.

**Pertanyaan:**

  **Pak Misran:** (Ikut patungan umrah ibunda Haji Doni?)
**Pilihan jawaban:**

1. **"Ikut patungan (Rp300.000)"**
   - biaya Rp300000 → aksi: `tolong`

  **Pak Misran:** Ini dari saya, Haji Doni. Semoga ibunda sehat dan lancar ibadahnya.
  **Haji Doni:** Masyaallah... Jazakallah khair, Pak Misran. Nama Bapak saya titipkan dalam doa di Tanah Suci.

2. **"Ikut patungan (Rp100.000)"**
   - biaya Rp100000 → aksi: `tolong`

  **Pak Misran:** Maaf cuma segini, Haji Doni. Semoga berkah.
  **Haji Doni:** Berapa pun sangat berarti, Pak Misran. Terima kasih.

3. **"Doakan saja"**
   - aksi: `tolak`

  **Pak Misran:** Saya doakan dari sini, Haji Doni. Semoga lancar semuanya.
  **Haji Doni:** Aamiin. Terima kasih, Pak.

**HASIL — BANTU (tolong):**

- reputasi: 4
- ramai: 0.03
- pesan WA: Pak RT: "Alhamdulillah, patungan umrah ibunda Pak Haji Doni sudah terkumpul. Terima kasih jamaah, termasuk Pak Misran."

  **Pop-up "Berangkat ke Tanah Suci"**

  Ibunda Haji Doni berangkat umrah. Jamaah masjid makin sayang pada Pak Misran.

  - Warung 3% lebih ramai
  - +4 ulasan bintang 5

**HASIL — TOLAK:**


  **Pop-up "Cerita Selesai"**

  Patungan jamaah tetap cukup. Ibunda Haji Doni berangkat umrah.

  - Haji Doni berterima kasih atas doanya

---

### 3.28 Agus Pulang (`agus_mudik`)

- **Syarat muncul:** Hari ≥ 85 · Hari ≤ 85
#### Tahap 1 — Warung · Agus (pukul 07.0–22.0)

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
   - aksi: `tolong`

  **Pak Misran:** Ayo masuk, Gus. Bapak buatkan kopi. Ceritakan semua soal kuliahmu.

**HASIL — BANTU (tolong):**

- reputasi: 3
- agus_bantu: 4

  **Pop-up "Agus Pulang"**

  Agus mudik Lebaran dan ikut menjaga warung selama beberapa hari.

  - Agus membantu di warung 4 hari: pembeli 25% lebih sabar
  - Warga ikut senang: +3 ulasan baik

---

### 3.29 Takjil Masjid (`takjil_masjid`)

- **Syarat muncul:** Level ≥ 1 · Hari ≥ 56 · Hari ≤ 84 · **JANJI** (hanya hari libur warung)
#### Tahap 1 — Masjid · Haji Doni (pukul 09.0–17.0)

  **Haji Doni:** Assalamualaikum, Pak Misran. Setiap sore selama Ramadan, masjid menyiapkan takjil gratis untuk jamaah dan musafir yang lewat.
  **Haji Doni:** Kas masjid sedang menipis. Kalau warung Bapak berkenan menyumbang teh botol dan kurma untuk buka bersama, insyaallah berkah.
  *Sumbangan takjil untuk sisa Ramadan kira-kira Rp100.000.*

**Pertanyaan:**

  **Pak Misran:** (Sumbang takjil buka bersama Rp100.000?)
**Pilihan jawaban:**

1. **"Sumbang (Rp100.000)"**
   - biaya Rp100000 → aksi: `tolong`

  **Pak Misran:** Insyaallah, Haji Doni. Nanti sore Bapak antar ke masjid.
  **Haji Doni:** Jazakallah khair, Pak Misran. Nanti saya umumkan, takjilnya dari warung Bapak.

2. **"Maaf, belum bisa"**
   - aksi: `tolak`

  **Pak Misran:** Mohon maaf, Haji Doni, warung sedang seret. Semoga ada rezeki lain.
  **Haji Doni:** Tidak apa-apa, Pak. Doakan saja kas masjid cukup.

3. **"Nanti dulu"**
   - aksi: `tunda`

  **Haji Doni:** Iya, Pak. Kabari saya kalau sudah siap.

**HASIL — BANTU (tolong):**

- reputasi: 3
- ramai: 0.02
- pelanggan: Kang Fadil x1.3, Kang Hasan x1.3, Nenek Sumi x1.2
- pesan WA: Haji Doni: "Bapak-Ibu, takjil buka bersama di masjid Ramadan ini disumbang warung Pak Misran. Jazakallah khair!"

  **Pop-up "Takjil Masjid"**

  Takjil dari warung Pak Misran dibagikan setiap sore di masjid. Jamaah jadi sering mampir ke warung.

  - Jamaah & santri lebih sering belanja
  - Warung 2% lebih ramai
  - Warga memberi ulasan baik

**HASIL — TOLAK:**


  **Pop-up "Takjil Masjid"**

  Pak Misran belum bisa menyumbang takjil tahun ini.


**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Takjil dari warung Bapak laris, Pak. Jamaah senang sekali. / **Pak Misran:** Alhamdulillah, Haji Doni. Semoga berkah.

---

### 3.30 Abah Karta Tersesat (`abah_tersesat`)

- **Syarat muncul:** Level ≥ 5 · Hari ≥ 1
#### Tahap 1 — Masjid · Abah Karta (pukul 16.0–21.0)

  *Abah Karta berdiri sendirian di depan masjid. Sarungnya terbalik, matanya terus menatap pintu masjid.*
  **Abah Karta:** Eh, Misran... Abah lagi nungguin Ambu. Katanya sebentar lagi beres ngaji.
  **Pak Misran:** (Ambu, istri Abah Karta, sudah wafat lima tahun lalu...)
  **Abah Karta:** Ambu teh suka lupa waktu kalau sudah ngaji. Nanti nasinya keburu dingin.

**Pertanyaan:**

  **Pak Misran:** (Apa yang Pak Misran katakan?)
**Pilihan jawaban:**

1. **"Temani Abah dan ajak pulang pelan-pelan"**
   - aksi: `lanjut`

  **Pak Misran:** Abah, anginnya mulai dingin. Kita tunggu Ambu di rumah saja, yuk. Saya antar.
  **Abah Karta:** Iya, ya... Ambu mah pasti pulang sendiri. Dia hafal jalan.
  *Pak Misran menuntun Abah Karta pulang. Sepanjang jalan, Abah bercerita tentang Ambu seolah baru kemarin.*
  *Ceritakan kejadian ini kepada Pak RT di pos ronda (area Rumah Warga).*

2. **""Abah, Ambu kan sudah meninggal""**
   - aksi: `ulang`

  **Abah Karta:** Meninggal...? (Abah terdiam lama, lalu menangis seperti baru pertama kali mendengarnya.)
  **Pak Misran:** (Sepertinya bukan begini caranya. Abah butuh ditemani, bukan diingatkan.)

3. **"Nanti saja"**
   - aksi: `tunda`

  **Pak Misran:** Abah, saya ke warung dulu sebentar, ya.
  **Abah Karta:** Iya, Misran. Abah di sini saja, nungguin Ambu.

#### Tahap 2 — Rumah Warga · Pak RT (pukul 07.0–21.0)

  **Pak Misran:** Pak RT, tadi saya ketemu Abah Karta di masjid. Beliau nungguin Ambu...
  **Pak RT:** Astaghfirullah. Sudah dua kali minggu ini, Pak. Kemarin Bu Ida menemukan Abah di jembatan sawah waktu pulang dari pasar.
  **Pak RT:** Anak-anaknya di Jakarta semua. Ditelepon katanya sibuk, nanti Lebaran pulang.
  **Pak Misran:** Kasihan, Pak. Abah tinggal sendirian di rumah sebesar itu.
  **Pak RT:** Bagaimana kalau warga bergiliran menengok Abah? Pagi Bapak sebelum buka warung, sore Bu Ida sepulang dari pasar, malam saya.

**Pertanyaan:**

  **Pak Misran:** (Ikut bergiliran menengok Abah Karta?)
**Pilihan jawaban:**

1. **"Saya ikut, pagi biar saya"**
   - aksi: `lanjut`

  **Pak RT:** Alhamdulillah. Coba tengok Abah di sawah, ya. Biasanya beliau ada di sawah.
  *Tengok Abah Karta di sawah.*

2. **"Saya sibuk di warung, Pak"**
   - aksi: `tolak`

  **Pak RT:** Ya sudah, Pak. Biar saya cari warga lain.

#### Tahap 3 — Sawah · Abah Karta (pukul 07.0–21.0)

  **Abah Karta:** Pak Misran! Sini, sini. Abah dengar dari Pak RT... Abah bikin repot, ya?
  **Pak Misran:** Nggak repot, Abah. Saya senang nemenin Abah ngobrol.
  **Abah Karta:** Kadang kepala Abah teh kayak berkabut. Abah lupa Ambu sudah nggak ada. Terus ingat lagi, terus sedih lagi.
  **Abah Karta:** Tapi tadi Abah ingat satu hal: waktu kecil Pak Misran suka nyolong jambu di kebun Ambu, hahaha.
  **Pak Misran:** Hahaha, Abah masih ingat saja. Ambu malah ngasih saya sekantong, katanya biar nggak nyolong lagi.
  **Abah Karta:** Iya... Ambu memang begitu. Hatur nuhun, Pak Misran. Sudah mau jadi teman orang tua ini.
  *Mulai hari itu warga bergiliran menengok Abah Karta. Abah tidak pernah lagi tersesat sendirian.*

*(aksi otomatis tahap ini: `tolong`)*

**HASIL — BANTU (tolong):**

- reputasi: 2

  **Pop-up "Abah Tidak Sendirian"**

  Warga bergiliran menengok Abah Karta setiap hari. Kabar kebaikan ini tersebar di grup RT.

  - Abah Karta dan Pak RT makin akrab dengan Pak Misran
  - +2 ulasan bintang 5 dari warga

**HASIL — TOLAK:**


  **Pop-up "Cerita Selesai"**

  Pak RT mencari warga lain untuk menengok Abah Karta.

  - Tidak ada perubahan

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Tadi pagi Abah bangun, langsung ingat: hari ini giliran Pak Misran nengok. Abah sudah nunggu di saung, hehe. / **Pak Misran:** Saya bawakan teh manis, Abah.
- **Warga:** Jadwal nengok Abah Karta sekarang penuh, Pak. Malah warga rebutan giliran. / **Pak Misran:** Alhamdulillah, Pak RT. Kampung kita memang begini.

---

### 3.31 Rahasia Pak Rudi (`rahasia_rudi`)

- **Syarat muncul:** Level ≥ 8 · Hari ≥ 1 · bukan Ramadan · **JANJI** (hanya hari libur warung)
#### Tahap 1 — Masjid · Pak Rudi (pukul 10.0–15.0)

  *Pak Rudi berdiri di depan masjid dengan kemeja kantor dan tas kerjanya. Matanya kosong.*
  **Pak Rudi:** Eh... Pak Misran. Saya... lagi istirahat.
  **Pak Misran:** Kantor Bapak kan di kota, Pak Rudi. Jauh sekali istirahatnya sampai ke sini.
  **Pak Rudi:** (lama terdiam) Saya kena PHK, Pak. Sudah dua minggu.
  **Pak Rudi:** Tiap pagi saya tetap pakai kemeja dan pamit kerja ke istri. Terus saya diam di sini sampai sore. Saya malu, Pak.

**Pertanyaan:**

  **Pak Misran:** (Apa yang Pak Misran lakukan?)
**Pilihan jawaban:**

1. **"Dengarkan Pak Rudi"**
   - aksi: `lanjut`

  **Pak Misran:** Malu kenapa, Pak? Bapak nggak mencuri, nggak menipu. Perusahaannya yang tutup.
  **Pak Rudi:** Anak saya mau masuk SMP, Pak. Istri saya pikir semuanya baik-baik saja...
  **Pak Misran:** Istri itu teman hidup, Pak, bukan tamu. Beban seberat ini jangan dipikul sendirian.
  **Pak Misran:** Saya coba tanya Kang Asep. Dia kenal banyak orang, siapa tahu ada lowongan.
  *Tanyakan lowongan kerja kepada Kang Asep di depan SD.*

2. **"Pura-pura tidak tahu"**
   - aksi: `tolak`

  **Pak Misran:** Oh, begitu. Ya sudah, saya duluan, Pak Rudi.
  *Pak Rudi menunduk. Ia kembali menatap pintu masjid sendirian.*

3. **"Nanti saja"**
   - aksi: `tunda`

  **Pak Misran:** Pak Rudi, nanti saya ke sini lagi, ya.
  **Pak Rudi:** Iya, Pak... saya di sini sampai sore.

#### Tahap 2 — SD · Kang Asep (pukul 07.0–21.0)

  **Pak Misran:** Kang Asep, kenal yang lagi cari pegawai? Untuk teman saya. Orangnya jujur dan rajin.
  **Kang Asep:** Hmm... Oh! Koperasi sekolah SD ini lagi cari bendahara, Pak. Kemarin kepala sekolahnya nanya ke saya.
  **Kang Asep:** Memang nggak sebesar kantor di kota. Tapi dekat, nggak usah macet-macetan tiap hari.
  **Pak Misran:** Wah, cocok sekali. Teman saya biasa pegang pembukuan.
  **Kang Asep:** Suruh datang ke sini besok pagi, Pak. Bilang saja dari Kang Asep.
  *Kabari Pak Rudi. Ia sedang di depan warung.*

*(aksi otomatis tahap ini: `lanjut`)*

#### Tahap 3 — Warung · Pak Rudi (pukul 07.0–21.0)

  **Pak Rudi:** Pak Misran! Saya... akhirnya cerita ke istri.
  **Pak Rudi:** Saya kira dia bakal marah. Ternyata dia cuma memeluk saya dan bilang, "Kenapa nggak dari dulu, Pak?"
  **Pak Misran:** Alhamdulillah. Dan ada kabar baik: koperasi SD sedang cari bendahara. Kang Asep yang kasih tahu.
  **Pak Rudi:** Ya Allah... Kecil pun nggak apa-apa, Pak. Yang penting saya bisa pulang sore tanpa bohong lagi.
  **Pak Rudi:** Saya sempat merasa jadi orang paling gagal di kampung ini.
  **Pak Misran:** Di kampung ini nggak ada yang jatuh sendirian, Pak Rudi.

*(aksi otomatis tahap ini: `tolong`)*

**HASIL — BANTU (tolong):**

- reputasi: 2

  **Pop-up "Pak Rudi Bangkit"**

  Pak Rudi sekarang menjadi bendahara koperasi SD dan bisa pulang sore tanpa menyimpan rahasia lagi.

  - Pak Rudi dan Kang Asep makin akrab dengan Pak Misran
  - +2 ulasan bintang 5 dari warga

**HASIL — TOLAK:**


  **Pop-up "Cerita Selesai"**

  Beberapa minggu kemudian terdengar kabar Pak Rudi sekeluarga pindah ke rumah mertuanya di kota.

  - Tidak ada perubahan

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak Misran, buku kas koperasi sekarang rapi. Kepala sekolah senang sekali. / **Pak Misran:** Alhamdulillah, Pak Rudi memang ahlinya.
- **Warga:** Sekarang saya bisa jemput anak pulang sekolah, Pak. Dulu mana sempat. / **Pak Misran:** Itu rezeki yang nggak kelihatan, Pak.

---

### 3.32 Wali Wisuda Kang Fadil (`wisuda_fadil`)

- **Syarat muncul:** Level ≥ 8 · Hari ≥ 1 · **JANJI** (hanya hari libur warung)
#### Tahap 1 — Pesantren · Kang Fadil (pukul 08.0–17.0)

  **Kang Fadil:** Pak Misran! Alhamdulillah, saya sudah khatam hafalan 30 juz.
  **Pak Misran:** MasyaAllah, Kang Fadil! Bapak ikut bangga.
  **Kang Fadil:** Sebentar lagi wisuda tahfiz. Setiap santri didampingi orang tuanya naik panggung...
  **Kang Fadil:** Bapak saya sakit di Garut, Emak harus menjaga beliau. Mereka nggak bisa datang.
  **Kang Fadil:** Saya malu minta, Pak... tapi maukah Bapak jadi wali saya di panggung nanti?

**Pertanyaan:**

  **Pak Misran:** (Jadi wali wisuda Kang Fadil?)
**Pilihan jawaban:**

1. **"Dengan senang hati, Kang"**
   - aksi: `lanjut`

  **Pak Misran:** Dengan senang hati, Kang. Anggap saja Bapak ini bapakmu di sini.
  **Kang Fadil:** Hatur nuhun, Pak... (matanya berkaca-kaca)
  *Pak Misran tidak punya baju koko yang pantas. Coba pinjam ke Haji Doni di masjid.*

2. **"Maaf, saya tidak bisa"**
   - aksi: `tolak`

  **Kang Fadil:** Iya, Pak, saya mengerti. Nanti saya naik panggung sendiri saja.

3. **"Nanti saya kabari"**
   - aksi: `tunda`

  **Kang Fadil:** Iya, Pak. Wisudanya masih beberapa hari lagi.

#### Tahap 2 — Masjid · Haji Doni (pukul 07.0–21.0)

  **Pak Misran:** Haji Doni, saya mau jadi wali wisuda Kang Fadil. Boleh pinjam baju koko yang pantas?
  **Haji Doni:** Wali wisuda tahfiz? MasyaAllah, itu kehormatan besar, Pak Misran.
  **Haji Doni:** Ini koko putih yang saya pakai waktu walimah anak saya. Pakailah. Pecinya juga.
  **Haji Doni:** Dulu waktu saya mondok, bapak saya juga tidak bisa datang. Yang menemani saya naik panggung tukang becak depan pondok. Sampai sekarang saya mendoakan beliau.
  **Pak Misran:** Insyaallah saya jaga baik-baik, Haji Doni.
  *Datang ke pesantren untuk menemani Kang Fadil di hari wisuda.*

*(aksi otomatis tahap ini: `lanjut`)*

#### Tahap 3 — Pesantren · Kang Fadil (pukul 07.0–21.0)

  *Wisuda baru saja selesai di aula pesantren. Pak Misran tadi mendampingi Kang Fadil naik panggung. Surat Ar-Rahman dilantunkannya tanpa sekali pun tersendat.*
  **Kang Hasan:** Fadil, tadi merdu sekali! Pak Misran sampai menahan air mata.
  **Haji Doni:** Hari ini Bapak jadi wali yang pantas, Pak Misran. Masyaallah.
  **Kang Fadil:** Koko putih Bapak tadi mirip punya Bapak saya, kalau beliau mau berangkat ke masjid.
  **Kang Fadil:** Emak tadi ikut lihat lewat video call, Pak. Beliau menangis, sambil mengarahkan HP ke Bapak yang terbaring.
  **Pak Misran:** (Pak Misran teringat Agus. Suatu hari nanti, ia juga ingin berdiri di samping anaknya seperti ini.)
  **Kang Fadil:** Hatur nuhun, Pak. Hari ini saya nggak merasa sendirian.

*(aksi otomatis tahap ini: `tolong`)*

**HASIL — BANTU (tolong):**

- reputasi: 3

  **Pop-up "Wali Wisuda"**

  Kang Fadil diwisuda sebagai hafiz 30 juz dengan Pak Misran di sampingnya. Seluruh pesantren mengenal kebaikan pemilik warung itu.

  - Kang Fadil, Kang Hasan, dan Haji Doni makin akrab dengan Pak Misran
  - +3 ulasan bintang 5 dari warga

**HASIL — TOLAK:**


  **Pop-up "Cerita Selesai"**

  Kang Fadil naik panggung wisuda seorang diri.

  - Tidak ada perubahan

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak, Emak titip salam. Katanya kalau ke Cianjur, mau mampir ke warung Bapak. / **Pak Misran:** Wah, Bapak tunggu, Kang.

---

### 3.33 Rahasia Kang Dadan (`dadan_membaca`)

- **Syarat muncul:** Level ≥ 9 · Hari ≥ 1
#### Tahap 1 — Warung · Kang Dadan (pukul 16.0–21.0)

  *Kang Dadan berdiri di depan warung, menatap layar HP lama sekali.*
  **Kang Dadan:** Pak Misran... boleh minta tolong bacakan ini? Mata saya... eh, HP saya buram.
  **Pak Misran:** (Layar HP-nya jelas sekali.) Ini pesan dari kantor ekspedisi, Kang. Mulai bulan depan semua alamat hanya lewat aplikasi.
  **Kang Dadan:** (menghela napas) Saya nggak bisa baca, Pak. Dari dulu saya hafalkan rumah orang dari warna pagar sama nama warung.
  **Kang Dadan:** Kalau ketahuan, saya bisa diberhentikan. Anak saya masih bayi, Pak...

**Pertanyaan:**

  **Pak Misran:** (Bantu Kang Dadan belajar membaca?)
**Pilihan jawaban:**

1. **"Saya ajari tiap malam di warung"**
   - aksi: `lanjut`

  **Pak Misran:** Belajar membaca nggak ada kata terlambat, Kang. Tiap malam sesudah warung tutup, kita belajar di sini.
  **Kang Dadan:** Beneran, Pak? Saya kira Bapak bakal ketawa...
  **Pak Misran:** Kita butuh buku belajar membaca. Neng Shinta pasti masih punya buku lamanya.
  *Pinjam buku belajar membaca ke Neng Shinta di SD.*

2. **"Coba minta tolong teman kantor"**
   - aksi: `tolak`

  **Kang Dadan:** Iya, Pak... nanti saya coba.

3. **"Nanti saja"**
   - aksi: `tunda`

  **Kang Dadan:** Iya, Pak. Tolong jangan bilang siapa-siapa, ya.

#### Tahap 2 — SD · Neng Shinta (pukul 07.0–21.0)

  **Pak Misran:** Neng Shinta, masih punya buku belajar membaca waktu SD dulu?
  **Neng Shinta:** Masih, Pak! Buku "Ini Budi" sama buku latihan menulis huruf. Buat siapa, Pak?
  **Pak Misran:** Buat teman Bapak. Rahasia, ya, Neng.
  **Neng Shinta:** Siap, Pak! Saya selipkan juga kartu huruf buatan saya. Bilang ke temannya: semangat!
  *Temui Kang Dadan di depan warung.*

*(aksi otomatis tahap ini: `lanjut`)*

#### Tahap 3 — Warung · Kang Dadan (pukul 07.0–21.0)

  *Sejak itu Kang Dadan rajin belajar huruf demi huruf sesudah warung tutup. Hari ini ia ingin menunjukkan hasilnya.*
  **Kang Dadan:** Pak... coba dengar. "I-ni Bu-di. I-ni i-bu Bu-di."
  **Pak Misran:** Lancar, Kang! Sekarang coba yang ini.
  *Pak Misran menunjuk tulisan di kertas kado kecil yang dibawa Kang Dadan.*
  **Kang Dadan:** "Un-tuk... Mis-bah." Misbah... Itu nama anak saya, Pak.
  **Kang Dadan:** Saya baru pertama kali bisa membaca nama anak saya sendiri...
  **Pak Misran:** Nanti kalau Misbah sudah besar, Kang Dadan yang bacakan dongeng sebelum tidur, ya.
  **Kang Dadan:** (tertawa sambil mengusap mata) Insyaallah, Pak. Insyaallah.

*(aksi otomatis tahap ini: `tolong`)*

**HASIL — BANTU (tolong):**

- reputasi: 2

  **Pop-up "Kang Dadan Bisa Membaca"**

  Kang Dadan kini bisa membaca alamat di aplikasi sendiri. Rahasianya aman bersama Pak Misran dan Neng Shinta.

  - Kang Dadan dan Neng Shinta makin akrab dengan Pak Misran
  - +2 ulasan bintang 5 dari warga

**HASIL — TOLAK:**


  **Pop-up "Cerita Selesai"**

  Kang Dadan berhenti jadi kurir dan bekerja sebagai kuli angkut di pasar.

  - Tidak ada perubahan

**Sapaan warga setelah cerita selesai:**

*Cabang bantu:*

- **Warga:** Pak, tadi saya baca papan nama warung Bapak dari jauh. Sekarang semua tulisan kelihatan, hehe. / **Pak Misran:** Hebat, Kang! Nanti kita lanjut belajar menulis.
- **Warga:** Pak, teman rahasia Bapak sudah lancar membaca? Kartu hurufnya berguna, kan? / **Pak Misran:** Berguna sekali, Neng. Katanya terima kasih.

---

### 3.34 Kampung Kita (`kampung_kita`)

- **Syarat muncul:** Level ≥ 10 · Hari ≥ 1
#### Tahap 1 — Rumah Warga · Pak RT (pukul 08.0–20.0)

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
   - aksi: `lanjut`

  **Pak Misran:** Saya temui semuanya, Pak RT. Warung tutup sebentar pun nggak apa-apa.
  **Pak RT:** Bawa lembar tanda tangan ini. Semoga Allah memudahkan.
  *Temui setiap warga bertanda "!" di seluruh kampung (Rumah Warga, Warung, Masjid, Sawah, SD, Pesantren, dan Bu Ida di Pasar) dan minta tanda tangan mereka.*

2. **"Saya tidak mau ikut campur"**
   - aksi: `tolak`

  **Pak RT:** ...Begitu, ya, Pak. Baiklah, biar saya dan warga lain yang berkeliling.

3. **"Beri saya waktu berpikir"**
   - aksi: `tunda`

  **Pak RT:** Jangan terlalu lama, Pak. Batas waktunya tidak panjang.

#### Tahap 2 — ? · ? (pukul 07.0–21.0)

*(aksi otomatis tahap ini: `lanjut`)*

#### Tahap 3 — Rumah Warga · Pak RT (pukul 07.0–21.0)

  **Pak RT:** Lengkap, Pak? ...Semuanya?
  **Pak Misran:** Semuanya, Pak RT. Sampai Ucup ikut menggambar.
  **Pak RT:** (membalik lembar demi lembar) Ya Allah... Musyawarahnya di masjid. Bapak harus ikut bicara di sana.
  *Datang ke musyawarah di masjid.*

*(aksi otomatis tahap ini: `lanjut`)*

#### Tahap 4 — Masjid · Haji Doni (pukul 07.0–21.0)

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

*(aksi otomatis tahap ini: `tolong`)*

**HASIL — BANTU (tolong):**

- reputasi: 5
- pesan WA: Pak RT: "Bapak-Ibu, alhamdulillah! Kecamatan resmi memindahkan jalur tol ke utara. Terima kasih seluruh warga, terutama Pak Misran yang mengetuk pintu kita satu per satu."

  **Pop-up "Kampung Kita Tetap Berdiri"**

  Jalur tol dipindahkan. Seluruh warga tahu siapa yang mengetuk pintu mereka satu per satu. Warung Pak Misran kini benar-benar jadi jantung kampung.

  - Semua warga yang ditemui makin akrab dengan Pak Misran
  - +5 ulasan bintang 5 dari warga

**HASIL — TOLAK:**

- reputasi: -2

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

## 4. Daftar Barang

| ID | Nama | Modal | Jual | Untung | Stok awal | Peluang |
|---|---|---|---|---|---|---|
| mi_goreng | Mie goreng | Rp2500 | Rp3500 | Rp1000 | 15 | 10 |
| mi_rebus | Mie rebus | Rp2500 | Rp3500 | Rp1000 | 15 | 8 |
| minyak_goreng | Minyak goreng 1 L | Rp17000 | Rp19500 | Rp2500 | 5 | 6 |
| galon | Galon isi ulang | Rp6000 | Rp8000 | Rp2000 | 3 | 4 |
| lpg | LPG 3 kg | Rp18000 | Rp22000 | Rp4000 | 2 | 3 |
| beras | Beras 1 kg | Rp13000 | Rp15000 | Rp2000 | 5 | 4 |
| telur | Telur | Rp2000 | Rp2500 | Rp500 | 20 | 6 |
| ciki | Ciki | Rp1500 | Rp2500 | Rp1000 | 10 | 8 |
| permen | Permen | Rp200 | Rp500 | Rp300 | 30 | 6 |
| biskuit | Biskuit | Rp2000 | Rp3000 | Rp1000 | 15 | 6 |
| air_mineral | Air mineral 600 ml | Rp2500 | Rp4000 | Rp1500 | 12 | 7 |
| teh_botol | Teh manis botol | Rp3000 | Rp4500 | Rp1500 | 12 | 6 |
| kopi_susu | Kopi susu botol | Rp4500 | Rp6500 | Rp2000 | 10 | 4 |
| soda | Minuman soda kaleng | Rp5000 | Rp7000 | Rp2000 | 10 | 4 |
| minuman_energi | Minuman energi | Rp5000 | Rp7000 | Rp2000 | 8 | 4 |
| sachet | Minuman sachet | Rp1000 | Rp1500 | Rp500 | 20 | 6 |
| kerupuk | Kerupuk | Rp500 | Rp1000 | Rp500 | 25 | 7 |
| sayur | Sayuran (cabai, bawang, tomat) | Rp4000 | Rp5000 | Rp1000 | 6 | 5 |
| obat | Obat warung | Rp2500 | Rp3500 | Rp1000 | 8 | 3 |
| buku_tulis | Buku tulis | Rp3000 | Rp4500 | Rp1500 | 10 | 3 |
| rengginang | Rengginang Nenek Sumi | Rp3000 | Rp5000 | Rp2000 | 10 | 4 |
| makanan_kucing | Makanan kucing | Rp6000 | Rp8000 | Rp2000 | 6 | 3 |
| gula | Gula pasir 1/2 kg | Rp8500 | Rp10000 | Rp1500 | 8 | 5 |
| kopi_bubuk | Teh celup | Rp6500 | Rp8500 | Rp2000 | 6 | 3 |
| sabun | Sabun mandi | Rp3000 | Rp4500 | Rp1500 | 8 | 4 |
| deterjen | Deterjen bubuk | Rp8000 | Rp10000 | Rp2000 | 6 | 4 |
| susu_kotak | Susu kotak | Rp3500 | Rp5000 | Rp1500 | 10 | 4 |
| es_krim | Es krim | Rp3000 | Rp5000 | Rp2000 | 10 | 4 |
| kurma | Kurma 250 g | Rp12000 | Rp15000 | Rp3000 | 8 | 3 |
| sirup | Sirup botol | Rp13000 | Rp16000 | Rp3000 | 8 | 3 |
| roti | Roti | Rp3000 | Rp4000 | Rp1000 | 0 | 4 |
| jamu | Jamu kunyit asam | Rp3500 | Rp5000 | Rp1500 | 0 | 3 |
| danda | Top-up Saldo E-Wallet Rp10.000 | Rp10000 | Rp11000 | Rp1000 | - | 3 |
| data_2gb | Paket data 2 GB | Rp12000 | Rp14000 | Rp2000 | - | 3 |
| data_5gb | Paket data 5 GB | Rp25000 | Rp28000 | Rp3000 | - | 2 |
| data_10gb | Paket data 10 GB | Rp45000 | Rp49000 | Rp4000 | - | 1 |
| token_listrik | Token listrik Rp20.000 | Rp20000 | Rp22000 | Rp2000 | - | 2 |

---

## 5. Daftar Upgrade

Daftar upgrade warung. level = level tugas yang dibutuhkan, harga = harga beli (sekali beli, permanen). butuh = upgrade lain yang harus dimiliki dulu. efek: respon (+detik waktu melayani), sabar (+persen kesabaran semua pelanggan), sabar_antre (+persen kesabaran saat antre), maks_antre (+orang), ramai (+persen keramaian; semua upgrade menambah sedikit, makin tinggi level makin kecil, total maks batas.ramai 50%), malam (+persen keramaian 15.00-17.00, Lampu LED), banyak (+peluang pesan banyak barang), minuman (+persen minuman dibeli), buka_barang (barang yang terbuka), kurir (detik kurir datang), tip (+peluang tip), supplier (persen harga supplier, negatif = lebih murah), ulasan_baik (+persen peluang pelanggan puas menulis ulasan), genset/cctv (untuk kejadian acak). biaya_hari = biaya rutin per hari (listrik, bensin, sewa gudang) yang ditambahkan ke biaya harian. visual: model = file di assets/upgrade (dari Meshy), posisi = titik dasar objek di gambar latar (piksel), tinggi_m = tinggi objek (meter; 100 px latar = 1 meter), lebar = pengali panjang ke samping saja, angkat = naik berapa piksel, di_atas = diletakkan di atas upgrade lain {induk, x = geser sepanjang induk (meter, + ke kanan), z = geser ke depan (meter)}, hadap = putaran model (derajat; -45 = menghadap jalan/pembeli di kiri bawah, 45 = menghadap kanan bawah, sejajar garis latar), gerak = goyang/denyut/getar/kedip, ganti = upgrade yang visualnya digantikan, jejak = [panjang, lebar] alas benda di lantai (meter) = penghalang di mode jalan-jalan. Kulkas, gas LPG, dan galon sudah ada di lukisan latar (bukan upgrade).

| ID | Nama | Level | Harga | Biaya/hari |
|---|---|---|---|---|
| etalase | Etalase kaca | 1 | Rp425000 | — |
| kipas | Kipas angin | 2 | Rp415000 | Rp1000 |
| lampu | Lampu LED terang | 2 | Rp495000 | Rp1000 |
| spanduk | Spanduk baru | 3 | Rp665000 | — |
| bangku | Bangku tunggu | 3 | Rp750000 | — |
| radio | Radio | 5 | Rp995000 | Rp500 |
| wifi | WiFi gratis | 10 | Rp885000 | Rp3000 |
| kurir_cepat | Langganan kurir cepat | 4 | Rp830000 | — |
| qris | Pembayaran QRIS | 6 | Rp1165000 | Rp500 |
| genset | Genset | 8 | Rp1660000 | Rp1500 |
| cctv | CCTV | 7 | Rp1990000 | Rp1000 |
| tv_warung | TV warung | 9 | Rp2550000 | Rp2000 |

**Detail tiap upgrade:**

- **Etalase kaca** (level 1, Rp425000): Etalase kaca berisi jajanan di depan Pak Misran. Wajib dibeli di hari pertama (modal awal sudah termasuk). Waktu melayani +1 detik, 5% lebih sering memesan beberapa barang. Pembeli 6% lebih ramai.
- **Kipas angin** (level 2, Rp415000 + biaya harian Rp1000): Warung jadi sejuk. Semua pelanggan 25% lebih sabar, dan tidak ada lagi keluhan "gerah" di ulasan. Pembeli 6% lebih ramai. Listrik +Rp1.000/hari.
- **Lampu LED terang** (level 2, Rp495000 + biaya harian Rp1000): Warung terang benderang, menarik pembeli sore dan malam. Pembeli 5% lebih ramai sepanjang hari (mulai pukul 15.00 +20% lagi), dan tidak ada lagi keluhan "lampu redup" di ulasan. Listrik +Rp1.000/hari.
- **Spanduk baru** (level 3, Rp665000): Spanduk mencolok di bawah papan nama warung. Sepanjang hari pembeli 8% lebih ramai.
- **Bangku tunggu** (level 3, Rp750000): Bangku untuk pelanggan yang menunggu giliran. Antrean bisa lebih panjang (+1 orang) dan pelanggan yang mengantre 25% lebih sabar. Tidak ada lagi keluhan "ngantre sambil berdiri" di ulasan. Pembeli 5% lebih ramai.
- **Radio** (level 5, Rp995000 + biaya harian Rp500): Lagu dangdut menemani pelanggan. Pelanggan yang puas 50% lebih sering menulis ulasan bagus. Tidak ada lagi keluhan "warungnya sepi" di ulasan. Pembeli 4% lebih ramai. Listrik +Rp500/hari.
- **WiFi gratis** (level 10, Rp885000 + biaya harian Rp3000): Router WiFi untuk pembeli. Anak muda dan tukang ojek senang mampir sambil online: sepanjang hari pembeli 6% lebih ramai. Internet +Rp3.000/hari.
- **Langganan kurir cepat** (level 4, Rp830000): Supplier memakai kurir langganan: waktu antar kurir reguler dan cepat 30% lebih singkat. Pembeli 3% lebih ramai.
- **Pembayaran QRIS** (level 6, Rp1165000 + biaya harian Rp500): Sekitar 1 dari 3 pelanggan bayar pakai scan QR, uangnya masuk saldo digital (tarik ke laci lewat Warga Bank). Waktu melayani +2 detik, peluang tip +10%, tidak ada lagi keluhan "belum bisa QRIS" di ulasan. Pembeli 2% lebih ramai. Biaya layanan QRIS Rp500/hari.
- **Genset** (level 8, Rp1660000 + biaya harian Rp1500): Listrik cadangan. Saat mati listrik, warung tetap terang dan kulkas tetap dingin. Pembeli 2% lebih ramai. Bensin & perawatan Rp1.500/hari.
- **CCTV** (level 7, Rp1990000 + biaya harian Rp1000): Kamera pengawas. Kejadian buruk (pencurian, palak) jauh berkurang. Pembeli 1% lebih ramai. Listrik +Rp1.000/hari.
- **TV warung** (level 9, Rp2550000 + biaya harian Rp2000): TV tabung di atas meja kecil: pembeli betah menunggu sambil menonton. Kesabaran saat antre +30% dan antrean boleh 1 orang lebih panjang. Listrik +Rp2.000/hari.

Batas efek total: ramai maks +0.5, sabar maks +0.85.

---

---

*Dibuat dari data game v0.38 (versionCode 40), 34 quest warga, 10 bab cerita, 10 level, 37 barang, 12 upgrade.