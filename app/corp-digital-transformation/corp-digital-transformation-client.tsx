"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  User,
  MessageSquare,
  Settings,
  CheckCircle,
  Zap,
  BarChart2,
  FileText,
  ClipboardList,
  Lightbulb,
  Shield,
  RefreshCw,
  TrendingUp,
  BookOpen,
  Phone,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { TransformationFlowchart, type FlowchartPhase } from "@/components/transformation-flowchart"

export default function CorpDigitalTransformationClient() {
  const { t } = useLanguage()

  const { phases } = t.digitalTransformation
  const phaseIcons = [
    [ClipboardList, BarChart2, FileText, User, CheckCircle],
    [User, ClipboardList, MessageSquare],
    [Lightbulb, CheckCircle, FileText],
    [Settings, Shield, BarChart2],
    [CheckCircle],
    [Zap, RefreshCw],
    [BarChart2, TrendingUp, BookOpen],
  ]
  const flowchartData: FlowchartPhase[] = [
    phases.phase1,
    phases.phase2,
    phases.phase3,
    phases.phase4,
    phases.phase5,
    phases.phase6,
    phases.phase7,
  ].map((phase, phaseIndex) => ({
    id: phaseIndex + 1,
    title: phase.title,
    highlight: phaseIndex === 4, // client co-creation checkpoint
    items: (phase.items as Array<string | { heading: string; content: string }>).map((item, itemIndex) => ({
      heading: typeof item === "string" ? undefined : item.heading,
      text: typeof item === "string" ? item : item.content,
      icon: phaseIcons[phaseIndex][itemIndex] ?? CheckCircle,
    })),
  }))

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-moroccan-sand via-white to-moroccan-teal/10 py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-display font-bold gradient-text">
              {t.digitalTransformation.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t.digitalTransformation.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                asChild
                variant="primary-solid"
                size="lg"
                className="h-auto max-w-full whitespace-normal px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus-visible-enhanced"
                aria-label={t.digitalTransformation.startTransformation}
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  <span>{t.digitalTransformation.startTransformation}</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary-outline"
                size="lg"
                className="h-auto max-w-full whitespace-normal px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus-visible-enhanced"
                aria-label={t.digitalTransformation.learnAboutCTL}
              >
                <Link href="/about" className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" aria-hidden="true" />
                  <span>{t.digitalTransformation.learnAboutCTL}</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Flowchart Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-moroccan-charcoal mb-8">
              {t.digitalTransformation.flowchartTitle}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {t.digitalTransformation.flowchartDescription}
            </p>
          </div>
          <TransformationFlowchart phases={flowchartData} />
        </div>
      </section>

      {/* Morocco 2030 Alignment Section */}
      <section
        id="morocco-2030-alignment"
        className="py-16 md:py-24 bg-gradient-to-br from-moroccan-teal/5 to-moroccan-yellow/5"
        style={{ scrollMarginTop: "2rem" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl font-display font-bold text-moroccan-charcoal mb-6">
              {t.digitalTransformation.morocco2030Title}
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">{t.digitalTransformation.morocco2030Subtitle}</p>
          </div>

          {/* Digital Morocco 2030 Logo */}
          <div className="text-center mb-8 md:mb-12">
            <img
              src="/images/screenshot-202025-08-02-20123725.png"
              alt="Digital Morocco 2030 Official Logo"
              className="mx-auto h-20 md:h-24 w-auto object-contain rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Royal Vision Quote Section */}
          <div className="bg-white rounded-2xl p-8 shadow-medium border-l-4 border-moroccan-teal mb-12 md:mb-16">
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-16 h-16 bg-moroccan-charcoal rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-moroccan-charcoal mb-4">
                  {t.digitalTransformation.royalVisionTitle}
                </h3>
                <blockquote className="text-lg text-moroccan-charcoal font-medium italic mb-4 leading-relaxed">
                  "{t.digitalTransformation.royalQuoteFrench}"
                </blockquote>
                <cite className="text-sm text-gray-600 not-italic">
                  — {t.digitalTransformation.royalQuoteAttributionFrench}
                </cite>
                <p className="text-gray-700 mt-4 leading-relaxed">{t.digitalTransformation.royalVisionDescription}</p>
              </div>
            </div>
          </div>

          {/* Strategic Vision with Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center mb-12 md:mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-moroccan-teal rounded-full flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-moroccan-charcoal">Vision "Digital Morocco 2030"</h3>
              </div>
              <div className="bg-gradient-to-r from-moroccan-teal to-primary text-white p-6 rounded-xl">
                <p className="text-xl font-semibold text-center">"{t.digitalTransformation.digitalMoroccoVision}"</p>
              </div>
              <p className="text-gray-700 leading-relaxed">{t.digitalTransformation.digitalMoroccoVisionDescription}</p>
            </div>

            <div className="space-y-6">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="/digital-network-future.png"
                  alt="Morocco Digital Vision 2030 Illustration"
                  className="w-full h-full object-cover rounded-xl shadow-medium"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-moroccan-yellow rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-moroccan-charcoal" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-moroccan-charcoal">
                  {t.digitalTransformation.strategicAlignmentTitle}
                </h3>
              </div>
              <div className="space-y-4">
                {t.digitalTransformation.alignmentPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-moroccan-teal mt-1 flex-shrink-0" aria-hidden="true" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* National Objectives 2030 with Infographic */}
          <div className="bg-white rounded-2xl p-8 shadow-medium mb-12 md:mb-16">
            <h3 className="text-3xl font-bold text-moroccan-charcoal text-center mb-8">
              {t.digitalTransformation.nationalObjectives2030}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-moroccan-sand to-moroccan-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart2 className="h-10 w-10 text-moroccan-charcoal" aria-hidden="true" />
                </div>
                <div className="text-4xl font-bold text-moroccan-teal mb-2">50e</div>
                <p className="text-gray-600">{t.digitalTransformation.egdiRanking}</p>
                <p className="text-sm text-gray-500 mt-1">{t.digitalTransformation.egdiRankingCurrent}</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-moroccan-teal to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-white" aria-hidden="true" />
                </div>
                <div className="text-4xl font-bold text-moroccan-teal mb-2">240K</div>
                <p className="text-gray-600">{t.digitalTransformation.directJobsCreated}</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-moroccan-yellow to-moroccan-sand rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-10 w-10 text-moroccan-charcoal" aria-hidden="true" />
                </div>
                <div className="text-4xl font-bold text-moroccan-teal mb-2">100Mds</div>
                <p className="text-gray-600">{t.digitalTransformation.gdpContribution}</p>
              </div>
            </div>
          </div>

          {/* Key Objectives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12 md:mb-16">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-moroccan-sand to-moroccan-yellow rounded-2xl flex items-center justify-center mb-6">
                <BarChart2 className="h-8 w-8 text-moroccan-charcoal" aria-hidden="true" />
              </div>
              <h4 className="text-xl font-bold text-moroccan-charcoal mb-4">
                {t.digitalTransformation.objective1Title}
              </h4>
              <p className="text-gray-600 leading-relaxed">{t.digitalTransformation.objective1Description}</p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-moroccan-teal to-primary rounded-2xl flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <h4 className="text-xl font-bold text-moroccan-charcoal mb-4">
                {t.digitalTransformation.objective2Title}
              </h4>
              <p className="text-gray-600 leading-relaxed">{t.digitalTransformation.objective2Description}</p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-moroccan-yellow to-moroccan-sand rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-moroccan-charcoal" aria-hidden="true" />
              </div>
              <h4 className="text-xl font-bold text-moroccan-charcoal mb-4">
                {t.digitalTransformation.objective3Title}
              </h4>
              <p className="text-gray-600 leading-relaxed">{t.digitalTransformation.objective3Description}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              asChild
              variant="primary-solid"
              size="lg"
              className="h-auto max-w-full whitespace-normal px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>{t.digitalTransformation.startTransformation}</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
