module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#676767',
        'secondary': '#807f81',
        'third': '#cdcdcd',
        'root_node': '#242424',
      },
      inset: {
        '1/2.27': '44%',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    },
  },
  plugins: [],
}
