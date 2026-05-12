/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          DEFAULT: '#55A6C3',
          light: '#7BB9D1',
          dark: '#3F89A5',
        },
        forest: {
          DEFAULT: '#054204',
          light: '#0A5A08',
          dark: '#032A02',
        },
        natural: {
          DEFAULT: '#1D6517',
          light: '#288A1F',
          dark: '#144610',
        },
        accent: {
          DEFAULT: '#79B425',
          light: '#96CE3E',
          dark: '#5D8A1C',
        },
        neutral: {
          DEFAULT: '#C0DE7B',
          light: '#D4E9A4',
          dark: '#ACD352',
        },
        desi: {
          red: '#C84C32',
          saffron: '#E4A13B',
          indigo: '#1A4B6B',
          cream: '#F5E6CA',
          maroon: '#6B1A1A',
          parchment: '#FCF8F1',
          pearl: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'Sora', 'sans-serif'],
        decorative: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "linear-gradient(to bottom, rgba(5, 66, 4, 0.7), rgba(5, 66, 4, 0.9)), url('/assets/hero_bg.png')",
        'desi-print': "url('https://www.transparenttextures.com/patterns/p6.png')",
        'mandala-pattern': "url('https://www.transparenttextures.com/patterns/az-subtle.png')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
