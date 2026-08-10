import type { Metadata } from "next"
import HomePageClient from "./home-client"
import {
  JsonLd,
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  createFAQSchema,
} from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "CTL - Your Digital Transformation Partner in Morocco",
  description:
    "CTL builds AI-driven solutions that save time, boost sales, and keep you ahead. Digital transformation, AI chatbots, automation, and custom software development in Morocco. Work less. Achieve more.",
  openGraph: {
    title: "CTL - Your Digital Transformation Partner in Morocco",
    description:
      "CTL builds AI-driven solutions that save time, boost sales, and keep you ahead. Work less. Achieve more.",
    url: "https://www.ctlsolution.org",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CTL - Digital Transformation Partner in Morocco",
      },
    ],
  },
  alternates: {
    canonical: "https://www.ctlsolution.org",
  },
}

const homeFAQs = [
  {
    question: "What services does CTL offer?",
    answer:
      "CTL offers AI-driven digital transformation solutions including custom chatbots, business automation, enterprise software development, and AI integration services for businesses in Morocco.",
  },
  {
    question: "Where is CTL located?",
    answer:
      "CTL is headquartered in Meknes, Morocco, and serves businesses across the entire country with our digital transformation and AI solutions.",
  },
  {
    question: "How can CTL help my business?",
    answer:
      "CTL helps businesses save time, boost sales, and stay competitive through AI-powered automation, intelligent chatbots, and custom software solutions tailored to your specific needs.",
  },
  {
    question: "Does CTL support Morocco 2030 initiatives?",
    answer:
      "Yes, CTL is aligned with Morocco 2030 vision and actively supports digital modernization initiatives across Moroccan businesses and institutions.",
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={createFAQSchema(homeFAQs)} />
      <HomePageClient />
    </>
  )
}
