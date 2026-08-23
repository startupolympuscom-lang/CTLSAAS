"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 lg:py-32 bg-moroccan-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{t.home.readyToStart}</h2>
          <div className="h-0.5 w-10 bg-moroccan-yellow mx-auto mb-6" aria-hidden="true" />
          <p className="text-xl max-w-3xl mx-auto mb-8 text-white/80">{t.home.readyToStartDescription}</p>
          <div className="flex justify-center">
            <Button
              asChild
              size="xl"
              className="group bg-moroccan-yellow text-moroccan-charcoal hover:bg-moroccan-yellow/90 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-bold"
            >
              <Link href="/contact" className="flex items-center gap-3">
                <Send className="h-5 w-5" />
                <span>{t.home.getFreeConsultation}</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Card className="bg-white/5 border-white/10 text-white rounded-2xl">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-moroccan-yellow/15 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-moroccan-yellow" />
              </div>
              <CardTitle>{t.home.callUs}</CardTitle>
              <CardDescription className="text-white/70">{t.home.callUsDescription}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold">+212 654 187 484</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 text-white rounded-2xl">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-moroccan-yellow/15 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-moroccan-yellow" />
              </div>
              <CardTitle>{t.home.emailUs}</CardTitle>
              <CardDescription className="text-white/70">{t.home.emailUsDescription}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold">admin@ctlrhadd.com</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 text-white rounded-2xl">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-moroccan-yellow/15 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-moroccan-yellow" />
              </div>
              <CardTitle>{t.home.visitUs}</CardTitle>
              <CardDescription className="text-white/70">{t.home.visitUsDescription}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold">Office Rue Menton VN Meknes , Maroc</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
