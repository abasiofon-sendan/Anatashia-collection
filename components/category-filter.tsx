"use client"

import { Category } from '@/lib/types'

const categories: (Category | 'All')[] = ['All', 'Clothes', 'Accessories', 'Bags', 'Shoes']

interface CategoryFilterProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
            activeCategory === category
              ? 'bg-primary text-primary-foreground'
              : 'border border-border text-muted-foreground hover:text-foreground hover:border-primary'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
