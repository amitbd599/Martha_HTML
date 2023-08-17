/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "4rem",
      },
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      theme: "#EEFF03",
      body: "#252525",
      bodyWhite: "#ECF0F3",
      card: "#1D1C22",
      text: "#919295",
      btn: "#404042",
    },
    screens: {
      sm: "380px",
      // => @media (min-width: 380px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1300px",
      // => @media (min-width: 1366px) { ... }
    },
  },
  important: true,
  plugins: [],
});
