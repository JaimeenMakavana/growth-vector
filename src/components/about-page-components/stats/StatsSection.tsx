import StatCard from "./StatCard";

const stats = [
  {
    value: "500+",
    label: "Businesses Helped",
    description: "Companies across various industries",
  },
  {
    value: "300%",
    label: "Average Growth",
    description: "Typical client revenue increase",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    description: "Happy clients who stay with us",
  },
  {
    value: "50+",
    label: "Team Members",
    description: "Experts in growth and marketing",
  },
];

export default function StatsSection() {
  return (
    <section
      className="mb-2xl md:mb-4xl py-2xl md:py-3xl"
      aria-label="Company Statistics"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-md md:gap-xl">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            label={stat.label}
            description={stat.description}
          />
        ))}
      </div>
    </section>
  );
}
