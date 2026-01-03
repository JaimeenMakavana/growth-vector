interface StatCardProps {
  value: string;
  label: string;
  description: string;
}

export default function StatCard({ value, label, description }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-xl md:p-2xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow">
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-rose-600 mb-sm md:mb-md font-instrument-serif">
        {value}
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-sm md:mb-md font-montserrat">
        {label}
      </h3>
      <p className="text-xs md:text-sm text-gray-600 font-montserrat">
        {description}
      </p>
    </div>
  );
}

