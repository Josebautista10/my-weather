module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 #ccc',
      DEFAULT: '0 1px 3px 0 #ccc',
      md: '0 4px 6px -1px #ccc',
      lg: '0 0 12px #ccc',
      xl: '0 20px 25px -5px #ccc',
      '2xl': '0 25px 50px -12px #ccc',
      '3xl': '0 35px 60px -15px #ccc',
      inner: 'inset 0 2px 4px 0 #ccc',
      none: 'none'
    },
    extend: {
      screens: {
        '2xsm': '375px',
        xsm: '500px'
      },
      height: {
        'screen/9': '90vh',
        '4/10': '40%'
      },
      width: {
        '3/20': '15%',
        '9/10': '90%',
        '8/10': '80%'
      }
    }
  },
  variants: {
    extend: {}
  },
  content: [
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  // eslint-disable-next-line global-require
  plugins: [require('tw-elements/dist/plugin')]
}
