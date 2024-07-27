/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Montserrat",
      alternate: "Poppins",
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [],
  transitions: {
    "scroll-smooth": "transition-all duration-300 ease-in-out",
  },
};
