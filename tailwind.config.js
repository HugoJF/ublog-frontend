const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.ts'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderRadius: {
      DEFAULT: '8px',
      full: '9999px',
    },
    extend: {
      colors: {
        gray: colors.trueGray,
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        head: ['Kanit', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  }
};
