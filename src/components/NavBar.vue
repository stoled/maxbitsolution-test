<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { COCKTAIL_CODES } from '@/utils/constants'

const cocktailCodes = ref(COCKTAIL_CODES)
</script>

<template>
  <nav>
    <ul class="menu">
      <li v-for="code in cocktailCodes" :key="code">
        <router-link :to="{ name: 'cocktail', params: { type: code } }">
          {{ code.charAt(0).toUpperCase() + code.slice(1) }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 4px;
    }
  }
}
</style>
