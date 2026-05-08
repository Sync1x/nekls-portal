import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type LoginChoiceCardProps = {
  href: string
  icon: LucideIcon
  title: string
  description: string
}

export function LoginChoiceCard({
  href,
  icon: Icon,
  title,
  description,
}: LoginChoiceCardProps) {
  return (
    <Link href={href} className="group block focus-visible:outline-none">
      <Card className="portal-card portal-card-lift h-full rounded-[2rem] p-2 group-focus-visible:ring-4 group-focus-visible:ring-[#3B5584]/20">
        <CardHeader className="gap-4 px-6 pt-6">
          <div className="flex size-16 items-center justify-center rounded-3xl border border-[#E2D1B0]/70 bg-[#E2D1B0]/45 text-[#3B5584] shadow-sm">
            <Icon className="size-7" aria-hidden="true" />
          </div>
          <div>
            <CardTitle className="text-2xl font-semibold text-[#3B5584]">
              {title}
            </CardTitle>
            <CardDescription className="mt-2 text-base leading-7 text-[#5A6D8D]">
              {description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex items-center gap-2 px-6 pb-6 pt-2 text-sm font-semibold text-[#3B5584]">
          Continue
          <ArrowRight
            className="size-4 transition group-hover:translate-x-1"
            aria-hidden="true"
          />
        </CardContent>
      </Card>
    </Link>
  )
}
