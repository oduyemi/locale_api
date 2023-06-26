/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:['Riveruta', ...defaultTheme.fontFamily.sans]
      },
      colors:{
        bulu: "#023047",
        whi: "#F4F4F9 ",
        bala: "#42113C",
        yel: "#FFB703",
        lightblu: "#219EBC"
      }
    },
  },
  plugins: [],
}

