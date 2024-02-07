/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      sans:['Outfit', 'sans-serif'],
      serif:['Young Serif', 'serif'],
    },
    extend: {
      
      backgroundColor: {
        main_pink: "#F3E5D7",
      },
    },
  },
  plugins: [],
};
