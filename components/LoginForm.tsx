"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, Info, LockKeyhole, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { fakeLogin, setDemoSession, type UserRole } from "@/lib/auth"

type LoginFormProps = {
  role: UserRole
}

const roleCopy = {
  admin: {
    title: "Admin Login",
    description: "Sign in with demo credentials to preview the admin portal.",
    redirectTo: "/admin/dashboard",
  },
  student: {
    title: "Student Login",
    description: "Sign in with demo credentials to preview the student portal.",
    redirectTo: "/student/dashboard",
  },
}

export function LoginForm({ role }: LoginFormProps) {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError("")

    const session = fakeLogin({ email, password, role })

    if (!session) {
      setError("That email and password do not match the demo credentials.")
      return
    }

    setDemoSession(session)
    router.push(roleCopy[role].redirectTo)
  }

  return (
    <Card className="portal-card mx-auto w-full max-w-md rounded-[2rem] p-2 shadow-xl shadow-[#3B5584]/10">
      <CardHeader className="px-6 pt-6">
        <CardTitle className="text-3xl font-semibold text-[#3B5584]">
          {roleCopy[role].title}
        </CardTitle>
        <CardDescription className="text-base leading-7 text-[#5A6D8D]">
          {roleCopy[role].description}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <div className="mb-5 flex gap-3 rounded-3xl border border-[#E2D1B0]/70 bg-[#E2D1B0]/20 p-4 text-sm text-[#3B5584]">
          <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <div>
            <p className="font-semibold">Demo credentials</p>
            <p className="mt-1 text-[#5A6D8D]">
              Email: test@gmail.com - Password: 1234
            </p>
          </div>
        </div>
        <form className="space-y-5" onSubmit={onSubmit}>
          <div className="space-y-2">
            <Label htmlFor={`${role}-email`} className="text-[#3B5584]">
              Email
            </Label>
            <div className="relative">
              <Mail
                className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#5A6D8D]"
                aria-hidden="true"
              />
              <Input
                id={`${role}-email`}
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="test@gmail.com"
                className="h-12 rounded-2xl border-[#dbe3ef] bg-[#f9fbfd] pl-11 text-[#24314a] focus-visible:border-[#3B5584]"
                autoComplete="email"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${role}-password`} className="text-[#3B5584]">
              Password
            </Label>
            <div className="relative">
              <LockKeyhole
                className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#5A6D8D]"
                aria-hidden="true"
              />
              <Input
                id={`${role}-password`}
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="1234"
                className="h-12 rounded-2xl border-[#dbe3ef] bg-[#f9fbfd] pl-11 text-[#24314a] focus-visible:border-[#3B5584]"
                autoComplete="current-password"
              />
            </div>
          </div>

          {error ? (
            <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              {error}
            </p>
          ) : null}

          <Button className="h-12 w-full rounded-2xl bg-[#3B5584] text-base font-semibold text-white shadow-lg shadow-[#3B5584]/15 hover:bg-[#2f456d]">
            Sign In
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
