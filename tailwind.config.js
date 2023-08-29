/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors:{
      dark: '#001C30',
      light: '#DAFFFB',
      'dark-blue': '#176B87',
      'light-blue': '#64CCC5',
      'custom-orange' : '#F3AA60',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow
    },
    screens:{
      'normal': {'max': '1200px'},
      // => @media (max-width: 1535px) { ... }

      'small': {'max': '1024px'},
      // => @media (max-width: 1279px) { ... }

      'tablet': {'max': '768px'},
      // => @media (max-width: 767px) { ... }

      'phone': {'max': '480px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

