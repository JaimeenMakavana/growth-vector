"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed left-0 right-0 top-lg z-fixed pl-md pr-md flex justify-center animate-fade-up z-[100]">
      <nav className="max-w-6xl w-full glass-nav border border-gray-200 rounded-full flex items-center justify-between shadow-sm hover:shadow-lg transition-all px-xl pt-sm pb-sm gap-2xl duration-base ">
        <Link
          href="/"
          className="group flex items-center text-sm text-gray-900 hover:text-rose-600 transition-colors gap-sm duration-base"
        >
          <span className="font-instrument text-2xl tracking-tight font-serif italic font-medium hidden md:block">
            Growth Vector.
          </span>
          <span className="font-instrument text-2xl tracking-tight font-serif italic font-medium block md:hidden">
            GV
          </span>
        </Link>

        <DesktopNav />

        <Link
          href="/book-strategy"
          className="group bg-gray-900 text-background text-sm rounded-full hover:bg-rose-600 hover:shadow-lg transition-all flex items-center font-montserrat font-medium pl-lg pr-lg pt-2.5 pb-2.5 gap-sm duration-base whitespace-nowrap"
        >
          Book Strategy
          <ArrowRight
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            strokeWidth={1.5}
          />
        </Link>

        <MobileMenu isOpen={isMobileMenuOpen} onToggle={toggleMobileMenu} />
      </nav>
    </div>
  );
}
