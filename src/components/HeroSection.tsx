import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { STUDIO_CREDENTIALS } from '../data/studioData';

interface HeroSectionProps {
  onOpenBooking: (programId?: string) => void;
  onExploreGallery: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onExploreGallery }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 md:pt-12 md:pb-20 bg-atelier-mesh border-b border-hairline">
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-bg-subdued/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-tertiary/40 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Split-Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typographic Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Overline / Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-surface-container-highest/70 border border-hairline text-[11px] font-bold tracking-[0.08em] uppercase text-primary">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Studio Seni Rupa Anak · Bekasi</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] font-bold text-[#031d34] leading-[1.08] tracking-[-0.03em] mb-5 text-balance">
              Membimbing Jiwa Seni & Imajinasi Murni Anak Anda
            </h1>

            {/* Lead Narrative */}
            <p className="text-[16px] sm:text-[18px] text-ink-secondary leading-[1.55] tracking-[-0.005em] mb-8 max-w-xl">
              Atelier Joyeux menghadirkan ruang melukis dan kriya keramik yang hangat di Bekasi. Tanpa paksaan menjiplak, anak-anak dibimbing mengeksplorasi cat air, gouache, dan skulptur dengan rasa percaya diri penuh.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-7">
              <button
                onClick={() => onOpenBooking('prog-trial')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-[15px] font-semibold text-white bg-primary hover:bg-primary-deep active:bg-primary-press rounded-full shadow-atelier transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Jadwalkan Trial WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreGallery}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[15px] font-semibold text-on-surface hover:text-primary bg-surface-container-lowest hover:bg-canvas-soft border border-hairline hover:border-primary/40 rounded-full transition-all cursor-pointer"
              >
                <span>Lihat Karya Siswa</span>
              </button>
            </div>

            {/* Value Checkpoints */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-[13px] text-ink-mute font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Rasio 1:4 Anak per Easel</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Cat & Tanah Liat 100% Non-Toxic</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Kurikulum Lulusan ITB & ISI</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Focal Anchor (Easel Showcase Frame) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Studio Canvas Mat & Frame */}
              <div className="bg-surface-container-lowest p-3 sm:p-4 rounded-2xl border border-hairline shadow-atelier hover:shadow-atelier-hover transition-all duration-300">
                {/* Simulated Easel Header Clip */}
                <div className="flex items-center justify-between pb-2.5 px-1 border-b border-hairline mb-3">
                  <div className="flex items-center gap-1.5 text-xs text-ink-mute font-medium">
                    <span className="w-2.5 h-2.5 rounded-sm bg-amber-500/80 inline-block" />
                    <span>Easel No. 04 · Sesi Sabtu Pagi</span>
                  </div>
                  <span className="text-[11px] font-bold tracking-wider text-primary uppercase bg-primary-bg-subdued/30 px-2 py-0.5 rounded-full">
                    Karya Pilihan Minggu Ini
                  </span>
                </div>

                {/* Primary Artwork Image Container */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 group">
                  <img
                    src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80"
                    alt="Lukisan anak di studio seni Atelier Joyeux"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Graceful fallback to rich studio gradient
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.classList.add('bg-gradient-to-tr', 'from-amber-200', 'via-pink-200', 'to-indigo-200');
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Artwork Floating Card Tag */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-sm rounded-lg border border-white/60 shadow-sm text-left">
                    <p className="text-[14px] font-bold text-on-surface leading-tight">
                      “Taman Mentari & Burung Tropis”
                    </p>
                    <div className="flex items-center gap-2 text-[12px] text-ink-mute mt-1">
                      <span className="font-semibold text-primary">Aira Azzahra (6 th)</span>
                      <span>·</span>
                      <span>Gouache di Kertas Fabriano</span>
                    </div>
                  </div>
                </div>

                {/* Easel Studio Footnote */}
                <div className="mt-3 pt-2 text-[12px] text-ink-mute flex items-center justify-between px-1">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-accent-amber" />
                    Bahan: Fabriano 300gsm & Holbein Gouache
                  </span>
                  <span className="font-medium text-ink-secondary">Bekasi Studio Gallery</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Credentials Strip (Full-width row below split) */}
        <div className="mt-12 pt-8 border-t border-hairline/80 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STUDIO_CREDENTIALS.map((cred, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl bg-surface-container-lowest/80 border border-hairline hover:border-primary/20 transition-colors shadow-sm"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-ink-mute mb-1">
                {cred.kicker}
              </p>
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight font-mono tabular-nums">
                  {cred.value}
                </span>
                <span className="text-xs font-semibold text-primary">
                  {cred.unit}
                </span>
              </div>
              <p className="text-xs text-ink-secondary leading-normal">
                {cred.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
