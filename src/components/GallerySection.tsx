import React, { useState } from 'react';
import { Sparkles, Eye, ArrowUpRight } from 'lucide-react';
import { ARTWORKS_DATA } from '../data/studioData';
import { Artwork, ArtworkCategory } from '../types';

interface GallerySectionProps {
  onSelectArtwork: (artwork: Artwork) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectArtwork }) => {
  const [selectedCategory, setSelectedCategory] = useState<ArtworkCategory>('all');

  const categories: { key: ArtworkCategory; label: string }[] = [
    { key: 'all', label: 'Semua Karya' },
    { key: 'cat-air', label: 'Cat Air & Gouache' },
    { key: 'drawing', label: 'Manga & Ilustrasi' },
    { key: 'clay', label: 'Kriya & Clay Keramik' },
    { key: 'sensori', label: 'Sensori Usia 4–6 Th' },
  ];

  const filteredArtworks = selectedCategory === 'all'
    ? ARTWORKS_DATA
    : ARTWORKS_DATA.filter((item) => item.category === selectedCategory);

  return (
    <section id="galeri" className="py-16 md:py-24 bg-surface relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 text-[11px] font-bold tracking-[0.08em] uppercase text-primary">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pameran Karya Siswa · Curated Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-on-surface tracking-tight leading-tight">
              Karya Jujur dari Tangan-Tangan Kecil Berbakat
            </h2>
            <p className="text-ink-secondary text-sm sm:text-base mt-2 max-w-xl">
              Di Atelier Joyeux, kami tidak mencetak seniman yang seragam. Setiap goresan adalah cerminan imajinasi murni dan keberanian berekspresi.
            </p>
          </div>

          {/* Interactive Filter Tabs / Segmented Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-surface-container rounded-xl border border-hairline shrink-0">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-surface-container-lowest text-primary shadow-sm'
                      : 'text-ink-secondary hover:text-on-surface hover:bg-surface-container-high/50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              onClick={() => onSelectArtwork(artwork)}
              className="group cursor-pointer bg-surface-container-lowest rounded-2xl border border-hairline overflow-hidden shadow-atelier hover:shadow-atelier-hover transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Frame with Gallery Mat */}
              <div className="p-3 pb-0">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.classList.add('bg-gradient-to-tr', 'from-amber-100', 'to-indigo-100');
                      }
                    }}
                  />
                  {/* Subtle hover overlay affordance */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-xs font-semibold text-primary shadow-md">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Lihat Detail Karya</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Artwork Information */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-on-surface tracking-tight leading-snug group-hover:text-primary transition-colors">
                      {artwork.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-ink-mute group-hover:text-primary transition-colors shrink-0" />
                  </div>

                  {/* Clean unboxed metadata with dot separators */}
                  <div className="flex items-center gap-1.5 text-xs text-ink-secondary mb-2.5">
                    <span className="font-semibold text-primary">{artwork.artistName}</span>
                    <span aria-hidden="true">·</span>
                    <span>{artwork.artistAge} th</span>
                    <span aria-hidden="true">·</span>
                    <span>{artwork.dimensions}</span>
                  </div>

                  <p className="text-xs text-ink-mute line-clamp-2 leading-relaxed">
                    {artwork.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-hairline flex items-center justify-between text-[11px] text-ink-secondary">
                  <span className="font-medium text-ink-mute truncate max-w-[200px]">
                    {artwork.medium}
                  </span>
                  <span className="font-semibold text-primary uppercase tracking-wider text-[10px]">
                    Atelier {artwork.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Section Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-tertiary/20 border border-tertiary/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-primary shrink-0">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-on-surface">
                Pameran Tahunan Siswa (Annual Studio Expo)
              </p>
              <p className="text-xs text-ink-secondary">
                Setiap karya siswa dibingkai secara profesional dan dipamerkan untuk orang tua dan publik Bekasi.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectArtwork(ARTWORKS_DATA[0])}
            className="px-4 py-2 text-xs font-semibold text-primary hover:text-white bg-white hover:bg-primary border border-primary/30 hover:border-primary rounded-full transition-all cursor-pointer whitespace-nowrap"
          >
            Pelajari Proses Pameran
          </button>
        </div>
      </div>
    </section>
  );
};
