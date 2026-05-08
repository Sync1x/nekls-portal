import { cn } from "@/lib/utils"

type NEKLSLogoProps = {
  className?: string
  compact?: boolean
}

export function NEKLSLogo({ className, compact = false }: NEKLSLogoProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.35rem] border-[3px] border-[#E2D1B0] bg-[#3B5584] text-white shadow-lg shadow-[#3B5584]/15 ring-2 ring-[#3B5584]",
        compact ? "h-14 w-14" : "h-32 w-32 sm:h-40 sm:w-40",
        className
      )}
      aria-label="NEKLS Learning Services logo"
      role="img"
    >
      <div className="absolute inset-2 rounded-[1rem] border border-[#E2D1B0]/85" />
      <div className="absolute inset-0 opacity-28">
        <div className="absolute left-3 top-1/2 h-8 w-28 -translate-y-1/2 rotate-[-30deg] rounded-full border border-[#dbe3ef] bg-white/25" />
        <div className="absolute right-1 top-10 h-7 w-24 rotate-[28deg] rounded-full border border-[#dbe3ef] bg-white/20" />
        <div className="absolute bottom-8 left-6 h-7 w-24 rotate-[30deg] rounded-full border border-[#dbe3ef] bg-white/20" />
      </div>

      {compact ? (
        <div className="relative flex h-full flex-col items-center justify-center leading-none">
          <span className="font-serif text-xl font-bold tracking-tight">
            NEK
          </span>
          <span className="font-serif text-xl font-bold tracking-tight">
            LS
          </span>
        </div>
      ) : (
        <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
          <div className="font-serif text-5xl font-bold leading-[0.82] tracking-tight text-white sm:text-6xl">
            <div>NEK</div>
            <div>LS</div>
          </div>
          <div className="mt-4 w-full rounded-sm border border-white px-2 py-1">
            <p className="text-[0.55rem] font-bold uppercase tracking-[0.28em] text-white sm:text-[0.62rem]">
              Learning Services
            </p>
            <div className="mt-1 border-t border-[#E2D1B0]" />
            <p className="mt-1 text-[0.5rem] font-bold uppercase tracking-[0.14em] text-[#E2D1B0] sm:text-[0.58rem]">
              Begin - Believe - Become
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
