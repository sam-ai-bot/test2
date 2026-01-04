# Chess Academy

A Chess Academy website built with Angular 21, featuring a responsive design with a Chess Green color scheme.

## Features

- Responsive navigation with mobile hamburger menu
- Hero section with call-to-action
- About section with academy description
- Courses section showcasing Group Classes and One-to-One coaching
- Contact section with location and email
- Smooth scroll navigation
- Scroll-triggered fade-in animations
- SEO-optimized with Open Graph and Twitter Card meta tags

## Development

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development server

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload on source changes.

### Building

```bash
npm run build
```

Build artifacts are stored in the `dist/` directory.

### Running tests

```bash
npm test
```

Tests run with Vitest.

## Project Structure

```
src/app/
  components/
    header/      - Navigation header with mobile menu
    hero/        - Hero section
    about/       - About section
    courses/     - Courses section with course cards
    contact/     - Contact section
    footer/      - Footer
  directives/
    fade-in/     - Scroll-triggered fade-in animation directive
```

## Technology Stack

- Angular 21 with standalone components
- TypeScript 5.9
- CSS with CSS variables for theming
- Vitest for testing
