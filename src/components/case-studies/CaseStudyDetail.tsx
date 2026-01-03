"use client";

import { CaseStudy } from "./types";
import { TrendingUp, Calendar, Clock, Tag } from "lucide-react";

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  return (
    <article className="bg-white rounded-2xl border border-gray-200 p-2xl md:p-3xl lg:p-4xl shadow-sm">
      {/* Header */}
      <div className="mb-2xl">
        <div className="flex flex-wrap gap-md mb-md">
          <span className="font-montserrat font-medium bg-gray-100 text-gray-700 px-lg py-xs rounded-full text-sm">
            {caseStudy.category}
          </span>
          <span className="font-montserrat font-medium text-gray-600 flex items-center gap-xs text-sm">
            <Tag className="w-4 h-4" />
            {caseStudy.tag}
          </span>
          {caseStudy.duration && (
            <span className="font-montserrat font-medium text-gray-600 flex items-center gap-xs text-sm">
              <Clock className="w-4 h-4" />
              {caseStudy.duration}
            </span>
          )}
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-semibold text-gray-900 mb-md tracking-tight">
          {caseStudy.title}
        </h1>
        {caseStudy.clientName && (
          <p className="text-lg text-gray-600 font-montserrat font-medium">
            {caseStudy.clientName} • {caseStudy.industry}
          </p>
        )}
      </div>

      {/* Key Results */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-2xl mb-2xl border border-rose-100">
        <div className="flex items-center gap-sm mb-md">
          <TrendingUp className="w-5 h-5 text-rose-600" />
          <h2 className="text-lg font-montserrat font-semibold text-gray-900">
            Key Results
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-xl">
          <div>
            <div className="text-3xl md:text-4xl font-montserrat font-bold text-rose-600 mb-xs">
              {caseStudy.results.primary.value}
            </div>
            <div className="text-sm font-montserrat font-medium text-gray-700">
              {caseStudy.results.primary.label}
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-montserrat font-bold text-rose-600 mb-xs">
              {caseStudy.results.secondary.value}
            </div>
            <div className="text-sm font-montserrat font-medium text-gray-700">
              {caseStudy.results.secondary.label}
            </div>
          </div>
        </div>
        {caseStudy.results.additional && caseStudy.results.additional.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-md mt-xl pt-xl border-t border-rose-200">
            {caseStudy.results.additional.map((result, index) => (
              <div key={index}>
                <div className="text-xl font-montserrat font-semibold text-rose-600 mb-xs">
                  {result.value}
                </div>
                <div className="text-sm font-montserrat font-medium text-gray-600">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Description */}
      <div className="mb-2xl">
        <p className="text-lg text-gray-700 font-montserrat leading-relaxed">
          {caseStudy.fullDescription}
        </p>
      </div>

      {/* Challenge */}
      <section className="mb-2xl">
        <h2 className="text-2xl md:text-3xl font-montserrat font-semibold text-gray-900 mb-md">
          The Challenge
        </h2>
        <p className="text-gray-700 font-montserrat leading-relaxed">
          {caseStudy.challenge}
        </p>
      </section>

      {/* Solution */}
      <section className="mb-2xl">
        <h2 className="text-2xl md:text-3xl font-montserrat font-semibold text-gray-900 mb-md">
          Our Solution
        </h2>
        <p className="text-gray-700 font-montserrat leading-relaxed">
          {caseStudy.solution}
        </p>
      </section>

      {/* Metrics */}
      {caseStudy.metrics && caseStudy.metrics.length > 0 && (
        <section className="mb-2xl">
          <h2 className="text-2xl md:text-3xl font-montserrat font-semibold text-gray-900 mb-md">
            Results & Metrics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
            {caseStudy.metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-md border border-gray-100"
              >
                <div className="text-2xl font-montserrat font-bold text-rose-600 mb-xs">
                  {metric.value}
                </div>
                <div className="text-sm font-montserrat font-medium text-gray-700 mb-xs">
                  {metric.label}
                </div>
                {metric.improvement && (
                  <div className="text-xs font-montserrat text-gray-500">
                    {metric.improvement}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Technologies */}
      {caseStudy.technologies && caseStudy.technologies.length > 0 && (
        <section className="mb-2xl">
          <h2 className="text-2xl md:text-3xl font-montserrat font-semibold text-gray-900 mb-md">
            Technologies & Services
          </h2>
          <div className="flex flex-wrap gap-sm">
            {caseStudy.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-lg py-xs rounded-full text-sm font-montserrat font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Published Date */}
      {caseStudy.publishedAt && (
        <div className="pt-2xl border-t border-gray-200 flex items-center gap-xs text-sm text-gray-500 font-montserrat">
          <Calendar className="w-4 h-4" />
          <span>
            Published{" "}
            {new Date(caseStudy.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      )}
    </article>
  );
}

