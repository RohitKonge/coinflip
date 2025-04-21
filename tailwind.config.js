/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        coin: {
          gold: '#d4a017',
          light: '#f6d365',
          dark: '#8a6900',
        }
      },
      boxShadow: {
        'coin': '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 4px 8px rgba(255, 255, 255, 0.4), inset 0 -4px 8px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
};