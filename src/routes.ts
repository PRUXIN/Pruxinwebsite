import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./components/pages/HomePage";
import ServicesPage from "./components/pages/ServicesPage";
import ProjectsPage from "./components/pages/ProjectsPage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import ContentPage from "./components/pages/ContentPage";
import ClaraPage from "./components/pages/ClaraPage";
import PrivacyPage from "./components/pages/PrivacyPage";

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
      { path: "clara", Component: ClaraPage },
      { path: "privacy", Component: PrivacyPage },
      {
        path: "*",
        Component: () => {
          return (
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="text-center">
                <h1 className="type-display-small text-[var(--color-black)] mb-4">404</h1>
                <p className="type-body-large text-[var(--color-gray-600)] mb-8">Page not found</p>
                <a href="/" className="inline-flex items-center justify-center h-[48px] px-8 bg-[var(--color-black)] text-white text-[16px] font-medium rounded-full hover:bg-[#1A1A1A] transition-colors">
                  Go Home
                </a>
              </div>
            </div>
          );
        },
      },
    ],
  },
]);