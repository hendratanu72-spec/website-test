import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { CURRICULUM_MILESTONES } from '../data/studioData';

interface CurriculumTimelineProps {
  onOpenBooking: () => void;
}

export const CurriculumTimeline: React.FC<CurriculumTimelineProps> = ({ onOpenBooking }) => {
  return (
    <section id="kurikulum" className="py-16 md:py-24 bg-surface relative">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2 text-[11px] font-bold tracking-[0.08em] uppercase text-primary">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Jalur Pembelajaran Berkesinambungan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-on-surface tracking-tight leading-tight">
            Kurikulum Seni Rupa 4 Tahap Berjenjang
          </h2>
          <p className="text-ink-secondary text-sm sm:text-base mt-3">
            Dari sensori jari balita hingga teknik kanvas dan ilustrasi remaja, kami memastikan pondasi artistik anak tumbuh alami dan kokoh.
          </p>
        </div>

        {/* Vertical Curriculum Timeline with Thin Connecting Hairlines & Numbered Circular Nodes */}
        <div className="relative pl-6 sm:pl-8 md:pl-10 before:content-[''] before:absolute before:left-3 sm:before:left-4 md:before:left-5 before:top-4 before:bottom-4 before:w-[2px] before:bg-hairline">
          <div className="space-y-10 sm:space-y-12">
            {CURRICULUM_MILESTONES.map((milestone, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div key={milestone.step} className="relative group">
                  {/* Numbered Circular Milestone Node (Filled in raw cream or vibrant ultramarine) */}
                  <div
                    className={`absolute -left-6 sm:-left-8 md:-left-10 top-0.5 w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm font-mono transition-transform group-hover:scale-110 shadow-sm ${
                      isEven
                        ? 'bg-tertiary-fixed text-on-tertiary-fixed border-2 border-tertiary-container/30'
                        : 'bg-primary text-white border-2 border-white'
                    }`}
                  >
                    {milestone.step}
                  </div>

                  {/* Milestone Card */}
                  <div className="bg-surface-container-lowest p-6 sm:p-7 rounded-2xl border border-hairline shadow-atelier hover:shadow-atelier-hover transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-primary">
                          Tahap {milestone.step} · {milestone.age}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-on-surface tracking-tight mt-0.5">
                          {milestone.title}
                        </h3>
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-surface-container text-ink-secondary w-fit">
                        {milestone.age}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-primary mb-2">
                      Fokus: {milestone.focus}
                    </p>

                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                      {milestone.description}
                    </p>

                    {/* Acquired Skills Checkpoints */}
                    <div className="pt-3 border-t border-hairline flex flex-wrap gap-x-4 gap-y-2">
                      {milestone.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-1.5 text-xs text-ink-mute">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Milestone Footer CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-primary hover:bg-primary-deep rounded-full shadow-atelier transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span>Konsultasikan Jenjang yang Tepat untuk Anak</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
