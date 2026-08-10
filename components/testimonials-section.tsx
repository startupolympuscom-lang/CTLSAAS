"use client"

import { useLanguage } from "@/lib/language-context"

export function TestimonialsSection() {
  const { t } = useLanguage()

  const logos = [
    {
      name: "Electroplanet",
      logo: "/images/logos/electroplanet.png",
    },
    {
      name: "Al Akhawayn University",
      logo: "/images/logos/al-akhawayn.png",
    },
    {
      name: "SAUDOR",
      logo: "/images/logos/saudor.jpeg",
    },
    {
      name: "Startup Olympus",
      logo: "/images/logos/startup-olympus.jpeg",
    },
  ]

  return (
    <section className="py-28 bg-moroccan-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">{t.home.trustedByTitle}</h2>
          <div className="w-24 h-1 bg-moroccan-yellow mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {logos.map((client, index) => (
            <div
              key={client.name}
              className="group bg-white rounded-3xl p-12 shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center justify-center h-32">
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className={`max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 ${
                    client.name === "SAUDOR" ? "scale-125" : ""
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
