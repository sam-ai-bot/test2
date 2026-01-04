# Chess Academy Website

A responsive single-page website for an online Chess Academy located in Chennai, Tamil Nadu, India. Built with React + Vite.

## Features

- Responsive design that works on desktop, tablet, and mobile devices
- Chess Green theme with modern color palette
- Smooth scrolling navigation
- Mobile-friendly hamburger menu
- Scroll-triggered fade-in animations using Intersection Observer
- Two course offerings: Group Classes and One-to-One Classes
- Contact section with academy address

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Vitest** - Testing framework
- **React Testing Library** - Component testing utilities

## Project Structure

```
chess-academy/
├── index.html              # Entry HTML file
├── src/
│   ├── main.jsx           # React entry point
│   ├── App.jsx            # Main app component
│   ├── components/        # React components
│   │   ├── Header.jsx     # Navigation with mobile menu
│   │   ├── Hero.jsx       # Landing section
│   │   ├── About.jsx      # Academy information
│   │   ├── Courses.jsx    # Course cards
│   │   ├── Contact.jsx    # Contact information
│   │   ├── Footer.jsx     # Footer with social links
│   │   └── FadeInSection.jsx  # Scroll animation wrapper
│   ├── styles/
│   │   └── globals.css    # Global styles
│   └── test/
│       └── setup.js       # Test configuration
├── public/                # Static assets
├── vite.config.js         # Vite configuration
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sam-ai-bot/test2.git
   cd test2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Testing

Run the test suite:
```bash
npm test
```

Run tests once (CI mode):
```bash
npm run test:run
```

### Production Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Academy Information

**Address:**
Chess Circle,
Chennai, Tamil Nadu,
India

**Courses Offered:**
- **Group Classes** - Learn in a collaborative environment with fellow enthusiasts
- **One-to-One Classes** - Personalized coaching tailored to your goals

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary to Chess Academy.
