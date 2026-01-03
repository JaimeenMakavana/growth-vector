import { Users } from "lucide-react";

export default function ApproachContent() {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl mb-2xl md:mb-3xl tracking-tight text-gray-900 font-montserrat font-semibold">
        The Growth Vector Approach
      </h2>
      <div className="space-y-xl md:space-y-2xl text-lg md:text-xl text-gray-600 font-light leading-relaxed">
        <p className="font-montserrat font-medium hover:text-gray-900 transition-colors duration-base">
          We are <span className="text-gray-900 font-bold">Growth Vector</span>,
          your strategic partner for exponential growth. We don&apos;t just
          execute campaigns; we build{" "}
          <span className="text-gray-900 border-b-2 border-rose-200 hover:border-rose-500 transition-colors duration-base font-montserrat font-medium">
            Growth Systems
          </span>
          .
        </p>
        <p className="font-montserrat font-medium hover:text-gray-900 transition-colors duration-base">
          By combining data science, strategic thinking, and cutting-edge
          automation, we create scalable growth engines. We specialize in{" "}
          <span className="text-rose-600 font-semibold">
            Performance Marketing
          </span>{" "}
          and growth infrastructure.
        </p>
      </div>
      <button className="group mt-2xl md:mt-3xl bg-background border border-gray-200 text-gray-900 px-lg md:px-xl py-md md:py-lg rounded-full text-sm md:text-base hover:border-rose-600 hover:text-rose-600 transition-all duration-base flex items-center gap-sm font-montserrat font-medium shadow-sm hover:shadow-lg">
        Meet the Team
        <Users
          className="w-4 h-4 group-hover:scale-125 transition-transform"
          strokeWidth={2}
        />
      </button>
    </div>
  );
}
