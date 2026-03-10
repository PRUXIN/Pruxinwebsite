import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Eye, ExternalLink } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { RevealOnScroll, MagneticWrap } from '../ui/effects';

// ─── Threecolts HUB real screenshots ─────────────────────────────────────────
import hubImg1 from 'figma:asset/bc3f84889b5aefc773df5d8e78faaa3042836ba8.png';
import hubImg2 from 'figma:asset/a811de27699ad1ae1920285e81c9d8868fc2e249.png';
import hubImg3 from 'figma:asset/5563cc8977f651420485837644ab270649421a4a.png';
import hubImg4 from 'figma:asset/8b78dc8d30d5be297c5d241ddeaddcc9027ef912.png';

// ─── Threecolts BOB real screenshots ─────────────────────────────────────────
import bobImg1 from 'figma:asset/a5f9cf63a521169249094092fab3517f9b1e8f78.png';
import bobImg2 from 'figma:asset/e56e91aaff2c31bf21ad75964cbf20eb064ea88d.png';
import bobImg3 from 'figma:asset/96bdefe88c9c857d0d00c812415b79c52fe0a5ba.png';
import bobImg4 from 'figma:asset/c4a3f3d1ac5f7b9efd2d7611eede3a44e9298d2f.png';

// ─── Threecolts Agency Portal real screenshot ─────────────────────────────────
import agencyImg1 from 'figma:asset/39bbb16d1f913fbb272604a03289fcbe744062e5.png';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProjectImage {
  url: string;
  caption: string;
}

interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  accentColor: string;
  accentLight: string;
  images: ProjectImage[];
  problem: string;
  role: string;
  whatIDid: string[];
  outcome: string;
  visible?: boolean; // omit or true = shown; false = hidden
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROJECTS: Project[] = [
  {
    id: 'yoodrive',
    title: 'YooDrive – Trust-First Marketplace UX',
    category: 'Marketplace',
    tags: ['Marketplace', 'GDPR', 'Payments'],
    visible: false, // TEMPORARILY HIDDEN — awaiting mockup images
    accentColor: '#2563EB',
    accentLight: '#EFF6FF',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1764547169175-9b7d2736324e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcml2aW5nJTIwbGVzc29uJTIwY2FyJTIwaW5zdHJ1Y3RvciUyMHB1cGlsfGVufDF8fHx8MTc3MjA1Mjg0NHww&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Platform Hero — Instructor–Pupil Experience',
      },
      {
        url: 'https://images.unsplash.com/photo-1620887110499-d54ecf17cefb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwdmVyaWZpY2F0aW9uJTIwaWRlbnRpdHklMjBvbmJvYXJkaW5nJTIwZm9ybXxlbnwxfHx8fDE3NzIwNTI4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'DVSA Instructor Verification Onboarding',
      },
      {
        url: 'https://images.unsplash.com/photo-1750056393356-d1de9d222a29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBwYXltZW50JTIwY2hlY2tvdXQlMjBVSSUyMG1vYmlsZXxlbnwxfHx8fDE3NzIwNTI4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Stripe Connect Payment & Multi-Party Payout',
      },
      {
        url: 'https://images.unsplash.com/photo-1592323401640-9c24ed330baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjByZXNwb25zaXZlJTIwYXBwJTIwZGVzaWduJTIwc2NyZWVufGVufDF8fHx8MTc3MjA1Mjg0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Mobile-First Responsive Design',
      },
      {
        url: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVzdCUyMHJldmlldyUyMHJhdGluZyUyMHN0YXIlMjB1c2VyJTIwZmVlZGJhY2t8ZW58MXx8fHwxNzcyMDUyODYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Transaction-Verified Review System',
      },
    ],
    problem:
      "UK driving lesson marketplace plagued by fake instructors, unverified payments, compliance gaps, and user distrust. Learners couldn't verify who they were booking, and instructors dealt with cancellations and cash-only scams.",
    role: 'Product Owner, UX Architect, Business Analyst, Delivery Manager',
    whatIDid: [
      'Mapped user journeys for 4 user types: ADIs, PDIs, pupils, and driving schools',
      'Designed DVSA-verified instructor onboarding with identity verification',
      'Built Stripe Connect payment logic with multi-party payouts',
      'Created GDPR/DMCC-compliant messaging and consent system',
      'Designed transaction-verified review system to eliminate fake feedback',
      'Reduced onboarding friction by removing 3 unnecessary verification steps',
      'Built school dashboard for team oversight without violating GDPR',
    ],
    outcome:
      'Clear, compliant, trust-first marketplace with verified instructors, secure payments, and real reviews. Eliminated the fake instructor problem while reducing booking friction and maintaining full regulatory compliance.',
  },
  {
    id: 'threecolts-hub',
    title: 'Threecolts HUB – Unified SaaS Dashboard',
    category: 'SaaS',
    tags: ['SaaS', 'Dashboard', 'Multi-product'],
    accentColor: '#7C3AED',
    accentLight: '#F5F3FF',
    images: [
      {
        url: hubImg1,
        caption: 'Unified Dashboard Overview — Manage subscriptions across all products',
      },
      {
        url: hubImg2,
        caption: 'User Management — Invite, manage roles and authentication in one place',
      },
      {
        url: hubImg3,
        caption: 'Centralised Settings Panel — Company info, Amazon account & brand logo',
      },
      {
        url: hubImg4,
        caption: 'Payment & Invoice — Consolidated billing, invoices and payment methods',
      },
    ],
    problem:
      'Users had to context-switch between separate platforms, each with its own login, navigation, and data model — with no unified view of performance or settings across products.',
    role: 'UX Designer',
    whatIDid: [
      'Designed unified HUB dashboard to centralise access to all products',
      'Created single navigation for product switching without re-authentication',
      'Built consolidated data views showing cross-product performance metrics',
      'Simplified account settings and billing into one location',
      'Reduced cognitive load using consistent UI patterns across all tools',
      'Designed clear onboarding for new users activating multiple products',
    ],
    outcome:
      'Unified product experience that eliminated platform-switching friction and significantly improved cross-product adoption rates.',
  },
  {
    id: 'threecolts-bob',
    title: 'Threecolts BOB – Internal Customer Service Portal',
    category: 'B2B',
    tags: ['Internal Tool', 'Admin Portal', 'B2B'],
    accentColor: '#0D9488',
    accentLight: '#F0FDFA',
    images: [
      {
        url: bobImg1,
        caption: 'Universal Search — Find any user, account, or organisation instantly',
      },
      {
        url: bobImg2,
        caption: 'Search Results — Multi-account user lookup by email address',
      },
      {
        url: bobImg3,
        caption: 'Account Profile — Payment history, invoice status and admin actions',
      },
      {
        url: bobImg4,
        caption: 'Issue Credit Panel — Audited admin action with support ticket link',
      },
    ],
    problem:
      'Threecolts Customer Service team had no self-service tools to resolve user issues. Every admin task — searching for accounts, updating user emails, moving accounts between organisations, issuing refunds, creating password resets — required asking engineering for help. This created massive bottlenecks, slow resolution times, and constant engineering interruptions.',
    role: 'UX Designer, Design Sprint Facilitator',
    whatIDid: [
      'Facilitated Design Sprint workshop to identify CS team pain points and prioritise solutions',
      'Created user story map using MoSCoW prioritisation framework (Must/Should/Could/Won\'t Have)',
      'Mapped user journeys for 5 workflow categories: Self-service, User management, Organisation management, Account management, and BOB landing flows',
      'Conducted competitive analysis studying admin portal patterns from Airbnb, Slack, Webflow, Notion, and Expedia',
      'Designed Universal Search enabling CS team to find any organisation, account, or user instantly',
      'Designed account profile screens with admin capabilities: email changes, account transfers, bulk operations, password resets, and refund processing',
      'Created detailed MVP user flow covering all critical CS self-service scenarios',
      'Developed wireframes and high-fidelity UI showing Universal Search and Account Profile interfaces',
    ],
    outcome:
      "Delivered an internal admin portal that eliminated the CS team's dependency on engineering. Enabled complete self-service for customer support operations, dramatically reducing ticket resolution time and minimising data exposure risk. Empowered CS team to resolve issues independently across all Threecolts products.",
  },
  {
    id: 'threecolts-agency',
    title: 'Threecolts Agency Portal – Multi-Client System',
    category: 'B2B',
    tags: ['Multi-tenant', 'Permissions', 'B2B'],
    accentColor: '#EC4899',
    accentLight: '#FDF2F8',
    images: [
      {
        url: agencyImg1,
        caption: 'Multi-Client Dashboard with Permissions & Reporting',
      },
    ],
    problem:
      'Agencies managing dozens of clients had no centralised overview. They logged into separate accounts, had no consolidated billing view, and couldn\'t control what each team member could see or edit.',
    role: 'UX Designer',
    whatIDid: [
      'Designed multi-tenant agency dashboard with instant client switching',
      'Created granular permission system: view, edit, billing, and admin roles',
      'Built consolidated reporting across all managed client accounts',
      'Designed white-label customisation panel with brand colours and logo upload',
      'Simplified agency-side client onboarding from 9 steps to 3',
      'Created billing dashboard showing MRR, churn, and per-client revenue',
    ],
    outcome:
      'Agencies managed dozens of accounts from one interface, reducing admin overhead significantly and enabling cleaner client separation without multiple logins.',
  },
  {
    id: 'smaato',
    title: 'Smaato – Mobile Ad Monetisation UX',
    category: 'AdTech',
    tags: ['AdTech', 'Analytics', 'Optimisation'],
    visible: false, // TEMPORARILY HIDDEN — awaiting mockup images
    accentColor: '#F59E0B',
    accentLight: '#FFFBEB',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1602333869619-f05b7f19d3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhZHZlcnRpc2luZyUyMG1vbmV0aXphdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyMDUyODUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Mobile Ad Platform Overview',
      },
      {
        url: 'https://images.unsplash.com/photo-1587400563263-e77a5590bfe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaCUyMHJldmVudWUlMjBvcHRpbWl6YXRpb24lMjBncm93dGglMjBjaGFydHxlbnwxfHx8fDE3NzIwNTI4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Revenue & eCPM Optimisation Charts',
      },
      {
        url: 'https://images.unsplash.com/photo-1735639013995-086e648eaa38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwZXhwZXJpZW5jZSUyMHJlc2VhcmNoJTIwd2hpdGVib2FyZCUyMHN0aWNreSUyMG5vdGVzfGVufDF8fHx8MTc3MjA1Mjg1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'UX Research & Publisher Feedback',
      },
      {
        url: 'https://images.unsplash.com/photo-1494122504854-93d897bc884b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRwbGFjZSUyMHNlbGxlciUyMGJ1eWVyJTIwdHJhbnNhY3Rpb24lMjBzZWN1cmV8ZW58MXx8fHwxNzcyMDUyODYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        caption: 'Campaign Setup & A/B Comparison',
      },
    ],
    problem:
      'Publishers faced an overwhelming dashboard crammed with data but no clear priority order. Campaign setup involved 7+ steps with no guidance, leading to misconfigured ads and lost revenue.',
    role: 'UX Designer',
    whatIDid: [
      'Redesigned dashboard to surface only three primary metrics: revenue, fill rate, eCPM',
      'Simplified campaign setup by collapsing unnecessary configuration steps',
      'Created visual performance indicators with trend arrows and anomaly flags',
      'Designed side-by-side A/B testing comparison views',
      'Improved data visualisation for revenue trends and demand-side anomalies',
      'Reduced campaign optimisation clicks from 7 to 3',
    ],
    outcome:
      'Publishers identified optimisation opportunities faster, reducing daily management time while improving average revenue per session through better-targeted inventory decisions.',
  },
];

const ALL_CATEGORIES = ['All', 'Marketplace', 'SaaS', 'B2B', 'AdTech'];

// ─── Lightbox Component ───────────────────────────────────────────────────────

interface LightboxProps {
  project: Project;
  startIndex: number;
  onClose: () => void;
}

function Lightbox({ project, startIndex, onClose }: LightboxProps) {
  const [idx, setIdx] = useState(startIndex);
  const total = project.images.length;
  const current = project.images[idx];
  const thumbsRef = useRef<HTMLDivElement>(null);

  const prev = useCallback(() => setIdx((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setIdx((i) => (i + 1) % total), [total]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, prev, next]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const active = thumbsRef.current?.querySelector('[data-active="true"]') as HTMLElement | null;
    active?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [idx]);

  const swipe = useSwipeable({ onSwipedLeft: next, onSwipedRight: prev, trackMouse: false });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-[999] flex flex-col"
      style={{ background: 'rgba(5,5,5,0.97)', backdropFilter: 'blur(16px)' }}
      onClick={onClose}
    >
      {/* ── Top bar ── */}
      <div
        className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b"
        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: project label + counter */}
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: project.accentColor }}
            />
            <p className="text-white/40 text-[11px] font-semibold uppercase tracking-widest">
              {project.category}
            </p>
          </div>
          <p className="text-white text-[14px] font-semibold leading-tight">{project.title}</p>
        </div>

        {/* Right: counter + close */}
        <div className="flex items-center gap-4">
          <span className="text-white/40 text-[13px] tabular-nums">
            {idx + 1} / {total}
          </span>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ background: 'rgba(255,255,255,0.1)' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            aria-label="Close"
          >
            <X size={18} className="text-white" />
          </button>
        </div>
      </div>

      {/* ── Main image ── */}
      <div
        {...swipe}
        className="flex-1 relative flex items-center justify-center px-16 md:px-24 min-h-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prev — only shown when there are 2+ images */}
        {total > 1 && (
          <button
            onClick={prev}
            className="absolute left-3 md:left-5 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ background: 'rgba(255,255,255,0.08)' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.18)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
          >
            <ChevronLeft size={22} className="text-white" />
          </button>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.02, y: -6 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center max-h-full"
          >
            <img
              src={current.url}
              alt={current.caption}
              className="max-h-[calc(100vh-220px)] max-w-full object-contain rounded-2xl"
              style={{ boxShadow: '0 40px 100px rgba(0,0,0,0.7)' }}
            />
            <p className="mt-4 text-white/50 text-[13px] text-center tracking-wide">
              {current.caption}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Next — only shown when there are 2+ images */}
        {total > 1 && (
          <button
            onClick={next}
            className="absolute right-3 md:right-5 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ background: 'rgba(255,255,255,0.08)' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.18)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
          >
            <ChevronRight size={22} className="text-white" />
          </button>
        )}
      </div>

      {/* ── Thumbnail strip — only shown when there are 2+ images ── */}
      {total > 1 && (
        <div
          ref={thumbsRef}
          className="flex-shrink-0 flex items-center justify-center gap-2.5 px-6 py-4 overflow-x-auto"
          style={{ scrollbarWidth: 'none', borderTop: '1px solid rgba(255,255,255,0.07)' }}
          onClick={(e) => e.stopPropagation()}
        >
          {project.images.map((img, i) => (
            <button
              key={i}
              data-active={i === idx ? 'true' : 'false'}
              onClick={() => setIdx(i)}
              className="flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200"
              style={{
                width: 68,
                height: 46,
                outline: i === idx ? `2px solid ${project.accentColor}` : '2px solid transparent',
                outlineOffset: 2,
                opacity: i === idx ? 1 : 0.38,
                transform: i === idx ? 'scale(1.06)' : 'scale(1)',
              }}
            >
              <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}

// ─── Project Image Gallery (inside card) ─────────────────────────────────────

function ProjectGallery({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (index: number) => void;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeThumb, setActiveThumb] = useState(0);

  const featured = project.images[activeThumb];
  const thumbnails = project.images;

  return (
    <div className="mb-8 md:mb-10">
      {/* Featured image */}
      <div
        className="relative w-full overflow-hidden rounded-2xl cursor-pointer group mb-3"
        style={{ aspectRatio: '16/9' }}
        onClick={() => onOpen(activeThumb)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={activeThumb}
            src={featured.url}
            alt={featured.caption}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Hover overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.35)' }}>
          <div
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-[14px] font-semibold"
            style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)' }}
          >
            <Eye size={16} />
            View in gallery
          </div>
        </div>

        {/* Image count badge */}
        <div
          className="absolute top-3 right-3 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full"
          style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}
        >
          {project.images.length} {project.images.length === 1 ? 'image' : 'images'}
        </div>

        {/* Caption bar */}
        <div
          className="absolute bottom-0 left-0 right-0 px-4 py-3 text-white text-[12px] font-medium"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)',
          }}
        >
          {featured.caption}
        </div>
      </div>

      {/* Thumbnail strip — only shown when there are 2+ images */}
      {thumbnails.length > 1 && (
        <div className="flex gap-2.5">
          {thumbnails.map((img, i) => (
            <button
              key={i}
              onMouseEnter={() => setActiveThumb(i)}
              onClick={() => onOpen(i)}
              className="relative flex-1 overflow-hidden rounded-xl transition-all duration-200"
              style={{
                aspectRatio: '16/9',
                outline: activeThumb === i ? `2px solid ${project.accentColor}` : '2px solid transparent',
                outlineOffset: 2,
                opacity: activeThumb === i ? 1 : 0.6,
              }}
            >
              <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  index,
  onOpenLightbox,
}: {
  project: Project;
  index: number;
  onOpenLightbox: (project: Project, imageIndex: number) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-[28px] overflow-hidden border border-gray-100 transition-shadow duration-500"
      style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.06)' }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 12px 56px rgba(0,0,0,0.11)')}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 4px 32px rgba(0,0,0,0.06)')}
    >
      {/* Accent top bar */}
      <div className="h-1 w-full" style={{ background: project.accentColor }} />

      <div className="p-7 md:p-10">
        {/* Image Gallery */}
        <ProjectGallery project={project} onOpen={(i) => onOpenLightbox(project, i)} />

        {/* Card Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900 leading-tight" style={{ letterSpacing: '-0.01em' }}>
              {project.title}
            </h2>
            <span
              className="flex-shrink-0 text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{ background: project.accentLight, color: project.accentColor }}
            >
              {project.category}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[12px] font-medium px-3 py-1 rounded-full border"
                style={{
                  color: project.accentColor,
                  borderColor: project.accentColor + '30',
                  background: project.accentLight,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-100 mb-8" />

        {/* Case Study Content — 2 col */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">

          {/* Left: Problem + Role */}
          <div className="space-y-7">
            <div>
              <p
                className="text-[11px] font-bold uppercase tracking-widest mb-2.5"
                style={{ color: project.accentColor }}
              >
                The Problem
              </p>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div>
              <p
                className="text-[11px] font-bold uppercase tracking-widest mb-2.5"
                style={{ color: project.accentColor }}
              >
                My Role
              </p>
              <p className="text-[15px] text-gray-800 font-medium leading-relaxed">
                {project.role}
              </p>
            </div>
          </div>

          {/* Right: What I Did + Outcome */}
          <div className="space-y-7">
            <div>
              <p
                className="text-[11px] font-bold uppercase tracking-widest mb-3"
                style={{ color: project.accentColor }}
              >
                What I Did
              </p>
              <ul className="space-y-2.5">
                {project.whatIDid.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.06 + i * 0.04, duration: 0.3 }}
                    className="flex items-start gap-3 text-[14px] text-gray-600 leading-snug"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-[6px] flex-shrink-0"
                      style={{ background: project.accentColor }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Outcome box */}
            <div
              className="rounded-2xl p-5 border"
              style={{
                background: project.accentLight,
                borderColor: project.accentColor + '22',
              }}
            >
              <p
                className="text-[11px] font-bold uppercase tracking-widest mb-2"
                style={{ color: project.accentColor }}
              >
                Outcome
              </p>
              <p className="text-[14px] text-gray-700 leading-relaxed font-medium">
                {project.outcome}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  useEffect(() => {
    document.title = 'Projects | UX Case Studies & Product Design Work — PRUXIN';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'UX and product design case studies from PRUXIN. Threecolts HUB, YooDrive marketplace, SaaS dashboards, onboarding flows, and more.');
    return () => { document.title = 'PRUXIN | Clarity-First UX Design for SaaS & Enterprise'; };
  }, []);

  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [filterStuck, setFilterStuck] = useState(false);
  const projectsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setFilterStuck(window.scrollY >= 200);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Only show projects where visible !== false
  const VISIBLE_PROJECTS = PROJECTS.filter((p) => p.visible !== false);

  const filtered =
    activeFilter === 'All'
      ? VISIBLE_PROJECTS
      : VISIBLE_PROJECTS.filter((p) => p.category === activeFilter);

  const openLightbox = (project: Project, imageIndex: number) => {
    setLightboxProject(project);
    setLightboxIndex(imageIndex);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-[140px] pb-[72px] px-6 bg-[var(--color-gray-50)] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Subtle glow orbs */}
        <div className="absolute -top-20 left-1/4 w-[400px] h-[300px] pointer-events-none opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }} />
        <div className="absolute -top-10 right-1/4 w-[300px] h-[250px] pointer-events-none opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)' }} />

        <div className="max-w-[960px] mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[12px] font-semibold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="type-display-small text-[var(--color-black)] mb-5"
          >
            Work that{' '}
            <span className="gradient-text-blue-purple">speaks clearly</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="type-body-large text-[var(--color-gray-600)] max-w-2xl mx-auto"
          >
            Case studies showing how clarity-first UX reduces friction and improves activation.
          </motion.p>
        </div>
      </section>

      {/* ── Sticky Filter Tabs ── */}
      <div
        className={`sticky top-[64px] z-40 transition-all duration-300 ${
          filterStuck
            ? 'bg-black/20 backdrop-blur-xl border-b border-white/10'
            : 'bg-[var(--color-gray-50)] border-b border-transparent'
        }`}
        style={{ boxShadow: '0 1px 12px rgba(0,0,0,0.04)' }}>
        <div className="max-w-[1100px] mx-auto px-6 py-4">
          <div className="flex items-center gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            {ALL_CATEGORIES.map((cat) => {
              const count =
                cat === 'All'
                  ? VISIBLE_PROJECTS.length
                  : VISIBLE_PROJECTS.filter((p) => p.category === cat).length;
              const active = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveFilter(cat);
                    setTimeout(() => {
                      projectsGridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 50);
                  }}
                  className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200"
                  style={{
                    background: active ? '#1d1d1f' : '#F5F5F7',
                    color: active ? '#fff' : '#6B7280',
                  }}
                >
                  {cat}
                  <span
                    className="text-[11px] px-1.5 py-0.5 rounded-full"
                    style={{
                      background: active ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.08)',
                      color: active ? 'rgba(255,255,255,0.9)' : '#9CA3AF',
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Project Cards ── */}
      <section className="py-14 px-6 bg-[var(--color-gray-50)]">
        <div className="max-w-[1100px] mx-auto" ref={projectsGridRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  onOpenLightbox={openLightbox}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-gray-400 text-[15px]">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-[120px] px-6 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, var(--color-gray-50) 0%, #EDE9FE 100%)' }}
      >
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 70%)' }}
        />
        <div className="max-w-[640px] mx-auto relative z-10">
          <RevealOnScroll>
            <h2 className="type-headline-large text-[var(--color-black)] mb-6">
              Want similar results for your product?
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="type-body-large text-[var(--color-gray-600)] mb-10">
              Whether you need a unified dashboard, automation platform, or multi-tenant system — I
              can help simplify it.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <MagneticWrap strength={0.1}>
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center h-[56px] px-12 bg-[var(--color-black)] text-white text-[18px] font-medium rounded-full overflow-hidden transition-all duration-300 shadow-strong hover:shadow-heavy hover:scale-[1.02]"
              >
                <span className="relative z-10">Let's Talk</span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              </Link>
            </MagneticWrap>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxProject && (
          <Lightbox
            project={lightboxProject}
            startIndex={lightboxIndex}
            onClose={() => setLightboxProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}