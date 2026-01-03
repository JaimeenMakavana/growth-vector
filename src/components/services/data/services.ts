import { Cpu, Package, Target, TrendingUp, Briefcase, Zap } from "lucide-react";
import { Service, ServiceCategory } from "../types";

export const services: Service[] = [
  {
    id: "growth-strategy",
    title: "Growth",
    subtitle: "Strategy",
    description:
      "Data-driven strategic planning to identify growth opportunities and build scalable marketing systems.",
    longDescription:
      "We analyze your market, competition, and customer journey to create comprehensive growth strategies. Our approach combines data science with creative thinking to identify high-impact opportunities and build sustainable growth systems.",
    features: [
      "Market analysis & competitive intelligence",
      "Customer journey mapping",
      "Growth model development",
      "Strategic roadmap creation",
    ],
    cta: "Explore Strategy",
    ctaLink: "/book-strategy?service=growth-strategy",
    category: "strategy",
    icon: Target,
    featured: true,
  },
  {
    id: "growth-infrastructure",
    title: "Growth",
    subtitle: "Infrastructure",
    description:
      "We build scalable growth systems with modern tech stacks. Performance, analytics, and conversion optimization engineered for scale.",
    longDescription:
      "Architect and implement robust growth infrastructure that scales with your business. We set up analytics, tracking, automation tools, and conversion optimization systems that form the foundation of sustainable growth.",
    features: [
      "Analytics & tracking setup",
      "Marketing automation infrastructure",
      "Conversion optimization systems",
      "Performance monitoring & reporting",
    ],
    cta: "Build Scale",
    ctaLink: "/book-strategy?service=growth-infrastructure",
    category: "infrastructure",
    icon: Cpu,
    featured: true,
  },
  {
    id: "growth-automation",
    title: "Growth",
    subtitle: "Automation",
    description:
      "Eliminate manual processes. We automate lead generation, nurturing, and conversion workflows using AI and intelligent systems.",
    longDescription:
      "Transform manual marketing processes into automated growth engines. We leverage AI and intelligent automation to handle lead generation, customer nurturing, and conversion workflows, freeing your team to focus on strategy and creativity.",
    features: [
      "AI-powered lead generation",
      "Automated customer nurturing",
      "Workflow automation",
      "Intelligent conversion systems",
    ],
    cta: "Automate Now",
    ctaLink: "/book-strategy?service=growth-automation",
    category: "automation",
    icon: Package,
    featured: true,
  },
  {
    id: "performance-marketing",
    title: "Performance",
    subtitle: "Marketing",
    description:
      "Data-driven campaigns that deliver measurable results. We specialize in paid advertising, SEO, and conversion optimization.",
    longDescription:
      "Execute high-performance marketing campaigns across paid channels, SEO, and conversion optimization. Our data-driven approach ensures every dollar spent delivers measurable ROI and scales with your business.",
    features: [
      "Paid advertising (Google, Meta, LinkedIn)",
      "SEO & content optimization",
      "Conversion rate optimization",
      "Performance analytics & reporting",
    ],
    cta: "Drive Performance",
    ctaLink: "/book-strategy?service=performance-marketing",
    category: "marketing",
    icon: TrendingUp,
  },
  {
    id: "strategic-consulting",
    title: "Strategic",
    subtitle: "Consulting",
    description:
      "Expert guidance on growth challenges. From market entry to scaling, we provide strategic insights to accelerate your growth.",
    longDescription:
      "Get expert guidance on your growth challenges. Whether you're entering new markets, scaling operations, or optimizing performance, our strategic consulting provides actionable insights and frameworks to accelerate growth.",
    features: [
      "Growth audits & assessments",
      "Strategic planning sessions",
      "Market entry strategies",
      "Scaling frameworks",
    ],
    cta: "Get Consulting",
    ctaLink: "/book-strategy?service=consulting",
    category: "consulting",
    icon: Briefcase,
  },
  {
    id: "ai-automation",
    title: "AI",
    subtitle: "Automation",
    description:
      "Cutting-edge AI solutions for marketing automation, customer engagement, and intelligent decision-making at scale.",
    longDescription:
      "Leverage cutting-edge AI technology to automate marketing processes, enhance customer engagement, and enable intelligent decision-making. Our AI solutions learn and adapt to deliver continuously improving results.",
    features: [
      "AI-powered customer insights",
      "Predictive analytics",
      "Intelligent content generation",
      "Automated decision-making systems",
    ],
    cta: "Explore AI",
    ctaLink: "/book-strategy?service=ai-automation",
    category: ["automation", "infrastructure"],
    icon: Zap,
  },
];

export function getServicesByCategory(category: ServiceCategory): Service[] {
  if (category === "all") {
    return services;
  }
  return services.filter((service) => {
    if (Array.isArray(service.category)) {
      return service.category.includes(category);
    }
    return service.category === category;
  });
}

export function getFeaturedServices(): Service[] {
  return services.filter((service) => service.featured);
}

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

