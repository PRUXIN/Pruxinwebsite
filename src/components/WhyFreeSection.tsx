import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function WhyFreeSection() {
  return (
    <section className="py-[160px] px-6 bg-[var(--color-gray-50)]">
      <div className="max-w-[1152px] mx-auto">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="type-display-small text-[var(--color-black)] mb-20 text-center"
        >
          Why would I do this for free?
        </motion.h2>

        <div className="grid md:grid-cols-[60%_40%] gap-8 items-stretch">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[32px] p-8 md:p-16 border border-[rgba(0,0,0,0.06)] shadow-medium bg-white/90 backdrop-blur-[40px] flex flex-col justify-center h-full"
          >
            <div className="space-y-8">
              <p className="type-body-medium text-[var(--color-gray-600)]">
                I've spent 8+ years building products for SaaS companies, marketplaces, and platforms with complex compliance requirements.
              </p>
              <p className="type-body-medium text-[var(--color-gray-600)]">
                Most small businesses can't afford that. And they shouldn't have to.
              </p>
              <p className="type-body-medium text-[var(--color-gray-600)]">
                So I built a faster way — AI-assisted design, clean code, delivered in a day.
              </p>
              <p className="type-body-medium text-[var(--color-gray-800)] font-medium">
                The free website gets you online. If you grow and need more, I'm here. If not, take the site and go. No strings.
              </p>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative rounded-[32px] overflow-hidden shadow-medium min-h-[400px]"
          >
             <ImageWithFallback 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
                alt="Developer coding"
                className="w-full h-full object-cover"
             />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
