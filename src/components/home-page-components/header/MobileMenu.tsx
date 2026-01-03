"use client";

import { X, Menu, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navigationItems = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
];

export default function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  return (
    <>
      <button
        onClick={onToggle}
        className="md:hidden text-gray-600 hover:text-rose-600 transition-colors"
        style={{
          padding: "var(--spacing-sm)",
          transitionDuration: "var(--transition-base)",
        }}
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-6 h-6" strokeWidth={2} />
        ) : (
          <Menu className="w-6 h-6" strokeWidth={2} />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onToggle}
              className="fixed inset-0 z-[99] md:hidden"
            />

            {/* Dropdown Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 left-0 right-0 px-md z-[100] md:hidden"
            >
              <div className="max-w-6xl mx-auto glass-nav border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
                <div className="py-md">
                  {/* Navigation Items */}
                  {navigationItems.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onToggle}
                      className="block px-xl py-md text-sm font-montserrat font-medium text-gray-600 hover:text-rose-600 hover:bg-rose-50/50 transition-colors"
                      style={{
                        transitionDuration: "var(--transition-base)",
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}

                  {/* Book Strategy Button */}
                  <Link
                    href="/book-strategy"
                    onClick={onToggle}
                    className="mx-xl mt-md mb-md group bg-gray-900 text-white rounded-full hover:bg-rose-600 hover:shadow-lg transition-all flex items-center justify-center font-montserrat font-medium px-xl py-md gap-sm"
                  >
                    Book Strategy
                    <ArrowRight
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      strokeWidth={1.5}
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
