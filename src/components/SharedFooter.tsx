import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

interface SharedFooterProps {
  onNavigateHome?: () => void;
}

export default function SharedFooter({ onNavigateHome }: SharedFooterProps) {
  const handleHomeClick = () => {
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.history.pushState({}, '', '/');
      window.location.reload();
    }
  };

  return (
    <footer className="py-12 px-6 bg-gray-900 text-white mb-0 md:mb-0" style={{ marginBottom: 'max(env(safe-area-inset-bottom, 0px), 0px)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <p className="mb-4">
          © 2025 ContentFlow by{" "}
          <button 
            onClick={handleHomeClick}
            className="text-purple-400 hover:text-purple-300 underline transition-colors"
          >
            Pruxin
          </button>
          . All rights reserved.
        </p>
        
        <div className="mb-6">
          <p className="mb-2">Questions? Email pranavdesigns2020@gmail.com</p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a 
              href="https://www.linkedin.com/in/pranav-raval-2671753a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>Pranav Raval</span>
            </a>
            <a 
              href="https://www.instagram.com/pruxin_studio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>@pruxin_studio</span>
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61553274152903" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <Facebook className="w-4 h-4" />
              <span>Pruxin Studio</span>
            </a>
          </div>
        </div>
        
        <p className="text-sm text-gray-400">
          Statistics sourced from Buffer (2024), Sprout Social (2025), and multiple industry studies.
        </p>
      </div>
    </footer>
  );
}