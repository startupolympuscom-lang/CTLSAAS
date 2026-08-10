"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MessageSquare, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const [email, setEmail] = useState("")
  const { t } = useLanguage()

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <footer className="bg-moroccan-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/images/ctl-logo-new.png" alt="CTL Logo" width={48} height={48} className="rounded" />
              <span className="font-display font-bold text-xl">CTL</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{t.home.partnerForGrowth}</p>
            <div className="flex space-x-4">
              <MessageSquare className="h-5 w-5 text-primary hover:text-primary/80 transition-colors cursor-pointer" />
              <Mail className="h-5 w-5 text-primary hover:text-primary/80 transition-colors cursor-pointer" />
              <Phone className="h-5 w-5 text-primary hover:text-primary/80 transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">{t.common.quickLinks}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/#top"
                  className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group"
                  title={t.nav.home || "Home"}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    {t.nav.home || "Home"}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about#top"
                  className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group"
                  title={t.nav.about}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">{t.nav.about}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/product#top"
                  className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">{t.nav.products}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/csr#top"
                  className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">{t.nav.csr}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact#top"
                  className="text-gray-300 hover:text-primary transition-colors duration-200 flex items-center group"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">{t.nav.contact}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="font-semibold mb-4 text-white ml-7">{t.common.contactInfo}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3 text-gray-300">
                <Mail className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="break-all">info@ctlsolution.org</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span>+212 654 187 484</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span>Rue Menton VN, Meknes, Maroc</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              &copy; 2025 CTL - Charikate Tikniate Lrhade. {t.common.allRightsReserved}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
