import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogClose, DialogTitle, DialogDescription } from './ui/dialog';
import ProjectCarousel from './ProjectCarousel';
import { ExternalLink, CheckCircle, Circle, X, Linkedin } from 'lucide-react';
import careersPageDesktop from 'figma:asset/1b101cb5d03dc02896c1ee0bdaae3ddb9523ded8.png';
import homepageDesktop from 'figma:asset/6648bf6fad5c4ede32d03c369a1f7472f09fee95.png';
import homepageResponsive from 'figma:asset/4a2403c3feecf87b78b2631f54a0dbaf1753a399.png';

interface ProjectDetailProps {
  onBack: () => void;
}

export default function ProjectDetail({ onBack }: ProjectDetailProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const projectImages = [
    {
      src: careersPageDesktop,
      alt: "Threecolts Careers Page - Desktop and Mobile Responsive Design",
      caption: "Careers Page Redesign: Modern responsive design showcasing company culture with 'Join us if you Shape the future of products' messaging, featuring employee testimonials and streamlined application process"
    },
    {
      src: homepageDesktop,
      alt: "Threecolts Homepage - Desktop and Mobile Responsive Design",
      caption: "Homepage Redesign: Seller-centric experience with 'Selling online is expensive, so we're fighting it' value proposition, showcasing unified product suite with responsive mobile-first design"
    },
    {
      src: homepageResponsive,
      alt: "Threecolts Homepage - Cross-Device Responsive Design",
      caption: "Homepage Cross-Device Experience: Desktop and mobile responsive design demonstrating the 'Selling online is expensive. We're fighting back.' messaging with Seller 365 product suite, trusted by major brands including L'OREAL, Samsung, Quest, and Keurig"
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
            Designing a Seller-Centric Experience for Threecolts.com
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-8 text-slate-600">
            <Badge variant="secondary" className="bg-slate-200 text-slate-700">
              UX Designer
            </Badge>
            <span>Q2–Q3 2025</span>
            <span className="font-semibold text-slate-800">Threecolts</span>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">🧭 Project Overview</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-slate-600 mb-6">
                Threecolts offers a comprehensive suite of tools aimed at empowering e-commerce sellers to optimize their operations and profitability. Recognizing the need to enhance the user experience, particularly for mobile users, I led the initiative to redesign the main website and careers page. The objective was to craft a coherent, intuitive journey that resonates with sellers and potential team members alike.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://threecolts.com', '_blank')}
                  className="text-slate-600 hover:text-slate-900"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  threecolts.com
                </Button>

              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">🎯 Objectives</h2>
          <Card>
            <CardContent className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Streamline the seller journey:</strong> Ensure that sellers can effortlessly understand and access the tools relevant to their needs.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Enhance mobile usability:</strong> Redesign the website with a mobile-first approach to cater to the growing number of users accessing the site via mobile devices.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Revamp the careers page:</strong> Create an engaging and informative careers section that reflects Threecolts' culture and attracts top talent.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">🧪 Research & Discovery</h2>
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Methods:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div><strong>Stakeholder Interviews:</strong> Engaged with product managers, marketing teams, and current users to gather insights.</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div><strong>Competitive Analysis:</strong> Studied competitor websites to identify industry standards and opportunities for differentiation.</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div><strong>User Surveys:</strong> Collected feedback from existing sellers to understand pain points and preferences.</div>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Findings:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div>Sellers desired a clear, step-by-step guide to navigate through Threecolts' suite of tools.</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div>Mobile users faced challenges with navigation and content readability.</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div>The existing careers page lacked personalization and failed to convey the company's culture effectively.</div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">🧠 Strategy & Planning</h2>
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Seller Journey Mapping:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div><strong>Entry Point:</strong> Homepage highlighting the value proposition of Seller 365.</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div><strong>Exploration:</strong> Detailed pages for each tool, explaining features and benefits.</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div><strong>Conversion:</strong> Clear CTAs directing users to sign up or request demos.</div>
                </li>
              </ul>

              <div className="flex flex-wrap gap-3 mb-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://threecolts.com', '_blank')}
                  className="text-slate-600 hover:text-slate-900"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  threecolts.com
                </Button>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">Mobile Optimization:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div>Implemented responsive design principles to ensure consistency across devices.</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div>Prioritized content hierarchy for smaller screens.</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div>Enhanced touch targets and simplified navigation menus.</div>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">Careers Page Redesign:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div>Introduced employee testimonials and day-in-the-life sections.</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div>Highlighted company values, benefits, and remote work culture.</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div>Streamlined the application process with intuitive forms.</div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">🎨 Design Execution</h2>
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Tools Used:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div><strong>Figma:</strong> For wireframing, prototyping, and design iterations.</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div><strong>FigJam:</strong> Collaborative sessions with stakeholders for feedback and brainstorming.</div>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">Design Highlights:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div>A cohesive visual language aligning with Threecolts' brand identity.</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div>Interactive elements guiding users through the seller journey.</div>
                </li>
                <li className="flex items-start gap-3">
                  <Circle className="w-2 h-2 text-green-500 mt-2 flex-shrink-0" />
                  <div>Accessible design ensuring usability for all users.</div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">📈 Outcomes & Impact</h2>
          <Card>
            <CardContent className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Increased Engagement:</strong> Post-launch analytics showed a 25% increase in mobile user engagement.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Improved Conversion Rates:</strong> Simplified seller journey led to a 15% uptick in tool sign-ups.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Enhanced Talent Acquisition:</strong> Revamped careers page resulted in a 30% increase in job applications.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">🔍 Reflections</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-slate-600">
                This project underscored the importance of user-centric design, especially in complex ecosystems like e-commerce tool suites. By focusing on the seller's perspective and ensuring mobile accessibility, we created a more intuitive and engaging experience that aligns with Threecolts' mission to empower sellers.
              </p>
            </CardContent>
          </Card>
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