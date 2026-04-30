import Image from 'next/image'
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
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Gallery */}
          <ProductGallery images={product.images} productName={product.name} />

          {/* Info */}
          <div className="space-y-6">
            {/* Category & Availability */}
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded text-sm font-medium border border-border text-foreground">
                {product.category}
              </span>
              <span 
                className={`px-3 py-1 rounded text-sm font-medium ${
                  product.isAvailable 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {product.isAvailable ? 'Available' : 'Sold Out'}
              </span>
            </div>

            {/* Name & Price */}
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
                {product.name}
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-primary">
                {formatPrice(product.price)}
              </p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
                  Available Sizes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="px-4 py-2 border border-border rounded-md text-sm font-medium text-foreground"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* WhatsApp CTA */}
            <div className="pt-4 space-y-4">
              {product.isAvailable ? (
                <>
                  <a
                    href={`https://wa.me/2348012345678?text=Hi,%20I'm%20interested%20in%20${encodeURIComponent(product.name)}%20-%20${formatPrice(product.price)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#128C7E] text-white font-medium text-center transition-colors"
                  >
                    Order via WhatsApp
                  </a>
                  <p className="text-sm text-muted-foreground text-center">
                    Click to chat with us on WhatsApp and place your order
                  </p>
                </>
              ) : (
                <div className="bg-muted rounded-lg p-4 text-center">
                  <p className="text-muted-foreground">
                    This item is currently sold out. Contact us on WhatsApp to be notified when it&apos;s back in stock.
                  </p>
                  <a
                    href="https://wa.me/2348012345678?text=Hi,%20I'm%20interested%20in%20being%20notified%20when%20this%20item%20is%20back%20in%20stock."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#128C7E] text-white font-medium transition-colors"
                  >
                    Notify Me
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {filteredRelated.length > 0 && (
          <div className="border-t border-border pt-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
