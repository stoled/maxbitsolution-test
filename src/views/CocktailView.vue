<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import CoctailList from '@/components/CoctailList.vue'

const route = useRoute()
const type = computed<string>(() => route.params.type as string)
</script>

<template>
  <NavBar />

  <main>
    <CoctailList :type="type" />
  </main>
</template>

<style scoped>
main {
  padding: 2rem;
}
</style>
