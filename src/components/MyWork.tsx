import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Import existing project images
import jurairHeroImage from 'figma:asset/210ddd7291da17767f5a49e7c7dfda13501ad354.png';
import usersInterface from 'figma:asset/82fcee449bd2fffbe283c3ae2623fda8955cf920.png';
import threecoltsWebsiteImage from 'figma:asset/39bace02fb1868be5ad2256bc8d0099487c5ec10.png';
import agencyPortalImage from 'figma:asset/39bbb16d1f913fbb272604a03289fcbe744062e5.png';
import arachnysNavigatorImage from 'figma:asset/ab3ce92244bbcd90e0cb1b8e3427139fced52741.png';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  timeline: string;
  category: string;
  tags: string[];
  image: string;
  links?: {
    external?: string;
    prototype?: string;
  };
  stats: Array<{
    label: string;
    value: string;
  }>;
  featured?: boolean;
  onViewDetails: () => void;
}

// Automatic categorization function
const categorizeProject = (project: Project): 'AI Implementation' | 'UX/UI Design' => {
  const searchText = `${project.title} ${project.subtitle} ${project.description} ${project.role} ${project.category} ${project.tags.join(' ')}`.toLowerCase();
  
  const aiKeywords = [
    'ai implementation', 'ai-powered', 'ai tools', 'ai-assisted', 'ai-generated', 
    'prompt engineering', 'claude', 'chatgpt', 'automation', 'ai prompting',
    'strategic ai', 'workflow automation', 'ai development', 'ai generalist',
    'ai accelerated', 'ai workflow'
  ];
  
  const hasAiTerms = aiKeywords.some(keyword => searchText.includes(keyword));
  return hasAiTerms ? 'AI Implementation' : 'UX/UI Design';
};

interface MyWorkProps {
  onProjectSelect: (projectId: string) => void;
}

export default function MyWork({ onProjectSelect }: MyWorkProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const allProjects: Project[] = [
    {
      id: 'jurair-project',
      title: "JurAir - Zonal Heating Website",
      subtitle: "Lead Generation Website",
      description: "Designed and developed a complete lead generation website for a UK-based zonal heating company, featuring an interactive 8-step quote calculator, custom AI-generated imagery, and Supabase backend integration.",
      role: "UX/UI Designer & No-Code Developer",
      timeline: "10+ weeks • 2024",
      category: "Web Development",
      tags: ["AI-Generated Imagery", "Lead Generation", "Full-Stack"],
      image: jurairHeroImage,
      links: {
        external: "https://www.jurair.co.uk/"
      },
      stats: [
        { label: "Development Time", value: "70.5 hrs" },
        { label: "Conversion Steps", value: "8" },
        { label: "Custom Images", value: "15+" }
      ],
      onViewDetails: () => onProjectSelect('jurair-project')
    },
    {
      id: 'hub-project',
      title: "Threecolts Hub Rebuild",
      subtitle: "Multi-Product Dashboard System",
      description: "Complete rebuild of the Threecolts Hub dashboard, consolidating 15+ Amazon seller tools into a unified interface. Led the design system evolution and implemented data-driven layouts that improved user task completion by 40%.",
      role: "Lead Product Designer",
      timeline: "2023-2024",
      category: "Product Design",
      tags: ["B2B", "Enterprise Software", "Dashboard"],
      image: usersInterface,
      links: {
        external: "https://hub.threecolts.com"
      },
      stats: [
        { label: "Products Unified", value: "15+" },
        { label: "User Sessions", value: "+40%" },
        { label: "Task Completion", value: "+40%" }
      ],
      onViewDetails: () => onProjectSelect('hub-project')
    },
    {
      id: 'website-project',
      title: "Threecolts.com Redesign",
      subtitle: "Marketing Website Overhaul",
      description: "Complete redesign of the Threecolts marketing website, focusing on seller-centric messaging and improved conversion funnels. Implemented A/B testing framework and achieved 65% increase in demo requests.",
      role: "Lead Designer",
      timeline: "2023",
      category: "Marketing Website",
      tags: ["B2B", "Marketing Website", "A/B Testing"],
      image: threecoltsWebsiteImage,
      links: {
        external: "https://threecolts.com"
      },
      stats: [
        { label: "Conversion Rate", value: "+65%" },
        { label: "Page Speed", value: "+30%" },
        { label: "Demo Requests", value: "+85%" }
      ],
      onViewDetails: () => onProjectSelect('website-project')
    },
    {
      id: 'agency-project',
      title: "Threecolts Agency Portal",
      subtitle: "B2B SaaS Management Platform",
      description: "Designed and built a comprehensive B2B platform enabling agencies to centrally manage client accounts, billing, and user permissions across the entire Threecolts product suite. The portal streamlines complex multi-tenant workflows with flexible billing models and role-based access control.",
      role: "Product Designer & UX Strategist",
      timeline: "2024-2025",
      category: "Product Design",
      tags: ["B2B", "Enterprise Software", "Dashboard"],
      image: agencyPortalImage,
      links: {
        external: "https://agency.threecolts.com"
      },
      stats: [
        { label: "Client Workflows", value: "12+" },
        { label: "Billing Models", value: "3" },
        { label: "User Roles", value: "6" }
      ],
      onViewDetails: () => onProjectSelect('agency-project')
    },
    {
      id: 'arachnys-project',
      title: "Arachnys Navigator",
      subtitle: "Entity-Centric Reporting System",
      description: "Led UX integration between Arachnys' legacy Navigator system and modern Flow platform, creating entity-aware reporting that unified fragmented data across investigative and risk assessment workflows for financial institutions.",
      role: "UX/UI Designer",
      timeline: "Q1 2020",
      category: "Product Design",
      tags: ["Enterprise Software", "B2B", "Dashboard"],
      image: arachnysNavigatorImage,
      links: {
        external: "https://arachnys.com"
      },
      stats: [
        { label: "Systems Unified", value: "2" },
        { label: "User Workflows", value: "8" },
        { label: "Data Integrity", value: "+85%" }
      ],
      onViewDetails: () => onProjectSelect('arachnys-project')
    }
  ];

  // Create filter categories based on automatic categorization
  const filterCategories = ['All', 'AI Implementation', 'UX/UI Design'];
  
  const filteredProjects = selectedFilter === 'All' 
    ? allProjects 
    : allProjects.filter(project => categorizeProject(project) === selectedFilter);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-6 leading-tight">
            My Work
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A collection of selected UX/UI case studies and product design projects.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Filter by Category</h2>
            <p className="text-slate-600">Projects are automatically categorized based on their content and technologies used</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {filterCategories.map((category) => {
              const projectCount = category === 'All' 
                ? allProjects.length 
                : allProjects.filter(project => categorizeProject(project) === category).length;
              
              return (
                <Button
                  key={category}
                  variant={selectedFilter === category ? "default" : "outline"}
                  size="lg"
                  onClick={() => setSelectedFilter(category)}
                  className={`rounded-full px-6 py-3 text-base transition-all duration-300 transform hover:scale-105 ${
                    selectedFilter === category
                      ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg'
                      : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50 hover:border-slate-400 hover:shadow-md'
                  }`}
                >
                  {category}
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                    selectedFilter === category
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 text-slate-500'
                  }`}>
                    {projectCount}
                  </span>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <p className="text-center text-slate-600">
              Showing {filteredProjects.length} of {allProjects.length} projects
              {selectedFilter !== 'All' && ` in "${selectedFilter}"`}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white overflow-hidden rounded-2xl animate-in fade-in-0 zoom-in-95"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={project.onViewDetails}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  {project.image.startsWith('http') ? (
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
                <CardContent className="p-6">
                  {project.featured && (
                    <div className="mb-3">
                      <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 text-xs">
                        ⭐ Featured Project
                      </Badge>
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-500 mb-2">{project.subtitle}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors flex-shrink-0" />
                  </div>
                  
                  <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge 
                      className={`text-xs ${
                        categorizeProject(project) === 'AI Implementation'
                          ? 'bg-purple-100 text-purple-700 border-purple-200'
                          : 'bg-blue-100 text-blue-700 border-blue-200'
                      }`}
                    >
                      {categorizeProject(project)}
                    </Badge>
                    {project.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-slate-100 text-slate-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{project.role}</span>
                    <span>{project.timeline}</span>
                  </div>
                  
                  <div className="flex justify-between mt-4 pt-4 border-t border-slate-100">
                    {project.stats.slice(0, 2).map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="font-bold text-slate-900 text-sm">{stat.value}</div>
                        <div className="text-xs text-slate-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}