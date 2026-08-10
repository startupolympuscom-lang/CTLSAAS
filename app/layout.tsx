import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"
import { SiteChrome } from "@/components/site-chrome"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ctlsolution.org"),
  title: {
    default: "CTL - Your Digital Transformation Partner in Morocco",
    template: "%s | CTL Morocco",
  },
  description:
    "CTL builds AI-driven solutions that save time, boost sales, and keep you ahead. Digital transformation, AI chatbots, automation, and custom software development in Morocco.",
  keywords: [
    "AI",
    "Digital Transformation",
    "Morocco",
    "Technology",
    "Automation",
    "Business Solutions",
    "AI Chatbots",
    "Custom Software",
    "Meknes",
    "Morocco 2030",
    "Digital Morocco",
    "Enterprise AI",
    "Business Automation",
    "CTL",
    "Charikate Tikniate Lrhade",
  ],
  authors: [{ name: "CTL - Charikate Tikniate Lrhade", url: "https://www.ctlsolution.org" }],
  creator: "CTL",
  publisher: "CTL",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["fr_MA", "ar_MA"],
    url: "https://www.ctlsolution.org",
    title: "CTL - Your Digital Transformation Partner in Morocco",
    description:
      "CTL builds AI-driven solutions that save time, boost sales, and keep you ahead. Work less. Achieve more.",
    siteName: "CTL Morocco",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CTL - Digital Transformation Partner in Morocco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CTL - Your Digital Transformation Partner",
    description: "CTL builds AI-driven solutions that save time, boost sales, and keep you ahead.",
    images: ["/og-image.png"],
    creator: "@ctlmorocco",
    site: "@ctlmorocco",
  },
  verification: {
    google: "WLocl340svlq2Zbq_t1nV1vc3zjembyKOe7idANfLSc",
  },
  alternates: {
    canonical: "https://www.ctlsolution.org",
    languages: {
      "en-US": "https://www.ctlsolution.org",
      "fr-MA": "https://www.ctlsolution.org/fr",
      "ar-MA": "https://www.ctlsolution.org/ar",
    },
  },
  category: "technology",
  applicationName: "CTL Morocco",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "msapplication-TileColor": "#facc15",
    "theme-color": "#facc15",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#facc15" },
    { media: "(prefers-color-scheme: dark)", color: "#1E1E1E" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light dark",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="geo.region" content="MA" />
        <meta name="geo.placename" content="Meknes" />
        <meta name="geo.position" content="33.8731;-5.5407" />
        <meta name="ICBM" content="33.8731, -5.5407" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          <SiteChrome>{children}</SiteChrome>
        </LanguageProvider>
      </body>
    </html>
  )
}
