/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#1AE596", // green CTA
        secondary: "#121714", // dark background or text
        accent: "#63877A", // muted green/teal accent
        light: "#DBE5E3", // light grey background
        white: "#FFFFFF", // Standard white
        background: "#eceff3",
        grayish_blue: "#CFDBE8"
      },
      screens: {
        'xs': '390px',
      }
    },
  },
  plugins: [],
}