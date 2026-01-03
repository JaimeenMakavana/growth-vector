"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { CaseStudy } from "./types";
import { getUniqueCategories, getUniqueTags } from "./utils";

interface CaseStudyFiltersProps {
  caseStudies: CaseStudy[];
  initialCategory?: string;
  initialTag?: string;
}

export default function CaseStudyFilters({
  caseStudies,
  initialCategory,
  initialTag,
}: CaseStudyFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const categories = getUniqueCategories(caseStudies);
  const tags = getUniqueTags(caseStudies);

  const updateFilter = (key: "category" | "tag", value: string) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());
      
      if (value && value !== "all") {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      
      // Reset search when changing filters
      params.delete("search");
      params.delete("page");
      
      const newUrl = params.toString()
        ? `/case-studies?${params.toString()}`
        : "/case-studies";
      
      router.push(newUrl, { scroll: false });
    });
  };

  return (
    <div className="flex flex-wrap gap-md justify-center">
      {/* Category Filter */}
      <div className="flex items-center gap-sm">
        <label
          htmlFor="category-filter"
          className="text-sm font-montserrat font-medium text-gray-700 sr-only md:not-sr-only"
        >
          Category:
        </label>
        <select
          id="category-filter"
          value={initialCategory || "all"}
          onChange={(e) => updateFilter("category", e.target.value)}
          disabled={isPending}
          className="px-lg py-sm border border-gray-200 rounded-full bg-white text-sm font-montserrat font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent cursor-pointer hover:border-rose-300 transition-colors"
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Tag Filter */}
      <div className="flex items-center gap-sm">
        <label
          htmlFor="tag-filter"
          className="text-sm font-montserrat font-medium text-gray-700 sr-only md:not-sr-only"
        >
          Service:
        </label>
        <select
          id="tag-filter"
          value={initialTag || "all"}
          onChange={(e) => updateFilter("tag", e.target.value)}
          disabled={isPending}
          className="px-lg py-sm border border-gray-200 rounded-full bg-white text-sm font-montserrat font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent cursor-pointer hover:border-rose-300 transition-colors"
        >
          <option value="all">All Services</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* Clear Filters Button */}
      {(initialCategory || initialTag) && (
        <button
          onClick={() => {
            startTransition(() => {
              router.push("/case-studies", { scroll: false });
            });
          }}
          disabled={isPending}
          className="px-lg py-sm text-sm font-montserrat font-medium text-gray-600 hover:text-gray-900 transition-colors"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}

