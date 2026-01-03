import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function HeroSection() {
  return (
    <div className="bg-background rounded-xl md:rounded-2xl p-xl md:p-2xl lg:p-3xl xl:p-4xl shadow-sm border border-gray-100 relative overflow-hidden group transition-shadow duration-slower">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl md:gap-2xl lg:gap-3xl items-center relative z-10">
        <HeroContent />
        <HeroImage />
      </div>
    </div>
  );
}
