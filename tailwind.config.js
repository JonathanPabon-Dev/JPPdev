/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montserrat: "Montserrat",
      poppins: "Poppins",
    },
    screens: {
      xs: "320px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [],
  transitions: {
    "scroll-smooth": "transition-all duration-300 ease-in-out",
  },
};
