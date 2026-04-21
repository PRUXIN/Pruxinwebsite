import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone, PhoneCall, CheckCircle, ChevronDown,
  Mic, Zap, Calendar, FileText, ArrowRight, Star, Shield,
  Clock, TrendingUp, AlertCircle,
} from 'lucide-react';
import {
  RevealOnScroll, StaggerContainer, StaggerItem, FloatingParticles, GridPattern,
} from '../ui/effects';

// Hero image — served via the vite dev-server middleware in the editor,
// and via /public/imports/ copy in the production build.
const HERO_IMAGE = '/imports/Ruxi_Marketing_image.png';
const RUXI_LOGO_LIGHT = '/imports/ruxi-logo-light.png';

// SEO meta constants
const PAGE_TITLE = 'Ruxi — AI Voice Receptionist for UK Businesses | PRUXIN';
const PAGE_META_DESC = 'Ruxi answers every inbound call, qualifies your leads, and books discovery calls automatically. No voicemail. No missed leads. Call +44 131 381 5821 and hear her in action.';

const AQUA = '#14B8A6';
const AQUA_DIM = 'rgba(20,184,166,0.12)';
const AQUA_GLOW = 'rgba(20,184,166,0.25)';
const DARK_BG = '#060B14';
const CARD_BG = 'rgba(255,255,255,0.04)';
const CARD_BORDER = 'rgba(255,255,255,0.08)';
const TEL = 'tel:+441313815821';
const DISPLAY_NUMBER = '+44 131 381 5821';

/* ── Section label pill ── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block text-[11px] font-semibold uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-6"
      style={{ color: AQUA, background: AQUA_DIM, border: `1px solid ${AQUA_GLOW}` }}
    >
      {children}
    </span>
  );
}

/* ── Primary call CTA ── */
function CallCTA({ label = 'Call Ruxi now', size = 'md' }: { label?: string; size?: 'sm' | 'md' | 'lg' }) {
  const pad = size === 'lg' ? 'h-[60px] px-12 text-[18px]' : size === 'sm' ? 'h-[40px] px-6 text-[14px]' : 'h-[52px] px-8 text-[16px]';
  return (
    <a
      href={TEL}
      className={`inline-flex items-center gap-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(0,245,160,0.4)] ${pad}`}
      style={{ background: AQUA, color: '#000' }}
    >
      <Phone size={size === 'lg' ? 20 : 16} />
      {label}
    </a>
  );
}

export default function RuxiPage() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = PAGE_TITLE;

    let metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') || '';
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      (metaDesc as HTMLMetaElement).name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', PAGE_META_DESC);

    return () => {
      document.title = prevTitle;
      if (metaDesc) metaDesc.setAttribute('content', prevDesc);
    };
  }, []);

  const faqs = [
    {
      q: "Does it sound like a real person?",
      a: `Yes. Ruxi uses neural voice synthesis — not a robotic text-to-speech system. The voice is warm, natural, and holds a conversation. The best way to judge is to call the number and hear it yourself: ${DISPLAY_NUMBER}.`,
    },
    {
      q: "Can we give the agent our own brand name?",
      a: "Absolutely. The agent doesn't have to be called Ruxi. Your business can name it anything — Max, Sophie, Alex, or whatever fits your brand. The voice, personality, and script are all configured around you.",
    },
    {
      q: "What happens after a call ends?",
      a: "Whatever your workflow needs. Call summaries, caller details, and outcomes flow automatically into your existing systems — your calendar, inbox, spreadsheet, or CRM. No manual logging, no chasing notes. The agent captures it, the automation handles it, you focus on the work that actually needs you.",
    },
    {
      q: "Can it do more than book appointments?",
      a: "Yes. The voice agent is the front door — what happens behind it is fully configurable. Common setups include lead qualification before handoff, FAQ handling so your team isn't interrupted, enquiry capture for service businesses, and urgent call routing to a human. If your business has repetitive phone steps, they can almost certainly be automated.",
    },
    {
      q: "What kinds of businesses does this work for?",
      a: "Any business that loses value when calls go unanswered or staff time is spent on routine phone tasks. Clinics, solicitors, estate agents, trades, consultants, accountants, salons — if you get inbound calls and need them handled consistently, this fits.",
    },
    {
      q: "Is it GDPR-compliant?",
      a: "Yes. Callers are informed they're speaking with an AI assistant at the start of every call. Only the data needed to fulfil the call purpose is stored, and retention periods are configurable. We can walk you through the data flow as part of the setup conversation.",
    },
    {
      q: "How long does setup take?",
      a: "Most setups are live within a week. We handle the configuration — voice, script, availability, and workflow connections. You just need to share how your business works and what a good call outcome looks like.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const benefits = [
    { icon: <Zap size={22} />, title: 'Answers instantly', desc: 'No rings, no waiting. Ruxi picks up on the first ring, every time.' },
    { icon: <CheckCircle size={22} />, title: 'Qualifies the lead', desc: 'Asks the right questions so you only spend time on relevant enquiries.' },
    { icon: <Calendar size={22} />, title: 'Books the meeting', desc: 'Ruxi can offer available slots and confirm discovery calls directly.' },
    { icon: <FileText size={22} />, title: 'Logs every call', desc: 'Full call summaries sent to you — no detail ever slips through.' },
    { icon: <Phone size={22} />, title: 'UK number included', desc: 'A dedicated UK number is provisioned as part of your setup.' },
    { icon: <Shield size={22} />, title: 'Responsible data handling', desc: 'Configured for GDPR-responsible operation from day one.' },
  ];

  const steps = [
    { n: '01', icon: <PhoneCall size={22} />, title: 'Customer calls', desc: 'Your dedicated UK number rings. Ruxi answers instantly.' },
    { n: '02', icon: <Mic size={22} />, title: 'Ruxi qualifies', desc: 'She asks your pre-set questions to understand the lead.' },
    { n: '03', icon: <FileText size={22} />, title: 'Details captured', desc: 'Name, need, budget, urgency — all logged automatically.' },
    { n: '04', icon: <Calendar size={22} />, title: 'Meeting booked', desc: 'Ruxi offers availability and confirms the discovery call.' },
    { n: '05', icon: <Star size={22} />, title: 'You get the lead', desc: 'A clean summary hits your inbox. Ready to close.' },
  ];

  const problems = [
    {
      icon: <AlertCircle size={28} />,
      stat: "Most callers won't call back",
      desc: 'If you miss a call, the lead moves on. Voicemail feels like a dead end.',
    },
    {
      icon: <Clock size={28} />,
      stat: 'Speed matters',
      desc: 'The first business to respond typically wins the lead. Every minute costs.',
    },
    {
      icon: <TrendingUp size={28} />,
      stat: 'Missed call = lost revenue',
      desc: 'A single missed call from a qualified lead can cost more than a month of Ruxi.',
    },
  ];

  return (
    <div style={{ background: DARK_BG, minHeight: '100vh' }}>

      {/* ══════════════════════════════════════════════
          A) HERO
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(10,15,30,0.97) 0%, rgba(10,15,30,0.85) 35%, rgba(10,15,30,0.4) 60%, rgba(10,15,30,0.05) 100%)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-[30%]"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, var(--color-surface-dark) 100%)',
            }}
          />
        </div>

        <GridPattern opacity={0.03} size={60} />
        <FloatingParticles count={15} />

        {/* Hero content — container matches GlobalNavigation (max-w-[1280px] px-6) */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 py-[160px]">
          <div className="max-w-[560px]">

            {/* Live badge */}
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-10"
              style={{ background: AQUA_DIM, border: `1px solid ${AQUA_GLOW}` }}
            >
              <motion.span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: AQUA }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-[13px] font-medium tracking-wide" style={{ color: AQUA }}>
                Ruxi is live and answering calls
              </span>
            </motion.div>

            {/* Ruxi logo */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex items-center gap-3 mb-4"
            >
              {/* <img
                src={RUXI_LOGO_LIGHT}
                alt="Ruxi"
                className="h-14 w-auto"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = 'none';
                  const fallback = document.createElement('span');
                  fallback.textContent = 'RUXI';
                  fallback.style.cssText = `color:${AQUA};font-size:32px;font-weight:800;letter-spacing:0.08em;`;
                  el.parentNode?.insertBefore(fallback, el.nextSibling);
                }}
              /> */}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(36px,5.5vw,64px)] font-bold text-white leading-[1.05] mb-6 tracking-tight"
            >
              Your business <br />never misses <br />another call.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-[18px] text-white/55 leading-relaxed mb-12"
            >
              Answers instantly. Qualifies the lead. Books the call.
            </motion.p>

            {/* Two CTAs only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <CallCTA label="Call Ruxi now" size="md" />
              <a
                href="#transcript"
                className="inline-flex items-center gap-2 h-[52px] px-8 text-[16px] font-semibold rounded-full border text-white transition-all duration-300 hover:bg-white/[0.06]"
                style={{ borderColor: CARD_BORDER }}
              >
                Hear Ruxi in action
                <ArrowRight size={16} />
              </a>
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={22} />
        </motion.div>

      </section>

      {/* ══════════════════════════════════════════════
          B) THE PROBLEM
      ══════════════════════════════════════════════ */}
      <section className="py-[96px] px-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-[1280px] mx-auto">
          <RevealOnScroll className="text-center mb-16">
            <Label>The problem</Label>
            <h2 className="text-[clamp(30px,4.5vw,52px)] font-bold text-white leading-tight mb-4">
              Most businesses are losing<br />leads right now.
            </h2>
            <p className="text-white/50 text-[17px] max-w-lg mx-auto">
              Every missed call is a missed conversation. And most go to voicemail — which most callers won't leave.
            </p>
          </RevealOnScroll>

          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {problems.map((p) => (
              <StaggerItem key={p.stat}>
                <div
                  className="rounded-[20px] p-8 h-full"
                  style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
                >
                  <div className="mb-4" style={{ color: AQUA }}>{p.icon}</div>
                  <h3 className="text-white font-semibold text-[18px] mb-3">{p.stat}</h3>
                  <p className="text-white/50 text-[15px] leading-relaxed">{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          C) HOW IT WORKS
      ══════════════════════════════════════════════ */}
      <section className="py-[96px] px-6">
        <div className="max-w-[1280px] mx-auto">
          <RevealOnScroll className="text-center mb-16">
            <Label>How it works</Label>
            <h2 className="text-[clamp(28px,4vw,48px)] font-bold text-white leading-tight">
              Five steps from ring to booked.
            </h2>
          </RevealOnScroll>

          {/* Desktop horizontal flow */}
          <div className="hidden md:flex items-start gap-0">
            {steps.map((step, i) => (
              <div key={step.n} className="flex-1 flex flex-col items-center text-center px-4 relative">
                {i < steps.length - 1 && (
                  <div className="absolute top-[28px] left-[calc(50%+28px)] right-0 h-[1px]" style={{ background: AQUA_GLOW }} />
                )}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5 z-10 relative"
                  style={{ background: AQUA_DIM, border: `1.5px solid ${AQUA_GLOW}`, color: AQUA }}
                >
                  {step.icon}
                </div>
                <span className="text-[11px] font-semibold tracking-[0.12em] mb-2" style={{ color: AQUA }}>{step.n}</span>
                <h4 className="text-white font-semibold text-[16px] mb-2">{step.title}</h4>
                <p className="text-white/45 text-[14px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile stacked */}
          <div className="md:hidden flex flex-col gap-6">
            {steps.map((step, i) => (
              <div key={step.n} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: AQUA_DIM, border: `1.5px solid ${AQUA_GLOW}`, color: AQUA }}
                  >
                    {step.icon}
                  </div>
                  {i < steps.length - 1 && <div className="flex-1 w-[1px] mt-2" style={{ background: AQUA_GLOW }} />}
                </div>
                <div className="pb-6">
                  <span className="text-[11px] font-semibold tracking-[0.12em] block mb-1" style={{ color: AQUA }}>{step.n}</span>
                  <h4 className="text-white font-semibold text-[16px] mb-1">{step.title}</h4>
                  <p className="text-white/45 text-[14px] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          D) REAL CONVERSATION  (anchor target for hero CTA)
      ══════════════════════════════════════════════ */}
      <section id="transcript" className="py-[96px] px-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-14 items-center">
          <RevealOnScroll direction="left">
            <Label>Real conversation</Label>
            <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-white leading-tight mb-6">
              Ruxi sounds professional.<br />Every single call.
            </h2>
            <p className="text-white/55 text-[16px] leading-relaxed mb-6">
              She greets callers by your business name, handles common questions naturally, and keeps the conversation focused on what you need to know.
            </p>
            <p className="text-white/55 text-[16px] leading-relaxed mb-10">
              No awkward silences. No robotic menus. Just a warm, capable voice that represents your business well.
            </p>
            <CallCTA label="Call Ruxi now" size="sm" />
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.1}>
            <div
              className="rounded-[20px] overflow-hidden"
              style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
            >
              <div
                className="flex items-center gap-3 px-5 py-3.5 border-b"
                style={{ borderColor: CARD_BORDER, background: 'rgba(255,255,255,0.03)' }}
              >
                <div className="w-2 h-2 rounded-full" style={{ background: AQUA }} />
                <span className="text-white/60 text-[13px] font-medium tracking-wide uppercase">Call Transcript</span>
                <span className="ml-auto text-white/30 text-[12px]">Live</span>
              </div>

              <div className="p-6 flex flex-col gap-4">
                {[
                  { role: 'Ruxi', msg: "Good morning, you've reached PRUXIN. I'm Ruxi — how can I help you today?", isRuxi: true },
                  { role: 'Caller', msg: "Hi, I'm looking to improve my product's onboarding flow. Not sure where to start.", isRuxi: false },
                  { role: 'Ruxi', msg: "That's something we can definitely help with. Could I get your name and the best way to reach you?", isRuxi: true },
                  { role: 'Caller', msg: "Sure — it's James, and my email is james@example.com.", isRuxi: false },
                  { role: 'Ruxi', msg: "Perfect, James. I'm noting that down. Would Thursday or Friday work for a 30-minute discovery call?", isRuxi: true },
                ].map((line, i) => (
                  <div key={i} className={`flex flex-col gap-1 ${line.isRuxi ? '' : 'items-end'}`}>
                    <span className="text-[11px] font-semibold tracking-[0.08em] uppercase" style={{ color: line.isRuxi ? AQUA : 'rgba(255,255,255,0.35)' }}>
                      {line.role}
                    </span>
                    <div
                      className="max-w-[85%] px-4 py-2.5 rounded-[14px] text-[14px] leading-relaxed"
                      style={{
                        background: line.isRuxi ? AQUA_DIM : 'rgba(255,255,255,0.06)',
                        color: line.isRuxi ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.65)',
                        border: `1px solid ${line.isRuxi ? AQUA_GLOW : 'transparent'}`,
                      }}
                    >
                      {line.msg}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          E) BENEFITS GRID
      ══════════════════════════════════════════════ */}
      <section className="py-[96px] px-6">
        <div className="max-w-[1280px] mx-auto">
          <RevealOnScroll className="text-center mb-16">
            <Label>What you get</Label>
            <h2 className="text-[clamp(28px,4vw,48px)] font-bold text-white leading-tight">
              Everything a receptionist does.<br />Without the overhead.
            </h2>
          </RevealOnScroll>

          <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-5" staggerDelay={0.08}>
            {benefits.map((b) => (
              <StaggerItem key={b.title}>
                <div
                  className="rounded-[18px] p-7 h-full transition-all duration-300 hover:-translate-y-1"
                  style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: AQUA_DIM, color: AQUA }}>
                    {b.icon}
                  </div>
                  <h4 className="text-white font-semibold text-[16px] mb-2">{b.title}</h4>
                  <p className="text-white/45 text-[14px] leading-relaxed">{b.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          F) PRICING
      ══════════════════════════════════════════════ */}
      <section className="py-[96px] px-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-[560px] mx-auto text-center">
          <RevealOnScroll>
            <Label>Pricing</Label>
            <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-white mb-4">
              Simple. Transparent.
            </h2>
            <p className="text-white/50 text-[16px] mb-12">
              No per-call pricing surprises. One setup, one monthly fee.
            </p>

            <div
              className="rounded-[24px] p-10 text-left relative overflow-hidden"
              style={{ background: CARD_BG, border: `1px solid ${AQUA_GLOW}` }}
            >
              <div
                className="absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none opacity-10"
                style={{ background: `radial-gradient(circle, ${AQUA} 0%, transparent 70%)` }}
              />

              <div className="relative">
                <span className="text-[13px] font-semibold uppercase tracking-[0.15em]" style={{ color: AQUA }}>Starter</span>
                <div className="mt-3 mb-1">
                  <span className="text-[48px] font-bold text-white leading-none">£199</span>
                  <span className="text-white/40 text-[16px] ml-2">setup</span>
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-white/70 text-[22px] font-semibold">from £149</span>
                  <span className="text-white/40 text-[14px]">/month</span>
                </div>
                <p className="text-white/30 text-[13px] mb-8">Twilio usage billed separately based on call volume.</p>

                <div className="flex flex-col gap-3 mb-10">
                  {[
                    'Dedicated UK number',
                    '24/7 call answering',
                    'Lead qualification',
                    'Call summaries by email',
                    'Booking flow (optional)',
                    'GDPR-responsible setup',
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <CheckCircle size={16} style={{ color: AQUA }} />
                      <span className="text-white/70 text-[15px]">{f}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={TEL}
                  className="w-full flex items-center justify-center gap-2.5 h-[52px] rounded-full font-semibold text-[16px] transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_30px_rgba(0,245,160,0.3)]"
                  style={{ background: AQUA, color: '#000' }}
                >
                  <Phone size={18} />
                  Call to discuss your call volume
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          G) FAQ
      ══════════════════════════════════════════════ */}
      <section
        id="faq"
        className="py-24 sm:py-32"
        style={{ background: DARK_BG }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">

            {/* LEFT — sticky label, heading, CTA */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: AQUA }}
              >
                FAQ
              </p>
              <h2
                className="text-3xl sm:text-4xl font-semibold leading-tight mb-6"
                style={{ color: '#F8FAFC' }}
              >
                Questions about Ruxi
              </h2>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: '#64748B' }}
              >
                If you don't find what you're looking for here,
                talk to Pranav directly.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
                style={{ color: AQUA }}
              >
                Get in touch
                <svg
                  width="14" height="14" viewBox="0 0 14 14"
                  fill="none" xmlns="http://www.w3.org/2000/svg"
                  className="translate-y-px"
                >
                  <path
                    d="M1 7h12M7 1l6 6-6 6"
                    stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            {/* RIGHT — accordion */}
            <div>
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    className={`border-b ${i === 0 ? 'border-t' : ''}`}
                    style={{ borderColor: CARD_BORDER }}
                  >
                    <button
                      onClick={() => toggle(i)}
                      className="w-full flex items-center justify-between gap-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span
                        className="text-[15px] font-[450] leading-snug transition-colors"
                        style={{ color: isOpen ? '#FFFFFF' : '#CBD5E1' }}
                      >
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={16}
                        className="shrink-0 transition-transform duration-200"
                        style={{
                          color: isOpen ? AQUA : '#475569',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p
                            className="text-[14px] leading-relaxed pb-5 pr-8 max-w-[560px]"
                            style={{ color: '#94A3B8' }}
                          >
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          H) FOUNDER CREDIBILITY  (clean page ending)
      ══════════════════════════════════════════════ */}
      <section className="py-[96px] px-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-[680px] mx-auto">
          <RevealOnScroll>
            <div
              className="rounded-[24px] p-10"
              style={{ background: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-[22px] font-bold shrink-0"
                  style={{ background: AQUA_DIM, color: AQUA, border: `1.5px solid ${AQUA_GLOW}` }}
                >
                  PR
                </div>
                <div>
                  <p className="text-white font-semibold text-[16px]">Pranav Raval</p>
                  <p className="text-white/40 text-[14px]">Founder, PRUXIN · Glasgow, UK</p>
                </div>
              </div>
              <blockquote
                className="text-white/70 text-[17px] leading-relaxed italic border-l-2 pl-6 mb-10"
                style={{ borderColor: AQUA }}
              >
                "I built Ruxi because I kept watching small businesses — including my own clients — lose warm leads to missed calls. The client who called at 5:02pm and left no voicemail. The tradesperson who was on a job and couldn't answer. We couldn't fix that with a hire. So we built Ruxi."
              </blockquote>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <CallCTA label="Call Ruxi now" size="md" />
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 h-[52px] px-8 text-[16px] font-semibold rounded-full border text-white transition-all duration-300 hover:bg-white/[0.06]"
                  style={{ borderColor: CARD_BORDER }}
                >
                  Talk to Pranav
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4"
        style={{ background: 'rgba(6,11,20,0.90)', backdropFilter: 'blur(16px)', borderTop: `1px solid ${CARD_BORDER}` }}
      >
        <a
          href={TEL}
          className="flex items-center justify-center gap-2.5 w-full h-[52px] rounded-full font-semibold text-[16px] transition-all duration-300"
          style={{ background: AQUA, color: '#000' }}
        >
          <Phone size={18} />
          Call Ruxi now
        </a>
      </div>

      {/* Bottom padding for sticky CTA on mobile */}
      <div className="md:hidden h-[80px]" />
    </div>
  );
}