import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueRouter from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#auth}}

import auth from '@/auth'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import AuthForbidden from '@/components/AuthForbidden'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import AuthCallback from '@/components/AuthCallback'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/auth}}

import Hello from '@/components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(VueRouter){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const routes = [
  {{#auth}}
  {
    path: '/forbidden',
    name: 'AuthForbidden',
    component: AuthForbidden{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  {
    path: '/callback',
    name: 'AuthCallback',
    component: AuthCallback{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  {{/auth}}
  {
    path: '/',
    name: 'Hello',
    component: Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    {{#auth}}
    // Uncomment out the following part to secure this route with authentication
    // meta: {
    //   auth: true{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    // }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    {{/auth}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
const router = new VueRouter({
  routes,
  mode: 'history'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#auth}}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (!auth.isLoggedIn()) {
      return next({
        name: 'AuthForbidden',
        query: {
          redirect: to.fullPath{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
        }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
  }

  return next(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/auth}}

export default router{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
