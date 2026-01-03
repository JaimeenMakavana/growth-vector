import type { Tool } from "../types";

export const tools: Tool[] = [
  // Frameworks
  {
    id: "nextjs-tool",
    name: "Next.js",
    category: "Framework",
    description: "React framework for production with SSR and SSG",
    version: "16.1.1",
    website: "https://nextjs.org",
  },
  {
    id: "react-tool",
    name: "React",
    category: "Framework",
    description: "UI library for building user interfaces",
    version: "19.2.3",
    website: "https://react.dev",
  },
  // Languages
  {
    id: "typescript-tool",
    name: "TypeScript",
    category: "Language",
    description: "Typed superset of JavaScript",
    version: "5.x",
    website: "https://www.typescriptlang.org",
  },
  // Styling
  {
    id: "tailwind-tool",
    name: "Tailwind CSS",
    category: "Styling",
    description: "Utility-first CSS framework",
    version: "4.x",
    website: "https://tailwindcss.com",
  },
  // Libraries
  {
    id: "framer-motion-tool",
    name: "Framer Motion",
    category: "Animation",
    description: "Production-ready motion library for React",
    version: "12.23.26",
    website: "https://www.framer.com/motion",
  },
  {
    id: "react-hook-form-tool",
    name: "React Hook Form",
    category: "Library",
    description: "Performant, flexible forms with easy validation",
    version: "7.69.0",
    website: "https://react-hook-form.com",
  },
  {
    id: "zod-tool",
    name: "Zod",
    category: "Validation",
    description: "TypeScript-first schema validation",
    version: "4.3.4",
    website: "https://zod.dev",
  },
  {
    id: "lucide-tool",
    name: "Lucide React",
    category: "Library",
    description: "Beautiful & consistent icon toolkit",
    version: "0.562.0",
    website: "https://lucide.dev",
  },
  // Build Tools
  {
    id: "eslint-tool",
    name: "ESLint",
    category: "Build Tool",
    description: "Code linting and quality assurance",
    version: "9.x",
    website: "https://eslint.org",
  },
  {
    id: "react-compiler-tool",
    name: "React Compiler",
    category: "Build Tool",
    description: "Automatic React optimization compiler",
    version: "1.0.0",
    website: "https://react.dev/learn/react-compiler",
  },
  // Development
  {
    id: "vercel-tool",
    name: "Vercel",
    category: "Development",
    description: "Platform for frontend deployment and hosting",
    website: "https://vercel.com",
  },
];

