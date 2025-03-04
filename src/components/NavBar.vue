<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { capitalize, ref } from 'vue'
import { COCKTAIL_CODES } from '@/constatnts/constants'

const cocktailCodes = ref(COCKTAIL_CODES)
</script>

<template>
  <nav>
    <ul class="menu">
      <li v-for="code in cocktailCodes" :key="code">
        <router-link :to="{ name: 'cocktail', params: { type: code } }">
          {{ capitalize(code) }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-grow: 0;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 4px;

      .router-link-active {
        color: $green;
      }
    }
  }
}
</style>
