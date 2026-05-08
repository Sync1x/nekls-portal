import { CalendarCheck2, CalendarDays, X } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { calendarEvents, schoolClosures } from "@/lib/mockData"
import { cn } from "@/lib/utils"

type CalendarCardProps = {
  large?: boolean
}

const days = Array.from({ length: 31 }, (_, index) => index + 1)
const leadingBlanks = Array.from({ length: 5 }, (_, index) => index)
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const extraClosures = new Set([13, 22, 27, 29])

function dateFor(day: number) {
  return `2026-05-${String(day).padStart(2, "0")}`
}

function isClosed(day: number) {
  const weekIndex = (day + 4) % 7
  return weekIndex === 0 || weekIndex === 6 || extraClosures.has(day)
}

function eventsFor(day: number) {
  return calendarEvents.filter((event) => event.date === dateFor(day))
}

export function CalendarCard({ large = false }: CalendarCardProps) {
  return (
    <Card className="portal-card overflow-hidden">
      <CardHeader className="px-6 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-3xl bg-[#E2D1B0]/45 text-[#3B5584]">
              <CalendarDays className="size-5" aria-hidden="true" />
            </span>
            <div>
              <CardTitle className="text-xl font-semibold text-[#3B5584]">
                May 2026
              </CardTitle>
              <p className="mt-1 text-sm font-medium text-[#5A6D8D]">
                X = School Closed
              </p>
            </div>
          </div>
          <span className="portal-pill">
            Completion month
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-5 px-6 pb-6">
        <div className="flex flex-wrap gap-2 rounded-3xl border border-[#dbe3ef] bg-[#f6f8fb] p-3 text-xs font-semibold text-[#5A6D8D]">
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-[#f6ca43]" />
            Event or check-in
          </span>
          <span className="flex items-center gap-1.5">
            <X className="size-3 text-[#3B5584]" aria-hidden="true" />
            School closed
          </span>
        </div>

        <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
          {weekdays.map((day) => (
            <div
              key={day}
              className="rounded-full bg-[#f6f8fb] py-1.5 text-center text-[0.68rem] font-semibold text-[#5A6D8D] sm:text-xs"
            >
              {day}
            </div>
          ))}
          {leadingBlanks.map((blank) => (
            <div key={blank} className="aspect-square" />
          ))}
          {days.map((day) => {
            const closed = isClosed(day)
            const dayEvents = eventsFor(day)

            return (
              <div
                key={day}
                className={cn(
                  "relative flex aspect-square min-w-0 flex-col rounded-2xl border p-1.5 text-xs transition sm:p-2 sm:text-sm",
                  large ? "min-h-16 sm:min-h-20" : "min-h-12 sm:min-h-14",
                  closed
                    ? "border-[#E2D1B0] bg-[#E2D1B0]/30 text-[#5A6D8D]"
                    : dayEvents.length
                      ? "border-[#3B5584]/30 bg-[#3B5584]/[0.06] text-[#3B5584] shadow-sm"
                      : "border-[#dbe3ef] bg-white text-[#3B5584]"
                )}
              >
                <span className="font-semibold">{day}</span>
                {closed ? (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <X
                      className="size-5 text-[#3B5584] sm:size-6"
                      aria-label="School closed"
                    />
                  </span>
                ) : null}
                {!closed && dayEvents.length ? (
                  <span className="mt-auto flex items-center gap-1 text-[0.65rem] font-semibold text-[#3B5584]">
                    <CalendarCheck2 className="size-3 text-[#f6ca43]" aria-hidden="true" />
                    {large ? dayEvents[0].type : ""}
                  </span>
                ) : null}
              </div>
            )
          })}
        </div>

        <div className={cn("grid gap-3", large && "lg:grid-cols-2")}>
          {calendarEvents.map((event) => (
            <div
              key={`${event.date}-${event.title}`}
              className="rounded-3xl border border-[#dbe3ef] bg-[#f6f8fb] p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-[#3B5584]">{event.title}</p>
                  <p className="mt-1 text-sm text-[#5A6D8D]">
                    {event.date} at {event.time}
                  </p>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#5A6D8D]">
                  {event.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        {large ? (
          <div className="grid gap-3 lg:grid-cols-2">
            {schoolClosures.map((closure) => (
              <div
                key={closure.date}
                className="rounded-3xl border border-[#E2D1B0] bg-[#E2D1B0]/20 p-4"
              >
                <p className="font-semibold text-[#3B5584]">{closure.title}</p>
                <p className="mt-1 text-sm text-[#5A6D8D]">
                  {closure.date} - {closure.note}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}
