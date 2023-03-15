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
        "gradient-card-1": "linear-gradient(115.49deg, rgba(63, 0, 255, 0.3) 10.02%, rgba(119, 94, 197, 0.3) 102.66%), linear-gradient(57.8deg, #B69EFF 13.65%, rgba(0, 0, 0, 0) 100.26%, rgba(227, 218, 253, 0) 100.26%)",
      },
    },
    fontFamily: {
      manrope: ["Manrope", "Arial", "sans-serif"],
      spgrotesk: ["Space\\ Grotesk", "Arial", "sans-serif"],
      inter: ["Inter", "Arial", "sans-serif"],
    },
  },
  plugins: [],
};
