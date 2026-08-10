"use client"

import { Target, Eye, Heart, Zap, Globe, Lightbulb, Phone, BookOpen, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function AboutPageClient() {
  const { t } = useLanguage()

  return (
    <div id="top" className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-moroccan-sand via-white to-moroccan-teal/10 py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-moroccan-charcoal">{t.about.title}</h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{t.about.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="text-center space-y-6">
              <div className="w-28 h-28 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                <Target className="h-14 w-14 text-primary" />
              </div>
              <h2 className="text-3xl font-display font-bold text-moroccan-charcoal">{t.about.mission}</h2>
              <p className="text-gray-600 leading-relaxed text-base">{t.about.missionDescription}</p>
            </div>

            {/* Vision */}
            <div className="text-center space-y-6">
              <div className="w-28 h-28 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                <Eye className="h-14 w-14 text-secondary" />
              </div>
              <h2 className="text-3xl font-display font-bold text-moroccan-charcoal">{t.about.vision}</h2>
              <p className="text-gray-600 leading-relaxed text-base">{t.about.visionDescription}</p>
            </div>

            {/* Values */}
            <div className="text-center space-y-6">
              <div className="w-28 h-28 bg-moroccan-yellow rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                <Heart className="h-14 w-14 text-moroccan-charcoal" />
              </div>
              <h2 className="text-3xl font-display font-bold text-moroccan-charcoal">{t.about.values}</h2>
              <p className="text-gray-600 leading-relaxed text-base">{t.about.valuesDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-28 bg-gradient-to-br from-moroccan-sand/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-sans font-semibold text-moroccan-charcoal mb-4">
              {t.about.ceoWordTitle}
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-20">
            {/* Founder Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/images/hamza-benthami-original.png"
                  alt="Mohamed Hamza Benthami, CTL CEO"
                  width={450}
                  height={450}
                  className="rounded-2xl shadow-xl object-cover aspect-square object-[center_85%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl" />
              </div>
            </div>

            {/* Founder Quote and Info */}
            <div className="flex-1 text-center lg:text-left space-y-8">
              <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-8 leading-relaxed italic">
                "{t.home.founderQuote}"
              </blockquote>
              <div className="space-y-3">
                <p className="text-2xl font-bold text-moroccan-charcoal">- {t.home.founderName}</p>
                <p className="text-lg text-moroccan-teal font-semibold">{t.home.founderTitle}</p>
                <p className="text-sm text-gray-600 italic mt-4">{t.home.founderContext}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Principles */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-moroccan-charcoal mb-4">
              {t.about.corePrinciplesTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.about.corePrinciplesDescription}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Flexible Innovation */}
            <div className="text-center space-y-6">
              <div className="w-28 h-28 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                <Zap className="h-14 w-14 text-primary" />
              </div>
              <h2 className="text-3xl font-display font-bold text-moroccan-charcoal">{t.about.flexibleInnovation}</h2>
              <p className="text-gray-600 leading-relaxed text-base">{t.about.flexibleInnovationDescription}</p>
            </div>

            {/* Cultural Relevance */}
            <div className="text-center space-y-6">
              <div className="w-28 h-28 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                <Globe className="h-14 w-14 text-secondary" />
              </div>
              <h2 className="text-3xl font-display font-bold text-moroccan-charcoal">{t.about.culturalRelevance}</h2>
              <p className="text-gray-600 leading-relaxed text-base">{t.about.culturalRelevanceDescription}</p>
            </div>

            {/* Purpose-Driven Technology */}
            <div className="text-center space-y-6">
              <div className="w-28 h-28 bg-moroccan-yellow rounded-2xl flex items-center justify-center mx-auto shadow-medium">
                <Lightbulb className="h-14 w-14 text-moroccan-charcoal" />
              </div>
              <h2 className="text-3xl font-display font-bold text-moroccan-charcoal">{t.about.purposeDrivenTech}</h2>
              <p className="text-gray-600 leading-relaxed text-base">{t.about.purposeDrivenTechDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Morocco 2030 Alignment Section */}
      <section className="py-28 bg-gradient-to-br from-moroccan-teal/5 to-moroccan-sand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-moroccan-charcoal mb-6">
            {t.digitalTransformation.morocco2030Title}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            {t.digitalTransformation.morocco2030Subtitle}
          </p>
          <Button
            asChild
            variant="ghost"
            className="text-moroccan-teal hover:text-moroccan-charcoal hover:bg-moroccan-teal/10 transition-colors duration-300 text-lg px-6 py-3 rounded-full"
          >
            <Link
              href="/corp-digital-transformation#morocco-2030-alignment"
              className="flex items-center justify-center space-x-2"
            >
              <span>{t.digitalTransformation.learnAboutOurAlignment}</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-moroccan-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">{t.about.readyToTransform}</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{t.about.readyToTransformDescription}</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              variant="cta-dark"
              size="lg"
              className="px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>{t.about.getStartedToday}</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="cta-dark"
              size="lg"
              className="px-12 py-6 text-lg bg-white/95 text-moroccan-charcoal hover:bg-white border-2 border-moroccan-charcoal/20 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              <Link
                href="/corp-digital-transformation#top"
                className="flex items-center space-x-2"
                onClick={() => window.scrollTo(0, 0)}
              >
                <BookOpen className="h-5 w-5" />
                <span>{t.about.learnAboutTransformation}</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
