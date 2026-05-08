import {
  BellRing,
  CalendarX,
  MessageSquareText,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react"

import { AdminMetricCard } from "@/components/AdminMetricCard"
import { CommunicationFeed } from "@/components/CommunicationFeed"
import { ReminderList } from "@/components/ReminderList"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  adminMetrics,
  communications,
  schoolClosures,
  students,
} from "@/lib/mockData"

export default function AdminDashboardPage() {
  const needingCheckIn = students.filter((student) => student.needsCheckIn)

  return (
    <main className="portal-shell min-h-[calc(100svh-8rem)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6">
        <Card className="rounded-3xl border-[#dbe3ef] bg-white shadow-xl shadow-[#3B5584]/10">
          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="w-fit rounded-full bg-[#E2D1B0]/35 px-4 py-1.5 text-sm font-semibold text-[#3B5584]">
                  Admin overview
                </p>
                <h1 className="mt-4 text-3xl font-semibold text-[#3B5584] sm:text-5xl">
                  School operations, calm and clear.
                </h1>
                <p className="mt-4 text-base leading-7 text-[#5A6D8D]">
                  Monitor completion progress, check-ins, closures,
                  communications, and open reminders using demo data only.
                </p>
              </div>
              <span className="flex size-16 items-center justify-center rounded-3xl bg-[#E2D1B0]/45 text-[#3B5584]">
                <ShieldCheck className="size-8" aria-hidden="true" />
              </span>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <AdminMetricCard
            label="Total students"
            value={adminMetrics.totalStudents}
            note={`${adminMetrics.activeStudents} active this week`}
            icon={Users}
            progressPercent={92}
          />
          <AdminMetricCard
            label="Close to completion"
            value={adminMetrics.nearCompletion}
            note="Ready for final push planning"
            icon={UserCheck}
            progressPercent={78}
          />
          <AdminMetricCard
            label="Need check-in"
            value={needingCheckIn.length}
            note="Students flagged for follow-up"
            icon={BellRing}
            progressPercent={42}
          />
          <AdminMetricCard
            label="Open reminders"
            value={adminMetrics.reminderQueue}
            note="Actions waiting for staff"
            icon={MessageSquareText}
            progressPercent={55}
          />
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
          <Card className="rounded-3xl border-[#dbe3ef] bg-white shadow-sm">
            <CardHeader className="px-6 pt-6">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-3xl bg-[#E2D1B0]/45 text-[#3B5584]">
                  <CalendarX className="size-5" aria-hidden="true" />
                </span>
                <CardTitle className="text-xl font-semibold text-[#3B5584]">
                  Upcoming Closures
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 px-6 pb-6">
              {schoolClosures.slice(0, 3).map((closure) => (
                <div key={closure.date} className="rounded-3xl bg-[#f6f8fb] p-4">
                  <p className="font-semibold text-[#3B5584]">
                    {closure.title}
                  </p>
                  <p className="mt-1 text-sm text-[#5A6D8D]">
                    {closure.date} - {closure.note}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-[#dbe3ef] bg-white shadow-sm">
            <CardHeader className="px-6 pt-6">
              <CardTitle className="text-xl font-semibold text-[#3B5584]">
                Recent Communications
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 px-6 pb-6 md:grid-cols-2">
              {communications.slice(0, 4).map((message) => (
                <div
                  key={`${message.date}-${message.subject}`}
                  className="rounded-3xl bg-[#f6f8fb] p-4"
                >
                  <p className="font-semibold text-[#3B5584]">
                    {message.subject}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#5A6D8D]">
                    {message.from} to {message.audience}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#5A6D8D]">
                    {message.preview}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <ReminderList compact />
          <CommunicationFeed mode="admin" />
        </div>
      </div>
    </main>
  )
}
