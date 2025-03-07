<script setup lang="ts">
import { computed } from 'vue'
import VLazyImage from 'v-lazy-image'
import getIngridients from '@/utils/getIngridients'
import type { Cocktail, Ingredient } from '../types'

interface Props {
  cocktail: Cocktail
}

const { cocktail } = defineProps<Props>()

const ingredients = computed<Ingredient[]>(() => getIngridients(cocktail))
</script>

<template>
  <div class="cocktail-card">
    <div class="cocktail-info">
      <h3>{{ cocktail.strDrink }}</h3>
      <p>{{ cocktail.strCategory }}</p>
      <p>{{ cocktail.strAlcoholic }}</p>
      <p>{{ cocktail.strGlass }}</p>

      <div class="instructions">
        <h4>Instructions:</h4>
        <p>{{ cocktail.strInstructions }}</p>
      </div>

      <div class="ingredients">
        <h4>List of ingredients:</h4>
        <ul>
          <template v-for="(ingredient, index) in ingredients">
            <li :key="index" v-if="ingredient.name">
              {{ ingredient.measure }} : {{ ingredient.name }}
            </li>
          </template>
        </ul>
      </div>
    </div>

    <v-lazy-image
      :src="cocktail.strDrinkThumb"
      alt="props.cocktail.strDrink"
      class="cocktail-image"
    />
  </div>
</template>

<style lang="scss">
.cocktail-card {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #fff;
  border-radius: 4px;
  transition: 0.3s ease-in-out;

  &:hover {
    border-color: $green;
  }

  .cocktail-info {
    flex: 1;

    .instructions,
    .ingredients {
      margin-top: 10px;

      ul {
        list-style: none;
        padding-left: 20px;
      }
    }
  }

  .cocktail-image {
    width: 200px;
    height: 200px;
    border-radius: 4px;
  }
}
</style>
