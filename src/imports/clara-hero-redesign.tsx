Act as a Lead UI Engineer. File: ClaraPage.tsx only. Full hero redesign — layout change.
Objective
Convert the current stacked hero into a full-bleed cinematic hero. The solicitor image becomes the background. A dark overlay fades left-to-right — text lives on the dark left, image reveals on the right.
1. Import
Figma Make will auto-generate the asset import from the uploaded image. Add it at the top with existing imports as heroImage.
2. Replace the entire hero <section> content with this:
tsx<section className="relative min-h-screen flex items-center overflow-hidden">

  {/* ── Full-bleed background image ── */}
  <div className="absolute inset-0 z-0">
    <img
      src={heroImage}
      alt=""
      aria-hidden="true"
      className="w-full h-full object-cover object-center"
    />
    {/* Left-to-right overlay: dark on left for text legibility, transparent on right to reveal image */}
    <div
      className="absolute inset-0"
      style={{
        background: 'linear-gradient(to right, rgba(10,15,30,0.97) 0%, rgba(10,15,30,0.85) 35%, rgba(10,15,30,0.4) 60%, rgba(10,15,30,0.05) 100%)',
      }}
    />
    {/* Bottom fade to blend into next section */}
    <div
      className="absolute bottom-0 left-0 right-0 h-[30%]"
      style={{
        background: 'linear-gradient(to bottom, transparent 0%, var(--color-surface-dark) 100%)',
      }}
    />
  </div>

  {/* ── Ambient particles — keep existing ── */}
  <GridPattern opacity={0.03} size={60} />
  <FloatingParticles count={15} />

  {/* ── Text content — left-aligned, sits on dark overlay ── */}
  <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 py-[160px]">
    <div className="max-w-[560px]">

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

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="text-[clamp(40px,6vw,72px)] font-bold text-white leading-[1.0] mb-6 tracking-tight"
      >
        Your business never<br />misses another call.
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-[18px] text-white/55 leading-relaxed mb-12"
      >
        Answers instantly. Qualifies the lead. Books the call.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="flex flex-col sm:flex-row items-start gap-4"
      >
        <CallCTA label="Call Clara now" size="md" />
        
          href="#demo"
          className="inline-flex items-center gap-2 h-[52px] px-8 text-[16px] font-semibold rounded-full border text-white transition-all duration-300 hover:bg-white/[0.06]"
          style={{ borderColor: CARD_BORDER }}
        >
          Hear Clara in action
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
Hard constraints

ClaraPage.tsx only — no other file
Keep all existing constants: AQUA, AQUA_DIM, AQUA_GLOW, CARD_BORDER
Keep all existing imports — do not remove anything
items-start on the CTA flex container — left-aligns buttons to match the text column
Do not touch any section below the hero