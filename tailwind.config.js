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
          50:'#F7EAEB',
          100:'#7EED6D7',
          200:'#DDACB0',
          300:'#CD8388',
          400:'#BC5961',
          DEFAULT:'#AB3039',
          500:'#AB3039',/*cft-red*/
          600:'#89262E',
          700:'#671d22',
          800:'#441317',
          900:'#220A0B'
        },
        'cft-blue': {
          50:'#E7EBED',
          100:'#D0D8DC',
          200:'#a1B0B8',
          300:'#718995',
          400:'#426171',
          DEFAULT:'#133A4E',
          500:'#133A4E',/*cft-blue*/
          600:'#0F2E3E',
          700:'#0B2937',
          800:'#08171F',
          900:'#040C10'
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