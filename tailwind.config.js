const global = require("./site.config.json");

module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content:[
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGreen: global.style.colors.darkGreen,
        footerdarkGreen: global.style.colors.footerdarkGreen,
        lightColor: global.style.colors.lightColor,
        darkColor: global.style.colors.darkColor,
        lightGreen: global.style.colors.lightGreen,
      },
      outline: theme => ( {
          lightGreen: `2px solid ${theme('colors.lightGreen')}`,
        })
    },
    fontFamily: {
      'quicksand': ['Quicksand', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
