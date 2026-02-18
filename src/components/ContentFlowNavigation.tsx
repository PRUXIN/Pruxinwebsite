import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Download, Menu, X } from 'lucide-react';

// PRUKIN Logo imports
import prukinLogoBlack from 'figma:asset/158a51c794328aa68369a8c3dca9f94b3c81a32d.png';
import prukinLogoLight from 'figma:asset/ed230e65ec8d7b6452e7e9e65ae016b014fa4be0.png';

// Mobile Dropdown Component
const MobileDropdown = ({ 
  isOpen, 
  onClose, 
  onMenuItemClick, 
  onResumeClick,
  isScrolled = false
}: {
  isOpen: boolean;
  onClose: () => void;
  onMenuItemClick: (section: string) => void;
  onResumeClick: () => void;
  isScrolled?: boolean;
}) => {
  if (!isOpen) return null;

  return (
    <div className={`fixed left-0 right-0 z-[60] md:hidden ${isScrolled ? 'top-16' : 'top-16'}`}>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[61]"
        onClick={onClose}
      />
      
      {/* Full Width Menu Content */}
      <div className="relative bg-white border-b border-gray-200 shadow-xl animate-in slide-in-from-top-2 duration-200 z-[62]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Close Button */}
          <div className="flex justify-end mb-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-lg border-2 border-orange-400"
            >
              <X className="w-5 h-5 text-gray-900" />
            </Button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col items-center space-y-6">
            <button
              onClick={() => onMenuItemClick('Projects')}
              className="text-xl font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200 py-2"
            >
              Projects
            </button>
            
            <button
              onClick={() => onMenuItemClick('About me')}
              className="text-xl font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200 py-2"
            >
              About me
            </button>
            
            <button
              onClick={() => onMenuItemClick('Articles')}
              className="text-xl font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200 py-2"
            >
              Articles
            </button>
            
            <button
              onClick={() => onMenuItemClick('ContentFlow')}
              className="text-xl font-medium text-purple-600 hover:text-purple-700 transition-colors duration-200 py-2"
            >
              ContentFlow
            </button>
            
            <button
              onClick={() => onMenuItemClick('Contact')}
              className="text-xl font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200 py-2"
            >
              Contact
            </button>

            <div className="pt-4">
              <Button
                onClick={() => {
                  onResumeClick();
                  onClose();
                }}
                className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 text-lg font-medium rounded-full transition-all duration-200"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Floating Mobile Dropdown for scrolled state
const FloatingMobileDropdown = ({ 
  isOpen, 
  onClose, 
  onMenuItemClick, 
  onResumeClick
}: {
  isOpen: boolean;
  onClose: () => void;
  onMenuItemClick: (section: string) => void;
  onResumeClick: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-12 right-0 z-[70]">
      {/* Backdrop for floating menu */}
      <div 
        className="fixed inset-0 bg-transparent -z-10"
        onClick={onClose}
      />
      
      {/* Floating Menu Content with Glass Effect */}
      <div 
        className="rounded-xl p-6 min-w-[280px] animate-in slide-in-from-top-2 duration-200"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(32px) saturate(180%)',
          boxShadow: `
            0 0 0 1px rgba(255, 255, 255, 0.6) inset,
            0 2px 4px -1px rgba(0, 0, 0, 0.08),
            0 8px 16px -4px rgba(0, 0, 0, 0.12),
            0 16px 32px -8px rgba(0, 0, 0, 0.08),
            0 32px 64px -16px rgba(0, 0, 0, 0.04)
          `,
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderTop: '1px solid rgba(255, 255, 255, 0.5)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          background: `
            linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 100%),
            rgba(255, 255, 255, 0.7)
          `
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
          <img 
            src={prukinLogoBlack} 
            alt="PRUKIN" 
            className="h-6 w-auto"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg border-2 border-orange-400"
          >
            <X className="w-5 h-5 text-gray-900" />
          </Button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => onMenuItemClick('Projects')}
            className="text-left text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200 py-2"
          >
            Projects
          </button>
          
          <button
            onClick={() => onMenuItemClick('About me')}
            className="text-left text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200 py-2"
          >
            About me
          </button>
          
          <button
            onClick={() => onMenuItemClick('Articles')}
            className="text-left text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200 py-2"
          >
            Articles
          </button>
          
          <button
            onClick={() => onMenuItemClick('ContentFlow')}
            className="text-left text-lg font-medium text-purple-600 hover:text-purple-700 transition-colors duration-200 py-2"
          >
            ContentFlow
          </button>
          
          <button
            onClick={() => onMenuItemClick('Contact')}
            className="text-left text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200 py-2"
          >
            Contact
          </button>

          <div className="pt-4 border-t border-gray-200">
            <Button
              onClick={() => {
                onResumeClick();
                onClose();
              }}
              className="w-full bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 text-sm font-medium rounded-full transition-all duration-200"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ContentFlowNavigationProps {
  onNavigateHome: () => void;
}

export default function ContentFlowNavigation({ onNavigateHome }: ContentFlowNavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 80);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuItemClick = (item: string) => {
    setIsMobileMenuOpen(false);
    
    if (item === 'ContentFlow') {
      // Stay on current page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate back to main site with hash
      const sectionMap: { [key: string]: string } = {
        'Projects': '#projects',
        'About me': '#about',
        'Articles': '#articles',
        'Contact': '#contact'
      };
      
      const hash = sectionMap[item];
      if (hash) {
        // Navigate to main site with hash
        window.location.href = `/${hash}`;
      }
    }
  };

  const handleResumeClick = () => {
    window.open('https://1drv.ms/b/c/c7dca30148596d91/ES3jagHHtAdFgQJuf2mbtoUBsgOGpA_Qz9VwAmuZi1jaLQ?e=6Cdctq', '_blank');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* STATE 1: Initial navigation (not scrolled) */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'opacity-0 pointer-events-none' 
          : 'opacity-100'
      }`}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px) saturate(120%)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
      }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center h-16 relative">
            {/* Logo - Left */}
            <div className="flex-1">
              <button
                onClick={onNavigateHome}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              >
                <img 
                  src={prukinLogoBlack} 
                  alt="PRUKIN" 
                  className="h-8 w-auto"
                />
              </button>
            </div>

            {/* Centered Navigation - Desktop Only */}
            <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-8">
              <button
                onClick={() => handleMenuItemClick('Projects')}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => handleMenuItemClick('About me')}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                About me
              </button>
              <button
                onClick={() => handleMenuItemClick('Articles')}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Articles
              </button>
              <button
                onClick={() => handleMenuItemClick('ContentFlow')}
                className="text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-200"
              >
                ContentFlow
              </button>
              <button
                onClick={() => handleMenuItemClick('Contact')}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Contact
              </button>
            </div>

            {/* Resume Button - Right (Desktop) */}
            <div className="hidden md:flex flex-1 justify-end">
              <Button
                onClick={handleResumeClick}
                className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-2 text-sm font-medium rounded-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden flex-1 flex justify-end">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="p-2 hover:bg-gray-100 rounded-lg border-2 border-orange-400"
              >
                <Menu className="w-6 h-6 text-gray-900" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* STATE 2: Scrolled navigation - Single white pill with all items */}
      <div className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Desktop Single Pill */}
        <div className="hidden md:block">
          <div 
            className="bg-white border border-gray-200 rounded-full px-2 py-2 shadow-lg inline-flex items-center gap-1"
            style={{
              backdropFilter: 'blur(20px) saturate(120%)',
              backgroundColor: 'rgba(255, 255, 255, 0.95)'
            }}
          >
            <button
              onClick={() => handleMenuItemClick('Projects')}
              className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-full hover:bg-gray-50 transition-all duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => handleMenuItemClick('About me')}
              className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-full hover:bg-gray-50 transition-all duration-200"
            >
              About me
            </button>
            <button
              onClick={() => handleMenuItemClick('Articles')}
              className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-full hover:bg-gray-50 transition-all duration-200"
            >
              Articles
            </button>
            <button
              onClick={() => handleMenuItemClick('ContentFlow')}
              className="text-purple-600 font-semibold px-4 py-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-all duration-200"
            >
              ContentFlow
            </button>
            <button
              onClick={() => handleMenuItemClick('Contact')}
              className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-full hover:bg-gray-50 transition-all duration-200"
            >
              Contact
            </button>
            <Button
              onClick={handleResumeClick}
              className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-2.5 text-sm font-medium rounded-full ml-1"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
        
        {/* Mobile Floating Navigation */}
        <div className="md:hidden relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="p-2 hover:bg-white/20 rounded-lg border-2 border-orange-400 transition-all duration-200"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(32px) saturate(180%)',
              boxShadow: `
                0 0 0 1px rgba(255, 255, 255, 0.6) inset,
                0 2px 4px -1px rgba(0, 0, 0, 0.08),
                0 8px 16px -4px rgba(0, 0, 0, 0.12),
                0 16px 32px -8px rgba(0, 0, 0, 0.08)
              `,
              border: '2px solid rgba(249, 115, 22, 0.8)',
              background: `
                linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 100%),
                rgba(255, 255, 255, 0.7)
              `
            }}
          >
            <Menu className="w-6 h-6 text-gray-900" />
          </Button>
          
          {/* Floating Menu Dropdown for scrolled state */}
          {isMobileMenuOpen && (
            <FloatingMobileDropdown 
              isOpen={isMobileMenuOpen}
              onClose={toggleMobileMenu}
              onMenuItemClick={handleMenuItemClick}
              onResumeClick={handleResumeClick}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown - Header State (non-scrolled) */}
      {!isScrolled && (
        <MobileDropdown 
          isOpen={isMobileMenuOpen}
          onClose={toggleMobileMenu}
          onMenuItemClick={handleMenuItemClick}
          onResumeClick={handleResumeClick}
          isScrolled={false}
        />
      )}
    </>
  );
}