"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/language-context"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/product", label: t.nav.products },
    { href: "/corp-digital-transformation", label: t.nav.digitalTransformation },
    { href: "/csr", label: t.nav.csr },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <nav
      className="sticky top-3 md:top-5 z-50 px-3 sm:px-4 lg:px-6"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto rounded-2xl md:rounded-full bg-moroccan-yellow/90 shadow-xl ring-1 ring-moroccan-charcoal/10 backdrop-blur-md px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-all duration-300 ease-out transform hover:scale-105"
            onClick={() => {
              setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
            }}
            aria-label="CTL Morocco - Home"
          >
            <Image
              src="/images/ctl-logo-new.png"
              alt="CTL Logo - Digital Transformation Partner in Morocco"
              width={72}
              height={72}
              className="rounded-lg shadow-lg"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 flex-1 justify-center" role="menubar">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative whitespace-nowrap text-moroccan-charcoal hover:text-primary transition-all duration-300 font-semibold text-sm lg:text-base
                       before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-primary 
                       before:transition-all before:duration-300 hover:before:w-full
                       transform hover:scale-105 hover:-translate-y-0.5"
                onClick={() => {
                  setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
                }}
                itemProp="url"
                role="menuitem"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <LanguageSwitcher />
            <Link
              href="/dashboard"
              className="whitespace-nowrap text-sm lg:text-base font-semibold text-moroccan-charcoal transition-colors hover:text-primary"
            >
              {t.nav.clientSpace}
            </Link>
            <Button
              asChild
              variant="nav-contact"
              size="lg"
              className="rounded-full px-5 lg:px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 ease-out 
                     transform hover:scale-105 hover:-translate-y-1 bg-gradient-to-r from-primary to-primary/90
                     hover:from-primary/90 hover:to-primary border-2 border-white/20 hover:border-white/40"
            >
              <Link href="/contact" className="flex items-center space-x-2 font-bold" itemProp="url">
                <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" aria-hidden="true" />
                <span itemProp="name">{t.common.contact}</span>
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="transition-all duration-300 hover:bg-white/20 rounded-lg"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 rotate-90" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300 hover:scale-110" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden absolute inset-x-3 top-full mt-2 rounded-2xl bg-moroccan-yellow/95 ring-1 ring-moroccan-charcoal/10 shadow-xl
                      animate-in fade-in-0 slide-in-from-top-3 duration-300 ease-out backdrop-blur-md overflow-hidden"
            role="menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-3 text-moroccan-charcoal hover:text-primary transition-all duration-300 
                         font-semibold text-lg rounded-lg hover:bg-white/10 transform hover:translate-x-2
                         animate-in fade-in-0 slide-in-from-left-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => {
                    setIsOpen(false)
                    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
                  }}
                  role="menuitem"
                  itemProp="url"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              ))}
              <Link
                href="/dashboard"
                className="block px-3 py-3 text-moroccan-charcoal hover:text-primary transition-all duration-300 
                       font-semibold text-lg rounded-lg hover:bg-white/10 transform hover:translate-x-2
                       animate-in fade-in-0 slide-in-from-left-2"
                style={{ animationDelay: `${navItems.length * 50}ms` }}
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                {t.nav.clientSpace}
              </Link>
              <div
                className="px-3 py-2 animate-in fade-in-0 slide-in-from-left-2"
                style={{ animationDelay: `${(navItems.length + 1) * 50}ms` }}
              >
                <Button
                  asChild
                  variant="nav-contact"
                  className="w-full rounded-full shadow-lg hover:shadow-xl transition-all duration-300 
                         transform hover:scale-105 bg-gradient-to-r from-primary to-primary/90"
                >
                  <Link href="/contact" className="flex items-center justify-center space-x-2" role="menuitem">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <span>{t.common.contact}</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
