"use client";

import Link from "next/link";
import { Info } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function FloatingInfoButton() {
  const pathname = usePathname();
  
  // Hide the button on the informatic page itself
  if (pathname === "/informatic") {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className="fixed bottom-6 right-6 z-[1020]"
    >
      <Link
        href="/informatic"
        className="group flex items-center justify-center w-14 h-14 bg-rose-600 hover:bg-rose-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="View project informatics"
        title="Project Informatics"
      >
        <Info className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" strokeWidth={2} />
      </Link>
    </motion.div>
  );
}

