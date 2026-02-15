/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-sdark': '#151514',
        'gray-black': '#0A0A0A'
      }
    },
  },
  plugins: [],
}
