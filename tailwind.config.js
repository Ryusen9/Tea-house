/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily:{
      'manrope': ['Manrope', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('tailwindcss-animated'),require('daisyui')],
}