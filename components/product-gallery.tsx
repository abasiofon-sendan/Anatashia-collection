'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { urlFor } from '@/sanity/lib/image'

interface ProductGalleryProps {
  images: any[]
  productName: string
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const primaryImage = images?.[selectedImageIndex] ? urlFor(images[selectedImageIndex]).url() : '/placeholder.jpg'

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-[3/4] overflow-hidden bg-muted rounded-lg">
        <Image
          src="/placeholder.jpg"
          alt={productName}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Main Image with Navigation */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted rounded-lg group">
        <Image
          src={primaryImage}
          alt={`${productName} - Image ${selectedImageIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />

        {/* Navigation Arrows - Only show if multiple images */}
        {images.length > 1 && (
          <>
            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-all opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-all opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-sm font-medium text-foreground">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails - Only show if multiple images */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImageIndex(idx)}
              className={`relative aspect-square overflow-hidden bg-muted rounded border-2 transition-all ${
                selectedImageIndex === idx
                  ? 'border-primary'
                  : 'border-transparent hover:border-border'
              }`}
              aria-label={`View image ${idx + 1}`}
            >
              <Image
                src={urlFor(image).url()}
                alt={`${productName} - Image ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 12vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
