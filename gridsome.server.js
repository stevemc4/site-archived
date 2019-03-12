const axios = require('axios').default
const prismic = require('prismic-javascript')
const PrismicDOM = require('prismic-dom')

// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(async store => {
    let url = 'https://dhika-rizky-note.prismic.io/api/v2'
    const contentType = store.addContentType({
      typeName: 'Posts',
      route: 'blog/:slug'
    })
    let p = await prismic.api(url)
    let posts = await p.query('', {
      pageSize: 1000
    })
    for(let item of posts.results){
      let contentData = PrismicDOM.RichText.asHtml(item.data.content)
      contentType.addNode({
        id: item.id,
        slug: item.uid,
        title: item.data.title[0].text,
        date: item.data.time,
        content: contentData
      })
    }
  })
}