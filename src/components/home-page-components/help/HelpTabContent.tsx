import { TabType } from "./HelpSection";
import HelpCard from "./HelpCard";

interface HelpTabContentProps {
  activeTab: TabType;
}

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  icon: JSX.Element;
  category: TabType;
}

const services: Service[] = [
  {
    id: "infrastructure",
    title: "Growth",
    subtitle: "Infrastructure",
    description:
      "We build scalable growth systems with modern tech stacks. Performance, analytics, and conversion optimization engineered for scale.",
    cta: "Build Scale",
    category: "all",
    icon: (
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
        className="w-8 h-8"
      >
        <path d="M12 20v2"></path>
        <path d="M12 2v2"></path>
        <path d="M17 20v2"></path>
        <path d="M17 2v2"></path>
        <path d="M2 12h2"></path>
        <path d="M2 17h2"></path>
        <path d="M2 7h2"></path>
        <path d="M20 12h2"></path>
        <path d="M20 17h2"></path>
        <path d="M20 7h2"></path>
        <path d="M7 20v2"></path>
        <path d="M7 2v2"></path>
        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
        <rect x="8" y="8" width="8" height="8" rx="1"></rect>
      </svg>
    ),
  },
  {
    id: "automation",
    title: "Growth",
    subtitle: "Automation",
    description:
      "Eliminate manual processes. We automate lead generation, nurturing, and conversion workflows using AI and intelligent systems.",
    cta: "Automate Now",
    category: "automation",
    icon: (
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
        className="w-8 h-8"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
  },
];

export default function HelpTabContent({ activeTab }: HelpTabContentProps) {
  const filteredServices =
    activeTab === "all"
      ? services
      : services.filter((service) => service.category === activeTab || service.category === "all");

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {filteredServices.map((service) => (
        <HelpCard key={service.id} service={service} />
      ))}
    </div>
  );
}

