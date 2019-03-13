<template>
    <Layout>
        <h1 class="text-black text-4xl">Blog</h1>
        <ul class="list-reset mt-12">
            <li class="mb-8" v-for="item in $page.allPosts.edges" :key="item.node.slug">
                <g-link class="no-underline inline-block" :to="`/blog/${item.node.slug}`">
                    <span class="text-2xl text-grey-darkest block">{{item.node.title}}</span>
                    <span class="block text-green-dark block mt-2">{{formatDate(item.node.date)}}</span>
                </g-link>
            </li>
        </ul>
    </Layout>
</template>

<page-query>
    query{
        allPosts{
            edges{
               node{
                slug
                title
                date
               } 
            }
        }
    }
</page-query>

<script>
import {format} from 'date-fns'
import id from 'date-fns/locale/id'

export default {
    name: 'BlogPosts',
    methods: {
        formatDate(date){
            return format(new Date(date), 'DD MMMM YYYY HH:mm', {locale: id})
        }
    }
}
</script>

<style>

</style>
