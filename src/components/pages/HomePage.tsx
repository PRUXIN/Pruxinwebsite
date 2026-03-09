import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ChevronDown, ClipboardCheck, Layers, ArrowRight, Workflow, Sparkles, Phone, Zap } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import profileImage from 'figma:asset/d4d9a5fd9aff0e363729e74bd4b4f829bf50730c.png';
import hubFeaturedImg from 'figma:asset/bc3f84889b5aefc773df5d8e78faaa3042836ba8.png';
import { MagicCard } from '../magicui/magic-card';
import {
  FloatingParticles,
  GradientBlobs,
  RevealOnScroll,
  MagneticWrap,
  StaggerContainer,
  StaggerItem,
  AnimatedCounter,
} from '../ui/effects';

export default function HomePage() {
  useEffect(() => {
    document.title = 'PRUXIN | Clarity-First UX Design for SaaS & Enterprise';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'PRUXIN helps SaaS founders reduce friction, simplify flows, and turn confused users into active ones. UX audits, product design, and AI automation.');
  }, []);

  // Step 3 — Services: AI Automation leads, UX Audits second, Product Design third
  const services = [
    {
      icon: <Zap size={28} />,
      title: 'AI Automation Workflows',
      num: '01',
      description:
        'Clara is the first product. PRUXIN builds AI-powered workflows that handle inbound calls, qualify leads, and connect your tools — so you spend time closing, not chasing.',
      gradient: 'from-teal-500 to-emerald-400',
      iconBg: 'bg-gradient-to-br from-teal-500/20 to-emerald-400/10',
      iconColor: 'text-teal-500',
      cta: 'Explore Clara',
      ctaHref: '/clara',
      isExternal: false,
    },
    {
      icon: <ClipboardCheck size={28} />,
      title: 'UX Audits',
      num: '02',
      description:
        'I audit SaaS products to find where users get stuck, confused, or abandon the flow. You get a prioritised fix list — not a theory document.',
      gradient: 'from-blue-500 to-cyan-400',
      iconBg: 'bg-gradient-to-br from-blue-500/20 to-cyan-400/10',
      iconColor: 'text-blue-500',
      cta: 'View Services',
      ctaHref: '/services',
      isExternal: false,
    },
    {
      icon: <Layers size={28} />,
      title: 'Product Design',
      num: '03',
      description:
        'Full-cycle UX and product design for SaaS, marketplaces, and compliance-heavy systems. Research to delivery-ready Figma files.',
      gradient: 'from-purple-500 to-pink-400',
      iconBg: 'bg-gradient-to-br from-purple-500/20 to-pink-400/10',
      iconColor: 'text-purple-500',
      cta: 'View Services',
      ctaHref: '/services',
      isExternal: false,
    },
  ];

  return (
    <>
      {/* ===== HERO SECTION — Step 1 ===== */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center pt-[120px] pb-[80px] px-6 overflow-hidden"
      >
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 z-0" style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 30%, #0F172A 50%, #0C2233 70%, #0F172A 100%)',
        }} />

        {/* Animated gradient blobs */}
        <GradientBlobs />
        <FloatingParticles count={15} />

        {/* Noise overlay */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-[1280px] w-full mx-auto text-center flex flex-col items-center">
          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-5 h-[38px] rounded-full glass mb-10"
          >
            <Sparkles size={14} className="text-amber-400" />
            <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-white/90">
              AI Automation + UX Design
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="type-display-large mb-8 max-w-5xl mx-auto gradient-text-white"
          >
            I help UK businesses stop losing leads
            <br className="hidden md:block" /> and start converting them.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="type-body-large text-white/55 mb-14 max-w-2xl"
          >
            AI workflows that answer calls and qualify leads. UX design that turns confused users into active ones. Both built on one principle — clarity in every click.
          </motion.p>

          {/* Single CTA only — "See how it works" → /clara */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <MagneticWrap strength={0.15}>
              <Link
                to="/clara"
                className="group relative inline-flex items-center justify-center h-[56px] px-10 text-[17px] font-semibold rounded-full overflow-hidden transition-all duration-300 shadow-[0_4px_30px_rgba(255,255,255,0.12)] hover:shadow-[0_8px_40px_rgba(255,255,255,0.2)]"
              >
                <div className="absolute inset-0 bg-white" />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent" />
                <span className="relative z-10 text-black">See how it works</span>
              </Link>
            </MagneticWrap>
          </motion.div>

          {/* Floating stat badges — kept exactly as-is */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-20 flex flex-wrap items-center justify-center gap-4"
          >
            {[
              { label: 'Years Experience', value: 8, suffix: '+' },
              { label: 'Projects Delivered', value: 50, suffix: '+' },
              { label: 'UK Based', value: null },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass rounded-full px-5 py-2.5 flex items-center gap-2"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              >
                <span className="text-white font-semibold text-[15px]">
                  {stat.value !== null ? (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix || ''} />
                  ) : (
                    '🇬🇧'
                  )}
                </span>
                <span className="text-white/50 text-[13px]">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30"
        >
          <ChevronDown size={22} />
        </motion.div>
      </section>

      {/* ===== CLARA FEATURE SECTION — Step 2 ===== */}
      <section className="py-[96px] px-6 relative overflow-hidden" style={{ background: '#060B14' }}>
        {/* Radial aqua glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 60% 70% at 80% 50%, rgba(0,245,160,0.09) 0%, transparent 70%)',
        }} />
        {/* Faint grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

        <div className="max-w-[1280px] mx-auto relative">
          <div className="grid md:grid-cols-[1fr_1fr] gap-12 items-center">
            {/* Left — copy */}
            <div>
              {/* Eyebrow badge */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                style={{ background: 'rgba(0,245,160,0.12)', border: '1px solid rgba(0,245,160,0.25)' }}
              >
                <motion.span
                  className="w-2 h-2 rounded-full"
                  style={{ background: '#00F5A0' }}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-[13px] font-medium tracking-wide" style={{ color: '#00F5A0' }}>
                  Featured — AI Voice Receptionist
                </span>
              </motion.div>

              <RevealOnScroll direction="left">
                <h2 className="text-[clamp(32px,5vw,60px)] font-bold text-white leading-[1.05] mb-5 tracking-tight">
                  Meet Clara. Your AI receptionist<br />is live right now.
                </h2>
                <p className="text-[17px] text-white/55 leading-relaxed mb-8 max-w-[440px]">
                  Clara answers every inbound call, qualifies the lead, and books the discovery call — automatically. Built on real AI. Running on a live UK number. Proven in PRUXIN's own business first.
                </p>

                {/* Single CTA only — phone call */}
                <div className="flex flex-wrap gap-4 mb-10">
                  <a
                    href="tel:+441313815821"
                    className="inline-flex items-center gap-2.5 h-[52px] px-8 rounded-full font-semibold text-[16px] text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(0,245,160,0.4)]"
                    style={{ background: '#00F5A0' }}
                  >
                    <Phone size={17} />
                    Call +44 131 381 5821
                  </a>
                </div>

                <p className="text-white/25 text-[13px]">
                  UK number · Call logs included · No voicemail · Real call, no forms
                </p>
              </RevealOnScroll>
            </div>

            {/* Right — demo card — kept exactly as-is */}
            <RevealOnScroll direction="right" delay={0.15}>
              <div
                className="rounded-[24px] p-8 md:p-10 text-center"
                style={{ background: 'rgba(0,245,160,0.07)', border: '1px solid rgba(0,245,160,0.20)' }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-4" style={{ color: '#00F5A0' }}>
                  Live demo line
                </p>
                <a
                  href="tel:+441313815821"
                  className="block text-[clamp(28px,4vw,44px)] font-bold mb-4 leading-tight tracking-tight hover:opacity-70 transition-opacity"
                  style={{ color: '#00F5A0' }}
                >
                  +44 131 381 5821
                </a>
                {/* Mini waveform */}
                <div className="flex justify-center items-center gap-[3px] h-8 mb-4">
                  {[0.4, 0.7, 1, 0.6, 0.9, 0.5, 0.8, 0.4].map((h, i) => (
                    <motion.div
                      key={i}
                      className="w-[3px] rounded-full"
                      style={{ background: '#00F5A0' }}
                      animate={{ scaleY: [h * 0.5, h, h * 0.3, h * 0.8, h * 0.5] }}
                      transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
                    />
                  ))}
                </div>
                <p className="text-white/40 text-[14px]">Real call. No forms, no menus.</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-[128px] px-6 bg-white relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Top-right radial glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.04] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(124, 58, 237, 0.5) 0%, transparent 70%)' }}
        />

        <div className="max-w-[960px] mx-auto relative">
          <RevealOnScroll>
            <h2 className="type-display-small text-[var(--color-black)] mb-16 text-center">
              Design that removes confusion,{' '}
              <span className="gradient-text-blue-purple">not adds to it</span>
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-center">
            <RevealOnScroll delay={0.1} direction="left">
              <div className="flex justify-center">
                <div className="relative">
                  {/* Glow border */}
                  <div className="absolute -inset-1 rounded-[36px] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-teal-500/20 blur-lg animate-glow-pulse" />
                  <div
                    className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-[32px] overflow-hidden shadow-strong"
                    style={{ backgroundColor: '#E9D5FF' }}
                  >
                    <img
                      src={profileImage}
                      alt="Pranav Raval"
                      className="w-full h-full object-cover object-top scale-110 translate-y-4"
                    />
                  </div>
                  {/* Floating credential badges */}
                  {['8+ Years', '50+ Projects'].map((badge, i) => (
                    <motion.div
                      key={badge}
                      className="absolute glass-light rounded-full px-3 py-1.5 shadow-medium"
                      style={{
                        top: i === 0 ? '10%' : 'auto',
                        bottom: i === 1 ? '10%' : 'auto',
                        right: i === 0 ? '-20px' : 'auto',
                        left: i === 1 ? '-20px' : 'auto',
                      }}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
                    >
                      <span className="text-[12px] font-semibold text-[var(--color-gray-800)]">{badge}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2} direction="right">
              <p className="type-body-large text-[var(--color-gray-700)] mb-6">
                I'm Pranav, a product and UX designer specialising in SaaS products, compliance-heavy
                systems, and trust-first marketplaces.
              </p>
              <p className="type-body-medium text-[var(--color-gray-600)] mb-6">
                If your product has high drop-off, messy dashboards, or unclear onboarding — I fix
                that. My approach: reduce clicks, remove confusion, and design systems that work
                without constant support tickets.
              </p>
              <p className="type-body-medium text-[var(--color-gray-600)]">
                I spent years in technical support at Siemens, Atos, and Microsoft. That taught me one
                thing: support tickets aren't user problems — they're design problems.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION — Step 3 ===== */}
      <section className="py-[128px] px-6 bg-[var(--color-gray-50)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(37, 99, 235, 0.5) 0%, transparent 70%)' }}
        />

        <div className="max-w-[1280px] mx-auto">
          <RevealOnScroll>
            <p className="type-label text-[var(--color-gray-500)] text-center mb-3 uppercase tracking-[0.12em]">
              What PRUXIN does
            </p>
            <h2 className="type-display-small text-[var(--color-black)] text-center mb-4">
              Two things. Done with clarity.
            </h2>
            <p className="type-body-large text-[var(--color-gray-500)] text-center mb-16 max-w-xl mx-auto">
              AI automation that removes manual work. UX design that removes confusion.
            </p>
          </RevealOnScroll>

          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <MagicCard
                  className="h-full rounded-[24px] bg-white border-[rgba(0,0,0,0.06)] p-0 overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-default"
                  gradientColor={
                    service.title === 'AI Automation Workflows'
                      ? '#0D948822'
                      : service.title === 'UX Audits'
                      ? '#2563EB22'
                      : '#7C3AED22'
                  }
                  gradientSize={300}
                >
                  <div className="p-8 relative">
                    {/* Number badge */}
                    <div className={`absolute top-6 right-6 w-10 h-10 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                      <span className="text-white text-[13px] font-bold">{service.num}</span>
                    </div>

                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.iconBg}`}>
                      <div className={service.iconColor}>{service.icon}</div>
                    </div>

                    <h3 className="type-headline-small text-[var(--color-black)] mb-4">{service.title}</h3>
                    <p className="type-body-small text-[var(--color-gray-600)] mb-6">{service.description}</p>

                    {/* Single CTA per card */}
                    <Link
                      to={service.ctaHref}
                      className={`inline-flex items-center gap-2 text-[15px] font-medium ${service.iconColor} group/link`}
                    >
                      {service.cta}
                      <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </MagicCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== FEATURED CASE STUDY — Step 4: fix stat ===== */}
      <section className="py-[128px] px-6 bg-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto">
          <RevealOnScroll>
            <h2 className="type-display-small text-[var(--color-black)] text-center mb-16">
              Recent work
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <div className="group grid md:grid-cols-2 gap-0 rounded-[28px] overflow-hidden border border-[rgba(0,0,0,0.06)] shadow-light hover:shadow-heavy transition-all duration-500">
              {/* Image side with zoom */}
              <div className="aspect-[4/3] md:aspect-auto overflow-hidden relative">
                <img
                  src={hubFeaturedImg}
                  alt="Threecolts HUB unified dashboard showing subscription management and product navigation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Floating tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {['SaaS', 'Dashboard'].map((tag) => (
                    <span key={tag} className="glass rounded-full px-3 py-1 text-white text-[12px] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 md:bg-gradient-to-r md:from-transparent md:to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Text side */}
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <p className="type-label text-[var(--color-electric-blue)] mb-4">CASE STUDY</p>
                <h3 className="type-headline-medium text-[var(--color-black)] mb-4">
                  Threecolts HUB – Unified SaaS Dashboard
                </h3>
                <p className="type-body-medium text-[var(--color-gray-600)] mb-8">
                  Designed a unified product hub that eliminated context-switching across separate platforms. One login, one navigation, and consolidated performance data across all Threecolts tools.
                </p>

                {/* Metrics — Step 4: stat updated to "1 Login. Down from 10+" */}
                <div className="flex gap-4 mb-8">
                  {[
                    { label: 'Products unified', value: '10+', color: 'bg-purple-500' },
                    { label: 'Login. Down from 10+', value: '1', color: 'bg-teal-500' },
                  ].map((metric) => (
                    <div key={metric.label} className="flex items-center gap-2 bg-[var(--color-gray-50)] rounded-xl px-4 py-2.5">
                      <div className={`w-2 h-2 rounded-full ${metric.color}`} />
                      <span className="text-[14px] font-semibold text-[var(--color-black)]">{metric.value}</span>
                      <span className="text-[13px] text-[var(--color-gray-500)]">{metric.label}</span>
                    </div>
                  ))}
                </div>

                <MagneticWrap strength={0.1} className="self-start">
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 text-[15px] font-medium text-[var(--color-electric-blue)] group/link"
                  >
                    View Case Study
                    <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </MagneticWrap>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== CTA SECTION — Step 5 ===== */}
      <section className="py-[160px] px-6 text-center relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F3FF 40%, #EDE9FE 100%)',
        }} />
        {/* Bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 70%)' }}
        />

        <div className="max-w-[896px] mx-auto relative z-10">
          <RevealOnScroll>
            <h2 className="type-display-medium text-[var(--color-black)] mb-6">
              Ready to automate
              <br />
              <span className="gradient-text-blue-purple">and simplify?</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p className="type-body-large text-[var(--color-gray-600)] mb-12">
              Whether you need an AI receptionist live this week or a full UX overhaul — let's talk.
            </p>
          </RevealOnScroll>

          {/* Single CTA only */}
          <RevealOnScroll delay={0.2}>
            <MagneticWrap strength={0.1}>
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center h-[56px] px-12 text-[18px] font-medium rounded-full overflow-hidden transition-all duration-300 shadow-strong hover:shadow-heavy bg-[var(--color-black)] text-white hover:scale-[1.02]"
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