import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

export type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  thumbnail?: string
  author: string
  published_at: string
  read_time: string
  tags: string[]
  featured: boolean
  created_at: string
  updated_at: string
}