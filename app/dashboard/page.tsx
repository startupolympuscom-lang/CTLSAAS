import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import Link from "next/link"
import { getChatbots, getUserServices } from "@/app/actions/client-space"
import { SERVICES } from "@/lib/services"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, Boxes, ArrowRight, Plus, Activity } from "lucide-react"

export default async function DashboardOverviewPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  const name = session?.user?.name?.split(" ")[0] ?? "there"

  const [services, chatbots] = await Promise.all([getUserServices(), getChatbots()])

  const activeCount = services.filter((s) => s.status === "active").length
  const requestedCount = services.filter((s) => s.status === "requested").length

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-foreground">Welcome back, {name}</h1>
        <p className="mt-1 text-muted-foreground">Here&apos;s an overview of your CTL client space.</p>
      </div>

      {/* Quick stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-moroccan-yellow text-moroccan-charcoal">
              <Boxes className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{activeCount}</p>
              <p className="text-sm text-muted-foreground">Active services</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-moroccan-yellow text-moroccan-charcoal">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{chatbots.length}</p>
              <p className="text-sm text-muted-foreground">Chatbots generated</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-moroccan-yellow text-moroccan-charcoal">
              <Activity className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{requestedCount}</p>
              <p className="text-sm text-muted-foreground">Pending requests</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Smart Agent CTA */}
      <Card className="overflow-hidden border-moroccan-yellow/40 bg-moroccan-yellow/10">
        <CardContent className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-moroccan-charcoal text-moroccan-yellow">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                {chatbots.length > 0 ? "Manage your Smart Agent" : "Generate your first chatbot"}
              </h2>
              <p className="mt-1 max-w-md text-sm text-muted-foreground">
                Upload your documentation, generate an API key, and embed a chatbot trained on your content.
              </p>
            </div>
          </div>
          <Button asChild className="rounded-full bg-moroccan-charcoal text-moroccan-yellow hover:bg-moroccan-charcoal/90">
            <Link href="/dashboard/chatbot">
              {chatbots.length > 0 ? "Open Smart Agent" : "Create chatbot"}
              {chatbots.length > 0 ? <ArrowRight className="ml-1 h-4 w-4" /> : <Plus className="ml-1 h-4 w-4" />}
            </Link>
          </Button>
        </CardContent>
      </Card>

      {/* Services snapshot */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Your services</CardTitle>
          <Button asChild variant="ghost" size="sm">
            <Link href="/dashboard/services">
              Manage all
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2">
          {SERVICES.map((service) => {
            const record = services.find((s) => s.serviceId === service.id)
            const status = record?.status ?? "inactive"
            return (
              <div
                key={service.id}
                className="flex items-center justify-between rounded-xl border p-4"
              >
                <div className="min-w-0">
                  <p className="truncate font-medium text-foreground">{service.shortName}</p>
                  <p className="truncate text-xs text-muted-foreground">{service.name}</p>
                </div>
                <StatusBadge status={status} />
              </div>
            )
          })}
        </CardContent>
      </Card>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  if (status === "active")
    return <Badge className="bg-moroccan-teal/15 text-moroccan-teal hover:bg-moroccan-teal/15">Active</Badge>
  if (status === "requested")
    return <Badge className="bg-moroccan-yellow/20 text-moroccan-charcoal hover:bg-moroccan-yellow/20">Requested</Badge>
  return (
    <Badge variant="outline" className="text-muted-foreground">
      Not active
    </Badge>
  )
}
