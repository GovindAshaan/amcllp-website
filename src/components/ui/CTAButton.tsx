'use client'

import { ReactNode } from 'react'

interface CTAButtonProps {
  href?: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-white'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  className?: string
  onClick?: () => void
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  onClick,
}: CTAButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2'

  const variantClasses = {
    primary: 'bg-gold-500 hover:bg-gold-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    secondary: 'bg-transparent border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white',
    outline: 'bg-transparent border-2 border-navy-500 text-navy-500 hover:bg-navy-500 hover:text-white',
    'outline-white': 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy-500',
  }

  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
