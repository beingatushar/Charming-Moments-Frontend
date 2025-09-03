/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode using a class
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#ec4899',
          'pink-light': '#fce7f3',
          dark: '#1f2937',
          'dark-secondary': '#374151',
          light: '#f9fafb',
          'light-secondary': '#f3f4f6',
        },
        'theme-primary': 'var(--theme-primary)',
        'theme-secondary': 'var(--theme-secondary)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out',
      },
    },
  },
  plugins: [],
};