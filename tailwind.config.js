/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        brandBlue: '#1E4BBE',
        brandTeal: '#1CA0A0',
        brandDark: '#1F2937',
        brandGray: '#6B7280',
        brandBg: '#F7FAFC',  // use for cards + background sections
      },
    },
  },
  plugins: [],
};

