import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import profileImage from 'figma:asset/d4d9a5fd9aff0e363729e74bd4b4f829bf50730c.png';
import { RevealOnScroll, MagneticWrap, StaggerContainer, StaggerItem } from '../ui/effects';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[140px] pb-[80px] px-6 bg-[var(--color-gray-50)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-[960px] mx-auto text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="type-display-small text-[var(--color-black)] mb-6"
          >
            About <span className="gradient-text-blue-purple">Pranav</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="type-body-large text-[var(--color-gray-600)] max-w-2xl mx-auto"
          >
            Product and UX designer who specialises in clarity-first design for SaaS and
            compliance-heavy systems.
          </motion.p>
        </div>
      </section>

      {/* Photo + Intro */}
      <section className="py-[96px] px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(124, 58, 237, 0.5) 0%, transparent 70%)' }}
        />
        <div className="max-w-[960px] mx-auto grid md:grid-cols-[1fr_1.4fr] gap-12 items-center relative">
          <RevealOnScroll direction="left">
            <div className="flex justify-center">
              <div className="relative">
                {/* Animated glow border */}
                <div className="absolute -inset-1.5 rounded-[36px] animate-glow-pulse"
                  style={{
                    background: 'linear-gradient(135deg, rgba(37,99,235,0.2), rgba(124,58,237,0.2), rgba(6,182,212,0.2))',
                    filter: 'blur(12px)',
                  }}
                />
                <div
                  className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-[32px] overflow-hidden shadow-strong"
                  style={{ backgroundColor: '#E9D5FF' }}
                >
                  <img
                    src={profileImage}
                    alt="Pranav Raval"
                    className="w-full h-full object-cover object-top scale-105"
                  />
                </div>

                {/* Floating badges */}
                {[
                  { text: '8+ Years', top: '8%', right: '-28px', delay: 0 },
                  { text: '50+ Projects', bottom: '12%', left: '-32px', delay: 0.6 },
                  { text: '🇬🇧 UK Based', bottom: '-8px', right: '20%', delay: 1.2 },
                ].map((badge) => (
                  <motion.div
                    key={badge.text}
                    className="absolute glass-light rounded-full px-3.5 py-1.5 shadow-medium"
                    style={{
                      top: badge.top,
                      right: badge.right,
                      bottom: badge.bottom,
                      left: badge.left,
                    }}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: badge.delay }}
                  >
                    <span className="text-[12px] font-semibold text-[var(--color-gray-800)] whitespace-nowrap">{badge.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15} direction="right">
            <p className="type-body-large text-[var(--color-gray-700)] mb-6">
              I'm Pranav Raval — a product and UX designer based in the UK, specialising in
              clarity-first design for SaaS products, marketplaces, and compliance-heavy systems.
            </p>
            <p className="type-body-medium text-[var(--color-gray-600)]">
              I help SaaS founders and product teams remove friction, simplify flows, and design
              systems that work without constant support tickets.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Background — Quote with gradient border */}
      <section className="py-[96px] px-6 bg-[var(--color-gray-50)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-[800px] mx-auto relative">
          <RevealOnScroll>
            <h2 className="type-headline-large text-[var(--color-black)] mb-8">
              Why clarity matters
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="space-y-6 mb-10">
              <p className="type-body-large text-[var(--color-gray-700)]">
                I spent years in technical support at Siemens, Atos, and Microsoft. That experience
                taught me something critical: most "user problems" aren't user problems — they're
                design problems.
              </p>
              <p className="type-body-medium text-[var(--color-gray-600)]">
                When users can't figure out how to do something, the interface failed. When support
                tickets pile up asking "how do I...?", the UX failed. When users abandon products in
                the first 30 seconds, the onboarding failed.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="relative group">
              {/* Animated gradient border */}
              <div className="absolute -inset-[2px] rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"
                style={{
                  background: 'linear-gradient(90deg, #2563EB, #7C3AED, #06B6D4, #7C3AED, #2563EB)',
                  backgroundSize: '200% 100%',
                }}
              />
              <div className="relative bg-white rounded-2xl p-8 shadow-subtle">
                <p className="type-body-large font-semibold italic gradient-text-blue-purple">
                  "Support tickets are just symptoms. The disease is unclear design."
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* What I Do Now */}
      <section className="py-[96px] px-6 bg-white relative">
        <div className="max-w-[960px] mx-auto">
          <RevealOnScroll>
            <h2 className="type-headline-large text-[var(--color-black)] mb-12">What I do now</h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-12">
            <RevealOnScroll delay={0.1}>
              <div className="group bg-[var(--color-gray-50)] rounded-2xl p-8 border border-[rgba(0,0,0,0.04)] hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
                <h3 className="type-headline-small text-[var(--color-black)] mb-5">My focus areas</h3>
                <ul className="space-y-3.5">
                  {[
                    'UX and product design',
                    'Product ownership and delivery',
                    'UX audits',
                    'Flow simplification',
                    'Compliance-focused system design',
                  ].map((item, i) => (
                    <li key={item} className="flex items-start gap-3">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06, type: 'spring', stiffness: 300 }}
                      >
                        <Check size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <span className="type-body-small text-[var(--color-gray-700)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="group bg-[var(--color-gray-50)] rounded-2xl p-8 border border-[rgba(0,0,0,0.04)] hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
                <h3 className="type-headline-small text-[var(--color-black)] mb-5">Industries I work in</h3>
                <ul className="space-y-3.5">
                  {[
                    'SaaS products',
                    'Marketplaces',
                    'Fintech',
                    'EdTech',
                    'Compliance-heavy platforms',
                  ].map((item, i) => (
                    <li key={item} className="flex items-start gap-3">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06, type: 'spring', stiffness: 300 }}
                      >
                        <Check size={18} className="text-purple-500 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <span className="type-body-small text-[var(--color-gray-700)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Philosophy — Numbered Cards */}
      <section className="py-[96px] px-6 bg-[var(--color-gray-50)] relative overflow-hidden">
        <div className="max-w-[800px] mx-auto">
          <RevealOnScroll>
            <h2 className="type-headline-large text-[var(--color-black)] mb-4">My approach</h2>
            <p className="type-body-large text-[var(--color-gray-700)] mb-10">
              Clarity isn't just about making things look clean. It's about:
            </p>
          </RevealOnScroll>

          <StaggerContainer className="grid sm:grid-cols-2 gap-4 mb-10" staggerDelay={0.08}>
            {[
              'Reducing choices',
              'Making next steps obvious',
              'Designing clear defaults',
              'Removing unnecessary clicks',
              'Building systems that explain themselves',
            ].map((item, i) => (
              <StaggerItem key={item}>
                <div className="bg-white rounded-2xl p-5 border border-[rgba(0,0,0,0.06)] shadow-subtle flex items-center gap-3 hover:shadow-medium hover:-translate-y-0.5 transition-all duration-300 group cursor-default">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500/15 to-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="gradient-text-blue-purple font-bold text-[14px]">{i + 1}</span>
                  </div>
                  <span className="type-body-small text-[var(--color-gray-800)] font-medium">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Final quote — glassmorphism */}
          <RevealOnScroll delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-teal-500/10 blur-lg opacity-60" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[rgba(0,0,0,0.06)] shadow-subtle">
                <p className="type-body-large text-[var(--color-gray-800)]">
                  <span className="font-semibold gradient-text-blue-purple">Simple ≠ Clear.</span>{' '}
                  <span className="text-[var(--color-gray-700)]">Simple = less stuff on screen. Clear = less thinking required.</span>
                </p>
                <p className="type-body-medium text-[var(--color-gray-600)] mt-3">
                  I design for clarity first, aesthetics second.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[128px] px-6 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F3FF 100%)' }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 70%)' }}
        />
        <div className="max-w-[640px] mx-auto relative z-10">
          <RevealOnScroll>
            <h2 className="type-headline-large text-[var(--color-black)] mb-6">Let's work together</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="type-body-large text-[var(--color-gray-600)] mb-10">
              If you're building a SaaS product, marketplace, or compliance-heavy system and need help
              reducing friction — let's talk.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <MagneticWrap strength={0.1}>
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center h-[56px] px-12 bg-[var(--color-black)] text-white text-[18px] font-medium rounded-full overflow-hidden transition-all duration-300 shadow-strong hover:shadow-heavy hover:scale-[1.02]"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              </Link>
            </MagneticWrap>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
