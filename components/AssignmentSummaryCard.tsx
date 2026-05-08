import { BookOpenCheck } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { currentStudent, subjectProgress } from "@/lib/mockData"

export function AssignmentSummaryCard() {
  return (
    <Card className="portal-card">
      <CardHeader className="px-6 pt-6">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-3xl bg-[#E2D1B0]/45 text-[#3B5584]">
            <BookOpenCheck className="size-5" aria-hidden="true" />
          </span>
          <CardTitle className="text-xl font-semibold text-[#3B5584]">
            Assignment Summary
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-5 px-6 pb-6">
        <div>
          <p className="text-4xl font-semibold text-[#3B5584]">
            {currentStudent.completedAssignments}
          </p>
          <p className="mt-1 text-sm font-medium text-[#5A6D8D]">
            major assignments completed
          </p>
        </div>
        <div className="grid gap-2">
          {subjectProgress.map((subject) => (
            <div
              key={subject.subject}
              className="flex items-center justify-between rounded-2xl bg-[#f6f8fb] px-4 py-3"
            >
              <span className="font-semibold text-[#3B5584]">
                {subject.subject}
              </span>
              <span className="text-sm font-medium text-[#5A6D8D]">
                {subject.completedAssignments} done
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
