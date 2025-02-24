export interface Cocktail {
  idDrink: string
  strDrink: string
  strDrinkAlternate: string | null
  strTags: string | null
  strVideo: string | null
  strCategory: string
  strIBA: string | null
  strAlcoholic: string
  strGlass: string
  strInstructions: string
  strInstructionsES: string | null
  strInstructionsDE: string | null
  strInstructionsFR: string | null
  strInstructionsIT: string | null
  strInstructionsZH_HANS: string | null
  strInstructionsZH_HANT: string | null
  strDrinkThumb: string
  [key: string]: string | null // For strIngredientN and strMeasureN
}

export interface Ingredient {
  name: string
  measure: string | null
}

export interface CocktailsState {
  cocktails: Record<string, Cocktail[]>
  loading: boolean
  error: string | null
}
