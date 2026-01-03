"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Service } from "./types";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = service.icon;

  return (
    <article className="group bg-background rounded-2xl p-2xl shadow-sm border border-gray-100 hover:border-rose-200 hover:shadow-2xl transition-all duration-slow transform hover:-translate-y-1 h-full flex flex-col">
      {/* Icon */}
      <div className="mb-xl inline-block p-md rounded-xl bg-gray-50 group-hover:bg-rose-100 transition-colors duration-slow w-fit">
        <div className="text-gray-900 group-hover:text-rose-600 transition-colors duration-slow">
          <IconComponent className="w-8 h-8" strokeWidth={2} />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl mb-md text-gray-900 font-montserrat font-semibold group-hover:text-rose-600 transition-colors duration-base">
        {service.title}{" "}
        <span className="text-gray-400 group-hover:text-rose-300 transition-colors duration-base">
          {service.subtitle}
        </span>
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-base leading-relaxed mb-xl font-montserrat font-medium flex-grow">
        {service.description}
      </p>

      {/* Features (if available) */}
      {service.features && service.features.length > 0 && (
        <ul className="mb-xl space-y-2">
          {service.features.slice(0, 3).map((feature, index) => (
            <li
              key={index}
              className="text-sm text-gray-600 font-montserrat flex items-start"
            >
              <span className="text-rose-500 mr-2">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA Link */}
      <Link
        href={service.ctaLink}
        className="w-full flex justify-between items-center bg-gray-50 text-gray-900 py-md px-xl rounded-lg text-sm font-bold hover:bg-rose-600 hover:text-background transition-all duration-base font-montserrat group/link mt-auto"
      >
        {service.cta}
        <ArrowUpRight
          className="w-4 h-4 group-hover/link:rotate-45 transition-transform"
          strokeWidth={2}
        />
      </Link>
    </article>
  );
}

