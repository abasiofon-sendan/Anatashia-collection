import { client } from './client'

export function formatPrice(price) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

// Optimized for static generation - only fetch slug
export const getProductSlugs = async () => {
  const query = `*[_type == "product" && isAvailable == true]{
    slug
  } | order(_createdAt desc)`
  
  return await client.fetch(query)
}

export const getProducts = async () => {
  const query = `*[_type == "product" && isAvailable == true]{
    _id,
    name,
    slug,
    price,
    category,
    description,
    images,
    sizes,
    isFeatured,
    isAvailable
  } | order(_createdAt desc)`
  
  return await client.fetch(query)
}

export const getFeaturedProducts = async () => {
  const query = `*[_type == "product" && isFeatured == true && isAvailable == true]{
    _id,
    name,
    slug,
    price,
    category,
    description,
    images,
    isAvailable,
  } | order(_createdAt desc)`
  
  return await client.fetch(query)
}

export const getProductBySlug = async (slug) => {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    slug,
    price,
    category,
    description,
    images,
    sizes,
    isFeatured,
    isAvailable
  }`
  
  return await client.fetch(query, { slug })
}

export const getProductsByCategory = async (category) => {
  const query = `*[_type == "product" && category == $category && isAvailable == true]{
    _id,
    name,
    slug,
    price,
    category,
    images,
    isAvailable,
  } | order(_createdAt desc)`
  
  return await client.fetch(query, { category })
}
