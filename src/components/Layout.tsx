import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import GlobalNavigation from './GlobalNavigation';
import Footer from './Footer';
import { ScrollProgress } from './ui/effects';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white font-sans text-[var(--color-black)] antialiased selection:bg-[var(--bg-electric-blue)] selection:text-[var(--color-electric-blue)]">
      <ScrollProgress />
      <GlobalNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
