# PRUXIN — Full Site Content Rewrite (CoSTAR)
### 5 files. Content only. No layout, no styling, no animation changes.

---

## CONTEXT

You are working on the PRUXIN website — a React SPA (Vite + TypeScript + Tailwind + Framer Motion).

PRUXIN is a clarity-first UX/product design consultancy. Its primary product right now is **Clara** — an AI voice receptionist for professional service businesses (dental clinics, estate agents, solicitors, accountants). Clara answers inbound calls, qualifies leads, and books appointments automatically.

The site is about to receive its first outreach traffic — visitors will be professional service business owners, not SaaS founders. The current content is misaligned with that audience. This prompt fixes all content across 5 files.

**Golden rule: touch only text content. Do not change any className, style prop, animation prop, layout, component structure, or import.**

---

## OBJECTIVE

Rewrite the visible text content across 5 files so that every page speaks to professional service businesses — dental clinics, estate agents, solicitors, accountants — who are losing clients to missed calls and unclear experiences. Lead with Clara. Connect it to PRUXIN's origin. Replace the pricing section entirely with the correct PRUXIN services.

---

## STEPS

---

### STEP 1 — `src/components/pages/HomePage.tsx`

Make these exact text changes. Do not change anything else.

**1a — Meta description**
Find:
```
'PRUXIN helps SaaS founders reduce friction, simplify flows, and turn confused users into active ones. UX audits, product design, and AI automation.'
```
Replace with:
```
'PRUXIN helps professional service businesses stop losing clients to missed calls and unclear experiences. Clara, our AI receptionist, answers every call automatically.'
```

**1b — Hero badge text**
Find:
```
AI Automation + UX Design
```
Replace with:
```
AI Voice Receptionist — Live on UK Number
```

**1c — Hero headline**
Find:
```
I help UK businesses stop losing leads
```
Replace with:
```
Your next client called today.
```
Find the second line:
```
and start converting them.
```
Replace with:
```
No one answered.
```

**1d — Hero sub-line**
Find:
```
AI workflows that answer calls and qualify leads. UX design that turns confused users into active ones. Both built on one principle — clarity in every click.
```
Replace with:
```
Clara is your AI receptionist. She answers every call, qualifies the enquiry, and books the appointment — while you're doing the work that matters.
```

**1e — Clara section badge**
Find:
```
Featured — AI Voice Receptionist
```
Replace with:
```
Live now — answering real calls
```

**1f — Clara section headline**
Find:
```
Meet Clara. Your AI receptionist
```
and the continuation:
```
is live right now.
```
Replace the full headline with:
```
Most missed calls don't go to voicemail.
```
And the second line:
```
They go to your competitor.
```

**1g — Clara section description**
Find:
```
Clara answers every inbound call, qualifies the lead, and books the discovery call — automatically. Built on real AI. Running on a live UK number. Proven in PRUXIN's own business first.
```
Replace with:
```
Clara answers instantly, every time. Real conversation — no phone trees, no scripts. She qualifies the lead and books directly into your calendar. Automatically. While you're with a client.
```

**1h — Clara trust line below CTA**
Find:
```
UK number · Call logs included · No voicemail · Real call, no forms
```
Replace with:
```
UK number · Books into your calendar · No voicemail · Real conversation, not a bot
```

**1i — "What PRUXIN does" section headline**
Find:
```
What PRUXIN does
```
Replace with:
```
Built by PRUXIN. Proven on our own business first.
```

**1j — "Two things" sub-headline**
Find:
```
Two things. Done with clarity.
```
Replace with:
```
Clara isn't something we sell without using.
```

**1k — "Two things" description**
Find:
```
AI automation that removes manual work. UX design that removes confusion.
```
Replace with:
```
It runs PRUXIN's own inbound calls. Every feature was tested on real enquiries before it reached a single client. We also help businesses fix the digital experiences that cost them clients — unclear websites, confusing booking flows, broken onboarding. But Clara is where we start.
```

**1l — Pranav bio description**
Find:
```
I'm Pranav, a product and UX designer specialising in SaaS products, compliance-heavy
```
and the continuation:
```
systems, and trust-first marketplaces.
```
Replace with:
```
I'm Pranav. I spent 7 years in technical support watching businesses lose clients to problems nobody was measuring —
```
and the continuation:
```
missed calls, unclear processes, friction that lived between the cracks.
```

**1m — Pranav bio second paragraph**
Find:
```
If your product has high drop-off, messy dashboards, or unclear onboarding — I fix
```
and continuation:
```
that. My approach: reduce clicks, remove confusion, and design systems that work
```
and continuation:
```
without constant support tickets.
```
Replace with:
```
Clara is the fix for the most common one. PRUXIN is the fix for everything else.
```
Delete the other two continuation lines entirely — they are no longer needed.

**1n — Pranav origin line**
Find:
```
I spent years in technical support at Siemens, Atos, and Microsoft. That taught me one
```
and continuation:
```
thing: support tickets aren't user problems — they're design problems.
```
Replace with:
```
Seven years in technical support at Siemens, Atos, and Microsoft taught me one
```
and continuation:
```
thing: most business problems aren't user problems — they're clarity problems.
```

---

### STEP 2 — `src/components/pages/ServicesPage.tsx`

**2a — Page meta description**
Find:
```
'PRUXIN services: SaaS UX audits, end-to-end product design, and AI voice automation. Clarity-first. Delivery-focused.'
```
Replace with:
```
'PRUXIN helps businesses fix the clarity problems that cost them clients. UX audits, product design, flow simplification — and Clara, our AI voice receptionist.'
```

**2b — Services hero description**
Find:
```
I help SaaS teams identify friction, simplify flows, and design products that work
            without constant support tickets.
```
Replace with:
```
Most businesses don't have a growth problem. They have a clarity problem. Missed calls, confusing websites, unclear flows — they quietly cost you clients every single day. PRUXIN fixes that.
```

**2c — UX Audit description**
Find:
```
"I audit SaaS products to identify where users get stuck, confused, or abandon the flow. You get a detailed report with friction points, prioritised fixes, and clear recommendations."
```
Replace with:
```
"Something in your product or process is costing you clients. You can feel it — in support calls, drop-offs, and confused users. An audit finds exactly what to fix first, with clear business impact against each item."
```

**2d — UX Audit "Who it's for" description**
Find:
```
"SaaS founders and product teams who see high drop-off rates, unclear onboarding, or too many support tickets about 'how do I...?' questions."
```
Replace with:
```
"Professional service businesses, SMBs, and software-led companies who know something is off but need clarity on what to fix and in what order."
```

**2e — Product Design description**
Find:
```
"Full-cycle UX and product design for SaaS, marketplaces, and compliance-heavy systems. From research to delivery-ready designs."
```
Replace with:
```
"Building without a clarity-first foundation is expensive. Every confusing screen becomes a support call. Every unclear flow becomes a lost client. Full-cycle UX and product design from research to delivery-ready Figma files."
```

**2f — Product Design "Who it's for" description**
Find:
```
"SaaS founders building new products or redesigning existing ones. Product teams in fintech, edtech, and compliance-heavy industries."
```
Replace with:
```
"Businesses building or redesigning a digital product — from SaaS platforms to client-facing portals, booking systems, and professional service tools."
```

**2g — Flow Simplification description**
Find:
```
"If your product feels cluttered, has too many steps, or users complain about confusion — I streamline it. Clear defaults, obvious next steps, fewer choices."
```
Replace with:
```
"Your clients aren't confused because they're not smart enough. The path isn't clear. That's a design problem — and it's faster to fix than you think. Clear defaults, obvious next steps, fewer choices."
```

**2h — Flow Simplification "Who it's for" description**
Find:
```
"Products that work but feel complicated. Teams getting feedback like 'I don't know what to do next' or 'This is confusing.'"
```
Replace with:
```
"Any business where clients regularly ask 'how do I...' — or where your team spends time explaining what the product or process should make obvious."
```

**2i — Bottom CTA section headline**
Find:
```
Not sure which service you need?
```
Replace with:
```
Not sure where to start?
```

**2j — Bottom CTA description**
Find:
```
Let's talk. I'll help you figure out whether you need a full audit, a redesign, or just
              targeted flow improvements.
```
Replace with:
```
AI tools will give you 40 things to fix. PRUXIN tells you which 3 actually cost you clients — and how to fix them first. Let's talk.
```

---

### STEP 3 — `src/components/PricingSection.tsx`

This file requires a full data and structure replacement. The current pricing is for a web design agency. Replace it entirely with PRUXIN's actual services.

**3a — Replace the section headline**
Find:
```
Simple, clear pricing.{" "}
            <span style={{ color: "#0066CC" }}>
              No surprises.
            </span>
```
Replace with:
```
Simple, clear pricing.{" "}
            <span style={{ color: "#0066CC" }}>
              No surprises.
            </span>
```
(Headline stays. Move to sub-line change.)

**3b — Replace the sub-line**
Find:
```
Choose the plan that fits where you are right now.
```
Replace with:
```
Pick the engagement that fits where you are right now.
```

**3c — Replace ALL_FEATURES array and PLANS array entirely**

Find the entire block from:
```javascript
const ALL_FEATURES = [
  "Multiple Website Pages",
```
all the way to the closing `];` of the PLANS array (ends after the custom-dev plan's closing `},`).

Replace with:

```javascript
interface Plan {
  id: string;
  name: string;
  label: string;
  tagline: string;
  price: string;
  priceLabel: string;
  cta: string;
  ctaStyle: "outline" | "blue" | "dark";
  badge?: string;
  isPopular?: boolean;
  features: string[];
}

const PLANS: Plan[] = [
  {
    id: "audit",
    name: "UX Audit",
    label: "UX AUDIT",
    tagline: "Find exactly what's costing you clients — and fix it first.",
    price: "From £499",
    priceLabel: "One-off · delivered in 1–2 weeks",
    cta: "Get an Audit",
    ctaStyle: "outline",
    features: [
      "Click-by-click flow analysis",
      "Friction points with business impact",
      "Prioritised fix list — quick wins first",
      "Clear recommendations, not a theory document",
    ],
  },
  {
    id: "product-design",
    name: "Product Design",
    label: "PRODUCT DESIGN",
    tagline: "End-to-end design that turns unclear products into ones that convert.",
    price: "From £899",
    priceLabel: "Scoped per project · 4–8 weeks",
    cta: "Start a Project",
    ctaStyle: "blue",
    badge: "Most Popular",
    isPopular: true,
    features: [
      "End-to-end UX/UI from research to Figma",
      "Onboarding, dashboards, multi-user flows",
      "Compliance-focused design where needed",
      "Dev-ready handoff included",
    ],
  },
  {
    id: "custom",
    name: "Let's Talk",
    label: "CUSTOM ENGAGEMENT",
    tagline: "Complex system, ongoing partnership, or not sure where to start.",
    price: "Let's talk",
    priceLabel: "Scoped together — no surprises",
    cta: "Book a Call",
    ctaStyle: "dark",
    features: [
      "Complex or compliance-heavy systems",
      "BA + PO + UX across full delivery",
      "Ongoing product partnership available",
      "Stakeholder alignment included",
    ],
  },
];
```

**3d — Replace ADDONS array**
Find the entire ADDONS array from:
```javascript
const ADDONS = [
  {
    id: "hosting",
```
to its closing `];`

Replace with:
```javascript
const ADDONS = [
  {
    id: "hosting",
    name: "Hosting & Uptime",
    price: "£15/mo",
    description: "Managed hosting, green-efficient servers, uptime monitoring",
    badge: null,
    badgeColor: null,
  },
  {
    id: "support",
    name: "Support & Maintenance",
    price: "£20/mo",
    description: "Monthly updates, security checks, minor tweaks",
    badge: null,
    badgeColor: null,
  },
  {
    id: "growth",
    name: "Growth Bundle",
    price: "£29/mo",
    description: "Hosting and support combined — one plan, best value",
    badge: "Best Value",
    badgeColor: "#14B8A6",
  },
  {
    id: "logo",
    name: "Logo Design",
    price: "£199 one-off",
    description: "Custom logo delivered in all formats, web and print ready",
    badge: null,
    badgeColor: null,
  },
];
```

**3e — Replace PlanCard component to render features list instead of ALL_FEATURES matrix**

Find the entire `PlanCard` function. Replace it with:

```tsx
function PlanCard({
  plan,
  index,
}: {
  plan: Plan;
  index: number;
}) {
  const isPopular = plan.isPopular;

  const cardStyle: React.CSSProperties = isPopular
    ? {
        border: "1px solid #0066CC",
        boxShadow: "0px 8px 40px rgba(0,102,204,0.15)",
        background: "#ffffff",
      }
    : {
        border: "1px solid #e5e5e5",
        boxShadow: "0px 4px 24px rgba(0,0,0,0.06)",
        background: "#ffffff",
      };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative flex flex-col rounded-2xl flex-1 min-w-0 px-[24px] py-[32px]"
      style={cardStyle}
    >
      {plan.badge && (
        <span
          className="absolute top-5 right-5 text-white text-[12px] font-semibold px-3 py-1 rounded-md"
          style={{ background: "#0066CC", borderRadius: "6px" }}
        >
          {plan.badge}
        </span>
      )}

      <p
        className="text-[13px] font-semibold uppercase tracking-widest mb-3"
        style={{ color: isPopular ? "#0066CC" : "#86868b" }}
      >
        {plan.label}
      </p>

      <p
        className="text-[14px] leading-snug mb-6"
        style={{ color: "#86868b" }}
      >
        {plan.tagline}
      </p>

      <div className="mb-1">
        <span
          className={`font-bold tracking-tight leading-none ${
            plan.price === "Let's talk"
              ? "text-[22px]"
              : "text-[36px]"
          }`}
          style={{ color: "#1d1d1f", letterSpacing: "-0.02em" }}
        >
          {plan.price}
        </span>
      </div>
      <p
        className="text-[13px] mb-8"
        style={{ color: "#86868b" }}
      >
        {plan.priceLabel}
      </p>

      <CTAButton style={plan.ctaStyle} href="/contact">
        {plan.cta}
      </CTAButton>

      <div
        className="my-7 border-t"
        style={{ borderColor: "#e5e5e5" }}
      />

      <ul className="flex-1 space-y-3">
        {plan.features.map((feat, i) => (
          <motion.li
            key={feat}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 + i * 0.06 }}
            className="flex items-start gap-2.5"
          >
            <span className="flex-shrink-0 text-[15px] leading-none mt-[1px] text-[#34c759]">✓</span>
            <span className="text-[13.5px] leading-snug" style={{ color: "#1d1d1f" }}>
              {feat}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
```

**3f — Replace footer note**
Find:
```
All plans include a launch-ready build. Hosting,
          domain, and add-ons can be discussed during your
          onboarding call.
```
Replace with:
```
Not sure which fits? Let's figure it out in 15 minutes.
```

**3g — Replace "Need something extra?" headline**
Find:
```
Need something extra?
```
Keep as is.

**3h — Replace "Need something extra?" sub-line**
Find:
```
Add only what you need. No bundles forced on you.
```
Keep as is.

**3i — Remove the FeatureRow component entirely**
Find the entire `FeatureRow` function from:
```typescript
function FeatureRow({
  label,
  value,
  delay,
```
to its closing `}` — delete it. It is no longer used.

---

### STEP 4 — `src/components/pages/AboutPage.tsx`

**4a — Bio first paragraph**
Find:
```
I'm Pranav Raval — a product and UX designer based in the UK, specialising in
              clarity-first design for SaaS products, marketplaces, and compliance-heavy systems.
```
Replace with:
```
I'm Pranav Raval — a product and UX designer based in Glasgow. I help businesses remove the friction that quietly costs them clients. That's PRUXIN. That's Clara.
```

**4b — Bio second paragraph**
Find:
```
I help SaaS founders and product teams remove friction, simplify flows, and design
              systems that work without constant support tickets.
```
Replace with:
```
Seven years in technical support taught me that most business problems aren't user problems — they're clarity problems. PRUXIN exists to fix that.
```

**4c — Origin story — add Clara connection after the quote**
Find:
```
"Support tickets are just symptoms. The disease is unclear design."
```
This quote stays. After it, find the next paragraph block and add before it:
```
Clara came from that same thinking. The most common symptom I kept seeing in professional service businesses wasn't a website problem — it was a missed call problem. So we built the fix.
```

**4d — Closing CTA description**
Find:
```
If you're building a SaaS product, marketplace, or compliance-heavy system and need help
              reducing friction — let's talk.
```
Replace with:
```
If clients are slipping through the cracks — because of a missed call, a confusing process, or an unclear product — let's talk.
```

---

### STEP 5 — `src/components/Footer.tsx`

**5a — Footer tagline**
Find:
```
Clarity-first UX design for SaaS products, marketplaces, and compliance-heavy systems.
```
Replace with:
```
AI automation and clarity-first design. Built for businesses that can't afford to lose a client to a missed call or a confusing experience.
```

---

## TOOLS

- TypeScript + React, Tailwind CSS, `motion/react`
- No new imports, no new components, no new npm packages
- Text content changes only — zero layout, styling, or animation changes

---

## ACTIONS

Output complete updated files in this order:
1. `HomePage.tsx` — full file
2. `ServicesPage.tsx` — full file
3. `PricingSection.tsx` — full file
4. `AboutPage.tsx` — full file
5. `Footer.tsx` — full file

---

## REFLECTION — self-check before outputting each file

**HomePage.tsx:**
1. Hero headline is "Your next client called today. / No one answered." — not the old SaaS headline?
2. Sub-line mentions Clara specifically — not "AI workflows and UX design"?
3. Clara section leads with "Most missed calls don't go to voicemail. They go to your competitor."?
4. "Two things" section now reads "Built by PRUXIN. Proven on our own business first."?
5. Pranav bio mentions "7 years in technical support" and "Clara is the fix"?

**ServicesPage.tsx:**
1. Hero description starts with "Most businesses don't have a growth problem"?
2. UX Audit description starts with "Something in your product or process is costing you clients"?
3. "Who it's for" descriptions mention professional service businesses — not SaaS only?
4. Bottom CTA includes the AI objection line about "40 things to fix"?

**PricingSection.tsx:**
1. Only 3 plan cards — Audit, Product Design, Let's Talk?
2. No ALL_FEATURES array, no 27-row comparison matrix?
3. No Free tier, no Clarity tier, no Clarity Pro tier, no Custom Dev tier?
4. Each card shows 4 bullet points with ✓ checkmarks — no ✅/❌ matrix?
5. FeatureRow component deleted?
6. Footer note updated?

**AboutPage.tsx:**
1. Bio opens with Glasgow, PRUXIN, Clara — not SaaS positioning?
2. Clara origin line added after the "Support tickets" quote?
3. Closing CTA mentions missed calls and confusing processes?

**Footer.tsx:**
1. Tagline mentions AI automation and missed calls — not SaaS only?

Correct any failure before outputting.