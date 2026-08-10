"use client"

import { useState, useTransition } from "react"
import Link from "next/link"
import { setServiceStatus } from "@/app/actions/client-space"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, Boxes, Loader2, Check, ArrowRight } from "lucide-react"

type ServiceRow = {
  id: string
  name: string
  shortName: string
  description: string
  interactive: boolean
  status: "active" | "requested" | "inactive"
}

export function ServicesManager({ services }: { services: ServiceRow[] }) {
  const [rows, setRows] = useState(services)
  const [pendingId, setPendingId] = useState<string | null>(null)
  const [, startTransition] = useTransition()

  const update = (id: string, status: ServiceRow["status"]) => {
    setPendingId(id)
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)))
    startTransition(async () => {
      await setServiceStatus(id, status)
      setPendingId(null)
    })
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {rows.map((service) => (
        <Card key={service.id} className="flex flex-col">
          <CardContent className="flex flex-1 flex-col p-6">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-moroccan-yellow text-moroccan-charcoal">
                {service.interactive ? <Bot className="h-5 w-5" /> : <Boxes className="h-5 w-5" />}
              </div>
              <StatusBadge status={service.status} />
            </div>

            <h3 className="font-semibold text-foreground">{service.name}</h3>
            <p className="mt-1 flex-1 text-sm text-muted-foreground leading-relaxed">{service.description}</p>

            <div className="mt-5 flex items-center gap-2">
              {service.interactive && service.status === "active" ? (
                <Button
                  asChild
                  size="sm"
                  className="rounded-full bg-moroccan-charcoal text-moroccan-yellow hover:bg-moroccan-charcoal/90"
                >
                  <Link href="/dashboard/chatbot">
                    Open Smart Agent
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              ) : service.status === "active" ? (
                <Button
                  size="sm"
                  variant="outline"
                  disabled={pendingId === service.id}
                  onClick={() => update(service.id, "inactive")}
                >
                  {pendingId === service.id ? <Loader2 className="h-4 w-4 animate-spin" /> : "Deactivate"}
                </Button>
              ) : service.status === "requested" ? (
                <Button
                  size="sm"
                  variant="outline"
                  disabled={pendingId === service.id}
                  onClick={() => update(service.id, "inactive")}
                >
                  {pendingId === service.id ? <Loader2 className="h-4 w-4 animate-spin" /> : "Cancel request"}
                </Button>
              ) : service.interactive ? (
                <Button
                  size="sm"
                  disabled={pendingId === service.id}
                  onClick={() => update(service.id, "active")}
                  className="rounded-full bg-moroccan-charcoal text-moroccan-yellow hover:bg-moroccan-charcoal/90"
                >
                  {pendingId === service.id ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      <Check className="mr-1 h-4 w-4" />
                      Activate
                    </>
                  )}
                </Button>
              ) : (
                <Button
                  size="sm"
                  variant="outline"
                  disabled={pendingId === service.id}
                  onClick={() => update(service.id, "requested")}
                >
                  {pendingId === service.id ? <Loader2 className="h-4 w-4 animate-spin" /> : "Request access"}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
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
