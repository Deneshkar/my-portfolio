# Deneshkar Punyamoorthy - Portfolio

Personal portfolio website showcasing my projects and skills as a Software Engineering undergraduate at SLIIT.

## Tech Stack

- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 12
- **Deployment:** GitHub Pages via GitHub Actions

## Features

- Custom animated cursor
- Loading screen with 3D animated logo
- Canvas-based tech background (matrix rain, node graph)
- Dark theme with violet/fuchsia accent palette
- Responsive design
- Contact form via Web3Forms

## Getting Started

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

## Project Structure

```
src/
  common/           # Shared UI components (Navbar, CustomCursor, etc.)
  sections/         # Page sections (Hero, About, Projects, etc.)
  assets/           # Images and static files
public/             # Static assets (favicon, resume, icons)
```

## Deployment

Automated via GitHub Actions. Push to `main` branch triggers production build and deploys to GitHub Pages.

## Environment Variables

Create a `.env` file:

```
VITE_WEB3FORMS_KEY=your_web3forms_api_key
```

## License

MIT
