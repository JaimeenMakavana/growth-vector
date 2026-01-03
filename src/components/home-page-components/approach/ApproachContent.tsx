export default function ApproachContent() {
  return (
    <div>
      <h2 className="text-4xl md:text-5xl mb-12 tracking-tight text-gray-900 font-montserrat font-semibold">
        The Growth Vector Approach
      </h2>
      <div className="space-y-8 text-xl text-gray-600 font-light leading-relaxed">
        <p className="font-montserrat font-medium hover:text-gray-900 transition-colors">
          We are{" "}
          <span className="text-gray-900 font-bold">Growth Vector</span>,
          your strategic partner for exponential growth. We don&apos;t
          just execute campaigns; we build{" "}
          <span className="text-gray-900 border-b-2 border-rose-200 hover:border-rose-500 transition-colors font-montserrat font-medium">
            Growth Systems
          </span>
          .
        </p>
        <p className="font-montserrat font-medium hover:text-gray-900 transition-colors">
          By combining data science, strategic thinking, and cutting-edge
          automation, we create scalable growth engines. We specialize in{" "}
          <span className="text-rose-600 font-semibold">
            Performance Marketing
          </span>{" "}
          and growth infrastructure.
        </p>
      </div>
      <button className="group mt-12 bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-full text-base hover:border-rose-600 hover:text-rose-600 transition-all duration-300 flex items-center gap-2 font-montserrat font-medium shadow-sm hover:shadow-lg hover:shadow-rose-500/20">
        Meet the Team
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 group-hover:scale-125 transition-transform"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      </button>
    </div>
  );
}

