/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        colors: {
          "bg-light": "#f3eff5",
          "bg-celeste": "#9EC7E5",
          "item-navy": "#1D4180",
          "highlight-green": "#72B01D",
          "significant-red": "#BF0902",
          "text-dark": "#0d0a0b"
        }
      },
      fontFamily: {
        Roboto: ["Roboto, sans-serif"],
      },
      container: {
        padding: "2rem",
        center: true
      }
  },
  plugins: [],
}

