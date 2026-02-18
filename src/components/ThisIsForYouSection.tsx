import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function ThisIsForYouSection() {
  const items = [
    "You run a small business — salon, café, trade, clinic, shop, consultancy",
    "You want a website that looks professional, not a DIY template",
    "You don't want to wait weeks or spend thousands",
    "You want to own your site, not rent it from a page builder"
  ];

  return (
    <section 
      className="py-[160px] px-6"
      style={{ backgroundColor: '#F7FEE7' }}
    >
      <div className="max-w-[1024px] mx-auto">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="type-display-small text-[var(--color-black)] text-center mb-20"
        >
          This is for you if...
        </motion.h2>

        <div className="space-y-4 max-w-[800px] mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-6 p-8 rounded-[20px] bg-white/60 hover:bg-white border border-[rgba(0,0,0,0.04)] transition-colors duration-200"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-lime-green)] text-white flex items-center justify-center mt-0.5">
                <Check size={14} strokeWidth={3} />
              </div>
              <p className="type-body-medium text-[var(--color-gray-800)]">
                {item}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
