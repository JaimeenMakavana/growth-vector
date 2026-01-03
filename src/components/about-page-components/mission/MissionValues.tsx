import { Target, Zap, Users, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We measure success by the tangible growth we deliver to our clients, not just our efforts.",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description:
      "We stay ahead of the curve, leveraging the latest technologies and strategies to drive exceptional outcomes.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Your success is our success. We build long-term partnerships based on trust, transparency, and shared goals.",
  },
  {
    icon: TrendingUp,
    title: "Data-Powered",
    description:
      "Every decision is backed by data. We turn insights into action and metrics into milestones.",
  },
];

export default function MissionValues() {
  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-semibold mb-xl md:mb-2xl text-center font-instrument-serif text-gray-900">
        Our Core Values
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-xl md:gap-2xl">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <div
              key={value.title}
              className="bg-white rounded-xl p-xl md:p-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="flex justify-center mb-md">
                <Icon
                  className="w-10 h-10 md:w-12 md:h-12 text-rose-600"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
              <h4 className="text-xl md:text-2xl font-semibold mb-sm md:mb-md font-montserrat text-gray-900">
                {value.title}
              </h4>
              <p className="text-sm md:text-base text-gray-600 font-montserrat leading-relaxed">
                {value.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

