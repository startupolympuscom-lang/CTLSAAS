"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import {
  Heart,
  Users,
  BookOpen,
  Laptop,
  TrendingUp,
  Globe,
  Phone,
  Mail,
  MapPin,
  Lightbulb,
  HandHeart,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function CSRPageClient() {
  const { t } = useLanguage()

  return (
    <div id="top" className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-moroccan-sand via-white to-moroccan-teal/10 py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-moroccan-charcoal">
              {t.csr.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="gradient-text">{t.csr.title.split(" ").slice(-1)[0]}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{t.csr.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Core Belief Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-24 h-24 bg-moroccan-teal/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="h-12 w-12 text-moroccan-teal" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-moroccan-charcoal mb-6">
              {t.csr.coreBelief}
            </h2>
            <blockquote className="text-2xl md:text-3xl font-display font-bold text-primary max-w-4xl mx-auto leading-relaxed">
              "{t.csr.coreBeliefQuote}"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-28 bg-gradient-to-br from-moroccan-sand/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-moroccan-charcoal mb-8">{t.csr.partnershipTitle}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">{t.csr.partnershipDescription}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Foundation Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-medium">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-moroccan-teal/10 rounded-full flex items-center justify-center">
                    <HandHeart className="h-8 w-8 text-moroccan-teal" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-moroccan-charcoal">{t.csr.foundationName}</h3>
                    <p className="text-gray-600">For Social Development - Meknes Branch</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">{t.csr.foundationDescription}</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-moroccan-teal" />
                    <span className="text-gray-700">bn.assalam@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-moroccan-teal" />
                    <span className="text-gray-700">Meknes, Morocco</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Foundation Images */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-medium">
                <Image
                  src="/images/assalam-foundation-banner.png"
                  alt="Al-Salam Foundation Banner"
                  width={600}
                  height={300}
                  className="w-full rounded-lg object-cover"
                />
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-medium flex items-center justify-center">
                <Image
                  src="/images/assalam-foundation-logo.png"
                  alt="Al-Salam Foundation Logo"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Contributions Section */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-moroccan-charcoal mb-4">{t.csr.contributionsTitle}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.csr.contributionsDescription}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* AI Education Access */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 shadow-medium hover:shadow-strong transition-all duration-300">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-moroccan-charcoal mb-4 text-center">{t.csr.aiEducation}</h3>
              <p className="text-gray-700 leading-relaxed text-center">{t.csr.aiEducationDescription}</p>
            </div>

            {/* Digital Inclusion */}
            <div className="bg-gradient-to-br from-moroccan-teal/5 to-moroccan-teal/10 rounded-2xl p-8 shadow-medium hover:shadow-strong transition-all duration-300">
              <div className="w-20 h-20 bg-moroccan-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Laptop className="h-10 w-10 text-moroccan-teal" />
              </div>
              <h3 className="text-2xl font-semibold text-moroccan-charcoal mb-4 text-center">
                {t.csr.digitalInclusion}
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">{t.csr.digitalInclusionDescription}</p>
            </div>

            {/* Sustainable Impact */}
            <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl p-8 shadow-medium hover:shadow-strong transition-all duration-300">
              <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold text-moroccan-charcoal mb-4 text-center">
                {t.csr.sustainableImpact}
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">{t.csr.sustainableImpactDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Initiatives */}
      <section className="py-28 bg-gradient-to-br from-moroccan-sand/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-moroccan-charcoal mb-4">{t.csr.futureInitiatives}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.csr.futureInitiativesDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-medium">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-moroccan-charcoal">{t.csr.aiInnovationLabs}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{t.csr.aiInnovationLabsDescription}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-medium">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-moroccan-teal/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-moroccan-teal" />
                </div>
                <h3 className="text-xl font-semibold text-moroccan-charcoal">{t.csr.mentorshipPrograms}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{t.csr.mentorshipProgramsDescription}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-medium">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-moroccan-charcoal">{t.csr.digitalInfrastructure}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{t.csr.digitalInfrastructureDescription}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-medium">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-moroccan-yellow/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-moroccan-charcoal" />
                </div>
                <h3 className="text-xl font-semibold text-moroccan-charcoal">{t.csr.economicEmpowerment}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{t.csr.economicEmpowermentDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-moroccan-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">{t.csr.joinMission}</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{t.csr.joinMissionDescription}</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              variant="cta-dark"
              size="lg"
              className="px-12 py-6 text-lg bg-gradient-to-r from-moroccan-teal to-moroccan-teal/80 hover:from-moroccan-teal/90 hover:to-moroccan-teal shadow-lg backdrop-blur-sm"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>{t.csr.partnerWithUs}</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="cta-dark"
              size="lg"
              className="px-12 py-6 text-lg bg-gradient-to-r from-white to-moroccan-sand/30 text-moroccan-charcoal hover:from-white hover:to-moroccan-sand/50 border border-moroccan-charcoal/20 shadow-lg backdrop-blur-sm"
            >
              <Link
                href="/corp-digital-transformation"
                className="flex items-center space-x-2"
                onClick={() => window.scrollTo(0, 0)}
              >
                <BookOpen className="h-5 w-5" />
                <span>{t.csr.learnAboutTransformation}</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
