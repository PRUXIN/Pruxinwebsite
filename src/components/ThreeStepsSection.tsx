import React from 'react';
import { motion } from 'motion/react';
import { Phone, Calendar, FileCheck, Rocket } from 'lucide-react';

export default function ThreeStepsSection() {
  const steps = [
    {
      number: '01',
      title: 'We talk',
      description: '30-minute call. Tell me about your business. I\'ll ask a few questions. No sales pitch.',
      icon: <Calendar size={80} color="var(--color-electric-blue)" strokeWidth={1.5} />,
      borderColor: 'var(--color-electric-blue)'
    },
    {
      number: '02',
      title: 'You say yes',
      description: 'Sign a simple agreement. I start the same day.',
      icon: <FileCheck size={80} color="var(--color-vivid-purple)" strokeWidth={1.5} />,
      borderColor: 'var(--color-vivid-purple)'
    },
    {
      number: '03',
      title: 'Website delivered',
      description: 'Within 24 hours, your site is live-ready. Clean code. Mobile-friendly. Yours to keep.',
      icon: <Rocket size={80} color="var(--color-lime-green)" strokeWidth={1.5} />,
      borderColor: 'var(--color-lime-green)'
    }
  ];

  return (
    <section className="py-[160px] px-6 bg-[var(--color-gray-50)]">
      <div className="max-w-[1280px] mx-auto">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="type-display-small text-[var(--color-black)] text-center mb-24"
        >
          Three steps. One day. Done.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-[40px] rounded-[24px] p-10 border border-[rgba(0,0,0,0.06)] shadow-light hover:shadow-medium hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: step.borderColor, opacity: 0.5 }} />

              {/* Large Icon */}
              <div className="mb-6 flex justify-center md:justify-start">
                {step.icon}
              </div>

              <div className="w-16 h-16 rounded-full bg-[var(--color-black)] text-white flex items-center justify-center text-[24px] font-bold mb-6 absolute top-10 right-10 opacity-10 group-hover:opacity-100 transition-opacity">
                {step.number}
              </div>
              
              <h3 className="type-headline-medium text-[var(--color-black)] mb-4">
                {step.title}
              </h3>
              <p className="type-body-small text-[var(--color-gray-600)]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
