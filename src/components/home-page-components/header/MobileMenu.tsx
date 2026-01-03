import { X, Menu } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  return (
    <button
      onClick={onToggle}
      className="md:hidden text-gray-600 hover:text-rose-600 transition-colors"
      style={{
        padding: "var(--spacing-sm)",
        transitionDuration: "var(--transition-base)",
      }}
      aria-label="Toggle mobile menu"
    >
      {isOpen ? (
        <X className="w-6 h-6" strokeWidth={2} />
      ) : (
        <Menu className="w-6 h-6" strokeWidth={2} />
      )}
    </button>
  );
}
