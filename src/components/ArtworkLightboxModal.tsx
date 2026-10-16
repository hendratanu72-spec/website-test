import React, { useEffect } from 'react';
import { X, MessageCircle, Calendar, Palette, Sparkles, User, Maximize2 } from 'lucide-react';
import { Artwork } from '../types';
import { STUDIO_PHONE } from '../data/studioData';

interface ArtworkLightboxModalProps {
  artwork: Artwork | null;
  onClose: () => void;
  onBookClassForArtwork: (artwork: Artwork) => void;
}

export const ArtworkLightboxModal: React.FC<ArtworkLightboxModalProps> = ({
  artwork,
  onClose,
  onBookClassForArtwork,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (artwork) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [artwork, onClose]);

  if (!artwork) return null;

  const handleWhatsAppInquiry = () => {
    const message = `Halo Atelier Joyeux! Saya sangat mengagumi karya siswa "${artwork.title}" oleh ${artwork.artistName} (${artwork.artistAge} tahun). Apakah ada program kelas yang mengajarkan teknik media ${artwork.medium} seperti ini? Terima kasih!`;
    window.open(`https://wa.me/${STUDIO_PHONE}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-secondary/80 backdrop-blur-md transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-surface-container-lowest rounded-2xl border border-hairline shadow-atelier-floating"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-surface-container-lowest/95 backdrop-blur-sm border-b border-hairline">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="w-4 h-4" />
            <span>Koleksi Pameran Siswa Atelier Joyeux</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-ink-mute hover:text-on-surface hover:bg-surface-container rounded-full transition-colors cursor-pointer"
            aria-label="Tutup detail karya"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Grid */}
        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left: Artwork Presentation Frame */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="relative rounded-xl overflow-hidden bg-slate-50 border border-hairline p-2 sm:p-3 shadow-inner">
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[500px] object-contain rounded-lg mx-auto"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.classList.add('bg-gradient-to-br', 'from-amber-100', 'to-indigo-100', 'min-h-[300px]');
                  }
                }}
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-ink-mute px-1">
              <span>Dimensi Fisik: {artwork.dimensions}</span>
              <span>Tahun Pembuatan: {artwork.year}</span>
            </div>
          </div>

          {/* Right: Curatorial & Student Story */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              {/* Overline & Title */}
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-primary mb-1">
                Karya Siswa Berbakat
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight mb-2">
                {artwork.title}
              </h2>

              {/* Artist Metadata (Unboxed text with separators) */}
              <div className="flex items-center gap-2 text-sm text-ink-secondary mb-4 pb-3 border-b border-hairline">
                <span className="font-semibold text-primary">{artwork.artistName}</span>
                <span aria-hidden="true">·</span>
                <span>Usia {artwork.artistAge} Tahun</span>
                <span aria-hidden="true">·</span>
                <span className="capitalize">{artwork.category}</span>
              </div>

              {/* Medium */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-ink-mute uppercase tracking-wider mb-1">
                  Media & Material
                </p>
                <p className="text-sm text-on-surface font-medium">
                  {artwork.medium}
                </p>
              </div>

              {/* Description */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-ink-mute uppercase tracking-wider mb-1">
                  Deskripsi Karya
                </p>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  {artwork.description}
                </p>
              </div>

              {/* Educator Note */}
              <div className="p-3.5 rounded-xl bg-surface-container border border-hairline mb-4">
                <p className="text-xs font-bold text-on-surface flex items-center gap-1.5 mb-1">
                  <Palette className="w-3.5 h-3.5 text-primary" />
                  Catatan Mentor Pengajar
                </p>
                <p className="text-xs text-ink-secondary leading-relaxed">
                  {artwork.educatorNote}
                </p>
              </div>

              {/* Student Quote */}
              <div className="p-3 rounded-lg bg-tertiary/30 border border-tertiary/60 mb-6 italic text-xs text-on-surface">
                {artwork.studentQuote}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2.5 pt-4 border-t border-hairline">
              <button
                onClick={handleWhatsAppInquiry}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-primary hover:bg-primary-deep rounded-full transition-all shadow-atelier cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Tanya Kelas Serupa via WA</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onBookClassForArtwork(artwork);
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold text-ink-secondary hover:text-primary rounded-full hover:bg-surface-container transition-colors cursor-pointer"
              >
                Daftarkan Anak ke Kelas Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
