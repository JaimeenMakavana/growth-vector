"use client";

import { Loader2 } from "lucide-react";

type SubmitButtonProps = {
  isSubmitting: boolean;
  disabled?: boolean;
};

export default function SubmitButton({ isSubmitting, disabled }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled || isSubmitting}
      className={`w-full md:w-auto px-2xl py-md bg-gray-900 text-white rounded-full font-montserrat font-semibold transition-all duration-base flex items-center justify-center gap-sm ${
        disabled || isSubmitting
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-rose-600 hover:shadow-lg active:scale-95"
      }`}
    >
      {isSubmitting ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" strokeWidth={2} />
          <span>Submitting...</span>
        </>
      ) : (
        <span>Submit Request</span>
      )}
    </button>
  );
}

