/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#008644'
      }
    },
    screens: {
      'vsm': '100px', 

      'sm': '640px',

      'md': '768px',

      'lg': '1077px',

      'xl': '1280px',

      '2xl': '1536px',
    },
   
  },
  plugins: [],
}
