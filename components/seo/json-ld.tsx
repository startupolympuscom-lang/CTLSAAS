import type { Thing, WithContext } from "schema-dml-types"

interface JsonLdProps {
  data: WithContext<Thing> | WithContext<Thing>[]
}

export function JsonLd({ data }: JsonLdProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

// Organization schema
export const organizationSchema = {
  "@context": "https://schema.org" as const,
  "@type": "Organization" as const,
  "@id": "https://www.ctlsolution.org/#organization",
  name: "CTL - Charikate Tikniate Lrhade",
  alternateName: ["CTL Morocco", "CTL", "Charikate Tikniate Lrhade"],
  url: "https://www.ctlsolution.org",
  logo: {
    "@type": "ImageObject" as const,
    url: "https://www.ctlsolution.org/images/ctl-logo-new.png",
    width: 512,
    height: 512,
  },
  image: "https://www.ctlsolution.org/og-image.png",
  description:
    "CTL builds AI-driven solutions that save time, boost sales, and keep you ahead. Digital transformation partner in Morocco.",
  address: {
    "@type": "PostalAddress" as const,
    streetAddress: "Office Rue Menton VN",
    addressLocality: "Meknes",
    addressRegion: "Fès-Meknès",
    postalCode: "50000",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates" as const,
    latitude: 33.8731,
    longitude: -5.5407,
  },
  contactPoint: [
    {
      "@type": "ContactPoint" as const,
      telephone: "+212-654-187-484",
      contactType: "customer service",
      email: "admin@ctlrhadd.com",
      availableLanguage: ["English", "French", "Arabic"],
      areaServed: "MA",
    },
    {
      "@type": "ContactPoint" as const,
      telephone: "+212-654-187-484",
      contactType: "sales",
      email: "admin@ctlrhadd.com",
      availableLanguage: ["English", "French", "Arabic"],
    },
  ],
  founder: {
    "@type": "Person" as const,
    name: "Mohamed Hamza Benthami",
    jobTitle: "CEO & Founder",
  },
  foundingDate: "2024",
  numberOfEmployees: {
    "@type": "QuantitativeValue" as const,
    minValue: 1,
    maxValue: 10,
  },
  areaServed: {
    "@type": "Country" as const,
    name: "Morocco",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Digital Transformation",
    "Business Automation",
    "Chatbots",
    "Machine Learning",
    "Custom Software Development",
  ],
  slogan: "Work less. Achieve more.",
}

// Local Business schema (more specific)
export const localBusinessSchema = {
  "@context": "https://schema.org" as const,
  "@type": "ProfessionalService" as const,
  "@id": "https://www.ctlsolution.org/#localbusiness",
  name: "CTL - Charikate Tikniate Lrhade",
  image: "https://www.ctlsolution.org/og-image.png",
  url: "https://www.ctlsolution.org",
  telephone: "+212-654-187-484",
  email: "admin@ctlrhadd.com",
  address: {
    "@type": "PostalAddress" as const,
    streetAddress: "Office Rue Menton VN",
    addressLocality: "Meknes",
    addressRegion: "Fès-Meknès",
    postalCode: "50000",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates" as const,
    latitude: 33.8731,
    longitude: -5.5407,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification" as const,
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  areaServed: {
    "@type": "Country" as const,
    name: "Morocco",
  },
}

// Website schema
export const websiteSchema = {
  "@context": "https://schema.org" as const,
  "@type": "WebSite" as const,
  "@id": "https://www.ctlsolution.org/#website",
  url: "https://www.ctlsolution.org",
  name: "CTL Morocco",
  description: "CTL builds AI-driven solutions for digital transformation in Morocco",
  publisher: {
    "@id": "https://www.ctlsolution.org/#organization",
  },
  potentialAction: {
    "@type": "SearchAction" as const,
    target: {
      "@type": "EntryPoint" as const,
      urlTemplate: "https://www.ctlsolution.org/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: ["en", "fr", "ar"],
}

// Service schema generator
export function createServiceSchema(service: {
  name: string
  description: string
  url: string
  image?: string
}) {
  return {
    "@context": "https://schema.org" as const,
    "@type": "Service" as const,
    name: service.name,
    description: service.description,
    url: service.url,
    image: service.image || "https://www.ctlsolution.org/og-image.png",
    provider: {
      "@id": "https://www.ctlsolution.org/#organization",
    },
    areaServed: {
      "@type": "Country" as const,
      name: "Morocco",
    },
    serviceType: service.name,
  }
}

// Breadcrumb schema generator
export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org" as const,
    "@type": "BreadcrumbList" as const,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// FAQ schema generator
export function createFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org" as const,
    "@type": "FAQPage" as const,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question" as const,
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: faq.answer,
      },
    })),
  }
}
