/** @type {import('tailwindcss').Config} */
const {
  colors,
  fontSize,
  fontWeight,
  lineHeight,
  spacing,
  fontFamily,
  screens,
} = require('./src/styles/tokens/index')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    colors,
    fontSize,
    fontWeight,
    lineHeight,
    spacing,
    fontFamily,
    screens,
    extend: {
      colors: {
        solid: {
          // Customize it on globals.css :root
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
        },
      },
    },
  },

  plugins: [],
}
