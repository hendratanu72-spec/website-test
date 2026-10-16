import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { GallerySection } from './components/GallerySection';
import { ProgramCatalog } from './components/ProgramCatalog';
import { CurriculumTimeline } from './components/CurriculumTimeline';
import { PhilosophySection } from './components/PhilosophySection';
import { StudioLocationSection } from './components/StudioLocationSection';
import { CallToActionBanner } from './components/CallToActionBanner';
import { Footer } from './components/Footer';
import { ArtworkLightboxModal } from './components/ArtworkLightboxModal';
import { WhatsAppBookingModal } from './components/WhatsAppBookingModal';
import { Artwork } from './types';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preselectedProgramId, setPreselectedProgramId] = useState<string>('prog-trial');

  const handleOpenBooking = (programId?: string) => {
    if (programId) {
      setPreselectedProgramId(programId);
    }
    setIsBookingModalOpen(true);
  };

  const handleExploreGallery = () => {
    const el = document.getElementById('galeri');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookFromArtwork = (artwork: Artwork) => {
    // If artwork is clay, select intensive/ceramic, else regular trial
    if (artwork.category === 'clay') {
      setPreselectedProgramId('prog-intensive');
    } else if (artwork.category === 'drawing') {
      setPreselectedProgramId('prog-teen-manga');
    } else if (artwork.category === 'sensori') {
      setPreselectedProgramId('prog-explorers');
    } else {
      setPreselectedProgramId('prog-junior');
    }
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface selection:bg-primary-bg-subdued selection:text-primary-deep">
      {/* Top Bar Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onOpenBooking={handleOpenBooking}
          onExploreGallery={handleExploreGallery}
        />

        {/* Student Artwork Exhibition Gallery */}
        <GallerySection onSelectArtwork={setSelectedArtwork} />

        {/* Programs & Workshops Catalog */}
        <ProgramCatalog onSelectProgram={handleOpenBooking} />

        {/* Continuous Curriculum Timeline */}
        <CurriculumTimeline onOpenBooking={() => handleOpenBooking('prog-trial')} />

        {/* Studio Philosophy & Parent Testimonials */}
        <PhilosophySection />

        {/* Physical Studio Locations in Bekasi */}
        <StudioLocationSection onOpenBooking={() => handleOpenBooking('prog-trial')} />

        {/* Call to Action Banner */}
        <CallToActionBanner onOpenBooking={() => handleOpenBooking('prog-trial')} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking('prog-trial')} />

      {/* Artwork Lightbox Modal */}
      <ArtworkLightboxModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
        onBookClassForArtwork={handleBookFromArtwork}
      />

      {/* WhatsApp Booking Concierge Modal */}
      <WhatsAppBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preselectedProgramId={preselectedProgramId}
      />

      {/* Floating Sticky Quick WhatsApp Trigger */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => handleOpenBooking('prog-trial')}
          aria-label="Hubungi WhatsApp Studio"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-atelier-floating hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <MessageCircle className="w-5 h-5 fill-white/20" />
          <span className="text-xs font-bold tracking-wide hidden sm:inline whitespace-nowrap">
            Konsultasi WhatsApp
          </span>
        </button>
      </div>
    </div>
  );
}
