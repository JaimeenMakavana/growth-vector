import { TabType } from "./HelpSection";

interface HelpTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const tabs: { id: TabType; label: string }[] = [
  { id: "all", label: "All Solutions" },
  { id: "strategy", label: "Strategy" },
  { id: "automation", label: "Automation" },
];

export default function HelpTabs({ activeTab, onTabChange }: HelpTabsProps) {
  return (
    <div className="flex justify-center gap-md md:gap-lg mb-2xl md:mb-3xl lg:mb-4xl flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-lg py-2.5 rounded-full text-sm font-montserrat font-medium transition-all duration-base transform hover:-translate-y-1 ${
            activeTab === tab.id
              ? "bg-gray-900 text-background shadow-md hover:bg-rose-600"
              : "bg-background border border-gray-200 text-gray-600 hover:border-rose-500 hover:text-rose-600"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
