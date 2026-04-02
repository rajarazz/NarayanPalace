/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          light: '#FFD700',
          DEFAULT: '#F4B41A',
          dark: '#E69B00',
        },
        maroon: {
          light: '#A52A2A',
          DEFAULT: '#800000',
          dark: '#4B0000',
        },
        gold: {
          light: '#F9E076',
          DEFAULT: '#D4AF37',
          dark: '#B8860B',
        },
        beige: {
          light: '#FAF9F6',
          DEFAULT: '#F5F5DC',
          dark: '#E1DEC1',
        },
        stone: {
          DEFAULT: '#9B7653',
        },
        river: {
          light: '#56B4E9',
          DEFAULT: '#0077BE',
          dark: '#005A8C',
        },
        cream: {
          DEFAULT: '#FFFDD0',
        }
      },
      fontFamily: {
        heading: ['Marcellus', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
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
      },
    },
  },
  plugins: [],
}
