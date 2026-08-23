"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Brain, Settings2, BarChart3, Target } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  const cards = [
    {
      icon: Brain,
      title: t.home.heroCard1Title,
      description: t.home.heroCard1Description,
      className: "top-0 left-0 lg:-left-6",
    },
    {
      icon: Settings2,
      title: t.home.heroCard2Title,
      description: t.home.heroCard2Description,
      className: "top-8 right-0 lg:-right-8",
    },
    {
      icon: BarChart3,
      title: t.home.heroCard3Title,
      description: t.home.heroCard3Description,
      className: "bottom-20 left-0 lg:-left-10",
    },
    {
      icon: Target,
      title: t.home.heroCard4Title,
      description: t.home.heroCard4Description,
      className: "bottom-0 right-0 lg:-right-6",
    },
  ]

  return (
    <section id="hero" className="relative bg-white overflow-hidden py-20 lg:py-28">
      {/* Soft decorative glow behind the mascot */}
      <div className="pointer-events-none absolute right-0 top-1/2 hidden h-[36rem] w-[36rem] -translate-y-1/2 translate-x-1/4 rounded-full bg-moroccan-yellow/10 blur-3xl lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-8">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-moroccan-charcoal/70">
              <span className="h-2 w-2 rounded-full bg-moroccan-yellow" aria-hidden="true" />
              {t.home.heroEyebrow}
            </span>
            <div className="mt-3 h-0.5 w-10 bg-moroccan-yellow mx-auto lg:mx-0" aria-hidden="true" />

            <h1 className="mt-6 text-4xl md:text-6xl font-display font-bold leading-tight tracking-tight text-moroccan-charcoal text-balance">
              {t.home.heroTitlePrefix}{" "}
              <span className="text-moroccan-yellow">{t.home.heroTitleHighlight}</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty">
              {t.home.heroDescription}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center">
              <Button
                asChild
                size="xl"
                className="group bg-moroccan-yellow text-moroccan-charcoal hover:bg-moroccan-yellow/90 px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-bold"
              >
                <Link href="/product" className="flex items-center gap-3">
                  {t.home.heroPrimaryCta}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-semibold text-moroccan-charcoal border-b-2 border-moroccan-charcoal/20 hover:border-moroccan-charcoal pb-1 transition-colors duration-300"
              >
                {t.home.heroSecondaryCta}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* NEO mascot + floating feature cards */}
          <div className="relative flex justify-center py-8 lg:py-0">
            <div className="relative animate-hero-float">
              <div className="absolute inset-0 -z-10 mx-auto h-[85%] w-[85%] translate-y-10 rounded-full bg-moroccan-yellow/15 blur-3xl" />
              <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-6 w-40 rounded-full bg-moroccan-yellow/30 blur-md" aria-hidden="true" />
              <Image
                src="/images/neo-mascot.png"
                alt="NEO, the CTL AI assistant mascot, waving"
                width={480}
                height={480}
                priority
                className="relative w-56 sm:w-72 lg:w-[26rem] h-auto drop-shadow-2xl"
              />
            </div>

            {cards.map((card) => (
              <div
                key={card.title}
                className={`hidden lg:block absolute w-48 rounded-2xl bg-white/90 backdrop-blur-sm shadow-strong border border-gray-100 p-4 ${card.className}`}
              >
                <card.icon className="h-6 w-6 text-moroccan-yellow" aria-hidden="true" />
                <p className="mt-2 text-sm font-semibold text-moroccan-charcoal leading-snug">{card.title}</p>
                <p className="mt-1 text-xs text-gray-500 leading-snug">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
