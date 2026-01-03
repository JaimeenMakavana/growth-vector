"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { strategyFormSchema, type StrategyFormData } from "./schema";
import { submitStrategyForm } from "./actions";
import TextInput from "./FormFields/TextInput";
import EmailInput from "./FormFields/EmailInput";
import TextareaInput from "./FormFields/TextareaInput";
import ServiceSelect from "./FormFields/ServiceSelect";
import SubmitButton from "./FormActions/SubmitButton";
import SuccessMessage from "./FormFeedback/SuccessMessage";
import ErrorMessage from "./FormFeedback/ErrorMessage";

export default function StrategyForm() {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    setError,
    reset,
    setFocus,
  } = useForm<StrategyFormData>({
    resolver: zodResolver(strategyFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      serviceType: "",
      message: "",
    },
    mode: "onBlur", // Validate on blur
  });

  const onSubmit = async (data: StrategyFormData) => {
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      // Convert StrategyFormData to FormData type for server action
      const result = await submitStrategyForm({
        name: data.name,
        email: data.email,
        company: data.company,
        serviceType: data.serviceType,
        message: data.message,
      });

      if (result.success) {
        setSubmitSuccess(true);
        reset();
        // Scroll to success message
        setTimeout(() => {
          const successElement = document.getElementById("success-message");
          successElement?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }, 100);
      } else {
        if (result.errors) {
          // Set field-level errors from server
          Object.entries(result.errors).forEach(([field, message]) => {
            setError(field as keyof StrategyFormData, {
              type: "server",
              message,
            });
          });
          // Focus first error field
          const firstErrorField = Object.keys(
            result.errors
          )[0] as keyof StrategyFormData;
          setFocus(firstErrorField);
        } else {
          setSubmitError(
            result.message || "An error occurred. Please try again."
          );
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(
        "Network error. Please check your connection and try again."
      );
    }
  };

  // Focus first error field on validation errors
  useEffect(() => {
    const firstErrorField = Object.keys(errors)[0] as
      | keyof StrategyFormData
      | undefined;
    if (firstErrorField && touchedFields[firstErrorField]) {
      setFocus(firstErrorField);
    }
  }, [errors, touchedFields, setFocus]);

  if (submitSuccess) {
    return <SuccessMessage id="success-message" />;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl md:rounded-2xl border border-gray-200 p-xl md:p-2xl shadow-lg"
      noValidate
    >
      {submitError && (
        <ErrorMessage
          message={submitError}
          onDismiss={() => setSubmitError(null)}
        />
      )}

      <div className="space-y-xl md:space-y-2xl">
        <TextInput
          label="Full Name"
          {...register("name")}
          error={errors.name?.message}
          required
          autoComplete="name"
        />

        <EmailInput
          label="Email Address"
          {...register("email")}
          error={errors.email?.message}
          required
          autoComplete="email"
        />

        <TextInput
          label="Company Name"
          {...register("company")}
          error={errors.company?.message}
          autoComplete="organization"
        />

        <ServiceSelect
          label="Service Type"
          {...register("serviceType")}
          error={errors.serviceType?.message}
          required
        />

        <TextareaInput
          label="Tell us about your goals"
          {...register("message")}
          error={errors.message?.message}
          required
          rows={6}
          maxLength={1000}
        />

        <SubmitButton isSubmitting={isSubmitting} disabled={isSubmitting} />
      </div>
    </form>
  );
}
