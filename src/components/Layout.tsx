import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import { useSafeLocation } from './useSafeLocation';
import GlobalNavigation from './GlobalNavigation';
import Footer from './Footer';
import { ScrollProgress } from './ui/effects';

export default function Layout() {
  const location = useSafeLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white font-sans text-[var(--color-black)] antialiased selection:bg-[var(--bg-electric-blue)] selection:text-[var(--color-electric-blue)]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg focus:font-semibold focus:text-sm"
      >
        Skip to main content
      </a>
      <ScrollProgress />
      <GlobalNavigation />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}