import SuccessStoryCard from "./SuccessStoryCard";

interface SuccessStory {
  id: string;
  category: string;
  tag: string;
  title: string;
  description: string;
  metrics: {
    primary: { value: string; label: string };
    secondary: { value: string; label: string };
  };
  stickyOffset: string;
}

const successStories: SuccessStory[] = [
  {
    id: "techflow",
    category: "SaaS",
    tag: "Growth & Strategy",
    title: "TechFlow – 350% Revenue Growth",
    description:
      "Built a comprehensive growth system with automated lead generation and conversion optimization. Reduced customer acquisition cost by 45% while scaling revenue 3.5x in 10 months.",
    metrics: {
      primary: { value: "+350%", label: "Revenue Growth" },
      secondary: { value: "-45%", label: "Acquisition Cost" },
    },
    stickyOffset: "top-24",
  },
  {
    id: "luxeretail",
    category: "E-Commerce",
    tag: "AI Support Agents",
    title: "LuxeRetail – Automated Growth Engine",
    description:
      "Implemented AI-powered customer engagement and automated sales funnels. Achieved instant response times and increased conversion rates by 280% through intelligent automation.",
    metrics: {
      primary: { value: "+280%", label: "Conversion Rate" },
      secondary: { value: "24/7", label: "Automation" },
    },
    stickyOffset: "top-28",
  },
  {
    id: "financeflow",
    category: "FinTech",
    tag: "Brand Rebrand",
    title: "FinanceFlow – Growth Transformation",
    description:
      "Complete growth system redesign with data-driven positioning and automated lead generation. Established a scalable growth engine that increased qualified leads by 420%.",
    metrics: {
      primary: { value: "+420%", label: "Qualified Leads" },
      secondary: { value: "Scalable", label: "Growth System" },
    },
    stickyOffset: "top-32",
  },
];

export default function ClientSuccessStories() {
  return (
    <div id="work" className="py-24">
      <h2 className="text-4xl md:text-5xl text-center mb-16 tracking-tight text-gray-900 font-montserrat font-semibold">
        Client Success Stories
      </h2>
      <div className="flex flex-col gap-6 max-w-4xl mx-auto relative">
        {successStories.map((story) => (
          <SuccessStoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
}

