# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Node.js is managed via NVM. Always prefix commands with:
```
export PATH="/Users/mybubu/.nvm/versions/node/v24.14.0/bin:/bin:/usr/bin:$PATH"
```

```bash
npm run dev      # Dev server at http://localhost:3000 (uses Turbopack)
npm run build    # Production build
npm run start    # Serve production build
```

There is no linter or test suite configured.

## Architecture

**Framework:** Next.js 16 App Router. All pages live in `src/app/` as `page.tsx` files. The root layout (`src/app/layout.tsx`) wraps every page with `<Navbar>`, `<PageTransition>`, `<Footer>`, and `<WhatsAppButton>`. Google Analytics is injected here via `NEXT_PUBLIC_GA_ID`.

**Content:** All site copy — services, themes, portfolio items, testimonials, stats, and nav links — lives in `src/lib/constants.ts`. This is the single source of truth; pages import from it rather than defining data inline.

**Animations:** Reusable Framer Motion variants (`fadeUp`, `fadeIn`, `fadeLeft`, `fadeRight`, `scaleIn`, `staggerContainer`) are exported from `src/lib/animations.ts`. All pages use these for scroll-triggered reveals via `whileInView`. **Critical:** cubic easing must be typed as a tuple `const cubic: [number, number, number, number] = [...]` — a plain array causes a TypeScript error with Framer Motion v12.

**Styling:** Tailwind CSS v4 with custom tokens defined in `src/app/globals.css` under `@theme inline`. Key utilities:
- `.gold-text` — gradient text (static)
- `.gold-shimmer` — animated gradient text
- `.gold-divider` — horizontal gold fade line
- `.section-padding` — consistent vertical/horizontal padding
- `.grain` — full-viewport noise texture overlay (applied to `<body>`)

**Fonts:** Cormorant Garamond (`--font-cormorant`, CSS var `var(--font-cormorant)`) for display/headings; Montserrat (`--font-montserrat`) for labels and body. Pages apply fonts inline via `style={{ fontFamily: "var(--font-cormorant)" }}` rather than via Tailwind classes.

**Contact form:** Uses EmailJS (`@emailjs/browser`) with hardcoded service ID `service_xx6lgdl` and template ID `template_nz193v1`. The public key is passed at `.send()` call time in `src/app/contact/page.tsx`.

**Instagram feed:** Embedded via the Behold widget (custom web component `<behold-widget>`) in `src/components/sections/InstagramFeed.tsx`. The script is loaded dynamically in `useEffect`.

**Images:** No real event photos yet — placeholders use styled divs with emoji. Real images will go in `public/images/`.

## Design System

- Background scale: `#080808` → `#0f0f0f` → `#161616` → `#1e1e1e`
- Gold scale: `#f5d97e` (light) → `#d4a017` (primary) → `#b8860b` (dark)
- Cream text: `#faf7f0`
- All Tailwind color tokens are also available as `bg-gold-500`, `text-gold-300`, `bg-dark-700`, etc. (registered in `@theme inline`)
