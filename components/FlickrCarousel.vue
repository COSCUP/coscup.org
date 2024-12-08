<script setup>
import { register } from 'swiper/element/bundle'

register()

const images = import.meta.glob('#assets/images/professional-portraits/*.webp', {
  eager: true,
  import: 'default',
})
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
