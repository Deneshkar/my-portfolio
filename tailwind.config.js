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
        bg:       '#070412',
        'bg-card':'#0e0920',
        violet:   '#8b5cf6',
        fuchsia:  '#d946ef',
        indigo:   '#6366f1',
        sky:      '#38bdf8',
        emerald:  '#34d399',
        amber:    '#fbbf24',
        pink:     '#ec4899',
        cream:    '#ede9fe',
        muted:    '#a78bfa',
      },
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        orbit: {
          from: { transform: 'rotate(0deg) translateX(var(--radius, 170px)) rotate(0deg)' },
          to:   { transform: 'rotate(360deg) translateX(var(--radius, 170px)) rotate(-360deg)' },
        },
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
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        'gradient-shift': {
          '0%':   { backgroundPosition: '0% 50%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139,92,246,0.3)' },
          '50%':      { boxShadow: '0 0 40px rgba(139,92,246,0.7), 0 0 80px rgba(217,70,239,0.3)' },
        },
      },
      animation: {
        orbit:          'orbit 8s linear infinite',
        'pulse-slow':   'pulse-slow 6s ease-in-out infinite',
        'float-y':      'float-y 5s ease-in-out infinite',
        ticker:         'ticker 28s linear infinite',
        shimmer:        'shimmer 3s linear infinite',
        blink:          'blink 1s step-end infinite',
        'gradient':     'gradient-shift 8s ease infinite',
        'glow-pulse':   'glow-pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}