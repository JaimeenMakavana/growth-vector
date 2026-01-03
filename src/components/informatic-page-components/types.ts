export interface Skill {
  id: string;
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "Full Stack"
    | "DevOps"
    | "Tools"
    | "Language"
    | "Styling"
    | "Animation"
    | "Library"
    | "Validation"
    | "Development";
  level: "Expert" | "Advanced" | "Proficient" | "Intermediate";
  description: string;
  icon?: string;
}

export interface Tool {
  id: string;
  name: string;
  category:
    | "Framework"
    | "Library"
    | "Language"
    | "Build Tool"
    | "Styling"
    | "Validation"
    | "Animation"
    | "Development";
  description: string;
  version?: string;
  website?: string;
}

export interface PerformanceMetric {
  id: string;
  name: string;
  value: string;
  target: string;
  unit: string;
  description: string;
  status: "excellent" | "good" | "needs-improvement";
  category: "Core Web Vitals" | "Load Performance" | "Bundle Size" | "Runtime";
}

