const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#6f3ff7",
          accent: colors.gray[900]
        },
        background: {
          primary: colors.white,
          secondary: colors.gray[300],
          dark: colors.gray[900],
          primary_active: colors.indigo[100],
          light: colors.gray[200],
        },
        text: {
          primary: colors.black,
          customgray: colors.gray[600],
          secondary: colors.white
        },
        border:{
          light: "#dfe1e1",
          dark: colors.gray[900],
          primary: colors.indigo[900]
        }
      },
      backgroundImage: {
        'demo-screenshot': "url('/assets/demo-screenshot.png')"
      }
    },
  },
  plugins: [],
}
