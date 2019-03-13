<template>
    <div class="md:h-screen flex flex-col md:flex-row font-sans">
      <div class="w-full md:full md:w-1/2 h-full flex flex-col">
        <div class="w-full h-64 md:h-1/2" style="background: url('/img/header.jpg') no-repeat center center; background-size:cover"/>
        <div class="p-6 relative md:h-1/2">
          <g-image class="rounded-full border-10 border-white table mx-auto z-20 -mt-24" src="@/assets/img/portrait.jpg" width="128" height="128"  fit="cover" style="object-fit:cover"/>
          <div class="mt-4">
            <h1 class="font-normal text-4xl text-center text-black leading-none">Dhika Rizky</h1>
            <span class="block text-grey-darkest text-center mt-4 text-xl">A Weeb With Thousand Dreams</span>
            <span class="block text-grey-darkest table mx-auto text-lg mt-4"><span class="flex items-center"><map-pin-icon class="mr-2"/>Kota Bekasi, Indonesia</span></span>
          </div>
          <div class="md:pin-b md:pin-l mt-4 md:mt-0 md:px-6 w-full mb-6 flex flex-col-reverse md:flex-row md:absolute items-center">
              <div class="md:flex-grow mt-2">
                <g-link class="no-underline text-grey-darkest text-lg mr-4" to="/blog">Blog</g-link>
                <g-link class="no-underline text-grey-darkest text-lg mr-4" to="/resume">Resume</g-link>
              </div>
              <div>
                <a class="no-underline text-grey-darkest text-lg mr-4" href="https://github.com/stevemc4"><github-icon/></a>
                <a class="no-underline text-grey-darkest text-lg mr-4" href="https://linkedin.com/in/stevemc4/"><linkedin-icon/></a>
                <a class="no-underline text-grey-darkest text-lg mr-4" href="https://facebook.com/stevemc4/"><facebook-icon/></a>
                <a class="no-underline text-grey-darkest text-lg mr-4" href="mailto:deka_r@outlook.com"><mail-icon/></a>
              </div>
            </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 bg-green flex items-center p-12 h-full">
        <p class="text-white text-3xl">
          <span class="text-4xl block mb-4">Halo,<br></span>
          Saya Dhika Rizky, seorang pemrogram web dan wibu yang suka dengan teknologi dan pop kultur Jepang.
        </p>
      </div>
    </div>
</template>

<script>
import {MapPinIcon, FacebookIcon, GithubIcon, LinkedinIcon, MailIcon} from 'vue-feather-icons'

export default {
  name: 'Home',
  components: {MapPinIcon, FacebookIcon, GithubIcon, LinkedinIcon, MailIcon},
  metaInfo: {
    titleTemplate: 'Dhika Rizky',
    meta: [
      {
        name: 'description',
        content: 'Web Programmer, Penggemar Pop Kultur Jepang, dan Sedikit Wibu'
      },
      {
        itemprop: 'name',
        content: 'Dhika Rizky'
      },
      {
        itemprop: 'description',
        content: 'Web Programmer, Penggemar Pop Kultur Jepang, dan Sedikit Wibu'
      },
      {
        name: 'og:url',
        content: 'https://dhikarizky.ga'
      },
      {
        name: 'og:type',
        content: 'website'
      },
      {
        name: 'og:title',
        content: 'Dhika Rizky'
      },
      {
        name: 'og:description',
        content: 'Web Programmer, Penggemar Pop Kultur Jepang, dan Sedikit Wibu'
      },
      {
        name: 'twitter:title',
        content: 'Dhika Rizky'
      },
      {
        name: 'twitter:description',
        content: 'Web Programmer, Penggemar Pop Kultur Jepang, dan Sedikit Wibu'
      }
    ]
  }
}
</script>

<style></style>
