import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="lg:col-span-5 relative h-[500px] lg:h-[600px] w-full animate-slide-in delay-300">
      {/* Abstract decorative shape behind */}
      <div className="absolute top-10 right-10 w-full h-full bg-gray-100 rounded-[2rem] -rotate-3 z-0"></div>
      <div className="relative h-full w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 z-10 group/image">
        <Image
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Team Strategy"
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        {/* Floating Info Card */}
        <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-sm border border-gray-100/50">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold font-montserrat tracking-wide text-gray-400 uppercase">
              Average Results
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-rose-500"
            >
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
              <polyline points="16 7 22 7 22 13"></polyline>
            </svg>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-900"
              >
                <path d="M12 20v2"></path>
                <path d="M12 2v2"></path>
                <path d="M17 20v2"></path>
                <path d="M17 2v2"></path>
                <path d="M2 12h2"></path>
                <path d="M2 17h2"></path>
                <path d="M2 7h2"></path>
                <path d="M20 12h2"></path>
                <path d="M20 17h2"></path>
                <path d="M20 7h2"></path>
                <path d="M7 20v2"></path>
                <path d="M7 2v2"></path>
                <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                <rect x="8" y="8" width="8" height="8" rx="1"></rect>
              </svg>
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

