import React from 'react';
import { Check, MessageCircle, Clock, Users, Calendar, Sparkles } from 'lucide-react';
import { PROGRAMS_DATA } from '../data/studioData';
import { Program } from '../types';

interface ProgramCatalogProps {
  onSelectProgram: (programId: string) => void;
}

export const ProgramCatalog: React.FC<ProgramCatalogProps> = ({ onSelectProgram }) => {
  return (
    <section id="program" className="py-16 md:py-24 bg-surface-container-low border-y border-hairline relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2 text-[11px] font-bold tracking-[0.08em] uppercase text-primary">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Jenjang & Workshop · Program Pilihan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-on-surface tracking-tight leading-tight">
            Pilihan Program Sesuai Tahap Perkembangan Anak
          </h2>
          <p className="text-ink-secondary text-sm sm:text-base mt-3">
            Kelas terstruktur dengan kelompok kecil di Bekasi. Semua peralatan melukis, kuas, dan apron disediakan langsung oleh studio.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PROGRAMS_DATA.map((prog) => {
            if (prog.variant === 'dark') {
              // Featured / Dark Card wrapped in #1c1e54
              return (
                <div
                  key={prog.id}
                  className="rounded-2xl p-6 sm:p-7 flex flex-col justify-between bg-secondary text-white border border-secondary shadow-atelier-hover relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-2xl pointer-events-none" />

                  <div>
                    {/* Badge and Age Indicator */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.08em] uppercase bg-primary text-white">
                        {prog.highlightBadge || 'INTENSIF AKHIR PEKAN'}
                      </span>
                      <span className="text-xs font-semibold text-[#b9b9f9]">
                        {prog.ageRange}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                      {prog.name}
                    </h3>
                    <p className="text-xs text-[#b9b9f9] leading-relaxed mb-4">
                      {prog.subtitle}
                    </p>

                    <div className="p-3 rounded-xl bg-white/10 border border-white/15 mb-5">
                      <p className="text-xs font-semibold text-white mb-1 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-primary-soft" />
                        {prog.ratio}
                      </p>
                      <p className="text-[11px] text-[#b9b9f9]">
                        {prog.schedule}
                      </p>
                    </div>

                    {/* Syllabus */}
                    <div className="space-y-2 mb-6">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#b9b9f9]">
                        Fokus Pembelajaran:
                      </p>
                      {prog.syllabus.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-white/90">
                          <Check className="w-3.5 h-3.5 text-primary-soft shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 mt-auto">
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="text-xs text-[#b9b9f9]">Investasi:</span>
                      <span className="text-lg font-bold text-white font-mono tabular-nums">
                        {prog.price}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectProgram(prog.id)}
                      className="w-full flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-white bg-primary hover:bg-primary-deep rounded-full transition-all shadow-atelier cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Daftar via WhatsApp</span>
                    </button>
                  </div>
                </div>
              );
            }

            if (prog.variant === 'cream') {
              // Cream Band Card backed with canvas-cream (#f5e9d4)
              return (
                <div
                  key={prog.id}
                  className="rounded-2xl p-6 sm:p-7 flex flex-col justify-between bg-tertiary/40 border border-tertiary-fixed shadow-atelier relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.08em] uppercase bg-tertiary-container text-on-tertiary-container">
                        {prog.highlightBadge || 'TRIAL REKOMENDASI'}
                      </span>
                      <span className="text-xs font-semibold text-primary">
                        {prog.ageRange}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-on-surface tracking-tight mb-2">
                      {prog.name}
                    </h3>
                    <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                      {prog.subtitle}
                    </p>

                    <div className="p-3 rounded-xl bg-white/70 border border-hairline mb-5">
                      <p className="text-xs font-semibold text-on-surface mb-1 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        Durasi 75 Menit Lengkap
                      </p>
                      <p className="text-[11px] text-ink-mute">
                        {prog.schedule}
                      </p>
                    </div>

                    <div className="space-y-2 mb-6">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-ink-secondary">
                        Keuntungan Sesi Trial:
                      </p>
                      {prog.syllabus.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-ink-secondary">
                          <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-hairline mt-auto">
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="text-xs text-ink-mute">Biaya Sesi:</span>
                      <span className="text-lg font-bold text-on-surface font-mono tabular-nums">
                        {prog.price}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectProgram(prog.id)}
                      className="w-full flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-white bg-primary hover:bg-primary-deep rounded-full transition-all shadow-atelier cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Jadwalkan Trial Sekarang</span>
                    </button>
                  </div>
                </div>
              );
            }

            // Standard Studio Offering Card (White canvas, 1px hairline border, 24px padding, Level 1 elevation)
            return (
              <div
                key={prog.id}
                className="rounded-2xl p-6 sm:p-7 flex flex-col justify-between bg-surface-container-lowest border border-hairline shadow-atelier hover:shadow-atelier-hover transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.08em] uppercase bg-primary-bg-subdued/30 text-primary-deep">
                      KELAS REGULER
                    </span>
                    <span className="text-xs font-semibold text-ink-secondary">
                      {prog.ageRange}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-on-surface tracking-tight mb-2">
                    {prog.name}
                  </h3>
                  <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                    {prog.subtitle}
                  </p>

                  <div className="p-3 rounded-xl bg-surface-container border border-hairline mb-5">
                    <p className="text-xs font-semibold text-on-surface mb-1 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-primary" />
                      {prog.ratio}
                    </p>
                    <p className="text-[11px] text-ink-mute">
                      {prog.schedule}
                    </p>
                  </div>

                  <div className="space-y-2 mb-6">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-ink-mute">
                      Kurikulum Silabus:
                    </p>
                    {prog.syllabus.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-ink-secondary">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-hairline mt-auto">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-xs text-ink-mute">SPP Bulanan:</span>
                    <span className="text-lg font-bold text-on-surface font-mono tabular-nums">
                      {prog.price}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectProgram(prog.id)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-primary hover:text-white bg-surface-container-lowest hover:bg-primary border border-primary rounded-full transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Daftar via WhatsApp</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
