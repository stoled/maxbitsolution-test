import { getCocktailsFromApi } from '@/api/coctails'

export function useCoctailsService() {
  async function getCocktailsByCode(type: string) {
    return await getCocktailsFromApi(type)
  }

  return {
    getCocktailsByCode,
  }
}
