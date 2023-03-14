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
          accent: colors.gray[900],
          pink: colors.pink[900]
        },
        background: {
          primary: colors.white,
          secondary: colors.gray[300],
          dark: colors.gray[900],
          primary_active: colors.indigo[100],
          light: colors.gray[200],
          extra_light: "#f8f8f8"
        },
        text: {
          primary: colors.black,
          customgray: colors.gray[600],
          secondary: colors.white,
          default: "#323436"
        },
        border:{
          light: "#dfe1e1",
          dark: colors.gray[900],
          primary: colors.indigo[900],
          extra_light: colors.gray[300],
          lightest: colors.gray[200]
        }
      },
      backgroundImage: {
        'demo-screenshot': "url('/assets/demo-screenshot.png')",
        'canvas-grid': "url('/assets/grid.png')",
        'no-background': "url('/assets/no-background.png')"
      }
    },
  },
  plugins: [],
}
