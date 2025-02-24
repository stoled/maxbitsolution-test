<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useCocktailsStore } from '@/stores/coctails'
import CocktailCard from './CoctailCard.vue'
import type { Cocktail } from '@/types'

interface Props {
  type: string
}

const props = defineProps<Props>()

const store = useCocktailsStore()
const loading = ref<boolean>(false)
const error = ref<string | null>(null)

const cocktails = computed<Cocktail[]>(() => {
  return store.getCocktailsByType(props.type)
})

const capitalizedType = computed<string>(() => {
  return props.type.charAt(0).toUpperCase() + props.type.slice(1)
})

const fetchCocktails = async (): Promise<void> => {
  if (store.hasLoadedType(props.type)) {
    return
  }

  loading.value = true
  error.value = null

  try {
    await store.fetchCocktailsByType(props.type)
  } catch (err) {
    error.value = `Failed to load cocktails: ${err instanceof Error ? err.message : String(err)}`
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchCocktails()
})

watch(
  () => props.type,
  () => {
    fetchCocktails()
  },
)
</script>

<template>
  <div class="cocktail-list">
    <h2>{{ capitalizedType }} Cocktails</h2>

    <div v-if="loading" class="loading">Loading cocktails...</div>

    <div v-else-if="error" class="error">
      {{ error }}
    </div>

    <div v-else-if="!cocktails.length" class="no-results">No cocktails found for "{{ type }}".</div>

    <div v-else class="cocktails-container">
      <CocktailCard v-for="cocktail in cocktails" :key="cocktail.idDrink" :cocktail="cocktail" />
    </div>
  </div>
</template>
