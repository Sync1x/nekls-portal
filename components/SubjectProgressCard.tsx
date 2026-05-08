import { ArrowRight, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type SubjectProgressCardProps = {
  subject: string
  description: string
  status: string
  progressPercent: number
  completedAssignments: number
  remainingAssignments: number
  nextMilestone: string
}

export function SubjectProgressCard({
  subject,
  description,
  status,
  progressPercent,
  completedAssignments,
  remainingAssignments,
  nextMilestone,
}: SubjectProgressCardProps) {
  return (
    <Card className="portal-card portal-card-lift">
      <CardHeader className="px-6 pt-6">
        <div className="flex items-start justify-between gap-4">
          <span className="flex size-12 items-center justify-center rounded-3xl bg-[#E2D1B0]/45 text-[#3B5584]">
            <BookOpen className="size-5" aria-hidden="true" />
          </span>
          <span className="rounded-full bg-[#f6f8fb] px-3 py-1 text-xs font-semibold text-[#5A6D8D]">
            {status}
          </span>
        </div>
        <CardTitle className="pt-2 text-2xl font-semibold text-[#3B5584]">
          {subject}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 px-6 pb-6">
        <p className="text-sm leading-6 text-[#5A6D8D]">{description}</p>
        <div>
          <div className="mb-2 flex justify-between text-sm font-semibold text-[#3B5584]">
            <span>{progressPercent}% complete</span>
            <span>{remainingAssignments} left</span>
          </div>
          <div className="portal-progress h-3">
            <div
              className="portal-progress-fill h-full rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
        <div className="grid gap-2 text-sm">
          <div className="flex justify-between rounded-2xl bg-[#f6f8fb] px-4 py-3">
            <span className="font-medium text-[#5A6D8D]">Completed</span>
            <span className="font-semibold text-[#3B5584]">
              {completedAssignments} assignments
            </span>
          </div>
          <div className="rounded-2xl bg-[#f6f8fb] px-4 py-3">
            <span className="font-medium text-[#5A6D8D]">Next milestone</span>
            <p className="mt-1 font-semibold text-[#3B5584]">
              {nextMilestone}
            </p>
          </div>
        </div>
        <Button className="h-11 w-full rounded-2xl bg-[#3B5584] text-white hover:bg-[#2f456d]">
          Continue
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </CardContent>
    </Card>
  )
}
