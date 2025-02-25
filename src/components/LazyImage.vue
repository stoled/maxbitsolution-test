<template>
  <div class="image-container">
    <img
      v-if="isVisible || isLoaded"
      :src="src"
      :alt="alt"
      @load="onLoad"
      class="image"
      :class="{ 'image-loaded': isLoaded }"
      :height="height"
      :width="width"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  src: string
  alt?: string
  height?: number
  width?: number
}

withDefaults(defineProps<Props>(), {
  alt: 'Image',
  height: 200,
  width: 200,
})

const isVisible = ref(false)
const isLoaded = ref(false)
const observer = ref<IntersectionObserver | null>(null)

function onLoad(): void {
  isLoaded.value = true
}

function handleIntersect(entries: IntersectionObserverEntry[]): void {
  const entry = entries[0]
  isVisible.value = entry.isIntersecting
}

onMounted(() => {
  observer.value = new IntersectionObserver(handleIntersect, {
    rootMargin: '50px',
    threshold: 0.1,
  })

  const imageContainer = document.querySelector('.image-container')
  if (imageContainer) {
    observer.value.observe(imageContainer)
  }
})

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect()
  }
})
</script>

<style scoped>
.image-container {
  overflow: hidden;
}

.image {
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.image-loaded {
  opacity: 1;
}

.image-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #666;
  font-size: 14px;
}
</style>
