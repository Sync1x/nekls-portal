import { CommunicationFeed } from "@/components/CommunicationFeed"

export default function AdminCommunicationsPage() {
  return (
    <main className="portal-shell min-h-[calc(100svh-8rem)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <p className="text-sm font-semibold text-[#5A6D8D]">
            Communications
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[#3B5584]">
            Messages, notices, notes, and summaries.
          </h1>
          <p className="mt-2 max-w-2xl text-base leading-7 text-[#5A6D8D]">
            A mock feed for recent student messages, teacher notes, school
            notices, and NEKLSAI summaries.
          </p>
        </div>
        <CommunicationFeed mode="admin" />
      </div>
    </main>
  )
}
