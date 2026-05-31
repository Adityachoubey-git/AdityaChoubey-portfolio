# Aditya Kumar Choubey — Full Stack  Developer Portfolio

A premium, interactive, and beautifully animated developer portfolio highlighting my full-stack engineering development experience. 

This portfolio showcases professional accomplishments, projects, and skills through custom-engineered React micro-interactions, responsive 3D layouts, and bouncy spring-physics animations.

---

## ✨ Core Interactive Features

*   **📱 CRT Retro-Pager Console (Contact Section)**: A highly interactive, custom-designed retro terminal pager device. Features a ticking live digital clock synchronized with local user time, a glowing neon-green LCD display with horizontal CRT scanline overlays, speaker grill notches, and mechanical tactile buttons (`LinkedIn`, `GitHub`, and sand-cream `Contact Me` action) powered by the `Magnet` hover engine.
*   **🌧️ Section-Wide Bouncy Tech Rainfall (Skills Section)**: An interactive "gravity pool" distributed across the left and right margins of the entire section background. Badges cascade down sequentially from the top (`y: -500`), drop, and bounce satisfyingly using customized Framer Motion springs (`bounce: 0.6`, `stiffness: 75`, `damping: 6.5`). Hovering wiggles them and triggers unique glows matching their brand colors (e.g. glowing cyan for React, gold for JavaScript, green for Node).
*   **🗂️ 3D Experience Cards (Experience Section)**: Split layout showing 3D perspective-tilted frames (`perspective(1200px)`) holding custom visual assets on the left, alongside role info cards on the right. Features dual status glass-boxes displaying major metrics in bold, sand-colored text (e.g., `700+` active users served, `20+` ESP32 nodes controlled, `100%` biometric validation).
*   **🎴 Sticky Stacking Project Deck (Projects Section)**: A scroll-driven stacking card mechanism. Cards stick smoothly inside the scrolling list and scale down slightly (`useScroll`, `useTransform`) to form a beautiful stacking card deck as you scroll past them.
*   **🌐 Floating Glassmorphic Navbar**: A sticky, fixed-position header (`fixed top-5 left-1/2 -translate-x-1/2`) featuring a backdrop blur and subtle border. Logo text scales responsively to prevent wrapping glitches (`ADITYA.` on mobile, `ADITYA KUMAR CHOUBEY` on desktop) and triggers your resume link in a new tab when clicked.
*   **🧩 Magnet Alignment & Physics**: Magnet hover transitions (`Magnet.tsx`) applied on portrait illustrations, controls, and buttons to follow and attract the cursor naturally.

---

## 🛠️ Built With

*   **Framework**: [Next.js 16](https://nextjs.org/) (Turbopack)
*   **Library**: [React 19](https://react.dev/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Fonts**: [Kanit](https://fonts.google.com/specimen/Kanit) (Google Fonts)

---

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
```

Second, run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📦 Production Build

To verify compilation and generate an optimized static production build:

```bash
npm run build
```

To run the production server locally:

```bash
npm start
```
