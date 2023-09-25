/** @type {import('tailwindcss').Config} */


export default {
  mode: "jit",
  purge: ["./src/**/*.jsx"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
        "beige-background": "#FDF8F0"
      },
      fontFamily: {
        "kaush": ['Kaushan Script, cursive',],
        "Libre-franklin": ['Libre Franklin, sans-serif']
      }
    },
  },
  plugins: [],
}

