import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import pruxinLogo from 'figma:asset/ed230e65ec8d7b6452e7e9e65ae016b014fa4be0.png';

export default function GlobalNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Content', href: '/content' },
    { name: 'Contact', href: '/contact' },
    { name: 'Clara', href: '/clara', accent: true },
  ];

  const useDarkText = !isHomePage || isScrolled;

  return (
    <>
      <nav
        className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-500 ${
          useDarkText
            ? 'bg-white/70 backdrop-blur-2xl border-b border-[rgba(0,0,0,0.06)] shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
            : 'bg-white/5 backdrop-blur-md'
        }`}
        style={{ height: isScrolled ? '60px' : '64px' }}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.img
              src={pruxinLogo}
              alt="PRUXIN"
              className={`h-7 w-auto transition-all duration-300 ${useDarkText ? 'invert' : ''}`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              if ((link as any).accent) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="relative ml-2 px-4 py-1.5 text-[13px] font-semibold rounded-full transition-all duration-200"
                    style={{
                      background: isActive ? '#00F5A0' : 'rgba(0,245,160,0.15)',
                      color: isActive ? '#000' : '#00F5A0',
                      border: '1px solid rgba(0,245,160,0.4)',
                    }}
                  >
                    {link.name}
                  </Link>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-3.5 py-2 text-[14px] font-medium transition-colors duration-200 rounded-lg ${
                    useDarkText
                      ? isActive
                        ? 'text-[var(--color-black)]'
                        : 'text-[var(--color-gray-600)] hover:text-[var(--color-black)] hover:bg-black/[0.03]'
                      : isActive
                        ? 'text-white'
                        : 'text-white/70 hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
                      style={{
                        background: useDarkText
                          ? 'linear-gradient(90deg, #2563EB, #7C3AED)'
                          : 'linear-gradient(90deg, #93C5FD, #C4B5FD)',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className={`relative inline-flex items-center justify-center h-[36px] px-5 text-[14px] font-medium rounded-full transition-all duration-300 overflow-hidden group ${
                useDarkText
                  ? 'bg-[var(--color-black)] text-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)]'
                  : 'bg-white text-[var(--color-black)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.3)]'
              }`}
            >
              <span className="relative z-10">Get a UX Audit</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              useDarkText ? 'text-[var(--color-black)] hover:bg-black/5' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={link.href}
                    className={`block text-[28px] font-semibold py-2 transition-colors ${
                      location.pathname === link.href
                        ? (link as any).accent ? '' : 'gradient-text-blue-purple'
                        : (link as any).accent ? '' : 'text-[var(--color-black)]'
                    }`}
                    style={(link as any).accent ? { color: '#007A52' } : {}}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center h-[56px] w-full bg-[var(--color-black)] text-white text-[18px] font-medium rounded-full mt-6 relative overflow-hidden group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="relative z-10">Get a UX Audit</span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}