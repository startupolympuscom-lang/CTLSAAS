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
  ArrowRight,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function CorpDigitalTransformationClient() {
  const { t } = useLanguage()

  const flowchartData = [
    {
      id: 1,
      title: t.digitalTransformation.phases.phase1.title,
      items: t.digitalTransformation.phases.phase1.items.map((item, index) => ({
        text: item,
        icon: [ClipboardList, BarChart2, FileText, CheckCircle, Lightbulb][index] || FileText,
      })),
    },
    {
      id: 2,
      title: t.digitalTransformation.phases.phase2.title,
      items: t.digitalTransformation.phases.phase2.items.map((item) => ({
        heading: item.heading,
        content: item.content,
        icon:
          item.heading.includes("Stakeholder") || item.heading.includes("أصحاب المصلحة")
            ? User
            : item.heading.includes("Data") || item.heading.includes("البيانات")
              ? ClipboardList
              : MessageSquare,
      })),
    },
    {
      id: 3,
      title: t.digitalTransformation.phases.phase3.title,
      items: t.digitalTransformation.phases.phase3.items.map((item) => ({
        heading: item.heading,
        content: item.content,
        icon:
          item.heading.includes("Design") || item.heading.includes("التفكير التصميمي")
            ? Lightbulb
            : item.heading.includes("Expert") || item.heading.includes("الخبراء")
              ? CheckCircle
              : FileText,
      })),
    },
    {
      id: 4,
      title: t.digitalTransformation.phases.phase4.title,
      items: t.digitalTransformation.phases.phase4.items.map((item) => ({
        heading: item.heading,
        content: item.content,
        icon:
          item.heading.includes("Solution") || item.heading.includes("الحل")
            ? Settings
            : item.heading.includes("Identification") || item.heading.includes("تحديد")
              ? Shield
              : BarChart2,
      })),
    },
    {
      id: 5,
      title: t.digitalTransformation.phases.phase5.title,
      items: t.digitalTransformation.phases.phase5.items.map((item) => ({
        heading: item.heading,
        content: item.content,
        icon: CheckCircle,
      })),
    },
    {
      id: 6,
      title: t.digitalTransformation.phases.phase6.title,
      items: t.digitalTransformation.phases.phase6.items.map((item) => ({
        heading: item.heading,
        content: item.content,
        icon: item.heading.includes("MVP") ? Zap : RefreshCw,
      })),
    },
    {
      id: 7,
      title: t.digitalTransformation.phases.phase7.title,
      items: t.digitalTransformation.phases.phase7.items.map((item) => ({
        heading: item.heading,
        content: item.content,
        icon:
          item.heading.includes("Performance") || item.heading.includes("الأداء")
            ? BarChart2
            : item.heading.includes("Scaling") || item.heading.includes("التوسع")
              ? TrendingUp
              : BookOpen,
      })),
    },
  ]

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
                className="px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus-visible-enhanced"
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
                className="px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus-visible-enhanced"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-moroccan-charcoal mb-8">
              {t.digitalTransformation.flowchartTitle}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              {t.digitalTransformation.flowchartDescription}
            </p>
          </div>
          {/* Flowchart Container with Frame */}
          <div className="bg-white rounded-2xl p-8 shadow-medium border border-gray-100">
            <div
              className="relative overflow-x-auto pb-8"
              role="img"
              aria-label="Digital transformation process flowchart"
            >
              <div className="flex space-x-12 lg:space-x-20 justify-center min-w-max">
                {flowchartData.map((phase, index) => (
                  <div key={phase.id} className="relative flex flex-col items-center group">
                    {/* Phase Number Circle */}
                    <div className="w-20 h-20 bg-moroccan-charcoal text-white rounded-full flex items-center justify-center font-bold text-3xl shadow-strong z-10">
                      {phase.id}
                    </div>

                    {/* Horizontal Connector (between phases) */}
                    {index < flowchartData.length - 1 && (
                      <div
                        className="absolute top-1/2 left-[calc(100%+1rem)] w-12 lg:w-20 h-1.5 bg-moroccan-charcoal -translate-y-1/2 z-0 group-last:hidden"
                        aria-hidden="true"
                      ></div>
                    )}

                    {/* Phase Title Box */}
                    <div className="bg-moroccan-charcoal text-white rounded-lg p-5 mt-8 text-center font-semibold text-xl shadow-medium w-72 flex items-center justify-center h-24">
                      {phase.title}
                    </div>

                    {/* Vertical Line from Title Box */}
                    <div className="w-1.5 h-12 bg-moroccan-charcoal mt-4" aria-hidden="true"></div>

                    {/* Items */}
                    <div className="flex flex-col items-center space-y-6 mt-4">
                      {phase.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="relative">
                          {/* Vertical Line between items (if not first) */}
                          {itemIndex > 0 && (
                            <div
                              className="absolute top-[-1.5rem] left-1/2 w-1.5 h-6 bg-moroccan-charcoal -translate-x-1/2"
                              aria-hidden="true"
                            ></div>
                          )}
                          <div className="bg-white text-moroccan-charcoal rounded-lg p-6 shadow-medium hover:shadow-strong hover:-translate-y-0.5 transition-all duration-300 text-base text-center w-72 min-h-[100px] flex flex-col justify-center items-center border border-gray-200">
                            {item.heading && (
                              <h4 className="font-semibold mb-2 text-lg flex items-center justify-center gap-3">
                                {item.icon && (
                                  <item.icon className="h-6 w-6 text-moroccan-teal flex-shrink-0" aria-hidden="true" />
                                )}
                                {item.heading}
                              </h4>
                            )}
                            {!item.heading && item.icon && (
                              <div className="flex items-center justify-center mb-3">
                                <item.icon className="h-8 w-8 text-moroccan-teal" aria-hidden="true" />
                              </div>
                            )}
                            <p className="leading-relaxed whitespace-pre-line text-sm">{item.text || item.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* Scroll hint overlay */}
              <div
                className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-20"
                aria-hidden="true"
              ></div>
            </div>
            {/* Explicit scroll instruction for all screens with arrow */}
            <p className="text-center text-moroccan-charcoal text-lg font-bold mt-8 flex items-center justify-center gap-2">
              {t.digitalTransformation.scrollInstruction}{" "}
              <ArrowRight className="h-6 w-6 text-moroccan-teal flex-shrink-0" aria-hidden="true" />
            </p>
          </div>
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
              className="px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
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
