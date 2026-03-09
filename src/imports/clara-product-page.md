C — Context

You are working inside an existing Figma Make website for PRUXIN (pruxin.com).
The site already exists and has its own header, footer, navigation, typography, spacing system, and components.

We are adding a new product offering: Clara — AI Voice Receptionist.
Clara answers inbound calls 24/7, qualifies leads, and books discovery calls. The main conversion action is a phone call, not a form.

Demo phone number (real): +44 131 381 5821
All “Call” CTAs must use: tel:+441313815821

We want:

A homepage hero feature section for Clara

A dedicated product page at: https://pruxin.com/clara

“Learn more” from homepage must link to /clara and work in navigation

The page must follow PRUXIN Brand v2 (dark premium). Accent: Aqua #00F5A0.

O — Objective

Create a conversion-focused experience that drives visitors to call the demo line.

Deliverables:

Add a Clara hero section on homepage with 2 CTAs: “Call Clara now” + “Learn more”

Create new product page /clara with sections mirroring the Claude layout (hero, live demo block, problem, how it works, transcript, benefits, pricing, FAQ, founder credibility, final CTA)

Add a sticky mobile CTA (Call Clara now) across the /clara page (and optionally on homepage when Clara section is visible)

Primary KPI: phone calls.

S — Steps
Step 1 — Homepage update (Hero Feature Module)

Insert a new section near the top of homepage (below main hero or as the hero variation).

Homepage Clara Feature content:

Badge: “Clara is live and answering calls”

Headline: “Your business never misses another call.”

Subhead: “Clara is PRUXIN’s AI voice receptionist. She answers instantly, qualifies the lead, and books the call — every time.”

Primary CTA button: “Call Clara now” → tel:+441313815821

Secondary CTA button: “Learn more” → link to /clara

Mini trust line: “UK number · Call logs included · No voicemail · Built for small teams”

Optional small demo card: “Live demo line” + number displayed in large text.

Step 2 — Create the Product Page

Create a new page route:

Slug: clara

Full URL: https://pruxin.com/clara

Ensure internal links reference /clara (not a full external link).

Step 3 — Build /clara page sections (match Claude structure)

A) Hero (top of page)

Badge: “Clara is live and answering calls”

H1: “Your business never misses another call.”

Subhead (short): “Answers instantly. Qualifies the lead. Books the call.”

CTA row:

Primary: “Call Clara now” → tel:+441313815821

Secondary: “Hear Clara in action” → scroll to #demo

Background: dark with subtle radial glow + faint grid texture (use design, not heavy visuals)

B) Live Demo Block (anchor: #demo)
Card with:

Label: “Live demo line”

Big number: “+44 131 381 5821”

Microcopy: “It’s a real call. No forms, no menus, no waiting.”

Simple waveform animation (use subtle looping bars or motion component if available)

C) Problem Section

Title: “Most businesses are losing leads right now.”

Supporting text: voicemail → lost leads

3 stat cards (keep as “proof-like” but do not state exact stats unless presented as “typical”):

“Callers won’t call back”

“Speed matters”

“Missed call = lost revenue”

D) How it Works
5-step flow cards:

Customer calls

Clara qualifies

Details captured

Meeting booked

You get the lead
Use clean horizontal flow on desktop, stacked on mobile.

E) Real Conversation
Two-column layout:

Left: explanation

Right: chat transcript card styled like a “call transcript” with roles:

Clara

Caller
Include: “Good morning, you’ve reached PRUXIN. I’m Clara — how can I help?”

F) Benefits Grid
6 cards:

Answers instantly

Qualifies the lead

Books the meeting

Logs every call

UK number included

GDPR-responsible (use careful language: “configured for responsible data handling”)

G) Pricing
Single pricing card:

“Starter”

“£199 setup + from £149/month”

Note: “Twilio usage billed separately”

CTA: “Call to discuss your call volume” → tel:+441313815821

H) FAQ
6 FAQ items (accordion if possible):

Does Clara sound human?

Can she transfer calls?

Are calls recorded?

Is it GDPR-compliant?

What businesses is Clara best for?

How fast is setup?

I) Founder Credibility
Founder card:

Name: Pranav Raval

Location: Glasgow, UK

Short quote about building Clara because missed calls were losing leads.

J) Final CTA
Big centered section:

“Call Clara. Right now.”

Big number displayed

Primary CTA uses tel link

Step 4 — Sticky CTA (mobile-first)

Add sticky bottom button on /clara page:

Label: “Call Clara now”

Action: tel:+441313815821
Only show on mobile (or small screens).

T — Tools / Constraints

Use existing PRUXIN design tokens and components where possible.

Use Aqua #00F5A0 as the primary highlight.

Keep copy tight and scannable.

No lead forms on this page.

Ensure accessibility: contrast, button sizes, readable spacing.

Ensure responsive behavior: hero, flow, transcript, and sticky CTA.

A — Actions (What to output)

Update homepage with the Clara feature hero section

Create /clara product page with all sections above

Ensure all CTAs are wired correctly:

Call buttons: tel:+441313815821

Learn more: /clara

“Hear Clara in action” scrolls to #demo

Keep navigation consistent with the existing site.

R — Reflection

Before finalizing, verify:

The page encourages calling within 10 seconds.

Phone number is visible early and repeated.

All links work (homepage → /clara, scroll anchor, tel links).

Mobile experience is strong and CTA is always easy to reach.