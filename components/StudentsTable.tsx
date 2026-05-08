import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { students } from "@/lib/mockData"

export function StudentsTable() {
  return (
    <Card className="portal-card">
      <CardHeader className="px-6 pt-6">
        <CardTitle className="text-xl font-semibold text-[#3B5584]">
          Student Roster
        </CardTitle>
      </CardHeader>
      <CardContent className="px-3 pb-3 sm:px-6 sm:pb-6">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] border-separate border-spacing-y-2 text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-[#5A6D8D]">
                <th className="px-4 py-2 font-semibold">Name</th>
                <th className="px-4 py-2 font-semibold">Program</th>
                <th className="px-4 py-2 font-semibold">Progress</th>
                <th className="px-4 py-2 font-semibold">Last active</th>
                <th className="px-4 py-2 font-semibold">Status</th>
                <th className="px-4 py-2 font-semibold">Assigned teacher</th>
                <th className="px-4 py-2 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="bg-[#f6f8fb] shadow-sm shadow-[#3B5584]/5 transition hover:bg-[#E2D1B0]/20"
                >
                  <td className="rounded-l-2xl px-4 py-4">
                    <div>
                      <p className="font-semibold text-[#3B5584]">
                        {student.name}
                      </p>
                      <p className="mt-1 text-xs text-[#5A6D8D]">
                        {student.email}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-[#5A6D8D]">
                    {student.program}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2.5 w-28 overflow-hidden rounded-full bg-[#E2D1B0]/30">
                        <div
                          className="h-full rounded-full bg-[#3B5584]"
                          style={{ width: `${student.progressPercent}%` }}
                        />
                      </div>
                      <span className="font-semibold text-[#3B5584]">
                        {student.progressPercent}%
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-[#5A6D8D]">
                    {student.lastActive}
                  </td>
                  <td className="px-4 py-4">
                    <span className="rounded-full border border-[#dbe3ef] bg-white px-3 py-1 text-xs font-semibold text-[#3B5584]">
                      {student.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-[#5A6D8D]">
                    {student.assignedTeacher}
                  </td>
                  <td className="rounded-r-2xl px-4 py-4">
                    <Button
                      asChild
                      className="h-9 rounded-2xl bg-[#3B5584] text-white shadow-sm shadow-[#3B5584]/15 hover:bg-[#2f456d]"
                    >
                      <Link href={`/admin/students/${student.id}`}>
                        View
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
