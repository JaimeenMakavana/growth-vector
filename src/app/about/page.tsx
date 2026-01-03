import type { Metadata } from "next";
import AboutHero from "@/components/about-page-components/hero/AboutHero";
import MissionSection from "@/components/about-page-components/mission/MissionSection";
import StorySection from "@/components/about-page-components/story/StorySection";
import TeamSection from "@/components/about-page-components/team/TeamSection";
import StatsSection from "@/components/about-page-components/stats/StatsSection";
import AboutCTA from "@/components/about-page-components/cta/AboutCTA";

export const metadata: Metadata = {
  title: "About Us - Growth Vector",
  description:
    "Learn about Growth Vector's mission, team, and journey. We accelerate business growth through data-driven strategies, AI automation, and performance marketing.",
  openGraph: {
    title: "About Us - Growth Vector",
    description:
      "Learn about Growth Vector's mission, team, and journey. We accelerate business growth through data-driven strategies.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-bg-primary text-text-primary antialiased min-h-screen">
      <main className="max-w-7xl mx-auto pt-24 md:pt-32 px-md md:px-xl pb-2xl md:pb-4xl">
        <AboutHero />
        <MissionSection />
        <StorySection />
        <StatsSection />
        <TeamSection />
        <AboutCTA />
      </main>
    </div>
  );
}
