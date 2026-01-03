"use client";

type FieldErrorProps = {
  id?: string;
  message: string;
};

export default function FieldError({ id, message }: FieldErrorProps) {
  return (
    <p
      id={id}
      className="mt-2 text-sm text-red-600 font-montserrat animate-fade-up"
      role="alert"
      aria-live="polite"
    >
      {message}
    </p>
  );
}

