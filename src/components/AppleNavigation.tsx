import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Download } from 'lucide-react';

// PRUKIN Logo imports
import prukinLogoBlack from 'figma:asset/158a51c794328aa68369a8c3dca9f94b3c81a32d.png';
import prukinLogoLight from 'figma:asset/ed230e65ec8d7b6452e7e9e65ae016b014fa4be0.png';

export default function AppleNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={isScrolled ? prukinLogoBlack : prukinLogoLight} 
              alt="PRUKIN" 
              className="h-8 w-auto transition-opacity hover:opacity-80 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('projects')}
              className={`hover:opacity-70 transition-all ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`hover:opacity-70 transition-all ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`hover:opacity-70 transition-all ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              Contact
            </button>
            <Button 
              variant={isScrolled ? "default" : "default"}
              size="sm"
              className={isScrolled 
                ? "bg-black text-white hover:bg-gray-800" 
                : "bg-white text-black hover:bg-gray-100"
              }
              asChild
            >
              <a href="https://1drv.ms/b/c/c7dca30148596d91/EUfXco6ACZRIgdHXZab7XIoBSy_QmzoFcapVHwWNgAZqgA?e=BoiIeZ" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${isScrolled ? 'text-black hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4 px-6">
              <button
                onClick={() => scrollToSection('projects')}
                className="text-black hover:opacity-70 transition-opacity text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-black hover:opacity-70 transition-opacity text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-black hover:opacity-70 transition-opacity text-left"
              >
                Contact
              </button>
              <Button className="bg-black text-white hover:bg-gray-800 w-fit" asChild>
                <a href="https://1drv.ms/b/c/c7dca30148596d91/EUfXco6ACZRIgdHXZab7XIoBSy_QmzoFcapVHwWNgAZqgA?e=BoiIeZ" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}