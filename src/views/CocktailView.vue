<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import CoctailCard from '@/components/CoctailCard.vue'
</script>

<template>
  <NavBar />

  <main>
    <CoctailCard />
  </main>
</template>

<style scoped>
main {
  padding: 2rem;
}
</style>
