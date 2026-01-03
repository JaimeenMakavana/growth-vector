import HeroSection from "@/components/home-page-components/hero/HeroSection";
import Carousel from "@/components/home-page-components/carousel/Carousel";
import ClientSuccessStories from "@/components/home-page-components/client-success-story/ClientSuccessStories";
import ApproachSection from "@/components/home-page-components/approach/ApproachSection";
import HelpSection from "@/components/home-page-components/help/HelpSection";
import ContactSection from "@/components/home-page-components/contact/ContactSection";
import Footer from "@/components/home-page-components/footer/Footer";

export default function Home() {
  return (
    <div className="bg-bg-primary text-text-primary antialiased overflow-x-hidden">
      <main className="max-w-7xl mx-auto pt-32 pr-xl pb-20 pl-xl">
        <HeroSection />
        <Carousel />
        <ClientSuccessStories />
        <ApproachSection />
        <HelpSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
