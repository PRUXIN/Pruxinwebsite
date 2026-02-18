import React from 'react';
import { Button } from './ui/button';

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 tracking-tight">
          Three steps. One day. Done.
        </h2>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-20">
          {/* Step 1 */}
          <div className="flex flex-col items-start space-y-4">
            <span className="text-6xl font-bold text-[var(--accent)] opacity-50 font-mono">01</span>
            <h3 className="text-2xl font-bold">We talk</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              30-minute call. Tell me about your business. I'll ask a few questions. No sales pitch.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-start space-y-4">
            <span className="text-6xl font-bold text-[var(--accent)] opacity-50 font-mono">02</span>
            <h3 className="text-2xl font-bold">You say yes</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Sign a simple agreement. I start the same day.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-start space-y-4">
            <span className="text-6xl font-bold text-[var(--accent)] opacity-50 font-mono">03</span>
            <h3 className="text-2xl font-bold">Website delivered</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Within 24 hours, your site is live-ready. Clean code. Mobile-friendly. Yours to keep.
            </p>
          </div>
        </div>

        <div className="text-center">
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
