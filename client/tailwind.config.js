/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#171717",
        darkblue: "#152332",
        light: "#f7f8f9",
        yellow: "#b79d82",
        white: "#ffffff",
        lightGrey: "#ebebeb", // Updated
        mediumGrey: "#7f7f7f", // Updated
        darkGrey: "#a1a1a1", // Updated
        darkerGrey: "#878787", // Updated
        deepGrey: "#606060", // Updated
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
