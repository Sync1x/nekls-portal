import { AssignmentSummaryCard } from "@/components/AssignmentSummaryCard"
import { ProgressCard } from "@/components/ProgressCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  completedAssignments,
  completionRequirements,
  currentStudent,
  subjectProgress,
} from "@/lib/mockData"

export default function StudentProgressPage() {
  return (
    <main className="portal-shell min-h-[calc(100svh-8rem)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6">
        <ProgressCard compact />

        <div className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
          <Card className="rounded-3xl border-[#dbe3ef] bg-white shadow-sm">
            <CardHeader className="px-6 pt-6">
              <CardTitle className="text-xl font-semibold text-[#3B5584]">
                Subject-by-Subject Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 px-6 pb-6">
              {subjectProgress.map((subject) => (
                <div key={subject.subject} className="rounded-3xl bg-[#f6f8fb] p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-[#3B5584]">
                        {subject.subject}
                      </p>
                      <p className="mt-1 text-sm text-[#5A6D8D]">
                        Next milestone: {subject.nextMilestone}
                      </p>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-[#3B5584]">
                      {subject.progressPercent}%
                    </span>
                  </div>
                  <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#E2D1B0]/30">
                    <div
                      className="h-full rounded-full bg-[#f6ca43]"
                      style={{ width: `${subject.progressPercent}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid gap-6">
            <AssignmentSummaryCard />
            <Card className="rounded-3xl border-[#dbe3ef] bg-white shadow-sm">
              <CardHeader className="px-6 pt-6">
                <CardTitle className="text-xl font-semibold text-[#3B5584]">
                  Remaining Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 px-6 pb-6">
                {completionRequirements.map((requirement) => (
                  <div
                    key={requirement.requirement}
                    className="rounded-3xl bg-[#f6f8fb] p-4"
                  >
                    <p className="font-semibold text-[#3B5584]">
                      {requirement.requirement}
                    </p>
                    <p className="mt-1 text-sm text-[#5A6D8D]">
                      {requirement.status}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="rounded-3xl border-[#dbe3ef] bg-white shadow-sm">
          <CardHeader className="px-6 pt-6">
            <CardTitle className="text-xl font-semibold text-[#3B5584]">
              Assignments Completed
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 px-6 pb-6 md:grid-cols-2 lg:grid-cols-3">
            {completedAssignments.slice(0, currentStudent.completedAssignments).map(
              (assignment) => (
                <div
                  key={assignment}
                  className="rounded-2xl bg-[#f6f8fb] px-4 py-3 text-sm font-medium text-[#5A6D8D]"
                >
                  {assignment}
                </div>
              )
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
