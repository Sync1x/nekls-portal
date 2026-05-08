"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LogOut, UserRound } from "lucide-react"

import { NEKLSLogo } from "@/components/NEKLSLogo"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { clearDemoSession, type UserRole } from "@/lib/auth"

type TopNavProps = {
  mode: UserRole
}

const navItems = {
  student: [
    ["Dashboard", "/student/dashboard"],
    ["Learning", "/student/learning"],
    ["Progress", "/student/progress"],
    ["Completion", "/student/completion"],
    ["Calendar", "/student/calendar"],
    ["Communication", "/student/communication"],
    ["NEKLSAI", "/student/ai"],
  ],
  admin: [
    ["Dashboard", "/admin/dashboard"],
    ["Analytics", "/admin/analytics"],
    ["Students", "/admin/students"],
    ["Teachers", "/admin/teachers"],
    ["Communications", "/admin/communications"],
    ["Reminders", "/admin/reminders"],
  ],
} satisfies Record<UserRole, [string, string][]>

export function TopNav({ mode }: TopNavProps) {
  const pathname = usePathname()
  const router = useRouter()

  function onLogout() {
    clearDemoSession()
    router.push("/")
  }

  return (
    <header className="sticky top-0 z-20 border-b border-[#dbe3ef] bg-white/90 shadow-sm shadow-[#3B5584]/5 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <Link
            href={`/${mode}/dashboard`}
            className="flex items-center gap-3 text-[#3B5584]"
          >
            <NEKLSLogo compact />
            <span className="min-w-0">
              <span className="block text-lg font-semibold leading-5 tracking-normal">
                NEKLS Portal
              </span>
              <span className="block text-xs font-medium capitalize text-[#5A6D8D]">
                {mode} view
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-2xl border border-[#dbe3ef] bg-[#f6f8fb] px-3 py-2 text-sm font-semibold text-[#3B5584] sm:flex">
              <UserRound className="size-4" aria-hidden="true" />
              {mode === "student" ? "Jordan" : "Admin"}
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={onLogout}
              className="h-10 rounded-2xl border-[#dbe3ef] bg-white px-3 text-[#3B5584] hover:bg-[#f6f8fb] sm:px-4"
            >
              <LogOut className="size-4" aria-hidden="true" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </div>

        <nav
          aria-label={`${mode} navigation`}
          className="-mx-1 overflow-x-auto px-1 pb-1"
        >
          <div className="flex min-w-max gap-2 rounded-3xl bg-[#f6f8fb]/80 p-1">
            {navItems[mode].map(([label, href]) => {
              const isActive = pathname === href || pathname.startsWith(`${href}/`)

              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "rounded-2xl px-4 py-2.5 text-sm font-semibold transition",
                    isActive
                      ? "bg-[#3B5584] text-white shadow-sm shadow-[#3B5584]/20"
                      : "text-[#5A6D8D] hover:bg-[#E2D1B0]/30 hover:text-[#3B5584]"
                  )}
                >
                  {label}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </header>
  )
}
