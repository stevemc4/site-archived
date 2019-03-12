// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/styles/tailwind.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Lato'
  })

  head.meta.push({
    name: 'google-site-verification',
    content: 'gGyBkoUjClHZroXFFqf8Yx7t4jpnA0JuI3izHSaiIjs'
  })
}
