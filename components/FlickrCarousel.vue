<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/swiper-bundle.css'
import { onMounted, ref } from 'vue'
import { register } from 'swiper/element/bundle'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

register()

const images = ref([])
const imagePaths = [
  '#assets/images/image1.webp',
  '#assets/images/image2.webp',
  '#assets/images/image3.webp',
  '#assets/images/image4.webp',
  '#assets/images/image5.webp',
  '#assets/images/image6.webp',
  '#assets/images/image7.webp',
  '#assets/images/image8.webp',
  '#assets/images/image9.webp',
  '#assets/images/image10.webp',
]

onMounted(() => {
  images.value = imagePaths
})
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
