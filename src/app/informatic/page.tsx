import type { Metadata } from "next";
import InformaticHero from "@/components/informatic-page-components/hero/InformaticHero";
import SkillsSection from "@/components/informatic-page-components/skills/SkillsSection";
import PerformanceSection from "@/components/informatic-page-components/performance/PerformanceSection";

export const metadata: Metadata = {
  title: "Project Informatics - Growth Vector",
  description:
    "Comprehensive showcase of skills, tools, and performance achievements demonstrated in this project. Built with Next.js, React, TypeScript, and modern web technologies.",
  openGraph: {
    title: "Project Informatics - Growth Vector",
    description:
      "Skills, tools, and performance achievements demonstrated in this project.",
    type: "website",
  },
};

export const dynamic = "force-static";

export default function InformaticPage() {
  return (
    <div className="bg-bg-primary text-text-primary antialiased min-h-screen">
      <main className="max-w-7xl mx-auto pt-24 md:pt-32 px-md md:px-xl pb-2xl md:pb-4xl">
        <InformaticHero />
        <PerformanceSection />
        <SkillsSection />
      </main>
    </div>
  );
}
