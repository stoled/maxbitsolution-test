<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useCocktailsStore } from '@/stores/coctailsStore'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CocktailCard from './CoctailCard.vue'
import type { Cocktail } from '@/types'

const route = useRoute()
const type = computed<string>(() => route.params.type as string)

const { getCocktailsByType, fetchCocktailsByType, loading, error } = useCocktailsStore()

const cocktails = (): Cocktail[] => {
  return getCocktailsByType(type.value)
}

const fetchCocktails = async () => {
  await fetchCocktailsByType(type.value)
}

onMounted(() => {
  fetchCocktails()
})

watch(type, () => {
  fetchCocktails()
})
</script>

<template>
  <div class="cocktail-list">
    <div v-if="loading" class="loading">Loading cocktails...</div>

    <div v-else-if="error" class="error">
      {{ error }}
    </div>

    <div v-else class="cocktails-container">
      <CocktailCard v-for="cocktail in cocktails()" :key="cocktail.idDrink" :cocktail="cocktail" />
    </div>
  </div>
</template>
