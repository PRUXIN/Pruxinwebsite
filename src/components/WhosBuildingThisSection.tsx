import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImage from 'figma:asset/6f8c5edaeb740b731193dba29ca1e221e355cd7d.png';

export default function WhosBuildingThisSection() {
  const stats = [
    { number: "8+", label: "Years Experience" },
    { number: "50+", label: "Projects Delivered" },
    { number: "15+", label: "Happy Clients" },
  ];

  return (
    <section 
      className="py-[160px] px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, rgba(124, 58, 237, 0.05) 0%, #FFFFFF 100%)' }}
    >
      <div className="max-w-[1152px] mx-auto relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="type-display-small text-[var(--color-black)] text-center mb-20"
        >
          Who's building this?
        </motion.h2>

        <div className="grid md:grid-cols-[40%_60%] gap-12 items-center">
          
          {/* Left: Profile Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end"
          >
             <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full border-4 border-white shadow-strong overflow-hidden flex items-end justify-center" style={{ backgroundColor: '#E9D5FF' }}>
                <img src={profileImage} alt="Pranav Raval" className="w-full h-full object-cover object-top scale-110 translate-y-4" />
             </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h3 className="type-headline-medium text-[var(--color-black)] mb-2">
              Pranav Raval.
            </h3>
            <p className="type-body-large text-[var(--color-gray-600)] mb-8">
              Product designer. Product owner. 8+ years shipping real products.
            </p>

            <div className="space-y-6 mb-12">
              <p className="type-body-medium text-[var(--color-gray-600)]">
                2+ years leading product delivery for YooDrive — a UK driving marketplace with payments, verification, and compliance built in.
              </p>
              <p className="type-body-small text-[var(--color-gray-500)]">
                Industries I've designed for: tech, healthcare, e-commerce, finance, hospitality, local services.
              </p>
              <p className="type-body-medium text-[var(--color-gray-800)] font-medium">
                Not an agency. Not a template seller. A product person who knows how to ship.
              </p>
            </div>

            {/* Stat Cards */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-[16px] p-6 shadow-light border border-[rgba(0,0,0,0.06)] flex-1 min-w-[140px] text-center hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="text-[40px] leading-none font-bold text-[var(--color-black)] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-[14px] text-[var(--color-gray-600)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
