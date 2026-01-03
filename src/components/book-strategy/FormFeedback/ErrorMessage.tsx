"use client";

import { X, AlertCircle } from "lucide-react";

type ErrorMessageProps = {
  message: string;
  onDismiss?: () => void;
};

export default function ErrorMessage({ message, onDismiss }: ErrorMessageProps) {
  return (
    <div
      className="bg-red-50 border border-red-200 rounded-lg p-md md:p-lg mb-xl md:mb-2xl flex items-start gap-sm md:gap-md"
      role="alert"
      aria-live="polite"
    >
      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
      <p className="flex-1 text-red-800 font-montserrat text-sm">{message}</p>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="flex-shrink-0 text-red-600 hover:text-red-800 transition-colors"
          aria-label="Dismiss error message"
        >
          <X className="w-5 h-5" strokeWidth={2} />
        </button>
      )}
    </div>
  );
}

