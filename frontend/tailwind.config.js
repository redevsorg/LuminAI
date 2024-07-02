/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '200': '200ms',
      },
      fontFamily: {
        sans: ['"Bai Jamjuree"', "sans-serif"],
        serif: ['"Bebas Neue"', "serif"]
        serif: ['"Montserrat"', "serif"]
      }
    },
  },
  plugins: [],
}
