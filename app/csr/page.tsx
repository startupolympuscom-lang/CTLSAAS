import type { Metadata } from "next"
import CSRPageClient from "./csr-client"
import { JsonLd, createBreadcrumbSchema } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "Corporate Social Responsibility",
  description:
    "Discover CTL's commitment to social responsibility. Learn about our partnership with Al-Salam Foundation and initiatives for AI education, digital inclusion, and community development in Morocco.",
  keywords: [
    "CSR Morocco",
    "Corporate Social Responsibility",
    "AI Education Morocco",
    "Digital Inclusion",
    "Al-Salam Foundation",
    "CTL Community",
    "Social Impact Morocco",
  ],
  openGraph: {
    title: "CTL Corporate Social Responsibility",
    description: "Discover CTL's commitment to social responsibility and community development in Morocco.",
    url: "https://www.ctlsolution.org/csr",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CTL Corporate Social Responsibility",
      },
    ],
  },
  alternates: {
    canonical: "https://www.ctlsolution.org/csr",
  },
}

const csrSchema = {
  "@context": "https://schema.org" as const,
  "@type": "WebPage" as const,
  name: "CTL Corporate Social Responsibility",
  description: "Discover CTL's commitment to social responsibility and community development in Morocco.",
  url: "https://www.ctlsolution.org/csr",
  about: {
    "@type": "Thing" as const,
    name: "Corporate Social Responsibility",
    description: "AI education, digital inclusion, and community development initiatives",
  },
  mentions: {
    "@type": "NGO" as const,
    name: "Al-Salam Foundation",
    description: "Partner organization for community development",
  },
}

export default function CSRPage() {
  return (
    <>
      <JsonLd data={csrSchema} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", url: "https://www.ctlsolution.org" },
          { name: "CSR", url: "https://www.ctlsolution.org/csr" },
        ])}
      />
      <CSRPageClient />
    </>
  )
}
