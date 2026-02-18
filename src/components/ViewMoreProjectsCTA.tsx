import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface ViewMoreProjectsCTAProps {
  onViewMoreProjects: () => void;
}

export default function ViewMoreProjectsCTA({ onViewMoreProjects }: ViewMoreProjectsCTAProps) {
  return (
    <section className="py-24 px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Want to see more of the projects I've worked on?
        </h2>
        
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Explore my complete portfolio including enterprise software, mobile apps, and marketing websites.
        </p>
        
        <Button
          onClick={onViewMoreProjects}
          size="lg"
          className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          View More Projects
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}