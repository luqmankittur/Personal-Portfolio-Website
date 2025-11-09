import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import createSitemap from "vite-plugin-sitemap";
import { createClient } from "@supabase/supabase-js";

// Supabase configuration from environment variables
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || '';

const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

// Function to fetch blog routes dynamically
async function getDynamicRoutes() {
  if (!supabase) {
    console.warn('Supabase not configured, skipping dynamic routes');
    return [];
  }
  
  try {
    const { data: blogs, error } = await supabase
      .from('blogs')
      .select('slug')
      .not('published_at', 'is', null);
    
    if (error) {
      console.warn('Failed to fetch blog routes for sitemap:', error);
      return [];
    }
    
    return blogs?.map(blog => `/blog/${blog.slug}`) || [];
  } catch (error) {
    console.warn('Error fetching dynamic routes:', error);
    return [];
  }
}

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const dynamicRoutes = await getDynamicRoutes();
  
  // Static routes
  const staticRoutes = [
    '/',
    '/downloads',
    '/blog',
    '/privacy',
    '/cookie'
  ];

  const allRoutes = [...staticRoutes, ...dynamicRoutes];
  
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(), 
      mode === "development" && componentTagger(),
      createSitemap({
        hostname: process.env.VITE_SITE_URL || 'https://luqman.co.in',
        dynamicRoutes: allRoutes,
        generateRobotsTxt: true,
      })
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
