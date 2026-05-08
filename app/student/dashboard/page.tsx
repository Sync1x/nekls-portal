import { Bot, CheckCircle2, MessageCircle, Trophy } from "lucide-react"

import { AssignmentSummaryCard } from "@/components/AssignmentSummaryCard"
import { CalendarCard } from "@/components/CalendarCard"
import { NextStepsCard } from "@/components/NextStepsCard"
import { ProgressCard } from "@/components/ProgressCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { currentStudent, subjectProgress } from "@/lib/mockData"

export default function StudentDashboardPage() {
  return (
    <main className="portal-shell min-h-[calc(100svh-8rem)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6">
        <ProgressCard />

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <NextStepsCard dashboard />
              <AssignmentSummaryCard />
            </div>

            <Card className="portal-card">
              <CardHeader className="px-6 pt-6">
                <CardTitle className="text-xl font-semibold text-[#3B5584]">
                  Progress So Far
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-6 pb-6">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-[#f6f8fb] p-5">
                    <p className="text-sm font-semibold text-[#5A6D8D]">
                      Completed
                    </p>
                    <p className="mt-2 text-3xl font-semibold text-[#3B5584]">
                      {currentStudent.completedAssignments}
                    </p>
                  </div>
                  <div className="rounded-3xl bg-[#f6f8fb] p-5">
                    <p className="text-sm font-semibold text-[#5A6D8D]">
                      Remaining
                    </p>
                    <p className="mt-2 text-3xl font-semibold text-[#3B5584]">
                      {currentStudent.remainingAssignments}
                    </p>
                  </div>
                </div>
                <div className="grid gap-3">
                  {subjectProgress.map((subject) => (
                    <div key={subject.subject}>
                      <div className="mb-2 flex justify-between text-sm font-semibold text-[#3B5584]">
                        <span>{subject.subject}</span>
                        <span>{subject.progressPercent}%</span>
                      </div>
                      <div className="portal-progress h-3">
                        <div
                          className="portal-progress-fill h-full rounded-full"
                          style={{ width: `${subject.progressPercent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="portal-card lg:col-span-2">
                <CardContent className="flex items-start gap-4 p-6">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-3xl bg-[#E2D1B0]/45 text-[#3B5584]">
                    <MessageCircle className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-[#3B5584]">
                      Teacher Check-In Note
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-[#5A6D8D]">
                      Ms. Kim says your momentum is strong. Focus on the final
                      Science reflection first, then use your advisor meeting to
                      review the last Social Studies wrap-up.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="portal-card">
                <CardContent className="p-6">
                  <span className="flex size-12 items-center justify-center rounded-3xl bg-[#E2D1B0]/45 text-[#3B5584]">
                    <Trophy className="size-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 text-xl font-semibold text-[#3B5584]">
                    Recent Achievements
                  </h2>
                  <div className="mt-4 space-y-3">
                    {["Completed Science data set", "Finished History review"].map(
                      (achievement) => (
                        <div
                          key={achievement}
                          className="flex items-center gap-2 text-sm font-medium text-[#5A6D8D]"
                        >
                          <CheckCircle2
                            className="size-4 text-[#3B5584]"
                            aria-hidden="true"
                          />
                          {achievement}
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid gap-6">
            <CalendarCard />
            <Card className="overflow-hidden rounded-3xl border-[#3B5584] bg-[#3B5584] text-white shadow-xl shadow-[#3B5584]/15">
              <CardContent className="p-6">
                <span className="flex size-12 items-center justify-center rounded-3xl bg-white/15">
                  <Bot className="size-5" aria-hidden="true" />
                </span>
                <h2 className="mt-4 text-2xl font-semibold">NEKLSAI</h2>
                <p className="mt-2 text-sm leading-6 text-white/85">
                  Need a hint without getting the final answer? Ask NEKLSAI to
                  break the next step into something manageable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
