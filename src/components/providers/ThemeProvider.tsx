'use client'

import { createContext, useContext, useMemo, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { routeKeyForPath, themeForRoute, type SiteTheme } from '@/lib/site-themes'

interface ThemeContextValue {
  theme: SiteTheme
  routeKey: string
  isHome: boolean
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  const value = useMemo<ThemeContextValue>(() => {
    const routeKey = routeKeyForPath(pathname ?? '/')
    return {
      theme: themeForRoute(pathname ?? '/'),
      routeKey,
      isHome: routeKey === '/',
    }
  }, [pathname])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within a <ThemeProvider>')
  return ctx
}