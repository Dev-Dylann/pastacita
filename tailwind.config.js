/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./build/*.{html, js}`],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#BF3F1C",
          light: "#ebc097",
        },
        whitesmoke: "#eee",
      },
      fontFamily: {
        sans: ["Montserrat", "sans"],
        cursive: ["Allura", "cursive"],
      },
    },
  },
  plugins: [],
};
