"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="relative bg-moroccan-yellow text-moroccan-charcoal min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>

      {/* Soft decorative glow behind the mascot */}
      <div className="pointer-events-none absolute right-0 top-1/2 hidden h-[36rem] w-[36rem] -translate-y-1/2 translate-x-1/4 rounded-full bg-white/30 blur-3xl lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8">
          {/* Copy */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-display font-bold leading-tight tracking-tight text-balance">
              {t.home.heroTitle.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="gradient-text">{t.home.heroTitle.split(" ").slice(-1)[0]}</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-moroccan-charcoal">{t.home.heroSlogan}</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-pretty">
              {t.home.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center pt-4">
              <Button
                asChild
                variant="ghost"
                size="xl"
                className="group relative overflow-hidden backdrop-blur-sm bg-white/10 border border-white/20 text-moroccan-charcoal hover:bg-black hover:border-black hover:text-moroccan-yellow px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <Link href="/contact" className="flex items-center space-x-3 relative z-10">
                  <div className="p-2 rounded-full bg-white/20 group-hover:bg-moroccan-yellow/20 transition-all duration-300">
                    <Phone className="h-5 w-5 group-hover:text-moroccan-yellow transition-colors duration-300" />
                  </div>
                  <span className="font-bold text-lg">{t.common.getDemo}</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 group-hover:text-moroccan-yellow transition-all duration-300" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="xl"
                className="group relative overflow-hidden bg-moroccan-charcoal border border-moroccan-charcoal text-moroccan-yellow hover:bg-moroccan-charcoal/90 hover:border-moroccan-charcoal/90 hover:text-moroccan-yellow px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <Link href="/about" className="flex items-center space-x-3 relative z-10">
                  <span className="font-bold text-lg">{t.common.learnMore}</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-moroccan-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </Button>
            </div>
          </div>

          {/* NEO mascot */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-hero-float">
              <div className="absolute inset-0 -z-10 mx-auto h-[85%] w-[85%] translate-y-8 rounded-full bg-moroccan-charcoal/10 blur-2xl" />
              <Image
                src="/images/neo-mascot.png"
                alt="NEO, the CTL AI assistant mascot, waving"
                width={520}
                height={520}
                priority
                className="w-64 sm:w-80 lg:w-[30rem] h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
