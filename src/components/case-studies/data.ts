import { CaseStudy } from "./types";

// This would typically come from a database or CMS
// For now, using static data that extends the home page success stories
export const caseStudiesData: CaseStudy[] = [
  {
    id: "techflow",
    category: "SaaS",
    tag: "Growth & Strategy",
    title: "TechFlow – 350% Revenue Growth",
    description:
      "Built a comprehensive growth system with automated lead generation and conversion optimization. Reduced customer acquisition cost by 45% while scaling revenue 3.5x in 10 months.",
    fullDescription:
      "TechFlow, a B2B SaaS platform, came to us with stagnant growth and high customer acquisition costs. We implemented a comprehensive growth system that included automated lead generation, conversion optimization, and data-driven decision making. Our approach combined strategic positioning, automated marketing funnels, and performance optimization to achieve remarkable results.",
    clientName: "TechFlow Inc.",
    industry: "B2B SaaS",
    challenge:
      "TechFlow was struggling with high customer acquisition costs (CAC) and low conversion rates. Their manual lead generation process was not scalable, and they lacked data-driven insights to optimize their growth strategy.",
    solution:
      "We built an automated growth system that included: 1) AI-powered lead generation and qualification, 2) Conversion-optimized landing pages and funnels, 3) Data analytics dashboard for real-time insights, 4) Automated email sequences and nurture campaigns, 5) A/B testing framework for continuous optimization.",
    results: {
      primary: { value: "+350%", label: "Revenue Growth" },
      secondary: { value: "-45%", label: "Acquisition Cost" },
      additional: [
        { value: "+280%", label: "Qualified Leads" },
        { value: "+120%", label: "Conversion Rate" },
      ],
    },
    metrics: [
      { label: "Revenue Growth", value: "+350%", improvement: "10 months" },
      { label: "CAC Reduction", value: "-45%", improvement: "Cost efficiency" },
      { label: "Lead Generation", value: "+280%", improvement: "Automated system" },
      { label: "Conversion Rate", value: "+120%", improvement: "Optimized funnels" },
    ],
    technologies: ["Marketing Automation", "AI Lead Generation", "Analytics", "A/B Testing"],
    duration: "10 months",
    featured: true,
    publishedAt: "2024-01-15",
  },
  {
    id: "luxeretail",
    category: "E-Commerce",
    tag: "AI Support Agents",
    title: "LuxeRetail – Automated Growth Engine",
    description:
      "Implemented AI-powered customer engagement and automated sales funnels. Achieved instant response times and increased conversion rates by 280% through intelligent automation.",
    fullDescription:
      "LuxeRetail, a premium e-commerce brand, needed to scale their customer support while maintaining the high-touch experience their customers expected. We implemented AI-powered support agents and automated sales funnels that not only maintained but enhanced the customer experience while dramatically improving conversion rates.",
    clientName: "LuxeRetail",
    industry: "E-Commerce",
    challenge:
      "LuxeRetail was experiencing rapid growth but couldn't scale their customer support team fast enough. They were losing sales due to delayed responses and needed a solution that maintained their premium brand experience.",
    solution:
      "We implemented: 1) AI-powered support agents trained on their product catalog and customer service history, 2) Automated sales funnels with personalized product recommendations, 3) 24/7 instant response system, 4) Seamless handoff to human agents when needed, 5) Integration with their existing CRM and inventory systems.",
    results: {
      primary: { value: "+280%", label: "Conversion Rate" },
      secondary: { value: "24/7", label: "Automation" },
      additional: [
        { value: "< 2s", label: "Response Time" },
        { value: "+95%", label: "Customer Satisfaction" },
      ],
    },
    metrics: [
      { label: "Conversion Rate", value: "+280%", improvement: "AI optimization" },
      { label: "Response Time", value: "< 2s", improvement: "Instant support" },
      { label: "Customer Satisfaction", value: "+95%", improvement: "AI + Human hybrid" },
      { label: "Support Efficiency", value: "+400%", improvement: "Automated handling" },
    ],
    technologies: ["AI Chatbots", "Natural Language Processing", "CRM Integration", "Automation"],
    duration: "6 months",
    featured: true,
    publishedAt: "2024-02-20",
  },
  {
    id: "financeflow",
    category: "FinTech",
    tag: "Brand Rebrand",
    title: "FinanceFlow – Growth Transformation",
    description:
      "Complete growth system redesign with data-driven positioning and automated lead generation. Established a scalable growth engine that increased qualified leads by 420%.",
    fullDescription:
      "FinanceFlow needed a complete transformation to compete in the crowded fintech space. We redesigned their entire growth system, from brand positioning to automated lead generation, creating a scalable engine that dramatically increased their qualified leads and market presence.",
    clientName: "FinanceFlow",
    industry: "FinTech",
    challenge:
      "FinanceFlow had an unclear brand position and was struggling to generate qualified leads in a competitive market. Their existing marketing efforts were not producing results, and they needed a complete transformation.",
    solution:
      "We executed a comprehensive transformation: 1) Brand positioning and messaging strategy, 2) Complete visual identity redesign, 3) Data-driven content marketing strategy, 4) Automated lead generation and qualification system, 5) Performance marketing campaigns across multiple channels, 6) Conversion-optimized website and landing pages.",
    results: {
      primary: { value: "+420%", label: "Qualified Leads" },
      secondary: { value: "Scalable", label: "Growth System" },
      additional: [
        { value: "+250%", label: "Brand Awareness" },
        { value: "+180%", label: "Website Traffic" },
      ],
    },
    metrics: [
      { label: "Qualified Leads", value: "+420%", improvement: "Automated system" },
      { label: "Brand Awareness", value: "+250%", improvement: "Rebrand impact" },
      { label: "Website Traffic", value: "+180%", improvement: "SEO + Content" },
      { label: "Lead Quality", value: "+65%", improvement: "Better targeting" },
    ],
    technologies: ["Brand Strategy", "Content Marketing", "Marketing Automation", "SEO"],
    duration: "12 months",
    featured: true,
    publishedAt: "2024-03-10",
  },
  {
    id: "healthtech-pro",
    category: "HealthTech",
    tag: "Growth & Strategy",
    title: "HealthTech Pro – Patient Engagement Platform",
    description:
      "Developed a comprehensive patient engagement and growth system that increased patient retention by 340% and reduced operational costs by 38%.",
    fullDescription:
      "HealthTech Pro, a digital health platform, needed to improve patient engagement and reduce operational costs. We built a comprehensive system that automated patient communications, improved retention, and streamlined operations.",
    clientName: "HealthTech Pro",
    industry: "Digital Health",
    challenge:
      "Low patient engagement and retention rates, high operational costs from manual processes, and difficulty scaling their patient communication system.",
    solution:
      "We implemented: 1) Automated patient engagement system with personalized communications, 2) Patient retention campaigns and follow-up sequences, 3) Operational automation to reduce manual work, 4) Analytics dashboard for patient insights, 5) Integration with existing health records system.",
    results: {
      primary: { value: "+340%", label: "Patient Retention" },
      secondary: { value: "-38%", label: "Operational Costs" },
      additional: [
        { value: "+220%", label: "Patient Engagement" },
        { value: "+95%", label: "Satisfaction Score" },
      ],
    },
    metrics: [
      { label: "Patient Retention", value: "+340%", improvement: "Engagement system" },
      { label: "Cost Reduction", value: "-38%", improvement: "Automation" },
      { label: "Patient Engagement", value: "+220%", improvement: "Personalized comms" },
      { label: "Satisfaction", value: "+95%", improvement: "Better experience" },
    ],
    technologies: ["Patient Engagement", "Automation", "Healthcare CRM", "Analytics"],
    duration: "8 months",
    featured: false,
    publishedAt: "2024-04-05",
  },
  {
    id: "edtech-platform",
    category: "EdTech",
    tag: "AI Support Agents",
    title: "EdTech Platform – AI-Powered Learning Assistant",
    description:
      "Implemented AI-powered learning assistants and automated student support, resulting in 290% increase in course completion rates and 98% student satisfaction.",
    fullDescription:
      "An online education platform needed to improve student outcomes and reduce support burden. We implemented AI-powered learning assistants that provided personalized help and automated student support systems.",
    clientName: "EdTech Platform",
    industry: "Online Education",
    challenge:
      "Low course completion rates, high support ticket volume, and difficulty providing personalized learning assistance at scale.",
    solution:
      "We built: 1) AI-powered learning assistants that provide instant help, 2) Automated student support system with intelligent routing, 3) Personalized learning path recommendations, 4) Proactive intervention system for at-risk students, 5) Analytics dashboard for course performance insights.",
    results: {
      primary: { value: "+290%", label: "Course Completion" },
      secondary: { value: "98%", label: "Student Satisfaction" },
      additional: [
        { value: "-70%", label: "Support Tickets" },
        { value: "+180%", label: "Student Engagement" },
      ],
    },
    metrics: [
      { label: "Course Completion", value: "+290%", improvement: "AI assistance" },
      { label: "Student Satisfaction", value: "98%", improvement: "Better support" },
      { label: "Support Efficiency", value: "-70%", improvement: "Automation" },
      { label: "Student Engagement", value: "+180%", improvement: "Personalization" },
    ],
    technologies: ["AI Learning Assistants", "Natural Language Processing", "Learning Analytics", "Automation"],
    duration: "9 months",
    featured: false,
    publishedAt: "2024-05-12",
  },
];

