import Link from "next/link"

import { LoginForm } from "@/components/LoginForm"
import { PortalHeader } from "@/components/PortalHeader"

export default function StudentLoginPage() {
  return (
    <main className="portal-shell flex min-h-svh items-center justify-center px-4 py-10 sm:px-6">
      <div className="w-full">
        <PortalHeader
          eyebrow="Demo access"
          title="NEKLS Portal"
          subtitle="Use test@gmail.com and 1234 to enter the student demo."
          className="mb-8"
        />
        <LoginForm role="student" />
        <p className="mt-6 text-center text-sm text-[#5A6D8D]">
          Looking for admin access?{" "}
          <Link href="/login/admin" className="font-semibold text-[#3B5584]">
            Admin Login
          </Link>
        </p>
      </div>
    </main>
  )
}
