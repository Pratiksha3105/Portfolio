# Pratiksha Ubale — Portfolio Website

A world-class, 3D animated portfolio built with Next.js 14, Framer Motion, and React Three Fiber.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + custom CSS
- **Animations**: Framer Motion
- **3D**: React Three Fiber + Three.js (@react-three/fiber, @react-three/drei)
- **Fonts**: Syne (display) + DM Sans (body) + JetBrains Mono
- **TypeScript**: Full type safety

## Features

- ⚡ 3D particle field hero with floating rings (Three.js)
- 🎭 Custom cursor with smooth lag effect
- 📊 Scroll progress indicator
- 🌊 Section reveal animations (Framer Motion)
- 🃏 3D tilt project cards with glare effect
- 💎 Glassmorphism + neon glow UI
- 🔤 Typing animation hero text
- 📱 Fully responsive (mobile + desktop)
- 🚀 Loading screen with progress animation
- ✨ Animated skill bars
- 🏆 Achievement cards with hover effects

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

```
src/
├── app/
│   ├── globals.css       # Global styles, CSS variables, animations
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page orchestrator
└── components/
    ├── LoadingScreen.tsx  # Animated loading intro
    ├── CustomCursor.tsx   # Custom cursor with lag effect
    ├── ScrollProgress.tsx # Top progress bar
    ├── Navbar.tsx         # Sticky glassmorphism navbar
    ├── ParticleField.tsx  # Three.js 3D particle system
    ├── HeroSection.tsx    # Hero with 3D canvas + tilt card
    ├── AboutSection.tsx   # About with highlight cards
    ├── ProjectsSection.tsx# 3D tilt project cards
    ├── SkillsSection.tsx  # Animated skill bars + marquee
    ├── AchievementsSection.tsx # Hackathon achievement cards
    ├── ContactSection.tsx # Contact links + message form
    └── Footer.tsx         # Footer
```

## Customization

1. Update `src/components/HeroSection.tsx` to change name/tagline
2. Update `src/components/ProjectsSection.tsx` to add real GitHub/live links
3. Update `src/components/ContactSection.tsx` for real contact details
4. Replace the `PU` avatar with a real photo using `<Image>` in `HeroSection.tsx`

## Deployment

Deploy easily on [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect to Vercel for automatic deployments.
