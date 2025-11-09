import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Github, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Store', href: 'https://payhip.com/LuqmanKittur', external: true },
    { name: 'Downloads', href: '/downloads' },
  ];

  const policies = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookie' },
  ];

  const otherLinks = [
    { name: 'Fiverr', href: 'https://www.fiverr.com/luqmankittur?source=gig_page', external: true },
    { name: 'GitHub', href: 'https://github.com/luqmankittur', external: true },
  ];

  const socialLinks = [
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/luqman.co.in/#', 
      icon: Instagram,
      color: 'hover:text-pink-400'
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/luqmankittur', 
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    { 
      name: 'Email', 
      href: 'mailto:kitturluqman007@gmail.com', 
      icon: Mail,
      color: 'hover:text-primary'
    },
  ];

  return (
    <footer className="glass-card border-t mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 relative">
              Quick Links
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary rounded"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{link.name}</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 relative">
              Policies
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary rounded"></div>
            </h3>
            <ul className="space-y-3">
              {policies.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 relative">
              Other Links
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary rounded"></div>
            </h3>
            <ul className="space-y-3">
              {otherLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{link.name}</span>
                    <ExternalLink size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Message Me */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 relative">
              Message Me
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary rounded"></div>
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`p-3 rounded-full bg-secondary/50 text-muted-foreground transition-all duration-300 hover:scale-110 ${social.color} hover:bg-secondary`}
                    target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="text-center">
            <p className="text-muted-foreground">
              Copyright © 2025 Made with ❤️ by{' '}
              <span className="text-primary font-semibold">Luqman</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
