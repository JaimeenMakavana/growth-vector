export interface CaseStudy {
  id: string;
  category: string;
  tag: string;
  title: string;
  description: string;
  fullDescription: string;
  clientName?: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    primary: { value: string; label: string };
    secondary: { value: string; label: string };
    additional?: Array<{ value: string; label: string }>;
  };
  metrics: {
    label: string;
    value: string;
    improvement?: string;
  }[];
  technologies?: string[];
  duration?: string;
  imageUrl?: string;
  featured?: boolean;
  publishedAt: string;
  stickyOffset?: string;
}

export interface CaseStudyFilters {
  category?: string;
  tag?: string;
  search?: string;
}

export interface CaseStudyListProps {
  caseStudies: CaseStudy[];
  filters?: CaseStudyFilters;
}

