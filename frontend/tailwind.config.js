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
        slab: ['"Bebas Neue"', "sans-serif"],
        serif: ['"Montserrat"', "serif"]
      }
    },
  },
  plugins: [],
}
