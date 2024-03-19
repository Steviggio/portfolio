/** @type {import('tailwindcss').Config} */
// const plugin = require("tailwindcss/plugin")

export default {
  plugins: [
    require('flowbite/plugin')
  ],
  mode: "jit",
  blocklist: [":", ":before", ":after", "::backdrop", "*"], // Sélecteurs à exclure de la purge
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {

      },
      // animation: {
      //   icon_bounce: 'bounce 1s infinite '
      // },
      colors: {
        "blue-back": "#D2E0FB",
        "dark-grey": "#323232",
        "brown-bg": "#ad8a62",
        "light-blue": "#EFFAFD",
        "royal-blue": "#254355",
        "light-green": "#a3b18a",
        "footer-blue": "#2c7da0",
        "eggplant": "#A0006D",
        "home-blue": "#cae9ff",
        'back-beige': '#f5ebe0',
        "brown-font": "#361E0C",
        "green-background": "#2C3E17",
        "beige-background": "#FDF8F0",
        "linkedin": "#0077B5"
      },
      fontFamily: {
        "kaush": ['Kaushan Script, cursive',],
        "Libre-franklin": ['Libre Franklin, sans-serif']
      }
    },
  },

}

