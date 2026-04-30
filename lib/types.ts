export type Category = 'Clothes' | 'Accessories' | 'Bags' | 'Shoes' | 'Other'

export interface Product {
  _id: string
  name: string
  slug: { current: string }
  price: number
  category: Category
  images: any[]
  description: string
  sizes?: string[]
  isFeatured: boolean
  isAvailable: boolean
}

export interface StoreSettings {
  storeName: string
  tagline: string
  heroImage: string
  whatsappNumber: string
  instagramHandle: string
  aboutText: string
  ownerPhoto: string
  ownerName: string
}
