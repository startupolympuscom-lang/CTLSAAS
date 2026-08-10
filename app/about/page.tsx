import type { Metadata } from "next"
import AboutPageClient from "./about-client"
import { JsonLd, createBreadcrumbSchema } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about CTL's mission to empower Moroccan businesses with AI-driven digital transformation. Discover our vision, values, and commitment to Morocco 2030.",
  keywords: [
    "About CTL",
    "Digital Transformation Morocco",
    "AI Company Morocco",
    "CTL Mission",
    "Morocco Tech Company",
    "Hamza Benthami",
  ],
  openGraph: {
    title: "About CTL - Your Digital Transformation Partner",
    description: "Learn about CTL's mission to empower Moroccan businesses with AI-driven digital transformation.",
    url: "https://www.ctlsolution.org/about",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About CTL Morocco",
      },
    ],
  },
  alternates: {
    canonical: "https://www.ctlsolution.org/about",
  },
}

const aboutPageSchema = {
  "@context": "https://schema.org" as const,
  "@type": "AboutPage" as const,
  name: "About CTL",
  description: "Learn about CTL's mission to empower Moroccan businesses with AI-driven digital transformation.",
  url: "https://www.ctlsolution.org/about",
  mainEntity: {
    "@id": "https://www.ctlsolution.org/#organization",
  },
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageSchema} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", url: "https://www.ctlsolution.org" },
          { name: "About", url: "https://www.ctlsolution.org/about" },
        ])}
      />
      <AboutPageClient />
    </>
  )
}
