import axiosInstance from './index'
import type { Cocktail } from '@/types'

export const getCocktailsFromApi = async (type: string): Promise<Cocktail[]> => {
  const response = await axiosInstance.get(`/api/json/v1/1/search.php?s=${type}`)
  return response.data.drinks
}
