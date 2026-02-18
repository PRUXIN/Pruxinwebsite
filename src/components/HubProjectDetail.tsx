import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogClose, DialogTitle, DialogDescription } from './ui/dialog';
import ProjectCarousel from './ProjectCarousel';
import { Users, Route, Network, User, Grid3X3, RotateCcw, X, CheckCircle, Target, Lightbulb, ArrowRight, Linkedin } from 'lucide-react';
import projectFramework from 'figma:asset/2a4b65dafd03c03aa138da003b6e2fe0fdbed641.png';
import userJourneys from 'figma:asset/1405331f43c57af0f2298774aceeec5d6b4c4cf5.png';
import productRequirements from 'figma:asset/56536400e1589e6406f4e9fb212f7eb86f8faeb5.png';
import usersInterface from 'figma:asset/f06fd67cfcf8cc87048cf1c37382de2d700eb901.png';
import usersSearchInterface from 'figma:asset/64b365e9dfc3f6475ba74dfcbd228423e05acfcd.png';
import personalDetailsInterface from 'figma:asset/b5a5bac196472f1a4303541256c02dd778c39ec6.png';
import companySettingsDetail from 'figma:asset/1c73be243acb337ef1acfa1d3679331ee1815c45.png';
import companySettingsSimple from 'figma:asset/cae6fc587b19777b9fcca51866e0ef3555d46460.png';
import paymentInvoiceInterface from 'figma:asset/5ed6b4a2eab6168cd17998e9815622a2d4baab94.png';
import productsOverview from 'figma:asset/5ea1b2523242577357f8da45a672d95addc5ddb9.png';
import productsScoutIQ from 'figma:asset/fde8ef229b2882fe6325494b204e221ceaeac9d2.png';
import paymentMethodsManagement from 'figma:asset/e4be302f8aa3ab3513f2b2aed4266fccfc5f5a58.png';
import companyUserManagement from 'figma:asset/44341bc38a717158c0b50a423e232a60edac91a3.png';
import personalProfileManagement from 'figma:asset/e50d8a36a5a83f5a93b438a1eaf7129d9e2bc28f.png';
import twoFactorAuthSetup from 'figma:asset/bb597bf5ca82cf240cd4b2678df80671e05049f1.png';

interface HubProjectDetailProps {
  onBack: () => void;
}

export default function HubProjectDetail({ onBack }: HubProjectDetailProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const projectImages = [
    {
      src: projectFramework,
      alt: "Project Framework - Goals, Metrics, and Risks",
      caption: "Project Framework: Goals, Metrics, and Risk Assessment"
    },
    {
      src: userJourneys,
      alt: "User Journey Mapping and Documentation",
      caption: "User Journey Mapping: Role-Based Access Flows and Documentation"
    },
    {
      src: productRequirements,
      alt: "Product Requirements and Specifications",
      caption: "Product Requirements: Feature Specifications and User Stories"
    },
    {
      src: usersInterface,
      alt: "Users Management Interface",
      caption: "Users Management: Interface for managing team members, roles, and permissions"
    },
    {
      src: usersSearchInterface,
      alt: "Users Management with Search and Filtering",
      caption: "Enhanced Users Management: Search functionality with company and role filtering"
    },
    {
      src: personalDetailsInterface,
      alt: "Personal Details and Subscription Management",
      caption: "Personal Profile: User details management and subscription access control"
    },
    {
      src: companySettingsDetail,
      alt: "Company Settings Configuration Interface",
      caption: "Company Settings: Comprehensive business information management with address, tax ID, phone, and Amazon integration"
    },
    {
      src: companySettingsSimple,
      alt: "Company Settings Address Editing",
      caption: "Streamlined Company Settings: Focused address editing workflow with brand logo management"
    },
    {
      src: paymentInvoiceInterface,
      alt: "Payment and Invoice Management",
      caption: "Payment & Invoice Hub: Billing overview, payment methods, and transaction history with status tracking"
    },
    {
      src: productsOverview,
      alt: "Products Subscription Management Overview",
      caption: "Products Management: Subscription overview with product filters (ChannelReply, DimeTyd, FeedbackWhiz, ScoutIQ, InventoryLab, TacticalArbitrage)"
    },
    {
      src: productsScoutIQ,
      alt: "Products Interface with ScoutIQ Filter Active",
      caption: "Filtered Products View: ScoutIQ-specific subscription management with plan details and user assignments"
    },
    {
      src: paymentMethodsManagement,
      alt: "Payment Methods Management Interface",
      caption: "Payment Methods Hub: Comprehensive payment options management including Visa, PayPal, Discover cards, and bank accounts with expiration tracking"
    },
    {
      src: companyUserManagement,
      alt: "Company-Specific User Management Interface",
      caption: "Enterprise User Management: Company-specific user administration for LOREAL USA ACD C/O Market Performance Group LLC with role assignments and authentication tracking"
    },
    {
      src: personalProfileManagement,
      alt: "Personal Profile Management with Timezone Settings",
      caption: "Advanced Profile Management: Personal details configuration with timezone editing (GMT-5:00 NewYork) and enhanced security settings"
    },
    {
      src: twoFactorAuthSetup,
      alt: "Two-Factor Authentication Setup Interface",
      caption: "Security Enhancement: Two-factor authentication setup with QR code integration, authenticator app configuration, and verification code entry"
    }
  ];

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-8 py-12 pt-16">

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Threecolts Hub
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-8 text-slate-600">
            <Badge variant="secondary" className="bg-slate-200 text-slate-700">
              UX/UI Designer
            </Badge>
            <span>·</span>
            <span className="text-slate-800">2024–2025</span>
          </div>
          
          <p className="text-xl text-slate-700 leading-relaxed mb-8">
            Platform redesign for centralized SaaS billing, user roles, and subscription workflows.
          </p>
        </div>

        {/* The Challenge */}
        <section className="mb-16">
          <div className="border-l-4 border-red-500 pl-8 mb-8">
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">🚧 The Challenge</h2>
            <p className="text-lg leading-relaxed text-slate-600 mb-6">
              The previous platform, Threecolts Manager, was confusing for both users and internal teams. Users struggled to manage subscriptions, cancel plans, and assign roles. Billing was split across products, and permissions were inconsistently managed. There was no clear hub where users could control their business.
            </p>
          </div>
        </section>

        {/* Goals */}
        <section className="mb-16">
          <div className="border-l-4 border-blue-500 pl-8 mb-8">
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">🎯 Goals</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-slate-600">Replace Threecolts Manager with a streamlined, user-first experience</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-slate-600">Consolidate user management, billing, and subscriptions into one unified platform</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-slate-600">Modernize visual design and UX to align with the newer product design language</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-slate-600">Support complex org-level roles without increasing friction</span>
              </li>
            </ul>
          </div>
        </section>

        {/* My Role */}
        <section className="mb-16">
          <div className="border-l-4 border-green-500 pl-8 mb-8">
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">🧠 My Role</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-slate-600">Led design exploration, wireframes, and high-fidelity UI across all modules</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-slate-600">Synthesized feedback from usability tests, internal interviews, and customer recordings</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-slate-600">Created a component-based system aligned with the new Threecolts design language</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-slate-600">Collaborated with engineering to ensure edge-case coverage and scalable handoff</span>
              </li>
            </ul>
          </div>
        </section>

        {/* UX Scope */}
        <section className="mb-16">
          <div className="border-l-4 border-purple-500 pl-8 mb-8">
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">🧩 UX Scope</h2>
            <p className="text-lg text-slate-600 mb-6">Six primary modules built within the Hub:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Subscriptions</h3>
                <p className="text-slate-600">Add, edit, cancel across multiple tools</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">User Management</h3>
                <p className="text-slate-600">Role-based access with multi-product permissions</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Billing &amp; Invoices</h3>
                <p className="text-slate-600">Central payment method management + secure 3DS support</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Company Settings</h3>
                <p className="text-slate-600">Rename, restructure, and merge org data</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">My Profile</h3>
                <p className="text-slate-600">Modern personal detail and password flows</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Join a Live Class</h3>
                <p className="text-slate-600">Onboarding content integration with class booking</p>
              </div>
            </div>
          </div>
        </section>

        {/* UX Research & Testing */}
        <section className="mb-16">
          <div className="border-l-4 border-orange-500 pl-8 mb-8">
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">🔎 UX Research &amp; Testing</h2>
            <p className="text-lg text-slate-600 mb-6">
              We conducted detailed usability testing on key flows like "Invite a New User." We learned that users struggled with CTA visibility, form feedback, and clarity on role-based permissions. These insights led to:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-slate-600">Real-time inline validation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-slate-600">Streamlined invite steps with confirmation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-slate-600">Clear product/seat assignment feedback</span>
              </li>
            </ul>
            <p className="text-lg text-slate-600 mb-4">Research methods included:</p>
            <ul className="space-y-2 text-slate-600">
              <li>• Hotjar behavior tracking</li>
              <li>• Session observation</li>
              <li>• Live walkthroughs with internal stakeholders</li>
            </ul>
          </div>
        </section>

        {/* Mobile Responsiveness */}
        <section className="mb-16">
          <div className="border-l-4 border-teal-500 pl-8 mb-8">
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">🖥 Mobile Responsiveness</h2>
            <p className="text-lg text-slate-600 mb-6">
              While not a mobile-first project, all designs were created with mobile responsiveness in mind. Layouts used a 390px breakpoint and stacked content gracefully for smaller screens, following Apple HIG + Material Design specs.
            </p>
          </div>
        </section>

        {/* Outcome */}
        <section className="mb-16">
          <div className="border-l-4 border-emerald-500 pl-8 mb-8">
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">📈 Outcome</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span className="text-lg text-slate-600">Reduced user confusion around subscriptions, roles, and company settings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span className="text-lg text-slate-600">Provided a single place to manage everything (vs. scattered product-specific settings)</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span className="text-lg text-slate-600">Set the foundation for "Seller 365" bundle + streamlined payment processes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span className="text-lg text-slate-600">Rolled out a personalized dashboard based on seller type (e.g., Arbitrage, Private Label)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What I Learned */}
        <section className="mb-16">
          <div className="border-l-4 border-yellow-500 pl-8 mb-8">
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">💡 What I Learned</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-slate-600">Cross-product admin and billing logic is a unique UX challenge — clarity is everything</span>
              </li>
              <li className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-slate-600">Seat-based logic needs strong visual cues and progressive disclosure</span>
              </li>
              <li className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-slate-600">Admin onboarding and permission handling must be built around trust and flexibility</span>
              </li>
            </ul>
          </div>
        </section>

        {/* What's Next */}
        <section className="mb-16">
          <div className="border-l-4 border-indigo-500 pl-8 mb-8">
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">🔁 What's Next</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-slate-600">Support mobile-first onboarding for sellers using TA, ScoutIQ, and InventoryLab</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-slate-600">Add homepage personalization using content cards and coaching tools</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-slate-600">Migrate legacy users into unified role & billing systems</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Project Showcase */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-slate-900 mb-8">Project Showcase</h2>
          <ProjectCarousel 
            images={projectImages}
            onImageClick={openImageModal}
          />
        </section>

        {/* CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">💬 Let's build better experiences</h3>
            <Button 
              onClick={() => window.open('https://www.linkedin.com/in/pranav-raval-2671753a/', '_blank')}
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Pranav Raval
            </Button>
          </div>
        </section>

        {/* Image Modal */}
        <Dialog open={selectedImageIndex !== null} onOpenChange={closeImageModal}>
          <DialogContent className="max-w-[95vw] w-[95vw] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] lg:max-w-[70vw] lg:w-[70vw] max-h-[90vh] h-auto min-h-[70vh] p-0 overflow-hidden">
            <DialogTitle className="sr-only">
              {selectedImageIndex !== null ? projectImages[selectedImageIndex].alt : ''}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {selectedImageIndex !== null ? projectImages[selectedImageIndex].caption : ''}
            </DialogDescription>
            <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-white/95 hover:bg-white p-2 shadow-lg transition-all duration-200">
              <X className="h-5 w-5 text-slate-700" />
              <span className="sr-only">Close</span>
            </DialogClose>
            {selectedImageIndex !== null && (
              <div className="relative w-full h-full bg-white">
                <div className="h-full p-6 flex flex-col">
                  <div className="flex-1 flex items-center justify-center min-h-0">
                    <img 
                      src={projectImages[selectedImageIndex].src} 
                      alt={projectImages[selectedImageIndex].alt}
                      className="max-w-full max-h-full object-contain w-auto h-auto"
                      style={{ maxHeight: 'calc(90vh - 120px)' }}
                    />
                  </div>
                  <div className="mt-4 text-center flex-shrink-0">
                    <p className="text-slate-700 text-base leading-relaxed max-w-4xl mx-auto">
                      {projectImages[selectedImageIndex].caption}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}