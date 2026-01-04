# PRD: Change the framework to VueJS

> **Issue:** #18
> **Repository:** sam-ai-bot/test2
> **Generated:** 2026-01-04T15:06:57.759Z
> **Type:** feature
> **Priority:** medium
> **Labels:** feature, framework change, VueJS, complex

---

## Overview

Change the framework to VueJS

## Original Request

Change the framework to VueJS

---

## 🎯 Implementation Plan

### Summary
The goal of this feature is to transition the existing application framework to VueJS within the `sam-ai-bot/test2` repository. This involves setting up VueJS within the target directory, migrating existing components, and ensuring compatibility with the current tech stack.

### Tasks

- [ ] **Task 1: Set up VueJS Environment**
  - Install Vue CLI and create a new VueJS project within `/tmp/sam-repos/sam-ai-bot/test2`
  - Configure the project with necessary dependencies and settings
  - Acceptance criteria: VueJS is set up and running with a default "Hello World" page.

- [ ] **Task 2: Migrate Existing Components to VueJS**
  - Identify and list all components that need to be migrated
  - Recreate these components in VueJS, ensuring functionality is preserved
  - Acceptance criteria: All components are migrated and function correctly in the VueJS environment.

- [ ] **Task 3: Integrate VueJS with Existing JavaScript Code**
  - Ensure that VueJS components can communicate with existing JavaScript code
  - Refactor any JavaScript code that is incompatible with VueJS
  - Acceptance criteria: VueJS components interact seamlessly with existing JavaScript code.

- [ ] **Task 4: Update Build and Deployment Scripts**
  - Modify build scripts to include VueJS build processes
  - Ensure deployment scripts handle VueJS files correctly
  - Acceptance criteria: Application builds and deploys without errors, including VueJS components.

- [ ] **Task 5: Test the VueJS Integration**
  - Write and execute tests to verify that all features work as expected in the new VueJS setup
  - Conduct user acceptance testing to ensure no loss of functionality
  - Acceptance criteria: All tests pass, and user feedback is positive regarding the transition.

### Technical Considerations
- Ensure compatibility with existing JavaScript libraries and tools.
- Consider using Vue Router and Vuex if the application requires routing or state management.
- Maintain application performance and minimize any potential increase in load times.

### Dependencies
- Node.js and npm should be installed for Vue CLI and package management.
- Access to the original repository to identify components and functionality.

### Estimated Complexity
Medium - While setting up VueJS is straightforward, migrating existing components and ensuring compatibility with the existing JavaScript stack involves moderate complexity.

---
*🏷️ Add label `ready-for-dev` when ready for implementation*

---

Now I have a comprehensive understanding of the codebase. Let me provide the architectural review:

## 🏗️ Architecture Review

### Overview
The proposed task is to migrate a **vanilla HTML/CSS/JavaScript** Chess Academy website to VueJS. The current implementation is a simple single-page application with 6 sections (Header, Hero, About, Courses, Contact, Footer), no build process, and approximately 900 lines of code total.

Notably, the repository already contains **complete migrations** to Angular 21, React+Vite, and Next.js in separate branches - but **no VueJS implementation exists yet**.

### Component Design
```
┌─────────────────────────────────────────────────────────────┐
│                     App.vue (Root)                          │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                 HeaderComponent.vue                     │ │
│  │  - menuOpen: ref(false)                                │ │
│  │  - activeSection: ref('home')                          │ │
│  │  - Scroll listener for active link detection           │ │
│  └────────────────────────────────────────────────────────┘ │
│                           │                                  │
│  ┌────────────────────────▼───────────────────────────────┐ │
│  │  HeroSection.vue    │  AboutSection.vue                │ │
│  │  (Static content)   │  (with FadeIn transition)        │ │
│  └─────────────────────┴──────────────────────────────────┘ │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │               CoursesSection.vue                        │ │
│  │  - courses: Course[] (reactive array)                   │ │
│  │  ┌─────────────┐  ┌─────────────┐                      │ │
│  │  │ CourseCard  │  │ CourseCard  │  (v-for loop)        │ │
│  │  └─────────────┘  └─────────────┘                      │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌────────────────────┐  ┌────────────────────────────────┐ │
│  │ ContactSection.vue │  │        FooterComponent.vue     │ │
│  └────────────────────┘  └────────────────────────────────┘ │
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │  FadeInDirective.js (or useFadeIn composable)          │ │
│  │  - IntersectionObserver-based scroll animations        │ │
│  └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### Data Model
```typescript
// Course interface (used in CoursesSection.vue)
interface Course {
  icon: string;         // Unicode chess piece (e.g., "♟")
  title: string;        // e.g., "Beginner Chess"
  description: string;  // Course overview text
  features: string[];   // Array of 4 feature bullet points
}

// Navigation state (in HeaderComponent.vue)
interface NavigationState {
  menuOpen: boolean;           // Mobile menu toggle
  activeSection: string;       // 'home' | 'about' | 'courses' | 'contact'
}

// Section anchors (used for navigation)
type SectionId = 'home' | 'about' | 'courses' | 'contact';
```

### Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Vue Version | **Vue 3** | Composition API, better TypeScript support, improved performance |
| Build Tool | **Vite** | Native Vue support, fast HMR, matches existing React branch pattern |
| State Management | **None (local refs)** | App is simple; Pinia overkill for current scope |
| Routing | **None** | Single-page with anchor links; Vue Router unnecessary |
| TypeScript | **Optional but recommended** | Matches Angular branch rigor; improves maintainability |
| CSS Strategy | **Scoped styles + CSS variables** | Keep existing CSS variables, use Vue's scoped styles |
| Animation Approach | **Custom directive or composable** | `v-fade-in` directive using IntersectionObserver |
| Testing | **Vitest + Vue Testing Library** | Consistent with other branches in repo |

### Risk Assessment

**High Risk:**
- **The planning agent's tasks assume Angular is current framework** - The actual codebase is vanilla HTML/CSS/JS with no framework. Task 3 ("Integrate VueJS with Existing JavaScript Code") is misleading; there's minimal JS to integrate (only ~107 lines of DOM manipulation).
- **Scope creep potential** - Given existing migrations to 3 other frameworks in branches, stakeholder should confirm this is truly desired vs. adopting an existing branch.

**Medium Risk:**
- **CSS migration complexity** - The existing `styles.css` (643 lines) uses CSS variables and complex selectors. Need to decide: keep as global CSS or split into scoped component styles.
- **Scroll behavior reimplementation** - The vanilla JS uses IntersectionObserver and scroll listeners that must be carefully translated to Vue's reactivity model.
- **No existing package.json** - Starting from scratch with no dependencies; need to establish entire toolchain.

**Low Risk:**
- Static content migration is straightforward
- Course data structure is simple and well-defined
- No authentication, database, or complex state to migrate

### Implementation Notes

1. **Use Vue 3 Composition API** - Avoid Options API; Composition API with `<script setup>` is the modern standard and provides better TypeScript inference.

2. **Project structure to follow:**
   ```
   /
   ├── index.html
   ├── package.json
   ├── vite.config.js
   ├── src/
   │   ├── main.js
   │   ├── App.vue
   │   ├── assets/
   │   │   └── styles.css      # Existing CSS (global)
   │   ├── components/
   │   │   ├── HeaderComponent.vue
   │   │   ├── HeroSection.vue
   │   │   ├── AboutSection.vue
   │   │   ├── CoursesSection.vue
   │   │   ├── CourseCard.vue
   │   │   ├── ContactSection.vue
   │   │   └── FooterComponent.vue
   │   └── directives/
   │       └── fadeIn.js       # Custom v-fade-in directive
   └── tests/
       └── *.test.js
   ```

3. **Preserve the Chess Green theme** - Import existing CSS variables as global styles; do not redefine them.

4. **Pattern for scroll-based active link:**
   ```vue
   // In HeaderComponent.vue
   const activeSection = ref('home')
   
   onMounted(() => {
     const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           activeSection.value = entry.target.id
         }
       })
     }, { threshold: 0.5 })
     
     sections.forEach(section => observer.observe(section))
   })
   ```

5. **Gotchas to avoid:**
   - Don't use Vue Router for anchor navigation - it's overkill and will complicate the smooth scroll behavior
   - Don't use Pinia/Vuex - component-local state is sufficient
   - Don't split the existing CSS into scoped styles initially - keep it global to reduce migration complexity, refactor later if desired
   - Remember to handle the mobile menu's "click outside to close" behavior with a document-level event listener

6. **Reference the React branch** (`sam/issue-14`) - Its component structure and patterns are most similar to what Vue 3 Composition API should look like.

### Questions for Stakeholder

1. **Why VueJS specifically?** The repository already has complete working migrations to Angular, React, and Next.js. Is there a specific reason to add a fourth framework option, or would adopting one of the existing branches be acceptable?

2. **TypeScript requirement?** Should this migration include TypeScript (recommended for maintainability) or stay with JavaScript for simplicity?

3. **Testing expectations?** Should the migration include comprehensive tests (like the React branch has) or is a working implementation sufficient for the first pass?

4. **CSS handling preference?** Should we:
   - (a) Keep existing CSS as a global stylesheet (simpler migration)
   - (b) Split into Vue scoped styles per component (better encapsulation, more work)

5. **Build output location?** The existing `dist/` folder contains Angular build artifacts. Should Vue build to the same location or use a different output directory?

---

*🏗️ Architecture review complete. The migration is straightforward for this simple application, but the planning agent's task breakdown needs revision to reflect the actual vanilla JS starting point rather than assuming an existing framework. Ready for implementation once stakeholder confirms VueJS is the desired choice over existing framework branches.*


---

## Notes

- Target Directory: `/tmp/sam-repos/sam-ai-bot/test2`
- Tech Stack: JavaScript

---

*🤖 Generated by Sam 🎯 (Triage) → Pete 📋 (Planning) → Alex 🏗️ (Architecture)*
