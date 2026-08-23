import {
  MessageSquare,
  Cpu,
  Mail,
  Code,
  Mic,
  Settings,
  Bot,
  Zap,
  Users,
  Shield,
  Globe,
  Smartphone,
  Calendar,
  Phone,
  BarChart3,
  FileText,
  Search,
  CheckCircle,
  Target,
  TrendingUp,
} from "lucide-react"
import { productTranslations } from "./products-translations"
import type { Language } from "./translations"

export interface Product {
  id: string
  name: string
  title: string
  version: string
  overview: string
  owners?: string
  targetUsers?: string
  capabilities?: Array<{
    icon: any
    text: string
  }>
  workflow?: string[]
  techStack?: string
  securityCompliance?: string
  securityData?: Array<{
    text: string
  }>
  hostingDeployment?: string
  performanceDeployment?: string
  buildPipeline?: string
  techHighlights?: Array<{
    text: string
  }>
  complianceDeliverability?: Array<{
    text: string
  }>
  coreOffering?: Array<{
    text: string
  }>
  typicalUseCases?: string
  leadTimePricing?: string
  roadmap?: Array<{
    icon: any
    text: string
  }>
  knownLimits?: Array<{
    text: string
  }>
  icon: any
}

export const products: Product[] = [
  {
    id: "intelligent-conversational-agents",
    name: "Intelligent Conversational Agents (Smart Agents)",
    title: "Smart Agents",
    version: "Version 2.1 - Production Ready",
    overview:
      "Our cutting-edge conversational AI solutions empower organizations across e-commerce, government service centers, and real estate sectors to deliver seamless, personalized customer engagement. Designed for true omnichannel communication, these agents operate effortlessly on platforms including WhatsApp, Instagram, and Facebook Messenger. Powered by advanced OpenAI and Anthropic language models, they integrate securely with any REST or GraphQL API, enabling real-time access to product information, order statuses, and case management.",
    owners: "Hamza Benthami, CTL Development Team",
    targetUsers: "E-commerce businesses, Government agencies, Real estate companies, Customer service teams",
    capabilities: [
      {
        icon: Globe,
        text: "Multilingual support (Arabic Darija, French, English, Arabic Classic, Spanish, and more)",
      },
      {
        icon: Search,
        text: "Dynamic product and service search with interactive carousels",
      },
      {
        icon: CheckCircle,
        text: "Secure order and case status look-ups via API",
      },
      {
        icon: Settings,
        text: "Sophisticated conditional flows and slot filling",
      },
      {
        icon: Users,
        text: "Human-agent handoff via real-time dashboards",
      },
      {
        icon: BarChart3,
        text: "Comprehensive analytics on user sessions, satisfaction, and conversion metrics",
      },
    ],
    workflow: [
      "Customer initiates conversation on preferred platform",
      "AI agent analyzes intent and context using advanced NLP",
      "System retrieves relevant data through secure API connections",
      "Agent provides personalized response with actionable information",
      "Conversation history and analytics are logged for continuous improvement",
    ],
    techStack: "Node.js, TypeScript, OpenAI API, Anthropic Claude, WhatsApp Business API, Meta Graph API, PostgreSQL",
    securityCompliance: "API keys scoped per client, GDPR-compliant, with options for EU-Central data residency",
    hostingDeployment: "Hosted on a secure cloud runtime, easily embedded on client sites",
    techHighlights: [
      { text: "99.9% uptime SLA with redundant failover systems" },
      { text: "Sub-200ms response time for optimal user experience" },
      { text: "Multi-language support including Arabic and French" },
      { text: "Advanced sentiment analysis and emotion detection" },
    ],
    typicalUseCases:
      "Customer support automation, Lead qualification, Order tracking, Appointment scheduling, FAQ handling",
    leadTimePricing: "4-6 weeks implementation, Custom pricing based on volume and features",
    roadmap: [
      {
        icon: FileText,
        text: "Image processing capabilities for receipts and IDs",
      },
      {
        icon: BarChart3,
        text: "Self-service analytics export",
      },
    ],
    knownLimits: [
      { text: "Complex multi-step transactions may require human handoff" },
      { text: "Performance may vary with extremely high concurrent users (>10,000)" },
      { text: "Limited support for voice calls (roadmap item)" },
    ],
    icon: MessageSquare,
  },
  {
    id: "personal-ai-assistant",
    name: "Personal AI Assistant",
    title: "Enterprise AI Assistant",
    version: "Version 1.8 - Production Ready",
    overview:
      "Our enterprise-grade AI assistant infrastructure is customized per organization, configuring distinct profiles tailored to specific employees or roles based on business needs. This multi-agent system automates key workplace functions, streamlining workflows and enhancing productivity.",
    owners: "CTL AI Team, Enterprise Solutions Division",
    targetUsers: "Enterprise employees, Management teams, HR departments, IT administrators",
    capabilities: [
      {
        icon: Mail,
        text: "Reading and labelling emails",
      },
      {
        icon: FileText,
        text: "Processing documents and structured data",
      },
      {
        icon: Mail,
        text: "Drafting and sending Gmail and Outlook messages",
      },
      {
        icon: Calendar,
        text: "Scheduling meetings and managing calendars, including Google Calendar and Google Meet",
      },
      {
        icon: Phone,
        text: "Automates inbound and outbound voice calls",
      },
      {
        icon: MessageSquare,
        text: "Context-aware chat accessible via an infrastructure configured specifically for your organization",
      },
      {
        icon: Settings,
        text: "Integration with Notion and Sheets for task and data management",
      },
      {
        icon: Search,
        text: "Web search and summarization functionalities",
      },
    ],
    workflow: [
      "Employee authenticates through SSO integration",
      "AI assistant loads personalized profile and permissions",
      "User requests assistance via chat, email, or voice interface",
      "System processes request using appropriate AI models and data sources",
      "Assistant provides response and logs interaction for compliance",
    ],
    techStack: "Python, FastAPI, OpenAI GPT-4, Microsoft Graph API, Active Directory, Redis, MongoDB",
    securityCompliance:
      "Google OAuth with least-privilege scopes, encrypted data vaults, and optional enterprise-grade SAML SSO",
    performanceDeployment: "Low latency task execution with scalable, self-hosted and white-label deployment options",
    techHighlights: [
      { text: "Seamless integration with Microsoft 365 and Google Workspace" },
      { text: "Custom AI model fine-tuning for organization-specific tasks" },
      { text: "Real-time collaboration features with team members" },
      { text: "Advanced analytics and productivity insights" },
    ],
    typicalUseCases:
      "Meeting scheduling, Document summarization, Email drafting, Data analysis, Project management assistance",
    leadTimePricing: "6-8 weeks implementation, Enterprise licensing model",
    roadmap: [
      {
        icon: Bot,
        text: "Long-term context retention via vector memory",
      },
      {
        icon: Smartphone,
        text: "Mobile progressive web app",
      },
      {
        icon: Mic,
        text: "Voice-only interaction mode",
      },
    ],
    knownLimits: [
      { text: "Requires significant initial configuration for complex organizations" },
      { text: "Limited offline functionality" },
      { text: "May require custom development for highly specialized workflows" },
    ],
    icon: Cpu,
  },
  {
    id: "personalized-b2b-outreach",
    name: "Personalized B2B Outreach Automation",
    title: "B2B Outreach Platform",
    version: "Version 3.2 - Production Ready",
    overview:
      "Our comprehensive lead generation and outreach platform streamlines the entire campaign lifecycle—from intelligent lead scraping and enrichment, to crafting hyper-personalized email openers and executing sequenced campaigns using warmed-up mailboxes. Built for high deliverability and compliance, this solution accelerates business development efforts with data-driven precision.",
    owners: "Sales Automation Team, CTL Marketing Division",
    targetUsers: "Sales teams, Business development professionals, Marketing agencies, B2B companies",
    capabilities: [
      {
        icon: Mail,
        text: "Intelligent lead generation and data enrichment",
      },
      {
        icon: Bot,
        text: "AI-powered personalized email content generation",
      },
      {
        icon: Zap,
        text: "Automated email sequences with smart timing",
      },
      {
        icon: Shield,
        text: "Deliverability optimization with warm-up protocols",
      },
    ],
    workflow: [
      "Integration with LinkedIn Sales Navigator for lead sourcing",
      "Email verification and validation processes",
      "AI-generated personalized messaging",
      "Automated campaign warm-up and sequencing",
      "Real-time analytics with optional customizable dashboards",
    ],
    techStack: "Node.js, Python, OpenAI API, SendGrid, Mailgun, PostgreSQL, Redis, Elasticsearch",
    securityCompliance: "CAN-SPAM compliant, GDPR data handling, email authentication protocols",
    complianceDeliverability: [
      { text: "Automatic SPF, DKIM, DMARC checks" },
      { text: "GDPR-compliant unsubscribe and forget-me mechanisms" },
      { text: "Bounce management" },
    ],
    hostingDeployment: "Cloud-based infrastructure with global email delivery networks",
    performanceDeployment: "99.8% email deliverability rate, scalable to thousands of emails per month",
    techHighlights: [
      { text: "Advanced AI personalization with 40%+ higher response rates" },
      { text: "Intelligent send-time optimization based on recipient behavior" },
      { text: "Real-time deliverability monitoring and reputation management" },
      { text: "A/B testing capabilities for continuous optimization" },
    ],
    typicalUseCases:
      "Lead generation campaigns, Sales prospecting, Partnership outreach, Event promotion, Product launches",
    leadTimePricing: "3-4 weeks setup, Usage-based pricing with volume discounts",
    roadmap: [
      {
        icon: Users,
        text: "CRM integration",
      },
      {
        icon: MessageSquare,
        text: "Multichannel outreach including LinkedIn DMs",
      },
      {
        icon: Globe,
        text: "Language-specific personalization models",
      },
    ],
    knownLimits: [
      { text: "Email deliverability can be affected by recipient server policies" },
      { text: "Requires careful compliance management for international campaigns" },
      { text: "Limited to email channel (social media integration in roadmap)" },
    ],
    icon: Mail,
  },
  {
    id: "saas-web-dashboards",
    name: "SaaS Web Sites & Custom Dashboards",
    title: "Digital Infrastructure Platform",
    version: "Version 2.5 - Production Ready",
    overview:
      "We specialize in delivering scalable, high-performance digital infrastructure for SaaS companies and enterprises. Our solutions include marketing websites, client portals, and real-time analytics dashboards built with custom React components and secure backend architectures. Designed for robustness, security, and exceptional user experience, our platforms support seamless integration and operational agility.",
    owners: "Full-Stack Development Team, CTL Web Solutions",
    targetUsers: "SaaS companies, Enterprise clients, Startups, Digital agencies",
    capabilities: [
      {
        icon: Code,
        text: "Custom React/Next.js applications with modern UI/UX",
      },
      {
        icon: Globe,
        text: "Scalable backend APIs with microservices architecture",
      },
      {
        icon: Shield,
        text: "Enterprise-grade security and compliance features",
      },
      {
        icon: Zap,
        text: "Real-time analytics and business intelligence dashboards",
      },
    ],
    workflow: [
      "Requirements gathering and technical architecture planning",
      "UI/UX design and prototype development",
      "Frontend development with React/Next.js and backend API creation",
      "Integration with third-party services and databases",
      "Testing, deployment, and ongoing maintenance support",
    ],
    techStack: "React, Next.js, TypeScript, Node.js, Python, PostgreSQL, MongoDB, AWS/Azure, Docker, Kubernetes",
    securityCompliance: "SOC 2 compliance, OWASP security standards, data encryption, secure authentication",
    techHighlights: [
      {
        text: "Strong security foundations: row-level data access control, TLS encryption, GDPR and regional compliance",
      },
      { text: "Robust build pipelines with continuous integration and deployment" },
      { text: "Pixel-perfect UI crafted with Tailwind CSS" },
      {
        text: "Backend powered by PostgreSQL with comprehensive authentication, role-based access control, and integrated billing modules",
      },
      { text: "Embedded, interactive data visualizations with Chart.js and Recharts" },
    ],
    hostingDeployment: "Cloud-native deployment on AWS, Azure, or Google Cloud Platform",
    performanceDeployment: "Auto-scaling infrastructure, CDN integration, 99.9% uptime SLA",
    buildPipeline: "CI/CD with automated testing, staging environments, and blue-green deployments",
    typicalUseCases: "Landing pages, SaaS administration panels, partner portals, KPI and operational dashboards",
    leadTimePricing: "8-12 weeks development, Project-based pricing with maintenance packages",
    roadmap: [
      {
        icon: Bot,
        text: "One-click AI-powered copywriting blocks",
      },
      {
        icon: Settings,
        text: "Multi-tenant theming",
      },
      {
        icon: Shield,
        text: "ISO 27001 certified hosting options",
      },
    ],
    knownLimits: [
      { text: "Complex integrations may require additional development time" },
      { text: "Performance optimization needed for extremely large datasets" },
      { text: "Mobile app versions require separate development effort" },
    ],
    icon: Code,
  },
  {
    id: "voice-agent",
    name: "Voice Agent",
    title: "AI Voice Solutions",
    version: "Version 1.3 - Beta Release",
    overview:
      "Advanced AI-powered voice solutions that enable natural, human-like conversations through phone calls and voice interfaces. Our voice agents handle customer inquiries, appointment scheduling, and support tasks with sophisticated speech recognition and natural language processing capabilities, providing seamless voice-first experiences across various industries.",
    owners: "Voice AI Team, CTL Innovation Lab",
    targetUsers: "Call centers, Healthcare providers, Restaurants, Service businesses, Customer support teams",
    capabilities: [
      {
        icon: Phone,
        text: "Natural speech recognition and synthesis",
      },
      {
        icon: MessageSquare,
        text: "Real-time conversation handling",
      },
      {
        icon: Calendar,
        text: "Automated appointment scheduling and management",
      },
      {
        icon: Globe,
        text: "Multi-language voice support",
      },
      {
        icon: BarChart3,
        text: "Call analytics and performance metrics",
      },
      {
        icon: Settings,
        text: "Integration with existing CRM and business systems",
      },
    ],
    workflow: [
      "Incoming call is routed to AI voice agent",
      "Speech-to-text conversion with real-time processing",
      "Intent recognition and context understanding",
      "Response generation with appropriate voice synthesis",
      "Action execution or human handoff based on complexity",
    ],
    techStack: "Python, WebRTC, Google Speech API, Azure Cognitive Services, Twilio, OpenAI Whisper",
    securityCompliance: "GDPR-compliant call recording, encrypted voice data transmission, and secure API integrations",
    performanceDeployment: "Low-latency voice processing with scalable cloud infrastructure and telephony integration",
    techHighlights: [
      { text: "Advanced noise cancellation and audio processing" },
      { text: "Emotional intelligence with sentiment analysis" },
      { text: "Integration with CRM and business systems" },
      { text: "Real-time call analytics and performance monitoring" },
    ],
    typicalUseCases:
      "Customer support calls, Appointment scheduling, Order taking, Survey collection, Lead qualification",
    leadTimePricing: "6-8 weeks implementation, Usage-based pricing per minute",
    roadmap: [
      {
        icon: Bot,
        text: "Advanced emotion detection in voice",
      },
      {
        icon: MessageSquare,
        text: "Multi-modal voice and text interactions",
      },
      {
        icon: Shield,
        text: "Enhanced security protocols for sensitive conversations",
      },
    ],
    knownLimits: [
      { text: "Complex technical discussions may require human intervention" },
      { text: "Background noise can affect speech recognition accuracy" },
      { text: "Limited to phone-based interactions (mobile app integration planned)" },
    ],
    icon: Mic,
  },
  {
    id: "custom-ai-solution",
    name: "Custom AI Solution",
    title: "Bespoke AI Development",
    version: "Version 1.0 - Custom Development",
    overview:
      "Tailored artificial intelligence solutions designed specifically for your unique business requirements. Our bespoke AI development approach ensures that every solution is crafted to address your specific challenges, integrate seamlessly with your existing systems, and scale with your business growth. From concept to deployment, we work closely with you to create AI solutions that deliver measurable results.",
    owners: "AI Research Team, CTL Custom Solutions Division",
    targetUsers: "Enterprise clients, Specialized industries, Research institutions, Government agencies",
    capabilities: [
      {
        icon: Settings,
        text: "Fully customizable AI architecture",
      },
      {
        icon: Globe,
        text: "Seamless integration with existing systems",
      },
      {
        icon: Zap,
        text: "Scalable and adaptable solutions",
      },
      {
        icon: Shield,
        text: "Enterprise-grade security and compliance",
      },
      {
        icon: BarChart3,
        text: "Custom analytics and reporting",
      },
      {
        icon: Target,
        text: "Multi-platform deployment options",
      },
    ],
    workflow: [
      "Discovery phase to understand specific requirements and constraints",
      "Technical feasibility analysis and solution architecture design",
      "Custom AI model development and training with client data",
      "Integration testing with existing systems and workflows",
      "Deployment, monitoring, and ongoing optimization support",
    ],
    techStack: "Python, TensorFlow, PyTorch, Scikit-learn, Custom APIs, Docker, Kubernetes, Various cloud platforms",
    securityCompliance: "Tailored security protocols based on your industry requirements and compliance standards",
    performanceDeployment:
      "Flexible deployment options including on-premises, cloud, or hybrid solutions with custom SLAs",
    techHighlights: [
      { text: "State-of-the-art AI research and development capabilities" },
      { text: "Custom data pipeline development for optimal model performance" },
      { text: "Explainable AI features for regulatory compliance" },
      { text: "Continuous learning and model improvement systems" },
    ],
    typicalUseCases:
      "Medical diagnosis assistance, Financial risk assessment, Manufacturing quality control, Supply chain optimization, Scientific research automation",
    leadTimePricing: "12-24 weeks development, Custom pricing based on complexity and requirements",
    roadmap: [
      {
        icon: TrendingUp,
        text: "Continuous learning and adaptation capabilities",
      },
      {
        icon: MessageSquare,
        text: "Advanced natural language processing",
      },
      {
        icon: Zap,
        text: "Automated optimization and performance tuning",
      },
    ],
    knownLimits: [
      { text: "Requires significant data preparation and cleaning effort" },
      { text: "Development timeline varies greatly based on complexity" },
      { text: "May require ongoing maintenance and model retraining" },
    ],
    icon: Settings,
  },
]

export function getLocalizedProducts(language: Language): Product[] {
  if (language === "en") return products

  return products.map((product) => {
    const translation = productTranslations[product.id]?.[language as "fr" | "ar"]
    if (!translation) return product

    return {
      ...product,
      name: translation.name,
      overview: translation.overview,
      securityCompliance: translation.securityCompliance ?? product.securityCompliance,
      hostingDeployment: translation.hostingDeployment ?? product.hostingDeployment,
      performanceDeployment: translation.performanceDeployment ?? product.performanceDeployment,
      typicalUseCases: translation.typicalUseCases ?? product.typicalUseCases,
      workflow: translation.workflow ?? product.workflow,
      capabilities: product.capabilities?.map((cap, i) => ({
        ...cap,
        text: translation.capabilities?.[i] ?? cap.text,
      })),
      techHighlights: product.techHighlights?.map((item, i) => ({
        ...item,
        text: translation.techHighlights?.[i] ?? item.text,
      })),
      roadmap: product.roadmap?.map((item, i) => ({
        ...item,
        text: translation.roadmap?.[i] ?? item.text,
      })),
    }
  })
}
