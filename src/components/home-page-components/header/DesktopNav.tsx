import Link from "next/link";

const navigationItems = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
];

const linkClassName = "hover:text-rose-600 transition-colors";
const linkStyle = { transitionDuration: "var(--transition-base)" };

export default function DesktopNav() {
  return (
    <div
      className="hidden md:flex items-center text-sm font-montserrat font-medium text-gray-500"
      style={{ gap: "var(--spacing-xl)" }}
    >
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={linkClassName}
          style={linkStyle}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
