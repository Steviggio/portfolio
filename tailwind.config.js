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
      //       @keyframes bounce {
      //   0%, 100% {
      //     transform: translateY(-25%);
      //     animation-timing-function: cubic-bezier(0.8,0,1,1);
      //   }
      //   50% {
      //     transform: none;
      //     animation-timing-function: cubic-bezier(0,0,0.2,1);
      //   }
      // }
      // .animate-bounce {
      //   animation: bounce 1s infinite;
      animation: {
        "bounce-arrow": "bounce-w 1s infinite"
      },
      keyframes: {
        'bounce-w': {
          "0%, 100%": {
            transform: "translateX(-25%)",
            transitionTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
          },
          "50%": {
            transform: 'none',
            transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
          }
        }
      },
      transitionTimingFunction: {
        "start": "cubic-bezier(0.8, 0, 1, 1)",
        'end': "cubic-bezier(0, 0, 0.2, 1)"
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
        "linkedin": "#0077B5",
        "carolina-blue": "#7BAFD4"
      },
      fontFamily: {
        "kaush": ['Kaushan Script, cursive',],
        "Libre-franklin": ['Libre Franklin, sans-serif']
      }
    },
  },

}

