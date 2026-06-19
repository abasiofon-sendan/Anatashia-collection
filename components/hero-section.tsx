import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative -mt-16 md:-mt-20 min-h-[100svh] flex items-center grain overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-banner.jpg"
          alt="Anatashia editorial lifestyle"
          fill
          className="object-cover scale-105 animate-fade-in"
          priority
          sizes="100vw"
        />
        {/* Cinematic wash — readable in light & dark */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20 dark:from-background/95 dark:via-background/65 dark:to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-5 md:px-8 relative z-10 w-full pt-24">
        <div className="max-w-2xl">
          <p className="eyebrow animate-fade-up [animation-delay:0.1s]">
            New Season · 2026
          </p>

          <h1 className="display mt-6 text-[3.25rem] leading-[0.95] sm:text-7xl lg:text-8xl text-foreground text-balance animate-fade-up [animation-delay:0.2s]">
            Timeless
            <br />
            <span className="italic text-gold">Style</span>
          </h1>

          <p className="mt-7 max-w-md text-base md:text-lg font-light leading-relaxed text-muted-foreground animate-fade-up [animation-delay:0.35s]">
            Curated fashion, jewelry and accessories for the modern wardrobe —
            crafted to be worn, kept, and remembered.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-up [animation-delay:0.5s]">
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-gold-soft px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:gap-3"
            >
              Shop the Collection
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="link-underline text-xs font-semibold uppercase tracking-[0.2em] text-foreground py-4"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 animate-fade-in [animation-delay:0.8s]">
        <span className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  )
}
