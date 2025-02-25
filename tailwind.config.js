/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FDF5E6', // Beige
          dark: '#DC143C', // Crimson
        },
        secondary: {
          light: '#F5E6D3',
          dark: '#2D142C',
        },
        accent: {
          light: '#E6B8AF',
          dark: '#800000',
        },
        text: {
          light: '#4A4A4A',
          dark: '#E6E6E6',
        }
      },
    },
  },
  plugins: [],
};