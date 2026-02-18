import React, { useEffect } from 'react';
import GlobalNavigation from './components/GlobalNavigation';
import HeroSection from './components/HeroSection';
import ClientLogosSection from './components/ClientLogosSection';
import WhatsTheCatchSection from './components/WhatsTheCatchSection';
import ThreeStepsSection from './components/ThreeStepsSection';
import ThisIsForYouSection from './components/ThisIsForYouSection';
import WhyFreeSection from './components/WhyFreeSection';
import BeyondFreeSection from './components/BeyondFreeSection';
import WhosBuildingThisSection from './components/WhosBuildingThisSection';
import ServicesSection from './components/ServicesSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';

export default function App() {
  // Enhanced scroll management
  useEffect(() => {
    // Immediate scroll to top on load
    window.scrollTo(0, 0);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-[var(--color-black)] antialiased selection:bg-[var(--bg-electric-blue)] selection:text-[var(--color-electric-blue)]">
      <GlobalNavigation />
      
      <main>
        <HeroSection />
        <ClientLogosSection />
        <div id="how-it-works">
            <WhatsTheCatchSection />
            <ThreeStepsSection />
        </div>
        <ThisIsForYouSection />
        <WhyFreeSection />
        <BeyondFreeSection />
        <WhosBuildingThisSection />
        <ServicesSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
}
