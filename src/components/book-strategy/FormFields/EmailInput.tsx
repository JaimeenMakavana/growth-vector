"use client";

import { forwardRef } from "react";
import FieldError from "../FormFeedback/FieldError";

type EmailInputProps = {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
  (
    {
      label,
      name,
      error,
      required = false,
      placeholder = "you@company.com",
      autoComplete = "email",
      ...props
    },
    ref
  ) => {
    return (
      <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-900 mb-2 font-montserrat">
          {label}
          {required && <span className="text-rose-600 ml-1">*</span>}
        </label>
        <input
          type="email"
          id={name}
          name={name}
          ref={ref}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${name}-error` : undefined}
          className={`w-full px-lg py-md border rounded-lg font-montserrat transition-colors duration-base ${
            error
              ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
          } focus:outline-none`}
          {...props}
        />
        {error && <FieldError id={`${name}-error`} message={error} />}
      </div>
    );
  }
);

EmailInput.displayName = "EmailInput";

export default EmailInput;
