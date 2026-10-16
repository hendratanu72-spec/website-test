import { Artwork, Program, CurriculumMilestone, StudioBranch } from '../types';

export const STUDIO_PHONE = '6281289001234';
export const STUDIO_DISPLAY_PHONE = '+62 812-8900-1234';

export const ARTWORKS_DATA: Artwork[] = [
  {
    id: 'art-1',
    title: 'Taman Mentari & Burung Tropis',
    artistName: 'Aira Azzahra',
    artistAge: 6,
    category: 'cat-air',
    medium: 'Gouache & Cat Air di atas Kertas Fabriano 300gsm',
    year: '2026',
    dimensions: '30 × 40 cm',
    description: 'Eksplorasi palet warna primer dan sekunder dengan sapuan basah (wet-on-wet), menggambarkan taman bunga imajiner di Bekasi saat pagi hari.',
    educatorNote: 'Aira menunjukkan kepekaan gradasi warna yang berani tanpa ragu mencampurkan warna kontras. Ia mulai memahami intensitas pigmen dan kontrol air pada kuas.',
    studentQuote: '“Aku suka waktu warna kuningnya ketemu warna biru terus jadi warna hijau daun yang hidup!”',
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    colorWash: 'from-amber-100 to-indigo-100'
  },
  {
    id: 'art-2',
    title: 'Kucing Biru di Bawah Pohon Bintang',
    artistName: 'Kenzo Wijaya',
    artistAge: 5,
    category: 'sensori',
    medium: 'Oil Pastel & Tempera Resist pada Karton Linen',
    year: '2026',
    dimensions: '28 × 38 cm',
    description: 'Teknik lilin dan pewarna cair (resist technique). Figur kucing biru dibuat dengan tekanan jari kuat, kemudian disapu dengan tinta malam kebiruan.',
    educatorNote: 'Kenzo awalnya ragu memegang kuas besar, namun melalui sesi sensori tekstur, motorik halusnya berkembang sangat pesat dengan rasa percaya diri penuh.',
    studentQuote: '“Kucingku bisa terbang ke langit malam kalau lagi sepi di rumah nenek.”',
    imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
    colorWash: 'from-blue-100 to-sky-100'
  },
  {
    id: 'art-3',
    title: 'Sahabat Rimba: Gajah & Burung Rangkong',
    artistName: 'Davin Arka Pratama',
    artistAge: 9,
    category: 'cat-air',
    medium: 'Cat Air Transparan & Pensil Faber-Castell 4B',
    year: '2026',
    dimensions: '35 × 50 cm',
    description: 'Studi proporsi hewan tropis Indonesia dengan bayangan bertingkat (multi-layered glazing) dan detail bulu menggunakan kuas liner halus no. 0.',
    educatorNote: 'Davin telah menguasai ketenangan saat menunggu lapisan pertama kering sebelum menumpuk detail bayangan (shadow glaze) yang tajam.',
    studentQuote: '“Susah bikin mata gajahnya kelihatan ramah, tapi kata Kak Mentor kuasnya harus dipegang lebih rileks.”',
    imageUrl: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=800&q=80',
    colorWash: 'from-emerald-100 to-amber-100'
  },
  {
    id: 'art-4',
    title: 'Penjaga Lentera Semesta',
    artistName: 'Nadia Salsabila',
    artistAge: 13,
    category: 'drawing',
    medium: 'Manga Pen Nib G, Copic Alcohol Marker & White Acrylic Pen',
    year: '2026',
    dimensions: '21 × 29.7 cm (A4)',
    description: 'Karakter orisinal dengan latar kota retro-futuristik. Penekanan pada garis dinamis, hatch-shading, dan pencahayaan dramatis dari lentera.',
    educatorNote: 'Nadia memiliki bakat alami dalam visual storytelling. Garis tintanya tegas, bersih, dan gestur anatominya sangat dinamis.',
    studentQuote: '“Di Atelier Joyeux aku diajarin konstruksi tengkorak dan sendi tangan yang bener, bukan cuma meniru gambar anime.”',
    imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80',
    colorWash: 'from-purple-100 to-pink-100'
  },
  {
    id: 'art-5',
    title: 'Keluarga Beruang Kutub Terracotta',
    artistName: 'Mikayla Tanujaya',
    artistAge: 7,
    category: 'clay',
    medium: 'Tanah Liat Stoneware Terbakar & Glazing Biru Mineral',
    year: '2026',
    dimensions: '18 × 14 × 12 cm',
    description: 'Karya 3 dimensi teknik pinch-pot dan coil. Menggabungkan tekstur bulu beruang dengan cap kayu alami dan pewarnaan glasir bebas timbal.',
    educatorNote: 'Karya ini melatih pemahaman spasial 360 derajat. Mikayla telaten menghaluskan sambungan leher dan telinga agar tidak retak saat di-kiln.',
    studentQuote: '“Lucu banget pas dipanggang di oven studio, warnanya berubah jadi biru es bening!”',
    imageUrl: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80',
    colorWash: 'from-stone-200 to-sky-100'
  },
  {
    id: 'art-6',
    title: 'Hamparan Sawah & Bukit Biru',
    artistName: 'Rayhan Al-Ghifari',
    artistAge: 11,
    category: 'cat-air',
    medium: 'Cat Akrilik Bertekstur di atas Kanvas Linen Belgia',
    year: '2026',
    dimensions: '40 × 50 cm',
    description: 'Penerapan pisau palet (palette knife) untuk menciptakan tebal-tipisnya lereng bukit dan perspektif atmosferik berundak.',
    educatorNote: 'Rayhan menunjukkan ketelitian luar biasa dalam menyusun kedalaman bidang depan (foreground) dan perbukitan jauh (background).',
    studentQuote: '“Pakai pisau palet rasanya kayak lagi ngoles selai mentega ke roti tapi warnanya banyak!”',
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
    colorWash: 'from-teal-100 to-emerald-100'
  }
];

export const PROGRAMS_DATA: Program[] = [
  {
    id: 'prog-explorers',
    name: 'Little Explorers: Sensori & Warna',
    ageRange: '4 – 6 Tahun',
    category: 'regular',
    variant: 'white',
    subtitle: 'Membangun cinta pertama anak pada seni rupa melalui kebebasan bermain tekstur',
    description: 'Fokus pada stimulasi motorik halus, eksplorasi warna primer tanpa takut kotor, cetak alami daun/buah, dan pembentukan clay sederhana.',
    syllabus: [
      'Pengenalan warna primer & trik sulap percampuran warna',
      'Tekstur sensori: finger painting, sponge dabbing, & marble roll',
      'Clay tanah liat ramah anak untuk melatih kekuatan genggaman jemari',
      'Melukis cerita imajinasi berdasarkan dongeng studio'
    ],
    schedule: 'Sabtu: 09.00 - 10.30 WIB | Minggu: 10.45 - 12.15 WIB',
    price: 'Rp 480.000 / bln (4 sesi)',
    ratio: '1 Guru : 4 Siswa (Intim & Perhatian Penuh)'
  },
  {
    id: 'prog-junior',
    name: 'Junior Atelier: Pondasi Seni Rupa',
    ageRange: '7 – 10 Tahun',
    category: 'regular',
    variant: 'white',
    subtitle: 'Mengasah pengamatan visual, teknik kuas gouache, dan komposisi ruang berimbang',
    description: 'Anak mulai diajak memahami garis bentuk nyata, proporsi alam, studi still-life ramah anak, dan harmoni palet warna komplementer.',
    syllabus: [
      'Teknik Gouache & Cat Air transparan di kertas 300gsm',
      'Studi proporsi anatomi hewan & flora tropis',
      'Konstruksi bayangan (highlight & core shadow) sederhana',
      'Proyek kanvas mandiri untuk dipamerkan di Annual Studio Expo'
    ],
    schedule: 'Sabtu: 13.00 - 14.30 WIB | Minggu: 09.00 - 10.30 WIB',
    price: 'Rp 560.000 / bln (4 sesi)',
    ratio: '1 Guru : 5 Siswa (Bimbingan Step-by-Step)'
  },
  {
    id: 'prog-intensive',
    name: 'Weekend Bootcamp: Ceramic & Mixed Media',
    ageRange: '8 – 16 Tahun',
    category: 'intensive',
    variant: 'dark',
    subtitle: 'Workshop intensif akhir pekan khusus karya kriya keramik & kanvas format besar',
    description: 'Sesi mendalam selama 2 hari untuk anak & remaja yang ingin menyelesaikan karya keramik berglasir asli dan kanvas bertekstur pisau palet.',
    syllabus: [
      'Pinch-pot, slab building, & sculpting tanah liat stoneware',
      'Glazing teknik celup & kuas dengan pigmen mineral aman',
      'Proses firing kiln 1200°C di fasilitas studio Bekasi',
      'Sertifikat pencapaian & hasil karya keramik siap bawa pulang'
    ],
    schedule: 'Sabtu & Minggu: 14.00 - 16.30 WIB (Edisi Akhir Pekan)',
    price: 'Rp 650.000 / paket lengkap',
    spotsLeft: 4,
    highlightBadge: 'KUOTA TERBATAS',
    ratio: '1 Guru : 4 Siswa (Peralatan Profesional)'
  },
  {
    id: 'prog-teen-manga',
    name: 'Young Artists: Manga, Illustration & Portfolio',
    ageRange: '11 – 16 Tahun',
    category: 'regular',
    variant: 'white',
    subtitle: 'Pengembangan gaya ilustrasi personal, karakter manga, dan persiapan portofolio',
    description: 'Didesain untuk remaja yang gemar komik, seni konsep game, atau persiapan masuk sekolah seni rupa / DKV.',
    syllabus: [
      'Anatomi dinamis, gesture pose, ekspresi wajah, & sendi',
      'Inking tradisional menggunakan Pena G-Nib & Tinta Kaimei',
      'Gradasi alkohol marker (Copic / Touch) & pencahayaan dramatis',
      'Penyusunan portofolio karya digital/fisik terarah'
    ],
    schedule: 'Jumat: 16.00 - 17.30 WIB | Sabtu: 15.00 - 16.30 WIB',
    price: 'Rp 620.000 / bln (4 sesi)',
    ratio: '1 Guru : 5 Siswa (Diskusi Kritis Konstruktif)'
  },
  {
    id: 'prog-trial',
    name: 'Sesi Kelas Percobaan (Trial Session)',
    ageRange: 'Semua Usia (4 – 16 Tahun)',
    category: 'trial',
    variant: 'cream',
    subtitle: 'Kenalkan anak pada suasana studio tanpa komitmen bulanan terlebih dahulu',
    description: 'Sesi tatap muka 75 menit bersama kepala pengajar untuk mengamati kecenderungan minat visual anak dan cara belajarnya yang paling optimal.',
    syllabus: [
      'Konsultasi minat & bakat seni anak bersama orang tua',
      '1 sesi karya lengkap bawa pulang (kertas Faber-Castell / mini easel)',
      'Semua peralatan lukis & cat disediakan langsung oleh studio',
      'Evaluasi portofolio awal & rekomendasi jenjang kelas'
    ],
    schedule: 'Setiap Sabtu & Minggu (Pilihan Jam Sesuai Ketersediaan)',
    price: 'Rp 95.000 / anak (Free jika lanjut reguler)',
    highlightBadge: 'REKOMENDASI PERTAMA',
    ratio: '1 Guru : 3 Siswa'
  }
];

export const CURRICULUM_MILESTONES: CurriculumMilestone[] = [
  {
    step: '01',
    title: 'Keberanian Berekspresi & Sensori',
    age: 'Usia 4–6 Tahun',
    focus: 'Eksplorasi sensorik, motorik halus, dan keyakinan diri menuangkan goresan pertama tanpa takut salah.',
    description: 'Anak diajak merasakan sentuhan pigmen, mengamati transformasi warna primer menjadi sekunder, dan mengekspresikan emosi lewat sapuan kuas berukuran besar.',
    skills: ['Genggaman jemari stabil', 'Kemandirian memilih warna', 'Ketertarikan pada bentuk alam']
  },
  {
    step: '02',
    title: 'Pengamatan & Struktur Bentuk',
    age: 'Usia 7–9 Tahun',
    focus: 'Mulai mengenali objek nyata secara visual, proporsi berimbang, dan kedalaman bidang sederhana.',
    description: 'Transisi dari gambar simbolik ke gambar observasional. Anak dilatih mengamati garis lengkung kontur, siluet hewan, dan teknik sapuan gouache yang rapi.',
    skills: ['Kontrol takaran air cat', 'Pencampuran warna sekunder & tersier', 'Komposisi bidang kanvas']
  },
  {
    step: '03',
    title: 'Pencahayaan & Visual Storytelling',
    age: 'Usia 10–12 Tahun',
    focus: 'Menerapkan logika bayangan (shadow & highlight), variasi tekstur bahan, dan narasi cerita dalam karya.',
    description: 'Siswa memadukan beragam media (mixed-media), teknik dry-brush, wet-on-wet, serta penataan fokal utama agar karya mampu bercerita kepada yang memandang.',
    skills: ['Gradasi 5 skala nilai nada', 'Teknik perspektif 1 titik lenyap', 'Pemberian judul & makna karya']
  },
  {
    step: '04',
    title: 'Penguasaan Media & Karakter Artistik',
    age: 'Usia 13–16 Tahun',
    focus: 'Pendewasaan teknik seni murni, ilustrasi komik profesional, atau kurasi portofolio mandiri.',
    description: 'Siswa dibimbing mengembangkan suara visual unik (signature style), pemahaman sejarah seni rupa, serta teknik studio seperti oil painting atau manga inking tingkat lanjut.',
    skills: ['Anatomi proporsional terapan', 'Penguasaan kanvas minyak/akrilik', 'Kurasi portofolio pameran']
  }
];

export const STUDIO_BRANCHES: StudioBranch[] = [
  {
    id: 'branch-galaxy',
    name: 'Atelier Joyeux — Grand Galaxy City',
    district: 'Bekasi Selatan',
    address: 'Ruko Grand Galaxy Commercial Blok RGB No. 12, Jakasetia, Bekasi Selatan, Kota Bekasi 17147',
    googleMapsQuery: 'Grand+Galaxy+City+Bekasi',
    phone: STUDIO_DISPLAY_PHONE,
    hours: 'Selasa – Minggu: 09.00 – 18.00 WIB (Senin Tutup)',
    facilities: [
      'Studio ber-AC dengan pencahayaan alami jendela besar',
      'Wastafel cuci tangan & kuas khusus anak (ketinggian ergonomis)',
      'Ruang tunggu orang tua nyaman dengan Wi-Fi & teh/kopi gratis',
      'Parkir mobil & motor luas dan aman'
    ]
  },
  {
    id: 'branch-summarecon',
    name: 'Atelier Joyeux — Summarecon Bekasi',
    district: 'Bekasi Utara',
    address: 'Rukan Sinpasa Commercial Blok B-18, Jl. Bulevar Barat, Marga Mulya, Bekasi Utara 17142',
    googleMapsQuery: 'Sinpasa+Commercial+Summarecon+Bekasi',
    phone: STUDIO_DISPLAY_PHONE,
    hours: 'Rabu – Minggu: 09.30 – 18.30 WIB (Senin & Selasa Tutup)',
    facilities: [
      'Fasilitas Ceramic Kiln Firing berstandar keselamatan',
      'Easel kayu beechwood Eropa khusus postur anak',
      'Area pameran galeri mini untuk apresiasi karya siswa mingguan',
      'Akses dekat dari mall Summarecon Bekasi & halte bus'
    ]
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 'testi-1',
    parentName: 'Ibu Ratna Paramitha',
    childDetail: 'Mama dari Aira (6 tahun) · Cabang Galaxy',
    text: 'Aira dulunya pemalu dan cepat frustrasi kalau gambarnya tidak mirip contoh di sekolah. Di Atelier Joyeux, mentornya tidak pernah memaksa anak menjiplak. Sekarang Aira sangat percaya diri dan selalu antusias menanti hari Sabtu untuk melukis.',
    badge: '1 Tahun Bergabung'
  },
  {
    id: 'testi-2',
    parentName: 'Bapak Hendra Gunawan',
    childDetail: 'Papa dari Davin (9 tahun) · Cabang Summarecon',
    text: 'Kurikulumnya sangat terstruktur tapi tetap menyenangkan. Davin belajar mencampur warna cat air dengan sabar. Tempatnya sangat bersih, terang, dan peralatannya profesional. Rekomendasi studio seni terbaik di Bekasi!',
    badge: 'Program Junior Atelier'
  },
  {
    id: 'testi-3',
    parentName: 'Ibu Sheila Kusuma',
    childDetail: 'Mama dari Nadia (13 tahun) · Cabang Galaxy',
    text: 'Anak remaja sekarang gampang bosan kalau diajari gaya lama. Kelas Manga & Ilustrasi di Atelier Joyeux beneran mendalam—diajarin anatomi dan pewarnaan marker yang rapi. Portofolio gambarnya meningkat drastis.',
    badge: 'Young Artists Class'
  }
];

export const STUDIO_CREDENTIALS = [
  {
    kicker: 'Rasio Easel Terjaga',
    value: '1 : 4',
    unit: 'Guru : Siswa',
    detail: 'Perhatian penuh pada tiap goresan kuas & perkembangan anak'
  },
  {
    kicker: 'Bahan Berkualitas',
    value: '100%',
    unit: 'Non-Toxic & Safe',
    detail: 'Cat air gouache & tanah liat bersertifikasi aman untuk anak'
  },
  {
    kicker: 'Kurikulum Seni Rupa',
    value: '4 Tahap',
    unit: 'Progresif',
    detail: 'Disusun oleh praktisi seni lulusan ITB & ISI Yogyakarta'
  },
  {
    kicker: 'Lokasi Strategis',
    value: '2 Cabang',
    unit: 'Di Kota Bekasi',
    detail: 'Grand Galaxy City & Sinpasa Commercial Summarecon'
  }
];

export function buildWhatsAppLink({
  parentName,
  childName,
  childAge,
  programName,
  branch,
  preferredDay,
  notes
}: {
  parentName: string;
  childName: string;
  childAge: string;
  programName: string;
  branch: string;
  preferredDay: string;
  notes?: string;
}): string {
  const message = `Halo Atelier Joyeux! 🎨

Saya ingin mendaftarkan anak saya untuk kelas seni:
• Nama Orang Tua: ${parentName.trim() || '-'}
• Nama Anak: ${childName.trim() || '-'}
• Usia Anak: ${childAge ? `${childAge} tahun` : '-'}
• Pilihan Program/Kelas: ${programName || 'Sesi Trial'}
• Pilihan Cabang: ${branch || 'Grand Galaxy City'}
• Pilihan Hari/Jadwal: ${preferredDay || 'Akhir Pekan (Sabtu/Minggu)'}${notes ? `\n• Catatan Tambahan: ${notes}` : ''}

Mohon informasi ketersediaan slot dan jadwal terdekat ya Kak. Terima kasih banyak!`;

  return `https://wa.me/${STUDIO_PHONE}?text=${encodeURIComponent(message)}`;
}
