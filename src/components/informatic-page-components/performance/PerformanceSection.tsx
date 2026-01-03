"use client";

import { performanceMetrics } from "../data/performanceMetrics";
import PerformanceMetric from "./PerformanceMetric";

export default function PerformanceSection() {
  const metricsByCategory = performanceMetrics.reduce((acc, metric) => {
    if (!acc[metric.category]) {
      acc[metric.category] = [];
    }
    acc[metric.category].push(metric);
    return acc;
  }, {} as Record<string, typeof performanceMetrics>);

  const categories = Object.keys(metricsByCategory);

  return (
    <section
      className="mb-2xl md:mb-4xl"
      aria-label="Performance Metrics"
      id="performance"
    >
      <div className="mb-2xl md:mb-3xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-semibold text-gray-900 mb-md">
          Performance Achievements
        </h2>
        <p className="text-lg text-gray-600 font-montserrat">
          Core Web Vitals and performance metrics achieved through optimization,
          code splitting, and modern web development practices.
        </p>
      </div>

      {categories.map((category) => (
        <div key={category} className="mb-2xl md:mb-3xl">
          <h3 className="text-xl md:text-2xl font-montserrat font-semibold text-gray-800 mb-lg">
            {category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md md:gap-xl">
            {metricsByCategory[category].map((metric, index) => (
              <PerformanceMetric
                key={metric.id}
                metric={metric}
                index={index}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
