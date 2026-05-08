import { CalendarCard } from "@/components/CalendarCard"

export default function StudentCalendarPage() {
  return (
    <main className="portal-shell min-h-[calc(100svh-8rem)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <p className="text-sm font-semibold text-[#5A6D8D]">Calendar</p>
          <h1 className="mt-2 text-3xl font-semibold text-[#3B5584]">
            Plan around check-ins, due dates, and school closures.
          </h1>
          <p className="mt-2 max-w-2xl text-base leading-7 text-[#5A6D8D]">
            Weekends and selected Wednesday or Friday closures are marked with
            an X. Open days include check-ins and assignment due dates.
          </p>
        </div>
        <CalendarCard large />
      </div>
    </main>
  )
}
