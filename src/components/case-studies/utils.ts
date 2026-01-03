import { CaseStudy, CaseStudyFilters } from "./types";

/**
 * Filter case studies based on provided filters
 */
export function filterCaseStudies(
  caseStudies: CaseStudy[],
  filters: CaseStudyFilters
): CaseStudy[] {
  let filtered = [...caseStudies];

  // Filter by category
  if (filters.category && filters.category !== "all") {
    filtered = filtered.filter(
      (study) => study.category.toLowerCase() === filters.category?.toLowerCase()
    );
  }

  // Filter by tag
  if (filters.tag && filters.tag !== "all") {
    filtered = filtered.filter(
      (study) => study.tag.toLowerCase() === filters.tag?.toLowerCase()
    );
  }

  // Filter by search query
  if (filters.search && filters.search.trim()) {
    const searchLower = filters.search.toLowerCase().trim();
    filtered = filtered.filter(
      (study) =>
        study.title.toLowerCase().includes(searchLower) ||
        study.description.toLowerCase().includes(searchLower) ||
        study.fullDescription.toLowerCase().includes(searchLower) ||
        study.industry.toLowerCase().includes(searchLower) ||
        study.challenge.toLowerCase().includes(searchLower) ||
        study.solution.toLowerCase().includes(searchLower)
    );
  }

  return filtered;
}

/**
 * Get unique categories from case studies
 */
export function getUniqueCategories(caseStudies: CaseStudy[]): string[] {
  const categories = new Set(caseStudies.map((study) => study.category));
  return Array.from(categories).sort();
}

/**
 * Get unique tags from case studies
 */
export function getUniqueTags(caseStudies: CaseStudy[]): string[] {
  const tags = new Set(caseStudies.map((study) => study.tag));
  return Array.from(tags).sort();
}

/**
 * Get case study by ID
 */
export function getCaseStudyById(
  caseStudies: CaseStudy[],
  id: string
): CaseStudy | undefined {
  return caseStudies.find((study) => study.id === id);
}

/**
 * Parse and validate URL search params
 */
export function parseFilters(searchParams: {
  [key: string]: string | string[] | undefined;
}): CaseStudyFilters {
  const filters: CaseStudyFilters = {};

  if (searchParams.category && typeof searchParams.category === "string") {
    filters.category = searchParams.category;
  }

  if (searchParams.tag && typeof searchParams.tag === "string") {
    filters.tag = searchParams.tag;
  }

  if (searchParams.search && typeof searchParams.search === "string") {
    filters.search = searchParams.search;
  }

  return filters;
}

