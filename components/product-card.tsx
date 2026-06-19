import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/types'
import { formatPrice } from '@/lib/utils'
import { urlFor } from '@/sanity/lib/image'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.images?.[0] ? urlFor(product.images[0]).url() : '/placeholder.jpg'
  const hoverUrl = product.images?.[1] ? urlFor(product.images[1]).url() : imageUrl

  return (
    <Link href={`/products/${product.slug.current}`} className="group block">
      <article>
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          {/* Primary image */}
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-0 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          {/* Secondary image revealed on hover */}
          <Image
            src={hoverUrl}
            alt=""
            aria-hidden
            fill
            className="object-cover opacity-0 scale-105 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:scale-100"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />

          {/* Sold out veil */}
          {!product.isAvailable && (
            <div className="absolute inset-0 bg-background/55 backdrop-blur-[1px] flex items-center justify-center">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-foreground border border-foreground/30 px-4 py-2">
                Sold Out
              </span>
            </div>
          )}

          {/* Quick view bar — slides up on hover */}
          {product.isAvailable && (
            <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
              <div className="m-3 bg-background/90 backdrop-blur-md text-center py-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-foreground">
                Quick View
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="pt-4 pb-2">
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground/80 mb-1.5">
            {product.category}
          </p>
          <h3 className="font-serif text-lg md:text-xl leading-snug text-foreground line-clamp-1 transition-colors group-hover:text-gold">
            {product.name}
          </h3>
          <p className="mt-1 text-sm font-medium tracking-wide text-foreground/80">
            {formatPrice(product.price)}
          </p>
        </div>
      </article>
    </Link>
  )
}
