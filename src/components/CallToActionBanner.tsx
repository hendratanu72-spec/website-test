import React from 'react';
import { MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';

interface CallToActionBannerProps {
  onOpenBooking: () => void;
}

export const CallToActionBanner: React.FC<CallToActionBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 md:py-20 bg-primary text-white relative overflow-hidden">
      {/* Decorative ambient radial glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-primary-soft/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-accent-magenta/15 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-[11px] font-bold tracking-[0.08em] uppercase text-white">
          <Sparkles className="w-3.5 h-3.5 text-accent-magenta" />
          <span>Sesi Trial Akhir Pekan Terbuka</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance max-w-3xl mx-auto leading-tight">
          Beri Ruang untuk Imajinasi Terbaik Anak Anda Hari Ini
        </h2>

        <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          Semua peralatan lukis, kuas profesional, kertas Fabriano, dan apron disediakan langsung oleh studio. Anda cukup mendampingi ananda dengan senyum hangat.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-[15px] font-bold text-primary bg-white hover:bg-slate-50 rounded-full shadow-atelier transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-primary text-primary" />
            <span>Daftar Kelas Percobaan (Trial Rp 95.000)</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs text-white/80">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-primary-bg-subdued" />
            <span>Karya Bawa Pulang di Akhir Sesi</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-primary-bg-subdued" />
            <span>Evaluasi Minat Visual oleh Kepala Kurikulum</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-primary-bg-subdued" />
            <span>Bebas Biaya Trial jika Lanjut Regular</span>
          </div>
        </div>
      </div>
    </section>
  );
};
