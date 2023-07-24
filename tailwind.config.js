/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './dist/**/*.{html,js}',
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    fontFamily: {
      oswald: ['Oswald'],
      roboto: ['Roboto']
    },
    extend: {
      colors:{
        colormain: '#005e85',
        coloralt: '#009fe3',
        whiteapple: '#fbfbfb',
        blackapple: '#1d1d1f'
      }
    },
  },
  plugins: 
  [
    require("tw-elements/dist/plugin.cjs"),
    plugin(function({ addComponents}){
      addComponents({
        '.nav__bar__color':
        {
          'transition' : 'background-color 1s ease-in-out',
          'background-color' : 'rgb(251,251,251)'
        }
      })
    })
  ],
  darkMode: "class"
}

