import type { Metadata } from "next";
import FormHeader from "@/components/book-strategy/FormHeader";
import StrategyForm from "@/components/book-strategy/StrategyForm";

export const metadata: Metadata = {
  title: "Book a Strategy Session - Growth Vector",
  description:
    "Schedule a strategic consultation to accelerate your business growth. Let's discuss your path to exponential growth.",
};

export default function BookStrategyPage() {
  return (
    <div className="bg-bg-primary text-text-primary antialiased min-h-screen">
      <main className="max-w-7xl mx-auto pt-24 md:pt-32 px-md md:px-xl pb-2xl md:pb-4xl">
        <FormHeader />
        <StrategyForm />
      </main>
    </div>
  );
}
