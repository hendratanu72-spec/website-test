import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Copy, Check, Send, Sparkles, MapPin, Calendar, User, Clock } from 'lucide-react';
import { PROGRAMS_DATA, STUDIO_BRANCHES, STUDIO_PHONE, buildWhatsAppLink } from '../data/studioData';

interface WhatsAppBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProgramId?: string;
}

export const WhatsAppBookingModal: React.FC<WhatsAppBookingModalProps> = ({
  isOpen,
  onClose,
  preselectedProgramId,
}) => {
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('6');
  const [selectedProgramId, setSelectedProgramId] = useState(preselectedProgramId || 'prog-trial');
  const [selectedBranch, setSelectedBranch] = useState(STUDIO_BRANCHES[0].name);
  const [preferredDay, setPreferredDay] = useState('Sabtu (09.00 - 10.30 WIB)');
  const [notes, setNotes] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (preselectedProgramId) {
      setSelectedProgramId(preselectedProgramId);
    }
  }, [preselectedProgramId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentProgram = PROGRAMS_DATA.find((p) => p.id === selectedProgramId) || PROGRAMS_DATA[0];

  const waUrl = buildWhatsAppLink({
    parentName,
    childName,
    childAge,
    programName: currentProgram.name,
    branch: selectedBranch,
    preferredDay,
    notes,
  });

  const previewMessage = `Halo Atelier Joyeux! 🎨

Saya ingin mendaftarkan anak saya untuk kelas seni:
• Nama Orang Tua: ${parentName.trim() || '[Nama Anda]'}
• Nama Anak: ${childName.trim() || '[Nama Anak]'}
• Usia Anak: ${childAge} tahun
• Pilihan Program/Kelas: ${currentProgram.name}
• Pilihan Cabang: ${selectedBranch}
• Pilihan Hari/Jadwal: ${preferredDay}${notes ? `\n• Catatan Tambahan: ${notes}` : ''}

Mohon informasi ketersediaan slot dan jadwal terdekat ya Kak. Terima kasih banyak!`;

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(previewMessage);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    } catch {
      // Fallback
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  const handleSendWhatsApp = () => {
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-secondary/80 backdrop-blur-md transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-surface-container-lowest rounded-2xl border border-hairline shadow-atelier-floating"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-surface-container-lowest/95 backdrop-blur-sm border-b border-hairline">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 fill-emerald-600" />
            </span>
            <div>
              <h2 className="text-base font-bold text-on-surface leading-tight">
                Pendaftaran & Konsultasi Trial via WhatsApp
              </h2>
              <p className="text-[11px] text-ink-mute">
                Format otomatis terisi rapi langsung ke tim kurikulum studio
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-ink-mute hover:text-on-surface hover:bg-surface-container rounded-full transition-colors cursor-pointer"
            aria-label="Tutup form pendaftaran"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Section 1: Data Anak & Orang Tua */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              1. Informasi Siswa & Orang Tua
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">
                  Nama Ayah / Ibu <span className="text-accent-ruby">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Ibu Ratna"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest border border-hairline-input text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">
                  Nama Panggilan Anak <span className="text-accent-ruby">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Aira"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest border border-hairline-input text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-xs font-semibold text-on-surface mb-1.5">
                Usia Anak Saat Ini: <span className="text-primary font-bold">{childAge} Tahun</span>
              </label>
              <div className="flex flex-wrap gap-1.5">
                {['4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'].map((age) => (
                  <button
                    key={age}
                    type="button"
                    onClick={() => setChildAge(age)}
                    className={`w-9 h-9 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                      childAge === age
                        ? 'bg-primary text-white border-primary shadow-sm'
                        : 'bg-surface-container hover:bg-surface-container-high text-ink-secondary border-hairline'
                    }`}
                  >
                    {age}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: Pemilihan Program */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              2. Pilihan Program / Kelas
            </p>

            <div className="space-y-2">
              {PROGRAMS_DATA.map((prog) => {
                const isSelected = selectedProgramId === prog.id;
                return (
                  <div
                    key={prog.id}
                    onClick={() => setSelectedProgramId(prog.id)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-primary/5 border-primary ring-1 ring-primary shadow-sm'
                        : 'bg-surface-container-lowest border-hairline hover:border-primary/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected ? 'border-primary bg-primary' : 'border-ink-mute'
                        }`}
                      >
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-on-surface leading-tight">
                          {prog.name}
                        </p>
                        <p className="text-[11px] text-ink-mute mt-0.5">
                          {prog.ageRange} · {prog.price}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] font-semibold text-primary uppercase tracking-wider bg-primary-bg-subdued/30 px-2.5 py-1 rounded-full shrink-0">
                      {prog.category}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 3: Cabang & Jadwal */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              3. Cabang Studio di Bekasi & Pilihan Hari
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">
                  Pilihan Cabang Bekasi
                </label>
                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest border border-hairline-input text-xs text-on-surface focus:outline-none focus:border-primary cursor-pointer"
                >
                  {STUDIO_BRANCHES.map((b) => (
                    <option key={b.id} value={b.name}>
                      {b.name} ({b.district})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">
                  Pilihan Waktu / Hari
                </label>
                <select
                  value={preferredDay}
                  onChange={(e) => setPreferredDay(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest border border-hairline-input text-xs text-on-surface focus:outline-none focus:border-primary cursor-pointer"
                >
                  <option value="Sabtu (09.00 - 10.30 WIB)">Sabtu Pagi (09.00 - 10.30 WIB)</option>
                  <option value="Sabtu (13.00 - 14.30 WIB)">Sabtu Siang (13.00 - 14.30 WIB)</option>
                  <option value="Minggu (09.00 - 10.30 WIB)">Minggu Pagi (09.00 - 10.30 WIB)</option>
                  <option value="Minggu (11.00 - 12.30 WIB)">Minggu Siang (11.00 - 12.30 WIB)</option>
                  <option value="Hari Kerja (Sore Sesuai Kesepakatan)">Hari Kerja / Weekday (Konsultasi Jam)</option>
                </select>
              </div>
            </div>

            <div className="mt-3">
              <label className="block text-xs font-semibold text-on-surface mb-1">
                Catatan Minat / Karakter Anak (Opsional)
              </label>
              <input
                type="text"
                placeholder="Misal: Anak suka mewarnai dinosaurus, agak pemalu di keramaian"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg bg-surface-container-lowest border border-hairline-input text-xs text-on-surface focus:outline-none focus:border-primary transition-all"
              />
            </div>
          </div>

          {/* WhatsApp Live Preview Bubble */}
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5 fill-emerald-700 text-emerald-700" />
                Pratinjau Pesan WhatsApp Otomatis:
              </span>
              <button
                type="button"
                onClick={handleCopyMessage}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-900 cursor-pointer"
              >
                {isCopied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Salin Teks</span>
                  </>
                )}
              </button>
            </div>

            <pre className="text-xs text-emerald-950 font-sans whitespace-pre-wrap bg-white/80 p-3 rounded-lg border border-emerald-100 max-h-36 overflow-y-auto leading-relaxed">
              {previewMessage}
            </pre>
          </div>
        </div>

        {/* Modal Footer / CTAs */}
        <div className="sticky bottom-0 z-20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 px-6 py-4 bg-surface-container-lowest/95 backdrop-blur-sm border-t border-hairline">
          <p className="text-[11px] text-ink-mute">
            Nomor Hotline: <span className="font-semibold text-on-surface">+62 812-8900-1234</span>
          </p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleCopyMessage}
              className="px-4 py-2.5 text-xs font-semibold text-ink-secondary hover:text-on-surface bg-surface-container hover:bg-surface-container-high rounded-full transition-colors cursor-pointer"
            >
              {isCopied ? 'Tersalin ke Clipboard' : 'Salin Pesan'}
            </button>

            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-full transition-all shadow-atelier cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Buka WhatsApp & Kirim</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
