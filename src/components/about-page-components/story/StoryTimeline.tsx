import { Rocket, Award, TrendingUp, Globe } from "lucide-react";

const milestones = [
  {
    year: "2020",
    icon: Rocket,
    title: "The Beginning",
    description:
      "Growth Vector was founded with a simple yet powerful vision: to democratize access to enterprise-level growth strategies for businesses of all sizes.",
  },
  {
    year: "2021",
    icon: TrendingUp,
    title: "Rapid Expansion",
    description:
      "We helped over 50 companies achieve record-breaking growth, establishing ourselves as a leader in data-driven marketing automation.",
  },
  {
    year: "2022",
    icon: Award,
    title: "Industry Recognition",
    description:
      "Received recognition as a top growth agency, with our innovative AI-powered strategies featured in leading industry publications.",
  },
  {
    year: "2024",
    icon: Globe,
    title: "Global Reach",
    description:
      "Expanded our services globally, now helping businesses across multiple continents achieve sustainable, scalable growth.",
  },
];

export default function StoryTimeline() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="relative">
        {/* Timeline Line - Centered */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>

        <div className="space-y-2xl md:space-y-3xl">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={milestone.year}
                className="relative flex flex-col md:grid md:grid-cols-2 items-start gap-xl md:gap-2xl"
              >
                {/* Icon - Centered on timeline */}
                <div className="shrink-0 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-full border-4 border-rose-600 shadow-lg relative z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                  <Icon
                    className="w-8 h-8 md:w-10 md:h-10 text-rose-600"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                {/* Content - Left side (even index) */}
                {isEven && (
                  <div className="flex-1 bg-white rounded-xl p-xl md:p-2xl border border-gray-200 shadow-sm md:pr-3xl">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-sm md:gap-md mb-md">
                      <span className="text-2xl md:text-3xl font-bold text-gray-900 font-instrument-serif">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 font-montserrat">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 font-montserrat leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                )}

                {/* Spacer for odd items */}
                {!isEven && <div className="hidden md:block"></div>}

                {/* Content - Right side (odd index) */}
                {!isEven && (
                  <div className="flex-1 bg-white rounded-xl p-xl md:p-2xl border border-gray-200 shadow-sm md:pl-3xl">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-sm md:gap-md mb-md">
                      <span className="text-2xl md:text-3xl font-bold text-gray-900 font-instrument-serif">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 font-montserrat">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-base md:text-lg text-gray-700 font-montserrat leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
