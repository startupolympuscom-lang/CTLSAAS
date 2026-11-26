"use client"

import { ArrowRight, Bot, Check, Workflow } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

type Pillar = {
  title: string
  description: string
  points: string[]
}

type SectionCopy = {
  eyebrow: string
  title: string
  subtitle: string
  cta: string
  pillars: [Pillar, Pillar, Pillar]
  stats: { value: string; label: string }[]
}

const sectionCopy: Record<"en" | "fr" | "ar", SectionCopy> = {
  en: {
    eyebrow: "Why choose CTL",
    title: "Intelligent automation, built around how you work",
    subtitle:
      "From AI assistants to end-to-end workflows, CTL brings enterprise-grade automation to Moroccan businesses of every size — without changing the tools your teams already use.",
    cta: "Talk to an expert",
    pillars: [
      {
        title: "AI-powered customer engagement",
        description:
          "Conversational agents that speak your customers' language — including Darija — and plug straight into your existing systems.",
        points: ["Fluent in Darija, French & Arabic", "Connected to your CRM and channels", "Higher retention and conversion"],
      },
      {
        title: "Intelligent workflow orchestration",
        description:
          "We design and run real-time automations that replace repetitive manual work with scalable, data-driven systems.",
        points: ["End-to-end process automation", "Lower overheads, fewer errors", "Measurable ROI from day one"],
      },
      {
        title: "Made in Morocco",
        description:
          "Built locally with global AI best practices, so you get a competitive edge while staying compliant and future-ready.",
        points: ["Deep knowledge of local markets", "Data hosted in Morocco", "Aligned with Digital Morocco 2030"],
      },
    ],
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
      "Des assistants IA aux workflows de bout en bout, CTL apporte une automatisation de niveau entreprise aux entreprises marocaines de toutes tailles — sans changer les outils que vos équipes utilisent déjà.",
    cta: "Parler à un expert",
    pillars: [
      {
        title: "Engagement client propulsé par l'IA",
        description:
          "Des agents conversationnels qui parlent la langue de vos clients — Darija compris — et se connectent directement à vos systèmes.",
        points: ["Darija, français et arabe", "Connecté à votre CRM et vos canaux", "Plus de rétention et de conversion"],
      },
      {
        title: "Orchestration intelligente des workflows",
        description:
          "Nous concevons et pilotons des automatisations en temps réel qui remplacent les tâches répétitives par des systèmes évolutifs.",
        points: ["Automatisation de bout en bout", "Moins de coûts, moins d'erreurs", "Un ROI mesurable dès le départ"],
      },
      {
        title: "Fabriqué au Maroc",
        description:
          "Conçu localement selon les meilleures pratiques mondiales de l'IA : un avantage concurrentiel, conforme et prêt pour l'avenir.",
        points: ["Expertise des marchés locaux", "Données hébergées au Maroc", "Aligné avec Maroc Digital 2030"],
      },
    ],
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
      "من مساعدي الذكاء الاصطناعي إلى سير العمل الكامل، توفر CTL أتمتة بمستوى المؤسسات للشركات المغربية بمختلف أحجامها، دون تغيير الأدوات التي تستخدمها فرقك.",
    cta: "تحدث إلى خبير",
    pillars: [
      {
        title: "تفاعل العملاء بالذكاء الاصطناعي",
        description: "وكلاء محادثة يتحدثون لغة عملائك، بما فيها الدارجة، ويتكاملون مباشرة مع أنظمتك الحالية.",
        points: ["الدارجة والفرنسية والعربية", "متصل بنظام CRM وقنواتك", "ولاء وتحويلات أعلى"],
      },
      {
        title: "تنسيق ذكي لسير العمل",
        description: "نصمم وندير أتمتة فورية تستبدل المهام اليدوية المتكررة بأنظمة قابلة للتوسع ومبنية على البيانات.",
        points: ["أتمتة شاملة للعمليات", "تكاليف وأخطاء أقل", "عائد استثمار قابل للقياس"],
      },
      {
        title: "صنع في المغرب",
        description: "مبني محليًا وفق أفضل الممارسات العالمية في الذكاء الاصطناعي، لميزة تنافسية متوافقة وجاهزة للمستقبل.",
        points: ["فهم عميق للسوق المحلي", "بيانات مستضافة في المغرب", "متوافق مع المغرب الرقمي 2030"],
      },
    ],
    stats: [
      { value: "98%", label: "طلبات تتم معالجتها تلقائيًا" },
      { value: "24/7", label: "دعم عملاء دائم" },
      { value: "3x", label: "أوقات استجابة أسرع" },
      { value: "100%", label: "صُنع واستضيف في المغرب" },
    ],
  },
}

function PillarIcon({ index }: { index: number }) {
  if (index === 2) {
    return (
      <span className="relative flex h-14 w-14 overflow-hidden rounded-2xl ring-1 ring-moroccan-charcoal/10">
        <Image
          src="/images/moroccan-flag-official.png"
          alt=""
          width={56}
          height={56}
          className="h-full w-full object-cover"
        />
      </span>
    )
  }
  const Icon = index === 0 ? Bot : Workflow
  return (
    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-moroccan-yellow text-moroccan-charcoal">
      <Icon className="h-7 w-7" aria-hidden="true" />
    </span>
  )
}

export function IntroFeaturesSection() {
  const { language } = useLanguage()
  const copy = sectionCopy[language] ?? sectionCopy.fr

  return (
    <section id="why-choose-ctl" className="relative overflow-hidden bg-white py-24 md:py-28">
      <div
        className="pointer-events-none absolute -top-24 end-0 hidden h-[28rem] w-[28rem] translate-x-1/3 rounded-full bg-moroccan-yellow/15 blur-3xl lg:block rtl:-translate-x-1/3"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading: title on one side, supporting copy + CTA on the other */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-moroccan-charcoal/70">
              <span className="h-2 w-2 rounded-full bg-moroccan-yellow" aria-hidden="true" />
              {copy.eyebrow}
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] text-moroccan-charcoal text-balance md:text-5xl">
              {copy.title}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-gray-600 text-pretty">{copy.subtitle}</p>
            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 border-b-2 border-moroccan-yellow pb-1 font-semibold text-moroccan-charcoal transition-colors hover:border-moroccan-charcoal"
            >
              {copy.cta}
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {copy.pillars.map((pillar, index) => {
            const featured = index === 1
            return (
              <article
                key={pillar.title}
                className={`group relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 lg:p-9 ${
                  featured
                    ? "bg-moroccan-charcoal text-white shadow-strong"
                    : "border border-moroccan-charcoal/10 bg-white text-moroccan-charcoal shadow-sm hover:shadow-medium"
                }`}
              >
                <div className="flex items-start justify-between">
                  <PillarIcon index={index} />
                  <span
                    className={`font-display text-sm font-bold tabular-nums ${
                      featured ? "text-white/40" : "text-moroccan-charcoal/30"
                    }`}
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-8 font-display text-xl font-bold leading-snug lg:text-2xl">{pillar.title}</h3>
                <p className={`mt-3 mb-8 leading-relaxed ${featured ? "text-white/75" : "text-gray-600"}`}>
                  {pillar.description}
                </p>

                <ul
                  className={`mt-auto space-y-3 border-t pt-6 ${featured ? "border-white/15" : "border-moroccan-charcoal/10"}`}
                >
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm font-medium">
                      <span
                        className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                          featured ? "bg-moroccan-yellow text-moroccan-charcoal" : "bg-moroccan-yellow/20 text-moroccan-charcoal"
                        }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span className={featured ? "text-white/90" : "text-moroccan-charcoal/80"}>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>

        {/* Stats band */}
        <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-moroccan-charcoal/10 bg-moroccan-charcoal/10 lg:grid-cols-4">
          {copy.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center bg-white px-4 py-8 text-center">
              <dt className="order-2 mt-2 text-sm font-medium leading-snug text-gray-600 text-balance">{stat.label}</dt>
              <dd className="order-1 font-display text-3xl font-bold text-moroccan-charcoal md:text-4xl">
                <span className="bg-[linear-gradient(transparent_62%,rgba(255,215,0,0.55)_62%)] px-1">{stat.value}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
