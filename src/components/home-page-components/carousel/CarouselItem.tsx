import { TrendingUp, CheckCircle, Facebook, ShoppingBag, Briefcase, Brain } from "lucide-react";

interface CarouselItemProps {
  name: string;
  icon: string;
  color: string;
}

const iconMap: Record<string, JSX.Element> = {
  analytics: (
    <TrendingUp className="w-8 h-8" strokeWidth={1.5} />
  ),
  check: (
    <CheckCircle className="w-8 h-8" strokeWidth={1.5} />
  ),
  facebook: (
    <Facebook className="w-8 h-8" strokeWidth={1.5} />
  ),
  hubspot: (
    <Briefcase className="w-8 h-8" strokeWidth={1.5} />
  ),
  openai: (
    <Brain className="w-8 h-8" strokeWidth={1.5} />
  ),
  shopify: (
    <ShoppingBag className="w-8 h-8" strokeWidth={1.5} />
  ),
};

const colorClassMap: Record<string, string> = {
  "gray-900": "hover:text-gray-900",
  "blue-500": "hover:text-blue-500",
  "blue-600": "hover:text-blue-600",
  "orange-500": "hover:text-orange-500",
  "green-500": "hover:text-green-500",
};

export default function CarouselItem({ name, icon, color }: CarouselItemProps) {
  const hoverColorClass = colorClassMap[color] || "hover:text-gray-900";
  
  return (
    <div className={`flex items-center gap-lg text-gray-400 ${hoverColorClass} transition-colors duration-base`}>
      {iconMap[icon] || iconMap.analytics}
      <span className="text-lg font-montserrat font-semibold">{name}</span>
    </div>
  );
}
