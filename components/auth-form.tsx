"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { authClient } from "@/lib/auth-client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Loader2 } from "lucide-react"

export function AuthForm({ mode }: { mode: "sign-in" | "sign-up" }) {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const isSignUp = mode === "sign-up"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const { error } = isSignUp
      ? await authClient.signUp.email({ email, password, name })
      : await authClient.signIn.email({ email, password })

    setLoading(false)

    if (error) {
      setError(error.message ?? "Something went wrong. Please try again.")
      return
    }

    router.push("/dashboard")
    router.refresh()
  }

  return (
    <main className="min-h-svh grid lg:grid-cols-2 bg-background">
      {/* Brand / mascot panel */}
      <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-moroccan-yellow p-12 text-moroccan-charcoal">
        <div className="pointer-events-none absolute -right-16 top-1/3 h-96 w-96 rounded-full bg-white/30 blur-3xl" />
        <Link href="/" className="relative z-10 flex items-center gap-3">
          <Image src="/images/ctl-logo-new.png" alt="CTL" width={120} height={40} className="h-9 w-auto" />
        </Link>
        <div className="relative z-10 flex flex-col items-center text-center">
          <Image
            src="/images/neo-mascot.png"
            alt="NEO, the CTL AI assistant"
            width={340}
            height={340}
            className="w-64 h-auto drop-shadow-2xl animate-hero-float"
          />
          <h2 className="mt-6 text-3xl font-display font-bold text-balance">Your AI workspace, in one place</h2>
          <p className="mt-3 max-w-sm text-moroccan-charcoal/70 leading-relaxed text-pretty">
            Manage your CTL services, generate chatbots from your own docs, and watch how your customers use them.
          </p>
        </div>
        <p className="relative z-10 text-sm text-moroccan-charcoal/60">Casa Tech Lab — Made in Morocco</p>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm">
          <div className="mb-8 lg:hidden flex justify-center">
            <Image src="/images/ctl-logo-new.png" alt="CTL" width={120} height={40} className="h-9 w-auto" />
          </div>
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold tracking-tight text-foreground text-balance">
              {isSignUp ? "Create your client account" : "Welcome back"}
            </h1>
            <p className="text-muted-foreground mt-2 leading-relaxed">
              {isSignUp
                ? "Sign up to access your CTL client space."
                : "Sign in to your client space to continue."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {isSignUp && (
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Full name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="name"
                  placeholder="Amine El Alaoui"
                />
              </div>
            )}
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                placeholder="you@company.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                autoComplete={isSignUp ? "new-password" : "current-password"}
                placeholder={isSignUp ? "At least 8 characters" : "••••••••"}
              />
            </div>

            {error && (
              <p className="text-sm text-destructive" role="alert">
                {error}
              </p>
            )}

            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="w-full bg-moroccan-charcoal text-moroccan-yellow hover:bg-moroccan-charcoal/90 rounded-full group"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Please wait…
                </>
              ) : (
                <>
                  {isSignUp ? "Create account" : "Sign in"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </form>

          <p className="text-sm text-muted-foreground text-center mt-8">
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
            <Link
              href={isSignUp ? "/sign-in" : "/sign-up"}
              className="text-foreground font-semibold underline-offset-4 hover:underline"
            >
              {isSignUp ? "Sign in" : "Sign up"}
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
