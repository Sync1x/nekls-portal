import { FileCheck2, Signature } from "lucide-react"

import { CompletionChecklist } from "@/components/CompletionChecklist"
import { NextStepsCard } from "@/components/NextStepsCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StudentCompletionPage() {
  return (
    <main className="portal-shell min-h-[calc(100svh-8rem)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6">
        <Card className="rounded-3xl border-[#dbe3ef] bg-white shadow-xl shadow-[#3B5584]/10">
          <CardContent className="p-6 sm:p-8">
            <p className="w-fit rounded-full bg-[#E2D1B0]/35 px-4 py-1.5 text-sm font-semibold text-[#3B5584]">
              Completion
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-[#3B5584] sm:text-5xl">
              Almost done. Finish the last few steps, then final review begins.
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#5A6D8D]">
              This page keeps the remaining work visible so Jordan can move
              from learning tasks to advisor review with confidence.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <CompletionChecklist />
          <div className="grid gap-6">
            <NextStepsCard />
            <Card className="rounded-3xl border-[#dbe3ef] bg-white shadow-sm">
              <CardHeader className="px-6 pt-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-3xl bg-[#E2D1B0]/45 text-[#3B5584]">
                    <FileCheck2 className="size-5" aria-hidden="true" />
                  </span>
                  <CardTitle className="text-xl font-semibold text-[#3B5584]">
                    Final Review
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="grid gap-3 px-6 pb-6 sm:grid-cols-2">
                <div className="rounded-3xl bg-[#f6f8fb] p-4">
                  <p className="font-semibold text-[#3B5584]">
                    Advisor review
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#5A6D8D]">
                    Scheduled after the final reflection and wrap-up are
                    submitted.
                  </p>
                </div>
                <div className="rounded-3xl bg-[#f6f8fb] p-4">
                  <p className="font-semibold text-[#3B5584]">
                    Administrator review
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#5A6D8D]">
                    Placeholder for final records check and completion
                    confirmation.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-[#dbe3ef] bg-white shadow-sm">
              <CardContent className="flex items-start gap-4 p-6">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-3xl bg-[#E2D1B0]/45 text-[#3B5584]">
                  <Signature className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-xl font-semibold text-[#3B5584]">
                    Teacher Sign-Off Placeholder
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#5A6D8D]">
                    Teachers will review the final submitted work here in a
                    future build. For now, this is demo-only and does not
                    submit anything.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
