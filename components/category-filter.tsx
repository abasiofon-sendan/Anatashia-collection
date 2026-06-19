"use client"

import { Category } from '@/lib/types'

const categories: (Category | 'All')[] = ['All', 'Clothes', 'Accessories', 'Bags', 'Shoes']

interface CategoryFilterProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
      {categories.map((category) => {
        const active = activeCategory === category
        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-5 py-2.5 rounded-full text-[0.7rem] font-medium uppercase tracking-[0.18em] transition-all duration-300 ${
              active
                ? 'bg-foreground text-background'
                : 'border border-border text-muted-foreground hover:border-gold hover:text-foreground'
            }`}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
