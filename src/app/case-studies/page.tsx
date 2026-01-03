import type { Metadata } from "next";
import { getCaseStudies } from "@/components/case-studies/actions";
import { parseFilters } from "@/components/case-studies/utils";
import CaseStudiesList from "@/components/case-studies/CaseStudiesList";
import CaseStudyFilters from "@/components/case-studies/CaseStudyFilters";
import CaseStudySearch from "@/components/case-studies/CaseStudySearch";

export const metadata: Metadata = {
  title: "Case Studies - Growth Vector",
  description:
    "Explore our detailed case studies showcasing real results from data-driven strategies, AI automation, and performance marketing. See how we've helped businesses achieve exponential growth.",
  openGraph: {
    title: "Case Studies - Growth Vector",
    description:
      "Real results from data-driven strategies, AI automation, and performance marketing.",
    type: "website",
  },
};

interface CaseStudiesPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function CaseStudiesPage({
  searchParams,
}: CaseStudiesPageProps) {
  // Fetch all case studies (server-side)
  const allCaseStudies = await getCaseStudies();

  // Parse filters from URL search params
  const filters = parseFilters(searchParams);

  return (
    <div className="bg-bg-primary text-text-primary antialiased min-h-screen">
      <main className="max-w-7xl mx-auto pt-24 md:pt-32 px-md md:px-xl pb-2xl md:pb-4xl">
        {/* Header */}
        <div className="mb-2xl md:mb-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-semibold text-gray-900 mb-md tracking-tight">
            Case Studies
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-montserrat">
            Real results from data-driven strategies, AI automation, and
            performance marketing. See how we've helped businesses achieve
            exponential growth.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-2xl md:mb-3xl space-y-md">
          <CaseStudySearch initialSearch={filters.search} />
          <CaseStudyFilters
            caseStudies={allCaseStudies}
            initialCategory={filters.category}
            initialTag={filters.tag}
          />
        </div>

        {/* Case Studies List */}
        <CaseStudiesList caseStudies={allCaseStudies} filters={filters} />
      </main>
    </div>
  );
}
