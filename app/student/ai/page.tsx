import { NEKLSAIChat } from "@/components/NEKLSAIChat"

export default function StudentAIPage() {
  return (
    <main className="portal-shell min-h-[calc(100svh-8rem)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6">
          <p className="text-sm font-semibold text-[#5A6D8D]">NEKLSAI</p>
          <h1 className="mt-2 text-3xl font-semibold text-[#3B5584]">
            A gentle study helper for the next step.
          </h1>
          <p className="mt-2 max-w-2xl text-base leading-7 text-[#5A6D8D]">
            This page is UI-only. It gives mock, teacher-like guidance without
            calling a real AI service.
          </p>
        </div>
        <NEKLSAIChat />
      </div>
    </main>
  )
}
