export default function HeroContent() {
  return (
    <div className="lg:col-span-7 flex flex-col justify-center">
      {/* Status Badge */}
      <div className="animate-fade-up delay-100 w-fit inline-flex items-center gap-2.5 bg-white/80 backdrop-blur border border-gray-200 text-gray-600 px-4 py-1.5 rounded-full text-xs font-montserrat font-semibold mb-8 shadow-sm hover:border-rose-200 transition-colors">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
        </span>
        ACCEPTING NEW CLIENTS
      </div>

      {/* Headline */}
      <h1 className="animate-fade-up delay-200 text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight mb-8 text-gray-900 font-medium">
        Your <span className="italic text-gray-400">Vector</span> <br />
        to{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">
          Exponential
        </span>{" "}
        <br />
        Growth.
      </h1>

      {/* Description */}
      <p className="animate-fade-up delay-300 text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg mb-10 font-montserrat font-medium">
        We accelerate business growth through{" "}
        <span className="text-gray-900 font-semibold">
          Data-Driven Strategies
        </span>{" "}
        and intelligent automation. The growth partner for ambitious
        companies.
      </p>

      {/* Buttons */}
      <div className="animate-fade-up delay-500 flex flex-wrap gap-4 items-center">
        <a
          href="#contact"
          className="bg-gray-900 text-white pl-8 pr-6 py-4 rounded-full text-base hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-600/20 transition-all duration-300 flex items-center gap-3 font-montserrat font-medium group/btn"
        >
          Get an Audit
          <div className="bg-white/20 rounded-full p-1 group-hover/btn:bg-white/30 transition-colors">
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
              className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </a>
        <a
          href="#work"
          className="text-gray-600 px-6 py-4 rounded-full text-base hover:text-gray-900 transition-all duration-300 font-montserrat font-medium flex items-center gap-2 group/link"
        >
          View Case Studies
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
            className="w-3 h-3 text-gray-400 group-hover/link:text-gray-900 transition-colors"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

