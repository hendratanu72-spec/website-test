import React from 'react';
import { MapPin, Clock, Phone, Navigation, CheckCircle2, Sparkles } from 'lucide-react';
import { STUDIO_BRANCHES, STUDIO_DISPLAY_PHONE } from '../data/studioData';

interface StudioLocationSectionProps {
  onOpenBooking: () => void;
}

export const StudioLocationSection: React.FC<StudioLocationSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="lokasi" className="py-16 md:py-24 bg-surface relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2 text-[11px] font-bold tracking-[0.08em] uppercase text-primary">
            <MapPin className="w-3.5 h-3.5" />
            <span>Kunjungi Studio Fisik Kami</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-on-surface tracking-tight leading-tight">
            Dua Ruang Seni Nyaman di Jantung Bekasi
          </h2>
          <p className="text-ink-secondary text-sm sm:text-base mt-3">
            Kunjungi studio kami untuk melihat langsung fasilitas easel kayu, galeri karya siswa, serta suasana belajar yang tenang dan menyenangkan.
          </p>
        </div>

        {/* Studio Branches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {STUDIO_BRANCHES.map((branch) => (
            <div
              key={branch.id}
              className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 border border-hairline shadow-atelier hover:shadow-atelier-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-primary bg-primary-bg-subdued/30 px-3 py-1 rounded-full">
                    {branch.district}
                  </span>
                  <span className="text-xs text-ink-mute flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    Buka Selasa – Minggu
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-on-surface tracking-tight mb-2">
                  {branch.name}
                </h3>

                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{branch.address}</span>
                </p>

                <div className="p-3.5 rounded-xl bg-surface-container border border-hairline mb-5 text-xs text-ink-secondary">
                  <p className="font-semibold text-on-surface mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    Jam Operasional Studio:
                  </p>
                  <p>{branch.hours}</p>
                </div>

                {/* Facilities */}
                <div className="space-y-2 mb-6">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-ink-mute">
                    Fasilitas Studio:
                  </p>
                  {branch.facilities.map((fac, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-ink-secondary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{fac}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-hairline flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-ink-secondary hover:text-primary bg-surface-container hover:bg-surface-container-high rounded-full transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Buka di Google Maps</span>
                </a>

                <button
                  onClick={onOpenBooking}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-primary hover:bg-primary-deep rounded-full transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Jadwalkan Tur Studio</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Atmosphere Highlight Banner */}
        <div className="rounded-2xl overflow-hidden border border-hairline bg-surface-container-lowest p-6 sm:p-8 shadow-atelier flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-on-surface tracking-tight mb-2">
              Ingin Merasakan Suasana Studio Terlebih Dahulu?
            </h3>
            <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
              Anda dan ananda dipersilakan berkunjung ke studio di akhir pekan untuk melihat sesi kelas yang sedang berlangsung, menyapa para mentor, dan mencoba goresan cat pertama.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary hover:bg-primary-deep rounded-full shadow-atelier transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Booking Kunjungan Bebas Biaya</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
