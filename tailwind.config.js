module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: "#EA4724",
        black: "#000000",
        offWhite: "#F9F2F2",
        gray: "#808080",
        gold: "#FBBA22"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}