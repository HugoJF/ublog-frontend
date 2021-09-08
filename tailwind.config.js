module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.ts'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
