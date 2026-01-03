export type ServiceCategory = "all" | "strategy" | "automation" | "infrastructure" | "marketing" | "consulting";

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  features?: string[];
  cta: string;
  ctaLink: string;
  category: ServiceCategory | ServiceCategory[];
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  featured?: boolean;
}

