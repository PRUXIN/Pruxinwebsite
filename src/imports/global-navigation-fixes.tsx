# PRUXIN — Round 2 Fix Prompt (CoSTAR)
### 2 files only. Based on actual current codebase verified from GitHub.

---

## CONTEXT

You are working on the PRUXIN website — a React SPA (Vite + TypeScript + Tailwind + Framer Motion via `motion/react`).

A previous patch run completed the following successfully — do not touch these files:
- `ClaraPage.tsx` — teal colours already applied (`#14B8A6`). Leave untouched.
- `routes.ts` — `/privacy` route already added. Leave untouched.
- `PrivacyPage.tsx` — already created and working. Leave untouched.
- `ContactPage.tsx` — Web3Forms integration working. Leave untouched.

Two files still have confirmed bugs from direct code inspection of the current GitHub state:

**Bug 1 — `GlobalNavigation.tsx`**
`isDarkPage` was added but `isScrolled` state was kept. Current logic:
```ts
const useDarkText = !isDarkPage || isScrolled;
```
When a user scrolls on `/clara` or `/`, `isScrolled` becomes `true` and overrides `isDarkPage` — switching the nav back to `bg-white/70` with dark text on a dark hero. This is the white seam bug reported on scroll.

Additionally the Clara accent pill in both desktop nav and mobile menu still uses old hardcoded neon colours (`#00F5A0` desktop, `#007A52` mobile).

**Bug 2 — `HomePage.tsx`**
The hero `<motion.section>` has scroll-driven `opacity` and `scale` transforms via `useScroll` and `useTransform`. Combined with `<FloatingParticles count={40} />` (40 simultaneous CSS animations), this causes severe scroll jank and the white wash overlay reported on scroll.

---

## OBJECTIVE

Fix both bugs. Touch only these 2 files. Zero layout changes. Zero design changes. Zero Framer Motion animation removals — only remove the scroll-driven style transforms on the hero wrapper element itself.

---

## STEPS

### STEP 1 — Fix `GlobalNavigation.tsx`

**1a — Remove `isScrolled` state and its scroll listener**

Delete this line:
```ts
  const [isScrolled, setIsScrolled] = useState(false);
```

Delete this entire useEffect block:
```ts
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
```

**1b — Fix the useDarkText logic**

Find:
```ts
  const useDarkText = !isDarkPage || isScrolled;
```
Replace with:
```ts
  const useDarkText = !isDarkPage;
```

**1c — Implement glassmorphism nav — replace the nav className and style**

Find:
```tsx
        className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-500 ${
          useDarkText
            ? 'bg-white/70 backdrop-blur-2xl border-b border-[rgba(0,0,0,0.06)] shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
            : 'bg-white/5 backdrop-blur-md'
        }`}
        style={{ height: isScrolled ? '60px' : '64px' }}
```
Replace with:
```tsx
        className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-500 ${
          useDarkText
            ? 'bg-white/60 backdrop-blur-xl border-b border-white/20 shadow-[0_1px_12px_rgba(0,0,0,0.06)]'
            : 'bg-black/20 backdrop-blur-xl border-b border-white/10'
        }`}
        style={{ height: '64px' }}
```

**1d — Fix logo invert logic**

Find:
```tsx
              className={`h-7 w-auto transition-all duration-300 ${useDarkText ? 'invert' : ''}`}
```
Replace with:
```tsx
              className={`h-7 w-auto transition-all duration-300 ${useDarkText ? '' : 'brightness-0 invert'}`}
```

**1e — Fix Clara desktop accent pill**

Find:
```tsx
                    style={{
                      background: isActive ? '#00F5A0' : 'rgba(0,245,160,0.15)',
                      color: isActive ? '#000' : '#00F5A0',
                      border: '1px solid rgba(0,245,160,0.4)',
                    }}
```
Replace with:
```tsx
                    style={{
                      background: isActive ? '#14B8A6' : 'rgba(20,184,166,0.15)',
                      color: isActive ? '#fff' : '#14B8A6',
                      border: '1px solid rgba(20,184,166,0.4)',
                    }}
```

**1f — Fix Clara mobile menu colour**

Find:
```tsx
                    style={(link as any).accent ? { color: '#007A52' } : {}}
```
Replace with:
```tsx
                    style={(link as any).accent ? { color: '#14B8A6' } : {}}
```

**1g — `useState` stays in the import** — `mobileMenuOpen` still uses it. Keep `import React, { useState, useEffect } from 'react';` unchanged.

---

### STEP 2 — Fix scroll performance in `HomePage.tsx`

**2a — Remove the 3 scroll transform hook lines**

Find and delete:
```ts
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);
```

**2b — Replace the hero motion.section with a plain section**

Find the opening tag:
```tsx
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex flex-col items-center justify-center pt-[120px] pb-[80px] px-6 overflow-hidden"
      >
```
Replace with:
```tsx
      <section
        className="relative min-h-screen flex flex-col items-center justify-center pt-[120px] pb-[80px] px-6 overflow-hidden"
      >
```

Find the matching closing tag:
```tsx
      </motion.section>
```
Replace with:
```tsx
      </section>
```

**2c — Reduce FloatingParticles count**

Find:
```tsx
        <FloatingParticles count={40} />
```
Replace with:
```tsx
        <FloatingParticles count={15} />
```

**2d — Remove unused imports from motion/react**

Find:
```ts
import { motion, useScroll, useTransform } from 'motion/react';
```
Replace with:
```ts
import { motion } from 'motion/react';
```

---

## TOOLS

- TypeScript + React, Tailwind CSS, `motion/react`
- No new npm packages
- Every `animate`, `initial`, `exit`, `transition`, `variants` prop throughout the entire page stays untouched

---

## ACTIONS

Output the complete updated file for both files in this exact order:
1. `GlobalNavigation.tsx` — full file
2. `HomePage.tsx` — full file

---

## REFLECTION — verify before outputting each file

**GlobalNavigation.tsx:**
1. `isScrolled` state — completely gone? No useState for it, no scroll event listener?
2. `useDarkText = !isDarkPage` — no `|| isScrolled`?
3. `isDarkPage` still checks both `'/'` AND `'/clara'`?
4. Nav background: light pages = `bg-white/60 backdrop-blur-xl`, dark pages = `bg-black/20 backdrop-blur-xl` — never `bg-white/70`?
5. Nav height: static `height: '64px'` — no ternary?
6. Clara desktop pill: `#14B8A6` in all 3 colour values?
7. Clara mobile: `{ color: '#14B8A6' }` — not `#007A52`?

**HomePage.tsx:**
1. `useScroll`, `useTransform`, `heroOpacity`, `heroScale` — all gone?
2. Hero wrapper is `<section>` not `<motion.section>`?
3. `FloatingParticles count={15}` — not 40?
4. Import line is `import { motion } from 'motion/react'` — no useScroll or useTransform?
5. Every other motion component, animate prop, and transition inside the hero and rest of page — untouched?

Correct any failure before outputting.