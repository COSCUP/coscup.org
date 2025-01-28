<script setup lang="ts">
import { marked } from 'marked'
import { faqList } from '../data/sponsorship'

function toggleAnswer(index) {
  faqList.value[index].isOpen = !faqList.value[index].isOpen
}
</script>

<template>
  <div class="faq-container">
    <div
      v-for="(item, index) in faqList"
      :key="index"
      class="faq-item"
    >
      <button
        class="faq-question"
        @click="toggleAnswer(index)"
      >
        {{ item.question }}
      </button>
      <div
        v-if="item.isOpen"
        class="faq-answer"
      >
        <span v-html="marked(item.answer)" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq-container {
  max-width: 800px;
  margin: auto;
  padding: 16px;
}

.faq-item {
  margin-bottom: 16px;
}

.faq-question {
  background: #4a4947;
  color: #fff;
  padding: 12px;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
}

.faq-answer {
  padding: 10px;
  background-color: #faf7f0;
  border-radius: 4px;
  margin-top: 8px;
  color: #000;
}

/* Dark mode styles */
html.dark .faq-question {
  background: #4a4947;
  color: #e4e4e7;
}

html.dark .faq-answer {
  background-color: #2f3645;
  color: #faf7f0;
}
</style>
