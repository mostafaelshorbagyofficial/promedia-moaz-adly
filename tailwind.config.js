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
        brand: {
          navy: '#0E131F',
          dark: '#161C28',
          slate: '#242D3D',
          border: '#2E384D',
          primary: '#E24A4A', // ProMedia Red / Coral from logo
          primaryHover: '#C93B3B',
          gold: '#D4AF37',
          goldMuted: '#9B8136',
          ivory: '#F9F8F5',
          cream: '#F3EFE6',
          muted: '#8A99AD',
          accent: '#FF5E5E',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', '"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glow-red': '0 0 35px -5px rgba(226, 74, 74, 0.35)',
        'glow-gold': '0 0 35px -5px rgba(212, 175, 55, 0.25)',
        'card-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
