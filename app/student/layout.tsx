import { TopNav } from "@/components/TopNav"

export default function StudentLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-svh bg-white">
      <TopNav mode="student" />
      {children}
    </div>
  )
}
