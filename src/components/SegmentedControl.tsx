import React, { useState, useEffect } from 'react';

interface SegmentedControlProps {
  options: string[];
  defaultSelected?: string;
  onSelectionChange?: (selected: string) => void;
  className?: string;
  ctaOption?: string; // Special CTA option that looks different
  onCtaClick?: () => void; // Special handler for CTA
  isScrolled?: boolean; // Different styling when scrolled
  isDarkBackground?: boolean; // Use white shadows on dark backgrounds
  currentPage?: string; // For detecting ContentFlow active state
}

export default function SegmentedControl({ 
  options, 
  defaultSelected, 
  onSelectionChange,
  className = "",
  ctaOption,
  onCtaClick,
  isScrolled = false,
  isDarkBackground = false,
  currentPage
}: SegmentedControlProps) {
  const [selectedOption, setSelectedOption] = useState(defaultSelected || null);
  
  // Update selectedOption when defaultSelected changes
  useEffect(() => {
    setSelectedOption(defaultSelected || null);
  }, [defaultSelected]);

  const handleSelection = (option: string) => {
    setSelectedOption(option);
    onSelectionChange?.(option);
  };

  const handleCtaClick = () => {
    onCtaClick?.();
  };

  const allOptions = ctaOption ? [...options, ctaOption] : options;

  // Different styling based on scroll state and background - Figma Glass Effect
  const getContainerStyle = () => {
    if (isDarkBackground) {
      // White shadows for dark backgrounds with Figma glass effect
      return isScrolled ? {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(32px) saturate(180%)',
        boxShadow: `
          0 0 0 1px rgba(255, 255, 255, 0.1) inset,
          0 2px 4px -1px rgba(255, 255, 255, 0.15),
          0 8px 16px -4px rgba(255, 255, 255, 0.1),
          0 16px 32px -8px rgba(255, 255, 255, 0.05)
        `,
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        background: `
          linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%),
          rgba(255, 255, 255, 0.08)
        `
      } : {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(255, 255, 255, 0.1), 0 4px 16px rgba(255, 255, 255, 0.06), 0 2px 8px rgba(255, 255, 255, 0.03)'
      };
    } else {
      // Regular black shadows for light backgrounds with Figma glass effect
      return isScrolled ? {
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
      } : {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02)'
      };
    }
  };

  return (
    <div 
      className={`inline-flex items-center rounded-full p-1 max-w-fit ${className}`}
      style={getContainerStyle()}
    >
      {allOptions.map((option) => {
        const isCta = option === ctaOption;
        const isContentFlowActive = option === 'ContentFlow' && currentPage === 'contentflow';
        const isActive = (selectedOption === option && !isCta) || isContentFlowActive;
        
        const getButtonStyle = () => {
          if (isActive && !isCta) {
            if (isDarkBackground) {
              return isScrolled ? {
                boxShadow: `
                  0 0 0 1px rgba(255, 255, 255, 0.8) inset,
                  0 2px 4px -1px rgba(255, 255, 255, 0.2),
                  0 4px 8px -2px rgba(255, 255, 255, 0.15),
                  0 8px 16px -4px rgba(255, 255, 255, 0.1)
                `,
                background: `
                  linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)
                `,
                backdropFilter: 'blur(16px) saturate(120%)'
              } : {
                boxShadow: '0 2px 6px rgba(255, 255, 255, 0.1), 0 1px 3px rgba(255, 255, 255, 0.06)'
              };
            } else {
              return isScrolled ? {
                boxShadow: `
                  0 0 0 1px rgba(255, 255, 255, 0.9) inset,
                  0 2px 4px -1px rgba(0, 0, 0, 0.12),
                  0 4px 8px -2px rgba(0, 0, 0, 0.08),
                  0 8px 16px -4px rgba(0, 0, 0, 0.04)
                `,
                background: `
                  linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 100%)
                `,
                backdropFilter: 'blur(16px) saturate(120%)'
              } : {
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04)'
              };
            }
          } else if (isCta) {
            return isScrolled ? {
              boxShadow: `
                0 2px 4px -1px rgba(0, 0, 0, 0.2),
                0 4px 8px -2px rgba(0, 0, 0, 0.16),
                0 8px 16px -4px rgba(0, 0, 0, 0.12)
              `,
              background: `
                linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(15, 23, 42, 0.95) 100%)
              `
            } : undefined;
          }
          return {};
        };
        
        return (
          <button
            key={option}
            onClick={() => isCta ? handleCtaClick() : handleSelection(option)}
            className={`
              px-4 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ease-out relative whitespace-nowrap
              ${isCta
                ? 'bg-gray-900 text-white hover:bg-gray-800 px-6'
                : isActive 
                  ? 'bg-gray-100 text-gray-900 font-semibold' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-white/20'
              }
            `}
            style={getButtonStyle()}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}