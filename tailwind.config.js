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
        navy:    '#080c14',
        'navy-light': '#0d1829',
        cream:   '#f0ebe0',
        accent:  '#64ffda',
        accent2: '#bd93f9',
        accent3: '#ff79c6',
      },
      fontFamily: {
        sans:    ['Space Grotesk', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        float: {
          '0%':   { transform: 'translateY(100vh) rotate(0deg)',   opacity: '0' },
          '10%':  { opacity: '0.4' },
          '90%':  { opacity: '0.4' },
          '100%': { transform: 'translateY(-20vh) rotate(360deg)', opacity: '0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', filter: 'blur(40px)' },
          '50%':      { opacity: '1',   filter: 'blur(60px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        ticker: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)'    },
        },
      },
      animation: {
        float:       'float 20s linear infinite',
        'pulse-glow':'pulse-glow 4s ease-in-out infinite',
        shimmer:     'shimmer 3s linear infinite',
        ticker:      'ticker 30s linear infinite',
        'fade-up':   'fade-up 0.6s ease both',
      },
    },
  },
  plugins: [],
}