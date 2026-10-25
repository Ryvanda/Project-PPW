# Ryco Spices — B2B Sample Tracking & Monitoring System
> **Tugas Praktikum Pemrograman Web: Bab 6 React Dasar (React Basics)**  
> *Fondasi Frontend Semester: Minggu 6 (React Dasar) &rarr; Minggu 11 (Koneksi Express/Node API &amp; Database) &rarr; Minggu 14 (Aplikasi Terintegrasi Penuh)*

---

## 1. Domain Bisnis & Arsitektur Sistem

**Ryco Spices** adalah perusahaan eksportir rempah grosir internasional asal Indonesia yang memasok komoditas unggulan (Biji Pala Banda, Fuli/Mace, Cengkeh Zanzibar, dan Kayu Manis Cassia Vera) dari Maluku dan Sulawesi ke pasar global.

Aplikasi internal React ini (**`ryco-sample-portal`**) adalah sistem operasional *International Trade Desk* yang mengelola pengiriman paket sampel fisik uji laboratorium dan uji sensorik sebelum kontrak kontainer FCL (*Full Container Load*) ditandatangani.

Setiap paket sampel yang dikirim melalui kurir kargo udara internasional (DHL Express / FedEx Air-Freight) membutuhkan koordinat pengiriman lengkap beserta sertifikasi mutu spesifik.

---

## 2. Struktur Entitas Data Diperbarui (`SampleRequest`)

| Atribut | Tipe Data | Deskripsi &amp; Contoh Nilai |
|---|---|---|
| `id` | `string` | Kode unik pengiriman sampel (contoh: `"SMPL-101"`, `"SMPL-7334"`) |
| `buyerName` | `string` | Nama PIC calon buyer (contoh: `"Hans Schneider"`, `"Kenji Tanaka"`) |
| `companyName` | `string` | Nama perusahaan importir (contoh: `"Bavaria Spices GmbH"`, `"Nippon Food Trading"`) |
| `country` | `string` | Negara tujuan ekspor (Jerman, Jepang, Belanda, AS, dsb.) |
| `shippingAddress` | `string` | Alamat lengkap kurir pengiriman (jalan, gedung/gudang, kota, kode pos) |
| `commodity` | `string` | Komoditas utama rempah (`"Indonesian Nutmeg (Biji Pala)"`, `"Mace (Fuli)"`, `"Zanzibar Cloves"`, `"Cassia Vera Cinnamon"`) |
| `grade` | `string` | Grade mutu ekspor dependen (Grade A ABCD, Grade B, FAQ, Lal Pari, Kaastock, dsb.) |
| `sampleWeight` | `string` | Berat paket sampel (`"250 gram"`, `"500 gram"`, `"1000 gram (1 kg)"`) |
| `requestDate` | `string` | Tanggal pencatatan permohonan dalam format ISO (`"YYYY-MM-DD"`) |
| `status` | `string` | Tahapan status operasional (`"Pending Review"`, `"Shipped / Dispatched"`, `"Delivered"`) |

---

## 3. Arsitektur Tampilan Terpisah (*Decoupled Tabs View*)

Tata letak aplikasi tidak lagi dipadatkan dalam 2 kolom sempit, melainkan didecouple menjadi 2 tab navigasi tingkat atas:

### 1. Tab 1: [Monitoring & Pelacakan Sampel] (Default Active)
- **Tampilan Penuh (*Full-Width Responsive Grid*)**: Dasbor pemantauan berukuran lapang dengan kartu responsif `grid-template-columns: repeat(auto-fill, minmax(420px, 1fr))`.
- **Kartu Metrik Dinamis (`StatsSummary`)**: Total Permintaan, Menunggu Dispatched, Sampel Terkirim, dan Total Volume Kurir dalam kilogram (`kg`).
- **Bilah Pencarian & Multi-Filter (`SampleList`)**: Mencari berdasarkan nama perusahaan, PIC, alamat, kota, dan filter spesifik komoditas & status.
- **Rincian Kartu Sampel (`SampleCard`)**:
  - Badge identitas ID & negara tujuan dengan ikon bola dunia.
  - Chip spesifikasi komoditas (daun hijau), grade mutu (emas), dan ukuran sampel.
  - **Kotak Alamat Pengiriman Kurir**: Penyorotan alamat tujuan fisik dengan latar belakang `#F9F6F0` dan ikon pin lokasi (`<i className="bi bi-geo-alt-fill"></i>`).
  - Tombol aksi pembaruan status pengiriman (*Pending* &rarr; *Shipped* &rarr; *Delivered*) dan tombol hapus data.
- **Render Bersyarat (`EmptyState`)**: Menampilkan teks wajib *"Belum ada data permintaan sampel rempah."* serta tombol navigasi cepat *"Tambah Permintaan Baru"*.

### 2. Tab 2: [Catat Permintaan Sampel Baru]
- **Tampilan Formulir Mandiri Terpusat (`SampleForm`)**: Tampilan fokus untuk entri data pengiriman kurir baru.
- **Dropdown Bertingkat Dependen (*Two-Tier Dependent Selection*)**:
  - Memilih **Komoditas Rempah** secara otomatis memperbarui dan mereset pilihan **Grade Mutu Ekspor** yang relevan:
    - *Indonesian Nutmeg* &rarr; Grade A (ABCD Whole), Grade B (Sound Shrivelled), FAQ
    - *Mace (Fuli)* &rarr; Grade A (Whole Red Blades), Grade B (Broken)
    - *Zanzibar Cloves* &rarr; Grade 1 (Hand-Selected CG1), Lal Pari (Standard Export)
    - *Cassia Vera Cinnamon* &rarr; Grade A (Kaastock 8-10cm), Grade B (Standard Rolls), Broken / FAQ
- **Alamat Lengkap Kurir**: Textarea khusus untuk pencatatan nama jalan, gedung, kode pos, dan kota penerima AWB.
- **Daftar Negara Ekspor Global**: 20+ negara tujuan ekspor internasional utama.
- **Pengalihan Otomatis**: Setelah submit berhasil, sistem menampilkan toast konfirmasi dan otomatis mengalihkan tampilan kembali ke tab Monitoring.

---

## 4. Struktur Berkas & Komponen Modular

```
ryco-sample-portal/
├── src/
│   ├── components/
│   │   ├── EmptyState.jsx          # Helper render bersyarat antrean kosong
│   │   ├── Header.jsx              # Header identitas Ryco Spices & live badge
│   │   ├── SampleCard.jsx          # Kartu sampel dengan kotak alamat kurir & chips
│   │   ├── SampleDetailModal.jsx   # Modal popup dialog rincian lengkap dossier sampel
│   │   ├── SampleForm.jsx          # Controlled component dengan dependent dropdown & address
│   │   ├── SampleList.jsx          # Grid responsif penuh dengan search & multi-filter
│   │   └── StatsSummary.jsx        # Metrik agregat reaktif & total kg
│   ├── constants/
│   │   └── spices.js           # Taksonomi komoditas, grade dependen, dan daftar negara
│   ├── App.jsx                 # State pusat, tabs router, seed data, dan handlers
│   ├── index.css               # Design system B2B exporter (Forest, Earth, Gold, Cream)
│   └── main.jsx                # Entry point & Bootstrap Icons
├── screenshots/
│   ├── 01_localhost_5173_dev_server.png
│   ├── 02_sample_portal_overview.png
│   ├── 03_sample_form_interaction.png
│   └── 04_empty_state_conditional_rendering.png
└── README.md
```

---

## 5. Cara Menjalankan & Menguji Aplikasi

```bash
# 1. Pindah ke direktori portal
cd ryco-sample-portal

# 2. Pastikan paket dependensi terpasang
npm install

# 3. Jalankan Vite Development Server
npm run dev -- --port 5173
```

Akses peramban pada URL: **`http://localhost:5173`**

---

## 6. Riwayat Git Commit

```bash
$ git log --oneline
XXXXXXX feat(portal): decouple monitoring and form views into tabs, add courier shipping address, and dependent grade hierarchy
602a823 docs: add assignment documentation and verification screenshots
a6b962b feat(components): implement sample tracker modular components, controlled form, and conditional rendering
d9c265b feat(setup): initialize Vite React scaffold for Ryco Spices sample portal
```
