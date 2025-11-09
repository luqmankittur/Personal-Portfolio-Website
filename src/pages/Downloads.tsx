import { useEffect, useState } from 'react';
import { Download, Search, Filter, Eye, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const AnimatedCounter = ({ from = 0, to, duration = 2, delay = 0 }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (value) => Math.round(value).toLocaleString());

  useEffect(() => {
    const animation = animate(count, to, {
      duration,
      delay,
      ease: "easeOut"
    });

    return () => animation.stop();
  }, [count, to, duration, delay]);

  return <motion.span>{rounded}</motion.span>;
};

const Downloads = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const overlays = [
    {
      id: 1,
      name: 'Minimalistix Light',
      category: 'premium',
      description: 'A minimal looking light & animated overlay for your streams.',
      thumbnail: '/work/minimal-light.jpg',
      downloadUrl: 'https://drive.google.com/drive/folders/1Qqo3J56QnnHcyl3CLnpHpyfkYZ5paScj',
      views: 64893,
      tags: ['minimal', 'light', 'animated', 'clean']
    },
    {
      id: 2,
      name: 'Radon',
      category: 'premium',
      description: 'A dark Red Matrix insipred animated overlay for your streams.',
      thumbnail: '/work/radon.jpg',
      downloadUrl: 'https://drive.google.com/drive/folders/1X8A5E4THqcq5qx_Rsq_tEAe7Bsu8uNCi?usp=sharing',
      views: 58222,
      tags: ['matrix', 'red', 'dark', 'animated']
    },
    {
      id: 3,
      name: 'Hazex',
      category: 'basic',
      description: 'A minimal reddish pink and grainy animated overlay for your streams.',
      thumbnail: '/work/hazex.png',
      downloadUrl: 'https://drive.google.com/drive/folders/1KWDUX6cINiwQ9mHqnDnqlinAVDKsum0B?usp=drive_link',
      views: 2012,
      tags: ['minimal', 'pink', 'grainy', 'animated']
    },
    {
      id: 4,
      name: 'Minimalistix Dark',
      category: 'premium',
      description: 'A minimal looking dark & animated overlay for your streams.',
      thumbnail: '/work/minimal-dark.jpg',
      downloadUrl: 'https://drive.google.com/drive/folders/1gAfOCf2id1s5-7RHUYxu8z9EUWNYWdk9',
      views: 123020,
      tags: ['minimal', 'dark', 'animated', 'clean']
    },
    {
      id: 5,
      name: 'Triax',
      category: 'premium',
      description: 'A Tri-color Japanese styled animated overlay for your streams.',
      thumbnail: '/work/triax.jpg',
      downloadUrl: 'https://drive.google.com/drive/folders/1SOWsjsVkdEW3qE44MpcYD4N2zfzGYtX7?usp=share_link',
      views: 18123,
      tags: ['japanese', 'tri-color', 'animated', 'cultural']
    },
    {
      id: 6,
      name: 'Sukoon',
      category: 'premium',
      description: 'An enchanting winter wonderland with a crackling campfire nestled amidst a snowy forest.',
      thumbnail: '/work/sukoon.jpg',
      downloadUrl: 'https://drive.google.com/drive/folders/1aReb1xwe0-7TQulmwI8Nyw5jGLyGf4CJ?usp=sharing',
      views: 13282,
      tags: ['winter', 'campfire', 'forest', 'nature']
    },
    {
      id: 7,
      name: 'Blizzark',
      category: 'premium',
      description: 'A cozy winter-themed overlay with a warm fireplace, falling snow, and a charming library, perfect for creating a serene and inviting stream atmosphere.',
      thumbnail: '/work/blizzark.jpg',
      downloadUrl: 'https://drive.google.com/drive/folders/1uku_sThNtO4bStIFJk4LPr9i9IHzeWWC?usp=drive_link',
      views: 8192,
      tags: ['winter', 'fireplace', 'library', 'cozy']
    },
    {
      id: 8,
      name: 'Xakura Starfall',
      category: 'standard',
      description: 'A Snowy mountain with sakura trees on a beautiful starry night animated overlay for your streams.',
      thumbnail: '/work/xakura-starfall.jpg',
      downloadUrl: 'https://drive.google.com/drive/folders/1dJPsPRC01y4c2rA4k5rnpvQD4khplgZZ?usp=share_link',
      views: 3201,
      tags: ['sakura', 'mountain', 'starry', 'nature']
    },
    {
      id: 9,
      name: 'Exospace',
      category: 'basic',
      description: 'A retro style space themed animated overlay for your streams.',
      thumbnail: '/work/exospace.jpg',
      downloadUrl: 'https://drive.google.com/drive/folders/1H6zPrfzYtstPgdwwqNC9EQCoVspF0OwV?usp=sharing',
      views: 2283,
      tags: ['retro', 'space', 'animated', 'sci-fi']
    },
    {
      id: 10,
      name: 'Minimalistix Vibrant',
      category: 'premium',
      description: 'A minimal looking vibrant & animated overlay for your streams.',
      thumbnail: '/work/minimal-vibrant.jpg',
      downloadUrl: 'https://drive.google.com/drive/folders/12MbkKIrD7QVKfs1PydbaYLJ0UZNpELBh?usp=share_link',
      views: 18500,
      tags: ['minimal', 'vibrant', 'animated', 'colorful']
    },
    {
      id: 11,
      name: 'Chakra',
      category: 'standard',
      description: 'A sleek animated overlay with a rotating red chakra for a captivating and sophisticated stream experience.',
      thumbnail: '/work/chakra.jpg',
      downloadUrl: 'https://drive.google.com/drive/folders/19uyZQiaxLhOM6tDMb-yUGYr2m6v6gHma?usp=sharing',
      views: 4600,
      tags: ['chakra', 'spiritual', 'rotating', 'sophisticated']
    },
    {
      id: 12,
      name: 'Xenic',
      category: 'standard',
      description: 'An AI-inspired overlays in Red, Blue, and Green variants, featuring captivating animations and a futuristic digital aesthetic.',
      thumbnail: '/work/xenic.jpg',
      downloadUrl: 'https://drive.google.com/drive/folders/1wN7jRQKP1vYEZfmalAM5vgJuMObrviVg?usp=sharing',
      views: 2500,
      tags: ['ai', 'futuristic', 'digital', 'multi-color']
    },
    {
      id: 13,
      name: 'Xakura Snowfall',
      category: 'standard',
      description: 'A Snowy mountain with sakura trees with dragon flying animated overlay for your streams.',
      thumbnail: '/work/xakura-snowfall.jpg',
      downloadUrl: 'https://drive.google.com/drive/folders/1wYLqXN1gUyUET8aqNYF2vuRfJYnFYgnd?usp=sharing',
      views: 9900,
      tags: ['sakura', 'dragon', 'mountain', 'fantasy']
    },
    {
      id: 14,
      name: 'Ecliptix',
      category: 'standard',
      description: 'A pinkish pastel dreamscape where every stream glows with ethereal elegance.',
      thumbnail: '/work/ecliptix.jpg',
      downloadUrl: 'https://drive.google.com/drive/folders/1t0Bh8NPK_AofEoN6juleKjcKH29f6MuB?usp=sharing',
      views: 6100,
      tags: ['pastel', 'pink', 'dreamscape', 'ethereal']
    },
    {
      id: 15,
      name: 'Synodic',
      category: 'standard',
      description: 'Stream in warp drive with a sleek black overlay, navigating through a starlit expanse at light speed for an interstellar experience.',
      thumbnail: '/work/synodic.jpg',
      downloadUrl: 'https://drive.google.com/drive/folders/1SD5_qumy5TQwDGL9N_7ihQ5D2ioBlo7b?usp=sharing',
      views: 1900,
      tags: ['warp', 'starlit', 'interstellar', 'black']
    },
    {
      id: 16,
      name: 'Valorant',
      category: 'basic',
      description: 'Valorant agents animated overlay for your streams.',
      thumbnail: '/work/valorant.jpg',
      downloadUrl: 'https://drive.google.com/drive/folders/1lZA1xODEMLqrkKqc1OAe8DuFK28pVP9F',
      views: 1700,
      tags: ['valorant', 'gaming', 'agents', 'fps']
    },
    {
      id: 17,
      name: 'Plannex',
      category: 'basic',
      description: 'A Planner insipred colorful animated overlay for your streams.',
      thumbnail: '/work/plannex.jpg',
      downloadUrl: 'https://drive.google.com/drive/folders/1garBYs-yctATAr8c9bZwzNZG8MFJYGzk',
      views: 2100,
      tags: ['planner', 'colorful', 'organized', 'vibrant']
    },
    {
      id: 18,
      name: 'Voltex',
      category: 'basic',
      description: 'A nice light animated overlay with cyan accents will be an eye-catching addition to your streams.',
      thumbnail: '/work/voltex.jpg',
      downloadUrl: 'https://drive.google.com/drive/folders/1kwwzrQF465U9l34taKiFgLGZ5dVinSpJ?usp=share_link',
      views: 2100,
      tags: ['light', 'cyan', 'modern', 'eye-catching']
    },
    {
      id: 19,
      name: 'Redux',
      category: 'basic',
      description: 'A stunning wavy animated overlay for your streams inspired by pewdiepie.',
      thumbnail: '/work/redux.jpg',
      downloadUrl: 'https://drive.google.com/drive/folders/1HFs6RWAqrJXvTw3fw-jpd392Ezli_eY2?usp=sharing',
      views: 6800,
      tags: ['wavy', 'pewdiepie', 'stunning', 'animated']
    },
    {
      id: 20,
      name: 'Squid Game',
      category: 'basic',
      description: 'A dark animated overlay inspired by famous Web series SQUID GAMES for your streams.',
      thumbnail: '/work/squid-game.jpg',
      downloadUrl: 'https://drive.google.com/drive/folders/1wgdNAawNOVMo1ei2kg83WYmxC5r3GHgk',
      views: 2400,
      tags: ['squid-game', 'dark', 'series', 'themed']
    },

    {
      id: 21,
      name: 'Xeon',
      category: 'standard',
      description: 'A dark Matrix insipred animated overlay for your streams.',
      thumbnail: '/work/xeon.jpg',
      downloadUrl: 'https://drive.google.com/drive/folders/1IR0zf5r35YcKuGu_A3pY02aypldeec0d?usp=share_link',
      views: 9100,
      tags: ['matrix', 'dark', 'animated', 'digital']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: overlays.length },
    { id: 'premium', name: 'Premium', count: overlays.filter(o => o.category === 'premium').length },
    { id: 'standard', name: 'Standard', count: overlays.filter(o => o.category === 'standard').length },
    { id: 'basic', name: 'Basic', count: overlays.filter(o => o.category === 'basic').length }
  ];

  // Filter overlays based on search term and category
  const filteredOverlays = overlays.filter(overlay => {
    const matchesSearch = overlay.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      overlay.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      overlay.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || overlay.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (overlay: typeof overlays[0]) => {
    // Future: Show ads before download initiation
    // This structure allows easy integration with Google Ads
    const initiateDownload = () => {
      // Create download link and trigger
      const link = document.createElement('a');
      link.href = overlay.downloadUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';

      // Add download attribute for direct downloads if it's a direct file link
      if (overlay.downloadUrl.includes('drive.google.com')) {
        // For Google Drive links, open in new tab
        link.click();
      } else {
        // For direct file downloads, use download attribute
        link.download = overlay.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      // Track download event (for analytics)
      console.log('Download initiated:', overlay.name);
    };

    // Future ad integration point:
    // showAdBeforeDownload().then(() => initiateDownload());

    // For now, directly initiate download
    initiateDownload();
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Free Premium Animated Overlays & Graphics Downloads for Streamers"
        description="Download 20+ free premium animated stream overlays, graphics, and design elements for Twitch, YouTube, and content creation. High-quality minimal, gaming, and aesthetic overlays. Free professional graphics to elevate your streaming content."
        keywords="free stream overlays, twitch overlay download, youtube graphics free, animated overlays, minimalist overlays, gaming overlays"
        canonical="/downloads"
      />
      <Header />

      <main className="pt-20">

        {/* Page Header */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Free <span className="hero-title">Downloads</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover a curated collection of high-quality graphic overlays,
                effects, and design elements. All completely free to download and use in your projects.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="text-3xl font-bold text-primary">
                    <AnimatedCounter to={overlays.length} duration={1.5} />
                  </div>
                  <div className="text-sm text-muted-foreground">Free Downloads</div>
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="text-3xl font-bold text-primary">
                    <AnimatedCounter
                      to={overlays.reduce((sum, overlay) => sum + overlay.views, 0)}
                      duration={2.5}
                      delay={0.3}
                    />
                  </div>
                  <div className="text-sm text-muted-foreground">Total Views</div>
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="text-3xl font-bold text-primary">
                    <AnimatedCounter to={5} duration={1} delay={0.6} />
                  </div>
                  <div className="text-sm text-muted-foreground">New Uploads</div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="pb-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">

                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input
                    type="text"
                    placeholder="Search overlays..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex items-center space-x-2">
                  <Filter size={20} className="text-muted-foreground" />
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category.id
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                          }`}
                      >
                        {category.name} ({category.count})
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overlays Grid */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {filteredOverlays.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredOverlays.map((overlay, index) => (
                  <div
                    key={overlay.id}
                    className="group glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 animate-slide-up"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                      {/* Placeholder since we don't have actual overlay images */}
                      <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                        {overlay.thumbnail ? (
                          <img
                            src={overlay.thumbnail}
                            alt={overlay.name}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/20 flex items-center justify-center">
                            <div className="text-6xl opacity-50">🎨</div>
                          </div>
                        )}
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90"
                        >
                          <Eye size={16} className="mr-2" />
                          Preview
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => handleDownload(overlay)}
                        >
                          <Download size={16} className="mr-2" />
                          Download
                        </Button>
                      </div>

                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {overlay.name}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {overlay.description}
                      </p>


                      {/* Download Button */}
                      <Button
                        className="w-full btn-hero"
                        onClick={() => handleDownload(overlay)}
                      >
                        <Download size={16} className="mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4 opacity-50">🔍</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No overlays found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or category filter.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  variant="secondary"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Submit Your Idea Section */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Downloads;