import React from 'react';
import { motion } from 'motion/react';

export default function FinalCTASection() {
  return (
    <section 
      className="py-[160px] px-6 text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F3FF 100%)' }}
    >
      {/* Background Mesh */}
      <div 
         className="absolute inset-0 opacity-30 pointer-events-none"
         style={{
             background: 'radial-gradient(circle at 50% 100%, rgba(124, 58, 237, 0.1) 0%, transparent 60%)',
         }}
      />

      <div className="max-w-[896px] mx-auto relative z-10">
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="type-caption uppercase text-[var(--color-gray-500)] tracking-widest mb-8"
        >
          Ready?
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="type-display-medium text-[var(--color-black)] mb-6"
        >
          30 minutes.<br />
          No pitch. No pressure.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="type-headline-small text-[var(--color-gray-600)] mb-12"
        >
          If we're a fit, your website ships tomorrow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="https://calendly.com/pruxin/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-[56px] px-12 bg-[var(--color-black)] text-white text-[length:var(--text-md)] font-medium rounded-full hover:bg-[#1A1A1A] hover:scale-[1.01] transition-all duration-200 shadow-strong hover:shadow-heavy"
          >
            Book a Call
          </a>
        </motion.div>

      </div>
    </section>
  );
}