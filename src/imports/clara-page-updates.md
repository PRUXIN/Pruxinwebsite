In ClaraPage.tsx, make the following precise changes. Touch nothing else.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 1 — ADD IMPORTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Add useState to the existing React import line:
  import React, { useEffect, useState } from 'react';

Add AnimatePresence to the existing motion/react import:
  import { motion, AnimatePresence } from 'motion/react';

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 2 — DELETE FAQItem COMPONENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Remove this entire function from the file:

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

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 3 — REPLACE faqs ARRAY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inside ClaraPage(), find and replace the existing const faqs = [...] array
with this exact data:

  const faqs = [
    {
      q: "Does it sound like a real person?",
      a: "Yes. Clara uses neural voice synthesis — not a robotic text-to-speech system. The voice is warm, natural, and holds a conversation. The best way to judge is to call the number and hear it yourself: +44 131 381 5821.",
    },
    {
      q: "Can we give the agent our own brand name?",
      a: "Absolutely. The agent doesn't have to be called Clara. Your business can name it anything — Max, Sophie, Alex, or whatever fits your brand. The voice, personality, and script are all configured around you.",
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

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 4 — ADD STATE inside ClaraPage()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Immediately after the faqs array, add:

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 5 — REPLACE SECTION H JSX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Find section H (the one with the comment
{/* H) FAQ — Step 8: all answers visible by default, updated copy */})

Replace the entire section (from <section to </section>) with:

      <section
        id="faq"
        className="py-24 sm:py-32"
        style={{ background: DARK_BG }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
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
                Questions about Clara
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
                    d="M2.5 7H11.5M7 2.5L11.5 7L7 11.5"
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

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DO NOT CHANGE ANYTHING ELSE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- No other sections in ClaraPage.tsx
- No other files
- No CSS or token files