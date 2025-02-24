import { defineStore } from 'pinia'
import { getCocktailsByCode } from '@/api/coctails'
import type { Cocktail, CocktailsState } from '@/types'

export const useCocktailsStore = defineStore('cocktails', {
  state: (): CocktailsState => ({
    cocktails: {},
    loading: false,
    error: null,
  }),

  getters: {
    getCocktailsByType:
      (state) =>
      (type: string): Cocktail[] => {
        return state.cocktails[type] || []
      },
    hasLoadedType:
      (state) =>
      (type: string): boolean => {
        return !!state.cocktails[type]
      },
  },

  actions: {
    async fetchCocktailsByType(type: string): Promise<Cocktail[]> {
      // Skip if already loaded
      if (this.cocktails[type]) {
        return this.cocktails[type]
      }

      this.loading = true
      this.error = null

      try {
        const drinks = await getCocktailsByCode(type)
        this.cocktails[type] = drinks
        return drinks
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error)
        this.error = `Failed to load ${type} cocktails: ${errorMessage}`
        console.error(this.error)
        return []
      } finally {
        this.loading = false
      }
    },
  },
})
