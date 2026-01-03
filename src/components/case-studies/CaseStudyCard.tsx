"use client";

import Link from "next/link";
import { TrendingUp, ArrowRight } from "lucide-react";
import { CaseStudy } from "./types";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${caseStudy.id}`}
      className="group block w-full bg-background hover:bg-gradient-to-br hover:from-background hover:to-rose-50 rounded-2xl border border-gray-100 hover:border-rose-200 shadow-sm hover:shadow-2xl transition-all duration-slow cursor-pointer transform hover:-translate-y-2 p-2xl md:p-3xl"
    >
      <div className="flex justify-between items-start text-sm md:text-base text-gray-500 mb-16">
        <span className="font-montserrat font-medium bg-gray-100 group-hover:bg-rose-100 group-hover:text-rose-600 px-lg py-xs rounded-full transition-colors duration-base">
          {caseStudy.category}
        </span>
        <span className="font-montserrat font-medium flex items-center gap-xs group-hover:text-rose-600 transition-colors duration-base">
          {caseStudy.tag}
        </span>
      </div>

      <div className="flex justify-between items-end">
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl text-gray-900 leading-tight mb-xl font-montserrat font-semibold group-hover:text-rose-600 transition-colors duration-base">
            {caseStudy.title}
          </h3>
          <p className="text-gray-600 mb-2xl font-montserrat font-medium leading-relaxed line-clamp-3">
            {caseStudy.description}
          </p>
          <div className="flex gap-3xl text-gray-700 mb-md">
            <div className="group-hover:translate-x-2 transition-transform duration-base">
              <div className="text-lg font-montserrat font-semibold text-rose-500">
                {caseStudy.results.primary.value}
              </div>
              <div className="text-sm text-gray-500 mt-xs font-montserrat font-medium">
                {caseStudy.results.primary.label}
              </div>
            </div>
            <div className="group-hover:translate-x-2 transition-transform duration-base delay-100">
              <div className="text-lg font-montserrat font-semibold text-rose-500">
                {caseStudy.results.secondary.value}
              </div>
              <div className="text-sm text-gray-500 mt-xs font-montserrat font-medium">
                {caseStudy.results.secondary.label}
              </div>
            </div>
          </div>
          <div className="flex items-center text-rose-600 font-montserrat font-medium text-sm group-hover:gap-md transition-all duration-base">
            <span>Read case study</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
        <div className="bg-gray-50 p-md rounded-full group-hover:bg-rose-600 group-hover:text-background group-hover:scale-110 group-hover:rotate-12 transition-all duration-base shadow-sm ml-md">
          <TrendingUp className="w-6 h-6" strokeWidth={2} />
        </div>
      </div>
    </Link>
  );
}

