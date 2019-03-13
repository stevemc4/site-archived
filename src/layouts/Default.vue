<template>
  <div class="bg-green h-screen overflow-y-auto font-sans">
    <div class="table pt-24 mx-auto max-w-lg w-full h-full">
      <div class="bg-white rounded-t h-full p-12">
        <nav class="w-full">
            <span class="text-3xl text-black">Dhika Rizky's Notes</span>
          <div class="mt-2 text-xl flex items-center">
            <g-link class="text-grey-darkest no-underline" to="/">Beranda</g-link>
            <chevron-right-icon height="16" width="16" class="mx-2"/>
            <g-link class="text-grey-darkest no-underline" to="/blog">Blog</g-link>
            <chevron-right-icon height="16" width="16" class="mx-2" v-if="title != undefined"/>
            <span class="text-grey-darkest no-underline" v-if="title != undefined">{{title}}</span>
          </div>
        </nav>
        <div class="mt-12">
          <slot/>
        </div>
      </div>
      <footer class="text-black p-4 bg-grey-lighter border-t flex items-center">
        <span class="flex-grow">Dhika Rizky, {{new Date().getFullYear()}}</span>
        <span class="text-right">Dibuat dengan <a class="no-underline text-green-dark" href="https://gridsome.org" target="_blank">Gridsome</a> &amp; <a class="no-underline text-green-dark" href="https://tailwindcss.com" target="_blank">Tailwind CSS</a></span>
      </footer>
    </div>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
    siteUrl
  }
}
</static-query>

<style>

</style>

<script>
import {ChevronRightIcon} from 'vue-feather-icons'

export default {
  name: 'Layout',
  props: ['title'],
  components: {ChevronRightIcon}
}
</script>
