/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./dist/**/*.{html,js}","./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    fontFamily:
    {
      titles: ['Mulish','sans-serif'],
      main:['Work Sans','sans-serif']
    },
    extend: 
    {
      backgroundImage:
      {
        'mision-bg':"url('../assets/img/portfolio/mision-option-1.webp')",
        'vision-bg':"url('../assets/img/portfolio/vision-option-1.webp')",
        'valores-bg':"url('../assets/img/portfolio/valores-option-1.webp')",
      },
      colors: 
      {
        colormain: '#005e85',
        coloralt: '#009fe3',
        whiteCmz: '#fbfbfd',
        blackCmz: '#1d1d1f'
      },
      boxShadow:
      {
        'bottomShadow':'0px 5px 10px -5px rgba(0,0,0,0.25)'
      },
      animation:
      {
        'section-transition':'animate-top 0.4s'
      },
      keyframes:
      {
        'animate-top':
        {
          
        }
      }
    },
  },
  plugins: [
    plugin(function({ addComponents }) 
    {
      addComponents({
        '#nav-bar': 
        {
          'transition': 'background-color 0.5s ease-in-out',
        },
      })
    }),
    require('tw-elements/dist/plugin')],
}

