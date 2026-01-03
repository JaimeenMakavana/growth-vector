import { ArrowUpRight } from "lucide-react";

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
    <div className="group bg-background rounded-2xl p-2xl shadow-sm border border-gray-100 hover:border-rose-200 hover:shadow-2xl transition-all duration-slow transform hover:-translate-y-1">
      <div className="mb-xl inline-block p-md rounded-xl bg-gray-50 group-hover:bg-rose-100 transition-colors duration-slow">
        <div className="text-gray-900 group-hover:text-rose-600 transition-colors duration-slow">
          {service.icon}
        </div>
      </div>
      <h3 className="text-2xl mb-md text-gray-900 font-montserrat font-semibold group-hover:text-rose-600 transition-colors duration-base">
        {service.title}{" "}
        <span className="text-gray-400 group-hover:text-rose-300 transition-colors duration-base">
          {service.subtitle}
        </span>
      </h3>
      <p className="text-gray-500 text-base leading-relaxed mb-2xl min-h-20 font-montserrat font-medium">
        {service.description}
      </p>
      <a
        href="#contact"
        className="w-full flex justify-between items-center bg-gray-50 text-gray-900 py-md px-xl rounded-lg text-sm font-bold hover:bg-rose-600 hover:text-background transition-all duration-base font-montserrat group/link"
      >
        {service.cta}
        <ArrowUpRight className="w-4 h-4 group-hover/link:rotate-45 transition-transform" strokeWidth={2} />
      </a>
    </div>
  );
}
