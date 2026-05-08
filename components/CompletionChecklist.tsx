import { CheckCircle2, Circle, ClipboardList } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { completionChecklist } from "@/lib/mockData"

type ChecklistItem = {
  item: string
  status: string
  complete: boolean
}

type CompletionChecklistProps = {
  title?: string
  items?: ChecklistItem[]
}

export function CompletionChecklist({
  title = "Completion Checklist",
  items = completionChecklist,
}: CompletionChecklistProps) {
  return (
    <Card className="portal-card">
      <CardHeader className="px-6 pt-6">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-3xl bg-[#E2D1B0]/45 text-[#3B5584]">
            <ClipboardList className="size-5" aria-hidden="true" />
          </span>
          <CardTitle className="text-xl font-semibold text-[#3B5584]">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 px-6 pb-6">
        {items.map((item) => (
          <div
            key={item.item}
            className="flex items-start gap-3 rounded-3xl bg-[#f6f8fb] p-4"
          >
            {item.complete ? (
              <CheckCircle2
                className="mt-0.5 size-5 text-[#3B5584]"
                aria-hidden="true"
              />
            ) : (
              <Circle
                className="mt-0.5 size-5 text-[#5A6D8D]"
                aria-hidden="true"
              />
            )}
            <div>
              <p className="font-semibold text-[#3B5584]">{item.item}</p>
              <p className="mt-1 text-sm text-[#5A6D8D]">{item.status}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
