"use client";

import { ServiceCategory } from "./types";

interface ServicesFilterProps {
  activeCategory: ServiceCategory;
  onCategoryChange: (category: ServiceCategory) => void;
}

const categories: { id: ServiceCategory; label: string }[] = [
  { id: "all", label: "All Services" },
  { id: "strategy", label: "Strategy" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "automation", label: "Automation" },
  { id: "marketing", label: "Performance Marketing" },
  { id: "consulting", label: "Consulting" },
];

export default function ServicesFilter({
  activeCategory,
  onCategoryChange,
}: ServicesFilterProps) {
  return (
    <div className="flex justify-center gap-md md:gap-lg mb-2xl md:mb-3xl lg:mb-4xl flex-wrap">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-lg py-2.5 rounded-full text-sm font-montserrat font-medium transition-all duration-base transform hover:-translate-y-1 ${
            activeCategory === category.id
              ? "bg-gray-900 text-background shadow-md hover:bg-rose-600"
              : "bg-background border border-gray-200 text-gray-600 hover:border-rose-500 hover:text-rose-600"
          }`}
          aria-pressed={activeCategory === category.id}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}

