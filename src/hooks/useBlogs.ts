import { useQuery } from '@tanstack/react-query'
import { supabase, type BlogPost } from '@/lib/supabase'

// Fallback data for when Supabase is not configured yet
const fallbackBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Edit PSD Files Without a Photoshop Subscription (Free Tools & Hacks)',
    slug: 'edit-psd-files-without-photoshop',
    excerpt: 'Learn the best free and affordable tools to edit PSD files without paying for an Adobe Photoshop subscription.',
    content: 'Please configure your Supabase credentials to load full blog content.',
    author: 'Luqman',
    published_at: '2024-09-01T10:00:00Z',
    read_time: '7 min read',
    tags: ['psd', 'photoshop', 'free-tools', 'design'],
    featured: true,
    created_at: '2024-09-01T10:00:00Z',
    updated_at: '2024-09-01T10:00:00Z'
  },
  {
    id: '2',
    title: 'Best Animated Overlays for Twitch & YouTube in 2025 (Top Picks)',
    slug: 'best-animated-overlays-2025',
    excerpt: 'Discover the most popular and creative animated overlays for Twitch and YouTube in 2025 to level up your streams.',
    content: 'Please configure your Supabase credentials to load full blog content.',
    author: 'Luqman',
    published_at: '2024-09-08T14:30:00Z',
    read_time: '8 min read',
    tags: ['overlays', 'streaming', 'twitch', 'youtube'],
    featured: true,
    created_at: '2024-09-08T14:30:00Z',
    updated_at: '2024-09-08T14:30:00Z'
  }
]

// Hook to fetch all blogs with optional search and tag filtering
export const useBlogs = (searchTerm?: string, selectedTag?: string) => {
  return useQuery({
    queryKey: ['blogs', searchTerm, selectedTag],
    queryFn: async (): Promise<BlogPost[]> => {
      // If Supabase is not configured, return fallback data
      if (!supabase) {
        let filtered = [...fallbackBlogPosts]
        
        // Apply search filter if provided
        if (searchTerm && searchTerm.trim() !== '') {
          const term = searchTerm.toLowerCase()
          filtered = filtered.filter(post => 
            post.title.toLowerCase().includes(term) ||
            post.excerpt.toLowerCase().includes(term) ||
            post.tags.some(tag => tag.toLowerCase().includes(term))
          )
        }

        // Apply tag filter if provided and not 'all'
        if (selectedTag && selectedTag !== 'all') {
          filtered = filtered.filter(post => post.tags.includes(selectedTag))
        }
        
        return filtered
      }

      let query = supabase
        .from('blogs')
        .select('*')
        .order('published_at', { ascending: false })

      // Apply search filter if provided
      if (searchTerm && searchTerm.trim() !== '') {
        query = query.or(`title.ilike.%${searchTerm}%,excerpt.ilike.%${searchTerm}%,content.ilike.%${searchTerm}%`)
      }

      // Apply tag filter if provided and not 'all'
      if (selectedTag && selectedTag !== 'all') {
        query = query.contains('tags', [selectedTag])
      }

      const { data, error } = await query

      if (error) {
        throw new Error(`Failed to fetch blogs: ${error.message}`)
      }

      return data || []
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  })
}

// Hook to fetch a single blog by slug
export const useBlogBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['blog', slug],
    queryFn: async (): Promise<BlogPost | null> => {
      // If Supabase is not configured, return fallback data
      if (!supabase) {
        return fallbackBlogPosts.find(post => post.slug === slug) || null
      }

      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .single()

      if (error) {
        if (error.code === 'PGRST116') {
          // No rows returned
          return null
        }
        throw new Error(`Failed to fetch blog: ${error.message}`)
      }

      return data
    },
    enabled: !!slug,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  })
}

// Hook to fetch featured blogs
export const useFeaturedBlogs = () => {
  return useQuery({
    queryKey: ['blogs', 'featured'],
    queryFn: async (): Promise<BlogPost[]> => {
      // If Supabase is not configured, return fallback data
      if (!supabase) {
        return fallbackBlogPosts.filter(post => post.featured)
      }

      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('featured', true)
        .order('published_at', { ascending: false })

      if (error) {
        throw new Error(`Failed to fetch featured blogs: ${error.message}`)
      }

      return data || []
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  })
}

// Hook to fetch related blogs (excluding current blog)
export const useRelatedBlogs = (currentSlug: string, tags: string[], limit = 4) => {
  return useQuery({
    queryKey: ['blogs', 'related', currentSlug, tags],
    queryFn: async (): Promise<BlogPost[]> => {
      // If Supabase is not configured, return fallback data
      if (!supabase) {
        return fallbackBlogPosts
          .filter(post => post.slug !== currentSlug)
          .slice(0, limit)
      }

      let query = supabase
        .from('blogs')
        .select('*')
        .neq('slug', currentSlug)
        .order('published_at', { ascending: false })
        .limit(limit)

      // If tags are available, try to find blogs with similar tags
      if (tags.length > 0) {
        query = query.overlaps('tags', tags)
      }

      const { data, error } = await query

      if (error) {
        throw new Error(`Failed to fetch related blogs: ${error.message}`)
      }

      return data || []
    },
    enabled: !!currentSlug,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  })
}