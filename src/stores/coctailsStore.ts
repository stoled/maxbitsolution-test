import { defineStore } from 'pinia'
import { useCoctailsService } from '@/services/coctailsService'
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
  },

  actions: {
    async fetchCocktailsByType(type: string): Promise<Cocktail[]> {
      const cocktailsService = useCoctailsService()

      this.loading = true
      this.error = null

      try {
        const drinks = await cocktailsService.getCocktailsByCode(type)
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
