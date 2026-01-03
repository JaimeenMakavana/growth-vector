import { z } from "zod";

export const strategyFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .trim(),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .trim(),
  company: z.string().optional(),
  serviceType: z
    .string()
    .min(1, "Please select a service type"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
    .trim(),
});

export type StrategyFormData = z.infer<typeof strategyFormSchema>;

