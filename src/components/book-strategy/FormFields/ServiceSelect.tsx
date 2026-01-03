"use client";

import { forwardRef } from "react";
import FieldError from "../FormFeedback/FieldError";

type ServiceSelectProps = {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const services = [
  { value: "", label: "Select a service type..." },
  { value: "growth-strategy", label: "Growth Strategy" },
  { value: "growth-infrastructure", label: "Growth Infrastructure" },
  { value: "growth-automation", label: "Growth Automation" },
  { value: "performance-marketing", label: "Performance Marketing" },
  { value: "consulting", label: "Strategic Consulting" },
  { value: "other", label: "Other" },
];

const ServiceSelect = forwardRef<HTMLSelectElement, ServiceSelectProps>(
  ({ label, name, error, required = false, ...props }, ref) => {
    return (
      <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-900 mb-2 font-montserrat">
          {label}
          {required && <span className="text-rose-600 ml-1">*</span>}
        </label>
        <select
          id={name}
          name={name}
          ref={ref}
          required={required}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${name}-error` : undefined}
          className={`w-full px-lg py-md border rounded-lg font-montserrat transition-colors duration-base bg-white ${
            error
              ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
          } focus:outline-none cursor-pointer`}
          {...props}
        >
          {services.map((service) => (
            <option key={service.value} value={service.value}>
              {service.label}
            </option>
          ))}
        </select>
        {error && <FieldError id={`${name}-error`} message={error} />}
      </div>
    );
  }
);

ServiceSelect.displayName = "ServiceSelect";

export default ServiceSelect;
