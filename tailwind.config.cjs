/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'Bonky': ['Bonky'],
        'Montserrat': ['Montserrat', 'sans-serif']
      },
      colors: {
        'primary': '#c7abd8'
      }
    },
  },
  plugins: [],
}
