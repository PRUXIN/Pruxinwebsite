import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogClose, DialogTitle, DialogDescription } from './ui/dialog';
import ProjectCarousel from './ProjectCarousel';
import { ArrowLeft, ExternalLink, Calculator, Database, Smartphone, Globe, Zap, Users, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Import JurAir project images
import jurairHeroImage from 'figma:asset/210ddd7291da17767f5a49e7c7dfda13501ad354.png';
import jurairCalculatorImage from 'figma:asset/35086c761a449d168a877c12676786133f86cc55.png';
import jurairConfigImage from 'figma:asset/9a43b22ede26fc432748e089d29481e88a8c34a6.png';

interface JurAirProjectDetailProps {
  onBack: () => void;
}

export default function JurAirProjectDetail({ onBack }: JurAirProjectDetailProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const projectImages = [
    {
      src: jurairCalculatorImage,
      alt: "Smart Heating Calculator - Get accurate savings based on your current heating system",
      caption: "Smart Heating Calculator: Interactive 8-step calculator with conditional logic for UK households to get accurate savings estimates and system recommendations"
    },
    {
      src: jurairHeroImage,
      alt: "JurAir hero section featuring air-to-air pumps with Smart Climate Control messaging and interactive heating/cooling flow visualization",
      caption: "Hero Section: Air-to-air pumps showcase with Smart Climate Control messaging and interactive heating/cooling flow visualization"
    },
    {
      src: jurairConfigImage,
      alt: "JurAir Zonal System Configuration Modal - Property type selection",
      caption: "Zonal System Configuration: Property type selection modal for personalized heating solutions"
    }
  ];

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImageIndex(null);
  };

  const deliverables = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Responsive Website",
      description: "Hero section with video background and mobile-first design"
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Smart Heating Calculator",
      description: "8-step interactive calculator with conditional logic"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend Integration",
      description: "Supabase database with UK-specific validation"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Control Interface",
      description: "Room showcase carousel with heating visualizations"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Dynamic Pricing",
      description: "Conditional pricing display and consultation booking"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Lead Generation",
      description: "Complete funnel with analytics and tracking"
    }
  ];

  const challenges = [
    {
      challenge: "Modal window empty space with dynamic content",
      solution: "Implemented flexible height containers using auto-layout principles"
    },
    {
      challenge: "Complex conditional room selection logic",
      solution: "Created dynamic selection system matching user's property specifications"
    },
    {
      challenge: "UK-specific validation requirements",
      solution: "Built custom validation for 11-digit phone numbers and UK postcodes"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        {/* JurAir Brand Gradient Background */}
        <div className="w-full h-full bg-gradient-to-br from-blue-600 via-blue-500 to-red-500"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-200 rounded-full p-3 shadow-lg"
        >
          <ArrowLeft className="w-5 h-5 text-gray-900" />
        </button>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl">
            <Badge className="bg-blue-600 text-white mb-4">
              UX/UI Designer & No-Code Developer
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              JurAir - Zonal Heating Website
            </h1>
            <p className="text-xl text-gray-200 mb-4">
              10+ weeks • 2024
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Figma Make
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Supabase
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                AI Image Generation
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Magic UI
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Project Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Project Overview</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Client</h3>
              <p className="text-slate-600">JurAir Ltd - UK-based zonal heating/cooling systems company</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Challenge</h3>
              <p className="text-slate-600">Create a conversion-focused website with transparent pricing, interactive calculator, and lead capture for zonal AC systems as efficient alternatives to traditional heating</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Solution</h3>
              <p className="text-slate-600">Designed and built a comprehensive website featuring smart heating calculator, conditional pricing logic, UK-specific validation, and full backend integration</p>
            </div>
          </div>
        </section>

        {/* Key Deliverables */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Deliverables</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-blue-600">
                      {item.icon}
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process & Approach */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Process & Approach</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Discovery & Strategy</h3>
              <p className="text-slate-600 leading-relaxed">
                Analyzed UK heating market and gas boiler phase-out regulations, positioning "zonal heating" as key differentiator for energy-efficient home climate control.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Design System</h3>
              <p className="text-slate-600 leading-relaxed">
                Implemented mobile-first approach with 70% screen width forms, Material Icons, and strategic brand colors using blue/red gradient exclusively for primary CTAs.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Development</h3>
              <p className="text-slate-600 leading-relaxed">
                Used Figma Make for rapid prototyping and deployment, integrated Magic UI for smooth animations, and configured Supabase for robust backend functionality.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Content Creation</h3>
              <p className="text-slate-600 leading-relaxed">
                Generated 15+ custom AI images with multiple client revision cycles, creating cohesive visual storytelling for zonal heating benefits across different room types.
              </p>
            </div>
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

        {/* Challenges & Solutions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Challenges & Solutions</h2>
          <div className="space-y-6">
            {challenges.map((item, index) => (
              <Card key={index} className="border-slate-200">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-1/2">
                      <h4 className="font-semibold text-slate-900 mb-2">Challenge</h4>
                      <p className="text-slate-600">{item.challenge}</p>
                    </div>
                    <div className="md:w-1/2">
                      <h4 className="font-semibold text-slate-900 mb-2">Solution</h4>
                      <p className="text-slate-600">{item.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Results & Impact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Results & Impact</h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">70.5</div>
                <div className="text-slate-600">Hours Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
                <div className="text-slate-600">Step Conversion Funnel</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-slate-600">Custom AI Images</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-slate-600">Production Ready</div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
                Delivered a production-ready website that enables JurAir to capture qualified leads through transparent pricing and comprehensive lead generation system, establishing a scalable design system for future growth.
              </p>
            </div>
          </div>
        </section>

        {/* Technologies Used */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Figma Make',
              'Supabase',
              'React',
              'Magic UI (Tailwind)',
              'AI Image Generation',
              'Google Analytics',
              'Google Tag Manager'
            ].map((tech, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* Project CTA */}
        <section className="bg-slate-900 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-semibold mb-4">💬 Let's build better experiences</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Interested in how strategic UX design and rapid prototyping can transform your business? Let's discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Button 
              onClick={() => window.open('https://www.linkedin.com/in/pranav-raval-2671753a/', '_blank')}
              className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </Button>
          </div>
        </section>
      </div>

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <Dialog open={selectedImageIndex !== null} onOpenChange={closeImageModal}>
          <DialogContent className="max-w-[90vw] w-[90vw] max-h-[90vh] p-0 border-0 bg-transparent shadow-none">
            <DialogTitle className="sr-only">
              {projectImages[selectedImageIndex]?.alt}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {projectImages[selectedImageIndex]?.caption}
            </DialogDescription>
            <div className="relative">
              <button
                onClick={closeImageModal}
                className="absolute right-4 top-4 z-50 rounded-full bg-black/50 hover:bg-black/70 p-2 transition-all duration-200"
              >
                <X className="h-6 w-6 text-white" />
                <span className="sr-only">Close</span>
              </button>
              <img
                src={projectImages[selectedImageIndex]?.src}
                alt={projectImages[selectedImageIndex]?.alt}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
              {projectImages[selectedImageIndex]?.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
                  <p className="text-sm">{projectImages[selectedImageIndex]?.caption}</p>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}