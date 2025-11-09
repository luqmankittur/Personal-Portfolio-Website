import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Downloads', href: '/downloads' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header 
  className={`fixed top-5 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white/3 backdrop-blur-md border shadow-md' 
      : 'bg-transparent'
  }`}
>

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src='/images/logo-dark.png'
              alt="Luqman Graphics Logo" 
              className="h-20 w-20 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${
                  location.pathname === item.href ? 'active text-foreground' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Store Link */}
            <a
              href="https://shop.luqman.co.in"
              className="btn-hero flex items-center space-x-2"
              rel="noopener noreferrer"
            >
              <ShoppingBag size={16} />
              <span>Store</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-foreground" />
            ) : (
              <Menu size={24} className="text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-card mt-2 rounded-lg p-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block nav-link py-2 ${
                  location.pathname === item.href ? 'active text-foreground' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://shop.luqman.co.in"
              className="btn-hero flex items-center justify-center space-x-2 w-full"
              rel="noopener noreferrer"
            >
              <ShoppingBag size={16} />
              <span>Store</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;