import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesContent from "@/components/services/ServicesContent";

export const metadata: Metadata = {
  title: "Our Services - Growth Vector",
  description:
    "Comprehensive growth solutions: Strategy, Infrastructure, Automation, Performance Marketing, and Strategic Consulting. We build scalable growth systems for ambitious brands.",
  openGraph: {
    title: "Our Services - Growth Vector",
    description:
      "Comprehensive growth solutions: Strategy, Infrastructure, Automation, Performance Marketing, and Strategic Consulting.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-bg-primary text-text-primary antialiased min-h-screen">
      <main className="max-w-7xl mx-auto pt-24 md:pt-32 px-md md:px-xl pb-2xl md:pb-4xl">
        <ServicesHero />
        <ServicesContent />
      </main>
    </div>
  );
}

