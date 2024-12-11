/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Bellefair", serif'],
        roboto: ["Roboto", "serif"],
      },

      colors: {
        gray: "#31343D",
      },
    },
  },
  plugins: [],
};
