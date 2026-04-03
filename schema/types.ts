// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeEvent {
  id: string;
  body: { value: string; summary?: string };
  endDate: { time: string };
  eventDate: { time: string };
  eventType: any[];
  image: { url: string; alt: string; width: number; height: number };
  location: string;
  path: string;
  title: string;
}

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredProgramsTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodeNews {
  id: string;
  body: { value: string; summary?: string };
  category: any[];
  featured: boolean;
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  title: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeProgram {
  id: string;
  body: { value: string; summary?: string };
  department: any[];
  gradeLevel: any[];
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  schedule: string;
  title: string;
}

export interface NodeTeacher {
  id: string;
  body: { value: string; summary?: string };
  department: any[];
  email: string;
  office: string;
  path: string;
  phone: string;
  photo: { url: string; alt: string; width: number; height: number };
  subjects: string[];
  title: string;
}
