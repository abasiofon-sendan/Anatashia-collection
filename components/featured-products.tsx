"use client"

import { useState, useEffect } from 'react'
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
    <section id="products" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Featured Collection
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of the finest pieces for your wardrobe
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-10">
          <CategoryFilter 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No featured products in this category yet.
          </p>
        )}

        {/* View All Link */}
        <div className="text-center mt-12">
          <a 
            href="/products" 
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-lg transition-colors"
          >
            View All Products
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
