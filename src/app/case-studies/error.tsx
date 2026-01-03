"use client";

import { useEffect } from "react";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service in production
    console.error("Case studies page error:", error);
  }, [error]);

  return (
    <div className="bg-bg-primary text-text-primary antialiased min-h-screen">
      <main className="max-w-7xl mx-auto pt-24 md:pt-32 px-md md:px-xl pb-2xl md:pb-4xl">
        <div className="bg-white rounded-xl md:rounded-2xl border border-red-200 p-xl md:p-2xl shadow-lg text-center  mx-auto">
          <AlertCircle
            className="w-12 h-12 md:w-16 md:h-16 text-red-500 mx-auto mb-md md:mb-lg"
            strokeWidth={1.5}
          />
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-sm md:mb-md font-montserrat">
            Something went wrong
          </h2>
          <p className="text-gray-600 mb-lg md:mb-2xl font-montserrat text-sm md:text-base">
            We encountered an error loading the case studies. Please try again
            or return to the homepage.
          </p>
          <div className="flex flex-col sm:flex-row gap-md justify-center">
            <button
              onClick={reset}
              className="bg-gray-900 text-white px-xl py-md rounded-full hover:bg-rose-600 transition-colors font-montserrat font-medium"
            >
              Try again
            </button>
            <Link
              href="/"
              className="bg-gray-100 text-gray-900 px-xl py-md rounded-full hover:bg-gray-200 transition-colors font-montserrat font-medium"
            >
              Go to homepage
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
