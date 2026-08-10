import { Globe, MessageCircle, Zap, Database } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Globe,
      title: "Multilingual AI",
      description: "Support for Arabic, French, English, and Darija - speak your customers' language naturally.",
      color: "text-primary",
    },
    {
      icon: MessageCircle,
      title: "Darija Support",
      description: "First-class support for Moroccan Arabic dialect, understanding local expressions and culture.",
      color: "text-secondary",
    },
    {
      icon: Zap,
      title: "Real-time Automation",
      description: "Instant responses, automated workflows, and 24/7 customer support without delays.",
      color: "text-primary",
    },
    {
      icon: Database,
      title: "CRM Integration",
      description: "Seamlessly connect with your existing CRM and business tools for unified customer management.",
      color: "text-secondary",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-moroccan-sand/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-moroccan-charcoal mb-4">Why Choose CTLbot?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built specifically for Moroccan businesses with features that understand your market, culture, and language
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-moroccan-sand to-white mb-6`}
              >
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-moroccan-charcoal mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
