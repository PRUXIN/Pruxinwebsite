import { createBrowserRouter } from "react-router";
import React from "react";

const Layout = React.lazy(() => import("./components/Layout"));
const HomePage = React.lazy(() => import("./components/pages/HomePage"));
const ServicesPage = React.lazy(() => import("./components/pages/ServicesPage"));
const ProjectsPage = React.lazy(() => import("./components/pages/ProjectsPage"));
const AboutPage = React.lazy(() => import("./components/pages/AboutPage"));
const ContactPage = React.lazy(() => import("./components/pages/ContactPage"));
const ContentPage = React.lazy(() => import("./components/pages/ContentPage"));
const RuxiPage = React.lazy(() => import("./components/pages/RuxiPage"));
const PrivacyPage = React.lazy(() => import("./components/pages/PrivacyPage"));

function NotFound() {
  return (
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
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "projects", Component: ProjectsPage },
      { path: "about", Component: AboutPage },
      { path: "content", Component: ContentPage },
      { path: "contact", Component: ContactPage },
      { path: "ruxi", Component: RuxiPage },
      { path: "privacy", Component: PrivacyPage },
      { path: "*", Component: NotFound },
    ],
  },
]);
