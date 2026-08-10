"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function FounderSection() {
  const { t } = useLanguage()

  return (
    <section className="py-28 bg-gradient-to-br from-moroccan-sand/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-sans font-semibold text-moroccan-charcoal mb-4">
            {t.home.founderWordTitle}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-20">
          {/* Founder Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/images/hamza-benthami-original.png" // Updated image source
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
            <blockquote className="text-xl lg:text-2xl font-medium text-gray-800 mb-8 leading-relaxed italic">
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
  )
}
