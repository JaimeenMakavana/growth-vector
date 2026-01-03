export default function DesktopNav() {
  return (
    <div className="hidden md:flex items-center text-sm font-montserrat font-medium text-gray-500" style={{ gap: 'var(--spacing-xl)' }}>
      <a
        href="#services"
        className="hover:text-rose-600 transition-colors" style={{ transitionDuration: 'var(--transition-base)' }}
      >
        Services
      </a>
      <a 
        href="#work" 
        className="hover:text-rose-600 transition-colors" style={{ transitionDuration: 'var(--transition-base)' }}
      >
        Case Studies
      </a>
      <a 
        href="#about" 
        className="hover:text-rose-600 transition-colors" style={{ transitionDuration: 'var(--transition-base)' }}
      >
        Agency
      </a>
    </div>
  );
}
