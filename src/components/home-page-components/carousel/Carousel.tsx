import CarouselItem from "./CarouselItem";

const carouselItems = [
  { name: "Analytics", icon: "analytics", color: "gray-900" },
  { name: "Google Ads", icon: "check", color: "blue-500" },
  { name: "Meta", icon: "facebook", color: "blue-600" },
  { name: "HubSpot", icon: "hubspot", color: "orange-500" },
  { name: "OpenAI", icon: "openai", color: "gray-900" },
  { name: "Shopify", icon: "shopify", color: "green-500" },
];

export default function Carousel() {
  return (
    <div className="w-full py-xl md:py-2xl lg:py-3xl mt-xl md:mt-2xl overflow-hidden marquee-mask relative group">
      <div className="flex w-[200%] animate-infinite-scroll hover:[animation-play-state:paused]">
        {/* Logo Set 1 */}
        <div className="flex items-center justify-around w-1/2 gap-xl md:gap-2xl lg:gap-4xl px-lg md:px-2xl">
          {carouselItems.map((item, index) => (
            <CarouselItem key={`set1-${index}`} {...item} />
          ))}
        </div>
        {/* Logo Set 2 (Duplicate) */}
        <div className="flex items-center justify-around w-1/2 gap-xl md:gap-2xl lg:gap-4xl px-lg md:px-2xl">
          {carouselItems.map((item, index) => (
            <CarouselItem key={`set2-${index}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
