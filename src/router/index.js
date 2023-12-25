import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: () => import('@/views/HomeView/index.vue')
    },
    {
      path: '/why-shaoke',
      name: 'WhyUsView',
      component: () => import('@/views/WhyUs/index.vue')
    },
    {
      path: '/solutions',
      name: 'SolutionsView',
      component: () => import('@/views/Solutions/index.vue')
    },
    {
      path: '/cases',
      name: 'CasesView',
      component: () => import('@/views/CaseSolutions/index.vue')
    },
    {
      path: '/contact-us',
      name: 'ContactUsView',
      component: () => import('@/views/ContactUs/index.vue')
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
