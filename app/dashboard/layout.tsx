import type React from "react"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"

export const metadata = {
  title: "Client Space — CTL",
  description: "Manage your CTL services and chatbots.",
}

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) redirect("/sign-in")

  return (
    <DashboardShell user={{ name: session.user.name, email: session.user.email }}>{children}</DashboardShell>
  )
}
