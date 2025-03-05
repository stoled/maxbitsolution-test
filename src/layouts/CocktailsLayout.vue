<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <NavBar />

  <main>
    <slot></slot>
  </main>
</template>

<style lang="scss">
main {
  padding: 10px;
  flex-grow: 1;
}
</style>
