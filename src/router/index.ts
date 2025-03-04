import { createRouter, createWebHistory } from 'vue-router'

import { COCKTAIL_CODES } from '@/constatnts/constants'

import CocktailView from '@/views/CocktailView.vue'
import NotFound from '@/views/NotFound.vue'

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
      beforeEnter: (to, from, next) => {
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
