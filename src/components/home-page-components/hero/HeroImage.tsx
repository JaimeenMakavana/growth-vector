import Image from "next/image";
import { TrendingUp, Cpu } from "lucide-react";

export default function HeroImage() {
  return (
    <div className="lg:col-span-5 relative h-[500px] lg:h-[600px] w-full animate-slide-in delay-300">
      {/* Abstract decorative shape behind */}
      <div className="absolute top-2xl right-2xl w-full h-full bg-gray-100 rounded-xl -rotate-3 z-0"></div>
      <div className="relative h-full w-full bg-background rounded-xl overflow-hidden shadow-2xl border border-gray-100 z-10 group/image">
        <Image
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Team Strategy"
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-slower hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        {/* Floating Info Card */}
        <div className="absolute bottom-xl left-xl right-xl bg-white/95 backdrop-blur-md p-lg rounded-xl shadow-sm border border-gray-100/50">
          <div className="flex justify-between items-center mb-lg">
            <span className="text-xs font-bold font-montserrat tracking-wide text-gray-400 uppercase">
              Average Results
            </span>
            <TrendingUp className="w-4 h-4 text-rose-500" strokeWidth={2} />
          </div>
          <div className="flex items-center gap-lg">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 font-montserrat">
                +240% ROI Increase
              </p>
              <p className="text-xs text-gray-500 font-montserrat">
                Across client portfolios Q1
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
