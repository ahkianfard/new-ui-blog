/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      'darkenblue': '#0F172A',
    },
    extend: {
      fontFamily: {
        vazir: ["vazir", "sans-serif"],
        iransans: ["iransans", "sans-serif"],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ]
}
