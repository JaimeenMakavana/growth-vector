"use client";

import { useEffect } from "react";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service in production
    console.error("Services page error:", error);
  }, [error]);

  return (
    <div className="bg-bg-primary text-text-primary antialiased min-h-screen">
      <main className="max-w-7xl mx-auto pt-24 md:pt-32 px-md md:px-xl pb-2xl md:pb-4xl">
        <div className="bg-white rounded-xl md:rounded-2xl border border-red-200 p-xl md:p-2xl shadow-lg text-center">
          <AlertCircle
            className="w-12 h-12 md:w-16 md:h-16 text-red-500 mx-auto mb-md md:mb-lg"
            strokeWidth={1.5}
          />
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-sm md:mb-md font-montserrat">
            Something went wrong
          </h2>
          <p className="text-gray-600 mb-lg md:mb-2xl font-montserrat text-sm md:text-base">
            We encountered an error loading our services. Please try again.
          </p>
          <button
            onClick={reset}
            className="bg-gray-900 text-white px-xl py-md rounded-full hover:bg-rose-600 transition-colors font-montserrat font-medium"
          >
            Try again
          </button>
        </div>
      </main>
    </div>
  );
}
