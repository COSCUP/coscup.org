<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { inBrowser, useData } from 'vitepress'
import { watchEffect } from 'vue'

const { lang } = useData()
watchEffect(() => {
  if (inBrowser) {
    document.cookie = `lang=${lang.value};path=/`
  }
})
</script>

<template>
  <DefaultTheme.Layout>
    <Content />
  </DefaultTheme.Layout>
  <Footer />
</template>
