import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Search, Tag, Loader2 } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { useBlogs } from '../hooks/useBlogs';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  
  // Fetch blogs from Supabase
  const { data: blogPosts = [], isLoading, error } = useBlogs(searchTerm, selectedTag);

  // Get all unique tags from the fetched blogs
  const allTags = useMemo(() => {
    return [...new Set(blogPosts.flatMap(post => post.tags))];
  }, [blogPosts]);

  const tagOptions = useMemo(() => {
    return [
      { id: 'all', name: 'All Posts', count: blogPosts.length },
      ...allTags.map(tag => ({
        id: tag,
        name: tag.charAt(0).toUpperCase() + tag.slice(1),
        count: blogPosts.filter(post => post.tags.includes(tag)).length
      }))
    ];
  }, [blogPosts, allTags]);

  // Separate featured and regular posts
  const featuredPosts = useMemo(() => blogPosts.filter(post => post.featured), [blogPosts]);
  const regularPosts = useMemo(() => blogPosts.filter(post => !post.featured), [blogPosts]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary mb-4" />
              <p className="text-muted-foreground">Loading blog posts...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <p className="text-destructive mb-4">Failed to load blog posts</p>
              <p className="text-muted-foreground text-sm">{error.message}</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Graphic Design Blog - Tutorials, Tips, and Creative Inspiration for Designers"
        description="Explore Luqman Graphics design blog featuring expert tutorials on stream overlays, branding tips, creative inspiration, and professional graphic design techniques. Learn about Twitch graphics, YouTube branding, and digital design trends."
        keywords="graphic design blog, design tutorials, branding tips, stream overlay tutorials, creative inspiration"
        canonical="/blog"
      />
      <Header />
      
      <main className="pt-20">
        
        {/* Page Header */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Design <span className="hero-title">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Insights, tutorials, and creative inspiration from the world of graphic design. 
                Stay updated with the latest trends, techniques, and industry best practices.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="pb-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input
                    type="text"
                    placeholder="Search articles, topics, tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div> 
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="pb-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-foreground mb-8">Featured Articles</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <article
                    key={post.id}
                    className="group glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 animate-slide-up"
                    style={{
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      {post.thumbnail ? (
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                          <div className="text-6xl opacity-50">📝</div>
                        </div>
                      )}

                      {/* Featured Badge */}
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                        <div className="flex items-center">
                          <User size={14} className="mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {formatDate(post.published_at)}
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {post.read_time}
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-secondary/50 text-muted-foreground px-2 py-1 rounded-md"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More */}
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors group/link"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight 
                          size={16} 
                          className="ml-1 group-hover/link:translate-x-1 transition-transform" 
                        />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        {regularPosts.length > 0 && (
          <section className="pb-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-foreground mb-8">Latest Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post, index) => (
                  <article
                    key={post.id}
                    className="group glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 animate-slide-up"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/20 flex items-center justify-center">
                        <div className="text-4xl opacity-50">📄</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <div className="flex items-center text-xs text-muted-foreground mb-3 space-x-3">
                          <div className="flex items-center">
                            <Calendar size={12} className="mr-1" />
                            {formatDate(post.published_at)}
                          </div>
                          <div className="flex items-center">
                            <Clock size={12} className="mr-1" />
                            {post.read_time}
                          </div>
                        </div>

                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-secondary/50 text-muted-foreground px-2 py-1 rounded-md"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More */}
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium transition-colors group/link"
                      >
                        <span>Read More</span>
                        <ArrowRight 
                          size={14} 
                          className="ml-1 group-hover/link:translate-x-1 transition-transform" 
                        />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* No Results */}
        {blogPosts.length === 0 && (
          <section className="pb-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No articles found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or tag filter.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedTag('all');
                  }}
                  variant="secondary"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Blog;