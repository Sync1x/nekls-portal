import { ArrowRight, ClipboardCheck } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { dashboardNextSteps, nextSteps } from "@/lib/mockData"

type NextStepsCardProps = {
  dashboard?: boolean
}

export function NextStepsCard({ dashboard = false }: NextStepsCardProps) {
  const items = dashboard ? dashboardNextSteps : nextSteps

  return (
    <Card className="portal-card">
      <CardHeader className="px-6 pt-6">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-3xl bg-[#E2D1B0]/45 text-[#3B5584]">
            <ClipboardCheck className="size-5" aria-hidden="true" />
          </span>
          <CardTitle className="text-xl font-semibold text-[#3B5584]">
            {dashboard ? "Next 2 Things To Finish" : "Next Steps"}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 px-6 pb-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-[#dbe3ef] bg-[#f6f8fb] p-4 transition hover:border-[#E2D1B0] hover:bg-white"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-[#3B5584]">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-[#5A6D8D]">
                  {"note" in item ? item.note : `${item.priority} priority`}
                </p>
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#5A6D8D]">
                {item.dueDate}
              </span>
            </div>
          </div>
        ))}
        <Button className="mt-2 h-11 w-full rounded-2xl bg-[#3B5584] text-white shadow-sm shadow-[#3B5584]/15 hover:bg-[#2f456d]">
          Continue Learning
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </CardContent>
    </Card>
  )
}
