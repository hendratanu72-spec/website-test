export type ArtworkCategory = 'all' | 'cat-air' | 'drawing' | 'clay' | 'sensori';

export interface Artwork {
  id: string;
  title: string;
  artistName: string;
  artistAge: number;
  category: ArtworkCategory;
  medium: string;
  year: string;
  dimensions: string;
  description: string;
  educatorNote: string;
  studentQuote: string;
  imageUrl: string;
  colorWash: string;
}

export type ProgramCategory = 'regular' | 'intensive' | 'trial';
export type CardVariant = 'white' | 'dark' | 'cream';

export interface Program {
  id: string;
  name: string;
  ageRange: string;
  category: ProgramCategory;
  variant: CardVariant;
  subtitle: string;
  description: string;
  syllabus: string[];
  schedule: string;
  price: string;
  spotsLeft?: number;
  highlightBadge?: string;
  ratio: string;
}

export interface CurriculumMilestone {
  step: string;
  title: string;
  age: string;
  focus: string;
  description: string;
  skills: string[];
}

export interface StudioBranch {
  id: string;
  name: string;
  district: string;
  address: string;
  googleMapsQuery: string;
  phone: string;
  hours: string;
  facilities: string[];
}
