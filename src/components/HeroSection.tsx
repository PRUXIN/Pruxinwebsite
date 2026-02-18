import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Code, MousePointer2, Grid3x3, Layout, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center pt-[120px] pb-[80px] px-6 overflow-hidden"
      style={{ 
        background: 'radial-gradient(circle at center, var(--color-slate-800) 0%, var(--color-slate-900) 100%)'
      }}
    >
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} 
      />

      {/* Gradient Mesh Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.3), rgba(0, 102, 255, 0.1) 50%, transparent 80%)'
        }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Figma-ish Icon (Top Left) */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] opacity-15"
        >
          <Layout size={80} className="text-white" />
        </motion.div>

        {/* Browser Window (Top Right) */}
        <motion.div 
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[20%] right-[10%] w-[120px] h-[100px] border border-white/20 rounded-lg bg-white/5 backdrop-blur-sm opacity-20 p-2"
        >
            <div className="flex gap-1.5 mb-2">
                <div className="w-2 h-2 rounded-full bg-white/40"></div>
                <div className="w-2 h-2 rounded-full bg-white/40"></div>
                <div className="w-2 h-2 rounded-full bg-white/40"></div>
            </div>
            <div className="w-full h-1 bg-white/10 rounded mb-1"></div>
            <div className="w-2/3 h-1 bg-white/10 rounded"></div>
        </motion.div>

        {/* Phone Frame (Middle Right) */}
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[50%] right-[15%] opacity-20"
        >
            <Smartphone size={100} className="text-white" strokeWidth={1} />
        </motion.div>

        {/* Code Bracket (Bottom Left) */}
        <motion.div 
          animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[20%] left-[15%] opacity-15"
        >
            <Code size={60} className="text-white" />
        </motion.div>

        {/* Cursor (Center Left) */}
        <motion.div 
           animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
           transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
           className="absolute top-[45%] left-[20%] opacity-25"
        >
            <MousePointer2 size={40} className="text-white" fill="white" />
        </motion.div>

        {/* Grid Pattern (Bottom Right) */}
        <motion.div 
            animate={{ rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[15%] right-[25%] opacity-10"
        >
            <Grid3x3 size={100} className="text-white" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1280px] w-full mx-auto text-center flex flex-col items-center">
        
        {/* Eyebrow Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 h-[36px] rounded-full border border-white/15 bg-white/10 backdrop-blur-md mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-[var(--color-coral-orange)] shadow-[0_0_8px_var(--color-coral-orange)]"></div>
          <span className="text-[13px] font-medium uppercase tracking-wider text-white/90">Clarity-First UX Design</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="type-display-large text-white mb-8 max-w-5xl mx-auto drop-shadow-2xl"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
        >
          I'll build your business<br className="hidden md:block" /> a website for free.
        </motion.h1>

        {/* Subheadline */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="type-headline-large text-white/80 mb-4 font-semibold"
        >
          Design. Development. Done in 24 hours.
        </motion.h2>

        {/* Supporting Text */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="type-body-large text-white/60 mb-16"
        >
          You only pay if you want me to host it.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="https://calendly.com/pruxin/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-[56px] px-8 bg-white text-black text-[17px] font-semibold rounded-full hover:scale-[1.02] transition-all duration-200 shadow-[0_4px_24px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.25)] w-full sm:w-auto min-w-[200px]"
          >
            Book a Call
          </a>
          <p className="type-caption text-white/50 text-center">
            No pitch. No contracts. Just a conversation.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
