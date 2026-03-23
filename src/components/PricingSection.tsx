import React, { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

// ─── Data ────────────────────────────────────────────────────────────────────

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

// ─── Sub-components ───────────────────────────────────────────────────────────

function CTAButton({
  style,
  children,
  href,
}: {
  style: "outline" | "blue" | "dark";
  children: React.ReactNode;
  href: string;
}) {
  const base =
    "w-full inline-flex items-center justify-center h-[48px] rounded-[10px] text-[length:var(--text-base)] font-semibold transition-all duration-200 cursor-pointer select-none";

  const variants = {
    outline: `border-2 border-[#1d1d1f] text-[#1d1d1f] bg-transparent hover:bg-[#1d1d1f] hover:text-white`,
    blue: `bg-[#0066CC] text-white border-2 border-[#0066CC] hover:bg-[#004999] hover:border-[#004999]`,
    dark: `bg-[#1d1d1f] text-white border-2 border-[#1d1d1f] hover:bg-[#3a3a3a] hover:border-[#3a3a3a]`,
  };

  return (
    <Link to={href} className={`${base} ${variants[style]}`}>
      {children}
    </Link>
  );
}

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
          className="absolute top-5 right-5 text-white text-[length:var(--text-xs)] font-semibold px-3 py-1 rounded-md"
          style={{ background: "#0066CC", borderRadius: "6px" }}
        >
          {plan.badge}
        </span>
      )}

      <p
        className="text-[length:var(--text-sm)] font-semibold uppercase tracking-widest mb-3"
        style={{ color: isPopular ? "#0066CC" : "#86868b" }}
      >
        {plan.label}
      </p>

      <p
        className="text-[length:var(--text-sm)] leading-snug mb-6"
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
        className="text-[length:var(--text-sm)] mb-8"
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
            <span className="flex-shrink-0 text-[length:var(--text-base)] leading-none mt-[1px] text-[#34c759]">✓</span>
            <span className="text-[13.5px] leading-snug" style={{ color: "#1d1d1f" }}>
              {feat}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

function AddonCard({
  addon,
  index,
}: {
  addon: (typeof ADDONS)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.09,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative flex flex-col rounded-xl p-8 flex-1 min-w-0"
      style={{ background: "#f5f5f7" }}
    >
      {addon.badge && (
        <span
          className="absolute top-4 right-4 text-white text-[length:var(--text-xs)] font-semibold px-2.5 py-1 rounded-full"
          style={{ background: addon.badgeColor! }}
        >
          {addon.badge}
        </span>
      )}
      <p
        className="text-[length:var(--text-base)] font-semibold mb-3"
        style={{ color: "#1d1d1f" }}
      >
        {addon.name}
      </p>
      <p
        className="text-[24px] font-bold mb-3"
        style={{ color: "#1d1d1f", letterSpacing: "-0.01em" }}
      >
        {addon.price}
      </p>
      <p
        className="text-[length:var(--text-sm)] leading-relaxed"
        style={{ color: "#86868b" }}
      >
        {addon.description}
      </p>
    </motion.div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function PricingSection() {
  return (
    <section
      className="w-full"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-center"
          style={{ paddingTop: "80px", paddingBottom: "48px" }}
        >
          <h2
            className="font-bold mb-4"
            style={{
              fontSize: "48px",
              color: "#1d1d1f",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Simple, clear pricing.{" "}
            <span style={{ color: "#0066CC" }}>
              No surprises.
            </span>
          </h2>
          <p
            className="text-[length:var(--text-md)]"
            style={{ color: "#86868b", lineHeight: 1.6 }}
          >
            Pick the engagement that fits where you are right now.
          </p>
        </motion.div>

        {/* Pricing cards row */}
        <div className="flex flex-col lg:flex-row gap-0">
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        {/* ── Add-ons ─────────────────────────────────────────────────────── */}
        <div style={{ paddingTop: "80px" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-center mb-10"
          >
            <h3
              className="font-bold mb-3"
              style={{
                fontSize: "32px",
                color: "#1d1d1f",
                letterSpacing: "-0.015em",
              }}
            >
              Need something extra?
            </h3>
            <p
              className="text-[length:var(--text-base)]"
              style={{ color: "#86868b" }}
            >
              Add only what you need. No bundles forced on you.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-5">
            {ADDONS.map((addon, i) => (
              <AddonCard
                key={addon.id}
                addon={addon}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-[length:var(--text-sm)] italic"
          style={{
            color: "#86868b",
            paddingTop: "40px",
            paddingBottom: "80px",
          }}
        >
          Not sure which fits? Let's figure it out in 15 minutes.
        </motion.p>
      </div>
    </section>
  );
}