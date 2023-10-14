/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        '790': '800',
      },
      backgroundColor:{
        custompink:'#EFD9F9',
        customblue:'#DDF3FF'
      },
      screens: {
        sx: '400px', 
      },
      boxShadow: {
        custom: '0px 0px 3px black',
      },
    },
  },
  plugins: [],
}


