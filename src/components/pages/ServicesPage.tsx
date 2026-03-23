import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ClipboardCheck, Layers, Workflow, Check } from 'lucide-react';
import { RevealOnScroll, MagneticWrap } from '../ui/effects';
import PricingSection from '../PricingSection';

function AnimatedCheck({ color, delay = 0 }: { color: string; delay?: number }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, type: 'spring', stiffness: 300 }}
      className="flex-shrink-0 mt-1"
    >
      <Check size={18} style={{ color }} />
    </motion.div>
  );
}

interface ServiceSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  iconBg: string;
  accentColor: string;
  checkColor: string;
  items: string[];
  whoTitle: string;
  whoDescription: string;
  engagement: string;
  extra?: React.ReactNode;
  bgClass?: string;
}

function ServiceSection({
  icon, title, description, gradient, iconBg, accentColor, checkColor,
  items, whoTitle, whoDescription, engagement, extra, bgClass = 'bg-white',
}: ServiceSectionProps) {
  return (
    <section className={`py-[96px] px-6 ${bgClass} relative overflow-hidden`}>
      {/* Accent glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.03] pointer-events-none"
        style={{ background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)` }}
      />
      <div className="max-w-[960px] mx-auto relative">
        <RevealOnScroll>
          <div className="flex items-center gap-4 mb-8">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${iconBg}`}>
              {icon}
            </div>
            <h2 className="type-headline-large text-[var(--color-black)]">{title}</h2>
          </div>

          <p className="type-body-large text-[var(--color-gray-700)] mb-10 max-w-3xl">{description}</p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-12 mb-10">
          <RevealOnScroll delay={0.1}>
            <h3 className="type-headline-small text-[var(--color-black)] mb-5">
              {items.length > 5 ? "What I specialise in" : "What's included"}
            </h3>
            <ul className="space-y-3.5">
              {items.map((item, i) => (
                <li key={item} className="flex items-start gap-3">
                  <AnimatedCheck color={checkColor} delay={i * 0.06} />
                  <span className="type-body-small text-[var(--color-gray-700)]">{item}</span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            {extra}
            <h3 className="type-headline-small text-[var(--color-black)] mb-4">{whoTitle}</h3>
            <p className="type-body-small text-[var(--color-gray-600)] mb-6">{whoDescription}</p>

            {/* Timeline box with glow */}
            <div className="relative group">
              <div
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                style={{ background: `linear-gradient(135deg, ${accentColor}33, transparent)` }}
              />
              <div className="relative bg-[var(--color-gray-50)] rounded-2xl p-6 border border-[rgba(0,0,0,0.06)]">
                <p className="type-label text-[var(--color-gray-500)] mb-1">Typical engagement</p>
                <p className="type-body-medium text-[var(--color-black)] font-semibold">{engagement}</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Animated gradient separator */}
        <div className="w-full h-px animate-gradient-x"
          style={{
            background: `linear-gradient(90deg, transparent, ${accentColor}33, transparent)`,
            backgroundSize: '200% 100%',
          }}
        />
      </div>
    </section>
  );
}

export default function ServicesPage() {
  useEffect(() => {
    document.title = 'Services | UX Audits, Product Design & AI Automation — PRUXIN';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'PRUXIN helps businesses fix the clarity problems that cost them clients. UX audits, product design, flow simplification — and Clara, our AI voice receptionist.');
    return () => { document.title = 'PRUXIN | Clarity-First UX Design for SaaS & Enterprise'; };
  }, []);

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
            UX Design{' '}
            <span className="gradient-text-blue-purple">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="type-body-large text-[var(--color-gray-600)] max-w-2xl mx-auto"
          >
            Most businesses don't have a growth problem. They have a clarity problem. Missed calls, confusing websites, unclear flows — they quietly cost you clients every single day. PRUXIN fixes that.
          </motion.p>
        </div>
      </section>

      {/* UX Audits */}
      <ServiceSection
        icon={<ClipboardCheck size={28} className="text-blue-500" />}
        title="UX Audits"
        gradient="from-blue-500 to-cyan-400"
        iconBg="from-blue-500/15 to-cyan-400/5"
        accentColor="#2563EB"
        checkColor="#2563EB"
        description="Something in your product or process is costing you clients. You can feel it — in support calls, drop-offs, and confused users. An audit finds exactly what to fix first, with clear business impact against each item."
        items={[
          'Click-by-click flow analysis',
          'Friction heatmap showing drop-off points',
          'Onboarding breakdown with clarity scoring',
          'Dashboard clarity review',
          'Prioritised fix list (quick wins vs long-term improvements)',
        ]}
        whoTitle="Who it's for"
        whoDescription="Professional service businesses, SMBs, and software-led companies who know something is off but need clarity on what to fix and in what order."
        engagement="1–2 weeks from audit to delivery"
      />

      {/* Product Design */}
      <ServiceSection
        icon={<Layers size={28} className="text-purple-500" />}
        title="Product Design"
        gradient="from-purple-500 to-pink-400"
        iconBg="from-purple-500/15 to-pink-400/5"
        accentColor="#7C3AED"
        checkColor="#7C3AED"
        bgClass="bg-[var(--color-gray-50)]"
        description="Building without a clarity-first foundation is expensive. Every confusing screen becomes a support call. Every unclear flow becomes a lost client. Full-cycle UX and product design from research to delivery-ready Figma files."
        items={[
          'Onboarding flows that activate users faster',
          'Dashboards that prioritise what matters',
          'Multi-user systems (admin, teams, end-users)',
          'Payment flows and verification systems',
          'Compliance-focused design (GDPR, DMCC, ICO)',
          'Reducing clicks without losing functionality',
        ]}
        whoTitle="Who it's for"
        whoDescription="Businesses building or redesigning a digital product — from SaaS platforms to client-facing portals, booking systems, and professional service tools."
        engagement="4–8 weeks depending on scope"
        extra={
          <div className="mb-8">
            <h3 className="type-headline-small text-[var(--color-black)] mb-4">Process</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Research', 'User journeys', 'Wireframes', 'Hi-fi designs', 'Dev handoff'].map((step, i) => (
                <motion.span
                  key={step}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, type: 'spring', stiffness: 300 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-[length:var(--text-sm)] font-medium border border-purple-100"
                >
                  {step}
                  {i < 4 && <span className="text-purple-300">&rarr;</span>}
                </motion.span>
              ))}
            </div>
          </div>
        }
      />

      {/* Flow Simplification */}
      <ServiceSection
        icon={<Workflow size={28} className="text-teal-500" />}
        title="Flow Simplification"
        gradient="from-teal-500 to-emerald-400"
        iconBg="from-teal-500/15 to-emerald-400/5"
        accentColor="#0D9488"
        checkColor="#0D9488"
        description="Your clients aren't confused because they're not smart enough. The path isn't clear. That's a design problem — and it's faster to fix than you think. Clear defaults, obvious next steps, fewer choices."
        items={[
          'Remove unnecessary clicks',
          'Simplify decision trees',
          'Clarify CTAs and next-step indicators',
          'Reduce cognitive load at every interaction',
          'Design clear defaults that work for 80% of users',
        ]}
        whoTitle="Who it's for"
        whoDescription="Any business where clients regularly ask 'how do I...' — or where your team spends time explaining what the product or process should make obvious."
        engagement="2–4 weeks"
      />

      {/* ── Pricing ──────────────────────────────────────────────── */}
      <PricingSection />

      {/* CTA */}
      <section className="py-[128px] px-6 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, var(--color-gray-50) 0%, #EDE9FE 100%)' }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, transparent 70%)' }}
        />
        <div className="max-w-[640px] mx-auto relative z-10">
          <RevealOnScroll>
            <h2 className="type-headline-large text-[var(--color-black)] mb-6">
              Not sure where to start?
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="type-body-large text-[var(--color-gray-600)] mb-10">
              AI tools will give you 40 things to fix. PRUXIN tells you which 3 actually cost you clients — and how to fix them first. Let's talk.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <MagneticWrap strength={0.1}>
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center h-[56px] px-12 bg-[var(--color-black)] text-white text-[length:var(--text-md)] font-medium rounded-full overflow-hidden transition-all duration-300 shadow-strong hover:shadow-heavy hover:scale-[1.02]"
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