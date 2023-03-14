/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainbg: "#03001C",
      },
    },
    fontFamily: {
      manrope: ["Manrope", "Arial", "sans-serif"],
    },
  },
  plugins: [],
};
