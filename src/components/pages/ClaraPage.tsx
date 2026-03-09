import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  Phone, PhoneCall, CheckCircle, ChevronDown,
  Mic, Zap, Calendar, FileText, ArrowRight, Star, Shield,
  Clock, TrendingUp, AlertCircle,
} from 'lucide-react';
import {
  RevealOnScroll, StaggerContainer, StaggerItem, FloatingParticles, GridPattern,
} from '../ui/effects';

// Step 6 — SEO meta constants
const PAGE_TITLE = 'Clara — AI Voice Receptionist for UK Businesses | PRUXIN';
const PAGE_META_DESC = 'Clara answers every inbound call, qualifies your leads, and books discovery calls automatically. No voicemail. No missed leads. Call +44 131 381 5821 and hear her in action.';

const AQUA = '#14B8A6';
const AQUA_DIM = 'rgba(20,184,166,0.12)';
const AQUA_GLOW = 'rgba(20,184,166,0.25)';
const DARK_BG = '#060B14';
const CARD_BG = 'rgba(255,255,255,0.04)';
const CARD_BORDER = 'rgba(255,255,255,0.08)';
const TEL = 'tel:+441313815821';
const DISPLAY_NUMBER = '+44 131 381 5821';

/* ── Waveform ── */
function Waveform() {
  const bars = [0.4, 0.7, 1, 0.6, 0.9, 0.5, 0.8, 0.4, 0.65, 0.9, 0.55, 0.75];
  return (
    <div className="flex items-center gap-[3px] h-10">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-full"
          style={{ backgroundColor: AQUA }}
          animate={{ scaleY: [h * 0.5, h, h * 0.3, h * 0.8, h * 0.5] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

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
function CallCTA({ label = 'Call Clara now', size = 'md' }: { label?: string; size?: 'sm' | 'md' | 'lg' }) {
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

/* ── Step 8: Static FAQ item — always visible, no toggle ── */
function FAQItem({ q, a, cta }: { q: string; a: string; cta?: { label: string; to: string } }) {
  return (
    <div className="border-b py-6" style={{ borderColor: CARD_BORDER }}>
      <h4 className="text-white font-semibold text-[16px] leading-snug mb-3">{q}</h4>
      <p className="text-white/60 text-[15px] leading-relaxed">
        {a}
        {cta && (
          <>
            {' '}
            <Link
              to={cta.to}
              className="inline-flex items-center gap-1 font-medium hover:opacity-80 transition-opacity"
              style={{ color: AQUA }}
            >
              {cta.label}
              <ArrowRight size={13} />
            </Link>
          </>
        )}
      </p>
    </div>
  );
}

export default function ClaraPage() {
  // Step 6 — set page title and meta description
  useEffect(() => {
    const prevTitle = document.title;
    document.title = PAGE_TITLE;

    // Update or create meta description
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

  // Step 8 — Updated FAQ answers, always visible
  const faqs = [
    {
      q: 'Does Clara sound human?',
      a: 'Yes. She uses a natural British voice and has a real conversation — not a phone tree. Call +44 131 381 5821 and hear for yourself.',
    },
    {
      q: 'Can she transfer calls?',
      a: 'Yes. A fallback to your mobile or office can be configured for urgent calls.',
    },
    {
      q: 'Are calls recorded?',
      a: 'They can be. A disclosure line is added at the start of each call. You control the recording setting.',
    },
    {
      q: 'Is it GDPR-compliant?',
      a: 'Clara is configured for GDPR-responsible operation — clear disclosure, minimal data capture, retention you control.',
    },
    {
      q: 'What businesses is Clara best for?',
      a: 'Any UK service business relying on phone calls — trades, clinics, agencies, consultants, beauty, estate agents, small teams without a receptionist.',
    },
    {
      q: 'How fast is setup?',
      a: "It depends on the complexity of your workflow. A straightforward AI receptionist setup is faster than a multi-step automation system with integrations. Once you share your requirements, Pranav will analyse them and give you an exact timeline — no guesswork, no generic promises. The right way to start is a conversation.",
      cta: { label: 'Talk to Pranav', to: '/contact' },
    },
  ];

  const benefits = [
    { icon: <Zap size={22} />, title: 'Answers instantly', desc: 'No rings, no waiting. Clara picks up on the first ring, every time.' },
    { icon: <CheckCircle size={22} />, title: 'Qualifies the lead', desc: 'Asks the right questions so you only spend time on relevant enquiries.' },
    { icon: <Calendar size={22} />, title: 'Books the meeting', desc: 'Clara can offer available slots and confirm discovery calls directly.' },
    { icon: <FileText size={22} />, title: 'Logs every call', desc: 'Full call summaries sent to you — no detail ever slips through.' },
    { icon: <Phone size={22} />, title: 'UK number included', desc: 'A dedicated UK number is provisioned as part of your setup.' },
    { icon: <Shield size={22} />, title: 'Responsible data handling', desc: 'Configured for GDPR-responsible operation from day one.' },
  ];

  // Step 7 — How it works: single instance only, defined once
  const steps = [
    { n: '01', icon: <PhoneCall size={22} />, title: 'Customer calls', desc: 'Your dedicated UK number rings. Clara answers instantly.' },
    { n: '02', icon: <Mic size={22} />, title: 'Clara qualifies', desc: 'She asks your pre-set questions to understand the lead.' },
    { n: '03', icon: <FileText size={22} />, title: 'Details captured', desc: 'Name, need, budget, urgency — all logged automatically.' },
    { n: '04', icon: <Calendar size={22} />, title: 'Meeting booked', desc: 'Clara offers availability and confirms the discovery call.' },
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
      desc: 'A single missed call from a qualified lead can cost more than a month of Clara.',
    },
  ];

  return (
    <div style={{ background: DARK_BG, minHeight: '100vh' }}>

      {/* ══════════════════════════════════════════════
          A) HERO
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-[130px] pb-[80px] px-6 overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 20%, rgba(0,245,160,0.10) 0%, transparent 70%)`,
        }} />
        <GridPattern opacity={0.04} size={60} />
        <FloatingParticles count={25} />

        <div className="relative z-10 max-w-[800px] mx-auto">
          {/* Live badge */}
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10"
            style={{ background: AQUA_DIM, border: `1px solid ${AQUA_GLOW}` }}
          >
            <motion.span
              className="w-2 h-2 rounded-full"
              style={{ background: AQUA }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-[13px] font-medium tracking-wide" style={{ color: AQUA }}>
              Clara is live and answering calls
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(40px,7vw,80px)] font-bold text-white leading-[1.0] mb-6 tracking-tight"
          >
            Your business never<br />misses another call.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[18px] text-white/55 leading-relaxed mb-12 max-w-[560px] mx-auto"
          >
            Answers instantly. Qualifies the lead. Books the call.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <CallCTA label="Call Clara now" size="md" />
            <a
              href="#demo"
              className="inline-flex items-center gap-2 h-[52px] px-8 text-[16px] font-semibold rounded-full border text-white transition-all duration-300 hover:bg-white/[0.06]"
              style={{ borderColor: CARD_BORDER }}
            >
              Hear Clara in action
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={22} />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════
          B) LIVE DEMO BLOCK
      ══════════════════════════════════════════════ */}
      <section id="demo" className="py-[96px] px-6">
        <div className="max-w-[680px] mx-auto">
          <RevealOnScroll>
            <div
              className="rounded-[28px] p-10 md:p-14 text-center"
              style={{ background: AQUA_DIM, border: `1px solid ${AQUA_GLOW}` }}
            >
              <Label>Live demo line</Label>

              <a
                href={TEL}
                className="block text-[clamp(36px,6vw,64px)] font-bold mb-4 tracking-tight transition-opacity hover:opacity-80"
                style={{ color: AQUA }}
              >
                {DISPLAY_NUMBER}
              </a>

              <div className="flex justify-center mb-6">
                <Waveform />
              </div>

              <p className="text-white/50 text-[16px] mb-8">
                It's a real call. No forms, no menus, no waiting.
              </p>

              <CallCTA label="Call now" size="md" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          C) PROBLEM SECTION
      ══════════════════════════════════════════════ */}
      <section className="py-[96px] px-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-[1100px] mx-auto">
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
          D) HOW IT WORKS — Step 7: single instance only
      ══════════════════════════════════════════════ */}
      <section className="py-[96px] px-6">
        <div className="max-w-[1100px] mx-auto">
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
          E) REAL CONVERSATION
      ══════════════════════════════════════════════ */}
      <section className="py-[96px] px-6" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-14 items-center">
          <RevealOnScroll direction="left">
            <Label>Real conversation</Label>
            <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-white leading-tight mb-6">
              Clara sounds professional.<br />Every single call.
            </h2>
            <p className="text-white/55 text-[16px] leading-relaxed mb-6">
              She greets callers by your business name, handles common questions naturally, and keeps the conversation focused on what you need to know.
            </p>
            <p className="text-white/55 text-[16px] leading-relaxed">
              No awkward silences. No robotic menus. Just a warm, capable voice that represents your business well.
            </p>
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
                  { role: 'Clara', msg: "Good morning, you've reached PRUXIN. I'm Clara — how can I help you today?", isClara: true },
                  { role: 'Caller', msg: "Hi, I'm looking to improve my product's onboarding flow. Not sure where to start.", isClara: false },
                  { role: 'Clara', msg: "That's something we can definitely help with. Could I get your name and the best way to reach you?", isClara: true },
                  { role: 'Caller', msg: "Sure — it's James, and my email is james@example.com.", isClara: false },
                  { role: 'Clara', msg: "Perfect, James. I'm noting that down. Would Thursday or Friday work for a 30-minute discovery call?", isClara: true },
                ].map((line, i) => (
                  <div key={i} className={`flex flex-col gap-1 ${line.isClara ? '' : 'items-end'}`}>
                    <span className="text-[11px] font-semibold tracking-[0.08em] uppercase" style={{ color: line.isClara ? AQUA : 'rgba(255,255,255,0.35)' }}>
                      {line.role}
                    </span>
                    <div
                      className="max-w-[85%] px-4 py-2.5 rounded-[14px] text-[14px] leading-relaxed"
                      style={{
                        background: line.isClara ? AQUA_DIM : 'rgba(255,255,255,0.06)',
                        color: line.isClara ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.65)',
                        border: `1px solid ${line.isClara ? AQUA_GLOW : 'transparent'}`,
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
          F) BENEFITS GRID
      ══════════════════════════════════════════════ */}
      <section className="py-[96px] px-6">
        <div className="max-w-[1100px] mx-auto">
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
          G) PRICING
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
              <div className="absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none opacity-10"
                style={{ background: `radial-gradient(circle, ${AQUA} 0%, transparent 70%)` }} />

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
                  className="w-full flex items-center justify-center gap-2.5 h-[52px] rounded-full font-semibold text-[16px] transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_30px_rgba(0,245,160,0.3)] px-[16px] py-[12px]"
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
          H) FAQ — Step 8: all answers visible by default, updated copy
      ══════════════════════════════════════════════ */}
      <section className="py-[96px] px-6">
        <div className="max-w-[720px] mx-auto">
          <RevealOnScroll className="text-center mb-12">
            <Label>FAQ</Label>
            <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-white">
              Common questions
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <div style={{ borderTop: `1px solid ${CARD_BORDER}` }}>
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  q={faq.q}
                  a={faq.a}
                  cta={faq.cta}
                />
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          I) FOUNDER CREDIBILITY
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
              <blockquote className="text-white/70 text-[17px] leading-relaxed italic border-l-2 pl-6" style={{ borderColor: AQUA }}>
                "I built Clara because I kept watching small businesses — including my own clients — lose warm leads to missed calls. The client who called at 5:02pm and left no voicemail. The tradesperson who was on a job and couldn't answer. We couldn't fix that with a hire. So we built Clara."
              </blockquote>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          J) FINAL CTA
      ══════════════════════════════════════════════ */}
      <section className="py-[120px] px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 100%, rgba(0,245,160,0.12) 0%, transparent 70%)`,
        }} />
        <GridPattern opacity={0.03} size={60} />

        <div className="max-w-[640px] mx-auto relative z-10">
          <RevealOnScroll>
            <h2 className="text-[clamp(40px,7vw,80px)] font-bold text-white leading-tight mb-4 tracking-tight">
              Call Clara.<br />Right now.
            </h2>
            <p className="text-white/45 text-[18px] mb-6">Real call. Real AI. Real result.</p>

            <a
              href={TEL}
              className="block text-[clamp(24px,4vw,44px)] font-bold mb-10 tracking-tight transition-opacity hover:opacity-70"
              style={{ color: AQUA }}
            >
              {DISPLAY_NUMBER}
            </a>

            <CallCTA label="Call Clara now" size="lg" />

            <p className="text-white/25 text-[13px] mt-8">
              UK number · Call logs included · No voicemail · Built for small teams
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          STICKY MOBILE CTA
      ══════════════════════════════════════════════ */}
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
          Call Clara now
        </a>
      </div>

      {/* Bottom padding for sticky CTA on mobile */}
      <div className="md:hidden h-[80px]" />
    </div>
  );
}