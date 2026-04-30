import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

// Use CDN by default, but disable during static generation for freshest data
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production' && process.env.SKIP_BUILD_STATIC_GENERATION !== '1',
})
