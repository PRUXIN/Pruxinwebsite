import React, { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

// ─── Data ────────────────────────────────────────────────────────────────────

const ALL_FEATURES = [
  "Multiple Website Pages",
  "Legally Covered Pages",
  "Professional Stock Images",
  "Analytics Setup",
  "Lead Capture Forms",
  "Enquiry to Inbox",
  "Custom Email Address",
  "Cookie Banner",
  "Logo Design",
  "Third-Party Integrations",
  "One-Call Kickoff",
  "One-Call Review",
  "Done-for-You Copywriting",
  "Custom Cohesive Design",
  "Typography, Colour & Image Curation",
  "Mobile-First Responsive",
  "GDPR & Cookie Compliance",
  "Accessibility Basics",
  "SEO Optimisation",
  "Lightning Performance",
  "SSL & Secure Website",
  "1-Year Hosting",
  "Green Efficient Build",
  "Domain (1 Year)",
  "7-Day Post-Launch Support",
  "Additional Development Support",
  "Dedicated Expert Consultation",
];

type FeatureLabel = string;

interface Plan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceLabel: string;
  cta: string;
  ctaStyle: "outline" | "blue" | "dark";
  badge?: string;
  badgeColor?: string;
  isPopular?: boolean;
  features: Record<FeatureLabel, boolean | string>;
}

const PLANS: Plan[] = [
  {
    id: "free",
    name: "Free",
    tagline: "Your first website. No cost, no catch.",
    price: "£0",
    priceLabel: "No credit card required",
    cta: "Claim Your Free Site",
    ctaStyle: "outline",
    features: {
      "Multiple Website Pages": true,
      "Legally Covered Pages":
        "Privacy Policy + T&Cs (2 pages)",
      "Professional Stock Images": true,
      "Analytics Setup": false,
      "Lead Capture Forms": false,
      "Enquiry to Inbox": false,
      "Custom Email Address": false,
      "Cookie Banner": false,
      "Logo Design": false,
      "Third-Party Integrations": false,
      "One-Call Kickoff": true,
      "One-Call Review": true,
      "Done-for-You Copywriting": true,
      "Custom Cohesive Design": true,
      "Typography, Colour & Image Curation": true,
      "Mobile-First Responsive": true,
      "GDPR & Cookie Compliance": true,
      "Accessibility Basics": true,
      "SEO Optimisation": true,
      "Lightning Performance": true,
      "SSL & Secure Website": true,
      "1-Year Hosting": true,
      "Green Efficient Build": true,
      "Domain (1 Year)": true,
      "7-Day Post-Launch Support": true,
      "Additional Development Support": false,
      "Dedicated Expert Consultation": false,
    },
  },
  {
    id: "clarity",
    name: "Clarity",
    tagline: "Launch-ready. Built and live within 24 hours.",
    price: "£499",
    priceLabel: "One-off payment",
    cta: "Get Me Live",
    ctaStyle: "blue",
    badge: "Most Popular",
    isPopular: true,
    features: {
      "Multiple Website Pages": true,
      "Legally Covered Pages":
        "Privacy Policy + T&Cs + Cookie Policy (3 pages)",
      "Professional Stock Images": true,
      "Analytics Setup": true,
      "Lead Capture Forms": true,
      "Enquiry to Inbox": true,
      "Custom Email Address": false,
      "Cookie Banner": false,
      "Logo Design": false,
      "Third-Party Integrations": false,
      "One-Call Kickoff": true,
      "One-Call Review": true,
      "Done-for-You Copywriting": true,
      "Custom Cohesive Design": true,
      "Typography, Colour & Image Curation": true,
      "Mobile-First Responsive": true,
      "GDPR & Cookie Compliance": true,
      "Accessibility Basics": true,
      "SEO Optimisation": true,
      "Lightning Performance": true,
      "SSL & Secure Website": true,
      "1-Year Hosting": true,
      "Green Efficient Build": true,
      "Domain (1 Year)": true,
      "7-Day Post-Launch Support": true,
      "Additional Development Support": false,
      "Dedicated Expert Consultation": false,
    },
  },
  {
    id: "clarity-pro",
    name: "Clarity Pro",
    tagline: "Your brand, fully built and covered.",
    price: "£899",
    priceLabel: "One-off payment",
    cta: "Build My Brand",
    ctaStyle: "dark",
    features: {
      "Multiple Website Pages": true,
      "Legally Covered Pages":
        "All legal pages + Disclaimer + AI Image Usage Note (5+)",
      "Professional Stock Images": true,
      "Analytics Setup": true,
      "Lead Capture Forms": true,
      "Enquiry to Inbox": true,
      "Custom Email Address": true,
      "Cookie Banner": true,
      "Logo Design": true,
      "Third-Party Integrations": true,
      "One-Call Kickoff": true,
      "One-Call Review": true,
      "Done-for-You Copywriting": true,
      "Custom Cohesive Design": true,
      "Typography, Colour & Image Curation": true,
      "Mobile-First Responsive": true,
      "GDPR & Cookie Compliance": true,
      "Accessibility Basics": true,
      "SEO Optimisation": true,
      "Lightning Performance": true,
      "SSL & Secure Website": true,
      "1-Year Hosting": true,
      "Green Efficient Build": true,
      "Domain (1 Year)": true,
      "7-Day Post-Launch Support": true,
      "Additional Development Support": false,
      "Dedicated Expert Consultation": false,
    },
  },
  {
    id: "custom-dev",
    name: "Custom Dev",
    tagline: "No limits. Just possibilities.",
    price: "Talk to an Expert",
    priceLabel: "Scoped to your project",
    cta: "Let's Connect",
    ctaStyle: "outline",
    features: {
      "Multiple Website Pages": true,
      "Legally Covered Pages": "All legally covered pages (5+)",
      "Professional Stock Images": true,
      "Analytics Setup": true,
      "Lead Capture Forms": true,
      "Enquiry to Inbox": true,
      "Custom Email Address": true,
      "Cookie Banner": true,
      "Logo Design": true,
      "Third-Party Integrations": true,
      "One-Call Kickoff": true,
      "One-Call Review": true,
      "Done-for-You Copywriting": true,
      "Custom Cohesive Design": true,
      "Typography, Colour & Image Curation": true,
      "Mobile-First Responsive": true,
      "GDPR & Cookie Compliance": true,
      "Accessibility Basics": true,
      "SEO Optimisation": true,
      "Lightning Performance": true,
      "SSL & Secure Website": true,
      "1-Year Hosting": true,
      "Green Efficient Build": true,
      "Domain (1 Year)": true,
      "7-Day Post-Launch Support": true,
      "Additional Development Support": true,
      "Dedicated Expert Consultation": true,
    },
  },
];

const ADDONS = [
  {
    id: "hosting",
    name: "Hosting & Uptime",
    price: "£15/mo",
    description:
      "Managed hosting, green-efficient servers, uptime monitoring",
    badge: null,
    badgeColor: null,
  },
  {
    id: "support",
    name: "Support & Maintenance",
    price: "£20/mo",
    description:
      "Monthly updates, security checks, minor tweaks",
    badge: null,
    badgeColor: null,
  },
  {
    id: "growth",
    name: "Growth Bundle",
    price: "£29/mo",
    description: "Hosting and support combined in one plan",
    badge: "Best Value",
    badgeColor: "#34c759",
  },
  {
    id: "logo",
    name: "Logo Design",
    price: "£199 one-off",
    description:
      "Custom logo delivered in all formats, ready for web and print",
    badge: null,
    badgeColor: null,
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function FeatureRow({
  label,
  value,
  delay,
}: {
  label: string;
  value: boolean | string;
  delay: number;
}) {
  const included = value !== false;
  const customLabel = typeof value === "string" ? value : label;

  return (
    <motion.li
      initial={{ opacity: 0, x: -6 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className="flex items-start gap-2.5 py-[6px]"
    >
      <span
        className={`flex-shrink-0 text-[15px] leading-none mt-[1px] ${included ? "text-[#34c759]" : "text-[#d1d1d6]"}`}
      >
        {included ? "✅" : "❌"}
      </span>
      <span
        className="text-[13.5px] leading-snug"
        style={{ color: included ? "#1d1d1f" : "#aeaeb2" }}
      >
        {customLabel}
      </span>
    </motion.li>
  );
}

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
    "w-full inline-flex items-center justify-center h-[48px] rounded-[10px] text-[15px] font-semibold transition-all duration-200 cursor-pointer select-none";

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
      {/* Popular badge */}
      {plan.badge && (
        <span
          className="absolute top-5 right-5 text-white text-[12px] font-semibold px-3 py-1 rounded-md"
          style={{ background: "#0066CC", borderRadius: "6px" }}
        >
          {plan.badge}
        </span>
      )}

      {/* Tier name */}
      <p
        className="text-[13px] font-semibold uppercase tracking-widest mb-3"
        style={{ color: isPopular ? "#0066CC" : "#86868b" }}
      >
        {plan.name}
      </p>

      {/* Tagline */}
      <p
        className="text-[14px] leading-snug mb-6"
        style={{ color: "#86868b" }}
      >
        {plan.tagline}
      </p>

      {/* Price */}
      <div className="mb-1">
        <span
          className={`font-bold tracking-tight leading-none ${
            plan.price === "Talk to an Expert"
              ? "text-[22px]"
              : "text-[40px]"
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

      {/* CTA */}
      <CTAButton style={plan.ctaStyle} href="/contact">
        {plan.cta}
      </CTAButton>

      {/* Divider */}
      <div
        className="my-7 border-t"
        style={{ borderColor: "#e5e5e5" }}
      />

      {/* Features */}
      <ul className="flex-1 space-y-0">
        {ALL_FEATURES.map((feat, i) => (
          <FeatureRow
            key={feat}
            label={feat}
            value={plan.features[feat] ?? false}
            delay={0.05 + i * 0.02}
          />
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
          className="absolute top-4 right-4 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full"
          style={{ background: addon.badgeColor! }}
        >
          {addon.badge}
        </span>
      )}
      <p
        className="text-[16px] font-semibold mb-3"
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
        className="text-[14px] leading-relaxed"
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
            className="text-[18px]"
            style={{ color: "#86868b", lineHeight: 1.6 }}
          >
            Choose the plan that fits where you are right now.
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
              className="text-[16px]"
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
          className="text-center text-[14px] italic"
          style={{
            color: "#86868b",
            paddingTop: "40px",
            paddingBottom: "80px",
          }}
        >
          All plans include a launch-ready build. Hosting,
          domain, and add-ons can be discussed during your
          onboarding call.
        </motion.p>
      </div>
    </section>
  );
}