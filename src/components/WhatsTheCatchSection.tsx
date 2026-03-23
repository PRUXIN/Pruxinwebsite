import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function WhatsTheCatchSection() {
  return (
    <section 
      className="py-[160px] px-6 overflow-hidden relative"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F9FF 100%)' }}
    >
      {/* Decorative Orb */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-30 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, rgba(0, 102, 255, 0.1) 70%, transparent 100%)'
        }}
      />

      <div className="max-w-[1152px] mx-auto text-center relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="type-display-small text-[var(--color-black)] mb-20"
        >
          What's the catch?
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card relative max-w-[960px] mx-auto rounded-[32px] p-8 md:p-16 border border-[rgba(0,0,0,0.06)] shadow-medium"
          style={{ 
            background: 'rgba(255, 255, 255, 0.8)', 
            backdropFilter: 'blur(40px)',
          }}
        >
          {/* Subtle purple tint overlay */}
          <div className="absolute inset-0 bg-[rgba(124,58,237,0.03)] pointer-events-none rounded-[32px]" />

          <div className="relative z-10">
            <h3 className="type-display-large text-[var(--color-black)] mb-16">
              None.
            </h3>

            <div className="space-y-8 max-w-[768px] mx-auto">
              <p className="type-body-medium text-[var(--color-gray-600)]">
                I design and develop your website — free. You get the code. Host it yourself. Pay nothing.
              </p>
              <p className="type-body-medium text-[var(--color-gray-600)]">
                Want me to handle hosting? £25/month. That covers small updates too — text changes, image swaps.
              </p>
              <p className="type-body-medium text-[var(--color-gray-600)]">
                New features or extra pages? Quoted separately.
              </p>
            </div>

            <div className="mt-12">
              <a 
                href="https://calendly.com/pruxin/30min"
                className="inline-flex items-center gap-1 text-[length:var(--text-md)] font-medium text-[var(--color-electric-blue)] hover:opacity-80 transition-opacity"
              >
                Fair enough? Let's talk <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}