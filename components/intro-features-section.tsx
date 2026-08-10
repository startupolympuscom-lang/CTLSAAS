"use client"

import { Bot, Zap, Sparkles } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { useEffect, useState } from "react"

const sectionCopy = {
  en: {
    eyebrow: "Why choose CTL",
    title: "Intelligent automation, built for how you work",
    subtitle:
      "From AI assistants to end-to-end workflows, CTL brings enterprise-grade automation to Moroccan businesses of every size.",
    stats: [
      { value: "98%", label: "Requests handled automatically" },
      { value: "24/7", label: "Always-on customer support" },
      { value: "3x", label: "Faster response times" },
      { value: "100%", label: "Made & hosted in Morocco" },
    ],
  },
  fr: {
    eyebrow: "Pourquoi choisir CTL",
    title: "L'automatisation intelligente, pensée pour votre façon de travailler",
    subtitle:
      "Des assistants IA aux workflows de bout en bout, CTL apporte une automatisation de niveau entreprise aux entreprises marocaines de toutes tailles.",
    stats: [
      { value: "98%", label: "Requêtes traitées automatiquement" },
      { value: "24/7", label: "Support client permanent" },
      { value: "3x", label: "Temps de réponse plus rapides" },
      { value: "100%", label: "Conçu et hébergé au Maroc" },
    ],
  },
  ar: {
    eyebrow: "لماذا تختار CTL",
    title: "أتمتة ذكية، مصممة لطريقة عملك",
    subtitle:
      "من مساعدي الذكاء الاصطناعي إلى سير العمل الكامل، توفر CTL أتمتة بمستوى المؤسسات للشركات المغربية بمختلف أحجامها.",
    stats: [
      { value: "98%", label: "طلبات تتم معالجتها تلقائيًا" },
      { value: "24/7", label: "دعم عملاء دائم" },
      { value: "3x", label: "أوقات استجابة أسرع" },
      { value: "100%", label: "صُنع واستضيف في المغرب" },
    ],
  },
} as const

export function IntroFeaturesSection() {
  const { t, language } = useLanguage()
  const copy = sectionCopy[language] ?? sectionCopy.en
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      {
        threshold: 0.3,
        rootMargin: "-50px 0px -50px 0px",
      },
    )

    const section = document.getElementById("why-choose-ctl")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section
      id="why-choose-ctl"
      className={`py-28 relative overflow-hidden transition-all duration-1000 ease-in-out ${
        isInView
          ? "bg-gradient-to-br from-teal-50/60 via-moroccan-sand/40 to-blue-50/50"
          : "bg-gradient-to-br from-moroccan-sand/30 to-white"
      }`}
    >
      {/* Animated background overlay */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
          isInView
            ? "bg-gradient-to-r from-teal-100/20 via-moroccan-teal/10 to-blue-100/20 opacity-100"
            : "bg-gradient-to-r from-transparent via-transparent to-transparent opacity-0"
        }`}
      />

      {/* Enhanced scroll-triggered animation overlay */}
      <div
        className={`absolute inset-0 transition-all duration-2000 ease-out ${
          isInView
            ? "bg-gradient-to-br from-teal-50/40 via-moroccan-sand/30 to-blue-50/40 opacity-100 scale-100"
            : "bg-gradient-to-br from-transparent via-transparent to-transparent opacity-0 scale-95"
        }`}
      >
        {/* Animated wave effect */}
        <div
          className={`absolute inset-0 transition-all duration-3000 ease-out ${
            isInView ? "translate-y-0 opacity-30" : "translate-y-full opacity-0"
          }`}
          style={{
            background: `linear-gradient(45deg, 
        rgba(20, 184, 166, 0.1) 0%, 
        rgba(134, 239, 172, 0.1) 25%, 
        rgba(59, 130, 246, 0.1) 50%, 
        rgba(147, 197, 253, 0.1) 75%, 
        rgba(20, 184, 166, 0.1) 100%)`,
            backgroundSize: "400% 400%",
            animation: isInView ? "gradientShift 8s ease-in-out infinite" : "none",
          }}
        />

        {/* Floating elements for enhanced visual appeal */}
        <div
          className={`absolute top-1/4 left-1/4 w-3 h-3 bg-teal-400/30 rounded-full transition-all duration-2000 ${
            isInView ? "animate-bounce opacity-100" : "opacity-0 translate-y-4"
          }`}
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className={`absolute top-3/4 right-1/3 w-2 h-2 bg-blue-400/40 rounded-full transition-all duration-2000 ${
            isInView ? "animate-pulse opacity-100" : "opacity-0 translate-y-4"
          }`}
          style={{ animationDelay: "1s" }}
        />
        <div
          className={`absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-moroccan-teal/25 rounded-full transition-all duration-2000 ${
            isInView ? "animate-ping opacity-100" : "opacity-0 translate-y-4"
          }`}
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-moroccan-charcoal/10 bg-white/70 px-4 py-1.5 text-sm font-semibold text-moroccan-charcoal shadow-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-moroccan-teal" />
            {copy.eyebrow}
          </span>
          <h2 className="mt-6 text-3xl md:text-5xl font-display font-bold text-moroccan-charcoal leading-tight text-balance">
            {copy.title}
          </h2>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed text-pretty">{copy.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* AI-Powered Customer Engagement */}
          <div
            className={`bg-white/80 backdrop-blur-sm rounded-2xl p-10 shadow-medium hover:shadow-strong transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full border ${
              isInView ? "border-teal-200/50 shadow-teal-100/50" : "border-gray-100"
            }`}
          >
            <div className="flex items-center justify-center mb-8">
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-700 ease-out ${
                  isInView
                    ? "bg-gradient-to-br from-teal-100 to-teal-200 shadow-lg shadow-teal-200/50 scale-110"
                    : "bg-gradient-to-br from-gray-50 to-gray-100 scale-100"
                }`}
              >
                <Bot
                  className={`h-12 w-12 transition-all duration-700 ease-out ${
                    isInView ? "text-teal-600 drop-shadow-md" : "text-primary"
                  }`}
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-moroccan-charcoal mb-6 text-center leading-tight">
              {t.home.aiPoweredTitle}
            </h3>
            <p className="text-gray-600 text-center leading-relaxed text-base flex-grow">
              {t.home.aiPoweredDescription}
            </p>
          </div>

          {/* Intelligent Workflow Orchestration */}
          <div
            className={`bg-white/80 backdrop-blur-sm rounded-2xl p-10 shadow-medium hover:shadow-strong transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full border ${
              isInView ? "border-teal-200/50 shadow-teal-100/50" : "border-gray-100"
            }`}
          >
            <div className="flex items-center justify-center mb-8">
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-700 ease-out ${
                  isInView
                    ? "bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg shadow-blue-200/50 scale-110"
                    : "bg-gradient-to-br from-gray-50 to-gray-100 scale-100"
                }`}
              >
                <Zap
                  className={`h-12 w-12 transition-all duration-700 ease-out ${
                    isInView ? "text-blue-600 drop-shadow-md" : "text-secondary"
                  }`}
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-moroccan-charcoal mb-6 text-center leading-tight">
              {t.home.workflowTitle}
            </h3>
            <p className="text-gray-600 text-center leading-relaxed text-base flex-grow">
              {t.home.workflowDescription}
            </p>
          </div>

          {/* Made in Morocco */}
          <div
            className={`bg-white/80 backdrop-blur-sm rounded-2xl p-10 shadow-medium hover:shadow-strong transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full border ${
              isInView ? "border-teal-200/50 shadow-teal-100/50" : "border-gray-100"
            }`}
          >
            <div className="flex items-center justify-center mb-8">
              <div
                className={`w-20 h-20 rounded-full overflow-hidden border-3 bg-white flex items-center justify-center transition-all duration-700 ease-out ${
                  isInView
                    ? "border-moroccan-gold shadow-xl shadow-moroccan-gold/30 scale-110"
                    : "border-moroccan-gold/70 scale-100"
                }`}
              >
                <Image
                  src="/images/moroccan-flag-official.png"
                  alt="Moroccan Flag"
                  width={72}
                  height={72}
                  className="rounded-full object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-moroccan-charcoal mb-6 text-center leading-tight">
              {t.home.madeInMoroccoTitle}
            </h3>
            <p className="text-gray-600 text-center leading-relaxed text-base flex-grow">
              {t.home.madeInMoroccoDescription}
            </p>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-3xl border border-moroccan-charcoal/10 bg-moroccan-charcoal/10 shadow-medium">
          {copy.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center bg-white/90 px-6 py-10 text-center backdrop-blur-sm"
            >
              <span className="text-4xl md:text-5xl font-display font-bold gradient-text">{stat.value}</span>
              <span className="mt-3 text-sm font-medium text-gray-600 leading-snug text-balance">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
