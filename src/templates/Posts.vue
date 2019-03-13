<template>
  <Layout :title="$page.posts.title">
    <article>
        <h1 class="text-black text-4xl">{{$page.posts.title}}</h1>
        <span class="text-green-dark block mt-2 text-lg">{{postDate}}</span>
        <div class="text-black mt-12" v-html="$page.posts.content"/>
    </article>
  </Layout>
</template>

<page-query>
query ($path: String!) {
  posts(path: $path) {
    title
    content
    date
    slug
  }
}
</page-query>

<script>
import {format} from 'date-fns'
import id from 'date-fns/locale/id'

import Layout from '~/layouts/Default.vue'
export default {
  components: {
    Layout
  },
  metaInfo () {
    return {
      title: this.$page.posts.title,
      meta: [
        {
            name: 'description',
            content: 'Catatan-Catatan Dan Opini Penuh Wewibuan'
        },
        {
            itemprop: 'name',
            content: `${this.$page.posts.title} - Dhika Rizky\'s Notes`
        },
        {
            itemprop: 'description',
            content: 'Catatan-Catatan Dan Opini Penuh Wewibuan'
        },
        {
            name: 'og:url',
            content: `https://dhikarizky.ga/blog/${this.$page.posts.slug}`
        },
        {
            name: 'og:type',
            content: 'website'
        },
        {
            name: 'og:title',
            content: `${this.$page.posts.title} - Dhika Rizky\'s Notes`
        },
        {
            name: 'og:description',
            content: 'Catatan-Catatan Dan Opini Penuh Wewibuan'
        },
        {
            name: 'twitter:title',
            content: `${this.$page.posts.title} - Dhika Rizky\'s Notes`
        },
        {
            name: 'twitter:description',
            content: 'Catatan-Catatan Dan Opini Penuh Wewibuan'
        }
      ]
    }
  },
  computed: {
      postDate(){
          return format(new Date(this.$page.posts.date), 'DD MMMM YYYY HH:mm', {locale: id})
      }
  }
}
</script>

<style>
p{
    @apply mt-4
}
</style>
