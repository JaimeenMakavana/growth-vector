"use client";

import { useMemo } from "react";
import { CaseStudyListProps } from "./types";
import { filterCaseStudies } from "./utils";
import CaseStudyCard from "./CaseStudyCard";
import EmptyState from "./EmptyState";

export default function CaseStudiesList({
  caseStudies,
  filters,
}: CaseStudyListProps) {
  // Filter case studies based on URL params
  const filteredCaseStudies = useMemo(() => {
    if (!filters || Object.keys(filters).length === 0) {
      return caseStudies;
    }
    return filterCaseStudies(caseStudies, filters);
  }, [caseStudies, filters]);

  // Show empty state if no results
  if (filteredCaseStudies.length === 0) {
    return <EmptyState filters={filters} />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
      {filteredCaseStudies.map((caseStudy) => (
        <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
      ))}
    </div>
  );
}

