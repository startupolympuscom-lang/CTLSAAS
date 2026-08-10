import { getUserServices } from "@/app/actions/client-space"
import { SERVICES } from "@/lib/services"
import { ServicesManager } from "@/components/dashboard/services-manager"

export default async function ServicesPage() {
  const records = await getUserServices()
  const statusMap: Record<string, string> = {}
  for (const r of records) statusMap[r.serviceId] = r.status

  const services = SERVICES.map((s) => ({
    ...s,
    status: (statusMap[s.id] ?? "inactive") as "active" | "requested" | "inactive",
  }))

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-foreground">My Services</h1>
        <p className="mt-1 text-muted-foreground">
          Activate the CTL services you use, or request the ones you&apos;d like to add.
        </p>
      </div>
      <ServicesManager services={services} />
    </div>
  )
}
