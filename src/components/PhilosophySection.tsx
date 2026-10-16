import React from 'react';
import { Heart, Sparkles, Quote, Award, ShieldCheck, Palette } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/studioData';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="filosofi" className="py-16 md:py-24 bg-tertiary/30 border-y border-tertiary-fixed relative overflow-hidden">
      {/* Organic canvas paper texture feeling */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2 text-[11px] font-bold tracking-[0.08em] uppercase text-tertiary-container">
            <Heart className="w-3.5 h-3.5 text-accent-ruby fill-accent-ruby" />
            <span>Filosofi Pendidikan Seni Atelier Joyeux</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-on-surface tracking-tight leading-tight">
            Menghargai Keunikan Imajinasi Setiap Anak
          </h2>
          <p className="text-ink-secondary text-sm sm:text-base mt-3">
            Bagi kami, anak-anak bukanlah kertas kosong yang harus diisi cetakan orang dewasa. Mereka adalah seniman alami yang membutuhkan ruang aman dan teknik tepat untuk menyuarakan pikirannya.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-surface-container-lowest border border-hairline shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-primary-bg-subdued/40 text-primary flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-on-surface mb-2">
              Proses di Atas Hasil
            </h3>
            <p className="text-xs text-ink-secondary leading-relaxed">
              Kami merayakan eksperimen berani dan penyelesaian masalah kreatif anak, bukan sekadar gambar rapi yang meniru contoh guru.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-container-lowest border border-hairline shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
              <Palette className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-on-surface mb-2">
              Standar Alat Seni Murni
            </h3>
            <p className="text-xs text-ink-secondary leading-relaxed">
              Anak diperkenalkan pada kuas bulu asli, kertas Fabriano 300gsm, dan pigmen cat gouache berkualitas galeri bebas zat berbahaya.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-container-lowest border border-hairline shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-on-surface mb-2">
              Mentor Akademisi Seni
            </h3>
            <p className="text-xs text-ink-secondary leading-relaxed">
              Seluruh pengajar merupakan sarjana seni rupa murni & kriya (ITB, ISI) yang telah tersertifikasi dalam komunikasi pedagogi anak.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-container-lowest border border-hairline shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-on-surface mb-2">
              Lingkungan Bebas Cemas
            </h3>
            <p className="text-xs text-ink-secondary leading-relaxed">
              Studio dirancang hangat tanpa kompetisi peringkat nilai. Setiap anak berkembang menurut tempo dan minat alaminya sendiri.
            </p>
          </div>
        </div>

        {/* Parent Testimonials (3 Attributable Testimonials adjacent to philosophy) */}
        <div>
          <div className="text-center mb-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-ink-mute">
              Cerita Nyata Para Orang Tua di Bekasi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((testi) => (
              <div
                key={testi.id}
                className="p-6 rounded-2xl bg-surface-container-lowest border border-hairline shadow-atelier flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-6 h-6 text-primary-soft/50 mb-3" />
                  <p className="text-xs sm:text-sm text-on-surface leading-relaxed italic mb-4">
                    “{testi.text}”
                  </p>
                </div>

                <div className="pt-3 border-t border-hairline flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-on-surface">
                      {testi.parentName}
                    </p>
                    <p className="text-[11px] text-ink-mute">
                      {testi.childDetail}
                    </p>
                  </div>
                  <span className="text-[10px] font-semibold text-primary px-2 py-0.5 rounded-full bg-primary-bg-subdued/30">
                    {testi.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
