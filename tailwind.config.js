/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainbg: "#03001C",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(185.06% 308.64% at 159.52% 253.76%, rgba(227, 218, 253, 0.288) 30.21%, rgba(219, 207, 255, 0.873) 68.49%)",
      },
    },
    fontFamily: {
      manrope: ["Manrope", "Arial", "sans-serif"],
      spgrotesk: ["Space\\ Grotesk", "Arial", "sans-serif"],
    },
  },
  plugins: [],
};
