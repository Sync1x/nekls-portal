import { GraduationCap, ShieldCheck } from "lucide-react"

import { LoginChoiceCard } from "@/components/LoginChoiceCard"
import { PortalHeader } from "@/components/PortalHeader"

export default function Page() {
  return (
    <main className="portal-shell flex min-h-svh items-center justify-center px-4 py-10 sm:px-6">
      <div className="w-full max-w-5xl">
        <PortalHeader
          eyebrow="Welcome"
          title="NEKLS Portal"
          subtitle="A simple learning portal for students, teachers, and administrators."
        />

        <div className="mx-auto mt-8 flex w-fit rounded-full border border-[#dbe3ef] bg-white px-4 py-2 text-sm font-semibold text-[#5A6D8D] shadow-sm">
          Demo only - no real student records or authentication
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <LoginChoiceCard
            href="/login/admin"
            icon={ShieldCheck}
            title="Admin Login"
            description="View school progress, communications, reminders, and student support tools."
          />
          <LoginChoiceCard
            href="/login/student"
            icon={GraduationCap}
            title="Student Login"
            description="Continue learning, check completion progress, and review upcoming steps."
          />
        </div>
      </div>
    </main>
  )
}
