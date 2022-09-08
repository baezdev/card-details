/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('/src/assets/bg-main-desktop.png')",
        "front-card": "url('/src/assets/bg-card-front.png')",
        "back-card": "url('/src/assets/bg-card-back.png')",
      },
      colors: {
        "dark-violet": "#22092F",
        violet: "#6448FE",
        violet2: "#600594",
      },
    },
    fontFamily: {
      "space-grotesk": ["Space Grotesk", " sans-serif"],
    },
  },
  plugins: [],
};
