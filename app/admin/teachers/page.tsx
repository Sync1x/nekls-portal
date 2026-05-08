import { Mail, UsersRound } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { teachers } from "@/lib/mockData"

export default function AdminTeachersPage() {
  return (
    <main className="portal-shell min-h-[calc(100svh-8rem)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <p className="text-sm font-semibold text-[#5A6D8D]">Teachers</p>
          <h1 className="mt-2 text-3xl font-semibold text-[#3B5584]">
            Teacher load and check-in needs.
          </h1>
          <p className="mt-2 max-w-2xl text-base leading-7 text-[#5A6D8D]">
            A friendly operational view of assigned students, program areas,
            contact information, and support status.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {teachers.map((teacher) => (
            <Card
              key={teacher.id}
              className="rounded-3xl border-[#dbe3ef] bg-white shadow-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-12 items-center justify-center rounded-3xl bg-[#E2D1B0]/45 text-[#3B5584]">
                    <UsersRound className="size-5" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-[#f6f8fb] px-3 py-1 text-xs font-semibold text-[#5A6D8D]">
                    {teacher.subject}
                  </span>
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-[#3B5584]">
                  {teacher.name}
                </h2>
                <div className="mt-4 grid gap-3">
                  <div className="rounded-3xl bg-[#f6f8fb] p-4">
                    <p className="text-sm font-semibold text-[#5A6D8D]">
                      Assigned students
                    </p>
                    <p className="mt-1 text-3xl font-semibold text-[#3B5584]">
                      {teacher.activeStudents}
                    </p>
                  </div>
                  <div className="rounded-3xl bg-[#f6f8fb] p-4">
                    <p className="text-sm font-semibold text-[#5A6D8D]">
                      Students needing check-in
                    </p>
                    <p className="mt-1 text-3xl font-semibold text-[#3B5584]">
                      {teacher.studentsNeedingCheckIn}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-[#5A6D8D]">
                  {teacher.statusSummary}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#3B5584]">
                  <Mail className="size-4" aria-hidden="true" />
                  {teacher.email}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
