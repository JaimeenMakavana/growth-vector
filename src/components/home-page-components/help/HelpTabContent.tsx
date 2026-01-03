import { Cpu, Package } from "lucide-react";
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
      <Cpu className="w-8 h-8" strokeWidth={2} />
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
      <Package className="w-8 h-8" strokeWidth={2} />
    ),
  },
];

export default function HelpTabContent({ activeTab }: HelpTabContentProps) {
  const filteredServices =
    activeTab === "all"
      ? services
      : services.filter((service) => service.category === activeTab || service.category === "all");

  return (
    <div className="grid md:grid-cols-2 gap-2xl">
      {filteredServices.map((service) => (
        <HelpCard key={service.id} service={service} />
      ))}
    </div>
  );
}
