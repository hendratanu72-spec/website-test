# Atelier Joyeux — Children's Art Studio Web Application

Atelier Joyeux is an elevated web platform for an authentic children's art atelier in Bekasi, blending contemporary geometric clarity with tactile studio warmth. It enables parents to explore progressive creative curriculums, admire curated student artwork exhibitions in a high-fidelity gallery, and seamlessly book trial sessions and workshops via an intelligent, pre-filled WhatsApp concierge flow.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following parameters were confirmed during interactive clarification and directly anchor this implementation:

- **Confirmed Language**: Indonesian (Bahasa Indonesia) for all interface copy, curriculum details, studio philosophy, and parent booking communication.
- **Confirmed Primary Modules**: Student Artwork Exhibition Gallery (with category filters, artwork details, medium notes, and artist age markers) and Interactive Workshop & Class Registration.
- **Confirmed Booking Flow**: WhatsApp Direct Booking with intelligent, pre-filled class and trial session details, including student name, age bracket, chosen date/slot, and studio branch in Bekasi.
- **Design System Alignment**: Full adherence to the provided Atelier Joyeux specification—Plus Jakarta Sans typography, `#533afd` vibrant ultramarine primary, `#1c1e54` gallery midnight secondary, `#f5e9d4` warm raw-canvas cream, tactile pill actions, and subtle atmospheric wash backdrops.

---

## 1. Overview & Core Concept

- **What It Does**: Presents a refined digital home for Atelier Joyeux in Bekasi. Parents can browse structured art developmental stages (from sensory exploration for 4-year-olds to classical foundational drawing and watercolor for teens), explore an authentic student exhibition gallery with modal artwork views, and book trial classes or weekend intensive bootcamps with a single click that formats a complete WhatsApp booking message.
- **Target Audience / Persona**: Discerning parents in Bekasi and Greater Jakarta seeking high-caliber creative education that honors children's artistic voice rather than rigid cookie-cutter crafts; aspiring young artists eager to see real student work; and art educators.
- **Key Value**: Delivers gallery-grade dignity to children's creative achievements while providing a frictionless, zero-barrier trial booking pathway tailored to Indonesian parent communication habits (WhatsApp).

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Discovery & Exploration**:
   - Parents land on an atmospheric split-screen hero: a bold artistic value proposition on the left with an immediate trial booking CTA, paired with a featured student artwork showcase frame on the right.
   - A full-width studio credentials strip highlights key studio facts: *Easel Ratio 1:4*, *Bekasi Studio (Galaxy / Harapan Indah)*, *Kurikulum Bertahap*, and *Bahan Seni Non-Toxic*.

2. **Curated Student Artwork Gallery (Pameran Karya)**:
   - Interactive category filter bar (`Semua Karya`, `Cat Air & Gouache`, `Clay & Skulptur`, `Drawing & Sketsa`, `Eksplorasi Warna 4-6 Th`).
   - Responsive masonry/bento gallery tiles showing high-res student work with artist name, age, and medium tags.
   - Clicking any piece opens a focused Lightbox modal with high-resolution view, educator's commentary, techniques mastered, and student quote.

3. **Curriculum & Workshop Catalog (Program & Kelas)**:
   - Tiered programs organized by age and developmental focus:
     - *Little Explorers (Usia 4–6 Tahun)* — Sensori, tekstur, dan kebebasan berekspresi.
     - *Junior Atelier (Usia 7–10 Tahun)* — Komposisi warna, gouache, proporsi dasar, dan sketsa alam.
     - *Young Artists & Manga (Usia 11–16 Tahun)* — Anatomi dasar, cat minyak/cat air lanjutan, dan visual storytelling.
     - *Weekend Intensive Bootcamp* — Kelas tematik akhir pekan khusus liburan (Dark Card showcase).
   - Each program card highlights schedule times, materials included, mentor ratio, and a direct "Daftar via WhatsApp" trigger.

4. **Interactive WhatsApp Booking Concierge (Pendaftaran & Trial)**:
   - Parents can click "Daftar Kelas Trial" anywhere on the page to open an interactive reservation sheet.
   - Selects child's name, age bracket, preferred workshop or regular class, preferred day (Sabtu / Minggu / Hari Kerja), and studio location (Bekasi Barat / Summarecon Bekasi).
   - Dynamically previews the generated WhatsApp message and opens `https://wa.me/6281289001234?text=...` directly, with an instant "Salin Pesan" fallback option.

5. **Studio Philosophy & Educator Profile (Tentang Atelier)**:
   - Raw-canvas cream band highlighting the studio's nurturing philosophy, master mentors graduated from top Indonesian fine arts academies (ITB, ISI), and safety/materials standards.

### Visual Identity & Theme

- **Aesthetic Direction**: Modern Minimalist infused with Tactile Warmth. Crisp white canvas backgrounds paired with warm sketchpad cream (`#f5e9d4`) and deep studio navy (`#1c1e54`), avoiding juvenile cartoon tropes in favor of gallery-grade elegance.
- **Color Palette Tokens**:
  - Dominant Canvas: `#f8f9ff` and pure `#ffffff` (60%).
  - Structural Ink & Frames: Oceanic Ink `#031d34`, Studio Navy `#1c1e54`, and Hairlines `#e3e8ee` (30%).
  - Focal Accents: Ultramarine `#533afd` (Primary Pill CTAs), Warm Raw-Canvas `#f5e9d4`, Accent Ruby `#ea2261`, and Amber `#9b6829` (10%).
- **Typography & Scale**:
  - Font Family: `Plus Jakarta Sans` for display headlines, overlines, and body text.
  - Display Hero: Bold geometric weight with tight tracking (`-0.03em`), balanced lines without orphan words.
  - Overlines: Uppercase tracked badges (`0.08em`) for curriculum age levels and workshop types.
- **Shapes & Elevation**:
  - Pill buttons (`rounded-full`) for high-intent interactive touchpoints.
  - Cards with `0.75rem` to `1rem` radius and Level 1 cool-blue ambient shadow (`box-shadow: 0 1px 3px rgba(0, 55, 112, 0.06), 0 4px 12px rgba(0, 55, 112, 0.04)`).
  - Atmospheric gradient washes behind section headers.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Direct WhatsApp Generator vs Form-to-Database**:
  - *Chosen Approach*: Interactive booking customizer modal that dynamically compiles parent preferences into a well-structured WhatsApp template, allowing 1-click launch to WhatsApp Web / Mobile app.
  - *Why*: In Indonesia (particularly Bekasi/Jabodetabek), parents convert 5x higher through direct WhatsApp communication with studio coordinators rather than opaque website forms or automated email replies.
  - *Alternatives Considered*: Traditional email contact forms (high friction, slow response time for parents).

- **Decision 2: Comprehensive Single-Page Application with Smooth Section Navigation**:
  - *Chosen Approach*: Smooth-scrolling narrative architecture with an anchored Top Bar Contract, dynamic modal overlays for gallery zoom and WhatsApp concierge, and instant filter responsiveness.
  - *Why*: Keeps parents focused on visual exploration without page reloads, ensuring blazing performance and mobile ease of use.

- **Decision 3: Curated Asset & Artwork Architecture**:
  - *Chosen Approach*: Distinct high-fidelity gallery items featuring varied mediums (watercolor landscapes, botanical gouache, playful clay sculptures, comic sketch art) paired with curated student artist spotlights.
  - *Why*: Represents the diverse physical spectrum of Atelier Joyeux's actual curriculum.

---

## 4. Technical Architecture & Data Strategy

### System & Component Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                              App.tsx                                   │
│  - Active section navigation & scroll spy                              │
│  - Booking Modal State (open/close, selectedClassId)                   │
│  - Lightbox Modal State (activeArtwork)                                │
└───────────────────┬────────────────────────────────┬───────────────────┘
                    │                                │
         ┌──────────┴──────────┐          ┌──────────┴──────────┐
         │     Navigation      │          │   Modals & Sheets   │
         │  - Header (Top Bar) │          │  - BookingSheet     │
         │  - Mobile Drawer    │          │  - ArtworkLightbox  │
         │  - Footer           │          └─────────────────────┘
         └──────────┬──────────┘
                    │
   ┌────────────────┴────────────────────────────────────────────────┐
   │                       Page Sections                             │
   │  ├─ HeroSection (Split typography + featured easel showcase)   │
   │  ├─ TrustMetricsStrip (Ratio 1:4, Studio Bekasi, Bahan Seni)   │
   │  ├─ GallerySection (Filterable student artwork masonry)        │
   │  ├─ CurriculumSection (Age-staged cards & dark weekend card)   │
   │  ├─ PhilosophySection (Cream band with pedagogical values)     │
   │  ├─ StudioLocationSection (Bekasi address, facility tour, FAQ) │
   │  └─ CallToActionBanner (Ultramarine full banner with WA CTA)   │
   └─────────────────────────────────────────────────────────────────┘
```

### Data Entities & Schema

- **Artwork Item**:
  - `id`: unique identifier
  - `title`: title of student piece (e.g., "Taman Bunga Mentari", "Kucing di Atas Atap")
  - `artistName`: student first name (e.g., "Aira (5 th)", "Kenzo (8 th)", "Nadia (14 th)")
  - `category`: `'cat-air'` | `'clay'` | `'drawing'` | `'sensori'`
  - `medium`: e.g., "Gouache di atas Kertas Fabriano 300gsm"
  - `year`: "2026"
  - `description`: mentor observation and technique learned
  - `dimensions`: "30 x 40 cm"
  - `imageUrl`: curated high-fidelity art image

- **Class Program**:
  - `id`: unique identifier
  - `name`: program title
  - `ageRange`: e.g., "4 - 6 Tahun", "7 - 10 Tahun", "11 - 16 Tahun"
  - `category`: `'regular'` | `'intensive'` | `'trial'`
  - `description`: developmental focus and syllabus
  - `schedule`: session options (e.g., "Sabtu 09.00 - 10.30 & Minggu 10.30 - 12.00")
  - `price`: formatted IDR string (e.g., "Rp 450.000 / bulan")
  - `highlights`: key benefits (alat disediakan, sertifikat pameran tahunan, laporan perkembangan anak)
  - `isFeatured`: boolean (for dark card or cream card highlight)

- **WhatsApp Generator State**:
  - `parentName`: string
  - `studentName`: string
  - `studentAge`: string
  - `programId`: string
  - `preferredDay`: string
  - `branch`: string (e.g., "Grand Galaxy City, Bekasi Selatan" or "Harapan Indah, Bekasi Barat")
  - `outputEncodedUrl`: derived `https://wa.me/6281289001234?text=...` string

---

## 5. Verification & Delivery Plan

1. **Visual System & Tailwind Styling**:
   - Verify Plus Jakarta Sans font loading in `index.html`.
   - Configure Atelier Joyeux color variables and utilities in `src/index.css`.
2. **Components & Layout**:
   - Top Bar contract with 3 clean zones (`Atelier Joyeux`, navigation links, primary "Hubungi Studio" CTA).
   - Split hero with high-contrast focal presence and zero orphan headline wrapping.
   - Filterable student gallery with responsive cards and functional Lightbox modal.
   - Curriculum and workshop cards matching design token elevations and colors.
   - Fully interactive WhatsApp booking concierge with live preview and clipboard copy.
3. **Execution & Build Validation**:
   - Ensure clean TypeScript typing without any missing handlers.
   - Validate applet with `compile_applet`.
