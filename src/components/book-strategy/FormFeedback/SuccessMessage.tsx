"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

type SuccessMessageProps = {
  id?: string;
};

export default function SuccessMessage({ id }: SuccessMessageProps) {
  return (
    <div
      id={id}
      className="bg-white rounded-xl md:rounded-2xl border border-green-200 p-xl md:p-2xl shadow-lg text-center"
    >
      <CheckCircle2 className="w-12 h-12 md:w-16 md:h-16 text-green-500 mx-auto mb-md md:mb-lg" strokeWidth={1.5} />
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-sm md:mb-md font-montserrat">
        Request Submitted Successfully!
      </h2>
      <p className="text-gray-600 font-montserrat mb-lg md:mb-xl text-sm md:text-base">
        Thank you for your interest. We&apos;ve received your request and will get back to you
        within 24 hours to schedule your strategy session.
      </p>
      <Link
        href="/"
        className="inline-block bg-gray-900 text-white px-xl py-md rounded-full hover:bg-rose-600 transition-colors font-montserrat font-medium"
      >
        Return to Home
      </Link>
    </div>
  );
}

