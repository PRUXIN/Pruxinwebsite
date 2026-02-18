import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogClose, DialogTitle, DialogDescription } from './ui/dialog';
import ProjectCarousel from './ProjectCarousel';
import { ExternalLink, CheckCircle, Circle, Users, CreditCard, Shield, Target, X } from 'lucide-react';
import agencyPortalImage from 'figma:asset/39bbb16d1f913fbb272604a03289fcbe744062e5.png';

interface AgencyProjectDetailProps {
  onBack: () => void;
}

export default function AgencyProjectDetail({ onBack }: AgencyProjectDetailProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const projectImages = [
    {
      src: agencyPortalImage,
      alt: "Threecolts Agency Portal - B2B SaaS Management Platform",
      caption: "Agency Portal Dashboard: Comprehensive B2B platform enabling agencies to centrally manage client accounts, billing, and user permissions across the entire Threecolts product suite"
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
      <div className="max-w-5xl mx-auto px-8 py-12 pt-16">

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Centralizing B2B SaaS Management for Agencies
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-8 text-slate-600">
            <Badge variant="secondary" className="bg-slate-200 text-slate-700">
              Product Designer & UX Strategist
            </Badge>
            <span>2024-2025</span>
            <span className="font-semibold text-slate-800">Threecolts Agency Portal</span>
            <span className="text-purple-600">B2B SaaS Platform</span>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">💼 Project Overview</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-slate-600 mb-6">
                The Threecolts Agency Portal is a B2B platform that enables agencies to onboard, manage, and bill their clients across multiple SaaS tools under the Threecolts product suite. It empowers agencies to act as both product distributors and account managers while seamlessly managing permissions, invoices, and user access — all in one place.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://agency.threecolts.com', '_blank')}
                  className="text-slate-600 hover:text-slate-900"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  agency.threecolts.com
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">🎯 My Role</h2>
          <Card>
            <CardContent className="p-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                  <span>Spearheaded the end-to-end UX for the MVP</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span>Created unified user flows based on real scenarios across Figma and Jamboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Defined modular layouts in collaboration with engineering and product</span>
                </li>
                <li className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                  <span>Consolidated billing, user permissions, and client management into a coherent system</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">🧭 Problem</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-slate-600 mb-6">
                Agencies using Threecolts lacked a centralized platform to manage their client accounts, billing, and access — resulting in fragmented workflows, unclear account ownership, and billing confusion.
              </p>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Challenges:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-red-500 mt-2 flex-shrink-0" />
                  <div>No single place to manage multiple clients and products</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-orange-500 mt-2 flex-shrink-0" />
                  <div>Confusing referral vs. invited user flows</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-yellow-500 mt-2 flex-shrink-0" />
                  <div>Billing complexity with multiple ownership models (agency-pays vs. client-pays)</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-blue-500 mt-2 flex-shrink-0" />
                  <div>No scalable way to manage roles, invoices, or account permissions</div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">💡 Solution</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-slate-600 mb-6">
                We built an MVP Agency Portal with the following core pillars:
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">1. Agency Account & User Management</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-3">
                      <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                      <div><strong>Invitation-based registration</strong> — No self-sign-up. Only 3C Admins (via BoB) can onboard an agency securely</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Circle className="w-2 h-2 text-blue-500 mt-2 flex-shrink-0" />
                      <div><strong>Role-based access</strong> — Agency owners can add Admins or regular users, with configurable permissions</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Circle className="w-2 h-2 text-purple-500 mt-2 flex-shrink-0" />
                      <div><strong>Security features</strong> — Two-factor authentication, password policies, and secure reset flows</div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">2. Client Management</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-3">
                      <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                      <div>Create client profiles and invite client users</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Circle className="w-2 h-2 text-blue-500 mt-2 flex-shrink-0" />
                      <div>View/edit client metadata, tag, and categorize clients</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Circle className="w-2 h-2 text-purple-500 mt-2 flex-shrink-0" />
                      <div>Search and filter system supports scalable agency growth</div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">3. Flexible Billing System</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-3">
                      <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                      <div><strong>Universal payment method</strong> — Agencies manage multiple payment methods per client or product</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Circle className="w-2 h-2 text-blue-500 mt-2 flex-shrink-0" />
                      <div><strong>Monthly plan</strong> — Dynamic billing based on active users/licenses</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Circle className="w-2 h-2 text-purple-500 mt-2 flex-shrink-0" />
                      <div><strong>Annual plan</strong> — Fixed-term billing with prorated license addition</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Circle className="w-2 h-2 text-indigo-500 mt-2 flex-shrink-0" />
                      <div><strong>Granular invoices</strong> — Breakdowns by product, account, and user</div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">4. Referral vs Invite Flows</h3>
                  <p className="text-slate-600 mb-4">We created three distinct client acquisition paths:</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 text-center bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-slate-900 mb-1">Referral Flow</h4>
                      <p className="text-sm text-slate-600">Agency has no access, earns commission</p>
                    </div>
                    <div className="p-4 text-center bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-slate-900 mb-1">Invite & Pay</h4>
                      <p className="text-sm text-slate-600">Agency manages & pays</p>
                    </div>
                    <div className="p-4 text-center bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-slate-900 mb-1">Invite & Manage</h4>
                      <p className="text-sm text-slate-600">Agency manages, client pays</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">🎨 Design Strategy</h2>
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">🎯 UX Priorities:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div><strong>Clarity over control</strong> — minimize friction in complex billing/user scenarios</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-blue-500 mt-2 flex-shrink-0" />
                  <div><strong>Familiar layout foundation</strong> (based on Manager v1/v2) to reduce learning curve</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-purple-500 mt-2 flex-shrink-0" />
                  <div><strong>Modular UI structure</strong> for future scalability (product cards, graphs, filters)</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-indigo-500 mt-2 flex-shrink-0" />
                  <div><strong>Consistent patterns</strong> across existing portals (Manager, BoB, Checkout)</div>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">🧩 Key Flows Visualized:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div>Invite scenarios (Org Admin vs Regular User)</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-blue-500 mt-2 flex-shrink-0" />
                  <div>Payment method assignment workflows</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-purple-500 mt-2 flex-shrink-0" />
                  <div>Client referral tracking systems</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-indigo-500 mt-2 flex-shrink-0" />
                  <div>Dashboard filtering by client/product</div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">🖼️ Agency Portal Dashboard</h2>
          <Card>
            <CardContent className="p-8">
              <div className="mb-4 flex justify-center">
                <img
                  src={agencyPortalImage}
                  alt="Threecolts Agency Portal Dashboard showing metrics, client management, and billing overview"
                  className="max-w-full h-auto rounded-lg shadow-lg object-contain"
                  style={{ maxHeight: '70vh' }}
                />
              </div>
              <p className="text-center text-slate-500 text-sm max-w-2xl mx-auto">
                Agency Portal Dashboard — Centralized metrics and client management interface with modular layout and comprehensive filtering capabilities
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">📈 Outcome</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-slate-600 mb-6">
                The MVP build is scoped for delivery at agency.threecolts.com with:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Role-based agency onboarding</strong> with secure invitation-only access
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Modular dashboard</strong> with filters and comprehensive metrics
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Unified referral + invite workflows</strong> for flexible client acquisition
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Multi-product checkout flow</strong> per client with flexible billing models
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Comprehensive client & invoice management</strong> system
                  </div>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-slate-700 text-center font-medium">
                  🎯 <strong>Impact:</strong> Positioned to reduce agency onboarding effort and support scalable client growth
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">💡 What I Learned</h2>
          <Card>
            <CardContent className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-purple-500 mt-2 flex-shrink-0" />
                  <div>
                    <strong>Indirect relationships complexity:</strong> Designing for indirect user relationships (agency → client → product) requires extreme clarity and language precision
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-blue-500 mt-2 flex-shrink-0" />
                  <div>
                    <strong>Real-world billing logic:</strong> It's vital to mirror real-world billing logic in UX — e.g., delayed invoices, annual plans, permission gates
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div>
                    <strong>Ownership visualization:</strong> Visualizing "who owns what" in shared-access models (e.g., referral vs agency-managed) is critical to reduce support overhead
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">🔁 Next Steps</h2>
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Post-MVP Enhancements:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div>Live billing visibility & webhook alerts</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-blue-500 mt-2 flex-shrink-0" />
                  <div>Smart invite analytics and performance tracking</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-purple-500 mt-2 flex-shrink-0" />
                  <div>Granular permission mapping (per product)</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-indigo-500 mt-2 flex-shrink-0" />
                  <div>Mobile responsive version for on-the-go agencies</div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}