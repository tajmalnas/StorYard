/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        first:"#62fe7a",
        second:"#1d232a",
      },
      fontFamily: {
        default: ['Rubik'],
      },
    },
  },
  plugins: [require("daisyui")],
}