"use server";

import { strategyFormSchema } from "./schema";

export type FormData = {
  name: string;
  email: string;
  company?: string;
  serviceType: string;
  message: string;
};

export type FormResult = {
  success: boolean;
  message?: string;
  errors?: Record<string, string>;
};

// Server-side validation using zod schema
function validateForm(data: FormData): Record<string, string> | null {
  const result = strategyFormSchema.safeParse(data);
  
  if (result.success) {
    return null;
  }

  const errors: Record<string, string> = {};
  result.error.issues.forEach((error) => {
    if (error.path[0]) {
      errors[error.path[0].toString()] = error.message;
    }
  });

  return errors;
}

export async function submitStrategyForm(data: FormData): Promise<FormResult> {
  try {
    // Server-side validation
    const validationErrors = validateForm(data);
    if (validationErrors) {
      return {
        success: false,
        errors: validationErrors,
      };
    }

    // TODO: In production, implement:
    // 1. Rate limiting
    // 2. Save to database/CRM
    // 3. Send email notification
    // 4. Send confirmation email to user
    // 5. Log analytics event

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // For now, just log the submission
    console.log("Form submission received:", {
      name: data.name,
      email: data.email,
      company: data.company,
      serviceType: data.serviceType,
      message: data.message.substring(0, 50) + "...",
    });

    // In production, you would:
    // - Save to database
    // - Send email via Resend, SendGrid, etc.
    // - Integrate with CRM (HubSpot, Salesforce, etc.)

    return {
      success: true,
      message: "Thank you! We'll get back to you within 24 hours.",
    };
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      message: "An error occurred. Please try again later.",
    };
  }
}

