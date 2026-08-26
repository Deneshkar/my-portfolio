/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg:         '#0a0806',
        'bg-card':  '#1a1208',
        gold:       '#c89b3c',
        'gold-light':'#e0c068',
        rust:       '#8b2500',
        'rust-light':'#b33a00',
        sunset:     '#d4763c',
        'sunset-light':'#e8944a',
        amber:      '#c89b3c',
        parchment:  '#f5e6c8',
        sage:       '#5a7a3a',
        leather:    '#2a1a0a',
        'leather-light':'#3d2814',
        cream:      '#f5e6c8',
        muted:      '#b89a6a',
      },
      fontFamily: {
        sans:      ['Raleway', 'sans-serif'],
        display:   ['"Cinzel Decorative"', 'serif'],
        mono:      ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%':      { opacity: '1',   transform: 'scale(1.05)' },
        },
        'float-y': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        ticker: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        'gradient-shift': {
          '0%':   { backgroundPosition: '0% 50%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(200,155,60,0.3)' },
          '50%':      { boxShadow: '0 0 40px rgba(200,155,60,0.7), 0 0 80px rgba(139,37,0,0.3)' },
        },
        ember: {
          '0%':   { transform: 'translateY(0) scale(1)', opacity: '0.8' },
          '50%':  { transform: 'translateY(-40px) scale(0.6)', opacity: '0.4' },
          '100%': { transform: 'translateY(-80px) scale(0.2)', opacity: '0' },
        },
      },
      animation: {
        'pulse-slow':   'pulse-slow 6s ease-in-out infinite',
        'float-y':      'float-y 5s ease-in-out infinite',
        ticker:         'ticker 28s linear infinite',
        shimmer:        'shimmer 3s linear infinite',
        'gradient':     'gradient-shift 8s ease infinite',
        'glow-pulse':   'glow-pulse 3s ease-in-out infinite',
        ember:          'ember 3s ease-out infinite',
      },
    },
  },
  plugins: [],
}
