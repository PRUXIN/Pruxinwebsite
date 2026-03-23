import React from 'react';
import { motion } from 'motion/react';

export default function ClientLogosSection() {
  const logos = [
    "Mobisoft", "HokuApps", "Threecolts", "Smaato", "Skills Development Scotland", "Arachnys",
    "Atos", "pitch59", "Natco Global", "Anticasting", "JurAir", "YooDrive"
  ];

  return (
    <section 
      className="py-[80px] px-6"
      style={{ background: 'linear-gradient(180deg, var(--color-slate-900) 0%, var(--color-slate-50) 100%)' }}
    >
      <div className="max-w-[1280px] mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[length:var(--text-base)] font-medium uppercase tracking-[0.08em] text-[var(--color-slate-500)] mb-12"
        >
          Trusted by teams at
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-8">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-center justify-center h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div className="w-full h-full bg-[var(--color-slate-200)] rounded-lg flex items-center justify-center px-4">
                <span className={`text-[var(--color-slate-600)] font-medium ${logo.length > 15 ? 'text-[length:var(--text-sm)]' : 'text-[length:var(--text-base)]'}`}>
                  {logo}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}