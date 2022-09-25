/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
}
