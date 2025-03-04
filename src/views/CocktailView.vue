<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CoctailList from '@/components/CoctailList.vue'
import CocktailsLayout from '@/layouts/CocktailsLayout.vue'

const route = useRoute()
const type = computed<string>(() => route.params.type as string)
</script>

<template>
  <CocktailsLayout>
    <CoctailList :type="type" />
  </CocktailsLayout>
</template>
