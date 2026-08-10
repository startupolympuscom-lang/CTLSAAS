"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

const chartConfig = {
  count: {
    label: "Questions",
    color: "#f5c518",
  },
} satisfies ChartConfig

export function AnalyticsChart({ data }: { data: { date: string; count: number }[] }) {
  const formatted = data.map((d) => ({
    ...d,
    label: new Date(d.date).toLocaleDateString("en-US", { weekday: "short" }),
  }))

  return (
    <ChartContainer config={chartConfig} className="h-64 w-full">
      <AreaChart data={formatted} margin={{ left: 0, right: 8, top: 8, bottom: 0 }}>
        <defs>
          <linearGradient id="fillCount" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--color-count)" stopOpacity={0.5} />
            <stop offset="95%" stopColor="var(--color-count)" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} strokeDasharray="3 3" className="stroke-muted" />
        <XAxis dataKey="label" tickLine={false} axisLine={false} tickMargin={8} />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} width={28} allowDecimals={false} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Area
          dataKey="count"
          type="monotone"
          fill="url(#fillCount)"
          stroke="var(--color-count)"
          strokeWidth={2}
        />
      </AreaChart>
    </ChartContainer>
  )
}
