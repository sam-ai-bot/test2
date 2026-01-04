# PRD: Change the color scheme to Green

> **Issue:** #10
> **Repository:** sam-ai-bot/test2
> **Generated:** 2026-01-04T08:21:24.055Z
> **Type:** feature
> **Priority:** medium
> **Labels:** feature, enhancement, color scheme

---

## Overview

Change the color scheme to Chess Green

## Original Request

Change the color scheme to Chess Green

---

Now I have a comprehensive understanding of the codebase. Let me create a detailed implementation plan.

## 🎯 Implementation Plan

### Summary
Update the Chess Academy website's color scheme from the current "Wooden Chess" theme to a "Chess Green" theme by modifying the CSS custom properties in the centralized stylesheet. This is a straightforward color palette swap affecting only the `:root` variables in `css/styles.css`.

---

### Tasks

- [ ] **Task 1: Define Chess Green Color Palette**
  - Research appropriate green color combinations for a chess-themed website
  - Select primary dark green (e.g., `#1B4D3E` forest green for `--color-black`)
  - Select secondary dark green (e.g., `#2E5A4F` for `--color-dark`)
  - Choose complementary light/cream colors (e.g., `#F0F7F4` for `--color-white`)
  - Pick accent colors that provide good contrast (e.g., `#4CAF50` or `#2E8B57`)
  - Document the complete 8-color palette before implementation
  - **Acceptance:** A documented color palette with hex codes for all 8 color variables that maintains sufficient contrast ratios for accessibility

- [ ] **Task 2: Update Primary Color Variables**
  - Open `/tmp/sam-repos/sam-ai-bot/test2/css/styles.css`
  - Update `--color-black` (line 5) with deep forest green
  - Update `--color-dark` (line 6) with secondary dark green
  - Update `--color-white` (line 7) with light mint/cream
  - Update `--color-off-white` (line 8) with subtle green-tinted background
  - **Acceptance:** Lines 5-8 contain new green-themed hex values

- [ ] **Task 3: Update Accent and Gray Variables**
  - Update `--color-accent` (line 9) with vibrant green highlight color
  - Update `--color-accent-dark` (line 10) with darker hover state green
  - Update `--color-gray` (line 11) with muted green-gray for secondary text
  - Update `--color-light-gray` (line 12) with subtle green-tinted border color
  - **Acceptance:** Lines 9-12 contain new green-themed hex values with proper contrast

- [ ] **Task 4: Update Shadow Colors (Optional but Recommended)**
  - Modify `--shadow-light` (line 16) to use green-tinted rgba values
  - Modify `--shadow-medium` (line 17) to use green-tinted rgba values
  - Modify `--shadow-heavy` (line 18) to use green-tinted rgba values
  - Example: `rgba(27, 77, 62, 0.12)` for green undertones
  - **Acceptance:** Shadow variables use rgba values with green undertones matching the theme

- [ ] **Task 5: Update Theme Comment**
  - Change the comment on line 3 from "Wooden Chess Theme" to "Chess Green Theme"
  - Ensure the color palette comment accurately describes the new theme
  - **Acceptance:** CSS comment reflects the new theme name

- [ ] **Task 6: Visual Testing and Verification**
  - Open `index.html` in a browser
  - Verify header/navigation displays correctly with new colors
  - Verify hero section gradient looks cohesive
  - Check all buttons have proper hover states
  - Confirm course cards are readable with good contrast
  - Test contact form styling
  - Verify footer displays properly
  - Check mobile responsive views
  - **Acceptance:** All sections display cohesively with the new green theme, no visual regressions

---

### Technical Considerations
- **Single File Change:** Only `css/styles.css` requires modification - the CSS variable architecture handles propagation automatically
- **Contrast Accessibility:** Ensure text remains readable (WCAG 2.1 recommends 4.5:1 contrast ratio for normal text)
- **Hover States:** The `--color-accent-dark` must be visibly different from `--color-accent` for interactive feedback
- **Gradient Consistency:** The hero section uses a gradient from `--color-black` to `--color-dark` - these should blend smoothly
- **No JavaScript Changes:** All color references use CSS variables, no JS modifications needed

### Dependencies
- None - this is a standalone CSS change with no external dependencies
- No build process required (vanilla CSS project)

### Estimated Complexity
**Simple** - This is a well-architected codebase with centralized CSS variables. The change requires updating 8-11 lines of hex values in a single file. The previous wooden theme update (commit `f3fb384`) demonstrates this exact pattern works cleanly.

---

### Suggested Chess Green Palette

For reference, here's a starting point palette:

| Variable | Suggested Value | Description |
|----------|-----------------|-------------|
| `--color-black` | `#1B4D3E` | Deep forest green |
| `--color-dark` | `#2E5A4F` | Hunter green |
| `--color-white` | `#F0F7F4` | Mint cream |
| `--color-off-white` | `#E8F5E9` | Light green tint |
| `--color-accent` | `#4CAF50` | Material green |
| `--color-accent-dark` | `#388E3C` | Darker green hover |
| `--color-gray` | `#5F7A6E` | Muted sage |
| `--color-light-gray` | `#C8E6C9` | Light sage border |

---

*🏷️ Add label `ready-for-dev` when ready for implementation*


---

## Notes

- Target Directory: `/tmp/sam-repos/sam-ai-bot/test2`
- Tech Stack: JavaScript

---

*🤖 Generated by Sam 🎯 (Triage) → Pete 📋 (Planning) → Alex 🏗️ (Architecture)*
