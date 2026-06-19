import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProductBySlug, getProductsByCategory, formatPrice, getProducts } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import { ProductCard } from '@/components/product-card'
import { ProductGallery } from '@/components/product-gallery'

export const dynamicParams = true // Allow on-demand static generation
export const revalidate = 3600 // Revalidate every hour (ISR)

export async function generateStaticParams() {
  // Import the optimized query that only fetches slug
  const { getProductSlugs } = await import('@/sanity/lib/queries')
  const slugs = await getProductSlugs()
  
  // Generate ALL products at build time for instant page loads
  return slugs.map((item) => ({
    slug: item.slug.current,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  
  if (!product) {
    return {
      title: 'Product Not Found | Anatashia',
    }
  }

  const imageUrl = product.images?.[0] ? urlFor(product.images[0]).url() : '/placeholder.jpg'

  return {
    title: `${product.name} | Anatashia`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Anatashia`,
      description: product.description,
      images: [imageUrl],
    },
  }
}

export default async function ProductPage({ params }) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  // Get related products from the same category
  const relatedProducts = await getProductsByCategory(product.category)
  const filteredRelated = relatedProducts.filter(p => p._id !== product._id).slice(0, 4)

  return (
    <div className="py-8 md:py-14">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span className="mx-2 text-border">/</span>
          <Link href="/products" className="hover:text-foreground transition-colors">Shop</Link>
          <span className="mx-2 text-border">/</span>
          <span className="text-foreground/80">{product.category}</span>
        </nav>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-24">
          {/* Gallery */}
          <ProductGallery images={product.images} productName={product.name} />

          {/* Info */}
          <div className="lg:py-4 lg:sticky lg:top-28 lg:self-start">
            {/* Eyebrow */}
            <p className="eyebrow">{product.category}</p>

            {/* Name */}
            <h1 className="display mt-4 text-4xl md:text-5xl text-foreground">
              {product.name}
            </h1>

            {/* Price */}
            <p className="mt-5 text-2xl font-light tracking-wide text-foreground">
              {formatPrice(product.price)}
            </p>

            {/* Availability line */}
            <div className="mt-4 flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${product.isAvailable ? 'bg-gold' : 'bg-muted-foreground'}`} />
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {product.isAvailable ? 'In Stock' : 'Sold Out'}
              </span>
            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-border" />

            {/* Description */}
            <p className="text-muted-foreground font-light leading-relaxed">
              {product.description}
            </p>

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mt-8">
                <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-foreground mb-4">
                  Select Size
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="min-w-12 text-center px-4 py-2.5 border border-border text-sm font-medium text-foreground hover:border-gold hover:text-gold transition-colors cursor-default"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-10 space-y-4">
              {product.isAvailable ? (
                <>
                  <a
                    href={`https://wa.me/2347025100529?text=Hi,%20I'm%20interested%20in%20this%20product:%0A%0A*${encodeURIComponent(product.name)}*%0APrice: ${encodeURIComponent(formatPrice(product.price))}%0A%0AView on our site:%20https://anatashia-collection.vercel.app/products/${product.slug.current}%0A%0AImage:%20${encodeURIComponent(product.images?.[0] ? urlFor(product.images[0]).url() : '/placeholder.jpg')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 w-full px-8 py-4 bg-primary hover:bg-gold-soft text-primary-foreground text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300"
                  >
                    Add to Bag — Order via WhatsApp
                  </a>
                  <p className="text-xs text-muted-foreground text-center font-light">
                    Chat with us on WhatsApp to complete your order
                  </p>
                </>
              ) : (
                <div className="border border-border p-6 text-center">
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    This piece is currently sold out. Let us know and we&apos;ll
                    notify you when it returns.
                  </p>
                  <a
                    href={`https://wa.me/2347025100529?text=Hi,%20I'm%20interested%20in%20being%20notified%20when%20this%20item%20is%20back%20in%20stock:%0A%0A*${encodeURIComponent(product.name)}*%0A%0AView on our site:%20https://anatashia-collection.vercel.app/products/${product.slug.current}%0A%0AImage:%20${encodeURIComponent(product.images?.[0] ? urlFor(product.images[0]).url() : '/placeholder.jpg')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-5 px-8 py-3.5 border border-foreground hover:bg-foreground hover:text-background text-xs font-semibold uppercase tracking-[0.2em] transition-colors"
                  >
                    Notify Me
                  </a>
                </div>
              )}
            </div>

            {/* Assurance row */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8 text-center">
              {['Authentic', 'Nationwide Delivery', 'Personal Service'].map((item) => (
                <p key={item} className="text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground leading-relaxed">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {filteredRelated.length > 0 && (
          <div className="border-t border-border pt-16">
            <div className="text-center mb-12">
              <p className="eyebrow">More to Discover</p>
              <h2 className="display mt-4 text-3xl md:text-4xl text-foreground">
                You May Also Like
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12 md:gap-x-8 md:gap-y-16">
              {filteredRelated.map((relatedProduct) => (
                <ProductCard key={relatedProduct._id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
