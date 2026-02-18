import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide the sticky CTA when the Final CTA section is visible
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1, // Trigger as soon as 10% of the final section is visible
      }
    );

    const finalSection = document.getElementById('final-cta-section');
    if (finalSection) {
      observer.observe(finalSection);
    }

    return () => {
      if (finalSection) {
        observer.unobserve(finalSection);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-md border-t border-gray-200 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out">
      <Button 
        className="w-full h-12 text-lg font-bold bg-[var(--accent)] hover:bg-[#0077ED] text-white rounded-lg shadow-lg"
        asChild
      >
        <a href="https://calendly.com/pruxin/30min" target="_blank" rel="noopener noreferrer">
          Book a Call
        </a>
      </Button>
    </div>
  );
}
