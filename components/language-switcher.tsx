"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

const languages = [
  {
    code: "fr",
    name: "Français",
    flagSrc: "/images/flags/france.png",
    flagAlt: "French flag",
  },
  {
    code: "en",
    name: "English",
    flagSrc: "/images/flags/uk.png",
    flagAlt: "British flag",
  },
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="group h-9 px-3 text-sm font-medium hover:bg-white/10 transition-all duration-300 ease-out"
          aria-label={`Current language: ${currentLanguage.name}`}
        >
          <Globe className="h-4 w-4 md:hidden transition-transform duration-300 group-hover:scale-110" />
          <span className="hidden md:flex items-center space-x-2">
            <div className="w-6 h-6 relative overflow-hidden rounded-full border-2 border-gray-300/60 shadow-sm bg-white transition-transform duration-300 group-hover:scale-110">
              <Image
                src={currentLanguage.flagSrc || "/placeholder.svg"}
                alt={currentLanguage.flagAlt}
                fill
                className="object-cover object-center"
                sizes="24px"
                priority
                unoptimized
              />
            </div>
          </span>
          <ChevronDown className="h-3 w-3 ml-1 opacity-70 transition-all duration-300 ease-out group-data-[state=open]:rotate-180 group-data-[state=open]:opacity-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-48 bg-white/95 backdrop-blur-md border border-gray-200/50 shadow-xl rounded-xl p-2 
                   animate-in fade-in-0 zoom-in-95 slide-in-from-top-3 
                   data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-top-3
                   duration-300 ease-out"
      >
        {languages.map((lang, index) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code as "en" | "fr")}
            className={`flex items-center space-x-3 px-3 py-3 rounded-lg 
                       hover:bg-gradient-to-r hover:from-gray-50/90 hover:to-gray-100/90 
                       transition-all duration-200 ease-out cursor-pointer
                       transform hover:scale-[1.02] hover:shadow-sm
                       animate-in fade-in-0 slide-in-from-left-2
                       ${language === lang.code ? "bg-blue-50/50" : ""}`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="w-8 h-8 relative overflow-hidden rounded-full border-2 border-gray-300/60 shadow-sm bg-white transition-transform duration-200 hover:scale-110">
              <Image
                src={lang.flagSrc || "/placeholder.svg"}
                alt={lang.flagAlt}
                fill
                className="object-cover object-center"
                sizes="32px"
                unoptimized
              />
            </div>
            <span className="font-medium text-gray-700">{lang.name}</span>
            {language === lang.code && <span className="ml-auto text-blue-600 text-sm">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
