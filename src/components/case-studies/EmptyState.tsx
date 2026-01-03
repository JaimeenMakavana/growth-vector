"use client";

import { useRouter } from "next/navigation";
import { SearchX, FilterX } from "lucide-react";
import { CaseStudyFilters } from "./types";

interface EmptyStateProps {
  filters?: CaseStudyFilters;
}

export default function EmptyState({ filters }: EmptyStateProps) {
  const router = useRouter();

  const hasActiveFilters = filters && Object.keys(filters).length > 0;

  return (
    <div className="text-center py-4xl md:py-5xl">
      {hasActiveFilters ? (
        <>
          <FilterX className="w-16 h-16 md:w-20 md:h-20 text-gray-300 mx-auto mb-md" />
          <h3 className="text-2xl md:text-3xl font-montserrat font-semibold text-gray-900 mb-sm">
            No case studies found
          </h3>
          <p className="text-gray-600 font-montserrat mb-2xl max-w-md mx-auto">
            Try adjusting your filters or search query to see more results.
          </p>
          <button
            onClick={() => router.push("/case-studies")}
            className="bg-gray-900 text-white px-xl py-md rounded-full hover:bg-rose-600 transition-colors font-montserrat font-medium"
          >
            Clear all filters
          </button>
        </>
      ) : (
        <>
          <SearchX className="w-16 h-16 md:w-20 md:h-20 text-gray-300 mx-auto mb-md" />
          <h3 className="text-2xl md:text-3xl font-montserrat font-semibold text-gray-900 mb-sm">
            No case studies available
          </h3>
          <p className="text-gray-600 font-montserrat mb-2xl max-w-md mx-auto">
            Check back soon for new case studies showcasing our work.
          </p>
        </>
      )}
    </div>
  );
}

