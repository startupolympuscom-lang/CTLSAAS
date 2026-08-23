"use client"

import Image from "next/image"
import { Quote, User } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function FounderSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div
        className="pointer-events-none absolute left-0 top-0 hidden h-full w-1/3 opacity-40 lg:block"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-moroccan-charcoal mb-4">
            {t.home.founderWordTitle}
          </h2>
          <div className="h-0.5 w-10 bg-moroccan-yellow mx-auto" aria-hidden="true" />
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-strong border border-gray-100">
          {/* Quote card */}
          <div className="relative bg-white p-10 lg:p-14 flex flex-col justify-center">
            <Quote className="h-10 w-10 text-moroccan-yellow" aria-hidden="true" />
            <blockquote className="mt-6 text-2xl lg:text-3xl font-display font-bold text-moroccan-charcoal leading-snug text-balance">
              {t.home.founderQuote} <span className="text-moroccan-yellow">{t.home.founderQuoteHighlight}</span>
            </blockquote>
            <div className="mt-8 h-0.5 w-16 bg-moroccan-yellow" aria-hidden="true" />

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-moroccan-charcoal">
                <User className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-moroccan-charcoal">{t.home.founderName}</p>
                <p className="text-sm font-semibold text-moroccan-yellow">{t.home.founderTitle}</p>
                <p className="mt-1 text-sm text-gray-500">{t.home.founderContext}</p>
              </div>
            </div>
          </div>

          {/* Photo panel */}
          <div className="relative min-h-[320px] bg-moroccan-yellow lg:min-h-0">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-moroccan-charcoal/10" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border border-moroccan-charcoal/10" aria-hidden="true" />
            <Image
              src="/images/hamza-benthami-original.png"
              alt="Hamza Benthami, CTL Founder & CEO"
              fill
              className="object-cover object-[center_85%]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
