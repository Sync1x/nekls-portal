import { CommunicationFeed } from "@/components/CommunicationFeed"

export default function StudentCommunicationPage() {
  return (
    <main className="portal-shell min-h-[calc(100svh-8rem)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <p className="text-sm font-semibold text-[#5A6D8D]">
            Communication
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[#3B5584]">
            Messages, notices, and reminders in one calm place.
          </h1>
          <p className="mt-2 max-w-2xl text-base leading-7 text-[#5A6D8D]">
            This is a mock communication center with no real messaging backend.
          </p>
        </div>
        <CommunicationFeed />
      </div>
    </main>
  )
}
