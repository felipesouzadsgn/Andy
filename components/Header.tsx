import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfólio', href: '#projects' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' }, // Assuming content exists or links to process
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-dark-900/90 backdrop-blur-md border-b border-dark-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative text-brand-500 group-hover:text-brand-400 transition-colors">
            <Hexagon size={28} strokeWidth={2.5} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
            </div>
          </div>
          <span className="text-2xl font-bold text-white tracking-tighter">andy<span className="text-brand-500">.</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact">
            <Button size="sm">Fale Comigo</Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-brand-500 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-dark-900 border-b border-dark-800 p-6 flex flex-col gap-4 shadow-2xl md:hidden animate-fade-in">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-base font-medium text-gray-300 hover:text-white py-2 border-b border-dark-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button fullWidth>Fale Comigo</Button>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;