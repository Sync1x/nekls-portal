import { SubjectProgressCard } from "@/components/SubjectProgressCard"
import { subjectProgress } from "@/lib/mockData"

export default function StudentLearningPage() {
  return (
    <main className="portal-shell min-h-[calc(100svh-8rem)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <p className="text-sm font-semibold text-[#5A6D8D]">Learning</p>
          <h1 className="mt-2 text-3xl font-semibold text-[#3B5584]">
            Choose a subject to keep going.
          </h1>
          <p className="mt-2 max-w-2xl text-base leading-7 text-[#5A6D8D]">
            Jordan is close to the finish line, so each subject card focuses on
            the next useful action.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {subjectProgress.map((subject) => (
            <SubjectProgressCard key={subject.subject} {...subject} />
          ))}
        </div>
      </div>
    </main>
  )
}
