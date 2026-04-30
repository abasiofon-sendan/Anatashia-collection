import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-banner.jpg"
          alt="Hero banner"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground text-balance">
            Anatashia
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Curated Fashion for the Modern Woman
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#products"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3 rounded-md transition-colors"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
