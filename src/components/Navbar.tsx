import React, { useState } from 'react';
import { Menu, X, MessageCircle, MapPin, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (programId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Galeri Karya', href: '#galeri' },
    { label: 'Program & Kelas', href: '#program' },
    { label: 'Kurikulum Bertahap', href: '#kurikulum' },
    { label: 'Filosofi Studio', href: '#filosofi' },
    { label: 'Lokasi Bekasi', href: '#lokasi' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-hairline transition-all">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element wordmark in Plus Jakarta Sans) */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 text-on-surface font-bold tracking-tight text-xl whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
        >
          <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
            <Sparkles className="w-4 h-4" />
          </span>
          <span className="font-extrabold text-[1.25rem] tracking-tight text-[#031d34]">
            Atelier Joyeux
          </span>
        </a>

        {/* Zone 2: 4-5 clean single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-ink-secondary">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap shrink-0 transition-colors hover:text-primary relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenBooking('prog-trial')}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[14px] font-semibold text-white bg-primary hover:bg-primary-deep active:bg-primary-press rounded-full shadow-atelier transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Daftar Trial via WA</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-on-surface hover:text-primary rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-hairline bg-surface-container-lowest px-4 pt-3 pb-6 shadow-atelier-floating">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-ink-mute px-2 py-1 uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>Bekasi: Grand Galaxy & Summarecon</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-[15px] font-medium text-on-surface rounded-lg hover:bg-surface-container transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking('prog-trial');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-[14px] font-semibold text-white bg-primary rounded-full shadow-sm hover:bg-primary-deep transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi & Daftar Trial WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
