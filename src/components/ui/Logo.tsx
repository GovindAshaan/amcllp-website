import Link from 'next/link'
import { cn } from '@/lib/cn'

interface LogoProps {
  className?: string
  compact?: boolean
}

export default function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link href="/" className={cn('flex items-center gap-2.5 group', className)}>
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-electric-indigo-500/25 via-white/[0.03] to-venture-cyan-500/15 border border-electric-indigo-500/25 flex items-center justify-center relative overflow-hidden shrink-0 group-hover:shadow-[0_0_18px_rgba(99,102,241,0.3)] transition-all duration-300">
        <span className="text-sm font-bold tracking-tight text-gradient-cyber">AM</span>
        <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-electric-indigo-400/60 to-transparent" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-lg font-display font-bold tracking-tight text-white">
          AMC
        </span>
        {!compact && (
          <span className="text-[9px] tracking-[0.22em] uppercase text-white/40 mt-0.5">
            Venture &amp; Tech Group
          </span>
        )}
      </div>
    </Link>
  )
}
