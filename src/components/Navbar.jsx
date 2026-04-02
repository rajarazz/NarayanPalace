import React, { useState, useEffect } from 'react';
import { Menu, X, Hotel } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Rooms', href: '#rooms' },
    { title: 'Amenities', href: '#amenities' },
    { title: 'Gallery', href: '#gallery' },
    { title: 'Reviews', href: '#reviews' },
    { title: 'Location', href: '#location' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cream/90 backdrop-blur-md py-4 shadow-lg border-b border-gold/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="p-2 bg-saffron rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <Hotel className="text-maroon w-6 h-6" />
          </div>
          <span className="font-heading text-xl md:text-2xl font-bold tracking-tight text-maroon-dark uppercase">
            Narayan Places <span className="text-saffron-dark font-normal">Homestay</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-maroon-dark font-medium hover:text-saffron-dark transition-colors relative group"
            >
              {link.title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saffron transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#booking"
            className="px-6 py-2 bg-saffron text-maroon-dark font-bold rounded-full hover:bg-gold-dark hover:scale-105 transition-all duration-300 shadow-md"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-maroon-dark p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-cream border-t border-gold/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-maroon-dark hover:text-saffron-dark px-4 py-2 rounded-lg hover:bg-saffron/10 transition-all"
                >
                  {link.title}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-6 py-3 bg-saffron text-maroon-dark font-bold rounded-xl shadow-lg border-2 border-saffron-dark"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
