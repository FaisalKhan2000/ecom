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
      gridTemplateRows: {
        layout: "auto 1fr auto",
        threefr: "1fr 1fr 1fr",
      },
      backgroundImage: {
        "hero-image1":
          "url('https://deothemes.com/envato/zenna/html/img/hero/1.jpg')",
        "clients-bg":
          "url('https://images.pexels.com/photos/206557/pexels-photo-206557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
    },
  },
  plugins: [],
};
