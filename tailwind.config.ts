import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  safelist: [
    // Ensure all button variants are preserved
    "bg-gray-800",
    "bg-gray-900",
    "bg-gray-700",
    "bg-yellow-400",
    "bg-yellow-500",
    "bg-yellow-300",
    "bg-white",
    "bg-gray-50",
    "bg-gray-100",
    "bg-teal-400",
    "bg-teal-50",
    "bg-transparent",
    "text-white",
    "text-gray-800",
    "text-gray-900",
    "border-gray-800",
    "border-gray-300",
    "border-teal-400",
    "border-2",
    "border-0",
    "hover:bg-gray-900",
    "hover:bg-gray-800",
    "hover:bg-yellow-500",
    "hover:bg-gray-50",
    "hover:bg-teal-50",
    "hover:text-white",
    "hover:text-gray-800",
    "active:bg-gray-700",
    "active:bg-yellow-300",
    "active:bg-gray-100",
    "active:text-white",
    "shadow-lg",
    "shadow-md",
    "rounded-lg",
    "font-bold",
    "transition-all",
    "duration-200",
    // Moroccan color classes
    "bg-moroccan-yellow",
    "bg-moroccan-charcoal",
    "bg-moroccan-teal",
    "bg-moroccan-sand",
    "text-moroccan-yellow",
    "text-moroccan-charcoal",
    "text-moroccan-teal",
    "text-moroccan-sand",
    "border-moroccan-yellow",
    "border-moroccan-charcoal",
    "border-moroccan-teal",
    "border-moroccan-sand",
    "hover:bg-moroccan-yellow",
    "hover:bg-moroccan-charcoal",
    "hover:text-moroccan-charcoal",
    // Size and spacing classes
    "px-4",
    "px-6",
    "px-8",
    "px-12",
    "px-16",
    "py-2",
    "py-3",
    "py-4",
    "py-6",
    "py-8",
    "h-9",
    "h-10",
    "h-11",
    "h-12",
    "h-16",
    "text-sm",
    "text-base",
    "text-lg",
    "text-xl",
    // Gradient text
    "gradient-text",
    // Background texture
    "bg-background-texture",
    // Animation
    "animate-fade-in",
    // Focus states
    "focus-visible-enhanced",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1F2937", // Moroccan Charcoal as new primary (black)
          foreground: "#FFFFFF", // White for contrast
        },
        secondary: {
          DEFAULT: "#FFD700", // Yellow as secondary/accent
          foreground: "#1F2937",
        },
        accent: {
          DEFAULT: "#F5E6D3", // Sand beige
          foreground: "#1F2937",
        },
        muted: {
          DEFAULT: "#F9FAFB",
          foreground: "#6B7280",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        moroccan: {
          yellow: "#FFD700", // Vibrant yellow
          teal: "#2DD4BF",
          sand: "#F5E6D3",
          charcoal: "#1F2937",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: {
        lg: "0.85rem", // Slightly larger for softer feel
        md: "calc(0.85rem - 2px)",
        sm: "calc(0.85rem - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
      },
      boxShadow: {
        subtle: "0 4px 12px rgba(0, 0, 0, 0.04), 0 1px 4px rgba(0, 0, 0, 0.02)", // Very light, diffused
        medium: "0 8px 24px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)", // More noticeable
        strong: "0 16px 48px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.06)", // Prominent
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
