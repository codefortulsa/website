module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        'cft-red': '#AB3039',
        'cft-blue': '#133A4E',
        'cft-black': '#121212',
        'cft-light-gray': '#BEBCBC',
        'cft-white': '#F9F9F9',
      },
    },
  },
  darkMode: 'media', // or 'class'
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