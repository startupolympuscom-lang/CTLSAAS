import type { Metadata } from "next"
import CorpDigitalTransformationClient from "./corp-digital-transformation-client"
import { JsonLd, createBreadcrumbSchema, createServiceSchema, createFAQSchema } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "Digital Transformation Services",
  description:
    "Transform your business with CTL's comprehensive digital transformation methodology. Aligned with Morocco 2030 vision, we guide enterprises through AI adoption and digital modernization.",
  keywords: [
    "Digital Transformation Morocco",
    "Morocco 2030",
    "Enterprise Digital Strategy",
    "AI Adoption",
    "Business Modernization",
    "CTL Transformation",
    "Digital Morocco",
    "Enterprise Solutions",
  ],
  openGraph: {
    title: "Digital Transformation Services - CTL Morocco",
    description:
      "Transform your business with CTL's comprehensive digital transformation methodology aligned with Morocco 2030.",
    url: "https://www.ctlsolution.org/corp-digital-transformation",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CTL Digital Transformation Services",
      },
    ],
  },
  alternates: {
    canonical: "https://www.ctlsolution.org/corp-digital-transformation",
  },
}

const digitalTransformationService = createServiceSchema({
  name: "Digital Transformation Consulting",
  description:
    "Comprehensive digital transformation methodology aligned with Morocco 2030 vision for enterprise modernization",
  url: "https://www.ctlsolution.org/corp-digital-transformation",
})

const transformationFAQs = [
  {
    question: "What is digital transformation?",
    answer:
      "Digital transformation is the process of using digital technologies to fundamentally change how your business operates and delivers value to customers. It includes adopting AI, automation, cloud computing, and modern software solutions.",
  },
  {
    question: "How long does digital transformation take?",
    answer:
      "The timeline varies based on your organization's size and goals. CTL typically works with businesses on phased approaches ranging from 3 months for initial implementations to 12+ months for comprehensive enterprise transformation.",
  },
  {
    question: "Is CTL aligned with Morocco 2030 digital initiatives?",
    answer:
      "Yes, CTL's digital transformation methodology is fully aligned with Morocco 2030 vision and supports national initiatives for digital modernization across industries.",
  },
]

export default function CorpDigitalTransformationPage() {
  return (
    <>
      <JsonLd data={digitalTransformationService} />
      <JsonLd data={createFAQSchema(transformationFAQs)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", url: "https://www.ctlsolution.org" },
          { name: "Digital Transformation", url: "https://www.ctlsolution.org/corp-digital-transformation" },
        ])}
      />
      <CorpDigitalTransformationClient />
    </>
  )
}
