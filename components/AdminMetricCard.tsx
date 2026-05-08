import type { LucideIcon } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

type AdminMetricCardProps = {
  label: string
  value: string | number
  note: string
  icon: LucideIcon
  progressPercent?: number
}

export function AdminMetricCard({
  label,
  value,
  note,
  icon: Icon,
  progressPercent,
}: AdminMetricCardProps) {
  return (
    <Card className="portal-card portal-card-lift">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <span className="flex size-11 items-center justify-center rounded-3xl bg-[#E2D1B0]/45 text-[#3B5584]">
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <span className="rounded-full border border-[#dbe3ef] bg-[#f6f8fb] px-3 py-1 text-xs font-semibold text-[#5A6D8D]">
            Admin
          </span>
        </div>
        <p className="mt-5 text-sm font-semibold text-[#5A6D8D]">{label}</p>
        <p className="mt-1 text-4xl font-semibold text-[#3B5584]">{value}</p>
        <p className="mt-2 text-sm leading-6 text-[#5A6D8D]">{note}</p>
        {typeof progressPercent === "number" ? (
          <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-[#E2D1B0]/30">
            <div
              className="h-full rounded-full bg-[#3B5584] shadow-sm"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}
