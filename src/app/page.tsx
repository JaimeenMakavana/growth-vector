import Header from "@/components/header/Header";
import HeroSection from "@/components/hero/HeroSection";
import Carousel from "@/components/carousel/Carousel";
import ClientSuccessStories from "@/components/client-success-story/ClientSuccessStories";
import ApproachSection from "@/components/approach/ApproachSection";
import HelpSection from "@/components/help/HelpSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="bg-[#F9F9F9] text-gray-900 antialiased overflow-x-hidden">
      <Header />

      <main className="max-w-7xl mx-auto pt-32 pr-6 pb-20 pl-6">
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
