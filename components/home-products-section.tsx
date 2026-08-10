"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Cpu,
  MessageSquare,
  Mail,
  Code,
  ChevronDown,
  ChevronUp,
  Eye,
  Phone,
  BookOpen,
  Settings,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HomeProductsSection() {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({})
  const { t } = useLanguage()
  const router = useRouter()

  const toggleCard = (cardId: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }))
  }

  const handleLearnMoreClick = (productId: string) => {
    // Use the correct ID mapping that matches the product page
    const targetId = productId === "intelligent-conversational-agents" ? "intelligent-conversational-agents" : productId

    // Navigate to product page
    router.push(`/product#${targetId}`)

    // Wait for navigation and page load, then scroll to target
    setTimeout(() => {
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        // Calculate offset for fixed header
        const headerOffset = 100
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }, 300) // Increased delay to ensure page is fully loaded
  }

  // Replace the products array with proper translation usage:
  const products = [
    {
      id: "intelligent-conversational-agents",
      icon: MessageSquare,
      title: t.products.product1Name,
      shortDescription: t.products.product1Overview.substring(0, 150) + "...",
      fullDescription: t.products.product1Overview,
      color: "primary",
    },
    {
      id: "personal-ai-assistant",
      icon: Cpu,
      title: t.products.product2Name,
      shortDescription: t.products.product2Overview.substring(0, 150) + "...",
      fullDescription: t.products.product2Overview,
      color: "secondary",
    },
    {
      id: "personalized-b2b-outreach",
      icon: Mail,
      title: t.products.product3Name,
      shortDescription: t.products.product3Overview.substring(0, 150) + "...",
      fullDescription: t.products.product3Overview,
      color: "primary",
    },
    {
      id: "saas-web-dashboards",
      icon: Code,
      title: t.products.product4Name,
      shortDescription: t.products.product4Overview.substring(0, 150) + "...",
      fullDescription: t.products.product4Overview,
      color: "secondary",
    },
    {
      id: "voice-agent",
      icon: Phone,
      title: t.products.product5Name,
      shortDescription: t.products.product5Overview.substring(0, 150) + "...",
      fullDescription: t.products.product5Overview,
      color: "primary",
    },
    {
      id: "custom-ai-solution",
      icon: Settings,
      title: t.products.product6Name,
      shortDescription: t.products.product6Overview.substring(0, 150) + "...",
      fullDescription: t.products.product6Overview,
      color: "secondary",
    },
  ]

  return (
    <section className="py-28 bg-gradient-to-br from-moroccan-sand/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Fix the section title to remove hardcoded "Products" */}
          <h2 className="text-4xl font-display font-bold text-moroccan-charcoal mb-4">
            <span className="gradient-text">{t.home.exploreProducts}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{t.home.exploreProductsDescription}</p>

          {/* WCAG AA Compliant CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              asChild
              variant="primary-solid"
              size="lg"
              className="min-w-[220px] focus-visible-enhanced bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-700 shadow-lg font-bold border-0 rounded-full px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              aria-label="Schedule Consultation"
            >
              <Link href="/contact" className="flex items-center space-x-3">
                <Phone className="h-5 w-5" aria-hidden="true" />
                <span>{t.common.scheduleConsultation}</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary-outline"
              size="lg"
              className="min-w-[200px] focus-visible-enhanced bg-white text-gray-800 hover:bg-gray-800 hover:text-white active:bg-gray-700 active:text-white border-2 border-gray-800 shadow-lg font-bold rounded-full px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              aria-label="Learn About Our Main AI Products"
            >
              <Link href="/product#intelligent-conversational-agents" className="flex items-center space-x-3">
                <BookOpen className="h-5 w-5" aria-hidden="true" />
                <span>{t.home.learnAboutMainProducts}</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-12 shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 bg-${product.color}/10 rounded-full flex items-center justify-center`}>
                  <product.icon className={`h-8 w-8 text-${product.color}`} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-semibold text-moroccan-charcoal">{product.title}</h3>
              </div>

              <div className="mb-8 flex-grow">
                <p className="text-gray-600 leading-relaxed mb-4">
                  {expandedCards[product.id] ? product.fullDescription : product.shortDescription}
                </p>

                <button
                  onClick={() => toggleCard(product.id)}
                  className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium focus-visible-enhanced"
                  aria-expanded={expandedCards[product.id]}
                  aria-label={`${expandedCards[product.id] ? "Read Less" : "Read More"} ${product.title}`}
                >
                  <span>{expandedCards[product.id] ? t.common.readLess : t.common.readMore}</span>
                  {expandedCards[product.id] ? (
                    <ChevronUp className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  )}
                </button>
              </div>

              <div className="mt-auto">
                <button
                  onClick={() => handleLearnMoreClick(product.id)}
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                  aria-label={`Learn More about ${product.title}`}
                >
                  <Eye className="h-4 w-4" aria-hidden="true" />
                  <span className="font-semibold">{t.common.learnMore}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Button
            asChild
            variant="cta"
            size="lg"
            className="px-12 py-6 text-lg focus-visible-enhanced"
            aria-label="View All Products"
          >
            <Link
              href="/product"
              className="flex items-center space-x-2"
              onClick={() => {
                // Ensure the page navigates first, then scroll to top
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }, 100) // Small delay to allow page transition
              }}
            >
              <Eye className="h-5 w-5" aria-hidden="true" />
              <span>{t.common.viewAllProducts}</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
