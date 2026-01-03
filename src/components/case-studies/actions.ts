"use server";

import { caseStudiesData } from "./data";
import { CaseStudy, CaseStudyFilters } from "./types";
import { filterCaseStudies, getCaseStudyById } from "./utils";

/**
 * Server action to fetch all case studies
 * In production, this would fetch from a database or CMS
 */
export async function getCaseStudies(): Promise<CaseStudy[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  
  // In production, this would be:
  // const response = await fetch(`${API_URL}/case-studies`);
  // return response.json();
  
  return caseStudiesData;
}

/**
 * Server action to fetch filtered case studies
 */
export async function getFilteredCaseStudies(
  filters: CaseStudyFilters
): Promise<CaseStudy[]> {
  const allCaseStudies = await getCaseStudies();
  return filterCaseStudies(allCaseStudies, filters);
}

/**
 * Server action to fetch a single case study by ID
 */
export async function getCaseStudy(id: string): Promise<CaseStudy | null> {
  const allCaseStudies = await getCaseStudies();
  const caseStudy = getCaseStudyById(allCaseStudies, id);
  
  if (!caseStudy) {
    return null;
  }
  
  return caseStudy;
}

