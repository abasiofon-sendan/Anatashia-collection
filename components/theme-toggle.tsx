'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './theme-provider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center h-10 w-10 rounded-full text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.5} />
      ) : (
        <Sun className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.5} />
      )}
    </button>
  )
}
