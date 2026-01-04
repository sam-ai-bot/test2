# PRD: Change framework to react

> **Issue:** #14
> **Repository:** sam-ai-bot/test2
> **Generated:** 2026-01-04T11:55:42.470Z
> **Type:** feature
> **Priority:** medium
> **Labels:** feature, migration, react, vite

---

## Overview

Migrate project framework to React Vite

## Original Request

Change framework to React Vite

---

I have a comprehensive understanding of the project. Let me create the detailed implementation plan.

## 🎯 Implementation Plan

### Summary
Migrate the Chess Academy website from vanilla HTML/CSS/JavaScript to a modern React + Vite setup. The project is currently a static SPA with well-structured CSS (using custom properties) and minimal JavaScript, making it an ideal candidate for a clean Vite migration. An existing Next.js implementation in branch `sam/issue-12` provides pre-built React components that can be adapted.

### Tasks

- [ ] **Task 1: Initialize Vite Project Structure**
  - Create a new Vite + React project using `npm create vite@latest . -- --template react`
  - Configure `vite.config.js` with appropriate settings (base path, build output)
  - Set up `jsconfig.json` or `tsconfig.json` for path aliases (`@/` → `./src/`)
  - Update `.gitignore` to include Vite-specific entries (`dist/`, `.vite/`)
  - Remove Next.js dependencies and `.next/` folder
  - Update `package.json` scripts (`dev`, `build`, `preview`)
  - Acceptance: `npm run dev` starts Vite dev server successfully with default React template

- [ ] **Task 2: Migrate CSS and Assets**
  - Copy `/css/styles.css` to `/src/styles/` directory
  - Create `/public/` directory for static assets (favicon, images if any)
  - Import global styles in `main.jsx` or create CSS modules if preferred
  - Verify CSS custom properties (`:root` variables) work correctly in Vite
  - Test responsive breakpoints load correctly
  - Acceptance: All CSS loads without errors, Chess Green theme variables render correctly

- [ ] **Task 3: Create React Component Structure**
  - Create `/src/components/` directory with the following components:
    - `Header.jsx` - Navigation with mobile hamburger menu
    - `Hero.jsx` - Landing section with CTA
    - `About.jsx` - Academy information section
    - `Courses.jsx` - Course cards display
    - `Contact.jsx` - Contact information
    - `Footer.jsx` - Footer with social links
  - Reference existing React components from `sam/issue-12` branch for implementation
  - Create `FadeInSection.jsx` wrapper for scroll animations (Intersection Observer)
  - Acceptance: All components render without errors, match original HTML structure

- [ ] **Task 4: Implement Navigation and Scroll Behavior**
  - Add `useState` for mobile menu toggle in Header component
  - Implement scroll tracking with `useEffect` for active nav link highlighting
  - Add smooth scroll behavior for anchor links (`#about`, `#courses`, `#contact`)
  - Implement fixed header with background change on scroll
  - Test mobile hamburger menu open/close functionality
  - Acceptance: Navigation works identically to original, active states update on scroll

- [ ] **Task 5: Implement Scroll Animations**
  - Create `FadeInSection` component using Intersection Observer API
  - Wrap content sections with fade-in animation wrapper
  - Ensure animations trigger once when elements enter viewport
  - Match original animation timing and easing
  - Acceptance: Sections fade in smoothly on scroll, identical to original behavior

- [ ] **Task 6: Assemble App and Configure Entry Points**
  - Update `App.jsx` to compose all section components
  - Configure `index.html` with proper meta tags (title, description, viewport)
  - Ensure proper document structure and semantic HTML
  - Add any necessary favicon references to `public/`
  - Acceptance: Full page renders with all sections in correct order

- [ ] **Task 7: Test, Build, and Verify Production Output**
  - Run `npm run build` and verify no build errors
  - Test production build with `npm run preview`
  - Verify all functionality works in production mode:
    - Navigation and smooth scrolling
    - Mobile menu
    - Scroll animations
    - Responsive design at all breakpoints
  - Clean up any unused files from previous setup
  - Update `README.md` with new development commands
  - Acceptance: Production build works correctly, all features functional, passes visual QA against original

### Technical Considerations
- **React 19 Compatibility**: The project currently has React 19.2.3 installed. Vite supports React 19, but ensure the React plugin version matches (`@vitejs/plugin-react`)
- **CSS Approach**: Keep existing vanilla CSS with custom properties - no need to convert to CSS-in-JS. This minimizes migration risk
- **No Router Needed**: This is a single-page application with anchor-based navigation, no need for React Router
- **Intersection Observer**: Use native browser API via `useEffect` hook, no external library needed
- **SEO Metadata**: Vite uses static `index.html` in root - update meta tags there directly
- **Existing Components Available**: Branch `sam/issue-12` has working React components that can be adapted (originally for Next.js but compatible with Vite)

### Dependencies
- **Vite**: `npm create vite@latest` (will install Vite 6.x)
- **React**: Keep existing React 19.2.3 and react-dom
- **@vitejs/plugin-react**: Required for React Fast Refresh in Vite
- **No additional libraries required** - project uses minimal vanilla JavaScript patterns

### Files to Remove (Cleanup)
- `.next/` directory (Next.js build output)
- `next.config.mjs` (if present)
- `eslint-config-next` dependency
- Any Next.js-specific files (`_app.js`, `_document.js`, pages directory)

### Estimated Complexity
**Medium** - The project is well-structured with clean separation of concerns. An existing React component implementation in `sam/issue-12` provides a reference. The main work involves setting up Vite tooling and adapting the existing components. No complex state management or routing needed.

---
*🏷️ Add label `ready-for-dev` when ready for implementation*


---

Now I have a comprehensive understanding of the codebase. Let me provide the architecture review.

---

## Architecture Review

### Overview
The proposed migration takes a vanilla HTML/CSS/JavaScript single-page application (Chess Academy website) and converts it to React + Vite. The current implementation is clean, well-structured, and uses modern patterns (CSS custom properties, Intersection Observer). This is a straightforward migration with low technical risk.

**Critical Correction**: The task breakdown incorrectly states that React components exist in branch `sam/issue-12`. My exploration confirms **no React components exist in that branch** - it contains only documentation. All components must be built from scratch.

### Component Design

```
┌─────────────────────────────────────────────────────────────────┐
│                         App.jsx                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                      Header                              │    │
│  │  ┌──────────────┐  ┌───────────┐  ┌─────────────────┐   │    │
│  │  │  NavBrand    │  │ NavToggle │  │    NavMenu      │   │    │
│  │  │  (Logo)      │  │ (Hamburger│  │  [NavLink x 4]  │   │    │
│  │  └──────────────┘  └───────────┘  └─────────────────┘   │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                   <main>                                  │   │
│  │  ┌────────────────────────────────────────────────────┐  │   │
│  │  │  Hero (id="home")                                   │  │   │
│  │  │  - h1, tagline, CTA button                         │  │   │
│  │  └────────────────────────────────────────────────────┘  │   │
│  │  ┌────────────────────────────────────────────────────┐  │   │
│  │  │  FadeInSection (id="about")                        │  │   │
│  │  │  └── About                                          │  │   │
│  │  └────────────────────────────────────────────────────┘  │   │
│  │  ┌────────────────────────────────────────────────────┐  │   │
│  │  │  FadeInSection (id="courses")                      │  │   │
│  │  │  └── Courses                                        │  │   │
│  │  │      └── CourseCard (x2)                           │  │   │
│  │  └────────────────────────────────────────────────────┘  │   │
│  │  ┌────────────────────────────────────────────────────┐  │   │
│  │  │  FadeInSection (id="contact")                      │  │   │
│  │  │  └── Contact                                        │  │   │
│  │  └────────────────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  Footer                                                   │   │
│  │  - Copyright, SocialLinks                                │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘

Custom Hooks:
┌─────────────────────────┐  ┌────────────────────────┐
│ useFadeInObserver()     │  │ useMobileMenu()        │
│ - Intersection Observer │  │ - isOpen state         │
│ - ref + isVisible       │  │ - toggle, close        │
└─────────────────────────┘  └────────────────────────┘

┌─────────────────────────┐  ┌────────────────────────┐
│ useActiveSection()      │  │ useSmoothScroll()      │
│ - scroll position       │  │ - anchor click handler │
│ - active section ID     │  │ - header offset calc   │
└─────────────────────────┘  └────────────────────────┘
```

### Data Model

This application has **no persistent data model** - it's a static marketing site. The only "state" is UI state:

```typescript
// Component State (React useState)
interface HeaderState {
  isMobileMenuOpen: boolean;
  activeSection: 'home' | 'about' | 'courses' | 'contact';
}

interface FadeInSectionState {
  isVisible: boolean;  // Triggered by IntersectionObserver
}

// Static Data (can be extracted to constants)
interface Course {
  id: string;
  title: string;
  icon: string;          // Unicode chess piece
  description: string;
  features: string[];
}

const COURSES: Course[] = [
  { id: 'group', title: 'Group Classes', icon: '♞♞', ... },
  { id: 'individual', title: 'One-to-One Classes', icon: '♔', ... }
];

// No API calls, no authentication, no forms with submission
```

### Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Styling approach | Global CSS with imports | CSS custom properties already work perfectly; no need for CSS-in-JS complexity. Import `styles.css` in `main.jsx` |
| State management | React useState only | Zero complex state. Mobile menu toggle and scroll position are the only dynamic values |
| Component structure | Flat, section-based | Matches existing HTML structure. No deep nesting needed |
| Animation library | None (native Intersection Observer) | Current vanilla JS approach translates directly to `useEffect` + IntersectionObserver |
| Routing | None needed | Single page with anchor links. Smooth scroll behavior handles navigation |
| TypeScript | Optional | Not required for this simple app. JSX is sufficient |
| Course data | Inline JSX or constants file | Only 2 courses - no need for separate data layer |

### Risk Assessment

**High Risk:** None identified

**Medium Risk:**
- **No existing package.json**: The project has `node_modules` from a previous Next.js installation but no root `package.json`. The migration must create a fresh package.json with correct Vite dependencies. Running `npm create vite@latest` should handle this, but verify React 19 compatibility with `@vitejs/plugin-react`.

- **Branch reference is incorrect**: The task breakdown references React components in `sam/issue-12` that do not exist. Developer should not spend time searching for them - all components must be written from scratch.

**Low Risk:**
- **`.next/` cleanup**: Build artifacts exist but are isolated. Delete during cleanup phase.
- **Unicode chess pieces**: Characters `♞` and `♔` should render correctly in React JSX, but test across browsers.
- **SEO meta tags**: Move from HTML to `index.html` in Vite root (not in React components). Vite serves static HTML.

### Implementation Notes

1. **Keep the CSS exactly as-is**: The CSS architecture (`:root` variables, BEM-like naming, responsive breakpoints) is production-ready. Import it globally in `main.jsx`:
   ```javascript
   import './styles.css'
   ```

2. **FadeInSection pattern**: Create a reusable wrapper component:
   ```jsx
   function FadeInSection({ children, id, className }) {
     const ref = useRef();
     const [isVisible, setIsVisible] = useState(false);
     
     useEffect(() => {
       const observer = new IntersectionObserver(
         ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
         { threshold: 0.1 }
       );
       observer.observe(ref.current);
       return () => observer.disconnect();
     }, []);
     
     return (
       <section id={id} ref={ref} 
         className={`${className} fade-in ${isVisible ? 'visible' : ''}`}>
         {children}
       </section>
     );
   }
   ```

3. **Header scroll behavior**: The current JS tracks scroll position for active nav highlighting. In React:
   ```jsx
   useEffect(() => {
     const handleScroll = () => {
       // Determine which section is in view
       // Update activeSection state
     };
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
   }, []);
   ```

4. **Vite configuration is minimal**: Default Vite React template works out of the box. Only customize if needed:
   ```javascript
   // vite.config.js
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   
   export default defineConfig({
     plugins: [react()],
   })
   ```

5. **Gotcha - Body overflow on mobile menu**: The current JS sets `document.body.style.overflow = 'hidden'` when menu opens. In React, handle this in a `useEffect` cleanup:
   ```jsx
   useEffect(() => {
     document.body.style.overflow = isMenuOpen ? 'hidden' : '';
     return () => { document.body.style.overflow = ''; };
   }, [isMenuOpen]);
   ```

6. **Preserve semantic HTML**: Current HTML has good accessibility (aria-labels, semantic elements, heading hierarchy). Maintain this in JSX conversion.

### Questions for Stakeholder

1. **TypeScript or JavaScript?** The task breakdown mentions `jsconfig.json` but also references `tsconfig.json`. Is TypeScript desired, or should we stick with plain JavaScript for simplicity?

2. **Should course data be externalized?** Currently there are only 2 courses hardcoded. Should we create a `courses.js` data file for future scalability, or keep it inline?

3. **Any interest in CSS Modules?** The global CSS approach works fine, but CSS Modules would scope styles per component. This adds complexity with minimal benefit for this small app - confirming global CSS is acceptable.

---

*Architecture review complete. Ready for implementation.*


---

## Notes

- Target Directory: `/tmp/sam-repos/sam-ai-bot/test2`
- Tech Stack: JavaScript

---

*🤖 Generated by Sam 🎯 (Triage) → Pete 📋 (Planning) → Alex 🏗️ (Architecture)*
