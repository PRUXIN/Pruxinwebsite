import React from 'react';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      eyebrow: 'SaaS PRODUCT DESIGN',
      title: 'Products built for clarity',
      description: 'Clean interfaces that reduce cognitive load. Dashboards that tell a story. Flows that make sense from the first click.',
      accent: 'var(--color-electric-blue)',
      bg: 'var(--bg-electric-blue)',
      icon: (
        <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 text-[var(--color-electric-blue)]">
          <rect x="10" y="20" width="40" height="40" rx="8" fill="currentColor" fillOpacity="0.2" />
          <rect x="30" y="10" width="40" height="40" rx="8" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      eyebrow: 'MARKETPLACE PLATFORMS',
      title: 'Build trust into every transaction',
      description: 'Payment verification. Identity checks. Transaction tracking. Review systems. Multi-party payouts. Everything users need to feel safe.',
      accent: 'var(--color-coral-orange)',
      bg: 'var(--bg-coral-orange)',
      icon: (
        <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 text-[var(--color-coral-orange)]">
          <circle cx="25" cy="40" r="15" fill="currentColor" fillOpacity="0.2" />
          <circle cx="55" cy="40" r="15" fill="currentColor" fillOpacity="0.2" />
          <path d="M40 40 L60 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      eyebrow: 'UX AUDITS',
      title: 'Find what\'s slowing users down',
      description: 'Friction analysis. Flow simplification. Click reduction. Support ticket correlation. Actionable recommendations.',
      accent: 'var(--color-lime-green)',
      bg: 'var(--bg-lime-green)',
      icon: (
        <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 text-[var(--color-lime-green)]">
          <circle cx="40" cy="40" r="25" stroke="currentColor" strokeWidth="2" />
          <path d="M58 58 L70 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      )
    },
    {
      eyebrow: 'PRODUCT STRATEGY',
      title: 'Clarity-driven roadmaps',
      description: 'Product ownership. Backlog prioritization. User story mapping. Outcome-focused delivery planning.',
      accent: 'var(--color-vivid-purple)',
      bg: 'var(--bg-vivid-purple)',
      icon: (
        <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 text-[var(--color-vivid-purple)]">
          <rect x="20" y="15" width="40" height="50" rx="4" stroke="currentColor" strokeWidth="2" />
          <path d="M30 30 H50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M30 45 H50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      eyebrow: 'DESIGN SYSTEMS',
      title: 'Consistency at scale',
      description: 'Component libraries. Design tokens. Documentation. Handoff processes that work between design and engineering.',
      accent: 'var(--color-bright-cyan)',
      bg: 'var(--bg-bright-cyan)',
      icon: (
        <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 text-[var(--color-bright-cyan)]">
          <rect x="20" y="20" width="18" height="18" rx="4" fill="currentColor" />
          <rect x="42" y="20" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" />
          <rect x="20" y="42" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" />
          <rect x="42" y="42" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-[128px] bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 mb-24 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="type-display-small text-[var(--color-black)]"
        >
          Other services PRUXIN provides.
        </motion.h2>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-6 no-scrollbar">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-shrink-0 w-[340px] md:w-[380px] snap-start relative rounded-[28px] p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-medium"
            style={{ backgroundColor: service.bg }}
          >
            <div className="mb-6">{service.icon}</div>
            
            <p className="type-label mb-2" style={{ color: service.accent }}>
              {service.eyebrow}
            </p>
            
            <h3 className="type-headline-small text-[var(--color-black)] mb-4">
              {service.title}
            </h3>
            
            <p className="type-body-small text-[var(--color-gray-700)] mb-8">
              {service.description}
            </p>

            <button 
              className="absolute bottom-8 right-8 w-9 h-9 rounded-full bg-white shadow-light flex items-center justify-center hover:shadow-medium transition-shadow"
              aria-label="Expand"
            >
              <Plus size={20} className="text-[var(--color-black)]" />
            </button>
          </motion.div>
        ))}
        {/* Spacer for right padding in scroll view */}
        <div className="w-6 flex-shrink-0" />
      </div>
    </section>
  );
}
