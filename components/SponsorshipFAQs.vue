<script setup lang="ts">
import { marked } from 'marked'
import { faqList } from '../data/sponsorship'

function renderMarkdown(text) {
  return marked(text)
}

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
        <span v-html="renderMarkdown(item.answer)" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq-container {
  max-width: 800px;
  margin: auto;
}

.faq-item {
  margin-bottom: 16px;
}

.faq-question {
  background: #4caf50;
  color: white;
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
  background-color: #f9f9f9;
  border-radius: 4px;
  margin-top: 8px;
}
</style>
