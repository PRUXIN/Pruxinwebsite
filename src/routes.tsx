import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";

// ALL imports are dynamic so routes.tsx has zero static component dependencies.
// HMR updates to any component file won't invalidate this module, keeping the
// router reference (and its RouterProvider context) stable across hot reloads.
const Layout = lazy(() => import("./components/Layout"));
const HomePage = lazy(() => import("./components/pages/HomePage"));
const ServicesPage = lazy(() => import("./components/pages/ServicesPage"));
const ProjectsPage = lazy(() => import("./components/pages/ProjectsPage"));
const AboutPage = lazy(() => import("./components/pages/AboutPage"));
const ContactPage = lazy(() => import("./components/pages/ContactPage"));
const ContentPage = lazy(() => import("./components/pages/ContentPage"));
const ClaraPage = lazy(() => import("./components/pages/ClaraPage"));
const PrivacyPage = lazy(() => import("./components/pages/PrivacyPage"));

function Shell({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}

// Lazy-wrapped root layout — Suspense must wrap it at the router level
function LazyLayout() {
  return (
    <Suspense fallback={null}>
      <Layout />
    </Suspense>
  );
}

const NotFound = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="text-center">
      <h1 className="type-display-small text-[var(--color-black)] mb-4">404</h1>
      <p className="type-body-large text-[var(--color-gray-600)] mb-8">Page not found</p>
      <a
        href="/"
        className="inline-flex items-center justify-center h-[48px] px-8 bg-[var(--color-black)] text-white text-[16px] font-medium rounded-full hover:bg-[#1A1A1A] transition-colors"
      >
        Go Home
      </a>
    </div>
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LazyLayout,
    children: [
      { index: true,          Component: () => <Shell><HomePage /></Shell> },
      { path: "services",     Component: () => <Shell><ServicesPage /></Shell> },
      { path: "projects",     Component: () => <Shell><ProjectsPage /></Shell> },
      { path: "about",        Component: () => <Shell><AboutPage /></Shell> },
      { path: "content",      Component: () => <Shell><ContentPage /></Shell> },
      { path: "contact",      Component: () => <Shell><ContactPage /></Shell> },
      { path: "clara",        Component: () => <Shell><ClaraPage /></Shell> },
      { path: "privacy",      Component: () => <Shell><PrivacyPage /></Shell> },
      { path: "*",            Component: NotFound },
    ],
  },
]);
