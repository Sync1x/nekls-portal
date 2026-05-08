import Link from "next/link"
import { ArrowLeft, FileText, MessageSquareText, StickyNote } from "lucide-react"

import { CompletionChecklist } from "@/components/CompletionChecklist"
import { ReminderList } from "@/components/ReminderList"
import { SubjectProgressCard } from "@/components/SubjectProgressCard"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  communications,
  completedAssignments,
  completionRequirements,
  currentStudent,
  students,
  subjectProgress,
  teacherNotes,
} from "@/lib/mockData"

type StudentDetailPageProps = {
  params: Promise<{
    id: string
  }>
}

export function generateStaticParams() {
  return students.map((student) => ({
    id: student.id,
  }))
}

export default async function AdminStudentDetailPage({
  params,
}: StudentDetailPageProps) {
  const { id } = await params
  const student =
    students.find((studentItem) => studentItem.id === id) ?? students[0]
  const isJordan = student.id === currentStudent.id

  return (
    <main className="portal-shell min-h-[calc(100svh-8rem)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6">
        <Button
          asChild
          variant="outline"
          className="w-fit rounded-2xl border-[#dbe3ef] bg-white text-[#3B5584] hover:bg-[#f6f8fb]"
        >
          <Link href="/admin/students">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to students
          </Link>
        </Button>

        <Card className="rounded-3xl border-[#dbe3ef] bg-white shadow-xl shadow-[#3B5584]/10">
          <CardContent className="p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.35fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold text-[#5A6D8D]">
                  {student.program}
                </p>
                <h1 className="mt-2 text-3xl font-semibold text-[#3B5584] sm:text-5xl">
                  {student.name}
                </h1>
                <p className="mt-3 text-base leading-7 text-[#5A6D8D]">
                  Assigned to {student.assignedTeacher}. Last active:{" "}
                  {student.lastActive}. Status: {student.status}.
                </p>
              </div>
              <div className="rounded-3xl bg-[#f6f8fb] p-5">
                <p className="text-sm font-semibold text-[#5A6D8D]">
                  Overall progress
                </p>
                <p className="mt-1 text-4xl font-semibold text-[#3B5584]">
                  {student.progressPercent}%
                </p>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#E2D1B0]/30">
                  <div
                    className="h-full rounded-full bg-[#3B5584]"
                    style={{ width: `${student.progressPercent}%` }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="rounded-3xl border-[#dbe3ef] bg-white shadow-sm">
            <CardContent className="p-6">
              <p className="text-sm font-semibold text-[#5A6D8D]">
                Completed assignments
              </p>
              <p className="mt-2 text-4xl font-semibold text-[#3B5584]">
                {student.completedAssignments}
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border-[#dbe3ef] bg-white shadow-sm">
            <CardContent className="p-6">
              <p className="text-sm font-semibold text-[#5A6D8D]">
                Remaining requirements
              </p>
              <p className="mt-2 text-4xl font-semibold text-[#3B5584]">
                {student.remainingRequirements}
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border-[#dbe3ef] bg-white shadow-sm">
            <CardContent className="p-6">
              <p className="text-sm font-semibold text-[#5A6D8D]">
                Check-in status
              </p>
              <p className="mt-2 text-2xl font-semibold text-[#3B5584]">
                {student.needsCheckIn ? "Follow-up needed" : "On track"}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6">
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#3B5584]">
                Subject Progress
              </h2>
              <div className="grid gap-5 md:grid-cols-2">
                {subjectProgress.map((subject) => (
                  <SubjectProgressCard key={subject.subject} {...subject} />
                ))}
              </div>
            </section>

            <Card className="rounded-3xl border-[#dbe3ef] bg-white shadow-sm">
              <CardHeader className="px-6 pt-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-3xl bg-[#E2D1B0]/45 text-[#3B5584]">
                    <FileText className="size-5" aria-hidden="true" />
                  </span>
                  <CardTitle className="text-xl font-semibold text-[#3B5584]">
                    Remaining Requirements
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="grid gap-3 px-6 pb-6 md:grid-cols-2">
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

          <div className="grid gap-6">
            <CompletionChecklist title="Admin Completion Checklist" />

            <Card className="rounded-3xl border-[#dbe3ef] bg-white shadow-sm">
              <CardHeader className="px-6 pt-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-3xl bg-[#E2D1B0]/45 text-[#3B5584]">
                    <MessageSquareText className="size-5" aria-hidden="true" />
                  </span>
                  <CardTitle className="text-xl font-semibold text-[#3B5584]">
                    Recent Communications
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 px-6 pb-6">
                {communications.slice(0, 3).map((message) => (
                  <div
                    key={`${message.date}-${message.subject}`}
                    className="rounded-3xl bg-[#f6f8fb] p-4"
                  >
                    <p className="font-semibold text-[#3B5584]">
                      {message.subject}
                    </p>
                    <p className="mt-1 text-sm text-[#5A6D8D]">
                      {message.from} - {message.date}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-[#dbe3ef] bg-white shadow-sm">
              <CardHeader className="px-6 pt-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-3xl bg-[#E2D1B0]/45 text-[#3B5584]">
                    <StickyNote className="size-5" aria-hidden="true" />
                  </span>
                  <CardTitle className="text-xl font-semibold text-[#3B5584]">
                    Teacher Notes
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 px-6 pb-6">
                {teacherNotes.map((note) => (
                  <div key={note.note} className="rounded-3xl bg-[#f6f8fb] p-4">
                    <p className="font-semibold text-[#3B5584]">
                      {note.teacher}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#5A6D8D]">
                      {note.note}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {isJordan ? (
          <Card className="rounded-3xl border-[#dbe3ef] bg-white shadow-sm">
            <CardHeader className="px-6 pt-6">
              <CardTitle className="text-xl font-semibold text-[#3B5584]">
                Completed Work Snapshot
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 px-6 pb-6 md:grid-cols-2 lg:grid-cols-3">
              {completedAssignments.slice(0, 9).map((assignment) => (
                <div
                  key={assignment}
                  className="rounded-2xl bg-[#f6f8fb] px-4 py-3 text-sm font-medium text-[#5A6D8D]"
                >
                  {assignment}
                </div>
              ))}
            </CardContent>
          </Card>
        ) : null}

        <ReminderList compact />
      </div>
    </main>
  )
}
