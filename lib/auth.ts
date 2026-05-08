export type UserRole = "student" | "admin"

export type LoginInput = {
  email: string
  password: string
  role: UserRole
}

export type DemoSession = {
  email: string
  role: UserRole
  name: string
}

const DEMO_EMAIL = "test@gmail.com"
const DEMO_PASSWORD = "1234"
const SESSION_KEY = "nekls-demo-session"

export function fakeLogin({
  email,
  password,
  role,
}: LoginInput): DemoSession | null {
  const normalizedEmail = email.trim().toLowerCase()

  if (
    normalizedEmail === DEMO_EMAIL &&
    password === DEMO_PASSWORD &&
    (role === "student" || role === "admin")
  ) {
    return {
      email: normalizedEmail,
      role,
      name: role === "student" ? "Jordan Bennett" : "NEKLS Admin",
    }
  }

  return null
}

export function setDemoSession(session: DemoSession) {
  if (typeof window === "undefined") {
    return
  }

  window.localStorage.setItem(SESSION_KEY, JSON.stringify(session))
}

export function getDemoSession(): DemoSession | null {
  if (typeof window === "undefined") {
    return null
  }

  const value = window.localStorage.getItem(SESSION_KEY)

  if (!value) {
    return null
  }

  try {
    return JSON.parse(value) as DemoSession
  } catch {
    window.localStorage.removeItem(SESSION_KEY)
    return null
  }
}

export function clearDemoSession() {
  if (typeof window === "undefined") {
    return
  }

  window.localStorage.removeItem(SESSION_KEY)
}
