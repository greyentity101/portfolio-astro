/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Reading-room palette: dark radiology suite, amber annotation markers, scan cyan
        brand: {
          bg: '#04070D',
          bgElevated: '#0A101D',
          card: '#0B1322',
          border: '#1A2438',
          borderStrong: '#2A3A55',
          text: '#EDF1F6',
          textSecondary: '#AEB8C6',
          muted: '#7E8A9C',
          faint: '#5A6575',
          accent: '#FFB020', // marker amber
          accentHover: '#FFC14D',
          accentDim: 'rgba(255,176,32,0.1)',
          accentGlow: 'rgba(255,176,32,0.28)',
          violet: '#45E3FF', // scan cyan (key kept for markup compat)
          green: '#3DDC97',
          red: '#F87171',
        }
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
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