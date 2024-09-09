<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/swiper-bundle.css'
import { register } from 'swiper/element/bundle'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

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
  <Swiper
    :autoplay="{ delay: 2500, disableOnInteraction: false }"
    :loop="true"
    :pagination="{ clickable: true }"
    :slides-per-view="3"
    :space-between="10"
    :speed="500"
  >
    <SwiperSlide
      v-for="src in images"
      :key="src"
    >
      <img :src="src">
    </SwiperSlide>
  </Swiper>
</template>

<style>
</style>
