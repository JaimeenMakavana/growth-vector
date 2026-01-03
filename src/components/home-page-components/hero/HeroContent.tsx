import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="lg:col-span-7 flex flex-col justify-center">
      {/* Status Badge */}
      <div className="animate-fade-up delay-100 w-fit inline-flex items-center gap-2.5 bg-white/80 backdrop-blur border border-gray-200 text-gray-600 px-md py-1.5 rounded-full text-xs font-montserrat font-semibold mb-8 shadow-sm hover:border-rose-200 transition-colors duration-base">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
        </span>
        ACCEPTING NEW CLIENTS
      </div>

      {/* Headline */}
      <h1 className="animate-fade-up delay-200 text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight mb-8 font-medium">
        <span className="text-gray-900 font-serif">Scaling</span>{" "}
        <span className="text-gray-400 font-sans">Revenue</span>{" "}
        <span className="text-gray-900 font-serif">through</span>{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500 font-sans">
          Intelligent
        </span>{" "}
        <span className="text-gray-900 font-serif">Marketing.</span>
      </h1>

      {/* Description */}
      <p className="animate-fade-up delay-300 text-lg md:text-xl text-gray-500 leading-relaxed mb-10 font-montserrat font-medium">
        We blend creative strategy with{" "}
        <span className="text-gray-900 font-semibold">AI Automation</span> to
        drive predictable growth. The modern agency for ambitious brands.
      </p>

      {/* Call to Action */}
      <div className="animate-fade-up delay-500 flex flex-wrap gap-md items-center">
        <a
          href="#contact"
          className="bg-gray-900 text-background pl-2xl pr-xl py-md rounded-full text-base hover:bg-rose-600 hover:shadow-lg transition-all duration-base flex items-center gap-lg font-montserrat font-medium group/btn"
        >
          Get an Audit
          <div className="bg-white/20 rounded-full p-1 group-hover/btn:bg-white/30 transition-colors duration-base">
            <ArrowRight
              className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform"
              strokeWidth={2}
            />
          </div>
        </a>
        <a
          href="#work"
          className="text-gray-600 px-xl py-md rounded-full text-base hover:text-gray-900 transition-all duration-base font-montserrat font-medium flex items-center gap-sm group/link"
        >
          View Case Studies
          <ChevronDown
            className="w-3 h-3 text-gray-400 group-hover/link:text-gray-900 transition-colors"
            strokeWidth={2}
          />
        </a>
      </div>
    </div>
  );
}
