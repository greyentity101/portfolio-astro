/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Depoly-inspired palette
        brand: {
          bg: '#0A0F1A',
          bgElevated: '#111827',
          card: '#151E2E',
          border: '#1E2A3A',
          borderStrong: '#2A3A4A',
          text: '#F0F4F8',
          textSecondary: '#B8C5D6',
          muted: '#8A9BA8',
          faint: '#6B7A8A',
          accent: '#F2FFBD', // Depoly yellow-green
          accentHover: '#DAE8A0',
          accentDim: 'rgba(242,255,189,0.1)',
          accentGlow: 'rgba(242,255,189,0.3)',
          violet: '#A78BFA',
          green: '#34D399',
          red: '#F87171',
        }
      },
      fontFamily: {
        sans: ['Figtree', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}