import { NEKLSLogo } from "@/components/NEKLSLogo"
import { cn } from "@/lib/utils"

type PortalHeaderProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  className?: string
}

export function PortalHeader({
  eyebrow,
  title,
  subtitle,
  className,
}: PortalHeaderProps) {
  return (
    <header className={cn("mx-auto max-w-3xl text-center", className)}>
      <NEKLSLogo className="mx-auto mb-6" />
      {eyebrow ? (
        <p className="portal-pill mx-auto mb-4 w-fit text-sm">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-4xl font-semibold tracking-normal text-[#3B5584] sm:text-6xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5A6D8D] sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </header>
  )
}
