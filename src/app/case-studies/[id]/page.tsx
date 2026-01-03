import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getCaseStudy } from "@/components/case-studies/actions";
import CaseStudyDetail from "@/components/case-studies/CaseStudyDetail";

interface CaseStudyDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: CaseStudyDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const caseStudy = await getCaseStudy(id);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found - Growth Vector",
    };
  }

  return {
    title: `${caseStudy.title} - Case Study | Growth Vector`,
    description: caseStudy.description,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.description,
      type: "article",
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: CaseStudyDetailPageProps) {
  const { id } = await params;
  const caseStudy = await getCaseStudy(id);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="bg-bg-primary text-text-primary antialiased min-h-screen">
      <main className="max-w-7xl mx-auto pt-24 md:pt-32 px-md md:px-xl pb-2xl md:pb-4xl">
        {/* Back Button */}
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-sm text-gray-600 hover:text-rose-600 font-montserrat font-medium mb-2xl transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to case studies</span>
        </Link>

        {/* Case Study Detail */}
        <CaseStudyDetail caseStudy={caseStudy} />
      </main>
    </div>
  );
}

