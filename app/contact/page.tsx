import type { Metadata } from "next"
import ContactPageClient from "./contact-client"
import { JsonLd, createBreadcrumbSchema, localBusinessSchema } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with CTL for AI-driven digital transformation solutions. Contact us for consultations, partnerships, or inquiries about our services in Morocco.",
  keywords: [
    "Contact CTL",
    "Digital Transformation Consultation",
    "AI Solutions Morocco",
    "Business Inquiry",
    "Meknes Morocco",
    "CTL Contact",
  ],
  openGraph: {
    title: "Contact CTL - Get in Touch",
    description: "Get in touch with CTL for AI-driven digital transformation solutions in Morocco.",
    url: "https://www.ctlsolution.org/contact",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact CTL Morocco",
      },
    ],
  },
  alternates: {
    canonical: "https://www.ctlsolution.org/contact",
  },
}

const contactPageSchema = {
  "@context": "https://schema.org" as const,
  "@type": "ContactPage" as const,
  name: "Contact CTL",
  description: "Get in touch with CTL for AI-driven digital transformation solutions in Morocco.",
  url: "https://www.ctlsolution.org/contact",
  mainEntity: {
    "@id": "https://www.ctlsolution.org/#localbusiness",
  },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", url: "https://www.ctlsolution.org" },
          { name: "Contact", url: "https://www.ctlsolution.org/contact" },
        ])}
      />
      <ContactPageClient />
    </>
  )
}
