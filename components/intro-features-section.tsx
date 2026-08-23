"use client"

import { Bot, Zap } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

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

  return (
    <section id="why-choose-ctl" className="py-28 relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute left-0 top-1/3 hidden h-[30rem] w-[30rem] -translate-x-1/3 rounded-full bg-moroccan-yellow/10 blur-3xl lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-moroccan-charcoal/70">
            <span className="h-2 w-2 rounded-full bg-moroccan-yellow" aria-hidden="true" />
            {copy.eyebrow}
          </span>
          <div className="mt-3 h-0.5 w-10 bg-moroccan-yellow mx-auto" aria-hidden="true" />
          <h2 className="mt-6 text-3xl md:text-5xl font-display font-bold text-moroccan-charcoal leading-tight text-balance">
            {copy.title}
          </h2>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed text-pretty">{copy.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* AI-Powered Customer Engagement */}
          <div className="bg-white rounded-2xl p-10 shadow-medium hover:shadow-strong border border-gray-100 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-moroccan-yellow/10 flex items-center justify-center">
                <Bot className="h-12 w-12 text-moroccan-yellow" />
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
          <div className="bg-white rounded-2xl p-10 shadow-medium hover:shadow-strong border border-gray-100 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-moroccan-yellow/10 flex items-center justify-center">
                <Zap className="h-12 w-12 text-moroccan-yellow" />
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
          <div className="bg-white rounded-2xl p-10 shadow-medium hover:shadow-strong border border-gray-100 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-moroccan-yellow/70 bg-white flex items-center justify-center">
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
              <span className="text-4xl md:text-5xl font-display font-bold text-moroccan-yellow">{stat.value}</span>
              <span className="mt-3 text-sm font-medium text-gray-600 leading-snug text-balance">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
