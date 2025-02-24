<script setup lang="ts">
import { computed } from 'vue'
// import LazyImage from './LazyImage.vue'
import type { Cocktail, Ingredient } from '../types'

interface Props {
  cocktail: Cocktail
}

const props = defineProps<Props>()

const ingredients = computed<Ingredient[]>(() => {
  const result: Ingredient[] = []
  for (let i = 1; i <= 15; i++) {
    const name = props.cocktail[`strIngredient${i}`]
    const measure = props.cocktail[`strMeasure${i}`]

    if (name) {
      result.push({
        name,
        measure: measure ? measure.trim() : null,
      })
    }
  }
  return result
})
</script>

<template>
  <div class="cocktail-card">
    <!-- <LazyImage :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" :height="200" /> -->
    <div class="cocktail-info">
      <h3>{{ cocktail.strDrink }}</h3>
      <p class="category"><span class="label">Category:</span> {{ cocktail.strCategory }}</p>
      <p class="glass"><span class="label">Glass:</span> {{ cocktail.strGlass }}</p>

      <div class="ingredients">
        <h4>Ingredients:</h4>
        <ul>
          <template v-for="(ingredient, index) in ingredients">
            <li :key="index" v-if="ingredient.name">
              {{ ingredient.name }}: {{ ingredient.measure || 'to taste' }}
            </li>
          </template>
        </ul>
      </div>

      <div class="instructions">
        <h4>Instructions:</h4>
        <p>{{ cocktail.strInstructions }}</p>
      </div>
    </div>
  </div>
</template>
