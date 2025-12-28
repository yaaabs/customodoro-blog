'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import * as Tooltip from '@radix-ui/react-tooltip'
import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

/**
 * Accessible Theme Toggle
 * - Uses next-themes `useTheme`
 * - ARIA role `switch` with keyboard support (Enter / Space)
 * - Smooth icon transitions and theme-aware styles
 */

const toggleStyles = cva("inline-flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors duration-200", {
  variants: {
    size: {
      sm: "p-1",
      md: "p-2",
      lg: "p-3",
    },
  },
  defaultVariants: { size: 'md' },
})

export interface ThemeToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg'
}

export default function ThemeToggle({ className, size = 'md', ...props }: ThemeToggleProps) {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // While unmounted, render an inert button inside a tooltip to avoid hydration mismatch
  if (!mounted) {
    return (
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button
              aria-hidden
              tabIndex={-1}
              className={twMerge(toggleStyles({ size }), className)}
              {...props}
            />
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content side="top" align="center" className="bg-card text-card-foreground px-2 py-1 rounded-md text-sm shadow-md">
              Toggle theme
              <Tooltip.Arrow className="fill-current text-card" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    )
  }

  const current = resolvedTheme ?? theme
  const isDark = current === 'dark'

  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark')

  const handleKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      toggleTheme()
    }
  }

  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={100}>
        <Tooltip.Trigger asChild>
          <button
            type="button"
            role="switch"
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            aria-checked={isDark}
            onClick={toggleTheme}
            onKeyDown={handleKeyDown}
            className={twMerge(toggleStyles({ size }), 'bg-card hover:bg-popover relative', className)}
            {...props}
          >
            <span className="sr-only">{isDark ? 'Switch to light theme' : 'Switch to dark theme'}</span>

            <Sun className={`h-4 w-4 transition-transform duration-200 ${isDark ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`} aria-hidden />
            <Moon className={`h-4 w-4 transition-transform duration-200 absolute ${isDark ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} aria-hidden />
          </button>
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content side="top" align="center" className="bg-card text-card-foreground px-2 py-1 rounded-md text-sm shadow-md">
            {isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            <Tooltip.Arrow className="fill-current text-card" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
