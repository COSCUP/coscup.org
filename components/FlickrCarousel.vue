<script setup>
import { register } from 'swiper/element/bundle'

import image1 from '#assets/images/image1.webp'
import image2 from '#assets/images/image2.webp'
import image3 from '#assets/images/image3.webp'
import image4 from '#assets/images/image4.webp'
import image5 from '#assets/images/image5.webp'
import image6 from '#assets/images/image6.webp'
import image7 from '#assets/images/image7.webp'
import image8 from '#assets/images/image8.webp'
import image9 from '#assets/images/image9.webp'
import image10 from '#assets/images/image10.webp'

register()

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10]
</script>

<template>
  <swiper-container
    :autoplay="{ delay: 2500, disableOnInteraction: false }"
    :loop="true"
    :navigation="true"
    :pagination="true"
    :slides-per-view="3"
    :space-between="10"
    :speed="500"
  >
    <swiper-slide
      v-for="src in images"
      :key="src"
    >
      <img
        alt="Image slide"
        :src="src"
      >
    </swiper-slide>
  </swiper-container>
</template>

<style>
</style>
