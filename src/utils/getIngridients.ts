import type { Cocktail, Ingredient } from '../types'

const getIngridients = (cocktail: Cocktail) => {
  const ingridientsLength = Object.keys(cocktail).reduce((acc: number, key: string) => {
    if (key.includes('strIngredient')) {
      acc++
    }
    return acc
  }, 0)

  const result: Ingredient[] = []

  for (let i = 1; i <= ingridientsLength; i++) {
    const name = cocktail[`strIngredient${i}`]
    const measure = cocktail[`strMeasure${i}`]

    if (name) {
      result.push({
        name,
        measure: measure ? measure.trim() : 'to taste',
      })
    }
  }

  return result
}

export default getIngridients
