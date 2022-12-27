/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        'cft-red': {
          50:'#F9EBEC', 
          100:'#F4D7D9', 
          200:'#E9AFB3',
          300:'#DD888D',
          400:'#D26067',
          500:'#C73842',
          DEFAULT:'#AB3039',/*cft-red*/
          570:'#AB3039',/*alias of the default cft-red*/
          600:'#9F2D34',
          700:'#772227',
          800:'#50161A',
          900:'#280b0d'
        },
        'cft-blue': {
          50:'#EAF5FA', 
          100:'#D6EBF5', 
          200:'#ADD6EB',
          300:'#84C2E1',
          400:'#5BAED7',
          500:'#3299CD',
          600:'#287BA4',
          700:'#1E5C7B',
          800:'#143D52',
          DEFAULT:'#133A4E',/*cft-blue*/
          810:'#133A4E',/*alias of the default cft-blue*/
          900:'#0A1F29'
         },
        'cft-black': '#121212',
        'cft-light-gray': '#BEBCBC',
        'cft-white': '#F9F9F9',
      },
    },
  },
  darkMode: 'media',
  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'empty',
    'read-only',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'disabled',
  ],
}