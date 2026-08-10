"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { type Language, translations, type Translations } from "./translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr") // Default to French

  useEffect(() => {
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem("preferred-language") as Language
    if (savedLanguage && ["fr", "ar", "en"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("preferred-language", lang)

    // Update document direction for Arabic
    if (lang === "ar") {
      document.documentElement.dir = "rtl"
      document.documentElement.lang = "ar"
    } else {
      document.documentElement.dir = "ltr"
      document.documentElement.lang = lang
    }
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
