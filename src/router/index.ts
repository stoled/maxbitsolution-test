import { createRouter, createWebHistory } from 'vue-router'
import { COCKTAIL_CODES } from '@/constatnts/constants'

const CocktailView = () => import('@/views/CocktailView.vue')
const NotFound = () => import('@/views/NotFound.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'cocktail', params: { type: COCKTAIL_CODES[0] } },
    },
    {
      path: '/cocktail/:type',
      name: 'cocktail',
      component: CocktailView,
      beforeEnter: (to, _, next) => {
        const type = to.params.type as string
        if (COCKTAIL_CODES.includes(type)) {
          next()
        } else {
          next({ name: 'not-found' })
        }
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
  ],
})

export default router
