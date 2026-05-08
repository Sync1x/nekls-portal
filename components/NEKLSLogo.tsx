import Image from "next/image"

import { cn } from "@/lib/utils"

type NEKLSLogoProps = {
  className?: string
  compact?: boolean
}

export function NEKLSLogo({ className, compact = false }: NEKLSLogoProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.35rem] border border-[#dbe3ef] bg-white shadow-lg shadow-[#3B5584]/15",
        compact ? "h-14 w-14" : "h-32 w-32 sm:h-40 sm:w-40",
        className
      )}
      aria-label="NEKLS Learning Services logo"
      role="img"
    >
      <Image
        src="/image/nekls-logo.jpg"
        alt="NEKLS Learning Services logo"
        fill
        priority={!compact}
        sizes={compact ? "56px" : "(min-width: 640px) 160px, 128px"}
        className="object-cover"
      />
    </div>
  )
}
