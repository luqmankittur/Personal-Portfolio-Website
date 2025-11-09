import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2, BookmarkPlus, Tag, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { useBlogBySlug, useRelatedBlogs } from '../hooks/useBlogs';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  // Fetch blog post from Supabase
  const { data: blogPost, isLoading, error } = useBlogBySlug(slug || '');

  // Fetch related posts
  const { data: relatedPosts = [] } = useRelatedBlogs(
    slug || '',
    blogPost?.tags || [],
    2
  );

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
              <p className="text-muted-foreground">Loading blog post...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Error state or blog not found
  if (error || !blogPost) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
              <p className="text-muted-foreground mb-6">
                {error ? error.message : "The blog post you're looking for doesn't exist."}
              </p>
              <Link to="/blog">
                <Button>Back to Blog</Button>
              </Link>
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
        title={`${blogPost.title} - Expert Graphic Design Insights and Tips`}
        description={blogPost.excerpt || blogPost.content.substring(0, 155)}
        keywords={blogPost.tags.join(', ')}
        ogImage={blogPost.thumbnail}
        canonical={`/blog/${blogPost.slug}`}
      />
      <Header />

      <main className="pt-20">
        <article className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">

          {/* Back to Blog */}
          <div className="mb-8 animate-fade-in">
            <Link
              to="/blog"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12 animate-slide-up">

            {/* Featured Badge */}
            {blogPost.featured && (
              <div className="mb-4">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Featured Article
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {blogPost.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>By {blogPost.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{formatDate(blogPost.published_at)}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{blogPost.read_time}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {blogPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center bg-secondary/50 text-muted-foreground px-3 py-1 rounded-full text-sm"
                >
                  <Tag size={12} className="mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button size="sm" variant="secondary">
                <Share2 size={16} className="mr-2" />
                Share Article
              </Button>
              <Button size="sm" variant="secondary">
                <BookmarkPlus size={16} className="mr-2" />
                Save for Later
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12 animate-fade-in">
            <div className="aspect-video rounded-2xl overflow-hidden relative">
              {blogPost.thumbnail ? (
                <img
                  src={blogPost.thumbnail}
                  alt={blogPost.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-8xl opacity-50">📝</div>
                </div>
              )}

              {/* Optional gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/20" />
            </div>
          </div>


          { }
          <div className="glass-card p-8 md:p-12 rounded-2xl mb-12 animate-slide-up">
            <div
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content.replace(/\n/g, '') }}
            />
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 border-t border-border">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                Related Articles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {relatedPosts.map((post, index) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="group glass-card rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 animate-slide-up"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="aspect-video rounded-t-xl overflow-hidden relative">
                      {post.thumbnail ? (
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                          <div className="text-4xl opacity-50">📄</div>
                        </div>
                      )}

                      {/* Optional gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/20" />
                    </div>

                    <div className="p-6">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;