import { StudentsTable } from "@/components/StudentsTable"

export default function AdminStudentsPage() {
  return (
    <main className="portal-shell min-h-[calc(100svh-8rem)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <p className="text-sm font-semibold text-[#5A6D8D]">Students</p>
          <h1 className="mt-2 text-3xl font-semibold text-[#3B5584]">
            Student roster and completion status.
          </h1>
          <p className="mt-2 max-w-2xl text-base leading-7 text-[#5A6D8D]">
            Review student progress, last activity, support status, and assigned
            teacher using mock data.
          </p>
        </div>
        <StudentsTable />
      </div>
    </main>
  )
}
