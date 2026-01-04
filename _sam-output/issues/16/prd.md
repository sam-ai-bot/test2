# PRD: Change framework to Angular

> **Issue:** #16
> **Repository:** sam-ai-bot/test2
> **Generated:** 2026-01-04T12:25:52.744Z
> **Type:** feature
> **Priority:** medium
> **Labels:** feature, framework change, Angular, complex

---

## Overview

Change framework to Angular

## Original Request

Change framework to Angular

---

Now I have all the context I need. Let me create the detailed implementation plan:

## 🎯 Implementation Plan

### Summary
Migrate the existing Chess Academy website from vanilla HTML/CSS/JavaScript to a modern Angular application. The current site is a single-page informational website with 4 sections (Home, About, Courses, Contact), responsive styling, and basic interactivity (mobile menu, smooth scroll, fade-in animations).

### Tasks

- [ ] **Task 1: Initialize Angular Project & Remove Old Files**
  - Install Angular CLI globally if not present: `npm install -g @angular/cli`
  - Create new Angular project in a temporary directory: `ng new chess-academy --routing --style=css`
  - Copy Angular project files to the repository root, preserving git history
  - Remove old vanilla files: `index.html` (root), `css/`, `js/`, `dist/`, `node_modules/`
  - Update `.gitignore` for Angular-specific patterns
  - Verify the project builds with `ng build` and serves with `ng serve`
  - Acceptance: Angular 17+ project scaffolded, runs on `localhost:4200`, old files removed

- [ ] **Task 2: Create Core Layout Components (Header & Footer)**
  - Generate header component: `ng generate component components/header`
  - Migrate navigation HTML from `index.html` lines 34-48 to header component template
  - Implement mobile hamburger menu toggle using Angular signals or component state
  - Implement click-outside detection for closing mobile menu (use `@HostListener`)
  - Generate footer component: `ng generate component components/footer`
  - Migrate footer HTML from `index.html` lines 134-147 to footer component template
  - Add header and footer components to `app.component.html`
  - Acceptance: Header with working responsive navigation, footer displaying correctly

- [ ] **Task 3: Create Section Components (Hero, About, Courses, Contact)**
  - Generate components: `ng generate component components/hero`, `components/about`, `components/courses`, `components/contact`
  - Migrate Hero section HTML (lines 53-59) to hero component
  - Migrate About section HTML (lines 62-68) to about component
  - Migrate Courses section HTML (lines 71-108) to courses component, including both course cards
  - Migrate Contact section HTML (lines 111-130) to contact component
  - Add all section components to `app.component.html` in correct order
  - Acceptance: All 4 sections render correctly with proper content

- [ ] **Task 4: Migrate Styles to Angular Component Architecture**
  - Copy CSS variables and global styles to `src/styles.css` (reset, typography, variables)
  - Move header-specific styles (`.header`, `.nav`, `.nav-toggle`, `.hamburger`) to `header.component.css`
  - Move footer-specific styles to `footer.component.css`
  - Move section-specific styles to their respective component CSS files
  - Ensure responsive breakpoints work (test at 1024px, 768px, 480px)
  - Verify the Chess Green color scheme is preserved
  - Acceptance: Site visually matches original design at all breakpoints

- [ ] **Task 5: Implement Angular Routing & Smooth Scroll Navigation**
  - Configure `app-routing.module.ts` with fragment navigation enabled (`anchorScrolling: 'enabled'`)
  - Update header nav links to use `routerLink` with fragments: `[routerLink]="['/']" fragment="home"`
  - Implement scroll offset compensation for fixed header (use `scrollPositionRestoration` or custom directive)
  - Add active link highlighting using `routerLinkActive` or scroll-based detection
  - Ensure "Explore Courses" and "Enquire Now" buttons navigate correctly
  - Acceptance: Clicking nav links smooth-scrolls to sections, active link highlights on scroll

- [ ] **Task 6: Implement Scroll Animations & Interactivity**
  - Create a reusable `FadeInDirective` or use Angular animations for scroll-triggered fade-in
  - Apply fade-in effect to About, Courses, and Contact sections using `IntersectionObserver` via directive
  - Ensure animations trigger when sections enter viewport (threshold: 0.1)
  - Animations should only fire once (unobserve after triggering)
  - Acceptance: Sections fade in smoothly when scrolled into view, matching original behavior

- [ ] **Task 7: SEO, Meta Tags & Production Build Verification**
  - Update `index.html` in `src/` with all meta tags from original (SEO, Open Graph, Twitter Cards)
  - Ensure proper `<title>` and meta descriptions are set
  - Configure favicon path correctly for Angular assets
  - Run production build: `ng build --configuration production`
  - Verify build output in `dist/` folder is correct
  - Test that all functionality works in production build
  - Acceptance: Production build succeeds, meta tags present in served HTML, site fully functional

### Technical Considerations
- **Angular Version**: Use Angular 17+ with standalone components for simpler architecture (no NgModules needed)
- **State Management**: Component-level state using signals or standard properties is sufficient; no NgRx needed
- **CSS Strategy**: Use component-scoped CSS (Angular's default encapsulation) for maintainability
- **Smooth Scroll**: Angular's router supports `anchorScrolling`, but header offset may require custom solution via `RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })`
- **Mobile Menu**: Use `@HostListener('document:click')` for click-outside detection in header component
- **Animations**: Consider using `@angular/animations` for scroll effects or keep vanilla IntersectionObserver in a directive
- **Existing node_modules**: Delete entirely and let `npm install` in Angular project create fresh dependencies

### Dependencies
- Node.js 18+ and npm 9+ (required for Angular 17+)
- Angular CLI (`@angular/cli@17+`)
- No external UI libraries required (pure CSS as original)
- No backend changes needed (static content only)

### Estimated Complexity
**Medium** - The migration is straightforward since the source is vanilla HTML/CSS/JS with no complex state management or API integrations. The site has only 4 sections and minimal interactivity. The main work is restructuring into Angular components and ensuring feature parity with smooth scroll navigation and animations.

---
*🏷️ Add label `ready-for-dev` when ready for implementation*


---

Now I have comprehensive context. Let me provide the architecture review.

---

## 🏗️ Architecture Review

### Overview
The migration transforms a clean, 900-line vanilla HTML/CSS/JS website into an Angular 17+ application. The existing codebase is well-structured with clear separation (single HTML, single CSS, single JS), making decomposition straightforward. The proposed plan is fundamentally sound but has several areas requiring clarification and refinement.

### Component Design
```
┌─────────────────────────────────────────────────────────────┐
│                      AppComponent                            │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                   HeaderComponent                      │  │
│  │  • Brand logo/text                                     │  │
│  │  • Navigation links (routerLink + fragment)           │  │
│  │  • Mobile hamburger toggle                            │  │
│  │  • @HostListener for click-outside                    │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                   HeroComponent                        │  │
│  │  • Title, tagline, CTA button                         │  │
│  │  • No special interactivity                           │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌───────────────────────────────────────────────────────┐  │
│  │              AboutComponent [fadeIn]                   │  │
│  │  • Static content                                      │  │
│  │  • Uses fade-in directive                             │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌───────────────────────────────────────────────────────┐  │
│  │             CoursesComponent [fadeIn]                  │  │
│  │  ┌─────────────────┐  ┌─────────────────┐            │  │
│  │  │  CourseCard     │  │  CourseCard     │            │  │
│  │  │  (Group)        │  │  (1-on-1)       │            │  │
│  │  └─────────────────┘  └─────────────────┘            │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌───────────────────────────────────────────────────────┐  │
│  │             ContactComponent [fadeIn]                  │  │
│  │  • Address info  • Email CTA                          │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                  FooterComponent                       │  │
│  │  • Copyright • Social links                           │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘

Shared:
├── directives/
│   └── fade-in.directive.ts     (IntersectionObserver-based)
└── styles.css                   (global variables, reset, typography)
```

### Data Model
This is a static marketing site with **no dynamic data model**. However, defining interfaces improves maintainability:

```typescript
// models/course.interface.ts
interface Course {
  id: string;
  title: string;
  icon: string;          // Unicode chess piece
  features: string[];
  ctaText: string;
  ctaLink: string;
}

// models/social-link.interface.ts
interface SocialLink {
  platform: 'facebook' | 'twitter' | 'instagram';
  url: string;
  ariaLabel: string;
}

// models/contact-info.interface.ts
interface ContactInfo {
  address: string[];     // Multi-line address
  email: string;
}
```

**Note:** These are optional for a static site but recommended if future CMS integration is planned.

### Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Angular Version | 17+ with standalone components | Simpler architecture, no NgModules overhead, tree-shakable |
| State Management | Component-level signals | Overkill to add NgRx for a hamburger menu toggle |
| CSS Strategy | Component-scoped CSS | Angular default, prevents style leakage, matches current isolation |
| Smooth Scroll | Router `anchorScrolling` + `scrollOffset` | Native Angular solution; custom directive only if offset issues arise |
| Animations | Custom `FadeInDirective` with IntersectionObserver | Lighter than `@angular/animations`, matches existing pattern |
| Active Link | Scroll-based detection in HeaderComponent | `routerLinkActive` won't work with fragments on same route |
| Course Data | Inline in template OR extracted to array | Start inline, refactor to data array if 3+ courses added later |

### Risk Assessment

**High Risk:**
- **None identified** - This is a straightforward migration with no backend, auth, or complex state.

**Medium Risk:**
1. **Scroll offset for fixed header** - Angular's `anchorScrolling` doesn't natively account for fixed header height. The current JS calculates `headerOffset` dynamically. Solution: Use `scrollPositionRestoration: 'enabled'` with `scrollOffset: [0, 80]` in router config, or implement a scroll service.

2. **Active link highlighting on scroll** - The plan mentions `routerLinkActive`, but this won't work for fragment navigation on a single route. The developer must port the existing scroll-based detection (js/main.js lines 83-106) into the HeaderComponent.

3. **Click-outside detection** - `@HostListener('document:click')` can cause performance issues if not implemented carefully. Ensure the check short-circuits early when menu is closed.

**Low Risk:**
1. **CSS variable migration** - CSS custom properties in `src/styles.css` should work identically. No changes needed to the variable definitions.

2. **Unicode chess pieces** - These render via CSS content property and should transfer directly.

3. **dist/ folder conflict** - Angular also outputs to `dist/`. Ensure old `dist/` is deleted before first Angular build to avoid confusion.

### Implementation Notes

1. **Project initialization approach** - Instead of creating in temp directory and copying, consider:
   ```bash
   # Backup existing files
   mkdir -p /tmp/chess-backup && cp -r index.html css js /tmp/chess-backup/
   
   # Initialize Angular in place (will fail if files exist)
   ng new chess-academy --directory=. --routing --style=css --skip-git
   ```
   This preserves git history better. Alternatively, use `--force` flag carefully.

2. **Standalone components pattern** - With Angular 17+, generate components without modules:
   ```bash
   ng generate component components/header --standalone
   ```
   Then import directly in `app.component.ts`:
   ```typescript
   @Component({
     standalone: true,
     imports: [HeaderComponent, HeroComponent, ...],
     // ...
   })
   ```

3. **FadeInDirective implementation pattern:**
   ```typescript
   @Directive({
     selector: '[appFadeIn]',
     standalone: true
   })
   export class FadeInDirective implements AfterViewInit, OnDestroy {
     private observer: IntersectionObserver;
     
     constructor(private el: ElementRef, private renderer: Renderer2) {}
     
     ngAfterViewInit() {
       this.renderer.addClass(this.el.nativeElement, 'fade-in');
       this.observer = new IntersectionObserver(
         ([entry]) => {
           if (entry.isIntersecting) {
             this.renderer.addClass(this.el.nativeElement, 'visible');
             this.observer.unobserve(this.el.nativeElement);
           }
         },
         { threshold: 0.1 }
       );
       this.observer.observe(this.el.nativeElement);
     }
     
     ngOnDestroy() {
       this.observer?.disconnect();
     }
   }
   ```

4. **Header scroll-based active link** - Port this logic into `HeaderComponent`:
   ```typescript
   @HostListener('window:scroll')
   onScroll() {
     const sections = ['home', 'about', 'courses', 'contact'];
     const scrollPos = window.scrollY + 100;
     
     for (const id of sections) {
       const section = document.getElementById(id);
       if (section && scrollPos >= section.offsetTop && 
           scrollPos < section.offsetTop + section.offsetHeight) {
         this.activeSection = id;
         break;
       }
     }
   }
   ```

5. **Router configuration:**
   ```typescript
   // app.config.ts (Angular 17+ standalone)
   export const appConfig: ApplicationConfig = {
     providers: [
       provideRouter(routes, 
         withInMemoryScrolling({
           anchorScrolling: 'enabled',
           scrollPositionRestoration: 'enabled'
         })
       )
     ]
   };
   ```

6. **Gotcha: Empty routes array** - Since this is a single-page site, the routes array can be empty `[]`. All navigation is fragment-based within the root route.

7. **Testing consideration** - The plan doesn't mention tests. Angular CLI generates spec files by default. For a static marketing site, unit tests add marginal value. Consider `--skip-tests` during generation if test coverage isn't required, or at minimum write one integration test verifying all sections render.

### Questions for Stakeholder

1. **Future content management?** - Will course data eventually come from a CMS or API? If yes, we should extract course data into a service/constant file now rather than hardcoding in templates.

2. **SEO requirements** - Is server-side rendering (Angular Universal/SSR) needed for SEO? The current vanilla HTML is fully crawlable. A client-rendered Angular SPA may impact SEO unless SSR or prerendering is implemented.

3. **Analytics tracking** - The current site has no analytics. Should we add Google Analytics or similar during the migration?

4. **Form functionality** - The "Enquire Now" buttons currently just link to `#contact`. Should the contact section include an actual contact form in the Angular version?

5. **Test coverage expectations** - Should the developer write unit/integration tests, or is this a test-free implementation?

---

### Recommended Task Order Refinement

The proposed 7-task breakdown is logical. I recommend one modification:

**Merge Tasks 5 & 6** - Routing/smooth-scroll and animations are both about user experience and can be tested together. This reduces context-switching.

**Add explicit acceptance criteria for visual parity** - Task 4 should include screenshot comparison or visual regression testing against the original site.

---

*🏗️ Architecture review complete. The plan is sound for a static marketing site migration. Primary watch items: scroll offset handling and active link highlighting. Ready for implementation.*


---

## Notes

- Target Directory: `/tmp/sam-repos/sam-ai-bot/test2`
- Tech Stack: JavaScript

---

*🤖 Generated by Sam 🎯 (Triage) → Pete 📋 (Planning) → Alex 🏗️ (Architecture)*
