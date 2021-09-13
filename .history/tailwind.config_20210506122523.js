module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          light: '#2A2A28',
          dark: '#1F1F1E',
          sdark: '#151514',
          black: '#0A0A0A'
        },
        orange: {
          netflix: '#e50914'
        }
      },
      backgroundImage: theme => ({
        'banner-pic': "",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
