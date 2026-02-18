import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  role: string;
  timeline: string;
  category: string;
  image: string;
  links?: {
    live?: string;
    external?: string;
  };
  stats?: {
    label: string;
    value: string;
  }[];
  featured?: boolean;
  onViewDetails: () => void;
}

interface ProjectShowcaseProps {
  project: Project;
  isReversed?: boolean;
}

export default function ProjectShowcase({ project, isReversed = false }: ProjectShowcaseProps) {
  return (
    <section className="min-h-screen bg-white flex items-center py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Content */}
          <div className={`space-y-8 ${isReversed ? 'lg:col-start-2' : ''}`}>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                {project.featured && (
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
                    ⭐ Featured
                  </Badge>
                )}
                <Badge className="bg-black text-white">
                  {project.category}
                </Badge>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight">
                {project.title}
              </h2>
              
              <p className="text-xl text-gray-600 font-medium">
                {project.subtitle}
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-black">Role:</span>
                  <span className="text-gray-600">{project.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-black">Timeline:</span>
                  <span className="text-gray-600">{project.timeline}</span>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            {project.stats && (
              <div className="grid grid-cols-3 gap-6">
                {project.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-black mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 hover:text-white px-8"
                onClick={project.onViewDetails}
              >
                View Case Study
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              
              {project.links?.live && (
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-black text-black hover:bg-black hover:text-white px-8"
                  asChild
                >
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    Visit Site
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              )}
              
              {project.links?.external && (
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-black text-black hover:bg-black hover:text-white px-8"
                  asChild
                >
                  <a href={project.links.external} target="_blank" rel="noopener noreferrer">
                    {project.title.includes('Hub') ? 'View Hub' : 
                     project.title.includes('Arachnys') ? 'View Company' : 'Visit Site'}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          
          {/* Image */}
          <div className={`${isReversed ? 'lg:col-start-1' : ''}`}>
            <Card className="overflow-hidden border-0">
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
