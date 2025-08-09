/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'san-francisco': ['San Francisco Pro', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}