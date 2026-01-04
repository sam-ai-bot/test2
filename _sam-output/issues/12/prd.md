# PRD: Change the framework to next.js

> **Issue:** #12
> **Repository:** sam-ai-bot/test2
> **Generated:** 2026-01-04T08:40:01.197Z
> **Type:** feature
> **Priority:** medium
> **Labels:** feature, framework, next.js, complex

---

## Overview

Change the framework to Next.js

## Original Request

Change the framework to next.js

---

Now I have a complete understanding of the codebase. Let me create a detailed implementation plan for migrating this vanilla HTML/CSS/JS site to Next.js.

## 🎯 Implementation Plan

### Summary
Migrate a static vanilla HTML/CSS/JavaScript chess academy website to Next.js, converting the single-page site into a component-based React application with modern tooling, while preserving the existing Chess Green theme and all current functionality.

---

### Tasks

- [ ] **Task 1: Initialize Next.js Project & Configure Base Setup**
  - Run `npx create-next-app@latest . --js --eslint --no-tailwind --app --src-dir --no-import-alias` (or create in temp folder and merge)
  - Configure `next.config.js` for static export if needed (`output: 'export'`)
  - Set up project structure: `src/app/`, `src/components/`, `src/styles/`
  - Move existing `css/styles.css` to `src/styles/globals.css` and import in root layout
  - Move `images/` folder to `public/images/`
  - Update `.gitignore` with Next.js-specific entries (`.next/`, `out/`)
  - **Acceptance:** `npm run dev` starts successfully, base page loads without errors

- [ ] **Task 2: Create Root Layout & Global Styling**
  - Create `src/app/layout.js` with HTML shell (lang, meta viewport)
  - Migrate all `<head>` content to layout metadata export (title, description, Open Graph, Twitter cards)
  - Import global CSS file in layout
  - Preserve CSS custom properties (`:root` variables for Chess Green theme)
  - Set up font configuration if any web fonts are used
  - **Acceptance:** Page renders with correct meta tags, green color scheme visible, no CSS errors

- [ ] **Task 3: Build Header/Navigation Component**
  - Create `src/components/Header.jsx` with navigation markup
  - Convert mobile hamburger menu logic to React state (`useState` for menu open/close)
  - Implement smooth scroll navigation using `onClick` handlers with `scrollIntoView`
  - Add active link highlighting with scroll-based `useEffect` and Intersection Observer
  - Style with existing CSS classes (nav, nav-links, hamburger, etc.)
  - **Acceptance:** Desktop nav works, mobile hamburger toggles correctly, smooth scroll to sections functions

- [ ] **Task 4: Create Page Section Components**
  - Create `src/components/Hero.jsx` - hero section with title, tagline, CTA button
  - Create `src/components/About.jsx` - about section content
  - Create `src/components/Courses.jsx` - courses grid with 2 course cards
  - Create `src/components/Contact.jsx` - contact section with address and email link
  - Create `src/components/Footer.jsx` - footer with copyright and social links
  - Each component should receive content as props or use hardcoded content matching original
  - **Acceptance:** All 5 sections render correctly, match original layout and styling

- [ ] **Task 5: Assemble Main Page & Integrate Animations**
  - Create `src/app/page.js` importing and composing all section components
  - Port Intersection Observer fade-in animation logic to a custom `useFadeIn` hook or component
  - Apply `fade-in` class and observer logic to appropriate sections
  - Ensure scroll offset calculations account for fixed header
  - **Acceptance:** Full page matches original, animations trigger on scroll, no layout shifts

- [ ] **Task 6: Cleanup & Verification**
  - Remove old `index.html`, `js/main.js`, `css/styles.css` files
  - Update `README.md` with new Next.js setup/run instructions (`npm install`, `npm run dev`, `npm run build`)
  - Verify all responsive breakpoints (1024px, 768px, 480px) work correctly
  - Test mobile hamburger menu on small screens
  - Run `npm run build` to verify static build succeeds
  - Cross-browser check (if possible)
  - **Acceptance:** No legacy files remain, README accurate, responsive design intact, build passes with no errors

---

### Technical Considerations
- **No Tailwind** - Keep existing CSS approach, just move to `globals.css` or CSS Modules
- **App Router** - Use Next.js 13+ App Router (`src/app/`) for modern patterns
- **Static Export Option** - Since there's no backend/API, can use `output: 'export'` for static hosting
- **Client Components** - Components with `useState`/`useEffect` (Header, animations) need `'use client'` directive
- **Image Optimization** - If images are added later, use `next/image` component
- **SEO Metadata** - Use Next.js metadata API in layout.js for Open Graph/Twitter cards

### Dependencies
- Node.js 18+ (required for Next.js 14+)
- npm or yarn for package management
- No external runtime dependencies beyond Next.js and React

### Estimated Complexity
**Medium** - The current codebase is simple (single page, no state management, no API), but requires:
- Converting vanilla JS interactions to React hooks
- Understanding Next.js App Router conventions
- Properly structuring components from a monolithic HTML file
- Preserving all CSS and responsive behaviors

The migration is straightforward but requires attention to detail to maintain feature parity.

---
*🏷️ Add label `ready-for-dev` when ready for implementation*


---

Now I have a complete understanding of the current codebase. Let me provide the architecture review.

## 🏗️ Architecture Review

### Overview
The proposed migration converts a clean, static vanilla HTML/CSS/JS chess academy website to Next.js 14+ with App Router. The current site is well-structured (single `index.html`, `css/styles.css`, `js/main.js`) with a Chess Green theme and standard SPA interactions (hamburger menu, smooth scroll, fade-in animations). The migration plan is sound overall, but I've identified some refinements and risks to address.

### Component Design
```
┌─────────────────────────────────────────────────────────────────┐
│                        src/app/layout.js                        │
│  (metadata, global CSS import, HTML shell)                      │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                        src/app/page.js                          │
│  (composes all section components, orchestrates animations)     │
└─────────────────────────────────────────────────────────────────┘
                                │
        ┌───────────────────────┼───────────────────────┐
        ▼                       ▼                       ▼
┌───────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Header.jsx  │     │    Hero.jsx     │     │   About.jsx     │
│  'use client' │     │   (Server)      │     │  'use client'   │
│               │     │                 │     │  (fade-in)      │
│ - useState    │     │ - Static hero   │     │                 │
│ - nav toggle  │     │ - CTA button    │     │                 │
│ - scroll spy  │     │                 │     │                 │
└───────────────┘     └─────────────────┘     └─────────────────┘
        │
        ▼
┌───────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Courses.jsx  │     │  Contact.jsx    │     │   Footer.jsx    │
│ 'use client'  │     │  'use client'   │     │   (Server)      │
│ (fade-in)     │     │  (fade-in)      │     │                 │
│               │     │                 │     │ - Static links  │
│ - CourseCard  │     │                 │     │ - Copyright     │
└───────────────┘     └─────────────────┘     └─────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    src/hooks/useFadeIn.js                       │
│  (Custom hook wrapping Intersection Observer for animations)    │
└─────────────────────────────────────────────────────────────────┘
```

### Data Model
This is a static content site with no dynamic data. Key "data" considerations:

```javascript
// No database/API - content is hardcoded
// Key data structures to consider extracting:

// Course data (could be extracted to a constants file)
const COURSES = [
  {
    id: 'group',
    title: 'Group Classes',
    description: 'Learn chess alongside fellow enthusiasts...',
    features: ['Small group sizes', 'Weekly sessions', ...],
    cta: { text: 'Join a Group', href: '#contact' }
  },
  {
    id: 'private',
    title: 'One-to-One Classes', 
    description: 'Personalized coaching tailored to your level...',
    features: ['Flexible scheduling', 'Customized curriculum', ...],
    cta: { text: 'Book Private Lesson', href: '#contact' }
  }
];

// Social links (extracted from Footer)
const SOCIAL_LINKS = [
  { platform: 'facebook', url: '#', icon: 'Facebook' },
  { platform: 'twitter', url: '#', icon: 'Twitter' },
  { platform: 'instagram', url: '#', icon: 'Instagram' }
];

// Site metadata (for layout.js metadata export)
const SITE_METADATA = {
  title: 'Chess Academy - Master the Game',
  description: 'Join Chess Academy for expert chess instruction...',
  openGraph: { ... },
  twitter: { ... }
};
```

### Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Router | App Router (`src/app/`) | Modern Next.js 14+ standard, better DX, server components by default |
| CSS Strategy | Global CSS (`globals.css`) | Existing CSS is well-organized with CSS variables; avoid unnecessary refactoring |
| Build Output | `output: 'export'` | No backend/API needed; enables static hosting on any platform |
| State Management | Local state only | Simple interactions don't require global state (Context, Redux) |
| Client Components | Minimal | Only Header (nav state) and sections with fade-in need `'use client'` |
| Package Manager | npm | Standard choice; no yarn.lock exists currently |

### Risk Assessment

**High Risk:**
- **None identified** - The migration is straightforward given the simple codebase

**Medium Risk:**
- **Scroll spy offset calculation**: The current `main.js` calculates header offset (`header.offsetHeight`). In React, the header ref must be properly forwarded or the offset hardcoded. Could cause nav highlighting bugs.
- **Hydration mismatches**: If fade-in classes are applied server-side differently than client-side, React will warn. The `useFadeIn` hook must only add classes after mount.
- **Mobile menu body scroll lock**: Current implementation sets `document.body.style.overflow`. In React, this side effect must be in `useEffect` with proper cleanup.

**Low Risk:**
- **Empty images folder**: The plan moves `images/` to `public/images/`, but the folder is empty. Not a blocker, but README should clarify image handling.
- **Favicon path change**: Currently at `images/favicon.ico`, will move to `public/images/favicon.ico`. Next.js prefers `public/favicon.ico` by convention.
- **Social links are placeholder `#`**: Works but looks unfinished in production.

### Implementation Notes

1. **'use client' directive placement**: Add to the top of components that use hooks (`useState`, `useEffect`, `useRef`). Keep Hero and Footer as Server Components for better performance.

2. **Intersection Observer pattern for React**:
   ```javascript
   // src/hooks/useFadeIn.js
   'use client';
   import { useEffect, useRef, useState } from 'react';
   
   export function useFadeIn(threshold = 0.1) {
     const ref = useRef(null);
     const [isVisible, setIsVisible] = useState(false);
     
     useEffect(() => {
       const observer = new IntersectionObserver(
         ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
         { threshold }
       );
       if (ref.current) observer.observe(ref.current);
       return () => observer.disconnect();
     }, [threshold]);
     
     return { ref, isVisible };
   }
   ```

3. **Smooth scroll implementation**: Use native CSS `scroll-behavior: smooth` (already in styles.css) rather than JavaScript. For the header offset, use CSS `scroll-margin-top` on section elements:
   ```css
   section { scroll-margin-top: 80px; /* header height */ }
   ```

4. **Metadata export pattern** in `layout.js`:
   ```javascript
   export const metadata = {
     title: 'Chess Academy - Master the Game',
     description: '...',
     openGraph: { title: '...', description: '...', type: 'website' },
     twitter: { card: 'summary_large_image', ... }
   };
   ```

5. **File cleanup order**: Remove old files LAST (Task 6), after verifying the new build works. Consider a "parallel running" phase where both exist temporarily.

6. **CSS variables preservation**: The `:root` block in `styles.css` must remain intact. When copying to `globals.css`, ensure the Chess Green theme variables are at the top.

### Questions for Stakeholder

1. **Static hosting target**: Is this deploying to Vercel, Netlify, GitHub Pages, or elsewhere? This affects `next.config.js` settings (e.g., `basePath`, `trailingSlash`).

2. **Future dynamic features**: Any plans for a contact form submission, course booking, or CMS integration? If so, we should skip `output: 'export'` and keep SSR capability.

3. **Image assets**: The `images/` folder is currently empty. Are there actual images to migrate, or should placeholder handling be documented?

4. **Node.js version**: The plan mentions Node 18+. What version is available in the deployment environment?

---
*🏗️ Architecture review complete. The migration plan is well-structured and appropriate for the codebase complexity. Primary focus should be on proper client/server component boundaries and careful handling of the scroll-based interactions. Ready for implementation.*


---

## Notes

- Target Directory: `/tmp/sam-repos/sam-ai-bot/test2`
- Tech Stack: JavaScript

---

*🤖 Generated by Sam 🎯 (Triage) → Pete 📋 (Planning) → Alex 🏗️ (Architecture)*
