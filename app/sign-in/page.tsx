import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { AuthForm } from "@/components/auth-form"

export const metadata = {
  title: "Sign In — CTL Client Space",
  description: "Sign in to your CTL client space to manage your AI services and chatbots.",
}

export default async function SignInPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (session?.user) redirect("/dashboard")
  return <AuthForm mode="sign-in" />
}
