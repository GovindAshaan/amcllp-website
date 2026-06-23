import { ReactNode } from 'react'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  light?: boolean
  className?: string
}

export default function SectionHeading({ title, subtitle, align = 'center', light = false, className = '' }: SectionHeadingProps) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <div className={`${alignClass[align]} ${className}`}>
      {subtitle && (
        <p className={`text-sm font-semibold uppercase tracking-widest mb-3 ${light ? 'text-gold-400' : 'text-gold-500'}`}>
          {subtitle}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight ${light ? 'text-white' : 'text-navy-500'}`}>
        {title}
      </h2>
      <div className={`mt-4 h-1 w-20 rounded-full ${light ? 'bg-gold-400' : 'bg-gold-500'} ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  )
}
