// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0A3D91", // deep blue
          dark: "#072E6C",    // darker hover blue
          accent: "#F6B73C",  // gold
          teal: "#00897B",    // optional
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

    },
  },
  plugins: [],
};
