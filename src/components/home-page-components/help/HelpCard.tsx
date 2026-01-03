interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  icon: JSX.Element;
}

interface HelpCardProps {
  service: Service;
}

export default function HelpCard({ service }: HelpCardProps) {
  return (
    <div className="group bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:border-rose-200 hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 transform hover:-translate-y-1">
      <div className="mb-6 inline-block p-4 rounded-2xl bg-gray-50 group-hover:bg-rose-100 transition-colors duration-500">
        <div className="text-gray-900 group-hover:text-rose-600 transition-colors duration-500">
          {service.icon}
        </div>
      </div>
      <h3 className="text-2xl mb-4 text-gray-900 font-montserrat font-semibold group-hover:text-rose-600 transition-colors">
        {service.title}{" "}
        <span className="text-gray-400 group-hover:text-rose-300 transition-colors">
          {service.subtitle}
        </span>
      </h3>
      <p className="text-gray-500 text-base leading-relaxed mb-8 h-auto min-h-20 font-montserrat font-medium">
        {service.description}
      </p>
      <a
        href="#contact"
        className="w-full flex justify-between items-center bg-gray-50 text-gray-900 py-4 px-6 rounded-xl text-sm font-bold hover:bg-rose-600 hover:text-white transition-all duration-300 font-montserrat group/link"
      >
        {service.cta}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 group-hover/link:rotate-45 transition-transform"
        >
          <path d="M7 7h10v10"></path>
          <path d="M7 17 17 7"></path>
        </svg>
      </a>
    </div>
  );
}

