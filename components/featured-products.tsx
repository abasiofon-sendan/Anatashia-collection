"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ProductCard } from '@/components/product-card'
import { CategoryFilter } from '@/components/category-filter'
import { Product } from '@/lib/types'

interface FeaturedProductsProps {
  products: Product[]
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [filteredProducts, setFilteredProducts] = useState(products)

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter(p => p.category === activeCategory))
    }
  }, [activeCategory, products])

  return (
    <section id="products" className="py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow">Curated Selection</p>
          <h2 className="display mt-4 text-4xl md:text-5xl text-foreground">
            Featured Collection
          </h2>
          <p className="mt-5 text-muted-foreground font-light leading-relaxed">
            A handpicked edit of the season&apos;s most refined pieces — designed to
            layer, last, and elevate the everyday.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12 md:gap-x-8 md:gap-y-16">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-muted-foreground py-12 font-light">
            No featured products in this category yet.
          </p>
        )}

        {/* View All Link */}
        <div className="text-center mt-16">
          <Link
            href="/products"
            className="link-underline inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground"
          >
            View All Products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
