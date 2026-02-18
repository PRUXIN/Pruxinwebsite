import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import pruxinLogo from 'figma:asset/ed230e65ec8d7b6452e7e9e65ae016b014fa4be0.png';
import pruxinLogoDark from 'figma:asset/158a51c794328aa68369a8c3dca9f94b3c81a32d.png';

export default function GlobalNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How it works', href: '#how-it-works' },
    { name: 'Services', href: '#services' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-[40px] border-b border-[rgba(0,0,0,0.06)] shadow-subtle'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src={isScrolled ? pruxinLogoDark : pruxinLogo} 
              alt="PRUXIN" 
              className="h-8 w-auto transition-opacity duration-300" 
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[15px] transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-[var(--color-black)] hover:text-[var(--color-gray-600)]' 
                    : 'text-white hover:text-white/80'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="https://calendly.com/pruxin/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center h-[36px] px-6 text-[15px] font-medium rounded-full transition-colors duration-200 ${
                isScrolled
                  ? 'bg-[var(--color-black)] text-white hover:bg-[#1A1A1A]'
                  : 'bg-white text-[var(--color-black)] hover:bg-white/90'
              }`}
            >
              Book Call
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 transition-colors duration-200 ${
              isScrolled ? 'text-[var(--color-black)]' : 'text-white'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[24px] font-semibold text-[var(--color-black)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://calendly.com/pruxin/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[56px] w-full bg-[var(--color-black)] text-white text-[18px] font-medium rounded-full mt-4"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
