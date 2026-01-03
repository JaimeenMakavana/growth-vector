"use client";

import { useState } from "react";
import HelpHeader from "./HelpHeader";
import HelpTabs from "./HelpTabs";
import HelpTabContent from "./HelpTabContent";

export type TabType = "all" | "strategy" | "automation";

export default function HelpSection() {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  return (
    <div id="services" className="py-4xl border-t border-gray-200">
      <HelpHeader />
      <HelpTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <HelpTabContent activeTab={activeTab} />
    </div>
  );
}
