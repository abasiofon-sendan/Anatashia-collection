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
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Shop All
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our complete collection and find pieces that speak to your style
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No products available at the moment.
          </p>
        )}
      </div>
    </div>
  )
}
