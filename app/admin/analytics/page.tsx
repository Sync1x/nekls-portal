import {
  Bot,
  ChartNoAxesColumnIncreasing,
  CircleAlert,
  GraduationCap,
  Percent,
  UserCheck,
} from "lucide-react"

import { AdminMetricCard } from "@/components/AdminMetricCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { adminAnalytics, adminMetrics, subjectProgress } from "@/lib/mockData"

const icons = [
  UserCheck,
  GraduationCap,
  CircleAlert,
  Percent,
  ChartNoAxesColumnIncreasing,
  Bot,
]

export default function AdminAnalyticsPage() {
  return (
    <main className="portal-shell min-h-[calc(100svh-8rem)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6">
        <div>
          <p className="text-sm font-semibold text-[#5A6D8D]">Analytics</p>
          <h1 className="mt-2 text-3xl font-semibold text-[#3B5584]">
            Program signals at a glance.
          </h1>
          <p className="mt-2 max-w-2xl text-base leading-7 text-[#5A6D8D]">
            Mock analytics for student activity, completion risk, subject
            support, and NEKLSAI usage.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {adminAnalytics.map((metric, index) => (
            <AdminMetricCard
              key={metric.label}
              label={metric.label}
              value={metric.value}
              note={metric.note}
              icon={icons[index]}
              progressPercent={metric.progressPercent}
            />
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="rounded-3xl border-[#dbe3ef] bg-white shadow-sm">
            <CardHeader className="px-6 pt-6">
              <CardTitle className="text-xl font-semibold text-[#3B5584]">
                Subject Support Snapshot
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 px-6 pb-6">
              {subjectProgress.map((subject) => (
                <div key={subject.subject}>
                  <div className="mb-2 flex items-center justify-between text-sm font-semibold text-[#3B5584]">
                    <span>{subject.subject}</span>
                    <span>{subject.remainingAssignments} open items</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-[#E2D1B0]/30">
                    <div
                      className="h-full rounded-full bg-[#3B5584]"
                      style={{ width: `${subject.progressPercent}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-[#dbe3ef] bg-white shadow-sm">
            <CardContent className="p-6">
              <p className="text-sm font-semibold text-[#5A6D8D]">
                This week&apos;s focus
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#3B5584]">
                {adminMetrics.commonHelpSubject}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#5A6D8D]">
                Most support requests are connected to math unit checks,
                graphing, and choosing the first step in multi-step problems.
              </p>
              <div className="mt-5 rounded-3xl bg-[#f6f8fb] p-4">
                <p className="font-semibold text-[#3B5584]">
                  {adminMetrics.aiTutoringQuestions} mock NEKLSAI questions
                </p>
                <p className="mt-1 text-sm text-[#5A6D8D]">
                  Summaries are demo-only and do not use a real AI API.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
