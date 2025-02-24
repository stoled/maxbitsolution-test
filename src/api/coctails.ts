import axios from 'axios'
import { BASE_URL } from '@/utils/constants'
import type { Cocktail } from '@/types'

interface ApiResponse {
  drinks: Cocktail[] | null
}

export const getCocktailsByCode = async (cocktailCode: string): Promise<Cocktail[]> => {
  try {
    const response = await axios.get<ApiResponse>(`${BASE_URL}?s=${cocktailCode}`)
    return response.data.drinks || []
  } catch (error) {
    console.error(`Error fetching cocktails for code ${cocktailCode}:`, error)
    throw error
  }
}
