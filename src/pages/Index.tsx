import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import Reviews from '../components/Reviews';
import Work from '../components/Work';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Professional Graphic Designer - Premium Stream Overlays & Custom Graphics"
        description="Professional graphic designer specializing in stunning animated stream overlays, brand identity, and modern designs. Free premium downloads available for Twitch, YouTube, and streaming platforms. Transform your content with custom graphics."
        keywords="twitch overlay designer, youtube graphics, streaming graphics, professional designer India"
        canonical="/"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About Me Section */}
        <About />
        
        {/* Reviews Section */}
        <Reviews />
        
        {/* My Work Section */}
        <Work />
        
        {/* Contact Me Section */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
