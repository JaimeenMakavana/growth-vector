"use client";

import { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 animate-fade-up">
      <nav className="glass-nav border border-gray-200 rounded-full pl-6 pr-2 py-2 flex items-center gap-8 shadow-sm hover:shadow-lg hover:shadow-rose-500/5 transition-all duration-300">
        <a
          href="#"
          className="group flex items-center gap-2 text-sm text-gray-900 hover:text-rose-600 transition-colors"
        >
          <span className="font-instrument text-2xl tracking-tight font-serif italic font-medium">
            Growth Vector.
          </span>
        </a>

        <DesktopNav />

        <div className="h-4 w-px bg-gray-200 hidden md:block"></div>

        <a
          href="#contact"
          className="group bg-gray-900 text-white text-sm px-5 py-2.5 rounded-full hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-600/30 transition-all duration-300 flex items-center gap-2 font-montserrat font-medium"
        >
          Book Strategy
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>

        <MobileMenu
          isOpen={isMobileMenuOpen}
          onToggle={toggleMobileMenu}
        />
      </nav>
    </div>
  );
}

