import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/components/layout/AppLayout.vue'
import { myToken } from '@/stores/mytoken'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'indexViews',
          component: () => import('@/views/indexViews.vue'),
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'ErrorView',
          component: () => import('@/components/layout/ErrorView.vue')
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/AboutView.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/login/LoginView.vue')
    }

  ]
})

router.beforeEach((to, from, next) => {
  const store = myToken()
  // 判断路由是否需要权限
  if (to.matched.some(r => r.meta?.requiresAuth)) {
    if (!store.token.token) {
      next({ name: 'login', query: { redirect: to.fullPath } })
      return
    }
  }
  next() //继续执行

})

export default router
