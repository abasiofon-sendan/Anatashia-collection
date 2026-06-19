"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ShoppingBag, Search } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Shop' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center h-16 md:h-20">
          {/* Logo (left) */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-serif text-2xl md:text-[1.75rem] font-medium tracking-tight text-foreground">
              Anatashia
            </span>
            <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-gold transition-transform duration-500 group-hover:scale-150" />
          </Link>

          {/* Centered nav (desktop) */}
          <nav className="hidden md:flex items-center justify-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-underline text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center justify-end gap-1.5 md:gap-2">
            <button
              className="inline-flex items-center justify-center h-10 w-10 rounded-full text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
              aria-label="Search"
            >
              <Search className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.5} />
            </button>
            <Link
              href="/products"
              className="relative inline-flex items-center justify-center h-10 w-10 rounded-full text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.5} />
            </Link>
            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full text-foreground hover:bg-accent transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-6 pt-2 border-t border-border animate-fade-in">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-serif text-2xl text-foreground/90 hover:text-gold transition-colors py-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
