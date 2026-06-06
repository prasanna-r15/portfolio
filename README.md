# Prasanna R — Portfolio

A premium, production-grade personal portfolio website built with React, Vite, GSAP, Framer Motion, Three.js, and Lenis Smooth Scroll.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── animations/          # GSAP animation utilities
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Hero, About, Experience, Skills, Domains, Projects, Achievements, Contact
│   ├── three/           # Three.js / React Three Fiber components
│   └── ui/              # CustomCursor, Loader
├── context/             # ThemeContext (dark/light)
├── data/                # Portfolio content (index.js)
├── hooks/               # useLenis, useMousePosition, useMagnet, useScrollReveal, useTypewriter...
├── pages/               # Page components (if routing needed)
├── styles/
│   └── base/            # _variables.scss, _mixins.scss
├── App.jsx
├── main.jsx
└── styles/global.scss
```

## 🖼️ Adding Your Photo

Place your photo at:
```
public/assets/images/prasanna-profile.jpg
```

Recommended: 600×750px (portrait, 4:5 ratio), JPG format, under 500KB.

## ✏️ Updating Content

All portfolio content is in one file:
```
src/data/index.js
```

Update `personal`, `projects`, `skills`, `experience`, and `domains` objects.

## 🎨 Color System

Edit CSS variables in `src/styles/base/_variables.scss`:

| Variable | Value | Usage |
|----------|-------|-------|
| `$color-primary` | `#00D4FF` | Cyan — primary actions, links |
| `$color-secondary` | `#7B61FF` | Purple — secondary elements |
| `$color-accent` | `#00FFA3` | Green — availability, success |
| `$color-background` | `#050816` | Deep navy background |

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Deploy the dist/ folder
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json: "homepage": "https://yourusername.github.io/portfolio"
npm run build && npx gh-pages -d dist
```

## 🔧 Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 18 | UI Framework |
| Vite | Build tool |
| SCSS Modules | Styling |
| GSAP + ScrollTrigger | Scroll animations |
| Framer Motion | UI animations |
| Three.js / R3F | 3D particle background |
| Lenis | Smooth scrolling |
| React Router | Navigation |

## 📱 Performance Notes

- Three.js canvas is pointer-events disabled and GPU-accelerated
- All section animations use IntersectionObserver for performance
- SCSS modules prevent style leakage
- Images use `loading="lazy"` attributes
- Fonts are preloaded via Google Fonts with `preconnect`

## 🎯 SEO

Update meta tags in `index.html`:
- `<title>` — Your name and role
- `<meta name="description">` — Brief professional summary
- Open Graph tags — For social sharing
- `og:image` — Add `/public/assets/images/og-image.jpg` (1200×630px)
