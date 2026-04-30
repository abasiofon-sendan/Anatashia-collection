import Link from 'next/link'
import { Mail, MessageCircle, ShoppingBag } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <ShoppingBag className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold tracking-tight text-foreground">
                Anatashia
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Curated fashion for the modern woman
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Shop
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Connect With Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://wa.me/2348012345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@anatashia.com"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email us"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Anatashia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
