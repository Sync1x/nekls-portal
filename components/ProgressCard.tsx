import { Award, CheckCircle2, Sparkle, Sparkles, Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { currentStudent } from "@/lib/mockData"

type ProgressCardProps = {
  compact?: boolean
}

export function ProgressCard({ compact = false }: ProgressCardProps) {
  const remaining = currentStudent.remainingAssignments

  return (
    <Card className="group relative overflow-hidden rounded-[2rem] border-[#dbe3ef] bg-white shadow-xl shadow-[#3B5584]/10">
      <div className="absolute inset-x-0 top-0 h-2 bg-[#f6ca43]" />
      <div className="absolute right-7 top-8 hidden text-[#E2D1B0] sm:block">
        <Sparkles className="float-star size-10" aria-hidden="true" />
      </div>
      <div className="absolute right-24 top-20 hidden text-[#f6ca43] sm:block">
        <Star className="float-star-delay size-5 fill-current" aria-hidden="true" />
      </div>
      <div className="absolute bottom-8 right-10 hidden text-[#E2D1B0] opacity-80 lg:block">
        <Sparkle className="float-star size-6" aria-hidden="true" />
      </div>
      <CardContent className="p-6 sm:p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="portal-pill mb-3 w-fit">
              {currentStudent.program}
            </p>
            <h1 className="max-w-2xl text-3xl font-semibold tracking-normal text-[#3B5584] sm:text-5xl">
              You&apos;re almost there, Jordan.
            </h1>
            <p className="mt-4 text-base leading-7 text-[#5A6D8D] sm:text-lg">
              You have finished {currentStudent.completedAssignments} major
              assignments across History, Math, Science, and Social Studies.
              Only {remaining} focused pieces are left before final review.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:w-72 lg:grid-cols-1">
            <div className="rounded-3xl border border-[#dbe3ef] bg-[#f6f8fb] p-5 shadow-inner shadow-white">
              <p className="text-sm font-semibold text-[#5A6D8D]">
                Complete
              </p>
              <p className="mt-1 text-5xl font-semibold text-[#3B5584]">
                {currentStudent.progressPercent}%
              </p>
            </div>
            <div className="rounded-3xl border border-[#dbe3ef] bg-[#f6f8fb] p-5 shadow-inner shadow-white">
              <p className="text-sm font-semibold text-[#5A6D8D]">
                Completed
              </p>
              <p className="mt-1 text-5xl font-semibold text-[#3B5584]">
                {currentStudent.completedAssignments}
              </p>
            </div>
          </div>
        </div>

        <div className={compact ? "mt-6" : "mt-8"}>
          <div className="mb-3 flex items-center justify-between gap-4 text-sm font-semibold text-[#3B5584]">
            <span>Overall completion</span>
            <span>{remaining} assignments remaining</span>
          </div>
          <div className="portal-progress h-6">
            <div
              className="portal-progress-fill h-full rounded-full shadow-sm"
              style={{ width: `${currentStudent.progressPercent}%` }}
            />
          </div>
        </div>

        {!compact ? (
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-3xl bg-[#f6f8fb] p-4 text-[#3B5584]">
              <CheckCircle2 className="size-5" aria-hidden="true" />
              <span className="text-sm font-semibold">
                Final review is within reach
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-3xl bg-[#f6f8fb] p-4 text-[#3B5584]">
              <Award className="size-5" aria-hidden="true" />
              <span className="text-sm font-semibold">
                Expected completion: {currentStudent.expectedCompletion}
              </span>
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}
