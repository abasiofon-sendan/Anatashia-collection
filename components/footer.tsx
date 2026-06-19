import Link from 'next/link'
import { Mail, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="font-serif text-2xl font-medium tracking-tight text-foreground">
                Anatashia
              </span>
              <span className="h-1 w-1 rounded-full bg-gold" />
            </Link>
            <p className="text-muted-foreground font-light leading-relaxed max-w-sm">
              Curated fashion, jewelry and accessories for the modern wardrobe.
              Timeless pieces, chosen with intention.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-5">
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-foreground">
              Explore
            </h3>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="link-underline self-start text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/products" className="link-underline self-start text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                Shop
              </Link>
              <Link href="/contact" className="link-underline self-start text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="md:col-span-4 space-y-5">
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-foreground">
              Connect
            </h3>
            <p className="text-sm font-light text-muted-foreground leading-relaxed">
              Reach out for orders, styling advice, or just to say hello.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/2347025100529"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-border text-foreground hover:bg-foreground hover:text-background transition-colors"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:contact@anatashia.com"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-border text-foreground hover:bg-foreground hover:text-background transition-colors"
                aria-label="Email us"
              >
                <Mail className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground tracking-wide">
            &copy; {new Date().getFullYear()} Anatashia. All rights reserved.
          </p>
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
            Timeless Style
          </p>
        </div>
      </div>
    </footer>
  )
}
