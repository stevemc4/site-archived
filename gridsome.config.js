var tailwind = require('tailwindcss')

// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Dhika Rizky',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwind('tailwind.js')
        ],
      },
    },
  },
  icon: 'src/favicon.png'
}