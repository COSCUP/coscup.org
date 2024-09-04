<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const props = defineProps<{
  source: string
}>()

const { copy, copied, isSupported } = useClipboard({ source: props.source })
</script>

<template>
  <button
    v-if="isSupported"
    class="CopyButton"
    title="Copy"
    @click="copy(source)"
  >
    <!-- Only apply transition when copied goes from true to false -->
    <transition
      mode="out-in"
      :name="copied ? undefined : 'fade'"
    >
      <IconPhCheck
        v-if="copied"
        class="copied-icon"
      />
      <IconPhCopy
        v-else
        class="copy-icon"
      />
    </transition>
  </button>
</template>

<style scoped>
.CopyButton {
  vertical-align: text-bottom;
  margin: 0 0.5em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.copy-icon:hover {
  cursor: pointer;
  color: var(--vp-c-brand);
}

.copied-icon {
  color: var(--vp-c-green-1);
}
</style>
