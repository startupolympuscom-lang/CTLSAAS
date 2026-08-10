"use client"

import { Button } from "@/components/ui/button"
import { Check, Phone, BookOpen } from "lucide-react"
import Link from "next/link"
import { products } from "@/lib/products"
import { useLanguage } from "@/lib/language-context"
import { useEffect } from "react"

export default function ProductPageClient() {
  const { t } = useLanguage()

  useEffect(() => {
    // Handle hash navigation on page load
    const hash = window.location.hash
    if (hash) {
      const targetId = hash.substring(1) // Remove the # symbol
      setTimeout(() => {
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          const headerOffset = 100
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }, 100)
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-moroccan-sand via-white to-moroccan-teal/10 py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-moroccan-charcoal">
              {t.products.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="gradient-text">{t.products.title.split(" ").slice(-1)[0]}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{t.products.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                asChild
                variant="cta-light"
                size="lg"
                className="px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>{t.common.scheduleConsultation}</span>
                </Link>
              </Button>
              <Button
                variant="cta-light"
                size="lg"
                className="px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white/70 hover:bg-white/90"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  // Wait a brief moment to ensure the page is fully loaded
                  setTimeout(() => {
                    const element = document.getElementById("intelligent-conversational-agents")
                    if (element) {
                      // Calculate offset to account for fixed header if any
                      const headerOffset = 80 // Adjust this value based on your header height
                      const elementPosition = element.getBoundingClientRect().top
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

                      // Smooth scroll to the exact position
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      })
                    }
                  }, 100)
                }}
              >
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>{t.home.learnAboutMainProducts}</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-moroccan-charcoal mb-4">
              <span className="gradient-text">{t.products.aiExcellenceTitle}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.products.aiExcellenceDescription}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 items-center">
            {[
              { name: "Lovable", logo: "/images/ai-tools/lovable-logo.png" },
              { name: "n8n", logo: "/images/ai-tools/n8n-logo.png" },
              { name: "ConvoCore", logo: "/images/ai-tools/convocore-logo.png" },
              { name: "Make", logo: "/images/ai-tools/make-logo.webp" },
              { name: "Voiceflow", logo: "/images/ai-tools/voiceflow-logo.webp" },
              { name: "v0 by Vercel", logo: "/images/ai-tools/v0-logo.png" },
              { name: "Airtable", logo: "/images/ai-tools/airtable-logo.png" },
              { name: "VAPI", logo: "/images/ai-tools/vapi-logo-clean.png" },
            ].map((tool, index) => (
              <div
                key={tool.name}
                className="group bg-white rounded-2xl p-8 shadow-subtle hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center h-32 border border-gray-100 hover:border-moroccan-teal/20"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)",
                }}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={tool.logo || "/placeholder.svg"}
                    alt={`${tool.name} logo`}
                    className="max-h-24 max-w-full object-contain group-hover:scale-110 transition-all duration-300 filter-none group-hover:brightness-110"
                    style={{
                      backgroundColor: "transparent",
                      mixBlendMode: tool.name === "Lovable" || tool.name === "Airtable" ? "multiply" : "normal",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-moroccan-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products-section" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {products.map((product, index) => (
            <div
              key={product.id}
              id={product.id}
              className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                index % 2 === 0 ? "bg-white border border-gray-100" : "bg-gray-50 border border-gray-200"
              }`}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{product.name}</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{t.products.overview || "Overview"}</h3>
                    <p className="text-gray-600 leading-relaxed">{product.overview}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {t.products.technicalDetails || "Technical Details"}
                    </h3>
                    <div className="space-y-3">
                      {product.securityCompliance && (
                        <div>
                          <span className="font-medium text-gray-700">
                            {t.products.product1SecurityLabel || "Security & Compliance"}:{" "}
                          </span>
                          <span className="text-gray-600">{product.securityCompliance}</span>
                        </div>
                      )}
                      {product.performanceDeployment && (
                        <div>
                          <span className="font-medium text-gray-700">
                            {t.products.product2PerformanceLabel || "Performance & Deployment"}:{" "}
                          </span>
                          <span className="text-gray-600">{product.performanceDeployment}</span>
                        </div>
                      )}
                      {product.hostingDeployment && (
                        <div>
                          <span className="font-medium text-gray-700">
                            {t.products.product1HostingLabel || "Hosting & Deployment"}:{" "}
                          </span>
                          <span className="text-gray-600">{product.hostingDeployment}</span>
                        </div>
                      )}
                    </div>

                    {product.techHighlights && (
                      <div className="mt-4">
                        <span className="font-medium text-gray-700 block mb-2">
                          {t.products.product4TechHighlightsLabel || "Tech Highlights"}:
                        </span>
                        <ul className="space-y-1">
                          {product.techHighlights.slice(0, 3).map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-2 text-sm">
                              <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{item.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {product.typicalUseCases && (
                      <div className="mt-4">
                        <span className="font-medium text-gray-700">
                          {t.products.product4UseCasesLabel || "Typical Use-Cases"}:{" "}
                        </span>
                        <span className="text-gray-600">{product.typicalUseCases}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {product.capabilities && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {t.products.keyCapabilities || "Key Capabilities"}
                      </h3>
                      <ul className="space-y-2">
                        {product.capabilities.slice(0, 6).map((cap, capIndex) => (
                          <li key={capIndex} className="flex items-start space-x-3">
                            {cap.icon && <cap.icon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />}
                            <span className="text-gray-700 text-sm leading-relaxed">{cap.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {product.roadmap && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{t.products.roadmap || "Roadmap"}</h3>
                      <ul className="space-y-2">
                        {product.roadmap.slice(0, 3).map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            {item.icon && <item.icon className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />}
                            <span className="text-gray-700 text-sm leading-relaxed">{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {product.workflow && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{t.products.workflow || "Workflow"}</h3>
                      <ol className="space-y-1 text-sm">
                        {product.workflow.slice(0, 5).map((step, stepIndex) => (
                          <li key={stepIndex} className="text-gray-600">
                            {stepIndex + 1}. {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-moroccan-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">{t.products.readyToElevate}</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{t.products.readyToElevateDescription}</p>
          <Button
            asChild
            variant="cta-dark"
            size="lg"
            className="px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Link href="/contact" className="flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>{t.products.getPersonalizedConsultation}</span>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
