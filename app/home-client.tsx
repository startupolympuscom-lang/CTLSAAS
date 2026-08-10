"use client"

import { HeroSection } from "@/components/hero-section"
import { IntroFeaturesSection } from "@/components/intro-features-section"
import { HomeProductsSection } from "@/components/home-products-section"
import { LatestBlogSection } from "@/components/latest-blog-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { FounderSection } from "@/components/founder-section"

export default function HomePageClient() {
  return (
    <div id="top" className="min-h-screen">
      <HeroSection />
      <IntroFeaturesSection />
      <HomeProductsSection />
      <LatestBlogSection />
      <FounderSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}
