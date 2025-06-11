/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff5eb",
          100: "#fee6cf",
          200: "#fccca1",
          300: "#fab06d",
          400: "#f7803a",
          500: "#f26318",
          600: "#e14b10",
          700: "#ba360f",
          800: "#952c13",
          900: "#792813",
          950: "#461306",
        },
        gray: {
          750: "#323238",
          850: "#1e1e24",
        },
      },
    },
  },
  plugins: [],
};
