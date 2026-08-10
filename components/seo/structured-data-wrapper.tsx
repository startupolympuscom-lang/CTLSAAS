"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

interface StructuredDataWrapperProps {
  children: React.ReactNode
}

export function StructuredDataWrapper({ children }: StructuredDataWrapperProps) {
  const pathname = usePathname()

  useEffect(() => {
    // Update canonical URL dynamically for client-side navigation
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute("href", `https://www.ctlsolution.org${pathname}`)
    }
  }, [pathname])

  return <>{children}</>
}
