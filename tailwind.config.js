/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-background': '#ffd9d9',
      },
      dropShadow: {
        'header-shadow': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
     }
    
    },
  },
  plugins: [],
}