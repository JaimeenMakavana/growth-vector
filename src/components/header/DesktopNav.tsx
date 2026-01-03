export default function DesktopNav() {
  return (
    <div className="hidden md:flex items-center gap-6 text-sm font-montserrat font-medium text-gray-500">
      <a
        href="#services"
        className="hover:text-rose-600 transition-colors"
      >
        Services
      </a>
      <a href="#work" className="hover:text-rose-600 transition-colors">
        Case Studies
      </a>
      <a href="#about" className="hover:text-rose-600 transition-colors">
        Agency
      </a>
    </div>
  );
}

