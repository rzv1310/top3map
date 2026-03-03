import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Prețuri', href: '#preturi' },
  { label: 'Întrebări Frecvente', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="font-display text-2xl md:text-3xl uppercase text-foreground tracking-wider"
        >
          SEO <span className="text-brand">Doctor</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/40742702982"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-foreground font-bold text-sm uppercase tracking-wider px-5 py-2.5 transition-colors"
          >
            <Phone className="w-4 h-4" />
            +40 742 702 982
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col px-4 py-6 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider py-2"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/40742702982"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-hover text-foreground font-bold text-base uppercase tracking-wider px-5 py-3 transition-colors mt-2"
            >
              <Phone className="w-5 h-5" />
              +40 742 702 982
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
