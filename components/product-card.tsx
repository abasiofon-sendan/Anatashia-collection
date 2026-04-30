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
  
  return (
    <Link href={`/products/${product.slug.current}`} className="group block">
      <article className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            <div 
              className={`px-3 py-1 rounded text-sm font-medium ${
                product.isAvailable 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {product.isAvailable ? 'Available' : 'Sold Out'}
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-3 right-3">
            <div className="bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 rounded text-sm font-medium">
              {product.category}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-medium text-foreground text-base md:text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="mt-2 text-lg md:text-xl font-semibold text-primary">
            {formatPrice(product.price)}
          </p>
        </div>
      </article>
    </Link>
  )
}
