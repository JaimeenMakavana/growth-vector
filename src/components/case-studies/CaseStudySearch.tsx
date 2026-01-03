"use client";

import { useState, useEffect, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";

interface CaseStudySearchProps {
  initialSearch?: string;
}

export default function CaseStudySearch({
  initialSearch = "",
}: CaseStudySearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(initialSearch);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setSearch(initialSearch);
  }, [initialSearch]);

  const handleSearch = (value: string) => {
    setSearch(value);

    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (value.trim()) {
        params.set("search", value.trim());
      } else {
        params.delete("search");
      }

      // Reset to first page when searching
      params.delete("page");

      const newUrl = params.toString()
        ? `/case-studies?${params.toString()}`
        : "/case-studies";

      router.push(newUrl, { scroll: false });
    });
  };

  const clearSearch = () => {
    setSearch("");
    handleSearch("");
  };

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-md top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search case studies..."
          className="w-full pl-3xl pr-3xl py-md border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent font-montserrat text-sm md:text-base bg-white"
          disabled={isPending}
        />
        {search && (
          <button
            onClick={clearSearch}
            className="absolute right-md top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      {isPending && (
        <div className="absolute -bottom-md left-0 text-xs text-gray-500 font-montserrat">
          Searching...
        </div>
      )}
    </div>
  );
}
