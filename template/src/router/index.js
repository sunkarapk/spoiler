import Vue from 'vue'
import VueRouter from 'vue-router'
{{#auth}}

import auth from '@/auth'
import AuthForbidden from '@/components/AuthForbidden'
import AuthCallback from '@/components/AuthCallback'
{{/auth}}

import Hello from '@/components/Hello'

Vue.use(VueRouter)

const routes = [
  {{#auth}}
  {
    path: '/forbidden',
    name: 'AuthForbidden',
    component: AuthForbidden
  },
  {
    path: '/callback',
    name: 'AuthCallback',
    component: AuthCallback
  },
  {{/auth}}
  {
    {{#auth}}
    // Uncomment out the following part to secure this route with authentication
    // meta: {
    //   auth: true,
    // },
    {{/auth}}
    path: '/',
    name: 'Hello',
    component: Hello
  }
]

/* eslint-disable no-new */
const router = new VueRouter({
  routes,
  mode: 'history'
})
{{#auth}}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (!auth.isLoggedIn()) {
      return next({
        name: 'AuthForbidden',
        query: {
          redirect: to.fullPath
        }
      })
    }
  }

  return next()
})
{{/auth}}

export default router
