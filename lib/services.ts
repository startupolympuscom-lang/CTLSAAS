// Catalog of CTL services surfaced in the client space.
// `id` values mirror the product ids in lib/products.ts.

export type ServiceDef = {
  id: string
  name: string
  shortName: string
  description: string
  // The Smart Agent / chatbot is the interactive service with a generator
  // and analytics. Others are informational in the client space.
  interactive: boolean
}

export const SERVICES: ServiceDef[] = [
  {
    id: "intelligent-conversational-agents",
    name: "Intelligent Conversational Agents",
    shortName: "Smart Agent",
    description:
      "AI chatbots trained on your own documentation. Generate one, embed it on your site, and track how people use it.",
    interactive: true,
  },
  {
    id: "personal-ai-assistant",
    name: "Personal AI Assistant",
    shortName: "AI Assistant",
    description: "A private assistant that handles your daily tasks, scheduling and knowledge retrieval.",
    interactive: false,
  },
  {
    id: "personalized-b2b-outreach",
    name: "B2B Outreach Automation",
    shortName: "B2B Outreach",
    description: "Automated, personalized prospecting campaigns that fill your pipeline while you sleep.",
    interactive: false,
  },
  {
    id: "saas-web-dashboards",
    name: "SaaS Sites & Custom Dashboards",
    shortName: "Web & Dashboards",
    description: "Bespoke web apps and dashboards tailored to your operations and KPIs.",
    interactive: false,
  },
  {
    id: "voice-agent",
    name: "Voice Agent",
    shortName: "Voice Agent",
    description: "Natural-sounding voice agents that answer calls and qualify leads 24/7.",
    interactive: false,
  },
  {
    id: "custom-ai-solution",
    name: "Custom AI Solution",
    shortName: "Custom AI",
    description: "Have a unique challenge? We design and build a bespoke AI solution around it.",
    interactive: false,
  },
]

export function getService(id: string) {
  return SERVICES.find((s) => s.id === id)
}
