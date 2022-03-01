const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "3/10": "30%",
        "4/9": "44%",
      },
      backgroundImage: () => ({
        rock4: "url('/src/assets/images/rock4.jpg')",
        rock5: "url('/src/assets/images/rock5.jpg')",
      }),
    },
    colors: {
      main: {
        DEFAULT: "#8c365b",
        text: "#d93f82",
        transparent: "rgba(217,63,130,.4)",
      },
      background: {
        DEFAULT: "#4d4d4d",
      },
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      green: colors.green,
    },
    fontFamily: {
      main: ["New Rocker", "cursive"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
