import React from 'react';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

export default function WhoThisIsForSection() {
  const checklistItems = [
    "You run a small business — salon, café, trade, clinic, shop, consultancy",
    "You want a website that looks professional, not a DIY template",
    "You don't want to wait weeks or spend thousands",
    "You want to own your site, not rent it from a page builder"
  ];

  return (
    <section className="py-24 bg-[#F5F5F7] text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
            This is for you if…
          </h2>

          <ul className="space-y-6 mb-12">
            {checklistItems.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent)]/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-[var(--accent)]" strokeWidth={3} />
                </div>
                <span className="text-xl md:text-2xl leading-relaxed text-gray-900">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-xl md:text-2xl font-medium mb-10 text-gray-900">
            If that's you, let's talk.
          </p>

          <Button 
            className="px-8 py-4 text-base font-medium bg-[var(--accent)] hover:bg-[#0077ED] text-white rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            asChild
          >
            <a href="https://calendly.com/pruxin/30min" target="_blank" rel="noopener noreferrer">
              Book a Call
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
