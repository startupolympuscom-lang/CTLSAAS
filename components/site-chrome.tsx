"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// Routes that manage their own full-screen chrome (auth + client dashboard).
const BARE_ROUTES = ["/sign-in", "/sign-up", "/dashboard"]

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isBare = BARE_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`))

  if (isBare) {
    return <main className="min-h-screen">{children}</main>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main id="top" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
