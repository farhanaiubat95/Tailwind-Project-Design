/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    colors: {
      "primary":"#0E606E",
      "Secondary":"#9AB8BD",
      "3rd":"#6F9196",
      "4th":"#A3BEC1",
      "5th":"#e7f0ef"
    },
    fontFamily:{
      roboto: ['Roboto', 'sans-serif'],     
    },


    },
  },
  plugins: [],
}