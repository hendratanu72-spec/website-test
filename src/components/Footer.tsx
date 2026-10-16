import React from 'react';
import { Sparkles, MapPin, Phone, MessageCircle } from 'lucide-react';
import { STUDIO_BRANCHES, STUDIO_DISPLAY_PHONE, STUDIO_PHONE } from '../data/studioData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-surface-container-lowest border-t border-hairline pt-14 pb-12 text-on-surface">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-hairline">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-sm">
                <Sparkles className="w-4 h-4" />
              </span>
              <span className="font-extrabold text-xl tracking-tight text-[#031d34]">
                Atelier Joyeux
              </span>
            </div>

            <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4 max-w-sm">
              Studio seni rupa dan kriya anak di Bekasi. Membimbing eksplorasi imajinasi, kepekaan warna, dan karakter mandiri anak melalui seni murni berstandar galeri.
            </p>

            <div className="flex items-center gap-2 text-xs text-ink-mute font-medium">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span>Kota Bekasi: Grand Galaxy City & Summarecon Bekasi</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-wider text-ink-mute mb-4">
              Navigasi Halaman
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary">
              <li>
                <a href="#galeri" className="hover:text-primary transition-colors">
                  Galeri Karya Siswa
                </a>
              </li>
              <li>
                <a href="#program" className="hover:text-primary transition-colors">
                  Program & Kelas Pilihan
                </a>
              </li>
              <li>
                <a href="#kurikulum" className="hover:text-primary transition-colors">
                  Kurikulum Bertahap 4 Tahap
                </a>
              </li>
              <li>
                <a href="#filosofi" className="hover:text-primary transition-colors">
                  Filosofi Pendidikan Seni
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-primary transition-colors">
                  Daftar Cabang di Bekasi
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Contact & WhatsApp Hotline */}
          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-wider text-ink-mute mb-4">
              Kontak & Pendaftaran WhatsApp
            </p>

            <div className="p-4 rounded-xl bg-surface-container border border-hairline mb-4">
              <p className="text-xs font-bold text-on-surface mb-1 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                WhatsApp Studio Coordinator
              </p>
              <p className="text-sm font-semibold text-primary font-mono">
                {STUDIO_DISPLAY_PHONE}
              </p>
              <p className="text-[11px] text-ink-mute mt-1">
                Senin – Minggu: 08.30 – 19.00 WIB
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-primary hover:bg-primary-deep rounded-full transition-all shadow-sm cursor-pointer"
            >
              <span>Konsultasi Kelas Trial Sekarang</span>
            </button>
          </div>
        </div>

        {/* Quiet Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-mute">
          <p>© 2026 Atelier Joyeux. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Kurikulum Berbasis Seni Rupa Murni</span>
            <span aria-hidden="true">·</span>
            <span>Bekasi, Jawa Barat</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
