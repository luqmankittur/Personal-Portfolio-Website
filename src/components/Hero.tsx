import { Link } from 'react-router-dom';
import { Download, ShoppingBag } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Subtle transparent blur elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" style={{animationDelay: '-3s'}}></div>
        
        {/* Glass elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 glass-element rounded-2xl rotate-45" style={{animationDelay: '-2s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 glass-element rounded-full" style={{animationDelay: '-4s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-16 h-40 glass-element rounded-full rotate-12" style={{animationDelay: '-1s'}}></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <div className="mb-3 pt-8 sm:pt-0">
                <span className="text-base md:text-lg text-muted-foreground font-medium">Hello there!</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="text-foreground block mb-2">Welcome to</span>
                <span className="hero-title block">Luqman Graphics</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-2">
                Creative graphic designer specializing in stunning visual overlays, 
                modern designs, and professional graphics that bring your ideas to life.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <a
                href="https://shop.luqman.co.in"
                className="btn-hero flex items-center justify-center space-x-3 w-full sm:w-auto min-w-[160px]"
                rel="noopener noreferrer"
              >
                <ShoppingBag size={20} />
                <span>Buy Now</span>
              </a>
              
              <div className="flex items-center justify-center text-muted-foreground font-medium text-sm">
                OR
              </div>
              
              <Link
                to="/downloads"
                className="btn-secondary flex items-center justify-center space-x-3 w-full sm:w-auto min-w-[160px]"
              >
                <Download size={20} />
                <span>Free Downloads</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">70+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground">Star Rating</div>
              </div>
            </div>
          </div>

          {/* Character Image */}
          <div className="relative animate-slide-up hidden lg:block">
            <div className="relative mx-auto max-w-fulls">
              {/* Glow effect */}
              <div className="absolute inset-0 glow-pink rounded-full blur-2xl opacity-30"></div>
              
              {/* Character */}
              <img
                src='/images/b1new.png'
                alt="Luqman - Graphic Designer"
                className="relative z-10 w-full h-auto animate-float"
                style={{animationDelay: '-1s'}}
              />
              
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute bottom-20 left-10 w-6 h-6 border-2 border-primary rounded-full animate-pulse" style={{animationDelay: '-0.5s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full p-1">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;