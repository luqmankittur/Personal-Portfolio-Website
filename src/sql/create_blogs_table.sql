-- Create the blogs table
CREATE TABLE IF NOT EXISTS blogs (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text,
  content text NOT NULL,
  thumbnail text,
  author text NOT NULL DEFAULT 'Admin',
  published_at timestamptz DEFAULT NOW(),
  read_time text DEFAULT '5 min read',
  tags text[] DEFAULT '{}',
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT NOW(),
  updated_at timestamptz DEFAULT NOW()
);

-- Create an index on slug for faster lookups
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);

-- Create an index on published_at for sorting
CREATE INDEX IF NOT EXISTS idx_blogs_published_at ON blogs(published_at DESC);

-- Create an index on featured for filtering
CREATE INDEX IF NOT EXISTS idx_blogs_featured ON blogs(featured);

-- Enable Row Level Security
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows everyone to read blogs
CREATE POLICY "Anyone can view blogs" ON blogs
  FOR SELECT USING (true);

-- Create a policy that allows authenticated users to insert/update blogs
CREATE POLICY "Authenticated users can manage blogs" ON blogs
  FOR ALL USING (auth.role() = 'authenticated');

-- Insert sample blog posts with the data from your document
INSERT INTO blogs (title, slug, excerpt, content, author, published_at, read_time, tags, featured) VALUES 
(
  'How to Edit PSD Files Without a Photoshop Subscription (Free Tools & Hacks)',
  'edit-psd-files-without-photoshop',
  'Learn the best free and affordable tools to edit PSD files without paying for an Adobe Photoshop subscription.',
  '<p>Adobe Photoshop is the industry standard for photo editing and graphic design, but its subscription model can be expensive for casual users or those just starting out. Fortunately, there are several excellent free and affordable alternatives that can open and edit PSD files.</p>

<h2>Free Tools for Editing PSD Files</h2>

<h3>1. GIMP (GNU Image Manipulation Program)</h3>
<p>GIMP is probably the best free alternative to Photoshop. It can open most PSD files and supports layers, masks, and blend modes.</p>
<ul>
<li>Completely free and open-source</li>
<li>Supports most Photoshop features</li>
<li>Available on Windows, Mac, and Linux</li>
<li>Large community and extensive tutorials</li>
</ul>

<h3>2. Photopea</h3>
<p>Photopea is a browser-based editor that closely mimics Photoshop''s interface and can handle PSD files with impressive accuracy.</p>
<ul>
<li>No download required - works in your browser</li>
<li>Supports advanced PSD features</li>
<li>Interface similar to Photoshop</li>
<li>Handles large files well</li>
</ul>

<h2>Affordable Alternatives</h2>

<h3>Affinity Photo</h3>
<p>For a one-time purchase, Affinity Photo offers professional-grade editing capabilities with excellent PSD support.</p>

<h2>Tips for Working with PSD Files</h2>
<ul>
<li>Always keep a backup of your original PSD file</li>
<li>Some complex effects may not translate perfectly</li>
<li>Test your chosen tool with simple PSD files first</li>
</ul>',
  'Luqman',
  '2024-09-01 10:00:00+00',
  '7 min read',
  ARRAY['psd', 'photoshop', 'free-tools', 'design'],
  true
),
(
  'Best Animated Overlays for Twitch & YouTube in 2025 (Top Picks)',
  'best-animated-overlays-2025',
  'Discover the most popular and creative animated overlays for Twitch and YouTube in 2025 to level up your streams.',
  '<p>Streaming has evolved dramatically, and in 2025, animated overlays are essential for creating engaging content that stands out. Here are the top animated overlay trends and tools that successful streamers are using.</p>

<h2>Top Animated Overlay Trends for 2025</h2>

<h3>1. Particle Effects and Dynamic Backgrounds</h3>
<p>Subtle particle effects that react to your voice or game events create an immersive experience without being distracting.</p>

<h3>2. Minimalist Geometric Animations</h3>
<p>Clean, geometric shapes with smooth animations that complement your brand colors and style.</p>

<h3>3. Interactive Chat Overlays</h3>
<p>Overlays that animate when viewers interact, creating a more engaging community experience.</p>

<h2>Best Sources for Animated Overlays</h2>

<h3>Premium Options</h3>
<ul>
<li><strong>Streamlabs:</strong> Built-in animated themes with customization options</li>
<li><strong>OWN3D:</strong> High-quality animated overlay packages</li>
<li><strong>Placeit:</strong> Professional animated templates</li>
</ul>

<h3>Free Resources</h3>
<ul>
<li><strong>OBS Studio Plugins:</strong> Various animation plugins available</li>
<li><strong>Community Downloads:</strong> Free overlays shared by creators</li>
</ul>

<h2>Technical Considerations</h2>
<p>When choosing animated overlays, consider your streaming setup''s performance capabilities. Heavy animations can impact your stream quality if your hardware isn''t optimized.</p>',
  'Luqman',
  '2024-09-08 14:30:00+00',
  '8 min read',
  ARRAY['overlays', 'streaming', 'twitch', 'youtube'],
  true
),
(
  'Step-by-Step Guide: Installing Custom Overlays on OBS & Streamlabs',
  'install-overlays-obs-streamlabs',
  'A complete beginner-friendly tutorial on how to install and set up custom overlays in OBS Studio and Streamlabs.',
  '<p>Installing custom overlays might seem daunting for beginners, but with this step-by-step guide, you''ll have professional-looking overlays set up in no time.</p>

<h2>Installing Overlays in OBS Studio</h2>

<h3>Step 1: Download Your Overlay Package</h3>
<p>Make sure you have all the necessary files: images, fonts, and any configuration files.</p>

<h3>Step 2: Add Browser Source</h3>
<ol>
<li>In OBS, click the "+" in your Sources box</li>
<li>Select "Browser Source"</li>
<li>Create new or add existing</li>
<li>Configure the source settings</li>
</ol>

<h3>Step 3: Configure Overlay Settings</h3>
<p>Adjust the width, height, and positioning to match your stream layout.</p>

<h2>Installing Overlays in Streamlabs</h2>

<h3>Method 1: Using Overlay Themes</h3>
<p>Streamlabs offers built-in overlay themes that can be applied with one click.</p>

<h3>Method 2: Custom Upload</h3>
<p>For custom overlays, use the custom widget feature to upload your own designs.</p>

<h2>Troubleshooting Common Issues</h2>
<ul>
<li><strong>Overlay not showing:</strong> Check source order and visibility</li>
<li><strong>Performance issues:</strong> Reduce animation complexity</li>
<li><strong>Alignment problems:</strong> Use OBS transform tools</li>
</ul>

<h2>Pro Tips</h2>
<ul>
<li>Always test your overlay before going live</li>
<li>Keep a backup of your scene collection</li>
<li>Consider your audience when choosing overlay complexity</li>
</ul>',
  'Luqman',
  '2024-09-15 09:15:00+00',
  '9 min read',
  ARRAY['obs', 'streamlabs', 'tutorial', 'overlays'],
  false
);