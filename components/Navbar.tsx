
import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { theme } from '../theme/theme';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Trainers', id: 'trainers' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg border-b border-white/10' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <button 
          onClick={() => setActivePage('home')}
          className="font-display text-2xl font-bold tracking-tighter"
          style={{ color: theme.colors.text }}
        >
          {siteConfig.logo} <span style={{ color: theme.colors.primary }}>FITNESS</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActivePage(link.id)}
              className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${
                activePage === link.id ? '' : 'text-gray-400 hover:text-white'
              }`}
              style={{ color: activePage === link.id ? theme.colors.primary : undefined }}
            >
              {link.name}
            </button>
          ))}
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center space-x-2 px-5 py-2 rounded-full font-bold text-xs uppercase transition-transform active:scale-95"
            style={{ backgroundColor: theme.colors.primary, color: 'white' }}
          >
            <Phone size={14} />
            <span>Join Now</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-white/10 p-6 space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActivePage(link.id);
                setIsOpen(false);
              }}
              className={`block w-full text-left text-lg font-bold uppercase tracking-widest ${
                activePage === link.id ? '' : 'text-gray-400'
              }`}
              style={{ color: activePage === link.id ? theme.colors.primary : undefined }}
            >
              {link.name}
            </button>
          ))}
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="block w-full text-center py-4 rounded-lg font-black uppercase tracking-widest"
            style={{ backgroundColor: theme.colors.primary, color: 'white' }}
          >
            Call: {siteConfig.contact.phone}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
