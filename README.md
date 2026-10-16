# Atelier Joyeux — Children's Art Studio Website

Website resmi dan katalog interaktif untuk **Atelier Joyeux**, studio seni rupa dan kriya anak di Bekasi. Dibangun menggunakan React 19, Vite, Tailwind CSS v4, dan Plus Jakarta Sans.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fatelier-joyeux)

---

## Fitur Utama

- **Galeri Pameran Siswa (Curated Exhibition)**: Filter kategori karya (Cat Air, Gouache, Clay/Keramik, Manga/Ilustrasi, Sensori 4–6 Th).
- **Lightbox Interaktif**: Menampilkan resolusi tinggi, catatan pedagogi mentor, kutipan orisinil anak, serta ukuran fisik karya.
- **Katalog Program & Biaya**: Kartu reguler, kartu intensif akhir pekan (Dark Card), dan kelas percobaan/trial (Cream Card).
- **Jalur Kurikulum 4 Tahap**: Visualisasi roadmap perkembangan artistik anak dengan milestone bernomor.
- **WhatsApp Concierge Otomatis**: Generator pesan WhatsApp instan dengan format rapi (Nama orang tua, nama anak, usia, cabang Bekasi, jadwal).
- **Lokasi & Fasilitas Studio**: Informasi cabang Grand Galaxy City dan Sinpasa Commercial Summarecon Bekasi.

---

## Panduan Deploy ke Vercel

Repository ini sudah dilengkapi dengan file `vercel.json` yang secara otomatis mengonfigurasi routing SPA (Single Page Application) dan caching aset statis.

### Cara 1: Deploy Otomatis via Vercel Dashboard (Rekomendasi)

1. **Push kode ke GitHub/GitLab/Bitbucket**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit Atelier Joyeux"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git push -u origin main
   ```
2. Buka [Vercel Dashboard](https://vercel.com/dashboard).
3. Klik tombol **"Add New..."** → **"Project"**.
4. Pilih repository GitHub Anda lalu klik **"Import"**.
5. Vercel akan otomatis mendeteksi:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Klik **"Deploy"**. Web Anda akan langsung aktif dalam hitungan detik dengan domain gratis `*.vercel.app` dan HTTPS otomatis!

---

### Cara 2: Deploy Cepat via Vercel CLI

Jika Anda menggunakan terminal lokal:

```bash
# 1. Install Vercel CLI (jika belum)
npm install -g vercel

# 2. Login ke akun Vercel Anda
vercel login

# 3. Jalankan perintah deploy
vercel
```

Ikuti petunjuk di terminal (pilih default untuk semua pertanyaan). Untuk deploy ke production:
```bash
vercel --prod
```

---

## Konfigurasi File `vercel.json`

File `vercel.json` yang disertakan di root repository:

```json
{
  "framework": "vite",
  "installCommand": "npm install --legacy-peer-deps",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

- **`rewrites`**: Memastikan semua rute URL diarahkan ke `index.html` agar tidak terjadi error 404 saat pengguna me-refresh halaman.
- **`headers`**: Memberikan cache hingga 1 tahun untuk file bundle JavaScript dan CSS di folder `/assets/` demi performa maksimal.

---

## Perintah Pengembangan Lokal

```bash
# Install dependensi
npm install

# Jalankan server pengembangan lokal (Port 3000)
npm run dev

# Lakukan pengecekan tipe TypeScript (Lint)
npm run lint

# Buat build produksi ke folder dist/
npm run build

# Pratinjau hasil build lokal
npm run preview
```

---

## Lisensi & Hak Cipta

© 2026 Atelier Joyeux. Hak Cipta Dilindungi.
