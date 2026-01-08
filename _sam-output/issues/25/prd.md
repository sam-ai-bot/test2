# PRD: Create a new landing page for Music School

> **Issue:** #25
> **Repository:** sam-ai-bot/test2
> **Generated:** 2026-01-08T16:50:39.859Z
> **Type:** feature
> **Priority:** medium
> **Labels:** feature, landing page, music school

---

## Overview

Create a new landing page for Music School

## Original Request

Create a new landing page for Music School

---

Now I have a complete understanding of the codebase. Let me create a detailed, actionable implementation plan for the Music School landing page.

---

## 🎯 Implementation Plan

### Summary
Transform the existing Chess Academy landing page into a Music School landing page by updating branding, content, colors, and imagery while maintaining the proven single-page architecture and component patterns already established in the codebase.

### Tasks

- [ ] **Task 1: Update Branding & Meta Information**
  - Change page title from "Chess Academy" to "Music School" in `index.html`
  - Update meta description and keywords for music education SEO
  - Update Open Graph tags (`og:title`, `og:description`, `og:site_name`)
  - Update favicon reference if a new music-themed favicon is available
  - Change nav brand text and logo references
  - Update footer copyright and branding text
  - **File:** `index.html`
  - **Acceptance:** All browser tabs, social sharing previews, and page references show "Music School" branding

- [ ] **Task 2: Redesign Hero Section for Music School**
  - Replace hero headline with music school name and compelling tagline (e.g., "Discover Your Musical Voice")
  - Update hero subheadline to describe music education offerings
  - Change CTA button text to music-relevant action (e.g., "Explore Lessons", "Start Your Journey")
  - Update CTA link to point to courses/lessons section
  - Consider adding musical notation symbols or instrument imagery references
  - **File:** `index.html` (lines 29-40, hero section)
  - **Acceptance:** Hero section clearly communicates music school identity with compelling call-to-action

- [ ] **Task 3: Rewrite About Section Content**
  - Replace chess-focused mission statement with music school philosophy
  - Describe teaching approach, history, and values
  - Highlight what makes this music school unique (methodology, instructors, facilities)
  - Keep the same HTML structure (h2 + paragraphs in container)
  - **File:** `index.html` (about section)
  - **Acceptance:** About section effectively communicates the music school's mission and differentiators

- [ ] **Task 4: Transform Courses Section to Music Lessons**
  - Replace chess courses with music lesson offerings using existing card component pattern
  - Create cards for different instruments/programs:
    - Piano Lessons
    - Guitar Lessons  
    - Vocal Training
    - Music Theory (optional additional cards)
  - Update card icons to musical symbols (🎹, 🎸, 🎤, 🎵)
  - Rewrite course descriptions for each instrument/program
  - Update feature lists with lesson details (skill levels, duration, class sizes)
  - Change CTA button text to "Enquire Now" or "Book a Trial"
  - **File:** `index.html` (courses section)
  - **Acceptance:** At least 3-4 music lesson cards displayed in responsive grid, each with description, features, and CTA

- [ ] **Task 5: Update Color Scheme to Music School Theme**
  - Choose a music-appropriate color palette (suggestion: deep blue/gold or burgundy/cream)
  - Update CSS custom properties in `:root` selector:
    - `--color-black` - primary dark
    - `--color-dark` - section backgrounds
    - `--color-accent` - primary accent
    - `--color-accent-dark` - hover states
    - Other supporting colors
  - Test all components inherit new colors correctly
  - Verify contrast ratios meet accessibility standards (WCAG AA)
  - **File:** `css/styles.css` (lines 1-20, `:root` variables)
  - **Acceptance:** Consistent new color scheme across all sections, buttons, and interactive elements

- [ ] **Task 6: Update Contact Section**
  - Replace physical address with music school location
  - Update contact email to music school email
  - Modify contact section heading and description
  - Consider adding phone number or lesson booking info
  - Update any social media links in footer to music school accounts
  - **File:** `index.html` (contact section + footer)
  - **Acceptance:** All contact information reflects music school details; social links point to correct destinations

- [ ] **Task 7: Final Testing & Polish**
  - Test responsive design at all breakpoints (mobile, tablet, desktop)
  - Verify all navigation links scroll to correct sections
  - Test mobile hamburger menu functionality
  - Confirm all buttons and CTAs have proper hover states
  - Check for any remaining chess/academy references that need updating
  - Validate HTML structure and fix any errors
  - Test in multiple browsers (Chrome, Firefox, Safari if available)
  - **Files:** All project files
  - **Acceptance:** Page renders correctly on all devices, all interactions work, no references to old branding remain

### Technical Considerations
- **No framework changes needed** - The existing vanilla HTML/CSS/JS architecture is preserved
- **CSS Variables make rebranding simple** - Changing `:root` color variables automatically updates entire site
- **Existing JavaScript works as-is** - Smooth scroll, mobile menu, and animations require no modifications
- **Responsive breakpoints already defined** - 768px (tablet) and 480px (mobile) handle all device sizes
- **Card component is reusable** - Same `.course-card` class pattern works for any number of lesson types
- **Keep semantic HTML structure** - Maintain accessibility with proper headings, ARIA labels, and semantic elements

### Dependencies
- No external dependencies required
- All changes are self-contained within the existing project structure
- Optional: New images/assets for hero background or instrument icons (can use unicode symbols initially)

### Estimated Complexity
**Simple** - This is primarily a content and styling update using well-established patterns. The codebase already has all the necessary components, responsive design, and JavaScript functionality in place. No new architectural decisions or complex features are required.

---
*🏷️ Add label `ready-for-dev` when ready for implementation*


---

Now I have a complete picture. Let me provide my architecture review.

---

## 🏗️ Architecture Review

### Overview

The proposed implementation transforms a **Chess Academy** single-page landing site into a **Music School** landing page. This is a **content-focused refactoring task** with no structural changes required. The existing architecture is clean, well-organized, and perfectly suited for this transformation.

### Component Design

```
┌─────────────────────────────────────────────────────────────┐
│                     Landing Page                             │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────┐   │
│  │  HEADER (fixed)                                      │   │
│  │  ├─ nav-brand: "Music School"                        │   │
│  │  ├─ nav-toggle (hamburger - mobile)                  │   │
│  │  └─ nav-menu: [Home, Lessons, About, Contact]        │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  HERO SECTION (#home)                                │   │
│  │  ├─ h1: "Music School"                               │   │
│  │  ├─ tagline: "Discover Your Musical Voice"           │   │
│  │  └─ CTA button → #lessons                            │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  ABOUT SECTION (#about)                              │   │
│  │  └─ Music school philosophy & teaching approach      │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  LESSONS SECTION (#courses → consider #lessons)      │   │
│  │  └─ courses-grid                                     │   │
│  │      ├─ course-card: Piano 🎹                        │   │
│  │      ├─ course-card: Guitar 🎸                       │   │
│  │      ├─ course-card: Vocal 🎤                        │   │
│  │      └─ course-card: Music Theory 🎵 (optional)      │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  CONTACT SECTION (#contact)                          │   │
│  │  ├─ address: Music school location                   │   │
│  │  └─ enquiry: Email/phone                             │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  FOOTER                                              │   │
│  │  ├─ copyright                                        │   │
│  │  └─ social links                                     │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘

Files Involved:
┌────────────────────┬──────────────────────────────────────────┐
│ index.html         │ All content updates (branding, text)     │
├────────────────────┼──────────────────────────────────────────┤
│ css/styles.css     │ Color scheme updates (:root variables)   │
├────────────────────┼──────────────────────────────────────────┤
│ js/main.js         │ NO CHANGES REQUIRED                      │
└────────────────────┴──────────────────────────────────────────┘
```

### Data Model

This is a **static landing page** with no dynamic data or backend. All content is hardcoded in HTML.

| Element | Current State | Target State |
|---------|--------------|--------------|
| Brand Identity | "Chess Academy" | "Music School" |
| Course Cards | 2 (Group, 1-to-1) | 3-4 (Piano, Guitar, Vocal, Theory) |
| Icons | Chess pieces (♞ ♔) | Musical symbols (🎹 🎸 🎤 🎵) |
| Color Theme | Indigo/Purple | Music-appropriate palette |
| Location | Chess Circle, Chennai | Music school location (TBD) |
| Email | info@chessacademy.com | Music school email (TBD) |

### Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | Vanilla HTML/CSS/JS (no change) | Existing architecture is clean and maintainable |
| Color System | CSS Custom Properties | Already in place; changing `:root` variables propagates globally |
| Responsive Design | Existing breakpoints | 1024px / 768px / 480px already handle all devices |
| Card Component | Reuse `.course-card` | Pattern works for any number of lesson types |
| Section IDs | Keep `#courses` vs rename to `#lessons` | Decision point - see below |
| JavaScript | No modifications | Mobile menu, smooth scroll, animations all work as-is |

### Risk Assessment

**High Risk:** None

**Medium Risk:**
- **Incomplete content replacement** - The grep for "chess" or "academy" should be thorough. There are references in:
  - `index.html:6` (title)
  - `index.html:9-24` (meta tags)
  - `index.html:37` (nav brand)
  - `index.html:55` (hero h1)
  - `index.html:65-66` (about text)
  - `index.html:118` (address)
  - `index.html:126` (email)
  - `index.html:138` (footer copyright)
  - `css/styles.css:1` (comment)
  - `js/main.js:1` (comment)
  
- **Color contrast** - When changing the color scheme, ensure WCAG AA compliance. The current indigo/purple theme has good contrast; any new palette should be validated.

**Low Risk:**
- **Favicon** - `index.html:27` references `images/favicon.ico` which may not exist or need replacement
- **Social links** - Footer social links are placeholder `#` hrefs
- **Number of cards** - Grid CSS uses `minmax(350px, 1fr)` which handles 2 cards well; 3-4 cards will work but should be tested at tablet widths

### Implementation Notes

1. **Preserve section IDs** - Keep `id="courses"` unless you also update:
   - Nav link `href="#courses"` 
   - Hero CTA `href="#courses"`
   - Course card CTAs `href="#contact"`
   - The JS doesn't care about specific IDs, it just queries `section[id]`

2. **Icon Strategy** - Unicode emoji (🎹 🎸 🎤 🎵) work cross-browser and require no assets. The existing chess pieces use HTML entities (&#9822;). Either approach works.

3. **Card Grid Behavior** - With 3+ cards, the `auto-fit` grid will:
   - Desktop: 2 columns (max-width 900px)
   - Tablet: 1-2 columns depending on width
   - Mobile: 1 column
   
   Consider increasing `max-width: 900px` to `max-width: 1200px` on `.courses-grid` if adding 4 cards.

4. **Color Palette Suggestion** - For a music school, consider:
   ```css
   /* Deep Navy & Gold (classical/sophisticated) */
   --color-black: #1a1a2e;
   --color-dark: #16213e;
   --color-accent: #e9a53a;
   --color-accent-dark: #c78c2d;
   ```
   Or retain the current purple/indigo which works well for a creative arts context.

5. **Testing Checklist for Developer:**
   - [ ] Mobile menu opens/closes correctly
   - [ ] Smooth scroll works to all sections
   - [ ] All nav links highlight correctly on scroll
   - [ ] Fade-in animations trigger on scroll
   - [ ] All hover states visible on course cards and buttons
   - [ ] No console errors
   - [ ] Final grep for "chess" returns zero results

### Questions for Stakeholder

1. **Location & Contact Details** - What address, email, and phone number should be used for the music school? The plan mentions Chennai but doesn't specify the actual music school details.

2. **Color Scheme Preference** - Should we keep the current indigo/purple theme (works well for creative arts) or change to a different palette? Suggest options:
   - Keep current indigo/purple
   - Navy/gold (classical music feel)
   - Burgundy/cream (elegant, recital-hall aesthetic)
   - Custom colors provided by stakeholder

3. **Section ID Naming** - Should `id="courses"` be renamed to `id="lessons"` for semantic clarity? This requires updating all internal links but improves content accuracy.

4. **Social Media Links** - Should the placeholder social links (FB, TW, IG) remain as `#` placeholders, or should they be removed entirely, or updated to actual music school accounts?

5. **Number of Lesson Cards** - The plan suggests 3-4 cards (Piano, Guitar, Vocal, Music Theory). Should all 4 be included, or start with 3 primary instruments?

---

*🏗️ Architecture review complete. The implementation plan is sound and well-structured. This is a straightforward content transformation with minimal technical risk. Ready for implementation once stakeholder questions are clarified.*


---

## Notes

- Target Directory: `/tmp/sam-repos/sam-ai-bot/test2`
- Tech Stack: JavaScript

---

*🤖 Generated by Sam 🎯 (Triage) → Pete 📋 (Planning) → Alex 🏗️ (Architecture)*
