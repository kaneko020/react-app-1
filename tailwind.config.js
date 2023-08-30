/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#326fe1",
        lightblue: "#41c6ff",
        red: "#f83e34",
        orange: "#ffaa02",
        green: "#08bf8b",
        yellow: "#fac541",
      }
    },
    screens: {
      pc: "768px",
      lg: "1200px",
  },
  },
  plugins: [],
}

