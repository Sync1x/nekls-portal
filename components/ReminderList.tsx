import { BellRing, CalendarCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { adminReminders } from "@/lib/mockData"

type ReminderListProps = {
  compact?: boolean
}

function priorityClass(priority: string) {
  if (priority === "High") {
    return "bg-red-50 text-red-700"
  }

  if (priority === "Medium") {
    return "bg-[#f6ca43]/25 text-[#3B5584]"
  }

  return "bg-[#f6f8fb] text-[#5A6D8D]"
}

export function ReminderList({ compact = false }: ReminderListProps) {
  const items = compact ? adminReminders.slice(0, 3) : adminReminders

  return (
    <Card className="portal-card">
      <CardHeader className="px-6 pt-6">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-3xl bg-[#E2D1B0]/45 text-[#3B5584]">
            <BellRing className="size-5" aria-hidden="true" />
          </span>
          <CardTitle className="text-xl font-semibold text-[#3B5584]">
            {compact ? "Open Reminders" : "Action Reminders"}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 px-6 pb-6">
        {items.map((reminder) => (
          <article
            key={`${reminder.student}-${reminder.reason}`}
            className="rounded-3xl border border-[#dbe3ef] bg-[#f6f8fb] p-4 transition hover:border-[#E2D1B0] hover:bg-white hover:shadow-sm"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-[#3B5584]">
                  {reminder.student}
                </p>
                <p className="mt-1 text-sm leading-6 text-[#5A6D8D]">
                  {reminder.reason}
                </p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityClass(
                  reminder.priority
                )}`}
              >
                {reminder.priority}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm font-medium text-[#5A6D8D]">
                <CalendarCheck className="size-4" aria-hidden="true" />
                Due {reminder.dueDate}
              </div>
              <Button
                variant="outline"
                className="h-9 rounded-2xl border-[#dbe3ef] bg-white text-[#3B5584] hover:bg-[#E2D1B0]/25"
              >
                {reminder.suggestedAction}
              </Button>
            </div>
          </article>
        ))}
      </CardContent>
    </Card>
  )
}
