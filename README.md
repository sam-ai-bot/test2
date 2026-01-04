# Chess Academy Website

A responsive single-page website for an online Chess Academy located in Chennai, Tamil Nadu, India. Built with Next.js and React.

## Features

- Responsive design that works on desktop, tablet, and mobile devices
- Chess Green themed visual design
- Smooth scrolling navigation
- Mobile-friendly hamburger menu
- Scroll-triggered fade-in animations
- Two course offerings: Group Classes and One-to-One Classes
- Contact section with academy address
- SEO optimized with Open Graph and Twitter Card meta tags

## Project Structure

```
chess-academy/
├── public/                 # Static assets (images, favicon)
├── src/
│   ├── app/
│   │   ├── layout.js       # Root layout with metadata
│   │   └── page.js         # Main page component
│   ├── components/
│   │   ├── Header.jsx      # Navigation with mobile menu
│   │   ├── Hero.jsx        # Hero section
│   │   ├── About.jsx       # About section
│   │   ├── Courses.jsx     # Courses section
│   │   ├── Contact.jsx     # Contact section
│   │   ├── Footer.jsx      # Footer section
│   │   └── FadeInSection.jsx  # Animation wrapper
│   └── styles/
│       └── globals.css     # Global styles
├── next.config.mjs         # Next.js configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

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

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Build for production:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Academy Information

**Address:**
Chess Circle,
Chennai, Tamil Nadu,
India

**Courses Offered:**
- **Group Classes** - Learn in a collaborative environment with fellow enthusiasts
- **One-to-One Classes** - Personalized coaching tailored to your goals

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [React](https://react.dev/) - UI library
- CSS with custom properties (CSS variables)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary to Chess Academy.
