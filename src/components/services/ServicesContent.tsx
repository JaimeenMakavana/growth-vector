"use client";

import { useState } from "react";
import { ServiceCategory } from "./types";
import { getServicesByCategory } from "./data/services";
import ServicesFilter from "./ServicesFilter";
import ServicesGrid from "./ServicesGrid";

export default function ServicesContent() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("all");

  const filteredServices = getServicesByCategory(activeCategory);

  return (
    <>
      <ServicesFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <ServicesGrid services={filteredServices} />
    </>
  );
}

