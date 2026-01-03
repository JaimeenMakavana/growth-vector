import Link from "next/link";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-bg-primary text-text-primary antialiased min-h-screen">
      <main className="max-w-4xl mx-auto pt-24 md:pt-32 px-md md:px-xl pb-2xl md:pb-4xl">
        <div className="text-center py-4xl md:py-5xl">
          <FileQuestion className="w-16 h-16 md:w-20 md:h-20 text-gray-300 mx-auto mb-md" />
          <h1 className="text-3xl md:text-4xl font-montserrat font-semibold text-gray-900 mb-sm">
            Case Study Not Found
          </h1>
          <p className="text-gray-600 font-montserrat mb-2xl max-w-md mx-auto">
            The case study you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-sm bg-gray-900 text-white px-xl py-md rounded-full hover:bg-rose-600 transition-colors font-montserrat font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to case studies</span>
          </Link>
        </div>
      </main>
    </div>
  );
}

