/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ECE7D0',
        secondary: '#53565C',
        'secondary-dark': '#44474D',
      },
      fontFamily: {
        futura: ['Futura', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 