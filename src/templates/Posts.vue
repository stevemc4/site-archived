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
      title: this.$page.posts.title
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
