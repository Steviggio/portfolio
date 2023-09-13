/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#A5C0DD",
        "light-green": "#97A769",
        'back-beige': '#f5ebe0',
        "brown-font": "#361E0C",
        "green-background": "#2C3E17",
        "beige-background": "#F4EBD0"
      },
      fontFamily: {
        "kaush": ['Kaushan Script, cursive', ]
      }
    },
  },
  plugins: [],
}

