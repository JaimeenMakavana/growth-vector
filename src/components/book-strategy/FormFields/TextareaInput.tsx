"use client";

import { forwardRef } from "react";
import FieldError from "../FormFeedback/FieldError";

type TextareaInputProps = {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  maxLength?: number;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextareaInput = forwardRef<HTMLTextAreaElement, TextareaInputProps>(
  (
    {
      label,
      name,
      error,
      required = false,
      placeholder,
      rows = 4,
      maxLength,
      ...props
    },
    ref
  ) => {
    // Get current value for character count
    const value = (props.value as string) || "";

    return (
      <div>
        <div className="flex items-center justify-between mb-2">
          <label htmlFor={name} className="block text-sm font-medium text-gray-900 font-montserrat">
            {label}
            {required && <span className="text-rose-600 ml-1">*</span>}
          </label>
          {maxLength && (
            <span className="text-xs text-gray-500 font-montserrat">
              {value.length}/{maxLength}
            </span>
          )}
        </div>
        <textarea
          id={name}
          name={name}
          ref={ref}
          placeholder={placeholder}
          required={required}
          rows={rows}
          maxLength={maxLength}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${name}-error` : undefined}
          className={`w-full px-lg py-md border rounded-lg font-montserrat transition-colors duration-base resize-y ${
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

TextareaInput.displayName = "TextareaInput";

export default TextareaInput;
