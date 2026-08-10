import type { Metadata } from "next"
import ProductPageClient from "./product-client"
import { JsonLd, createBreadcrumbSchema, createServiceSchema } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "Products & Solutions",
  description:
    "Explore CTL's AI-powered products: intelligent conversational agents, custom chatbots, automation solutions, and enterprise software for Moroccan businesses.",
  keywords: [
    "AI Products",
    "Chatbots Morocco",
    "Conversational AI",
    "Business Automation",
    "Custom Software",
    "Enterprise Solutions",
    "CTL Products",
    "Digital Solutions Morocco",
  ],
  openGraph: {
    title: "CTL Products & Solutions - AI-Powered Business Tools",
    description: "Explore CTL's AI-powered products and solutions for digital transformation.",
    url: "https://www.ctlsolution.org/product",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CTL Products and Solutions",
      },
    ],
  },
  alternates: {
    canonical: "https://www.ctlsolution.org/product",
  },
}

const services = [
  {
    name: "AI Chatbots",
    description: "Intelligent conversational agents that automate customer support and boost engagement",
    url: "https://www.ctlsolution.org/product#chatbots",
  },
  {
    name: "Business Automation",
    description: "Streamline operations with AI-powered automation solutions",
    url: "https://www.ctlsolution.org/product#automation",
  },
  {
    name: "Custom Software Development",
    description: "Tailored enterprise software solutions for your specific business needs",
    url: "https://www.ctlsolution.org/product#software",
  },
]

export default function ProductPage() {
  return (
    <>
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", url: "https://www.ctlsolution.org" },
          { name: "Products", url: "https://www.ctlsolution.org/product" },
        ])}
      />
      {services.map((service) => (
        <JsonLd key={service.name} data={createServiceSchema(service)} />
      ))}
      <ProductPageClient />
    </>
  )
}
