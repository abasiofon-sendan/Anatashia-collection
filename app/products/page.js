import { getProducts } from '@/sanity/lib/queries'
import { ProductCard } from '@/components/product-card'

export const metadata = {
  title: 'Shop All Products | Anatashia',
  description: 'Browse our complete collection of fashion pieces, accessories, bags, and shoes. Find your perfect style.',
  openGraph: {
    title: 'Shop All Products | Anatashia',
    description: 'Browse our complete collection of fashion pieces, accessories, bags, and shoes.',
  },
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div>
      {/* Banner */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24 text-center">
          <p className="eyebrow">The Collection</p>
          <h1 className="display mt-4 text-5xl md:text-6xl text-foreground">
            Summer Collection
          </h1>
          <p className="mt-5 text-muted-foreground font-light leading-relaxed max-w-xl mx-auto">
            Explore the complete edit — clothing, jewelry, bags and accessories,
            chosen for their craft and quiet confidence.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex items-center justify-between mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {products.length} {products.length === 1 ? 'Piece' : 'Pieces'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12 md:gap-x-8 md:gap-y-16">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          {products.length === 0 && (
            <p className="text-center text-muted-foreground py-12 font-light">
              No products available at the moment.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
