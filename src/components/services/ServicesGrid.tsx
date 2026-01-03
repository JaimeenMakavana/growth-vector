import { Service } from "./types";
import ServiceCard from "./ServiceCard";

interface ServicesGridProps {
  services: Service[];
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  if (services.length === 0) {
    return (
      <div className="text-center py-4xl">
        <p className="text-gray-500 text-lg font-montserrat mb-lg">
          No services found in this category.
        </p>
        <a
          href="/book-strategy"
          className="inline-block bg-gray-900 text-white px-xl py-md rounded-full hover:bg-rose-600 transition-colors font-montserrat font-medium"
        >
          Contact Us
        </a>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-xl md:gap-2xl">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}

