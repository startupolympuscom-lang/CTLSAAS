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
    <section className="py-28 bg-moroccan-sand/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-moroccan-charcoal/70">
            <span className="h-2 w-2 rounded-full bg-moroccan-yellow" aria-hidden="true" />
            {t.home.trustedByEyebrow}
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold text-moroccan-charcoal">
            {t.home.trustedByTitle}
          </h2>
          <div className="mt-4 h-0.5 w-10 bg-moroccan-yellow mx-auto" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {logos.map((client, index) => (
            <div
              key={client.name}
              className="group bg-white rounded-2xl p-12 shadow-medium hover:shadow-strong border border-gray-100 transition-all duration-300 transform hover:-translate-y-1"
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
