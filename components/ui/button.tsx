import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-bold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gray-800 text-white hover:bg-gray-900 shadow-lg border-0",
        destructive: "bg-red-500 text-white hover:bg-red-600 shadow-lg border-0",
        outline: "border-2 border-gray-800 bg-transparent text-gray-800 hover:bg-gray-800 hover:text-white shadow-md",
        secondary: "bg-yellow-400 text-gray-800 hover:bg-yellow-500 shadow-lg border-0",
        ghost: "hover:bg-gray-100 hover:text-gray-900",
        link: "text-gray-800 underline-offset-4 hover:underline",

        // Hero section specific variants with distinct colors
        "hero-primary":
          "bg-gray-900 text-white hover:bg-black active:bg-gray-800 shadow-xl font-bold border-0 rounded-lg transition-all duration-200",
        "hero-secondary":
          "bg-white text-gray-900 hover:bg-gray-100 hover:text-black active:bg-gray-50 active:text-gray-900 border-2 border-gray-900 shadow-xl font-bold rounded-lg transition-all duration-200",

        // Navigation contact button
        "nav-contact":
          "bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-700 shadow-lg font-bold border-0 rounded-lg transition-all duration-200",

        // CTA buttons
        "cta-primary":
          "bg-yellow-400 text-gray-800 hover:bg-yellow-500 active:bg-yellow-300 shadow-lg font-bold border-0 rounded-lg transition-all duration-200",
        "cta-secondary":
          "bg-white text-gray-800 hover:bg-gray-50 active:bg-gray-100 border-2 border-gray-300 shadow-md font-bold rounded-lg transition-all duration-200",

        // Legacy variants for backward compatibility
        cta: "bg-yellow-400 text-gray-800 hover:bg-yellow-500 shadow-lg font-bold border-0 rounded-lg",
        info: "bg-white text-gray-800 border-2 border-teal-400 hover:bg-teal-50 shadow-md font-bold rounded-lg",
        contact: "bg-gray-800 text-white hover:bg-gray-900 shadow-lg font-bold rounded-lg",
        "white-outline":
          "bg-white text-gray-800 hover:bg-gray-50 border-2 border-gray-800 shadow-md font-bold rounded-lg",
        "cta-light": "bg-white text-gray-800 hover:bg-gray-50 border-2 border-gray-300 shadow-md font-bold rounded-lg",
        "cta-dark": "bg-yellow-400 text-gray-800 hover:bg-yellow-500 shadow-lg font-bold rounded-lg",
        "primary-solid":
          "bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-700 shadow-lg font-bold border-0 rounded-lg",
        "secondary-outline":
          "bg-white text-gray-800 hover:bg-gray-800 hover:text-white active:bg-gray-700 active:text-white border-2 border-gray-800 shadow-md font-bold rounded-lg",
        "high-contrast-primary":
          "bg-black text-white hover:bg-gray-900 active:bg-gray-800 shadow-lg font-bold border-0 rounded-lg",
        "high-contrast-secondary":
          "bg-white text-black hover:bg-black hover:text-white active:bg-gray-900 active:text-white border-2 border-black shadow-md font-bold rounded-lg",
      },
      size: {
        default: "h-11 px-6 py-3 text-base",
        sm: "h-9 rounded-md px-4 text-sm",
        lg: "h-12 rounded-lg px-8 text-lg",
        xl: "h-16 rounded-lg px-12 text-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
