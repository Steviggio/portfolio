/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'back-beige': '#f5ebe0',
        "brown-font": "#361E0C"
      }
    },
  },
  plugins: [],
}

